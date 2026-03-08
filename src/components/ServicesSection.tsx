import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Share2, Globe } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Linkedin className="w-12 h-12 text-primary" />,
      title: "LinkedIn Marketing",
      description: "Reach high-net-worth franchise investors directly on LinkedIn. We run targeted outreach, thought leadership campaigns, and Sales Navigator strategies that book meetings with serious buyers.",
      features: [
        "Targeted investor outreach",
        "Sales Navigator campaigns",
        "Thought leadership content",
        "Meeting booking automation"
      ]
    },
    {
      icon: <Share2 className="w-12 h-12 text-primary" />,
      title: "Social Media Marketing",
      description: "Paid and organic campaigns on Facebook, Instagram, and LinkedIn that generate qualified franchise leads. We handle ad creative, targeting, A/B testing, and ongoing optimization.",
      features: [
        "Facebook & Instagram ads",
        "Organic content strategy",
        "Retargeting & lookalike audiences",
        "Performance tracking & reporting"
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Franchise Website Development",
      description: "We design and build franchise websites that convert visitors into investor inquiries. Mobile-first, SEO-optimized, and built to establish trust and capture leads from day one.",
      features: [
        "High-converting franchise portals",
        "Lead capture & inquiry forms",
        "Mobile-first responsive design",
        "SEO-optimized architecture"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Three Services. One Goal: More Franchise Leads.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We help franchise consultants and franchisors generate high-quality leads through LinkedIn, social media, and professional website development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardHeader>
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2 text-lg">✓</span>
                      <span className="text-sm text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contact">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl font-semibold shadow-elegant hover:shadow-hover transition-all duration-300"
            >
              Get Your Free Strategy Call
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
