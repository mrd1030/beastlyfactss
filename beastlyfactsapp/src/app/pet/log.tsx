import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { HusbandryLogEntryCard } from '@/components/husbandry-log-entry';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { isDatabaseAvailable } from '@/db/client';
import { countHusbandryLogForPet, deleteHusbandryLogEntry, getPet, listHusbandryLogPageForPet } from '@/db/helpers';
import { markHouseholdSyncDirty } from '@/lib/household-sync-store';

const PAGE_SIZE = 20;

/**
 * Complete, paginated husbandry log for one pet — reached from the "View
 * full log" link on the pet detail screen, which only renders the most
 * recent RECENT_LOG_PREVIEW_COUNT entries inline. Pages newest-first
 * (offset 0 = newest), same ordering as the inline preview.
 */
export default function PetFullLogScreen() {
  const { petId } = useLocalSearchParams<{ petId: string }>();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);

  const { data: pet } = useQuery({
    queryKey: ['pet', petId],
    queryFn: () => getPet(petId),
    enabled: !!petId && isDatabaseAvailable,
  });

  const { data: totalCount = 0 } = useQuery({
    queryKey: ['husbandryLogCount', petId],
    queryFn: () => countHusbandryLogForPet(petId),
    enabled: !!petId && isDatabaseAvailable,
  });

  const pageCount = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
  // A delete (or any other count change) can leave `page` pointing past the
  // new last page - clamp at read time instead of a page-past-the-end effect
  // that would need its own setState-in-effect round trip to correct.
  const clampedPage = Math.min(page, pageCount - 1);

  const { data: entries } = useQuery({
    queryKey: ['husbandryLogPage', petId, clampedPage],
    queryFn: () => listHusbandryLogPageForPet(petId, { limit: PAGE_SIZE, offset: clampedPage * PAGE_SIZE }),
    enabled: !!petId && isDatabaseAvailable,
  });

  const handleDelete = async (entryId: string) => {
    await deleteHusbandryLogEntry(entryId);
    await markHouseholdSyncDirty().catch(() => {});
    await queryClient.invalidateQueries({ queryKey: ['husbandryLogPage', petId] });
    await queryClient.invalidateQueries({ queryKey: ['husbandryLogCount', petId] });
    await queryClient.invalidateQueries({ queryKey: ['husbandryLog', petId] });
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.headerRow}>
          <Pressable onPress={() => router.back()} hitSlop={8}>
            <ThemedText type="linkPrimary">← Back</ThemedText>
          </Pressable>
          <ThemedText type="smallBold">{pet?.nickname ? `${pet.nickname}'s full log` : 'Full log'}</ThemedText>
          <View style={styles.headerSpacer} />
        </ThemedView>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <ThemedText type="small" themeColor="textSecondary" style={styles.countLabel}>
            {totalCount} total {totalCount === 1 ? 'entry' : 'entries'}
          </ThemedText>

          {isDatabaseAvailable && (entries ?? []).length === 0 && (
            <ThemedText type="small" themeColor="textSecondary">
              No log entries yet.
            </ThemedText>
          )}
          {!isDatabaseAvailable && (
            <ThemedText type="small" themeColor="textSecondary">
              Local storage is unavailable in this environment.
            </ThemedText>
          )}
          {(entries ?? []).map((entry) => (
            <HusbandryLogEntryCard key={entry.id} entry={entry} onDelete={handleDelete} />
          ))}

          {pageCount > 1 && (
            <View style={styles.paginationRow}>
              <Pressable onPress={() => setPage(Math.max(0, clampedPage - 1))} disabled={clampedPage === 0} hitSlop={8}>
                <ThemedView
                  type="backgroundElement"
                  style={[styles.pageButton, clampedPage === 0 && styles.pageButtonDisabled]}>
                  <ThemedText type="smallBold">← Newer</ThemedText>
                </ThemedView>
              </Pressable>
              <ThemedText type="small" themeColor="textSecondary">
                Page {clampedPage + 1} of {pageCount}
              </ThemedText>
              <Pressable
                onPress={() => setPage(Math.min(pageCount - 1, clampedPage + 1))}
                disabled={clampedPage >= pageCount - 1}
                hitSlop={8}>
                <ThemedView
                  type="backgroundElement"
                  style={[styles.pageButton, clampedPage >= pageCount - 1 && styles.pageButtonDisabled]}>
                  <ThemedText type="smallBold">Older →</ThemedText>
                </ThemedView>
              </Pressable>
            </View>
          )}
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
  },
  headerSpacer: {
    width: 60,
  },
  scrollContent: {
    paddingTop: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.one,
  },
  countLabel: {
    marginBottom: Spacing.one,
  },
  paginationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Spacing.three,
  },
  pageButton: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  pageButtonDisabled: {
    opacity: 0.4,
  },
});
