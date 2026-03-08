import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Linkedin, Share2, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Who We Are
            </span>
            <h2 className="text-4xl font-bold text-foreground">
              We Don't Do Generic Marketing. We Fill Franchise Pipelines.
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              FranchiseLeads Pro is a marketing agency built specifically for franchise growth. 
              We help franchise consultants and franchisors generate high-quality investor leads through 
              <span className="text-foreground font-semibold"> LinkedIn marketing, social media campaigns, and conversion-focused website development.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-xl bg-background border border-border">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Linkedin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">LinkedIn Specialists</h3>
              <p className="text-muted-foreground text-sm">
                We use LinkedIn Sales Navigator and targeted outreach to connect you with high-net-worth franchise investors who are ready to invest.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-background border border-border">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Share2 className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Paid + Organic Social</h3>
              <p className="text-muted-foreground text-sm">
                Facebook, Instagram, and LinkedIn ads combined with organic content that builds brand authority and generates investor inquiries.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-background border border-border">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Globe className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Franchise Web Development</h3>
              <p className="text-muted-foreground text-sm">
                High-converting franchise websites with lead capture, SEO optimization, and mobile-first design that turns visitors into franchise leads.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link to="/about">
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 px-8 py-3"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
