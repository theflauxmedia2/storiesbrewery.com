import { RESERVATION_LINK } from "@/lib/constants";

export const SITE_URL = "https://storiesbrewery.com";
export const SITE_NAME = "Stories Brewery & Kitchen";
export const SITE_TAGLINE = "Bengaluru's Premier Rooftop Craft Brewery";
export const DEFAULT_OG_IMAGE = "/stbr/1-1920w.webp";
export const TWITTER_HANDLE = "@storiesbrewery";

export const BUSINESS = {
  name: SITE_NAME,
  legalName: "FOOD BUFFS LLP",
  description:
    "Rooftop brewery, brewpub and multi-cuisine restaurant in BTM Layout, Bengaluru — in-house craft beer with North Indian, Continental, Chinese, Pan Asian, pizza, pasta, sushi and dimsum, served among 50,000+ plants.",
  telephone: "+91-80-46809326",
  email: "hello@storiesbrewery.com",
  foundingDate: "2019",
  priceRange: "₹₹",
  address: {
    streetAddress:
      "29th Main Road, BTM 2nd Stage, Mahadeshwara Nagar, Stage 2",
    addressLocality: "BTM Layout",
    addressRegion: "Karnataka",
    postalCode: "560076",
    addressCountry: "IN",
  },
  geo: {
    latitude: 12.9141,
    longitude: 77.6101,
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Stories+Brewery+%26+Kitchen+BTM+Layout+Bengaluru",
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "12:00", closes: "01:00" },
    { days: ["Friday", "Saturday"], opens: "12:00", closes: "02:00" },
    { days: ["Sunday"], opens: "12:00", closes: "01:00" },
  ],
  sameAs: [
    "https://www.instagram.com/storiesbrewery",
    "https://www.facebook.com/storiesbrewery",
  ],
  cuisines: [
    "North Indian",
    "Continental",
    "Chinese",
    "Asian",
    "Pan Asian",
    "Italian",
    "Pizza",
    "Pasta",
    "Japanese",
    "Sushi",
    "Dim Sum",
    "Bar Food",
    "Craft Beer",
  ],
  amenities: [
    "Rooftop seating",
    "Live music",
    "DJ nights",
    "Pet-friendly",
    "Private dining",
    "Corporate events",
    "Reservations",
  ],
} as const;

export type PageSeoKey = "home" | "about" | "ourBrews" | "media";

export const PAGE_SEO: Record<
  PageSeoKey,
  {
    path: string;
    title: string;
    description: string;
    keywords: string;
    ogType: "website" | "article";
    image?: string;
  }
> = {
  home: {
    path: "/",
    title: `Best Brewpub & Rooftop Restaurant in BTM Layout, Bangalore | ${SITE_NAME}`,
    description:
      "Stories Brewery & Kitchen — the best brewery & rooftop restaurant in BTM Layout, Bengaluru. In-house craft beer with North Indian, Continental, Chinese, Pan Asian, pizza, pasta, sushi & dimsum. Reserve a table.",
    keywords:
      "best restaurants in bangalore, best restaurant in btm layout, restaurants in btm layout, best dining in bangalore, best brewery in bangalore, brewery in btm layout, best brewpub in bangalore, brewpub in btm layout, brewpub near me, brewery near me, brewery restaurant near me, rooftop restaurant in btm layout, rooftop brewery in bangalore, north indian restaurant in btm layout, continental restaurant in bangalore, chinese restaurant in btm layout, pan asian restaurant in bangalore, pizza restaurant in btm layout, pasta restaurant in bangalore, sushi restaurant in bangalore, dimsum restaurant in btm layout",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  about: {
    path: "/about",
    title: `About Us | Best Rooftop Restaurant & Brewpub in Bengaluru — ${SITE_NAME}`,
    description:
      "Discover Stories Brewery & Kitchen — a rooftop restaurant & rooftop brewpub in BTM Layout, Bengaluru with 50,000+ plants, four themed zones, craft beer and North Indian, Continental, Asian, pizza, pasta, sushi & dimsum.",
    keywords:
      "about stories brewery, best rooftop restaurant in bangalore, rooftop restaurant in btm layout, rooftop dining in bangalore, rooftop dining in btm layout, best rooftop brewery in bengaluru, rooftop brewpub in bangalore, rooftop brewpub in btm, rooftop restaurant near me, best dining in btm layout, private dining bangalore, corporate party venue bangalore",
    ogType: "website",
    image: "/stbr/8-1920w.webp",
  },
  ourBrews: {
    path: "/our-brews",
    title: `Craft Beer Menu | Best Craft Brewery in Bangalore — ${SITE_NAME}`,
    description:
      "Explore 12+ handcrafted beers at Stories, the best craft brewery in BTM Layout, Bengaluru — Wheat IPA, Jamun Witbier, Hefeweizen, ciders & seasonal brews, poured fresh at our rooftop brewery.",
    keywords:
      "craft brewery in bangalore, best craft brewery in bengaluru, best craft brewery in btm layout, craft brewery near me, best craft brewery near me, craft beer menu bangalore, craft beer near me, brewery in bengaluru, best brewery near btm layout, microbrewery beer menu",
    ogType: "website",
    image: "/stdb/11-960w.webp",
  },
  media: {
    path: "/media",
    title: `Press & Blog | ${SITE_NAME} — Media Coverage & Brewing Stories`,
    description:
      "Read press features and blog posts from Stories Brewery & Kitchen — craft brewing insights, sustainability, food & beer pairing guides, and media coverage from Bengaluru's greenest brewpub.",
    keywords:
      "stories brewery press, stories brewery blog, craft beer blog bangalore, brewery media coverage, stories bar kitchen review, microbrewery bangalore news",
    ogType: "article",
    image: "/blogs/1-800w.webp",
  },
};

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function canonicalUrl(pathname: string): string {
  if (pathname === "/") return SITE_URL;
  return `${SITE_URL}${pathname}`;
}

function openingHoursSpecification() {
  return BUSINESS.openingHours.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: slot.days,
    opens: slot.opens,
    closes: slot.closes,
  }));
}

export function buildOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    url: SITE_URL,
    logo: absoluteUrl("/logos/stbc.webp"),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    description: BUSINESS.description,
    email: BUSINESS.email,
    telephone: BUSINESS.telephone,
    foundingDate: BUSINESS.foundingDate,
    sameAs: BUSINESS.sameAs,
  };
}

export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: BUSINESS.description,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: RESERVATION_LINK,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Table Reservation at Stories Brewery & Kitchen",
      },
    },
  };
}

export function buildLocalBusinessSchema(pageUrl: string) {
  return {
    "@type": ["Restaurant", "FoodEstablishment", "BarOrPub"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    description: BUSINESS.description,
    url: pageUrl,
    image: [
      absoluteUrl("/stbr/1-1920w.webp"),
      absoluteUrl("/stbr/8-1920w.webp"),
      absoluteUrl("/logos/stbc.webp"),
    ],
    logo: absoluteUrl("/logos/stbc.webp"),
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    servesCuisine: BUSINESS.cuisines,
    address: {
      "@type": "PostalAddress",
      ...BUSINESS.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    hasMap: BUSINESS.mapsUrl,
    openingHoursSpecification: openingHoursSpecification(),
    acceptsReservations: true,
    menu: absoluteUrl("/our-brews"),
    sameAs: BUSINESS.sameAs,
    amenityFeature: BUSINESS.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
  };
}

export function buildBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildBeerItemListSchema() {
  const beers = [
    "Wheat IPA",
    "Jamun Witbier",
    "Stories Hefeweizen",
    "Apple Cider",
    "Mango Cider",
    "Belgian Wit",
    "Triple Wit",
    "Kölsch",
    "Ginger & Spice Wheat Ale",
    "Maibock",
    "Lichtenhainer Smoked Wheat Beer",
    "Abbey Tripel",
  ];

  return {
    "@type": "ItemList",
    name: "Stories Brewery Craft Beer Menu",
    description: "In-house craft beers brewed at Stories Brewery & Kitchen, BTM Layout, Bengaluru.",
    numberOfItems: beers.length,
    itemListElement: beers.map((name, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name,
        category: "Craft Beer",
        brand: { "@type": "Brand", name: SITE_NAME },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStoreOnly",
          url: absoluteUrl("/our-brews"),
        },
      },
    })),
  };
}

export function buildAboutPageSchema() {
  return {
    "@type": "AboutPage",
    "@id": absoluteUrl("/about"),
    url: absoluteUrl("/about"),
    name: `About ${SITE_NAME}`,
    description: PAGE_SEO.about.description,
    mainEntity: { "@id": `${SITE_URL}/#organization` },
  };
}

export function buildCollectionPageSchema() {
  return {
    "@type": "CollectionPage",
    "@id": absoluteUrl("/media"),
    url: absoluteUrl("/media"),
    name: `${SITE_NAME} — Press & Blog`,
    description: PAGE_SEO.media.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

// Rendered visibly on the home page and mirrored in FAQPage schema — keep in sync.
export const HOME_FAQ: Array<{ question: string; answer: string }> = [
  {
    question: "Where is Stories Brewery & Kitchen located?",
    answer:
      "Stories Brewery & Kitchen is a rooftop brewery and restaurant in BTM Layout, Bengaluru (29th Main Road, BTM 2nd Stage, Karnataka 560076). If you're searching for a brewery near BTM Layout or a brewpub near me in South Bangalore, we're a short drive from HSR Layout, Jayanagar, JP Nagar and Koramangala.",
  },
  {
    question: "Is Stories one of the best restaurants in BTM Layout?",
    answer:
      "Stories is one of the best restaurants in BTM Layout and a favourite for dining in Bangalore — a 700+ seat rooftop restaurant with in-house craft beer, a multi-cuisine kitchen, four themed zones and 50,000+ plants.",
  },
  {
    question: "What cuisines does Stories Brewery serve?",
    answer:
      "Our kitchen serves North Indian, Continental, Chinese and Pan Asian food, pizza, pasta, sushi and dimsum — all designed to pair with our fresh craft beer.",
  },
  {
    question: "Is Stories a rooftop brewpub?",
    answer:
      "Yes. Stories is a rooftop brewpub and rooftop brewery in Bengaluru, brewing craft beer in-house and serving it on an open-air rooftop with rooftop dining across the Amazon, Maze, Brew and Penthouse zones.",
  },
  {
    question: "Can I book a table or host events at Stories Brewery?",
    answer:
      "Yes. Reservations are available online. Stories is popular for date nights, birthday parties, corporate dinners, and private celebrations on its rooftop with live music and DJ nights on weekends.",
  },
];

export function buildSchemaGraph(
  pathname: string,
  extra: object[] = []
): { "@context": string; "@graph": object[] } {
  const pageUrl = canonicalUrl(pathname);
  const graph: object[] = [
    buildOrganizationSchema(),
    buildWebSiteSchema(),
    buildLocalBusinessSchema(pageUrl),
  ];

  if (pathname === "/") {
    graph.push({
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: PAGE_SEO.home.title,
      description: PAGE_SEO.home.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#localbusiness` },
      primaryImageOfPage: absoluteUrl(DEFAULT_OG_IMAGE),
    });
    graph.push({
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: HOME_FAQ.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  if (pathname === "/about") {
    graph.push(buildAboutPageSchema());
    graph.push(
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ])
    );
  }

  if (pathname === "/our-brews") {
    graph.push(buildBeerItemListSchema());
    graph.push(
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Our Brews", path: "/our-brews" },
      ])
    );
  }

  if (pathname === "/media") {
    graph.push(buildCollectionPageSchema());
    graph.push(
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Media", path: "/media" },
      ])
    );
  }

  return {
    "@context": "https://schema.org",
    "@graph": [...graph, ...extra],
  };
}
