import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-primary text-white rounded-3xl p-12 text-center shadow-elegant">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8">
              Schedule a call with our marketing experts
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
            >
              Book a 15-min call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;