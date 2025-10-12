import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { generateLocationUrls, generateKeywordUrls, generateServiceLocationUrls, type SitemapUrl } from '../utils/sitemapGenerator';

// Split an array into chunks
const chunk = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

// Build a single sitemap XML string from urls
const buildSitemap = (urls: SitemapUrl[]) => {
  const items = urls.map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`;
};

// Main builder: creates /public/sitemap.xml index + chunked sitemaps under /public/sitemaps
(() => {
  const outDir = join(process.cwd(), 'public');
  const sitemapsDir = join(outDir, 'sitemaps');
  mkdirSync(sitemapsDir, { recursive: true });

  const all: SitemapUrl[] = [
    ...generateLocationUrls(),
    ...generateKeywordUrls(),
    ...generateServiceLocationUrls(),
  ];

  // Google limits: 50,000 URLs or 50MB per file. We'll use 10k to be safe.
  const CHUNK_SIZE = 10000;
  const groups = chunk(all, CHUNK_SIZE);

  const indexEntries: string[] = [];
  const today = new Date().toISOString().split('T')[0];

  groups.forEach((urls, i) => {
    const fileName = `sitemap-${i + 1}.xml`;
    const filePath = join(sitemapsDir, fileName);
    writeFileSync(filePath, buildSitemap(urls), 'utf-8');

    const sitemapUrl = `https://www.franchiseleadshq.com/sitemaps/${fileName}`;
    indexEntries.push(`  <sitemap>\n    <loc>${sitemapUrl}</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>`);
  });

  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexEntries.join('\n')}\n</sitemapindex>`;

  // Write index to /public/sitemap.xml (already referenced in robots.txt)
  writeFileSync(join(outDir, 'sitemap.xml'), indexXml, 'utf-8');

  console.log(`✅ Generated sitemap index with ${groups.length} files (chunk size ${CHUNK_SIZE}).`);
  console.log(`📍 Index: ${join(outDir, 'sitemap.xml')}`);
})();
