import { asc, eq } from 'drizzle-orm';

import { requireDb } from '../client';
import { generateLocalId } from '../id';
import { medicationPlans } from '../schema';
import type { MedicationPlan, NewMedicationPlan } from '../types';

export type CreateMedicationPlanInput = Omit<NewMedicationPlan, 'id' | 'createdAt' | 'lastGivenAt'>;

export async function createMedicationPlan(input: CreateMedicationPlanInput): Promise<MedicationPlan> {
  const row: NewMedicationPlan = {
    ...input,
    id: generateLocalId(),
    createdAt: new Date().toISOString(),
    lastGivenAt: null,
  };
  await requireDb().insert(medicationPlans).values(row);
  return row as MedicationPlan;
}

export async function listMedicationPlansForPet(petId: string): Promise<MedicationPlan[]> {
  return requireDb().select().from(medicationPlans).where(eq(medicationPlans.petId, petId)).orderBy(asc(medicationPlans.createdAt));
}

export async function updateMedicationPlan(
  id: string,
  patch: Partial<Omit<NewMedicationPlan, 'id' | 'petId' | 'createdAt'>>
): Promise<void> {
  await requireDb().update(medicationPlans).set(patch).where(eq(medicationPlans.id, id));
}

export async function deleteMedicationPlan(id: string): Promise<void> {
  await requireDb().delete(medicationPlans).where(eq(medicationPlans.id, id));
}

export async function deleteMedicationPlanByTaskId(taskId: string): Promise<void> {
  await requireDb().delete(medicationPlans).where(eq(medicationPlans.taskId, taskId));
}
