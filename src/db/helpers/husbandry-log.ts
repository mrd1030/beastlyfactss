import { desc, eq } from 'drizzle-orm';

import { requireDb } from '../client';
import { generateLocalId } from '../id';
import { husbandryLogEntries } from '../schema';
import type { HusbandryLogEntry, NewHusbandryLogEntry } from '../types';

export type CreateHusbandryLogInput = Omit<NewHusbandryLogEntry, 'id'>;

export async function addHusbandryLogEntry(input: CreateHusbandryLogInput): Promise<HusbandryLogEntry> {
  const row: NewHusbandryLogEntry = { ...input, id: generateLocalId() };
  await requireDb().insert(husbandryLogEntries).values(row);
  return row as HusbandryLogEntry;
}

export async function listHusbandryLogForPet(petId: string): Promise<HusbandryLogEntry[]> {
  return requireDb()
    .select()
    .from(husbandryLogEntries)
    .where(eq(husbandryLogEntries.petId, petId))
    .orderBy(desc(husbandryLogEntries.timestamp));
}

export async function deleteHusbandryLogEntry(id: string): Promise<void> {
  await requireDb().delete(husbandryLogEntries).where(eq(husbandryLogEntries.id, id));
}
