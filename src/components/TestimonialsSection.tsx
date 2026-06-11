import shawnGurnVideo from "@/assets/videos/shawn-gurn-review.mp4.asset.json";
import jonathanMorganVideo from "@/assets/videos/jonathan-morgan-review.mp4.asset.json";
import johnThompsonVideo from "@/assets/videos/john-thompson-review.mp4.asset.json";

const TestimonialsSection = () => {
  const videoTestimonials = [
    {
      name: "Shawn Gurn",
      title: "HOF Franchise Consulting Company • IFPG Member",
      videoSrc: shawnGurnVideo.url,
    },
    {
      name: "John Thompson",
      title: "Franchise Development Leader",
      videoSrc: johnThompsonVideo.url,
    },
    {
      name: "Jonathan Morgan",
      title: "CEO, NextFranch Corp",
      videoSrc: jonathanMorganVideo.url,
    },
  ];

  const textTestimonials = [
    {
      name: "Robert Williams",
      title: "Sr. Franchise Consultant, GrowthPath Advisory • Dallas, TX",
      quote:
        "FranchiseLeadsPro completely transformed our lead pipeline. The investor conversations they put on my calendar are warm, qualified, and ready to talk numbers.",
    },
    {
      name: "Amanda Reyes",
      title: "Independent Franchise Consultant • Phoenix, AZ",
      quote:
        "As a solo consultant, my time is everything. Their team handles the outreach and qualification so I can focus on closing — it feels like having a full BDR team behind me.",
    },
    {
      name: "Daniel Brooks",
      title: "Franchise Development Director, Brooks Brands USA • Atlanta, GA",
      quote:
        "We've worked with several lead gen agencies. FranchiseLeadsPro is the first one that actually understood our brand story and brought us candidates who fit our culture, not just our budget.",
    },
    {
      name: "Priya Natarajan",
      title: "VP Franchise Growth, Sunrise QSR Group • Chicago, IL",
      quote:
        "Their outreach quality is exceptional. Prospects show up to discovery calls already familiar with our concept — that almost never happens with cold lead vendors.",
    },
    {
      name: "Marcus Hill",
      title: "Independent Franchise Broker, IFPG • Charlotte, NC",
      quote:
        "Straightforward team, no fluff, no over-promising. They told me exactly what to expect, then delivered consistently month after month. Rare in this industry.",
    },
    {
      name: "Elena Vasquez",
      title: "Franchise Consultant, FranBridge Partners • Miami, FL",
      quote:
        "Communication is what sets them apart. Clear weekly updates, transparent reporting, and a team that actually picks up the phone when I have a question.",
    },
    {
      name: "Kevin O'Sullivan",
      title: "Franchise Broker, FBA Member • Boston, MA",
      quote:
        "I've referred multiple candidates from their pipeline and the close rate is the best I've seen. They pre-qualify properly so I'm not wasting cycles on tire-kickers.",
    },
    {
      name: "Rachel Kim",
      title: "Managing Broker, Summit Commercial Realty • Seattle, WA",
      quote:
        "We partner with them on tenant-rep deals for franchise concepts. Their candidates are funded, serious, and ready to sign leases — exactly what landlords want to see.",
    },
    {
      name: "Tom Hargrove",
      title: "Principal Broker, Hargrove Business Brokers • Nashville, TN",
      quote:
        "As a business broker, lead quality is everything. FranchiseLeadsPro consistently delivers buyers with verified capital and a clear timeline to acquire.",
    },
    {
      name: "Nicole Carter",
      title: "Commercial Real Estate Broker, Carter Retail Group • Denver, CO",
      quote:
        "Their franchise candidates show up to site tours informed and decisive. It's made our retail leasing process dramatically faster for our franchisor clients.",
    },
    {
      name: "James Whitaker",
      title: "Senior Franchise Broker, IFPG • Tampa, FL",
      quote:
        "After 15 years in the industry, I can tell when a lead source is solid. These folks are the real deal — every introduction has been worth my time.",
    },
  ];

  // Duplicate for seamless loop
  const loopTestimonials = [...textTestimonials, ...textTestimonials];

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

        {/* Video testimonials grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {videoTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-border/50 bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[3/4] sm:aspect-[4/5] bg-black relative overflow-hidden">
                <video
                  className="w-full h-full object-cover bg-black"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src={testimonial.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4 sm:p-5">
                <h4 className="text-base font-bold text-foreground">{testimonial.name}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal auto-scrolling text testimonials */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="flex gap-5 w-max animate-marquee"
            style={{ animationDuration: "90s" }}
          >
            {loopTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-[340px] sm:w-[400px] flex-shrink-0 rounded-2xl border border-border/50 bg-card p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground/80 leading-relaxed italic mb-3">
                      "{testimonial.quote}"
                    </p>
                    <h4 className="text-sm font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
