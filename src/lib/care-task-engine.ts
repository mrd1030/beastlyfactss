import type { CareInfo } from '@/content-client/types';
import { completeCareTask, createCareTask, deleteAutoCareTasksForPet } from '@/db/helpers';
import type { CareTask, Pet } from '@/db/types';

import { resolveCareScheduleDefaults } from './care-schedule-defaults';
import { addDays, localDateString } from './date';

export type CareTaskType = 'feeding' | 'cleaning' | 'tempCheck' | 'humidityCheck';

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
