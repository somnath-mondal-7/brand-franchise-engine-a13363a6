import { locationData, seoKeywords, serviceKeywords, broadMarketingKeywords } from '@/data/locations';

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export const generateLocationUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split('T')[0];

  locationData.forEach(country => {
    // Country level pages
    const countryUrl = `https://www.franchiseleadshq.com/locations/${country.countryCode.toLowerCase()}`;
    urls.push({
      loc: countryUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    });

    country.states.forEach(state => {
      // State/region level pages
      const stateUrl = `https://www.franchiseleadshq.com/locations/${country.countryCode.toLowerCase()}/${state.slug}`;
      urls.push({
        loc: stateUrl,
        lastmod: currentDate,
        changefreq: 'weekly',
        priority: '0.8'
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

export const generateKeywordUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split('T')[0];
  const allKeywords = [...seoKeywords, ...serviceKeywords, ...broadMarketingKeywords];

  allKeywords.forEach(keyword => {
    const keywordSlug = keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const keywordUrl = `https://www.franchiseleadshq.com/services/${keywordSlug}`;
    
    urls.push({
      loc: keywordUrl,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.6'
    });
  });

  return urls;
};

export const generateServiceLocationUrls = (): SitemapUrl[] => {
  const urls: SitemapUrl[] = [];
  const currentDate = new Date().toISOString().split('T')[0];

  // OPTIMIZED: Generate only high-quality service + location combinations
  // Reduced from 22K+ pages to ~2K pages for better indexing
  
  // Special emphasis keywords for India market
  const indiaEmphasisKeywords = [
    'franchise recruitment',
    'franchise matchmaking', 
    'franchise expansion'
  ];

  broadMarketingKeywords.forEach(service => {
    const serviceSlug = service.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    locationData.forEach(country => {
      // Include India for emphasis keywords, or major countries for all services
      const majorCountries = ['USA', 'UK', 'CA', 'AU'];
      const isIndiaEmphasis = country.countryCode.toUpperCase() === 'IN' && 
                              indiaEmphasisKeywords.includes(service.toLowerCase());
      
      if (!majorCountries.includes(country.countryCode.toUpperCase()) && !isIndiaEmphasis) {
        return; // Skip countries except major ones and India for emphasis keywords
      }

      country.states.forEach(state => {
        // Higher priority for India emphasis keywords
        const isIndiaEmphasis = country.countryCode.toUpperCase() === 'IN' && 
                                indiaEmphasisKeywords.includes(service.toLowerCase());
        
        // Service + State pages (higher priority for India emphasis)
        const stateUrl = `https://www.franchiseleadshq.com/${serviceSlug}/${country.countryCode.toLowerCase()}/${state.slug}`;
        urls.push({
          loc: stateUrl,
          lastmod: currentDate,
          changefreq: isIndiaEmphasis ? 'daily' : 'weekly',
          priority: isIndiaEmphasis ? '0.9' : '0.8'
        });

        // Service + City pages (ALL cities for India emphasis, TOP 3 for others)
        const citiesToInclude = isIndiaEmphasis ? state.cities : state.cities.slice(0, 3);
        citiesToInclude.forEach(city => {
          const cityUrl = `https://www.franchiseleadshq.com/${serviceSlug}/${country.countryCode.toLowerCase()}/${state.slug}/${city.slug}`;
          urls.push({
            loc: cityUrl,
            lastmod: currentDate,
            changefreq: isIndiaEmphasis ? 'daily' : 'weekly',
            priority: isIndiaEmphasis ? '0.85' : '0.7'
          });
        });
      });
    });
  });

  console.log(`✅ Generated ${urls.length} optimized service+location URLs`);
  return urls;
};

export const generateSitemapXml = (): string => {
  const locationUrls = generateLocationUrls();
  const keywordUrls = generateKeywordUrls();
  const serviceLocationUrls = generateServiceLocationUrls();
  const allUrls = [...locationUrls, ...keywordUrls, ...serviceLocationUrls];

  const urlsXml = allUrls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.franchiseleadshq.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/about</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/services</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/blog</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/testimonials</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/contact</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-usa</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-uk</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-canada</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-australia</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-dubai</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-india</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-kuwait</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/buy-franchise-leads</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/legal-terms/privacy-policy</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/legal-terms/refund-satisfaction-guarantee-policy</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>${urlsXml}
</urlset>`;
};