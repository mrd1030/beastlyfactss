import AsyncStorage from '@react-native-async-storage/async-storage';

export interface HouseholdConnectionState {
  householdId: string;
  householdName: string;
  inviteCode: string;
  connectedAt: string;
  lastSyncedAt: string | null;
  lastRemoteUpdatedAt: string | null;
  dirtyAt: string | null;
}

const STORAGE_KEY = 'beastlyfacts.household-sync.v1';

export async function getHouseholdConnection(): Promise<HouseholdConnectionState | null> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw) as HouseholdConnectionState;
  } catch {
    return null;
  }
}

export async function saveHouseholdConnection(
  patch: HouseholdConnectionState | Partial<HouseholdConnectionState> | null
): Promise<HouseholdConnectionState | null> {
  if (!patch) {
    await AsyncStorage.removeItem(STORAGE_KEY);
    return null;
  }

  const current = await getHouseholdConnection();
  const next = (current ? { ...current, ...patch } : patch) as HouseholdConnectionState;
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

export async function clearHouseholdConnection(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEY);
}

export async function markHouseholdSyncDirty(timestamp: string = new Date().toISOString()): Promise<void> {
  const current = await getHouseholdConnection();
  if (!current) {
    return;
  }

  await saveHouseholdConnection({ dirtyAt: timestamp });
}

export async function markHouseholdSyncClean(
  syncedAt: string,
  remoteUpdatedAt: string | null = syncedAt
): Promise<HouseholdConnectionState | null> {
  const current = await getHouseholdConnection();
  if (!current) {
    return null;
  }

  return saveHouseholdConnection({
    lastSyncedAt: syncedAt,
    lastRemoteUpdatedAt: remoteUpdatedAt,
    dirtyAt: null,
  });
}
