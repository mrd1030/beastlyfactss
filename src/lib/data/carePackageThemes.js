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
      'hero-from': '#4a3a1f', 'hero-via': '#6e5426', 'hero-to': '#a67a2e',
      'hero-ink': '#f7efdd', 'hero-eyebrow': '#f2d59a',
      'hero-button-bg': '#fbf5ea', 'hero-button-ink': '#4a3a1f',
      glow: '224, 166, 63',
      ground: '#fbf6ec', ink: '#241d11', muted: '#6b5a3d',
      accent: '#c98f2a', 'accent-strong': '#a67320', 'accent-ink': '#241d11',
      'accent-soft': '#f8ecd2', 'accent-soft-border': '#ead6a8',
      'card-bg': '#ffffff', 'card-border': '#ecdfc4',
      'panel-bg': '#241d11', 'panel-ink': '#f1e6d1', 'panel-muted': '#cfc0a2',
      'cta-bg': '#c98f2a', 'cta-ink': '#241d11',
    },
    dark: {
      'hero-from': '#241d11', 'hero-via': '#3d2f18', 'hero-to': '#6e5426',
      'hero-ink': '#f7efdd', 'hero-eyebrow': '#f2d59a',
      'hero-button-bg': '#e0a63f', 'hero-button-ink': '#241d11',
      glow: '224, 166, 63',
      ground: '#16120a', ink: '#eee2cb', muted: '#b8a888',
      accent: '#e0a63f', 'accent-strong': '#f2c063', 'accent-ink': '#241d11',
      'accent-soft': '#2c2313', 'accent-soft-border': '#4d3d1f',
      'card-bg': '#1f1910', 'card-border': '#3a2f1b',
      'panel-bg': '#0e0b06', 'panel-ink': '#f1e6d1', 'panel-muted': '#bfae8f',
      'cta-bg': '#e0a63f', 'cta-ink': '#241d11',
    },
    motion: { eyebrowIcon: '🛞', eyebrowMotion: 'cp-spin 14s linear infinite', coverMotion: 'cp-rise 3.4s ease-in-out infinite' },
    pattern: 'radial-gradient(circle at 1px 1px, rgba(242, 213, 154, 0.12) 1.5px, transparent 2px)',
    patternSize: '26px 26px',
  },

  // The nine below are the palettes of the Gumroad listings, lifted from the
  // tailwind.config block at the top of .gumroad-pages/products/<id>.html.
  // Color names in the comments are that file's names.

  // deep navy water, coral gills, mist paper. "ripple" rings on the hero.
  axolotl: {
    light: {
      'hero-from': '#141b36', 'hero-via': '#1c2650', 'hero-to': '#26336b',
      'hero-ink': '#f3f5fa', 'hero-eyebrow': '#ffa3b3',
      'hero-button-bg': '#ff8298', 'hero-button-ink': '#ffffff',
      glow: '255, 130, 152',
      ground: '#f3f5fa', ink: '#0c1226', muted: '#3f4a6e',
      accent: '#ec647d', 'accent-strong': '#d14d67', 'accent-ink': '#ffffff',
      'accent-soft': '#fce9ed', 'accent-soft-border': '#f7c9d3',
      'card-bg': '#ffffff', 'card-border': '#e7ebf5',
      'panel-bg': '#141b36', 'panel-ink': '#f3f5fa', 'panel-muted': '#c5cce0',
      'cta-bg': '#ff8298', 'cta-ink': '#ffffff',
    },
    dark: {
      'hero-from': '#0c1226', 'hero-via': '#141b36', 'hero-to': '#1c2650',
      'hero-ink': '#f3f5fa', 'hero-eyebrow': '#ffa3b3',
      'hero-button-bg': '#ff8298', 'hero-button-ink': '#0c1226',
      glow: '255, 130, 152',
      ground: '#0c1226', ink: '#e7ebf5', muted: '#a7b0cc',
      accent: '#ffa3b3', 'accent-strong': '#ffb8c5', 'accent-ink': '#0c1226',
      'accent-soft': '#1c2650', 'accent-soft-border': '#324390',
      'card-bg': '#141b36', 'card-border': '#26336b',
      'panel-bg': '#070b18', 'panel-ink': '#f3f5fa', 'panel-muted': '#b5bdd6',
      'cta-bg': '#ff8298', 'cta-ink': '#0c1226',
    },
    motion: { eyebrowIcon: '🦎', eyebrowMotion: 'cp-sway 2.8s ease-in-out infinite', coverMotion: 'cp-rise 3.6s ease-in-out infinite' },
    pattern: 'radial-gradient(circle at 20px 20px, transparent 16px, rgba(255, 163, 179, 0.09) 17px, rgba(255, 163, 179, 0.09) 18px, transparent 19px)',
    patternSize: '40px 40px',
  },

  // ember, fire and sand. A slow sun in the eyebrow, scale dots on the hero.
  'bearded-dragon': {
    light: {
      'hero-from': '#b33f1e', 'hero-via': '#d2551f', 'hero-to': '#e8862a',
      'hero-ink': '#ffffff', 'hero-eyebrow': '#3a1a0c',
      'hero-button-bg': '#ffffff', 'hero-button-ink': '#b33f1e',
      glow: '232, 134, 42',
      ground: '#fbf5ec', ink: '#1c0e08', muted: '#6b4a2e',
      accent: '#d2551f', 'accent-strong': '#b33f1e', 'accent-ink': '#ffffff',
      'accent-soft': '#fdebdd', 'accent-soft-border': '#f7c9a6',
      'card-bg': '#ffffff', 'card-border': '#f4e0cc',
      'panel-bg': '#2b140a', 'panel-ink': '#fbf5ec', 'panel-muted': '#e3cdb2',
      'cta-bg': '#d2551f', 'cta-ink': '#ffffff',
    },
    dark: {
      'hero-from': '#2b140a', 'hero-via': '#b33f1e', 'hero-to': '#d2551f',
      'hero-ink': '#ffffff', 'hero-eyebrow': '#fbe3c4',
      'hero-button-bg': '#fbf5ec', 'hero-button-ink': '#b33f1e',
      glow: '232, 134, 42',
      ground: '#1c0e08', ink: '#f4e7d3', muted: '#c8ae90',
      accent: '#f2a93c', 'accent-strong': '#f6bc5e', 'accent-ink': '#1c0e08',
      'accent-soft': '#421d0e', 'accent-soft-border': '#5c2810',
      'card-bg': '#2b140a', 'card-border': '#5c2810',
      'panel-bg': '#120806', 'panel-ink': '#fbf5ec', 'panel-muted': '#d9c2a5',
      'cta-bg': '#e8862a', 'cta-ink': '#1c0e08',
    },
    motion: { eyebrowIcon: '☀️', eyebrowMotion: 'cp-spin 18s linear infinite', coverMotion: 'cp-rise 3.2s ease-in-out infinite' },
    pattern: 'radial-gradient(circle at 0 0, transparent 11px, rgba(242, 169, 60, 0.10) 12px, rgba(242, 169, 60, 0.10) 13px, transparent 14px)',
    patternSize: '30px 30px',
  },

  // sky blue, sun yellow, cream. A fluttering bird in the eyebrow.
  budgie: {
    light: {
      'hero-from': '#154066', 'hero-via': '#1b5488', 'hero-to': '#2470b5',
      'hero-ink': '#fbf8f0', 'hero-eyebrow': '#ffd65c',
      'hero-button-bg': '#ffc933', 'hero-button-ink': '#0a1a2b',
      glow: '255, 201, 51',
      ground: '#fbf8f0', ink: '#0a1a2b', muted: '#3f5670',
      accent: '#1b5488', 'accent-strong': '#154066', 'accent-ink': '#ffffff',
      'accent-soft': '#eaf2fa', 'accent-soft-border': '#c7dbee',
      'card-bg': '#ffffff', 'card-border': '#efe9d8',
      'panel-bg': '#0f2a44', 'panel-ink': '#fbf8f0', 'panel-muted': '#c9d6e3',
      'cta-bg': '#ffc933', 'cta-ink': '#0a1a2b',
    },
    dark: {
      'hero-from': '#0a1a2b', 'hero-via': '#0f2a44', 'hero-to': '#154066',
      'hero-ink': '#fbf8f0', 'hero-eyebrow': '#ffd65c',
      'hero-button-bg': '#ffc933', 'hero-button-ink': '#0a1a2b',
      glow: '255, 201, 51',
      ground: '#0a1a2b', ink: '#f5efdc', muted: '#a9b9c9',
      accent: '#ffd65c', 'accent-strong': '#ffe27f', 'accent-ink': '#0a1a2b',
      'accent-soft': '#0f2a44', 'accent-soft-border': '#1b5488',
      'card-bg': '#0f2a44', 'card-border': '#1b5488',
      'panel-bg': '#050e18', 'panel-ink': '#fbf8f0', 'panel-muted': '#b8c7d6',
      'cta-bg': '#ffc933', 'cta-ink': '#0a1a2b',
    },
    motion: { eyebrowIcon: '🐦', eyebrowMotion: 'cp-flutter 2.2s ease-in-out infinite', coverMotion: 'cp-rise 3.4s ease-in-out infinite' },
    pattern: 'radial-gradient(circle at 1px 1px, rgba(255, 214, 92, 0.12) 1.5px, transparent 2px)',
    patternSize: '24px 24px',
  },

  // jungle green, orchid, mist. A bobbing gecko in the eyebrow.
  'crested-gecko': {
    light: {
      'hero-from': '#102518', 'hero-via': '#173622', 'hero-to': '#20492e',
      'hero-ink': '#f4faf5', 'hero-eyebrow': '#c9a6f2',
      'hero-button-bg': '#b183ea', 'hero-button-ink': '#ffffff',
      glow: '177, 131, 234',
      ground: '#f4faf5', ink: '#0a1810', muted: '#3d5a46',
      accent: '#9767d6', 'accent-strong': '#7e4fc0', 'accent-ink': '#ffffff',
      'accent-soft': '#f1eafb', 'accent-soft-border': '#dccbf5',
      'card-bg': '#ffffff', 'card-border': '#e6f2e8',
      'panel-bg': '#102518', 'panel-ink': '#f4faf5', 'panel-muted': '#bfd3c4',
      'cta-bg': '#b183ea', 'cta-ink': '#ffffff',
    },
    dark: {
      'hero-from': '#0a1810', 'hero-via': '#102518', 'hero-to': '#173622',
      'hero-ink': '#f4faf5', 'hero-eyebrow': '#c9a6f2',
      'hero-button-bg': '#b183ea', 'hero-button-ink': '#0a1810',
      glow: '177, 131, 234',
      ground: '#0a1810', ink: '#e6f2e8', muted: '#a3b9a8',
      accent: '#c9a6f2', 'accent-strong': '#d9bef7', 'accent-ink': '#0a1810',
      'accent-soft': '#173622', 'accent-soft-border': '#20492e',
      'card-bg': '#102518', 'card-border': '#20492e',
      'panel-bg': '#050d08', 'panel-ink': '#f4faf5', 'panel-muted': '#b1c8b7',
      'cta-bg': '#b183ea', 'cta-ink': '#0a1810',
    },
    motion: { eyebrowIcon: '🦎', eyebrowMotion: 'cp-bob 2.4s ease-in-out infinite', coverMotion: 'cp-rise 3.6s ease-in-out infinite' },
    pattern: 'radial-gradient(ellipse at 1px 1px, rgba(201, 166, 242, 0.10) 2px, transparent 3px)',
    patternSize: '28px 28px',
  },

  // deep teal, gold, sand. A wiggling fish in the eyebrow, no pattern.
  goldfish: {
    light: {
      'hero-from': '#0b3d45', 'hero-via': '#0f4e58', 'hero-to': '#146575',
      'hero-ink': '#fbf8f1', 'hero-eyebrow': '#f4c542',
      'hero-button-bg': '#e8ac1e', 'hero-button-ink': '#062226',
      glow: '232, 172, 30',
      ground: '#fbf8f1', ink: '#062226', muted: '#2f5a62',
      accent: '#1b7f92', 'accent-strong': '#146575', 'accent-ink': '#ffffff',
      'accent-soft': '#e8f3f4', 'accent-soft-border': '#bfdde1',
      'card-bg': '#ffffff', 'card-border': '#f5eedd',
      'panel-bg': '#0b3d45', 'panel-ink': '#fbf8f1', 'panel-muted': '#bfd7db',
      'cta-bg': '#e8ac1e', 'cta-ink': '#062226',
    },
    dark: {
      'hero-from': '#062226', 'hero-via': '#0b3d45', 'hero-to': '#0f4e58',
      'hero-ink': '#fbf8f1', 'hero-eyebrow': '#f4c542',
      'hero-button-bg': '#e8ac1e', 'hero-button-ink': '#062226',
      glow: '232, 172, 30',
      ground: '#062226', ink: '#f5eedd', muted: '#9fbcc1',
      accent: '#f4c542', 'accent-strong': '#f7d46a', 'accent-ink': '#062226',
      'accent-soft': '#0b3d45', 'accent-soft-border': '#146575',
      'card-bg': '#0b3d45', 'card-border': '#146575',
      'panel-bg': '#031416', 'panel-ink': '#fbf8f1', 'panel-muted': '#adc9ce',
      'cta-bg': '#e8ac1e', 'cta-ink': '#062226',
    },
    motion: { eyebrowIcon: '🐠', eyebrowMotion: 'cp-wiggle 2.4s ease-in-out infinite', coverMotion: 'cp-rise 3.6s ease-in-out infinite' },
    pattern: null,
  },

  // toffee, leaf green, hay. A nibbling pig in the eyebrow.
  'guinea-pig': {
    light: {
      'hero-from': '#2b1e10', 'hero-via': '#432e17', 'hero-to': '#5c3f1f',
      'hero-ink': '#fbf7ec', 'hero-eyebrow': '#8fc96b',
      'hero-button-bg': '#6fae4c', 'hero-button-ink': '#ffffff',
      glow: '111, 174, 76',
      ground: '#fbf7ec', ink: '#1c130a', muted: '#6a5335',
      accent: '#57933a', 'accent-strong': '#46792e', 'accent-ink': '#ffffff',
      'accent-soft': '#eef6e8', 'accent-soft-border': '#cde4bf',
      'card-bg': '#ffffff', 'card-border': '#f4ebd3',
      'panel-bg': '#2b1e10', 'panel-ink': '#fbf7ec', 'panel-muted': '#d9c9aa',
      'cta-bg': '#6fae4c', 'cta-ink': '#ffffff',
    },
    dark: {
      'hero-from': '#1c130a', 'hero-via': '#2b1e10', 'hero-to': '#432e17',
      'hero-ink': '#fbf7ec', 'hero-eyebrow': '#8fc96b',
      'hero-button-bg': '#8fc96b', 'hero-button-ink': '#1c130a',
      glow: '111, 174, 76',
      ground: '#1c130a', ink: '#f4ebd3', muted: '#c0ae8e',
      accent: '#8fc96b', 'accent-strong': '#a6d98a', 'accent-ink': '#1c130a',
      'accent-soft': '#2b1e10', 'accent-soft-border': '#5c3f1f',
      'card-bg': '#2b1e10', 'card-border': '#5c3f1f',
      'panel-bg': '#0e0905', 'panel-ink': '#fbf7ec', 'panel-muted': '#cdbb9a',
      'cta-bg': '#6fae4c', 'cta-ink': '#ffffff',
    },
    motion: { eyebrowIcon: '🐹', eyebrowMotion: 'cp-nibble 0.9s ease-in-out infinite', coverMotion: 'cp-rise 3.4s ease-in-out infinite' },
    pattern: 'repeating-linear-gradient(135deg, rgba(143, 201, 107, 0.07) 0 2px, transparent 2px 14px)',
    patternSize: 'auto',
  },

  // night purple, amber, sand. A blinking gecko in the eyebrow, spots on the hero.
  'leopard-gecko': {
    light: {
      'hero-from': '#241b2f', 'hero-via': '#302340', 'hero-to': '#3c2b50',
      'hero-ink': '#fbf6ee', 'hero-eyebrow': '#f6b94d',
      'hero-button-bg': '#efa22b', 'hero-button-ink': '#1a1220',
      glow: '239, 162, 43',
      ground: '#fbf6ee', ink: '#1a1220', muted: '#5a4a6a',
      accent: '#d6841a', 'accent-strong': '#b86e10', 'accent-ink': '#1a1220',
      'accent-soft': '#fcf1dc', 'accent-soft-border': '#f3d9a8',
      'card-bg': '#ffffff', 'card-border': '#f3e8d6',
      'panel-bg': '#241b2f', 'panel-ink': '#fbf6ee', 'panel-muted': '#d6cce0',
      'cta-bg': '#efa22b', 'cta-ink': '#1a1220',
    },
    dark: {
      'hero-from': '#1a1220', 'hero-via': '#241b2f', 'hero-to': '#302340',
      'hero-ink': '#fbf6ee', 'hero-eyebrow': '#f6b94d',
      'hero-button-bg': '#efa22b', 'hero-button-ink': '#1a1220',
      glow: '239, 162, 43',
      ground: '#1a1220', ink: '#f3e8d6', muted: '#b8acc4',
      accent: '#f6b94d', 'accent-strong': '#f9cb74', 'accent-ink': '#1a1220',
      'accent-soft': '#302340', 'accent-soft-border': '#4a3564',
      'card-bg': '#241b2f', 'card-border': '#4a3564',
      'panel-bg': '#0d0910', 'panel-ink': '#fbf6ee', 'panel-muted': '#c4b8d0',
      'cta-bg': '#efa22b', 'cta-ink': '#1a1220',
    },
    motion: { eyebrowIcon: '🦎', eyebrowMotion: 'cp-blink 4s ease-in-out infinite', coverMotion: 'cp-rise 3.4s ease-in-out infinite' },
    pattern: 'radial-gradient(circle at 6px 6px, rgba(246, 185, 77, 0.10) 3px, transparent 4px)',
    patternSize: '34px 34px',
  },

  // deep rose, bloom pink, cream. A beating heart in the eyebrow.
  lovebird: {
    light: {
      'hero-from': '#341019', 'hero-via': '#4c1826', 'hero-to': '#682335',
      'hero-ink': '#fdf6f3', 'hero-eyebrow': '#ff9fae',
      'hero-button-bg': '#f97c90', 'hero-button-ink': '#ffffff',
      glow: '249, 124, 144',
      ground: '#fdf6f3', ink: '#22090f', muted: '#6e3a46',
      accent: '#e85d75', 'accent-strong': '#c9455e', 'accent-ink': '#ffffff',
      'accent-soft': '#fdecef', 'accent-soft-border': '#f9cbd3',
      'card-bg': '#ffffff', 'card-border': '#f8e9e4',
      'panel-bg': '#341019', 'panel-ink': '#fdf6f3', 'panel-muted': '#e5c9cf',
      'cta-bg': '#f97c90', 'cta-ink': '#ffffff',
    },
    dark: {
      'hero-from': '#22090f', 'hero-via': '#341019', 'hero-to': '#4c1826',
      'hero-ink': '#fdf6f3', 'hero-eyebrow': '#ff9fae',
      'hero-button-bg': '#f97c90', 'hero-button-ink': '#22090f',
      glow: '249, 124, 144',
      ground: '#22090f', ink: '#f8e9e4', muted: '#c9a8af',
      accent: '#ff9fae', 'accent-strong': '#ffb7c2', 'accent-ink': '#22090f',
      'accent-soft': '#4c1826', 'accent-soft-border': '#682335',
      'card-bg': '#341019', 'card-border': '#682335',
      'panel-bg': '#120409', 'panel-ink': '#fdf6f3', 'panel-muted': '#d8b8bf',
      'cta-bg': '#f97c90', 'cta-ink': '#22090f',
    },
    motion: { eyebrowIcon: '❤️', eyebrowMotion: 'cp-beat 1.4s ease-in-out infinite', coverMotion: 'cp-rise 3.4s ease-in-out infinite' },
    pattern: 'repeating-linear-gradient(45deg, rgba(255, 159, 174, 0.06) 0 2px, transparent 2px 16px), repeating-linear-gradient(-45deg, rgba(255, 159, 174, 0.06) 0 2px, transparent 2px 16px)',
    patternSize: 'auto',
  },

  // red clay, terracotta, sage and sand. A plodding tortoise in the eyebrow.
  'russian-tortoise': {
    light: {
      'hero-from': '#442812', 'hero-via': '#5e3618', 'hero-to': '#7a4a22',
      'hero-ink': '#faf4ea', 'hero-eyebrow': '#9cae7c',
      'hero-button-bg': '#c06b36', 'hero-button-ink': '#ffffff',
      glow: '192, 107, 54',
      ground: '#faf4ea', ink: '#1d1108', muted: '#6b4d33',
      accent: '#a2552a', 'accent-strong': '#8a4622', 'accent-ink': '#ffffff',
      'accent-soft': '#fbebdf', 'accent-soft-border': '#efcdb5',
      'card-bg': '#ffffff', 'card-border': '#f2e6d3',
      'panel-bg': '#2c1a0d', 'panel-ink': '#faf4ea', 'panel-muted': '#dcc8b0',
      'cta-bg': '#c06b36', 'cta-ink': '#ffffff',
    },
    dark: {
      'hero-from': '#1d1108', 'hero-via': '#2c1a0d', 'hero-to': '#442812',
      'hero-ink': '#faf4ea', 'hero-eyebrow': '#9cae7c',
      'hero-button-bg': '#d98552', 'hero-button-ink': '#1d1108',
      glow: '192, 107, 54',
      ground: '#1d1108', ink: '#f2e6d3', muted: '#c2ad92',
      accent: '#d98552', 'accent-strong': '#e59d72', 'accent-ink': '#1d1108',
      'accent-soft': '#442812', 'accent-soft-border': '#5e3618',
      'card-bg': '#2c1a0d', 'card-border': '#5e3618',
      'panel-bg': '#0f0804', 'panel-ink': '#faf4ea', 'panel-muted': '#cdb89f',
      'cta-bg': '#c06b36', 'cta-ink': '#ffffff',
    },
    motion: { eyebrowIcon: '🐢', eyebrowMotion: 'cp-plod 2.6s ease-in-out infinite', coverMotion: 'cp-rise 4s ease-in-out infinite' },
    pattern: 'radial-gradient(circle at 0 0, transparent 13px, rgba(156, 174, 124, 0.10) 14px, rgba(156, 174, 124, 0.10) 15px, transparent 16px)',
    patternSize: '36px 36px',
  },
  // The four below never had a Gumroad listing. Their palettes are the cover
  // token blocks in care-packages/assets/package.css, the same skins their
  // PDF covers wear: pineclay, blackwater, meadow and forestfloor.

  // Pine clay: red clay and dry pine, hotter than the default earth.
  'ball-python': {
    light: {
      'hero-from': '#351f18', 'hero-via': '#452a20', 'hero-to': '#6a3a28',
      'hero-ink': '#f4eadb', 'hero-eyebrow': '#e4cdc0',
      'hero-button-bg': '#d5703f', 'hero-button-ink': '#ffffff',
      glow: '213, 112, 63',
      ground: '#faf3ec', ink: '#251511', muted: '#6e4a3a',
      accent: '#c25f30', 'accent-strong': '#a54c24', 'accent-ink': '#ffffff',
      'accent-soft': '#fbe9df', 'accent-soft-border': '#efcbb8',
      'card-bg': '#ffffff', 'card-border': '#f0dccf',
      'panel-bg': '#251511', 'panel-ink': '#f4eadb', 'panel-muted': '#d0bcb0',
      'cta-bg': '#d5703f', 'cta-ink': '#ffffff',
    },
    dark: {
      'hero-from': '#1a0f0b', 'hero-via': '#251511', 'hero-to': '#452a20',
      'hero-ink': '#f4eadb', 'hero-eyebrow': '#e4cdc0',
      'hero-button-bg': '#d5703f', 'hero-button-ink': '#ffffff',
      glow: '213, 112, 63',
      ground: '#1a0f0b', ink: '#e6d5c9', muted: '#b89e90',
      accent: '#e08a5c', 'accent-strong': '#eaa17c', 'accent-ink': '#251511',
      'accent-soft': '#351f18', 'accent-soft-border': '#5a3427',
      'card-bg': '#251511', 'card-border': '#5a3427',
      'panel-bg': '#0f0806', 'panel-ink': '#f4eadb', 'panel-muted': '#c4ada0',
      'cta-bg': '#d5703f', 'cta-ink': '#ffffff',
    },
    motion: { eyebrowIcon: '🐍', eyebrowMotion: 'cp-sway 3.6s ease-in-out infinite', coverMotion: 'cp-rise 4s ease-in-out infinite' },
    pattern: 'radial-gradient(circle at 0 0, transparent 11px, rgba(228, 205, 192, 0.10) 12px, rgba(228, 205, 192, 0.10) 13px, transparent 14px)',
    patternSize: '30px 30px',
  },

  // Blackwater: deep teal, for the fish. Ripple rings on the hero.
  'betta-fish': {
    light: {
      'hero-from': '#123039', 'hero-via': '#1a3d48', 'hero-to': '#24565f',
      'hero-ink': '#eaf3f5', 'hero-eyebrow': '#7fd3e0',
      'hero-button-bg': '#4fbccf', 'hero-button-ink': '#0a1d23',
      glow: '79, 188, 207',
      ground: '#f1f7f8', ink: '#0a1d23', muted: '#3b5f68',
      accent: '#1e8a9c', 'accent-strong': '#166d7c', 'accent-ink': '#ffffff',
      'accent-soft': '#e3f2f5', 'accent-soft-border': '#b9dde4',
      'card-bg': '#ffffff', 'card-border': '#d8e8ec',
      'panel-bg': '#0a1d23', 'panel-ink': '#eaf3f5', 'panel-muted': '#b6cdd4',
      'cta-bg': '#4fbccf', 'cta-ink': '#0a1d23',
    },
    dark: {
      'hero-from': '#0a1d23', 'hero-via': '#123039', 'hero-to': '#1a3d48',
      'hero-ink': '#eaf3f5', 'hero-eyebrow': '#7fd3e0',
      'hero-button-bg': '#4fbccf', 'hero-button-ink': '#0a1d23',
      glow: '79, 188, 207',
      ground: '#0a1d23', ink: '#dfeef1', muted: '#9ab9c0',
      accent: '#4fbccf', 'accent-strong': '#7fd3e0', 'accent-ink': '#0a1d23',
      'accent-soft': '#123039', 'accent-soft-border': '#24565f',
      'card-bg': '#123039', 'card-border': '#24565f',
      'panel-bg': '#050f13', 'panel-ink': '#eaf3f5', 'panel-muted': '#a9c3ca',
      'cta-bg': '#4fbccf', 'cta-ink': '#0a1d23',
    },
    motion: { eyebrowIcon: '🐠', eyebrowMotion: 'cp-wiggle 2.4s ease-in-out infinite', coverMotion: 'cp-rise 3.6s ease-in-out infinite' },
    pattern: 'radial-gradient(circle at 20px 20px, transparent 16px, rgba(127, 211, 224, 0.09) 17px, rgba(127, 211, 224, 0.09) 18px, transparent 19px)',
    patternSize: '40px 40px',
  },

  // Meadow: deep moss and hay, for the grazing herbivores. Hay lines on the hero.
  rabbit: {
    light: {
      'hero-from': '#242c1d', 'hero-via': '#303a26', 'hero-to': '#46532f',
      'hero-ink': '#eef1e4', 'hero-eyebrow': '#c6db8a',
      'hero-button-bg': '#a9c266', 'hero-button-ink': '#171d13',
      glow: '169, 194, 102',
      ground: '#f7f8f0', ink: '#171d13', muted: '#55603f',
      accent: '#6f8a2e', 'accent-strong': '#58701f', 'accent-ink': '#ffffff',
      'accent-soft': '#eef4dc', 'accent-soft-border': '#d3e0ad',
      'card-bg': '#ffffff', 'card-border': '#e5e9d6',
      'panel-bg': '#171d13', 'panel-ink': '#eef1e4', 'panel-muted': '#c2ccb3',
      'cta-bg': '#a9c266', 'cta-ink': '#171d13',
    },
    dark: {
      'hero-from': '#10150c', 'hero-via': '#171d13', 'hero-to': '#303a26',
      'hero-ink': '#eef1e4', 'hero-eyebrow': '#c6db8a',
      'hero-button-bg': '#a9c266', 'hero-button-ink': '#171d13',
      glow: '169, 194, 102',
      ground: '#10150c', ink: '#e3e8d4', muted: '#a8b394',
      accent: '#a9c266', 'accent-strong': '#c6db8a', 'accent-ink': '#171d13',
      'accent-soft': '#242c1d', 'accent-soft-border': '#46532f',
      'card-bg': '#171d13', 'card-border': '#46532f',
      'panel-bg': '#080b06', 'panel-ink': '#eef1e4', 'panel-muted': '#b5c0a4',
      'cta-bg': '#a9c266', 'cta-ink': '#171d13',
    },
    motion: { eyebrowIcon: '🐰', eyebrowMotion: 'cp-bob 1.6s ease-in-out infinite', coverMotion: 'cp-rise 3.4s ease-in-out infinite' },
    pattern: 'repeating-linear-gradient(135deg, rgba(198, 219, 138, 0.07) 0 2px, transparent 2px 14px)',
    patternSize: 'auto',
  },

  // Forest floor: the near-black of leaf litter, for the inverts. A slow crawl.
  tarantula: {
    light: {
      'hero-from': '#1f1c23', 'hero-via': '#2c2830', 'hero-to': '#443c4a',
      'hero-ink': '#ede6ea', 'hero-eyebrow': '#e3a27f',
      'hero-button-bg': '#cb7c4f', 'hero-button-ink': '#ffffff',
      glow: '203, 124, 79',
      ground: '#f5f2f4', ink: '#141216', muted: '#5c5462',
      accent: '#b8653a', 'accent-strong': '#9a5230', 'accent-ink': '#ffffff',
      'accent-soft': '#f8e9e0', 'accent-soft-border': '#ebcbb8',
      'card-bg': '#ffffff', 'card-border': '#e6e0e5',
      'panel-bg': '#141216', 'panel-ink': '#ede6ea', 'panel-muted': '#c0b8bf',
      'cta-bg': '#cb7c4f', 'cta-ink': '#ffffff',
    },
    dark: {
      'hero-from': '#0e0c10', 'hero-via': '#141216', 'hero-to': '#2c2830',
      'hero-ink': '#ede6ea', 'hero-eyebrow': '#e3a27f',
      'hero-button-bg': '#cb7c4f', 'hero-button-ink': '#ffffff',
      glow: '203, 124, 79',
      ground: '#0e0c10', ink: '#e3dbe0', muted: '#a89fa7',
      accent: '#e39468', 'accent-strong': '#eeae8b', 'accent-ink': '#141216',
      'accent-soft': '#1f1c23', 'accent-soft-border': '#443c4a',
      'card-bg': '#1f1c23', 'card-border': '#443c4a',
      'panel-bg': '#070609', 'panel-ink': '#ede6ea', 'panel-muted': '#b3aab2',
      'cta-bg': '#cb7c4f', 'cta-ink': '#ffffff',
    },
    motion: { eyebrowIcon: '🕷️', eyebrowMotion: 'cp-drift 3.2s ease-in-out infinite', coverMotion: 'cp-rise 4.2s ease-in-out infinite' },
    pattern: 'radial-gradient(circle at 1px 1px, rgba(227, 162, 127, 0.10) 1.5px, transparent 2px)',
    patternSize: '22px 22px',
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
