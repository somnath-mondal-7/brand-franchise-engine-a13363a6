import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Zap, TrendingUp } from "lucide-react";

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
              We Don't Do Marketing. We Fill Pipelines.
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              FranchiseLeads HQ is a marketing agency built specifically for franchise growth. 
              While other agencies treat you like another client, we obsess over one thing: 
              <span className="text-foreground font-semibold"> getting qualified investors in your pipeline.</span>
            </p>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-xl bg-background border border-border">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Franchise-Only Focus</h3>
              <p className="text-muted-foreground text-sm">
                We only work with franchises. No distractions, no learning curves—just proven franchise marketing strategies.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-background border border-border">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Leads That Close</h3>
              <p className="text-muted-foreground text-sm">
                We pre-qualify every lead for financial capacity and genuine interest. No tire-kickers, just serious buyers.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-background border border-border">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Proven Results</h3>
              <p className="text-muted-foreground text-sm">
                Average 3-5x ROI on marketing spend. We track every dollar from click to signed franchise agreement.
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
