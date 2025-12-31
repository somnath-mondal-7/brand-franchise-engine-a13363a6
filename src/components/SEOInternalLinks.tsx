import React from 'react';
import { Link } from 'react-router-dom';
import { keyMarkets, serviceKeywords, getMarketsByCountry } from '@/data/strategicSEOPages';

const SEOInternalLinks: React.FC = () => {
  // Get top markets from each country for internal linking
  const usaMarkets = getMarketsByCountry('USA').slice(0, 3);
  const ukMarkets = getMarketsByCountry('UK').slice(0, 2);
  const canadaMarkets = getMarketsByCountry('CA').slice(0, 2);
  const australiaMarkets = getMarketsByCountry('AU').slice(0, 2);
  const indiaMarkets = getMarketsByCountry('IN').slice(0, 2);

  // Country landing pages
  const countryPages = [
    { label: 'Franchise Leads USA', href: '/franchise-leads-usa' },
    { label: 'Franchise Leads UK', href: '/franchise-leads-uk' },
    { label: 'Franchise Leads Canada', href: '/franchise-leads-canada' },
    { label: 'Franchise Leads Australia', href: '/franchise-leads-australia' },
    { label: 'Franchise Leads India', href: '/franchise-leads-india' },
  ];

  // Top services
  const topServices = serviceKeywords.slice(0, 5);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Franchise Services Worldwide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert franchise lead generation and marketing services across USA, UK, Canada, Australia, and India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Country Pages */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Franchise Leads by Country</h3>
              <ul className="space-y-3">
                {countryPages.map((page) => (
                  <li key={page.href}>
                    <Link to={page.href} className="text-foreground hover:text-primary transition-colors flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Markets */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Top Franchise Markets</h3>
              <ul className="space-y-3">
                {[...usaMarkets.slice(0, 2), ...ukMarkets.slice(0, 1), ...canadaMarkets.slice(0, 1), ...australiaMarkets.slice(0, 1), ...indiaMarkets.slice(0, 1)].map((market) => (
                  <li key={market.slug}>
                    <Link 
                      to={`/franchise-consulting/${market.slug}`} 
                      className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Franchise Consulting {market.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Franchise Services</h3>
              <ul className="space-y-3">
                {topServices.map((service) => (
                  <li key={service.slug}>
                    <Link 
                      to={`/${service.slug}/new-york-city`} 
                      className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional SEO Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
              <Link to="/services" className="text-muted-foreground hover:text-primary">All Services</Link>
              <Link to="/buy-franchise-leads" className="text-muted-foreground hover:text-primary">Buy Franchise Leads</Link>
              <Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
              <Link to="/testimonials" className="text-muted-foreground hover:text-primary">Client Reviews</Link>
              <Link to="/blog" className="text-muted-foreground hover:text-primary">Franchise Blog</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOInternalLinks;