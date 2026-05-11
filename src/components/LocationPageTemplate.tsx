import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Users, TrendingUp, MapPin, Phone, Mail, Building2, Scale, BarChart3, Target, Award, Linkedin, ArrowRight, Shield, Clock, Zap, Star } from 'lucide-react';
import { getRegionInsight, generateMarketNarrative, generateLocationFAQs } from '@/utils/locationContent';

interface NearbyLocation {
  name: string;
  slug: string;
}

interface LocationPageProps {
  location: string;
  locationSlug: string;
  state?: string;
  stateSlug?: string;
  country: string;
  countryCode: string;
  population?: number;
  isCity?: boolean;
  nearbyLocations?: NearbyLocation[];
}

export const LocationPageTemplate: React.FC<LocationPageProps> = ({
  location,
  locationSlug,
  state,
  stateSlug,
  country,
  countryCode,
  population,
  isCity = false,
  nearbyLocations = []
}) => {
  const locationTitle = isCity ? `${location}, ${state}` : location;
  const fullLocation = state ? `${location}, ${state}, ${country}` : `${location}, ${country}`;
  const stateSlugNorm = state?.toLowerCase().replace(/\s+/g, '-');
  
  const regionInsight = getRegionInsight(countryCode, stateSlugNorm);
  const marketNarrative = generateMarketNarrative(location, state, country, countryCode, population, isCity);
  const locationFAQs = generateLocationFAQs(location, state, country, countryCode);
  
  const pageTitle = `Franchise Lead Generation in ${locationTitle} | Buy Qualified Franchise Leads`;
  const pageDescription = `#1 franchise lead generation agency in ${locationTitle}. We help franchise consultants, franchisors, and franchise brands generate qualified investor leads. LinkedIn + digital marketing for franchise growth. Free strategy call.`;
  
  const canonicalUrl = isCity && stateSlug
    ? `https://www.franchiseleadspro.com/locations/${countryCode.toLowerCase()}/${stateSlug}/${locationSlug}`
    : `https://www.franchiseleadspro.com/locations/${countryCode.toLowerCase()}/${locationSlug}`;

  const targetAudiences = [
    { title: "Franchise Consultants", desc: `If you're a franchise consultant in ${location}, we generate pre-qualified leads of aspiring franchisees actively searching for guidance. Our campaigns target professionals with $50K–$500K+ liquid capital ready to invest in franchise opportunities.` },
    { title: "Franchisors & Franchise Brands", desc: `Expanding your franchise brand in ${location}? We create multi-channel campaigns that attract serious franchise investors, not tire-kickers. Every lead is scored by net worth, industry preference, and timeline to purchase.` },
    { title: "Franchise Brokers", desc: `As a franchise broker in ${location}, your success depends on a steady pipeline of qualified buyers. We deliver exclusive, verified franchise buyer leads matched to your portfolio of franchise opportunities.` },
    { title: "Master Franchise Developers", desc: `Looking to sell master franchise rights in ${locationTitle}? We connect you with high-net-worth entrepreneurs and corporate investors seeking regional franchise development opportunities.` },
  ];

  const processSteps = [
    { step: "1", title: "Market Analysis", desc: `We analyze the ${location} franchise landscape — demographics, competition density, household income brackets, and franchise saturation to identify your ideal prospect profile.` },
    { step: "2", title: "Multi-Channel Campaign Launch", desc: `We deploy targeted campaigns across Google Ads, LinkedIn, Facebook, and SEO to reach qualified franchise investors in ${location} and surrounding areas.` },
    { step: "3", title: "Lead Qualification & Scoring", desc: `Every lead is pre-screened for liquid capital ($50K–$500K+), franchise interest level, timeline, and geographic preference before delivery to you.` },
    { step: "4", title: "CRM Integration & Nurturing", desc: `Leads are delivered in real-time to your CRM with complete profiles. Our AI-powered nurture sequences keep prospects warm until they're ready for a discovery day.` },
    { step: "5", title: "Reporting & Optimization", desc: `Weekly performance reports show cost-per-lead, conversion rates, and ROI. We continuously optimize campaigns based on which lead sources produce the highest close rates.` },
  ];

  const linkedInBenefits = [
    `Target franchise investors by job title, net worth, and industry in ${location}`,
    "Connect with C-suite executives exploring franchise ownership as their next venture",
    "Build thought leadership content that attracts inbound franchise inquiries",
    "Automated LinkedIn outreach that generates 15–25 qualified conversations per month",
    `Franchise brand awareness campaigns reaching decision-makers across ${state || location}`,
    "LinkedIn Sales Navigator prospecting for high-net-worth franchise candidates",
  ];

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        {(() => {
          const ccLower = countryCode.toLowerCase();
          const isPrimary = ccLower === 'usa' || ccLower === 'in';
          // Index country/state pages always; city pages only in primary markets.
          const shouldIndex = !isCity || isPrimary;
          return (
            <meta
              name="robots"
              content={shouldIndex
                ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                : "noindex, follow"}
            />
          );
        })()}
        <meta name="keywords" content={`franchise leads ${location.toLowerCase()}, franchise lead generation ${location.toLowerCase()}, buy franchise leads ${location.toLowerCase()}, franchise consultant ${location.toLowerCase()}, linkedin franchise leads ${location.toLowerCase()}, franchise marketing ${location.toLowerCase()}`} />
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": `FranchiseLeads Pro - ${location}`,
            "description": `Professional franchise lead generation services in ${fullLocation}. We help franchise consultants, franchisors, and franchise brands generate qualified investor leads.`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": location,
              ...(state && { "addressRegion": state }),
              "addressCountry": countryCode
            },
            "url": canonicalUrl,
            "serviceArea": { "@type": "Place", "name": fullLocation },
            "areaServed": fullLocation,
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Franchise Lead Generation Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Franchise Lead Generation", "description": `Qualified franchise investor leads in ${location}` }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LinkedIn Lead Generation for Franchises", "description": `LinkedIn-based franchise prospect generation in ${location}` }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Franchise Digital Marketing", "description": `Full-funnel digital marketing for franchise brands in ${location}` }},
              ]
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": locationFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": { "@type": "Answer", "text": faq.a }
            }))
          })}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-primary via-primary-dark to-primary-light flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="h-5 w-5" />
              <span className="text-sm font-medium uppercase tracking-wider">{fullLocation}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Franchise Lead Generation in <span className="text-accent">{locationTitle}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 leading-relaxed opacity-90">
              The #1 agency helping franchise consultants, franchisors, and franchise brands 
              generate qualified investor leads in {location}. 
            </p>
            <p className="text-lg mb-8 opacity-80">
              LinkedIn + Google + Facebook campaigns that deliver pre-screened franchise buyers 
              with $50K–$500K+ liquid capital — ready to invest.
            </p>
            {population && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-6 inline-block">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4" />
                  <span>Market size: {population.toLocaleString()} residents in {location}</span>
                </div>
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Get Qualified Franchise Leads
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg"
                onClick={() => window.location.href = '/contact'}
              >
                Request Free Market Analysis
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Who We Serve Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Who We Help in {locationTitle}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Whether you're a franchise consultant seeking investor leads, a franchisor expanding your brand, 
                or a broker building your pipeline — we deliver the prospects you need.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {targetAudiences.map((audience, idx) => (
                <div key={idx} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary/10 rounded-lg p-2">
                      {idx === 0 ? <Users className="h-6 w-6 text-primary" /> : 
                       idx === 1 ? <Building2 className="h-6 w-6 text-primary" /> :
                       idx === 2 ? <Target className="h-6 w-6 text-primary" /> :
                       <Award className="h-6 w-6 text-primary" />}
                    </div>
                    <h3 className="text-xl font-bold">{audience.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{audience.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our 5-Step Franchise Lead Generation Process in {locationTitle}
              </h2>
              <p className="text-lg text-muted-foreground">
                A proven, data-driven system that consistently delivers qualified franchise investor leads.
              </p>
            </div>
            <div className="space-y-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="bg-card rounded-xl p-6 md:p-8 shadow-sm flex gap-6 items-start">
                  <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 text-xl font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn Lead Generation Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Linkedin className="h-8 w-8 text-[#0077B5]" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    LinkedIn Lead Generation for Franchises in {location}
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  LinkedIn is the most powerful platform for reaching high-net-worth franchise investors. 
                  Our proprietary LinkedIn campaigns for franchise brands in {locationTitle} generate 
                  15–25 qualified conversations per month with potential franchisees who have the capital 
                  and motivation to invest.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  We combine LinkedIn Sales Navigator prospecting, thought leadership content, 
                  and AI-powered outreach automation to build a predictable pipeline of franchise investor leads. 
                  Every campaign is customized for your ideal franchisee profile — filtering by net worth, 
                  industry background, geographic preference, and investment timeline.
                </p>
                <Button 
                  className="bg-[#0077B5] hover:bg-[#005f8d] text-white"
                  onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
                >
                  <Linkedin className="h-4 w-4 mr-2" />
                  Start LinkedIn Franchise Campaigns
                </Button>
              </div>
              <div className="bg-muted rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">What LinkedIn Delivers for {location} Franchises</h3>
                <div className="space-y-4">
                  {linkedInBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Complete Franchise Marketing Services in {locationTitle}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Beyond lead generation, we provide end-to-end franchise marketing solutions 
                that accelerate growth at every stage of the franchise development lifecycle.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Franchise SEO", desc: `Dominate ${location} search results for franchise-related queries. Local SEO, content marketing, and technical optimization that drive organic franchise leads.`, icon: <TrendingUp className="h-7 w-7" /> },
                { title: "Franchise PPC Advertising", desc: `Google Ads and Bing campaigns targeting "${location} franchise opportunities" and high-intent buyer keywords with 3–5x ROAS.`, icon: <Zap className="h-7 w-7" /> },
                { title: "Franchise Social Media", desc: `Facebook, Instagram, and LinkedIn campaigns showcasing your franchise opportunity to qualified investors in ${location} and beyond.`, icon: <Users className="h-7 w-7" /> },
                { title: "Franchise Website Design", desc: `Conversion-optimized franchise development websites that turn ${location} visitors into qualified lead submissions.`, icon: <MapPin className="h-7 w-7" /> },
                { title: "Franchise Content Marketing", desc: `Authority-building blog content, case studies, and franchise success stories that attract organic traffic from ${location} prospects.`, icon: <Star className="h-7 w-7" /> },
                { title: "Franchise Brand Development", desc: `Complete franchise branding — FDD design, sales collateral, discovery day materials, and brand positioning for the ${location} market.`, icon: <Shield className="h-7 w-7" /> },
              ].map((service, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why {locationTitle} Franchise Businesses Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Shield className="h-5 w-5" />, text: `Deep expertise in the ${location} franchise market and local buyer demographics` },
                { icon: <Target className="h-5 w-5" />, text: "Every lead pre-screened for liquid capital, timeline, and genuine franchise interest" },
                { icon: <Clock className="h-5 w-5" />, text: "Real-time lead delivery to your CRM with complete investor profiles" },
                { icon: <TrendingUp className="h-5 w-5" />, text: "Proven track record of converting leads to discovery day attendance" },
                { icon: <Linkedin className="h-5 w-5" />, text: "Proprietary LinkedIn campaigns reaching C-suite franchise investors" },
                { icon: <BarChart3 className="h-5 w-5" />, text: "Transparent weekly reporting with cost-per-lead and ROI metrics" },
                { icon: <Zap className="h-5 w-5" />, text: "AI-powered lead scoring that prioritizes highest-value franchise prospects" },
                { icon: <Award className="h-5 w-5" />, text: "Franchise brands served across multiple countries with measurable revenue growth" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-muted rounded-lg p-4">
                  <div className="text-primary mt-0.5 flex-shrink-0">{item.icon}</div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              {locationTitle} Franchise Market Overview
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
              {marketNarrative}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">Economy & Market Size</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{regionInsight.economyDescription}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">Franchise Climate</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{regionInsight.franchiseClimate}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Scale className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">Regulatory Environment</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{regionInsight.regulatoryNote}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-bold">Growth Trends</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{regionInsight.growthTrend}</p>
              </div>
            </div>

            {/* Top Industries */}
            <div className="mt-8 bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-bold mb-4">Top Franchise Industries in {locationTitle}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {regionInsight.topIndustries.map((industry, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{industry}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Typical investment range: <strong className="text-foreground">{regionInsight.investmentRange}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions About Franchise Leads in {locationTitle}
            </h2>
            <div className="space-y-4">
              {locationFAQs.map((faq, idx) => (
                <div key={idx} className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
              {/* Additional franchise-specific FAQs */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold mb-3">How does LinkedIn lead generation work for franchises in {location}?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use LinkedIn Sales Navigator to identify high-net-worth professionals in {location} who match your ideal franchisee profile. 
                  Through personalized connection requests, thought leadership content, and automated follow-up sequences, we generate 
                  15–25 qualified franchise investor conversations per month. Every prospect is pre-screened for liquid capital, industry experience, 
                  and genuine interest in franchise ownership.
                </p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-lg font-bold mb-3">What types of franchise leads do you generate in {locationTitle}?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We generate four categories of franchise leads: (1) Franchise buyer leads — individuals with verified capital seeking to purchase a franchise, 
                  (2) Multi-unit investor leads — existing franchisees or investors looking to add territories, (3) Master franchise leads — entrepreneurs 
                  seeking regional development rights, and (4) Franchise conversion leads — independent business owners considering franchising their operations. 
                  All leads are exclusive, never resold, and delivered with complete contact profiles.
                </p>
              </div>
            </div>
            
            {/* Internal Links */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-lg font-bold mb-4">Related Franchise Services in {locationTitle}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                <a href="/services/franchise-marketing" className="text-primary hover:underline text-sm">Franchise Marketing</a>
                <a href="/services/franchise-lead-generation" className="text-primary hover:underline text-sm">Franchise Lead Generation</a>
                <a href="/digital-marketing" className="text-primary hover:underline text-sm">Digital Marketing</a>
                <a href="/services/franchise-seo" className="text-primary hover:underline text-sm">Franchise SEO</a>
                <a href="/services/franchise-consulting" className="text-primary hover:underline text-sm">Franchise Consulting</a>
                {nearbyLocations.slice(0, 3).map((nearby, idx) => (
                  <a 
                    key={idx}
                    href={`/locations/${countryCode.toLowerCase()}/${isCity ? stateSlug : locationSlug}/${nearby.slug}`}
                    className="text-primary hover:underline text-sm"
                  >
                    Franchise Leads {nearby.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Generate Qualified Franchise Leads in {locationTitle}?
            </h2>
            <p className="text-xl mb-4 opacity-90">
              Join 150+ franchise brands that trust FranchiseLeadsPro to deliver pre-screened, 
              high-intent franchise investor leads.
            </p>
            <p className="text-lg mb-8 opacity-80">
              Whether you're a franchise consultant, franchisor, broker, or brand — 
              we'll build a custom lead generation campaign for the {location} market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-4 text-lg font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Schedule Free Strategy Call
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.location.href = '/contact'}
              >
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
