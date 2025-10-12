import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/logo-hq.png" 
                alt="FranchiseLeadsHQ - #1 Franchise Lead Generation Agency Logo" 
                width="40"
                height="40"
                className="w-10 h-10 object-contain"
                loading="eager"
                fetchPriority="high"
              />
              <span className="text-xl font-semibold text-gray-900">
                Franchiseleads<span className="text-primary">HQ</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 ml-6">
            {isHomePage ? (
              <>
                <a href="#process" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  Process
                </a>
                <a href="#services" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  Services
                </a>
                <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  Benefits
                </a>
                <a href="#about" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  About
                </a>
                <a href="#blog" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  Blog
                </a>
                <a href="#faq" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  FAQ
                </a>
              </>
            ) : (
              <>
                <Link to="/" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  Home
                </Link>
                <Link to="/services" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  Services
                </Link>
                <div 
                  className="relative group"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button className="flex items-center text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                    Franchise Leads
                    <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                  <div className={`absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg transition-all duration-200 min-w-48 z-50 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <Link to="/franchise-leads-usa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      USA Franchise Leads
                    </Link>
                    <Link to="/franchise-leads-uk" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      UK Franchise Leads
                    </Link>
                    <Link to="/franchise-leads-canada" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      Canada Franchise Leads
                    </Link>
                    <Link to="/franchise-leads-australia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      Australia Franchise Leads
                    </Link>
                    <Link to="/franchise-leads-dubai" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      Dubai Franchise Leads
                    </Link>
                    <Link to="/franchise-leads-india" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      India Franchise Leads
                    </Link>
                    <Link to="/franchise-leads-kuwait" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary">
                      Kuwait Franchise Leads
                    </Link>
                  </div>
                </div>
                <Link to="/about" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  Who We Are
                </Link>
                <Link to="/digital-marketing" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  Digital Marketing
                </Link>
                <Link to="/testimonials" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  Testimonials
                </Link>
                <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
                  Blog
                </Link>
              </>
            )}
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium">
              Contact Us
            </Link>
          </div>

          {/* Phone and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              <Phone className="w-4 h-4 mr-2" />
              (+1) 3215159932
            </Button>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg"
              onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
            >
              Let's talk
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100 max-h-96 overflow-y-auto">
              {isHomePage ? (
                <>
                  <a
                    href="#process"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Process
                  </a>
                  <a
                    href="#services"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Services
                  </a>
                  <a
                    href="#benefits"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Benefits
                  </a>
                  <a
                    href="#about"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    About
                  </a>
                  <a
                    href="#blog"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Blog
                  </a>
                  <a
                    href="#faq"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    FAQ
                  </a>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                  <Link
                    to="/services"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-base font-medium text-gray-600 border-b border-gray-100">
                      Franchise Leads:
                    </div>
                    <Link
                      to="/franchise-leads-usa"
                      className="block px-6 py-2 text-sm text-gray-700 hover:text-primary transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      USA Franchise Leads
                    </Link>
                    <Link
                      to="/franchise-leads-uk"
                      className="block px-6 py-2 text-sm text-gray-700 hover:text-primary transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      UK Franchise Leads
                    </Link>
                    <Link
                      to="/franchise-leads-canada"
                      className="block px-6 py-2 text-sm text-gray-700 hover:text-primary transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      Canada Franchise Leads
                    </Link>
                    <Link
                      to="/franchise-leads-australia"
                      className="block px-6 py-2 text-sm text-gray-700 hover:text-primary transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      Australia Franchise Leads
                    </Link>
                    <Link
                      to="/franchise-leads-dubai"
                      className="block px-6 py-2 text-sm text-gray-700 hover:text-primary transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      Dubai Franchise Leads
                    </Link>
                    <Link
                      to="/franchise-leads-india"
                      className="block px-6 py-2 text-sm text-gray-700 hover:text-primary transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      India Franchise Leads
                    </Link>
                    <Link
                      to="/franchise-leads-kuwait"
                      className="block px-6 py-2 text-sm text-gray-700 hover:text-primary transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      Kuwait Franchise Leads
                    </Link>
                  </div>
                  <Link
                    to="/about"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Who We Are
                  </Link>
                  <Link
                    to="/digital-marketing"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    to="/testimonials"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Testimonials
                  </Link>
                  <Link
                    to="/blog"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>
                </>
              )}
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
              <div className="px-3 py-2 space-y-2 border-t border-gray-100 mt-2">
                <Button variant="outline" className="w-full border-gray-300 text-gray-700">
                  <Phone className="w-4 h-4 mr-2" />
                  (+1) 3215159932
                </Button>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  onClick={() => {
                    window.open('https://calendly.com/lets-build-your-brand', '_blank');
                    toggleMenu();
                  }}
                >
                  Let's talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;