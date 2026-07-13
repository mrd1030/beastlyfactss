// The Supabase client is live (see ./supabase.ts), but the actual sync
// functions below are still stubs - restoring a pulled snapshot needs new
// ID-preserving insert helpers that don't exist yet (today's createPet()
// etc. always mint a fresh local ID, which would break every pet/task/log
// relationship in someone else's data). Real push/pull logic is a separate,
// deliberate next step - see PROJECT memory / chat history for context.
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

// Deliberately NOT tied to isSupabaseConfigured yet: the client can be live
// while the sync functions below are still stubs (see file header). Settings
// hides its whole create/join form behind this flag, so flipping it true
// before real push/pull logic exists would show a form that does nothing.
// Flip this once createRemoteHousehold/joinRemoteHousehold/etc. are real.
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
