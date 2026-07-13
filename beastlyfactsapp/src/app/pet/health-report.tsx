import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, Share, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { isDatabaseAvailable } from '@/db/client';
import { getPet, listCareTasksForPet, listHusbandryLogForPet, listMedicationPlansForPet } from '@/db/helpers';
import { useTheme } from '@/hooks/use-theme';
import {
  buildHealthReportShareText,
  buildHealthReportSummary,
  type HealthReportRange,
} from '@/lib/health-report';

const RANGE_OPTIONS: { value: HealthReportRange; label: string }[] = [
  { value: '7d', label: '7 days' },
  { value: '30d', label: '30 days' },
  { value: '90d', label: '90 days' },
  { value: 'all', label: 'All' },
];

export default function PetHealthReportScreen() {
  const { petId } = useLocalSearchParams<{ petId: string }>();
  const router = useRouter();
  const theme = useTheme();
  const [range, setRange] = useState<HealthReportRange>('30d');

  const { data: pet } = useQuery({
    queryKey: ['pet', petId],
    queryFn: () => getPet(petId),
    enabled: !!petId && isDatabaseAvailable,
  });
  const { data: log } = useQuery({
    queryKey: ['husbandryLog', petId],
    queryFn: () => listHusbandryLogForPet(petId),
    enabled: !!petId && isDatabaseAvailable,
  });
  const { data: tasks } = useQuery({
    queryKey: ['careTasks', petId],
    queryFn: () => listCareTasksForPet(petId),
    enabled: !!petId && isDatabaseAvailable,
  });
  const { data: medicationPlans } = useQuery({
    queryKey: ['medicationPlans', petId],
    queryFn: () => listMedicationPlansForPet(petId),
    enabled: !!petId && isDatabaseAvailable,
  });

  const summary = useMemo(
    () => buildHealthReportSummary(range, log ?? [], tasks ?? [], medicationPlans ?? []),
    [log, medicationPlans, range, tasks]
  );

  const handleShare = async () => {
    if (!pet) {
      return;
    }

    await Share.share({
      title: `${pet.nickname} health report`,
      message: buildHealthReportShareText(pet, summary, medicationPlans ?? []),
    });
  };

  if (!pet) {
    return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <Pressable onPress={() => router.back()} hitSlop={8}>
            <ThemedText type="linkPrimary">← Back</ThemedText>
          </Pressable>
          <ThemedText type="small" style={{ marginTop: Spacing.three }}>
            {isDatabaseAvailable ? 'Loading health report…' : 'Local storage is unavailable in this environment.'}
          </ThemedText>
        </SafeAreaView>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.headerRow}>
            <Pressable onPress={() => router.back()} hitSlop={8}>
              <ThemedText type="linkPrimary">← Back</ThemedText>
            </Pressable>
            <Pressable onPress={handleShare}>
              <ThemedText type="linkPrimary">Share</ThemedText>
            </Pressable>
          </View>

          <View style={styles.titleBlock}>
            <ThemedText type="title" style={styles.title}>
              {pet.nickname} health report
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Review symptoms, medication events, care confirmations, and task urgency in one cleaner export view.
            </ThemedText>
          </View>

          <View style={styles.filterRow}>
            {RANGE_OPTIONS.map((option) => {
              const selected = option.value === range;
              return (
                <Pressable key={option.value} onPress={() => setRange(option.value)}>
                  <ThemedView
                    type="backgroundElement"
                    style={[styles.filterChip, selected && { backgroundColor: theme.accent }]}>
                    <ThemedText type="smallBold" style={selected ? { color: theme.onAccent } : undefined}>
                      {option.label}
                    </ThemedText>
                  </ThemedView>
                </Pressable>
              );
            })}
          </View>

          <Card variant="soft" style={styles.summaryCard}>
            <ThemedText type="smallBold">{summary.rangeLabel}</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {summary.filteredLog.length} timeline entries included in this report.
            </ThemedText>
          </Card>

          <View style={styles.metricGrid}>
            <ThemedView type="backgroundElement" style={styles.metricCard}>
              <ThemedText type="smallBold">{summary.symptomCount}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Symptoms
              </ThemedText>
            </ThemedView>
            <ThemedView type="backgroundElement" style={styles.metricCard}>
              <ThemedText type="smallBold">{summary.medicationCount}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Med events
              </ThemedText>
            </ThemedView>
            <ThemedView type="backgroundElement" style={styles.metricCard}>
              <ThemedText type="smallBold">{summary.careCount}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Care logs
              </ThemedText>
            </ThemedView>
            <ThemedView type="backgroundElement" style={styles.metricCard}>
              <ThemedText type="smallBold">{summary.vetCount}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Vet notes
              </ThemedText>
            </ThemedView>
          </View>

          <Card variant="filled" style={styles.summaryCard}>
            <ThemedText type="smallBold">Urgency snapshot</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {summary.overdueTaskCount} overdue · {summary.dueSoonTaskCount} due soon · {summary.dueMedicationCount} medication task
              {summary.dueMedicationCount === 1 ? '' : 's'} due
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Latest weight: {summary.latestWeightGrams != null ? `${summary.latestWeightGrams} g` : 'Not logged'}
            </ThemedText>
          </Card>

          <Card variant="filled" style={styles.summaryCard}>
            <ThemedText type="smallBold">Medication plans</ThemedText>
            {(medicationPlans ?? []).length === 0 ? (
              <ThemedText type="small" themeColor="textSecondary">
                No medication plans for this pet.
              </ThemedText>
            ) : (
              (medicationPlans ?? []).map((plan) => (
                <ThemedView key={plan.id} type="backgroundElement" style={styles.rowCard}>
                  <ThemedText type="smallBold">
                    {plan.medicationName} · {plan.dosage}
                  </ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    {plan.instructions || 'No extra instructions'}
                  </ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    {plan.lastGivenAt ? `Last given ${new Date(plan.lastGivenAt).toLocaleString()}` : 'Not given yet'}
                  </ThemedText>
                </ThemedView>
              ))
            )}
          </Card>

          <Card variant="filled" style={styles.summaryCard}>
            <ThemedText type="smallBold">Timeline highlights</ThemedText>
            {summary.filteredLog.length === 0 ? (
              <ThemedText type="small" themeColor="textSecondary">
                No entries in this range yet.
              </ThemedText>
            ) : (
              summary.filteredLog.slice(0, 20).map((entry) => (
                <ThemedView key={entry.id} type="backgroundElement" style={styles.rowCard}>
                  <ThemedText type="smallBold">{entry.title ?? entry.entryType}</ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    {entry.note}
                  </ThemedText>
                  <ThemedText type="small" themeColor="textSecondary">
                    {new Date(entry.timestamp).toLocaleString()}
                    {entry.actorName ? ` · ${entry.actorName}` : ''}
                  </ThemedText>
                </ThemedView>
              ))
            )}
          </Card>
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
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.five,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleBlock: {
    gap: Spacing.one,
  },
  title: {
    fontSize: 30,
    lineHeight: 36,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  filterChip: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  summaryCard: {
    gap: Spacing.two,
  },
  metricGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  metricCard: {
    minWidth: '47%',
    flexGrow: 1,
    borderRadius: Radius.lg,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  rowCard: {
    borderRadius: Radius.md,
    padding: Spacing.two,
    gap: 4,
  },
});
