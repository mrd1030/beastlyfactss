import type { CareInfo } from '@/content-client/types';
import { addHusbandryLogEntry, completeCareTask, createCareTask, deleteAutoCareTasksForPet, snoozeCareTask } from '@/db/helpers';
import type { CareTask, Pet } from '@/db/types';

import { resolveCareScheduleDefaults } from './care-schedule-defaults';
import { addDays, localDateString } from './date';

export type CareTaskType = 'feeding' | 'cleaning' | 'tempCheck' | 'humidityCheck';
export type QuickCareActionId = 'feeding' | 'water' | 'medication' | 'cleaning' | 'environment';

export const QUICK_CARE_ACTIONS: {
  id: QuickCareActionId;
  label: string;
  title: string;
  note: string;
  entryType:
    | 'feeding'
    | 'water'
    | 'medication'
    | 'cleaning'
    | 'check';
  taskTypes?: string[];
}[] = [
  {
    id: 'feeding',
    label: 'Fed',
    title: 'Feeding confirmed',
    note: 'Confirmed a feeding.',
    entryType: 'feeding',
    taskTypes: ['feeding'],
  },
  {
    id: 'water',
    label: 'Water',
    title: 'Water refreshed',
    note: 'Refreshed or checked water.',
    entryType: 'water',
  },
  {
    id: 'medication',
    label: 'Meds',
    title: 'Medication given',
    note: 'Confirmed medication was given.',
    entryType: 'medication',
  },
  {
    id: 'cleaning',
    label: 'Cleaned',
    title: 'Cleaning completed',
    note: 'Completed a cleaning routine.',
    entryType: 'cleaning',
    taskTypes: ['cleaning'],
  },
  {
    id: 'environment',
    label: 'Env check',
    title: 'Environment checked',
    note: 'Checked the enclosure environment.',
    entryType: 'check',
    taskTypes: ['tempCheck', 'humidityCheck'],
  },
];

interface CareTaskKindDef {
  taskType: CareTaskType;
  label: string;
  intervalDays: number | null;
}

function kindsFromDefaults(categoryTitle?: string | null, careInfo?: CareInfo | null): CareTaskKindDef[] {
  const defaults = resolveCareScheduleDefaults(careInfo, categoryTitle);
  return [
    { taskType: 'feeding', label: 'Feeding', intervalDays: defaults.feedingIntervalDays },
    { taskType: 'cleaning', label: 'Enclosure cleaning', intervalDays: defaults.cleaningIntervalDays },
    { taskType: 'tempCheck', label: 'Temperature check', intervalDays: defaults.tempCheckIntervalDays },
    { taskType: 'humidityCheck', label: 'Humidity check', intervalDays: defaults.humidityCheckIntervalDays },
  ];
}

/**
 * Generates and inserts this pet's CareTask rows, preferring the linked
 * species entry's real `careInfo` fields (see care-schedule-defaults.ts's
 * `resolveCareScheduleDefaults`) and falling back to the category-based
 * placeholder defaults per-field otherwise. Call once when a pet is
 * created. `categoryTitle`/`careInfo` should come from the linked species
 * entry, if the pet is linked to one — falls back to generic defaults
 * either way, so every pet gets a reminder set even if unlinked.
 *
 * Each task's first `nextDueDate` is `intervalDays` after the pet's
 * acquired date (or today, if no acquired date was given) — i.e. a task
 * isn't immediately "due" the moment a pet is added.
 */
export async function generateCareTasksForPet(
  pet: Pet,
  categoryTitle?: string | null,
  careInfo?: CareInfo | null
): Promise<void> {
  const startDate = pet.acquiredDate ?? localDateString();
  const kinds = kindsFromDefaults(categoryTitle, careInfo).filter(
    (kind): kind is CareTaskKindDef & { intervalDays: number } => kind.intervalDays != null
  );

  for (const kind of kinds) {
    await createCareTask({
      petId: pet.id,
      taskType: kind.taskType,
      intervalDays: kind.intervalDays,
      nextDueDate: addDays(startDate, kind.intervalDays),
      lastCompletedDate: null,
      label: kind.label,
      source: 'auto',
    });
  }
}

/**
 * Regenerates a pet's AUTO care tasks from scratch against (possibly new)
 * defaults — used when editing a pet changes its linked species (and
 * therefore which real `careInfo`/category defaults apply). This wipes
 * existing 'auto' tasks and their completion history for that pet (any
 * user-added 'custom' tasks are left untouched), so only call it when the
 * species link actually changed, not on every edit.
 */
export async function regenerateCareTasksForPet(
  pet: Pet,
  categoryTitle?: string | null,
  careInfo?: CareInfo | null
): Promise<void> {
  await deleteAutoCareTasksForPet(pet.id);
  await generateCareTasksForPet(pet, categoryTitle, careInfo);
}

/** Adds a single user-defined custom care task (e.g. "Vet checkup every 6
 * months"), independent of the species-derived auto tasks — survives
 * `regenerateCareTasksForPet` since it's tagged 'custom'. */
export async function addCustomCareTask(
  petId: string,
  label: string,
  intervalDays: number,
  startDate: string = localDateString()
): Promise<void> {
  await createCareTask({
    petId,
    taskType: 'custom',
    intervalDays,
    nextDueDate: addDays(startDate, intervalDays),
    lastCompletedDate: null,
    label,
    source: 'custom',
  });
}

/**
 * Marks a task done "today" and rolls its next-due date forward by its own
 * interval from today (not from the old due date) — so completing a task
 * late doesn't leave the next reminder immediately overdue again.
 */
export async function markCareTaskDone(task: CareTask): Promise<void> {
  const today = localDateString();
  const nextDue = addDays(today, task.intervalDays);
  await completeCareTask(task.id, today, nextDue);
}

export async function markCareTaskDoneAndLog(task: CareTask, actorName?: string | null): Promise<void> {
  await markCareTaskDone(task);
  await addHusbandryLogEntry({
    petId: task.petId,
    title: task.label ?? task.taskType,
    entryType: 'task',
    note: `Completed ${task.label ?? task.taskType}.`,
    timestamp: new Date().toISOString(),
    actorName: actorName ?? null,
    weightGrams: null,
    taskId: task.id,
    symptomSeverity: null,
    symptomContext: null,
    photoUri: null,
  });
}

export async function confirmQuickCareAction(
  petId: string,
  actionId: QuickCareActionId,
  dueTasks: CareTask[] = [],
  today: string = localDateString(),
  actorName?: string | null
): Promise<void> {
  const action = QUICK_CARE_ACTIONS.find((item) => item.id === actionId);
  if (!action) {
    throw new Error(`Unknown quick care action: ${actionId}`);
  }

  const matchingTasks = dueTasks.filter(
    (task) => task.petId === petId && task.nextDueDate <= today && action.taskTypes?.includes(task.taskType)
  );

  for (const task of matchingTasks) {
    await markCareTaskDone(task);
  }

  await addHusbandryLogEntry({
    petId,
    title: action.title,
    entryType: action.entryType,
    note: action.note,
    timestamp: new Date().toISOString(),
    actorName: actorName ?? null,
    weightGrams: null,
    taskId: matchingTasks[0]?.id ?? null,
    symptomSeverity: null,
    symptomContext: null,
    photoUri: null,
  });
}

export function getEffectiveTaskDueDate(task: Pick<CareTask, 'nextDueDate' | 'snoozedUntilDate'>): string {
  return task.snoozedUntilDate && task.snoozedUntilDate > task.nextDueDate ? task.snoozedUntilDate : task.nextDueDate;
}

export function isTaskDueSoon(task: Pick<CareTask, 'nextDueDate' | 'snoozedUntilDate'>, today: string = localDateString(), withinDays = 3): boolean {
  const due = getEffectiveTaskDueDate(task);
  return due > today && due <= addDays(today, withinDays);
}

export async function snoozeTaskByDays(task: CareTask, days = 1, today: string = localDateString()): Promise<void> {
  const baseDate = getEffectiveTaskDueDate(task) > today ? getEffectiveTaskDueDate(task) : today;
  await snoozeCareTask(task.id, addDays(baseDate, days));
}

/** Human-readable status for a task's due date relative to today, for the
 * pet detail screen's task list. */
export function describeDueStatus(nextDueDate: string, today: string = localDateString()): string {
  if (nextDueDate === today) return 'Due today';
  if (nextDueDate < today) return 'Overdue';
  const [y1, m1, d1] = today.split('-').map(Number);
  const [y2, m2, d2] = nextDueDate.split('-').map(Number);
  const days = Math.round(
    (new Date(y2, m2 - 1, d2).getTime() - new Date(y1, m1 - 1, d1).getTime()) / (1000 * 60 * 60 * 24)
  );
  return `Due in ${days} day${days === 1 ? '' : 's'}`;
}
