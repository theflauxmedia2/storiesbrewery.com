# Live baseline — Stories Brewery & Kitchen

Recorded: 2026-09-27  
Production domain: `https://storiesbrewery.com` (non-www)  
Source of domain: `vercel.json` host redirect, `src/lib/seo.ts` `SITE_URL`, `public/sitemap.xml`, `index.html` canonical. Confirmed by fetching the live site.

Commit this baseline was taken against: `f46913cb30957dfa35f84a143807706ab71ad85f` (`main`)

## Stack

| Item | Value |
| --- | --- |
| Framework | Vite 8 + React 19 + TypeScript SPA (`react-router-dom` 7) |
| UI | Tailwind CSS 4, shadcn/ui |
| Package manager | npm (`package-lock.json`, lockfileVersion 3) |
| Node used for this baseline | v24.17.0 (local). No `engines` field and no `.nvmrc`. |
| Live hosting | Hostinger (`platform: hostinger`, `panel: hpanel`, `server: hcdn`). Static files. |
| Config present but not serving live | `vercel.json` (`@vercel/static-build`, `distDir: dist`, SPA rewrite, www→apex 301). That www redirect is **not** what Hostinger does today. |
| Apache | `public/.htaccess` is the SPA fallback copied into `dist` on build. Root `.htaccess` is a reference copy. |

## Public routes

From `src/App.tsx` and the live sitemap:

| Path | In sitemap |
| --- | --- |
| `/` | yes |
| `/about` | yes |
| `/our-brews` | yes |
| `/media` | yes |

`src/pages/Blog.tsx` exists but is not routed. Unknown URLs fall through to `NotFound` in the client; the server still returns HTTP 200 (soft 404).

## Redirects (live)

| Request | Result |
| --- | --- |
| `http://storiesbrewery.com/` | 301 → `https://storiesbrewery.com/` |
| `http://www.storiesbrewery.com/` | 301 → `https://www.storiesbrewery.com/` (HTTPS only; stays on www) |
| `https://www.storiesbrewery.com/` | **200** (no redirect to apex). Same HTML shell. Canonical in that HTML is `https://storiesbrewery.com/`. |
| `https://storiesbrewery.com` (no slash) | 200 |
| `https://storiesbrewery.com/about` | 200 |
| `https://storiesbrewery.com/about/` | 200 (no slash redirect; same SPA shell) |
| `https://storiesbrewery.com/this-page-does-not-exist` | 200 (soft 404) |

Trailing-slash style in the sitemap and in client canonicals for inner pages: **no trailing slash**. Homepage canonical in the static HTML: `https://storiesbrewery.com/` (with slash).

## Raw HTML (curl, before JavaScript)

Every HTML URL returns the same `index.html` (4280 bytes, `last-modified: Wed, 29 Jul 2026 11:39:13 GMT`). There is no H1 in the raw HTML.

| URL | HTTP | Title | Meta description | Canonical | Robots | H1 |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 200 | Stories Brewery & Kitchen \| Best Brewpub & Rooftop Craft Beer in Bengaluru | Stories Brewery & Kitchen — BTM Layout's rooftop brewpub with in-house craft beer, nature-infused dining & live music. Reserve your table for date nights, parties & corporate events in Bangalore. | `https://storiesbrewery.com/` | `index, follow, max-image-preview:large` | *(none in raw HTML)* |
| `/about` | 200 | same as `/` | same as `/` | `https://storiesbrewery.com/` | same as `/` | *(none)* |
| `/our-brews` | 200 | same as `/` | same as `/` | `https://storiesbrewery.com/` | same as `/` | *(none)* |
| `/media` | 200 | same as `/` | same as `/` | `https://storiesbrewery.com/` | same as `/` | *(none)* |

No `noindex` in the raw HTML of any production URL.

## Rendered DOM (after JavaScript)

Helmet updates `document.title` and appends a second description, robots, and canonical. It does **not** remove the homepage tags from `index.html`, so each inner page has two of each.

| Page | HTTP | Rendered title | Rendered description (Helmet) | Canonicals in DOM | Robots | H1 |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 200 | Stories Brewery & Kitchen \| Best Brewpub & Rooftop Craft Beer in Bengaluru | Stories Brewery & Kitchen — BTM Layout's rooftop brewpub with in-house craft beer, nature-infused dining & live music. Reserve your table for date nights, parties & corporate events in Bangalore. | Static: `https://storiesbrewery.com/` | `index, follow, max-image-preview:large` (static; Helmet also sets a longer robots value on inner pages) | Stories Brewery and Kitchen |
| `/about` | 200 | About Us \| Stories Brewery & Kitchen — Bengaluru's Greenest Rooftop Brewery | Discover Stories Brewery & Kitchen — founded by Nerall Bhakai. 50,000+ plants, four themed zones (Amazon, Maze, Brew, Penthouse), craft beer & global cuisine in BTM Layout, Bengaluru. | 1. `https://storiesbrewery.com/` 2. `https://storiesbrewery.com/about` | 1. `index, follow, max-image-preview:large` 2. `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` | About Us |
| `/our-brews` | 200 | Craft Beer Menu \| Stories Brewery & Kitchen — In-House Brews Bengaluru | Explore 12+ handcrafted beers at Stories Brewery BTM Layout — Wheat IPA, Jamun Witbier, Hefeweizen, ciders & seasonal brews. Bangalore's best craft beer menu at a rooftop microbrewery. | 1. `https://storiesbrewery.com/` 2. `https://storiesbrewery.com/our-brews` | same pair as `/about` | Our Brews |
| `/media` | 200 | Press & Blog \| Stories Brewery & Kitchen — Media Coverage & Brewing Stories | Read press features and blog posts from Stories Brewery & Kitchen — craft brewing insights, sustainability, food & beer pairing guides, and media coverage from Bengaluru's greenest brewpub. | 1. `https://storiesbrewery.com/` 2. `https://storiesbrewery.com/media` | same pair as `/about` | Media & Stories |

`html lang` after render: `en-IN`. No `noindex` on these four pages.

Homepage Helmet canonical in code (`canonicalUrl("/")`) is `https://storiesbrewery.com` (no slash), which disagrees with the static tag and the sitemap (`https://storiesbrewery.com/`).

## robots.txt

`https://storiesbrewery.com/robots.txt` — HTTP 200

```
User-agent: *
Allow: /

# Block non-content paths
Disallow: /api/

Sitemap: https://storiesbrewery.com/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /
```

`Disallow: /api/` does not match a live page. There is no `/api` route.

## sitemap.xml

`https://storiesbrewery.com/sitemap.xml` — HTTP 200. Matches `public/sitemap.xml`.

| loc | lastmod |
| --- | --- |
| `https://storiesbrewery.com/` | 2026-07-29 |
| `https://storiesbrewery.com/about` | 2026-07-29 |
| `https://storiesbrewery.com/our-brews` | 2026-07-29 |
| `https://storiesbrewery.com/media` | 2026-07-29 |

## Code baseline (this commit, before dependency changes)

| Check | Result |
| --- | --- |
| `npm ci` | **Fails.** `package.json` and `package-lock.json` are out of sync. npm reports `Missing: react-is@19.3.0 from lock file`. |
| `npm run lint` | **Fails** (exit 1) with existing `node_modules`. 3 errors, 7 warnings, all in shadcn UI / `use-mobile.tsx` (react-hooks `set-state-in-effect`, `purity`, react-refresh warnings). |
| `npm run build` | **Succeeds** with existing `node_modules` (Vite 8). Output: `dist/index.html`, CSS ~124 kB, JS ~494 kB. |
| Tests | No test script. |

## Environment

No `import.meta.env` or `process.env` usage. No `.env` files in the tree or in git history. A production build does not need env values.

Public IDs left untouched (not secrets): Google tag `AW-16510321577` in `index.html`; ReserveGo widget URL in `src/lib/constants.ts`.

## Secrets scan

Scanned the working tree and git history for `.env` files, private keys, AWS/Stripe/Google/GitHub/Slack tokens, Supabase/Firebase keys, and SMTP passwords.

**Nothing found.** No history rewrite. No keys to rotate from this scan.

## Node version for hosting

Live site is static HTML on Hostinger. `vercel.json` does not set a Node version. **ASK:** which Node version should `engines` and `.nvmrc` pin? Not set in this commit.
