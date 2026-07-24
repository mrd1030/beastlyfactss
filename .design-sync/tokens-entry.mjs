// Synthetic zero-export entry for design-sync's package-build.mjs.
// beastlyfacts is an app, not a published component library — there is no
// dist/ build to point --entry at. This repo is currently synced tokens-only
// (colors, fonts, radius from src/index.css) with zero components in scope,
// so an empty entry is correct input, not a workaround: it makes the
// converter emit the documented "tokens-only DS" shape (styles.css only,
// empty-bodied _ds_bundle.js). Re-used on every re-sync via --entry.
export {};
