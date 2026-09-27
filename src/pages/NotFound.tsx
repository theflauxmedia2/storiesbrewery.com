import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found | Stories Brewery & Kitchen"
        description="The page you are looking for does not exist. Visit Stories Brewery & Kitchen — Bengaluru's rooftop craft brewery in BTM Layout."
        keywords="stories brewery, brewpub bangalore"
        noindex
      />
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-4">
          <h1 className="text-4xl font-heading font-bold mb-4 text-foreground">404</h1>
          <p className="text-xl text-foreground/70 mb-6">Oops! Page not found</p>
          <Link
            to="/"
            className="text-accent hover:text-accent/80 underline font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
