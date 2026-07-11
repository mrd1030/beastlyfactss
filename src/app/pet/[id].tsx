import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Card } from '@/components/card';
import { PetWeightChart } from '@/components/pet-weight-chart';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Radius, Spacing } from '@/constants/theme';
import { fetchEntryDetail } from '@/content-client/queries';
import { getSpeciesById } from '@/content-client/species-catalog';
import { isDatabaseAvailable } from '@/db/client';
import {
  addHusbandryLogEntry,
  deleteCareTask,
  deleteHusbandryLogEntry,
  deletePet,
  getPet,
  listCareTasksForPet,
  listHusbandryLogForPet,
} from '@/db/helpers';
import type { CareTask, HusbandryLogEntry, HusbandryLogType, SymptomSeverity } from '@/db/types';
import { useTheme } from '@/hooks/use-theme';
import { refreshAllPetsCareNotifications } from '@/lib/care-notifications';
import { getCareTeam } from '@/lib/care-team-store';
import { refreshCareStatusWidget } from '@/lib/care-widget';
import {
  QUICK_CARE_ACTIONS,
  addCustomCareTask,
  confirmQuickCareAction,
  describeDueStatus,
  getEffectiveTaskDueDate,
  markCareTaskDoneAndLog,
  snoozeTaskByDays,
} from '@/lib/care-task-engine';
import { addDays, localDateString } from '@/lib/date';
import { markHouseholdSyncDirty } from '@/lib/household-sync-store';
import { pickPetPhoto } from '@/lib/pick-pet-photo';

const LOG_PRESETS: {
  id: HusbandryLogType;
  label: string;
  title: string;
  placeholder: string;
  fallbackNote: string;
  requiresWeight?: boolean;
}[] = [
  { id: 'note', label: 'Note', title: 'General note', placeholder: 'Add a care note…', fallbackNote: 'Added a general care note.' },
  { id: 'feeding', label: 'Feeding', title: 'Feeding log', placeholder: 'What was fed today?', fallbackNote: 'Completed a feeding.' },
  { id: 'weight', label: 'Weight', title: 'Weight check', placeholder: 'Optional note about the weigh-in…', fallbackNote: 'Recorded a new weight.', requiresWeight: true },
  { id: 'shed', label: 'Shed', title: 'Shed log', placeholder: 'How did the shed go?', fallbackNote: 'Logged a shed update.' },
  { id: 'vet', label: 'Vet', title: 'Vet visit', placeholder: 'What happened at the visit?', fallbackNote: 'Logged a veterinary update.' },
  { id: 'symptom', label: 'Symptom', title: 'Symptom log', placeholder: 'What did you notice, and when did it happen?', fallbackNote: 'Logged a symptom update.' },
];

const SYMPTOM_SEVERITIES: { value: SymptomSeverity; label: string }[] = [
  { value: 'mild', label: 'Mild' },
  { value: 'watch', label: 'Watch' },
  { value: 'urgent', label: 'Urgent' },
];

function getDaysSince(dateStr: string): number | null {
  const [year, month, day] = dateStr.split('-').map(Number);
  if (!year || !month || !day) return null;
  const start = new Date(year, month - 1, day);
  const today = new Date();
  return Math.max(0, Math.floor((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
}

function formatChartDate(timestamp: string): string {
  return new Date(timestamp).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
}

function formatActivityTitle(entry: HusbandryLogEntry): string {
  if (entry.title) return entry.title;
  switch (entry.entryType as HusbandryLogType) {
    case 'feeding':
      return 'Feeding log';
    case 'weight':
      return 'Weight check';
    case 'shed':
      return 'Shed log';
    case 'vet':
      return 'Vet visit';
    case 'symptom':
      return 'Symptom log';
    case 'medication':
      return 'Medication given';
    case 'cleaning':
      return 'Cleaning completed';
    case 'water':
      return 'Water refreshed';
    case 'check':
      return 'Environment checked';
    case 'task':
      return 'Care task completed';
    default:
      return 'General note';
  }
}

function getLogIcon(entryType: HusbandryLogType | string): string {
  switch (entryType) {
    case 'feeding':
      return '🍽';
    case 'weight':
      return '⚖';
    case 'shed':
      return '🦎';
    case 'vet':
      return '🩺';
    case 'symptom':
      return '🚨';
    case 'medication':
      return '💊';
    case 'cleaning':
      return '🧼';
    case 'water':
      return '💧';
    case 'check':
      return '🌡️';
    case 'task':
      return '✅';
    default:
      return '📝';
  }
}

/**
 * Pet detail screen — the "owned pet" half of My Pack. Shows the pet's
 * profile, its auto-generated care-task reminders (with a "mark done"
 * action that recomputes the next due date), and a freeform husbandry log.
 * Reachable from the pet cards at the top of the Pack tab.
 */
export default function PetDetailScreen() {
  const { id, presetLogType } = useLocalSearchParams<{ id: string; presetLogType?: HusbandryLogType }>();
  const router = useRouter();
  const theme = useTheme();
  const queryClient = useQueryClient();
  const [note, setNote] = useState('');
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [addingTask, setAddingTask] = useState(false);
  const [taskLabel, setTaskLabel] = useState('');
  const [taskIntervalDays, setTaskIntervalDays] = useState('');
  const [taskError, setTaskError] = useState<string | null>(null);
  const initialLogType = presetLogType && LOG_PRESETS.some((preset) => preset.id === presetLogType) ? presetLogType : 'note';
  const [logType, setLogType] = useState<HusbandryLogType>(initialLogType);
  const [weightGrams, setWeightGrams] = useState('');
  const [symptomSeverity, setSymptomSeverity] = useState<SymptomSeverity>('watch');
  const [symptomContext, setSymptomContext] = useState('');
  const [logPhotoUri, setLogPhotoUri] = useState<string | null>(null);
  const [logError, setLogError] = useState<string | null>(null);
  const [timelineFilter, setTimelineFilter] = useState<'all' | 'symptoms' | 'meds' | 'weight' | 'vet' | 'care'>('all');

  const { data: pet } = useQuery({
    queryKey: ['pet', id],
    queryFn: () => getPet(id),
    enabled: !!id && isDatabaseAvailable,
  });

  const { data: careTasks } = useQuery({
    queryKey: ['careTasks', id],
    queryFn: () => listCareTasksForPet(id),
    enabled: !!id && isDatabaseAvailable,
  });

  const { data: log } = useQuery({
    queryKey: ['husbandryLog', id],
    queryFn: () => listHusbandryLogForPet(id),
    enabled: !!id && isDatabaseAvailable,
  });
  const { data: careTeam } = useQuery({
    queryKey: ['careTeam'],
    queryFn: getCareTeam,
  });

  // Catalog species are checked first (synchronous, local); only fall back
  // to a Sanity fetch when the linked id isn't one of the 78 bundled
  // species (e.g. a pet linked to a supplementary blog post instead).
  const linkedCatalogSpecies = pet?.linkedEntryId ? getSpeciesById(pet.linkedEntryId) : undefined;

  const { data: linkedSanityEntry } = useQuery({
    queryKey: ['entry', pet?.linkedEntryId],
    queryFn: () => fetchEntryDetail(pet!.linkedEntryId as string),
    enabled: !!pet?.linkedEntryId && !linkedCatalogSpecies,
  });

  const linkedEntry = linkedCatalogSpecies
    ? { _id: linkedCatalogSpecies.id, title: linkedCatalogSpecies.name }
    : linkedSanityEntry;

  const today = localDateString();
  const activeCaregiver =
    careTeam?.caregivers.find((caregiver) => caregiver.id === careTeam.activeCaregiverId) ?? careTeam?.caregivers[0] ?? null;
  const sortedTasks = [...(careTasks ?? [])].sort((a, b) =>
    getEffectiveTaskDueDate(a) < getEffectiveTaskDueDate(b) ? -1 : 1
  );
  const overdueTasks = sortedTasks.filter((task) => getEffectiveTaskDueDate(task) < today);
  const dueTodayTasks = sortedTasks.filter((task) => getEffectiveTaskDueDate(task) === today);
  const dueSoonTasks = sortedTasks.filter((task) => getEffectiveTaskDueDate(task) > today && getEffectiveTaskDueDate(task) <= addDays(today, 3));
  const customTaskCount = sortedTasks.filter((task) => task.source === 'custom').length;
  const daysWithPet = pet?.acquiredDate ? getDaysSince(pet.acquiredDate) : null;
  const latestLogEntry = log?.[0] ?? null;
  const latestSymptomEntry = log?.find((entry) => entry.entryType === 'symptom') ?? null;
  const weightEntries = useMemo(
    () =>
      [...(log ?? [])]
        .filter((entry) => entry.weightGrams != null)
        .sort((a, b) => (a.timestamp < b.timestamp ? -1 : 1)),
    [log]
  );
  const latestWeight = weightEntries[weightEntries.length - 1] ?? null;
  const weightChartPoints = weightEntries.slice(-6).map((entry) => ({
    id: entry.id,
    label: formatChartDate(entry.timestamp),
    value: entry.weightGrams ?? 0,
  }));
  const selectedPreset = LOG_PRESETS.find((preset) => preset.id === logType) ?? LOG_PRESETS[0];
  const filteredLog = (log ?? []).filter((entry) => {
    if (timelineFilter === 'all') return true;
    if (timelineFilter === 'symptoms') return entry.entryType === 'symptom';
    if (timelineFilter === 'meds') return entry.entryType === 'medication';
    if (timelineFilter === 'weight') return entry.entryType === 'weight' || entry.weightGrams != null;
    if (timelineFilter === 'vet') return entry.entryType === 'vet';
    return ['feeding', 'water', 'cleaning', 'check', 'task'].includes(entry.entryType);
  });

  const handleMarkDone = async (task: CareTask) => {
    await markCareTaskDoneAndLog(task, activeCaregiver?.name);
    await markHouseholdSyncDirty().catch(() => {});
    await queryClient.invalidateQueries({ queryKey: ['careTasks'] });
    await queryClient.invalidateQueries({ queryKey: ['husbandryLog'] });
    await refreshAllPetsCareNotifications().catch(() => {});
    await refreshCareStatusWidget().catch(() => {});
  };

  const handleSnoozeTask = async (task: CareTask) => {
    await snoozeTaskByDays(task);
    await markHouseholdSyncDirty().catch(() => {});
    await queryClient.invalidateQueries({ queryKey: ['careTasks'] });
    await refreshAllPetsCareNotifications().catch(() => {});
  };

  const handleDeleteTask = async (task: CareTask) => {
    await deleteCareTask(task.id);
    await markHouseholdSyncDirty().catch(() => {});
    await queryClient.invalidateQueries({ queryKey: ['careTasks'] });
    await refreshAllPetsCareNotifications().catch(() => {});
    await refreshCareStatusWidget().catch(() => {});
  };

  const handleAddTask = async () => {
    const trimmedLabel = taskLabel.trim();
    const interval = Number(taskIntervalDays);
    if (!trimmedLabel) {
      setTaskError('Give this task a name.');
      return;
    }
    if (!Number.isFinite(interval) || interval < 1) {
      setTaskError('Repeat interval should be a number of days, 1 or more.');
      return;
    }
    if (!id) return;

    setTaskError(null);
    await addCustomCareTask(id, trimmedLabel, Math.round(interval));
    await markHouseholdSyncDirty().catch(() => {});
    await queryClient.invalidateQueries({ queryKey: ['careTasks'] });
    await refreshAllPetsCareNotifications().catch(() => {});
    await refreshCareStatusWidget().catch(() => {});
    setTaskLabel('');
    setTaskIntervalDays('');
    setAddingTask(false);
  };

  const handleAddNote = async () => {
    if (!id) return;
    const trimmed = note.trim();
    const parsedWeight = weightGrams.trim() ? Number(weightGrams.trim()) : null;
    if (selectedPreset.requiresWeight && (!Number.isFinite(parsedWeight) || parsedWeight == null || parsedWeight <= 0)) {
      setLogError('Enter the weight in grams for a weight log.');
      return;
    }
    if (selectedPreset.id === 'symptom' && !trimmed && !logPhotoUri) {
      setLogError('Add a symptom note or photo before saving.');
      return;
    }
    if (!trimmed && !selectedPreset.requiresWeight && selectedPreset.id !== 'symptom') {
      setLogError('Add a note before saving this log entry.');
      return;
    }

    setLogError(null);
    await addHusbandryLogEntry({
      petId: id,
      title: selectedPreset.title,
      entryType: selectedPreset.id,
      note: trimmed || (parsedWeight != null ? `Recorded weight: ${parsedWeight} g.` : selectedPreset.fallbackNote),
      timestamp: new Date().toISOString(),
      actorName: activeCaregiver?.name ?? null,
      photoUri: logPhotoUri,
      weightGrams: parsedWeight != null && Number.isFinite(parsedWeight) ? Math.round(parsedWeight) : null,
      taskId: null,
      symptomSeverity: selectedPreset.id === 'symptom' ? symptomSeverity : null,
      symptomContext: selectedPreset.id === 'symptom' ? symptomContext.trim() || null : null,
    });
    await markHouseholdSyncDirty().catch(() => {});
    setNote('');
    setWeightGrams('');
    setSymptomSeverity('watch');
    setSymptomContext('');
    setLogPhotoUri(null);
    setLogType('note');
    await queryClient.invalidateQueries({ queryKey: ['husbandryLog'] });
    await refreshCareStatusWidget().catch(() => {});
  };

  const handlePickLogPhoto = async () => {
    const uri = await pickPetPhoto();
    if (!uri) return;
    setLogPhotoUri(uri);
  };

  const handleQuickConfirm = async (actionId: string) => {
    if (!id) return;
    await confirmQuickCareAction(id, actionId as Parameters<typeof confirmQuickCareAction>[1], careTasks ?? [], today, activeCaregiver?.name);
    await markHouseholdSyncDirty().catch(() => {});
    await queryClient.invalidateQueries({ queryKey: ['careTasks'] });
    await queryClient.invalidateQueries({ queryKey: ['husbandryLog'] });
    await refreshAllPetsCareNotifications().catch(() => {});
    await refreshCareStatusWidget().catch(() => {});
  };

  const handleDeleteLog = async (entryId: string) => {
    await deleteHusbandryLogEntry(entryId);
    await markHouseholdSyncDirty().catch(() => {});
    await queryClient.invalidateQueries({ queryKey: ['husbandryLog'] });
    await refreshCareStatusWidget().catch(() => {});
  };

  const handleDelete = async () => {
    if (!id) return;
    await deletePet(id);
    await markHouseholdSyncDirty().catch(() => {});
    await queryClient.invalidateQueries({ queryKey: ['pets'] });
    await refreshAllPetsCareNotifications().catch(() => {});
    await refreshCareStatusWidget().catch(() => {});
    router.replace('/explore');
  };

  if (!pet) {
    return (
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <Pressable onPress={() => router.back()} hitSlop={8}>
            <ThemedText type="linkPrimary">← Back</ThemedText>
          </Pressable>
          <ThemedText type="small" style={{ marginTop: Spacing.three }}>
            {isDatabaseAvailable ? 'Loading pet…' : 'Local storage is unavailable in this environment.'}
          </ThemedText>
        </SafeAreaView>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.headerRow}>
          <Pressable onPress={() => router.back()} hitSlop={8}>
            <ThemedText type="linkPrimary">← Back</ThemedText>
          </Pressable>
          <Pressable onPress={() => router.push({ pathname: '/pet/form', params: { petId: pet.id } })} hitSlop={8}>
            <ThemedText type="linkPrimary">Edit</ThemedText>
          </Pressable>
        </ThemedView>

        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Card variant="soft" style={styles.heroCard}>
            <View style={styles.profileRow}>
              {pet.photoUri ? (
                <Image source={{ uri: pet.photoUri }} style={styles.photo} />
              ) : (
                <ThemedView type="backgroundElement" style={styles.photoPlaceholder}>
                  <ThemedText type="subtitle">🐾</ThemedText>
                </ThemedView>
              )}
              <View style={styles.profileText}>
                <ThemedText type="title" style={styles.nickname}>
                  {pet.nickname}
                </ThemedText>
                {pet.acquiredDate && (
                  <ThemedText type="small" themeColor="textSecondary">
                    Acquired {pet.acquiredDate}
                  </ThemedText>
                )}
                {linkedEntry ? (
                  <Pressable onPress={() => router.push({ pathname: '/entry/[id]', params: { id: linkedEntry._id } })}>
                    <ThemedText type="linkPrimary">{linkedEntry.title} →</ThemedText>
                  </Pressable>
                ) : (
                  <ThemedText type="small" themeColor="textSecondary">
                    No species linked
                  </ThemedText>
                )}
              </View>
            </View>
            <ThemedView type="backgroundElement" style={styles.caregiverBar}>
              <View style={styles.caregiverText}>
                <ThemedText type="smallBold">Logging as {activeCaregiver?.name ?? 'Caregiver'}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  Shared-care actions and health notes will show who handled them.
                </ThemedText>
              </View>
              <Pressable onPress={() => router.navigate('/settings')}>
                <ThemedText type="linkPrimary">Care team</ThemedText>
              </Pressable>
            </ThemedView>
            <View style={styles.quickActionsRow}>
              <Pressable onPress={() => setAddingTask((v) => !v)}>
                <ThemedView type="backgroundSelected" style={styles.quickActionButton}>
                  <ThemedText type="smallBold">{addingTask ? 'Hide task form' : '+ Add task'}</ThemedText>
                </ThemedView>
              </Pressable>
              <Pressable onPress={() => router.push({ pathname: '/pet/care-tools', params: { petId: pet.id } })}>
                <ThemedView type="backgroundElement" style={styles.quickActionButton}>
                  <ThemedText type="smallBold">Care tools</ThemedText>
                </ThemedView>
              </Pressable>
              <Pressable
                onPress={() => {
                  setLogType('feeding');
                  setLogError(null);
                }}>
                <ThemedView type="backgroundElement" style={styles.quickActionButton}>
                  <ThemedText type="smallBold">Quick feed log</ThemedText>
                </ThemedView>
              </Pressable>
              <Pressable
                onPress={() => {
                  setLogType('symptom');
                  setLogError(null);
                }}>
                <ThemedView type="backgroundElement" style={styles.quickActionButton}>
                  <ThemedText type="smallBold">Log symptom</ThemedText>
                </ThemedView>
              </Pressable>
              <Pressable
                onPress={() => {
                  setLogType('weight');
                  setLogError(null);
                }}>
                <ThemedView type="backgroundElement" style={styles.quickActionButton}>
                  <ThemedText type="smallBold">Log weight</ThemedText>
                </ThemedView>
              </Pressable>
            </View>
          </Card>

          <View style={styles.dashboardGrid}>
            <ThemedView type="backgroundElement" style={styles.dashboardCard}>
              <ThemedText type="small" themeColor="textSecondary">
                Due today
              </ThemedText>
              <ThemedText type="title" style={styles.dashboardValue}>
                {dueTodayTasks.length}
              </ThemedText>
            </ThemedView>
            <ThemedView type="backgroundElement" style={styles.dashboardCard}>
              <ThemedText type="small" themeColor="textSecondary">
                Overdue
              </ThemedText>
              <ThemedText type="title" style={[styles.dashboardValue, overdueTasks.length > 0 ? { color: theme.danger } : undefined]}>
                {overdueTasks.length}
              </ThemedText>
            </ThemedView>
            <ThemedView type="backgroundElement" style={styles.dashboardCard}>
              <ThemedText type="small" themeColor="textSecondary">
                Time together
              </ThemedText>
              <ThemedText type="smallBold">
                {daysWithPet != null ? `${daysWithPet} day${daysWithPet === 1 ? '' : 's'}` : 'Not set'}
              </ThemedText>
            </ThemedView>
            <ThemedView type="backgroundElement" style={styles.dashboardCard}>
              <ThemedText type="small" themeColor="textSecondary">
                Health watch
              </ThemedText>
              <ThemedText type="smallBold">
                {latestSymptomEntry ? (latestSymptomEntry.symptomSeverity ?? 'watch').toUpperCase() : latestWeight?.weightGrams ? `${latestWeight.weightGrams} g` : 'No alerts'}
              </ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                {latestSymptomEntry
                  ? new Date(latestSymptomEntry.timestamp).toLocaleDateString()
                  : latestWeight?.weightGrams
                    ? 'Latest weigh-in'
                    : 'Nothing concerning logged'}
              </ThemedText>
            </ThemedView>
          </View>

          {sortedTasks.length > 0 && (
            <Card variant="soft" style={styles.nextUpCard}>
              <ThemedText type="small" themeColor="textSecondary">
                Next up
              </ThemedText>
              <ThemedText type="smallBold">{sortedTasks[0].label ?? sortedTasks[0].taskType}</ThemedText>
              <ThemedText
                type="small"
                style={{
                  color:
                    getEffectiveTaskDueDate(sortedTasks[0]) < today
                      ? theme.danger
                      : getEffectiveTaskDueDate(sortedTasks[0]) === today
                        ? theme.warning
                        : theme.textSecondary,
                }}>
                {describeDueStatus(getEffectiveTaskDueDate(sortedTasks[0]), today)}
              </ThemedText>
            </Card>
          )}

          <Card variant="filled" style={styles.snapshotCard}>
            <ThemedText type="smallBold">Dashboard snapshot</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {latestLogEntry
                ? `Last activity: ${formatActivityTitle(latestLogEntry)} on ${new Date(latestLogEntry.timestamp).toLocaleDateString()}${latestLogEntry.actorName ? ` by ${latestLogEntry.actorName}` : ''}.`
                : 'No activity logged yet.'}
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {customTaskCount > 0
                ? `${customTaskCount} custom task${customTaskCount === 1 ? '' : 's'} helping you stay on top of care.`
                : 'Add a custom task for one-off care routines like medication or checkups.'}
            </ThemedText>
          </Card>

          <Card variant="filled" style={styles.snapshotCard}>
            <ThemedText type="smallBold">Reminder runway</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {dueSoonTasks.length > 0
                ? `${dueSoonTasks.length} task${dueSoonTasks.length === 1 ? '' : 's'} are coming up in the next three days.`
                : 'No additional tasks are due in the next three days.'}
            </ThemedText>
          </Card>

          <Card variant="filled" style={styles.snapshotCard}>
            <ThemedText type="smallBold">One-tap care</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              Confirm common routines without filling out the full timeline form.
            </ThemedText>
            <View style={styles.oneTapRow}>
              {QUICK_CARE_ACTIONS.map((action) => (
                <Pressable key={action.id} onPress={() => handleQuickConfirm(action.id)}>
                  <ThemedView type="backgroundSelected" style={styles.oneTapButton}>
                    <ThemedText type="smallBold">{action.label}</ThemedText>
                  </ThemedView>
                </Pressable>
              ))}
            </View>
          </Card>

          <View style={styles.sectionHeaderRow}>
            <ThemedText type="smallBold" style={styles.sectionTitle}>
              Care tasks
            </ThemedText>
            <Pressable onPress={() => setAddingTask((v) => !v)} hitSlop={8}>
              <ThemedText type="linkPrimary">{addingTask ? 'Cancel' : '+ Add task'}</ThemedText>
            </Pressable>
          </View>

          {addingTask && (
            <ThemedView type="backgroundElement" style={styles.addTaskBox}>
              <ThemedView type="backgroundSelected" style={styles.addTaskInputBox}>
                <TextInput
                  value={taskLabel}
                  onChangeText={setTaskLabel}
                  placeholder="Task name (e.g. Vet checkup)"
                  placeholderTextColor={theme.textSecondary}
                  style={[styles.addTaskInput, { color: theme.text }]}
                />
              </ThemedView>
              <ThemedView style={styles.addTaskRow}>
                <ThemedView type="backgroundSelected" style={[styles.addTaskInputBox, styles.addTaskIntervalBox]}>
                  <TextInput
                    value={taskIntervalDays}
                    onChangeText={setTaskIntervalDays}
                    placeholder="Repeat every N days"
                    placeholderTextColor={theme.textSecondary}
                    keyboardType="number-pad"
                    style={[styles.addTaskInput, { color: theme.text }]}
                  />
                </ThemedView>
                <Pressable onPress={handleAddTask}>
                  <ThemedView type="backgroundSelected" style={styles.addTaskSaveButton}>
                    <ThemedText type="small">Add</ThemedText>
                  </ThemedView>
                </Pressable>
              </ThemedView>
              {taskError && (
                <ThemedText type="small" style={{ color: theme.danger }}>
                  {taskError}
                </ThemedText>
              )}
            </ThemedView>
          )}

          {sortedTasks.length === 0 && (
            <ThemedText type="small" themeColor="textSecondary">
              No care tasks yet.
            </ThemedText>
          )}
          {sortedTasks.map((task) => {
            const overdue = task.nextDueDate < today;
            const dueToday = task.nextDueDate === today;
            const statusColor = overdue ? theme.danger : dueToday ? theme.warning : undefined;
            return (
              <ThemedView key={task.id} type="backgroundElement" style={styles.taskRow}>
                <View style={styles.taskInfo}>
                  <View style={styles.taskLabelRow}>
                    <ThemedText type="small">{task.label ?? task.taskType}</ThemedText>
                    {task.source === 'custom' && (
                      <ThemedView type="backgroundSelected" style={styles.customBadge}>
                        <ThemedText type="small">Custom</ThemedText>
                      </ThemedView>
                    )}
                  </View>
                  <ThemedText
                    type="small"
                    themeColor={statusColor ? undefined : 'textSecondary'}
                    style={statusColor ? { color: statusColor } : undefined}>
                    {describeDueStatus(getEffectiveTaskDueDate(task), today)}
                  </ThemedText>
                </View>
                <View style={styles.taskActions}>
                  <Pressable onPress={() => handleMarkDone(task)}>
                    <ThemedView type="backgroundSelected" style={styles.markDoneButton}>
                      <ThemedText type="small">Mark done</ThemedText>
                    </ThemedView>
                  </Pressable>
                  <Pressable onPress={() => handleSnoozeTask(task)}>
                    <ThemedView type="backgroundSelected" style={styles.markDoneButton}>
                      <ThemedText type="small">+1 day</ThemedText>
                    </ThemedView>
                  </Pressable>
                  <Pressable onPress={() => handleDeleteTask(task)} hitSlop={8}>
                    <ThemedText type="small" themeColor="textSecondary">
                      ✕
                    </ThemedText>
                  </Pressable>
                </View>
              </ThemedView>
            );
          })}

          <ThemedText type="smallBold" style={styles.sectionTitle}>
            Health timeline
          </ThemedText>
          <View style={styles.logPresetRow}>
            {([
              ['all', 'All'],
              ['symptoms', 'Symptoms'],
              ['meds', 'Meds'],
              ['weight', 'Weight'],
              ['vet', 'Vet'],
              ['care', 'Care'],
            ] as const).map(([value, label]) => {
              const selected = timelineFilter === value;
              return (
                <Pressable key={value} onPress={() => setTimelineFilter(value)}>
                  <ThemedView
                    type="backgroundElement"
                    style={[styles.logPresetChip, selected && { backgroundColor: theme.accent }]}>
                    <ThemedText type="small" style={selected ? { color: theme.onAccent } : undefined}>
                      {label}
                    </ThemedText>
                  </ThemedView>
                </Pressable>
              );
            })}
          </View>
          <ThemedView type="backgroundElement" style={styles.timelineSummaryCard}>
            <ThemedText type="small" themeColor="textSecondary">
              {filteredLog.length} entries shown
              {latestSymptomEntry ? ` · latest symptom ${latestSymptomEntry.symptomSeverity ?? 'watch'}` : ''}
              {latestWeight?.weightGrams ? ` · latest weight ${latestWeight.weightGrams} g` : ''}
            </ThemedText>
          </ThemedView>
          <View style={styles.logPresetRow}>
            {LOG_PRESETS.map((preset) => {
              const selected = preset.id === logType;
              return (
                <Pressable key={preset.id} onPress={() => setLogType(preset.id)}>
                  <ThemedView
                    type="backgroundElement"
                    style={[styles.logPresetChip, selected && { backgroundColor: theme.accent }]}>
                    <ThemedText type="small" style={selected ? { color: theme.onAccent } : undefined}>
                      {preset.label}
                    </ThemedText>
                  </ThemedView>
                </Pressable>
              );
            })}
          </View>
          <ThemedView style={styles.noteInputRow}>
            <ThemedView type="backgroundElement" style={styles.noteInputBox}>
              <TextInput
                value={note}
                onChangeText={setNote}
                placeholder={selectedPreset.placeholder}
                placeholderTextColor={theme.textSecondary}
                style={[styles.noteInput, { color: theme.text }]}
                multiline
              />
            </ThemedView>
            {selectedPreset.requiresWeight && (
              <ThemedView type="backgroundElement" style={styles.weightInputBox}>
                <TextInput
                  value={weightGrams}
                  onChangeText={setWeightGrams}
                  placeholder="Weight (g)"
                  placeholderTextColor={theme.textSecondary}
                  keyboardType="number-pad"
                  style={[styles.weightInput, { color: theme.text }]}
                />
              </ThemedView>
            )}
            {selectedPreset.id === 'symptom' && (
              <View style={styles.symptomInputs}>
                <View style={styles.symptomSeverityRow}>
                  {SYMPTOM_SEVERITIES.map((severity) => {
                    const selected = symptomSeverity === severity.value;
                    return (
                      <Pressable key={severity.value} onPress={() => setSymptomSeverity(severity.value)}>
                        <ThemedView
                          type="backgroundElement"
                          style={[styles.logPresetChip, selected && { backgroundColor: theme.accent }]}>
                          <ThemedText type="small" style={selected ? { color: theme.onAccent } : undefined}>
                            {severity.label}
                          </ThemedText>
                        </ThemedView>
                      </Pressable>
                    );
                  })}
                </View>
                <ThemedView type="backgroundElement" style={styles.contextInputBox}>
                  <TextInput
                    value={symptomContext}
                    onChangeText={setSymptomContext}
                    placeholder="Context (after meal, after handling, during shed...)"
                    placeholderTextColor={theme.textSecondary}
                    style={[styles.contextInput, { color: theme.text }]}
                  />
                </ThemedView>
                <View style={styles.symptomPhotoRow}>
                  <Pressable onPress={handlePickLogPhoto}>
                    <ThemedView type="backgroundSelected" style={styles.photoActionButton}>
                      <ThemedText type="small">{logPhotoUri ? 'Change photo' : 'Add photo'}</ThemedText>
                    </ThemedView>
                  </Pressable>
                  {logPhotoUri && (
                    <Pressable onPress={() => setLogPhotoUri(null)} hitSlop={8}>
                      <ThemedText type="link">Remove photo</ThemedText>
                    </Pressable>
                  )}
                </View>
                {logPhotoUri && <Image source={{ uri: logPhotoUri }} style={styles.logPhotoPreview} />}
              </View>
            )}
            <Pressable onPress={handleAddNote} disabled={!note.trim() && !selectedPreset.requiresWeight && !logPhotoUri}>
              <ThemedView
                type={note.trim() || selectedPreset.requiresWeight || logPhotoUri ? 'backgroundSelected' : 'background'}
                style={styles.addNoteButton}>
                <ThemedText type="small">Add</ThemedText>
              </ThemedView>
            </Pressable>
          </ThemedView>
          {logError && (
            <ThemedText type="small" style={{ color: theme.danger }}>
              {logError}
            </ThemedText>
          )}

          {weightChartPoints.length > 0 && <PetWeightChart points={weightChartPoints} />}

          {filteredLog.length === 0 && (
            <ThemedText type="small" themeColor="textSecondary">
              No timeline entries match that filter yet.
            </ThemedText>
          )}
          {filteredLog.map((entry) => (
            <ThemedView key={entry.id} type="backgroundElement" style={styles.logRow}>
              <View style={styles.logHeaderRow}>
                <View style={styles.logTitleRow}>
                  <ThemedText type="smallBold">
                    {getLogIcon(entry.entryType)} {formatActivityTitle(entry)}
                  </ThemedText>
                  {entry.weightGrams != null && (
                    <ThemedView type="backgroundSelected" style={styles.weightBadge}>
                      <ThemedText type="small">{entry.weightGrams} g</ThemedText>
                    </ThemedView>
                  )}
                </View>
                <Pressable onPress={() => handleDeleteLog(entry.id)} hitSlop={8}>
                  <ThemedText type="small" themeColor="textSecondary">
                    ✕
                  </ThemedText>
                </Pressable>
              </View>
              <ThemedText type="small" themeColor="textSecondary">
                {new Date(entry.timestamp).toLocaleString()}
              </ThemedText>
              {entry.actorName ? (
                <ThemedText type="small" themeColor="textSecondary">
                  Logged by {entry.actorName}
                </ThemedText>
              ) : null}
              {(entry.symptomSeverity || entry.symptomContext) && (
                <View style={styles.logMetaRow}>
                  {entry.symptomSeverity && (
                    <ThemedView type="backgroundSelected" style={styles.logBadge}>
                      <ThemedText type="small">{entry.symptomSeverity}</ThemedText>
                    </ThemedView>
                  )}
                  {entry.symptomContext && (
                    <ThemedView type="backgroundSelected" style={styles.logBadge}>
                      <ThemedText type="small">{entry.symptomContext}</ThemedText>
                    </ThemedView>
                  )}
                </View>
              )}
              {entry.photoUri && <Image source={{ uri: entry.photoUri }} style={styles.timelinePhoto} />}
              <ThemedText type="small">{entry.note}</ThemedText>
            </ThemedView>
          ))}

          <ThemedView style={styles.dangerZone}>
            {!confirmingDelete ? (
              <Pressable onPress={() => setConfirmingDelete(true)}>
                <ThemedText type="small" themeColor="textSecondary">
                  Delete pet…
                </ThemedText>
              </Pressable>
            ) : (
              <ThemedView type="backgroundElement" style={styles.confirmDeleteBox}>
                <ThemedText type="small">
                  Delete {pet.nickname} and all of their care tasks and log entries?
                </ThemedText>
                <View style={styles.confirmDeleteActions}>
                  <Pressable onPress={() => setConfirmingDelete(false)} hitSlop={8}>
                    <ThemedText type="link">Cancel</ThemedText>
                  </Pressable>
                  <Pressable onPress={handleDelete} hitSlop={8}>
                    <ThemedText type="linkPrimary">Delete</ThemedText>
                  </Pressable>
                </View>
              </ThemedView>
            )}
          </ThemedView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scrollContent: {
    paddingTop: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.five,
    gap: Spacing.two,
  },
  heroCard: {
    gap: Spacing.two,
  },
  caregiverBar: {
    borderRadius: Radius.md,
    padding: Spacing.two,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: Spacing.two,
  },
  caregiverText: {
    flex: 1,
    gap: 2,
  },
  dashboardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  dashboardCard: {
    width: '48%',
    borderRadius: Radius.md,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  dashboardValue: {
    fontSize: 24,
    lineHeight: 28,
  },
  profileRow: {
    flexDirection: 'row',
    gap: Spacing.three,
    alignItems: 'center',
  },
  photo: {
    width: 84,
    height: 84,
    borderRadius: 42,
  },
  photoPlaceholder: {
    width: 84,
    height: 84,
    borderRadius: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    flex: 1,
    gap: 2,
  },
  nickname: {
    fontSize: 26,
    lineHeight: 32,
  },
  quickActionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  quickActionButton: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  sectionTitle: {
    marginTop: Spacing.three,
    marginBottom: Spacing.one,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nextUpCard: {
    borderRadius: Radius.lg,
    padding: Spacing.three,
    gap: 2,
    marginTop: Spacing.two,
  },
  snapshotCard: {
    gap: Spacing.one,
  },
  oneTapRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    marginTop: Spacing.one,
  },
  oneTapButton: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  addTaskBox: {
    borderRadius: Radius.md,
    padding: Spacing.two,
    gap: Spacing.two,
    marginBottom: Spacing.two,
  },
  addTaskRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    alignItems: 'center',
  },
  addTaskInputBox: {
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.three,
  },
  addTaskIntervalBox: {
    flex: 1,
  },
  addTaskInput: {
    height: 40,
    fontSize: 14,
  },
  addTaskSaveButton: {
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: Radius.md,
    padding: Spacing.two,
    marginBottom: Spacing.one,
  },
  taskInfo: {
    gap: 2,
  },
  taskLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.one,
  },
  customBadge: {
    borderRadius: 999,
    paddingHorizontal: Spacing.one,
  },
  taskActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  markDoneButton: {
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
  noteInputRow: {
    flexDirection: 'column',
    gap: Spacing.two,
  },
  timelineSummaryCard: {
    borderRadius: Radius.md,
    padding: Spacing.two,
    marginBottom: Spacing.one,
  },
  logPresetRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
    marginBottom: Spacing.one,
  },
  logPresetChip: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.one,
  },
  noteInputBox: {
    flex: 1,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  noteInput: {
    fontSize: 14,
    minHeight: 72,
    textAlignVertical: 'top',
  },
  weightInputBox: {
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.three,
  },
  weightInput: {
    height: 40,
    fontSize: 14,
  },
  symptomInputs: {
    gap: Spacing.two,
  },
  symptomSeverityRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  contextInputBox: {
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.three,
  },
  contextInput: {
    height: 40,
    fontSize: 14,
  },
  symptomPhotoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  photoActionButton: {
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  logPhotoPreview: {
    width: '100%',
    height: 180,
    borderRadius: Radius.md,
  },
  addNoteButton: {
    alignSelf: 'flex-end',
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  logRow: {
    borderRadius: Radius.md,
    padding: Spacing.two,
    gap: Spacing.one,
    marginBottom: Spacing.one,
  },
  logHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: Spacing.two,
  },
  logTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: Spacing.one,
    flex: 1,
  },
  weightBadge: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
  },
  logMetaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.one,
  },
  logBadge: {
    borderRadius: Radius.pill,
    paddingHorizontal: Spacing.two,
    paddingVertical: 2,
  },
  timelinePhoto: {
    width: '100%',
    height: 160,
    borderRadius: Radius.md,
  },
  dangerZone: {
    marginTop: Spacing.four,
    alignItems: 'flex-start',
  },
  confirmDeleteBox: {
    borderRadius: Spacing.two,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  confirmDeleteActions: {
    flexDirection: 'row',
    gap: Spacing.three,
  },
});
