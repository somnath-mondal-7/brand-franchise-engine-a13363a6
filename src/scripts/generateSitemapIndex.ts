// Build sitemap index with chunked sitemaps for SEO compliance
import { mkdirSync, writeFileSync, existsSync, rmSync } from 'fs';
import { join } from 'path';
import { 
  getAllUrls, 
  chunkArray, 
  buildSitemapXml, 
  buildSitemapIndexXml,
  getSitemapStats
} from '../utils/sitemapIndexBuilder';

console.log('🚀 Generating SEO-compliant sitemap index...\n');

const outDir = join(process.cwd(), 'public');
const sitemapsDir = join(outDir, 'sitemaps');

// Clean and recreate sitemaps directory
if (existsSync(sitemapsDir)) {
  rmSync(sitemapsDir, { recursive: true });
}
mkdirSync(sitemapsDir, { recursive: true });

// Get all URLs
const allUrls = getAllUrls();
const stats = getSitemapStats();

console.log('📊 Sitemap Statistics:');
console.log(`   Core Pages: ${stats.corePages}`);
console.log(`   Location Pages: ${stats.locationPages}`);
console.log(`   Keyword Pages: ${stats.keywordPages}`);
console.log(`   Service+Location Pages: ${stats.serviceLocationPages}`);
console.log(`   ─────────────────────────`);
console.log(`   Total URLs: ${stats.totalUrls.toLocaleString()}`);
console.log(`   Sitemaps to generate: ${stats.sitemapCount}\n`);

// Split into chunks (10,000 URLs per sitemap - well under Google's 50k limit)
const CHUNK_SIZE = 10000;
const chunks = chunkArray(allUrls, CHUNK_SIZE);

// Generate individual sitemaps
chunks.forEach((urls, index) => {
  const sitemapNumber = index + 1;
  const fileName = `sitemap-${sitemapNumber}.xml`;
  const filePath = join(sitemapsDir, fileName);
  const sitemapXml = buildSitemapXml(urls);
  
  writeFileSync(filePath, sitemapXml, 'utf-8');
  console.log(`   ✅ Generated ${fileName} (${urls.length.toLocaleString()} URLs)`);
});

// Generate sitemap index
const sitemapIndexXml = buildSitemapIndexXml(chunks.length);
const indexPath = join(outDir, 'sitemap.xml');
writeFileSync(indexPath, sitemapIndexXml, 'utf-8');

console.log(`\n✅ Sitemap index generated successfully!`);
console.log(`📍 Index: ${indexPath}`);
console.log(`📁 Sitemaps: ${sitemapsDir}/`);
console.log(`\n📝 Next Steps:`);
console.log(`   1. Publish your site`);
console.log(`   2. Go to Google Search Console`);
console.log(`   3. Submit sitemap: https://www.franchiseleadspro.com/sitemap.xml`);
console.log(`   4. Google will discover all ${stats.totalUrls.toLocaleString()} pages`);
