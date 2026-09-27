# Open ends — Stories Brewery & Kitchen

<!--
Tracked by Flaux HQ. Rules:
- One item per line: "- [ ] text #tags"
- Priority tags: #high #medium #low (default medium)
- Other tags allowed: #mobile #blog #homepage etc.
- When fixed: tick it "- [x]" or delete the line, in the same commit as the fix.
- Or write "closes OE: <item text>" in the commit message.
- Keep the section headings exactly as they are.
-->

## Bugs
- [ ] Unknown URLs such as /this-page-does-not-exist return HTTP 200 (soft 404) from public/.htaccess. Real pages must stay 200 #medium
- [ ] Footer Privacy Policy, Terms of Service, and Careers in src/components/Footer.tsx use href="#" and do not open a page #medium

## SEO
- [ ] Confirm founder spelling before changing copy: homepage AboutSection says Nerall Bakhai, /about says Nerall Bhakai #medium #homepage
- [ ] index.html has Google Ads tag AW-16510321577 and no GA4 property. Do not add one until the client confirms the measurement ID #medium

## Client inputs needed
- [ ] Confirm the published phone +91 98765 43210 in src/components/Footer.tsx and src/lib/seo.ts is the real BTM number. Do not replace it without confirmation #high
- [ ] Confirm opening hours in src/lib/seo.ts (Mon–Thu and Sun 12:00–01:00, Fri–Sat 12:00–02:00) match the venue #medium
- [ ] Confirm the address used in JSON-LD and the maps link: 29th Main Road, BTM 2nd Stage, Mahadeshwara Nagar, Stage 2, Bengaluru 560076 #medium
- [ ] Provide a privacy policy and terms of service so the footer links can point at real pages #medium
- [ ] Provide an SVG logo. Current marks are WebP files in public/logos/ #low
- [ ] Provide a food menu or price list if prices should be shown on /our-brews. None are published today #low #menu
- [ ] Provide testimonials if they should be added. None are on the site #low
- [ ] Share Google Business Profile access so hours, phone, and the map pin can be checked against the site #medium
- [ ] Share Hostinger DNS or hPanel access for the hosting relink #high
- [ ] Confirm Instagram https://instagram.com/storiesbrewery and Facebook https://facebook.com/storiesbrewery are the accounts to keep #low

## Features to build
- [ ] src/components/ContactSection.tsx, src/components/VibeSection.tsx, src/pages/Blog.tsx, and src/components/haha.tsx are not used by any route. Decide whether to publish or delete them. ContactSection contains extra phone numbers and dubai@storiesbrewery.com #medium

## Content
- [ ] No on-site reservation form. Bookings go to the ReserveGo widget in src/lib/constants.ts. Confirm that widget is still the correct booking URL #medium

## Performance & accessibility
- [ ] Seven react-refresh lint warnings remain in unused shadcn files under src/components/ui/ (badge, button, form, navigation-menu, sidebar, sonner, toggle) #low
- [ ] Set engines.node and add .nvmrc after the Node version for builds is confirmed. The live site is static files on Hostinger, and vercel.json does not set a Node version #medium

## Launch & infra
- [ ] Merge and deploy refresh-2026 after review. Production branch stays main #high
- [ ] Relink Hostinger to the new GitHub repo theflauxmedia2/storiesbrewery.com. Keep the production branch as main so nothing changes until that merge #high
- [ ] Verify Google Search Console for storiesbrewery.com and submit https://storiesbrewery.com/sitemap.xml after deploy #medium
- [ ] Check that the existing Google Ads tag AW-16510321577 still records after deploy. Do not change the ID #medium
- [ ] Confirm a ReserveGo test booking still reaches the venue after deploy. There is no site form and no form email recipient #medium
- [ ] Add uptime monitoring for https://storiesbrewery.com #medium
- [ ] Upgrade TypeScript from 6.0.3 to 7 only after typescript-eslint supports it. 7.0.2 was tried and reverted: the ESLint peer range is TypeScript below 6.1, and tsc rejected baseUrl #low
