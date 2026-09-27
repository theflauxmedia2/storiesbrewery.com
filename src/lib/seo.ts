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
    "Rooftop microbrewery and brewpub in BTM Layout, Bengaluru — craft beer, nature-infused dining, live music, and celebrations among 50,000+ plants.",
  telephone: "+91-9876543210",
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
    "Indian",
    "Continental",
    "Asian",
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
    title: "Stories Brewery | Best Brewpub & Rooftop Craft Beer, Bengaluru",
    description:
      "Stories Brewery & Kitchen in BTM Layout — a rooftop brewpub with in-house craft beer, nature-infused dining and live music in Bengaluru. Book a table.",
    keywords:
      "brewpub bangalore, brewery bangalore, microbrewery bangalore, craft beer bangalore, best brewery bangalore, rooftop brewery bangalore, rooftop bar bangalore, brewery restaurant bangalore, brewpub near me bangalore, brewery near btm layout, live music bar bangalore, party pub bangalore, nightlife bangalore, date night restaurant bangalore",
    ogType: "website",
    image: DEFAULT_OG_IMAGE,
  },
  about: {
    path: "/about",
    title: "About Us | Bengaluru's Greenest Rooftop Brewery",
    description:
      "Stories Brewery & Kitchen, founded by Nerall Bhakai. 50,000+ plants and four zones — Amazon, Maze, Brew and Penthouse — in BTM Layout, Bengaluru.",
    keywords:
      "about stories brewery, rooftop restaurant bangalore, nature dining bangalore, romantic dinner bangalore, date night bangalore, private dining bangalore, corporate party venue bangalore, birthday party pub bangalore, best rooftop restaurants bangalore",
    ogType: "website",
    image: "/stbr/8-1920w.webp",
  },
  ourBrews: {
    path: "/our-brews",
    title: "Craft Beer Menu | Stories Brewery Brewpub, Bengaluru",
    description:
      "12+ in-house beers at Stories Brewery, BTM Layout — Wheat IPA, Jamun Witbier, Hefeweizen, ciders and seasonal brews on a Bengaluru rooftop.",
    keywords:
      "craft beer menu bangalore, best craft beer bangalore, craft beer near me, wheat beer bangalore, witbier bangalore, craft cider bangalore, microbrewery beer menu, brewery bangalore beers, where to drink craft beer bangalore",
    ogType: "website",
    image: "/stdb/11-960w.webp",
  },
  media: {
    path: "/media",
    title: "Press & Blog | Stories Brewery & Kitchen, Bengaluru",
    description:
      "Press features and blog posts from Stories Brewery & Kitchen — brewing, sustainability, and food and beer pairing at Bengaluru's greenest brewpub.",
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
  if (!pathname || pathname === "/") return `${SITE_URL}/`;
  const clean = pathname.replace(/\/+$/, "");
  return `${SITE_URL}${clean}`;
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
    url: `${SITE_URL}/`,
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
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is Stories Brewery & Kitchen located?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stories Brewery & Kitchen is located in BTM Layout, Bengaluru (29th Main Road, BTM 2nd Stage, Karnataka 560076) — a rooftop brewpub with in-house craft beer and full restaurant menu.",
          },
        },
        {
          "@type": "Question",
          name: "Does Stories Brewery serve craft beer and food?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Stories is a brewpub with food in Bangalore — serving fresh in-house craft beers (Wheat IPA, Jamun Witbier, Hefeweizen, ciders and more) alongside a global multi-cuisine menu.",
          },
        },
        {
          "@type": "Question",
          name: "Can I book a table or host events at Stories Brewery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Reservations are available online. Stories is popular for date nights, birthday parties, corporate dinners, and private celebrations on its rooftop with live music and DJ nights on weekends.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Stories Brewery unique in Bengaluru?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stories features 50,000+ plants across four themed zones — Amazon, Maze, Brew, and Penthouse — making it one of Bengaluru's most distinctive nature-infused rooftop brewery experiences.",
          },
        },
      ],
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
