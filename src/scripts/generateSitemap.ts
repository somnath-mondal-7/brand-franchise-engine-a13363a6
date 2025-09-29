import { generateSitemapXml } from '@/utils/sitemapGenerator';

// Generate the complete sitemap XML
const sitemapXml = generateSitemapXml();

// Log the sitemap - you can copy this and save it as sitemap.xml
console.log('=== COMPLETE SITEMAP XML ===');
console.log(sitemapXml);
console.log('=== END SITEMAP ===');

// Also log some stats
import { locationData, seoKeywords, serviceKeywords } from '@/data/locations';

let totalUrls = 0;
locationData.forEach(country => {
  country.states.forEach(state => {
    totalUrls++; // State page
    totalUrls += state.cities.length; // City pages
  });
});
totalUrls += seoKeywords.length + serviceKeywords.length; // Keyword pages
totalUrls += 15; // Main pages (home, about, services, etc.)

console.log(`\n=== SITEMAP STATS ===`);
console.log(`Total URLs: ${totalUrls}`);
console.log(`Location Pages: ${totalUrls - seoKeywords.length - serviceKeywords.length - 15}`);
console.log(`Keyword Pages: ${seoKeywords.length + serviceKeywords.length}`);
console.log(`Main Pages: 15`);