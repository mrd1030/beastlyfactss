import { isDatabaseAvailable } from '@/db/client';
import { buildHouseholdDataSnapshot, replaceHouseholdDataSnapshot, type HouseholdDataSnapshot } from '@/db/helpers';

import { type CareTeamState, getCareTeam, setCareTeamState } from './care-team-store';
import {
  clearHouseholdConnection,
  getHouseholdConnection,
  markHouseholdSyncClean,
  saveHouseholdConnection,
} from './household-sync-store';
import { isSupabaseConfigured, supabase } from './supabase';

export interface HouseholdSnapshot extends HouseholdDataSnapshot {
  version: 1;
  exportedAt: string;
  careTeam: CareTeamState;
}

type HouseholdSyncResult =
  | { status: 'not-configured' | 'not-connected' | 'database-unavailable' | 'idle' }
  | { status: 'pulled' | 'pushed' | 'joined' | 'created'; syncedAt: string; householdName: string }
  | { status: 'conflict'; remoteUpdatedAt: string; householdName: string };

interface HouseholdRpcRow {
  household_id: string;
  household_name: string;
  invite_code: string;
  updated_at: string;
  snapshot: HouseholdSnapshot;
}

export function isSupabaseReady(): boolean {
  return isSupabaseConfigured;
}

async function buildFullSnapshot(): Promise<HouseholdSnapshot> {
  const [careTeam, data] = await Promise.all([getCareTeam(), buildHouseholdDataSnapshot()]);
  return { version: 1, exportedAt: new Date().toISOString(), careTeam, ...data };
}

/** Overwrites this device's household data (pets/tasks/meds/food/records/log
 * and the care team) with a remote snapshot. Used by both join and pull —
 * joining an existing household is expected to adopt its data wholesale,
 * the same way pulling the latest sync does. */
async function applyRemoteSnapshot(snapshot: HouseholdSnapshot): Promise<void> {
  await replaceHouseholdDataSnapshot(snapshot);
  await setCareTeamState(snapshot.careTeam);
}

function guardResult(): HouseholdSyncResult | null {
  if (!isSupabaseConfigured || !supabase) {
    return { status: 'not-configured' };
  }
  if (!isDatabaseAvailable) {
    return { status: 'database-unavailable' };
  }
  return null;
}

export async function createRemoteHousehold(householdName: string): Promise<HouseholdSyncResult> {
  const guard = guardResult();
  if (guard) return guard;

  const trimmedName = householdName.trim();
  if (!trimmedName) {
    throw new Error('Enter a household name first.');
  }

  const snapshot = await buildFullSnapshot();
  const { data, error } = await supabase!.rpc('create_household', {
    p_household_name: trimmedName,
    p_snapshot: snapshot,
  });
  if (error) throw new Error(error.message);
  const row = (data as HouseholdRpcRow[] | null)?.[0];
  if (!row) throw new Error('Could not create the household.');

  const now = new Date().toISOString();
  await saveHouseholdConnection({
    householdId: row.household_id,
    householdName: row.household_name,
    inviteCode: row.invite_code,
    connectedAt: now,
    lastSyncedAt: now,
    lastRemoteUpdatedAt: row.updated_at,
    dirtyAt: null,
  });

  return { status: 'created', syncedAt: now, householdName: row.household_name };
}

export async function joinRemoteHousehold(inviteCode: string): Promise<HouseholdSyncResult> {
  const guard = guardResult();
  if (guard) return guard;

  const trimmedCode = inviteCode.trim().toUpperCase();
  if (!trimmedCode) {
    throw new Error('Enter an invite code first.');
  }

  const { data, error } = await supabase!.rpc('get_household_snapshot', { p_invite_code: trimmedCode });
  if (error) throw new Error(error.message);
  const row = (data as HouseholdRpcRow[] | null)?.[0];
  if (!row) throw new Error('No household was found for that invite code.');

  await applyRemoteSnapshot(row.snapshot);

  const now = new Date().toISOString();
  await saveHouseholdConnection({
    householdId: row.household_id,
    householdName: row.household_name,
    inviteCode: row.invite_code,
    connectedAt: now,
    lastSyncedAt: now,
    lastRemoteUpdatedAt: row.updated_at,
    dirtyAt: null,
  });

  return { status: 'joined', syncedAt: now, householdName: row.household_name };
}

export async function pullConnectedHousehold(): Promise<HouseholdSyncResult> {
  const guard = guardResult();
  if (guard) return guard;

  const connection = await getHouseholdConnection();
  if (!connection) return { status: 'not-connected' };

  const { data, error } = await supabase!.rpc('get_household_snapshot', { p_invite_code: connection.inviteCode });
  if (error) throw new Error(error.message);
  const row = (data as HouseholdRpcRow[] | null)?.[0];
  if (!row) throw new Error('This household could not be found. It may have been disconnected elsewhere.');

  await applyRemoteSnapshot(row.snapshot);

  const now = new Date().toISOString();
  await markHouseholdSyncClean(now, row.updated_at);

  return { status: 'pulled', syncedAt: now, householdName: row.household_name };
}

export async function pushConnectedHousehold(): Promise<HouseholdSyncResult> {
  const guard = guardResult();
  if (guard) return guard;

  const connection = await getHouseholdConnection();
  if (!connection) return { status: 'not-connected' };

  const snapshot = await buildFullSnapshot();
  const { data, error } = await supabase!.rpc('upsert_household_snapshot', {
    p_invite_code: connection.inviteCode,
    p_household_name: connection.householdName,
    p_snapshot: snapshot,
  });
  if (error) throw new Error(error.message);
  const row = (data as HouseholdRpcRow[] | null)?.[0];
  if (!row) throw new Error('Could not push this device’s data.');

  const now = new Date().toISOString();
  await markHouseholdSyncClean(now, row.updated_at);

  return { status: 'pushed', syncedAt: now, householdName: row.household_name };
}

/** Runs on every app launch (see _layout.tsx) as well as from the "Sync now"
 * button. Compares the remote row's updated_at against what this device saw
 * last time it synced to decide the direction, rather than always pulling or
 * always pushing:
 *  - remote unchanged + no local edits since last sync -> idle
 *  - remote unchanged + local edits pending -> push
 *  - remote changed + no local edits pending -> pull
 *  - remote changed + local edits pending -> conflict (ask the user, don't
 *    silently pick a winner) */
export async function syncConnectedHousehold(): Promise<HouseholdSyncResult> {
  const guard = guardResult();
  if (guard) return guard;

  const connection = await getHouseholdConnection();
  if (!connection) return { status: 'not-connected' };

  const { data, error } = await supabase!.rpc('get_household_snapshot', { p_invite_code: connection.inviteCode });
  if (error) throw new Error(error.message);
  const row = (data as HouseholdRpcRow[] | null)?.[0];
  if (!row) throw new Error('This household could not be found. It may have been disconnected elsewhere.');

  const remoteChanged = row.updated_at !== connection.lastRemoteUpdatedAt;
  const hasLocalEdits = Boolean(connection.dirtyAt);

  if (remoteChanged && hasLocalEdits) {
    return { status: 'conflict', remoteUpdatedAt: row.updated_at, householdName: row.household_name };
  }

  if (remoteChanged) {
    await applyRemoteSnapshot(row.snapshot);
    const now = new Date().toISOString();
    await markHouseholdSyncClean(now, row.updated_at);
    return { status: 'pulled', syncedAt: now, householdName: row.household_name };
  }

  if (hasLocalEdits) {
    return pushConnectedHousehold();
  }

  return { status: 'idle' };
}

export async function disconnectHousehold(): Promise<void> {
  await clearHouseholdConnection();
}
