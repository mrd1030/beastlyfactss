# design-sync notes — beastlyfacts

## Repo shape
This repo is a Vite/React **app** (Beastly Facts, a pet-facts content site), not a
published component library — `package.json` has no `main`/`module`/`exports`
and there is no `dist/` library build to point `--entry` at. It's synced as the
`package` shape with a **synthetic zero-export entry**
(`.design-sync/tokens-entry.mjs`, just `export {}`), always passed via
`--entry .design-sync/tokens-entry.mjs`. This intentionally produces the
documented "tokens-only DS" build: `styles.css` + an empty-bodied
`_ds_bundle.js`, zero components.

## Scope (deliberate)
User chose **tokens/colors only** on the first sync (2026-07-23) — no UI
components. The repo does have a small `src/components/ui/` set (Button,
Input, Label, Toast, shadcn-style) that was explicitly left out of scope. If a
future sync adds components, switch `cfg.shape` handling to point `--entry` at
a real built entry — there still isn't one, so either add a tiny library build
for `src/components/ui/` or keep hand-scoping via `componentSrcMap`.

## Fonts
Fredoka + Nunito are loaded by the real site via a Google Fonts CSS2 `<link>`
in `index.html` (deferred/async for performance — see the perf-conscious
history in this repo), **not** via any `@import`/`@font-face` inside
`src/index.css` itself. The package-shape converter has no path for a bare
remote `@import url(...)` (that's storybook-shape only), so:

- `.design-sync/fonts.css` is a **fetched snapshot** of the real
  `https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=Nunito:wght@400;500;600;700;800&display=swap`
  response (fetched with a modern desktop Chrome UA to get woff2 rules, not
  legacy ttf). It's wired via `cfg.extraFonts`. `extractFonts()` leaves the
  `https://fonts.gstatic.com/...` `url()`s as-is (remote, not copied locally)
  — this is genuinely how the real site loads these fonts, not a
  reimplementation.
- **Re-sync risk**: this snapshot goes stale if the real site's font weights
  ever change (check `index.html`'s Google Fonts `<link>` href against the
  `family=` params baked into `.design-sync/fonts.css`'s original fetch). If
  they diverge, re-fetch: `Invoke-WebRequest` (PowerShell) with a Chrome UA
  string against the current `index.html` href, save over
  `.design-sync/fonts.css`, rebuild.

## Known render warns
- `[RENDER_SKIPPED]` is expected on every build here — zero components means
  there is nothing to render-check. Not a warn to chase.

## Re-sync risks
- The font snapshot (above) is the main thing that can silently go stale —
  it's a point-in-time copy of a remote resource, not derived from repo
  source on every build.
- If components are ever added to scope, the synthetic entry
  (`.design-sync/tokens-entry.mjs`) needs to be swapped for a real built
  entry point — nothing here currently builds `src/components/ui/` as a
  library.
