import shawnGurnVideo from "@/assets/videos/shawn-gurn-review.mp4.asset.json";
import jonathanMorganVideo from "@/assets/videos/jonathan-morgan-review.mp4.asset.json";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Shawn Gurn",
      title: "HOF Franchise Consulting Company • IFPG Member",
      videoSrc: shawnGurnVideo.url,
    },
    {
      name: "Jonathan Morgan",
      title: "CEO, NextFranch Corp",
      videoSrc: jonathanMorganVideo.url,
    },
    {
      name: "Robert Williams",
      title: "Sr. Franchise Consultant, GrowthPath Advisory • Dallas, TX",
      quote:
        "FranchiseLeadsPro completely transformed our lead pipeline. The investor conversations they put on my calendar are warm, qualified, and ready to talk numbers.",
      isTextReview: true,
    },
    {
      name: "Amanda Reyes",
      title: "Independent Franchise Consultant • Phoenix, AZ",
      quote:
        "As a solo consultant, my time is everything. Their team handles the outreach and qualification so I can focus on closing — it feels like having a full BDR team behind me.",
      isTextReview: true,
    },
    {
      name: "Daniel Brooks",
      title: "Franchise Development Director, Brooks Brands USA • Atlanta, GA",
      quote:
        "We've worked with several lead gen agencies. FranchiseLeadsPro is the first one that actually understood our brand story and brought us candidates who fit our culture, not just our budget.",
      isTextReview: true,
    },
    {
      name: "Priya Natarajan",
      title: "VP Franchise Growth, Sunrise QSR Group • Chicago, IL",
      quote:
        "Their outreach quality is exceptional. Prospects show up to discovery calls already familiar with our concept — that almost never happens with cold lead vendors.",
      isTextReview: true,
    },
    {
      name: "Marcus Hill",
      title: "Independent Franchise Broker, IFPG • Charlotte, NC",
      quote:
        "Straightforward team, no fluff, no over-promising. They told me exactly what to expect, then delivered consistently month after month. Rare in this industry.",
      isTextReview: true,
    },
    {
      name: "Elena Vasquez",
      title: "Franchise Consultant, FranBridge Partners • Miami, FL",
      quote:
        "Communication is what sets them apart. Clear weekly updates, transparent reporting, and a team that actually picks up the phone when I have a question.",
      isTextReview: true,
    },
    {
      name: "Kevin O'Sullivan",
      title: "Franchise Broker, FBA Member • Boston, MA",
      quote:
        "I've referred multiple candidates from their pipeline and the close rate is the best I've seen. They pre-qualify properly so I'm not wasting cycles on tire-kickers.",
      isTextReview: true,
    },
    {
      name: "Rachel Kim",
      title: "Managing Broker, Summit Commercial Realty • Seattle, WA",
      quote:
        "We partner with them on tenant-rep deals for franchise concepts. Their candidates are funded, serious, and ready to sign leases — exactly what landlords want to see.",
      isTextReview: true,
    },
    {
      name: "Tom Hargrove",
      title: "Principal Broker, Hargrove Business Brokers • Nashville, TN",
      quote:
        "As a business broker, lead quality is everything. FranchiseLeadsPro consistently delivers buyers with verified capital and a clear timeline to acquire.",
      isTextReview: true,
    },
    {
      name: "Nicole Carter",
      title: "Commercial Real Estate Broker, Carter Retail Group • Denver, CO",
      quote:
        "Their franchise candidates show up to site tours informed and decisive. It's made our retail leasing process dramatically faster for our franchisor clients.",
      isTextReview: true,
    },
    {
      name: "James Whitaker",
      title: "Senior Franchise Broker, IFPG • Tampa, FL",
      quote:
        "After 15 years in the industry, I can tell when a lead source is solid. These folks are the real deal — every introduction has been worth my time.",
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
