import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter, type Href } from 'expo-router';
import { useEffect, useMemo } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppMenu } from '@/components/app-menu';
import { FactCard } from '@/components/fact-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { TwoToneTitle } from '@/components/two-tone-title';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { getFactForSeed } from '@/content-client/facts-catalog';
import { useThemePreference } from '@/contexts/theme-preference';
import { isDatabaseAvailable } from '@/db/client';
import { getStreakState, listDueCareTasks, listPets, logDailyFactView, recordActiveToday } from '@/db/helpers';
import { useFavorites } from '@/hooks/use-favorites';
import { useTheme } from '@/hooks/use-theme';
import { dayOfYear, localDateString } from '@/lib/date';
import { getFactFavoriteId } from '@/lib/favorite-keys';
import { ensureDailyFactNotification } from '@/lib/notifications';

const STREAK_QUERY_KEY = ['streakState'] as const;

/** Quick-jump tiles into the app's main content surfaces. Tints echo the
 * site's accent pops (orange/teal/sunny) rather than the neutral surface
 * color, so Home reads as the playful front door, not another dashboard. */
const EXPLORE_TILES: {
  href: Href;
  emoji: string;
  label: string;
  light: { tint: string; strong: string };
  dark: { tint: string; strong: string };
}[] = [
  { href: '/facts', emoji: '🧠', label: 'Facts', light: { tint: '#FDEBDC', strong: '#B85B1B' }, dark: { tint: '#3A2414', strong: '#FFA35C' } },
  { href: '/guides', emoji: '📚', label: 'Library', light: { tint: '#DDF2EF', strong: '#00796C' }, dark: { tint: '#12332F', strong: '#4FD0C0' } },
  { href: '/explore', emoji: '⭐', label: 'Saved', light: { tint: '#FBF0D2', strong: '#96700F' }, dark: { tint: '#37310F', strong: '#F0D264' } },
];

/**
 * Home ("Today") - the app's front door. Today's fact is the hero, followed
 * by a care nudge only when something is actually due, then quick links into
 * the content surfaces. Deliberately short: no dashboards, no explainers.
 */
export default function HomeScreen() {
  const router = useRouter();
  const theme = useTheme();
  const { colorScheme } = useThemePreference();
  const queryClient = useQueryClient();
  const { favoriteIds, toggleFavorite } = useFavorites();
  const today = localDateString();

  const dailyFact = useMemo(() => getFactForSeed(dayOfYear()), []);

  const { data: streak } = useQuery({
    queryKey: STREAK_QUERY_KEY,
    queryFn: getStreakState,
    enabled: isDatabaseAvailable,
  });
  const { data: pets } = useQuery({ queryKey: ['pets'], queryFn: listPets, enabled: isDatabaseAvailable });
  const { data: dueTasks } = useQuery({
    queryKey: ['careTasks', 'due', today],
    queryFn: () => listDueCareTasks(today),
    enabled: isDatabaseAvailable,
  });

  // Record today's visit for the streak (idempotent per calendar day) and
  // (re)schedule tomorrow's daily-fact notification - this effect moved here
  // from the old DailyFactCard when Home became the daily fact's owner.
  useEffect(() => {
    (async () => {
      if (isDatabaseAvailable) {
        await recordActiveToday(today);
        await logDailyFactView(today, getFactFavoriteId(dailyFact.id));
        queryClient.invalidateQueries({ queryKey: STREAK_QUERY_KEY });
      }
      await ensureDailyFactNotification({
        title: "Today's beastly fact",
        body: dailyFact.fact,
      });
    })().catch(() => {});
  }, [dailyFact, today, queryClient]);

  const dueCount = dueTasks?.length ?? 0;
  const hasPets = (pets?.length ?? 0) > 0;

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Wordmark header, mirroring the site's logo lockup */}
          <View style={styles.headerRow}>
            <View>
              <TwoToneTitle first="Beastly" second="Facts" />
              <ThemedText type="small" themeColor="textSecondary">
                {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
              </ThemedText>
            </View>
            <View style={styles.headerActions}>
              {!!streak?.currentStreak && (
                <ThemedView type="backgroundElement" style={styles.streakBadge}>
                  <ThemedText type="smallBold">🔥 {streak.currentStreak}</ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    day streak
                  </ThemedText>
                </ThemedView>
              )}
              <AppMenu />
            </View>
          </View>

          {/* Today's fact - the hero */}
          <FactCard
            fact={dailyFact}
            featured
            saved={favoriteIds.has(getFactFavoriteId(dailyFact.id))}
            onToggleSaved={() => toggleFavorite(getFactFavoriteId(dailyFact.id))}
          />
          <Pressable onPress={() => router.navigate('/facts')}>
            <ThemedText type="linkPrimary" style={styles.moreFactsLink}>
              More facts →
            </ThemedText>
          </Pressable>

          {/* Care nudge - only when it earns the space */}
          {dueCount > 0 ? (
            <Pressable onPress={() => router.navigate('/profile')}>
              <ThemedView type="backgroundElement" style={styles.careCard}>
                <ThemedText style={styles.careEmoji}>🐾</ThemedText>
                <View style={styles.careText}>
                  <ThemedText type="smallBold">
                    {dueCount === 1 ? '1 care task due' : `${dueCount} care tasks due`}
                  </ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    {(dueTasks ?? [])[0]?.label ?? 'Open your pets to check them off.'}
                  </ThemedText>
                </View>
                <ThemedText type="linkPrimary">Open</ThemedText>
              </ThemedView>
            </Pressable>
          ) : !hasPets && isDatabaseAvailable ? (
            <Pressable onPress={() => router.push('/pet/form')}>
              <ThemedView type="backgroundElement" style={styles.careCard}>
                <ThemedText style={styles.careEmoji}>🦎</ThemedText>
                <View style={styles.careText}>
                  <ThemedText type="smallBold">Keep a pet?</ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    Add it to get feeding and cleaning reminders.
                  </ThemedText>
                </View>
                <ThemedText type="linkPrimary">Add</ThemedText>
              </ThemedView>
            </Pressable>
          ) : null}

          {/* Explore tiles */}
          <View style={styles.tileRow}>
            {EXPLORE_TILES.map((tile) => {
              const accent = tile[colorScheme];
              return (
                <Pressable key={tile.label} style={styles.tileWrap} onPress={() => router.navigate(tile.href)}>
                  <View style={[styles.tile, { backgroundColor: accent.tint }]}>
                    <ThemedText style={styles.tileEmoji}>{tile.emoji}</ThemedText>
                    <ThemedText type="smallBold" style={{ color: accent.strong }}>
                      {tile.label}
                    </ThemedText>
                  </View>
                </Pressable>
              );
            })}
          </View>

          {/* A couple more bite-size facts to keep the scroll alive */}
          <View style={styles.moreHeader}>
            <ThemedText type="subtitle">More wild ones</ThemedText>
          </View>
          {[1, 2, 3].map((offset) => {
            const fact = getFactForSeed(dayOfYear() + offset * 53);
            return (
              <FactCard
                key={fact.id}
                fact={fact}
                saved={favoriteIds.has(getFactFavoriteId(fact.id))}
                onToggleSaved={() => toggleFavorite(getFactFavoriteId(fact.id))}
              />
            );
          })}
          <Pressable onPress={() => router.navigate('/facts')}>
            <View style={[styles.allFactsButton, { backgroundColor: theme.accent }]}>
              <ThemedText type="smallBold" style={{ color: theme.onAccent }}>
                Browse all facts
              </ThemedText>
            </View>
          </Pressable>
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
  scrollContent: {
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.three,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.two,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  streakBadge: {
    borderRadius: Radius.lg,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    alignItems: 'center',
  },
  moreFactsLink: {
    textAlign: 'center',
    marginTop: -Spacing.two,
  },
  careCard: {
    borderRadius: Radius.lg,
    padding: Spacing.three,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
  },
  careEmoji: {
    fontSize: 28,
    lineHeight: 34,
  },
  careText: {
    flex: 1,
    gap: 2,
  },
  tileRow: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  tileWrap: {
    flex: 1,
  },
  tile: {
    borderRadius: Radius.lg,
    paddingVertical: Spacing.three,
    alignItems: 'center',
    gap: Spacing.one,
  },
  tileEmoji: {
    fontSize: 28,
    lineHeight: 34,
  },
  moreHeader: {
    marginTop: Spacing.two,
  },
  allFactsButton: {
    borderRadius: Radius.pill,
    paddingVertical: Spacing.three,
    alignItems: 'center',
  },
});
