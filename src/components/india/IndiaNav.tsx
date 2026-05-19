import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const IndiaNav = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const links = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-display text-xl shadow-card">
              ₹
            </div>
            <div className="leading-tight">
              <div className="font-display text-xl text-foreground">Franchise<span className="text-accent">India</span>Pro</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground -mt-0.5">Bharat's Franchise Growth Partner</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              l.href.startsWith("/#")
                ? <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors">{l.label}</a>
                : <Link key={l.href} to={l.href} className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors">{l.label}</Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+15512012729">
              <Button variant="ghost" className="text-foreground hover:text-primary hover:bg-secondary text-sm">
                <Phone className="w-4 h-4 mr-2" />+1 (551)-201-2729
              </Button>
            </a>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-md shadow-card"
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

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-[80vh]' : 'max-h-0'}`}>
          <div className="py-3 space-y-1 border-t border-border">
            {links.map((l) => (
              l.href.startsWith("/#")
                ? <a key={l.href} href={l.href} onClick={toggle} className="block px-3 py-3 text-base font-medium text-foreground/80 hover:bg-secondary rounded-md">{l.label}</a>
                : <Link key={l.href} to={l.href} onClick={toggle} className="block px-3 py-3 text-base font-medium text-foreground/80 hover:bg-secondary rounded-md">{l.label}</Link>
            ))}
            <Button
              className="w-full bg-primary text-primary-foreground mt-2"
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
