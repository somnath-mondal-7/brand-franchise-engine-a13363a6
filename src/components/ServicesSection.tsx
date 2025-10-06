import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useState, useEffect } from "react";
import { Check, Send, Users, TrendingUp, Target, Award } from "lucide-react";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [emailSent, setEmailSent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const demographics = [
    { icon: Users, label: "Business Executives", count: "85,000+", color: "text-blue-500" },
    { icon: TrendingUp, label: "Entrepreneurs", count: "120,000+", color: "text-green-500" },
    { icon: Target, label: "Franchise Seekers", count: "45,000+", color: "text-purple-500" },
    { icon: Award, label: "Industry Leaders", count: "67,000+", color: "text-orange-500" }
  ];

  const contentTypes = [
    { type: "Reels", engagement: "89%" },
    { type: "Podcasts", engagement: "76%" },
    { type: "Articles", engagement: "93%" },
    { type: "Blogs", engagement: "81%" }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        setActiveService(prev => (prev + 1) % demographics.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const handleSendEmail = () => {
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 3000);
  };

  const services = [
    {
      title: "LinkedIn marketing",
      description: "We run strategic campaigns to engage qualified professionals and generate serious franchise inquiries. To build your network with valuable candidates.",
      type: "linkedin"
    },
    {
      title: "Personalised cold outreach",
      description: "We send cold emails to upto 297,000 professionals. Our clear messaging moves cold leads into serious investors.",
      stat: "297k+",
      statLabel: "Subject Message",
      type: "outreach"
    },
    {
      title: "Content creation", 
      description: "We craft engaging eye catchy reels, podcasts, graphic designing, articles, blogs for LinkedIn, Twitter, YouTube to build brand and authority.",
      type: "content"
    },
    {
      title: "Social media marketing",
      description: "We bulk message real people on Instagram, Twitter & more—not for likes, but to drive leads and real interest.",
      platforms: [
        { name: "SMS", icon: "sms.com" },
        { name: "Twitter", icon: "x.com" },
        { name: "Instagram", icon: "instragram.com" },
        { name: "Facebook", icon: "facebook.com" },
        { name: "WhatsApp", icon: "whatsapp.com" },
        { name: "Gmail", icon: "Gmail.com" },
        { name: "Make", icon: "make.com" }
      ],
      type: "platforms"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-foreground mb-6">Our Top Marketing Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
            Innovative solutions tailored to meet your unique business needs
          </p>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            Sure, we offer a range of digital marketing services including SEO, social media management, and PPC advertising. Which service are you interested in?
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content Side */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h3 className="text-4xl font-bold text-foreground leading-tight">
                  {service.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                {service.stat && (
                  <div className="inline-block p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {service.stat}
                    </div>
                    <div className="text-muted-foreground font-medium">{service.statLabel}</div>
                  </div>
                )}
              </div>

              {/* Visual Side */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* LinkedIn Marketing with Interactive Demographics */}
                {service.type === "linkedin" && (
                  <div className="bg-gradient-to-br from-card to-muted/20 rounded-3xl p-8 shadow-card">
                    <div className="grid grid-cols-2 gap-4">
                      {demographics.map((demo, demoIndex) => {
                        const Icon = demo.icon;
                        const isActive = isMobile ? activeService === demoIndex : false;
                        return (
                          <div
                            key={demoIndex}
                            className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer
                              ${isActive || (!isMobile && 'hover:border-primary hover:shadow-lg hover:scale-105')}
                              bg-white border-border/30`}
                            onMouseEnter={() => !isMobile && setActiveService(demoIndex)}
                            onClick={() => isMobile && setActiveService(demoIndex)}
                          >
                            <Icon className={`w-8 h-8 ${demo.color} mb-3`} />
                            <div className={`text-2xl font-bold mb-1 transition-colors duration-300 
                              ${isActive || (!isMobile && activeService === demoIndex) ? 'text-primary' : 'text-foreground'}`}>
                              {demo.count}
                            </div>
                            <div className="text-sm text-muted-foreground">{demo.label}</div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                      <div className="text-sm font-medium text-primary">Active Campaign</div>
                      <div className="text-lg font-bold text-foreground">
                        {demographics[activeService]?.label} Targeting
                      </div>
                    </div>
                  </div>
                )}

                {/* Cold Outreach with Send Button Animation */}
                {service.type === "outreach" && (
                  <div className="bg-gradient-to-br from-card to-muted/20 rounded-3xl p-12 text-center shadow-card">
                    <AnimatedCounter 
                      start={100} 
                      end={297} 
                      duration={2500} 
                      suffix="k+" 
                      className="text-7xl font-black text-primary mb-6"
                    />
                    <div className="text-muted-foreground text-xl font-medium mb-8">{service.statLabel}</div>
                    <div className="space-y-4 mb-8">
                      <div className="bg-white rounded-xl p-4 text-foreground font-medium shadow-sm">
                        Subject: Franchise Opportunity
                      </div>
                      <div className="bg-white rounded-xl p-4 text-foreground font-medium shadow-sm">
                        Message: Personalized content...
                      </div>
                    </div>
                    <Button 
                      onClick={handleSendEmail}
                      className={`relative overflow-hidden transition-all duration-500 ${
                        emailSent ? 'bg-green-500 hover:bg-green-500' : ''
                      }`}
                      disabled={emailSent}
                    >
                      <div className={`flex items-center gap-2 transition-all duration-300 ${
                        emailSent ? 'transform translate-x-[-100%] opacity-0' : 'transform translate-x-0 opacity-100'
                      }`}>
                        <Send className="w-4 h-4" />
                        Send Emails
                      </div>
                      <div className={`absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 ${
                        emailSent ? 'transform translate-x-0 opacity-100' : 'transform translate-x-[100%] opacity-0'
                      }`}>
                        <Check className="w-5 h-5 text-white animate-bounce" />
                        <span className="text-white font-medium">Sent!</span>
                      </div>
                    </Button>
                  </div>
                )}

                {/* Content Creation with Interactive Types */}
                {service.type === "content" && (
                  <div className="bg-gradient-to-br from-card to-muted/20 rounded-3xl p-8 shadow-card">
                    <div className="grid grid-cols-2 gap-4">
                      {contentTypes.map((content, contentIndex) => (
                        <div
                          key={contentIndex}
                          className="p-6 rounded-2xl bg-white border border-border/30 
                            hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                        >
                          <div className="text-lg font-bold text-foreground mb-2">{content.type}</div>
                          <div className="text-2xl font-black text-primary mb-1">{content.engagement}</div>
                          <div className="text-sm text-muted-foreground">Engagement Rate</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-foreground">Content Pipeline Active</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Social Media Marketing with Live Message Flow */}
                {service.type === "platforms" && (
                  <div className="bg-gradient-to-br from-card to-muted/20 rounded-3xl p-8 shadow-card">
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {service.platforms?.slice(0, 4).map((platform, pIndex) => (
                        <div 
                          key={pIndex} 
                          className="relative group bg-white rounded-2xl p-6 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                        >
                          <div className="flex items-center gap-3 mb-4">
                            <img 
                              src={`https://logo.clearbit.com/${platform.icon}?size=500`} 
                              alt={platform.name}
                              loading="lazy"
                              decoding="async"
                              className="w-8 h-8"
                              onError={(e) => {
                                e.currentTarget.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect width="32" height="32" fill="%23f3f4f6" rx="6"/><text x="16" y="20" text-anchor="middle" fill="%236b7280" font-size="8" font-weight="bold">${platform.name.charAt(0)}</text></svg>`;
                              }}
                            />
                            <span className="font-semibold text-foreground">{platform.name}</span>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Messages</span>
                              <span className="text-lg font-bold text-primary">
                                {Math.floor(Math.random() * 500 + 100)}+
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-muted-foreground">Response Rate</span>
                              <span className="text-sm font-medium text-green-600">
                                {Math.floor(Math.random() * 30 + 15)}%
                              </span>
                            </div>
                          </div>
                          
                          {/* Live message indicator */}
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                              <span className="text-xs text-green-600 font-medium">Live</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Message Flow Animation */}
                    <div className="bg-white rounded-2xl p-6 border border-border/30">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-sm font-medium text-foreground">Active Campaigns</div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm text-green-600">Sending...</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                            <Send className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-foreground">Bulk Campaign #1</div>
                            <div className="text-xs text-muted-foreground">Targeting business owners</div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-primary">2,847</div>
                            <div className="text-xs text-muted-foreground">sent today</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                          <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-foreground">Response received</div>
                            <div className="text-xs text-muted-foreground">Interested in franchise opportunity</div>
                          </div>
                          <div className="text-xs text-green-600 font-medium">Just now</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Exclusive Marketing Services CTA - Centered with gap */}
        <div className="mt-16 mb-12 text-center">
          <Button 
            asChild
            className="bg-gradient-trust hover:shadow-orange text-white px-10 py-5 text-lg font-semibold shadow-elegant hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-xl"
          >
            <a href="/digital-marketing">
              Learn more Exclusive Marketing Services
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;