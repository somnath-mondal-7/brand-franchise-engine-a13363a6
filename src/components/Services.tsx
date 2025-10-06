import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, Handshake, Linkedin, Mail, PenTool } from "lucide-react";
import leadGeneration from "@/assets/lead-generation.jpg";
import brandBuilding from "@/assets/brand-building.jpg";

const Services = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-brand-blue" />,
      title: "Analysis & Outreach",
      description: "Data-driven outreach to identify high-intent franchise candidates seeking ownership opportunities.",
      features: ["Market Analysis", "Competitor Research", "Target Identification", "Strategic Planning"]
    },
    {
      icon: <Filter className="w-8 h-8 text-brand-blue" />,
      title: "Lead Qualification",
      description: "Multi-point vetting system ensuring you only engage with serious, viable prospects ready to move forward.",
      features: ["Financial Qualification", "Intent Verification", "Background Checks", "Readiness Assessment"]
    },
    {
      icon: <Handshake className="w-8 h-8 text-brand-blue" />,
      title: "Warm Introductions",
      description: "Seamless connections between vetted candidates and your franchise opportunities with full CRM integration.",
      features: ["Personal Introductions", "CRM Updates", "Follow-up Coordination", "Deal Tracking"]
    },
    {
      icon: <Linkedin className="w-8 h-8 text-brand-blue" />,
      title: "LinkedIn Marketing",
      description: "Strategic campaigns targeting qualified professionals to generate serious franchise inquiries and build networks.",
      features: ["Profile Optimization", "Content Strategy", "Network Building", "Lead Generation"]
    },
    {
      icon: <Mail className="w-8 h-8 text-brand-blue" />,
      title: "Cold Outreach",
      description: "Personalized email campaigns reaching up to 297,000 professionals, converting cold leads into serious investors.",
      features: ["Email Campaigns", "Personalization", "A/B Testing", "Performance Tracking"]
    },
    {
      icon: <PenTool className="w-8 h-8 text-brand-blue" />,
      title: "Content Creation",
      description: "Engaging content across all platforms - reels, podcasts, graphics, articles, and blogs to build brand authority.",
      features: ["Video Content", "Graphic Design", "Blog Writing", "Social Media"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
            Our Marketing Solutions
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Innovative solutions tailored specifically for franchise consultants and franchisors to generate qualified leads and build powerful brands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader className="pb-4">
                <div className="mb-4 p-3 bg-brand-light rounded-lg w-fit group-hover:bg-brand-blue/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-brand-navy group-hover:text-brand-blue transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-brand-gray">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-brand-gray">
                      <div className="w-1.5 h-1.5 bg-brand-blue rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-brand-navy mb-4">
                Lead Generation That Converts
              </h3>
              <p className="text-brand-gray text-lg mb-6">
                Our proven system identifies and qualifies the highest-intent franchise candidates, ensuring every lead you receive is ready to invest and grow with your franchise system.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-brand-gray">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mr-3" />
                  Reach 297,000+ qualified professionals
                </li>
                <li className="flex items-center text-brand-gray">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mr-3" />
                  Multi-point qualification system
                </li>
                <li className="flex items-center text-brand-gray">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mr-3" />
                  CRM integration and tracking
                </li>
              </ul>
            </div>
            <Button className="bg-gradient-primary text-primary-foreground shadow-elegant">
              Learn More About Lead Gen
            </Button>
          </div>
          <div className="relative">
            <img 
              src={leadGeneration} 
              alt="Franchise lead generation process"
              loading="lazy"
              decoding="async"
              className="rounded-lg shadow-card w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="relative lg:order-1">
            <img 
              src={brandBuilding} 
              alt="Franchise brand building strategy"
              loading="lazy"
              decoding="async"
              className="rounded-lg shadow-card w-full"
            />
          </div>
          <div className="space-y-8 lg:order-2">
            <div>
              <h3 className="text-3xl font-bold text-brand-navy mb-4">
                Brand Building That Resonates
              </h3>
              <p className="text-brand-gray text-lg mb-6">
                We don't just generate leads - we build brands that command attention and trust in the franchise marketplace. Our content strategy positions you as the go-to expert in your field.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-brand-gray">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mr-3" />
                  Multi-platform content creation
                </li>
                <li className="flex items-center text-brand-gray">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mr-3" />
                  Authority building strategies
                </li>
                <li className="flex items-center text-brand-gray">
                  <div className="w-2 h-2 bg-brand-blue rounded-full mr-3" />
                  Consistent brand messaging
                </li>
              </ul>
            </div>
            <Button className="bg-gradient-primary text-primary-foreground shadow-elegant">
              Explore Brand Building
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;