import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-hq.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="FranchiseLeadsHQ Logo - Franchise Lead Generation Experts" width="40" height="40" className="w-10 h-10 object-contain" />
              <span className="text-xl font-semibold text-white" aria-label="FranchiseLeadsHQ">
                franchiseleads<span className="text-primary font-bold">HQ</span>
              </span>
            </div>
            <p className="text-gray-400">
              We don't just generate leads, we build brands that dominate the franchise market.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/franchiseleadshq/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.facebook.com/people/Franchiseleadshq/61579709174263/" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/iamsomnath_mondal?" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Lead Generation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Brand Building</a></li>
              <li>
                <a href="/digital-marketing" className="group relative hover:text-white transition-colors">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                    Digital Marketing ✨
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded"></span>
                </a>
              </li>
              <li><a href="#services" className="hover:text-white transition-colors">LinkedIn Marketing</a></li>
            </ul>
          </div>

          {/* Franchise Leads by Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Franchise Leads by Location</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/franchise-leads-usa" className="hover:text-white transition-colors">USA Franchise Leads</a></li>
              <li><a href="/franchise-leads-uk" className="hover:text-white transition-colors">UK Franchise Leads</a></li>
              <li><a href="/franchise-leads-canada" className="hover:text-white transition-colors">Canada Franchise Leads</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>support@franchiseleadshq.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span>(+1) 3215159932</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1" />
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-gray-300">USA Office</p>
                    <p>432 Park Avenue, Suite 1502</p>
                    <p>New York, NY 10016</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-300">India Office</p>
                    <p>Salt Lake Sector Five</p>
                    <p>Kolkata, West Bengal 700091</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">
              <p>© 2025 FranchiseLeadsHQ. All rights reserved.</p>
              <p className="text-xs text-gray-600 mt-1">Build: Oct 6, 2025 @ 10:45 UTC</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/legal-terms/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/legal-terms/refund-satisfaction-guarantee-policy" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;