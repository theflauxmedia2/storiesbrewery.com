import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
  absoluteUrl,
  buildSchemaGraph,
  canonicalUrl,
} from "@/lib/seo";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  structuredData?: object[];
}

const SEOHead = ({
  title,
  description,
  keywords,
  image = "/stbr/1-1920w.webp",
  type = "website",
  noindex = false,
  structuredData = [],
}: SEOHeadProps) => {
  const { pathname } = useLocation();
  const canonical = canonicalUrl(pathname);
  const ogImage = absoluteUrl(image);
  const robots = noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const schema = buildSchemaGraph(pathname, structuredData);

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={SITE_NAME} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en-in" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:alt" content={`${SITE_NAME} — rooftop craft brewery in BTM Layout, Bengaluru`} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} — Bengaluru rooftop brewpub`} />

      {/* Local SEO */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bengaluru, BTM Layout" />
      <meta
        name="geo.position"
        content="12.9141;77.6101"
      />
      <meta name="ICBM" content="12.9141, 77.6101" />

      {/* PWA / mobile */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="apple-mobile-web-app-title" content={SITE_NAME} />

      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEOHead;
