import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Megaphone, Search, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeaturedServices = () => {
  const services = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Lead Generation",
      description: "Get exclusive, pre-qualified franchise leads delivered daily. Investors who are ready to buy, not just browse.",
      features: ["Exclusive leads", "Pre-qualified investors", "Real-time delivery", "3x higher close rate"],
      link: "/services"
    },
    {
      icon: <Megaphone className="w-12 h-12 text-primary" />,
      title: "PPC & Paid Ads",
      description: "High-ROI Google and Meta campaigns that bring franchise buyers to your door at $45-85 per qualified lead.",
      features: ["Google Ads mastery", "Facebook/Instagram ads", "Landing page optimization", "Full-funnel tracking"],
      link: "/digital-marketing"
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "SEO & Content",
      description: "Rank #1 for franchise keywords in your market. Organic traffic that converts serious investors.",
      features: ["Local SEO domination", "Blog & content strategy", "Keyword targeting", "Link building"],
      link: "/services"
    },
    {
      icon: <Mail className="w-12 h-12 text-primary" />,
      title: "Email Marketing",
      description: "Automated sequences that nurture leads from first click to signed agreement. 3x better conversion.",
      features: ["Drip campaigns", "Lead nurturing", "Discovery invites", "Performance tracking"],
      link: "/services"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Core Marketing Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Marketing That Fills Your Pipeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four proven channels that bring qualified franchise investors to your doorstep. No fluff, just results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
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
                <div className="grid grid-cols-2 gap-3">
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

        {/* CTA */}
        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg shadow-elegant hover:shadow-hover transition-all">
              View All Marketing Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
