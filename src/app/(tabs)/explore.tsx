import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useFocusEffect, useRouter } from 'expo-router';
import { useCallback, useMemo } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PackCard } from '@/components/pack-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { fetchCollectionEntries } from '@/content-client/queries';
import { getAllCategories, getAllSpeciesAsEntries } from '@/content-client/species-catalog';
import type { ProvisionalEntry } from '@/content-client/types';
import { isDatabaseAvailable } from '@/db/client';
import { getStreakState, listDiscoveredSpecies } from '@/db/helpers';
import type { DiscoveredSpecies, UnlockMethod } from '@/db/types';

const BLOG_SECTION_KEY = '__from_the_blog__';

type CategorySection = {
  key: string;
  title: string;
  entries: ProvisionalEntry[];
};

/**
 * Pack tab home screen — a pure species-collection grid. Real owned pets
 * used to live here too (a "Your pets" row) but now live on the Profile
 * tab, merged with local identity/settings; linking a pet to a species
 * entry (see src/app/pet/form.tsx) still calls `unlockByPet`
 * (src/db/helpers/discovered-species.ts), which flips that entry's card
 * from a locked silhouette to unlocked right here — the two tabs share the
 * same underlying discovery state, they just no longer share a screen.
 *
 * The PRIMARY collectible "species" unit here is the bundled local catalog
 * (src/content-client/species-catalog.ts) — all 78 real species from
 * beastlyfactss's own "Guides" library, grouped by `petType`. This is a
 * synchronous, always-available local dataset, unlike the Sanity `post`
 * pool below it: Sanity stays wired up as a secondary, supplementary
 * "From the blog" section for any post that isn't already one of the 78
 * bundled species (matched by slug), so blog-style reading content isn't
 * lost, it's just no longer the primary source for this grid. Unlocked
 * cards show full content, locked ones show a grayscale silhouette that
 * deep-links to the entry's detail screen to read or quiz it.
 */
export default function PackScreen() {
  const router = useRouter();
  const queryClient = useQueryClient();

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
        <View style={styles.headerRow}>
          <ThemedText type="title" style={styles.title}>
            Your Pack
          </ThemedText>
          <ThemedView type="backgroundSelected" style={styles.streakBadge}>
            <ThemedText type="small">🔥 {streak?.currentStreak ?? 0}</ThemedText>
          </ThemedView>
        </View>

        {blogError && (
          <ThemedView type="backgroundElement" style={styles.errorBox}>
            <ThemedText type="small">
              Could not reach Sanity for supplementary blog posts. The species catalog below is unaffected.
            </ThemedText>
            <ThemedText type="linkPrimary" onPress={() => refetchBlog()}>
              Retry
            </ThemedText>
          </ThemedView>
        )}

        {totalDiscovered === 0 && (
          <ThemedView type="backgroundElement" style={styles.hintBanner}>
            <ThemedText type="small">
              Nothing unlocked yet — read an entry to the end, or pass its quiz, to start filling this grid.
              Locked cards below link straight to an entry so you can do either.
            </ThemedText>
          </ThemedView>
        )}

        <ThemedText type="small" themeColor="textSecondary" style={styles.subheading}>
          {totalDiscovered}/{totalEntries} discovered
        </ThemedText>

        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
          {sections.map((section) => {
            const unlockedInSection = section.entries.filter((e) => discoveredMap.get(e._id)?.discovered).length;
            return (
              <View key={section.key} style={styles.section}>
                <View style={styles.sectionHeaderRow}>
                  <ThemedText type="smallBold">{section.title}</ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    {unlockedInSection}/{section.entries.length}
                  </ThemedText>
                </View>
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
              </View>
            );
          })}
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
  streakBadge: {
    borderRadius: 999,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  subheading: {
    marginTop: Spacing.two,
  },
  errorBox: {
    borderRadius: Spacing.two,
    padding: Spacing.three,
    gap: Spacing.one,
    marginTop: Spacing.two,
  },
  emptyState: {
    borderRadius: Spacing.three,
    padding: Spacing.five,
    alignItems: 'center',
    gap: Spacing.two,
    marginTop: Spacing.six,
  },
  emptyBody: {
    textAlign: 'center',
  },
  hintBanner: {
    borderRadius: Spacing.two,
    padding: Spacing.two,
    marginTop: Spacing.two,
  },
  scroll: {
    flex: 1,
    marginTop: Spacing.two,
  },
  scrollContent: {
    paddingBottom: BottomTabInset + Spacing.five,
  },
  section: {
    marginBottom: Spacing.four,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: Spacing.two,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
});
