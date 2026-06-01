import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const IndiaFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="font-display text-2xl font-bold">
                Franchise<span className="text-accent">Leads</span>Pro
              </span>
            </div>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              America's end-to-end franchise consulting partner. From franchise strategy, documentation and FDD to marketing, lead generation and investor matchmaking — we handle the full franchise growth journey.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-accent/90">$1 Franchise Lead Generation</p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-accent">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><Link to="/#solutions" className="hover:text-accent">Solutions</Link></li>
              <li><Link to="/#pricing" className="hover:text-accent">Pricing</Link></li>
              <li><Link to="/case-studies" className="hover:text-accent">Case Studies</Link></li>
              <li><Link to="/blog" className="hover:text-accent">Blog</Link></li>
              <li><Link to="/" className="hover:text-accent">USA Operations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-accent" /><a href="tel:+18382475198">USA: +1 (838)-247-5198</a></li>
              <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-accent" /><a href="tel:+918327078841">India: +91 8327078841</a></li>
              <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-accent" /><a href="mailto:support@franchiseleadspro.com">support@franchiseleadspro.com</a></li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>
                  <strong className="block text-primary-foreground">USA Office</strong>
                  111 Town Square Place<br />
                  Jersey City, NJ 07310<br />
                  United States
                </span>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span>
                  <strong className="block text-primary-foreground">India Office</strong>
                  Salt Lake Sector Five<br />
                  Kolkata, West Bengal 700091<br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col sm:flex-row justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Franchiseleadspro. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/legal-terms/privacy-policy" className="hover:text-accent">Privacy Policy</Link>
            <Link to="/legal-terms/terms-of-service" className="hover:text-accent">Terms of Service</Link>
            <Link to="/legal-terms/refund-cancellation-policy" className="hover:text-accent">Refund & Cancellation</Link>
            <Link to="/sitemap" className="hover:text-accent">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default IndiaFooter;
