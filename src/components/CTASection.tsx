import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight animate-fade-in">
            Ready to Transform Your
            <span className="block">Franchise Business?</span>
          </h2>
          
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join 640+ franchise professionals who trust us to generate quality leads and build powerful brands that dominate their markets.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary px-8 py-6 text-lg backdrop-blur-sm"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Book Strategy Call
              </Button>
            </Link>
            <Link to="/testimonials">
              <Button 
                size="lg"
                variant="ghost" 
                className="text-white hover:bg-white/20 px-8 py-6 text-lg"
              >
                See Success Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 opacity-80">
            <div className="text-center">
              <div className="text-2xl font-bold">640+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-2xl font-bold">15K+</div>
              <div className="text-sm">Leads Generated</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" />
            <div className="text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;