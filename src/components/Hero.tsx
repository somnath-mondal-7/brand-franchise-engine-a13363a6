import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import YouTubeFacade from "@/components/YouTubeFacade";
import heroThumbnail from "@/assets/hero-video-thumbnail.png";
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
    <section className="pt-16 pb-12 md:pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-8">
          {/* Main Headline */}
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Your Complete <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Franchise Consulting</span> Partner
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            From <strong>franchise development to expansion strategy</strong> - we help businesses franchise successfully and connect franchisors with qualified investors across <strong>India & USA</strong>. Complete end-to-end franchise consulting solutions.
          </p>

          {/* CTA Button */}
          <div className="pt-2 md:pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-lg"
              onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
            >
              Get Free Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Solutions →
            </Button>
          </div>

          {/* Video Section - Optimized YouTube facade for performance */}
          <div className="pt-6 md:pt-12">
            <YouTubeFacade 
              videoId="IVhegXG0Ngk" 
              title="FranchiseLeadsHQ Introduction - Franchise Lead Generation Services"
              customThumbnail={heroThumbnail}
            />
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