import { and, asc, eq, lte } from 'drizzle-orm';

import { requireDb } from '../client';
import { generateLocalId } from '../id';
import { careTasks } from '../schema';
import type { CareTask, NewCareTask } from '../types';

export type CreateCareTaskInput = Omit<NewCareTask, 'id'>;

export async function createCareTask(input: CreateCareTaskInput): Promise<CareTask> {
  const row: NewCareTask = { ...input, id: generateLocalId() };
  await requireDb().insert(careTasks).values(row);
  return row as CareTask;
}

export async function getCareTask(id: string): Promise<CareTask | undefined> {
  return requireDb().query.careTasks.findFirst({ where: eq(careTasks.id, id) });
}

export async function listCareTasksForPet(petId: string): Promise<CareTask[]> {
  return requireDb()
    .select()
    .from(careTasks)
    .where(eq(careTasks.petId, petId))
    .orderBy(asc(careTasks.nextDueDate));
}

/** Tasks due on or before `onOrBeforeDate` (an ISO date string), across all pets. */
export async function listDueCareTasks(onOrBeforeDate: string): Promise<CareTask[]> {
  return requireDb()
    .select()
    .from(careTasks)
    .where(lte(careTasks.nextDueDate, onOrBeforeDate))
    .orderBy(asc(careTasks.nextDueDate));
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
    .set({ lastCompletedDate: completedDate, nextDueDate })
    .where(eq(careTasks.id, id));
}

export async function deleteCareTask(id: string): Promise<void> {
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
