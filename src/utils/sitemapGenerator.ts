import { locationData, broadMarketingKeywords } from '@/data/locations';

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

// Generate ONLY high-value location pages (countries only, no duplicate city pages)
export const generateLocationUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split('T')[0];

  locationData.forEach(country => {
    // Only country level pages to avoid thin content
    const countryUrl = `https://www.franchiseleadshq.com/locations/${country.countryCode.toLowerCase()}`;
    urls.push({
      loc: countryUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    });
  });

  return urls;
};

// REMOVED: No separate keyword URLs - these create thin/duplicate content
export const generateKeywordUrls = (): SitemapUrl[] => {
  return [];
};

// Generate ONLY essential service + location combinations (~100 pages max)
export const generateServiceLocationUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split('T')[0];

  // Only use the 5 core service keywords
  broadMarketingKeywords.forEach(service => {
    const serviceSlug = service.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    locationData.forEach(country => {
      // Only generate state-level pages for USA and India (primary markets)
      const isPrimaryMarket = ['USA', 'IN'].includes(country.countryCode.toUpperCase());
      
      if (isPrimaryMarket) {
        country.states.forEach(state => {
          // Service + State pages only
          const stateUrl = `https://www.franchiseleadshq.com/${serviceSlug}/${country.countryCode.toLowerCase()}/${state.slug}`;
          urls.push({
            loc: stateUrl,
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: country.countryCode === 'IN' ? '0.9' : '0.8'
          });

          // Only top 1 city per state for primary services
          if (state.cities.length > 0) {
            const topCity = state.cities[0];
            const cityUrl = `https://www.franchiseleadshq.com/${serviceSlug}/${country.countryCode.toLowerCase()}/${state.slug}/${topCity.slug}`;
            urls.push({
              loc: cityUrl,
              lastmod: currentDate,
              changefreq: 'weekly',
              priority: country.countryCode === 'IN' ? '0.85' : '0.75'
            });
          }
        });
      }
    });
  });

  console.log(`✅ Generated ${urls.length} optimized service+location URLs`);
  return urls;
};

export const generateSitemapXml = (): string => {
  const locationUrls = generateLocationUrls();
  const serviceLocationUrls = generateServiceLocationUrls();
  const allUrls = [...locationUrls, ...serviceLocationUrls];
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
    <loc>https://www.franchiseleadshq.com/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/testimonials</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Country-Specific Landing Pages -->
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-india</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-usa</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-uk</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-canada</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-australia</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-dubai</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-kuwait</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/buy-franchise-leads</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/digital-marketing</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>
  
  <!-- Legal Pages -->
  <url>
    <loc>https://www.franchiseleadshq.com/legal-terms/privacy-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/legal-terms/refund-satisfaction-guarantee-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>${urlsXml}
</urlset>`;
};
