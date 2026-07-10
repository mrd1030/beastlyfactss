import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Local-only user profile + app settings, persisted via AsyncStorage rather
 * than the SQLite layer (src/db) — deliberately, so identity/theme/
 * notification preferences keep working even in environments where
 * expo-sqlite's sync web backend can't initialize (see src/db/client.ts),
 * and so they're a natural fit for a future real-account migration later
 * (the user has explicitly deferred building real backend accounts for
 * now — this is a lightweight local stand-in, not auth).
 */

export type ThemePreference = 'system' | 'light' | 'dark';

export interface UserProfile {
  displayName: string;
  avatarUri: string | null;
  themePreference: ThemePreference;
  notificationsEnabled: boolean;
  createdAt: string;
}

const STORAGE_KEY = 'beastlyfacts.profile.v1';

function defaultProfile(): UserProfile {
  return {
    displayName: 'Beast Keeper',
    avatarUri: null,
    themePreference: 'system',
    notificationsEnabled: true,
    createdAt: new Date().toISOString(),
  };
}

export async function getProfile(): Promise<UserProfile> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProfile();
    return { ...defaultProfile(), ...JSON.parse(raw) };
  } catch {
    return defaultProfile();
  }
}

export async function updateProfile(patch: Partial<UserProfile>): Promise<UserProfile> {
  const current = await getProfile();
  const next = { ...current, ...patch };
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return next;
}

/** Lightweight "sign out": clears the local display name/avatar back to
 * defaults but keeps this device's theme/notification preferences. */
export async function resetIdentity(): Promise<UserProfile> {
  const current = await getProfile();
  const fresh = defaultProfile();
  return updateProfile({ ...current, displayName: fresh.displayName, avatarUri: fresh.avatarUri });
}

/** Full reset (identity + settings), used alongside wiping local SQLite
 * data via the "Delete all data" action. */
export async function clearProfile(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEY);
}
