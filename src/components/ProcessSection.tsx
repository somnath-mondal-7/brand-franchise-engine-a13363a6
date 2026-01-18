const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "We Find Your Buyers",
      description: "While you focus on running your business, we're running targeted campaigns to find investors actively searching for franchise opportunities. No cold calling on your end.",
      highlight: "100+ leads/month"
    },
    {
      number: "02", 
      title: "We Qualify Them",
      description: "Not every inquiry is worth your time. We verify investment capacity ($50K–$500K), timeline (ready within 90 days), and genuine interest before they ever reach you.",
      highlight: "Only 12% make the cut"
    },
    {
      number: "03",
      title: "You Close the Deal", 
      description: "You get a warm introduction to a pre-qualified investor who already knows about your brand. They're not just interested—they're ready to move forward.",
      highlight: "3x higher close rate"
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Simple 3-Step Process</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">How We Deliver Ready-to-Sign Investors</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No more wasting time on unqualified leads. Here's exactly what happens when you work with us:
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/40 to-primary/10 z-0" style={{ width: 'calc(100% - 3rem)' }} />
                )}
                
                {/* Step Card */}
                <div className="relative bg-card rounded-3xl p-8 lg:p-10 shadow-card hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2 border border-border/50 h-full">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="text-7xl lg:text-8xl font-black text-primary/10 leading-none">
                      {step.number}
                    </div>
                    <div className="absolute top-3 left-1 text-2xl lg:text-3xl font-bold text-primary">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Step Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                      {step.description}
                    </p>
                    
                    {/* Highlight Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-semibold">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {step.highlight}
                    </div>
                  </div>

                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;