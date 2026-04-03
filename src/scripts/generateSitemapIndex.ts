// Build sitemap index with chunked sitemaps for SEO compliance
import { mkdirSync, writeFileSync, existsSync, rmSync } from 'fs';
import { join } from 'path';
import {
  getAllUrls,
  chunkArray,
  buildSitemapXml,
  buildSitemapIndexXml,
  getSitemapStats,
} from '../utils/sitemapIndexBuilder';

const DOMAIN = 'https://www.franchiseleadspro.com';
const SUPABASE_URL = 'https://yquuidpajigvecyonqir.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdXVpZHBhamlndmVjeW9ucWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTM1MDMsImV4cCI6MjA3NDM2OTUwM30.FIpWeiS_2B98HSE2Z2yxuOGp4gkO74rYIrAp-Aj2YTg';

type BlogPost = {
  slug: string;
  published_at: string | null;
  updated_at: string | null;
};

const escapeXml = (value: string): string => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const formatDate = (value?: string | null): string => {
  if (!value) return new Date().toISOString().split('T')[0];

  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime())
    ? new Date().toISOString().split('T')[0]
    : parsed.toISOString().split('T')[0];
};

const generateStaticBlogSitemapXml = async (): Promise<string> => {
  const currentDate = formatDate();
  const urls = [
    {
      loc: `${DOMAIN}/blog`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: '0.9',
    },
  ];

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_posts?select=slug,published_at,updated_at&is_published=eq.true&order=published_at.desc`,
      {
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Supabase returned ${response.status}`);
    }

    const posts = (await response.json()) as BlogPost[];

    posts.forEach((post) => {
      if (!post.slug) return;

      urls.push({
        loc: `${DOMAIN}/blog/${post.slug}`,
        lastmod: formatDate(post.updated_at || post.published_at),
        changefreq: 'weekly',
        priority: '0.8',
      });
    });

    console.log(`   ✅ Generated sitemap-blog.xml (${urls.length.toLocaleString()} URLs)`);
  } catch (error) {
    console.warn('   ⚠️ Blog sitemap fetch failed, falling back to /blog only:', error);
  }

  const urlEntries = urls.map((url) => `  <url>\n    <loc>${escapeXml(url.loc)}</loc>\n    <lastmod>${url.lastmod}</lastmod>\n    <changefreq>${url.changefreq}</changefreq>\n    <priority>${url.priority}</priority>\n  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;
};

const main = async () => {
  console.log('🚀 Generating SEO-compliant sitemap index...\n');

  const outDir = join(process.cwd(), 'public');
  const sitemapsDir = join(outDir, 'sitemaps');

  if (existsSync(sitemapsDir)) {
    rmSync(sitemapsDir, { recursive: true });
  }
  mkdirSync(sitemapsDir, { recursive: true });

  const allUrls = getAllUrls();
  const stats = getSitemapStats();

  console.log('📊 Sitemap Statistics:');
  console.log(`   Core Pages: ${stats.corePages}`);
  console.log(`   Location Pages: ${stats.locationPages}`);
  console.log(`   Keyword Pages: ${stats.keywordPages}`);
  console.log(`   Service+Location Pages: ${stats.serviceLocationPages}`);
  console.log('   ─────────────────────────');
  console.log(`   Total URLs: ${stats.totalUrls.toLocaleString()}`);
  console.log(`   Sitemaps to generate: ${stats.sitemapCount}\n`);

  const CHUNK_SIZE = 10000;
  const chunks = chunkArray(allUrls, CHUNK_SIZE);

  chunks.forEach((urls, index) => {
    const sitemapNumber = index + 1;
    const fileName = `sitemap-${sitemapNumber}.xml`;
    const filePath = join(sitemapsDir, fileName);
    const sitemapXml = buildSitemapXml(urls);

    writeFileSync(filePath, sitemapXml, 'utf-8');
    console.log(`   ✅ Generated ${fileName} (${urls.length.toLocaleString()} URLs)`);
  });

  const sitemapIndexXml = buildSitemapIndexXml(chunks.length);
  const indexPath = join(outDir, 'sitemap.xml');
  writeFileSync(indexPath, sitemapIndexXml, 'utf-8');

  const blogSitemapXml = await generateStaticBlogSitemapXml();
  const blogSitemapPath = join(outDir, 'sitemap-blog.xml');
  writeFileSync(blogSitemapPath, blogSitemapXml, 'utf-8');

  console.log('\n✅ Sitemap index generated successfully!');
  console.log(`📍 Index: ${indexPath}`);
  console.log(`📍 Blog sitemap: ${blogSitemapPath}`);
  console.log(`📁 Sitemaps: ${sitemapsDir}/`);
  console.log('\n📝 Next Steps:');
  console.log('   1. Publish your site');
  console.log(`   2. Go to Google Search Console`);
  console.log(`   3. Submit sitemap: ${DOMAIN}/sitemap.xml`);
  console.log(`   4. Google will discover all ${stats.totalUrls.toLocaleString()} pages`);
};

main().catch((error) => {
  console.error('❌ Failed to generate sitemap files:', error);
  process.exit(1);
});
