import { useMemo, useRef, useState } from 'react';
import { FlatList, Pressable, RefreshControl, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { FactCard } from '@/components/fact-card';
import { PaginationRow } from '@/components/pagination-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Radius, Spacing, getCategoryAccent } from '@/constants/theme';
import { getAllFactCategories, getAllFacts } from '@/content-client/facts-catalog';
import { useThemePreference } from '@/contexts/theme-preference';
import { useFavorites } from '@/hooks/use-favorites';
import { getFactFavoriteId } from '@/lib/favorite-keys';
import { useTheme } from '@/hooks/use-theme';

const FACTS_PAGE_SIZE = 12;

export default function FactsScreen() {
  const theme = useTheme();
  const { colorScheme } = useThemePreference();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const listRef = useRef<FlatList<ReturnType<typeof getAllFacts>[number]>>(null);
  const { favoriteIds, toggleFavorite } = useFavorites();

  const allFacts = useMemo(() => getAllFacts(), []);
  const categories = useMemo(() => getAllFactCategories(), []);

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

  const pageCount = Math.max(1, Math.ceil(visibleFacts.length / FACTS_PAGE_SIZE));
  const currentPage = Math.min(page, pageCount - 1);
  const paginatedFacts = visibleFacts.slice(currentPage * FACTS_PAGE_SIZE, (currentPage + 1) * FACTS_PAGE_SIZE);

  const goToPage = (nextPage: number) => {
    setPage(nextPage);
    listRef.current?.scrollToOffset({ offset: 0, animated: false });
  };

  // Category switches restart the list from the top; typing in search must
  // not, or the keyboard focus gets yanked around mid-word.
  const selectCategory = (category: string | null) => {
    setActiveCategory(category);
    setPage(0);
    listRef.current?.scrollToOffset({ offset: 0, animated: false });
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    setActiveCategory(null);
    setSearchText('');
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
              <View>
                <ThemedText type="title" style={styles.title}>
                  Fun Facts
                </ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {visibleFacts.length === allFacts.length
                    ? `${allFacts.length} mind-blowing animal facts`
                    : `${visibleFacts.length} of ${allFacts.length} facts`}
                </ThemedText>
              </View>

              <ThemedView type="backgroundElement" style={styles.searchBox}>
                <TextInput
                  value={searchText}
                  onChangeText={(value) => {
                    setSearchText(value);
                    setPage(0);
                  }}
                  placeholder="Search facts or animals…"
                  placeholderTextColor={theme.textSecondary}
                  style={[styles.searchInput, { color: theme.text }]}
                />
              </ThemedView>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryRowContent}
                style={styles.categoryRow}>
                {categories.map((item) => {
                  const selected = activeCategory === item;
                  const accent = getCategoryAccent(item, colorScheme);
                  return (
                    <Pressable
                      key={item}
                      onPress={() => selectCategory(selected ? null : item)}
                      style={styles.categoryChipWrap}>
                      <View
                        style={[
                          styles.categoryChip,
                          { backgroundColor: selected ? accent.strong : accent.tint },
                        ]}>
                        <ThemedText type="smallBold" style={{ color: selected ? theme.onAccent : accent.strong }}>
                          {item}
                        </ThemedText>
                      </View>
                    </Pressable>
                  );
                })}
              </ScrollView>
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
  title: {
    fontSize: 32,
    lineHeight: 38,
  },
  searchBox: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.four,
    marginTop: Spacing.one,
  },
  searchInput: {
    height: 44,
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
    borderRadius: Radius.pill,
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
