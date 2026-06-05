import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown, Calendar, Facebook, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type MegaCol = { title: string; links: { label: string; href: string }[] };

const servicesMega: MegaCol[] = [
  {
    title: "Strategy & Documents",
    links: [
      { label: "Franchise Strategy", href: "/franchise-marketing/franchise-strategy" },
      { label: "Franchise Documentation", href: "/franchise-marketing/franchise-documentation" },
      { label: "franchiseFLOW System", href: "/franchise-flow" },
      { label: "All Services", href: "/franchise-marketing" },
    ],
  },
  {
    title: "Marketing & Demand",
    links: [
      { label: "LinkedIn Marketing", href: "/franchise-marketing/linkedin-marketing" },
      { label: "Performance Marketing", href: "/franchise-marketing/performance-marketing" },
      { label: "Franchise Website", href: "/franchise-marketing/franchise-website" },
      { label: "Franchise Recruitment", href: "/franchise-marketing/franchise-recruitment" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Our Clients", href: "/case-studies" },
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
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
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Yellow utility bar — hoopdesk-style */}
      <div className="hidden md:block bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm font-medium">
            <div className="flex items-center gap-8">
              <a href="tel:+14244455334" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="w-4 h-4" />
                <span>+1 (424) 445-5334</span>
              </a>
              <a
                href="https://calendly.com/lets-build-your-brand"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Calendar className="w-4 h-4" />
                <span>Talk With A Franchise Consultant</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61579709174263" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.linkedin.com/company/franchiseleadspro/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a href="https://www.instagram.com/franchiseleadspro_company/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav — dark */}
      <nav className="bg-primary text-primary-foreground border-b border-primary-foreground/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo — hoopdesk-style serif wordmark */}
            <Link to="/" className="flex items-center group">
              <span className="font-display text-3xl sm:text-4xl text-accent leading-none tracking-tight">
                franchiseleads<span className="text-accent">.</span>
              </span>
              <sup className="text-accent/80 text-[10px] ml-1 mt-1">™</sup>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
                About
              </Link>

              {/* Services mega-menu */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors py-7">
                  Franchise Marketing <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute left-1/2 -translate-x-1/2 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="w-[min(92vw,1100px)] bg-primary border border-primary-foreground/10 rounded-md shadow-elegant p-7">
                    <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                      {servicesMega.map((col) => (
                        <div key={col.title}>
                          <h4 className="font-display text-sm text-accent font-bold mb-3 pb-2 border-b border-primary-foreground/10">
                            {col.title}
                          </h4>
                          <ul className="space-y-2">
                            {col.links.map((l) => (
                              <li key={l.label}>
                                <Link to={l.href} className="text-sm text-primary-foreground/75 hover:text-accent transition-colors">
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <Link to="/case-studies" className="text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
                Case Studies
              </Link>
              <Link to="/testimonials" className="text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
                Our Clients
              </Link>
              <Link to="/blog" className="text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
                Blogs
              </Link>
              <Link to="/contact" className="text-sm font-medium text-primary-foreground/90 hover:text-accent transition-colors">
                Contact
              </Link>
            </div>

            <div className="hidden lg:flex items-center">
              <Button
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-semibold h-11 px-6"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Let's Talk <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>

            <div className="lg:hidden">
              <button onClick={toggle} className="p-2 text-primary-foreground" aria-label="Toggle menu">
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[85vh] overflow-y-auto' : 'max-h-0'}`}>
            <div className="py-3 space-y-1 border-t border-primary-foreground/10">
              {links.map((l) => (
                <Link key={l.href} to={l.href} onClick={toggle} className="block px-3 py-3 text-base font-medium text-primary-foreground/90 hover:bg-primary-foreground/10 rounded-md">
                  {l.label}
                </Link>
              ))}
              <button
                onClick={() => setMServices(!mServices)}
                className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-primary-foreground/90 hover:bg-primary-foreground/10 rounded-md"
              >
                Franchise Marketing <ChevronDown className={`w-4 h-4 transition-transform ${mServices ? 'rotate-180' : ''}`} />
              </button>
              {mServices && (
                <div className="pl-4 pb-2 space-y-3">
                  {servicesMega.map((col) => (
                    <div key={col.title}>
                      <p className="text-xs uppercase tracking-wider text-accent font-bold mt-2 mb-1">{col.title}</p>
                      <ul className="space-y-1">
                        {col.links.map((l) => (
                          <li key={l.label}>
                            <Link to={l.href} onClick={toggle} className="block py-1.5 text-sm text-primary-foreground/70">
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
                className="w-full bg-accent text-accent-foreground mt-2 font-semibold rounded-full"
                onClick={() => { window.open('https://calendly.com/lets-build-your-brand', '_blank'); toggle(); }}
              >
                Let's Talk
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default IndiaNav;
