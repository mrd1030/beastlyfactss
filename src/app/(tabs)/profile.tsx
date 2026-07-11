import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { Eyebrow } from '@/components/eyebrow';
import { AddPetCard, PetCard } from '@/components/pet-card';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { getAllSpecies } from '@/content-client/species-catalog';
import { isDatabaseAvailable } from '@/db/client';
import { listDueCareTasks, listPets, listRecentHusbandryLog, listUpcomingCareTasks } from '@/db/helpers';
import type { HusbandryLogEntry } from '@/db/types';
import { useTheme } from '@/hooks/use-theme';
import { refreshAllPetsCareNotifications } from '@/lib/care-notifications';
import { QUICK_CARE_ACTIONS, confirmQuickCareAction, describeDueStatus, getEffectiveTaskDueDate, markCareTaskDoneAndLog } from '@/lib/care-task-engine';
import { getCareTeam } from '@/lib/care-team-store';
import { refreshCareStatusWidget } from '@/lib/care-widget';
import { addDays, localDateString } from '@/lib/date';
import { markHouseholdSyncDirty } from '@/lib/household-sync-store';

/**
 * Pets tab — the day-to-day dashboard for care, reminders, activity, and
 * the user's animal list. Profile editing and app preferences now live on
 * the separate Settings tab to keep this screen focused on pet care.
 */

function getGreeting(name?: string): string {
  const hour = new Date().getHours();
  const salutation = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
  return name ? `${salutation}, ${name}` : salutation;
}

export default function ProfileScreen() {
  const router = useRouter();
  const theme = useTheme();
  const queryClient = useQueryClient();
  const today = localDateString();

  const { data: pets } = useQuery({ queryKey: ['pets'], queryFn: listPets, enabled: isDatabaseAvailable });
  const { data: dueTasks } = useQuery({
    queryKey: ['careTasks', 'due', today],
    queryFn: () => listDueCareTasks(today),
    enabled: isDatabaseAvailable,
  });
  const { data: dueSoonTasks } = useQuery({
    queryKey: ['careTasks', 'soon', today],
    queryFn: () => listUpcomingCareTasks(addDays(today, 1), addDays(today, 3)),
    enabled: isDatabaseAvailable,
  });
  const { data: recentActivity } = useQuery({
    queryKey: ['husbandryLog', 'recent'],
    queryFn: () => listRecentHusbandryLog(40),
    enabled: isDatabaseAvailable,
  });
  const { data: careTeam } = useQuery({
    queryKey: ['careTeam'],
    queryFn: getCareTeam,
  });

  const speciesCatalog = getAllSpecies();
  const speciesTitleById = new Map(speciesCatalog.map((species) => [species.id, species.name]));
  const petMap = new Map((pets ?? []).map((pet) => [pet.id, pet]));
  const latestSymptom = (recentActivity ?? []).find((entry) => entry.entryType === 'symptom') ?? null;
  const activeCaregiver =
    careTeam?.caregivers.find((caregiver) => caregiver.id === careTeam.activeCaregiverId) ?? careTeam?.caregivers[0] ?? null;
  const latestActivityByPet = new Map<string, HusbandryLogEntry>();
  const latestSymptomByPet = new Map<string, HusbandryLogEntry>();

  for (const entry of recentActivity ?? []) {
    if (!latestActivityByPet.has(entry.petId)) {
      latestActivityByPet.set(entry.petId, entry);
    }
    if (entry.entryType === 'symptom' && !latestSymptomByPet.has(entry.petId)) {
      latestSymptomByPet.set(entry.petId, entry);
    }
  }

  const openPet = (petId: string) => {
    router.push({ pathname: '/pet/[id]', params: { id: petId } });
  };

  const openAddPet = () => {
    router.push('/pet/form');
  };

  const handleMarkDone = async (taskId: string) => {
    const task = (dueTasks ?? []).find((item) => item.id === taskId);
    if (!task) return;
    await markCareTaskDoneAndLog(task, activeCaregiver?.name);
    await markHouseholdSyncDirty().catch(() => {});
    await queryClient.invalidateQueries({ queryKey: ['careTasks'] });
    await queryClient.invalidateQueries({ queryKey: ['husbandryLog'] });
    await refreshAllPetsCareNotifications().catch(() => {});
    await refreshCareStatusWidget().catch(() => {});
  };

  const handleQuickCare = async (petId: string, actionId: Parameters<typeof confirmQuickCareAction>[1]) => {
    await confirmQuickCareAction(petId, actionId, [...(dueTasks ?? []), ...(dueSoonTasks ?? [])], today, activeCaregiver?.name);
    await markHouseholdSyncDirty().catch(() => {});
    await queryClient.invalidateQueries({ queryKey: ['careTasks'] });
    await queryClient.invalidateQueries({ queryKey: ['husbandryLog'] });
    await refreshAllPetsCareNotifications().catch(() => {});
    await refreshCareStatusWidget().catch(() => {});
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Greeting header */}
          <ThemedView style={styles.headerRow}>
            <View style={styles.greetingBlock}>
              <ThemedText type="title" style={styles.title}>
                {getGreeting(activeCaregiver?.name)}
              </ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
              </ThemedText>
            </View>
          </ThemedView>

          {latestSymptom && (
            <ThemedView type="backgroundElement" style={styles.healthAlertCard}>
              <View style={styles.dashboardHeader}>
                <ThemedText type="smallBold">Health watch</ThemedText>
                <ThemedText
                  type="small"
                  style={{
                    color:
                      latestSymptom.symptomSeverity === 'urgent'
                        ? theme.danger
                        : latestSymptom.symptomSeverity === 'mild'
                          ? theme.success
                          : theme.warning,
                  }}>
                  {(latestSymptom.symptomSeverity ?? 'watch').toUpperCase()}
                </ThemedText>
              </View>
              <ThemedText type="small" themeColor="textSecondary">
                {(petMap.get(latestSymptom.petId)?.nickname ?? 'Pet') + ' · ' + new Date(latestSymptom.timestamp).toLocaleDateString()}
              </ThemedText>
              <ThemedText type="small">{latestSymptom.note}</ThemedText>
              <Pressable onPress={() => openPet(latestSymptom.petId)}>
                <ThemedText type="linkPrimary">Open timeline</ThemedText>
              </Pressable>
            </ThemedView>
          )}

          <Eyebrow style={styles.sectionTitle}>Care overview</Eyebrow>

          <ThemedView type="backgroundElement" style={styles.dashboardCard}>
            <View style={styles.dashboardHeader}>
              <ThemedText type="smallBold">Today in care</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                {dueTasks?.length ?? 0} due
              </ThemedText>
            </View>
            {(dueTasks ?? []).length === 0 ? (
              <ThemedText type="small" themeColor="textSecondary">
                Nothing due right now.
              </ThemedText>
            ) : (
              (dueTasks ?? []).slice(0, 4).map((task) => {
                const pet = petMap.get(task.petId);
                const effectiveDueDate = getEffectiveTaskDueDate(task);
                const overdue = effectiveDueDate < today;
                const dueToday = effectiveDueDate === today;
                return (
                  <ThemedView key={task.id} type="backgroundSelected" style={styles.dashboardRow}>
                    <Pressable onPress={() => openPet(task.petId)} style={styles.dashboardOpenArea}>
                      <View style={styles.dashboardText}>
                        <ThemedText type="smallBold">{task.label ?? task.taskType}</ThemedText>
                        <ThemedText type="small" themeColor="textSecondary">
                          {pet?.nickname ?? 'Pet'}
                        </ThemedText>
                      </View>
                      <ThemedText
                        type="small"
                        style={{
                          color: overdue ? theme.danger : dueToday ? theme.warning : theme.textSecondary,
                        }}>
                        {describeDueStatus(effectiveDueDate, today)}
                      </ThemedText>
                    </Pressable>
                    <Pressable onPress={() => handleMarkDone(task.id)}>
                      <ThemedView type="backgroundElement" style={styles.quickDoneButton}>
                        <ThemedText type="smallBold">Done</ThemedText>
                      </ThemedView>
                    </Pressable>
                  </ThemedView>
                );
              })
            )}
          </ThemedView>

          <ThemedView type="backgroundElement" style={styles.dashboardCard}>
            <View style={styles.dashboardHeader}>
              <ThemedText type="smallBold">Due soon</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Next 3 days
              </ThemedText>
            </View>
            {(dueSoonTasks ?? []).length === 0 ? (
              <ThemedText type="small" themeColor="textSecondary">
                No upcoming care crunch right now.
              </ThemedText>
            ) : (
              (dueSoonTasks ?? []).slice(0, 4).map((task) => {
                const pet = petMap.get(task.petId);
                const effectiveDueDate = getEffectiveTaskDueDate(task);
                return (
                  <Pressable key={task.id} onPress={() => openPet(task.petId)}>
                    <ThemedView type="backgroundSelected" style={styles.dashboardRow}>
                      <View style={styles.dashboardText}>
                        <ThemedText type="smallBold">{task.label ?? task.taskType}</ThemedText>
                        <ThemedText type="small" themeColor="textSecondary">
                          {pet?.nickname ?? 'Pet'}
                        </ThemedText>
                      </View>
                      <ThemedText type="small" themeColor="textSecondary">
                        {describeDueStatus(effectiveDueDate, today)}
                      </ThemedText>
                    </ThemedView>
                  </Pressable>
                );
              })
            )}
          </ThemedView>

          <ThemedView type="backgroundElement" style={styles.dashboardCard}>
            <View style={styles.dashboardHeader}>
              <ThemedText type="smallBold">Recent activity</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                Care log
              </ThemedText>
            </View>
            {(recentActivity ?? []).length === 0 ? (
              <ThemedText type="small" themeColor="textSecondary">
                No pet activity logged yet.
              </ThemedText>
            ) : (
              (recentActivity ?? []).slice(0, 5).map((entry) => {
                const pet = petMap.get(entry.petId);
                return (
                  <Pressable key={entry.id} onPress={() => openPet(entry.petId)}>
                    <ThemedView type="backgroundSelected" style={styles.dashboardRow}>
                      <View style={styles.dashboardText}>
                        <ThemedText type="smallBold">{entry.title ?? 'Care update'}</ThemedText>
                        <ThemedText type="small" themeColor="textSecondary">
                          {pet?.nickname ?? 'Pet'} · {new Date(entry.timestamp).toLocaleDateString()}
                          {entry.actorName ? ` · ${entry.actorName}` : ''}
                        </ThemedText>
                      </View>
                      {entry.weightGrams != null && <ThemedText type="smallBold">{entry.weightGrams} g</ThemedText>}
                    </ThemedView>
                  </Pressable>
                );
              })
            )}
          </ThemedView>

          <Eyebrow style={styles.sectionTitle}>Daily board</Eyebrow>
          {(pets ?? []).length === 0 ? (
            <ThemedView type="backgroundElement" style={styles.infoBox}>
              <ThemedText type="small">Add a pet to unlock a shared daily board with quick care actions.</ThemedText>
            </ThemedView>
          ) : (
            <View style={styles.dailyBoardStack}>
              {(pets ?? []).map((pet) => {
                const petDueTasks = (dueTasks ?? []).filter((task) => task.petId === pet.id);
                const overdueCount = petDueTasks.filter((task) => getEffectiveTaskDueDate(task) < today).length;
                const dueTodayCount = petDueTasks.filter((task) => getEffectiveTaskDueDate(task) === today).length;
                const latestPetActivity = latestActivityByPet.get(pet.id) ?? null;
                const latestPetSymptom = latestSymptomByPet.get(pet.id) ?? null;
                return (
                  <Card key={pet.id} variant="filled" style={styles.dailyBoardCard}>
                    <View style={styles.dailyBoardHeader}>
                      <View style={styles.dailyBoardTitleBlock}>
                        <ThemedText type="smallBold">{pet.nickname}</ThemedText>
                        <ThemedText type="small" themeColor="textSecondary">
                          {pet.linkedEntryId ? speciesTitleById.get(pet.linkedEntryId) ?? 'Linked pet' : 'Custom pet'}
                        </ThemedText>
                      </View>
                      <Pressable onPress={() => openPet(pet.id)}>
                        <ThemedText type="linkPrimary">Open</ThemedText>
                      </Pressable>
                    </View>

                    <View style={styles.dailyBoardStats}>
                      <ThemedView type="backgroundElement" style={styles.dailyStatChip}>
                        <ThemedText type="small">Today {dueTodayCount}</ThemedText>
                      </ThemedView>
                      <ThemedView type="backgroundElement" style={styles.dailyStatChip}>
                        <ThemedText type="small" style={overdueCount > 0 ? { color: theme.danger } : undefined}>
                          Overdue {overdueCount}
                        </ThemedText>
                      </ThemedView>
                    </View>

                    {latestPetActivity ? (
                      <ThemedText type="small" themeColor="textSecondary">
                        Last activity: {latestPetActivity.title ?? 'Care update'} ·{' '}
                        {new Date(latestPetActivity.timestamp).toLocaleDateString()}
                        {latestPetActivity.actorName ? ` · ${latestPetActivity.actorName}` : ''}
                      </ThemedText>
                    ) : (
                      <ThemedText type="small" themeColor="textSecondary">
                        No activity logged yet.
                      </ThemedText>
                    )}

                    {latestPetSymptom && (
                      <ThemedView type="backgroundElement" style={styles.petSymptomBanner}>
                        <ThemedText type="smallBold">Health watch: {(latestPetSymptom.symptomSeverity ?? 'watch').toUpperCase()}</ThemedText>
                        <ThemedText type="small" themeColor="textSecondary" numberOfLines={2}>
                          {latestPetSymptom.note}
                        </ThemedText>
                      </ThemedView>
                    )}

                    <View style={styles.petQuickActionsRow}>
                      {QUICK_CARE_ACTIONS.map((action) => (
                        <Pressable key={`${pet.id}-${action.id}`} onPress={() => handleQuickCare(pet.id, action.id)}>
                          <ThemedView type="backgroundSelected" style={styles.petQuickActionButton}>
                            <ThemedText type="smallBold">{action.label}</ThemedText>
                          </ThemedView>
                        </Pressable>
                      ))}
                      <Pressable onPress={() => router.push({ pathname: '/pet/[id]', params: { id: pet.id, presetLogType: 'symptom' } })}>
                        <ThemedView type="backgroundElement" style={styles.petQuickActionButton}>
                          <ThemedText type="smallBold">Symptom</ThemedText>
                        </ThemedView>
                      </Pressable>
                    </View>
                  </Card>
                );
              })}
            </View>
          )}

          <Eyebrow style={styles.sectionTitle}>Your pets</Eyebrow>

          {!isDatabaseAvailable && (
            <ThemedView type="backgroundElement" style={styles.infoBox}>
              <ThemedText type="small">Local storage is unavailable in this environment, so pets cannot be saved here.</ThemedText>
            </ThemedView>
          )}

          {isDatabaseAvailable && (pets ?? []).length === 0 && (
            <ThemedView type="backgroundElement" style={styles.infoBox}>
              <ThemedText type="small">
                No pets yet — add one to start tracking care reminders and a husbandry log.
              </ThemedText>
            </ThemedView>
          )}

          {isDatabaseAvailable && (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.petsRow}>
              {(pets ?? []).map((pet) => (
                <PetCard
                  key={pet.id}
                  pet={pet}
                  speciesTitle={pet.linkedEntryId ? speciesTitleById.get(pet.linkedEntryId) : undefined}
                  onPress={() => openPet(pet.id)}
                />
              ))}
              <AddPetCard onPress={openAddPet} />
            </ScrollView>
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
  scrollContent: {
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.one,
  },
  headerRow: {
    marginBottom: Spacing.two,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  greetingBlock: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
  },
  subtitle: {
    marginBottom: Spacing.one,
  },
  healthAlertCard: {
    borderRadius: Radius.lg,
    padding: Spacing.three,
    gap: Spacing.one,
    marginTop: Spacing.three,
  },
  sectionTitle: {
    marginTop: Spacing.four,
    marginBottom: Spacing.two,
  },
  dashboardCard: {
    borderRadius: Radius.lg,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  dashboardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dashboardRow: {
    borderRadius: Radius.md,
    padding: Spacing.two,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: Spacing.two,
  },
  dashboardOpenArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: Spacing.two,
  },
  dashboardText: {
    flex: 1,
    gap: 2,
  },
  quickDoneButton: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  dailyBoardStack: {
    gap: Spacing.two,
  },
  dailyBoardCard: {
    gap: Spacing.two,
  },
  dailyBoardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  dailyBoardTitleBlock: {
    flex: 1,
    gap: 2,
  },
  dailyBoardStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  dailyStatChip: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  petSymptomBanner: {
    borderRadius: Radius.md,
    padding: Spacing.two,
    gap: Spacing.half,
  },
  petQuickActionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  petQuickActionButton: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  infoBox: {
    borderRadius: Radius.md,
    padding: Spacing.three,
  },
  petsRow: {
    flexGrow: 0,
  },
});
