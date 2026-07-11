import { Pressable, StyleSheet, View } from 'react-native';

import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

/** Shared Previous / "X / Y" / Next pagination footer (Facts, Blog). */
export function PaginationRow({
  page,
  pageCount,
  onChange,
}: {
  /** Zero-based current page. */
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
}) {
  const theme = useTheme();

  if (pageCount <= 1) return null;

  const atStart = page === 0;
  const atEnd = page >= pageCount - 1;

  return (
    <View style={styles.row}>
      <Pressable disabled={atStart} onPress={() => onChange(Math.max(0, page - 1))}>
        <ThemedView type="backgroundElement" style={[styles.button, atStart && styles.disabled]}>
          <ThemedText type="smallBold" themeColor={atStart ? 'textSecondary' : 'text'}>
            ← Prev
          </ThemedText>
        </ThemedView>
      </Pressable>

      <View style={[styles.badge, { backgroundColor: theme.accent }]}>
        <ThemedText type="smallBold" style={{ color: theme.onAccent }}>
          {page + 1} / {pageCount}
        </ThemedText>
      </View>

      <Pressable disabled={atEnd} onPress={() => onChange(Math.min(pageCount - 1, page + 1))}>
        <ThemedView type="backgroundElement" style={[styles.button, atEnd && styles.disabled]}>
          <ThemedText type="smallBold" themeColor={atEnd ? 'textSecondary' : 'text'}>
            Next →
          </ThemedText>
        </ThemedView>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: Spacing.two,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  button: {
    minWidth: 96,
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.45,
  },
  badge: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
});
