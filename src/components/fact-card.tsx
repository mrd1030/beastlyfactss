import { StyleSheet } from 'react-native';

import type { CatalogFact } from '@/content-client/facts-catalog';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { Eyebrow } from './eyebrow';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

/** A single fact from the bundled facts library (src/content-client/facts-
 * catalog.ts) — shown in full since these are already short, standalone
 * facts, not long-form articles needing a separate detail screen.
 * `featured` renders on the accentSoft surface for the fact-of-the-day slot. */
export function FactCard({ fact, featured = false }: { fact: CatalogFact; featured?: boolean }) {
  const theme = useTheme();
  return (
    <ThemedView
      type={featured ? 'accentSoft' : 'background'}
      style={[styles.card, !featured && { borderWidth: 1, borderColor: theme.hairline }]}>
      {featured && <Eyebrow>Fact of the day</Eyebrow>}
      <ThemedView style={[styles.headerRow, { backgroundColor: 'transparent' }]}>
        <ThemedText style={styles.emoji}>{fact.emoji}</ThemedText>
        <ThemedView style={[styles.headerText, { backgroundColor: 'transparent' }]}>
          <ThemedText type="smallBold">{fact.title}</ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {fact.animal} · {fact.category}
          </ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedText type="small" style={styles.body}>
        {fact.fact}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Radius.lg,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  emoji: {
    fontSize: 24,
    lineHeight: 30,
  },
  headerText: {
    flex: 1,
    gap: 2,
  },
  body: {
    lineHeight: 20,
  },
});
