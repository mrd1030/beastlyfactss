# Care package storefront

Self-hosted checkout for the printable care packages, replacing Gumroad one
package at a time. Phase 1 is scaffolding on the Hamster package only. Nothing
that was on sale before this changed.

## What it is

| Piece | Where |
| --- | --- |
| Catalog, including the `storefront` switch and the price ids | `src/lib/data/carePackages.js` |
| Checkout, webhook and download routes | `public/_worker.js`, under `/api/care-packages/` |
| Which paths reach the Worker at all | `public/_routes.json` |
| Tables, RLS and the private bucket | `supabase/care_package_store.sql` |
| Publishing a PDF edition | `scripts/upload-care-package.mjs` |
| Product page | `src/pages/CarePackageProduct.jsx`, at `/care-packages/<id>/` |
| Success page | `src/pages/CarePackageThanks.jsx`, at `/care-packages/thanks/` |
| Buyer library | `src/pages/CarePackageLibrary.jsx`, at `/care-packages/library/` |

The flow, end to end:

1. The buy button POSTs a package id to `/api/care-packages/checkout`. The
   Worker looks the price id up, creates a hosted Stripe Checkout session, and
   returns its URL. Nothing about the amount comes from the browser.
2. Stripe takes the payment on its own page and redirects to
   `/care-packages/thanks/?session_id=cs_...`.
3. Stripe also POSTs `checkout.session.completed` to
   `/api/care-packages/webhook`. The Worker verifies the signature and writes a
   row into `purchases`. That row, not the redirect, is what grants the package.
4. The thanks page polls for that row and then offers the download.
   `/api/care-packages/download` finds the purchase, mints a five minute signed
   URL for the private bucket, and logs which edition it served.
5. The buyer comes back later at `/care-packages/library/`, signs in with an
   emailed one time code, and downloads again. Always the current edition.

### Why the routes live in `public/_worker.js`

Cloudflare Pages runs either advanced mode (a `_worker.js`) or a `functions/`
directory, never both. This site has shipped a `_worker.js` since the RSS feeds
went in, so a `functions/` directory here would be silently ignored and the
routes would 404 with no build error to explain it.

The consequence is that nothing in that file can import anything: `public/` is
copied into `dist` verbatim by Vite and never bundled. So there is no
`@supabase/supabase-js` and no `stripe` package in the Worker, and the slice of
the catalog those routes need is mirrored by hand in `CARE_PACKAGE_STORE`, the
same arrangement `ANIMAL_IMAGES` already has in that file.

**When you change a price id or a `version`, change it in both
`src/lib/data/carePackages.js` and `CARE_PACKAGE_STORE` in `public/_worker.js`.**
A package missing from the Worker's copy cannot be bought even if the catalog
says it can, which is the safe direction for the two to disagree in.

### Sandbox and live, kept apart

The catalog carries two price id fields and they never replace each other:

- `stripePriceIdSandbox` is a price in the Sandbox (test mode). Test cards only.
- `stripePriceId` is a price on the live Stripe account, added **alongside** the
  sandbox id when a package actually goes on sale.

The Worker prefers the live id and falls back to the sandbox one. A deployment
holding a live secret key and a package with only a sandbox id therefore gets a
clean Stripe error instead of a broken sale.

## Stripe

Product and price for the Hamster, created for phase 1:

| Thing | Value |
| --- | --- |
| Account | `acct_1Tbn669qtY3Ob6va` (Beastlyfacts), **Sandbox / test mode** |
| Product | `prod_VCYbnCXsukssee`, "Hamster Care Package" |
| Price | `price_1UC9Up9qtY3Ob6vac8xRLEu2`, $8.99 USD, one time |

Test mode and the Sandbox are the same place. `livemode: false` on this account
is what the dashboard presents as the Sandbox, which is why Checkout renders a
Sandbox badge on every test purchase. It has its own `sk_test_` keys, its own
webhook signing secret and its own products and prices, all isolated from live.
Nothing else needs connecting: `stripePriceIdSandbox` above is the Sandbox
price, and it is correct as recorded.

### Live products and prices

The whole lineup, on `acct_1Tbn669qtY3Ob6va` in **live mode**. All 14 are
$8.99 USD, one time, and every product carries `metadata.package_id` matching
the catalog id and a `url` pointing at its product page.

| Package | Product | Price |
| --- | --- | --- |
| `bearded-dragon` | `prod_VEqtMFpNa8cod8` | `price_1UENBp9qtY3Ob6vamuXMA6sD` |
| `leopard-gecko` | `prod_VEqtyweAFt4reS` | `price_1UENBs9qtY3Ob6vaOPtdFLAt` |
| `goldfish` | `prod_VEqtVux2KGkwlY` | `price_1UENBu9qtY3Ob6vaU6oDSTyD` |
| `axolotl` | `prod_VEqttFYQ981JPu` | `price_1UENBw9qtY3Ob6vaRVFVm391` |
| `budgie` | `prod_VEqt4npeCcYTFf` | `price_1UENBy9qtY3Ob6vaLv2cNMGc` |
| `crested-gecko` | `prod_VEqtOzpXmQAxHe` | `price_1UENC19qtY3Ob6vasiNmiLfX` |
| `guinea-pig` | `prod_VEqtAfxFpPH53j` | `price_1UENC39qtY3Ob6vaks244qto` |
| `lovebird` | `prod_VEqtuqHimmkkDw` | `price_1UENC89qtY3Ob6vav2ARp6wq` |
| `russian-tortoise` | `prod_VEqt8Ajxtr7s3r` | `price_1UENCB9qtY3Ob6vaTvVBMark` |
| `ball-python` | `prod_VEquzX6A9AWISg` | `price_1UENCE9qtY3Ob6vajtYqePnI` |
| `betta-fish` | `prod_VEquJ9HcocDbFR` | `price_1UENCG9qtY3Ob6vaxKLgeXwO` |
| `hamster` | `prod_VEqtWIdVnfJBxX` | `price_1UENBJ9qtY3Ob6vaJcPpuniM` |
| `rabbit` | `prod_VEqumd4P1LHeHh` | `price_1UENCH9qtY3Ob6vaaasv4qjw` |
| `tarantula` | `prod_VEquBB2Y1okeui` | `price_1UENCK9qtY3Ob6vafJILVYIP` |

These ids are in `stripePriceId` in the catalog and in `priceIdLive` in the
Worker's `CARE_PACKAGE_STORE`. All 14 packages now carry
`storefront: 'stripe'`, so each one has a buy button pointing at the checkout
route, a product page, a prerender entry and a sitemap entry. The one thing a
live price does not do is put the PDF in the bucket: a package whose
`care-packages/<id>.pdf` is missing will take money and then fail at the
signed URL, so the upload has to land before the flip ships.

Only the Hamster was ever sold in the Sandbox, so it is the only package with
both a sandbox and a live price.

### The webhook endpoint to register

Stripe Dashboard, in **test mode**, Developers -> Webhooks -> Add endpoint:

- **Endpoint URL:** `https://beastlyfacts.com/api/care-packages/webhook`
- **Events:** `checkout.session.completed` and
  `checkout.session.async_payment_succeeded`
- Copy the endpoint's signing secret (`whsec_...`) into
  `STRIPE_WEBHOOK_SECRET` below.

The signing secret is per endpoint, not per account, so a live endpoint added
later has a different one and both have to be held by whichever deployment
serves them.

## Supabase

Project `ipqqeofzlwvfnunduuru` (beastlyfactss), the same one the site already
uses for likes and comments.

1. **Schema.** `supabase/care_package_store.sql` has been applied to the project
   as the `care_package_store` migration. It is re-runnable, so pasting it into
   the SQL editor again is safe.
2. **Bucket.** The migration creates a private `care-packages` bucket with no
   `storage.objects` policies at all. Do not add any. The bucket being
   unreachable by every browser role is the paywall; the Worker's service role
   key is the only way to produce a readable URL.
3. **The PDF.** One object per package at `care-packages/<package-id>.pdf`. For
   the Hamster:

   ```
   SUPABASE_URL=https://ipqqeofzlwvfnunduuru.supabase.co \
   SUPABASE_SERVICE_ROLE_KEY=sb_secret_... \
   node scripts/upload-care-package.mjs hamster \
     "content/CAREPACKAGE Guides/rebuilt/Hamster_Care_Package_v2.2.pdf"
   ```

   Dashboard -> Storage -> care-packages -> Upload does the same thing. The
   script only exists so the path cannot be mistyped, which would silently
   produce a package nobody can download.
4. **Auth URL configuration. This one is a blocker.** Authentication -> URL
   Configuration:

   - **Site URL:** `https://beastlyfacts.com`
   - **Redirect URLs:** add `https://beastlyfacts.com/**`

   Supabase only honors an `emailRedirectTo` that matches the allow list. With
   anything else it silently substitutes the Site URL instead, so a default
   project sends sign-in links pointing at `http://localhost:3000` and every
   buyer's link is dead. That is what happened on the first test run.
5. **Custom SMTP. This blocks going live.** Supabase's built-in email sender
   "will refuse to deliver messages to addresses that are not part of the
   project's team". So sign-in works for you and fails silently for every real
   buyer. It is also rate limited to a handful of messages an hour, and it locks
   the email templates, which is why the Source tab on the Magic Link template
   cannot be clicked and the emailed code cannot be enabled.

   Point Authentication -> Emails -> SMTP Settings at any SMTP provider and all
   three of those go away at once. Then, optionally, add `{{ .Token }}` to the
   Magic Link template so the code works alongside the link. The code's length
   is a project setting and is not always 6 digits, so the library accepts 6 to
   10; do not narrow that to whatever length you happen to see.

   Confirmed working on 5 September 2026: `noreply@beastlyfacts.com` delivered
   to an address that is not on the project team.
6. **Email sign-in, and why the library takes a pasted link.** The library uses
   `signInWithOtp`, and clicking the emailed link is the normal path. The box
   underneath that accepts a pasted link is not decoration: on Android a device
   with an app registered for the Supabase domain opens that app instead of a
   browser and the link is unusable, corporate scanners burn one-time links
   before the human sees them, and some clients rewrite the URL. In all of those
   the token is still in the email, and pasting the link verifies it directly
   through `verifyOtp({ token_hash })` with no redirect involved.

### Public details end up on every receipt

Stripe prints the account's public business details on the receipt it emails a
buyer. On a fresh account those default to the personal email and phone the
account was opened with, which is not something to hand to strangers who buy a
$8.99 PDF.

Settings -> Business -> Public details:

- **Support email:** `hello@beastlyfacts.com`. Not a personal inbox, and not
  `noreply@beastlyfacts.com`, which is send-only. `hello@` specifically,
  because it is already the address on /contact/, in the Terms, and twice in
  the Privacy policy including for data access and deletion requests. A
  different address on receipts would give buyers two competing places to
  write to and contradict those pages.
- **Support phone:** clear it if Stripe allows. It generally wants an email or
  a phone rather than both, so fill the email first.
- **Support website:** `https://beastlyfacts.com/contact/`.

Check this in live mode as well as the Sandbox before the first real sale. The
two can hold different values and live is the one buyers see.

Worth a look while in there: Settings -> Climate. If Stripe Climate is on, it
takes 1% of gross revenue, roughly 9 cents per package.

### When a buyer asks you to delete their data

The Privacy policy offers this at `hello@`, and the storefront made it harder
to honor than it used to be: a sale writes the buyer's email into `purchases`,
`care_package_downloads` and `auth.users`, plus Stripe's own Customer and
charge.

The runbook is at the bottom of `supabase/care_package_store.sql`, next to the
manual grant, as copy and paste SQL. Two things it explains that are not
obvious:

- **Deleting only their account does nothing.** Their address stays in
  `purchases`, they sign up again in thirty seconds, and everything is back.
  Access is granted by the purchase row, not by having an account.
- **Deleting the purchase row takes their package away for good**, from their
  side. Their library goes empty and the download 403s however many times they
  sign back in. That is right for a real "forget me" request and is not what
  most people mean, so confirm before running it.

Stripe's records stay, which is both required for tax and what makes this
reversible: the payment proves the purchase, so the manual grant can put the
row back if they change their mind.

### Stopping the sign-in form being an open email relay

The library form emails whatever address is typed into it, and the Supabase
publishable key that drives it ships in the bundle, so `/auth/v1/otp` is
reachable with or without our page. A check in the form would be theatre: the
abuse path skips the form entirely.

Cloudflare Turnstile, configured in Supabase, is the actual control. With
CAPTCHA on, Supabase rejects any OTP request without a valid token, whoever
sends it and from wherever. The browser half is already written and shipped
(`src/components/shared/TurnstileWidget.jsx`), and it renders nothing until a
site key exists, so nothing changes until you finish the setup.

**Order matters. Doing 3 before 2 breaks every sign-in**, because Supabase
starts demanding a token the page is not yet sending:

1. Cloudflare -> Turnstile -> add a widget for `beastlyfacts.com`. Keep the
   site key and the secret key.
2. Set `VITE_TURNSTILE_SITE_KEY` in Cloudflare Pages and **redeploy**. It is
   compiled into the bundle at build time, so a variable added without a
   rebuild does nothing. After this the widget appears and sign-in starts
   sending a token, which a project with CAPTCHA still off simply ignores.
3. Supabase -> Authentication -> Attack Protection -> enable CAPTCHA, provider
   Turnstile, paste the secret key.

**The CSP has to allow it, and the CSP is not in this repo.** It is set as a
Transform Rule on the Cloudflare zone; `cloudflare-csp.txt` is a local
reference copy and is gitignored, so grepping `public/_headers` finds nothing
and tells you nothing. Turnstile needs `https://challenges.cloudflare.com` in three
directives, because it loads a script, renders the challenge in an iframe, and
calls home from it:

```
script-src  ... https://challenges.cloudflare.com
connect-src ... https://challenges.cloudflare.com
frame-src   ... https://challenges.cloudflare.com
```

Miss `frame-src` and the script loads while the box never appears, which reads
like a bad key rather than a blocked frame. On the first attempt all three were
missing.

Nothing else in the storefront needs a CSP change, and the reasons are worth
knowing rather than rediscovering. Supabase is already in `connect-src`,
`img-src` and `media-src`, so auth, the purchases query and the PDF all pass.
The Stripe Checkout redirect and the signed download are both script-initiated
top-level navigations rather than form submissions, so `form-action 'self'`
does not apply to either. That last one changes if the storefront ever moves
from hosted Checkout to on-site Elements: that would need `js.stripe.com` in
`script-src` and `frame-src`, alongside the `payment=(self ...)`
Permissions-Policy change noted below.

If the widget cannot load at all, the sign-in form drops the token requirement
and sends the request anyway, so a blocked script gives a real Supabase error
rather than a button that can never be pressed. That is deliberate: the widget
is a filter, Supabase is the enforcement, and only one of those should be able
to lock a buyer out.

Until step 3, the only thing capping abuse is the Supabase Auth per-hour send
limit, so do not raise that limit before Turnstile is on.

**CAPTCHA covers the whole Auth surface, not just the buyer library.** Turning
it on also gates `signInWithPassword`, which is the admin login at
`/composer/login/`. That page carries the same widget and passes the token
through `AuthContext.login()`; if it ever stops doing so, the composer becomes
unreachable with a "captcha protection: request disallowed" error and no
obvious cause.

What it does NOT touch: comments, likes, shares and push subscriptions all go
through PostgREST at `/rest/v1/`, which CAPTCHA does not cover, and the
newsletter is Beehiiv rather than Supabase. Those forms are unaffected.

### Do NOT turn off "Confirm email"

Authentication -> Sign In / Providers has a **Confirm email** toggle, and it is
tempting to switch it off, because with it on a brand new address gets the
"Confirm your email address" template on its first sign-in instead of the
sign-in one. Leave it on. It is load-bearing for the paywall.

Anyone can call Supabase's public signup endpoint with the publishable key that
already ships in the site bundle. With confirmations on, no session is issued
until the address is proved. With them off, a stranger could sign up as a real
buyer's email address, receive a session immediately, and the library would
hand them that buyer's purchases and PDFs, because ownership is keyed on the
email inside the token.

The safe fix for the wording is to edit the **Confirm signup** template so it
reads like signing in rather than registering, and to add `{{ .Token }}` to it
as well as to Magic Link. The library tries a typed code as type `email` and
falls back to `signup`, so a code from either template works.

## Phase 2: product pages in the landing page style

**Built for the Hamster on 6 September 2026**, and it is back on sale in the
Sandbox through the new page. The rest of the catalog follows the plan in
`docs/SHOP_PLAN.md`. The pieces: `src/pages/CarePackageProduct.jsx` is the
template, `src/lib/data/carePackageThemes.js` the per-package colors and
motion, `src/lib/data/carePackageCopy.js` the per-package pitch,
`src/styles/care-package-product.css` the one place the theme variables are
consumed, and `scripts/render-care-package-previews.mjs` renders the carousel
images to `public/assets/care-packages/<id>/`. The notes below were the brief
it was built from and still apply to every package after it.

`src/pages/CarePackageProduct.jsx` today is a competent spec sheet: cover,
price, bullets, contents, buy button. The bar is set by the nine pages in
`.gumroad-pages/products/`, which are real sales pages. Those were written for
Gumroad to host and are the closest thing to a brief that exists.

### What those nine actually are

One shared skeleton, skinned per species. The skeleton:

1. Hero: full-bleed gradient, eyebrow, a hook headline, one paragraph, price
   CTA, three tick bullets, cover art on a slight rotation with a rating badge,
   and an SVG wave into the next section.
2. Contrast pair: a rose "care-sheet roulette" card of four real frustrations,
   against a themed "this guide" card answering them one for one.
3. What's inside: six cards, emoji, heading, one line.
4. Preview carousel: five interior page images, snap scroll, arrows and dots.
5. Who this is for, and what it's not: two columns on a dark panel.
6. Final CTA, then footer.

What changes per species is the whole skin:

| Package | Palette | Keyframes |
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

Plus a bespoke hook headline each: "Basking temps you don't have to guess at",
"Two facts drive most vet visits. This covers both", "An animal that can
outlive its owner deserves the setup right". Only Fredoka and the section order
are constant.

### Notes for whoever builds it

- **Themes are data, not Tailwind config.** Nine palettes in
  `tailwind.config.js` would bloat it for pages most visitors never see. Put
  each package's colors on a wrapper as CSS custom properties instead, in a
  `src/lib/data/carePackageThemes.js` keyed by package id, and leave the
  catalog file as catalog.
- **The hamster's theme is already decided.** The retired
  `care-packages/hamster.html` uses `class="page cover burrow"`, and that
  folder's README defines `burrow` as the arid-steppe rodent palette. Use it,
  with an animation off the wheel or the bedding rather than a borrowed one.
- **These pages need per-package copy that does not exist yet**: the hook, the
  four frustrations, the four answers, six cards, who it is for, what it is
  not. For the nine, lift it from `.gumroad-pages/products/<id>.html`. For the
  hamster there is no source, so it has to be written.
- **The carousel has no images for the hamster.** The nine pull five interior
  pages each from `public-files.gumroad.com`, uploaded when the listing was
  made. The hamster has no listing. Either render page images from
  `content/CAREPACKAGE Guides/source/hamster.html` with headless Chrome and
  commit them under `public/assets/care-packages/hamster/`, or ship without
  the section. Self-hosting is better: a package no longer sold on Gumroad
  should not depend on Gumroad's CDN.
- **Reveal-on-scroll must not hide content from crawlers.** Those pages use an
  IntersectionObserver that sets `opacity: 0` until scrolled into view. The
  product page is prerendered and indexed, so a naive port would capture an
  invisible page. Either resolve it during prerender via the
  `window.__IS_PRERENDER__` guard the rest of the app uses, or make the initial
  state visible and treat the animation as progressive enhancement.
- **Drop the Gumroad-only machinery** when porting: `data-gumroad-field`,
  `data-gumroad-action`, the `window.top.location.href` iframe escapes, and the
  Tailwind CDN script. On our own domain the buy button is
  `CarePackageBuyButton` and the links are ordinary `Link`s.

`.gumroad-pages/` was gitignored until 5 September 2026 and is now tracked, so
the source for all nine is in the repo.

## Cloudflare Pages environment variables

Settings -> Variables and Secrets, on the **Production** environment (and
Preview too if previews are ever re-enabled).

| Name | Type | Value |
| --- | --- | --- |
| `STRIPE_SECRET_KEY` | Secret | Stripe test mode secret key, `sk_test_...` |
| `STRIPE_WEBHOOK_SECRET` | Secret | Signing secret of the endpoint above, `whsec_...` |
| `SUPABASE_URL` | Plaintext | `https://ipqqeofzlwvfnunduuru.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Secret | Supabase secret key, `sb_secret_...` |
| `VITE_TURNSTILE_SITE_KEY` | Plaintext | Cloudflare Turnstile site key. Optional, see below. Public by design, and `VITE_` on purpose: this one IS meant to be in the bundle. |

Two things about the service role key. It bypasses RLS entirely, so it is the
one value in this system that must never reach the browser. It is read only by
`public/_worker.js`, which runs on Cloudflare and is never bundled into the
client, and it is deliberately not a `VITE_` variable, because anything with
that prefix is compiled into the site bundle by Vite.

When a package goes live, `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` are
swapped for their live equivalents and a live webhook endpoint is registered.
Nothing else changes.

### Stripe receipt emails

Receipts do not arrive in the Sandbox, and that is not a bug to chase. Stripe's
docs: "By default, Stripe doesn't email customers in sandboxes", and email
receipts in test mode go only to an address belonging to a verified team
member. To see one, send it by hand: Transactions -> Payments -> the payment ->
Receipt history -> the overflow menu -> Send receipt.

What to check instead is that the charge carries a `receipt_email` at all. A
charge with `receipt_email: null` can never produce a receipt in any mode.

Checkout is created with `customer_creation: 'always'`. That is deliberate and
should not be relaxed back to `if_required`: with `if_required` a card payment
creates no Customer, the buyer's address stays in `customer_details` on the
session, and the charge is left with `receipt_email` null, so Stripe has nobody
to send a receipt to no matter how the account is configured. The first test
purchase failed exactly that way.

Sending the receipt is then a dashboard setting: Stripe Settings -> Business ->
Customer emails, turn on **Successful payments**. Do this in both test mode and
live mode; they are separate switches.

### Not needed: the Permissions-Policy change

`public/_headers` sets `payment=()`, which blocks the browser Payment Request
API on this origin. That only matters for on-site Stripe Elements with Apple Pay
or Google Pay. This storefront uses hosted Checkout, which runs on Stripe's own
origin and is unaffected, so the header is left alone. If Elements is ever used
here instead, change it to `payment=(self "https://js.stripe.com")`.

## Indexing

- `/care-packages/<id>/` is indexed and canonical, prerendered, and in the
  sitemap. Both lists are derived from the catalog in `prerender.mjs` and
  `generate-sitemap.js`, so a package switched to Stripe gets its page rendered
  and submitted without anyone remembering to add it.
- `/care-packages/thanks/` and `/care-packages/library/` are `noindex, nofollow`
  and stay out of the sitemap, but they ARE prerendered. They were not at first,
  on the reasoning that neither has a stable state to capture, and that was
  wrong in a way a buyer could see: with no static file Cloudflare falls through
  to `404.html`, so the 404 page painted for real before the SPA booted and
  replaced it. That flash hit the library on every visit and the thanks page
  immediately after paying. `/pack` was already prerendered for exactly this
  reason; see the note above it in `prerender.mjs`.

  What is captured is a loading state, never a signed-in or paid one. Both pages
  check `window.__IS_PRERENDER__` and skip the effect that would resolve it, so
  the static HTML matches the first hydration render exactly and the real state
  arrives a moment later on the client. If you edit either page's initial state,
  keep that property or hydration will mismatch.
- Download URLs are signed, short lived and never linked, so there is nothing to
  exclude.

## Publishing a corrected edition

This is the version story, and it is deliberately one step:

1. Upload the new PDF over `care-packages/<id>.pdf` (the script above, or the
   dashboard).
2. Bump `version` in `src/lib/data/carePackages.js` and the matching `edition`
   in `CARE_PACKAGE_STORE` in `public/_worker.js`, in the same commit.

Every buyer's next download is the new file, at no cost to them, and the library
tells them their copy has been updated since they bought it. No purchase row
changes and nobody re-buys anything.

`care_package_downloads` records the edition served with each signed URL, so
"which edition does this person actually hold" stays answerable after the file
behind the path has been replaced:

```sql
select package_id, edition, created_at
  from public.care_package_downloads
 where lower(email) = lower('buyer@example.com')
 order by created_at desc limit 10;
```

## Testing

### What has been verified

- `npm run lint` and `npm run typecheck` both pass.
- The Stripe product and price exist in test mode with the ids recorded above.
- The `care_package_store` migration applied cleanly: both tables, their RLS
  policies, the grants and the private bucket exist in the project.
- `public/_worker.js` parses (`node --check`), and the route list the prerender
  and sitemap derive from the catalog resolves to `/care-packages/hamster/` and
  nothing else.

### First live test run, 5 September 2026

Deployed to production and exercised with a test card. What passed:

- Product page served 200 with the canonical tag and the `Product` JSON-LD in
  the static HTML, not only after hydration.
- Checkout created a real session and Stripe took the payment.
- The webhook landed and wrote one `purchases` row: `hamster`, edition 2.2,
  899 cents, `livemode` false, email lower-cased from the `Mrd103089@` the buyer
  typed at checkout.
- The thanks page resolved and the download worked, logging one
  `care_package_downloads` row at `hamster.pdf`, edition 2.2.
- Checkout refused `bearded-dragon` with a 404, so the `storefront` switch holds.
- Download refused no credential (401), a forged session id (403) and a forged
  bearer token (401). The bucket refused both unsigned URL forms.
- `/feed.xml`, `/articles.xml` and `/subscribed` all still worked, and all nine
  Gumroad links were intact on the store page.

Three things failed, all fixed since:

- The sign-in link pointed at `http://localhost:3000`. Supabase project config,
  see step 4 above.
- No receipt email. `customer_creation` was `if_required`, so the charge had a
  null `receipt_email`. Fixed in the Worker.
- The thanks page promised a receipt and the library promised a code, neither of
  which the system reliably sends. Copy corrected.

### Still not run

Library sign-in and download, which needs step 4 done first. The idempotency
resend and the signed URL expiry check.

### The steps to run, in order

1. **Upload the PDF.** Run the upload command above. It should print the size
   and the object path. Confirm in Storage that `care-packages/hamster.pdf`
   exists and that the bucket shows as private.
2. **Set the four variables** in Cloudflare Pages, then deploy.
3. **Register the webhook** in Stripe test mode as described above and copy the
   signing secret into `STRIPE_WEBHOOK_SECRET`. Redeploy if the variable was
   added after the last build.
4. **Product page.** Open `https://beastlyfacts.com/care-packages/hamster/`.
   Expect the cover, `$8.99`, the bullets, the contents block, "edition 2.2",
   and a working link to `/guides/hamster/`. View source and confirm the
   canonical tag and the `Product` JSON-LD are in the static HTML, not just
   after hydration.
5. **Buy.** Click Buy. Stripe's hosted page should open. Pay with `4242 4242
   4242 4242`, any future expiry, any CVC, and an email you can read.
6. **Webhook.** In Stripe -> Developers -> Webhooks -> your endpoint, the
   delivery should show 200. Then:
   ```sql
   select email, package_id, edition, amount_cents, livemode, created_at
     from public.purchases order by created_at desc limit 5;
   ```
   Expect one row, `amount_cents` 899, `livemode` false.
7. **Thanks page.** You should have landed on `/care-packages/thanks/` and it
   should resolve from "Confirming with Stripe" to a Download button within a
   few seconds. Click it and confirm the PDF downloads and opens.
8. **Idempotency.** In Stripe, resend the same `checkout.session.completed`
   event from the webhook's delivery list. It should return 200 and the
   `purchases` query above should still show exactly one row.
9. **Library.** Open `/care-packages/library/`, enter the same email, and
   complete the code or the link. Expect one Hamster card reading "Edition 2.2".
   Download from it and confirm the same file arrives.
10. **The wrong email.** Sign out, sign in with a different address, and confirm
    the library is empty. That is RLS doing its job.
11. **Signed URL expiry.** Copy a download URL out of the network tab, wait six
    minutes, and open it. Expect a Supabase error rather than the PDF. Open the
    bucket path directly with no signature at all
    (`.../storage/v1/object/public/care-packages/hamster.pdf`) and expect that
    to fail too.
12. **The download log.**
    ```sql
    select package_id, edition, storage_path, created_at
      from public.care_package_downloads order by created_at desc limit 5;
    ```
    Expect one row per download you clicked, each stamped `2.2`.
13. **Nothing else moved.** Confirm `/care-packages/store/` still shows the nine
    live packages with their Gumroad links intact, and that `/feed.xml`,
    `/articles.xml` and `/subscribed` still work, since this branch touched the
    Worker they share.

## Known gap, worth a decision before this ships wide

`/composer` is gated by `ProtectedRoute`, which asks only whether a Supabase
session exists. Until now the only way to get one was the admin password login.
Buyers signing in to the library are Supabase users too, so a buyer could reach
the composer **UI**.

They cannot do anything with it. Every write behind that page is gated on
`public.is_admin()` in `supabase/social_feed.sql`, so posting, deleting and
media upload all fail for anyone not in `app_admins`. It is a cosmetic leak
rather than a data one, which is why it was left alone in this branch rather
than fixed as a drive-by.

The fix, when wanted, is to have `AuthContext` call the existing `is_admin()`
RPC after `getSession()` and treat a false result as unauthenticated.
