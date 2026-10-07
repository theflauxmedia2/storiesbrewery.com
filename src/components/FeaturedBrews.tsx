import { useEffect, useRef } from "react";
import { ArrowRight, Star, Thermometer, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FeaturedBrews = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleBeerClick = () => {
    navigate('/our-brews');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-up");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featuredBeers = [
    {
      name: "Wheat IPA",
      description: "A perfect marriage of wheat smoothness and IPA bitterness. Expect an intense hop finish with a tropical fruity kick and a fresh, hoppy ending.",
      abv: "6.0%",
      ibu: "20",
      color: "Pale Straw",
      structure: "Medium-bodied",
      flavorProfile: "Intense hop finish with tropical fruity kick",
      gradient: "from-[#c7a179]/30 to-[#c7a179]/30"
    },
    {
      name: "Jamun Witbier",
      description: "Infused with real jamun, this Belgian-style wit is subtly sweet, pleasantly aromatic, and finishes with a refreshing tart astringency.",
      abv: "5.3%",
      ibu: "12",
      color: "Purple-tinted",
      structure: "Good body, moderate carbonation",
      flavorProfile: "Subtly sweet, aromatic, refreshing tart astringency",
      gradient: "from-purple-900/30 to-purple-600/30"
    },
    {
      name: "Stories Hefeweizen",
      description: "Notes of banana and phenolic clove, making it a classic German wheat beer. A truly sessionable pour that feels like a breeze in a glass.",
      abv: "5%",
      ibu: "18",
      color: "Yellow",
      structure: "High carbonation, good head retention",
      flavorProfile: "Banana and phenolic clove notes",
      gradient: "from-[#c7a179]/30 to-[#c7a179]/30"
    },
    {
      name: "Apple Cider",
      description: "Crisp, sweet, and bursting with apple freshness. A no-bitterness cider that's light, lively, and incredibly refreshing.",
      abv: "4%",
      ibu: "0",
      color: "Golden Apple",
      structure: "Light & Refreshing",
      flavorProfile: "Crisp, sweet, bursting with apple freshness",
      gradient: "from-[#D7BD99]/30 to-[#D7BD99]/15"
    },
    {
      name: "Mango Cider",
      description: "Lush mango sweetness with a bright, tropical feel. This cider is fruity, juicy, and perfect for hot rooftop afternoons.",
      abv: "4%",
      ibu: "0",
      color: "Mango Gold",
      structure: "Highly carbonated",
      flavorProfile: "Lush mango sweetness with bright tropical feel",
      gradient: "from-orange-900/30 to-orange-600/30"
    },
    {
      name: "Belgian Wit",
      description: "Traditional Belgian wheat brewed with orange peel and coriander. Citrusy, spicy, and incredibly easy to drink.",
      abv: "5%",
      ibu: "12",
      color: "Pale Straw",
      structure: "Medium-bodied",
      flavorProfile: "Citrusy, spicy, incredibly easy to drink",
      gradient: "from-blue-900/30 to-blue-600/30"
    },
    {
      name: "Triple Wit",
      description: "A stronger, bolder version of the classic German wheat, boasting banana and clove notes with elevated intensity and richness.",
      abv: "7%",
      ibu: "18",
      color: "Rich Golden",
      structure: "Full-bodied with great carbonation",
      flavorProfile: "Banana and clove notes with elevated intensity",
      gradient: "from-indigo-900/30 to-indigo-600/30"
    }
  ];

  return (
    <section className="py-24 lg:py-32 relative" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="fade-in-up text-4xl lg:text-6xl font-heading font-black text-foreground mb-6">
            Featured Brews
          </h2>
          <div className="fade-in-up w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="fade-in-up text-xl text-foreground/80 max-w-3xl mx-auto">
            Handcrafted signature beers from the best craft brewery in BTM Layout, each with its own unique story and flavor profile
          </p>
        </div>

        {/* Beer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16">
          {featuredBeers.slice(0, 4).map((beer, index) => (
            <div
              key={index}
              className="fade-in-up beer-card group cursor-pointer"
              onClick={handleBeerClick}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${beer.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
              
              <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col min-h-[320px] sm:min-h-[360px]">
                {/* Beer Color Indicator */}
                <div className="w-full h-2 sm:h-3 bg-gradient-to-r from-transparent via-accent/50 to-transparent rounded-full mb-4 sm:mb-6" />
                
                {/* Beer Info */}
                <div className="flex-grow">
                                      <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground mb-2 sm:mb-3 group-hover:text-accent transition-colors text-left">
                    {beer.name}
                  </h3>
                  <p className="text-foreground/70 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed text-left">
                    {beer.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-foreground/60 flex items-center">
                      <Thermometer className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      ABV
                    </span>
                    <span className="font-semibold text-foreground">{beer.abv}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-foreground/60 flex items-center">
                      <Droplets className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      IBU
                    </span>
                    <span className="font-semibold text-foreground">{beer.ibu}</span>
                  </div>
                  <div className="flex flex-col gap-1 text-xs sm:text-sm">
                    <span className="text-foreground/60 flex items-center">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      Flavor Profile
                    </span>
                    <span className="font-medium text-accent text-left leading-tight">{beer.flavorProfile}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="mt-3 sm:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
                  <p className="text-center text-accent text-xs sm:text-sm mt-2 font-medium">
                    Tap to explore
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            className="btn-hero-secondary group"
            onClick={() => navigate('/our-brews')}
          >
            <span>Explore All Our Brews</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrews;