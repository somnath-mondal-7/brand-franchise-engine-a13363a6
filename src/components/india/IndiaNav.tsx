import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type MegaCol = { title: string; links: { label: string; href: string }[] };

const servicesMega: MegaCol[] = [
  {
    title: "Start Franchising in 7 Days",
    links: [
      { label: "Are You Ready to Franchise Your Business", href: "/services" },
      { label: "Franchise Readiness Audit", href: "/services" },
      { label: "How to Make Franchise Successful", href: "/services" },
      { label: "Franchise Registration in India", href: "/services" },
    ],
  },
  {
    title: "A-Z Franchise Consultancy",
    links: [
      { label: "Franchising Your Business", href: "/services" },
      { label: "Franchise Strategy Development", href: "/services" },
      { label: "Advantages of Franchising", href: "/services" },
      { label: "Franchise Questions & Answers", href: "/services" },
    ],
  },
  {
    title: "Franchise Development India",
    links: [
      { label: "Business Growth Strategies", href: "/services" },
      { label: "Appoint Dealers / Distributors", href: "/services" },
      { label: "Sell Your Business", href: "/services" },
      { label: "Small Business Consulting", href: "/services" },
    ],
  },
  {
    title: "Business Franchise Marketing",
    links: [
      { label: "Franchise Marketing Strategy", href: "/services" },
      { label: "Franchise Recruitment Service", href: "/services" },
      { label: "Franchise Lead Generation", href: "/" },
      { label: "Franchise Exhibitions", href: "/services" },
    ],
  },
  {
    title: "Franchise Documents",
    links: [
      { label: "Franchise Agreement India", href: "/services" },
      { label: "Franchise Marketing Kits", href: "/services" },
      { label: "Franchise Manuals", href: "/services" },
      { label: "Franchise Business Plan", href: "/services" },
    ],
  },
  {
    title: "Global & Solutions",
    links: [
      { label: "India Master Franchise Program", href: "/services" },
      { label: "International Franchise Opportunities", href: "/services" },
      { label: "Managing Franchisees", href: "/services" },
      { label: "Franchise Training Programs", href: "/services" },
    ],
  },
];

const IndiaNav = () => {
  const [open, setOpen] = useState(false);
  const [mServices, setMServices] = useState(false);
  const toggle = () => setOpen(!open);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="font-display text-xl sm:text-2xl leading-none">
              <span className="text-primary font-bold">Franchise</span>
              <span className="text-accent font-bold">Leads</span>
              <span className="text-foreground font-bold">Pro</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            <Link to="/" className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors">
              Home
            </Link>

            {/* Services mega-menu */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-medium text-foreground/75 hover:text-primary transition-colors py-5">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="w-[min(92vw,1100px)] bg-background border border-border rounded-lg shadow-elegant p-7">
                  <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                    {servicesMega.map((col) => (
                      <div key={col.title}>
                        <h4 className="font-display text-sm text-primary font-bold mb-3 pb-2 border-b border-border">
                          {col.title}
                        </h4>
                        <ul className="space-y-2">
                          {col.links.map((l) => (
                            <li key={l.label}>
                              <Link to={l.href} className="text-sm text-foreground/75 hover:text-accent transition-colors">
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">End-to-end franchise consulting — strategy, documentation, marketing, and lead generation.</p>
                    <Link to="/services">
                      <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Explore All Services
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {links.slice(1).map((l) => (
              <Link key={l.href} to={l.href} className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact">
              <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-secondary text-sm">
                <Phone className="w-4 h-4 mr-2" />Enquire Now
              </Button>
            </Link>
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-md shadow-card font-semibold"
              onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
            >
              Book Free Consultation
            </Button>
          </div>

          <div className="lg:hidden">
            <button onClick={toggle} className="p-2 text-foreground" aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[85vh] overflow-y-auto' : 'max-h-0'}`}>
          <div className="py-3 space-y-1 border-t border-border">
            {links.map((l) => (
              <Link key={l.href} to={l.href} onClick={toggle} className="block px-3 py-3 text-base font-medium text-foreground/80 hover:bg-secondary rounded-md">
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => setMServices(!mServices)}
              className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-foreground/80 hover:bg-secondary rounded-md"
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform ${mServices ? 'rotate-180' : ''}`} />
            </button>
            {mServices && (
              <div className="pl-4 pb-2 space-y-3">
                {servicesMega.map((col) => (
                  <div key={col.title}>
                    <p className="text-xs uppercase tracking-wider text-primary font-bold mt-2 mb-1">{col.title}</p>
                    <ul className="space-y-1">
                      {col.links.map((l) => (
                        <li key={l.label}>
                          <Link to={l.href} onClick={toggle} className="block py-1.5 text-sm text-foreground/70">
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            <Button
              className="w-full bg-accent text-accent-foreground mt-2 font-semibold"
              onClick={() => { window.open('https://calendly.com/lets-build-your-brand', '_blank'); toggle(); }}
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default IndiaNav;
