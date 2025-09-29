// Simple sitemap generator - run this in browser console or Node.js
console.log("=== COMPLETE SITEMAP XML ===");

// Your complete sitemap XML (copy everything below this line)
const currentDate = new Date().toISOString().split('T')[0];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/services</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/blog</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/testimonials</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-usa</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
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
    <loc>https://www.franchiseleadshq.com/franchise-leads-india</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/franchise-leads-kuwait</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/legal-terms/privacy-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://www.franchiseleadshq.com/legal-terms/refund-satisfaction-guarantee-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;

// Add USA location pages
const usaStates = [
  { name: "California", slug: "california", cities: ["los-angeles", "san-francisco", "san-diego", "san-jose", "fresno", "sacramento", "oakland", "long-beach", "bakersfield", "anaheim"] },
  { name: "Texas", slug: "texas", cities: ["houston", "san-antonio", "dallas", "austin", "fort-worth", "el-paso", "arlington", "corpus-christi", "plano", "lubbock"] },
  { name: "Florida", slug: "florida", cities: ["jacksonville", "miami", "tampa", "orlando", "st-petersburg", "hialeah", "tallahassee", "fort-lauderdale", "port-st-lucie", "cape-coral"] },
  { name: "New York", slug: "new-york", cities: ["new-york-city", "buffalo", "rochester", "yonkers", "syracuse", "albany", "new-rochelle", "mount-vernon", "schenectady", "utica"] },
  { name: "Pennsylvania", slug: "pennsylvania", cities: ["philadelphia", "pittsburgh", "allentown", "erie", "reading", "scranton", "bethlehem", "lancaster", "harrisburg", "altoona"] },
  { name: "Illinois", slug: "illinois", cities: ["chicago", "aurora", "rockford", "joliet", "naperville", "springfield", "peoria", "elgin", "waukegan", "cicero"] },
  { name: "Ohio", slug: "ohio", cities: ["columbus", "cleveland", "cincinnati", "toledo", "akron", "dayton", "parma", "canton", "youngstown", "lorain"] },
  { name: "Georgia", slug: "georgia", cities: ["atlanta", "augusta", "columbus", "macon", "savannah", "athens", "sandy-springs", "roswell", "albany", "marietta"] },
  { name: "North Carolina", slug: "north-carolina", cities: ["charlotte", "raleigh", "greensboro", "durham", "winston-salem", "fayetteville", "cary", "wilmington", "high-point", "concord"] },
  { name: "Michigan", slug: "michigan", cities: ["detroit", "grand-rapids", "warren", "sterling-heights", "lansing", "ann-arbor", "flint", "dearborn", "livonia", "westland"] }
];

usaStates.forEach(state => {
  // State page
  sitemapXml += `
  <url>
    <loc>https://www.franchiseleadshq.com/locations/usa/${state.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  
  // City pages
  state.cities.forEach(city => {
    sitemapXml += `
  <url>
    <loc>https://www.franchiseleadshq.com/locations/usa/${state.slug}/${city}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });
});

// Add UK location pages
const ukRegions = [
  { name: "England", slug: "england", cities: ["london", "birmingham", "manchester", "leeds", "liverpool", "sheffield", "bristol", "newcastle", "nottingham", "leicester"] },
  { name: "Scotland", slug: "scotland", cities: ["glasgow", "edinburgh", "aberdeen", "dundee", "stirling", "perth", "inverness", "paisley", "east-kilbride", "hamilton"] },
  { name: "Wales", slug: "wales", cities: ["cardiff", "swansea", "newport", "wrexham", "merthyr-tydfil", "barry", "caerphilly", "neath", "bridgend", "cwmbran"] },
  { name: "Northern Ireland", slug: "northern-ireland", cities: ["belfast", "derry", "lisburn", "newtownabbey", "bangor", "craigavon", "castlereagh", "ballymena", "newtownards", "carrickfergus"] }
];

ukRegions.forEach(region => {
  // Region page
  sitemapXml += `
  <url>
    <loc>https://www.franchiseleadshq.com/locations/uk/${region.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  
  // City pages
  region.cities.forEach(city => {
    sitemapXml += `
  <url>
    <loc>https://www.franchiseleadshq.com/locations/uk/${region.slug}/${city}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });
});

// Add Canada location pages
const canadaProvinces = [
  { name: "Ontario", slug: "ontario", cities: ["toronto", "ottawa", "mississauga", "brampton", "hamilton", "london", "markham", "vaughan", "kitchener", "windsor"] },
  { name: "Quebec", slug: "quebec", cities: ["montreal", "quebec-city", "laval", "gatineau", "longueuil", "sherbrooke", "saguenay", "levis", "trois-rivieres", "terrebonne"] },
  { name: "British Columbia", slug: "british-columbia", cities: ["vancouver", "surrey", "burnaby", "richmond", "abbotsford", "coquitlam", "saanich", "delta", "kelowna", "langley"] },
  { name: "Alberta", slug: "alberta", cities: ["calgary", "edmonton", "red-deer", "lethbridge", "st-albert", "medicine-hat", "grande-prairie", "airdrie", "halton-hills", "spruce-grove"] },
  { name: "Manitoba", slug: "manitoba", cities: ["winnipeg", "brandon", "steinbach", "thompson", "portage-la-prairie", "winkler", "selkirk", "morden", "dauphin", "flin-flon"] },
  { name: "Saskatchewan", slug: "saskatchewan", cities: ["saskatoon", "regina", "prince-albert", "moose-jaw", "swift-current", "yorkton", "north-battleford", "estevan", "weyburn", "corman-park"] }
];

canadaProvinces.forEach(province => {
  // Province page
  sitemapXml += `
  <url>
    <loc>https://www.franchiseleadshq.com/locations/canada/${province.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  
  // City pages
  province.cities.forEach(city => {
    sitemapXml += `
  <url>
    <loc>https://www.franchiseleadshq.com/locations/canada/${province.slug}/${city}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });
});

// Add keyword-based service pages
const keywords = [
  "franchise-lead-generation", "franchise-marketing", "franchise-development", "franchise-advertising",
  "franchise-consulting", "franchise-business-growth", "franchise-brand-building", "franchise-digital-marketing",
  "franchise-social-media-marketing", "franchise-email-marketing", "franchise-content-marketing", 
  "franchise-seo-services", "franchise-ppc-advertising", "franchise-website-design", "franchise-sales-funnel",
  "franchise-conversion-optimization", "franchise-crm-services", "franchise-automation", "franchise-analytics",
  "franchise-roi-optimization", "best-franchise-opportunities", "top-franchise-brands", "profitable-franchise-business",
  "low-cost-franchise-opportunities", "high-roi-franchise-investments", "franchise-lead-generation-services",
  "qualified-franchise-leads", "targeted-franchise-marketing", "franchise-discovery-process", "franchise-sales-system",
  "digital-franchise-marketing", "franchise-website-development", "franchise-brand-awareness", "franchise-market-research",
  "franchise-territory-development", "franchise-recruitment-marketing", "franchise-candidate-qualification",
  "franchise-sales-conversion", "franchise-marketing-automation", "franchise-crm-integration"
];

keywords.forEach(keyword => {
  sitemapXml += `
  <url>
    <loc>https://www.franchiseleadshq.com/services/${keyword}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
});

sitemapXml += `
</urlset>`;

console.log(sitemapXml);
console.log("=== END SITEMAP ===");

// Count total URLs
const urlCount = (sitemapXml.match(/<url>/g) || []).length;
console.log(`\nTotal URLs in sitemap: ${urlCount}`);
console.log("\n📋 INSTRUCTIONS:");
console.log("1. Copy the sitemap XML above");
console.log("2. Save it as 'sitemap.xml' in your public folder");
console.log("3. Upload to your website root");
console.log("4. Submit to Google Search Console: https://www.franchiseleadshq.com/sitemap.xml");