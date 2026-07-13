import { StyleSheet, type TextStyle, type StyleProp } from 'react-native';

import { useTheme } from '@/hooks/use-theme';

import { ThemedText } from './themed-text';

/**
 * Small uppercase section label ("MY PETS", "APPEARANCE", …) in the accent
 * color with wide tracking — replaces the old plain-bold section titles.
 * Structure reads from typography instead of yet another filled box.
 */
export function Eyebrow({ children, style }: { children: string; style?: StyleProp<TextStyle> }) {
  const theme = useTheme();
  return (
    <ThemedText type="small" style={[styles.eyebrow, { color: theme.accent }, style]}>
      {children.toUpperCase()}
    </ThemedText>
  );
}

const styles = StyleSheet.create({
  eyebrow: {
    fontWeight: '700',
    letterSpacing: 1.4,
    fontSize: 12,
    lineHeight: 16,
  },
});
