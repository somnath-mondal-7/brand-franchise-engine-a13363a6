import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import avatar1 from "@/assets/clients/avatars/avatar1.jpg";
import avatar2 from "@/assets/clients/avatars/avatar2.jpg";
import avatar3 from "@/assets/clients/avatars/avatar3.jpg";
import avatar4 from "@/assets/clients/avatars/avatar4.jpg";

const slides = [
  {
    title: "LinkedIn Marketing That Brings Franchise Investors to You",
    description:
      "We run targeted LinkedIn campaigns that connect franchise consultants and franchisors with high-net-worth investors ready to buy. Warm leads, not cold lists.",
    cta: "Get LinkedIn Leads",
    ctaLink: "https://calendly.com/lets-build-your-brand",
    image: heroSlide1,
    imageAlt: "LinkedIn marketing for franchise lead generation",
  },
  {
    title: "Social Media Marketing That Fills Your Franchise Pipeline",
    description:
      "Paid and organic social media campaigns on Facebook, Instagram, and LinkedIn — designed to generate qualified franchise buyer leads at scale.",
    cta: "Scale Your Leads",
    ctaLink: "https://calendly.com/lets-build-your-brand",
    image: heroSlide2,
    imageAlt: "Social media marketing for franchise brands",
  },
  {
    title: "Franchise Websites Built to Convert Visitors Into Leads",
    description:
      "We design and develop high-converting franchise websites that build trust, capture investor inquiries, and grow your brand — fast.",
    cta: "Build My Website",
    ctaLink: "https://calendly.com/lets-build-your-brand",
    image: heroSlide3,
    imageAlt: "Franchise website development and design",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="pt-16 bg-background">
      <div className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-muted/30 to-background">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex items-center transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0 z-10"
                : index < currentSlide
                ? "opacity-0 -translate-x-full z-0"
                : "opacity-0 translate-x-full z-0"
            }`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="space-y-6 md:space-y-8">
                  <h1
                    className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight transition-all duration-700 delay-100 ${
                      index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                      index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    {slide.description}
                  </p>
                  <div
                    className={`transition-all duration-700 delay-300 ${
                      index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-lg shadow-elegant hover:shadow-hover transition-all"
                      onClick={() => window.open(slide.ctaLink, "_blank")}
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>

                <div
                  className={`hidden md:flex justify-center items-center transition-all duration-700 delay-200 ${
                    index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    width="500"
                    height="500"
                    className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain drop-shadow-lg"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "w-10 bg-primary"
                  : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Social Proof */}
      <div className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <img src={avatar1} alt="Client" width="36" height="36" className="h-9 w-9 rounded-full ring-2 ring-background object-cover" loading="lazy" />
                <img src={avatar2} alt="Client" width="36" height="36" className="h-9 w-9 rounded-full ring-2 ring-background object-cover" loading="lazy" />
                <img src={avatar3} alt="Client" width="36" height="36" className="h-9 w-9 rounded-full ring-2 ring-background object-cover" loading="lazy" />
                <img src={avatar4} alt="Client" width="36" height="36" className="h-9 w-9 rounded-full ring-2 ring-background object-cover" loading="lazy" />
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-primary fill-current" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-muted-foreground text-sm font-medium ml-1">Trusted by 500+ franchise brands</span>
              </div>
            </div>
            <div className="flex gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">3-5x</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Avg. ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">30 Days</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">First Leads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">85%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Lead Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
