import { curatedKeywordSlugs, curatedServiceSlugs } from './programmaticSeoConfig.js';
import { isValidLocation } from './validLocations.js';

// Free DIY Prerender — serves static HTML to search engine bots
// Matches LovableHTML quality: proper meta tags, single H1, rich content, structured data

const SITE = 'https://www.franchiseleadspro.com';
const BRAND = 'FranchiseLeadsPro';
const PHONE = '+1 (551)-201-23-77';
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://yquuidpajigvecyonqir.supabase.co';
const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxdXVpZHBhamlndmVjeW9ucWlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3OTM1MDMsImV4cCI6MjA3NDM2OTUwM30.FIpWeiS_2B98HSE2Z2yxuOGp4gkO74rYIrAp-Aj2YTg';

function slugToTitle(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// Truncate to max length, ending at last word boundary
function truncate(str, max) {
  if (str.length <= max) return str;
  return str.substring(0, max).replace(/\s+\S*$/, '') + '…';
}

function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function stripHtml(str = '') {
  return String(str).replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function formatInlineMarkdown(text = '') {
  return escapeHtml(text)
    .replace(/\[([^\]]+)\]\(((?:https?:\/\/|\/)[^\s)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');
}

function renderBlogContent(content = '') {
  const normalized = String(content).replace(/\r\n/g, '\n').trim();

  if (!normalized) {
    return '<p>Read the full article on our website.</p>';
  }

  if (/<\/?[a-z][\s\S]*>/i.test(normalized)) {
    return normalized;
  }

  return normalized
    .split(/\n{2,}/)
    .map((block) => {
      const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
      if (!lines.length) return '';

      if (lines.every((line) => /^[-*]\s+/.test(line))) {
        return `<ul>${lines
          .map((line) => `<li>${formatInlineMarkdown(line.replace(/^[-*]\s+/, ''))}</li>`)
          .join('')}</ul>`;
      }

      const joined = lines.join(' ');

      if (/^###\s+/.test(lines[0])) {
        return `<h3>${formatInlineMarkdown(joined.replace(/^###\s+/, ''))}</h3>`;
      }

      if (/^##\s+/.test(lines[0])) {
        return `<h2>${formatInlineMarkdown(joined.replace(/^##\s+/, ''))}</h2>`;
      }

      if (/^#\s+/.test(lines[0])) {
        return `<h2>${formatInlineMarkdown(joined.replace(/^#\s+/, ''))}</h2>`;
      }

      return `<p>${lines.map((line) => formatInlineMarkdown(line)).join('<br>')}</p>`;
    })
    .join('\n');
}

function buildBlogPostingSchema(post, canonical) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.seo_title || post.title,
    description: post.seo_description || post.excerpt || truncate(stripHtml(post.content), 160),
    datePublished: post.published_at,
    dateModified: post.updated_at || post.published_at,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
    author: {
      '@type': 'Organization',
      name: post.author_name || BRAND,
    },
    publisher: {
      '@type': 'Organization',
      name: BRAND,
      url: SITE,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE}/logo-hq.png`,
      },
    },
    image: post.featured_image_url || `${SITE}/og-image.png`,
    keywords: Array.isArray(post.tags) ? post.tags.join(', ') : undefined,
    articleBody: truncate(stripHtml(post.content), 5000),
  };
}

async function fetchPublishedBlogPost(slug) {
  const url = new URL(`${SUPABASE_URL}/rest/v1/blog_posts`);
  url.searchParams.set('select', 'slug,title,content,excerpt,author_name,published_at,updated_at,seo_title,seo_description,featured_image_url,tags,read_time_minutes');
  url.searchParams.set('slug', `eq.${slug}`);
  url.searchParams.set('is_published', 'eq.true');
  url.searchParams.set('limit', '1');

  const response = await fetch(url.toString(), {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blog post: ${response.status}`);
  }

  const posts = await response.json();
  return Array.isArray(posts) && posts.length ? posts[0] : null;
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
          <p>Phone: <a href="tel:+15512012377">${PHONE}</a></p>
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

    a {
      color: hsl(var(--primary));
      text-decoration: none;
      text-underline-offset: 0.18em;
    }

    a:hover { text-decoration: underline; }

    .shell-inner {
      width: min(1120px, calc(100% - 32px));
      margin: 0 auto;
    }

    .surface {
      background: hsl(var(--surface) / 0.92);
      border: 1px solid hsl(var(--border));
      border-radius: 24px;
      box-shadow: 0 20px 50px -24px hsl(var(--shadow));
      backdrop-filter: blur(8px);
    }

    .topbar {
      padding: 24px 0 0;
    }

    .brandbar {
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: space-between;
      padding: 20px 22px;
      flex-wrap: wrap;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 14px;
      color: hsl(var(--foreground));
      min-width: 0;
    }

    .brand:hover { text-decoration: none; }

    .brand-mark {
      display: inline-grid;
      place-items: center;
      width: 46px;
      height: 46px;
      border-radius: 14px;
      background: linear-gradient(135deg, hsl(var(--primary)), hsl(18 95% 45%));
      color: hsl(var(--primary-foreground));
      font-weight: 800;
      letter-spacing: 0.06em;
      box-shadow: 0 14px 30px -18px hsl(var(--primary) / 0.65);
    }

    .brand-copy {
      display: grid;
      gap: 2px;
      line-height: 1.15;
    }

    .brand-copy span {
      color: hsl(var(--muted-foreground));
      font-size: 0.92rem;
    }

    .nav-links,
    .footer-links {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .nav-links a,
    .footer-links a {
      display: inline-flex;
      align-items: center;
      min-height: 38px;
      padding: 0 14px;
      border-radius: 999px;
      background: hsl(var(--surface-muted));
      color: hsl(var(--foreground));
      border: 1px solid hsl(var(--border));
      font-size: 0.95rem;
    }

    .nav-links a:hover,
    .footer-links a:hover {
      text-decoration: none;
      border-color: hsl(var(--ring));
      color: hsl(var(--primary));
    }

    main {
      padding: 24px 0 40px;
    }

    .page-card {
      padding: clamp(24px, 3.5vw, 42px);
    }

    .page-intro {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      margin: 0 0 14px;
      padding: 8px 14px;
      border-radius: 999px;
      background: hsl(var(--surface-muted));
      color: hsl(var(--muted-foreground));
      border: 1px solid hsl(var(--border));
      font-size: 0.86rem;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    h1, h2, h3 {
      line-height: 1.15;
      letter-spacing: -0.03em;
      margin: 0 0 14px;
      color: hsl(var(--foreground));
    }

    h1 {
      font-size: clamp(2.1rem, 5vw, 4.25rem);
      max-width: 14ch;
      margin-bottom: 18px;
    }

    h2 {
      font-size: clamp(1.45rem, 2.4vw, 2.15rem);
      margin-bottom: 12px;
    }

    h3 {
      font-size: clamp(1.08rem, 1.8vw, 1.35rem);
      margin-bottom: 8px;
    }

    p, li {
      font-size: 1.02rem;
      color: hsl(var(--foreground));
    }

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

    code {
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      background: hsl(var(--surface-muted));
      padding: 0.15rem 0.4rem;
      border-radius: 8px;
      font-size: 0.95em;
    }

    .site-footer {
      padding: 0 0 36px;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 24px;
      padding: 24px;
    }

    .footer-title {
      margin: 0 0 10px;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .footer-meta {
      margin: 14px 8px 0;
      color: hsl(var(--muted-foreground));
      font-size: 0.92rem;
    }

    @media (max-width: 820px) {
      .brandbar,
      .footer-grid {
        grid-template-columns: 1fr;
      }

      .nav-links,
      .footer-links {
        gap: 8px;
      }

      .nav-links a,
      .footer-links a {
        min-height: 36px;
        padding: 0 12px;
      }

      main > .shell-inner > article > section,
      main > .shell-inner > article > div[itemtype="https://schema.org/Question"] {
        padding: 20px;
      }
    }
  </style>`;
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
          <li>Full-service: marketing + web dev + IT</li>
          <li>Serving franchisors, consultants & brokers worldwide</li>
          <li>First leads within 30 days of campaign launch</li>
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
  arizona: { economy: "Arizona's $430B economy is driven by technology, aerospace, real estate, tourism, and healthcare. The state is one of the fastest-growing in the US.", industries: "quick-service restaurants, home services, fitness, senior care, automotive, and education", regulation: "Arizona does not require franchise registration beyond federal FTC compliance. The state's business-friendly environment makes franchise entry straightforward.", demographics: "7.3 million residents with 1.7% annual growth. Phoenix metro is the 5th-largest US metro. Median age 37.9 with strong retiree and young professional segments.", growth: "Phoenix-Scottsdale-Mesa corridor is among the top 5 fastest-growing franchise markets nationally. Gilbert, Chandler, and Surprise see rapid suburban expansion.", investment: "$80K – $1.5M" },
  colorado: { economy: "Colorado's $450B economy benefits from technology, aerospace, energy, tourism, and a booming outdoor recreation industry. Denver is a major tech hub.", industries: "fitness & wellness, fast-casual dining, outdoor services, home improvement, education, and pet services", regulation: "Colorado does not require franchise registration beyond federal FTC compliance. The state's consumer protection laws apply generally.", demographics: "5.8 million residents. Denver-Boulder corridor has one of the most educated workforces in the US. Median household income $82,254.", growth: "Denver suburbs like Aurora, Lakewood, and Thornton see strong franchise growth. Colorado Springs is emerging as a secondary franchise hub.", investment: "$100K – $1.5M" },
  michigan: { economy: "Michigan's $580B economy is anchored by automotive manufacturing, technology, healthcare, and agriculture. Detroit's revitalization creates new franchise opportunities.", industries: "automotive services, food service, home improvement, healthcare, education, and commercial cleaning", regulation: "Michigan is a franchise registration state. Franchisors must file with the Attorney General's office and comply with the Michigan Franchise Investment Law.", demographics: "10 million residents. Grand Rapids is the fastest-growing metro in the state. Detroit revitalization attracting new investment.", growth: "West Michigan (Grand Rapids, Kalamazoo) and Detroit suburbs (Troy, Ann Arbor) are seeing accelerated franchise development.", investment: "$80K – $1.2M" },
  "north-carolina": { economy: "North Carolina's $650B economy is powered by banking (Charlotte), technology (Research Triangle), healthcare, and manufacturing.", industries: "food service, fitness, home services, education, healthcare, and business services", regulation: "North Carolina does not require franchise registration beyond federal FTC compliance. The state's Business Opportunity Act may apply to certain arrangements.", demographics: "10.7 million residents. Charlotte and Raleigh-Durham are among the fastest-growing metros nationally. Young, educated workforce.", growth: "Charlotte's South End and Raleigh's suburban corridors are franchise hotspots. Wilmington and Asheville offer growing secondary markets.", investment: "$80K – $1.5M" },
  "new-jersey": { economy: "New Jersey's $680B economy benefits from pharmaceuticals, financial services, technology, and proximity to New York City. High household incomes drive premium franchise demand.", industries: "food service, personal services, fitness, education, healthcare, and home services", regulation: "New Jersey is a franchise registration state under the Franchise Practices Act. Franchisors must register and comply with relationship law protections.", demographics: "9.3 million residents. Highest population density of any US state. Median household income $89,703 — third-highest nationally.", growth: "Northern NJ suburbs (Bergen, Essex) and Central NJ (Middlesex, Mercer) see strong franchise demand. Shore communities offer seasonal opportunities.", investment: "$150K – $2M" },
  virginia: { economy: "Virginia's $620B economy is driven by government contracting, technology, military, and healthcare. Northern Virginia is a major tech corridor.", industries: "food service, fitness, education, business services, home services, and healthcare", regulation: "Virginia is a franchise registration state through the State Corporation Commission. Annual filing and renewal required.", demographics: "8.6 million residents. Northern Virginia (NoVA) has some of the highest household incomes in the US. Strong military and federal employee base.", growth: "NoVA suburbs (Fairfax, Loudoun, Prince William) are prime franchise territory. Richmond and Virginia Beach offer growing secondary markets.", investment: "$100K – $1.5M" },
  washington: { economy: "Washington's $680B economy is powered by technology (Seattle/Bellevue), aerospace (Boeing), agriculture, and international trade via Pacific Rim ports.", industries: "tech-enabled services, food service, fitness, education, coffee & specialty beverage, and home services", regulation: "Washington is a franchise registration state under the Franchise Investment Protection Act. Registration through the Department of Financial Institutions required.", demographics: "7.7 million residents. Seattle metro has one of the highest median incomes nationally ($106K+). Tech-savvy, health-conscious consumer base.", growth: "Eastside suburbs (Bellevue, Kirkland, Redmond) and South King County see strong franchise growth. Tacoma and Spokane are emerging markets.", investment: "$100K – $2M" },
  massachusetts: { economy: "Massachusetts' $650B economy leads in biotechnology, healthcare, education, financial services, and technology. Boston is a global innovation hub.", industries: "food service, fitness, education, healthcare, business services, and personal services", regulation: "Massachusetts does not require franchise registration but has strong consumer protection laws. The state's unfair business practices statute applies broadly.", demographics: "7 million residents. Boston metro has highest concentration of colleges/universities in the US. Median household income $89,645.", growth: "Greater Boston suburbs (Cambridge, Brookline, Newton) and Worcester corridor attract strong franchise investment in education and wellness.", investment: "$100K – $2M" },
  tennessee: { economy: "Tennessee's $420B economy is driven by healthcare (Nashville), music/entertainment, manufacturing, logistics, and tourism. No state income tax.", industries: "food service, healthcare, fitness, home services, automotive, and entertainment", regulation: "Tennessee does not require franchise registration beyond federal FTC compliance. Business-friendly regulatory environment.", demographics: "7 million residents. Nashville is one of the fastest-growing large cities in the US. Memphis serves as a major logistics hub.", growth: "Nashville suburbs (Franklin, Murfreesboro, Hendersonville) are among the Southeast's fastest-growing franchise markets.", investment: "$80K – $1.2M" },
  maryland: { economy: "Maryland's $440B economy benefits from federal government proximity, biotechnology, cybersecurity, healthcare, and education.", industries: "food service, education, healthcare, fitness, business services, and personal services", regulation: "Maryland is a franchise registration state under the Franchise Registration and Disclosure Law. Filing with the Attorney General required.", demographics: "6.2 million residents. Baltimore-Washington corridor has high household incomes. Strong federal employee and contractor workforce.", growth: "Howard County, Montgomery County, and Anne Arundel County suburbs see steady franchise growth driven by affluent demographics.", investment: "$100K – $1.5M" },
  minnesota: { economy: "Minnesota's $410B economy is powered by healthcare (Mayo Clinic, UnitedHealth), manufacturing, agriculture, retail, and financial services.", industries: "food service, healthcare, fitness, home services, education, and retail", regulation: "Minnesota is a franchise registration state through the Department of Commerce. Comprehensive franchise law with strong franchisee protections.", demographics: "5.7 million residents. Twin Cities metro has low unemployment and high median income ($84,313). Educated, health-conscious population.", growth: "Twin Cities suburbs (Eden Prairie, Maple Grove, Woodbury) drive franchise expansion. Rochester (Mayo Clinic) is a growing secondary market.", investment: "$80K – $1.5M" },
  wisconsin: { economy: "Wisconsin's $370B economy is based on manufacturing, agriculture, healthcare, insurance, and tourism. Milwaukee and Madison are the primary economic centers.", industries: "food service, home services, automotive, healthcare, education, and commercial cleaning", regulation: "Wisconsin is a franchise registration state under the Wisconsin Franchise Investment Law. Registration with the Department of Financial Institutions required.", demographics: "5.9 million residents. Madison consistently ranks among the best US cities for quality of life. Milwaukee metro has a diverse industrial base.", growth: "Madison's Dane County suburbs and Milwaukee's western suburbs (Waukesha, Brookfield) see growing franchise investment.", investment: "$80K – $1.2M" },
  missouri: { economy: "Missouri's $370B economy is driven by aerospace (St. Louis), agriculture, healthcare, manufacturing, and financial services.", industries: "food service, home services, automotive, healthcare, fitness, and business services", regulation: "Missouri does not require franchise registration beyond federal FTC compliance. The state's Merchandising Practices Act provides consumer protections.", demographics: "6.2 million residents. Kansas City and St. Louis metros account for the majority of economic activity. Affordable cost of living attracts franchisees.", growth: "Kansas City's Johnson County suburbs and St. Louis' West County corridor are prime franchise markets with growing populations.", investment: "$80K – $1.2M" },
  indiana: { economy: "Indiana's $420B economy is powered by manufacturing, logistics, agriculture, life sciences, and motorsports. Indianapolis is a growing tech and healthcare hub.", industries: "food service, automotive, home services, healthcare, education, and fitness", regulation: "Indiana is a franchise registration state through the Securities Division. Franchisors must register and file annual renewals.", demographics: "6.8 million residents. Indianapolis metro is growing steadily. Affordable cost of living and business-friendly tax environment.", growth: "Indianapolis suburbs (Carmel, Fishers, Westfield) are among the Midwest's fastest-growing franchise markets.", investment: "$80K – $1.2M" },
  oregon: { economy: "Oregon's $280B economy is driven by technology (Silicon Forest), manufacturing, agriculture, forestry, and tourism.", industries: "food service, fitness, outdoor services, education, home services, and tech-enabled services", regulation: "Oregon is a franchise registration state. Registration through the Department of Consumer and Business Services required.", demographics: "4.2 million residents. Portland metro has a young, educated workforce. Strong sustainability and wellness culture drives related franchise concepts.", growth: "Portland suburbs (Beaverton, Hillsboro, Lake Oswego) and Bend are seeing franchise growth driven by population influx from California.", investment: "$80K – $1.5M" },
  nevada: { economy: "Nevada's $200B economy is driven by gaming/hospitality, tourism, mining, technology, and a growing logistics sector. No state income tax.", industries: "food service, entertainment, fitness, home services, personal services, and automotive", regulation: "Nevada does not require franchise registration beyond federal FTC compliance. The state's business-friendly environment facilitates franchise entry.", demographics: "3.2 million residents. Las Vegas metro accounts for 73% of the population. High tourism traffic creates unique franchise opportunities.", growth: "Henderson, Summerlin, and North Las Vegas are rapidly expanding suburbs driving franchise demand beyond the Strip.", investment: "$80K – $2M" },
  utah: { economy: "Utah's $230B economy leads in technology ('Silicon Slopes'), aerospace, healthcare, outdoor recreation, and financial services. Fastest GDP growth rate nationally.", industries: "food service, fitness, education, home services, tech services, and personal services", regulation: "Utah does not require franchise registration beyond federal FTC compliance. Business-friendly regulatory environment.", demographics: "3.4 million residents. Youngest median age in the US (31.1). Largest average household size drives family-oriented franchise demand.", growth: "Utah County (Provo-Orem), Davis County, and Salt Lake suburbs are among the fastest-growing franchise markets in the West.", investment: "$80K – $1.5M" },
  connecticut: { economy: "Connecticut's $310B economy is driven by financial services (Hartford insurance hub), healthcare, manufacturing, and defense (submarine base).", industries: "food service, personal services, fitness, education, home services, and healthcare", regulation: "Connecticut is a franchise registration state under the Connecticut Franchise Act. Registration with the Banking Commissioner required.", demographics: "3.6 million residents. Highest per-capita income in the US ($79,855). Affluent suburban markets drive premium franchise demand.", growth: "Fairfield County (Stamford, Norwalk) and Hartford suburbs see demand for premium dining, fitness, and education franchises.", investment: "$100K – $2M" },
  "south-carolina": { economy: "South Carolina's $280B economy benefits from manufacturing (BMW), aerospace, tourism (Myrtle Beach, Charleston), and military bases.", industries: "food service, home services, fitness, automotive, tourism, and education", regulation: "South Carolina does not require franchise registration beyond federal FTC compliance.", demographics: "5.2 million residents. Charleston and Greenville are among the Southeast's fastest-growing cities. Strong retiree migration.", growth: "Charleston, Greenville-Spartanburg, and Myrtle Beach corridors see strong franchise expansion driven by population growth and tourism.", investment: "$80K – $1.2M" },
  alabama: { economy: "Alabama's $270B economy is driven by aerospace (Huntsville), automotive manufacturing, healthcare, military, and agriculture.", industries: "food service, automotive, home services, healthcare, education, and commercial cleaning", regulation: "Alabama does not require franchise registration beyond federal FTC compliance.", demographics: "5 million residents. Huntsville is the fastest-growing city in the state, driven by NASA and defense contractors. Birmingham remains the largest metro.", growth: "Huntsville's tech corridor and Birmingham's Hoover/Vestavia suburbs are the state's top franchise growth markets.", investment: "$60K – $1M" },
  louisiana: { economy: "Louisiana's $270B economy is powered by energy, petrochemicals, shipping, tourism, and agriculture. New Orleans drives significant tourism revenue.", industries: "food service, home services, automotive, commercial cleaning, education, and healthcare", regulation: "Louisiana does not require franchise registration beyond federal FTC compliance. Louisiana Business Opportunity Law may apply to certain arrangements.", demographics: "4.6 million residents. Unique cultural market with strong food and hospitality traditions. New Orleans and Baton Rouge are primary metros.", growth: "Baton Rouge suburbs and New Orleans' Metairie/Kenner corridor see steady franchise growth. Lafayette is an emerging secondary market.", investment: "$60K – $1M" },
  kentucky: { economy: "Kentucky's $230B economy is driven by manufacturing (bourbon, automotive), healthcare, logistics (UPS hub), agriculture, and energy.", industries: "food service, automotive, home services, healthcare, logistics, and education", regulation: "Kentucky does not require franchise registration beyond federal FTC compliance.", demographics: "4.5 million residents. Louisville and Lexington metros account for the majority of franchise activity. Affordable cost of living.", growth: "Louisville's east-end suburbs and Lexington's Hamburg/Nicholasville corridor are growing franchise markets.", investment: "$60K – $1M" },
  oklahoma: { economy: "Oklahoma's $220B economy is driven by energy, aerospace, agriculture, biotechnology, and military installations.", industries: "food service, automotive, home services, energy services, education, and fitness", regulation: "Oklahoma does not require franchise registration beyond federal FTC compliance.", demographics: "4 million residents. Oklahoma City and Tulsa metros comprise the majority of economic activity. Young median age and affordable cost of living.", growth: "Oklahoma City's northwest suburbs (Edmond, Norman) and Tulsa's south suburbs (Broken Arrow, Owasso) are growing franchise zones.", investment: "$60K – $1M" },
  iowa: { economy: "Iowa's $210B economy is powered by agriculture, manufacturing, insurance, financial services, and renewable energy (wind).", industries: "food service, home services, automotive, education, agricultural services, and healthcare", regulation: "Iowa does not require franchise registration beyond federal FTC compliance. Iowa's Consumer Fraud Act provides general protections.", demographics: "3.2 million residents. Des Moines consistently ranks among top US cities for business. Low unemployment and stable economy.", growth: "Des Moines suburbs (West Des Moines, Ankeny) and Cedar Rapids/Iowa City corridor see steady franchise growth.", investment: "$60K – $1M" },
  kansas: { economy: "Kansas' $190B economy is driven by aerospace (Wichita is the 'Air Capital'), agriculture, energy, manufacturing, and military bases.", industries: "food service, home services, automotive, education, fitness, and commercial cleaning", regulation: "Kansas does not require franchise registration beyond federal FTC compliance.", demographics: "2.9 million residents. Kansas City metro (KS side — Overland Park, Olathe) has high household incomes. Wichita is the largest city entirely within KS.", growth: "Johnson County (Overland Park, Olathe, Lenexa) is one of the Midwest's most affluent franchise markets.", investment: "$60K – $1M" },
  arkansas: { economy: "Arkansas' $150B economy benefits from retail headquarters (Walmart), poultry/agriculture, transportation, and manufacturing.", industries: "food service, home services, retail, automotive, education, and commercial cleaning", regulation: "Arkansas is a franchise registration state under the Arkansas Franchise Practices Act.", demographics: "3 million residents. Northwest Arkansas (Bentonville/Fayetteville) is the fastest-growing region, driven by Walmart and supplier companies.", growth: "Northwest Arkansas is a nationally recognized franchise growth market. Little Rock suburbs also see steady expansion.", investment: "$60K – $1M" },
  mississippi: { economy: "Mississippi's $120B economy is driven by manufacturing, agriculture, military installations, energy, and healthcare.", industries: "food service, home services, automotive, healthcare, education, and commercial cleaning", regulation: "Mississippi does not require franchise registration beyond federal FTC compliance.", demographics: "2.9 million residents. Jackson metro is the primary market. Lowest cost of living in the US creates low-investment franchise opportunities.", growth: "Jackson suburbs (Madison, Brandon) and the Gulf Coast (Gulfport, Biloxi) are the state's strongest franchise markets.", investment: "$50K – $800K" },
  nebraska: { economy: "Nebraska's $150B economy is driven by agriculture, insurance (Omaha), manufacturing, telecom (TD Ameritrade), and military.", industries: "food service, home services, automotive, agricultural services, education, and fitness", regulation: "Nebraska does not require franchise registration beyond federal FTC compliance.", demographics: "2 million residents. Omaha metro is a Fortune 500 hub (Berkshire Hathaway, Mutual of Omaha). Low unemployment and stable economy.", growth: "Omaha's western suburbs (Papillion, Elkhorn, Gretna) and Lincoln are seeing steady franchise growth.", investment: "$60K – $1M" },
  "new-mexico": { economy: "New Mexico's $115B economy is driven by federal research labs (Los Alamos, Sandia), military, energy, tourism, and agriculture.", industries: "food service, home services, automotive, education, healthcare, and tourism services", regulation: "New Mexico does not require franchise registration beyond federal FTC compliance.", demographics: "2.1 million residents. Albuquerque metro is the primary market. Multicultural demographics with strong Hispanic consumer base.", growth: "Albuquerque's northwest mesa and Rio Rancho suburbs are the state's primary franchise growth corridors.", investment: "$60K – $1M" },
  idaho: { economy: "Idaho's $100B economy is the nation's fastest-growing, driven by technology (Boise), agriculture, manufacturing, and outdoor recreation.", industries: "food service, home services, fitness, education, outdoor services, and automotive", regulation: "Idaho does not require franchise registration beyond federal FTC compliance.", demographics: "1.9 million residents. Boise metro is one of the fastest-growing metros in the US with 2.9% annual population growth.", growth: "Boise suburbs (Meridian, Eagle, Nampa) are among the nation's hottest franchise markets due to rapid population growth.", investment: "$60K – $1.2M" },
  hawaii: { economy: "Hawaii's $100B economy is driven by tourism, military, real estate, and agriculture. Unique island market with limited franchise competition.", industries: "food service, tourism, fitness, personal services, home services, and education", regulation: "Hawaii is a franchise registration state through the Department of Commerce and Consumer Affairs.", demographics: "1.4 million residents across 8 islands. High cost of living but strong tourism traffic creates unique franchise opportunities.", growth: "Oahu (Honolulu suburbs like Kapolei) and Maui see franchise growth driven by both resident and tourist demand.", investment: "$150K – $2M+" },
  "west-virginia": { economy: "West Virginia's $80B economy is transitioning from coal to healthcare, tourism, technology, and energy diversification.", industries: "food service, home services, healthcare, automotive, education, and commercial cleaning", regulation: "West Virginia does not require franchise registration beyond federal FTC compliance.", demographics: "1.8 million residents. Charleston and Morgantown are primary metros. Affordable cost of living creates low-barrier franchise opportunities.", growth: "Morgantown (WVU) and Charleston/Huntington corridors see the most franchise activity in the state.", investment: "$50K – $800K" },
  "new-hampshire": { economy: "New Hampshire's $100B economy benefits from technology, manufacturing, tourism, and proximity to Boston. No state income or sales tax.", industries: "food service, home services, fitness, education, personal services, and automotive", regulation: "New Hampshire does not require franchise registration beyond federal FTC compliance.", demographics: "1.4 million residents. Southern NH (Nashua, Manchester) is part of the Boston commuter belt with high household incomes.", growth: "Nashua-Manchester corridor and seacoast communities (Portsmouth, Dover) are growing franchise markets.", investment: "$80K – $1.5M" },
  maine: { economy: "Maine's $80B economy is driven by tourism, healthcare, lobster/seafood, forestry, and a growing craft food sector.", industries: "food service, home services, tourism, healthcare, education, and seasonal services", regulation: "Maine does not require franchise registration beyond federal FTC compliance.", demographics: "1.4 million residents. Portland metro is the state's economic engine. Oldest median age of any state (44.8) creates senior-focused opportunities.", growth: "Greater Portland and Bangor areas see the most franchise activity. Tourism-driven southern coast offers seasonal franchise opportunities.", investment: "$60K – $1M" },
  "rhode-island": { economy: "Rhode Island's $65B economy is driven by healthcare, education, defense, tourism, and financial services.", industries: "food service, personal services, fitness, education, home services, and healthcare", regulation: "Rhode Island is a franchise registration state. Registration through the Department of Business Regulation required.", demographics: "1.1 million residents. Highest population density after NJ. Providence metro has a young, diverse workforce (colleges/universities).", growth: "Providence suburbs (Cranston, Warwick) and the East Bay corridor see steady franchise growth.", investment: "$80K – $1.5M" },
  montana: { economy: "Montana's $60B economy is driven by agriculture, tourism (Glacier/Yellowstone), mining, timber, and a growing tech/remote-work sector.", industries: "food service, outdoor services, home services, automotive, tourism, and agricultural services", regulation: "Montana does not require franchise registration beyond federal FTC compliance.", demographics: "1.1 million residents. Bozeman and Missoula are the fastest-growing cities. Strong outdoor lifestyle and tourism economy.", growth: "Bozeman and Billings see the most franchise growth, driven by population influx and tourism.", investment: "$60K – $1M" },
  delaware: { economy: "Delaware's $80B economy benefits from corporate law (500K+ registered businesses), financial services, healthcare, and agriculture.", industries: "food service, business services, personal services, fitness, home services, and healthcare", regulation: "Delaware does not require franchise registration beyond federal FTC compliance. No state sales tax creates consumer advantages.", demographics: "1 million residents. Northern Delaware (Wilmington metro) is part of the Philadelphia economic corridor. Dover is the state capital.", growth: "Northern Delaware suburbs and Dover area see steady franchise growth driven by proximity to Philadelphia and Baltimore.", investment: "$80K – $1.2M" },
  "south-dakota": { economy: "South Dakota's $65B economy is driven by agriculture, financial services (Citibank credit card operations), tourism (Mount Rushmore), and healthcare.", industries: "food service, automotive, home services, agricultural services, tourism, and healthcare", regulation: "South Dakota is a franchise registration state through the Division of Insurance.", demographics: "900K residents. Sioux Falls is the fastest-growing city in the state and a regional retail/services hub. No state income tax.", growth: "Sioux Falls suburbs and Rapid City (tourism gateway) are the state's primary franchise growth markets.", investment: "$60K – $1M" },
  "north-dakota": { economy: "North Dakota's $60B economy is driven by energy (Bakken oil), agriculture, technology, and military bases.", industries: "food service, automotive, home services, energy services, agricultural services, and education", regulation: "North Dakota does not require franchise registration beyond federal FTC compliance.", demographics: "780K residents. Fargo is the largest city and a growing tech/startup hub. Low unemployment (sub-3%) creates labor market considerations.", growth: "Fargo and Bismarck see the most franchise activity, with Williston/Bakken region offering energy-sector opportunities.", investment: "$60K – $1M" },
  alaska: { economy: "Alaska's $55B economy is driven by oil/gas, fishing, tourism, military, and federal government spending.", industries: "food service, home services, automotive, outdoor services, education, and healthcare", regulation: "Alaska does not require franchise registration beyond federal FTC compliance.", demographics: "730K residents. Anchorage metro accounts for 40% of the population. Unique market with limited competition and high consumer spending.", growth: "Anchorage and the Mat-Su Valley (Wasilla, Palmer) are the state's primary franchise markets. Limited competition creates first-mover advantages.", investment: "$80K – $1.5M" },
  vermont: { economy: "Vermont's $40B economy is driven by tourism, agriculture (dairy), manufacturing, education, and a growing craft food/beverage sector.", industries: "food service, home services, outdoor services, education, tourism, and personal services", regulation: "Vermont does not require franchise registration beyond federal FTC compliance.", demographics: "645K residents. Second-smallest state population. Burlington metro is the primary market. Strong local/organic food culture.", growth: "Burlington and its suburbs (South Burlington, Essex) see the most franchise activity. Ski resort areas offer seasonal opportunities.", investment: "$60K – $1M" },
  wyoming: { economy: "Wyoming's $42B economy is driven by energy (coal, oil, natural gas), tourism (Yellowstone), agriculture, and mining. No state income tax.", industries: "food service, automotive, outdoor services, home services, tourism, and energy services", regulation: "Wyoming does not require franchise registration beyond federal FTC compliance. Most business-friendly state regulatory environment.", demographics: "580K residents. Smallest population of any US state. Cheyenne and Casper are the primary metros. Very limited franchise competition.", growth: "Cheyenne, Casper, and Jackson Hole are the state's primary franchise markets. Limited competition creates unique opportunities.", investment: "$60K – $1M" },
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

async function blogPostPage(slug) {
  const fallbackTitle = slugToTitle(slug);

  try {
    const post = await fetchPublishedBlogPost(slug);

    if (!post) {
      return {
        title: truncate(`${fallbackTitle} | ${BRAND} Blog`, 60),
        description: truncate(`Read "${fallbackTitle}" — expert franchise marketing insights, lead generation strategies, and industry tips from ${BRAND}.`, 160),
        h1: fallbackTitle,
        breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: fallbackTitle, url: `/blog/${slug}` }],
        content: `
          <article>
            <p>Read the full article about ${fallbackTitle.toLowerCase()} in the franchise industry on our website.</p>
            <p><a href="/blog">← Back to all blog posts</a></p>
          </article>
        `,
      };
    }

    const title = post.seo_title || post.title;
    const description = post.seo_description || post.excerpt || truncate(stripHtml(post.content), 160);
    const canonical = `${SITE}/blog/${post.slug}`;
    const publishedDate = post.published_at ? new Date(post.published_at).toISOString() : undefined;
    const modifiedDate = post.updated_at ? new Date(post.updated_at).toISOString() : publishedDate;
    const tagMeta = Array.isArray(post.tags)
      ? post.tags.map((tag) => `<meta property="article:tag" content="${escapeHtml(tag)}">`).join('\n  ')
      : '';

    return {
      title: truncate(`${title} | ${BRAND}`, 60),
      description,
      h1: post.title,
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: post.title, url: `/blog/${post.slug}` }],
      ogType: 'article',
      image: post.featured_image_url || `${SITE}/og-image.png`,
      extraSchemas: [buildBlogPostingSchema(post, canonical)],
      extraHead: `
  <meta property="article:published_time" content="${escapeHtml(publishedDate || '')}">
  <meta property="article:modified_time" content="${escapeHtml(modifiedDate || '')}">
  <meta property="article:author" content="${escapeHtml(post.author_name || BRAND)}">
  ${tagMeta}`,
      content: `
        <article>
          ${post.featured_image_url ? `<img src="${escapeHtml(post.featured_image_url)}" alt="${escapeHtml(post.title)}" loading="eager">` : ''}
          ${post.excerpt ? `<p><strong>${escapeHtml(post.excerpt)}</strong></p>` : ''}
          <div>${renderBlogContent(post.content)}</div>
          <hr>
          <p>Published: ${escapeHtml(publishedDate ? new Date(publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '')}</p>
          <p><a href="/blog">← Back to all blog posts</a></p>
        </article>
      `,
    };
  } catch (error) {
    return {
      title: truncate(`${fallbackTitle} | ${BRAND} Blog`, 60),
      description: truncate(`Read "${fallbackTitle}" — expert franchise marketing insights, lead generation strategies, and industry tips from ${BRAND}.`, 160),
      h1: fallbackTitle,
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: fallbackTitle, url: `/blog/${slug}` }],
      content: `
        <article>
          <p>Read the full article about ${fallbackTitle.toLowerCase()} in the franchise industry on our website.</p>
          <p><a href="/blog">← Back to all blog posts</a></p>
        </article>
      `,
    };
  }
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
      content: `
        <section>
          <h2>USA Franchise Lead Generation Services</h2>
          <p>${BRAND} helps franchisors and franchise consultants generate qualified investor leads across all 50 US states. Our data-driven approach combines LinkedIn outreach, paid advertising, and SEO to connect your brand with serious franchise buyers.</p>
          <h3>Services for US Franchise Brands</h3>
          <ul>
            <li><strong>LinkedIn Marketing</strong> — Targeted outreach to high-net-worth investors using Sales Navigator</li>
            <li><strong>Paid Advertising</strong> — Google Ads and Meta campaigns optimized for franchise lead generation</li>
            <li><strong>Franchise Website Development</strong> — High-converting, mobile-first websites with lead capture</li>
            <li><strong>SEO & Content Marketing</strong> — Dominate franchise-related search terms in your target markets</li>
          </ul>
          <h3>Markets We Cover</h3>
          <p>We serve franchise brands in every US state, with deep expertise in high-demand markets including <a href="/locations/usa/california">California</a>, <a href="/locations/usa/texas">Texas</a>, <a href="/locations/usa/florida">Florida</a>, <a href="/locations/usa/new-york">New York</a>, and <a href="/locations/usa/illinois">Illinois</a>.</p>
        </section>
        <section>
          <h2>Get Started</h2>
          <p>Ready to grow your franchise in the USA? <a href="/contact">Contact us</a> for a free strategy consultation or call ${PHONE}.</p>
        </section>
      `,
    },
    'franchise-leads-uk': {
      title: `Franchise Leads UK | ${BRAND}`,
      description: 'Generate qualified franchise leads across the United Kingdom. London, Manchester, Birmingham & more.',
      h1: 'Franchise Lead Generation in the UK',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'UK', url: '/franchise-leads-uk' }],
      content: `
        <section>
          <h2>UK Franchise Lead Generation</h2>
          <p>${BRAND} provides franchise lead generation services across England, Scotland, and Wales. We help franchise brands connect with qualified investors through LinkedIn marketing, social media campaigns, and professional website development.</p>
          <ul>
            <li><strong>LinkedIn Outreach</strong> — Connect with UK-based franchise investors</li>
            <li><strong>Paid Advertising</strong> — Google & Meta campaigns targeting UK franchise buyers</li>
            <li><strong>Website Development</strong> — Franchise websites optimized for UK audiences</li>
          </ul>
        </section>
        <section><h2>Get Started</h2><p><a href="/contact">Contact us</a> for a free consultation or call ${PHONE}.</p></section>
      `,
    },
    'franchise-leads-india': {
      title: `Franchise Leads India | ${BRAND}`,
      description: 'Generate qualified franchise leads across India. Mumbai, Delhi, Bangalore, Chennai & more. LinkedIn marketing & IT services.',
      h1: 'Franchise Lead Generation in India',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'India', url: '/franchise-leads-india' }],
      content: `
        <section>
          <h2>India Franchise Lead Generation</h2>
          <p>${BRAND} helps franchise brands tap into India's rapidly growing franchise market. With a rising middle class and strong entrepreneurial culture, India offers exceptional opportunities for franchise expansion.</p>
          <ul>
            <li><strong>LinkedIn Marketing</strong> — Targeted outreach to Indian franchise investors</li>
            <li><strong>Social Media Campaigns</strong> — Facebook, Instagram & LinkedIn ads for the Indian market</li>
            <li><strong>Franchise Website Development</strong> — Websites optimized for Indian audiences</li>
            <li><strong>IT Services</strong> — Custom app development, CRM setup & automation</li>
          </ul>
          <p>We cover all major Indian cities including <a href="/locations/in/maharashtra/mumbai">Mumbai</a>, <a href="/locations/in/delhi-ncr/new-delhi">Delhi</a>, <a href="/locations/in/karnataka/bangalore">Bangalore</a>, and <a href="/locations/in/tamil-nadu/chennai">Chennai</a>.</p>
        </section>
        <section><h2>Get Started</h2><p><a href="/contact">Contact us</a> for a free consultation or call ${PHONE}.</p></section>
      `,
    },
    'franchise-leads-canada': {
      title: `Franchise Leads Canada | ${BRAND}`,
      description: 'Generate qualified franchise leads across Canada. Toronto, Vancouver, Montreal, Calgary & more.',
      h1: 'Franchise Lead Generation in Canada',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Canada', url: '/franchise-leads-canada' }],
      content: `
        <section>
          <h2>Canada Franchise Lead Generation</h2>
          <p>${BRAND} helps franchise brands generate qualified investor leads across Canada's key markets. From Toronto to Vancouver, we connect your brand with serious franchise buyers.</p>
          <ul>
            <li><strong>LinkedIn Marketing</strong> — Targeted outreach to Canadian franchise investors</li>
            <li><strong>Paid Advertising</strong> — Google & Meta campaigns for Canadian audiences</li>
            <li><strong>Website Development</strong> — High-converting franchise websites</li>
          </ul>
        </section>
        <section><h2>Get Started</h2><p><a href="/contact">Contact us</a> for a free consultation or call ${PHONE}.</p></section>
      `,
    },
    'franchise-leads-australia': {
      title: `Franchise Leads Australia | ${BRAND}`,
      description: 'Generate qualified franchise leads across Australia. Sydney, Melbourne, Brisbane, Perth & more.',
      h1: 'Franchise Lead Generation in Australia',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Australia', url: '/franchise-leads-australia' }],
      content: `
        <section>
          <h2>Australia Franchise Lead Generation</h2>
          <p>${BRAND} provides franchise lead generation across Australia's major markets including Sydney, Melbourne, Brisbane, and Perth. Our digital marketing strategies are tailored for the Australian franchise sector.</p>
          <ul>
            <li><strong>LinkedIn Marketing</strong> — Connect with Australian franchise investors</li>
            <li><strong>Paid Advertising</strong> — Google & Meta campaigns for Australian audiences</li>
            <li><strong>Website Development</strong> — Franchise websites optimized for AU compliance</li>
          </ul>
        </section>
        <section><h2>Get Started</h2><p><a href="/contact">Contact us</a> for a free consultation or call ${PHONE}.</p></section>
      `,
    },
    'franchise-leads-dubai': {
      title: `Franchise Leads Dubai & UAE | ${BRAND}`,
      description: 'Generate qualified franchise leads in Dubai, Abu Dhabi & UAE. LinkedIn marketing & IT services for Middle East brands.',
      h1: 'Franchise Lead Generation in Dubai & UAE',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Dubai', url: '/franchise-leads-dubai' }],
      content: `
        <section>
          <h2>Dubai & UAE Franchise Lead Generation</h2>
          <p>${BRAND} helps franchise brands enter and expand in the UAE market. Dubai and Abu Dhabi are premier franchise hubs for the entire Middle East region.</p>
          <ul>
            <li><strong>LinkedIn Marketing</strong> — Connect with UAE-based franchise investors</li>
            <li><strong>Paid Advertising</strong> — Campaigns targeting UAE franchise buyers</li>
            <li><strong>Website Development</strong> — Franchise websites for the Middle East market</li>
          </ul>
        </section>
        <section><h2>Get Started</h2><p><a href="/contact">Contact us</a> for a free consultation or call ${PHONE}.</p></section>
      `,
    },
    'franchise-leads-kuwait': {
      title: `Franchise Leads Kuwait | ${BRAND}`,
      description: 'Generate qualified franchise leads in Kuwait. LinkedIn marketing, social media & website development.',
      h1: 'Franchise Lead Generation in Kuwait',
      breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Kuwait', url: '/franchise-leads-kuwait' }],
      content: `
        <section>
          <h2>Kuwait Franchise Lead Generation</h2>
          <p>${BRAND} provides franchise lead generation in Kuwait, connecting your brand with qualified investors as the country diversifies its economy under Vision 2035.</p>
          <ul>
            <li><strong>LinkedIn Marketing</strong> — Targeted outreach to Kuwaiti franchise investors</li>
            <li><strong>Social Media</strong> — Campaigns across Facebook, Instagram & LinkedIn</li>
            <li><strong>Website Development</strong> — Professional franchise websites</li>
          </ul>
        </section>
        <section><h2>Get Started</h2><p><a href="/contact">Contact us</a> for a free consultation or call ${PHONE}.</p></section>
      `,
    },
    'case-studies': {
      title: `Case Studies | Franchise Lead Generation Success Stories | ${BRAND}`,
      description: 'See how franchise consultants partnered with FranchiseLeadsPro to scale their digital presence and generate qualified inbound leads.',
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

function buildHtml({ title, description, h1, content, canonicalPath, breadcrumbs, faq, noindex, ogType = 'website', image = `${SITE}/og-image.png`, extraHead = '', extraSchemas = [] }) {
  // Enforce limits
  const safeTitle = truncate(title, 60);
  const safeDesc = truncate(description, 160);
  const canonical = `${SITE}${canonicalPath}`;
  const robotsContent = noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large';

  const schemas = [buildWebPageSchema(safeTitle, safeDesc, canonical), ...extraSchemas.filter(Boolean)];
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
  <title>${escapeHtml(safeTitle)}</title>
  <meta name="description" content="${escapeHtml(safeDesc)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="${escapeHtml(robotsContent)}">
  <meta property="og:title" content="${escapeHtml(safeTitle)}">
  <meta property="og:description" content="${escapeHtml(safeDesc)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:type" content="${escapeHtml(ogType)}">
  <meta property="og:site_name" content="${escapeHtml(BRAND)}">
  <meta property="og:image" content="${escapeHtml(image)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(safeTitle)}">
  <meta name="twitter:description" content="${escapeHtml(safeDesc)}">
  <meta name="twitter:image" content="${escapeHtml(image)}">
  <link rel="icon" type="image/png" href="/favicon-32x32.png">
  ${buildPrerenderStyles()}
  ${extraHead}
  ${schemaScripts}
</head>
<body>
  ${buildNav()}
  <main>
    <div class="shell-inner">
      <article class="surface page-card">
        <p class="page-intro">FranchiseLeadsPro</p>
        <h1>${h1}</h1>
        ${content || `<p>${safeDesc}</p>`}
        ${faqHtml}
      </article>
    </div>
  </main>
  ${buildFooter()}
</body>
</html>`;
}

// ──────────────────────────────────────
// HANDLER
// ──────────────────────────────────────

export default async function handler(req, res) {
  try {
    const rawPath = (req.query.path || '').replace(/^\/+|\/+$/g, '');
    const segments = rawPath.split('/').filter(Boolean);
    let pageData;
    const canonicalPath = rawPath ? `/${rawPath}` : '/';
    const isReservedRoot = ['locations', 'blog', 'legal-terms', 'admin', 'sitemap', 'services'].includes(segments[0]);
    const looksLikeServiceLocationPath = segments.length >= 3 && !isReservedRoot;
    const looksLikeProgrammaticPath =
      segments[0] === 'locations' ||
      segments[0] === 'services' ||
      looksLikeServiceLocationPath;

    if (!rawPath || rawPath === 'index.html') {
      pageData = homePage();
    } else if (segments[0] === 'blog' && segments[1]) {
      pageData = await blogPostPage(segments[1]);
    } else if (segments[0] === 'locations') {
      const [, country, state, city] = segments;
      if (country && isValidLocation(country, state, city)) {
        pageData = locationPage(country, state, city);
      }
    } else if (segments[0] === 'services' && segments[1] && curatedKeywordSlugs.has(segments[1])) {
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
    } else if (segments.length >= 3 && curatedServiceSlugs.has(segments[0]) && !['locations','blog','legal-terms','admin','sitemap'].includes(segments[0])) {
      if (isValidLocation(segments[1], segments[2], segments[3])) {
        pageData = serviceLocationPage(segments[0], segments[1], segments[2], segments[3]);
      }
    } else {
      pageData = staticPage(rawPath);
    }

    if (!pageData) {
      const isRetiredProgrammaticPage = looksLikeProgrammaticPath;
      pageData = {
        title: isRetiredProgrammaticPage ? `Page Removed | ${BRAND}` : `Page Not Found | ${BRAND}`,
        description: isRetiredProgrammaticPage
          ? 'This old page has been permanently removed.'
          : 'The page you are looking for could not be found.',
        h1: isRetiredProgrammaticPage ? 'Page Removed' : 'Page Not Found',
        content: isRetiredProgrammaticPage
          ? `<p>This old page has been permanently removed. <a href="/">Return to homepage</a>.</p>`
          : `<p>Sorry, this page does not exist. <a href="/">Return to homepage</a>.</p>`,
        breadcrumbs: [{ name: 'Home', url: '/' }],
        noindex: true,
      };
      const html = buildHtml({ ...pageData, canonicalPath });
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('X-Robots-Tag', 'noindex, nofollow');
      return res.status(isRetiredProgrammaticPage ? 410 : 404).send(html);
    }

    const html = buildHtml({ ...pageData, canonicalPath });
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
    res.status(200).send(html);
  } catch (err) {
    const fallbackCanonical = `${SITE}/${(req.query.path || '').replace(/^\/+|\/+$/g, '')}`;
    const fallbackHtml = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${BRAND}</title><meta name="robots" content="noindex, nofollow"><link rel="canonical" href="${fallbackCanonical}">${buildPrerenderStyles()}</head><body>${buildNav()}<main><div class="shell-inner"><article class="surface page-card"><p class="page-intro">FranchiseLeadsPro</p><h1>${BRAND}</h1><p>Visit <a href="${SITE}">${BRAND}</a> for franchise lead generation, marketing, and IT services.</p></article></div></main>${buildFooter()}</body></html>`;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('X-Robots-Tag', 'noindex, nofollow');
    res.status(500).send(fallbackHtml);
  }
}
