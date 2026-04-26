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
const PHONE = '+1 (551)-201-27-29';

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
  return `<header class="topbar">
    <div class="shell-inner">
      <div class="surface brandbar">
        <a class="brand" href="/">
          <span class="brand-mark" aria-hidden="true">FLP</span>
          <span class="brand-copy">
            <strong>${BRAND}</strong>
            <span>Franchise growth marketing</span>
          </span>
        </a>
        <nav aria-label="Main Navigation" class="nav-links">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
          <a href="/franchise-leads-usa">USA</a>
          <a href="/franchise-leads-india">India</a>
          <a href="/franchise-leads-uk">UK</a>
          <a href="/franchise-leads-canada">Canada</a>
          <a href="/franchise-leads-australia">Australia</a>
          <a href="/franchise-leads-dubai">Dubai</a>
          <a href="/buy-franchise-leads">Buy Leads</a>
          <a href="/testimonials">Testimonials</a>
        </nav>
      </div>
    </div>
  </header>`;
}

function buildFooter() {
  return `<footer class="site-footer">
    <div class="shell-inner">
      <div class="surface footer-grid">
        <div>
          <p class="footer-title">${BRAND}</p>
          <p>${BRAND} provides franchise lead generation, LinkedIn marketing, social media marketing, website development, SEO, and IT services worldwide.</p>
        </div>
        <div>
          <p class="footer-title">Contact</p>
          <p>Phone: <a href="tel:+15512012729">${PHONE}</a></p>
          <p>Email: <a href="mailto:support@franchiseleadspro.com">support@franchiseleadspro.com</a></p>
        </div>
        <div>
          <p class="footer-title">Quick links</p>
          <nav aria-label="Footer" class="footer-links">
            <a href="/services">Services</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
            <a href="/franchise-leads-usa">USA</a>
            <a href="/franchise-leads-india">India</a>
            <a href="/franchise-leads-uk">UK</a>
            <a href="/buy-franchise-leads">Buy Leads</a>
            <a href="/legal-terms/privacy-policy">Privacy Policy</a>
          </nav>
        </div>
      </div>
      <p class="footer-meta">&copy; ${new Date().getFullYear()} ${BRAND}. All rights reserved.</p>
    </div>
  </footer>`;
}

function buildPrerenderStyles() {
  return `<style>
    :root {
      color-scheme: light;
      --background: 42 38% 96%;
      --foreground: 216 33% 14%;
      --surface: 0 0% 100%;
      --surface-muted: 35 40% 93%;
      --muted-foreground: 216 16% 38%;
      --primary: 18 90% 52%;
      --primary-foreground: 0 0% 100%;
      --border: 28 25% 84%;
      --ring: 18 90% 52%;
      --shadow: 220 32% 18% / 0.08;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: hsl(var(--foreground));
      background:
        radial-gradient(circle at top left, hsl(var(--surface-muted)), transparent 35%),
        linear-gradient(180deg, hsl(var(--background)) 0%, hsl(0 0% 100%) 100%);
      line-height: 1.65;
    }
    a { color: hsl(var(--primary)); text-decoration: none; text-underline-offset: 0.18em; }
    a:hover { text-decoration: underline; }
    .shell-inner { width: min(1120px, calc(100% - 32px)); margin: 0 auto; }
    .surface {
      background: hsl(var(--surface) / 0.92);
      border: 1px solid hsl(var(--border));
      border-radius: 24px;
      box-shadow: 0 20px 50px -24px hsl(var(--shadow));
      backdrop-filter: blur(8px);
    }
    .topbar { padding: 24px 0 0; }
    .brandbar {
      display: flex; gap: 20px; align-items: center; justify-content: space-between;
      padding: 20px 22px; flex-wrap: wrap;
    }
    .brand { display: inline-flex; align-items: center; gap: 14px; color: hsl(var(--foreground)); min-width: 0; }
    .brand:hover { text-decoration: none; }
    .brand-mark {
      display: inline-grid; place-items: center; width: 46px; height: 46px;
      border-radius: 14px;
      background: linear-gradient(135deg, hsl(var(--primary)), hsl(18 95% 45%));
      color: hsl(var(--primary-foreground));
      font-weight: 800; letter-spacing: 0.06em;
      box-shadow: 0 14px 30px -18px hsl(var(--primary) / 0.65);
    }
    .brand-copy { display: grid; gap: 2px; line-height: 1.15; }
    .brand-copy span { color: hsl(var(--muted-foreground)); font-size: 0.92rem; }
    .nav-links, .footer-links { display: flex; flex-wrap: wrap; gap: 10px; }
    .nav-links a, .footer-links a {
      display: inline-flex; align-items: center; min-height: 38px; padding: 0 14px;
      border-radius: 999px; background: hsl(var(--surface-muted));
      color: hsl(var(--foreground)); border: 1px solid hsl(var(--border)); font-size: 0.95rem;
    }
    .nav-links a:hover, .footer-links a:hover {
      text-decoration: none; border-color: hsl(var(--ring)); color: hsl(var(--primary));
    }
    main { padding: 24px 0 40px; }
    .page-card { padding: clamp(24px, 3.5vw, 42px); }
    .breadcrumbs { display: flex; flex-wrap: wrap; gap: 6px; margin: 0 0 18px; font-size: 0.9rem; color: hsl(var(--muted-foreground)); }
    .breadcrumbs a { color: hsl(var(--muted-foreground)); }
    .breadcrumbs span { color: hsl(var(--muted-foreground)); }
    .page-intro {
      display: inline-flex; align-items: center; gap: 10px; margin: 0 0 14px; padding: 8px 14px;
      border-radius: 999px; background: hsl(var(--surface-muted)); color: hsl(var(--muted-foreground));
      border: 1px solid hsl(var(--border)); font-size: 0.86rem; letter-spacing: 0.02em; text-transform: uppercase;
    }
    h1, h2, h3 { line-height: 1.15; letter-spacing: -0.03em; margin: 0 0 14px; color: hsl(var(--foreground)); }
    h1 { font-size: clamp(2.1rem, 5vw, 4.25rem); margin-bottom: 18px; }
    h2 { font-size: clamp(1.45rem, 2.4vw, 2.15rem); margin-bottom: 12px; }
    h3 { font-size: clamp(1.08rem, 1.8vw, 1.35rem); margin-bottom: 8px; }
    p, li { font-size: 1.02rem; color: hsl(var(--foreground)); }
    p { margin: 0 0 16px; }
    ul, ol { margin: 0 0 18px; padding-left: 1.25rem; }
    li + li { margin-top: 8px; }
    main > .shell-inner > article > section,
    main > .shell-inner > article > div[itemtype="https://schema.org/Question"] {
      padding: 24px;
      background: linear-gradient(180deg, hsl(var(--surface)) 0%, hsl(var(--surface-muted) / 0.35) 100%);
      border: 1px solid hsl(var(--border));
      border-radius: 20px;
      margin-top: 22px;
    }
    .cta-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 8px; }
    .btn {
      display: inline-flex; align-items: center; min-height: 46px; padding: 0 22px; border-radius: 999px;
      background: hsl(var(--primary)); color: hsl(var(--primary-foreground)); font-weight: 600;
      border: 1px solid hsl(var(--primary));
      box-shadow: 0 14px 30px -18px hsl(var(--primary) / 0.65);
    }
    .btn:hover { text-decoration: none; }
    .btn.ghost { background: hsl(var(--surface)); color: hsl(var(--foreground)); border-color: hsl(var(--border)); box-shadow: none; }
    .site-footer { padding: 0 0 36px; }
    .footer-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; padding: 24px; }
    .footer-title { margin: 0 0 10px; font-weight: 700; letter-spacing: -0.02em; }
    .footer-meta { margin: 14px 8px 0; color: hsl(var(--muted-foreground)); font-size: 0.92rem; }
    @media (max-width: 820px) {
      .brandbar, .footer-grid { grid-template-columns: 1fr; }
      .nav-links a, .footer-links a { min-height: 36px; padding: 0 12px; }
    }
  </style>`;
}

function buildBreadcrumbsHtml(breadcrumbs) {
  if (!breadcrumbs || breadcrumbs.length < 2) return '';
  const parts = breadcrumbs.map((b, i) => {
    const isLast = i === breadcrumbs.length - 1;
    return isLast
      ? `<span aria-current="page">${escapeHtml(b.name)}</span>`
      : `<a href="${b.url}">${escapeHtml(b.name)}</a><span aria-hidden="true">›</span>`;
  });
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">${parts.join(' ')}</nav>`;
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
        "telephone": "+1-551-201-2729",
        "contactType": "Sales",
        "areaServed": ["US", "IN", "GB", "CA", "AU", "AE", "KW"],
        "availableLanguage": "English"
      }
    }
  };
}

function buildFAQContent(faq) {
  if (!faq || !faq.length) return '';
  // NOTE: Do NOT add microdata (itemscope/itemtype/itemprop) here.
  // The FAQPage schema is already emitted as JSON-LD via buildFAQSchema().
  // Adding microdata creates a "Duplicate field FAQPage" error in Google Search Console.
  const items = faq.map(f => `
    <div class="faq-item">
      <h3>${f.q}</h3>
      <p>${f.a}</p>
    </div>`).join('');
  return `<section><h2>Frequently Asked Questions</h2>${items}</section>`;
}

function buildCtaSection() {
  return `<section>
    <h2>Ready to grow your franchise?</h2>
    <p>Book a free strategy call with our franchise marketing team. We'll map a lead-generation plan tailored to your brand, market, and investment range.</p>
    <div class="cta-row">
      <a class="btn" href="/contact">Book a free consultation</a>
      <a class="btn ghost" href="tel:+15512012729">Call ${PHONE}</a>
    </div>
  </section>`;
}

// ─── HTML BUILDER ───
function buildHtml({ title, description, h1, content, canonicalPath, breadcrumbs, faq, noindex, eyebrow }) {
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
  const breadcrumbsHtml = buildBreadcrumbsHtml(breadcrumbs);
  const eyebrowHtml = eyebrow ? `<p class="page-intro">${escapeHtml(eyebrow)}</p>` : '';

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
  ${buildPrerenderStyles()}
  ${schemaScripts}
</head>
<body>
  ${buildNav()}
  <main>
    <div class="shell-inner">
      <article class="surface page-card">
        ${breadcrumbsHtml}
        ${eyebrowHtml}
        <h1>${h1}</h1>
        ${content || `<p>${safeDesc}</p>`}
        ${faqHtml}
        ${noindex ? '' : buildCtaSection()}
      </article>
    </div>
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
    eyebrow: `Franchise Lead Generation · ${countryName}`,
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
    eyebrow: `Service · Franchise Marketing`,
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
    eyebrow: `${serviceName} · ${countryName}`,
    breadcrumbs: crumbs,
    faq,
    content: `
      <section>
        <h2>${serviceName} in ${locationStr}</h2>
        <p>${BRAND} delivers full-service ${lc} for franchise brands operating in ${locationStr}. From investor-grade messaging to multi-channel campaigns, we help franchisors, master franchisees, and area developers fill their pipeline with qualified buyers in ${countryName}.</p>
        <p>${ci.economy} ${ci.demographics}</p>
      </section>
      <section>
        <h2>What's included with our ${serviceName} program</h2>
        <ul>
          <li><strong>LinkedIn Sales Navigator outreach</strong> targeting investors, executives and high-net-worth prospects in ${locationStr}.</li>
          <li><strong>Paid social campaigns</strong> on Meta and LinkedIn with locally optimized creative.</li>
          <li><strong>SEO and content marketing</strong> tuned for ${locationStr} buyer-intent searches.</li>
          <li><strong>Google &amp; Bing Ads</strong> with geo-targeted bidding and conversion tracking.</li>
          <li><strong>Franchise landing pages and forms</strong> built to convert investor traffic.</li>
          <li><strong>CRM integration</strong> so every lead lands in your sales workflow within minutes.</li>
        </ul>
      </section>
      <section>
        <h2>Why ${locationStr} is a strong franchise market</h2>
        <p>${ci.growth} ${ci.regulation}</p>
        <p>The top franchise sectors in ${countryName} include: ${ci.industries.join(', ')}. Typical investment range: ${ci.investment}.</p>
      </section>
      <section>
        <h2>How we work with franchisors in ${locationStr}</h2>
        <ol>
          <li><strong>Discovery call.</strong> We learn your brand, target investor profile, unit economics and growth goals.</li>
          <li><strong>Strategy &amp; creative.</strong> We build messaging, audiences and assets tailored to ${locationStr}.</li>
          <li><strong>Launch.</strong> Campaigns go live across LinkedIn, Meta, Google and our outreach channels.</li>
          <li><strong>Optimization.</strong> Weekly reporting, A/B testing and pipeline review until you're closing units.</li>
        </ol>
      </section>
      <section>
        <h2>Related markets</h2>
        <ul>
          <li><a href="/franchise-leads-${countryCode}">All franchise leads in ${countryName}</a></li>
          <li><a href="/services/${serviceSlug}">${serviceName} — global service overview</a></li>
          <li><a href="/locations/${countryCode}/${stateSlug}">Locations in ${stateName}</a></li>
        </ul>
      </section>
    `
  };
}

// ─── WRITE HTML FILE ───
function writeHtmlFile(routePath, html) {
  let filePath;
  if (routePath === '' || routePath === '/') {
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

  // Core marketing pages are handled by the React app.
  // Do not generate static HTML overrides for them, otherwise visitors can get the stripped fallback layout.
  console.log('  ✅ Static page overrides skipped to preserve the main site design');

  // 1. Location pages (country/state/city)
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
