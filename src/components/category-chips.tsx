import { Pressable, StyleSheet, View } from 'react-native';

import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

/**
 * Wrapped (not horizontally scrolled) category filter chips with an explicit
 * "All" chip and a ✕ on the active one - every category stays visible while
 * filtered, and clearing the filter doesn't require knowing the tap-again
 * gesture. Shared by Library (Care Guides + Encyclopedia) and Facts.
 */
export function CategoryChips({
  options,
  active,
  onSelect,
}: {
  options: { key: string; label: string }[];
  active: string | null;
  onSelect: (key: string | null) => void;
}) {
  const theme = useTheme();

  const chip = (key: string | null, label: string) => {
    const selected = active === key;
    return (
      <Pressable key={key ?? '__all__'} onPress={() => onSelect(selected ? null : key)}>
        <ThemedView
          type="backgroundElement"
          style={[styles.categoryChip, selected && { backgroundColor: theme.accent }]}>
          <ThemedText type="smallBold" style={selected ? { color: theme.onAccent } : undefined}>
            {label}
            {selected && key !== null ? '  ✕' : ''}
          </ThemedText>
        </ThemedView>
      </Pressable>
    );
  };

  return (
    <View style={styles.categoryWrap}>
      {chip(null, '✨ All')}
      {options.map((option) => chip(option.key, option.label))}
    </View>
  );
}

const styles = StyleSheet.create({
  categoryWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    paddingVertical: Spacing.one,
  },
  categoryChip: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
});
