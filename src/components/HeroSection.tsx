import { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResponsiveImage from "@/components/ResponsiveImage";
import { RESERVATION_LINK } from "@/lib/constants";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = useMemo(
    () => [
      {
        image: "/stbr/1.webp",
        title: "Stories Brewery and Kitchen",
        subtitle: "Where Nature Meets Craft",
        location: "BTM Layout, Bengaluru",
      },
      {
        image: "/stbr/8.webp",
        title: "Stories Brewery and Kitchen",
        subtitle: "Craft Beer Amongst Nature",
        location: "BTM Layout, Bengaluru",
      }
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Preload adjacent hero slides at a mid-size variant (not full 1920w)
  useEffect(() => {
    const preload = (src: string) => {
      const img = new Image();
      img.src = src.replace(/\.webp$/i, "-1080w.webp");
      img.decoding = "async";
    };
    const next = slides[(currentSlide + 1) % slides.length]?.image;
    const prev = slides[(currentSlide - 1 + slides.length) % slides.length]?.image;
    if (next) preload(next);
    if (prev) preload(prev);
  }, [currentSlide, slides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <ResponsiveImage
            src={slide.image}
            alt={`${slide.title} - rooftop brewery in Bangalore (BTM Layout) for craft beer & food`}
            className="w-full h-full object-cover animate-parallax"
            preset="hero"
            priority={index === currentSlide}
            loading={index === currentSlide ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/80" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-24 sm:pb-28 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl">
            <div className="animate-fade-in-up">
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-accent font-medium">{slides[currentSlide].location}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight">
                {slides[currentSlide].title}
              </h1>
              
              {/* <p className="text-xl md:text-2xl text-foreground/80 mb-4 font-light">
                {slides[currentSlide].subtitle}
              </p> */}
{/*               
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl leading-relaxed">
                Tucked away from the city's chaos, our space is home to over 50,000 thriving plants, 
                creating a lush rooftop sanctuary like no other.
              </p> */}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero text-lg px-8 py-4" asChild>
                  <a
                    href={RESERVATION_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reserve Your Table
                  </a>
                </Button>
                <Button
                  className="btn-hero-secondary text-lg px-8 py-4"
                  onClick={() => window.open("/our-brews", "_self")}
                >
                  Explore Our Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-background/20 backdrop-blur-sm border border-border/30 text-foreground p-3 rounded-full hover:bg-background/30 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-background/20 backdrop-blur-sm border border-border/30 text-foreground p-3 rounded-full hover:bg-background/30 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-accent scale-110"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-float">
        <div className="flex flex-col items-center text-foreground/60">
          <span className="text-sm mb-2 rotate-90 origin-center">Scroll</span>
          <div className="w-px h-8 bg-accent/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;