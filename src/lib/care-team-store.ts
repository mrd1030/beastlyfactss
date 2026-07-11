import AsyncStorage from '@react-native-async-storage/async-storage';

import { generateLocalId } from '@/db/id';

import { getProfile } from './profile-store';

export interface Caregiver {
  id: string;
  name: string;
}

export interface CareTeamState {
  caregivers: Caregiver[];
  activeCaregiverId: string | null;
}

const STORAGE_KEY = 'beastlyfacts.care-team.v1';

function buildDefaultCaregiver(name: string): Caregiver {
  return {
    id: generateLocalId(),
    name,
  };
}

async function defaultCareTeam(): Promise<CareTeamState> {
  const profile = await getProfile();
  const caregiver = buildDefaultCaregiver(profile.displayName || 'Beast Keeper');
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

  const activeExists = caregivers.some((caregiver) => caregiver.id === state.activeCaregiverId);
  return {
    caregivers,
    activeCaregiverId: activeExists ? state.activeCaregiverId : caregivers[0].id,
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
