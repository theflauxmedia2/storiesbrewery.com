import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ResponsiveImage from "@/components/ResponsiveImage";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Story Behind Stories Brewery & Kitchen",
      excerpt: "Discover the inspiration and journey that led to the creation of Stories Brewery & Kitchen, a unique dining and brewing experience.",
      fullDescription: "From conception to creation, this feature article delves deep into the vision behind Stories Brewery & Kitchen. Learn about the founders' passion for craft brewing and their commitment to creating unique dining experiences.",
      source: "Provoke Lifestyle",
      thumbnail: "/blogs/1.webp",
      link: "https://provokelifestyle.in/story-behind-stories-bar-kitchen",
      publishedDate: "March 2024",
      readTime: "5 min read"
    },
    {
      title: "Nature-Infused Dining Experience", 
      excerpt: "Experience dining amidst 50,000+ plants in our unique rooftop sanctuary that blends nature with urban sophistication.",
              fullDescription: "Explore how Stories has revolutionized urban dining by creating a nature-infused oasis in the heart of Bengaluru, offering guests an immersive nature experience.",
      source: "Stories Blog",
      thumbnail: "/blogs/rooftop-dining.webp",
      link: "#",
      publishedDate: "February 2024",
      readTime: "4 min read"
    },
    {
      title: "Craft Beer Excellence",
      excerpt: "Learn about our brewing process and the passion behind each handcrafted beer that tells its own unique story.",
      fullDescription: "From wheat IPAs to fruit-infused ciders, discover the artistry and precision that goes into crafting each of our signature brews.",
      source: "Stories Blog", 
      thumbnail: "/blogs/craft-beer.webp",
      link: "#",
      publishedDate: "January 2024",
      readTime: "6 min read"
    }
  ];

  const featuredPost = blogPosts[0];

  return (
    <section className="py-16 px-4 lg:px-8 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Featured Story
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive deep into the story behind Stories - discover what makes our brewery experience truly unique.
          </p>
        </div>

        {/* Featured Blog Post */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                <ResponsiveImage
                  src={featuredPost.thumbnail}
                  alt={featuredPost.title}
                  preset="card"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {featuredPost.source}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {featuredPost.publishedDate}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {featuredPost.readTime}
                    </span>
                  </div>
                                      <CardTitle className="text-2xl md:text-3xl leading-tight mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </CardTitle>
                </div>
                
                <div className="space-y-4 mb-6">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">
                    {featuredPost.fullDescription}
                  </p>
                </div>

                <Button
                  variant="outline"
                  className="w-fit text-black group-hover:bg-accent group-hover:text-black transition-colors"
                  asChild
                >
                  <a
                    href={featuredPost.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Read Full Story
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>


        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="mb-4"
            asChild
          >
            <a href="/media">
              Read More Stories
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            Want to feature Stories in your publication?{" "}
            <a 
              href="tel:+918046809326" 
              className="text-primary hover:underline font-medium"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;