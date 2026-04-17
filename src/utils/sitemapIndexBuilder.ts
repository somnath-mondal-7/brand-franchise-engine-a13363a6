import { locationData } from '@/data/locations';
import { highValueKeywordPages, highValueServiceKeywords } from '@/utils/programmaticSeo';

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

const DOMAIN = 'https://www.franchiseleadspro.com';

// Get today's date in YYYY-MM-DD format
export const getTodayDate = (): string => {
  return new Date().toISOString().split('T')[0];
};

// Generate core static pages
export const generateCorePages = (): SitemapUrl[] => {
  const currentDate = getTodayDate();
  return [
    { loc: `${DOMAIN}/`, lastmod: currentDate, changefreq: 'weekly', priority: '1.0' },
    { loc: `${DOMAIN}/about`, lastmod: currentDate, changefreq: 'monthly', priority: '0.9' },
    { loc: `${DOMAIN}/services`, lastmod: currentDate, changefreq: 'weekly', priority: '0.95' },
    { loc: `${DOMAIN}/contact`, lastmod: currentDate, changefreq: 'monthly', priority: '0.8' },
    { loc: `${DOMAIN}/blog`, lastmod: currentDate, changefreq: 'daily', priority: '0.85' },
    { loc: `${DOMAIN}/testimonials`, lastmod: currentDate, changefreq: 'weekly', priority: '0.8' },
    { loc: `${DOMAIN}/franchise-leads-india`, lastmod: currentDate, changefreq: 'weekly', priority: '0.95' },
    { loc: `${DOMAIN}/franchise-leads-usa`, lastmod: currentDate, changefreq: 'weekly', priority: '0.95' },
    { loc: `${DOMAIN}/franchise-leads-uk`, lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/franchise-leads-canada`, lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/franchise-leads-australia`, lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/franchise-leads-dubai`, lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/franchise-leads-kuwait`, lastmod: currentDate, changefreq: 'weekly', priority: '0.85' },
    { loc: `${DOMAIN}/buy-franchise-leads`, lastmod: currentDate, changefreq: 'weekly', priority: '0.9' },
    { loc: `${DOMAIN}/digital-marketing`, lastmod: currentDate, changefreq: 'weekly', priority: '0.85' },
  ];
};

// Generate location pages (country/state/city)
export const generateLocationUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = getTodayDate();

  locationData.forEach(country => {
    urls.push({ loc: `${DOMAIN}/locations/${country.countryCode.toLowerCase()}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.8' });

    country.states.forEach(state => {
      urls.push({ loc: `${DOMAIN}/locations/${country.countryCode.toLowerCase()}/${state.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.75' });

      state.cities.forEach(city => {
        urls.push({ loc: `${DOMAIN}/locations/${country.countryCode.toLowerCase()}/${state.slug}/${city.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.7' });
      });
    });
  });

  return urls;
};

// Generate keyword/service pages
export const generateKeywordUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = getTodayDate();

  highValueKeywordPages.forEach(keyword => {
    const keywordSlug = keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    urls.push({ loc: `${DOMAIN}/services/${keywordSlug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.7' });
  });

  return urls;
};

// Generate service + location pages
export const generateServiceLocationUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = getTodayDate();

  highValueServiceKeywords.forEach(service => {
    const serviceSlug = service.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    locationData.forEach(country => {
      const isPrimaryMarket = ['USA', 'IN'].includes(country.countryCode.toUpperCase());
      const basePriority = isPrimaryMarket ? 0.85 : 0.75;

      country.states.forEach(state => {
        urls.push({ loc: `${DOMAIN}/${serviceSlug}/${country.countryCode.toLowerCase()}/${state.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: basePriority.toFixed(2) });

        state.cities.forEach(city => {
          urls.push({ loc: `${DOMAIN}/${serviceSlug}/${country.countryCode.toLowerCase()}/${state.slug}/${city.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: (basePriority - 0.05).toFixed(2) });
        });
      });
    });
  });

  return urls;
};

// Get all URLs combined
export const getAllUrls = (): SitemapUrl[] => {
  return [
    ...generateCorePages(),
    ...generateLocationUrls(),
    ...generateKeywordUrls(),
    ...generateServiceLocationUrls(),
  ];
};

// Split array into chunks
export const chunkArray = <T>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

// Build single sitemap XML
export const buildSitemapXml = (urls: SitemapUrl[]): string => {
  const urlEntries = urls.map(u => 
    `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  ).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;
};

// Build sitemap index XML
export const buildSitemapIndexXml = (sitemapCount: number): string => {
  const currentDate = getTodayDate();
  const entries: string[] = [];
  
  for (let i = 1; i <= sitemapCount; i++) {
    entries.push(`  <sitemap>\n    <loc>${DOMAIN}/sitemaps/sitemap-${i}.xml</loc>\n    <lastmod>${currentDate}</lastmod>\n  </sitemap>`);
  }
  
  // Add blog sitemap
  entries.push(`  <sitemap>\n    <loc>${DOMAIN}/sitemap-blog.xml</loc>\n    <lastmod>${currentDate}</lastmod>\n  </sitemap>`);
  
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</sitemapindex>`;
};

// Calculate sitemap stats
export const getSitemapStats = () => {
  const allUrls = getAllUrls();
  const chunkSize = 10000;
  const chunks = chunkArray(allUrls, chunkSize);
  
  return {
    totalUrls: allUrls.length,
    sitemapCount: chunks.length,
    chunkSize,
    corePages: generateCorePages().length,
    locationPages: generateLocationUrls().length,
    keywordPages: generateKeywordUrls().length,
    serviceLocationPages: generateServiceLocationUrls().length,
  };
};
