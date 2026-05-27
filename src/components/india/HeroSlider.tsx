import { useState, useEffect } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const headlines = [
  { eyebrow: "USA Franchise Growth Partner", title: "Trusted By American Franchises", titleEm: "And Counting" },
  { eyebrow: "Where Founders Meet Investors", title: "Built For Serious", titleEm: "U.S. Franchise Brands" },
  { eyebrow: "End-to-End Franchise Marketing", title: "Your Franchise.", titleEm: "Our Growth Engine." },
  { eyebrow: "Qualified U.S. Investor Leads", title: "Real Investors.", titleEm: "Real Conversations." },
];

const collageImages = [
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=900&q=80",
];

const HeroSlider = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % headlines.length), 5000);
    return () => clearInterval(t);
  }, []);

  const h = headlines[i];

  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden pt-[7.5rem] pb-20 md:pt-36 md:pb-28">
      {/* Subtle radial glow — accent tinted */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 60% at 70% 40%, hsl(40 65% 52% / 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* LEFT — Big serif headline */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/5 border border-primary-foreground/15 text-[11px] uppercase tracking-[0.2em] text-accent mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {h.eyebrow}
            </div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[1.02] mb-8">
              <span className="block">{h.title}</span>
              <span className="block italic text-primary-foreground/95">{h.titleEm}</span>
            </h1>

            <p className="text-base sm:text-lg text-primary-foreground/70 max-w-xl leading-relaxed mb-10">
              We partner with franchise brands across the United States to deliver expansion
              strategies that drive growth, build investor connections, and create scalable
              franchise opportunities nationwide.
            </p>

            <Button
              className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 rounded-full font-semibold text-base"
              onClick={() => window.open("https://calendly.com/lets-build-your-brand", "_blank")}
            >
              START YOUR EXPANSION <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Tiny scrolling trust strip */}
            <div className="mt-12 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-accent/90">
              <span className="w-8 h-px bg-accent/50" />
              Trusted by hundreds of business owners
            </div>
          </div>

          {/* RIGHT — Image collage (hoopdesk-style) */}
          <div className="lg:col-span-6 xl:col-span-5 relative h-[420px] sm:h-[480px] lg:h-[540px]">
            {/* Card 1 — top right, large */}
            <div className="absolute top-0 right-0 w-[68%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary-foreground/10 transition-transform duration-700 hover:-translate-y-1">
              <img
                src={collageImages[i % collageImages.length]}
                alt="Franchise consulting"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Card 2 — middle left, medium */}
            <div className="absolute top-[28%] left-0 w-[56%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary-foreground/10 z-10 transition-transform duration-700 hover:-translate-y-1">
              <img
                src={collageImages[(i + 1) % collageImages.length]}
                alt="Franchise expansion strategy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Card 3 — bottom right, small */}
            <div className="absolute bottom-0 right-[8%] w-[46%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary-foreground/10 transition-transform duration-700 hover:-translate-y-1">
              <img
                src={collageImages[(i + 2) % collageImages.length]}
                alt="Franchise investor meetings"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating arrow badge — hoopdesk signature */}
            <div className="absolute top-[24%] left-[42%] z-20 w-14 h-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center shadow-xl rotate-[-6deg]">
              <ArrowUpRight className="w-7 h-7" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div className="relative mt-16 md:mt-20 border-y border-primary-foreground/10 py-5 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap text-accent font-display text-lg italic">
          {[...Array(2)].flatMap((_, k) =>
            [
              "Trusted by Hundreds of Business Owners",
              "A Legacy of Excellence in Franchise Marketing",
              "Our Trusted Franchise Partners",
              "Franchises and Counting",
            ].map((t, idx) => (
              <span key={`${k}-${idx}`} className="flex items-center gap-12">
                <span>✦</span>
                <span>{t}</span>
              </span>
            ))
          )}
        </div>
      </div>

      {/* Slide indicator dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2 lg:hidden">
        {headlines.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-8 bg-accent" : "w-1.5 bg-primary-foreground/30"
            }`}
          />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSlider;
