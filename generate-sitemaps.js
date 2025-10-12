// Build sitemap index and chunked sitemaps with gzip compression (CommonJS for easy Node usage)
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const { generateLocationUrls, generateKeywordUrls, generateServiceLocationUrls } = require('./src/utils/sitemapGenerator.ts');

const chunk = (arr, size) => {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
};

const buildSitemap = (urls) => {
  const items = urls.map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`;
};

console.log('🚀 Generating sitemap index with chunked sitemaps...');

const outDir = path.join(process.cwd(), 'public');
const mapsDir = path.join(outDir, 'sitemaps');
fs.mkdirSync(mapsDir, { recursive: true });

const all = [
  ...generateLocationUrls(),
  ...generateKeywordUrls(),
  ...generateServiceLocationUrls(),
];

const CHUNK = 10000;
const groups = chunk(all, CHUNK);
const today = new Date().toISOString().split('T')[0];

const indexEntries = [];

groups.forEach((urls, i) => {
  const file = `sitemap-${i + 1}.xml`;
  const gzipFile = `${file}.gz`;
  const abs = path.join(mapsDir, file);
  const gzipAbs = path.join(mapsDir, gzipFile);
  
  const xmlContent = buildSitemap(urls);
  
  // Write regular XML
  fs.writeFileSync(abs, xmlContent, 'utf-8');
  
  // Write gzipped version
  const compressed = zlib.gzipSync(xmlContent);
  fs.writeFileSync(gzipAbs, compressed);
  
  // Add both to index (Google prefers gzip)
  const gzipLoc = `https://www.franchiseleadshq.com/sitemaps/${gzipFile}`;
  indexEntries.push(`  <sitemap>\n    <loc>${gzipLoc}</loc>\n    <lastmod>${today}</lastmod>\n  </sitemap>`);
});

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexEntries.join('\n')}\n</sitemapindex>`;

fs.writeFileSync(path.join(outDir, 'sitemap.xml'), indexXml, 'utf-8');

console.log(`✅ Wrote ${groups.length} sitemap files (XML + GZIP) and index at public/sitemap.xml`);
console.log(`📦 Total URLs: ${all.length.toLocaleString()}`);
