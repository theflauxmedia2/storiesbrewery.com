import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedBrews from "@/components/FeaturedBrews";
import BlogSection from "@/components/BlogSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import DeveloperCredit from "@/components/DeveloperCredit";
import SEOHead from "@/components/SEOHead";
import { HOME_FAQ, PAGE_SEO } from "@/lib/seo";

const Index = () => {
  const seo = PAGE_SEO.home;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        image={seo.image}
        type={seo.ogType}
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <FeaturedBrews />
          <BlogSection />
          <GallerySection />
          
          {/* SEO content block (visible + natural language) */}
          <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-secondary/10">
            <div className="container mx-auto px-4 lg:px-8">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-heading font-black text-foreground mb-6">
                  The best brewery &amp; restaurant in BTM Layout, Bangalore
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed">
                  <p>
                    Searching for the <strong>best restaurants near me</strong> or a <strong>brewery near me</strong> in South Bengaluru? Stories Brewery &amp; Kitchen is one of the <strong>best restaurants in BTM Layout</strong>—a <strong>brewery restaurant</strong> where fresh, in-house craft beer meets a full multi-cuisine kitchen under one lush rooftop.
                  </p>
                  <p>
                    As a <strong>brewpub in BTM Layout</strong>, we brew our beers on site, making us one of the <strong>best brewpubs in Bangalore</strong> and a top pick for the <strong>best dining in Bengaluru</strong>. Whether you live in BTM, HSR, Jayanagar or Koramangala, we're the <strong>best brewery near BTM Layout</strong> for long lunches, after-work pints and late dinners.
                  </p>
                  <p>
                    From <strong>live music</strong> evenings and weekend DJ nights to birthdays, date nights and corporate dinners, it's one of the <strong>best places to eat</strong> and celebrate in Bengaluru.
                  </p>
                </div>

                <h2 className="text-3xl sm:text-4xl font-heading font-black text-foreground mt-14 mb-6">
                  A multi-cuisine restaurant in BTM Layout
                </h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-8">
                  Our kitchen is built for sharing plates, group dining and full-course dinners—every dish designed to pair with a fresh pour from our <a href="/our-brews" className="text-accent hover:underline">craft beer menu</a>.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 text-base text-foreground/80 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">North Indian food</h3>
                    <p>Hearty curries, starters and breads make us a go-to <strong>North Indian restaurant in BTM Layout</strong> for anyone craving the <strong>best North Indian food in Bangalore</strong>.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">Continental food</h3>
                    <p>Classic European-style plates and bar favourites—a <strong>continental restaurant in Bengaluru</strong> that pairs beautifully with our wheat beers and ciders.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">Chinese &amp; Pan Asian food</h3>
                    <p>Chinese classics and bold Asian flavours—a <strong>Chinese restaurant in BTM Layout</strong> and <strong>Pan Asian restaurant in Bangalore</strong> rolled into one menu.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">Sushi &amp; dimsum</h3>
                    <p>Sushi and dimsum are rare finds in this part of the city—making Stories a <strong>sushi restaurant in BTM Layout</strong> and <strong>dimsum restaurant in Bengaluru</strong> worth the trip.</p>
                  </div>
                  <div className="sm:col-span-2">
                    <h3 className="text-xl font-heading font-bold text-foreground mb-2">Pizza &amp; pasta</h3>
                    <p>Pizzas and comforting pastas—the perfect match for a pint, and why we're a top <strong>pizza restaurant in BTM Layout</strong> and <strong>pasta restaurant in Bangalore</strong>.</p>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-heading font-black text-foreground mt-14 mb-6">
                  Rooftop dining in Bengaluru
                </h2>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                  Looking for a <strong>rooftop restaurant near me</strong>? Stories is a <strong>rooftop brewery in Bangalore</strong> and <strong>rooftop brewpub in BTM</strong>, with open-air <strong>rooftop dining in BTM Layout</strong> surrounded by 50,000+ plants. <a href="/about" className="text-accent hover:underline">Explore our rooftop zones</a>—Amazon, Maze, Brew and Penthouse.
                </p>

                <h2 className="text-3xl sm:text-4xl font-heading font-black text-foreground mt-14 mb-6">
                  Frequently asked questions
                </h2>
                <div className="space-y-6">
                  {HOME_FAQ.map((faq) => (
                    <div key={faq.question}>
                      <h3 className="text-xl font-heading font-bold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
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

export default Index;
