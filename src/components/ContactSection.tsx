import { useState, useEffect, useRef } from "react";
import { MapPin, Phone, Clock, Mail, Star, Users, Utensils } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/icons/SocialIcons";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
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

  return (
    <section id="contact" className="py-24 lg:py-32 relative" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="fade-in-up text-4xl lg:text-6xl font-heading font-black text-foreground mb-6">
            Visit Us
          </h2>
          <div className="fade-in-up w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8" />
          <p className="fade-in-up text-xl text-foreground/80 max-w-3xl mx-auto">
            Experience Bengaluru's most enchanting rooftop brewery and Dubai's premier craft beer destination
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Bengaluru Locations */}
          <div className="lg:col-span-2">
                          <h3 className="text-2xl font-heading font-black text-foreground mb-6 text-center lg:text-left">
              Bengaluru Locations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* BTM Layout */}
              <div className="fade-in-up bg-gradient-to-br from-card to-secondary/30 rounded-xl p-6 border border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-bright rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                    BTM Layout
                  </h4>
                  <p className="text-accent font-medium text-sm">Flagship Location</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <a href="tel:+919876543210" className="text-foreground/80 text-sm hover:text-accent transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <p className="text-foreground/70 text-xs">12:00 PM - 1:00 AM</p>
                  </div>
                </div>
              </div>

              {/* HSR Layout */}
              <div className="fade-in-up bg-gradient-to-br from-card to-secondary/30 rounded-xl p-6 border border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                    HSR Layout
                  </h4>
                  <p className="text-accent font-medium text-sm">Modern Design</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-purple-600" />
                    <a href="tel:+919876543211" className="text-foreground/80 text-sm hover:text-accent transition-colors">
                      +91 98765 43211
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <p className="text-foreground/70 text-xs">12:00 PM - 1:00 AM</p>
                  </div>
                </div>
              </div>

              {/* Rajajinagar */}
              <div className="fade-in-up bg-gradient-to-br from-card to-secondary/30 rounded-xl p-6 border border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#c7a179] to-[#c7a179] rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                    Rajajinagar
                  </h4>
                  <p className="text-accent font-medium text-sm">Community Hub</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-[#c7a179]" />
                    <a href="tel:+919876543212" className="text-foreground/80 text-sm hover:text-accent transition-colors">
                      +91 98765 43212
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <p className="text-foreground/70 text-xs">12:00 PM - 1:00 AM</p>
                  </div>
                </div>
              </div>

              {/* Raja Rajeshwari Nagar */}
              <div className="fade-in-up bg-gradient-to-br from-card to-secondary/30 rounded-xl p-6 border border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                    Raja Rajeshwari Nagar
                  </h4>
                  <p className="text-accent font-medium text-sm">Express Service</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-teal-600" />
                    <a href="tel:+919876543213" className="text-foreground/80 text-sm hover:text-accent transition-colors">
                      +91 98765 43213
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <p className="text-foreground/70 text-xs">12:00 PM - 1:00 AM</p>
                  </div>
                </div>
              </div>

              {/* Nagarbahavi */}
              <div className="fade-in-up bg-gradient-to-br from-card to-secondary/30 rounded-xl p-6 border border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-foreground mb-1">
                    Nagarbahavi
                  </h4>
                  <p className="text-accent font-medium text-sm">Casual Corner</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-rose-600" />
                    <a href="tel:+919876543214" className="text-foreground/80 text-sm hover:text-accent transition-colors">
                      +91 98765 43214
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <p className="text-foreground/70 text-xs">12:00 PM - 1:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dubai Location */}
          <div className="fade-in-up bg-gradient-to-br from-card to-secondary/30 rounded-2xl p-8 border border-border/50 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                Dubai
              </h3>
              <p className="text-accent font-medium">Desert Oasis</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <p className="text-foreground/90">
                  Stories Brewery Dubai<br />
                  Downtown Dubai<br />
                  Dubai, UAE
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+919876543211" className="text-foreground font-semibold hover:text-accent transition-colors">
                  +91 98765 43211
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:dubai@storiesbrewery.com" className="text-foreground font-semibold hover:text-accent transition-colors">
                  dubai@storiesbrewery.com
                </a>
              </div>
            </div>

            <div className="bg-background/50 rounded-xl p-4">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <Clock className="w-4 h-4 mr-2 text-accent" />
                Opening Hours
              </h4>
              <div className="space-y-1 text-sm text-foreground/80">
                <p>Sunday - Thursday: 12:00 PM - 12:00 AM</p>
                <p>Friday - Saturday: 12:00 PM - 2:00 AM</p>
                <p className="text-accent font-medium">Kitchen closes 1 hour before</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="fade-in-up bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 text-center">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Premium Experience</h3>
            <p className="text-foreground/70 text-sm">World-class craft beer and exceptional service</p>
          </div>
          
          <div className="fade-in-up bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/20 text-center">
            <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Group Friendly</h3>
            <p className="text-foreground/70 text-sm">Perfect for celebrations and corporate events</p>
          </div>
          
          <div className="fade-in-up bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl p-6 border border-secondary/20 text-center">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
              <Utensils className="w-6 h-6 text-secondary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Gourmet Kitchen</h3>
            <p className="text-foreground/70 text-sm">Delicious food paired with craft beer</p>
          </div>
        </div>

        {/* Social Media & Contact */}
        <div className="text-center">
          <div className="fade-in-up mb-8">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Follow Our Story
            </h3>
            <p className="text-foreground/70 mb-6">
              Stay updated with our latest brews, events, and special offers
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://instagram.com/storiesbrewery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <InstagramIcon className="w-7 h-7 text-white" />
              </a>
              <a
                href="https://facebook.com/storiesbrewery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
              >
                <FacebookIcon className="w-7 h-7 text-white" />
              </a>
            </div>
          </div>

          <div className="fade-in-up">
            <p className="text-foreground/70 mb-6">
              Ready to experience the magic? Call us directly or get directions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-hero">
                <a href="tel:+919876543210">
                  Call Bengaluru
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://www.google.com/maps?sca_esv=239bf3b555b3847c&sxsrf=AE3TifOAn_9_LKqYHO2LRCKR9_a7BV6Ylg:1763987053025&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3N0b3JpZXMgYnRtMgoQIxiABBgnGIoFMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSOscUOUGWI8acAF4AJABAJgBwQKgAdESqgEHMC41LjUuMbgBA8gBAPgBAZgCDKACkBPCAgsQABiABBiwAxiiBMICCBAAGLADGO8FwgILEAAYsAMYogQYiQXCAgQQIxgnwgIMECMYgAQYExgnGIoFwgIKEAAYgAQYQxiKBcICDhAAGIAEGLEDGIMBGIoFwgILEAAYgAQYsQMYgwHCAgQQABgDwgIQEAAYgAQYsQMYgwEYigUYCsICBRAAGIAEwgINECMY8AUYgAQYJxiKBcICDxAjGPAFGIAEGBMYJxiKBcICBxAAGIAEGBPCAhIQIxjwBRiABBgTGCcYyQIYigXCAggQABgWGAoYHpgDAIgGAZAGBZIHBzEuNS41LjGgB8VKsgcHMC41LjUuMbgHiRPCBwUwLjUuN8gHLA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KU00Ly4kFa47MRRIcFTuLIol&daddr=29th+%E0%B2%AE%E0%B3%81%E0%B2%96%E0%B3%8D%E0%B2%AF+%E0%B2%B0%E0%B2%B8%E0%B3%8D%E0%B2%A4%E0%B3%86,+BTM+2nd+Stage,+Mahadeshwara+Nagar,+Stage+2,+%E0%B2%AC%E0%B2%BF.%E0%B2%9F%E0%B2%BF.%E0%B2%8E%E0%B2%AE%E0%B3%8D+%E0%B2%B2%E0%B3%87%E0%B2%AF%E0%B3%8C%E0%B2%9F%E0%B3%8D,+%E0%B2%AC%E0%B3%86%E0%B2%82%E0%B2%97%E0%B2%B3%E0%B3%82%E0%B2%B0%E0%B3%81,+%E0%B2%95%E0%B2%B0%E0%B3%8D%E0%B2%A8%E0%B2%BE%E0%B2%9F%E0%B2%95+560076"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;