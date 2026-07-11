// Supabase is disabled — all cloud sync functions return 'not-configured'.
import {
  clearHouseholdConnection,
} from './household-sync-store';

export interface HouseholdSnapshot {
  version: 1;
  exportedAt: string;
  careTeam: unknown;
  pets: unknown[];
  careTasks: unknown[];
  medicationPlans: unknown[];
  foodInventoryItems: unknown[];
  petRecords: unknown[];
  husbandryLogEntries: unknown[];
}

type HouseholdSyncResult =
  | { status: 'not-configured' | 'not-connected' | 'database-unavailable' | 'idle' }
  | { status: 'pulled' | 'pushed' | 'joined' | 'created'; syncedAt: string; householdName: string }
  | { status: 'conflict'; remoteUpdatedAt: string; householdName: string };

export function isSupabaseReady(): boolean {
  return false;
}

export async function createRemoteHousehold(_householdName: string): Promise<HouseholdSyncResult> {
  return { status: 'not-configured' };
}

export async function joinRemoteHousehold(_inviteCode: string): Promise<HouseholdSyncResult> {
  return { status: 'not-configured' };
}

export async function pullConnectedHousehold(): Promise<HouseholdSyncResult> {
  return { status: 'not-configured' };
}

export async function pushConnectedHousehold(): Promise<HouseholdSyncResult> {
  return { status: 'not-configured' };
}

export async function syncConnectedHousehold(): Promise<HouseholdSyncResult> {
  return { status: 'not-configured' };
}

export async function disconnectHousehold(): Promise<void> {
  await clearHouseholdConnection();
}
