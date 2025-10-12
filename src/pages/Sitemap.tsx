import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { locationData } from '@/data/locations';
import { MapPin, FileText, Briefcase } from 'lucide-react';

const Sitemap = () => {
  const services = [
    'franchise marketing',
    'franchise lead generation',
    'franchise consulting',
    'franchise development',
    'digital marketing franchise',
    'franchise brand building'
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap | FranchiseLeadsHQ - All Pages</title>
        <meta name="description" content="Complete sitemap of FranchiseLeadsHQ services, locations, and resources. Find all our franchise lead generation services across different countries and cities." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.franchiseleadshq.com/sitemap" />
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
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Main Pages</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="/" className="text-primary hover:underline">Home</a>
                <a href="/about" className="text-primary hover:underline">About Us</a>
                <a href="/services" className="text-primary hover:underline">Services</a>
                <a href="/blog" className="text-primary hover:underline">Blog</a>
                <a href="/testimonials" className="text-primary hover:underline">Testimonials</a>
                <a href="/contact" className="text-primary hover:underline">Contact</a>
                <a href="/digital-marketing" className="text-primary hover:underline">Digital Marketing</a>
                <a href="/legal-terms/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
                <a href="/legal-terms/refund-satisfaction-guarantee-policy" className="text-primary hover:underline">Refund Policy</a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Our Services</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {services.map((service) => {
                  const slug = service.toLowerCase().replace(/\s+/g, '-');
                  return (
                    <a 
                      key={service}
                      href={`/services/${slug}`} 
                      className="text-primary hover:underline capitalize"
                    >
                      {service}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Locations by Country */}
        {locationData.map((countryData) => (
          <section key={countryData.country} className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-bold">{countryData.country} Locations</h2>
                </div>
                
                {/* Country Level */}
                <div className="mb-6">
                  <a 
                    href={`/franchise-leads-${countryData.country.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-lg font-semibold text-primary hover:underline"
                  >
                    Franchise Leads {countryData.country}
                  </a>
                </div>

                {/* States & Cities */}
                <div className="space-y-8">
                  {countryData.states.map((state) => {
                    const stateSlug = state.name.toLowerCase().replace(/\s+/g, '-');
                    return (
                      <div key={state.name}>
                        <a 
                          href={`/locations/${countryData.countryCode.toLowerCase()}/${stateSlug}`}
                          className="text-lg font-semibold text-primary hover:underline block mb-3"
                        >
                          {state.name}
                        </a>
                        <div className="grid md:grid-cols-4 gap-3 pl-6">
                          {state.cities.map((city) => {
                            const citySlug = city.name.toLowerCase().replace(/\s+/g, '-');
                            return (
                              <a
                                key={city.name}
                                href={`/locations/${countryData.countryCode.toLowerCase()}/${stateSlug}/${citySlug}`}
                                className="text-primary hover:underline text-sm"
                              >
                                {city.name}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Service + Location Combinations */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Service Locations</h2>
              <p className="text-gray-600 mb-6">
                We offer specialized franchise services in major cities. Browse by service type and location:
              </p>
              
              {services.slice(0, 3).map((service) => {
                const serviceSlug = service.toLowerCase().replace(/\s+/g, '-');
                return (
                  <div key={service} className="mb-8">
                    <h3 className="text-xl font-semibold mb-4 capitalize">{service}</h3>
                    <div className="grid md:grid-cols-4 gap-3">
                      {locationData[0].states.slice(0, 8).map((state) => {
                        const stateSlug = state.name.toLowerCase().replace(/\s+/g, '-');
                        const city = state.cities[0];
                        const citySlug = city.name.toLowerCase().replace(/\s+/g, '-');
                        return (
                          <a
                            key={`${service}-${city.name}`}
                            href={`/${serviceSlug}/usa/${stateSlug}/${citySlug}`}
                            className="text-primary hover:underline text-sm"
                          >
                            {service} {city.name}
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
