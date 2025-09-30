import { writeFileSync } from 'fs';
import { join } from 'path';
import { generateSitemapXml } from '../utils/sitemapGenerator';

// Generate the complete sitemap
const sitemapXml = generateSitemapXml();

// Write to public folder
const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml');
writeFileSync(sitemapPath, sitemapXml, 'utf-8');

console.log('✅ Complete sitemap generated successfully!');
console.log(`📍 Location: ${sitemapPath}`);
console.log(`📊 Total URLs: ${(sitemapXml.match(/<url>/g) || []).length}`);
