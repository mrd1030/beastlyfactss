import { asc, eq } from 'drizzle-orm';

import { requireDb } from '../client';
import { generateLocalId } from '../id';
import { foodInventoryItems } from '../schema';
import type { FoodInventoryItem, NewFoodInventoryItem } from '../types';

export type CreateFoodInventoryItemInput = Omit<NewFoodInventoryItem, 'id' | 'updatedAt' | 'lastUsedAt'>;

export async function createFoodInventoryItem(input: CreateFoodInventoryItemInput): Promise<FoodInventoryItem> {
  const row: NewFoodInventoryItem = {
    ...input,
    id: generateLocalId(),
    updatedAt: new Date().toISOString(),
    lastUsedAt: null,
  };
  await requireDb().insert(foodInventoryItems).values(row);
  return row as FoodInventoryItem;
}

export async function listFoodInventoryItemsForPet(petId: string): Promise<FoodInventoryItem[]> {
  return requireDb().select().from(foodInventoryItems).where(eq(foodInventoryItems.petId, petId)).orderBy(asc(foodInventoryItems.name));
}

export async function updateFoodInventoryItem(
  id: string,
  patch: Partial<Omit<NewFoodInventoryItem, 'id' | 'petId'>>
): Promise<void> {
  await requireDb()
    .update(foodInventoryItems)
    .set({ ...patch, updatedAt: new Date().toISOString() })
    .where(eq(foodInventoryItems.id, id));
}

export async function adjustFoodInventoryItem(id: string, delta: number): Promise<FoodInventoryItem | null> {
  const existing = await requireDb().query.foodInventoryItems.findFirst({ where: eq(foodInventoryItems.id, id) });
  if (!existing) {
    return null;
  }

  const nextQuantity = Math.max(0, existing.quantity + delta);
  const nextLastUsedAt = delta < 0 ? new Date().toISOString() : existing.lastUsedAt;

  await requireDb()
    .update(foodInventoryItems)
    .set({
      quantity: nextQuantity,
      lastUsedAt: nextLastUsedAt,
      updatedAt: new Date().toISOString(),
    })
    .where(eq(foodInventoryItems.id, id));

  return {
    ...existing,
    quantity: nextQuantity,
    lastUsedAt: nextLastUsedAt,
    updatedAt: new Date().toISOString(),
  } satisfies FoodInventoryItem;
}

export async function deleteFoodInventoryItem(id: string): Promise<void> {
  await requireDb().delete(foodInventoryItems).where(eq(foodInventoryItems.id, id));
}
