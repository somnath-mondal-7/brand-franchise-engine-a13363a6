import React from 'react';
import { Link } from 'react-router-dom';

const SEOInternalLinks: React.FC = () => {
  const locationLinks = [
    { label: 'Franchise Leads in California', href: '/locations/usa/california' },
    { label: 'Franchise Leads in Texas', href: '/locations/usa/texas' },
    { label: 'Franchise Leads in New York', href: '/locations/usa/new-york' },
    { label: 'Franchise Leads in Florida', href: '/locations/usa/florida' },
    { label: 'Franchise Leads in England', href: '/locations/uk/england' },
    { label: 'Franchise Leads in Ontario', href: '/locations/ca/ontario' },
    { label: 'Franchise Leads in Maharashtra', href: '/locations/in/maharashtra' },
    { label: 'Franchise Leads in Delhi', href: '/locations/in/delhi' },
    { label: 'Franchise Leads in Dubai', href: '/locations/ae/dubai' },
  ];

  const serviceLinks = [
    { label: 'Franchise Lead Generation', href: '/services/franchise-lead-generation' },
    { label: 'Franchise Marketing Agency', href: '/services/franchise-marketing-agency' },
    { label: 'Franchise Website Development', href: '/services/franchise-website-development-company' },
    { label: 'Franchise App Development', href: '/services/franchise-app-development-company' },
    { label: 'Franchise SEO Services', href: '/services/franchise-seo' },
    { label: 'Franchise Digital Marketing', href: '/services/franchise-digital-marketing' },
    { label: 'Franchise Consulting', href: '/services/franchise-consulting' },
    { label: 'IT Services for Franchises', href: '/services/it-services-for-franchise-businesses' },
    { label: 'Web Development for Franchisors', href: '/services/web-development-for-franchisors' },
  ];

  const countryLinks = [
    { label: 'Franchise Leads USA', href: '/franchise-leads-usa' },
    { label: 'Franchise Leads India', href: '/franchise-leads-india' },
    { label: 'Franchise Leads UK', href: '/franchise-leads-uk' },
    { label: 'Franchise Leads Canada', href: '/franchise-leads-canada' },
    { label: 'Franchise Leads Australia', href: '/franchise-leads-australia' },
    { label: 'Franchise Leads Dubai & UAE', href: '/franchise-leads-dubai' },
    { label: 'Franchise Leads Kuwait', href: '/franchise-leads-kuwait' },
    { label: 'Buy Franchise Leads', href: '/buy-franchise-leads' },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">Explore Our Franchise Services Worldwide</h2>
            <p className="text-muted-foreground text-lg">Franchise lead generation, marketing, website development & IT services across the globe.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Popular Locations</h3>
              <ul className="space-y-3 list-disc pl-5">
                {locationLinks.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="text-primary hover:underline">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Franchise Services</h3>
              <ul className="space-y-3 list-disc pl-5">
                {serviceLinks.map((s) => (
                  <li key={s.href}>
                    <Link to={s.href} className="text-primary hover:underline">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Franchise Leads by Country</h3>
              <ul className="space-y-3 list-disc pl-5">
                {countryLinks.map((c) => (
                  <li key={c.href}>
                    <Link to={c.href} className="text-primary hover:underline">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOInternalLinks;
