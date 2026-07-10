import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, type ReactNode } from 'react';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { ThemePreferenceProvider, useThemePreference } from '@/contexts/theme-preference';
import { DatabaseProvider } from '@/db/provider';
import { refreshAllPetsCareNotifications } from '@/lib/care-notifications';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

/**
 * Root Stack: the "(tabs)" group renders Browse/Pack behind the tab bar,
 * and "entry/[id]" is a sibling Stack screen pushed on top of it (a
 * Tabs/NativeTabs Navigator can only switch between its own registered
 * tabs, so a detail screen has to live outside that group). Both screens
 * build their own header UI already, so the native Stack header is
 * hidden everywhere.
 */
export default function TabLayout() {
  // Rolling-window care-task reminders are refreshed once per app open
  // here (rather than only when the Pack tab happens to be visited) — see
  // src/lib/care-notifications.ts for why this can't schedule everything
  // up front.
  useEffect(() => {
    refreshAllPetsCareNotifications().catch(() => {});
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemePreferenceProvider>
        <DatabaseProvider>
          <NavigationThemeProvider>
            <AnimatedSplashOverlay />
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(tabs)" />
              <Stack.Screen name="entry/[id]" />
              <Stack.Screen name="pet/[id]" />
              <Stack.Screen name="pet/form" />
              <Stack.Screen name="settings" />
            </Stack>
          </NavigationThemeProvider>
        </DatabaseProvider>
      </ThemePreferenceProvider>
    </QueryClientProvider>
  );
}

/** Separate from TabLayout so it can read the manual theme override via
 * context (which ThemePreferenceProvider only makes available to its own
 * descendants, not to TabLayout itself). */
function NavigationThemeProvider({ children }: { children: ReactNode }) {
  const { colorScheme } = useThemePreference();
  return <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>{children}</ThemeProvider>;
}
