import { desc, eq } from 'drizzle-orm';

import { requireDb } from '../client';
import { generateLocalId } from '../id';
import { petRecords } from '../schema';
import type { NewPetRecord, PetRecord } from '../types';

export type CreatePetRecordInput = Omit<NewPetRecord, 'id' | 'createdAt'>;

export async function createPetRecord(input: CreatePetRecordInput): Promise<PetRecord> {
  const row: NewPetRecord = {
    ...input,
    id: generateLocalId(),
    createdAt: new Date().toISOString(),
  };
  await requireDb().insert(petRecords).values(row);
  return row as PetRecord;
}

export async function listPetRecordsForPet(petId: string): Promise<PetRecord[]> {
  return requireDb().select().from(petRecords).where(eq(petRecords.petId, petId)).orderBy(desc(petRecords.createdAt));
}

export async function deletePetRecord(id: string): Promise<void> {
  await requireDb().delete(petRecords).where(eq(petRecords.id, id));
}
