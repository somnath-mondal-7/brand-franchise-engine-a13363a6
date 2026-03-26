import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Users, TrendingUp, MapPin, Phone, Mail, Building2, Scale, BarChart3 } from 'lucide-react';
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
  
  const pageTitle = `Franchise Lead Generation in ${locationTitle} | FranchiseLeadsPro`;
  const pageDescription = `Professional franchise lead generation services in ${locationTitle}. We help franchise businesses generate qualified leads and grow their presence in ${location}. Contact us for a free strategy consultation.`;
  
  const canonicalUrl = isCity && stateSlug
    ? `https://www.franchiseleadspro.com/locations/${countryCode.toLowerCase()}/${stateSlug}/${locationSlug}`
    : `https://www.franchiseleadspro.com/locations/${countryCode.toLowerCase()}/${locationSlug}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="keywords" content={`franchise leads ${location.toLowerCase()}, franchise marketing ${location.toLowerCase()}, franchise development ${location.toLowerCase()}, franchise lead generation ${location.toLowerCase()}, franchise services ${location.toLowerCase()}`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        
        {/* Structured Data - ProfessionalService */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": `FranchiseLeads Pro - ${location}`,
            "description": `Professional franchise lead generation services in ${fullLocation}`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": location,
              ...(state && { "addressRegion": state }),
              "addressCountry": countryCode
            },
            "url": canonicalUrl,
            "serviceArea": {
              "@type": "Place",
              "name": fullLocation
            },
            "areaServed": fullLocation,
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Franchise Lead Generation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Franchise Lead Generation",
                    "description": `Professional franchise lead generation services in ${location}`
                  }
                }
              ]
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": locationFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary via-primary-dark to-primary-light flex items-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-6">
              <MapPin className="h-6 w-6" />
              <span className="text-lg font-medium">{fullLocation}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Franchise Lead Generation in <span className="text-accent">{locationTitle}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Generate high-quality franchise leads in {location} with our proven marketing strategies. 
              We help {isCity ? 'local businesses' : 'businesses across the region'} grow their franchise networks.
            </p>
            {population && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-8 inline-block">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>Serving {population.toLocaleString()} residents in {location}</span>
                </div>
              </div>
            )}
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg font-semibold"
              onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
            >
              Get {location} Franchise Leads Now
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Franchise Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-muted-foreground">Countries Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Franchise Lead Generation Services in {locationTitle}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive franchise marketing services are designed to help businesses in {location} 
                attract, engage, and convert qualified prospects into franchise partners.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Local Market Research",
                  description: `In-depth analysis of the ${location} franchise market to identify the best opportunities for growth.`,
                  icon: <TrendingUp className="h-8 w-8" />
                },
                {
                  title: "Targeted Lead Generation",
                  description: `Custom lead generation campaigns specifically designed for the ${location} market.`,
                  icon: <Users className="h-8 w-8" />
                },
                {
                  title: "Digital Marketing",
                  description: `Complete digital marketing solutions including SEO, PPC, and social media for ${location} businesses.`,
                  icon: <MapPin className="h-8 w-8" />
                }
              ].map((service, index) => (
                <div key={index} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose FranchiseLeadsPro in {locationTitle}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                `Local expertise in the ${location} market`,
                "Proven track record of success",
                "Customized strategies for your business",
                "Comprehensive reporting and analytics",
                "Dedicated account management",
                "Fast turnaround times"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Data-Driven Unique Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions About Franchise Leads in {locationTitle}
            </h2>
            <div className="space-y-6">
              {locationFAQs.map((faq, idx) => (
                <div key={idx} className="bg-card rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
            
            {/* Internal Links for SEO */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-semibold mb-4">Related Services in {locationTitle}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a href="/services/franchise-marketing" className="text-primary hover:underline">Franchise Marketing</a>
                <a href="/services/franchise-consulting" className="text-primary hover:underline">Franchise Consulting</a>
                <a href="/digital-marketing" className="text-primary hover:underline">Digital Marketing</a>
                {nearbyLocations.slice(0, 3).map((nearby, idx) => (
                  <a 
                    key={idx}
                    href={`/locations/${countryCode.toLowerCase()}/${isCity ? stateSlug : locationSlug}/${nearby.slug}`}
                    className="text-primary hover:underline"
                  >
                    Franchise Leads {nearby.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview - Unique Data-Driven Content */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {locationTitle} Franchise Market Overview
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                {marketNarrative}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-card rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Economy & Market Size</h3>
                </div>
                <p className="text-muted-foreground">{regionInsight.economyDescription}</p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Franchise Climate</h3>
                </div>
                <p className="text-muted-foreground">{regionInsight.franchiseClimate}</p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Scale className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Regulatory Environment</h3>
                </div>
                <p className="text-muted-foreground">{regionInsight.regulatoryNote}</p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Growth Trends</h3>
                </div>
                <p className="text-muted-foreground">{regionInsight.growthTrend}</p>
              </div>
            </div>

            {/* Top Industries */}
            <div className="mt-8 bg-card rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Top Franchise Industries in {locationTitle}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {regionInsight.topIndustries.map((industry, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{industry}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-muted-foreground">
                Typical investment range: <strong className="text-foreground">{regionInsight.investmentRange}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Franchise in {locationTitle}?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the hundreds of successful franchise businesses that trust FranchiseLeadsPro 
              for their lead generation needs in {location}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-4 text-lg font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Schedule Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-lg font-semibold border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.location.href = '/contact'}
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};