import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Briefcase, Globe } from "lucide-react";

const columns = [
  {
    icon: <MapPin className="w-4 h-4" />,
    title: "Popular Locations",
    links: [
      { label: "California", href: "/locations/usa/california" },
      { label: "Texas", href: "/locations/usa/texas" },
      { label: "New York", href: "/locations/usa/new-york" },
      { label: "Florida", href: "/locations/usa/florida" },
      { label: "England", href: "/locations/uk/england" },
      { label: "Ontario", href: "/locations/ca/ontario" },
      { label: "Maharashtra", href: "/locations/in/maharashtra" },
      { label: "Delhi NCR", href: "/locations/in/delhi-ncr" },
      { label: "Dubai", href: "/locations/ae/dubai" },
    ],
  },
  {
    icon: <Briefcase className="w-4 h-4" />,
    title: "Services",
    links: [
      { label: "Lead Generation", href: "/services/franchise-lead-generation" },
      { label: "Marketing Agency", href: "/services/franchise-marketing-agency" },
      { label: "Franchise Development", href: "/services/franchise-development" },
      { label: "Franchise Expansion", href: "/services/franchise-expansion" },
      { label: "SEO Services", href: "/services/franchise-seo" },
      { label: "Digital Marketing", href: "/services/franchise-digital-marketing" },
      { label: "Consulting", href: "/services/franchise-consulting" },
      { label: "Advertising", href: "/services/franchise-advertising" },
      { label: "Branding", href: "/services/franchise-branding" },
    ],
  },
  {
    icon: <Globe className="w-4 h-4" />,
    title: "Leads by Country",
    links: [
      { label: "USA", href: "/franchise-leads-usa" },
      { label: "India", href: "/franchise-leads-india" },
      { label: "UK", href: "/franchise-leads-uk" },
      { label: "Canada", href: "/franchise-leads-canada" },
      { label: "Australia", href: "/franchise-leads-australia" },
      { label: "Dubai & UAE", href: "/franchise-leads-dubai" },
      { label: "Kuwait", href: "/franchise-leads-kuwait" },
      { label: "Buy Franchise Leads", href: "/buy-franchise-leads" },
    ],
  },
];

const SEOInternalLinks: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
            Explore Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                  {col.icon}
                  {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm text-foreground/70 hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOInternalLinks;
