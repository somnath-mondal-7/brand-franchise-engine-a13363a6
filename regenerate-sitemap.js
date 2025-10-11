// Quick script to regenerate sitemap with new keywords
import { writeFileSync } from 'fs';
import { generateSitemapXml } from './src/utils/sitemapGenerator.ts';

console.log('🚀 Regenerating sitemap with USA-focused keywords...\n');

const sitemapXml = generateSitemapXml();
writeFileSync('./public/sitemap.xml', sitemapXml, 'utf-8');

const urlCount = (sitemapXml.match(/<url>/g) || []).length;

console.log('✅ Sitemap regenerated successfully!');
console.log(`📊 Total URLs: ${urlCount.toLocaleString()}`);
console.log(`📍 Location: public/sitemap.xml`);
console.log('\n🎯 New USA-focused keywords added:');
console.log('   - best franchise marketing agency in usa');
console.log('   - franchise marketing agency usa');
console.log('   - best franchise digital marketing agency in usa');
console.log('   - + 100 more USA-specific variations and misspellings');
console.log('\n📝 Next: Publish your site to deploy the updated sitemap!');
