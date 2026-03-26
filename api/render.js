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

function getCountryInsight(code) {
  const data = {
    usa: {
      economy: "The United States has a $25.5 trillion GDP and hosts the world's largest franchise industry with over 790,000 franchise establishments generating $827 billion in economic output annually.",
      climate: "The US franchise sector employs 8.4 million people and accounts for approximately 3% of GDP. The FTC Franchise Rule governs franchise sales nationally, with 15 states requiring additional registration.",
      industries: ["Quick-service restaurants", "Business services", "Personal services", "Home services", "Fitness", "Education"],
      investment: "$50K – $5M+ across all concepts",
      regulation: "Federal FTC Rule requires a Franchise Disclosure Document (FDD) with 23 mandatory items. State laws vary from non-registration to full registration requirements.",
      demographics: "331 million residents with strong entrepreneurial culture — 32% of Americans express interest in business ownership, with franchising as a preferred entry path.",
      growth: "US franchise output is projected to grow 4.2% annually through 2028, with technology-enabled services and health/wellness concepts leading growth.",
    },
    uk: {
      economy: "The UK's $3.1 trillion economy supports a mature franchise sector contributing £17.2 billion annually, with over 48,000 franchise businesses operating nationwide.",
      climate: "The British Franchise Association (BFA) provides voluntary self-regulation. General contract law, competition law, and consumer protection regulations apply to franchise relationships.",
      industries: ["Hotel & catering", "Personal services", "Business services", "Property services", "Health & fitness", "Cleaning services"],
      investment: "£10K – £1M+ depending on concept",
      regulation: "No mandatory franchise registration in the UK. The BFA provides an ethical framework and accreditation system. EU-derived competition law and block exemption regulations influence franchise agreements.",
      demographics: "67 million residents with high franchise awareness — the BFA reports franchise sector employment of 710,000 people with a failure rate below 5%.",
      growth: "UK franchise sector grew 2.8% in the latest survey. Home-based and low-investment franchises are the fastest-growing segment.",
    },
    india: {
      economy: "India's $3.7 trillion economy is the world's fifth-largest and fastest-growing major economy. The franchise industry is valued at ₹70,000 crore ($50B) with 4,600+ franchise systems.",
      climate: "India has no specific franchise legislation, operating under the Indian Contract Act. The market is growing at 30-35% annually, making it the fastest-growing franchise market globally.",
      industries: ["Food & beverage", "Education & coaching", "Health & beauty", "Retail", "IT services", "Apparel"],
      investment: "₹5 lakhs – ₹5 crores ($6K – $600K) depending on concept",
      regulation: "No franchise-specific legislation exists. Franchise agreements are governed by the Indian Contract Act 1872, with FDI norms applicable for international franchisors.",
      demographics: "1.4 billion people with median age of 28.4 years — the youngest major economy. Rising middle class (500M+) drives demand across tier-1, tier-2, and tier-3 cities.",
      growth: "India adds 1,200+ new franchise outlets monthly. Tier-2 and tier-3 cities now account for 55% of new franchise growth.",
    },
    canada: {
      economy: "Canada's $2.1 trillion economy is supported by strong resource, technology, and financial sectors. The franchise industry contributes $100 billion annually with 76,000+ franchise units.",
      climate: "Canada has province-specific franchise legislation, with Alberta, Ontario, Manitoba, New Brunswick, PEI, and British Columbia having enacted franchise-specific statutes.",
      industries: ["Food service", "Retail", "Automotive services", "Business services", "Health & wellness", "Education"],
      investment: "CAD $100K – $2M depending on concept and province",
      regulation: "Six provinces have franchise-specific legislation requiring disclosure documents 14 days before signing. Ontario's Arthur Wishart Act is the most comprehensive.",
      demographics: "39 million residents with strong immigration driving population growth of 2.7%. Multicultural demographics create opportunities for diverse franchise concepts.",
      growth: "Canadian franchise sector is growing at 3.5% annually with strong demand in suburban markets around Toronto, Vancouver, and Calgary.",
    },
    australia: {
      economy: "Australia's $1.7 trillion economy supports approximately 97,000 franchise units across 1,200+ franchise systems, making it one of the most franchised economies per capita.",
      climate: "Australia's franchise sector is regulated by the Franchising Code of Conduct under the Competition and Consumer Act 2010, enforced by the ACCC.",
      industries: ["Food & beverage", "Retail", "Home services", "Fitness", "Education", "Cleaning services"],
      investment: "AUD $50K – $2M+ depending on concept",
      regulation: "The Franchising Code of Conduct is mandatory, covering disclosure, cooling-off periods, dispute resolution, and end-of-term arrangements. ACCC actively enforces compliance.",
      demographics: "26 million residents concentrated in major coastal cities. High median household income ($AUD 95,000) supports premium franchise concepts.",
      growth: "Australian franchising grew 2.1% in the latest census. Home services and health/wellness franchises are outperforming traditional retail.",
    },
    dubai: {
      economy: "The UAE's $500 billion economy is driven by oil, tourism, real estate, and a rapidly diversifying service sector. Dubai and Abu Dhabi serve as franchise hubs for the entire Middle East.",
      climate: "The UAE franchise market is valued at $27 billion with approximately 1,000 franchise brands. Free zones offer 100% foreign ownership for international franchise entry.",
      industries: ["Food & beverage", "Retail", "Education", "Health & beauty", "Fitness", "Business services"],
      investment: "AED 200K – 10M ($55K – $2.7M) depending on concept and free zone",
      regulation: "No specific franchise law exists, but the UAE Commercial Agencies Law and individual emirate regulations apply. Free zones like DMCC and DIFC offer favorable setups.",
      demographics: "9.9 million residents with 88% expatriate population. High disposable income and cosmopolitan consumer base drive demand for international brands.",
      growth: "UAE franchise sector is growing at 27% annually. Expo legacy zones and new residential communities create continuous expansion opportunities.",
    },
    kuwait: {
      economy: "Kuwait's $180 billion economy is oil-driven but actively diversifying. The government's New Kuwait 2035 vision emphasizes private sector growth and SME development.",
      climate: "Kuwait's franchise market is growing with approximately 300 franchise brands. The government actively supports franchise investment as part of economic diversification.",
      industries: ["Food & beverage", "Retail", "Education", "Health & fitness", "Automotive", "Personal services"],
      investment: "KWD 20K – 500K ($65K – $1.6M) depending on concept",
      regulation: "Kuwait's Commercial Law governs franchise relationships. Foreign franchisors typically need a local Kuwaiti partner or agent, though free trade zone exceptions exist.",
      demographics: "4.3 million residents with 70% under age 40. High GDP per capita ($33,000) and strong consumer spending drive premium franchise demand.",
      growth: "Kuwait's franchise market is projected to grow 15% annually through 2030 as Vision 2035 creates new commercial zones.",
    },
  };
  const key = code.toLowerCase().replace('ae','dubai').replace('ca','canada').replace('au','australia').replace('in','india');
  return data[key] || data['usa'];
}

const usaStateData = {
  california: { economy: "California's $3.6 trillion GDP makes it the world's fifth-largest economy, leading in tech, entertainment, agriculture, and professional services.", industries: "quick-service restaurants, fitness & wellness, home services, tech-enabled services, education, and senior care", regulation: "California requires franchise registration with the Department of Financial Protection and Innovation. Annual filing and a CA-specific FDD addendum are mandatory.", demographics: "39.5 million residents, median household income $84,907. Diverse, health-conscious population drives wellness, organic food, and education franchise demand.", growth: "Franchise employment grew 3.2% YoY. Emerging markets in the Inland Empire and Central Valley offer lower entry costs.", investment: "$150K – $2M+" },
  texas: { economy: "Texas boasts a $2.0 trillion economy driven by energy, tech, healthcare, and manufacturing. No state income tax attracts franchisors and franchisees.", industries: "fast-casual dining, home improvement, automotive services, healthcare, commercial cleaning, and pet services", regulation: "Texas is a non-registration state — only federal FTC compliance required. The Deceptive Trade Practices Act provides additional franchisee protections.", demographics: "30+ million residents with 1.5% annual population growth. Young median age (34.8) and strong household formation drive demand.", growth: "Texas added more franchise jobs than any state recently. DFW, Houston, Austin, and San Antonio all rank in the top 20 US franchise markets.", investment: "$100K – $1.5M" },
  "new-york": { economy: "New York's $1.9 trillion economy is anchored by financial services, media, technology, healthcare, and tourism. NYC alone has a GDP larger than most countries.", industries: "quick-service & fast-casual dining, fitness studios, personal services, real estate services, education, and business services", regulation: "New York is a franchise registration state. Franchisors must register with the NY Attorney General and comply with the state's Franchise Sales Act.", demographics: "19.8 million residents with the highest density of high-net-worth individuals in the US. Strong demand for premium, convenience-oriented franchises.", growth: "Post-pandemic recovery accelerated franchise growth in suburban areas like Westchester, Long Island, and the Hudson Valley.", investment: "$200K – $3M+ in NYC metro; $100K – $1M upstate" },
  florida: { economy: "Florida's $1.4 trillion economy is driven by tourism, real estate, agriculture, aerospace, and a growing tech sector. No state income tax boosts franchise investment.", industries: "hospitality & food service, senior care, pool & outdoor services, real estate, fitness & wellness, and insurance", regulation: "Florida's Franchise Relationship Act governs terminations and non-renewals. FDD filing with the Division of Consumer Services is required.", demographics: "22.2 million residents with the fastest-growing 65+ population in the US, creating exceptional opportunities in senior care and healthcare franchises.", growth: "Franchise sector grew 4.1% YoY, driven by continued population influx from northern states and expanding suburban corridors.", investment: "$100K – $1.5M" },
  illinois: { economy: "Illinois' $950B economy is anchored by Chicago's financial, manufacturing, and transportation sectors. Major Midwest hub for franchise headquarters.", industries: "restaurant & food service, business consulting, staffing, automotive care, education, and commercial cleaning", regulation: "Illinois is a franchise registration state with the Franchise Disclosure Act. Annual registration and relationship law protections apply.", demographics: "12.8 million residents. Chicago metro accounts for 75% of economic output. Diverse workforce supports franchise operations.", growth: "Suburban Chicago markets like Naperville, Schaumburg, and Aurora see strong franchise expansion as remote work shifts consumer spending.", investment: "$100K – $1.5M" },
  georgia: { economy: "Georgia's $730B economy benefits from its position as the Southeast logistics hub with the world's busiest airport and a major deep-water port.", industries: "quick-service restaurants, home services, fitness, childcare, commercial cleaning, and logistics", regulation: "Georgia is a non-registration state. Only federal FTC compliance required. The Fair Business Practices Act provides general consumer protections.", demographics: "10.9 million residents. Atlanta metro growing at 1.2% annually. Young, educated workforce with median age 36.9.", growth: "Metro Atlanta suburbs — Gwinnett, Forsyth, Cherokee — are among the fastest-growing franchise markets in the Southeast.", investment: "$80K – $1.2M" },
  ohio: { economy: "Ohio's $700B economy is driven by manufacturing, healthcare, financial services, and a growing tech sector centered around Columbus.", industries: "food service, healthcare services, automotive, home improvement, education, and business services", regulation: "Ohio is a franchise registration state through the Department of Commerce. Franchisors must file annually.", demographics: "11.8 million residents. Columbus metro is one of the fastest-growing in the Midwest with a young, educated workforce.", growth: "Columbus and Cincinnati suburbs are seeing increased franchise investment, particularly in home services and healthcare.", investment: "$80K – $1.2M" },
  pennsylvania: { economy: "Pennsylvania's $850B economy is anchored by healthcare, pharmaceuticals, manufacturing, and financial services across the Philadelphia and Pittsburgh metros.", industries: "food service, healthcare, education, home services, fitness, and business services", regulation: "Pennsylvania does not require franchise registration beyond federal FTC compliance, but general business registration applies.", demographics: "13 million residents across diverse urban and suburban markets. Philadelphia and Pittsburgh metros offer different demographic profiles.", growth: "Suburban growth corridors around Philadelphia's Main Line and Pittsburgh's northern suburbs are attracting franchise investment.", investment: "$100K – $1.5M" },
};

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

  // Get country-level insight
  const ci = getCountryInsight(country);
  // Get state-level insight if USA
  const si = (country === 'usa' && state) ? (usaStateData[state] || null) : null;
  const industries = si ? si.industries : ci.industries.join(', ');
  const economy = si ? si.economy : ci.economy;
  const regulation = si ? si.regulation : ci.regulation;
  const demographics = si ? si.demographics : ci.demographics;
  const growth = si ? si.growth : ci.growth;
  const investment = si ? si.investment : ci.investment;

  // Build rich, unique FAQ
  const faq = [
    { q: `What franchise opportunities are strongest in ${locationStr}?`, a: `The top-performing franchise sectors in ${locationStr} include ${industries}. ${growth} Our market analysis identifies specific sub-sectors with the highest ROI potential based on local demographics and competitive landscape.` },
    { q: `How much capital is needed to invest in a franchise in ${locationStr}?`, a: `Investment requirements in ${locationStr} typically range from ${investment}. This varies based on franchise concept, territory size, and build-out requirements. We match investors with opportunities aligned to their capital and financial goals.` },
    { q: `What franchise regulations apply in ${locationStr}?`, a: regulation },
    { q: `How quickly can I get franchise leads in ${locationStr}?`, a: `Most clients begin receiving qualified franchise inquiries within 14–21 days of campaign launch in ${locationStr}. We use LinkedIn outreach, targeted social media, SEO, and paid search to build a multi-channel pipeline. Results improve as we optimize targeting based on response data.` },
    { q: `Why is ${locationStr} a good market for franchise expansion?`, a: `${demographics} ${growth} These factors combine to make ${locationStr} an attractive market for franchise brands expanding their footprint.` },
    { q: `Are franchise leads exclusive or shared?`, a: `All franchise leads generated for ${locationStr} campaigns are exclusive to your brand. We never resell or share leads. Each prospect is pre-qualified for investment capacity, location preference, industry interest, and timeline.` },
  ];

  return {
    title: truncate(`Franchise Leads ${locationStr} | ${BRAND}`, 60),
    description: truncate(`Get qualified franchise leads in ${fullLocation}. LinkedIn marketing, social media, website development & IT services for franchise brands.`, 160),
    h1: `Franchise Leads in ${locationStr}`,
    breadcrumbs: crumbs,
    faq,
    content: `
      <section>
        <h2>Franchise Lead Generation in ${locationStr}</h2>
        <p>${BRAND} provides comprehensive franchise lead generation, marketing, and technology services in ${fullLocation}. We help franchisors, franchise consultants, and development companies connect with qualified investors who are ready to explore franchise ownership in this market.</p>
        <p>${economy}</p>
      </section>
      <section>
        <h2>${locationStr} Franchise Market Overview</h2>
        <p>${demographics}</p>
        <p>The leading franchise sectors in ${locationStr} include ${industries}. ${growth}</p>
        <p>Typical franchise investment in ${locationStr} ranges from ${investment}, depending on the concept, territory size, and build-out requirements.</p>
      </section>
      <section>
        <h2>Our Franchise Marketing & IT Services in ${locationStr}</h2>
        <ul>
          <li><strong>LinkedIn Marketing & Sales Navigator Outreach</strong> — We use advanced LinkedIn targeting to connect your franchise brand with high-net-worth investors and qualified prospects in ${locationStr}. Our campaigns include personalized connection requests, multi-touch messaging sequences, and meeting booking automation.</li>
          <li><strong>Social Media Advertising</strong> — Full-spectrum paid and organic campaigns across Facebook, Instagram, LinkedIn, and YouTube targeting franchise investors in the ${locationStr} market. Includes lookalike audiences, retargeting, and conversion-optimized landing pages.</li>
          <li><strong>Franchise Website Development</strong> — Mobile-first, SEO-optimized franchise websites with lead capture forms, territory maps, investment calculators, and trust-building elements designed to convert ${locationStr} visitors into qualified inquiries.</li>
          <li><strong>SEO & Local SEO</strong> — Technical SEO, local business optimization, content marketing, and franchise-specific keyword strategies to dominate search results in ${locationStr}.</li>
          <li><strong>PPC & Google Ads Management</strong> — High-intent search campaigns targeting franchise buyers actively searching for opportunities in ${locationStr}. We manage bid strategy, ad copy testing, and landing page optimization.</li>
          <li><strong>IT Services & App Development</strong> — Custom web applications, mobile apps (iOS & Android), CRM implementation, marketing automation, and cloud infrastructure for franchise brands operating in ${locationStr}.</li>
        </ul>
      </section>
      <section>
        <h2>Franchise Regulations in ${locationStr}</h2>
        <p>${regulation}</p>
        <p>Our team ensures your franchise marketing campaigns and lead generation strategies comply with all applicable regulations while maximizing your reach to qualified investors in ${locationStr}.</p>
      </section>
      <section>
        <h2>Our 4-Step Process for ${locationStr} Franchise Leads</h2>
        <ol>
          <li><strong>Market Research & Strategy</strong> — We analyze the ${locationStr} franchise landscape, identify target demographics, assess competitor positioning, and develop a custom lead generation strategy aligned with your brand's growth goals.</li>
          <li><strong>Campaign Development & Launch</strong> — Our team builds and launches multi-channel marketing campaigns including LinkedIn outreach, social media ads, SEO content, and PPC campaigns specifically targeting franchise investors in ${locationStr}.</li>
          <li><strong>Lead Qualification & Delivery</strong> — Every lead is pre-screened for investment capacity, timeline, location preference, and genuine interest in franchise ownership. You receive only qualified, exclusive leads.</li>
          <li><strong>Optimization & Scaling</strong> — We continuously analyze campaign performance, optimize targeting and messaging, and scale what works to increase your qualified lead volume while maintaining quality standards.</li>
        </ol>
      </section>
      <section>
        <h2>Why Choose ${BRAND} for ${locationStr}?</h2>
        <ul>
          <li>100% franchise-industry focused — we understand FDD compliance, territory mapping, and investor psychology</li>
          <li>Deep expertise in ${locationStr} market dynamics and consumer behavior</li>
          <li>Multi-channel approach: LinkedIn + Social + SEO + PPC + Website</li>
          <li>Exclusive leads — never shared between competing franchisors</li>
          <li>Transparent reporting with weekly performance dashboards</li>
          <li>Dedicated account management with direct access to your strategist</li>
          <li>First qualified leads typically within 14–21 days of launch</li>
        </ul>
      </section>
      <section>
        <h2>Get Started in ${locationStr}</h2>
        <p>Ready to generate qualified franchise leads in ${locationStr}? <a href="/contact">Schedule a free strategy consultation</a> and our team will analyze your market opportunity, recommend the optimal channel mix, and provide a custom lead generation proposal. Call ${PHONE} or <a href="https://calendly.com/lets-build-your-brand">book online</a>.</p>
      </section>
      <nav aria-label="Related locations and services">
        <a href="/locations/${country}">All ${countryName} locations</a> |
        <a href="/services">All Services</a> |
        <a href="/franchise-leads-usa">USA Franchise Leads</a> |
        <a href="/franchise-leads-uk">UK Franchise Leads</a> |
        <a href="/franchise-leads-india">India Franchise Leads</a> |
        <a href="/buy-franchise-leads">Buy Franchise Leads</a> |
        <a href="/blog">Franchise Marketing Blog</a> |
        <a href="/">Home</a>
      </nav>
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

  const ci = getCountryInsight(country);
  const si = (country === 'usa' && state) ? (usaStateData[state] || null) : null;
  const industries = si ? si.industries : ci.industries.join(', ');
  const economy = si ? si.economy : ci.economy;
  const regulation = si ? si.regulation : ci.regulation;
  const demographics = si ? si.demographics : ci.demographics;
  const growth = si ? si.growth : ci.growth;
  const investment = si ? si.investment : ci.investment;

  const faq = [
    { q: `What does ${serviceName.toLowerCase()} in ${locationStr} include?`, a: `Our ${serviceName.toLowerCase()} services in ${locationStr} include strategy development, multi-channel campaign execution, lead qualification, performance tracking, and ROI optimization specifically tailored for franchise brands in the ${locationStr} market.` },
    { q: `How is ${serviceName.toLowerCase()} customized for ${locationStr}?`, a: `We adapt targeting, messaging, and channel mix to ${locationStr}'s market behavior, competitive density, and investor search patterns. ${demographics}` },
    { q: `What investment is required for ${serviceName.toLowerCase()} in ${locationStr}?`, a: `Franchise investment in ${locationStr} typically ranges from ${investment}. Our ${serviceName.toLowerCase()} services are designed to connect you with investors at appropriate capital levels for your concept.` },
    { q: `How quickly can we expect results?`, a: `Most campaigns produce the first qualified franchise conversations within 14–28 days once targeting, messaging, and landing pages are fully aligned. We optimize continuously for improved lead quality and volume.` },
  ];

  return {
    title: truncate(`${serviceName} in ${locationStr} | ${BRAND}`, 60),
    description: truncate(`Professional ${serviceName.toLowerCase()} in ${locationStr}, ${countryName}. ${BRAND} helps franchise brands grow with expert strategies & technology.`, 160),
    h1: `${serviceName} in ${locationStr}`,
    breadcrumbs: crumbs,
    faq,
    content: `
      <section>
        <h2>${serviceName} Services in ${locationStr}</h2>
        <p>${BRAND} provides professional ${serviceName.toLowerCase()} services in ${locationStr}, ${countryName}. Our franchise-focused team helps brands attract qualified investors, build sustainable lead pipelines, and grow their franchise networks in this market.</p>
        <p>${economy}</p>
      </section>
      <section>
        <h2>${locationStr} Market Opportunity</h2>
        <p>${demographics}</p>
        <p>Key franchise sectors in ${locationStr} include ${industries}. ${growth}</p>
        <p>Typical franchise investment ranges from ${investment}, making ${locationStr} accessible to a wide range of investor profiles.</p>
      </section>
      <section>
        <h2>What Our ${serviceName} Service Includes</h2>
        <ul>
          <li><strong>Strategy & Market Research</strong> — In-depth analysis of the ${locationStr} franchise landscape including competitor mapping, demand signals, and investor behavior patterns.</li>
          <li><strong>Multi-Channel Campaign Execution</strong> — LinkedIn outreach, social media advertising, SEO content, PPC campaigns, and email marketing targeting franchise investors in ${locationStr}.</li>
          <li><strong>Lead Qualification & Screening</strong> — Every lead is pre-qualified for investment capacity, timeline, industry interest, and genuine intent to explore franchise ownership.</li>
          <li><strong>Franchise Website & Landing Pages</strong> — Conversion-optimized web assets with territory maps, investment details, and trust signals designed for the ${locationStr} audience.</li>
          <li><strong>Performance Reporting</strong> — Weekly dashboards tracking lead volume, qualification rates, cost per lead, and channel-level performance metrics.</li>
          <li><strong>CRM & Automation Setup</strong> — Technology stack configuration including CRM, lead scoring, automated follow-ups, and pipeline management tools.</li>
        </ul>
      </section>
      <section>
        <h2>Franchise Compliance in ${locationStr}</h2>
        <p>${regulation}</p>
        <p>Our team ensures all ${serviceName.toLowerCase()} campaigns comply with applicable franchise regulations while maximizing your reach to qualified investors.</p>
      </section>
      <section>
        <h2>Our Process for ${serviceName} in ${locationStr}</h2>
        <ol>
          <li><strong>Research & Discovery</strong> — Map demand signals, competitor positioning, and audience behavior specific to ${locationStr}.</li>
          <li><strong>Campaign Architecture</strong> — Build a ${serviceName.toLowerCase()} campaign structure with clear conversion goals and targeting parameters.</li>
          <li><strong>Execution & Optimization</strong> — Launch campaigns and continuously improve targeting, creatives, and conversion flows using weekly performance data.</li>
          <li><strong>Scale & Expand</strong> — Increase qualified lead volume while maintaining lead-quality thresholds and cost efficiency.</li>
        </ol>
      </section>
      <section>
        <h2>Why ${BRAND} for ${serviceName} in ${locationStr}?</h2>
        <ul>
          <li>100% franchise-industry focused with deep ${locationStr} market expertise</li>
          <li>Exclusive leads — never shared between competing franchise brands</li>
          <li>Full-service: strategy + execution + technology + reporting</li>
          <li>Transparent pricing with measurable ROI</li>
          <li>Dedicated account manager with weekly strategy calls</li>
          <li>First qualified leads typically within 14–21 days</li>
        </ul>
      </section>
      <section>
        <h2>Start ${serviceName} in ${locationStr} Today</h2>
        <p>Ready to grow your franchise brand in ${locationStr}? <a href="/contact">Book a free strategy call</a> and we'll analyze your market opportunity and recommend the optimal approach. Call ${PHONE} or <a href="https://calendly.com/lets-build-your-brand">schedule online</a>.</p>
      </section>
      <nav aria-label="Related">
        <a href="/contact">Get a consultation</a> |
        <a href="/locations/${country}/${state}">More in ${stateName}</a> |
        <a href="/services">All Services</a> |
        <a href="/buy-franchise-leads">Buy Franchise Leads</a> |
        <a href="/blog">Franchise Blog</a> |
        <a href="/">Home</a>
      </nav>
    `
  };
}

function keywordPage(keyword) {
  const name = slugToTitle(keyword);
  const lc = name.toLowerCase();

  const faq = [
    { q: `What is ${lc} and why does it matter?`, a: `${name} is a specialized discipline within franchise marketing that focuses on connecting franchise brands with qualified investors. It combines targeted digital marketing, lead qualification, and conversion optimization to build a predictable pipeline of franchise buyer prospects.` },
    { q: `How does ${BRAND} approach ${lc}?`, a: `We use a multi-channel strategy combining LinkedIn Sales Navigator outreach, paid social media advertising, SEO content marketing, Google Ads, and conversion-optimized landing pages. Every campaign is specifically tailored to the franchise industry.` },
    { q: `What results can I expect from ${lc}?`, a: `Most clients begin receiving qualified franchise inquiries within 14–21 days of campaign launch. Lead quality improves over time as we optimize targeting and messaging based on conversion data.` },
    { q: `How much does ${lc} cost?`, a: `Investment varies based on scope, target markets, and campaign intensity. We offer flexible packages starting from $2,500/month with transparent reporting and measurable ROI. Contact us for a custom proposal.` },
  ];

  return {
    title: truncate(`${name} | ${BRAND}`, 60),
    description: truncate(`Professional ${lc} services from ${BRAND}. We help franchisors and franchise brands grow with proven strategies and technology.`, 160),
    h1: name,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: name, url: `/services/${keyword}` }],
    faq,
    content: `
      <section>
        <h2>${name} by ${BRAND}</h2>
        <p>${BRAND} provides professional ${lc} services designed exclusively for the franchise industry. Our data-driven approach combines proven digital marketing strategies with deep franchise expertise to deliver qualified leads and sustainable growth for franchisors, franchise consultants, and development companies.</p>
        <p>Unlike generic marketing agencies, we understand the unique dynamics of franchise sales — from FDD compliance requirements to multi-unit development strategies, territory mapping, and investor qualification processes. This specialized knowledge translates into higher-quality leads and better conversion rates.</p>
      </section>
      <section>
        <h2>Our ${name} Process</h2>
        <ol>
          <li><strong>Strategic Planning & Market Analysis</strong> — We analyze your franchise model, competitive landscape, target investor profile, and market opportunity to develop a custom ${lc} strategy with clear KPIs and timelines.</li>
          <li><strong>Multi-Channel Campaign Development</strong> — Our team builds campaigns across LinkedIn (Sales Navigator outreach + InMail), social media (Facebook, Instagram, YouTube), Google Ads (search + display), and SEO content marketing.</li>
          <li><strong>Lead Qualification & Screening</strong> — Every prospect is pre-qualified for investment capacity, timeline, location preference, industry interest, and genuine intent. You receive only exclusive, verified leads.</li>
          <li><strong>Performance Optimization</strong> — Weekly analysis of lead volume, qualification rates, cost per qualified lead, and channel-level performance. Continuous A/B testing of messaging, targeting, and conversion flows.</li>
          <li><strong>Scaling & Expansion</strong> — As we identify winning channels and messages, we scale campaigns to increase volume while maintaining quality thresholds and cost efficiency.</li>
        </ol>
      </section>
      <section>
        <h2>What's Included in Our ${name} Services</h2>
        <ul>
          <li><strong>LinkedIn Marketing</strong> — Sales Navigator prospecting, personalized connection campaigns, thought leadership content, and meeting booking automation targeting franchise investors.</li>
          <li><strong>Social Media Advertising</strong> — Paid campaigns across Facebook, Instagram, LinkedIn, and YouTube with lookalike audiences, retargeting, and conversion tracking.</li>
          <li><strong>SEO & Content Marketing</strong> — Franchise-specific keyword optimization, blog content, location pages, and technical SEO to build organic visibility.</li>
          <li><strong>PPC Management</strong> — Google Ads and Bing Ads campaigns targeting high-intent franchise buyer search queries with optimized ad copy and landing pages.</li>
          <li><strong>Website Development</strong> — High-converting franchise websites with lead capture, territory maps, investment details, and trust-building elements.</li>
          <li><strong>CRM & Automation</strong> — Lead scoring, automated follow-up sequences, pipeline management, and reporting dashboards.</li>
        </ul>
      </section>
      <section>
        <h2>Why Choose ${BRAND} for ${name}?</h2>
        <ul>
          <li>100% franchise-industry focus — deep understanding of FDD compliance, territory mapping, and investor psychology</li>
          <li>Exclusive leads — never shared between competing franchise brands</li>
          <li>Multi-channel approach — LinkedIn + Social + SEO + PPC + Website</li>
          <li>Transparent pricing with weekly performance reporting</li>
          <li>Dedicated account manager with direct strategy access</li>
          <li>Global reach — serving franchise brands in USA, UK, India, Canada, Australia, UAE, and Kuwait</li>
        </ul>
      </section>
      <section>
        <h2>Industries We Serve</h2>
        <p>Our ${lc} services cover all major franchise sectors including quick-service restaurants, fast-casual dining, fitness & wellness, home services, education & tutoring, senior care, automotive, business services, real estate, personal services, and technology-enabled concepts.</p>
      </section>
      <section>
        <h2>Markets We Cover</h2>
        <ul>
          <li><a href="/franchise-leads-usa">United States</a> — All 50 states, 250+ cities</li>
          <li><a href="/franchise-leads-uk">United Kingdom</a> — England, Scotland, Wales</li>
          <li><a href="/franchise-leads-india">India</a> — All major states and cities</li>
          <li><a href="/franchise-leads-canada">Canada</a> — Ontario, BC, Quebec & more</li>
          <li><a href="/franchise-leads-australia">Australia</a> — Sydney, Melbourne & more</li>
          <li><a href="/franchise-leads-dubai">Dubai & UAE</a></li>
          <li><a href="/franchise-leads-kuwait">Kuwait</a></li>
        </ul>
      </section>
      <section>
        <h2>Get Started with ${name}</h2>
        <p>Ready to build a predictable pipeline of qualified franchise investors? <a href="/contact">Schedule a free strategy consultation</a> and our team will analyze your opportunity, recommend the optimal channel mix, and provide a custom proposal. Call ${PHONE} or <a href="https://calendly.com/lets-build-your-brand">book online</a>.</p>
      </section>
      <nav aria-label="Related Services">
        <a href="/services/franchise-lead-generation">Franchise Lead Generation</a> |
        <a href="/services/franchise-marketing">Franchise Marketing</a> |
        <a href="/services/franchise-website-design">Franchise Website Design</a> |
        <a href="/services/franchise-seo">Franchise SEO</a> |
        <a href="/buy-franchise-leads">Buy Franchise Leads</a> |
        <a href="/blog">Blog</a> |
        <a href="/">Home</a>
      </nav>
    `
  };
}
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
