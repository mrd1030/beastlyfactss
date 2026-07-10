import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { fetchEntryDetail } from '@/content-client/queries';
import { getSpeciesById } from '@/content-client/species-catalog';
import { isDatabaseAvailable } from '@/db/client';
import {
  addHusbandryLogEntry,
  deleteCareTask,
  deletePet,
  getPet,
  listCareTasksForPet,
  listHusbandryLogForPet,
} from '@/db/helpers';
import type { CareTask } from '@/db/types';
import { useTheme } from '@/hooks/use-theme';
import { refreshAllPetsCareNotifications } from '@/lib/care-notifications';
import { addCustomCareTask, describeDueStatus, markCareTaskDone } from '@/lib/care-task-engine';
import { localDateString } from '@/lib/date';

/**
 * Pet detail screen — the "owned pet" half of My Pack. Shows the pet's
 * profile, its auto-generated care-task reminders (with a "mark done"
 * action that recomputes the next due date), and a freeform husbandry log.
 * Reachable from the pet cards at the top of the Pack tab.
 */
export default function PetDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const theme = useTheme();
  const queryClient = useQueryClient();
  const [note, setNote] = useState('');
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [addingTask, setAddingTask] = useState(false);
  const [taskLabel, setTaskLabel] = useState('');
  const [taskIntervalDays, setTaskIntervalDays] = useState('');
  const [taskError, setTaskError] = useState<string | null>(null);

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
  const sortedTasks = [...(careTasks ?? [])].sort((a, b) => (a.nextDueDate < b.nextDueDate ? -1 : 1));

  const handleMarkDone = async (task: CareTask) => {
    await markCareTaskDone(task);
    await queryClient.invalidateQueries({ queryKey: ['careTasks', id] });
    await refreshAllPetsCareNotifications().catch(() => {});
  };

  const handleDeleteTask = async (task: CareTask) => {
    await deleteCareTask(task.id);
    await queryClient.invalidateQueries({ queryKey: ['careTasks', id] });
    await refreshAllPetsCareNotifications().catch(() => {});
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
    await queryClient.invalidateQueries({ queryKey: ['careTasks', id] });
    await refreshAllPetsCareNotifications().catch(() => {});
    setTaskLabel('');
    setTaskIntervalDays('');
    setAddingTask(false);
  };

  const handleAddNote = async () => {
    const trimmed = note.trim();
    if (!trimmed || !id) return;
    await addHusbandryLogEntry({ petId: id, note: trimmed, timestamp: new Date().toISOString(), photoUri: null });
    setNote('');
    await queryClient.invalidateQueries({ queryKey: ['husbandryLog', id] });
  };

  const handleDelete = async () => {
    if (!id) return;
    await deletePet(id);
    await queryClient.invalidateQueries({ queryKey: ['pets'] });
    await refreshAllPetsCareNotifications().catch(() => {});
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

          {sortedTasks.length > 0 && (
            <ThemedView type="backgroundSelected" style={styles.nextUpCard}>
              <ThemedText type="small" themeColor="textSecondary">
                Next up
              </ThemedText>
              <ThemedText type="smallBold">{sortedTasks[0].label ?? sortedTasks[0].taskType}</ThemedText>
              <ThemedText
                type="small"
                style={{
                  color:
                    sortedTasks[0].nextDueDate < today
                      ? theme.danger
                      : sortedTasks[0].nextDueDate === today
                        ? theme.warning
                        : theme.textSecondary,
                }}>
                {describeDueStatus(sortedTasks[0].nextDueDate, today)}
              </ThemedText>
            </ThemedView>
          )}

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
                    {describeDueStatus(task.nextDueDate, today)}
                  </ThemedText>
                </View>
                <View style={styles.taskActions}>
                  <Pressable onPress={() => handleMarkDone(task)}>
                    <ThemedView type="backgroundSelected" style={styles.markDoneButton}>
                      <ThemedText type="small">Mark done</ThemedText>
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
            Husbandry log
          </ThemedText>
          <ThemedView style={styles.noteInputRow}>
            <ThemedView type="backgroundElement" style={styles.noteInputBox}>
              <TextInput
                value={note}
                onChangeText={setNote}
                placeholder="Add a note (shed, weigh-in, vet visit…)"
                placeholderTextColor={theme.textSecondary}
                style={[styles.noteInput, { color: theme.text }]}
                multiline
              />
            </ThemedView>
            <Pressable onPress={handleAddNote} disabled={!note.trim()}>
              <ThemedView type={note.trim() ? 'backgroundSelected' : 'background'} style={styles.addNoteButton}>
                <ThemedText type="small">Add</ThemedText>
              </ThemedView>
            </Pressable>
          </ThemedView>

          {(log ?? []).length === 0 && (
            <ThemedText type="small" themeColor="textSecondary">
              No log entries yet.
            </ThemedText>
          )}
          {(log ?? []).map((entry) => (
            <ThemedView key={entry.id} type="backgroundElement" style={styles.logRow}>
              <ThemedText type="small" themeColor="textSecondary">
                {new Date(entry.timestamp).toLocaleString()}
              </ThemedText>
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
  profileRow: {
    flexDirection: 'row',
    gap: Spacing.three,
    alignItems: 'center',
    marginBottom: Spacing.two,
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
    borderRadius: Spacing.three,
    padding: Spacing.three,
    gap: 2,
    marginTop: Spacing.two,
  },
  addTaskBox: {
    borderRadius: Spacing.two,
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
    borderRadius: Spacing.two,
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
    flexDirection: 'row',
    gap: Spacing.two,
    alignItems: 'flex-end',
  },
  noteInputBox: {
    flex: 1,
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  noteInput: {
    fontSize: 14,
    minHeight: 40,
  },
  addNoteButton: {
    borderRadius: Spacing.two,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  logRow: {
    borderRadius: Spacing.two,
    padding: Spacing.two,
    gap: 2,
    marginBottom: Spacing.one,
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
