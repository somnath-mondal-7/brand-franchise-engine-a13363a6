import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    tag: "India 🇮🇳 + USA 🇺🇸 Franchise Growth Partner",
    title: "End-to-end franchise consulting for India & the USA.",
    desc: "From franchise strategy, FDD and documentation to marketing, lead generation and franchisee onboarding — we serve Indian franchisors scaling pan-India and American brands expanding globally.",
    badge: "₹1 Franchise Lead Generation — trusted by brands across India & the USA.",
    cta: "Book Free Strategy Call",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80",
  },
  {
    tag: "Trusted by Founders & Investors",
    title: "Where serious franchisors meet serious investors.",
    desc: "We hand-build outreach to HNIs, family offices and qualified franchise buyers — no curious browsers, only cheque-ready conversations.",
    badge: "100+ franchise founders trust our India + USA growth pods.",
    cta: "Talk to a Strategist",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80",
  },
  {
    tag: "FDD, Legal & Documentation",
    title: "Franchise-ready documentation, done right.",
    desc: "FDD, franchise agreements, SOPs and operations manuals drafted by franchise specialists — compliant in India and the USA.",
    badge: "End-to-end franchise legal & operations support.",
    cta: "Request a Proposal",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80",
  },
  {
    tag: "Performance Marketing",
    title: "Qualified franchise leads — for as little as ₹1.",
    desc: "LinkedIn outreach, Meta & Google ads, WhatsApp funnels and authority content engineered to drive your cost per investor lead to almost zero.",
    badge: "Pay only for qualified, pre-screened investor leads.",
    cta: "Get Qualified Leads",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1920&q=80",
  },
];

const HeroSlider = () => {
  const [i, setI] = useState(0);
  const next = useCallback(() => setI((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setI((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative pt-16 overflow-hidden bg-primary">
      <div className="relative min-h-[640px] sm:min-h-[680px] md:min-h-[720px]">
        {slides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === i ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={idx !== i}
          >
            <img
              src={s.image}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-primary-foreground">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-[11px] uppercase tracking-[0.2em] mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {s.tag}
                </div>
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-4">
                  {s.title}
                </h1>
                <p className="text-base sm:text-lg text-primary-foreground/90 max-w-2xl mb-3">
                  {s.desc}
                </p>
                <p className="text-sm text-accent font-semibold tracking-wide mb-6">
                  {s.badge}
                </p>
                <Button
                  className="bg-accent text-primary hover:bg-accent/90 h-12 px-7 rounded-md"
                  onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
                >
                  {s.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 text-primary-foreground flex items-center justify-center backdrop-blur-sm transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 border border-primary-foreground/20 text-primary-foreground flex items-center justify-center backdrop-blur-sm transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Slide ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === i ? "w-8 bg-accent" : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/70"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
