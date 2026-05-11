import { Helmet } from "react-helmet-async";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { CheckCircle, TrendingUp, Users, Target, Zap, Building2, Handshake, Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceLocationTemplateProps {
  service: string;
  location: string;
  locationSlug: string;
  state?: string;
  stateSlug?: string;
  country: string;
  countryCode: string;
  population?: number;
}

// Service-specific content for unique, human-centric pages
const serviceContent: Record<string, {
  heroText: string;
  description: string;
  benefits: string[];
  process: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  faq: { q: string; a: string }[];
}> = {
  "franchise consulting": {
    heroText: "Expert Franchise Consulting",
    description: "Our franchise consulting team provides strategic guidance to help businesses expand through franchising. We analyze your business model, develop comprehensive franchise systems, and guide you through every step of the franchising journey.",
    benefits: [
      "Comprehensive business model analysis and franchise feasibility assessment",
      "Custom franchise system development tailored to your industry",
      "Legal documentation including FDD and franchise agreements",
      "Operations manual creation and standardization",
      "Training program development for franchisees",
      "Ongoing strategic advisory and support"
    ],
    process: [
      { title: "Discovery", desc: "We analyze your business model, market position, and franchise potential" },
      { title: "Strategy", desc: "Develop comprehensive franchise strategy and growth roadmap" },
      { title: "Development", desc: "Create franchise system, documentation, and training programs" },
      { title: "Launch", desc: "Support franchise launch and ongoing growth" }
    ],
    stats: [
      { value: "150+", label: "Brands Consulted" },
      { value: "5+", label: "Years Experience" },
      { value: "12", label: "Countries Served" },
      { value: "24/7", label: "Support Available" }
    ],
    faq: [
      { q: "How long does franchise development take?", a: "Typically 4-6 months for complete franchise system development, depending on business complexity." },
      { q: "What industries do you specialize in?", a: "We work across all major industries including F&B, retail, education, healthcare, fitness, and services." },
      { q: "Do you help with international expansion?", a: "Yes, we specialize in cross-border franchise expansion between India, USA, UK, and other markets." }
    ]
  },
  "franchise development": {
    heroText: "Complete Franchise Development",
    description: "Transform your successful business into a franchise-ready system. Our development team creates comprehensive franchise programs including operations manuals, training systems, and legal documentation that set franchisees up for success.",
    benefits: [
      "Franchise business model structuring and unit economics",
      "Comprehensive operations manual development",
      "Franchise Disclosure Document (FDD) preparation",
      "Site selection criteria and territory mapping",
      "Vendor and supply chain standardization",
      "Technology systems and POS integration"
    ],
    process: [
      { title: "Assessment", desc: "Evaluate business replicability and franchise potential" },
      { title: "Documentation", desc: "Create operations manuals and legal documents" },
      { title: "Systems", desc: "Develop training, technology, and support systems" },
      { title: "Launch", desc: "Pilot testing and franchise program launch" }
    ],
    stats: [
      { value: "100+", label: "Franchises Developed" },
      { value: "4-6", label: "Months Timeline" },
      { value: "12", label: "Countries Covered" },
      { value: "24/7", label: "Dedicated Support" }
    ],
    faq: [
      { q: "Is my business ready for franchising?", a: "We conduct a thorough feasibility assessment to determine franchise readiness and identify gaps." },
      { q: "What documents are required?", a: "FDD, franchise agreement, operations manual, training materials, and marketing guidelines." },
      { q: "How much investment is needed?", a: "Investment varies by scope but typically ranges from $50K-$150K for complete development." }
    ]
  },
  "franchisee recruitment": {
    heroText: "Strategic Franchisee Recruitment",
    description: "Find qualified franchise partners who share your vision. Our recruitment strategies connect you with motivated investors and entrepreneurs who have the capital, skills, and commitment to grow your franchise network successfully.",
    benefits: [
      "Targeted lead generation for qualified franchisee prospects",
      "Multi-channel marketing campaigns across digital and traditional media",
      "Franchisee screening and qualification processes",
      "Discovery day organization and presentation support",
      "Application review and due diligence assistance",
      "Negotiation support and deal closing"
    ],
    process: [
      { title: "Profile", desc: "Define ideal franchisee profile and investment criteria" },
      { title: "Attract", desc: "Launch targeted marketing campaigns" },
      { title: "Qualify", desc: "Screen and interview potential franchisees" },
      { title: "Convert", desc: "Guide through discovery and closing process" }
    ],
    stats: [
      { value: "500+", label: "Franchisees Connected" },
      { value: "30-60", label: "Days Avg. Timeline" },
      { value: "12", label: "Markets Covered" },
      { value: "24/7", label: "Support Available" }
    ],
    faq: [
      { q: "What makes a good franchisee?", a: "Capital availability, business acumen, local market knowledge, and alignment with brand values." },
      { q: "How do you find franchisees?", a: "Through digital marketing, franchise portals, trade shows, referrals, and our investor network." },
      { q: "What is the typical timeline?", a: "From lead generation to franchise award typically takes 30-60 days." }
    ]
  },
  "franchise matchmaking": {
    heroText: "Expert Franchise Matchmaking",
    description: "We connect aspiring franchise owners with the perfect business opportunities. Our matchmaking service analyzes investor profiles, interests, and capabilities to recommend franchise brands that align with their goals and investment capacity.",
    benefits: [
      "Personalized franchise opportunity recommendations",
      "Comprehensive investor profiling and assessment",
      "Due diligence support on franchise opportunities",
      "Financial analysis and ROI projections",
      "Negotiation support with franchisors",
      "Post-award transition assistance"
    ],
    process: [
      { title: "Consult", desc: "Understand your goals, budget, and preferences" },
      { title: "Match", desc: "Curate franchise opportunities that fit your profile" },
      { title: "Evaluate", desc: "Conduct due diligence and financial analysis" },
      { title: "Acquire", desc: "Support negotiation and franchise acquisition" }
    ],
    stats: [
      { value: "200+", label: "Successful Matches" },
      { value: "150+", label: "Brand Partners" },
      { value: "12", label: "Countries Served" },
      { value: "24/7", label: "Consultation Available" }
    ],
    faq: [
      { q: "How do you select franchise brands?", a: "We verify brand credibility, unit economics, support systems, and franchisee satisfaction." },
      { q: "What investment levels do you work with?", a: "From ₹5 lakhs to ₹5 crores+ ($10K to $500K+) across various industries." },
      { q: "Is there a fee for franchisees?", a: "Our matchmaking consultation is free for qualified investors." }
    ]
  },
  "franchise expansion": {
    heroText: "Strategic Franchise Expansion",
    description: "Scale your franchise network strategically across new territories and markets. Our expansion planning services help franchisors identify growth opportunities, enter new regions, and build sustainable multi-unit and international franchise programs.",
    benefits: [
      "Market analysis and territory mapping",
      "Multi-unit franchisee development programs",
      "Regional and master franchise structuring",
      "International expansion strategy and localization",
      "Area developer and sub-franchisor programs",
      "M&A advisory for franchise acquisitions"
    ],
    process: [
      { title: "Analyze", desc: "Assess market potential and expansion opportunities" },
      { title: "Plan", desc: "Develop territory strategy and growth roadmap" },
      { title: "Structure", desc: "Create expansion models (multi-unit, master, area)" },
      { title: "Execute", desc: "Launch and support market entry" }
    ],
    stats: [
      { value: "100+", label: "Expansions Planned" },
      { value: "12", label: "Countries" },
      { value: "500+", label: "New Units Supported" },
      { value: "5+", label: "Years Experience" }
    ],
    faq: [
      { q: "When is the right time to expand?", a: "When you have proven unit economics, strong support systems, and available capital." },
      { q: "Should we expand domestically or internationally?", a: "Depends on market saturation, brand readiness, and strategic goals - we help evaluate both." },
      { q: "What is master franchising?", a: "Granting rights to a partner to develop and sub-franchise within a territory or country." }
    ]
  }
};

const toTitleCase = (value: string) =>
  value
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

const buildDynamicServiceContent = (
  serviceName: string,
  locationName: string,
  countryName: string
): (typeof serviceContent)[string] => {
  const prettyService = toTitleCase(serviceName);

  return {
    heroText: `${prettyService} Specialists`,
    description: `Our team builds and manages ${serviceName} campaigns for businesses in ${locationName}, ${countryName}, focused on qualified franchise investor demand and measurable pipeline growth.`,
    benefits: [
      `Localized ${serviceName} strategy tailored for ${locationName}`,
      `Audience targeting frameworks built around franchise investor intent`,
      `Offer and landing-page alignment for stronger lead qualification`,
      `Weekly optimization cycles with transparent quality reporting`,
      `Conversion tracking setup to connect spend with meetings booked`,
      `Continuous testing to reduce cost per qualified lead over time`
    ],
    process: [
      { title: "Research", desc: `Map demand signals, competitor positioning, and audience behavior in ${locationName}` },
      { title: "Build", desc: `Launch a ${serviceName} campaign structure with clear conversion goals` },
      { title: "Optimize", desc: "Improve targeting, creatives, and landing flow using weekly performance data" },
      { title: "Scale", desc: "Increase qualified lead volume while maintaining lead-quality thresholds" }
    ],
    stats: [
      { value: "90-day", label: "Optimization Cycles" },
      { value: "Weekly", label: "Reporting Cadence" },
      { value: "Multi-Channel", label: "Execution Stack" },
      { value: "1:1", label: "Strategy Support" }
    ],
    faq: [
      {
        q: `How is ${serviceName} customized for ${locationName}?`,
        a: `We adapt targeting, messaging, and channel mix to ${locationName}'s market behavior, competitor density, and investor search patterns.`
      },
      {
        q: `When can we expect qualified franchise inquiries?`,
        a: "Most campaigns produce the first qualified conversations within 2-4 weeks once tracking, targeting, and landing pages are fully aligned."
      },
      {
        q: `How do you measure campaign quality?`,
        a: "We track lead-to-meeting rate, qualification score, cost per qualified lead, and channel-level conversion performance each week."
      }
    ]
  };
};

export const ServiceLocationTemplate = ({
  service,
  location,
  locationSlug,
  state,
  stateSlug,
  country,
  countryCode,
  population
}: ServiceLocationTemplateProps) => {
  const capitalizedService = service.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const locationName = state ? `${location}, ${state}` : location;
  const fullLocation = `${locationName}, ${country}`;
  
  const serviceSlug = service.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  const rawCanonical = state && stateSlug
    ? `https://www.franchiseleadspro.com/${serviceSlug}/${countryCode.toLowerCase()}/${stateSlug}/${locationSlug}`
    : `https://www.franchiseleadspro.com/${serviceSlug}/${countryCode.toLowerCase()}/${locationSlug}`;
  const canonicalUrl = encodeURI(rawCanonical);

  const title = `${capitalizedService} in ${location} | Franchise Lead Generation Agency`;
  const description = `Professional ${service} services in ${fullLocation}. Get qualified franchise leads with SEO, PPC, and conversion-focused campaigns. Book a free strategy call today.`;

  // Get service-specific content or generate service-relevant content for long-tail pages
  const normalizedService = service.toLowerCase();
  const content = serviceContent[normalizedService] ?? buildDynamicServiceContent(normalizedService, location, country);

  // Location-specific market insights
  const getMarketInsight = () => {
    const populationText = population ? ` With a population of ${population.toLocaleString()}, the city` : ` The region`;
    if (countryCode === "IN") {
      return `India's franchise industry is one of the fastest-growing globally, valued at over ₹70,000 crore annually.${populationText} of ${location} presents significant opportunities across retail, F&B, education, healthcare, and service sectors. Our local expertise helps businesses navigate ${state ? `${state}'s` : "India's"} unique regulatory landscape and consumer preferences for effective ${service} campaigns.`;
    } else if (countryCode === "USA") {
      return `The US franchise industry generates over $800 billion annually, making it the world's largest franchise market.${populationText} of ${location} offers a mature ecosystem with strong consumer spending and established franchise infrastructure. We leverage deep ${state ? `${state}` : "US"} market data to deliver targeted ${service} strategies that connect you with qualified investors.`;
    } else if (countryCode === "UK") {
      return `The UK franchise sector contributes over £17 billion to the national economy with high franchise success rates.${populationText} of ${location} provides access to a sophisticated, regulation-friendly market. Our ${service} strategies are tailored to UK consumer behavior, BFA compliance requirements, and local competitive dynamics.`;
    } else if (countryCode === "CA") {
      return `Canada's franchise sector is one of the most stable in North America, with over 1,300 franchise brands operating nationwide.${populationText} of ${location} offers a bilingual, diverse consumer base with strong purchasing power. Our ${service} approach considers ${state ? `${state}'s` : "Canada's"} provincial franchise legislation and market nuances.`;
    } else if (countryCode === "AU") {
      return `Australia's franchise industry is well-regulated under the Franchising Code of Conduct, providing a stable environment for franchise growth.${populationText} of ${location} offers access to a high-spending consumer market. Our ${service} campaigns are designed for Australian market dynamics and ACCC compliance.`;
    } else if (countryCode === "AE") {
      return `The UAE franchise market is rapidly expanding, driven by a cosmopolitan population and business-friendly free zones.${populationText} of ${location} offers premium positioning in the Middle Eastern market. Our ${service} strategies account for cultural nuances, RERA regulations, and the region's unique investor profiles.`;
    } else if (countryCode === "KW") {
      return `Kuwait's growing economy and young population create strong demand for franchise concepts.${populationText} of ${location} offers access to a high-income consumer base in the GCC region. Our ${service} approach is tailored to Kuwaiti business culture, MOC requirements, and regional market trends.`;
    }
    return `${location} offers growing opportunities in the franchise sector with increasing investor interest and consumer demand.${populationText} provides a strong base for ${service} campaigns. Our data-driven approach ensures your franchise reaches the right prospects in this market.`;
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* Index ONLY pages backed by curated unique regional content. Every
            other programmatic permutation is templated and should stay out of
            the index to clear the "Crawled – currently not indexed" backlog. */}
        {(() => {
          // Lazy-import-safe inline check (template runs in client bundle)
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          const { hasCuratedInsight } = require('@/utils/locationContent');
          const isCityLevel = !!population || (!!state && !!stateSlug && location !== state);
          const stateKey = state ? state.toLowerCase().replace(/\s+/g, '-') : undefined;
          const shouldIndex = !isCityLevel && hasCuratedInsight(countryCode, stateKey);
          return (
            <meta
              name="robots"
              content={shouldIndex
                ? "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
                : "noindex, follow"}
            />
          );
        })()}
        <meta name="keywords" content={`${service} ${location}, ${service} ${state || country}, franchise consultant ${location}, franchise consulting ${location}, best ${service} ${location}`} />
        <link rel="canonical" href={canonicalUrl} />

        
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": `FranchiseLeadsPro - ${capitalizedService}`,
            "description": description,
            "serviceType": capitalizedService,
            "provider": {
              "@type": "Organization",
              "name": "FranchiseLeadsPro",
              "url": "https://www.franchiseleadspro.com"
            },
            "areaServed": {
              "@type": "City",
              "name": location,
              "containedIn": {
                "@type": state ? "State" : "Country",
                "name": state || country
              }
            },
            "knowsAbout": [capitalizedService, "franchise marketing", "lead generation"]
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": content.faq.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Building2 className="h-6 w-6" />
                <span className="text-lg opacity-90">Franchise Marketing & Lead Gen Agency</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {content.heroText} in {location}
              </h1>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                {content.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold"
                  onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
                >
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/contact">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl font-semibold"
                  >
                    Contact Our {location} Team
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>


        {/* Market Insight Section */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  {location} Franchise Market Insight
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {getMarketInsight()}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                What We Offer in {location}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {content.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-sm">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Our {capitalizedService} Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {content.process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {content.faq.map((item, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.q}</h3>
                    <p className="text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages Section for Internal Linking */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6">Explore More Services</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/services" className="text-primary hover:underline">All Services</Link>
                <Link to="/franchise-leads-india" className="text-primary hover:underline">Franchise India</Link>
                <Link to="/franchise-leads-usa" className="text-primary hover:underline">Franchise USA</Link>
                <Link to="/testimonials" className="text-primary hover:underline">Success Stories</Link>
                <Link to="/blog" className="text-primary hover:underline">Franchise Resources</Link>
                <Link to="/contact" className="text-primary hover:underline">Contact Us</Link>
                <Link to="/about" className="text-primary hover:underline">About FranchiseLeadsPro</Link>
                <Link to="/digital-marketing" className="text-primary hover:underline">Digital Marketing</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Handshake className="h-12 w-12 mx-auto mb-6 opacity-90" />
              <h2 className="text-4xl font-bold mb-6">
                Ready to Grow Your Franchise in {location}?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Partner with FranchiseLeadsPro for your {service} needs and start growing today.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Schedule Your Free Strategy Call
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};
