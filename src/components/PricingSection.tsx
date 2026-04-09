import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Linkedin, Users, Globe, Share2, Bot, Crown, ArrowRight, UserPlus } from "lucide-react";

const PricingSection = () => {
  const mainServices = [
    { icon: <Users className="w-5 h-5" />, label: "8-15 Pre-Qualified Leads (40% Conversion)" },
    { icon: <Check className="w-5 h-5" />, label: "Scheduled Calendar Appointments" },
    { icon: <Share2 className="w-5 h-5" />, label: "Social Media Marketing" },
    { icon: <Linkedin className="w-5 h-5" />, label: "Facebook Cold Outreach" },
    { icon: <Crown className="w-5 h-5" />, label: "Business Branding / Articles / Ads / Videos" },
    { icon: <UserPlus className="w-5 h-5" />, label: "Dedicated US-Based Account Manager" },
    { icon: <Globe className="w-5 h-5" />, label: "Free 5-Page Website" },
    { icon: <Bot className="w-5 h-5" />, label: "100% Done For You" },
    { icon: <Share2 className="w-5 h-5" />, label: "Leads Delivered to CRM" },
    { icon: <Check className="w-5 h-5" />, label: "Weekly Reporting" },
  ];

  const additionalProfileServices = [
    { icon: <UserPlus className="w-5 h-5" />, label: "Additional LinkedIn Profile Management" },
    { icon: <Users className="w-5 h-5" />, label: "CRM Handling for Extra Profile" },
    { icon: <Share2 className="w-5 h-5" />, label: "Social Media Marketing" },
    { icon: <Bot className="w-5 h-5" />, label: "AI Integration & Automation" },
    { icon: <Crown className="w-5 h-5" />, label: "Authority Building" },
  ];

  const customServices = [
    "Paid Marketing (PPC / Ads)",
    "Website Development",
    "SEO & Content Strategy",
    "App Development",
    "IT Outsourcing",
  ];

  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to generate franchise leads — starting at just $870/month.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Plan */}
          <Card className="relative border-2 border-primary shadow-elegant overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-primary/70" />
            <CardHeader className="text-center pb-2">
              <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold uppercase tracking-wider mb-3 mx-auto">
                Most Popular
              </span>
              <CardTitle className="text-2xl text-card-foreground">
                Branding & Lead Gen
              </CardTitle>
              </CardTitle>
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-foreground">$870</span>
                <span className="text-muted-foreground text-lg">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Full-service franchise lead generation
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {mainServices.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {service.icon}
                    </div>
                    <span className="text-card-foreground font-medium">{service.label}</span>
                    <Check className="w-4 h-4 text-primary ml-auto flex-shrink-0" />
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="block mt-8">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold rounded-xl shadow-elegant hover:shadow-hover transition-all duration-300">
                  Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Additional Profiles Plan */}
          <Card className="relative border-2 border-accent shadow-card overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent to-accent/70" />
            <CardHeader className="text-center pb-2">
              <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold uppercase tracking-wider mb-3 mx-auto">
                Add-On
              </span>
              <CardTitle className="text-2xl text-card-foreground">
                Additional Profiles
              </CardTitle>
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-foreground">$570</span>
                <span className="text-muted-foreground text-lg">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Per additional LinkedIn profile
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {additionalProfileServices.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      {service.icon}
                    </div>
                    <span className="text-card-foreground font-medium">{service.label}</span>
                    <Check className="w-4 h-4 text-accent ml-auto flex-shrink-0" />
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="block mt-8">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg font-semibold rounded-xl transition-all duration-300">
                  Add Profile <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Custom / Contact Us */}
          <Card className="border-border bg-card shadow-card flex flex-col">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-2xl text-card-foreground">
                Custom Solutions
              </CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-foreground">Let's Talk</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Tailored packages for your specific needs
              </p>
            </CardHeader>
            <CardContent className="pt-6 flex flex-col flex-1">
              <ul className="space-y-4 flex-1">
                {customServices.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-card-foreground font-medium">{service}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="block mt-8">
                <Button 
                  variant="outline" 
                  className="w-full border-border hover:bg-accent hover:text-accent-foreground py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                >
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Trust Badges */}
        <TrustBadges variant="compact" />
      </div>
    </section>
  );
};

export default PricingSection;
