import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

import type { ProvisionalEntry } from '@/content-client/types';
import { Radius, Spacing } from '@/constants/theme';
import { isDatabaseAvailable } from '@/db/client';
import { getStreakState, logDailyFactView, recordActiveToday } from '@/db/helpers';
import { pickDailyEntry, pickDailyFactText } from '@/lib/daily-fact';
import { localDateString } from '@/lib/date';
import { ensureDailyFactNotification } from '@/lib/notifications';

import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

const STREAK_QUERY_KEY = ['streakState'] as const;

/**
 * Swipeable "Daily Fact" card: page 1 is today's fact, page 2 (swipe left)
 * reveals the source entry and a way to open it. Bounded to two pages —
 * this is a plain paging ScrollView, not a continuous drag surface, and
 * is unrelated to the Pack tab's tap-triggered unlock flip (a separate,
 * future-stage interaction).
 *
 * "Today's fact" prefers a real, curated `facts[]` entry when the day's
 * chosen entry has one, falling back to the existing excerpt/title-based
 * placeholder otherwise (see src/lib/daily-fact.ts). `pool` is caller-
 * supplied and, per the Browse tab (src/app/(tabs)/index.tsx), is expected
 * to mix in the bundled 78-species catalog alongside Sanity posts so the
 * rotation draws from real per-species facts far more often, not just the
 * smaller set of Sanity posts that happen to have an authored `facts[]`.
 */
export function DailyFactCard({
  pool,
  onOpenEntry,
}: {
  pool: ProvisionalEntry[];
  onOpenEntry: (entry: ProvisionalEntry) => void;
}) {
  const { width } = useWindowDimensions();
  const [containerWidth, setContainerWidth] = useState(0);
  const cardWidth = containerWidth || width;

  const dailyEntry = useMemo(() => pickDailyEntry(pool), [pool]);
  const dailyFactText = useMemo(() => pickDailyFactText(dailyEntry), [dailyEntry]);

  const queryClient = useQueryClient();
  const { data: streak } = useQuery({
    queryKey: STREAK_QUERY_KEY,
    queryFn: getStreakState,
    enabled: isDatabaseAvailable,
  });

  // Record today's view (idempotent per calendar day) and (re)schedule the
  // local notification with today's fact. Runs once per distinct daily
  // entry, i.e. effectively once per calendar day per pool.
  useEffect(() => {
    if (!dailyEntry) return;
    const today = localDateString();

    (async () => {
      if (isDatabaseAvailable) {
        await recordActiveToday(today);
        await logDailyFactView(today, dailyEntry._id);
        queryClient.invalidateQueries({ queryKey: STREAK_QUERY_KEY });
      }
      await ensureDailyFactNotification({
        title: "Today's beastly fact",
        body: dailyFactText ?? dailyEntry.title,
      });
    })();
  }, [dailyEntry, dailyFactText, queryClient]);

  if (!dailyEntry) return null;

  return (
    <View onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}>
      <View style={styles.headerRow}>
        <ThemedText type="smallBold">Daily Fact</ThemedText>
        {!!streak?.currentStreak && (
          <ThemedView type="backgroundSelected" style={styles.streakBadge}>
            <ThemedText type="small">🔥 {streak.currentStreak}</ThemedText>
          </ThemedView>
        )}
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ width: cardWidth }}>
        <ThemedView type="accentSoft" style={[styles.page, { width: cardWidth }]}>
          <ThemedText type="small" themeColor="textSecondary">
            Fact of the day
          </ThemedText>
          <ThemedText type="default" numberOfLines={5}>
            {dailyFactText ?? dailyEntry.title}
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            Swipe for source →
          </ThemedText>
        </ThemedView>

        <ThemedView type="backgroundElement" style={[styles.page, { width: cardWidth }]}>
          <ThemedText type="small" themeColor="textSecondary">
            Source entry
          </ThemedText>
          <ThemedText type="smallBold" numberOfLines={2}>
            {dailyEntry.title}
          </ThemedText>
          {dailyEntry.categoryTitle && (
            <ThemedText type="small" themeColor="textSecondary">
              {dailyEntry.categoryTitle}
            </ThemedText>
          )}
          <Pressable onPress={() => onOpenEntry(dailyEntry)}>
            <ThemedText type="linkPrimary">Open entry →</ThemedText>
          </Pressable>
        </ThemedView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
    marginBottom: Spacing.one,
  },
  streakBadge: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
  },
  page: {
    borderRadius: Radius.lg,
    padding: Spacing.four,
    gap: Spacing.one,
    minHeight: 120,
    justifyContent: 'center',
  },
});
