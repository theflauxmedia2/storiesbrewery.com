import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera } from "lucide-react";
import ResponsiveImage from "@/components/ResponsiveImage";
import { RESERVATION_LINK } from "@/lib/constants";

const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/stbr/3.webp",
      alt: "Cozy dining area at Stories, a brewery restaurant in BTM Layout, Bengaluru",
      location: "Bengaluru",
      title: "Cozy Dining Area"
    },
    {
      id: 2,
      src: "/stbr/4.webp", 
      alt: "Garden view at Stories rooftop brewpub in Bangalore",
      location: "Bengaluru",
      title: "Garden Oasis"
    },
    {
      id: 3,
      src: "/stbr/6.webp",
      alt: "Rooftop dining ambiance at Stories, BTM Layout, Bengaluru",
      location: "Bengaluru", 
      title: "Rooftop Vibes"
    },
    {
      id: 4,
      src: "/stbr/7.webp",
      alt: "Interior of Stories Brewery & Kitchen, a brewery in BTM Layout",
      location: "Bengaluru",
      title: "Modern Interior"
    },
    {
      id: 5,
      src: "/stdb/2.webp",
      alt: "Dubai Brewery Interior",
      location: "Dubai",
      title: "Dubai Interior"
    },
    {
      id: 6,
      src: "/stdb/6.webp",
      alt: "Dubai Craft Beer Experience",
      location: "Dubai",
      title: "Craft Experience"
    },
    {
      id: 7,
      src: "/stdb/8.webp",
      alt: "Dubai Brewery Atmosphere",
      location: "Dubai",
      title: "Premium Atmosphere"
    },
    {
      id: 8,
      src: "/stdb/9.webp",
      alt: "Dubai Brewery Interior Design",
      location: "Dubai",
      title: "Luxury Design"
    }
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="h-6 w-6 text-primary" />
            <Badge variant="secondary" className="text-sm">
              Photo Gallery
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Our <span className="text-primary">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get a glimpse of the Stories experience across all our locations - from cozy interiors to rooftop dining and craft brewing excellence.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {galleryImages.map((image) => (
            <Card key={image.id} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="aspect-square overflow-hidden relative">
                <ResponsiveImage
                  src={image.src}
                  alt={image.alt}
                  preset="gallery"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Commented out hover effects and text overlay
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge variant="secondary" className="text-xs mb-1 bg-white/90 text-black">
                    <MapPin className="h-3 w-3 mr-1" />
                    {image.location}
                  </Badge>
                  <h3 className="text-white text-xs font-medium truncate">
                    {image.title}
                  </h3>
                </div>
                */}
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Experience these moments in person&mdash;reserve online or give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <a
                href={RESERVATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reserve Online
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/our-brews">
                Explore Our Brews
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;