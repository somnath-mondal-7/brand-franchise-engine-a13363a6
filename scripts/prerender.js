#!/usr/bin/env node
/**
 * Static HTML Pre-renderer
 * Converts api/render.js serverless function into build-time static HTML files.
 * Generates ~8,300 high-value HTML files using curated service/keyword lists.
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');

// ─── CONFIG ───
const SITE = 'https://www.franchiseleadspro.com';
const BRAND = 'FranchiseLeadsPro';
const PHONE = '+1 (551)-201-23-77';

// ─── HELPERS ───
function slugToTitle(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

function truncate(str, max) {
  if (str.length <= max) return str;
  return str.substring(0, max).replace(/\s+\S*$/, '') + '…';
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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

// ─── STRUCTURED DATA ───
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
      }
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

// ─── HTML BUILDER ───
function buildHtml({ title, description, h1, content, canonicalPath, breadcrumbs, faq, noindex }) {
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
  <meta name="description" content="${escapeHtml(safeDesc)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="${robotsContent}">
  <meta property="og:title" content="${escapeHtml(safeTitle)}">
  <meta property="og:description" content="${escapeHtml(safeDesc)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${BRAND}">
  <meta property="og:image" content="${SITE}/og-image.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(safeTitle)}">
  <meta name="twitter:description" content="${escapeHtml(safeDesc)}">
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

// ─── COUNTRY INSIGHT DATA ───
function getCountryInsight(code) {
  const data = {
    usa: { economy: "The United States has a $25.5 trillion GDP and hosts the world's largest franchise industry with over 790,000 franchise establishments.", climate: "The US franchise sector employs 8.4 million people.", industries: ["Quick-service restaurants", "Business services", "Personal services", "Home services", "Fitness", "Education"], investment: "$50K – $5M+", regulation: "Federal FTC Rule requires a Franchise Disclosure Document (FDD) with 23 mandatory items.", demographics: "331 million residents with strong entrepreneurial culture.", growth: "US franchise output is projected to grow 4.2% annually through 2028." },
    uk: { economy: "The UK's $3.1 trillion economy supports a mature franchise sector contributing £17.2 billion annually.", climate: "The BFA provides voluntary self-regulation.", industries: ["Hotel & catering", "Personal services", "Business services", "Property services", "Health & fitness", "Cleaning services"], investment: "£10K – £1M+", regulation: "No mandatory franchise registration in the UK. The BFA provides an ethical framework.", demographics: "67 million residents with high franchise awareness.", growth: "UK franchise sector grew 2.8% in the latest survey." },
    india: { economy: "India's $3.7 trillion economy is the world's fifth-largest. The franchise industry is valued at $50B.", climate: "India has no specific franchise legislation.", industries: ["Food & beverage", "Education & coaching", "Health & beauty", "Retail", "IT services", "Apparel"], investment: "₹5 lakhs – ₹5 crores ($6K – $600K)", regulation: "No franchise-specific legislation exists. Governed by the Indian Contract Act 1872.", demographics: "1.4 billion people with median age of 28.4 years.", growth: "India adds 1,200+ new franchise outlets monthly." },
    canada: { economy: "Canada's $2.1 trillion economy contributes $100 billion annually with 76,000+ franchise units.", climate: "Canada has province-specific franchise legislation.", industries: ["Food service", "Retail", "Automotive services", "Business services", "Health & wellness", "Education"], investment: "CAD $100K – $2M", regulation: "Six provinces have franchise-specific legislation requiring disclosure documents.", demographics: "39 million residents with strong immigration driving growth.", growth: "Canadian franchise sector is growing at 3.5% annually." },
    australia: { economy: "Australia's $1.7 trillion economy supports approximately 97,000 franchise units.", climate: "Regulated by the Franchising Code of Conduct.", industries: ["Food & beverage", "Retail", "Home services", "Fitness", "Education", "Cleaning services"], investment: "AUD $50K – $2M+", regulation: "The Franchising Code of Conduct is mandatory, enforced by the ACCC.", demographics: "26 million residents concentrated in major coastal cities.", growth: "Australian franchising grew 2.1% in the latest census." },
    dubai: { economy: "The UAE's $500 billion economy is driven by oil, tourism, real estate.", climate: "The UAE franchise market is valued at $27 billion.", industries: ["Food & beverage", "Retail", "Education", "Health & beauty", "Fitness", "Business services"], investment: "AED 200K – 10M ($55K – $2.7M)", regulation: "No specific franchise law exists. Free zones offer 100% foreign ownership.", demographics: "9.9 million residents with 88% expatriate population.", growth: "UAE franchise sector is growing at 27% annually." },
    kuwait: { economy: "Kuwait's $180 billion economy is oil-driven but actively diversifying.", climate: "Kuwait's franchise market is growing with approximately 300 franchise brands.", industries: ["Food & beverage", "Retail", "Education", "Health & fitness", "Automotive", "Personal services"], investment: "KWD 20K – 500K ($65K – $1.6M)", regulation: "Kuwait's Commercial Law governs franchise relationships.", demographics: "4.3 million residents with 70% under age 40.", growth: "Kuwait's franchise market is projected to grow 15% annually through 2030." },
  };
  const key = code.toLowerCase().replace('ae','dubai').replace('ca','canada').replace('au','australia').replace('in','india');
  return data[key] || data['usa'];
}

// ─── LOCATION PAGE GENERATOR ───
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

  const ci = getCountryInsight(country);
  const industries = ci.industries.join(', ');

  const faq = [
    { q: `What franchise opportunities are strongest in ${locationStr}?`, a: `The top-performing franchise sectors in ${locationStr} include ${industries}. ${ci.growth}` },
    { q: `How much capital is needed to invest in a franchise in ${locationStr}?`, a: `Investment requirements in ${locationStr} typically range from ${ci.investment}.` },
    { q: `What franchise regulations apply in ${locationStr}?`, a: ci.regulation },
    { q: `How quickly can I get franchise leads in ${locationStr}?`, a: `Most clients begin receiving qualified franchise inquiries within 14–21 days of campaign launch in ${locationStr}.` },
    { q: `Why is ${locationStr} a good market for franchise expansion?`, a: `${ci.demographics} ${ci.growth}` },
  ];

  return {
    title: truncate(`Franchise Leads ${locationStr} | ${BRAND}`, 60),
    description: truncate(`Get qualified franchise leads in ${fullLocation}. LinkedIn marketing, social media, website development & IT services.`, 160),
    h1: `Franchise Leads in ${locationStr}`,
    breadcrumbs: crumbs,
    faq,
    content: `
      <section>
        <h2>Franchise Lead Generation in ${locationStr}</h2>
        <p>${BRAND} provides expert franchise lead generation services in ${fullLocation}. ${ci.economy}</p>
        <p>${ci.demographics}</p>
      </section>
      <section>
        <h2>Our Services in ${locationStr}</h2>
        <ul>
          <li><strong>LinkedIn Marketing</strong> — Targeted outreach to franchise investors in ${locationStr}</li>
          <li><strong>Social Media Marketing</strong> — Facebook, Instagram & LinkedIn campaigns</li>
          <li><strong>Franchise Website Development</strong> — SEO-optimized, mobile-first websites</li>
          <li><strong>SEO & Digital Marketing</strong> — Local and national search visibility</li>
          <li><strong>IT Services</strong> — Custom apps, CRM, and automation</li>
        </ul>
      </section>
      <section>
        <h2>Top Industries in ${locationStr}</h2>
        <p>The leading franchise sectors include: ${industries}.</p>
        <p>Investment range: ${ci.investment}</p>
      </section>
      <section>
        <h2>Get Started in ${locationStr}</h2>
        <p><a href="/contact">Contact us</a> for a free consultation or call ${PHONE}.</p>
      </section>
      <nav aria-label="Related">
        <a href="/franchise-leads-usa">USA</a> |
        <a href="/franchise-leads-india">India</a> |
        <a href="/franchise-leads-uk">UK</a> |
        <a href="/services">All Services</a> |
        <a href="/">Home</a>
      </nav>
    `
  };
}

// ─── KEYWORD PAGE GENERATOR ───
function keywordPage(slug) {
  const name = slugToTitle(slug);
  const lc = name.toLowerCase();

  return {
    title: truncate(`${name} Services | ${BRAND}`, 60),
    description: truncate(`Professional ${lc} services by ${BRAND}. LinkedIn marketing, social media, SEO & website development for franchise brands.`, 160),
    h1: `${name} Services`,
    breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: name, url: `/services/${slug}` }],
    faq: [
      { q: `What does ${lc} include?`, a: `Our ${lc} services include LinkedIn outreach, social media campaigns, SEO, PPC, website development, and CRM automation for franchise brands.` },
      { q: `How much does ${lc} cost?`, a: `Pricing depends on scope, channels, and market. Contact us for a custom quote.` },
      { q: `How quickly will I see results from ${lc}?`, a: `Most clients see initial results within 30 days with full pipeline development over 90 days.` },
    ],
    content: `
      <section>
        <h2>Professional ${name}</h2>
        <p>${BRAND} delivers expert ${lc} for franchise brands, franchisors, and franchise consultants worldwide.</p>
      </section>
      <section>
        <h2>What's Included</h2>
        <ul>
          <li>LinkedIn Marketing & Sales Navigator outreach</li>
          <li>Social Media Advertising (Facebook, Instagram, LinkedIn)</li>
          <li>SEO & Content Marketing</li>
          <li>PPC Management (Google & Bing Ads)</li>
          <li>Website Development & Optimization</li>
          <li>CRM & Marketing Automation</li>
        </ul>
      </section>
      <section>
        <h2>Why Choose ${BRAND}?</h2>
        <ul>
          <li>100% franchise-industry focused</li>
          <li>15,000+ qualified leads generated</li>
          <li>500+ franchise brands served</li>
          <li>Exclusive, pre-qualified leads</li>
        </ul>
      </section>
      <section>
        <h2>Get Started</h2>
        <p><a href="/contact">Contact us</a> for a free consultation or call ${PHONE}.</p>
      </section>
    `
  };
}

// ─── SERVICE + LOCATION PAGE GENERATOR ───
function serviceLocationPage(serviceSlug, countryCode, stateSlug, citySlug) {
  const serviceName = slugToTitle(serviceSlug);
  const countryName = slugToTitle(countryCode === 'usa' ? 'united-states' : countryCode);
  const stateName = slugToTitle(stateSlug);
  const cityName = citySlug ? slugToTitle(citySlug) : '';
  const locationStr = cityName ? `${cityName}, ${stateName}` : stateName;
  const lc = serviceName.toLowerCase();

  const crumbs = [
    { name: 'Home', url: '/' },
    { name: serviceName, url: `/services/${serviceSlug}` },
    { name: countryName, url: `/${serviceSlug}/${countryCode}` },
    { name: stateName, url: `/${serviceSlug}/${countryCode}/${stateSlug}` },
  ];
  if (citySlug) crumbs.push({ name: cityName, url: `/${serviceSlug}/${countryCode}/${stateSlug}/${citySlug}` });

  const ci = getCountryInsight(countryCode);

  const faq = [
    { q: `How does ${lc} work in ${locationStr}?`, a: `We use multi-channel digital marketing including LinkedIn outreach, social media, SEO, and PPC tailored for the ${locationStr} market.` },
    { q: `What results can I expect from ${lc} in ${locationStr}?`, a: `Most clients receive qualified leads within 30 days. ${ci.growth}` },
    { q: `How much does ${lc} cost in ${locationStr}?`, a: `Pricing varies by scope and market. Contact us for a custom quote tailored to ${locationStr}.` },
  ];

  return {
    title: truncate(`${serviceName} in ${locationStr} | ${BRAND}`, 60),
    description: truncate(`${serviceName} in ${locationStr}. Expert franchise marketing, lead generation & IT services by ${BRAND}.`, 160),
    h1: `${serviceName} in ${locationStr}`,
    breadcrumbs: crumbs,
    faq,
    content: `
      <section>
        <h2>${serviceName} in ${locationStr}</h2>
        <p>${BRAND} provides expert ${lc} services in ${locationStr}. ${ci.economy}</p>
        <p>${ci.demographics}</p>
      </section>
      <section>
        <h2>Our ${serviceName} Services</h2>
        <ul>
          <li>LinkedIn Marketing & Sales Navigator outreach</li>
          <li>Social Media Advertising</li>
          <li>SEO & Content Marketing</li>
          <li>PPC & Google Ads Management</li>
          <li>Franchise Website Development</li>
        </ul>
      </section>
      <section>
        <h2>Why ${locationStr}?</h2>
        <p>${ci.growth} The top franchise sectors include: ${ci.industries.join(', ')}.</p>
      </section>
      <section>
        <h2>Get Started</h2>
        <p><a href="/contact">Contact us</a> for ${lc} in ${locationStr} or call ${PHONE}.</p>
      </section>
    `
  };
}

// ─── STATIC PAGES DATA ───
function getStaticPages() {
  return {
    '': { title: `${BRAND} — #1 Franchise Lead Generation Agency`, description: 'Generate qualified franchise buyer leads with LinkedIn marketing, social media, website development & IT services.', h1: '#1 Franchise Lead Generation Agency' },
    'about': { title: `About ${BRAND} | Franchise Marketing Agency`, description: `${BRAND} is the leading franchise lead generation agency and IT solutions provider worldwide.`, h1: `About ${BRAND}` },
    'services': { title: `Franchise Marketing & IT Services | ${BRAND}`, description: 'LinkedIn marketing, social media, website development, SEO, IT outsourcing & lead generation for franchisors.', h1: 'Franchise Marketing & IT Services' },
    'digital-marketing': { title: `Franchise Digital Marketing | ${BRAND}`, description: 'SEO, PPC, social media, content marketing & franchise brand building for franchisors.', h1: 'Franchise Digital Marketing Services' },
    'contact': { title: `Contact Us | ${BRAND}`, description: `Contact ${BRAND} for franchise lead generation, marketing & IT services. Free consultation.`, h1: `Contact ${BRAND}` },
    'blog': { title: `Franchise Marketing Blog | ${BRAND}`, description: 'Expert insights on franchise lead generation, marketing strategies & industry trends.', h1: 'Franchise Marketing Blog' },
    'testimonials': { title: `Client Testimonials | ${BRAND}`, description: 'See what franchise brands say about our lead generation, marketing & IT services.', h1: 'Client Testimonials & Success Stories' },
    'buy-franchise-leads': { title: `Buy Franchise Leads | ${BRAND}`, description: 'Buy pre-qualified franchise buyer leads. Exclusive, verified franchise investor leads.', h1: 'Buy Pre-Qualified Franchise Leads' },
    'case-studies': { title: `Case Studies | ${BRAND}`, description: 'Franchise lead generation success stories and case studies from real clients.', h1: 'Real Results. Real Clients.' },
    'franchise-leads-usa': { title: `Franchise Leads USA | ${BRAND}`, description: 'Generate qualified franchise leads across all 50 US states.', h1: 'Franchise Lead Generation in the USA' },
    'franchise-leads-uk': { title: `Franchise Leads UK | ${BRAND}`, description: 'Generate qualified franchise leads across the United Kingdom.', h1: 'Franchise Lead Generation in the UK' },
    'franchise-leads-india': { title: `Franchise Leads India | ${BRAND}`, description: 'Generate qualified franchise leads across India. Mumbai, Delhi, Bangalore & more.', h1: 'Franchise Lead Generation in India' },
    'franchise-leads-canada': { title: `Franchise Leads Canada | ${BRAND}`, description: 'Generate qualified franchise leads across Canada.', h1: 'Franchise Lead Generation in Canada' },
    'franchise-leads-australia': { title: `Franchise Leads Australia | ${BRAND}`, description: 'Generate qualified franchise leads across Australia.', h1: 'Franchise Lead Generation in Australia' },
    'franchise-leads-dubai': { title: `Franchise Leads Dubai & UAE | ${BRAND}`, description: 'Generate qualified franchise leads in Dubai, Abu Dhabi & UAE.', h1: 'Franchise Lead Generation in Dubai & UAE' },
    'franchise-leads-kuwait': { title: `Franchise Leads Kuwait | ${BRAND}`, description: 'Generate qualified franchise leads in Kuwait.', h1: 'Franchise Lead Generation in Kuwait' },
    'legal-terms/privacy-policy': { title: `Privacy Policy | ${BRAND}`, description: `${BRAND} privacy policy.`, h1: 'Privacy Policy', noindex: true },
    'legal-terms/refund-satisfaction-guarantee-policy': { title: `Refund Policy | ${BRAND}`, description: `${BRAND} refund and satisfaction guarantee policy.`, h1: 'Refund & Satisfaction Guarantee Policy', noindex: true },
  };
}

// ─── WRITE HTML FILE ───
function writeHtmlFile(routePath, html) {
  let filePath;
  if (routePath === '' || routePath === '/') {
    // Homepage — don't overwrite Vite's index.html, use a subfolder approach
    // Actually for Cloudflare Pages, we write to dist/[path]/index.html
    filePath = join(DIST, '__prerendered', 'index.html');
  } else {
    filePath = join(DIST, '__prerendered', routePath, 'index.html');
  }
  const dir = dirname(filePath);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  writeFileSync(filePath, html, 'utf-8');
}

// ─── MAIN GENERATOR ───
async function main() {
  console.log('🚀 Starting static HTML pre-rendering...\n');
  
  // Dynamically import location data and curated SEO config
  const locationsModule = await import(join(ROOT, 'src', 'data', 'locations.ts'));
  const { locationData } = locationsModule;
  const seoModule = await import(join(ROOT, 'src', 'utils', 'programmaticSeo.ts'));
  const { highValueServiceKeywords, highValueKeywordPages } = seoModule;

  const prerenderedDir = join(DIST, '__prerendered');
  if (!existsSync(prerenderedDir)) mkdirSync(prerenderedDir, { recursive: true });

  let count = 0;
  const startTime = Date.now();

  // 1. Static pages
  const staticPages = getStaticPages();
  for (const [path, data] of Object.entries(staticPages)) {
    const canonicalPath = path ? `/${path}` : '/';
    const html = buildHtml({
      ...data,
      canonicalPath,
      breadcrumbs: [{ name: 'Home', url: '/' }],
    });
    writeHtmlFile(path, html);
    count++;
  }
  console.log(`  ✅ Static pages: ${count}`);

  // 2. Location pages (country/state/city)
  let locationCount = 0;
  for (const country of locationData) {
    const cc = country.countryCode.toLowerCase();
    
    // Country page
    const countryData = locationPage(cc, null, null);
    writeHtmlFile(`locations/${cc}`, buildHtml({ ...countryData, canonicalPath: `/locations/${cc}` }));
    locationCount++;

    for (const state of country.states) {
      // State page
      const stateData = locationPage(cc, state.slug, null);
      writeHtmlFile(`locations/${cc}/${state.slug}`, buildHtml({ ...stateData, canonicalPath: `/locations/${cc}/${state.slug}` }));
      locationCount++;

      for (const city of state.cities) {
        // City page
        const cityData = locationPage(cc, state.slug, city.slug);
        writeHtmlFile(`locations/${cc}/${state.slug}/${city.slug}`, buildHtml({ ...cityData, canonicalPath: `/locations/${cc}/${state.slug}/${city.slug}` }));
        locationCount++;
      }
    }
  }
  console.log(`  ✅ Location pages: ${locationCount.toLocaleString()}`);
  count += locationCount;

  // 3. Keyword/service pages
  let keywordCount = 0;
  const slugify = (s) => s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  
  for (const keyword of highValueKeywordPages) {
    const slug = slugify(keyword);
    const data = keywordPage(slug);
    writeHtmlFile(`services/${slug}`, buildHtml({ ...data, canonicalPath: `/services/${slug}` }));
    keywordCount++;
  }
  console.log(`  ✅ Keyword pages: ${keywordCount}`);
  count += keywordCount;

  // 4. Service + Location pages (curated high-value only)
  let serviceLocationCount = 0;
  for (const service of highValueServiceKeywords) {
    const serviceSlug = slugify(service);

    for (const country of locationData) {
      const cc = country.countryCode.toLowerCase();

      for (const state of country.states) {
        // Service + State
        const stateData = serviceLocationPage(serviceSlug, cc, state.slug, null);
        const statePath = `${serviceSlug}/${cc}/${state.slug}`;
        writeHtmlFile(statePath, buildHtml({ ...stateData, canonicalPath: `/${statePath}` }));
        serviceLocationCount++;

        // Service + City
        for (const city of state.cities) {
          const cityData = serviceLocationPage(serviceSlug, cc, state.slug, city.slug);
          const cityPath = `${serviceSlug}/${cc}/${state.slug}/${city.slug}`;
          writeHtmlFile(cityPath, buildHtml({ ...cityData, canonicalPath: `/${cityPath}` }));
          serviceLocationCount++;
        }
      }
    }

    // Progress every 5 services
    if (serviceLocationCount % 5000 < 100) {
      process.stdout.write(`  📝 Service+Location pages: ${serviceLocationCount.toLocaleString()}...\r`);
    }
  }
  console.log(`  ✅ Service+Location pages: ${serviceLocationCount.toLocaleString()}`);
  count += serviceLocationCount;

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n🎉 Pre-rendering complete!`);
  console.log(`   Total HTML files: ${count.toLocaleString()}`);
  console.log(`   Time: ${elapsed}s`);
  console.log(`   Output: ${prerenderedDir}`);
}

main().catch(err => {
  console.error('❌ Pre-rendering failed:', err);
  process.exit(1);
});
