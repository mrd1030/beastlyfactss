# Shop plan: moving the care packages off Gumroad

Branch: `claude/carepackage-shop-stripe-0trasu`. Nothing here merges to main
until a package has been bought end to end on the branch build in the
Sandbox, and then once more with a real card.

Read `docs/STOREFRONT.md` first. It documents the plumbing that already
exists and the go-live checklist. This file is only the work that is left.

## Where things stand today

Already built and proven (Hamster, Stripe Sandbox, 5 September 2026):

| Piece | State |
| --- | --- |
| Checkout, webhook, download routes in `public/_worker.js` | Done, tested |
| `purchases` and `care_package_downloads` tables, private bucket | Done, applied |
| Thanks page, buyer library with emailed code sign-in | Done, tested |
| Custom SMTP on Supabase | Done |
| Store page, Why we exist, FAQ (the Gumroad `store.html` and `profile.html`) | Already ported to `/care-packages/store/`, `/why-we-exist/`, `/faq/` |
| Prerender and sitemap picking up `storefront: 'stripe'` packages | Done, automatic |
| Product page at `/care-packages/<id>/` | Exists, but plain. This is the gap |

Not done, and each one is a real blocker for real sales:

- Turnstile on the library sign-in (three steps, in order, in STOREFRONT.md).
- Supabase Auth Site URL and Redirect URLs set to beastlyfacts.com.
- Live Stripe keys, a live webhook endpoint, live prices, public business
  details on the live account.
- One Stripe product and price per package. Only the Hamster has one, and only
  in the Sandbox.
- PDFs uploaded to the `care-packages` bucket. Only the Hamster is there.

## The edition problem, decide this first

The nine Gumroad listings sell the old editions: v1.0 or v2.0, 20 to 22 pages.
The `rebuilt/` folder holds v2.1 to v3.1 of every one of them, 35 to 42 pages,
and those are what a Stripe buyer should get. So the move is not a straight
port of the Gumroad pages. Every "22-page" in the catalog blurb, in the Gumroad
hero copy and in the "What's inside" eyebrow is wrong for the file that will
be sold, and the interior preview images on Gumroad's CDN show the old layout.

Decision taken for this plan: sell the rebuilt editions, update `pages` and
`version` in the catalog to match the PDF in `rebuilt/`, and render fresh
preview images from the `source/` HTML. Do not reuse the Gumroad preview
images.

Current editions, from the source HTML, which is what `rebuilt/` now holds
for every package (six were re-rendered on 6 September 2026 because the source
had moved past the PDF):

| Package | File | Pages |
| --- | --- | --- |
| axolotl | Axolotl_Care_Package_v2.2.pdf | 42 |
| ball-python | Ball_Python_Care_Package_v2.2.pdf | 34 |
| bearded-dragon | Bearded_Dragon_Care_Package_v3.1.pdf | 35 |
| betta-fish | Betta_Fish_Care_Package_v2.2.pdf | 37 |
| budgie | Budgie_Care_Package_v2.1.pdf | 40 |
| crested-gecko | Crested_Gecko_Care_Package_v2.1.pdf | 34 |
| goldfish | Goldfish_Care_Package_v2.1.pdf | 40 |
| guinea-pig | Guinea_Pig_Care_Package_v2.1.pdf | 41 |
| hamster | Hamster_Care_Package_v2.3.pdf | 37 |
| leopard-gecko | Leopard_Gecko_Care_Package_v2.1.pdf | 35 |
| lovebird | Lovebird_Care_Package_v2.1.pdf | 39 |
| rabbit | Rabbit_Care_Package_v2.1.pdf | 40 |
| russian-tortoise | Russian_Tortoise_Care_Package_v2.2.pdf | 38 |
| tarantula | Tarantula_Care_Package_v2.3.pdf | 44 |

The catalog carries these numbers. When a source is edited again, re-render
with `_render.mjs`, move the old PDF to `rebuilt/past versions/` with a row in
its README, update `pages`, `version` and `versionDate` in the catalog, the
`edition` in the Worker's mirror, and re-upload the bucket file.

Two more exist as finished PDFs with cover art but are not in the catalog at
all: cockatiel (v1.1, 40 pages) and cockatoo (v1.1, 45 pages). Adding them is
two catalog entries plus the per-package work below. Optional, but cheap once
the template is built.

## Work, in order

### 1. Product page template in the landing page style

One React page, `src/pages/CarePackageProduct.jsx`, rebuilt to the Gumroad
skeleton. Section order, same for every package:

1. Hero: themed gradient, eyebrow, hook headline, one paragraph, price button,
   three tick bullets, cover art on a slight rotation, SVG wave.
2. Contrast pair: "Care-sheet roulette" (four frustrations) against "This
   guide" (four answers).
3. What's inside: six cards, emoji, heading, one line.
4. Preview carousel: five interior pages, snap scroll, arrows and dots.
5. Who this is for / What it's not: two columns on a dark panel.
6. Final CTA, then the existing "free guide is still free" block and FAQ link.

Keep from the current page: the Product schema, canonical and OG tags, the
edition line, the library sentence, the free-guide cross link. Those are what
make it rank and what Gumroad never had.

Implementation rules, all from STOREFRONT.md phase 2 notes, restated here so
nobody rediscovers them:

- Themes are CSS custom properties on the page wrapper, from a new
  `src/lib/data/carePackageThemes.js` keyed by package id. No Tailwind config
  changes. Tailwind classes use arbitrary values against the variables, for
  example `bg-[var(--cp-accent)]`.
- One keyframe set per theme, defined in a single CSS file
  `src/styles/care-package-themes.css` (or inside the theme module as a
  `<style>` string, whichever the build prefers). Honor
  `prefers-reduced-motion`.
- Reveal-on-scroll starts visible. Add the animation only after mount, and
  skip it entirely under `window.__IS_PRERENDER__`. A prerendered page with
  `opacity: 0` sections is invisible to Google.
- The carousel is a small component, `CarePackagePreviewCarousel.jsx`, using
  refs, not document ids, so two never collide.
- Buy button stays `CarePackageBuyButton`. No `data-gumroad-*`, no
  `window.top`, no Tailwind CDN, no Fredoka import (the site's display font
  variable already covers it).
- Dark mode via the site's existing dark class, mapping each theme's dark
  colors to a second set of variables.

Do this on the Hamster first. It is the one package with a Sandbox price, a
bucket upload and a transcribed contents list, so it can be bought the moment
the page exists.

### 2. Per-package data

Extend each catalog entry in `src/lib/data/carePackages.js` with what the
template needs. Keep the catalog as catalog; the long copy lives in a sibling
file `src/lib/data/carePackageCopy.js` keyed by id, so the catalog stays
scannable.

Per package:

| Field | Source |
| --- | --- |
| `hook` (headline) | The nine: lift from `.gumroad-pages/products/<id>.html`. Others: write |
| `heroParagraph` | Same, but fix the page count |
| `heroTicks` (3) | Same |
| `roulette` (4) and `answers` (4) | Same |
| `inside` (6 cards: emoji, title, line) | Same, check against the rebuilt contents page |
| `previewHeadline` | Same |
| `whoFor` (3) and `whatNot` (3) | Same |
| `contents` (section by section) | Parsed from the `.toc` block on page 2 of `content/CAREPACKAGE Guides/source/<id>.html`: each `toc-label` is a section (drop the "Section 0N ·" prefix), each table row an item. Done for all 14 |
| `pages`, `version`, `versionDate` | From the rebuilt PDF |
| `cover` | `/assets/guides/<id>.jpg`, the guide hero. The Gumroad `image` and `thumbnail` fields are gone from the catalog; the guide page and article block fall back to `cover` |
| `previews` (5 paths) | Self-hosted, see step 3 |
| `stripePriceIdSandbox` | Step 4 |

Packages with no Gumroad page to lift from, so the copy has to be written
from the source HTML: hamster, ball-python, betta-fish, rabbit, tarantula,
and cockatiel and cockatoo if added. Copy rules are in `docs/RULES.md`; no
dashes, US spelling.

Themes, per `carePackageThemes.js`:

| Package | Palette (from the Gumroad page or the cover token) | Motion |
| --- | --- | --- |
| axolotl | coral, deep, mist | sway |
| bearded-dragon | ember, fire, sand | emberPulse, spin-slow |
| budgie | cream, sky, sun | flutter, drift |
| crested-gecko | jungle, mist, orchid | bob, drift |
| goldfish | gold, sand, teal | shimmer, wiggle |
| guinea-pig | hay, leaf, toffee | nibble |
| leopard-gecko | amber, night, sand | blink, twinkle, pulseGlow |
| lovebird | bloom, cream, rose | beat |
| russian-tortoise | clay, sage, sand, terra | plod |
| hamster | `burrow` cover tokens (arid steppe) | wheel spin |
| rabbit | `meadow` cover tokens | hop |
| tarantula | `forestfloor` cover tokens | slow crawl |
| ball-python | `pineclay` cover tokens | coil |
| betta-fish | `blackwater` cover tokens | fin sway |

The exact hex values for the nine are in the `tailwind.config` block at the
top of each Gumroad HTML file. The cover tokens are in
`care-packages/assets/package.css`.

### 3. Self-hosted images

Nothing sold here should load from `public-files.gumroad.com`.

- Covers: every package uses `/assets/guides/<id>.jpg`, the same hero the free
  guide uses, so nothing loads from Gumroad's CDN. The portrait photos in
  `content/CAREPACKAGE Guides/images/` are the PDF cover candidates, not
  product art.
- Previews: `node scripts/render-care-package-previews.mjs <id> <page> ...`
  renders the named pages of `content/CAREPACKAGE Guides/source/<id>.html`
  with headless Chromium to `public/assets/care-packages/<id>/page-<N>.jpg`,
  full letter pages at 1224px wide, around 200KB each. The carousel crops them
  to 4:3 from the top. Record the same page numbers in the `previews` entry in
  `carePackageCopy.js`. Pick pages that sell: a targets table, a Never
  callout, a checklist, the symptom table, the owner log.
- Run `scripts/check-images` or whatever the image check is called before
  committing, per CLAUDE.md. No `npm run build`.

### 4. Stripe products and prices

One product and one $8.99 one-time price per package, in the Sandbox first.
The Stripe MCP in a session can create them; otherwise the dashboard. Record
each `price_...` in `stripePriceIdSandbox` in the catalog and in
`CARE_PACKAGE_STORE` in `public/_worker.js`, both in the same commit. The
Worker file cannot import the catalog, so the mirror is by hand.

Live prices are created later, on the live account, and go into
`stripePriceId` alongside the sandbox id, never instead of it.

### 5. Upload the PDFs

```
SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... \
node scripts/upload-care-package.mjs <id> "content/CAREPACKAGE Guides/rebuilt/<File>_v<N>.pdf"
```

Once per package, path `care-packages/<id>.pdf`. This needs the service role
key, so it is a local-machine step, not a cloud session step.

### 6. Flip and test, one at a time

Set `storefront: 'stripe'` on a package. That alone adds the product page,
puts it in the prerender list and the sitemap, and swaps the card's link from
Gumroad to the page. Buy it with a test card, confirm the thanks page
downloads, sign in to the library, download again. Then the next package.

Do not flip a package that is missing any of: theme, copy, previews, sandbox
price in both files, PDF in the bucket. The Worker refuses a package it does
not know, which is the safe failure, but a page with an empty carousel is not.

### 7. Go live

The checklist is in STOREFRONT.md. In short: Turnstile, Auth URLs, live keys
and live webhook in Cloudflare, live prices in the catalog and Worker, public
business details on the live account, one real purchase refunded to yourself.
Then merge to main.

### 8. Retire Gumroad

After live sales are confirmed:

- Unpublish the nine Gumroad listings, or leave them up for a month with the
  description pointing at beastlyfacts.com. Gumroad cannot redirect a product
  URL, so any external links to `beastlyfacts.gumroad.com/l/...` will keep
  landing there.
- Remove `gumroadUrl` from the catalog and the `'gumroad'` branch from
  `CarePackageCard`, `CarePackageBlock` and `prerender.mjs`.
- Move `.gumroad-pages/` under `archive/`.
- Keep the buyer library sign-in as the way past Gumroad buyers get the new
  edition: a manual grant SQL exists at the bottom of
  `supabase/care_package_store.sql` for anyone who emails a Gumroad receipt.

## Site integration, small but easy to forget

- Add "Shop" to the main nav and footer, pointing at `/care-packages/store/`.
- `CarePackageBlock` in the MDX guides links to the product page when
  `storefront` is `stripe`, in the same tab. Check it does.
- `RELATED_ARTICLES` is unaffected. Product pages are not articles.
- The 404 for an unknown package id already works.

## After session 2

Everything a product page needs now exists for ten packages: hamster and the
nine. They still sell on Gumroad because step 4 (a Sandbox price per package,
mirrored in the Worker) and step 5 (the PDF in the bucket) are not done for
the nine, and step 6 says not to flip a package before both are. The pages
were verified by flipping all ten in a scratch build and screenshotting them
light and dark; nothing in the repo is flipped except the hamster.

The Hamster bucket file is still v2.2. `rebuilt/Hamster_Care_Package_v2.3.pdf`
is the edition the catalog and Worker now name, so upload it before the branch
merges:

```
node scripts/upload-care-package.mjs hamster "content/CAREPACKAGE Guides/rebuilt/Hamster_Care_Package_v2.3.pdf"
```

## Sessions and model

Four sessions, in this order. Each one ends with a branch push.

| Session | Work | Model, effort |
| --- | --- | --- |
| 1 | **Done, 6 September 2026.** Step 1 on the Hamster: template, themes module, carousel, prerender-safe reveal. Buyable in the Sandbox | Opus 5 (or Fable 5.1), high effort. This is the design and architecture session; getting it right once saves it on the other thirteen |
| 2 | **Done, 6 September 2026.** Step 2 for the nine Gumroad packages: copy rewritten against the rebuilt editions, contents parsed, themes written. Step 3 previews rendered for all nine | Sonnet 5, medium effort. Mechanical and repetitive, and cheap to rerun on a package if one comes out wrong |
| 3 | Step 2 for ball-python, betta-fish, rabbit, tarantula (and cockatiel, cockatoo): copy written from the source HTML. Step 3 previews for those | Opus 5, medium effort. Writing sales copy that has to be true to a 40-page PDF is where the cheaper model drifts |
| 4 | Steps 4 to 6: Stripe prices, Worker mirror, flip each package, test each purchase. Go-live checklist | Sonnet 5, medium effort, with you at the keyboard for the service role key and the dashboard steps |

Steps 5, 7 and the Gumroad retirement are yours, on a local machine, because
they need secrets and dashboards a cloud session cannot hold.
