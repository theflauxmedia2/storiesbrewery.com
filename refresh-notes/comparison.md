# Live vs refreshed — Stories Brewery & Kitchen

Compared: 2026-09-27  
Live: `https://storiesbrewery.com` (rendered in the browser, plus the raw HTML shell)  
Refreshed: production build served locally at `http://127.0.0.1:4174` (`npm run build` then `node scripts/serve-dist.mjs`)

Canonical style kept from the baseline: non-www, homepage with a trailing slash, inner pages without one.

A page fails if it 404s, the URL changes, the canonical is missing, or a `noindex` appears. Title and description changes below are the intended shortenings. H1 wording is unchanged.

| Page | Status | Live title | Refreshed title | Live description | Refreshed description | Canonical | H1 | HTTP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | PASS | Stories Brewery & Kitchen \| Best Brewpub & Rooftop Craft Beer in Bengaluru | Stories Brewery \| Best Brewpub & Rooftop Craft Beer, Bengaluru | Stories Brewery & Kitchen — BTM Layout's rooftop brewpub with in-house craft beer, nature-infused dining & live music. Reserve your table for date nights, parties & corporate events in Bangalore. | Stories Brewery & Kitchen in BTM Layout — a rooftop brewpub with in-house craft beer, nature-infused dining and live music in Bengaluru. Book a table. | `https://storiesbrewery.com/` | Stories Brewery and Kitchen | 200 |
| `/about` | PASS | About Us \| Stories Brewery & Kitchen — Bengaluru's Greenest Rooftop Brewery | About Us \| Bengaluru's Greenest Rooftop Brewery | Discover Stories Brewery & Kitchen — founded by Nerall Bhakai. 50,000+ plants, four themed zones (Amazon, Maze, Brew, Penthouse), craft beer & global cuisine in BTM Layout, Bengaluru. | Stories Brewery & Kitchen, founded by Nerall Bhakai. 50,000+ plants and four zones — Amazon, Maze, Brew and Penthouse — in BTM Layout, Bengaluru. | `https://storiesbrewery.com/about` | About Us | 200 |
| `/our-brews` | PASS | Craft Beer Menu \| Stories Brewery & Kitchen — In-House Brews Bengaluru | Craft Beer Menu \| Stories Brewery Brewpub, Bengaluru | Explore 12+ handcrafted beers at Stories Brewery BTM Layout — Wheat IPA, Jamun Witbier, Hefeweizen, ciders & seasonal brews. Bangalore's best craft beer menu at a rooftop microbrewery. | 12+ in-house beers at Stories Brewery, BTM Layout — Wheat IPA, Jamun Witbier, Hefeweizen, ciders and seasonal brews on a Bengaluru rooftop. | `https://storiesbrewery.com/our-brews` | Our Brews | 200 |
| `/media` | PASS | Press & Blog \| Stories Brewery & Kitchen — Media Coverage & Brewing Stories | Press & Blog \| Stories Brewery & Kitchen, Bengaluru | Read press features and blog posts from Stories Brewery & Kitchen — craft brewing insights, sustainability, food & beer pairing guides, and media coverage from Bengaluru's greenest brewpub. | Press features and blog posts from Stories Brewery & Kitchen — brewing, sustainability, and food and beer pairing at Bengaluru's greenest brewpub. | `https://storiesbrewery.com/media` | Media & Stories | 200 |

All four pages pass. None are `noindex`. Each rendered page has one canonical and one meta description.

## What else was checked

- `/about/` still returns 200 and the about document (no new public URL).
- `robots.txt` and `sitemap.xml` return 200. Sitemap locs are unchanged.
- Internal links `/`, `/about`, `/our-brews`, `/media` return 200.
- Reservation link, phone, maps link, and Instagram link are unchanged.
- Footer Privacy Policy, Terms of Service, and Careers still point at `#`. They did on the live site. They are not new pages.

## Raw HTML improvement

On the live site, every URL's first HTML response is the homepage shell (homepage title, description, and canonical). The refreshed build writes a matching shell per route, so the first response already has that page's title, description, and canonical.

## What a visitor would notice

- The browser tab title is shorter on every page.
- Headings that use a black weight of Playfair Display will look slightly heavier, because weight 900 is now loaded instead of a fake bold.
- After this branch is deployed, `https://www.storiesbrewery.com` will redirect to `https://storiesbrewery.com`. Today both return 200. `http://` already redirects to `https://`.
- Menu, slide, and Instagram controls have names for screen readers. The layout is the same.
- Page copy, prices, phone number, address, reservation link, and photos are unchanged.
