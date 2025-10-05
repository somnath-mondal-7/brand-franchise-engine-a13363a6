import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Users, TrendingUp, MapPin, Phone, Mail } from 'lucide-react';

interface LocationPageProps {
  location: string;
  state?: string;
  country: string;
  countryCode: string;
  population?: number;
  isCity?: boolean;
  nearbyLocations?: string[];
}

export const LocationPageTemplate: React.FC<LocationPageProps> = ({
  location,
  state,
  country,
  countryCode,
  population,
  isCity = false,
  nearbyLocations = []
}) => {
  const locationTitle = isCity ? `${location}, ${state}` : location;
  const fullLocation = state ? `${location}, ${state}, ${country}` : `${location}, ${country}`;
  
  const pageTitle = `#1 Franchise Lead Generation Agency in ${locationTitle} | FranchiseLeads HQ`;
  const pageDescription = `Top-rated franchise lead generation services in ${locationTitle}. We help franchise businesses generate qualified leads and grow their presence in ${location}. Get results fast!`;
  
  // Generate proper URL structure
  const stateSlug = state ? state.toLowerCase().replace(/\s+/g, '-') : '';
  const locationSlugOnly = location.toLowerCase().replace(/\s+/g, '-');
  const canonicalUrl = isCity 
    ? `https://www.franchiseleadshq.com/locations/${countryCode.toLowerCase()}/${stateSlug}/${locationSlugOnly}`
    : `https://www.franchiseleadshq.com/locations/${countryCode.toLowerCase()}/${locationSlugOnly}`;

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
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `FranchiseLeads HQ - ${location}`,
            "description": `Professional franchise lead generation services in ${fullLocation}`,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": location,
              ...(state && { "addressRegion": state }),
              "addressCountry": countryCode
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "0",
              "longitude": "0"
            },
            "url": canonicalUrl,
            "telephone": "+1-800-FRANCHISE",
            "priceRange": "$$",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "0",
                "longitude": "0"
              },
              "geoRadius": "50000"
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
              #1 Franchise Lead Generation Agency in <span className="text-accent">{locationTitle}</span>
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
              onClick={() => window.open('https://calendly.com/iamsomnath-franchiseleadshq/30min', '_blank')}
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
                <div className="text-4xl font-bold text-primary mb-2">297K+</div>
                <div className="text-muted-foreground">Qualified Leads Generated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-muted-foreground">Franchise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
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
              Why Choose FranchiseLeads HQ in {locationTitle}?
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

      {/* FAQ Section - Unique Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions About Franchise Leads in {locationTitle}
            </h2>
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How quickly can I get franchise leads in {location}?</h3>
                <p className="text-muted-foreground">Most clients start receiving qualified franchise inquiries within 7-14 days of launching campaigns in {locationTitle}. Our local expertise in {location} allows us to target the right prospects faster than generic lead generation agencies.</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">What types of franchises do you work with in {locationTitle}?</h3>
                <p className="text-muted-foreground">We've successfully generated leads for food service, retail, health & fitness, home services, education, and automotive franchises in {location}. Our strategies are customized for each industry and the unique {location} market dynamics.</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">How much do franchise leads cost in {location}?</h3>
                <p className="text-muted-foreground">Lead costs vary by industry, competition level, and target demographic in {locationTitle}. We offer flexible packages starting from $2,500/month with guaranteed minimum lead volumes. Schedule a consultation to get a custom quote for your {location} franchise.</p>
              </div>
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Do you guarantee lead quality in {location}?</h3>
                <p className="text-muted-foreground">Yes! All leads from {locationTitle} campaigns are pre-qualified based on your specific criteria including investment capacity, location preferences, and industry interest. We offer 100% satisfaction guarantee - if you're not happy with lead quality, we'll work until you are.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Market Insights Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {locationTitle} Franchise Market Insights
            </h2>
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                The franchise market in {locationTitle} presents unique opportunities for growth. With {population ? `a population of ${population.toLocaleString()} and` : 'its'} strong economic foundation, {location} is an ideal market for franchise expansion. Our data-driven approach helps you tap into {isCity ? 'local consumer behaviors' : 'regional trends'} that drive franchise success.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-card rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Market Demographics</h3>
                  <p className="text-muted-foreground">We analyze {location} demographics including age distribution, income levels, household composition, and consumer spending patterns to identify your ideal franchise candidates.</p>
                </div>
                <div className="bg-card rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Competitive Landscape</h3>
                  <p className="text-muted-foreground">Our {location} market research identifies competitor positioning, saturation levels, and untapped opportunities specific to your franchise category.</p>
                </div>
                <div className="bg-card rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Local Regulations</h3>
                  <p className="text-muted-foreground">We stay updated on {country} and {location} franchise regulations, ensuring your campaigns comply with all local requirements and disclosure obligations.</p>
                </div>
                <div className="bg-card rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Growth Projections</h3>
                  <p className="text-muted-foreground">Based on economic indicators and industry trends, we provide realistic growth forecasts for your franchise in the {locationTitle} market.</p>
                </div>
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
              Ready to Grow Your Franchise in {locationTitle}?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join the hundreds of successful franchise businesses that trust FranchiseLeads HQ 
              for their lead generation needs in {location}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-4 text-lg font-semibold"
                onClick={() => window.open('https://calendly.com/iamsomnath-franchiseleadshq/30min', '_blank')}
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