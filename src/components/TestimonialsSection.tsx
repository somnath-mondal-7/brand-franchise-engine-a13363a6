const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Shawn Gurn",
      title: "HOF Franchise Consulting Company • IFPG Member",
      videoSrc: "/videos/shawn-gurn-review.mov",
      videoType: "video/quicktime",
    },
    {
      name: "Jonathan Morgan",
      title: "CEO, NextFranch Corp",
      videoSrc: "/videos/jonathan-morgan-review.mp4",
    },
    {
      name: "Robert Williams",
      title: "Sr. Franchise Consultant, GrowthPath Advisory",
      quote:
        "FranchiseLeadsPro completely transformed our lead pipeline. Within the first month, we had 12 qualified franchise investor meetings — something that used to take us a full quarter.",
      isTextReview: true,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            Client Results
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3">
            They Said It, Not Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Real franchise professionals. Real results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border/50 bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {testimonial.isTextReview ? (
                <div className="aspect-[3/4] sm:aspect-[4/5] bg-gradient-to-br from-primary/5 to-muted/30 flex flex-col items-center justify-center p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <span className="text-xl font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <svg className="w-6 h-6 text-primary/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-sm text-foreground/80 leading-relaxed text-center italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              ) : (
                <div className="aspect-[3/4] sm:aspect-[4/5] bg-muted relative overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src={testimonial.videoSrc} type="video/mp4" />
                  </video>
                </div>
              )}

              <div className="p-4 sm:p-5">
                <h4 className="text-base font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
