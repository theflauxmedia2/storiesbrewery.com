import { useEffect, useRef, useState } from "react";
import { ArrowRight, Star, Thermometer, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DeveloperCredit from "@/components/DeveloperCredit";
import SEOHead from "@/components/SEOHead";
import { PAGE_SEO } from "@/lib/seo";
import { RESERVATION_LINK } from "@/lib/constants";

const OurBrews = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-up");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, index * 100);
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

  const brewFilters = ["all", "fruity", "wheat", "cider", "strong"];

  const featuredBeers = [
    {
      name: "Wheat IPA",
      description: "A perfect marriage of wheat smoothness and IPA bitterness. Expect an intense hop finish with a tropical fruity kick and a fresh, hoppy ending.",
      abv: "6.0%",
      ibu: "20",
      color: "Pale Straw",
      flavor: "Intense hop finish with tropical fruity kick",
      structure: "Medium-bodied",
      tags: ["wheat", "strong"],
      gradient: "from-[#c7a179]/30 to-[#c7a179]/30"
    },
    {
      name: "Jamun Witbier",
      description: "Infused with real jamun, this Belgian-style wit is subtly sweet, pleasantly aromatic, and finishes with a refreshing tart astringency.",
      abv: "5.3%",
      ibu: "12",
      color: "Purple-tinted",
      flavor: "Subtly sweet, aromatic, refreshing tart astringency",
      structure: "Good body, moderate carbonation",
      tags: ["fruity", "wheat"],
      gradient: "from-purple-900/30 to-purple-600/30"
    },
    {
      name: "Stories Hefeweizen",
      description: "Notes of banana and phenolic clove, making it a classic German wheat beer. A truly sessionable pour that feels like a breeze in a glass.",
      abv: "5%",
      ibu: "18",
      color: "Yellow",
      flavor: "Banana and phenolic clove notes",
      structure: "High carbonation, good head retention",
      tags: ["wheat"],
      gradient: "from-[#c7a179]/30 to-[#c7a179]/30"
    },
    {
      name: "Apple Cider",
      description: "Crisp, sweet, and bursting with apple freshness. A no-bitterness cider that's light, lively, and incredibly refreshing.",
      abv: "4%",
      ibu: "0",
      color: "Golden Apple",
      flavor: "Crisp, sweet, bursting with apple freshness",
      structure: "Light-bodied",
      tags: ["cider", "fruity"],
      gradient: "from-[#D7BD99]/30 to-[#D7BD99]/15"
    },
    {
      name: "Mango Cider",
      description: "Lush mango sweetness with a bright, tropical feel. This cider is fruity, juicy, and perfect for hot rooftop afternoons.",
      abv: "4%",
      ibu: "0",
      color: "Mango Gold",
      flavor: "Lush mango sweetness with bright tropical feel",
      structure: "Highly carbonated",
      tags: ["cider", "fruity"],
      gradient: "from-orange-900/30 to-orange-600/30"
    },
    {
      name: "Belgian Wit",
      description: "Traditional Belgian wheat brewed with orange peel and coriander. Citrusy, spicy, and incredibly easy to drink.",
      abv: "5%",
      ibu: "12",
      color: "Pale Straw",
      flavor: "Citrusy, spicy, incredibly easy to drink",
      structure: "Medium-bodied",
      tags: ["wheat"],
      gradient: "from-blue-900/30 to-blue-600/30"
    },
    {
      name: "Triple Wit",
      description: "A stronger, bolder version of the classic German wheat, boasting banana and clove notes with elevated intensity and richness.",
      abv: "7%",
      ibu: "18",
      color: "Rich Golden",
      flavor: "Banana and clove notes with elevated intensity",
      structure: "Full-bodied with great carbonation",
      tags: ["wheat", "strong"],
      gradient: "from-indigo-900/30 to-indigo-600/30"
    },
    {
      name: "Kölsch",
      description: "A crisp golden ale from Cologne, Germany, this beer marries the finesse of a lager with the fruitiness of an ale. Light, elegant, and endlessly drinkable, it pours pale straw with a delicate white head and finishes clean and snappy.",
      abv: "4.7%",
      ibu: "14",
      color: "Pale Straw",
      flavor: "Light malt sweetness with a refreshing herbal bitterness and a whisper of fruitiness",
      structure: "Light, elegant",
      tags: ["crisp", "light", "balanced"],
      gradient: "from-yellow-900/30 to-yellow-600/30"
    },
    {
      name: "Ginger & Spice Wheat Ale",
      description: "A light-bodied, smooth wheat beer spiced with real ginger and subtle cinnamon. Citrusy brightness meets warming Indian chai flavors in a brew that's soft, aromatic, and gently spiced — perfect with both savory and sweet dishes.",
      abv: "5.0%",
      ibu: "6",
      color: "Pale Golden",
      flavor: "Gently spicy, mildly sweet, smooth finish with ginger warmth",
      structure: "Light-bodied, smooth",
      tags: ["wheat", "spiced", "aromatic"],
      gradient: "from-amber-900/30 to-amber-600/30"
    },
    {
      name: "Maibock",
      description: "A traditional German spring lager with rich malt sweetness, hints of dark fruit, light caramel, and a mild hop balance. Smooth and full-bodied, it's a strong yet elegant beer ideal for sipping.",
      abv: "6.8%",
      ibu: "17",
      color: "Rich Golden",
      flavor: "Rich malt, dark fruit, honey, caramel undertones, low bitterness",
      structure: "Full-bodied, smooth",
      tags: ["strong", "malty", "seasonal"],
      gradient: "from-amber-900/30 to-yellow-800/30"
    },
    {
      name: "Lichtenhainer – Smoked Wheat Beer",
      description: "A rare, revived German wheat beer with a lightly smoky character. Brewed using smoked malt, it presents a unique balance of gentle tartness and subtle smoke. Expect soft aromas of toasted bread, a hint of caramel, and a clean mouthfeel. A truly distinct beer that stands out from traditional wheat styles.",
      abv: "4.3%",
      ibu: "6",
      color: "Pale Straw",
      flavor: "Light smoke, tart wheat, subtle caramel",
      structure: "Clean mouthfeel",
      tags: ["smoked", "wheat"],
      gradient: "from-gray-800/30 to-gray-600/30"
    },
    {
      name: "Abbey Tripel",
      description: "A silky smooth, high-alcohol Belgian-style beer with a creamy white froth and a straw-yellow hue. Bursting with complex spice notes of coriander, jeera, and floral yeast aromas, this strong ale delivers a warming finish with a zingy peppery aftertaste. Elegant yet bold, it offers a delightful balance of effervescence, spice, and strength.",
      abv: "8.5%",
      ibu: "15",
      color: "Straw-yellow",
      flavor: "Rich, spicy, floral, with warm alcohol and a peppery kick",
      structure: "Silky smooth, effervescent",
      tags: ["strong", "spiced", "fruity"],
      gradient: "from-yellow-700/30 to-amber-700/30"
    }
  ];

  const filteredBeers = activeFilter === "all" 
    ? featuredBeers 
    : featuredBeers.filter(beer => beer.tags.includes(activeFilter));

  return (
    <>
      <SEOHead
        title={PAGE_SEO.ourBrews.title}
        description={PAGE_SEO.ourBrews.description}
        keywords={PAGE_SEO.ourBrews.keywords}
        image={PAGE_SEO.ourBrews.image}
        type={PAGE_SEO.ourBrews.ogType}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
        {/* Hero Section */}
        <header className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-foreground mb-4 sm:mb-6">
                Our <span className="text-accent">Brews</span>
              </h1>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 sm:mb-8" />
              <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 mb-6 sm:mb-8 leading-relaxed">
                Explore the carefully crafted beers brewed in-house at Stories Brewery & Kitchen, the best craft brewery in BTM Layout. 
                Whether you're a hop head, a fruit-forward fan, or a wheat beer lover, there's a fresh 
                pour waiting to tell your story.
              </p>
              <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                From crisp, easy-drinking pours to bold seasonal releases, this is a <strong>craft brewery in Bangalore</strong> made for rooftop afternoons and late-night conversations—ideal for anyone searching for a <strong>craft brewery near me</strong> or the <strong>best brewery in Bengaluru</strong>. Pair your pint with our <a href="/" className="text-accent hover:underline">multi-cuisine restaurant</a> menu.
              </p>
            </div>
          </div>
        </header>

      {/* Beer Showcase */}
      <section className="py-16 lg:py-24" ref={sectionRef}>
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-heading font-black text-foreground mb-8">
              Filter by Style
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {brewFilters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(filter)}
                  className={`capitalize text-black hover:text-black ${
                    activeFilter === filter 
                      ? "bg-accent hover:bg-accent/90" 
                      : "border-accent/30 hover:bg-accent/10"
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          {/* Beer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {filteredBeers.map((beer, index) => (
              <div
                key={index}
                className="fade-in-up beer-card group cursor-pointer h-full"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${beer.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
                
                <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col min-h-[340px] sm:min-h-[380px]">
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
                    <div className="flex items-start justify-between text-xs sm:text-sm gap-2">
                      <span className="text-foreground/60 flex items-center shrink-0">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                        Flavor
                      </span>
                      <span className="font-semibold text-accent text-right text-xs sm:text-sm leading-tight">{beer.flavor}</span>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-2">
                    {beer.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-heading font-black text-foreground mb-6">
            Ready to taste the <span className="text-accent">Stories</span>?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Visit any of our locations and discover your new favorite brew
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-hero group" asChild>
              <a
                href={RESERVATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <span>Make a Reservation</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" className="border-accent text-black hover:bg-accent hover:text-black">
              View Full Menu
            </Button>
          </div>
        </div>
      </section>
        </main>
        <Footer />
        <DeveloperCredit />
      </div>
    </>
  );
};

export default OurBrews;