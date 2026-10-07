import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { InstagramIcon } from "@/components/icons/SocialIcons";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/BrandLogo";
import { RESERVATION_LINK } from "@/lib/constants";

const Footer = () => {
  const currentYear = 2026;

  const locations = [
    { name: "BTM Layout", phone: "080-46809326" }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Brews", href: "/our-brews" },
    { name: "Media", href: "/media" }
  ];

  return (
    <footer className="bg-gradient-to-br from-background via-secondary/10 to-background border-t border-border/30">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <BrandLogo size="lg" className="mb-6" />
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                Experience nature-infused dining and craft brewing excellence across multiple locations. 
                Where every visit tells a new story.
              </p>
              <p className="text-foreground/60 text-sm leading-relaxed">
                Looking for a <strong>brewpub near me</strong> or the <strong>best restaurant in BTM Layout</strong>? Stories is a <strong>rooftop brewery in Bangalore</strong> serving craft beer with North Indian, Continental, Chinese, Pan Asian, pizza, pasta, sushi and dimsum.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="space-y-4">
              <Button className="btn-hero w-full group" asChild>
                <a
                  href={RESERVATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Make Reservation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button className="w-full text-black" asChild>
                <a
                  href="https://www.google.com/maps?sca_esv=239bf3b555b3847c&sxsrf=AE3TifOAn_9_LKqYHO2LRCKR9_a7BV6Ylg:1763987053025&uact=5&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3N0b3JpZXMgYnRtMgoQIxiABBgnGIoFMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMggQABiABBjLATIIEAAYgAQYywEyCBAAGIAEGMsBMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeSOscUOUGWI8acAF4AJABAJgBwQKgAdESqgEHMC41LjUuMbgBA8gBAPgBAZgCDKACkBPCAgsQABiABBiwAxiiBMICCBAAGLADGO8FwgILEAAYsAMYogQYiQXCAgQQIxgnwgIMECMYgAQYExgnGIoFwgIKEAAYgAQYQxiKBcICDhAAGIAEGLEDGIMBGIoFwgILEAAYgAQYsQMYgwHCAgQQABgDwgIQEAAYgAQYsQMYgwEYigUYCsICBRAAGIAEwgINECMY8AUYgAQYJxiKBcICDxAjGPAFGIAEGBMYJxiKBcICBxAAGIAEGBPCAhIQIxjwBRiABBgTGCcYyQIYigXCAggQABgWGAoYHpgDAIgGAZAGBZIHBzEuNS41LjGgB8VKsgcHMC41LjUuMbgHiRPCBwUwLjUuN8gHLA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KU00Ly4kFa47MRRIcFTuLIol&daddr=29th+%E0%B2%AE%E0%B3%81%E0%B2%96%E0%B3%8D%E0%B2%AF+%E0%B2%B0%E0%B2%B8%E0%B3%8D%E0%B2%A4%E0%B3%86,+BTM+2nd+Stage,+Mahadeshwara+Nagar,+Stage+2,+%E0%B2%AC%E0%B2%BF.%E0%B2%9F%E0%B2%BF.%E0%B2%8E%E0%B2%AE%E0%B3%8D+%E0%B2%B2%E0%B3%87%E0%B2%AF%E0%B3%8C%E0%B2%9F%E0%B3%8D,+%E0%B2%AC%E0%B3%86%E0%B2%82%E0%B2%97%E0%B2%B3%E0%B3%82%E0%B2%B0%E0%B3%81,+%E0%B2%95%E0%B2%B0%E0%B3%8D%E0%B2%A8%E0%B2%BE%E0%B2%9F%E0%B2%95+560076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-heading font-bold text-foreground mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-center lg:text-left">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-foreground/70 hover:text-accent transition-all text-sm font-medium hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Locations */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-xl font-heading font-bold text-foreground mb-6">
              Our Locations
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-center lg:text-left">
              {locations.map((location, index) => (
                <div key={index} className="text-sm">
                  <p className="text-foreground/80 font-medium mb-2">{location.name}</p>
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <a 
                      href="tel:+918046809326"
                      onClick={() => window.gtag_report_conversion?.()}
                      className="text-foreground/60 hover:text-accent transition-colors text-xs"
                    >
                      {location.phone}
                    </a>
                    <a
                      href="https://instagram.com/storiesbrewery"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-5 h-5 bg-black rounded flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <InstagramIcon className="w-2.5 h-2.5 text-white" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-foreground/60">
                © {currentYear} Stories Brewery & Kitchen. All rights reserved.
              </p>
              <p className="text-xs text-foreground/50">
FOOD BUFFS LLP.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-xs text-foreground/60">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-accent transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;