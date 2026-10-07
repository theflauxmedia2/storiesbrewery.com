import { useEffect, useRef } from "react";
import { Leaf, Users, Globe, Sparkles, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-up");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("visible");
              }, index * 200);
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

  const features = [
    {
      icon: Leaf,
      title: "Nature-Infused Dining",
      description: "Surrounded by over 50,000 plants creating an urban jungle experience"
    },
    {
      icon: Sparkles,
      title: "Craft Beer Excellence", 
      description: "Handcrafted brews including unique flavors like Jamun Witbier"
    },
    {
      icon: Globe,
      title: "Multi-Cuisine Menu",
      description: "North Indian, Continental, Chinese, Pan Asian, pizza, pasta, sushi and dimsum"
    },
    {
      icon: Users,
      title: "Experiential Ambiance",
      description: "Four themed areas: Amazon, Maze, Brew, and Penthouse"
    },
    {
      icon: Heart,
      title: "Community Hub",
      description: "Weekend DJ nights, live events, and memorable experiences"
    }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="fade-in-up text-4xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Our Story
          </h2>
          <div className="fade-in-up w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 text-lg text-foreground/80 leading-relaxed">
            <div className="fade-in-up">
              <h3 className="text-3xl lg:text-4xl font-heading font-semibold text-foreground mb-6">
                The Story Behind Our Spaces
              </h3>
              <p className="mb-6">
                Founded by <span className="text-accent font-semibold">Nerall Bakhai</span>, at Stories, we don't just open locations—we craft destinations. Each outlet under the Stories brand is rooted in our mission: To create immersive, nature-inspired social experiences where food, culture, and community converge.
              </p>
              <p className="mb-6">
                What started in BTM Layout as a rooftop brewpub wrapped in greenery has grown into a multi-location movement, from corner hangouts in Rajajinagar and Nagarbhavi, to cost friendly dining at Stories 2.0 in HSR, and even an international footprint in Dubai.
              </p>
              <p className="mb-8">
                Every venue is designed with purpose—whether it's themed zones like Amazon and Maze, community-focused hubs in neighborhood corners, or modern gastronomic spaces with live kitchens and skyline views.
              </p>
            </div>

            <div className="fade-in-up">
              <h4 className="text-2xl lg:text-3xl font-heading font-semibold text-foreground mb-6">
                Why We're Special
              </h4>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-3" />
                  <p>We design with intention: From 50,000+ plants to theme-based seating, every space has soul.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-3" />
                  <p>We brew with care: In-house craft beers that complement our multi-cuisine menu of North Indian, Continental, Asian, pizza, pasta, sushi and dimsum.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-3" />
                  <p>We adapt to the vibe: Whether you seek casual street food, a skyline cocktail, or weekend DJ energy—there's a Stories location built just for that.</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full mt-3" />
                  <p>We celebrate culture: Local flavors, global recipes, and hospitality that feels like home.</p>
                </div>
              </div>
              <p className="text-lg">
                Each Stories location is a new chapter—but the narrative remains the same: bringing people together to connect, celebrate, and create stories worth sharing.
              </p>
            </div>
          </div>
        </div>

        {/* Read More Button */}
        <div className="text-center mt-12">
          <Button 
            className="btn-hero-secondary group"
            asChild
          >
            <a href="/about" className="inline-flex items-center gap-2">
              <span>Read Our Complete Story</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;