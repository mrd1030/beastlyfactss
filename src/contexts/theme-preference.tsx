import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react';

import { useColorScheme as useSystemColorScheme } from '@/hooks/use-color-scheme';
import { getProfile, updateProfile, type ThemePreference } from '@/lib/profile-store';

/**
 * App-wide manual light/dark/system override, layered on top of the OS
 * color scheme. `preference` is persisted locally (see profile-store.ts)
 * and read on mount; every themed surface in the app (Colors lookups, the
 * native tab bar, the navigation ThemeProvider) should read `colorScheme`
 * from here instead of calling react-native's `useColorScheme` directly, so
 * a manual choice in Settings actually takes effect everywhere.
 */

interface ThemePreferenceContextValue {
  preference: ThemePreference;
  colorScheme: 'light' | 'dark';
  setPreference: (preference: ThemePreference) => void;
}

const ThemePreferenceContext = createContext<ThemePreferenceContextValue | null>(null);

export function ThemePreferenceProvider({ children }: PropsWithChildren) {
  const systemScheme = useSystemColorScheme();
  const [preference, setPreferenceState] = useState<ThemePreference>('system');

  useEffect(() => {
    getProfile().then((profile) => setPreferenceState(profile.themePreference));
  }, []);

  const setPreference = (next: ThemePreference) => {
    setPreferenceState(next);
    updateProfile({ themePreference: next }).catch(() => {});
  };

  const colorScheme: 'light' | 'dark' =
    preference === 'system' ? (systemScheme === 'dark' ? 'dark' : 'light') : preference;

  const value = useMemo(() => ({ preference, colorScheme, setPreference }), [preference, colorScheme]);

  return <ThemePreferenceContext.Provider value={value}>{children}</ThemePreferenceContext.Provider>;
}

export function useThemePreference(): ThemePreferenceContextValue {
  const ctx = useContext(ThemePreferenceContext);
  if (!ctx) {
    throw new Error('useThemePreference must be used within a ThemePreferenceProvider');
  }
  return ctx;
}
