import { desc, eq } from 'drizzle-orm';

import { requireDb } from '../client';
import { generateLocalId } from '../id';
import { pets } from '../schema';
import type { NewPet, Pet } from '../types';

export type CreatePetInput = Omit<NewPet, 'id' | 'createdAt'>;

export async function createPet(input: CreatePetInput): Promise<Pet> {
  const row: NewPet = { ...input, id: generateLocalId(), createdAt: new Date().toISOString() };
  await requireDb().insert(pets).values(row);
  return row as Pet;
}

export async function getPet(id: string): Promise<Pet | null> {
  return (await requireDb().query.pets.findFirst({ where: eq(pets.id, id) })) ?? null;
}

export async function listPets(): Promise<Pet[]> {
  return requireDb().select().from(pets).orderBy(desc(pets.createdAt));
}

export async function updatePet(id: string, patch: Partial<CreatePetInput>): Promise<void> {
  await requireDb().update(pets).set(patch).where(eq(pets.id, id));
}

export async function deletePet(id: string): Promise<void> {
  await requireDb().delete(pets).where(eq(pets.id, id));
}
