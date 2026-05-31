import { locationData } from '@/data/locations';
import { highValueKeywordPages } from '@/utils/programmaticSeo';
import { hasCuratedInsight } from '@/utils/locationContent';

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

// Sitemap policy (May 2026): only emit URLs that are backed by genuinely
// unique curated content. Templated city/service permutations were the
// source of "Crawled – currently not indexed" at scale, so they are
// excluded from the sitemap and noindexed at render time.

export const generateLocationUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split('T')[0];

  locationData.forEach(country => {
    const cc = country.countryCode.toLowerCase();
    if (!hasCuratedInsight(country.countryCode)) return;

    urls.push({ loc: `${DOMAIN}/locations/${cc}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.8' });

    country.states.forEach(state => {
      if (!hasCuratedInsight(country.countryCode, state.slug)) return;
      urls.push({ loc: `${DOMAIN}/locations/${cc}/${state.slug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.75' });
    });
  });

  return urls;
};

// Generate keyword/service pages
export const generateKeywordUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split('T')[0];

  highValueKeywordPages.forEach(keyword => {
    const keywordSlug = keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    urls.push({ loc: `${DOMAIN}/services/${keywordSlug}`, lastmod: currentDate, changefreq: 'weekly', priority: '0.7' });
  });

  return urls;
};

// Service+location URLs are intentionally excluded from sitemap discovery.
// Even curated combinations have been the main source of large-scale
// "Crawled – currently not indexed" reports, so we only keep country/state
// location hubs plus core service pages in XML.
export const generateServiceLocationUrls = (): SitemapUrl[] => {
  return [];
};

export const generateSitemapXml = (): string => {
  const locationUrls = generateLocationUrls();
  const keywordUrls = generateKeywordUrls();
  const serviceLocationUrls = generateServiceLocationUrls();
  const allUrls = [...locationUrls, ...keywordUrls, ...serviceLocationUrls];
  const currentDate = new Date().toISOString().split('T')[0];

  const urlsXml = allUrls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Pages -->
  <url>
    <loc>${DOMAIN}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${DOMAIN}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${DOMAIN}/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>${DOMAIN}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${DOMAIN}/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>${DOMAIN}/testimonials</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Country-Specific Landing Pages -->
  <url>
    <loc>${DOMAIN}/franchise-leads-india</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>${DOMAIN}/franchise-leads-usa</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>${DOMAIN}/franchise-leads-uk</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${DOMAIN}/franchise-leads-canada</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${DOMAIN}/franchise-leads-australia</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${DOMAIN}/franchise-leads-dubai</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${DOMAIN}/franchise-leads-kuwait</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>${DOMAIN}/buy-franchise-leads</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${DOMAIN}/digital-marketing</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  
  <!-- Legal Pages -->
  <url>
    <loc>${DOMAIN}/legal-terms/privacy-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>${DOMAIN}/legal-terms/refund-satisfaction-guarantee-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>${urlsXml}
</urlset>`;
};
