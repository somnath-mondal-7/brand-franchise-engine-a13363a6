const BenefitsSection = () => {
  const benefits = [
    {
      title: "Pre-Qualified Franchise Investors",
      description: "Every lead is screened for investment capacity and genuine interest. You only speak with investors who meet your franchise criteria — no time-wasters.",
      stat: "High qualification standards",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "LinkedIn-First Approach", 
      description: "We go where franchise investors already are. LinkedIn outreach and thought leadership campaigns put your brand in front of decision-makers who can write checks.",
      stat: "Industry-leading connection rates",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Results in 30 Days",
      description: "We don't make you wait months. LinkedIn campaigns, social ads, and your franchise website are live within a week — first qualified leads arrive within 30 days.",
      stat: "Fast launch timeline",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Paid + Organic Social Media",
      description: "Facebook, Instagram, and LinkedIn ads running alongside organic content. Dual approach that builds your brand while generating leads every single day.",
      stat: "Strong ROI performance",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: "Websites That Convert",
      description: "Your franchise website isn't a brochure — it's a lead machine. We build SEO-optimized, mobile-first sites with smart inquiry forms that capture serious investors.",
      stat: "High conversion rates",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Zero Risk to Start", 
      description: "7-day refund policy and 1-month satisfaction guarantee. If we don't deliver qualified franchise leads, you don't pay. Simple.",
      stat: "Exceptional client retention",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Why Choose Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Built for Franchise Growth. Nothing Else.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Other agencies give you clicks. We give you <strong>franchise investors who are ready to sign</strong>.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-all duration-500 transform hover:-translate-y-2 border border-border/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                </div>
                
                <div className="relative space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <div className="pt-2">
                    <span className="inline-flex items-center text-sm font-semibold text-primary">
                      {benefit.stat}
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
