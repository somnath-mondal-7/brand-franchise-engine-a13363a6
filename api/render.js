// Free DIY Prerender — serves static HTML to search engine bots
// No external services needed. Vercel routes bots here via vercel.json rewrites.

const SITE = 'https://www.franchiseleadspro.com';
const PHONE = '+1 (551)-201-23-77';

function slugToTitle(slug) {
  return slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function buildNav() {
  return `<nav>
    <a href="/">Home</a> |
    <a href="/services">Services</a> |
    <a href="/about">About</a> |
    <a href="/blog">Blog</a> |
    <a href="/contact">Contact</a> |
    <a href="/franchise-leads-usa">USA</a> |
    <a href="/franchise-leads-uk">UK</a> |
    <a href="/franchise-leads-india">India</a> |
    <a href="/franchise-leads-canada">Canada</a> |
    <a href="/franchise-leads-australia">Australia</a> |
    <a href="/franchise-leads-dubai">Dubai</a> |
    <a href="/buy-franchise-leads">Buy Leads</a> |
    <a href="/testimonials">Testimonials</a> |
    <a href="/sitemap">Sitemap</a>
  </nav>`;
}

function buildFooter() {
  return `<footer>
    <p>&copy; ${new Date().getFullYear()} FranchiseLeadsPro. All rights reserved.</p>
    <p>Phone: ${PHONE} | Email: iamsomnath@franchiseleadspro.com</p>
    <a href="/legal-terms/privacy-policy">Privacy Policy</a> |
    <a href="/legal-terms/refund-satisfaction-guarantee-policy">Refund Policy</a>
  </footer>`;
}

function homePage() {
  return {
    title: 'Franchise Lead Generation | LinkedIn Marketing, Social Media & Web Development',
    description: 'We help franchise consultants and franchisors generate qualified investor leads through LinkedIn marketing, social media campaigns (paid + organic), and high-converting franchise website development.',
    h1: 'Franchise Lead Generation Agency',
    content: `
      <h2>Generate Qualified Franchise Buyer Leads</h2>
      <p>FranchiseLeadsPro is a specialized franchise lead generation agency helping franchisors and franchise consultants connect with qualified investors. Our proven strategies combine LinkedIn marketing, social media campaigns, and high-converting website development to deliver measurable results.</p>
      
      <h2>Our Services</h2>
      <ul>
        <li><a href="/services">LinkedIn Marketing for Franchises</a> — Targeted outreach and thought leadership campaigns</li>
        <li><a href="/digital-marketing">Social Media Marketing</a> — Paid and organic campaigns on Facebook, Instagram, LinkedIn</li>
        <li><a href="/services">Franchise Website Development</a> — High-converting websites with lead capture and SEO</li>
        <li><a href="/buy-franchise-leads">Buy Franchise Leads</a> — Pre-qualified franchise buyer leads</li>
      </ul>

      <h2>Markets We Serve</h2>
      <ul>
        <li><a href="/franchise-leads-usa">Franchise Leads USA</a></li>
        <li><a href="/franchise-leads-uk">Franchise Leads UK</a></li>
        <li><a href="/franchise-leads-india">Franchise Leads India</a></li>
        <li><a href="/franchise-leads-canada">Franchise Leads Canada</a></li>
        <li><a href="/franchise-leads-australia">Franchise Leads Australia</a></li>
        <li><a href="/franchise-leads-dubai">Franchise Leads Dubai</a></li>
        <li><a href="/franchise-leads-kuwait">Franchise Leads Kuwait</a></li>
      </ul>

      <h2>Why Choose FranchiseLeadsPro?</h2>
      <p>With years of experience in franchise marketing, we understand the unique challenges of franchise lead generation. Our team specializes in creating targeted campaigns that attract serious franchise investors, not tire-kickers.</p>
      
      <h2>Our Process</h2>
      <ol>
        <li><strong>Discovery & Strategy</strong> — We analyze your franchise model, target market, and competition</li>
        <li><strong>Campaign Development</strong> — Custom marketing campaigns tailored to your franchise brand</li>
        <li><strong>Lead Generation</strong> — Targeted outreach across LinkedIn, social media, and search</li>
        <li><strong>Qualification & Delivery</strong> — Pre-screened, qualified franchise buyer leads delivered to you</li>
      </ol>

      <h2>Frequently Asked Questions</h2>
      <h3>How much do franchise leads cost?</h3>
      <p>Franchise lead costs vary based on quality, exclusivity, and market. Contact us for a custom quote tailored to your franchise brand.</p>
      <h3>How quickly can I start receiving leads?</h3>
      <p>Most clients begin receiving qualified franchise leads within 2-4 weeks of campaign launch.</p>
      <h3>Do you guarantee lead quality?</h3>
      <p>Yes, we pre-screen all leads to ensure they meet minimum investment and experience requirements.</p>
    `
  };
}

function locationPage(country, state, city) {
  const countryName = slugToTitle(country === 'usa' ? 'united-states' : country);
  const stateName = state ? slugToTitle(state) : '';
  const cityName = city ? slugToTitle(city) : '';
  
  const locationStr = cityName 
    ? `${cityName}, ${stateName}, ${countryName}`
    : stateName 
      ? `${stateName}, ${countryName}` 
      : countryName;

  return {
    title: `Franchise Lead Generation in ${locationStr} | FranchiseLeadsPro`,
    description: `Looking for franchise leads in ${locationStr}? FranchiseLeadsPro generates qualified franchise buyer leads through targeted digital marketing campaigns in ${locationStr}.`,
    h1: `Franchise Lead Generation in ${locationStr}`,
    content: `
      <h2>Franchise Leads in ${locationStr}</h2>
      <p>FranchiseLeadsPro delivers high-quality franchise buyer leads in ${locationStr}. Our targeted marketing campaigns connect your franchise brand with qualified investors actively looking for franchise opportunities in ${locationStr}.</p>
      
      <h2>Our ${locationStr} Franchise Marketing Services</h2>
      <ul>
        <li>LinkedIn outreach targeting franchise investors in ${locationStr}</li>
        <li>Social media advertising campaigns for the ${locationStr} market</li>
        <li>Local SEO optimization for franchise discovery in ${locationStr}</li>
        <li>Content marketing targeting ${locationStr} franchise buyers</li>
      </ul>

      <h2>Why ${locationStr} for Franchising?</h2>
      <p>${locationStr} represents a dynamic franchise market with strong consumer demand and a growing pool of franchise investors. Our deep understanding of the local market helps your franchise brand stand out and attract the right candidates.</p>

      <h2>Get Started with Franchise Leads in ${locationStr}</h2>
      <p>Ready to grow your franchise in ${locationStr}? <a href="/contact">Contact us today</a> to discuss your franchise lead generation strategy. Call us at ${PHONE} or fill out our contact form.</p>
      
      <p><a href="/locations/${country}">View all locations in ${countryName}</a> | <a href="/">Back to Home</a></p>
    `
  };
}

function serviceLocationPage(service, country, state, city) {
  const serviceName = slugToTitle(service);
  const countryName = slugToTitle(country === 'usa' ? 'united-states' : country);
  const stateName = state ? slugToTitle(state) : '';
  const cityName = city ? slugToTitle(city) : '';
  
  const locationStr = cityName 
    ? `${cityName}, ${stateName}` 
    : stateName;

  return {
    title: `${serviceName} in ${locationStr}, ${countryName} | FranchiseLeadsPro`,
    description: `Professional ${serviceName.toLowerCase()} services in ${locationStr}, ${countryName}. FranchiseLeadsPro helps franchise brands grow with expert ${serviceName.toLowerCase()} strategies.`,
    h1: `${serviceName} in ${locationStr}, ${countryName}`,
    content: `
      <h2>${serviceName} Services in ${locationStr}</h2>
      <p>Looking for ${serviceName.toLowerCase()} in ${locationStr}, ${countryName}? FranchiseLeadsPro provides expert ${serviceName.toLowerCase()} services to help franchise brands succeed in the ${locationStr} market.</p>
      
      <h2>What We Offer</h2>
      <ul>
        <li>Customized ${serviceName.toLowerCase()} strategies for ${locationStr}</li>
        <li>Data-driven campaigns targeting qualified franchise investors</li>
        <li>Local market expertise and competitive analysis</li>
        <li>Measurable ROI and transparent reporting</li>
      </ul>

      <h2>Why Choose FranchiseLeadsPro for ${serviceName}?</h2>
      <p>Our team has extensive experience delivering ${serviceName.toLowerCase()} results in ${locationStr}. We combine industry knowledge with proven digital marketing techniques to generate qualified franchise leads.</p>

      <p><a href="/contact">Get a free consultation</a> | <a href="/locations/${country}/${state}">More services in ${stateName}</a> | <a href="/">Home</a></p>
    `
  };
}

function keywordPage(keyword) {
  const keywordName = slugToTitle(keyword);
  return {
    title: `${keywordName} | Expert Franchise Services | FranchiseLeadsPro`,
    description: `Professional ${keywordName.toLowerCase()} services from FranchiseLeadsPro. We help franchise brands grow with expert strategies and proven results.`,
    h1: keywordName,
    content: `
      <h2>${keywordName} Services</h2>
      <p>FranchiseLeadsPro offers professional ${keywordName.toLowerCase()} services designed to help franchisors and franchise consultants grow their brands. Our data-driven approach ensures measurable results and qualified franchise leads.</p>
      
      <h2>How Our ${keywordName} Works</h2>
      <ul>
        <li>Strategic planning and market analysis</li>
        <li>Targeted campaign development and execution</li>
        <li>Performance tracking and optimization</li>
        <li>Regular reporting and ROI analysis</li>
      </ul>

      <p><a href="/contact">Contact us for ${keywordName.toLowerCase()}</a> | <a href="/services">All Services</a> | <a href="/">Home</a></p>
    `
  };
}

function staticPage(path) {
  const pages = {
    'about': { title: 'About FranchiseLeadsPro | Our Story & Team', description: 'Learn about FranchiseLeadsPro, the franchise lead generation agency helping brands connect with qualified investors worldwide.', h1: 'About FranchiseLeadsPro' },
    'services': { title: 'Franchise Marketing Services | FranchiseLeadsPro', description: 'Comprehensive franchise marketing services including LinkedIn marketing, social media, website development, and lead generation.', h1: 'Our Franchise Marketing Services' },
    'digital-marketing': { title: 'Franchise Digital Marketing Services | FranchiseLeadsPro', description: 'Full-service franchise digital marketing including SEO, PPC, social media, and content marketing.', h1: 'Franchise Digital Marketing' },
    'contact': { title: 'Contact FranchiseLeadsPro | Get a Free Consultation', description: 'Contact FranchiseLeadsPro for franchise lead generation services. Call +1 (551)-201-23-77 or fill out our form.', h1: 'Contact Us' },
    'blog': { title: 'Franchise Marketing Blog | FranchiseLeadsPro', description: 'Expert insights on franchise lead generation, marketing strategies, and industry trends.', h1: 'Franchise Marketing Blog' },
    'testimonials': { title: 'Client Testimonials | FranchiseLeadsPro', description: 'See what franchise brands say about our lead generation services.', h1: 'Client Testimonials' },
    'buy-franchise-leads': { title: 'Buy Franchise Leads | Pre-Qualified Investor Leads', description: 'Buy high-quality, pre-qualified franchise buyer leads from FranchiseLeadsPro.', h1: 'Buy Franchise Leads' },
    'franchise-leads-usa': { title: 'Franchise Leads USA | American Franchise Lead Generation', description: 'Generate qualified franchise leads across the United States with FranchiseLeadsPro.', h1: 'Franchise Leads USA' },
    'franchise-leads-uk': { title: 'Franchise Leads UK | British Franchise Lead Generation', description: 'Generate qualified franchise leads across the United Kingdom with FranchiseLeadsPro.', h1: 'Franchise Leads UK' },
    'franchise-leads-india': { title: 'Franchise Leads India | Indian Franchise Lead Generation', description: 'Generate qualified franchise leads across India with FranchiseLeadsPro.', h1: 'Franchise Leads India' },
    'franchise-leads-canada': { title: 'Franchise Leads Canada | Canadian Franchise Lead Generation', description: 'Generate qualified franchise leads across Canada with FranchiseLeadsPro.', h1: 'Franchise Leads Canada' },
    'franchise-leads-australia': { title: 'Franchise Leads Australia | Australian Franchise Lead Generation', description: 'Generate qualified franchise leads across Australia with FranchiseLeadsPro.', h1: 'Franchise Leads Australia' },
    'franchise-leads-dubai': { title: 'Franchise Leads Dubai & UAE | Middle East Franchise Leads', description: 'Generate qualified franchise leads in Dubai and the UAE with FranchiseLeadsPro.', h1: 'Franchise Leads Dubai & UAE' },
    'franchise-leads-kuwait': { title: 'Franchise Leads Kuwait | Kuwait Franchise Lead Generation', description: 'Generate qualified franchise leads in Kuwait with FranchiseLeadsPro.', h1: 'Franchise Leads Kuwait' },
  };
  return pages[path] || null;
}

function buildHtml({ title, description, h1, content, canonicalPath }) {
  const canonical = `${SITE}${canonicalPath}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="FranchiseLeadsPro">
  <meta property="og:image" content="${SITE}/og-image.png">
  <link rel="icon" type="image/png" href="/favicon.png">
  <script type="application/ld+json">
  ${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonical,
    "publisher": {
      "@type": "Organization",
      "name": "FranchiseLeadsPro",
      "url": SITE,
      "logo": `${SITE}/logo-hq.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-551-201-2377",
        "contactType": "Sales"
      }
    }
  })}
  </script>
</head>
<body>
  ${buildNav()}
  <main>
    <h1>${h1}</h1>
    ${content || `<p>${description}</p>`}
  </main>
  ${buildFooter()}
</body>
</html>`;
}

module.exports = (req, res) => {
  const rawPath = (req.query.path || '').replace(/^\/+|\/+$/g, '');
  const segments = rawPath.split('/').filter(Boolean);
  
  let pageData;
  const canonicalPath = rawPath ? `/${rawPath}` : '/';

  // Route matching
  if (!rawPath || rawPath === 'index.html') {
    pageData = homePage();
  }
  // /locations/:country/:state?/:city?
  else if (segments[0] === 'locations') {
    const [, country, state, city] = segments;
    if (country) {
      pageData = locationPage(country, state, city);
    }
  }
  // /services/:keyword
  else if (segments[0] === 'services' && segments[1]) {
    pageData = keywordPage(segments[1]);
  }
  // /:service/:country/:state/:city? (service-location pages)
  else if (segments.length >= 3 && segments[0] !== 'locations' && segments[0] !== 'blog' && segments[0] !== 'legal-terms' && segments[0] !== 'admin') {
    pageData = serviceLocationPage(segments[0], segments[1], segments[2], segments[3]);
  }
  // Static pages
  else {
    pageData = staticPage(rawPath);
  }

  if (!pageData) {
    res.status(404);
    pageData = {
      title: 'Page Not Found | FranchiseLeadsPro',
      description: 'The page you are looking for could not be found.',
      h1: 'Page Not Found',
      content: '<p>Sorry, this page does not exist. <a href="/">Return to homepage</a>.</p>'
    };
  }

  const html = buildHtml({ ...pageData, canonicalPath });
  
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
  res.status(pageData.title.includes('Not Found') ? 404 : 200).send(html);
};
