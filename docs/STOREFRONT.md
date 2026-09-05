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
   cannot be clicked and the six digit code cannot be enabled.

   Point Authentication -> Emails -> SMTP Settings at any SMTP provider and all
   three of those go away at once. Then, optionally, add `{{ .Token }}` to the
   Magic Link template so the six digit code works alongside the link.

   Until that is done, treat the storefront as testable but not sellable.
6. **Email sign-in, and why the library takes a pasted link.** The library uses
   `signInWithOtp`, and clicking the emailed link is the normal path. The box
   underneath that accepts a pasted link is not decoration: on Android a device
   with an app registered for the Supabase domain opens that app instead of a
   browser and the link is unusable, corporate scanners burn one-time links
   before the human sees them, and some clients rewrite the URL. In all of those
   the token is still in the email, and pasting the link verifies it directly
   through `verifyOtp({ token_hash })` with no redirect involved.

## Cloudflare Pages environment variables

Settings -> Variables and Secrets, on the **Production** environment (and
Preview too if previews are ever re-enabled).

| Name | Type | Value |
| --- | --- | --- |
| `STRIPE_SECRET_KEY` | Secret | Stripe test mode secret key, `sk_test_...` |
| `STRIPE_WEBHOOK_SECRET` | Secret | Signing secret of the endpoint above, `whsec_...` |
| `SUPABASE_URL` | Plaintext | `https://ipqqeofzlwvfnunduuru.supabase.co` |
| `SUPABASE_SERVICE_ROLE_KEY` | Secret | Supabase secret key, `sb_secret_...` |

Two things about the service role key. It bypasses RLS entirely, so it is the
one value in this system that must never reach the browser. It is read only by
`public/_worker.js`, which runs on Cloudflare and is never bundled into the
client, and it is deliberately not a `VITE_` variable, because anything with
that prefix is compiled into the site bundle by Vite.

When a package goes live, `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` are
swapped for their live equivalents and a live webhook endpoint is registered.
Nothing else changes.

### Stripe receipt emails

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
  and are in neither list. Neither has a stable default state to prerender: one
  needs a Stripe session id, the other a signed-in buyer. This is the same
  arrangement `/donate/success/` and `/donate/cancel/` already have, and the
  long note at the bottom of `public/_redirects` explains what Cloudflare serves
  for those paths.
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
