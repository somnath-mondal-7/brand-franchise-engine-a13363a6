import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";

const slides = [
  {
    tag: "LinkedIn Lead Generation",
    title: "Turn LinkedIn Into Your #1 Franchise Lead Channel",
    description: "Targeted outreach that books meetings with high-net-worth franchise investors. Not cold lists — warm conversations.",
    cta: "Get LinkedIn Leads",
    ctaLink: "https://calendly.com/lets-build-your-brand",
    image: heroSlide1,
    imageAlt: "LinkedIn marketing for franchise lead generation",
  },
  {
    tag: "Social Media Marketing",
    title: "Franchise Leads on Autopilot With Paid Social",
    description: "Facebook, Instagram & LinkedIn ads engineered to generate qualified franchise buyer leads at scale.",
    cta: "Scale My Leads",
    ctaLink: "https://calendly.com/lets-build-your-brand",
    image: heroSlide2,
    imageAlt: "Social media marketing for franchise brands",
  },
  {
    tag: "Website Development",
    title: "Franchise Websites That Convert Visitors Into Buyers",
    description: "High-converting franchise websites with lead capture, SEO, and investor-focused design — built to perform.",
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
      <div className="relative min-h-[calc(100vh-4rem)] sm:min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/[0.03] to-transparent pointer-events-none" />
        
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
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
                {/* Image */}
                <div
                  className={`flex justify-center items-center order-1 lg:order-2 transition-all duration-700 delay-200 ${
                    index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    width="500"
                    height="500"
                    className="w-48 sm:w-64 md:w-80 lg:max-w-lg xl:max-w-xl h-auto object-contain drop-shadow-2xl"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                {/* Text */}
                <div className="space-y-5 sm:space-y-6 order-2 lg:order-1">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full bg-primary/10 text-primary border border-primary/20 transition-all duration-500 delay-75 ${
                      index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    {slide.tag}
                  </span>

                  {index === 0 ? (
                    <h1
                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-foreground leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${
                        index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                    >
                      {slide.title}
                    </h1>
                  ) : (
                    <p
                      role="heading"
                      aria-level={2}
                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-extrabold text-foreground leading-[1.1] tracking-tight transition-all duration-700 delay-100 m-0 ${
                        index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                    >
                      {slide.title}
                    </p>
                  )}

                  <p
                    className={`text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg transition-all duration-700 delay-200 ${
                      index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    {slide.description}
                  </p>

                  <div
                    className={`flex flex-col sm:flex-row items-start gap-3 transition-all duration-700 delay-300 ${
                      index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-7 py-3.5 text-base font-semibold rounded-xl shadow-elegant hover:shadow-hover transition-all group"
                      onClick={() => window.open(slide.ctaLink, "_blank")}
                    >
                      {slide.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="lg"
                      className="text-muted-foreground hover:text-foreground px-6 py-3.5 text-base font-medium"
                      onClick={() => {
                        document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      See How It Works
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Nav arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-background/90 backdrop-blur-sm border border-border/60 shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-background/90 backdrop-blur-sm border border-border/60 shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={`Go to slide ${index + 1}`}
            >
              <span
                className={`block h-2 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-muted-foreground/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
