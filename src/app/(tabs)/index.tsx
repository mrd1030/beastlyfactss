import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { FlatList, Image, Pressable, RefreshControl, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { DailyFactCard } from '@/components/daily-fact-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { fetchCategories, fetchRecentEntries } from '@/content-client/queries';
import { sanityImageUrl } from '@/content-client/sanityClient';
import { getAllSpeciesAsEntries } from '@/content-client/species-catalog';
import type { ProvisionalEntry } from '@/content-client/types';
import { useFavorites } from '@/hooks/use-favorites';
import { useTheme } from '@/hooks/use-theme';

const SAVED_FILTER_KEY = '__saved__';

export default function BrowseScreen() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');
  const router = useRouter();
  const theme = useTheme();
  const { favoriteIds, toggleFavorite } = useFavorites();

  const {
    data,
    isFetching: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['browse', 'categoriesAndEntries'],
    queryFn: async () => {
      const [categories, entries] = await Promise.all([fetchCategories(), fetchRecentEntries()]);
      return { categories, entries };
    },
  });

  const categories = data?.categories ?? [];

  // The Browse list/search/category-filter below stays Sanity-post-only,
  // per product intent — Sanity remains a valid secondary source for
  // blog-style browsing. The Daily Fact card, though, draws from a wider
  // pool that also includes the bundled 78-species catalog: its `facts[]`
  // arrays are real, curated content (beastlyfactss's own guide facts),
  // richer than the placeholder excerpt/title fallback most Sanity posts
  // still hit today. Mixing the catalog in here just widens which entries
  // day-of-year rotation can land on (see pickDailyEntry) — it doesn't
  // change what's browsable/searchable in the list.
  const dailyFactPool = useMemo(
    () => [...getAllSpeciesAsEntries(), ...(data?.entries ?? [])],
    [data?.entries]
  );

  const visibleEntries = useMemo(() => {
    const pool = data?.entries ?? [];
    const query = searchText.trim().toLowerCase();
    return pool.filter((e) => {
      if (activeCategory === SAVED_FILTER_KEY && !favoriteIds.has(e._id)) return false;
      if (activeCategory && activeCategory !== SAVED_FILTER_KEY && e.categoryTitle !== activeCategory) {
        return false;
      }
      if (query) {
        const haystack = `${e.title} ${e.excerpt ?? ''}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  }, [data?.entries, activeCategory, favoriteIds, searchText]);

  const openEntry = (entry: ProvisionalEntry) => {
    router.push({ pathname: '/entry/[id]', params: { id: entry._id } });
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="title" style={styles.title}>
          Browse
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          Live from the same Sanity project beastlyfactss uses — read-only, nothing shared with that repo.
        </ThemedText>

        {dailyFactPool.length > 0 && <DailyFactCard pool={dailyFactPool} onOpenEntry={openEntry} />}

        <ThemedView type="backgroundElement" style={styles.searchBox}>
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search title or excerpt…"
            placeholderTextColor={theme.textSecondary}
            style={[styles.searchInput, { color: theme.text }]}
          />
        </ThemedView>

        {error && (
          <ThemedView type="backgroundElement" style={styles.errorBox}>
            <ThemedText type="small">Could not reach Sanity. Check your connection and try again.</ThemedText>
            <Pressable onPress={() => refetch()}>
              <ThemedText type="linkPrimary">Retry</ThemedText>
            </Pressable>
          </ThemedView>
        )}

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryRow}
          contentContainerStyle={styles.categoryRowContent}
          data={[{ _id: SAVED_FILTER_KEY, title: '★ Saved' }, ...categories]}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            const selected = activeCategory === (item._id === SAVED_FILTER_KEY ? SAVED_FILTER_KEY : item.title);
            const filterValue = item._id === SAVED_FILTER_KEY ? SAVED_FILTER_KEY : item.title;
            return (
              <Pressable
                onPress={() => setActiveCategory(selected ? null : filterValue)}
                style={{ marginRight: Spacing.two }}>
                <ThemedView
                  type={selected ? 'backgroundSelected' : 'backgroundElement'}
                  style={styles.categoryChip}>
                  <ThemedText type="smallBold">{item.title}</ThemedText>
                </ThemedView>
              </Pressable>
            );
          }}
          ListEmptyComponent={
            loading ? <ThemedText type="small">Loading categories…</ThemedText> : null
          }
        />

        <FlatList
          style={styles.list}
          contentContainerStyle={{ paddingBottom: BottomTabInset + Spacing.three, gap: Spacing.two }}
          data={visibleEntries}
          keyExtractor={(item) => item._id}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={() => refetch()} />}
          renderItem={({ item }) => {
            const thumb = sanityImageUrl(item.mainImage, 120);
            const saved = favoriteIds.has(item._id);
            return (
              <Pressable onPress={() => openEntry(item)}>
                <ThemedView type="backgroundElement" style={styles.entryCard}>
                  {thumb && <Image source={{ uri: thumb }} style={styles.entryThumb} />}
                  <ThemedView style={styles.entryBody}>
                    <ThemedText type="smallBold" numberOfLines={2}>
                      {item.title}
                    </ThemedText>
                    {item.excerpt && (
                      <ThemedText type="small" themeColor="textSecondary" numberOfLines={2}>
                        {item.excerpt}
                      </ThemedText>
                    )}
                    {item.categoryTitle && (
                      <ThemedText type="small" themeColor="textSecondary">
                        {item.categoryTitle}
                      </ThemedText>
                    )}
                  </ThemedView>
                  <Pressable
                    onPress={(evt) => {
                      evt.stopPropagation();
                      toggleFavorite(item._id);
                    }}
                    hitSlop={8}
                    style={styles.favoriteButton}>
                    <ThemedText type="default">{saved ? '★' : '☆'}</ThemedText>
                  </Pressable>
                </ThemedView>
              </Pressable>
            );
          }}
          ListEmptyComponent={
            !loading ? (
              <ThemedText type="small" themeColor="textSecondary">
                {error ? ' ' : 'Nothing here yet.'}
              </ThemedText>
            ) : null
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
    gap: Spacing.three,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
  },
  searchBox: {
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.three,
  },
  searchInput: {
    height: 40,
    fontSize: 14,
  },
  errorBox: {
    borderRadius: Spacing.two,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  categoryRow: {
    flexGrow: 0,
  },
  categoryRowContent: {
    paddingVertical: Spacing.one,
  },
  categoryChip: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderRadius: 999,
  },
  list: {
    flex: 1,
  },
  entryCard: {
    flexDirection: 'row',
    gap: Spacing.three,
    borderRadius: Spacing.two,
    padding: Spacing.two,
    alignItems: 'center',
  },
  entryThumb: {
    width: 56,
    height: 56,
    borderRadius: Spacing.one,
  },
  entryBody: {
    flex: 1,
    gap: 2,
  },
  favoriteButton: {
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
});
