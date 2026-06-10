import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedBrews from "@/components/FeaturedBrews";
import BlogSection from "@/components/BlogSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import DeveloperCredit from "@/components/DeveloperCredit";
import SEOHead from "@/components/SEOHead";
import { PAGE_SEO } from "@/lib/seo";

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
                  A rooftop brewpub in Bangalore for craft beer + great food
                </h2>
                <div className="space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed">
                  <p>
                    If you're searching for a <strong>brewpub near me</strong> or <strong>brewery near me</strong> in Bengaluru, Stories Brewery &amp; Kitchen in BTM Layout is a craft beer destination that brings together a <strong>brewery and restaurant Bangalore</strong> experience under one lush rooftop.
                  </p>
                  <p>
                    We’re known as a <strong>brewery with food Bangalore</strong>—a <strong>brewpub restaurant Bangalore</strong> where you can enjoy <strong>craft beer Bangalore</strong> with a menu built for sharing, group dining, and full-course dinners.
                  </p>
                  <p>
                    Planning a night out? From <strong>live music bar Bangalore</strong> evenings and <strong>DJ night pub Bangalore</strong> weekends to a fun <strong>party pub Bangalore</strong> vibe, we’re a go-to for Bengaluru <strong>nightlife</strong>, friends’ meetups, and late-night plans.
                  </p>
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
