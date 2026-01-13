import { locationData, broadMarketingKeywords, seoKeywords } from '@/data/locations';

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

// Generate ALL location pages (country + state + city levels)
export const generateLocationUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split('T')[0];

  locationData.forEach(country => {
    // Country level page
    const countryUrl = `https://www.franchiseleadshq.com/locations/${country.countryCode.toLowerCase()}`;
    urls.push({
      loc: countryUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    });

    // State/region level pages
    country.states.forEach(state => {
      const stateUrl = `https://www.franchiseleadshq.com/locations/${country.countryCode.toLowerCase()}/${state.slug}`;
      urls.push({
        loc: stateUrl,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: '0.75'
      });

      // City level pages
      state.cities.forEach(city => {
        const cityUrl = `https://www.franchiseleadshq.com/locations/${country.countryCode.toLowerCase()}/${state.slug}/${city.slug}`;
        urls.push({
          loc: cityUrl,
          lastmod: currentDate,
          changefreq: 'weekly',
          priority: '0.7'
        });
      });
    });
  });

  return urls;
};

// Generate keyword/service pages
export const generateKeywordUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split('T')[0];

  seoKeywords.forEach(keyword => {
    const keywordSlug = keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const keywordUrl = `https://www.franchiseleadshq.com/services/${keywordSlug}`;
    urls.push({
      loc: keywordUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    });
  });

  return urls;
};

// Generate ALL service + location combinations
export const generateServiceLocationUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split('T')[0];

  broadMarketingKeywords.forEach(service => {
    const serviceSlug = service.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    locationData.forEach(country => {
      // Determine priority based on market
      const isPrimaryMarket = ['USA', 'IN'].includes(country.countryCode.toUpperCase());
      const basePriority = isPrimaryMarket ? 0.85 : 0.75;

      country.states.forEach(state => {
        // Service + State pages
        const stateUrl = `https://www.franchiseleadshq.com/${serviceSlug}/${country.countryCode.toLowerCase()}/${state.slug}`;
        urls.push({
          loc: stateUrl,
          lastmod: currentDate,
          changefreq: 'weekly',
          priority: basePriority.toString()
        });

        // Service + City pages (ALL cities)
        state.cities.forEach(city => {
          const cityUrl = `https://www.franchiseleadshq.com/${serviceSlug}/${country.countryCode.toLowerCase()}/${state.slug}/${city.slug}`;
          urls.push({
            loc: cityUrl,
            lastmod: currentDate,
            changefreq: 'weekly',
            priority: (basePriority - 0.05).toString()
          });
        });
      });
    });
  });

  console.log(`✅ Generated ${urls.length} service+location URLs`);
  return urls;
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
