import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Share2, Globe, ArrowRight, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Linkedin className="w-12 h-12 text-primary" />,
      title: "LinkedIn Marketing",
      description: "We use LinkedIn Sales Navigator and targeted outreach to connect franchise consultants and franchisors with high-net-worth investors actively looking to invest in franchises.",
      features: [
        "Sales Navigator Prospecting",
        "Personalized Connection Campaigns",
        "Thought Leadership Content",
        "Meeting Booking Automation",
        "Investor Profiling & Targeting",
        "Campaign Analytics & Reporting"
      ],
      process: [
        { icon: <Target className="w-6 h-6" />, title: "Identify Investors", desc: "Find HNIs matching your franchise profile" },
        { icon: <Users className="w-6 h-6" />, title: "Targeted Outreach", desc: "Personalized campaigns that get responses" },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Book Meetings", desc: "Warm introductions to serious buyers" }
      ]
    },
    {
      icon: <Share2 className="w-12 h-12 text-primary" />,
      title: "Social Media Marketing (Paid + Organic)",
      description: "Full-service social media marketing across Facebook, Instagram, and LinkedIn. We create paid ad campaigns and organic content strategies that generate qualified franchise leads consistently.",
      features: [
        "Facebook & Instagram Ad Campaigns",
        "LinkedIn Sponsored Content",
        "Organic Content Creation & Posting",
        "Retargeting & Lookalike Audiences",
        "A/B Testing & Optimization",
        "Monthly Performance Reporting"
      ],
      process: [
        { icon: <Target className="w-6 h-6" />, title: "Strategy & Targeting", desc: "Define audiences and creative approach" },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Launch & Optimize", desc: "Run paid + organic in parallel" },
        { icon: <Users className="w-6 h-6" />, title: "Generate Leads", desc: "Qualified investor inquiries delivered" }
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Franchise Website Development & Design",
      description: "We design and develop professional franchise websites that convert visitors into investor inquiries. Mobile-first, SEO-optimized, and built with lead capture at every touchpoint.",
      features: [
        "Custom Franchise Portal Design",
        "Lead Capture & Inquiry Forms",
        "Mobile-First Responsive Development",
        "SEO-Optimized Architecture",
        "Territory & Investment Information Pages",
        "CMS Integration & Easy Updates"
      ],
      process: [
        { icon: <Target className="w-6 h-6" />, title: "Discovery & Planning", desc: "Understand your brand and goals" },
        { icon: <TrendingUp className="w-6 h-6" />, title: "Design & Build", desc: "Create a conversion-focused website" },
        { icon: <Users className="w-6 h-6" />, title: "Launch & Optimize", desc: "Go live and track lead performance" }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Franchise Marketing Services | LinkedIn, Social Media & Web Development</title>
        <meta name="description" content="Franchise lead generation through LinkedIn marketing, social media campaigns (paid + organic), and high-converting franchise website development. Built for franchise consultants and franchisors." />
        <link rel="canonical" href="https://www.franchiseleadspro.com/services" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Navigation />
      
        {/* Hero */}
        <section className="pt-24 pb-20 bg-gradient-to-br from-background via-accent/30 to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Franchise Lead Generation Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We help franchise consultants and franchisors generate high-quality investor leads through 
                LinkedIn marketing, social media campaigns, and professional franchise website development.
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
                    <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center space-x-4 mb-6">
                        {service.icon}
                        <h2 className="text-4xl font-bold text-foreground">{service.title}</h2>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-foreground">What's Included:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link to="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant">
                          Get Started <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <Card className="bg-muted/30 border-border/50 shadow-card">
                        <CardHeader className="text-center">
                          <CardTitle className="text-2xl text-foreground">Our Process</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          {service.process.map((step, stepIdx) => (
                            <div key={stepIdx} className="flex items-start space-x-4 group hover:bg-card p-4 rounded-xl transition-all">
                              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground flex-shrink-0 group-hover:scale-110 transition-transform">
                                {step.icon}
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {step.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">{step.desc}</p>
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


        {/* CTA */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground space-y-8">
              <h2 className="text-4xl font-bold">Ready to Generate Franchise Leads?</h2>
              <p className="text-xl opacity-90">
                Book a free strategy call and we'll show you how LinkedIn marketing, social media, and a high-converting website can fill your franchise pipeline.
              </p>
              <Button 
                size="lg"
                variant="outline" 
                className="bg-background/10 border-background/30 text-primary-foreground hover:bg-background hover:text-primary px-8 py-6 text-lg backdrop-blur-sm"
                onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
              >
                Book Free Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Services;
