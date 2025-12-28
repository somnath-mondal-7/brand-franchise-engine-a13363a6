// OPTIMIZED SITEMAP GENERATOR - Reduced to ~50 high-quality pages only
// This fixes Google Search Console indexing issues by eliminating thin/duplicate content

export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

// REMOVED: generateLocationUrls - Too many thin pages causing indexing issues
// REMOVED: generateKeywordUrls - Too many thin pages causing indexing issues  
// REMOVED: generateServiceLocationUrls - Too many thin pages causing indexing issues

export const generateSitemapXml = (): string => {
  const currentDate = new Date().toISOString().split('T')[0];

  // ONLY include high-quality, unique content pages
  // This reduces from 28K+ pages to ~50 quality pages
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage - Highest priority -->
  <url>
    <loc>https://www.franchiseleadshq.com/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Core Service Pages -->
  <url>
    <loc>https://www.franchiseleadshq.com/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/buy-franchise-leads</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- Country-specific landing pages (unique content) -->
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-usa</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-india</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-uk</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-canada</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-australia</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-dubai</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-kuwait</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- About & Trust Pages -->
  <url>
    <loc>https://www.franchiseleadshq.com/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/testimonials</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Blog (dynamic content) -->
  <url>
    <loc>https://www.franchiseleadshq.com/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Contact -->
  <url>
    <loc>https://www.franchiseleadshq.com/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Legal Pages -->
  <url>
    <loc>https://www.franchiseleadshq.com/legal-terms/privacy-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/legal-terms/refund-satisfaction-guarantee-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.3</priority>
  </url>
</urlset>`;
};

// Export empty arrays for backward compatibility
export const generateLocationUrls = (): SitemapUrl[] => [];
export const generateKeywordUrls = (): SitemapUrl[] => [];
export const generateServiceLocationUrls = (): SitemapUrl[] => [];
