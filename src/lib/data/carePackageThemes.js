// Per-package skins for the product page at /care-packages/<id>/.
//
// The catalog in carePackages.js stays a catalog. This file is only what the
// landing-style product page needs to look like a different species: a set of
// CSS custom properties, a dark-mode set, and which of the shared animations
// the hero uses. The page reads them through src/styles/care-package-product.css,
// which is the one place the variable names are consumed, so a new variable
// is added there and here and nowhere else.
//
// Why custom properties and not Tailwind config: fourteen palettes in
// tailwind.config.js would grow the global stylesheet for pages most visitors
// never open. A `<style>` block per product page costs nothing on the rest of
// the site, and the values can be lifted straight out of the tailwind.config
// at the top of each .gumroad-pages/products/<id>.html.
//
// Variables, all prefixed --cp-:
//
//   hero-from / hero-via / hero-to   the hero gradient
//   hero-ink                         text on the hero
//   hero-eyebrow                     the small caps line above the headline
//   hero-button-bg / hero-button-ink the hero's buy button (light on gradient)
//   glow                             r, g, b for the button pulse and cover shadow
//   ground                           page background below the hero
//   ink / muted                      body text and secondary text
//   accent / accent-strong           the theme color for eyebrows, dots, borders
//   accent-ink                       text on a solid accent fill
//   accent-soft                      a tinted surface (the "This guide" card)
//   accent-soft-border               its border
//   card-bg / card-border            the "What's inside" cards
//   panel-bg / panel-ink / panel-muted  the dark "Who this is for" band
//   cta-bg / cta-ink                 the final buy button
//
// motion: which shared keyframes (defined once in the CSS file) the hero uses.
//   eyebrowIcon      the emoji before the eyebrow text
//   eyebrowMotion    animation shorthand for that icon, or null for none
//   coverMotion      animation shorthand for the cover art
//
// pattern: an optional CSS background-image drawn faintly over the hero and
// the dark panel (the Gumroad pages used a scale dot grid for the reptiles).

export const CARE_PACKAGE_THEMES = {
  // Burrow: the arid-steppe rodent palette from care-packages/assets/package.css,
  // warm ochre over deep umber. The wheel turns slowly in the eyebrow; the cover
  // rises and settles like bedding.
  hamster: {
    light: {
      'hero-from': '#4a3a1f',
      'hero-via': '#6e5426',
      'hero-to': '#a67a2e',
      'hero-ink': '#f7efdd',
      'hero-eyebrow': '#f2d59a',
      'hero-button-bg': '#fbf5ea',
      'hero-button-ink': '#4a3a1f',
      glow: '224, 166, 63',
      ground: '#fbf6ec',
      ink: '#241d11',
      muted: '#6b5a3d',
      accent: '#c98f2a',
      'accent-strong': '#a67320',
      'accent-ink': '#241d11',
      'accent-soft': '#f8ecd2',
      'accent-soft-border': '#ead6a8',
      'card-bg': '#ffffff',
      'card-border': '#ecdfc4',
      'panel-bg': '#241d11',
      'panel-ink': '#f1e6d1',
      'panel-muted': '#cfc0a2',
      'cta-bg': '#c98f2a',
      'cta-ink': '#241d11',
    },
    dark: {
      'hero-from': '#241d11',
      'hero-via': '#3d2f18',
      'hero-to': '#6e5426',
      'hero-ink': '#f7efdd',
      'hero-eyebrow': '#f2d59a',
      'hero-button-bg': '#e0a63f',
      'hero-button-ink': '#241d11',
      glow: '224, 166, 63',
      ground: '#16120a',
      ink: '#eee2cb',
      muted: '#b8a888',
      accent: '#e0a63f',
      'accent-strong': '#f2c063',
      'accent-ink': '#241d11',
      'accent-soft': '#2c2313',
      'accent-soft-border': '#4d3d1f',
      'card-bg': '#1f1910',
      'card-border': '#3a2f1b',
      'panel-bg': '#0e0b06',
      'panel-ink': '#f1e6d1',
      'panel-muted': '#bfae8f',
      'cta-bg': '#e0a63f',
      'cta-ink': '#241d11',
    },
    motion: {
      eyebrowIcon: '🛞',
      eyebrowMotion: 'cp-spin 14s linear infinite',
      coverMotion: 'cp-rise 3.4s ease-in-out infinite',
    },
    pattern: 'radial-gradient(circle at 1px 1px, rgba(242, 213, 154, 0.12) 1.5px, transparent 2px)',
    patternSize: '26px 26px',
  },
};

const FALLBACK_ID = 'hamster';

export function getCarePackageTheme(id) {
  return CARE_PACKAGE_THEMES[id] || CARE_PACKAGE_THEMES[FALLBACK_ID];
}

function declarations(vars) {
  return Object.entries(vars).map(([k, v]) => `--cp-${k}:${v};`).join('');
}

// The CSS for one package's wrapper, light and dark. Rendered into a <style>
// element by the product page. `.dark` is the site's theme class on <html>,
// so the second rule wins whenever the visitor has dark mode on.
export function carePackageThemeCss(id) {
  const theme = getCarePackageTheme(id);
  const scope = `.cp-theme-${id}`;
  const pattern = theme.pattern
    ? `${scope}{--cp-pattern:${theme.pattern};--cp-pattern-size:${theme.patternSize || '24px 24px'};}`
    : `${scope}{--cp-pattern:none;--cp-pattern-size:0 0;}`;
  return [
    `${scope}{${declarations(theme.light)}}`,
    `.dark ${scope}{${declarations(theme.dark)}}`,
    pattern,
  ].join('\n');
}
