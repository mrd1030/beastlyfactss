import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { EntryQuiz } from '@/components/entry-quiz';
import { GuideSections } from '@/components/guide-sections';
import { PortableTextBody } from '@/components/portable-text-body';
import { CareInfoSummary, FactsList } from '@/components/species-facts-body';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { getEncyclopediaAnimalByGuideId } from '@/content-client/encyclopedia-catalog';
import { getGuideImageResizeMode, getGuideImageSource } from '@/content-client/guide-image-map';
import { fetchEntryDetail } from '@/content-client/queries';
import { sanityImageUrl } from '@/content-client/sanityClient';
import { getSpeciesById } from '@/content-client/species-catalog';
import type { EntryDetail, PortableTextBlock } from '@/content-client/types';
import { isDatabaseAvailable } from '@/db/client';
import {
  getCachedEntry,
  getDiscoveredSpecies,
  unlockByQuiz,
  unlockByRead,
  upsertCachedEntry,
} from '@/db/helpers';
import type { CachedEntry } from '@/db/types';
import { useFavorites } from '@/hooks/use-favorites';

/**
 * Serializes/deserializes a portable-text `body` into the plain-text
 * column `cachedEntries.body` (see schema.ts comment: provisional until
 * there's a real reason to store structured body content on-device).
 * JSON-stringifying keeps the block structure so PortableTextBody can
 * still render an offline copy the same way as the live one.
 */
function serializeBody(body: PortableTextBlock[] | null | undefined): string {
  return JSON.stringify(body ?? []);
}

function parseBody(json: string | null | undefined): PortableTextBlock[] {
  if (!json) return [];
  try {
    const parsed = JSON.parse(json);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

/** Normalizes a locally-cached row into the same shape the screen renders,
 * so the JSX below doesn't need to branch between live/offline data. Note
 * `mainImage` is intentionally left unset here — the cached row already
 * stores a resolved CDN URL (`imageUrl`), not a Sanity image reference, so
 * the screen reads that directly instead of re-deriving one. */
function fromCachedEntry(cached: CachedEntry): EntryDetail {
  return {
    _id: cached.sourceId,
    title: cached.title,
    slug: cached.sourceId,
    excerpt: cached.excerpt ?? undefined,
    categoryTitle: cached.category ?? undefined,
    body: parseBody(cached.body),
    mainImage: null,
  };
}

export default function EntryDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { favoriteIds, toggleFavorite } = useFavorites();
  const hasUnlockedRef = useRef(false);
  const [showQuiz, setShowQuiz] = useState(false);

  // The bundled local catalog (all 78 real beastlyfactss guide species) is
  // checked FIRST and is synchronous/always-available — no network, no
  // loading state. Only when `id` isn't a catalog species id do we fall
  // back to the Sanity `post` fetch below (e.g. for blog-style entries
  // reached from the Browse tab, or the Pack grid's supplementary
  // "From the blog" section).
  const catalogSpecies = id ? getSpeciesById(id) : undefined;

  const { data: discoveredRow } = useQuery({
    queryKey: ['discoveredSpecies', id],
    queryFn: () => getDiscoveredSpecies(id),
    enabled: !!id && isDatabaseAvailable,
  });
  const isDiscovered = !!discoveredRow?.discovered;

  const {
    data: liveEntry,
    isFetching: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['entry', id],
    queryFn: () => fetchEntryDetail(id),
    enabled: !!id && !catalogSpecies,
  });

  const { data: cachedEntry } = useQuery({
    queryKey: ['cachedEntry', id],
    queryFn: () => getCachedEntry(id),
    enabled: !!id && isDatabaseAvailable && !catalogSpecies,
  });

  // Cache the full entry (including body) the moment it loads live, so
  // it's available offline afterward — this is the offline-caching
  // requirement for this screen. Catalog species are already bundled
  // on-device, so there's nothing to cache for them.
  useEffect(() => {
    if (!liveEntry || !isDatabaseAvailable || catalogSpecies) return;
    const thumb = sanityImageUrl(liveEntry.mainImage, 400);
    upsertCachedEntry({
      sourceId: liveEntry._id,
      title: liveEntry.title,
      excerpt: liveEntry.excerpt ?? null,
      body: serializeBody(liveEntry.body),
      category: liveEntry.categoryTitle ?? null,
      imageUrl: thumb,
      cachedAt: new Date().toISOString(),
    }).then(() => {
      queryClient.invalidateQueries({ queryKey: ['cachedEntry', id] });
    });
  }, [liveEntry, id, queryClient, catalogSpecies]);

  const usingOfflineCopy = !liveEntry && !!cachedEntry;
  const entry: EntryDetail | undefined = liveEntry ?? (cachedEntry ? fromCachedEntry(cachedEntry) : undefined);

  const isFavorited = !!id && favoriteIds.has(id);
  const thumb = liveEntry ? sanityImageUrl(liveEntry.mainImage, 600) : (cachedEntry?.imageUrl ?? null);
  const catalogImage = catalogSpecies ? getGuideImageSource(catalogSpecies.id) : null;
  const linkedEncyclopedia = catalogSpecies ? getEncyclopediaAnimalByGuideId(catalogSpecies.id) : undefined;

  // Bonus wiring beyond this stage's 5 requirements, using the discovery
  // helper the previous stage already built: reaching the end of an
  // entry's body counts as "read to completion" for the Pack collection
  // (ownership/quiz are separate unlock paths built in a later stage).
  const handleScrollEnd = useCallback(
    (e: { nativeEvent: { layoutMeasurement: { height: number }; contentOffset: { y: number }; contentSize: { height: number } } }) => {
      if (hasUnlockedRef.current || !id || !isDatabaseAvailable) return;
      const { layoutMeasurement, contentOffset, contentSize } = e.nativeEvent;
      const reachedBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 40;
      if (reachedBottom) {
        hasUnlockedRef.current = true;
        unlockByRead(id)
          .then(() => queryClient.invalidateQueries({ queryKey: ['discoveredSpecies'] }))
          .catch(() => {});
      }
    },
    [id, queryClient]
  );

  // The other unlock trigger for this screen: passing the short quiz.
  // Marks discovered via 'quiz' regardless of the read-to-completion path
  // above — whichever happens first wins (see unlockSpecies).
  const handleQuizPass = useCallback(() => {
    if (!id || !isDatabaseAvailable) return;
    hasUnlockedRef.current = true;
    unlockByQuiz(id)
      .then(() => queryClient.invalidateQueries({ queryKey: ['discoveredSpecies'] }))
      .catch(() => {});
  }, [id, queryClient]);

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.headerRow}>
          <Pressable onPress={() => router.back()} hitSlop={8}>
            <ThemedText type="linkPrimary">← Back</ThemedText>
          </Pressable>
          <ThemedView style={styles.headerActions}>
            {isDiscovered && (
              <ThemedView type="backgroundSelected" style={styles.discoveredBadge}>
                <ThemedText type="small">✓ In your Pack</ThemedText>
              </ThemedView>
            )}
            {!!id && (
              <Pressable onPress={() => toggleFavorite(id)} hitSlop={8}>
                <ThemedText type="linkPrimary">{isFavorited ? '★ Saved' : '☆ Save'}</ThemedText>
              </Pressable>
            )}
          </ThemedView>
        </ThemedView>

        {catalogSpecies && (
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            onScroll={handleScrollEnd}
            scrollEventThrottle={200}>
            {catalogImage && (
              <Image source={catalogImage} style={styles.image} resizeMode={getGuideImageResizeMode(catalogSpecies.id)} />
            )}

            <ThemedView style={styles.heroRow}>
              {!catalogImage && (
                <ThemedView type="accentSoft" style={styles.heroEmojiBubble}>
                  <ThemedText style={styles.catalogEmoji}>{catalogSpecies.emoji}</ThemedText>
                </ThemedView>
              )}
              <ThemedView style={styles.heroText}>
                <ThemedText type="title" style={styles.title}>
                  {catalogSpecies.name}
                </ThemedText>
                <ThemedView style={styles.heroBadgeRow}>
                  <ThemedView type="backgroundElement" style={styles.heroBadge}>
                    <ThemedText type="small">{catalogSpecies.petType}</ThemedText>
                  </ThemedView>
                  <ThemedView type="backgroundElement" style={styles.heroBadge}>
                    <ThemedText type="small">{catalogSpecies.difficulty}</ThemedText>
                  </ThemedView>
                </ThemedView>
              </ThemedView>
            </ThemedView>

            <ThemedText type="smallBold" style={styles.excerpt}>
              {catalogSpecies.tagline}
            </ThemedText>

            {linkedEncyclopedia && (
              <Card variant="soft" style={styles.linkedCard}>
                <ThemedText type="smallBold">Linked encyclopedia</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  Want the natural-history side too? Open the encyclopedia profile for {linkedEncyclopedia.name}.
                </ThemedText>
                <Pressable
                  onPress={() => router.replace({ pathname: '/encyclopedia/[id]', params: { id: linkedEncyclopedia.id } })}>
                  <ThemedText type="linkPrimary">Open encyclopedia profile →</ThemedText>
                </Pressable>
              </Card>
            )}

            <CareInfoSummary careInfo={catalogSpecies.careInfo} />
            <FactsList facts={catalogSpecies.facts} />

            {catalogSpecies.guide && <GuideSections guide={catalogSpecies.guide} />}

            {!isDiscovered && (
              <ThemedView style={styles.quizSection}>
                {!showQuiz ? (
                  <Pressable onPress={() => setShowQuiz(true)}>
                    <Card variant="soft">
                      <ThemedText type="smallBold">Not in your Pack yet</ThemedText>
                      <ThemedText type="small" themeColor="textSecondary" style={styles.quizHint}>
                        Keep reading to the end, or take a quick quiz to add this entry to your Pack now.
                      </ThemedText>
                      <ThemedText type="linkPrimary">Take the quiz →</ThemedText>
                    </Card>
                  </Pressable>
                ) : (
                  <EntryQuiz
                    categoryTitle={catalogSpecies.petType}
                    quiz={catalogSpecies.quiz}
                    onPass={handleQuizPass}
                  />
                )}
              </ThemedView>
            )}
          </ScrollView>
        )}

        {!catalogSpecies && loading && !entry && <ThemedText type="small">Loading entry…</ThemedText>}

        {!catalogSpecies && error && !entry && (
          <ThemedView type="backgroundElement" style={styles.errorBox}>
            <ThemedText type="small">
              Could not reach Sanity, and no offline copy of this entry is saved yet.
            </ThemedText>
            <Pressable onPress={() => refetch()}>
              <ThemedText type="linkPrimary">Retry</ThemedText>
            </Pressable>
          </ThemedView>
        )}

        {!catalogSpecies && entry && (
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            onScroll={handleScrollEnd}
            scrollEventThrottle={200}>
            {usingOfflineCopy && (
              <ThemedView type="backgroundSelected" style={styles.offlineBanner}>
                <ThemedText type="small">Showing an offline copy saved from your last visit.</ThemedText>
              </ThemedView>
            )}

            {thumb && <Image source={{ uri: thumb }} style={styles.image} />}

            <ThemedText type="title" style={styles.title}>
              {entry.title}
            </ThemedText>

            {entry.categoryTitle && (
              <ThemedText type="small" themeColor="textSecondary">
                {entry.categoryTitle}
              </ThemedText>
            )}

            {entry.excerpt && (
              <ThemedText type="smallBold" style={styles.excerpt}>
                {entry.excerpt}
              </ThemedText>
            )}

            <PortableTextBody blocks={entry.body} />

            {!isDiscovered && (
              <ThemedView style={styles.quizSection}>
                {!showQuiz ? (
                  <Pressable onPress={() => setShowQuiz(true)}>
                    <Card variant="soft">
                      <ThemedText type="smallBold">Not in your Pack yet</ThemedText>
                      <ThemedText type="small" themeColor="textSecondary" style={styles.quizHint}>
                        Keep reading to the end, or take a quick quiz to add this entry to your Pack now.
                      </ThemedText>
                      <ThemedText type="linkPrimary">Take the quiz →</ThemedText>
                    </Card>
                  </Pressable>
                ) : (
                  <EntryQuiz categoryTitle={entry.categoryTitle} quiz={entry.quiz} onPass={handleQuizPass} />
                )}
              </ThemedView>
            )}
          </ScrollView>
        )}
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  discoveredBadge: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
  },
  quizSection: {
    marginTop: Spacing.two,
  },
  quizHint: {
    marginVertical: Spacing.one,
  },
  errorBox: {
    borderRadius: Radius.md,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  offlineBanner: {
    borderRadius: Radius.md,
    padding: Spacing.two,
    marginBottom: Spacing.two,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.two,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: Radius.lg,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
  },
  heroRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  heroEmojiBubble: {
    width: 84,
    height: 84,
    borderRadius: Radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroText: {
    flex: 1,
    gap: Spacing.one,
  },
  heroBadgeRow: {
    flexDirection: 'row',
    gap: Spacing.one,
    flexWrap: 'wrap',
  },
  heroBadge: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
  },
  catalogEmoji: {
    fontSize: 44,
    lineHeight: 56,
  },
  excerpt: {
    marginBottom: Spacing.two,
  },
  linkedCard: {
    gap: Spacing.one,
  },
});
