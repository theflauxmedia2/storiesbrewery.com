import Navigation from "@/components/Navigation";
import { ExternalLink, MapPin, Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import DeveloperCredit from "@/components/DeveloperCredit";
import SEOHead from "@/components/SEOHead";

const Media = () => {
  const pressReleases = [
    {
      title: "The Story Behind Stories Bar & Kitchen",
      excerpt: "Discover the inspiration and journey that led to the creation of Stories Brewery & Kitchen, a unique dining and brewing experience that has captured the hearts of Bengaluru's food and beer enthusiasts.",
      fullDescription: "From conception to creation, this article delves deep into the vision behind Stories Brewery & Kitchen. Learn about the founders' passion for craft brewing, their commitment to creating unique dining experiences, and how they've built a community around great food and exceptional beer.",
      source: "Provoke Lifestyle",
      thumbnail: "/blogs/1.jpg",
      link: "https://provokelifestyle.in/story-behind-stories-bar-kitchen/?utm_source=chatgpt.com",
      publishedDate: "March 2024"
    },
    {
      title: "Stories Brewery Kitchen - Top Bengaluru",
      excerpt: "A comprehensive guide to one of Bengaluru's most talked-about brewery destinations, featuring craft beers and exceptional cuisine that defines modern Indian dining.",
      fullDescription: "This detailed review covers everything from the ambiance and service to the standout dishes and signature brews. Get insider tips on what to order, the best times to visit, and why Stories has become a must-visit destination for locals and tourists alike.",
      source: "Top Bengaluru",
      thumbnail: "/blogs/2.webp",
      link: "https://www.topbengaluru.com/listing/stories-brewery-kitchen/?utm_source=chatgpt.com",
      publishedDate: "February 2024"
    },
    {
      title: "Review: Stories The Brew Chapter",
      excerpt: "An in-depth review of the new green microbrewery in town, exploring the unique atmosphere, craft beer offerings, and the sustainable practices that set Stories apart.",
      fullDescription: "This comprehensive review takes you through the unique green microbrewery concept that Stories has pioneered. From their sustainable brewing practices to their eco-friendly restaurant design, discover how Stories is leading the way in responsible hospitality while delivering exceptional taste experiences.",
      source: "Rashminotes",
      thumbnail: "/blogs/3.webp",
      link: "https://rashminotes.com/2019/06/30/review-stories-the-brew-chapter-the-new-green-microbrewery-in-town/?utm_source=chatgpt.com",
      publishedDate: "June 2019"
    }
  ];

  const blogPosts = [
    {
      title: "The Art of Craft Beer: A Journey Through Our Brewing Process",
      excerpt: "Ever wondered how we create our signature craft beers? Join us behind the scenes as we explore the meticulous brewing process that goes into every pint at Stories.",
      author: "Stories Brewery Team",
      thumbnail: "/blogs/blog-1.jpg",
      publishedDate: "December 2024",
      readTime: "5 min read",
      category: "Brewing"
    },
    {
      title: "Sustainable Brewing: How We're Making a Difference",
      excerpt: "Discover our commitment to environmental responsibility and how we're implementing sustainable practices in every aspect of our brewing and dining operations.",
      author: "Stories Brewery Team",
      thumbnail: "/blogs/blog-2.jpg",
      publishedDate: "November 2024",
      readTime: "4 min read",
      category: "Sustainability"
    },
    {
      title: "Pairing Food with Craft Beer: A Complete Guide",
      excerpt: "Master the art of food and beer pairing with our comprehensive guide. Learn which dishes complement our different beer styles for the ultimate dining experience.",
      author: "Stories Brewery Team",
      thumbnail: "/blogs/blog-3.jpg",
      publishedDate: "October 2024",
      readTime: "6 min read",
      category: "Food & Beer"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Stories Brewery Media - Press Coverage & Blog | Bengaluru's Greenest Brewery"
        description="Explore Stories Brewery's media coverage and read our latest blog posts. Discover press releases, brewing insights, and stories from Bengaluru's most innovative brewery."
        keywords="stories brewery media, bengaluru brewery press, craft beer blog, brewery news, stories brewery articles, brewing insights"
        type="article"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <header className="py-12 sm:py-16 px-4 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Media & Stories
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover press coverage about Stories and read our latest blog posts about craft brewing, sustainability, and the stories behind our unique brewery experience.
              </p>
            </div>
          </header>

          {/* Tabs Section */}
          <section className="py-12 sm:py-16 px-4 lg:px-8">
            <div className="container mx-auto max-w-6xl">
              <Tabs defaultValue="press" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="press" className="text-lg">Press Releases</TabsTrigger>
                  <TabsTrigger value="blog" className="text-lg">Our Blog</TabsTrigger>
                </TabsList>

                {/* Press Releases Tab */}
                <TabsContent value="press" className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Press Coverage</h2>
                    <p className="text-muted-foreground">Discover what the media is saying about Stories Brewery & Kitchen</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {pressReleases.map((post, index) => (
                      <Card key={index} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={post.thumbnail}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                              {post.source}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {post.publishedDate}
                            </span>
                          </div>
                          <CardTitle className="text-base sm:text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-xs sm:text-sm text-muted-foreground line-clamp-3 mb-3">
                            {post.excerpt}
                          </CardDescription>
                          <p className="text-xs text-muted-foreground/80 mb-4 line-clamp-3 hidden sm:block">
                            {post.fullDescription}
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-black group-hover:bg-primary group-hover:text-black transition-colors"
                            asChild
                          >
                            <a
                              href={post.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2"
                            >
                              Read Full Story
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Blog Tab */}
                <TabsContent value="blog" className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Our Blog</h2>
                    <p className="text-muted-foreground">Insights, stories, and behind-the-scenes content from the Stories team</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {blogPosts.map((post, index) => (
                      <Card key={index} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <div className="text-center p-8">
                            <p className="text-sm text-muted-foreground">Coming Soon</p>
                          </div>
                        </div>
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                              {post.category}
                            </span>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {post.publishedDate}
                            </span>
                          </div>
                          <CardTitle className="text-base sm:text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <CardDescription className="text-xs sm:text-sm text-muted-foreground line-clamp-3 mb-3">
                            {post.excerpt}
                          </CardDescription>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <User className="h-3 w-3" />
                              {post.author}
                            </div>
                            <span className="text-xs text-muted-foreground">{post.readTime}</span>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full text-black group-hover:bg-accent group-hover:text-black transition-colors"
                            disabled
                          >
                            <span className="inline-flex items-center gap-2">
                              Coming Soon
                              <ArrowRight className="h-3 w-3" />
                            </span>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </main>
        <Footer />
        <DeveloperCredit />
      </div>
    </>
  );
};

export default Media;