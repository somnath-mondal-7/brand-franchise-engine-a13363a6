import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-hq.png";
import TrustBadges from "@/components/TrustBadges";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="FranchiseLeadsPro Logo - Franchise Lead Generation Experts" width="56" height="56" className="w-14 h-14 object-contain" />
              <span className="text-xl font-semibold text-white" aria-label="FranchiseLeadsPro">
                franchiseleads<span className="text-primary font-bold">Pro</span>
              </span>
            </div>
            <p className="text-gray-400">
              We don't just generate leads, we build brands that dominate the franchise market.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/franchiseleadspro/" target="_blank" rel="noopener noreferrer" className="min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Linkedin className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61579709174263" target="_blank" rel="noopener noreferrer" className="min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Facebook className="w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/franchiseleadspro_company/" target="_blank" rel="noopener noreferrer" className="min-h-[44px] min-w-[44px] flex items-center justify-center">
                <Instagram className="w-5 h-5 hover:text-pink-400 cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors py-1 inline-block">Lead Generation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors py-1 inline-block">Brand Building</a></li>
              <li>
                <a href="/digital-marketing" className="group relative hover:text-white transition-colors py-1 inline-block">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-semibold">
                    Digital Marketing ✨
                  </span>
                  <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity rounded"></span>
                </a>
              </li>
              <li><a href="#services" className="hover:text-white transition-colors py-1 inline-block">LinkedIn Marketing</a></li>
            </ul>
          </div>

          {/* Franchise Leads by Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Franchise Leads by Location</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/franchise-leads-usa" className="hover:text-white transition-colors py-1 inline-block">USA Franchise Leads</a></li>
              <li><a href="/franchise-leads-uk" className="hover:text-white transition-colors py-1 inline-block">UK Franchise Leads</a></li>
              <li><a href="/franchise-leads-canada" className="hover:text-white transition-colors py-1 inline-block">Canada Franchise Leads</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/blog" className="hover:text-white transition-colors py-1 inline-block">Blog</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors py-1 inline-block">Contact Us</a></li>
              <li><a href="/sitemap" className="hover:text-white transition-colors py-1 inline-block">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:support@franchiseleadspro.com" className="hover:text-white transition-colors break-all">support@franchiseleadspro.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+18382475198" className="hover:text-white transition-colors">+1 (838)-247-5198</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-gray-300">USA Office</p>
                    <p>111 Town Square Place</p>
                    <p>Jersey City, NJ 07310</p>
                    <p>United States</p>
                  </div>
                  <div className="hidden">
                    <p className="font-medium text-gray-300">India Office</p>
                    <p>Salt Lake Sector Five</p>
                    <p>Kolkata, West Bengal 700091</p>
                    <a href="tel:+18382475198" className="hover:text-white transition-colors">+1 (838)-247-5198</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-gray-800 mt-10 sm:mt-12 pt-6 sm:pt-8">
          <TrustBadges variant="footer" />
        </div>

        <div className="border-t border-gray-800 mt-4 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm sm:text-base">
              <p>© 2026 FranchiseLeadsPro. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="/legal-terms/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
