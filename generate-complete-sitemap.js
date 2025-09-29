// Generate complete sitemap with all location and keyword pages
const { generateSitemapXml } = require('./src/utils/sitemapGenerator.ts');

console.log('Generating complete sitemap...');
const sitemapXml = generateSitemapXml();
console.log(sitemapXml);