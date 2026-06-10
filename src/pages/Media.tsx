import Navigation from "@/components/Navigation";
import ResponsiveImage from "@/components/ResponsiveImage";
import { ExternalLink, Calendar, User, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import DeveloperCredit from "@/components/DeveloperCredit";
import SEOHead from "@/components/SEOHead";
import { PAGE_SEO } from "@/lib/seo";

const Media = () => {
  const pressReleases = [
    {
      title: "The Story Behind Stories Bar & Kitchen",
      excerpt: "Discover the inspiration and journey that led to the creation of Stories Brewery & Kitchen, a unique dining and brewing experience that has captured the hearts of Bengaluru's food and beer enthusiasts.",
      fullDescription: "From conception to creation, this article delves deep into the vision behind Stories Brewery & Kitchen. Learn about the founders' passion for craft brewing, their commitment to creating unique dining experiences, and how they've built a community around great food and exceptional beer.",
      source: "Provoke Lifestyle",
      thumbnail: "/blogs/1.webp",
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
              excerpt: "An in-depth review of the new nature-infused microbrewery in town, exploring the unique atmosphere, craft beer offerings, and the sustainable practices that set Stories apart.",
              fullDescription: "This comprehensive review takes you through the unique nature-infused microbrewery concept that Stories has pioneered. From their sustainable brewing practices to their eco-friendly restaurant design, discover how Stories is leading the way in responsible hospitality while delivering exceptional taste experiences.",
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
      thumbnail: "/stdb/11.webp",
      publishedDate: "December 2024",
      readTime: "5 min read",
      category: "Brewing",
      content: `The Art of Craft Beer: A Journey Through Our Brewing Process

At Stories Brewery & Kitchen, every sip tells a story. But behind that story is a meticulous craft—an art form that combines science, patience, and creativity to bring you the freshest, most flavorful beers on tap. This is not just beer—it's liquid storytelling.

Let's take you behind the scenes of how your favorite brews are born.

1. It All Begins with the Ingredients
Our brewing journey starts with select grains, pure water, specialty hops, and signature yeast strains. Each ingredient is handpicked for its freshness and character. Whether it's the banana-clove notes of a Hefeweizen or the fruity tartness of our Jamun Witbier, the quality of the ingredients sets the foundation for what's to come.

2. The Mash-In: Building the Flavor Base
We heat crushed malted barley with water in a process called mashing. This activates enzymes that break down starches into fermentable sugars—the lifeblood of beer. The result? A sweet liquid known as wort that carries the early soul of the brew.

3. The Boil: Hops Join the Party
The wort is then boiled, and hops are added in precise stages. Hops don't just add bitterness—they balance sweetness, provide aroma, and act as a natural preservative. In our Wheat IPA, for instance, the hops are timed to deliver that crisp, tropical hop finish you love.

4. Cooling & Fermentation: Where Magic Happens
Once boiled, the wort is cooled and transferred to fermenters. Here, yeast is introduced, and the real transformation begins. Over several days or weeks (depending on the beer), yeast consumes the sugars and converts them into alcohol and CO₂—creating flavor, fizz, and body.

5. Conditioning: Patience is a Brewmaster's Virtue
Before it reaches your glass, our beer is conditioned to enhance clarity, carbonation, and depth. This is when flavors mellow, textures round out, and the beer becomes perfectly pourable. For brews like our Triple Wit, longer conditioning brings out stronger banana and clove notes.

6. Ready to Pour: Your Story Begins
Finally, the beer is carbonated, kegged, and poured—cold, fresh, and brimming with personality. Each pour you enjoy at Stories Brewery is a product of this careful, creative process. From Mango Ciders to Belgian Wit, we brew for both the aficionado and the curious first-timer.

Why It Matters
Craft brewing is about passion, precision, and storytelling. It's about understanding the ingredients, mastering the process, and innovating with flavor. At Stories, we believe beer should be more than a drink—it should be an experience.

So the next time you raise a glass at one of our four immersive sections—Amazon, Maze, Brew, or Penthouse—know that you're tasting a chapter of something bigger: a story brewed with intention.

Cheers to the craft. Cheers to the journey. Cheers to Stories.`,
      isPublished: true
    },
    {
      title: "Sustainable Brewing: How We're Making a Difference",
      excerpt: "Discover our commitment to environmental responsibility and how we're implementing sustainable practices in every aspect of our brewing and dining operations.",
      author: "Stories Brewery Team",
      thumbnail: "/blogs/2.webp",
      publishedDate: "November 2024",
      readTime: "4 min read",
      category: "Sustainability",
      isPublished: true,
      content: `Sustainable Brewing: How We're Making a Difference

At Stories Brewery & Kitchen, brewing beer is not just about flavor—it's about responsibility. As Bengaluru's nature-infused rooftop brewery with over 50,000 plants, we're more than just proud of our beer—we're passionate about how we make it.

Sustainability is embedded into every step of our brewing journey, creating a space that not only delights the senses but respects the planet. Here's how we're making an impact—one pint at a time.

1. Water Consciousness in Brewing
Beer is over 90% water. We take that seriously.
From precision water usage in the brewing process to reusing water for plant irrigation across our lush rooftop garden, we work to minimize waste and optimize every drop. Our greenery isn't just for show—it thrives sustainably, thanks to a closed-loop watering system.

2. Spent Grain, Zero Waste
Brewing generates spent grain—a by-product rich in nutrients. Instead of discarding it, we repurpose it. Our spent grain goes to local farmers and feed suppliers, contributing to a zero-waste brewing loop that supports the local ecosystem.

3. Energy-Efficient Equipment
Our brewery setup includes energy-saving heating systems and temperature control tech to minimize our energy footprint. From brewing to fermentation, every process is optimized for maximum output and minimal waste.
We're also exploring renewable energy integration to eventually brew with the power of the sun—stay tuned for that chapter.

4. Green Design with Purpose
With immersive zones like Amazon and Maze, our design isn't just aesthetic—it's intentional. The plants that line our walls and ceilings help reduce temperature, purify air, and bring natural balance to the space. It's urban jungle meets brewery culture.
Our sustainable architecture choices include upcycled materials, natural light optimization, and layouts that promote airflow, reducing the need for artificial cooling.

5. Sustainable Serveware & Packaging
We are actively reducing single-use plastics by adopting reusable serveware, glass growlers for takeaways, and sustainable packaging options. Every design choice, down to your coaster, is made with the environment in mind.

Our Green Footprint, Your Fresh Pint
Every beer you enjoy at Stories is part of something bigger—a community committed to positive change. By drinking local, supporting green business, and choosing thoughtfully, you're contributing to a culture of sustainability that's as refreshing as our pours.

"We believe that the future of brewing is green—not just in hops, but in heart. It's not about doing one big thing—it's about doing many small things right."
— The Stories Team

Raise Your Glass to Sustainability
Come experience what it means to drink responsibly—environmentally and joyfully. At Stories, the vibe is green, the beer is clean, and the future is brewed with care.`
    },
    {
      title: "Pairing Food with Craft Beer: A Complete Guide",
      excerpt: "Master the art of food and beer pairing with our comprehensive guide. Learn which dishes complement our different beer styles for the ultimate dining experience.",
      author: "Stories Brewery Team",
      thumbnail: "/blogs/3.webp",
      publishedDate: "October 2024",
      readTime: "6 min read",
      category: "Food & Beer",
      isPublished: true,
      content: `Pairing Food with Beer: A Complete Guide

At Stories Brewery & Kitchen, we believe that the perfect pint deserves the perfect plate. Just as wine has its food pairings, craft beer opens up an equally dynamic world of flavor combinations—each sip enhancing every bite, and vice versa.
Whether you're a hop head, a cider fan, or a first-time drinker, here's how to pair your brew with food like a pro.

1. The Basics of Beer Pairing
Before diving into specific combos, remember the three golden rules of beer pairing:
●\tMatch intensity: Strong beers = bold dishes; light beers = delicate flavors.

●\tComplement or contrast: Use beer to balance or highlight food flavors.

●\tCleanse the palate: Bitterness, carbonation, and acidity can reset your taste buds.



2. Wheat Beers & Light Fare
Beers like: Hefeweizen, Belgian Wit, Jamun Witbier
Flavor Notes: Fruity, citrusy, mildly spicy
Perfect With:
●\tGrilled prawns with lemon

●\tChicken Caesar salad

●\tPaneer tikka or avocado toast

●\tJamun Wit with creamy cheeses or mildly sweet desserts

Why it works: These beers lift lighter dishes with their zesty, refreshing qualities while letting fresh ingredients shine.


3. Ciders & Fresh, Sweet Bites
Beers like: Apple Cider, Mango Cider
Flavor Notes: Fruity, sweet, juicy
Perfect With:
●\tSpicy Asian fare (think Thai or chili garlic noodles)

●\tCheese platters with brie or goat cheese

●\tMango cider with peri-peri fries or desserts like cheesecake

Why it works: The sweetness and acidity of ciders cool down spice and elevate creamy or tangy elements.


4. IPAs & Bold, Spicy Dishes
Beers like: Wheat IPA
Flavor Notes: Bitter, hoppy, tropical finish
Perfect With:
●\tBurgers or loaded nachos

●\tTandoori or grilled meats

●\tSpicy chicken wings or BBQ ribs

Why it works: The bitterness in IPAs cuts through fat and spice, cleansing your palate and highlighting smoky, charred flavors.


5. Strong Wheats & Rich Cuisine
Beers like: Triple Wit
Flavor Notes: Banana, clove, stronger ABV
Perfect With:
●\tPork chops with apple glaze

●\tLamb kebabs

●\tCreamy mushroom pasta

Why it works: The full-bodied profile stands up to complex, rich dishes and adds a spicy fruitiness that contrasts well.



6. Belgian Wit & Fusion Bites
Beers like: Belgian Wit
Flavor Notes: Orange, coriander, spice
Perfect With:
●\tSpicy Indian-Chinese dishes

●\tTacos or paneer quesadillas

●\tKorean BBQ or bao buns

Why it works: The citrus and spice elements pair beautifully with global street-food flavors and fusion dishes.

Stories-Style Pro Tips
●\tStart light, end bold: Move from wheat beers to IPAs or stronger brews as your meal progresses.

●\tAlways ask your server for suggestions—our team is trained in matching dishes with our fresh brews.

●\tMix it up with shareables and beer flights to discover your own perfect pairings.


Experience the Pairing Live
Visit any of our four themed zones—Amazon, Maze, Brew, or Penthouse—and let us craft a meal-and-pint combo tailored to your vibe. Whether you're brunching under the vines or partying to the DJ on weekends, there's a perfect pairing waiting to be discovered.
Stories isn’t just a place to eat and drink. It’s a space where flavor meets feeling—and your food and beer tell the story.`
    }
  ];

  return (
    <>
      <SEOHead
        title={PAGE_SEO.media.title}
        description={PAGE_SEO.media.description}
        keywords={PAGE_SEO.media.keywords}
        image={PAGE_SEO.media.image}
        type={PAGE_SEO.media.ogType}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-20">
          {/* Hero Section */}
          <header className="py-12 sm:py-16 px-4 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
            <div className="container mx-auto max-w-4xl text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 sm:mb-6">
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
                <TabsList className="grid w-full grid-cols-2 mb-8 h-12">
                  <TabsTrigger value="press" className="text-lg">Press Releases</TabsTrigger>
                  <TabsTrigger value="blog" className="text-lg">Our Blog</TabsTrigger>
                </TabsList>

                {/* Press Releases Tab */}
                <TabsContent value="press" className="space-y-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-black text-foreground mb-4">Press Coverage</h2>
                    <p className="text-muted-foreground">Discover what the media is saying about Stories Brewery & Kitchen</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {pressReleases.map((post, index) => (
                      <Card key={index} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="aspect-video overflow-hidden">
                          <ResponsiveImage
                            src={post.thumbnail}
                            alt={post.title}
                            preset="card"
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
                          <CardTitle className="text-base sm:text-lg leading-tight line-clamp-2 group-hover:text-accent transition-colors">
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
                            className="w-full text-black group-hover:bg-accent group-hover:text-black transition-colors"
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
                    <h2 className="text-2xl font-black text-foreground mb-4">Our Blog</h2>
                    <p className="text-muted-foreground">Insights, stories, and behind-the-scenes content from the Stories team</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {blogPosts.map((post, index) => (
                      <Card key={index} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="aspect-video overflow-hidden">
                          {post.isPublished ? (
                            <ResponsiveImage
                              src={post.thumbnail}
                              alt={post.title}
                              preset="card"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center h-full">
                              <div className="text-center p-8">
                                <p className="text-sm text-muted-foreground">Coming Soon</p>
                              </div>
                            </div>
                          )}
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
                          <CardTitle className="text-base sm:text-lg leading-tight line-clamp-2 group-hover:text-accent transition-colors">
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
                            disabled={!post.isPublished}
                            asChild={post.isPublished}
                          >
                            {post.isPublished ? (
                              <a href={`/blog/${index + 1}`} className="inline-flex items-center gap-2">
                                Read More
                                <ArrowRight className="h-3 w-3" />
                              </a>
                            ) : (
                              <span className="inline-flex items-center gap-2">
                                Coming Soon
                                <ArrowRight className="h-3 w-3" />
                              </span>
                            )}
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