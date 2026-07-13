import { requireDb } from '../client';
import { careTasks, foodInventoryItems, husbandryLogEntries, medicationPlans, petRecords, pets } from '../schema';
import type {
  CareTask,
  FoodInventoryItem,
  HusbandryLogEntry,
  MedicationPlan,
  NewCareTask,
  NewFoodInventoryItem,
  NewHusbandryLogEntry,
  NewMedicationPlan,
  NewPet,
  NewPetRecord,
  Pet,
  PetRecord,
} from '../types';
import { listCareTasksForPet } from './care-tasks';
import { listFoodInventoryItemsForPet } from './food-inventory';
import { listHusbandryLogForPet } from './husbandry-log';
import { listMedicationPlansForPet } from './medication-plans';
import { listPetRecordsForPet } from './pet-records';
import { listPets } from './pets';

export interface HouseholdDataSnapshot {
  pets: Pet[];
  careTasks: CareTask[];
  medicationPlans: MedicationPlan[];
  foodInventoryItems: FoodInventoryItem[];
  petRecords: PetRecord[];
  husbandryLogEntries: HusbandryLogEntry[];
}

/**
 * Reads every pet and its child rows (tasks, meds, food, records, log) into
 * one plain snapshot for uploading to Supabase. Walks pets individually
 * instead of a bare `select * from <table>` because every child table only
 * exposes per-pet list helpers today (see care-tasks.ts etc.) — there's no
 * cross-pet "list all" query yet, and a household is never large enough (a
 * handful of pets) for that to matter.
 */
export async function buildHouseholdDataSnapshot(): Promise<HouseholdDataSnapshot> {
  const allPets = await listPets();

  const perPet = await Promise.all(
    allPets.map(async (pet) => {
      const [careTasksForPet, medicationPlansForPet, foodInventoryForPet, petRecordsForPet, husbandryLogForPet] =
        await Promise.all([
          listCareTasksForPet(pet.id),
          listMedicationPlansForPet(pet.id),
          listFoodInventoryItemsForPet(pet.id),
          listPetRecordsForPet(pet.id),
          listHusbandryLogForPet(pet.id),
        ]);
      return {
        careTasks: careTasksForPet,
        medicationPlans: medicationPlansForPet,
        foodInventoryItems: foodInventoryForPet,
        petRecords: petRecordsForPet,
        husbandryLogEntries: husbandryLogForPet,
      };
    })
  );

  return {
    pets: allPets,
    careTasks: perPet.flatMap((p) => p.careTasks),
    medicationPlans: perPet.flatMap((p) => p.medicationPlans),
    foodInventoryItems: perPet.flatMap((p) => p.foodInventoryItems),
    petRecords: perPet.flatMap((p) => p.petRecords),
    husbandryLogEntries: perPet.flatMap((p) => p.husbandryLogEntries),
  };
}

/**
 * Replaces every household-scoped table's contents with `snapshot`, preserving
 * the incoming ids exactly (unlike the create* helpers, which always mint a
 * fresh generateLocalId()) so cross-table references — careTasks.petId,
 * medicationPlans.taskId, etc — still point at the right rows after a pull
 * from another device. Deliberately does NOT touch favorites,
 * discoveredSpecies, dailyFactLog, streakState, or cachedEntries: those are
 * personal reading/collection history for this device, not shared household
 * care data (see resetAllLocalData for the full-wipe equivalent).
 *
 * Insert order matters — pets before its children — because every child
 * table has an `onDelete: 'cascade'` FK on pets.id.
 */
export async function replaceHouseholdDataSnapshot(snapshot: HouseholdDataSnapshot): Promise<void> {
  const db = requireDb();

  await db.delete(medicationPlans);
  await db.delete(foodInventoryItems);
  await db.delete(petRecords);
  await db.delete(husbandryLogEntries);
  await db.delete(careTasks);
  await db.delete(pets);

  if (snapshot.pets.length > 0) {
    await db.insert(pets).values(snapshot.pets as NewPet[]);
  }
  if (snapshot.careTasks.length > 0) {
    await db.insert(careTasks).values(snapshot.careTasks as NewCareTask[]);
  }
  if (snapshot.medicationPlans.length > 0) {
    await db.insert(medicationPlans).values(snapshot.medicationPlans as NewMedicationPlan[]);
  }
  if (snapshot.foodInventoryItems.length > 0) {
    await db.insert(foodInventoryItems).values(snapshot.foodInventoryItems as NewFoodInventoryItem[]);
  }
  if (snapshot.petRecords.length > 0) {
    await db.insert(petRecords).values(snapshot.petRecords as NewPetRecord[]);
  }
  if (snapshot.husbandryLogEntries.length > 0) {
    await db.insert(husbandryLogEntries).values(snapshot.husbandryLogEntries as NewHusbandryLogEntry[]);
  }
}
