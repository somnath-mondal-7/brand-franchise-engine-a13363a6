// Script to regenerate sitemap with all pages including new service+location combinations
import { generateSitemapXml } from '../utils/sitemapGenerator';
import { writeFileSync } from 'fs';
import { join } from 'path';

console.log('🚀 Regenerating sitemap with all 10,000+ pages...\n');

const sitemapXml = generateSitemapXml();
const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');

writeFileSync(sitemapPath, sitemapXml, 'utf-8');

const urlCount = (sitemapXml.match(/<url>/g) || []).length;

console.log('✅ Sitemap regenerated successfully!');
console.log(`📊 Total URLs: ${urlCount.toLocaleString()}`);
console.log(`📍 Location: ${sitemapPath}`);
console.log('\n📝 Next steps:');
console.log('1. Click "Publish" button to deploy your site');
console.log('2. Go to Google Search Console');
console.log('3. Resubmit your sitemap (it will auto-update)');
console.log('4. Google will discover all new pages within 24-48 hours');
