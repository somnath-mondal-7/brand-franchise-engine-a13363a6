import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import logo1 from "@/assets/clients/logo1.svg";
import logo2 from "@/assets/clients/logo2.png";
import logo3 from "@/assets/clients/logo3.png";
import logo4 from "@/assets/clients/logo4.png";
import logo5 from "@/assets/clients/logo5.png";

import avatar1 from "@/assets/clients/avatars/avatar1.jpg";
import avatar2 from "@/assets/clients/avatars/avatar2.jpg";
import avatar3 from "@/assets/clients/avatars/avatar3.jpg";
import avatar4 from "@/assets/clients/avatars/avatar4.jpg";

const Hero = () => {
  return (
    <section className="pt-16 pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              #1 <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Franchise Lead Generation</span> Agency — We Build Brands
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Transform your franchise business with our proven lead generation system. We've generated <strong>50,000+ qualified leads</strong> for franchise consultants and franchisors worldwide.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-lg"
              onClick={() => window.open('https://calendly.com/som832707/book-an-1-1consualtation', '_blank')}
            >
              Get Your Free Strategy Call
            </Button>
          </div>

          {/* Video Section - YouTube embed for optimal performance */}
          <div className="pt-12">
            <div className="relative max-w-4xl mx-auto">
              <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/VyZDMn7GtdI?si=Lp88p85HkRIAQlcl"
                  title="FranchiseLeadsHQ Introduction - Franchise Lead Generation Services"
                  width="800"
                  height="450"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                See how we've helped 5000+ franchise businesses generate qualified leads
              </p>
            </div>
          </div>

          {/* Client Photos, Rating and Logos */}
          <div className="pt-16">
            <div className="mb-8">
              <div className="flex items-center justify-center -space-x-2">
                <img src={avatar1} alt="Franchise consultant success story - generated $2M in leads" width="40" height="40" className="h-10 w-10 rounded-full ring-2 ring-white object-cover" loading="eager" fetchPriority="high" />
                <img src={avatar2} alt="Franchisor testimonial - 300% ROI increase" width="40" height="40" className="h-10 w-10 rounded-full ring-2 ring-white object-cover" loading="eager" />
                <img src={avatar3} alt="Marketing director review - best lead quality" width="40" height="40" className="h-10 w-10 rounded-full ring-2 ring-white object-cover" loading="eager" />
                <img src={avatar4} alt="Business owner testimonial - 50+ leads monthly" width="40" height="40" className="h-10 w-10 rounded-full ring-2 ring-white object-cover" loading="eager" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-muted-foreground text-lg font-medium">Loved by 5000+ people</span>
              </div>
            </div>
            
            {/* Trusted By Section */}
            <div className="bg-white py-16 -mx-4 sm:-mx-6 lg:-mx-8 mt-16 border-t border-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-gray-600 mb-12 tracking-wider uppercase">
                  Trusted by Leading Franchise Brands
                </p>
                
                {/* Desktop: Static logos */}
                <div className="hidden md:flex items-center justify-center gap-16 flex-wrap">
                  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <img src={logo1} alt="Client logo 1" width="100" height="48" loading="lazy" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <img src={logo2} alt="Client logo 2" width="100" height="48" loading="lazy" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <img src={logo3} alt="Client logo 3" width="100" height="48" loading="lazy" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <img src={logo4} alt="Client logo 4" width="100" height="48" loading="lazy" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
                  </div>
                  <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <img src={logo5} alt="Client logo 5" width="100" height="48" loading="lazy" className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
                  </div>
                </div>
                
                {/* Mobile: Scrolling logos */}
                <div className="md:hidden relative overflow-hidden py-4">
                  <div className="flex animate-marquee gap-8">
                    <div className="flex items-center justify-center gap-8 flex-shrink-0">
                      <div className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 min-w-[80px]">
                        <img src={logo1} alt="Client logo 1" width="60" height="32" loading="lazy" className="h-8 w-auto opacity-70 grayscale max-w-[60px]" />
                      </div>
                      <div className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 min-w-[80px]">
                        <img src={logo2} alt="Client logo 2" width="60" height="32" loading="lazy" className="h-8 w-auto opacity-70 grayscale max-w-[60px]" />
                      </div>
                      <div className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 min-w-[80px]">
                        <img src={logo3} alt="Client logo 3" width="60" height="32" loading="lazy" className="h-8 w-auto opacity-70 grayscale max-w-[60px]" />
                      </div>
                      <div className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 min-w-[80px]">
                        <img src={logo4} alt="Client logo 4" width="60" height="32" loading="lazy" className="h-8 w-auto opacity-70 grayscale max-w-[60px]" />
                      </div>
                      <div className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 min-w-[80px]">
                        <img src={logo5} alt="Client logo 5" width="60" height="32" loading="lazy" className="h-8 w-auto opacity-70 grayscale max-w-[60px]" />
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-8 flex-shrink-0" aria-hidden="true">
                      <div className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 min-w-[80px]">
                        <img src={logo1} alt="" width="60" height="32" loading="lazy" className="h-8 w-auto opacity-70 grayscale max-w-[60px]" />
                      </div>
                      <div className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 min-w-[80px]">
                        <img src={logo2} alt="" width="60" height="32" loading="lazy" className="h-8 w-auto opacity-70 grayscale max-w-[60px]" />
                      </div>
                      <div className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 min-w-[80px]">
                        <img src={logo3} alt="" width="60" height="32" loading="lazy" className="h-8 w-auto opacity-70 grayscale max-w-[60px]" />
                      </div>
                      <div className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 min-w-[80px]">
                        <img src={logo4} alt="" width="60" height="32" loading="lazy" className="h-8 w-auto opacity-70 grayscale max-w-[60px]" />
                      </div>
                      <div className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 min-w-[80px]">
                        <img src={logo5} alt="" width="60" height="32" loading="lazy" className="h-8 w-auto opacity-70 grayscale max-w-[60px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;