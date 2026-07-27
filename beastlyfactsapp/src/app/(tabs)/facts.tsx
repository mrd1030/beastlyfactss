import { useMemo, useRef, useState } from 'react';
import { FlatList, Pressable, RefreshControl, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppMenu } from '@/components/app-menu';
import { FactCard } from '@/components/fact-card';
import { PaginationRow } from '@/components/pagination-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TwoToneTitle } from '@/components/two-tone-title';
import { BottomTabInset, MaxContentWidth, MinTouchTarget, Radius, Spacing, getCategoryAccent } from '@/constants/theme';
import { getAllFactCategories, getAllFacts } from '@/content-client/facts-catalog';
import { useThemePreference } from '@/contexts/theme-preference';
import { useFavorites } from '@/hooks/use-favorites';
import { getFactFavoriteId } from '@/lib/favorite-keys';
import { filterFacts, orderFacts, paginateFacts, shuffleArray } from '@/lib/facts-utils';
import { useTheme } from '@/hooks/use-theme';

const FACTS_PAGE_SIZE = 12;

export default function FactsScreen() {
  const theme = useTheme();
  const { colorScheme } = useThemePreference();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const [randomized, setRandomized] = useState(false);
  const [randomOrderIds, setRandomOrderIds] = useState<number[]>([]);
  const listRef = useRef<FlatList<ReturnType<typeof getAllFacts>[number]>>(null);
  const { favoriteIds, toggleFavorite } = useFavorites();

  const allFacts = useMemo(() => getAllFacts(), []);
  const categories = useMemo(() => getAllFactCategories(), []);

  const visibleFacts = useMemo(() => {
    return filterFacts(allFacts, activeCategory, searchText);
  }, [allFacts, activeCategory, searchText]);

  // Random order is a snapshot of ids, established once when the shuffle
  // toggles on, so pagination doesn't reshuffle every page turn - it's re-
  // filtered against whatever category/search currently applies.
  const displayFacts = useMemo(() => {
    return orderFacts(visibleFacts, randomized, randomOrderIds);
  }, [visibleFacts, randomized, randomOrderIds]);

  const { pageCount, currentPage, factsPage: paginatedFacts } = useMemo(
    () => paginateFacts(displayFacts, page, FACTS_PAGE_SIZE),
    [displayFacts, page]
  );

  const goToPage = (nextPage: number) => {
    setPage(nextPage);
    listRef.current?.scrollToOffset({ offset: 0, animated: false });
  };

  const clearRandomize = () => {
    setRandomized(false);
    setRandomOrderIds([]);
  };

  // Category switches restart the list from the top; typing in search must
  // not, or the keyboard focus gets yanked around mid-word. Either one
  // invalidates a shuffle in progress - it was ordering a different set of
  // facts.
  const selectCategory = (category: string | null) => {
    setActiveCategory(category);
    clearRandomize();
    setPage(0);
    listRef.current?.scrollToOffset({ offset: 0, animated: false });
  };

  const handleRandomize = () => {
    if (randomized) {
      clearRandomize();
    } else {
      setRandomOrderIds(shuffleArray(visibleFacts).map((fact) => fact.id));
      setRandomized(true);
    }
    setPage(0);
    listRef.current?.scrollToOffset({ offset: 0, animated: false });
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    setActiveCategory(null);
    setSearchText('');
    clearRandomize();
    setPage(0);
    await Promise.resolve();
    setRefreshing(false);
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          ref={listRef}
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={paginatedFacts}
          keyExtractor={(item) => String(item.id)}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
          renderItem={({ item }) => (
            <FactCard
              fact={item}
              saved={favoriteIds.has(getFactFavoriteId(item.id))}
              onToggleSaved={() => toggleFavorite(getFactFavoriteId(item.id))}
            />
          )}
          ListHeaderComponent={
            <View style={styles.headerContent}>
              <View style={styles.titleRow}>
                <View style={styles.titleBlock}>
                  <TwoToneTitle first="Fun " second="Facts" style={styles.title} />
                  <ThemedText type="small" themeColor="textSecondary">
                    {visibleFacts.length === allFacts.length
                      ? `${allFacts.length} mind-blowing animal facts`
                      : `${visibleFacts.length} of ${allFacts.length} facts`}
                    {randomized && <ThemedText type="small" style={{ color: theme.accent }}> · shuffled 🔀</ThemedText>}
                  </ThemedText>
                </View>
                <AppMenu />
              </View>

              <View style={styles.searchRow}>
                <ThemedView type="backgroundElement" style={[styles.searchBox, styles.searchBoxFlex]}>
                  <TextInput
                    value={searchText}
                    onChangeText={(value) => {
                      setSearchText(value);
                      clearRandomize();
                      setPage(0);
                    }}
                    placeholder="Search facts or animals…"
                    placeholderTextColor={theme.textSecondary}
                    style={[styles.searchInput, { color: theme.text }]}
                    accessibilityLabel="Search facts"
                    returnKeyType="search"
                  />
                </ThemedView>
                <Pressable
                  onPress={handleRandomize}
                  accessibilityRole="button"
                  accessibilityLabel={randomized ? 'Disable shuffled facts order' : 'Shuffle facts'}>
                  <ThemedView
                    type={randomized ? 'backgroundSelected' : 'backgroundElement'}
                    style={[styles.randomizeButton, randomized && { borderColor: theme.accent, borderWidth: 1 }]}>
                    <ThemedText style={styles.randomizeIcon}>🔀</ThemedText>
                  </ThemedView>
                </Pressable>
              </View>

              <View style={styles.categoryWrap}>
                <Pressable
                  onPress={() => selectCategory(null)}
                  accessibilityRole="button"
                  accessibilityLabel="Show all fact categories"
                  accessibilityState={{ selected: activeCategory === null }}>
                  <View
                    style={[
                      styles.categoryChip,
                      { backgroundColor: activeCategory === null ? theme.accent : theme.backgroundElement },
                    ]}>
                    <ThemedText type="smallBold" style={{ color: activeCategory === null ? theme.onAccent : theme.text }}>
                      ✨ All
                    </ThemedText>
                  </View>
                </Pressable>
                {categories.map((item) => {
                  const selected = activeCategory === item;
                  const accent = getCategoryAccent(item, colorScheme);
                  return (
                    <Pressable
                      key={item}
                      onPress={() => selectCategory(selected ? null : item)}
                      accessibilityRole="button"
                      accessibilityLabel={`${selected ? 'Clear' : 'Filter by'} ${item} category`}
                      accessibilityState={{ selected }}>
                      <View
                        style={[
                          styles.categoryChip,
                          { backgroundColor: selected ? accent.strong : accent.tint },
                        ]}>
                        <ThemedText type="smallBold" style={{ color: selected ? theme.onAccent : accent.strong }}>
                          {item}
                          {selected ? '  ✕' : ''}
                        </ThemedText>
                      </View>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          }
          ListFooterComponent={<PaginationRow page={currentPage} pageCount={pageCount} onChange={goToPage} />}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <ThemedText style={styles.emptyEmoji}>🔍</ThemedText>
              <ThemedText type="smallBold">No facts found!</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Try a different search or category.
              </ThemedText>
            </View>
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
    paddingTop: Spacing.three,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    gap: Spacing.two,
  },
  headerContent: {
    gap: Spacing.two,
    marginBottom: Spacing.one,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  titleBlock: {
    flex: 1,
    gap: Spacing.one,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    marginTop: Spacing.one,
  },
  searchBox: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.four,
  },
  searchBoxFlex: {
    flex: 1,
  },
  searchInput: {
    height: 44,
    fontSize: 14,
  },
  randomizeButton: {
    width: 44,
    height: 44,
    borderRadius: Radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  randomizeIcon: {
    fontSize: 18,
    lineHeight: 22,
  },
  categoryWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    paddingVertical: Spacing.one,
  },
  categoryChip: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: Radius.pill,
    minHeight: MinTouchTarget,
    justifyContent: 'center',
  },
  emptyState: {
    alignItems: 'center',
    gap: Spacing.one,
    paddingVertical: Spacing.five,
  },
  emptyEmoji: {
    fontSize: 32,
    lineHeight: 40,
  },
});
