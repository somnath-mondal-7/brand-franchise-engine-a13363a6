import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

// Inline the location data import to avoid path alias issues in build scripts
// We dynamically import the actual data
const DOMAIN = 'https://www.franchiseleadspro.com';

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

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

// Main builder
(async () => {
  // Dynamic import with path resolution
  const locationsPath = join(process.cwd(), 'src', 'data', 'locations.ts');
  
  // Use tsx to handle TS imports - import directly since tsx handles it
  const { locationData, broadMarketingKeywords, seoKeywords } = await import(locationsPath);

  const currentDate = new Date().toISOString().split('T')[0];
  const all: SitemapUrl[] = [];

  // Core pages
  const corePages = [
    { path: '/', priority: '1.0', freq: 'weekly' },
    { path: '/about', priority: '0.9', freq: 'monthly' },
    { path: '/services', priority: '0.95', freq: 'weekly' },
    { path: '/contact', priority: '0.8', freq: 'monthly' },
    { path: '/blog', priority: '0.85', freq: 'daily' },
    { path: '/testimonials', priority: '0.8', freq: 'weekly' },
    { path: '/franchise-leads-india', priority: '0.95', freq: 'weekly' },
    { path: '/franchise-leads-usa', priority: '0.95', freq: 'weekly' },
    { path: '/franchise-leads-uk', priority: '0.9', freq: 'weekly' },
    { path: '/franchise-leads-canada', priority: '0.9', freq: 'weekly' },
    { path: '/franchise-leads-australia', priority: '0.9', freq: 'weekly' },
    { path: '/franchise-leads-dubai', priority: '0.9', freq: 'weekly' },
    { path: '/franchise-leads-kuwait', priority: '0.85', freq: 'weekly' },
    { path: '/buy-franchise-leads', priority: '0.9', freq: 'weekly' },
    { path: '/digital-marketing', priority: '0.85', freq: 'weekly' },
    { path: '/legal-terms/privacy-policy', priority: '0.4', freq: 'monthly' },
    { path: '/legal-terms/refund-satisfaction-guarantee-policy', priority: '0.4', freq: 'monthly' },
  ];

  corePages.forEach(p => {
    all.push({ loc: `${DOMAIN}${p.path}`, lastmod: currentDate, changefreq: p.freq, priority: p.priority });
  });

  // Location pages
  locationData.forEach((country: any) => {
    all.push({ loc: `${DOMAIN}/locations/${country.countryCode.toLowerCase()}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.8' });
    country.states.forEach((state: any) => {
      all.push({ loc: `${DOMAIN}/locations/${country.countryCode.toLowerCase()}/${state.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.75' });
      state.cities.forEach((city: any) => {
        all.push({ loc: `${DOMAIN}/locations/${country.countryCode.toLowerCase()}/${state.slug}/${city.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.7' });
      });
    });
  });

  // Keyword pages
  seoKeywords.forEach((keyword: string) => {
    const slug = keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    all.push({ loc: `${DOMAIN}/services/${slug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.7' });
  });

  // Service + location pages
  broadMarketingKeywords.forEach((service: string) => {
    const serviceSlug = service.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    locationData.forEach((country: any) => {
      const isPrimary = ['USA', 'IN'].includes(country.countryCode.toUpperCase());
      const basePriority = isPrimary ? 0.85 : 0.75;
      country.states.forEach((state: any) => {
        all.push({ loc: `${DOMAIN}/${serviceSlug}/${country.countryCode.toLowerCase()}/${state.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: basePriority.toString() });
        state.cities.forEach((city: any) => {
          all.push({ loc: `${DOMAIN}/${serviceSlug}/${country.countryCode.toLowerCase()}/${state.slug}/${city.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: (basePriority - 0.05).toString() });
        });
      });
    });
  });

  console.log(`📊 Total URLs: ${all.length}`);

  // Write chunked sitemaps
  const outDir = join(process.cwd(), 'public');
  const sitemapsDir = join(outDir, 'sitemaps');
  mkdirSync(sitemapsDir, { recursive: true });

  const CHUNK_SIZE = 10000;
  const groups = chunk(all, CHUNK_SIZE);

  const indexEntries: string[] = [];

  groups.forEach((urls, i) => {
    const fileName = `sitemap-${i + 1}.xml`;
    writeFileSync(join(sitemapsDir, fileName), buildSitemap(urls), 'utf-8');
    indexEntries.push(`  <sitemap>\n    <loc>${DOMAIN}/sitemaps/${fileName}</loc>\n    <lastmod>${currentDate}</lastmod>\n  </sitemap>`);
  });

  // Add blog sitemap entry
  indexEntries.push(`  <sitemap>\n    <loc>${DOMAIN}/sitemap-blog.xml</loc>\n    <lastmod>${currentDate}</lastmod>\n  </sitemap>`);

  const indexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexEntries.join('\n')}\n</sitemapindex>`;
  writeFileSync(join(outDir, 'sitemap.xml'), indexXml, 'utf-8');

  console.log(`✅ Generated sitemap index with ${groups.length} chunk files (${CHUNK_SIZE} URLs each)`);
})();
