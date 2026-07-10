/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

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
    text: '#0F3A1F',
    textSecondary: '#5C6E5F',
    background: '#F8F1E9',
    backgroundElement: '#EFE4D2',
    backgroundSelected: '#E6D6B8',
    accent: '#B85C12',
    accentSoft: '#FBE3C7',
    success: '#0F7A6C',
    danger: '#B8215A',
    warning: '#8A6210',
    // Hairline card/divider borders — a low-alpha tint of `text`, so cards
    // can read as outlined surfaces instead of flat filled slabs.
    hairline: 'rgba(15, 58, 31, 0.14)',
    // Text color for content sitting on an accent-filled surface (selected
    // chips, primary buttons).
    onAccent: '#FDF7EE',
  },
  dark: {
    text: '#F5ECDC',
    textSecondary: '#B3A88F',
    background: '#0E1712',
    backgroundElement: '#182620',
    backgroundSelected: '#22362B',
    accent: '#FF9A5C',
    accentSoft: '#3D2415',
    success: '#2BC9BB',
    danger: '#F0548A',
    warning: '#F2C94C',
    hairline: 'rgba(245, 236, 220, 0.14)',
    onAccent: '#231106',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

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
