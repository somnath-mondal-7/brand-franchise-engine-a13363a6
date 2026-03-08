import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Share2, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedServices = () => {
  const services = [
    {
      icon: <Linkedin className="w-12 h-12 text-primary" />,
      title: "LinkedIn Marketing",
      description: "Targeted LinkedIn outreach and thought leadership that connects you with high-net-worth franchise investors ready to buy.",
      features: ["Sales Navigator campaigns", "Investor outreach", "Thought leadership content", "Meeting booking automation"],
      link: "/services"
    },
    {
      icon: <Share2 className="w-12 h-12 text-primary" />,
      title: "Social Media Marketing",
      description: "Paid + organic campaigns on Facebook, Instagram, and LinkedIn that generate qualified franchise buyer leads at scale.",
      features: ["Facebook & Instagram ads", "Organic content strategy", "Retargeting campaigns", "Performance reporting"],
      link: "/services"
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Franchise Web Development",
      description: "High-converting franchise websites built to capture investor inquiries, rank on Google, and grow your brand online.",
      features: ["Lead capture portals", "Mobile-first design", "SEO-optimized architecture", "Inquiry form optimization"],
      link: "/services"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Core Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Three Proven Channels for Franchise Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            LinkedIn, social media, and a professional website — the three things every franchise brand needs to attract qualified investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border bg-card"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to={service.link}>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all border-primary text-primary">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-elegant hover:shadow-hover transition-all">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
