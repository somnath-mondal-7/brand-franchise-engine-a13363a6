import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import somnathPhoto from "@/assets/somnath-photo.png";

const FinalCTASection = () => {
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-primary rounded-3xl p-10 sm:p-14 shadow-elegant">
            <img
              src={somnathPhoto}
              alt="Somnath Mondal - Founder"
              className="w-16 h-16 rounded-full object-cover mx-auto mb-3 ring-4 ring-white/20"
            />
            <p className="text-sm font-medium text-white/80 mb-6">Somnath Mondal, Founder</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Ready to Fill Your Pipeline?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-lg mx-auto">
              Book a free strategy call and see exactly how we can generate qualified franchise leads for your brand.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-base font-semibold rounded-xl shadow-card transition-all duration-300 group"
              onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
            >
              Book a Free Call
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
