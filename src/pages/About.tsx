import Navigation from "@/components/Navigation";
import { Leaf, Users, Globe, Sparkles, Heart, MapPin, Calendar, Music, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import DeveloperCredit from "@/components/DeveloperCredit";
import SEOHead from "@/components/SEOHead";
import { PAGE_SEO } from "@/lib/seo";

const About = () => {
  const vibeAreas = [
    {
      name: "Amazon",
      description: "A tropical escape drenched in greenery",
      icon: Leaf,
      gradient: "from-[#D7BD99]/25 to-[#D7BD99]/10"
    },
    {
      name: "Maze", 
      description: "An architectural wonder that invites discovery",
      icon: Users,
      gradient: "from-purple-500/20 to-indigo-600/20"
    },
    {
      name: "Brew",
      description: "Our heart of craft, where the beer flows and the mood stays lively",
      icon: Sparkles,
      gradient: "from-[#c7a179]/20 to-[#c7a179]/20"
    },
    {
      name: "Penthouse",
      description: "An elevated experience with rooftop views and intimate vibes",
      icon: Globe,
      gradient: "from-rose-500/20 to-pink-600/20"
    }
  ];

  const offerings = [
    {
      icon: Leaf,
      title: "Nature-Infused Dining",
      description: "Dine amidst 50,000+ plants in a serene, pet-friendly rooftop setting that blends the comfort of nature with the buzz of the city."
    },
    {
      icon: Sparkles,
      title: "Fresh, In-House Brewed Craft Beers",
      description: "As a craft brewery in Bengaluru, we pour a rotating tap of signature brews—each handcrafted on site with precision, passion, and local flair."
    },
    {
      icon: ChefHat,
      title: "Global Multi-Cuisine Menu",
      description: "Savor North Indian, Continental, Chinese and Pan Asian dishes alongside pizza, pasta, sushi and dimsum—a world of flavors designed to complement every pint."
    },
    {
      icon: Music,
      title: "Weekend DJ Nights & Live Events",
      description: "From sunset sets to late-night vibes, our weekends come alive with curated music and energy."
    },
    {
      icon: MapPin,
      title: "Expansive Space & Immersive Zones",
      description: "With 700+ seats, 150+ tables, and 4 themed sections—Amazon, Maze, Brew, and Penthouse—you'll find the perfect corner for any mood or gathering."
    }
  ];

  return (
    <>
      <SEOHead
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
        keywords={PAGE_SEO.about.keywords}
        image={PAGE_SEO.about.image}
        type={PAGE_SEO.about.ogType}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <header className="pt-20 pb-16 bg-gradient-to-br from-background via-background/95 to-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-foreground mb-6">
                About Us
                <span className="block mt-4 text-xl sm:text-2xl lg:text-3xl font-body font-medium text-foreground/85">
                  A Rooftop Restaurant &amp; Brewpub in BTM Layout, Bengaluru
                </span>
              </h1>
              <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 sm:mb-8" />
              <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed">
                Stories Brewery & Kitchen - Where every visit tells a story
              </p>
            </div>
          </div>
        </header>

        {/* Our Story Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-foreground mb-6 sm:mb-8 text-center">
                Our Story
              </h2>
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed order-2 lg:order-1">
                  <p>
                    Stories Brewery & Kitchen is more than just a destination—it's a story of taste, ambiance, and culture.
                  </p>
                  <p>
                    We’re built for both high-energy weekends and intimate evenings—think <strong>friends night out Bangalore</strong>, group celebrations, and a relaxed <strong>romantic dinner Bangalore</strong> on the rooftop.
                  </p>
                  <p>
                    Founded by <span className="text-accent font-semibold">Nerall Bhakai</span>, Stories is built on the belief that great experiences are rooted in nature and brought to life through design, flavor, and storytelling.
                  </p>
                  <p>
                    Tucked away from the city's chaos, our space is home to over <span className="text-primary font-semibold">50,000 thriving plants</span>, creating a lush rooftop sanctuary that has made us one of the <strong>best rooftop restaurants in Bengaluru</strong>.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-card to-secondary/30 rounded-2xl p-6 sm:p-8 border border-border/50 order-1 lg:order-2">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                    {/* <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                    </div> */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                        Founded with Passion
                      </h3>
                      <p className="text-foreground/60">By Nerall Bhakai</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                    <div className="bg-background/50 rounded-lg p-3 sm:p-4">
                      <div className="text-xl sm:text-2xl font-bold text-primary">50,000+</div>
                      <div className="text-xs sm:text-sm text-foreground/70">Plants</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3 sm:p-4">
                      <div className="text-xl sm:text-2xl font-bold text-accent">4</div>
                      <div className="text-xs sm:text-sm text-foreground/70">Themed Areas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Our Vibe Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-heading font-black text-foreground mb-6">
                Our Vibe
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                We're not just one venue—we're a collection of curated experiences. Explore our four uniquely themed sections:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {vibeAreas.map((area, index) => (
                <div key={index} className={`bg-gradient-to-br ${area.gradient} rounded-2xl p-8 border border-border/30 hover:scale-105 transition-transform duration-300`}>
                  <div className="flex items-start space-x-4">
                    {/* <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                      <area.icon className="w-7 h-7 text-primary-foreground" />
                    </div> */}
                    <div>
                      <h3 className="text-2xl font-heading font-black text-foreground mb-3">
                        {area.name}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
                Whether you're catching up with friends, celebrating a milestone, or sipping a handcrafted brew solo, Stories offers a space that fits your mood—and a memory you'll want to relive. It's <strong>rooftop dining in Bangalore</strong> the way it should be: open skies, greenery, and a <strong>rooftop brewery</strong> pouring fresh beer a few steps from your table.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-heading font-black text-foreground mb-12">
              The Vision
            </h2>
            
            <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-8 italic">
              "We didn't want to just open another brewery —we wanted to create an experience that told a story. One with fresh beer, fresh food, and even fresher vibes. Our goal is simple: to make every visit feel like a new chapter worth remembering."
            </blockquote>
            
            <cite className="text-xl text-foreground/70 not-italic">
              — The Founders of Stories Brewery & Kitchen
            </cite>
            
            <div className="mt-12 p-8 bg-gradient-to-r from-card to-secondary/30 rounded-2xl border border-border/50">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our mission is to elevate casual dining with a deeper sense of place, flavor, and storytelling. We're building a community that comes together not just for the beer or the food—but for the moments in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Celebrations & Date Nights */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-foreground mb-6 text-center">
              Celebrate at Bengaluru’s best rooftop brewpub
            </h2>
            <p className="text-lg sm:text-xl text-foreground/80 leading-relaxed text-center max-w-4xl mx-auto">
              Stories is a <strong>rooftop brewpub in Bangalore</strong> and one of the <strong>best dining</strong> spaces in BTM Layout for special moments—<strong>date night Bangalore</strong>, <strong>anniversary dinner Bangalore</strong>, <strong>private dining Bangalore</strong>, and group celebrations. Whether you’re looking for a <strong>best place to celebrate Bangalore</strong>, a <strong>corporate party venue Bangalore</strong>, or a cosy rooftop table, we make it feel like an occasion.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                At Stories Brewery & Kitchen, every visit is designed to be memorable, immersive, and full of flavor. Here's what you can expect:
              </p>
            </div>
            
            <div className="space-y-8">
              {offerings.map((offering, index) => (
                <div key={index} className="bg-gradient-to-r from-card to-secondary/30 rounded-2xl p-8 border border-border/50 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-6">
                    {/* <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                      <offering.icon className="w-8 h-8 text-primary-foreground" />
                    </div> */}
                    <div>
                      <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                        {offering.title}
                      </h3>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
        <Footer />
        <DeveloperCredit />
      </div>
    </>
  );
};

export default About;