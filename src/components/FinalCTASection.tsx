import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-primary text-white rounded-3xl p-12 text-center shadow-elegant">
            <h2 className="text-4xl font-bold mb-4">Ready to Fill Your Franchise Pipeline?</h2>
            <p className="text-xl opacity-90 mb-8">
              Book a free strategy call — we'll show you exactly how LinkedIn marketing, social media, and a high-converting website can generate qualified franchise leads for your brand.
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-xl font-semibold shadow-card hover:shadow-hover transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('https://calendly.com/lets-build-your-brand', '_blank')}
            >
              Book a Free Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
