const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jesica Thompson", 
      title: "Consultant Franchise Solutions Inc.",
      videoSrc: "/videos/jesica-thompson-review.mp4"
    },
    {
      name: "Jonarthan Morgan",
      title: "CEO, Nextfranh Corp",
      videoSrc: "/videos/jonathan-morgan-review.mp4"
    },
    {
      name: "Robert Williams",
      title: "Senior Franchise Consultant, GrowthPath Advisory",
      quote: "FranchiseLeadsPro completely transformed our lead pipeline. Within the first month, we had 12 qualified franchise investor meetings — something that used to take us a full quarter. Their LinkedIn strategy is genuinely best-in-class.",
      isTextReview: true
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent mb-4 sm:mb-6">
            They said it, not us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover how leading franchise professionals have transformed their businesses with our proven strategies
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="relative bg-card border border-border/50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover-scale">
                  {testimonial.isTextReview ? (
                    /* Text testimonial card */
                    <div className="aspect-[3/4] sm:aspect-[4/5] bg-gradient-to-br from-primary/5 to-muted/30 relative overflow-hidden flex flex-col items-center justify-center p-6 sm:p-8">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                        <span className="text-2xl sm:text-3xl font-bold text-primary">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <svg className="w-8 h-8 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-sm sm:text-base text-foreground/80 leading-relaxed text-center italic">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  ) : (
                    /* Video testimonial card */
                    <div className="aspect-[3/4] sm:aspect-[4/5] bg-gradient-to-br from-muted to-muted-foreground/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"></div>
                      <video
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        controls
                        preload="metadata"
                      >
                        <source src={testimonial.videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  
                  <div className="p-4 sm:p-6 bg-gradient-to-br from-card to-muted/10">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-1.5 group-hover:text-primary transition-colors">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10 sm:mt-16 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <p className="text-muted-foreground text-sm">
            Join hundreds of satisfied franchise professionals
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
