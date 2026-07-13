/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { Platform } from 'react-native';

// Brand palette, matching the beastlyfactss website (forest green + cream,
// with orange/teal/sunny-yellow/hot-pink as accent pops — see
// beastlyfactss/tailwind.config.js and src/index.css). Accent/success/warning
// are deepened versions of the site's orange/teal/yellow specifically for
// use as small text/icon colors (the site's own vivid hexes stay legible as
// link text there partly because of font-weight/size choices we can't rely
// on everywhere here); danger keeps the site's hot-pink hue, similarly
// deepened. Dark mode leans back toward the site's original vivid hexes,
// since those already read fine against a near-black surface.
export const Colors = {
  light: {
    text: '#1F3529',
    textSecondary: '#6E7A6B',
    // Warm cream world, matching the site's light mode (cream #F8F1E9) -
    // the previous all-sage palette read as clinical. Elements/selected are
    // deeper sand tones of the same cream family.
    background: '#FAF6EE',
    backgroundElement: '#F1E8DB',
    backgroundSelected: '#E9DCC8',
    accent: '#2E7D66',
    accentSoft: '#E3F0E6',
    success: '#218B6B',
    danger: '#D8446B',
    warning: '#B07A16',
    // Hairline card/divider borders — a low-alpha tint of `text`, so cards
    // can read as outlined surfaces instead of flat filled slabs.
    hairline: 'rgba(31, 53, 41, 0.12)',
    // Text color for content sitting on an accent-filled surface (selected
    // chips, primary buttons).
    onAccent: '#F6FFFB',
  },
  // Matches the site's actual dark mode exactly (beastlyfactss/src/index.css
  // `.dark`: --background 150 30% 6%, --card 150 25% 10%, --muted 150 20% 14%,
  // --foreground 34 40% 95%, --muted-foreground 34 20% 60%) - a dark FOREST
  // GREEN family, not neutral charcoal. An earlier pass here deliberately
  // moved away from a green-tinted dark background toward neutral charcoal,
  // which was a mistake: that "green-cast" direction was actually correct,
  // it just wasn't tuned to the site's specific hue/lightness values yet.
  dark: {
    text: '#F7F3ED',
    textSecondary: '#AD9C85',
    background: '#0B140F',
    backgroundElement: '#13201A',
    backgroundSelected: '#1D2B24',
    accent: '#72D0A7',
    accentSoft: '#20302A',
    success: '#4FD3A1',
    danger: '#F37C97',
    warning: '#E5C15B',
    hairline: 'rgba(247, 243, 237, 0.12)',
    onAccent: '#0B231A',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

// The site's raw brand hexes (beastlyfactss/tailwind.config.js). Use these
// for identity moments (wordmark, hero pops), not for body text - most are
// too vivid to be legible at small sizes; use CategoryAccent.strong there.
export const Brand = {
  forest: '#0F3A1F',
  orange: '#FF8C42',
  teal: '#00B8A9',
  cream: '#F8F1E9',
  hotpink: '#E8336D',
  sunny: '#FFD93D',
} as const;

export type CategoryAccent = { tint: string; strong: string };

// Per-category card accents, mirroring the site's fact category colors
// (beastlyfactss/src/lib/data/facts.js: Birds teal, Dogs & Cats amber,
// Mammals orange, Ocean blue, Reptiles forest, Weird & Wonderful hotpink).
// `strong` is deepened (light) / brightened (dark) so it stays legible as
// small text and icons sitting on `tint`.
const CATEGORY_ACCENTS: Record<string, { light: CategoryAccent; dark: CategoryAccent }> = {
  'Birds': { light: { tint: '#DDF2EF', strong: '#00796C' }, dark: { tint: '#12332F', strong: '#4FD0C0' } },
  'Dogs & Cats': { light: { tint: '#FDEBDC', strong: '#B85B1B' }, dark: { tint: '#3A2414', strong: '#FFA35C' } },
  'Mammals': { light: { tint: '#FBF0D2', strong: '#96700F' }, dark: { tint: '#37310F', strong: '#F0D264' } },
  'Ocean': { light: { tint: '#DFEDFA', strong: '#2A6CB0' }, dark: { tint: '#132A3E', strong: '#6FB3EC' } },
  'Reptiles': { light: { tint: '#E1F0E0', strong: '#2F7D3B' }, dark: { tint: '#16301A', strong: '#7BD389' } },
  'Weird & Wonderful': { light: { tint: '#FBE3EB', strong: '#C22558' }, dark: { tint: '#3B1523', strong: '#F27BA1' } },
};

export function getCategoryAccent(
  category: string | null | undefined,
  scheme: 'light' | 'dark',
): CategoryAccent {
  const entry = category ? CATEGORY_ACCENTS[category] : undefined;
  if (entry) return entry[scheme];
  return scheme === 'light'
    ? { tint: Colors.light.accentSoft, strong: Colors.light.accent }
    : { tint: Colors.dark.accentSoft, strong: Colors.dark.accent };
}

// Brand typefaces, loaded in app/_layout.tsx via @expo-google-fonts.
// Same pairing as the site: Fredoka for display/headings, Nunito for body.
// One family name per weight - never combine these with `fontWeight`, which
// triggers faux-bold on Android.
export const AppFonts = {
  display: 'Fredoka_600SemiBold',
  displayBold: 'Fredoka_700Bold',
  body: 'Nunito_500Medium',
  bodySemiBold: 'Nunito_600SemiBold',
  bodyBold: 'Nunito_700Bold',
} as const;

/** Corner radii. The old habit of using Spacing.two (8) for every surface
 * is what made the UI read as "blocky" — cards want lg, chips/inputs pill
 * or md, small inline badges sm. */
export const Radius = {
  sm: 10,
  md: 14,
  lg: 20,
  xl: 28,
  pill: 999,
} as const;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

// Web's tab bar (app-tabs.web.tsx) is a fixed-position bar pinned to the
// bottom of the viewport, not a real OS tab bar — its rendered height
// (padding + inner content) was measured in-browser at 78px, so scrollable
// screens reserve that much space on web too (previously 0, which let the
// last item in a long list sit behind the bar).
export const BottomTabInset = Platform.select({ ios: 50, android: 80, web: 78 }) ?? 0;
export const MaxContentWidth = 800;
