import { StyleSheet, View, type ViewProps } from 'react-native';

import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type CardProps = ViewProps & {
  /** 'outline' (default) = background-colored surface with a hairline
   * border; 'filled' = backgroundElement fill; 'soft' = accentSoft fill for
   * featured/highlight cards. */
  variant?: 'outline' | 'filled' | 'soft';
  /** Corner radius token; defaults to lg (20). */
  radius?: keyof typeof Radius;
  /** Inner padding; defaults to Spacing.three (16). */
  padded?: boolean;
};

/**
 * The app's shared card surface. Replaces the old pattern of ad-hoc
 * ThemedView type="backgroundElement" slabs with an 8px radius everywhere —
 * outlined-by-default with a hairline border and a generous radius, which
 * is most of what separates an "app" feel from a "stacked boxes" feel.
 */
export function Card({ variant = 'outline', radius = 'lg', padded = true, style, ...rest }: CardProps) {
  const theme = useTheme();

  const surface =
    variant === 'filled'
      ? { backgroundColor: theme.backgroundElement }
      : variant === 'soft'
        ? { backgroundColor: theme.accentSoft }
        : { backgroundColor: theme.background, borderWidth: 1, borderColor: theme.hairline };

  return (
    <View
      style={[styles.base, { borderRadius: Radius[radius] }, surface, padded && styles.padded, style]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    overflow: 'hidden',
  },
  padded: {
    padding: Spacing.three,
  },
});
