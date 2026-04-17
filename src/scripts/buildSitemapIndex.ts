import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { getAllUrls } from '../utils/sitemapIndexBuilder';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

const buildSitemap = (urls: SitemapUrl[]) => {
  const items = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`;
};

(async () => {
  console.log('🗺️ Generating single unified curated sitemap.xml...');

  const all = getAllUrls();

  const sitemapXml = buildSitemap(all);

  const publicDir = join(process.cwd(), 'public');
  mkdirSync(publicDir, { recursive: true });
  writeFileSync(join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');

  const distDir = join(process.cwd(), 'dist');
  if (existsSync(distDir)) {
    writeFileSync(join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
  }

  console.log(`✅ Unified sitemap.xml generated with ${all.length.toLocaleString()} URLs`);
})();
