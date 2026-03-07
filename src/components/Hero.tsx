import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import heroSlide1 from "@/assets/hero-slide-1.png";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import logo1 from "@/assets/clients/logo1.svg";
import logo2 from "@/assets/clients/logo2.png";
import logo3 from "@/assets/clients/logo3.png";
import logo4 from "@/assets/clients/logo4.png";
import logo5 from "@/assets/clients/logo5.png";
import avatar1 from "@/assets/clients/avatars/avatar1.jpg";
import avatar2 from "@/assets/clients/avatars/avatar2.jpg";
import avatar3 from "@/assets/clients/avatars/avatar3.jpg";
import avatar4 from "@/assets/clients/avatars/avatar4.jpg";

const slides = [
  {
    title: "Generate High-Quality Franchise Leads with Precision",
    description:
      "We connect you with the right prospects using proven digital strategies. Scale your business faster with targeted lead generation.",
    cta: "Start Generating Leads",
    ctaLink: "https://calendly.com/lets-build-your-brand",
    image: heroSlide1,
    imageAlt: "Franchise lead generation - attracting qualified investors",
  },
  {
    title: "Professional Websites That Build Trust & Drive Results",
    description:
      "We design and develop modern, user-focused websites tailored for franchise consultants — built to convert visitors into leads and grow your business.",
    cta: "Let's Build Your Site",
    ctaLink: "https://calendly.com/lets-build-your-brand",
    image: heroSlide2,
    imageAlt: "Professional franchise website development team",
  },
  {
    title: "Data-Driven SEO & PPC That Delivers Real ROI",
    description:
      "From search engine domination to high-converting paid campaigns, we help franchise brands attract qualified buyers and close more deals.",
    cta: "Grow Your Franchise",
    ctaLink: "https://calendly.com/lets-build-your-brand",
    image: heroSlide3,
    imageAlt: "SEO analytics and franchise marketing performance dashboard",
  },
];

const logos = [
  { src: logo1, alt: "Trusted franchise client logo" },
  { src: logo2, alt: "Trusted franchise client logo" },
  { src: logo3, alt: "Trusted franchise client logo" },
  { src: logo4, alt: "Trusted franchise client logo" },
  { src: logo5, alt: "Trusted franchise client logo" },
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

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="pt-16 bg-background">
      {/* Hero Slider */}
      <div className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-muted/30 to-background">
        {/* Slides */}
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
                {/* Text Content */}
                <div className="space-y-6 md:space-y-8">
                  <h1
                    className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight transition-all duration-700 delay-100 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    {slide.description}
                  </p>
                  <div
                    className={`transition-all duration-700 delay-300 ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
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

                {/* Image */}
                <div
                  className={`hidden md:flex justify-center items-center transition-all duration-700 delay-200 ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
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

        {/* Navigation Arrows */}
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

        {/* Slide Indicators */}
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

      {/* Social Proof Strip */}
      <div className="bg-background border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats + Avatars */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8">
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
                <span className="text-muted-foreground text-sm font-medium ml-1">5,000+ happy clients</span>
              </div>
            </div>
            <div className="flex gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Leads Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">3-5x</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Avg. ROI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Brands Served</div>
              </div>
            </div>
          </div>

          {/* Client Logos */}
          <div className="border-t border-border pt-8">
            <p className="text-center text-xs font-semibold text-muted-foreground mb-6 tracking-widest uppercase">
              Trusted by Leading Franchise Brands
            </p>
            
            {/* Desktop logos */}
            <div className="hidden md:flex items-center justify-center gap-12 flex-wrap">
              {logos.map((logo, i) => (
                <div key={i} className="flex items-center justify-center p-3 rounded-lg hover:shadow-card transition-all duration-300">
                  <img src={logo.src} alt={logo.alt} width="100" height="48" loading="lazy" className="h-10 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0" />
                </div>
              ))}
            </div>

            {/* Mobile marquee */}
            <div className="md:hidden relative overflow-hidden py-2">
              <div className="flex animate-marquee gap-8">
                {[...logos, ...logos].map((logo, i) => (
                  <div key={i} className="flex items-center justify-center p-2 min-w-[80px] flex-shrink-0">
                    <img src={logo.src} alt={i >= logos.length ? "" : logo.alt} width="60" height="32" loading="lazy" className="h-8 w-auto opacity-60 grayscale max-w-[60px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
