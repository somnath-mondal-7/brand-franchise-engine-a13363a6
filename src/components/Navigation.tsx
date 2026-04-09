import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/logo-hq.png" 
                alt="FranchiseLeadsPro - #1 Franchise Lead Generation Agency Logo" 
                width="40"
                height="40"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                loading="eager"
                fetchPriority="high"
              />
              <span className="hidden sm:inline text-xl font-semibold text-foreground">
                Franchiseleads<span className="text-primary">Pro</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 ml-6">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">Home</Link>
            <Link to="/services" className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">Services</Link>
            <a href="/#pricing" className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">Pricing</a>
            <Link to="/case-studies" className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">Case Studies</Link>
            <Link to="/blog" className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">Blog</Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium">Contact Us</Link>
          </div>

          {/* Phone and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+15512012377">
              <Button variant="outline" className="border-border text-foreground hover:bg-muted">
                <Phone className="w-4 h-4 mr-2" />+1 (551)-201-23-77
              </Button>
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg" onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}>Let's talk</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button variant="outline" size="sm" onClick={toggleMenu} className="text-foreground border-border bg-background min-h-[44px] min-w-[44px]">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border overflow-y-auto max-h-[75vh]">
            <Link to="/" className="block px-3 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200" onClick={toggleMenu}>Home</Link>
            <Link to="/services" className="block px-3 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200" onClick={toggleMenu}>Services</Link>
            <a href="/#pricing" className="block px-3 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200" onClick={toggleMenu}>Pricing</a>
            <Link to="/case-studies" className="block px-3 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200" onClick={toggleMenu}>Case Studies</Link>
            <Link to="/blog" className="block px-3 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200" onClick={toggleMenu}>Blog</Link>
            <Link to="/contact" className="block px-3 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-muted rounded-lg transition-colors duration-200" onClick={toggleMenu}>Contact Us</Link>
            <div className="px-3 py-3 space-y-2 border-t border-border mt-2">
              <a href="tel:+15512012377" className="block">
                <Button variant="outline" className="w-full border-border text-foreground min-h-[44px]">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">+1 (551)-201-23-77</span>
                </Button>
              </a>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground min-h-[44px]" onClick={() => { window.open('https://calendly.com/lets-build-your-brand', '_blank'); toggleMenu(); }}>Let's talk</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
