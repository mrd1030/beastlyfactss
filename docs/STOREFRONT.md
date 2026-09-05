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

- `stripePriceIdSandbox` is a price in Stripe test mode. Test cards only.
- `stripePriceId` is a price on the live Stripe account, added **alongside** the
  sandbox id when a package actually goes on sale.

The Worker prefers the live id and falls back to the sandbox one. A deployment
holding a live secret key and a package with only a sandbox id therefore gets a
clean Stripe error instead of a broken sale.

## Stripe

Product and price for the Hamster, created for phase 1:

| Thing | Value |
| --- | --- |
| Account | `acct_1Tbn669qtY3Ob6va` (Beastlyfacts), **test mode** |
| Product | `prod_VCYbnCXsukssee`, "Hamster Care Package" |
| Price | `price_1UC9Up9qtY3Ob6vac8xRLEu2`, $8.99 USD, one time |

Read this before assuming it is a Sandbox: the Stripe connector exposes exactly
one account, `acct_1Tbn669qtY3Ob6va`, in two modes (livemode true and false).
There is no separate Sandbox account under it. The product and price above are
therefore in that account's **test mode**, which is isolated from live data and
uses its own `sk_test_` keys, but it is not a Sandbox with an account id of its
own. If a real Sandbox is connected later, recreate the product and price there
and replace `stripePriceIdSandbox` in both files with the new id.

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
4. **Email sign-in.** The library uses `signInWithOtp`. Out of the box the
   Supabase "Magic Link" email template sends a link, which works: clicking it
   returns the buyer to `/care-packages/library/` already signed in. For the six
   digit code box on that page to work too, add `{{ .Token }}` to that template
   (Authentication -> Emails -> Magic Link). Both paths are offered, so this is
   worth doing but is not a blocker.

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

### What has NOT been run

The end to end purchase has not been exercised. It needs two things this branch
does not have: the four environment variables above (the Stripe test secret key
and the Supabase service role key are secrets that were never in the repo), and
a deployment, since the routes only exist once Cloudflare serves the Worker.
Branch pushes do not build, so this can only be run after a deploy from `main`
or from a temporarily enabled preview.

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
