import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { useMemo, useRef, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppMenu } from '@/components/app-menu';
import { Card } from '@/components/card';
import { PaginationRow } from '@/components/pagination-row';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TwoToneTitle } from '@/components/two-tone-title';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { fetchCollectionEntries } from '@/content-client/queries';
import { sanityImageUrl } from '@/content-client/sanityClient';
import { getAllSpeciesAsEntries } from '@/content-client/species-catalog';
import type { ProvisionalEntry } from '@/content-client/types';
import { useFavorites } from '@/hooks/use-favorites';
import { useTheme } from '@/hooks/use-theme';

const BLOG_PAGE_SIZE = 10;

type BlogSort = 'newest' | 'alpha';

/**
 * Blog - the Sanity posts that used to be mixed into the Care Guides list.
 * A stacked screen (not a tab) reached from the Home menu; guides stay
 * species-only so their count pairs with the encyclopedia.
 */
export default function BlogScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { favoriteIds, toggleFavorite } = useFavorites();
  const [refreshKey, setRefreshKey] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [sort, setSort] = useState<BlogSort>('newest');
  const [page, setPage] = useState(0);
  const listRef = useRef<FlatList<ProvisionalEntry>>(null);

  // Species guides double as Sanity posts for a few animals mid-migration -
  // exclude anything already in the bundled catalog, same rule the old
  // Library merge used.
  const catalogIds = useMemo(() => new Set(getAllSpeciesAsEntries().map((entry) => entry._id)), []);

  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ['blog', 'sanityEntries', refreshKey],
    queryFn: fetchCollectionEntries,
  });

  const posts = useMemo(
    () => (data ?? []).filter((entry) => !catalogIds.has(entry.slug ?? entry._id)),
    [data, catalogIds]
  );

  const visiblePosts = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    const filtered = posts.filter((entry) => {
      if (!query) return true;
      return `${entry.title} ${entry.excerpt ?? ''} ${entry.categoryTitle ?? ''}`.toLowerCase().includes(query);
    });
    return [...filtered].sort((a, b) =>
      sort === 'newest'
        ? new Date(b.publishedAt ?? 0).getTime() - new Date(a.publishedAt ?? 0).getTime()
        : a.title.localeCompare(b.title)
    );
  }, [posts, searchText, sort]);

  const pageCount = Math.max(1, Math.ceil(visiblePosts.length / BLOG_PAGE_SIZE));
  const currentPage = Math.min(page, pageCount - 1);
  const paginatedPosts = visiblePosts.slice(currentPage * BLOG_PAGE_SIZE, (currentPage + 1) * BLOG_PAGE_SIZE);

  const goToPage = (nextPage: number) => {
    setPage(nextPage);
    listRef.current?.scrollToOffset({ offset: 0, animated: false });
  };

  const selectSort = (nextSort: BlogSort) => {
    setSort(nextSort);
    setPage(0);
    listRef.current?.scrollToOffset({ offset: 0, animated: false });
  };

  const openEntry = (entry: ProvisionalEntry) => {
    router.push({ pathname: '/entry/[id]', params: { id: entry._id } });
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          ref={listRef}
          style={styles.list}
          contentContainerStyle={styles.listContent}
          data={paginatedPosts}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            const thumb = sanityImageUrl(item.mainImage, 800);
            const isSaved = favoriteIds.has(item._id);
            return (
              <Pressable onPress={() => openEntry(item)}>
                <Card variant="filled" style={styles.entryCard}>
                  {thumb ? (
                    <Image source={{ uri: thumb }} style={styles.entryThumb} resizeMode="contain" />
                  ) : (
                    <ThemedView type="backgroundSelected" style={[styles.entryThumb, styles.entryFallbackThumb]}>
                      <ThemedText style={styles.fallbackEmoji}>📰</ThemedText>
                    </ThemedView>
                  )}
                  <View style={styles.entryBody}>
                    <View style={styles.entryCardHeader}>
                      <ThemedText type="smallBold" numberOfLines={2} style={styles.entryTitle}>
                        {item.title}
                      </ThemedText>
                      <Pressable onPress={() => toggleFavorite(item._id)} hitSlop={8}>
                        <ThemedText type="linkPrimary">{isSaved ? '★ Saved' : '☆ Save'}</ThemedText>
                      </Pressable>
                    </View>
                    {item.categoryTitle ? (
                      <ThemedText type="small" themeColor="textSecondary">
                        {item.categoryTitle}
                      </ThemedText>
                    ) : null}
                    {item.excerpt && (
                      <ThemedText type="small" themeColor="textSecondary" numberOfLines={3} style={styles.entryExcerpt}>
                        {item.excerpt}
                      </ThemedText>
                    )}
                  </View>
                </Card>
              </Pressable>
            );
          }}
          ListHeaderComponent={
            <View style={styles.headerContent}>
              <Pressable onPress={() => router.back()} hitSlop={8}>
                <ThemedText type="linkPrimary">← Back</ThemedText>
              </Pressable>
              <View style={styles.titleRow}>
                <TwoToneTitle first="Blo" second="g" style={styles.title} />
                <AppMenu />
              </View>
              {posts.length > 0 && (
                <ThemedText type="small" themeColor="textSecondary">
                  {searchText.trim()
                    ? `${visiblePosts.length} of ${posts.length} articles`
                    : `${posts.length} articles from the Critter Digest`}
                </ThemedText>
              )}

              <ThemedView type="backgroundElement" style={styles.searchBox}>
                <TextInput
                  value={searchText}
                  onChangeText={(value) => {
                    setSearchText(value);
                    setPage(0);
                  }}
                  placeholder="Search articles…"
                  placeholderTextColor={theme.textSecondary}
                  style={[styles.searchInput, { color: theme.text }]}
                />
              </ThemedView>

              <View style={styles.sortRow}>
                {([
                  ['newest', 'Newest first'],
                  ['alpha', 'A to Z'],
                ] as const).map(([key, label]) => {
                  const selected = sort === key;
                  return (
                    <Pressable key={key} onPress={() => selectSort(key)}>
                      <ThemedView
                        type="backgroundElement"
                        style={[styles.sortChip, selected && { backgroundColor: theme.accent }]}>
                        <ThemedText type="smallBold" style={selected ? { color: theme.onAccent } : undefined}>
                          {label}
                        </ThemedText>
                      </ThemedView>
                    </Pressable>
                  );
                })}
              </View>

              {error ? (
                <ThemedView type="backgroundElement" style={styles.errorBox}>
                  <ThemedText type="small">Could not reach the blog right now.</ThemedText>
                  <Pressable onPress={() => { setRefreshKey((key) => key + 1); refetch(); }}>
                    <ThemedText type="linkPrimary">Retry</ThemedText>
                  </Pressable>
                </ThemedView>
              ) : null}
            </View>
          }
          ListFooterComponent={<PaginationRow page={currentPage} pageCount={pageCount} onChange={goToPage} />}
          ListEmptyComponent={
            isFetching ? (
              <ThemedText type="small" themeColor="textSecondary">
                Loading articles…
              </ThemedText>
            ) : searchText.trim() ? (
              <ThemedText type="small" themeColor="textSecondary">
                No articles match that search.
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
    paddingTop: Spacing.three,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.five,
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
  sortRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  sortChip: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  errorBox: {
    borderRadius: Radius.md,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  entryCard: {
    borderRadius: Radius.lg,
    overflow: 'hidden',
  },
  entryThumb: {
    width: '100%',
    aspectRatio: 16 / 10,
    borderRadius: Radius.lg,
  },
  entryFallbackThumb: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  fallbackEmoji: {
    fontSize: 40,
    lineHeight: 48,
  },
  entryBody: {
    paddingTop: Spacing.two,
    gap: Spacing.one,
  },
  entryCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  entryTitle: {
    flex: 1,
    fontSize: 16,
  },
  entryExcerpt: {
    lineHeight: 20,
  },
});
