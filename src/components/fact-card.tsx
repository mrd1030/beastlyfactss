import { StyleSheet } from 'react-native';

import type { CatalogFact } from '@/content-client/facts-catalog';
import { Spacing } from '@/constants/theme';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

/** A single fact from the bundled facts library (src/content-client/facts-
 * catalog.ts) — shown in full since these are already short, standalone
 * facts, not long-form articles needing a separate detail screen. */
export function FactCard({ fact }: { fact: CatalogFact }) {
  return (
    <ThemedView type="backgroundElement" style={styles.card}>
      <ThemedView style={styles.headerRow}>
        <ThemedText type="default">{fact.emoji}</ThemedText>
        <ThemedView style={styles.headerText}>
          <ThemedText type="smallBold">{fact.title}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {fact.animal} · {fact.category}
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedText type="small">{fact.fact}</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Spacing.two,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  headerText: {
    flex: 1,
    gap: 2,
  },
});
