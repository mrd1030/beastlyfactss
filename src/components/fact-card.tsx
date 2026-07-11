import Ionicons from '@expo/vector-icons/Ionicons';
import { Pressable, StyleSheet, View } from 'react-native';

import { Radius, Spacing, getCategoryAccent } from '@/constants/theme';
import type { CatalogFact } from '@/content-client/facts-catalog';
import { useThemePreference } from '@/contexts/theme-preference';
import { useTheme } from '@/hooks/use-theme';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

/** A single fact card, tinted by its category (Birds teal, Reptiles green,
 * etc. - see CategoryAccents in constants/theme.ts, mirroring the site).
 * `featured` renders the large daily-fact hero. */
export function FactCard({
  fact,
  featured = false,
  saved = false,
  onToggleSaved,
}: {
  fact: CatalogFact;
  featured?: boolean;
  saved?: boolean;
  onToggleSaved?: () => void;
}) {
  const theme = useTheme();
  const { colorScheme } = useThemePreference();
  const accent = getCategoryAccent(fact.category, colorScheme);

  const saveButton = onToggleSaved ? (
    <Pressable onPress={onToggleSaved} hitSlop={10}>
      <Ionicons name={saved ? 'bookmark' : 'bookmark-outline'} size={20} color={accent.strong} />
    </Pressable>
  ) : null;

  if (featured) {
    return (
      <View style={[styles.featuredCard, { backgroundColor: accent.tint }]}>
        <View style={styles.featuredTopRow}>
          <View style={[styles.metaChip, { backgroundColor: theme.background }]}>
            <ThemedText type="smallBold" style={{ color: accent.strong }}>
              {fact.animal} · {fact.category}
            </ThemedText>
          </View>
          {saveButton}
        </View>

        <ThemedText style={styles.featuredEmoji}>{fact.emoji}</ThemedText>
        <ThemedText type="subtitle" style={styles.featuredTitle}>
          {fact.title}
        </ThemedText>
        <ThemedText type="default" style={styles.featuredFact}>
          {fact.fact}
        </ThemedText>
      </View>
    );
  }

  return (
    <ThemedView
      type="background"
      style={[styles.card, { borderWidth: 1, borderColor: theme.hairline }]}>
      <View style={styles.headerRow}>
        <View style={styles.headerInfo}>
          <View style={[styles.emojiBadge, { backgroundColor: accent.tint }]}>
            <ThemedText style={styles.emoji}>{fact.emoji}</ThemedText>
          </View>
          <View style={styles.headerText}>
            <ThemedText type="smallBold" style={styles.cardTitle}>{fact.title}</ThemedText>
            <ThemedText type="small" style={{ color: accent.strong }}>
              {fact.animal} · {fact.category}
            </ThemedText>
          </View>
        </View>
        {saveButton}
      </View>
      <ThemedText type="small" style={styles.body}>
        {fact.fact}
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  /* Featured (daily fact hero) */
  featuredCard: {
    borderRadius: Radius.xl,
    overflow: 'hidden',
    padding: Spacing.four,
    gap: Spacing.two,
    alignItems: 'center',
  },
  featuredTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: Spacing.two,
  },
  metaChip: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  featuredEmoji: {
    fontSize: 72,
    lineHeight: 84,
    textAlign: 'center',
    marginTop: Spacing.one,
  },
  featuredTitle: {
    textAlign: 'center',
  },
  featuredFact: {
    textAlign: 'center',
    lineHeight: 24,
  },
  /* Standard card */
  card: {
    borderRadius: Radius.lg,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    flex: 1,
  },
  emojiBadge: {
    width: 44,
    height: 44,
    borderRadius: Radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 24,
    lineHeight: 30,
  },
  cardTitle: {
    fontSize: 15,
  },
  headerText: {
    flex: 1,
    gap: 2,
  },
  body: {
    lineHeight: 20,
  },
});
