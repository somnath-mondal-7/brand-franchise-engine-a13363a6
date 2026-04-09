import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TrustBadges from "@/components/TrustBadges";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const PricingSection = () => {
  const mainFeatures = [
    "Management of a single profile",
    "100% done for you",
    "Leads delivered to CRM",
    "Weekly reporting",
    "Dedicated US-based VA",
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
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Pricing
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Main Plan */}
          <Card className="relative border-2 border-primary shadow-elegant overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-primary/70" />
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-card-foreground">
                LinkedIn Lead Gen
              </CardTitle>
              <div className="mt-4">
                <span className="text-5xl font-extrabold text-foreground">$1,197</span>
                <span className="text-muted-foreground text-lg">/mo</span>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="border-t border-border pt-6">
                <ul className="space-y-4">
                  {mainFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-muted-foreground font-medium">
                  Additional Profiles — <span className="text-foreground font-bold">$997/mo</span>
                </p>
              </div>

              <Link to="/contact" className="block mt-6">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold rounded-xl shadow-elegant hover:shadow-hover transition-all duration-300">
                  Schedule a Call <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Custom / Contact Us */}
          <Card className="border-border bg-card shadow-card flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl text-card-foreground">
                Custom Solutions
              </CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-foreground">Let's Talk</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Tailored packages for your specific needs
              </p>
            </CardHeader>
            <CardContent className="pt-4 flex flex-col flex-1">
              <div className="border-t border-border pt-6 flex-1">
                <ul className="space-y-4">
                  {customServices.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
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

        <TrustBadges variant="compact" />
      </div>
    </section>
  );
};

export default PricingSection;
