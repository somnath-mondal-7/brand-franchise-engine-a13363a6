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
  ];

  const serviceLinks = [
    { label: 'Franchise Lead Generation', href: '/services/franchise-lead-generation' },
    { label: 'Franchise Marketing', href: '/services/franchise-marketing' },
    { label: 'Franchise Development', href: '/services/franchise-development' },
    { label: 'Franchise Consulting', href: '/services/franchise-consulting' },
    { label: 'Franchise Advertising', href: '/services/franchise-advertising' },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Franchise Lead Generation Locations</h2>
            <p className="text-muted-foreground mb-6">Explore our most requested franchise lead generation locations.</p>
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
            <h2 className="text-2xl font-semibold mb-4">Popular Franchise Services</h2>
            <p className="text-muted-foreground mb-6">Quick links to our most in-demand franchise services.</p>
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
        </div>
      </div>
    </section>
  );
};

export default SEOInternalLinks;
