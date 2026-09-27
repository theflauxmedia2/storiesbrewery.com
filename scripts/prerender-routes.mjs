import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const dist = path.join(root, "dist");
const seoSrc = fs.readFileSync(path.join(root, "src/lib/seo.ts"), "utf8");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const pages = [
  {
    file: "index.html",
    path: "/",
    title: "Stories Brewery | Best Brewpub & Rooftop Craft Beer, Bengaluru",
    description:
      "Stories Brewery & Kitchen in BTM Layout — a rooftop brewpub with in-house craft beer, nature-infused dining and live music in Bengaluru. Book a table.",
    image: "https://storiesbrewery.com/stbr/1-1920w.webp",
    ogType: "website",
  },
  {
    file: "about.html",
    path: "/about",
    title: "About Us | Bengaluru's Greenest Rooftop Brewery",
    description:
      "Stories Brewery & Kitchen, founded by Nerall Bhakai. 50,000+ plants and four zones — Amazon, Maze, Brew and Penthouse — in BTM Layout, Bengaluru.",
    image: "https://storiesbrewery.com/stbr/8-1920w.webp",
    ogType: "website",
  },
  {
    file: "our-brews.html",
    path: "/our-brews",
    title: "Craft Beer Menu | Stories Brewery Brewpub, Bengaluru",
    description:
      "12+ in-house beers at Stories Brewery, BTM Layout — Wheat IPA, Jamun Witbier, Hefeweizen, ciders and seasonal brews on a Bengaluru rooftop.",
    image: "https://storiesbrewery.com/stdb/11-960w.webp",
    ogType: "website",
  },
  {
    file: "media.html",
    path: "/media",
    title: "Press & Blog | Stories Brewery & Kitchen, Bengaluru",
    description:
      "Press features and blog posts from Stories Brewery & Kitchen — brewing, sustainability, and food and beer pairing at Bengaluru's greenest brewpub.",
    image: "https://storiesbrewery.com/blogs/1-800w.webp",
    ogType: "article",
  },
];

for (const page of pages) {
  if (!seoSrc.includes(page.title) || !seoSrc.includes(page.description)) {
    console.error(`Prerender copy is out of sync with src/lib/seo.ts for ${page.path}`);
    process.exit(1);
  }
}

function replaceAttr(html, attr, name, value) {
  const pattern = new RegExp(
    `(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(")`,
    "i"
  );
  if (!pattern.test(html)) {
    throw new Error(`Missing meta ${attr}="${name}"`);
  }
  return html.replace(pattern, `$1${value}$2`);
}

function render(page) {
  const canonical =
    page.path === "/"
      ? "https://storiesbrewery.com/"
      : `https://storiesbrewery.com${page.path}`;
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(page.title)}</title>`);
  html = replaceAttr(html, "name", "description", escapeHtml(page.description));
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  html = html.replace(
    /<link rel="alternate" hreflang="en-in" href="[^"]*"\s*\/?>/,
    `<link rel="alternate" hreflang="en-in" href="${canonical}" />`
  );
  html = html.replace(
    /<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/?>/,
    `<link rel="alternate" hreflang="x-default" href="${canonical}" />`
  );
  html = replaceAttr(html, "property", "og:title", escapeHtml(page.title));
  html = replaceAttr(html, "property", "og:description", escapeHtml(page.description));
  html = replaceAttr(html, "property", "og:url", canonical);
  html = replaceAttr(html, "property", "og:type", page.ogType);
  html = replaceAttr(html, "property", "og:image", page.image);
  html = replaceAttr(html, "name", "twitter:title", escapeHtml(page.title));
  html = replaceAttr(html, "name", "twitter:description", escapeHtml(page.description));
  html = replaceAttr(html, "name", "twitter:image", page.image);
  return html;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

for (const page of pages) {
  fs.writeFileSync(path.join(dist, page.file), render(page));
  console.log(`prerendered ${page.file}`);
}
