import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const DOMAIN = 'https://www.franchiseleadspro.com';

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

const slugify = (value: string) => value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

(async () => {
  console.log('🗺️ Generating single unified sitemap.xml...');

  const locationsPath = join(process.cwd(), 'src', 'data', 'locations.ts');
  const { locationData, broadMarketingKeywords, seoKeywords } = await import(locationsPath);

  const currentDate = new Date().toISOString().split('T')[0];
  const all: SitemapUrl[] = [];

  const corePages = [
    { path: '/', priority: '1.00', freq: 'weekly' },
    { path: '/about', priority: '0.90', freq: 'monthly' },
    { path: '/services', priority: '0.95', freq: 'weekly' },
    { path: '/contact', priority: '0.80', freq: 'monthly' },
    { path: '/blog', priority: '0.85', freq: 'daily' },
    { path: '/testimonials', priority: '0.80', freq: 'weekly' },
    { path: '/franchise-leads-india', priority: '0.95', freq: 'weekly' },
    { path: '/franchise-leads-usa', priority: '0.95', freq: 'weekly' },
    { path: '/franchise-leads-uk', priority: '0.90', freq: 'weekly' },
    { path: '/franchise-leads-canada', priority: '0.90', freq: 'weekly' },
    { path: '/franchise-leads-australia', priority: '0.90', freq: 'weekly' },
    { path: '/franchise-leads-dubai', priority: '0.90', freq: 'weekly' },
    { path: '/franchise-leads-kuwait', priority: '0.85', freq: 'weekly' },
    { path: '/buy-franchise-leads', priority: '0.90', freq: 'weekly' },
    { path: '/digital-marketing', priority: '0.85', freq: 'weekly' },
    { path: '/legal-terms/privacy-policy', priority: '0.40', freq: 'monthly' },
    { path: '/legal-terms/refund-satisfaction-guarantee-policy', priority: '0.40', freq: 'monthly' },
  ];

  corePages.forEach((page) => {
    all.push({ loc: `${DOMAIN}${page.path}`, lastmod: currentDate, changefreq: page.freq, priority: page.priority });
  });

  locationData.forEach((country: any) => {
    const countryCode = country.countryCode.toLowerCase();
    all.push({ loc: `${DOMAIN}/locations/${countryCode}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.80' });

    country.states.forEach((state: any) => {
      all.push({ loc: `${DOMAIN}/locations/${countryCode}/${state.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.75' });

      state.cities.forEach((city: any) => {
        all.push({ loc: `${DOMAIN}/locations/${countryCode}/${state.slug}/${city.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.70' });
      });
    });
  });

  seoKeywords.forEach((keyword: string) => {
    all.push({ loc: `${DOMAIN}/services/${slugify(keyword)}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.70' });
  });

  broadMarketingKeywords.forEach((service: string) => {
    const serviceSlug = slugify(service);

    locationData.forEach((country: any) => {
      const countryCode = country.countryCode.toLowerCase();
      const isPrimary = ['usa', 'in'].includes(countryCode);
      const basePriority = isPrimary ? 0.85 : 0.75;

      country.states.forEach((state: any) => {
        all.push({
          loc: `${DOMAIN}/${serviceSlug}/${countryCode}/${state.slug}`,
          lastmod: currentDate,
          changefreq: 'weekly',
          priority: basePriority.toFixed(2),
        });

        state.cities.forEach((city: any) => {
          all.push({
            loc: `${DOMAIN}/${serviceSlug}/${countryCode}/${state.slug}/${city.slug}`,
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: (basePriority - 0.05).toFixed(2),
          });
        });
      });
    });
  });

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
