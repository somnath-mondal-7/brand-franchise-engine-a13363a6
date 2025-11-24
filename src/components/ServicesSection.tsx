import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Users, 
  TrendingUp, 
  FileCheck, 
  Search, 
  Briefcase,
  Target,
  BookOpen,
  DollarSign,
  Globe
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Franchise Development",
      description: "Transform your successful business into a scalable franchise model with complete documentation, legal frameworks, and operational systems.",
      features: [
        "Franchise Business Model Design",
        "Operations Manual Development",
        "Legal Documentation & FDD",
        "Territory & Fee Structure Planning"
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Franchisee Recruitment",
      description: "Connect with qualified, motivated franchisees who align with your brand values and have the investment capacity to succeed.",
      features: [
        "Qualified Lead Generation",
        "Investor Profiling & Screening",
        "Discovery Day Coordination",
        "Award & Onboarding Support"
      ]
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Franchise Matchmaking",
      description: "Expert matchmaking services connecting aspiring entrepreneurs with the right franchise opportunities for their goals and budget.",
      features: [
        "Personalized Franchise Recommendations",
        "Investment Analysis & Due Diligence",
        "Brand-Investor Compatibility Assessment",
        "Negotiation & Deal Structuring"
      ]
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Franchise Expansion",
      description: "Strategic expansion planning and execution to grow your franchise network across regions, states, and international markets.",
      features: [
        "Market Research & Site Selection",
        "Regional Expansion Strategy",
        "International Franchise Development",
        "Multi-Unit Development Programs"
      ]
    },
    {
      icon: <Briefcase className="w-12 h-12 text-primary" />,
      title: "Franchise Marketing",
      description: "Comprehensive marketing strategies to build brand awareness, attract qualified franchisees, and drive franchise sales.",
      features: [
        "Digital Marketing Campaigns",
        "Franchise Portal Development",
        "Lead Generation Systems",
        "Brand Positioning & Advertising"
      ]
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      title: "Operations Support",
      description: "Ongoing operational guidance to ensure franchise consistency, quality control, and continuous improvement across your network.",
      features: [
        "Standard Operating Procedures",
        "Quality Assurance Programs",
        "Supply Chain Management",
        "Performance Monitoring Systems"
      ]
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Training Programs",
      description: "Comprehensive training solutions for franchisors and franchisees covering operations, sales, management, and customer service.",
      features: [
        "Initial Franchisee Training",
        "Ongoing Education Programs",
        "Staff Training Systems",
        "Leadership Development"
      ]
    },
    {
      icon: <DollarSign className="w-12 h-12 text-primary" />,
      title: "Financial Planning",
      description: "Financial modeling, investment analysis, and funding guidance to ensure franchise profitability and sustainable growth.",
      features: [
        "Financial Projections & Modeling",
        "Investment Analysis",
        "Funding & Financing Solutions",
        "ROI Optimization Strategies"
      ]
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Due Diligence Services",
      description: "Thorough investigation and analysis for investors evaluating franchise opportunities to make informed decisions.",
      features: [
        "Franchisor Background Verification",
        "Financial Health Assessment",
        "Market Viability Analysis",
        "Legal Document Review"
      ]
    },
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "International Franchising",
      description: "Navigate the complexities of international franchise expansion with localized strategies for different markets.",
      features: [
        "Market Entry Strategy",
        "Cultural Adaptation Guidance",
        "International Legal Compliance",
        "Master Franchise Development"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Complete Franchise Consulting Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to expansion - we provide end-to-end franchise consulting services for businesses and investors across India & USA
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
              Schedule Your Free Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
