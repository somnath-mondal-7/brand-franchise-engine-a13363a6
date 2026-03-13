import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { locationData, broadMarketingKeywords, seoKeywords } from '@/data/locations';
import { MapPin, FileText, Briefcase, Globe } from 'lucide-react';
import { slugify } from '@/utils/slugify';

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <title>Sitemap | FranchiseLeadsPro - All Pages</title>
        <meta name="description" content="Complete sitemap of FranchiseLeadsPro services, locations, and resources. Find all our franchise lead generation services across different countries and cities." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.franchiseleadspro.com/sitemap" />
      </Helmet>

      <Navigation />
      
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="py-16 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Site Map</h1>
              <p className="text-xl opacity-90">
                Browse all our franchise lead generation services, locations, and resources
              </p>
            </div>
          </div>
        </section>

        {/* Main Pages */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Main Pages</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="/" className="text-primary hover:underline">Home</a>
                <a href="/about" className="text-primary hover:underline">About Us</a>
                <a href="/services" className="text-primary hover:underline">Services</a>
                <a href="/blog" className="text-primary hover:underline">Blog</a>
                <a href="/testimonials" className="text-primary hover:underline">Testimonials</a>
                <a href="/contact" className="text-primary hover:underline">Contact</a>
                <a href="/digital-marketing" className="text-primary hover:underline">Digital Marketing</a>
                <a href="/buy-franchise-leads" className="text-primary hover:underline">Buy Franchise Leads</a>
                <a href="/legal-terms/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
                <a href="/legal-terms/refund-satisfaction-guarantee-policy" className="text-primary hover:underline">Refund Policy</a>
              </div>
            </div>
          </div>
        </section>

        {/* Country Pages */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Country Pages</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="/franchise-leads-usa" className="text-primary hover:underline">Franchise Leads USA</a>
                <a href="/franchise-leads-india" className="text-primary hover:underline">Franchise Leads India</a>
                <a href="/franchise-leads-uk" className="text-primary hover:underline">Franchise Leads UK</a>
                <a href="/franchise-leads-canada" className="text-primary hover:underline">Franchise Leads Canada</a>
                <a href="/franchise-leads-australia" className="text-primary hover:underline">Franchise Leads Australia</a>
                <a href="/franchise-leads-dubai" className="text-primary hover:underline">Franchise Leads Dubai</a>
                <a href="/franchise-leads-kuwait" className="text-primary hover:underline">Franchise Leads Kuwait</a>
              </div>
            </div>
          </div>
        </section>

        {/* Keyword/Service Pages */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">Service Pages</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {seoKeywords.slice(0, 30).map((keyword) => {
                  const slug = keyword.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                  return (
                    <a 
                      key={keyword}
                      href={`/services/${slug}`} 
                      className="text-primary hover:underline capitalize text-sm"
                    >
                      {keyword}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Locations by Country */}
        {locationData.map((countryData) => (
          <section key={countryData.country} className="py-12 bg-card border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">{countryData.country} Locations</h2>
                </div>
                
                {/* Country Level */}
                <div className="mb-6">
                  <a 
                    href={`/locations/${countryData.countryCode.toLowerCase()}`}
                    className="text-lg font-semibold text-primary hover:underline"
                  >
                    All {countryData.country} Locations
                  </a>
                </div>

                {/* States & Cities */}
                <div className="space-y-8">
                  {countryData.states.map((state) => (
                    <div key={state.slug}>
                      <a 
                        href={`/locations/${countryData.countryCode.toLowerCase()}/${state.slug}`}
                        className="text-lg font-semibold text-primary hover:underline block mb-3"
                      >
                        {state.name}
                      </a>
                      <div className="grid md:grid-cols-4 gap-3 pl-6">
                        {state.cities.map((city) => (
                          <a
                            key={city.slug}
                            href={`/locations/${countryData.countryCode.toLowerCase()}/${state.slug}/${city.slug}`}
                            className="text-primary hover:underline text-sm"
                          >
                            {city.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Service + Location Combinations (sample) */}
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6">Service + Location Pages</h2>
              <p className="text-muted-foreground mb-6">
                We offer specialized franchise services in major cities. Here's a sample — browse by service type and location:
              </p>
              
              {broadMarketingKeywords.slice(0, 5).map((service) => {
                const serviceSlug = slugify(service);
                return (
                  <div key={service} className="mb-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4 capitalize">{service}</h3>
                    <div className="grid md:grid-cols-4 gap-3">
                      {locationData[0]?.states.slice(0, 4).map((state) => {
                        const city = state.cities[0];
                        if (!city) return null;
                        return (
                          <a
                            key={`${service}-${city.slug}`}
                            href={`/${serviceSlug}/${locationData[0].countryCode.toLowerCase()}/${state.slug}/${city.slug}`}
                            className="text-primary hover:underline text-sm"
                          >
                            {service} in {city.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Sitemap;
