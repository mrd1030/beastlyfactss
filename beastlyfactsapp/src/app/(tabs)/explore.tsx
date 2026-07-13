import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppMenu } from '@/components/app-menu';
import { Card } from '@/components/card';
import { Eyebrow } from '@/components/eyebrow';
import { PackCard } from '@/components/pack-card';
import { Collapsible } from '@/components/ui/collapsible';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TwoToneTitle } from '@/components/two-tone-title';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { getEncyclopediaCategoryEmoji } from '@/content-client/encyclopedia-catalog';
import { getFactById } from '@/content-client/facts-catalog';
import { fetchCollectionEntries } from '@/content-client/queries';
import { getAllCategories, getAllSpeciesAsEntries } from '@/content-client/species-catalog';
import type { ProvisionalEntry } from '@/content-client/types';
import { isDatabaseAvailable } from '@/db/client';
import { getStreakState, listCachedEntries, listDiscoveredSpecies } from '@/db/helpers';
import type { DiscoveredSpecies, UnlockMethod } from '@/db/types';
import { useFavorites } from '@/hooks/use-favorites';
import { useTheme } from '@/hooks/use-theme';
import { getFactFavoriteId, isFactFavoriteId, parseFactFavoriteId } from '@/lib/favorite-keys';

const BLOG_SECTION_KEY = '__from_the_blog__';

type CategorySection = {
  key: string;
  title: string;
  entries: ProvisionalEntry[];
};

type SavedFilter = 'all' | 'facts' | 'guides' | 'blog';

function previewFromCachedEntry(entry: Awaited<ReturnType<typeof listCachedEntries>>[number]): ProvisionalEntry {
  return {
    _id: entry.sourceId,
    slug: entry.sourceId,
    title: entry.title,
    excerpt: entry.excerpt ?? 'Saved entry',
    categoryTitle: entry.category ?? 'Saved entry',
    mainImage: null,
  };
}

/**
 * Pack is now save-first: favorite/bookmarked reading surfaces live at the
 * top, while the older species-collection/"badge" progress still exists but
 * is tucked into collapsibles so it does not dominate the screen.
 */
export default function PackScreen() {
  const router = useRouter();
  const theme = useTheme();
  const queryClient = useQueryClient();
  const { favorites, toggleFavorite } = useFavorites();
  const [savedFilter, setSavedFilter] = useState<SavedFilter>('all');

  // Local, synchronous, always-available — no network round trip needed
  // for the primary collectible pool.
  const catalogEntries = useMemo(() => getAllSpeciesAsEntries(), []);
  const catalogCategories = useMemo(() => getAllCategories(), []);
  const catalogIds = useMemo(() => new Set(catalogEntries.map((e) => e._id)), [catalogEntries]);

  // Secondary/supplementary: real Sanity blog posts, merged in as an
  // additional "From the blog" section for anything not already one of
  // the 78 bundled catalog species. Failing to reach Sanity here shouldn't
  // block the primary catalog grid above from rendering.
  const {
    data: blogEntries,
    error: blogError,
    refetch: refetchBlog,
  } = useQuery({
    queryKey: ['pack', 'sanityBlogEntries'],
    queryFn: fetchCollectionEntries,
  });

  const { data: cachedEntries } = useQuery({
    queryKey: ['cachedEntries'],
    queryFn: listCachedEntries,
    enabled: isDatabaseAvailable,
  });

  const { data: discoveredRows } = useQuery({
    queryKey: ['discoveredSpecies'],
    queryFn: listDiscoveredSpecies,
    enabled: isDatabaseAvailable,
  });

  const { data: streak } = useQuery({
    queryKey: ['streakState'],
    queryFn: getStreakState,
    enabled: isDatabaseAvailable,
  });

  // Re-check unlock state and the streak every time this tab regains
  // focus — e.g. after finishing a quiz or reading an entry to completion
  // on another screen and navigating back. That's what lets a card's
  // locked -> unlocked flip animation actually fire.
  useFocusEffect(
    useCallback(() => {
      if (!isDatabaseAvailable) return;
      queryClient.invalidateQueries({ queryKey: ['discoveredSpecies'] });
      queryClient.invalidateQueries({ queryKey: ['streakState'] });
    }, [queryClient])
  );

  const discoveredMap = useMemo(() => {
    const map = new Map<string, DiscoveredSpecies>();
    for (const row of discoveredRows ?? []) map.set(row.entryId, row);
    return map;
  }, [discoveredRows]);

  const savedEntries = useMemo(() => {
    const entryMap = new Map<string, ProvisionalEntry>();
    for (const entry of catalogEntries) entryMap.set(entry._id, entry);
    for (const entry of blogEntries ?? []) entryMap.set(entry._id, entry);
    for (const entry of cachedEntries ?? []) {
      if (!entryMap.has(entry.sourceId)) {
        entryMap.set(entry.sourceId, previewFromCachedEntry(entry));
      }
    }

    return favorites
      .filter((favorite) => !isFactFavoriteId(favorite.entryId))
      .map((favorite) => {
        const entry =
          entryMap.get(favorite.entryId) ?? {
            _id: favorite.entryId,
            slug: favorite.entryId,
            title: favorite.entryId,
            excerpt: 'Saved entry preview unavailable until this entry is loaded again.',
            categoryTitle: 'Saved entry',
            mainImage: null,
          };
        const isGuide = catalogIds.has(entry._id);
        return {
          kind: isGuide ? ('guides' as const) : ('blog' as const),
          entry,
        };
      });
  }, [blogEntries, cachedEntries, catalogEntries, catalogIds, favorites]);

  const savedFacts = useMemo(
    () =>
      favorites
        .map((favorite) => parseFactFavoriteId(favorite.entryId))
        .filter((factId): factId is number => factId != null)
        .map((factId) => getFactById(factId))
        .filter((fact): fact is NonNullable<ReturnType<typeof getFactById>> => fact != null),
    [favorites]
  );

  const filteredSavedFacts = savedFilter === 'all' || savedFilter === 'facts' ? savedFacts : [];
  const filteredSavedEntries = savedEntries.filter((item) => savedFilter === 'all' || savedFilter === item.kind);
  const savedGuideCount = savedEntries.filter((item) => item.kind === 'guides').length;
  const savedBlogCount = savedEntries.filter((item) => item.kind === 'blog').length;

  const sections = useMemo<CategorySection[]>(() => {
    const byCategory = new Map<string, ProvisionalEntry[]>();
    for (const entry of catalogEntries) {
      const key = entry.categoryTitle ?? 'Uncategorized';
      const bucket = byCategory.get(key);
      if (bucket) bucket.push(entry);
      else byCategory.set(key, [entry]);
    }

    const result: CategorySection[] = catalogCategories
      .map((category) => ({ key: category, title: category, entries: byCategory.get(category) ?? [] }))
      .filter((section) => section.entries.length > 0);

    // Secondary/supplementary: Sanity posts that aren't already one of the
    // 78 bundled catalog species (matched by slug, since a post authored
    // for e.g. "axolotl" would share that slug with the catalog id).
    const extraBlogEntries = (blogEntries ?? []).filter((entry) => !catalogIds.has(entry.slug ?? entry._id));
    if (extraBlogEntries.length > 0) {
      result.push({ key: BLOG_SECTION_KEY, title: 'From the blog', entries: extraBlogEntries });
    }

    return result;
  }, [catalogEntries, catalogCategories, catalogIds, blogEntries]);

  const totalEntries = catalogEntries.length;
  const totalDiscovered = discoveredMap.size
    ? [...discoveredMap.values()].filter((row) => row.discovered).length
    : 0;

  const openEntry = (entry: ProvisionalEntry) => {
    router.push({ pathname: '/entry/[id]', params: { id: entry._id } });
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          <View style={styles.headerRow}>
            <TwoToneTitle first="My " second="Pack" style={styles.title} />
            <AppMenu />
          </View>
          <View style={styles.summaryRow}>
            <ThemedView type="backgroundSelected" style={styles.summaryChip}>
              <ThemedText type="small">★ {savedEntries.length + savedFacts.length} saved</ThemedText>
            </ThemedView>
            <ThemedView type="backgroundElement" style={styles.summaryChip}>
              <ThemedText type="small">📚 {totalDiscovered}/{totalEntries} collected</ThemedText>
            </ThemedView>
            <ThemedView type="backgroundElement" style={styles.summaryChip}>
              <ThemedText type="small">🔥 {streak?.currentStreak ?? 0} streak</ThemedText>
            </ThemedView>
          </View>

          <View style={styles.section}>
            <Eyebrow>Saved items</Eyebrow>
            <View style={styles.filterRow}>
              {([
                ['all', `All (${savedEntries.length + savedFacts.length})`],
                ['facts', `Facts (${savedFacts.length})`],
                ['guides', `Guides (${savedGuideCount})`],
                ['blog', `Blog (${savedBlogCount})`],
              ] as const).map(([key, label]) => {
                const selected = savedFilter === key;
                return (
                  <Pressable key={key} onPress={() => setSavedFilter(key)}>
                    <ThemedView
                      type="backgroundElement"
                      style={[styles.filterChip, selected && { backgroundColor: theme.accent }]}>
                      <ThemedText type="small" style={selected ? { color: theme.onAccent } : undefined}>
                        {label}
                      </ThemedText>
                    </ThemedView>
                  </Pressable>
                );
              })}
            </View>
            {savedEntries.length === 0 && savedFacts.length === 0 ? (
              <ThemedView type="accentSoft" style={styles.hintBanner}>
                <ThemedText type="small">
                  Nothing saved yet. Open a fact, guide, or article and tap Save to keep it here in your Pack.
                </ThemedText>
              </ThemedView>
            ) : filteredSavedFacts.length === 0 && filteredSavedEntries.length === 0 ? (
              <ThemedView type="backgroundElement" style={styles.emptyFilteredState}>
                <ThemedText type="small">
                  Nothing in this saved section yet.
                </ThemedText>
              </ThemedView>
            ) : (
              <View style={styles.savedStack}>
                {filteredSavedFacts.map((fact) => (
                  <Card key={getFactFavoriteId(fact.id)} style={styles.savedCard}>
                    <View style={styles.savedCardHeader}>
                      <ThemedText type="smallBold" style={styles.savedCardTitle}>
                        {fact.emoji} {fact.title}
                      </ThemedText>
                      <Pressable onPress={() => toggleFavorite(getFactFavoriteId(fact.id))} hitSlop={8}>
                        <ThemedText type="linkPrimary">★ Saved</ThemedText>
                      </Pressable>
                    </View>
                    <ThemedText type="small" themeColor="textSecondary">
                      {fact.animal} · {fact.category}
                    </ThemedText>
                    <ThemedText type="small" themeColor="textSecondary" numberOfLines={4}>
                      {fact.fact}
                    </ThemedText>
                  </Card>
                ))}
                {filteredSavedEntries.map(({ entry, kind }) => (
                  <Pressable key={entry._id} onPress={() => openEntry(entry)}>
                    <Card style={styles.savedCard}>
                      <View style={styles.savedCardHeader}>
                        <ThemedText type="smallBold" style={styles.savedCardTitle}>
                          {entry.title}
                        </ThemedText>
                        <Pressable onPress={() => toggleFavorite(entry._id)} hitSlop={8}>
                          <ThemedText type="linkPrimary">★ Saved</ThemedText>
                        </Pressable>
                      </View>
                      <View style={styles.savedMetaRow}>
                        <ThemedView type="backgroundElement" style={styles.savedTypeBadge}>
                          <ThemedText type="small">{kind === 'guides' ? 'Guide' : 'Blog post'}</ThemedText>
                        </ThemedView>
                      </View>
                      {entry.categoryTitle && (
                        <ThemedText type="small" themeColor="textSecondary">
                          {entry.categoryTitle}
                        </ThemedText>
                      )}
                      {entry.excerpt && (
                        <ThemedText type="small" themeColor="textSecondary" numberOfLines={3}>
                          {entry.excerpt}
                        </ThemedText>
                      )}
                    </Card>
                  </Pressable>
                ))}
              </View>
            )}
          </View>

          {blogError && (
            <ThemedView type="backgroundElement" style={styles.errorBox}>
              <ThemedText type="small">
                Could not reach Sanity for supplemental blog posts. Bundled guides and any cached saved entries are
                still available.
              </ThemedText>
              <ThemedText type="linkPrimary" onPress={() => refetchBlog()}>
                Retry
              </ThemedText>
            </ThemedView>
          )}

          <View style={styles.section}>
            <Collapsible title={`Collection badges (${totalDiscovered}/${totalEntries})`}>
              <View style={styles.collapsibleBody}>
                {totalDiscovered === 0 && (
                  <ThemedView type="accentSoft" style={styles.hintBanner}>
                    <ThemedText type="small">
                      Nothing unlocked yet — read an entry to the end, or pass its quiz, to start filling this grid.
                    </ThemedText>
                  </ThemedView>
                )}

                {sections.map((section) => {
                  const unlockedInSection = section.entries.filter((entry) => discoveredMap.get(entry._id)?.discovered).length;
                  const categoryEmoji = section.key === BLOG_SECTION_KEY ? '📝' : getEncyclopediaCategoryEmoji(section.title);
                  return (
                    <Collapsible
                      key={section.key}
                      title={`${categoryEmoji ? `${categoryEmoji} ` : ''}${section.title} (${unlockedInSection}/${section.entries.length})`}>
                      <View style={styles.grid}>
                        {section.entries.map((entry) => {
                          const row = discoveredMap.get(entry._id);
                          return (
                            <PackCard
                              key={entry._id}
                              entry={entry}
                              discovered={!!row?.discovered}
                              unlockMethod={(row?.unlockMethod as UnlockMethod | null | undefined) ?? undefined}
                              onPress={() => openEntry(entry)}
                            />
                          );
                        })}
                      </View>
                    </Collapsible>
                  );
                })}
              </View>
            </Collapsible>
          </View>

          <View style={styles.section}>
            <Collapsible title="Collection details">
              <View style={styles.detailStack}>
                <Card variant="filled" style={styles.detailCard}>
                  <ThemedText type="smallBold">Saved items</ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    {savedEntries.length + savedFacts.length} fact, guide, or article saves currently pinned in your Pack.
                  </ThemedText>
                </Card>
                <Card variant="filled" style={styles.detailCard}>
                  <ThemedText type="smallBold">Reading streak</ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    {streak?.currentStreak ?? 0} day current streak, {streak?.longestStreak ?? 0} day best streak.
                  </ThemedText>
                </Card>
              </View>
            </Collapsible>
          </View>
        </ScrollView>
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
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  title: {
    fontSize: 32,
    lineHeight: 38,
  },
  heroCard: {
    gap: Spacing.one,
  },
  streakBadge: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  subheading: {
    marginTop: Spacing.two,
  },
  summaryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  summaryChip: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  errorBox: {
    borderRadius: Radius.md,
    padding: Spacing.three,
    gap: Spacing.one,
    marginTop: Spacing.two,
  },
  emptyState: {
    borderRadius: Radius.lg,
    padding: Spacing.five,
    alignItems: 'center',
    gap: Spacing.two,
    marginTop: Spacing.six,
  },
  emptyBody: {
    textAlign: 'center',
  },
  hintBanner: {
    borderRadius: Radius.md,
    padding: Spacing.three,
    marginTop: Spacing.two,
  },
  scroll: {
    flex: 1,
    marginTop: Spacing.two,
  },
  scrollContent: {
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.three,
  },
  section: {
    gap: Spacing.two,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  savedStack: {
    gap: Spacing.two,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  filterChip: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  emptyFilteredState: {
    borderRadius: Radius.md,
    padding: Spacing.three,
  },
  savedCard: {
    gap: Spacing.one,
  },
  savedCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  savedCardTitle: {
    flex: 1,
  },
  savedMetaRow: {
    flexDirection: 'row',
  },
  savedTypeBadge: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
    alignSelf: 'flex-start',
  },
  collapsibleBody: {
    gap: Spacing.three,
  },
  detailStack: {
    gap: Spacing.two,
  },
  detailCard: {
    gap: Spacing.one,
  },
});
