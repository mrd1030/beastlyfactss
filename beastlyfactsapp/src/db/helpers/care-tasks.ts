import { and, asc, eq, lte } from 'drizzle-orm';

import { requireDb } from '../client';
import { generateLocalId } from '../id';
import { careTasks, medicationPlans } from '../schema';
import type { CareTask, NewCareTask } from '../types';

export type CreateCareTaskInput = Omit<NewCareTask, 'id'>;

function effectiveDueDate(task: CareTask): string {
  return task.snoozedUntilDate && task.snoozedUntilDate > task.nextDueDate ? task.snoozedUntilDate : task.nextDueDate;
}

function sortTasksByEffectiveDue(tasks: CareTask[]): CareTask[] {
  return [...tasks].sort((a, b) => {
    const aDue = effectiveDueDate(a);
    const bDue = effectiveDueDate(b);
    if (aDue === bDue) {
      return a.taskType.localeCompare(b.taskType);
    }
    return aDue < bDue ? -1 : 1;
  });
}

export async function createCareTask(input: CreateCareTaskInput): Promise<CareTask> {
  const row: NewCareTask = { ...input, id: generateLocalId() };
  await requireDb().insert(careTasks).values(row);
  return row as CareTask;
}

export async function getCareTask(id: string): Promise<CareTask | undefined> {
  return requireDb().query.careTasks.findFirst({ where: eq(careTasks.id, id) });
}

export async function listCareTasksForPet(petId: string): Promise<CareTask[]> {
  const tasks = await requireDb()
    .select()
    .from(careTasks)
    .where(eq(careTasks.petId, petId))
    .orderBy(asc(careTasks.nextDueDate));
  return sortTasksByEffectiveDue(tasks);
}

/** Tasks due on or before `onOrBeforeDate` (an ISO date string), across all pets. */
export async function listDueCareTasks(onOrBeforeDate: string): Promise<CareTask[]> {
  const tasks = await requireDb()
    .select()
    .from(careTasks)
    .where(lte(careTasks.nextDueDate, onOrBeforeDate))
    .orderBy(asc(careTasks.nextDueDate));
  return sortTasksByEffectiveDue(tasks.filter((task) => effectiveDueDate(task) <= onOrBeforeDate));
}

export async function listUpcomingCareTasks(startDate: string, onOrBeforeDate: string): Promise<CareTask[]> {
  const tasks = await requireDb().select().from(careTasks).orderBy(asc(careTasks.nextDueDate));
  return sortTasksByEffectiveDue(tasks.filter((task) => {
    const due = effectiveDueDate(task);
    return due >= startDate && due <= onOrBeforeDate;
  }));
}

export async function updateCareTask(
  id: string,
  patch: Partial<Omit<NewCareTask, 'id' | 'petId'>>
): Promise<void> {
  await requireDb().update(careTasks).set(patch).where(eq(careTasks.id, id));
}

/** Marks a task done today and rolls `nextDueDate` forward by its interval. */
export async function completeCareTask(id: string, completedDate: string, nextDueDate: string): Promise<void> {
  await requireDb()
    .update(careTasks)
    .set({ lastCompletedDate: completedDate, nextDueDate, snoozedUntilDate: null })
    .where(eq(careTasks.id, id));
}

export async function snoozeCareTask(id: string, snoozedUntilDate: string): Promise<void> {
  await requireDb().update(careTasks).set({ snoozedUntilDate }).where(eq(careTasks.id, id));
}

export async function deleteCareTask(id: string): Promise<void> {
  await requireDb().delete(medicationPlans).where(eq(medicationPlans.taskId, id));
  await requireDb().delete(careTasks).where(eq(careTasks.id, id));
}

export async function deleteCareTasksForPet(petId: string): Promise<void> {
  await requireDb().delete(careTasks).where(eq(careTasks.petId, petId));
}

/** Deletes only this pet's 'auto' tasks, leaving any 'custom' tasks (and
 * their completion history) intact — used when regenerating tasks after a
 * species-link change. */
export async function deleteAutoCareTasksForPet(petId: string): Promise<void> {
  await requireDb()
    .delete(careTasks)
    .where(and(eq(careTasks.petId, petId), eq(careTasks.source, 'auto')));
}
