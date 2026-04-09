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
      <div className="relative min-h-[calc(100vh-4rem)] sm:min-h-[70vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-muted/30 to-background">
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
                {/* Image first on mobile (order-1 mobile, order-2 desktop) */}
                <div
                  className={`flex justify-center items-center order-1 lg:order-2 transition-all duration-700 delay-200 ${
                    index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.imageAlt}
                    width="500"
                    height="500"
                    className="w-48 sm:w-64 md:w-80 lg:max-w-lg xl:max-w-xl h-auto object-contain drop-shadow-lg"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>

                {/* Text below image on mobile (order-2 mobile, order-1 desktop) */}
                <div className="space-y-4 sm:space-y-6 md:space-y-8 order-2 lg:order-1">
                  {index === 0 ? (
                    <h1
                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight transition-all duration-700 delay-100 ${
                        index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                    >
                      {slide.title}
                    </h1>
                  ) : (
                    <p
                      role="heading"
                      aria-level={2}
                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight transition-all duration-700 delay-100 m-0 ${
                        index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                      }`}
                    >
                      {slide.title}
                    </p>
                  )}
                  <p
                    className={`text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
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
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-lg shadow-elegant hover:shadow-hover transition-all"
                      onClick={() => window.open(slide.ctaLink, "_blank")}
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* Nav arrows - smaller on mobile */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-card flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Slide indicators - larger touch targets */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`min-h-[44px] min-w-[44px] flex items-center justify-center`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <span className={`block h-3 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "w-10 bg-primary"
                  : "w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`} />
            </button>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
