import { useState } from "react";
import { ArrowRight, Target, Search, Phone, Code, Zap, TrendingUp, Globe, MousePointer, Users, Bot } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOBreadcrumbs from "@/components/SEOBreadcrumbs";
import { Helmet } from "react-helmet-async";

const DigitalMarketing = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: <MousePointer className="w-8 h-8" />,
      title: "Pay Per Click (PPC)",
      description: "Drive targeted traffic with precision advertising campaigns",
      platforms: ["Google Ads", "Meta (Facebook/Instagram)", "LinkedIn Ads"],
      features: ["Campaign Strategy", "Keyword Research", "Ad Creation", "Performance Tracking"],
      color: "from-blue-500 to-cyan-500",
      bgGlow: "bg-blue-500/10"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search Engine Optimization",
      description: "Dominate search results with strategic SEO optimization",
      platforms: ["Google SEO", "Local SEO", "Technical SEO"],
      features: ["Keyword Strategy", "Content Optimization", "Link Building", "Analytics"],
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/10"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Cold Calling & Outreach",
      description: "Generate quality leads through strategic outreach campaigns",
      platforms: ["Phone Campaigns", "LinkedIn Outreach", "Email Sequences"],
      features: ["Lead Qualification", "Script Development", "CRM Integration", "Follow-up Systems"],
      color: "from-purple-500 to-violet-500",
      bgGlow: "bg-purple-500/10"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website Design & Development",
      description: "Create stunning, conversion-optimized websites that drive results",
      platforms: ["Custom Development", "CMS Solutions", "E-commerce"],
      features: ["Responsive Design", "SEO Optimization", "Performance", "User Experience"],
      color: "from-orange-500 to-red-500",
      bgGlow: "bg-orange-500/10"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI & Automation",
      description: "Leverage cutting-edge AI tools and automation to streamline your marketing",
      platforms: ["ChatBots", "Marketing Automation", "AI Analytics"],
      features: ["Lead Scoring", "Automated Responses", "Predictive Analytics", "Workflow Automation"],
      color: "from-indigo-500 to-purple-500",
      bgGlow: "bg-indigo-500/10"
    }
  ];

  const stats = [
    { label: "Campaign Success Rate", value: "95%", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Average ROI Increase", value: "340%", icon: <Target className="w-5 h-5" /> },
    { label: "Active Campaigns", value: "150+", icon: <Globe className="w-5 h-5" /> },
    { label: "Clients Served", value: "500+", icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-sky-100">
        <SEOBreadcrumbs />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 to-blue-100/30"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-blue-400 text-white px-6 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Digital Marketing Excellence
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-orange-500 to-sky-500 bg-clip-text text-transparent">
                Digital Marketing That Delivers
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Transform your franchise with cutting-edge digital marketing strategies that drive real results. 
                From PPC campaigns to SEO dominance, we've got your growth covered.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-8 py-4 text-lg"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-blue-200 text-center hover:bg-white/90 hover:border-orange-200 transition-all duration-300 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-3 text-orange-500">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Our Digital Marketing Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive digital solutions designed to accelerate your franchise growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index}
                  className={`group relative overflow-hidden bg-white/90 backdrop-blur-sm border-blue-100 hover:border-orange-200 hover:shadow-xl transition-all duration-500 cursor-pointer ${
                    hoveredCard === index ? 'bg-orange-50/50' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative z-10">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-2xl text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-500 group-hover:to-blue-500 transition-all duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-gray-800 font-semibold mb-3">Platforms & Channels:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.platforms.map((platform, idx) => (
                            <Badge key={idx} variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50 transition-colors">
                              {platform}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-gray-800 font-semibold mb-3">Key Features:</h4>
                        <ul className="space-y-2 text-gray-600">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 group-hover:border-blue-400 group-hover:text-blue-600 transition-all duration-300"
                        onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative bg-gradient-to-r from-orange-50 to-blue-50">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-100/30 to-blue-100/30"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                Ready to Dominate Digital Marketing?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let's create a custom digital marketing strategy that drives real results for your franchise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white px-8 py-4"
                  onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
                >
                  Start Your Campaign
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-orange-300 text-orange-600 hover:bg-orange-50 px-8 py-4"
                  onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DigitalMarketing;