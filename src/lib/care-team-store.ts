import AsyncStorage from '@react-native-async-storage/async-storage';

import { generateLocalId } from '@/db/id';

import { getProfile } from './profile-store';

export interface Caregiver {
  id: string;
  name: string;
  /** True for the one caregiver that represents this device's own app
   * profile (see profile-store.ts). Its name is kept in sync with the
   * profile's display name via syncSelfCaregiverName() rather than being
   * independently renamed like teammates added through addCaregiver(). */
  isSelf?: boolean;
}

export interface CareTeamState {
  caregivers: Caregiver[];
  activeCaregiverId: string | null;
}

const STORAGE_KEY = 'beastlyfacts.care-team.v1';

function buildDefaultCaregiver(name: string, isSelf = false): Caregiver {
  return {
    id: generateLocalId(),
    name,
    isSelf,
  };
}

async function defaultCareTeam(): Promise<CareTeamState> {
  const profile = await getProfile();
  const caregiver = buildDefaultCaregiver(profile.displayName || 'Beast Keeper', true);
  return {
    caregivers: [caregiver],
    activeCaregiverId: caregiver.id,
  };
}

function normalizeTeam(state: CareTeamState): CareTeamState {
  const caregivers = state.caregivers.filter((caregiver) => caregiver.name.trim().length > 0);
  if (caregivers.length === 0) {
    return { caregivers: [], activeCaregiverId: null };
  }

  // Exactly one caregiver should carry `isSelf`. State saved before that
  // flag existed has none flagged - fall back to the first caregiver, which
  // is always the original default one since new caregivers are only ever
  // appended (see addCaregiver).
  const hasSelf = caregivers.some((caregiver) => caregiver.isSelf);
  const withSelf = hasSelf
    ? caregivers
    : caregivers.map((caregiver, index) => (index === 0 ? { ...caregiver, isSelf: true } : caregiver));

  const activeExists = withSelf.some((caregiver) => caregiver.id === state.activeCaregiverId);
  return {
    caregivers: withSelf,
    activeCaregiverId: activeExists ? state.activeCaregiverId : withSelf[0].id,
  };
}

async function saveCareTeam(state: CareTeamState): Promise<CareTeamState> {
  const normalized = normalizeTeam(state);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  return normalized;
}

export async function setCareTeamState(state: CareTeamState): Promise<CareTeamState> {
  return saveCareTeam(state);
}

export async function getCareTeam(): Promise<CareTeamState> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const fallback = await defaultCareTeam();
      return saveCareTeam(fallback);
    }
    const parsed = JSON.parse(raw) as CareTeamState;
    const normalized = normalizeTeam(parsed);
    if (normalized.caregivers.length === 0) {
      const fallback = await defaultCareTeam();
      return saveCareTeam(fallback);
    }
    if (
      normalized.activeCaregiverId !== parsed.activeCaregiverId ||
      normalized.caregivers.length !== parsed.caregivers.length
    ) {
      return saveCareTeam(normalized);
    }
    return normalized;
  } catch {
    const fallback = await defaultCareTeam();
    return saveCareTeam(fallback);
  }
}

export async function getActiveCaregiver(): Promise<Caregiver | null> {
  const team = await getCareTeam();
  return team.caregivers.find((caregiver) => caregiver.id === team.activeCaregiverId) ?? team.caregivers[0] ?? null;
}

/** Renames the self caregiver to match a profile display-name change (see
 * Settings' saveName/handleResetIdentity). Keeps the "Shared care mode"
 * chip list and every "Logging as X" / "actorName" attribution in sync
 * with the profile instead of showing whatever name existed when the
 * default caregiver was first created. */
export async function syncSelfCaregiverName(name: string): Promise<CareTeamState> {
  const trimmed = name.trim() || 'Beast Keeper';
  const team = await getCareTeam();
  const self = team.caregivers.find((caregiver) => caregiver.isSelf) ?? team.caregivers[0];
  if (!self || self.name === trimmed) return team;
  return saveCareTeam({
    ...team,
    caregivers: team.caregivers.map((caregiver) =>
      caregiver.id === self.id ? { ...caregiver, name: trimmed } : caregiver
    ),
  });
}

export async function addCaregiver(name: string): Promise<CareTeamState> {
  const trimmed = name.trim();
  if (!trimmed) {
    throw new Error('Caregiver name is required.');
  }
  const team = await getCareTeam();
  return saveCareTeam({
    caregivers: [...team.caregivers, buildDefaultCaregiver(trimmed)],
    activeCaregiverId: team.activeCaregiverId,
  });
}

export async function setActiveCaregiver(id: string): Promise<CareTeamState> {
  const team = await getCareTeam();
  if (!team.caregivers.some((caregiver) => caregiver.id === id)) {
    throw new Error('That caregiver could not be found.');
  }
  return saveCareTeam({ ...team, activeCaregiverId: id });
}

export async function removeCaregiver(id: string): Promise<CareTeamState> {
  const team = await getCareTeam();
  const caregivers = team.caregivers.filter((caregiver) => caregiver.id !== id);
  if (caregivers.length === 0) {
    const fallback = await defaultCareTeam();
    return saveCareTeam(fallback);
  }
  return saveCareTeam({
    caregivers,
    activeCaregiverId: team.activeCaregiverId === id ? caregivers[0].id : team.activeCaregiverId,
  });
}

export async function clearCareTeam(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEY);
}
