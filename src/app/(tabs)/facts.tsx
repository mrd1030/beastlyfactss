import { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FactCard } from '@/components/fact-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { getAllFactCategories, getAllFacts, getFactForSeed } from '@/content-client/facts-catalog';
import { dayOfYear } from '@/lib/date';
import { useTheme } from '@/hooks/use-theme';

/**
 * Facts tab — full browse/search over the bundled real facts library
 * (src/content-client/facts-catalog.ts, ~178 real animal facts). This is
 * deliberately separate from the Daily Fact card on Browse: that card only
 * ever shows one fact at a time and gave no way to see the rest of the
 * library, which is the gap this tab exists to close.
 */
export default function FactsScreen() {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');

  const allFacts = useMemo(() => getAllFacts(), []);
  const categories = useMemo(() => getAllFactCategories(), []);
  const featuredFact = useMemo(() => getFactForSeed(dayOfYear()), []);

  const visibleFacts = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    return allFacts.filter((fact) => {
      if (activeCategory && fact.category !== activeCategory) return false;
      if (query) {
        const haystack = `${fact.title} ${fact.animal} ${fact.fact}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  }, [allFacts, activeCategory, searchText]);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="title" style={styles.title}>
          Facts
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {allFacts.length} real animal facts, bundled from beastlyfactss&apos;s own facts library.
        </ThemedText>

        <ThemedView type="backgroundSelected" style={styles.featuredCard}>
          <ThemedText type="small" themeColor="textSecondary">
            Fact of the day
          </ThemedText>
          <FactCard fact={featuredFact} />
        </ThemedView>

        <ThemedView type="backgroundElement" style={styles.searchBox}>
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search facts or animals…"
            placeholderTextColor={theme.textSecondary}
            style={[styles.searchInput, { color: theme.text }]}
          />
        </ThemedView>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryRow}
          contentContainerStyle={styles.categoryRowContent}
          data={categories}
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            const selected = activeCategory === item;
            return (
              <Pressable onPress={() => setActiveCategory(selected ? null : item)} style={styles.categoryChipWrap}>
                <ThemedView type={selected ? 'backgroundSelected' : 'backgroundElement'} style={styles.categoryChip}>
                  <ThemedText type="smallBold">{item}</ThemedText>
                </ThemedView>
              </Pressable>
            );
          }}
        />

        <FlatList
          style={styles.list}
          contentContainerStyle={{ paddingBottom: BottomTabInset + Spacing.three, gap: Spacing.two }}
          data={visibleFacts}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <FactCard fact={item} />}
          ListEmptyComponent={
            <ThemedText type="small" themeColor="textSecondary">
              No facts match that search.
            </ThemedText>
          }
        />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
    gap: Spacing.two,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
  },
  featuredCard: {
    borderRadius: Spacing.three,
    padding: Spacing.two,
  },
  searchBox: {
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.three,
    marginTop: Spacing.one,
  },
  searchInput: {
    height: 40,
    fontSize: 14,
  },
  categoryRow: {
    flexGrow: 0,
  },
  categoryRowContent: {
    paddingVertical: Spacing.one,
    gap: Spacing.two,
  },
  categoryChipWrap: {
    marginRight: Spacing.two,
  },
  categoryChip: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: 999,
  },
  list: {
    flex: 1,
  },
});
