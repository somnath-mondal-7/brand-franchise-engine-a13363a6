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
  return `<nav aria-label="Main Navigation">
    <a href="/">Home</a> |
    <a href="/services">Services</a> |
    <a href="/about">About</a> |
    <a href="/blog">Blog</a> |
    <a href="/contact">Contact</a> |
    <a href="/franchise-leads-usa">Franchise Leads USA</a> |
    <a href="/franchise-leads-uk">Franchise Leads UK</a> |
    <a href="/franchise-leads-india">Franchise Leads India</a> |
    <a href="/franchise-leads-canada">Franchise Leads Canada</a> |
    <a href="/franchise-leads-australia">Franchise Leads Australia</a> |
    <a href="/franchise-leads-dubai">Franchise Leads Dubai</a> |
    <a href="/buy-franchise-leads">Buy Franchise Leads</a> |
    <a href="/testimonials">Client Testimonials</a> |
    <a href="/digital-marketing">Digital Marketing</a> |
    <a href="/sitemap">Sitemap</a>
  </nav>`;
}

function buildFooter() {
  return `<footer>
    <p>&copy; ${new Date().getFullYear()} FranchiseLeadsPro — #1 Franchise Lead Generation Agency & IT Solutions Provider. All rights reserved.</p>
    <p>Phone: ${PHONE} | Email: support@franchiseleadspro.com</p>
    <nav aria-label="Footer Navigation">
      <a href="/services">Franchise Marketing Services</a> |
      <a href="/about">About FranchiseLeadsPro</a> |
      <a href="/blog">Franchise Marketing Blog</a> |
      <a href="/contact">Contact Us</a> |
      <a href="/franchise-leads-usa">Franchise Leads USA</a> |
      <a href="/franchise-leads-india">Franchise Leads India</a> |
      <a href="/franchise-leads-uk">Franchise Leads UK</a> |
      <a href="/franchise-leads-canada">Franchise Leads Canada</a> |
      <a href="/franchise-leads-australia">Franchise Leads Australia</a> |
      <a href="/franchise-leads-dubai">Franchise Leads Dubai & UAE</a> |
      <a href="/buy-franchise-leads">Buy Franchise Leads</a> |
      <a href="/legal-terms/privacy-policy">Privacy Policy</a> |
      <a href="/legal-terms/refund-satisfaction-guarantee-policy">Refund Policy</a>
    </nav>
    <p>FranchiseLeadsPro provides franchise lead generation, LinkedIn marketing, social media marketing, franchise website development, app development, SEO, IT outsourcing, and digital marketing services for franchisors, franchise consultants, and franchise brands worldwide.</p>
  </footer>`;
}

function homePage() {
  return {
    title: 'Franchise Lead Generation Agency | LinkedIn Marketing, Social Media, Website Development & IT Services | FranchiseLeadsPro',
    description: 'FranchiseLeadsPro is the #1 franchise lead generation agency helping franchisors, franchise consultants, and franchise brands generate qualified investor leads through LinkedIn marketing, social media campaigns, website development, app development, SEO, and IT outsourcing. Serving USA, India, UK, Canada, Australia, Dubai & worldwide.',
    h1: '#1 Franchise Lead Generation Agency — Marketing, Web Development & IT Services',
    content: `
      <section>
        <h2>Generate Qualified Franchise Buyer Leads Worldwide</h2>
        <p>FranchiseLeadsPro is the world's leading franchise-focused marketing and IT solutions agency. We specialize in helping franchisors, franchise consultants, and franchise brands connect with qualified investors through data-driven digital marketing, professional website development, and cutting-edge technology solutions.</p>
        <p>Whether you're looking for a <strong>franchise lead generation agency</strong>, a <strong>franchise marketing company</strong>, a <strong>franchise website development company</strong>, or an <strong>IT outsourcing partner for your franchise business</strong> — FranchiseLeadsPro delivers measurable results.</p>
      </section>

      <section>
        <h2>Our Franchise Marketing & IT Services</h2>
        <h3>LinkedIn Marketing for Franchise Lead Generation</h3>
        <p>We run targeted LinkedIn outreach campaigns using Sales Navigator to connect your franchise brand with high-net-worth investors and experienced business operators. Our LinkedIn marketing services include connection campaigns, personalized messaging sequences, thought leadership content, and meeting booking automation.</p>
        
        <h3>Social Media Marketing (Paid + Organic)</h3>
        <p>Full-spectrum social media marketing across Facebook, Instagram, LinkedIn, and YouTube. We create and manage paid advertising campaigns, organic content strategies, retargeting campaigns, and lookalike audience targeting — all designed to generate qualified franchise buyer leads at scale.</p>
        
        <h3>Franchise Website Development & Design</h3>
        <p>We design and develop high-converting franchise websites that establish credibility and capture investor inquiries. Every website is mobile-first, SEO-optimized, and includes lead capture forms, territory information, investment details, and trust-building elements. We also offer franchise portal development, e-commerce integration, and multi-language support.</p>
        
        <h3>IT Services & Technology Solutions</h3>
        <p>End-to-end technology solutions for franchise brands: custom web application development, mobile app development (iOS & Android), CRM implementation, marketing automation, cloud infrastructure, API development, and IT outsourcing services.</p>
        
        <h3>SEO & Digital Marketing</h3>
        <p>Comprehensive search engine optimization and digital marketing services including technical SEO, local SEO, content marketing, PPC management (Google Ads, Bing Ads), and franchise-specific keyword optimization to dominate search results.</p>
        
        <h3>Franchise Brand Building</h3>
        <p>Strategic branding services including brand identity design, franchise sales collateral, video production, public relations, reputation management, and trade show marketing.</p>
      </section>

      <section>
        <h2>Markets We Serve — Global Franchise Lead Generation</h2>
        <ul>
          <li><a href="/franchise-leads-usa">Franchise Leads USA</a> — All 50 states, 250+ cities</li>
          <li><a href="/franchise-leads-india">Franchise Leads India</a> — All major states and cities</li>
          <li><a href="/franchise-leads-uk">Franchise Leads UK</a> — England, Scotland, Wales, Northern Ireland</li>
          <li><a href="/franchise-leads-canada">Franchise Leads Canada</a> — Ontario, British Columbia, Quebec, Alberta & more</li>
          <li><a href="/franchise-leads-australia">Franchise Leads Australia</a> — Sydney, Melbourne, Brisbane, Perth & more</li>
          <li><a href="/franchise-leads-dubai">Franchise Leads Dubai & UAE</a> — Dubai, Abu Dhabi, Sharjah</li>
          <li><a href="/franchise-leads-kuwait">Franchise Leads Kuwait</a> — Kuwait City and beyond</li>
        </ul>
      </section>

      <section>
        <h2>Who We Work With</h2>
        <ul>
          <li><strong>Franchisors</strong> — Food, retail, fitness, education, and service franchise brands looking for qualified franchisees</li>
          <li><strong>Franchise Consultants & Brokers</strong> — Independent consultants who need a steady flow of franchise buyer leads</li>
          <li><strong>Franchise Development Companies</strong> — Organizations focused on growing franchise systems</li>
          <li><strong>Multi-Unit Franchise Operators</strong> — Experienced operators expanding their portfolio</li>
          <li><strong>International Franchise Brands</strong> — Brands expanding into new global markets</li>
        </ul>
      </section>

      <section>
        <h2>Why Choose FranchiseLeadsPro?</h2>
        <ul>
          <li>100% franchise-industry focused — we understand FDD compliance, territory mapping, and investor psychology</li>
          <li>15,000+ qualified franchise leads generated</li>
          <li>500+ franchise brands served globally</li>
          <li>3-5x average ROI within 90 days</li>
          <li>First qualified leads within 30 days</li>
          <li>7-day money-back guarantee</li>
          <li>Full-service: marketing + website development + IT solutions under one roof</li>
        </ul>
      </section>

      <section>
        <h2>Our 4-Step Franchise Lead Generation Process</h2>
        <ol>
          <li><strong>Discovery & Strategy</strong> — We analyze your franchise model, target market, ideal franchisee profile, and competition</li>
          <li><strong>Campaign Development</strong> — Custom marketing campaigns, website optimization, and technology setup tailored to your franchise brand</li>
          <li><strong>Lead Generation & Outreach</strong> — Multi-channel campaigns across LinkedIn, social media, search, and direct outreach</li>
          <li><strong>Qualification & Delivery</strong> — Every lead is pre-screened for investment capacity, timeline, and genuine interest</li>
        </ol>
      </section>

      <section>
        <h2>Frequently Asked Questions</h2>
        <h3>What services does FranchiseLeadsPro offer?</h3>
        <p>We offer LinkedIn marketing, social media marketing (paid + organic), franchise website development, mobile app development, SEO, IT outsourcing, CRM implementation, franchise brand building, PPC advertising, and comprehensive franchise lead generation services.</p>
        <h3>How much do franchise leads cost?</h3>
        <p>Franchise lead costs vary based on quality, exclusivity, and market. We offer custom pricing. <a href="/contact">Contact us</a> for a free consultation.</p>
        <h3>How quickly can I start receiving franchise leads?</h3>
        <p>Most clients receive their first qualified franchise leads within 30 days of campaign launch.</p>
        <h3>Do you guarantee lead quality?</h3>
        <p>Yes. We pre-screen all leads for investment capacity, timeline, and genuine interest in franchise ownership.</p>
        <h3>Do you offer website development and IT services for franchise businesses?</h3>
        <p>Absolutely. We provide custom franchise website development, mobile app development, CRM implementation, IT outsourcing, and full technology consulting for franchise brands.</p>
        <h3>What countries do you serve?</h3>
        <p>We serve franchise brands in the USA, India, UK, Canada, Australia, UAE, Kuwait, and other markets worldwide.</p>
      </section>

      <section>
        <h2>Popular Franchise Services</h2>
        <ul>
          <li><a href="/services/franchise-lead-generation">Franchise Lead Generation</a></li>
          <li><a href="/services/franchise-marketing">Franchise Marketing</a></li>
          <li><a href="/services/franchise-website-design">Franchise Website Design</a></li>
          <li><a href="/services/franchise-seo">Franchise SEO</a></li>
          <li><a href="/services/franchise-digital-marketing">Franchise Digital Marketing</a></li>
          <li><a href="/services/franchise-consulting">Franchise Consulting</a></li>
          <li><a href="/services/franchise-advertising">Franchise Advertising</a></li>
          <li><a href="/services/franchise-development">Franchise Development</a></li>
          <li><a href="/buy-franchise-leads">Buy Franchise Leads</a></li>
        </ul>
      </section>

      <section>
        <h2>Get Started — Book a Free Consultation</h2>
        <p>Ready to generate more franchise leads? <a href="/contact">Contact FranchiseLeadsPro today</a> or call us at ${PHONE}. We'll create a custom strategy to fill your franchise pipeline with qualified investors.</p>
      </section>
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
    title: `Franchise Lead Generation in ${locationStr} | Marketing, Web Development & IT Services | FranchiseLeadsPro`,
    description: `Looking for franchise leads in ${locationStr}? FranchiseLeadsPro is the #1 franchise marketing agency and IT solutions provider in ${locationStr}. We generate qualified franchise buyer leads through LinkedIn marketing, social media campaigns, website development, and technology solutions.`,
    h1: `Franchise Lead Generation & Marketing Agency in ${locationStr}`,
    content: `
      <section>
        <h2>Franchise Marketing & IT Services in ${locationStr}</h2>
        <p>FranchiseLeadsPro delivers comprehensive franchise marketing and technology services in ${locationStr}. Whether you're a franchisor, franchise consultant, or franchise brand looking for qualified investor leads, professional website development, or IT solutions — we have you covered.</p>
      </section>
      
      <section>
        <h2>Our Services in ${locationStr}</h2>
        <ul>
          <li><strong>Franchise Lead Generation</strong> — Targeted campaigns to find qualified franchise investors in ${locationStr}</li>
          <li><strong>LinkedIn Marketing</strong> — Sales Navigator outreach targeting franchise buyers in ${locationStr}</li>
          <li><strong>Social Media Marketing</strong> — Paid + organic campaigns on Facebook, Instagram, LinkedIn for the ${locationStr} market</li>
          <li><strong>Franchise Website Development</strong> — High-converting websites optimized for ${locationStr} franchise market</li>
          <li><strong>SEO & Local SEO</strong> — Dominate search results for franchise-related queries in ${locationStr}</li>
          <li><strong>IT Services & App Development</strong> — Custom technology solutions for franchise businesses in ${locationStr}</li>
        </ul>
      </section>

      <section>
        <h2>Why ${locationStr} for Franchising?</h2>
        <p>${locationStr} represents a dynamic franchise market with strong consumer demand and a growing pool of franchise investors. FranchiseLeadsPro's deep understanding of the local market helps your franchise brand stand out and attract the right candidates in ${locationStr}.</p>
      </section>

      <section>
        <h2>Get Started with Franchise Leads in ${locationStr}</h2>
        <p>Ready to grow your franchise in ${locationStr}? <a href="/contact">Contact FranchiseLeadsPro today</a> to discuss your franchise lead generation, marketing, and technology strategy. Call us at ${PHONE}.</p>
      </section>
      
      <nav aria-label="Related Pages">
        <p><a href="/locations/${country}">View all locations in ${countryName}</a> | <a href="/services">Our Services</a> | <a href="/">Back to Home</a></p>
      </nav>
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
    title: `${serviceName} in ${locationStr}, ${countryName} | FranchiseLeadsPro — Franchise Marketing & IT Agency`,
    description: `Professional ${serviceName.toLowerCase()} services in ${locationStr}, ${countryName}. FranchiseLeadsPro is the leading franchise marketing agency and IT solutions provider. We help franchise brands, franchisors, and franchise consultants grow with expert ${serviceName.toLowerCase()} strategies, website development, and technology solutions.`,
    h1: `${serviceName} in ${locationStr}, ${countryName}`,
    content: `
      <section>
        <h2>${serviceName} Services in ${locationStr}</h2>
        <p>Looking for ${serviceName.toLowerCase()} in ${locationStr}, ${countryName}? FranchiseLeadsPro provides expert ${serviceName.toLowerCase()} services along with comprehensive franchise marketing, website development, and IT solutions to help franchise brands succeed in the ${locationStr} market.</p>
      </section>
      
      <section>
        <h2>What We Offer for ${serviceName} in ${locationStr}</h2>
        <ul>
          <li>Customized ${serviceName.toLowerCase()} strategies for ${locationStr}</li>
          <li>Data-driven campaigns targeting qualified franchise investors</li>
          <li>Local market expertise and competitive analysis for ${locationStr}</li>
          <li>Franchise website development and optimization</li>
          <li>IT solutions and technology consulting</li>
          <li>Measurable ROI and transparent reporting</li>
        </ul>
      </section>

      <section>
        <h2>Complete Franchise Solutions in ${locationStr}</h2>
        <p>Beyond ${serviceName.toLowerCase()}, FranchiseLeadsPro offers the full spectrum of franchise marketing and IT services in ${locationStr}: LinkedIn marketing, social media campaigns, franchise website development, mobile app development, SEO, IT outsourcing, and franchise brand building.</p>
      </section>

      <nav aria-label="Related Pages">
        <p><a href="/contact">Get a free consultation</a> | <a href="/locations/${country}/${state}">More services in ${stateName}</a> | <a href="/services">All Services</a> | <a href="/">Home</a></p>
      </nav>
    `
  };
}

function keywordPage(keyword) {
  const keywordName = slugToTitle(keyword);
  return {
    title: `${keywordName} | Expert Franchise Marketing & IT Services | FranchiseLeadsPro`,
    description: `Professional ${keywordName.toLowerCase()} services from FranchiseLeadsPro — the #1 franchise marketing agency and IT solutions provider. We help franchisors, franchise consultants, and franchise brands grow with expert strategies, website development, and proven lead generation results.`,
    h1: keywordName,
    content: `
      <section>
        <h2>${keywordName} Services by FranchiseLeadsPro</h2>
        <p>FranchiseLeadsPro offers professional ${keywordName.toLowerCase()} services designed specifically for the franchise industry. Whether you're a franchisor, franchise consultant, or franchise brand, our data-driven approach ensures measurable results, qualified franchise leads, and sustainable growth.</p>
      </section>
      
      <section>
        <h2>How Our ${keywordName} Works</h2>
        <ul>
          <li>Strategic planning and franchise market analysis</li>
          <li>Targeted campaign development and execution</li>
          <li>LinkedIn marketing and social media outreach</li>
          <li>Franchise website optimization and development</li>
          <li>Performance tracking, reporting, and ROI analysis</li>
          <li>Ongoing optimization and scaling</li>
        </ul>
      </section>

      <section>
        <h2>Why Choose FranchiseLeadsPro for ${keywordName}?</h2>
        <p>As the leading franchise-focused marketing and IT agency, we bring deep industry expertise to every ${keywordName.toLowerCase()} project. Our team understands franchise development, FDD compliance, territory mapping, and investor psychology — giving you a significant advantage over generic marketing agencies.</p>
      </section>

      <section>
        <h2>Additional Franchise Services</h2>
        <ul>
          <li><a href="/services/franchise-lead-generation">Franchise Lead Generation</a></li>
          <li><a href="/services/franchise-marketing">Franchise Marketing</a></li>
          <li><a href="/services/franchise-website-design">Franchise Website Design</a></li>
          <li><a href="/services/franchise-digital-marketing">Franchise Digital Marketing</a></li>
          <li><a href="/buy-franchise-leads">Buy Franchise Leads</a></li>
        </ul>
      </section>

      <nav aria-label="Related Pages">
        <p><a href="/contact">Contact us for ${keywordName.toLowerCase()}</a> | <a href="/services">All Services</a> | <a href="/">Home</a></p>
      </nav>
    `
  };
}

function staticPage(path) {
  const pages = {
    'about': { title: 'About FranchiseLeadsPro | #1 Franchise Marketing Agency & IT Solutions Provider', description: 'Learn about FranchiseLeadsPro — the world\'s leading franchise lead generation agency, marketing company, and IT solutions provider. We help franchisors, franchise consultants, and franchise brands generate qualified leads through LinkedIn marketing, social media, website development, and technology solutions.', h1: 'About FranchiseLeadsPro — Franchise Marketing & IT Agency' },
    'services': { title: 'Franchise Marketing Services | LinkedIn, Social Media, Website Development, IT & Lead Generation | FranchiseLeadsPro', description: 'Comprehensive franchise marketing and IT services: LinkedIn marketing, social media campaigns, franchise website development, app development, SEO, IT outsourcing, and lead generation for franchisors and franchise consultants.', h1: 'Franchise Marketing & IT Services' },
    'digital-marketing': { title: 'Franchise Digital Marketing Services | SEO, PPC, Social Media & Content Marketing | FranchiseLeadsPro', description: 'Full-service franchise digital marketing: SEO, PPC, social media marketing, content marketing, email campaigns, and franchise brand building for franchisors and franchise consultants.', h1: 'Franchise Digital Marketing Services' },
    'contact': { title: 'Contact FranchiseLeadsPro | Get a Free Consultation | Franchise Marketing & IT Agency', description: 'Contact FranchiseLeadsPro for franchise lead generation, marketing services, website development, and IT solutions. Call +1 (551)-201-23-77 or fill out our form for a free consultation.', h1: 'Contact FranchiseLeadsPro' },
    'blog': { title: 'Franchise Marketing Blog | Lead Generation Tips, Strategies & Industry Insights | FranchiseLeadsPro', description: 'Expert insights on franchise lead generation, marketing strategies, website development, IT solutions, and franchise industry trends from FranchiseLeadsPro.', h1: 'Franchise Marketing Blog' },
    'testimonials': { title: 'Client Testimonials & Reviews | FranchiseLeadsPro — Franchise Marketing & IT Agency', description: 'See what franchise brands, franchisors, and franchise consultants say about FranchiseLeadsPro\'s lead generation, marketing, website development, and IT services.', h1: 'Client Testimonials & Success Stories' },
    'buy-franchise-leads': { title: 'Buy Franchise Leads | Pre-Qualified Franchise Investor Leads | FranchiseLeadsPro', description: 'Buy high-quality, pre-qualified franchise buyer leads from FranchiseLeadsPro. Exclusive, verified franchise investor leads for franchisors and franchise consultants.', h1: 'Buy Pre-Qualified Franchise Leads' },
    'franchise-leads-usa': { title: 'Franchise Leads USA | American Franchise Lead Generation, Marketing & IT | FranchiseLeadsPro', description: 'Generate qualified franchise leads across all 50 US states with FranchiseLeadsPro. LinkedIn marketing, social media campaigns, franchise website development, and IT services for American franchise brands.', h1: 'Franchise Lead Generation & Marketing in the USA' },
    'franchise-leads-uk': { title: 'Franchise Leads UK | British Franchise Lead Generation, Marketing & IT | FranchiseLeadsPro', description: 'Generate qualified franchise leads across the United Kingdom with FranchiseLeadsPro. London, Manchester, Birmingham, Edinburgh & more.', h1: 'Franchise Lead Generation & Marketing in the UK' },
    'franchise-leads-india': { title: 'Franchise Leads India | Indian Franchise Lead Generation, Marketing & IT | FranchiseLeadsPro', description: 'Generate qualified franchise leads across India with FranchiseLeadsPro. Mumbai, Delhi, Bangalore, Chennai, Hyderabad & more. LinkedIn marketing, website development, and IT services.', h1: 'Franchise Lead Generation & Marketing in India' },
    'franchise-leads-canada': { title: 'Franchise Leads Canada | Canadian Franchise Lead Generation & Marketing | FranchiseLeadsPro', description: 'Generate qualified franchise leads across Canada with FranchiseLeadsPro. Toronto, Vancouver, Montreal, Calgary & more.', h1: 'Franchise Lead Generation & Marketing in Canada' },
    'franchise-leads-australia': { title: 'Franchise Leads Australia | Australian Franchise Lead Generation & Marketing | FranchiseLeadsPro', description: 'Generate qualified franchise leads across Australia with FranchiseLeadsPro. Sydney, Melbourne, Brisbane, Perth & more.', h1: 'Franchise Lead Generation & Marketing in Australia' },
    'franchise-leads-dubai': { title: 'Franchise Leads Dubai & UAE | Middle East Franchise Lead Generation & Marketing | FranchiseLeadsPro', description: 'Generate qualified franchise leads in Dubai, Abu Dhabi, and the UAE with FranchiseLeadsPro. LinkedIn marketing, website development, and IT services for Middle East franchise brands.', h1: 'Franchise Lead Generation & Marketing in Dubai & UAE' },
    'franchise-leads-kuwait': { title: 'Franchise Leads Kuwait | Kuwait Franchise Lead Generation & Marketing | FranchiseLeadsPro', description: 'Generate qualified franchise leads in Kuwait with FranchiseLeadsPro. LinkedIn marketing, social media, and franchise website development.', h1: 'Franchise Lead Generation & Marketing in Kuwait' },
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
  <meta name="keywords" content="franchise lead generation, franchise marketing agency, franchise leads, buy franchise leads, franchise website development, franchise IT services, franchise consulting, franchisor marketing, franchise digital marketing, franchise SEO, franchise LinkedIn marketing, franchise social media marketing">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="FranchiseLeadsPro">
  <meta property="og:image" content="${SITE}/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${SITE}/og-image.png">
  <link rel="icon" type="image/png" href="/favicon.png">
  <script type="application/ld+json">
  ${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonical,
    "isPartOf": {
      "@type": "WebSite",
      "name": "FranchiseLeadsPro",
      "url": SITE
    },
    "publisher": {
      "@type": "Organization",
      "name": "FranchiseLeadsPro",
      "url": SITE,
      "logo": `${SITE}/logo-hq.png`,
      "description": "FranchiseLeadsPro is the #1 franchise lead generation agency, marketing company, and IT solutions provider for franchisors, franchise consultants, and franchise brands worldwide.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-551-201-2377",
        "contactType": "Sales",
        "areaServed": ["US", "IN", "GB", "CA", "AU", "AE", "KW"],
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://linkedin.com/company/franchiseleadspro",
        "https://twitter.com/franchiseleadspro",
        "https://facebook.com/franchiseleadspro"
      ]
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

function blogPostPage(slug) {
  const title = slugToTitle(slug);
  return {
    title: `${title} | Franchise Marketing Blog | FranchiseLeadsPro`,
    description: `Read "${title}" on the FranchiseLeadsPro blog. Expert insights on franchise lead generation, marketing strategies, website development, and IT solutions for franchisors and franchise consultants.`,
    h1: title,
    content: `
      <section>
        <p>Read the full article on our website. This blog post covers expert insights related to ${title.toLowerCase()} in the franchise industry.</p>
        <p><a href="/blog">← Back to all blog posts</a></p>
      </section>
      <section>
        <h2>Related Resources</h2>
        <ul>
          <li><a href="/blog">Franchise Marketing Blog</a></li>
          <li><a href="/services">Our Services</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/buy-franchise-leads">Buy Franchise Leads</a></li>
        </ul>
      </section>
    `
  };
}

function legalPage(path) {
  const pages = {
    'legal-terms/privacy-policy': {
      title: 'Privacy Policy | FranchiseLeadsPro',
      description: 'FranchiseLeadsPro privacy policy. Learn how we collect, use, and protect your personal information.',
      h1: 'Privacy Policy'
    },
    'legal-terms/refund-satisfaction-guarantee-policy': {
      title: 'Refund & Satisfaction Guarantee Policy | FranchiseLeadsPro',
      description: 'FranchiseLeadsPro refund and satisfaction guarantee policy for our franchise lead generation and marketing services.',
      h1: 'Refund & Satisfaction Guarantee Policy'
    }
  };
  return pages[path] || null;
}

export default function handler(req, res) {
  try {
    const rawPath = (req.query.path || '').replace(/^\/+|\/+$/g, '');
    const segments = rawPath.split('/').filter(Boolean);
    
    let pageData;
    const canonicalPath = rawPath ? `/${rawPath}` : '/';

    // Route matching
    if (!rawPath || rawPath === 'index.html') {
      pageData = homePage();
    }
    // /blog/:slug
    else if (segments[0] === 'blog' && segments[1]) {
      pageData = blogPostPage(segments[1]);
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
    // /legal-terms/*
    else if (segments[0] === 'legal-terms') {
      pageData = legalPage(rawPath);
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
      pageData = {
        title: 'Page Not Found | FranchiseLeadsPro',
        description: 'The page you are looking for could not be found.',
        h1: 'Page Not Found',
        content: '<p>Sorry, this page does not exist. <a href="/">Return to FranchiseLeadsPro homepage</a>.</p>'
      };
      const html = buildHtml({ ...pageData, canonicalPath });
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      return res.status(404).send(html);
    }

    const html = buildHtml({ ...pageData, canonicalPath });
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
    res.status(200).send(html);
  } catch (err) {
    // Catch any unexpected errors to prevent 5xx
    const fallbackHtml = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>FranchiseLeadsPro</title><meta name="robots" content="index, follow"><link rel="canonical" href="${SITE}/${(req.query.path || '').replace(/^\/+|\/+$/g, '')}"></head><body><h1>FranchiseLeadsPro</h1><p>Visit <a href="${SITE}">FranchiseLeadsPro</a> for franchise lead generation, marketing, and IT services.</p></body></html>`;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(fallbackHtml);
  }
}
