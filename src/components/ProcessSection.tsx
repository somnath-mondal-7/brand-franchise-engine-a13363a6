const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "We Learn Your Franchise",
      description: "We study your franchise model, ideal investor profile, and competitive landscape. No cookie-cutter strategies — everything is built around your specific growth goals.",
      highlight: "Custom strategy in 48 hrs"
    },
    {
      number: "02", 
      title: "We Launch Campaigns",
      description: "LinkedIn outreach, social media ads, and your franchise website go live. We target investors by net worth, industry interest, and location — so every lead is relevant.",
      highlight: "Live within 7 days"
    },
    {
      number: "03",
      title: "You Get Qualified Leads", 
      description: "Pre-screened franchise investors land in your inbox. They already know your brand, meet your investment criteria, and are ready for a conversation.",
      highlight: "First leads in 30 days"
    }
  ];

  return (
    <section id="process" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">From Strategy to Signed Franchise Deals</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A simple, proven process that delivers franchise investor leads through LinkedIn marketing, social media, and a high-converting website.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-primary/40 to-primary/10 z-0" style={{ width: 'calc(100% - 3rem)' }} />
                )}
                
                <div className="relative bg-card rounded-3xl p-8 lg:p-10 shadow-card hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2 border border-border/50 h-full">
                  <div className="relative mb-6">
                    <div className="text-7xl lg:text-8xl font-black text-primary/10 leading-none">
                      {step.number}
                    </div>
                    <div className="absolute top-3 left-1 text-2xl lg:text-3xl font-bold text-primary">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                      {step.description}
                    </p>
                    
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-semibold">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {step.highlight}
                    </div>
                  </div>

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
