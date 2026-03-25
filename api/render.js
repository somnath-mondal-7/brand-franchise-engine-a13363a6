// Free DIY Prerender — serves static HTML to search engine bots
// Matches LovableHTML quality: proper meta tags, single H1, rich content, structured data

const SITE = 'https://www.franchiseleadspro.com';
const BRAND = 'FranchiseLeadsPro';
const PHONE = '+1 (551)-201-23-77';

function slugToTitle(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// Truncate to max length, ending at last word boundary
function truncate(str, max) {
  if (str.length <= max) return str;
  return str.substring(0, max).replace(/\s+\S*$/, '') + '…';
}

function buildNav() {
  return `<nav aria-label="Main Navigation">
    <a href="/">Home</a> |
    <a href="/services">Services</a> |
    <a href="/blog">Blog</a> |
    <a href="/contact">Contact</a> |
    <a href="/franchise-leads-usa">USA</a> |
    <a href="/franchise-leads-india">India</a> |
    <a href="/franchise-leads-uk">UK</a> |
    <a href="/franchise-leads-canada">Canada</a> |
    <a href="/franchise-leads-australia">Australia</a> |
    <a href="/franchise-leads-dubai">Dubai</a> |
    <a href="/buy-franchise-leads">Buy Leads</a> |
    <a href="/testimonials">Testimonials</a>
  </nav>`;
}

function buildFooter() {
  return `<footer>
    <p>&copy; ${new Date().getFullYear()} ${BRAND}. All rights reserved.</p>
    <p>Phone: ${PHONE} | Email: support@franchiseleadspro.com</p>
    <nav aria-label="Footer">
      <a href="/services">Services</a> |
      <a href="/blog">Blog</a> |
      <a href="/contact">Contact</a> |
      <a href="/franchise-leads-usa">USA</a> |
      <a href="/franchise-leads-india">India</a> |
      <a href="/franchise-leads-uk">UK</a> |
      <a href="/buy-franchise-leads">Buy Leads</a> |
      <a href="/legal-terms/privacy-policy">Privacy Policy</a>
    </nav>
    <p>${BRAND} provides franchise lead generation, LinkedIn marketing, social media marketing, website development, SEO, and IT services worldwide.</p>
  </footer>`;
}

// ──────────────────────────────────────
// PAGE DATA GENERATORS
// ──────────────────────────────────────

function homePage() {
  return {
    title: `${BRAND} — #1 Franchise Lead Generation Agency`,
    description: 'Generate qualified franchise buyer leads with LinkedIn marketing, social media, website development & IT services. Serving USA, India, UK & worldwide.',
    h1: '#1 Franchise Lead Generation Agency',
    breadcrumbs: [{ name: 'Home', url: '/' }],
    faq: [
      { q: 'What services does FranchiseLeadsPro offer?', a: 'We offer LinkedIn marketing, social media marketing, franchise website development, app development, SEO, IT outsourcing, and comprehensive franchise lead generation services.' },
      { q: 'How much do franchise leads cost?', a: 'Pricing varies based on quality, exclusivity, and market. Contact us for a free consultation and custom quote.' },
      { q: 'How quickly can I start receiving leads?', a: 'Most clients receive their first qualified franchise leads within 30 days of campaign launch.' },
      { q: 'Do you guarantee lead quality?', a: 'Yes. We pre-screen all leads for investment capacity, timeline, and genuine interest in franchise ownership.' },
      { q: 'What countries do you serve?', a: 'We serve franchise brands in the USA, India, UK, Canada, Australia, UAE, Kuwait, and other markets worldwide.' },
    ],
    content: `
      <section>
        <h2>Generate Qualified Franchise Buyer Leads</h2>
        <p>${BRAND} is the world's leading franchise-focused marketing and IT solutions agency. We help franchisors, franchise consultants, and franchise brands connect with qualified investors through data-driven digital marketing, professional website development, and cutting-edge technology.</p>
        <p>Whether you need a <strong>franchise lead generation agency</strong>, <strong>franchise marketing company</strong>, <strong>franchise website development</strong>, or <strong>IT outsourcing partner</strong> — we deliver measurable results.</p>
      </section>
      <section>
        <h2>Our Franchise Marketing & IT Services</h2>
        <h3>LinkedIn Marketing for Franchise Leads</h3>
        <p>Targeted LinkedIn outreach using Sales Navigator to connect your franchise brand with high-net-worth investors. Includes connection campaigns, personalized messaging, thought leadership content, and meeting booking automation.</p>
        <h3>Social Media Marketing</h3>
        <p>Full-spectrum social media across Facebook, Instagram, LinkedIn, and YouTube. Paid advertising, organic content, retargeting, and lookalike audience targeting to generate qualified franchise buyer leads at scale.</p>
        <h3>Franchise Website Development</h3>
        <p>High-converting, mobile-first franchise websites with lead capture forms, territory maps, investment details, and trust-building elements. SEO-optimized for maximum visibility.</p>
        <h3>IT Services & App Development</h3>
        <p>Custom web apps, mobile apps (iOS & Android), CRM implementation, marketing automation, cloud infrastructure, and IT outsourcing for franchise brands.</p>
        <h3>SEO & Digital Marketing</h3>
        <p>Technical SEO, local SEO, content marketing, PPC management (Google & Bing Ads), and franchise-specific keyword optimization.</p>
      </section>
      <section>
        <h2>Markets We Serve</h2>
        <ul>
          <li><a href="/franchise-leads-usa">Franchise Leads USA</a> — All 50 states, 250+ cities</li>
          <li><a href="/franchise-leads-india">Franchise Leads India</a> — All major states and cities</li>
          <li><a href="/franchise-leads-uk">Franchise Leads UK</a> — England, Scotland, Wales</li>
          <li><a href="/franchise-leads-canada">Franchise Leads Canada</a> — Ontario, BC, Quebec & more</li>
          <li><a href="/franchise-leads-australia">Franchise Leads Australia</a> — Sydney, Melbourne & more</li>
          <li><a href="/franchise-leads-dubai">Franchise Leads Dubai & UAE</a></li>
          <li><a href="/franchise-leads-kuwait">Franchise Leads Kuwait</a></li>
        </ul>
      </section>
      <section>
        <h2>Who We Work With</h2>
        <ul>
          <li><strong>Franchisors</strong> — Food, retail, fitness, education, and service brands</li>
          <li><strong>Franchise Consultants & Brokers</strong> — Independent consultants needing steady lead flow</li>
          <li><strong>Franchise Development Companies</strong> — Growing franchise systems</li>
          <li><strong>Multi-Unit Operators</strong> — Expanding franchise portfolios</li>
          <li><strong>International Brands</strong> — Expanding into new global markets</li>
        </ul>
      </section>
      <section>
        <h2>Why Choose ${BRAND}?</h2>
        <ul>
          <li>100% franchise-industry focused</li>
          <li>15,000+ qualified franchise leads generated</li>
          <li>500+ franchise brands served globally</li>
          <li>3-5x average ROI within 90 days</li>
          <li>First leads within 30 days</li>
          <li>Full-service: marketing + web dev + IT</li>
        </ul>
      </section>
      <section>
        <h2>Our 4-Step Process</h2>
        <ol>
          <li><strong>Discovery & Strategy</strong> — Analyze your franchise model, target market, and competition</li>
          <li><strong>Campaign Development</strong> — Custom marketing campaigns and technology setup</li>
          <li><strong>Lead Generation</strong> — Multi-channel campaigns across LinkedIn, social media, and search</li>
          <li><strong>Qualification & Delivery</strong> — Every lead pre-screened for investment capacity and interest</li>
        </ol>
      </section>
      <section>
        <h2>Popular Services</h2>
        <ul>
          <li><a href="/services/franchise-lead-generation">Franchise Lead Generation</a></li>
          <li><a href="/services/franchise-marketing">Franchise Marketing</a></li>
          <li><a href="/services/franchise-website-design">Franchise Website Design</a></li>
          <li><a href="/services/franchise-seo">Franchise SEO</a></li>
          <li><a href="/services/franchise-digital-marketing">Franchise Digital Marketing</a></li>
          <li><a href="/buy-franchise-leads">Buy Franchise Leads</a></li>
        </ul>
      </section>
      <section>
        <h2>Get Started — Free Consultation</h2>
        <p>Ready to generate more franchise leads? <a href="/contact">Contact us today</a> or call ${PHONE}.</p>
      </section>
    `
  };
}

function locationPage(country, state, city) {
  const countryName = slugToTitle(country === 'usa' ? 'united-states' : country);
  const stateName = state ? slugToTitle(state) : '';
  const cityName = city ? slugToTitle(city) : '';
  const locationStr = cityName ? `${cityName}, ${stateName}` : stateName || countryName;
  const fullLocation = cityName ? `${cityName}, ${stateName}, ${countryName}` : stateName ? `${stateName}, ${countryName}` : countryName;

  const crumbs = [{ name: 'Home', url: '/' }, { name: 'Locations', url: '/locations' }];
  if (country) crumbs.push({ name: countryName, url: `/locations/${country}` });
  if (state) crumbs.push({ name: stateName, url: `/locations/${country}/${state}` });
  if (city) crumbs.push({ name: cityName, url: `/locations/${country}/${state}/${city}` });

  return {
    title: truncate(`Franchise Leads ${locationStr} | ${BRAND}`, 60),
    description: truncate(`Get qualified franchise leads in ${fullLocation}. LinkedIn marketing, social media, website development & IT services for franchise brands.`, 160),
    h1: `Franchise Leads in ${locationStr}`,
    breadcrumbs: crumbs,
    faq: [
      { q: `How can I generate franchise leads in ${locationStr}?`, a: `${BRAND} uses LinkedIn outreach, social media ads, SEO, and targeted campaigns to generate qualified franchise investor leads in ${locationStr}.` },
      { q: `What franchise marketing services are available in ${locationStr}?`, a: `We offer LinkedIn marketing, social media campaigns, website development, SEO, PPC, and IT services in ${locationStr}.` },
    ],
    content: `
      <section>
        <h2>Franchise Marketing in ${locationStr}</h2>
        <p>${BRAND} delivers comprehensive franchise marketing and technology services in ${fullLocation}. We help franchisors, consultants, and brands find qualified investors in this market.</p>
      </section>
      <section>
        <h2>Our Services in ${locationStr}</h2>
        <ul>
          <li><strong>Franchise Lead Generation</strong> — Targeted campaigns for ${locationStr}</li>
          <li><strong>LinkedIn Marketing</strong> — Sales Navigator outreach in ${locationStr}</li>
          <li><strong>Social Media Marketing</strong> — Facebook, Instagram, LinkedIn campaigns</li>
          <li><strong>Website Development</strong> — High-converting franchise websites</li>
          <li><strong>SEO & Local SEO</strong> — Dominate search results in ${locationStr}</li>
          <li><strong>IT & App Development</strong> — Custom technology solutions</li>
        </ul>
      </section>
      <section>
        <h2>Why ${locationStr} for Franchising?</h2>
        <p>${locationStr} is a dynamic franchise market with strong demand and a growing pool of investors. Our local expertise helps your brand stand out.</p>
      </section>
      <section>
        <h2>Get Started in ${locationStr}</h2>
        <p><a href="/contact">Contact us</a> to discuss your franchise strategy in ${locationStr}. Call ${PHONE}.</p>
      </section>
      <nav aria-label="Related"><a href="/locations/${country}">All ${countryName} locations</a> | <a href="/services">Services</a> | <a href="/">Home</a></nav>
    `
  };
}

function serviceLocationPage(service, country, state, city) {
  const serviceName = slugToTitle(service);
  const countryName = slugToTitle(country === 'usa' ? 'united-states' : country);
  const stateName = state ? slugToTitle(state) : '';
  const cityName = city ? slugToTitle(city) : '';
  const locationStr = cityName ? `${cityName}, ${stateName}` : stateName;

  const crumbs = [
    { name: 'Home', url: '/' },
    { name: serviceName, url: `/services` },
    { name: locationStr, url: `/${service}/${country}/${state}${city ? '/' + city : ''}` },
  ];

  return {
    title: truncate(`${serviceName} in ${locationStr} | ${BRAND}`, 60),
    description: truncate(`Professional ${serviceName.toLowerCase()} in ${locationStr}, ${countryName}. ${BRAND} helps franchise brands grow with expert strategies & technology.`, 160),
    h1: `${serviceName} in ${locationStr}`,
    breadcrumbs: crumbs,
    faq: [
      { q: `What does ${serviceName.toLowerCase()} in ${locationStr} include?`, a: `Our ${serviceName.toLowerCase()} services in ${locationStr} include strategy development, targeted campaigns, performance tracking, and ROI optimization for franchise brands.` },
    ],
    content: `
      <section>
        <h2>${serviceName} Services in ${locationStr}</h2>
        <p>Looking for ${serviceName.toLowerCase()} in ${locationStr}, ${countryName}? ${BRAND} provides expert services to help franchise brands succeed in the ${locationStr} market.</p>
      </section>
      <section>
        <h2>What We Offer</h2>
        <ul>
          <li>Customized ${serviceName.toLowerCase()} strategies for ${locationStr}</li>
          <li>Data-driven campaigns targeting qualified franchise investors</li>
          <li>Local market expertise and competitive analysis</li>
          <li>Website development and optimization</li>
          <li>Measurable ROI and transparent reporting</li>
        </ul>
      </section>
      <section>
        <h2>Complete Franchise Solutions</h2>
        <p>Beyond ${serviceName.toLowerCase()}, we offer full-spectrum franchise services: LinkedIn marketing, social media, website development, app development, SEO, and IT outsourcing.</p>
      </section>
      <nav aria-label="Related"><a href="/contact">Get a consultation</a> | <a href="/locations/${country}/${state}">More in ${stateName}</a> | <a href="/services">Services</a></nav>
    `
  };
}

function keywordPage(keyword) {
  const name = slugToTitle(keyword);
  return {
    title: truncate(`${name} | ${BRAND}`, 60),
    description: truncate(`Professional ${name.toLowerCase()} services from ${BRAND}. We help franchisors and franchise brands grow with proven strategies and technology.`, 160),
    h1: name,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: name, url: `/services/${keyword}` }],
    content: `
      <section>
        <h2>${name} by ${BRAND}</h2>
        <p>${BRAND} offers professional ${name.toLowerCase()} designed for the franchise industry. Data-driven strategies that deliver qualified leads and sustainable growth.</p>
      </section>
      <section>
        <h2>How It Works</h2>
        <ul>
          <li>Strategic planning and market analysis</li>
          <li>Targeted campaign development</li>
          <li>LinkedIn and social media outreach</li>
          <li>Website optimization and development</li>
          <li>Performance tracking and ROI analysis</li>
        </ul>
      </section>
      <section>
        <h2>Why Choose Us for ${name}?</h2>
        <p>Deep franchise industry expertise — we understand FDD compliance, territory mapping, and investor psychology. This gives you a significant edge over generic agencies.</p>
      </section>
      <section>
        <h2>Related Services</h2>
        <ul>
          <li><a href="/services/franchise-lead-generation">Franchise Lead Generation</a></li>
          <li><a href="/services/franchise-marketing">Franchise Marketing</a></li>
          <li><a href="/services/franchise-website-design">Franchise Website Design</a></li>
          <li><a href="/buy-franchise-leads">Buy Franchise Leads</a></li>
        </ul>
      </section>
      <nav aria-label="Related"><a href="/contact">Contact us</a> | <a href="/services">All Services</a> | <a href="/">Home</a></nav>
    `
  };
}

function blogPostPage(slug) {
  const title = slugToTitle(slug);
  return {
    title: truncate(`${title} | ${BRAND} Blog`, 60),
    description: truncate(`Read "${title}" — expert franchise marketing insights, lead generation strategies, and industry tips from ${BRAND}.`, 160),
    h1: title,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: title, url: `/blog/${slug}` }],
    content: `
      <article>
        <p>Read the full article about ${title.toLowerCase()} in the franchise industry on our website.</p>
        <p><a href="/blog">← Back to all blog posts</a></p>
      </article>
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

function staticPage(path) {
  const pages = {
    'about': {
      title: `About ${BRAND} | Franchise Marketing Agency`,
      description: `${BRAND} is the leading franchise lead generation agency and IT solutions provider for franchisors and franchise brands worldwide.`,
      h1: `About ${BRAND}`,
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }],
    },
    'services': {
      title: `Franchise Marketing & IT Services | ${BRAND}`,
      description: 'LinkedIn marketing, social media, website development, SEO, IT outsourcing & lead generation for franchisors and franchise brands.',
      h1: 'Franchise Marketing & IT Services',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }],
    },
    'digital-marketing': {
      title: `Franchise Digital Marketing | ${BRAND}`,
      description: 'SEO, PPC, social media, content marketing & franchise brand building for franchisors and franchise consultants.',
      h1: 'Franchise Digital Marketing Services',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Digital Marketing', url: '/digital-marketing' }],
    },
    'contact': {
      title: `Contact Us | ${BRAND}`,
      description: `Contact ${BRAND} for franchise lead generation, marketing, website development & IT services. Free consultation available.`,
      h1: `Contact ${BRAND}`,
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }],
    },
    'blog': {
      title: `Franchise Marketing Blog | ${BRAND}`,
      description: 'Expert insights on franchise lead generation, marketing strategies, website development & industry trends.',
      h1: 'Franchise Marketing Blog',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }],
    },
    'testimonials': {
      title: `Client Testimonials | ${BRAND}`,
      description: 'See what franchise brands and consultants say about our lead generation, marketing & IT services.',
      h1: 'Client Testimonials & Success Stories',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Testimonials', url: '/testimonials' }],
    },
    'buy-franchise-leads': {
      title: `Buy Franchise Leads | ${BRAND}`,
      description: 'Buy pre-qualified franchise buyer leads. Exclusive, verified franchise investor leads for franchisors and consultants.',
      h1: 'Buy Pre-Qualified Franchise Leads',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Buy Leads', url: '/buy-franchise-leads' }],
    },
    'franchise-leads-usa': {
      title: `Franchise Leads USA | ${BRAND}`,
      description: 'Generate qualified franchise leads across all 50 US states. LinkedIn marketing, website development & IT for American franchise brands.',
      h1: 'Franchise Lead Generation in the USA',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'USA', url: '/franchise-leads-usa' }],
    },
    'franchise-leads-uk': {
      title: `Franchise Leads UK | ${BRAND}`,
      description: 'Generate qualified franchise leads across the United Kingdom. London, Manchester, Birmingham & more.',
      h1: 'Franchise Lead Generation in the UK',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'UK', url: '/franchise-leads-uk' }],
    },
    'franchise-leads-india': {
      title: `Franchise Leads India | ${BRAND}`,
      description: 'Generate qualified franchise leads across India. Mumbai, Delhi, Bangalore, Chennai & more. LinkedIn marketing & IT services.',
      h1: 'Franchise Lead Generation in India',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'India', url: '/franchise-leads-india' }],
    },
    'franchise-leads-canada': {
      title: `Franchise Leads Canada | ${BRAND}`,
      description: 'Generate qualified franchise leads across Canada. Toronto, Vancouver, Montreal, Calgary & more.',
      h1: 'Franchise Lead Generation in Canada',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Canada', url: '/franchise-leads-canada' }],
    },
    'franchise-leads-australia': {
      title: `Franchise Leads Australia | ${BRAND}`,
      description: 'Generate qualified franchise leads across Australia. Sydney, Melbourne, Brisbane, Perth & more.',
      h1: 'Franchise Lead Generation in Australia',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Australia', url: '/franchise-leads-australia' }],
    },
    'franchise-leads-dubai': {
      title: `Franchise Leads Dubai & UAE | ${BRAND}`,
      description: 'Generate qualified franchise leads in Dubai, Abu Dhabi & UAE. LinkedIn marketing & IT services for Middle East brands.',
      h1: 'Franchise Lead Generation in Dubai & UAE',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Dubai', url: '/franchise-leads-dubai' }],
    },
    'franchise-leads-kuwait': {
      title: `Franchise Leads Kuwait | ${BRAND}`,
      description: 'Generate qualified franchise leads in Kuwait. LinkedIn marketing, social media & website development.',
      h1: 'Franchise Lead Generation in Kuwait',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Kuwait', url: '/franchise-leads-kuwait' }],
    },
    'case-studies': {
      title: `Case Studies | Franchise Lead Generation Success Stories | ${BRAND}`,
      description: 'See how franchise consultants like Jesica Thompson generated 847+ qualified leads with paid advertising, CRM management, and inbound lead strategies.',
      h1: 'Real Results. Real Clients.',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Case Studies', url: '/case-studies' }],
      content: `
        <section>
          <h2>Featured Case Study — Franchise Solutions Inc.</h2>
          <p>Jesica Thompson, a veteran franchise consultant at Franchise Solutions Inc., partnered with ${BRAND} to scale her digital presence and generate a consistent flow of qualified inbound leads.</p>
          <h3>Services Delivered</h3>
          <ul>
            <li>Paid Advertising (Google Ads + Meta Ads)</li>
            <li>CRM Setup & Automation</li>
            <li>Website Inbound Lead Optimization</li>
            <li>Franchise Inquiry Management</li>
            <li>Weekly Performance Reporting</li>
          </ul>
           <h3>Engagement Summary</h3>
           <ul>
             <li>Partnership Started: Q4 2024</li>
             <li>Services Duration: Ongoing (5+ months)</li>
             <li>Results Measured Over: First 5 months</li>
           </ul>
           <h3>Results</h3>
           <ul>
             <li>312 Inbound Leads Generated</li>
             <li>47 Qualified Investor Meetings</li>
             <li>8 Franchise Deals Closed</li>
             <li>4.1x Ad Spend ROI</li>
           </ul>
          <blockquote>"${BRAND} didn't just bring us leads — they brought us the right leads. Our pipeline went from sporadic referrals to a predictable stream of serious franchise investors."<br>— Jesica Thompson, Franchise Consultant, Franchise Solutions Inc.</blockquote>
        </section>
        <section>
          <h2>Want Results Like These?</h2>
          <p>Book a free strategy call and let us show you how we can fill your pipeline with qualified franchise investors. <a href="/contact">Get started</a> or call ${PHONE}.</p>
        </section>
      `,
    },
  };
  return pages[path] || null;
}

function legalPage(path) {
  const pages = {
    'legal-terms/privacy-policy': {
      title: `Privacy Policy | ${BRAND}`,
      description: `${BRAND} privacy policy. How we collect, use, and protect your personal information.`,
      h1: 'Privacy Policy',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/legal-terms/privacy-policy' }],
    },
    'legal-terms/refund-satisfaction-guarantee-policy': {
      title: `Refund & Guarantee Policy | ${BRAND}`,
      description: `${BRAND} refund and satisfaction guarantee policy. Our commitment to client satisfaction.`,
      h1: 'Refund & Satisfaction Guarantee Policy',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Refund Policy', url: '/legal-terms/refund-satisfaction-guarantee-policy' }],
    },
  };
  return pages[path] || null;
}

// ──────────────────────────────────────
// STRUCTURED DATA BUILDERS
// ──────────────────────────────────────

function buildBreadcrumbSchema(breadcrumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.name,
      "item": `${SITE}${b.url}`
    }))
  };
}

function buildFAQSchema(faq) {
  if (!faq || !faq.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };
}

function buildWebPageSchema(title, description, canonical) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonical,
    "isPartOf": { "@type": "WebSite", "name": BRAND, "url": SITE },
    "publisher": {
      "@type": "Organization",
      "name": BRAND,
      "url": SITE,
      "logo": `${SITE}/logo-hq.png`,
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
  };
}

function buildFAQContent(faq) {
  if (!faq || !faq.length) return '';
  const items = faq.map(f => `
    <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h3 itemprop="name">${f.q}</h3>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">${f.a}</p>
      </div>
    </div>`).join('');
  return `<section><h2>Frequently Asked Questions</h2>${items}</section>`;
}

// ──────────────────────────────────────
// HTML BUILDER — Single H1, proper meta
// ──────────────────────────────────────

function buildHtml({ title, description, h1, content, canonicalPath, breadcrumbs, faq, noindex }) {
  // Enforce limits
  const safeTitle = truncate(title, 60);
  const safeDesc = truncate(description, 160);
  const canonical = `${SITE}${canonicalPath}`;
  const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large';

  const schemas = [buildWebPageSchema(safeTitle, safeDesc, canonical)];
  if (breadcrumbs && breadcrumbs.length > 1) schemas.push(buildBreadcrumbSchema(breadcrumbs));
  const faqSchema = buildFAQSchema(faq);
  if (faqSchema) schemas.push(faqSchema);

  const schemaScripts = schemas.map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n  ');
  const faqHtml = buildFAQContent(faq);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${safeTitle}</title>
  <meta name="description" content="${safeDesc}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="${robotsContent}">
  <meta property="og:title" content="${safeTitle}">
  <meta property="og:description" content="${safeDesc}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${BRAND}">
  <meta property="og:image" content="${SITE}/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${safeTitle}">
  <meta name="twitter:description" content="${safeDesc}">
  <meta name="twitter:image" content="${SITE}/og-image.png">
  <link rel="icon" type="image/png" href="/favicon-32x32.png">
  ${schemaScripts}
</head>
<body>
  ${buildNav()}
  <main>
    <h1>${h1}</h1>
    ${content || `<p>${safeDesc}</p>`}
    ${faqHtml}
  </main>
  ${buildFooter()}
</body>
</html>`;
}

// ──────────────────────────────────────
// HANDLER
// ──────────────────────────────────────

export default function handler(req, res) {
  try {
    const rawPath = (req.query.path || '').replace(/^\/+|\/+$/g, '');
    const segments = rawPath.split('/').filter(Boolean);
    let pageData;
    const canonicalPath = rawPath ? `/${rawPath}` : '/';

    if (!rawPath || rawPath === 'index.html') {
      pageData = homePage();
    } else if (segments[0] === 'blog' && segments[1]) {
      pageData = blogPostPage(segments[1]);
    } else if (segments[0] === 'locations') {
      const [, country, state, city] = segments;
      if (country) pageData = locationPage(country, state, city);
    } else if (segments[0] === 'services' && segments[1]) {
      pageData = keywordPage(segments[1]);
    } else if (segments[0] === 'legal-terms') {
      pageData = legalPage(rawPath);
    } else if (['search', 'session-demo', 'admin', 'blog-admin', 'auto-blog-admin', 'sitemap-generator'].includes(segments[0])) {
      // Non-indexable pages — return noindex
      pageData = {
        title: `${slugToTitle(segments[0])} | ${BRAND}`,
        description: `${BRAND} ${slugToTitle(segments[0]).toLowerCase()} page.`,
        h1: slugToTitle(segments[0]),
        breadcrumbs: [{ name: 'Home', url: '/' }],
        noindex: true,
      };
    } else if (segments.length >= 3 && !['locations','blog','legal-terms','admin','sitemap'].includes(segments[0])) {
      pageData = serviceLocationPage(segments[0], segments[1], segments[2], segments[3]);
    } else {
      pageData = staticPage(rawPath);
    }

    if (!pageData) {
      pageData = {
        title: `Page Not Found | ${BRAND}`,
        description: 'The page you are looking for could not be found.',
        h1: 'Page Not Found',
        content: `<p>Sorry, this page does not exist. <a href="/">Return to homepage</a>.</p>`,
        breadcrumbs: [{ name: 'Home', url: '/' }],
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
    const fallbackHtml = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>${BRAND}</title><meta name="robots" content="index, follow"><link rel="canonical" href="${SITE}/${(req.query.path || '').replace(/^\/+|\/+$/g, '')}"></head><body><h1>${BRAND}</h1><p>Visit <a href="${SITE}">${BRAND}</a> for franchise lead generation, marketing, and IT services.</p></body></html>`;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.status(200).send(fallbackHtml);
  }
}
