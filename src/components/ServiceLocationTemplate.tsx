import { Helmet } from "react-helmet-async";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { CheckCircle, TrendingUp, Users, DollarSign, Target, Zap } from "lucide-react";

interface ServiceLocationTemplateProps {
  service: string; // e.g., "franchise marketing", "marketing agency"
  location: string; // e.g., "New York", "Los Angeles"
  state?: string;
  country: string;
  countryCode: string;
  population?: number;
}

export const ServiceLocationTemplate = ({
  service,
  location,
  state,
  country,
  countryCode,
  population
}: ServiceLocationTemplateProps) => {
  const capitalizedService = service.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const locationName = state ? `${location}, ${state}` : location;
  const fullLocation = `${locationName}, ${country}`;
  
  const serviceSlug = service.toLowerCase().replace(/\s+/g, '-');
  const locationSlug = location.toLowerCase().replace(/\s+/g, '-');
  const stateSlug = state?.toLowerCase().replace(/\s+/g, '-');
  
  const rawCanonical = state 
    ? `https://www.franchiseleadshq.com/${serviceSlug}/${countryCode.toLowerCase()}/${stateSlug}/${locationSlug}`
    : `https://www.franchiseleadshq.com/${serviceSlug}/${countryCode.toLowerCase()}/${locationSlug}`;
  const canonicalUrl = encodeURI(rawCanonical);

  const title = `${capitalizedService} ${location} - #1 ${capitalizedService} Agency in ${location}`;
  const description = `Leading ${service} agency in ${fullLocation}. Get qualified franchise leads and grow your business with proven ${service} strategies. Results guaranteed.`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* NOINDEX: Programmatic page - prevents duplicate/thin content issues in Google Search Console */}
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
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
            "@type": "Service",
            "serviceType": capitalizedService,
            "provider": {
              "@type": "Organization",
              "name": "FranchiseLeadsHQ",
              "url": "https://www.franchiseleadshq.com"
            },
            "areaServed": {
              "@type": "City",
              "name": location,
              "containedIn": {
                "@type": state ? "State" : "Country",
                "name": state || country
              }
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                #1 {capitalizedService} Agency in {location}
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Transform your franchise business in {fullLocation} with our proven {service} strategies. 
                We've helped hundreds of businesses achieve exceptional growth.
              </p>
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Get Your Free Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {capitalizedService} Results in {location}
              </h2>
              <p className="text-xl text-gray-600">
                Real results from real businesses in {locationName}
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-600">Qualified Leads Generated</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">150+</h3>
                <p className="text-gray-600">Businesses Served in {location}</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">$8M+</h3>
                <p className="text-gray-600">Revenue Generated</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">98%</h3>
                <p className="text-gray-600">Client Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our {capitalizedService} Services in {location}
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive solutions tailored for {locationName} businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-card">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Targeted Lead Generation</h3>
                <p className="text-gray-600">
                  Connect with qualified prospects in {location} actively seeking franchise opportunities. 
                  Our data-driven approach ensures you reach the right audience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Digital Marketing</h3>
                <p className="text-gray-600">
                  Comprehensive digital marketing strategies including SEO, PPC, and social media 
                  to dominate the {location} market.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-card">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Brand Development</h3>
                <p className="text-gray-600">
                  Build a powerful franchise brand that resonates with {location} audiences 
                  and stands out from competitors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Why Businesses in {location} Choose Us
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Local Market Expertise</h3>
                    <p className="text-gray-600">
                      Deep understanding of the {locationName} market dynamics and consumer behavior
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Proven Track Record</h3>
                    <p className="text-gray-600">
                      150+ successful campaigns in {location} with measurable results
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Dedicated Support</h3>
                    <p className="text-gray-600">
                      Personal account manager familiar with {locationName} business landscape
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Results Guarantee</h3>
                    <p className="text-gray-600">
                      We're confident in our ability to deliver results or your money back
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages Section for Internal Linking */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Explore More {capitalizedService} Services</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a href={`/locations/${countryCode.toLowerCase()}/${state ? stateSlug : locationSlug}`} className="text-primary hover:underline">
                  All {(state || location)} Locations
                </a>
                <a href="/services/franchise-lead-generation" className="text-primary hover:underline">Lead Generation</a>
                <a href="/services/franchise-consulting" className="text-primary hover:underline">Franchise Consulting</a>
                <a href="/digital-marketing" className="text-primary hover:underline">Digital Marketing</a>
                <a href="/testimonials" className="text-primary hover:underline">Success Stories</a>
                <a href="/blog" className="text-primary hover:underline">Franchise Resources</a>
                <a href="/contact" className="text-primary hover:underline">Contact Us</a>
                <a href="/about" className="text-primary hover:underline">About FranchiseLeadsHQ</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Grow Your Business in {location}?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join 150+ successful businesses in {locationName} that trust us for their {service} needs
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
