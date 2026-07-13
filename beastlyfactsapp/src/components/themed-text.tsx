import { StyleSheet, Text, type TextProps } from 'react-native';

import { AppFonts, Fonts, ThemeColor } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'small' | 'smallBold' | 'subtitle' | 'link' | 'linkPrimary' | 'code';
  themeColor?: ThemeColor;
};

/**
 * Typography follows the site's pairing: Fredoka (display) for titles,
 * subtitles, and bold labels; Nunito (body) for running text. Families are
 * per-weight (see AppFonts) - do not add `fontWeight` on top of them, that
 * causes faux-bold on Android.
 */
export function ThemedText({ style, type = 'default', themeColor, ...rest }: ThemedTextProps) {
  const theme = useTheme();

  return (
    <Text
      style={[
        { color: type === 'linkPrimary' ? theme.accent : theme[themeColor ?? 'text'] },
        type === 'default' && styles.default,
        type === 'title' && styles.title,
        type === 'small' && styles.small,
        type === 'smallBold' && styles.smallBold,
        type === 'subtitle' && styles.subtitle,
        type === 'link' && styles.link,
        type === 'linkPrimary' && styles.linkPrimary,
        type === 'code' && styles.code,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  small: {
    fontFamily: AppFonts.body,
    fontSize: 14,
    lineHeight: 20,
  },
  smallBold: {
    fontFamily: AppFonts.display,
    fontSize: 14,
    lineHeight: 20,
  },
  default: {
    fontFamily: AppFonts.body,
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontFamily: AppFonts.displayBold,
    fontSize: 34,
    lineHeight: 40,
  },
  subtitle: {
    fontFamily: AppFonts.display,
    fontSize: 24,
    lineHeight: 32,
  },
  link: {
    fontFamily: AppFonts.bodyBold,
    lineHeight: 30,
    fontSize: 14,
  },
  linkPrimary: {
    fontFamily: AppFonts.bodyBold,
    lineHeight: 30,
    fontSize: 14,
  },
  code: {
    fontFamily: Fonts.mono,
    fontSize: 12,
  },
});
