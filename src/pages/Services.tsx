import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Users, Megaphone, Search, Filter, Handshake, Target, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Lead Generation",
      description: "High-quality, pre-qualified leads that convert into real franchise opportunities for consultants and franchisors.",
      features: [
        "Target Market Analysis & Research",
        "Multi-Channel Outreach Campaigns", 
        "Lead Qualification & Scoring",
        "CRM Integration & Management",
        "Performance Tracking & Reporting",
        "Quality Assurance & Follow-up"
      ],
      process: [
        { icon: <Search className="w-6 h-6" />, title: "Research & Target", desc: "Identify high-intent prospects" },
        { icon: <Filter className="w-6 h-6" />, title: "Qualify Leads", desc: "Filter for quality prospects" },
        { icon: <Handshake className="w-6 h-6" />, title: "Deliver Results", desc: "Warm introductions to you" }
      ]
    },
    {
      icon: <Megaphone className="w-12 h-12 text-primary" />,
      title: "Brand Building",
      description: "Strategic brand positioning that makes your franchise stand out and attract quality prospects in competitive markets.",
      features: [
        "Brand Strategy Development",
        "Content Creation & Marketing",
        "Digital Presence Optimization",
        "Market Positioning Strategy",
        "Competitive Analysis & Insights",
        "Brand Guidelines & Standards"
      ],
      process: [
        { icon: <Target className="w-6 h-6" />, title: "Strategy", desc: "Develop positioning strategy" },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Execute", desc: "Implement across channels" },
        { icon: <Users className="w-6 h-6" />, title: "Optimize", desc: "Measure and improve" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Franchise Consulting Services | Development, Recruitment & Expansion</title>
        <meta name="description" content="Complete franchise consulting services including franchise development, franchisee recruitment, matchmaking, and expansion planning. Serving India & USA. 850+ brands served." />
        <link rel="canonical" href="https://www.franchiseleadshq.com/services" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-background via-accent/30 to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-navy leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-brand-gray leading-relaxed">
              We specialize in two core services that transform franchise businesses: 
              generating high-quality leads and building powerful brands that dominate markets.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="max-w-6xl mx-auto">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      {service.icon}
                      <h2 className="text-4xl font-bold text-brand-navy">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-brand-gray leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-brand-navy">What's Included:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-brand-gray">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link to="/contact">
                      <Button className="bg-gradient-primary hover:shadow-elegant">
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>

                  {/* Process Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Card className="bg-gradient-secondary border-border/50 shadow-card">
                      <CardHeader className="text-center">
                        <CardTitle className="text-2xl text-brand-navy">Our Process</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {service.process.map((step, stepIdx) => (
                          <div key={stepIdx} className="flex items-start space-x-4 group hover:bg-card p-4 rounded-xl transition-all">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                              {step.icon}
                            </div>
                            <div>
                              <h4 className="font-semibold text-brand-navy group-hover:text-primary transition-colors">
                                {step.title}
                              </h4>
                              <p className="text-sm text-brand-gray">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-navy mb-6">Proven Results</h2>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Our services deliver measurable outcomes that transform franchise businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">640+</div>
              <div className="text-brand-gray">Franchise Professionals Served</div>
            </div>
            <div className="text-center">
              <AnimatedCounter 
                start={100} 
                end={297} 
                duration={2500} 
                suffix="+" 
                className="text-4xl font-bold text-primary mb-2"
              />
              <div className="text-brand-gray">Qualified Leads Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-brand-gray">Client Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3x</div>
              <div className="text-brand-gray">Average ROI</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white space-y-8">
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl opacity-90">
              Let's discuss how our services can transform your franchise business.
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline" 
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary px-8 py-6 text-lg backdrop-blur-sm"
              >
                Book Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default Services;