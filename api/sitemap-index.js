// Dynamic sitemap index generator - always returns correct chunk count
const DOMAIN = 'https://www.franchiseleadspro.com';

export default function handler(req, res) {
  const currentDate = new Date().toISOString().split('T')[0];
  
  // We know there are 5 sitemap chunks based on ~41k URLs / 10k per chunk
  const SITEMAP_COUNT = 5;
  
  const entries = [];
  for (let i = 1; i <= SITEMAP_COUNT; i++) {
    entries.push(`  <sitemap>\n    <loc>${DOMAIN}/sitemaps/sitemap-${i}.xml</loc>\n    <lastmod>${currentDate}</lastmod>\n  </sitemap>`);
  }
  
  // Blog sitemap
  entries.push(`  <sitemap>\n    <loc>${DOMAIN}/sitemap-blog.xml</loc>\n    <lastmod>${currentDate}</lastmod>\n  </sitemap>`);
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</sitemapindex>`;
  
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
  res.status(200).send(xml);
}
