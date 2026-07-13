import '@/global.css';

import { Fredoka_600SemiBold, Fredoka_700Bold } from '@expo-google-fonts/fredoka';
import { Nunito_500Medium, Nunito_600SemiBold, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import * as SystemUI from 'expo-system-ui';
import { View } from 'react-native';
import { useEffect, type ReactNode } from 'react';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { PersistentFooterNav } from '@/components/app-tabs-base';
import { Colors } from '@/constants/theme';
import { AuthProvider } from '@/contexts/auth-context';
import { ThemePreferenceProvider, useThemePreference } from '@/contexts/theme-preference';
import { DatabaseProvider } from '@/db/provider';
import { refreshAllPetsCareNotifications } from '@/lib/care-notifications';
import { refreshCareStatusWidget } from '@/lib/care-widget';
import { syncConnectedHousehold } from '@/lib/household-sync';
import { observeNotificationResponses } from '@/lib/notification-actions';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

/**
 * Root Stack: the "(tabs)" group renders the main bottom-tab experience,
 * and "entry/[id]" is a sibling Stack screen pushed on top of it (a
 * Tabs/NativeTabs Navigator can only switch between its own registered
 * tabs, so a detail screen has to live outside that group). Both screens
 * build their own header UI already, so the native Stack header is
 * hidden everywhere.
 */
export default function TabLayout() {
  // Brand typefaces (site pairing: Fredoka display + Nunito body). The
  // splash screen stays up (preventAutoHideAsync above) until fonts are in,
  // so no screen ever paints with fallback system fonts.
  const [fontsLoaded] = useFonts({
    Fredoka_600SemiBold,
    Fredoka_700Bold,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemePreferenceProvider>
          <DatabaseProvider>
            <AppRuntimeEffects />
            <NavigationThemeProvider>
              <AnimatedSplashOverlay />
              <View style={{ flex: 1 }}>
                <Stack screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="(tabs)" />
                  <Stack.Screen name="blog" />
                  <Stack.Screen name="entry/[id]" />
                  <Stack.Screen name="entry/slug/[slug]" />
                  <Stack.Screen name="encyclopedia/[id]" />
                  <Stack.Screen name="pet/[id]" />
                  <Stack.Screen name="pet/care-tools" />
                  <Stack.Screen name="pet/health-report" />
                  <Stack.Screen name="pet/form" />
                  <Stack.Screen name="pet/log" />
                </Stack>
                <PersistentFooterNav />
              </View>
            </NavigationThemeProvider>
          </DatabaseProvider>
        </ThemePreferenceProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

/** Separate from TabLayout so it can read the manual theme override via
 * context (which ThemePreferenceProvider only makes available to its own
 * descendants, not to TabLayout itself). */
function NavigationThemeProvider({ children }: { children: ReactNode }) {
  const { colorScheme } = useThemePreference();
  const theme = Colors[colorScheme];

  useEffect(() => {
    void SystemUI.setBackgroundColorAsync(theme.background);
  }, [theme.background]);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      {children}
    </ThemeProvider>
  );
}

function AppRuntimeEffects() {
  const queryClient = useQueryClient();

  // Rolling-window care-task reminders are refreshed once per app open here,
  // after DatabaseProvider has completed migrations and actually mounted its
  // children, so we do not query tables before they exist.
  useEffect(() => {
    refreshAllPetsCareNotifications().catch(() => {});
    refreshCareStatusWidget().catch(() => {});
    syncConnectedHousehold()
      .then((result) => {
        if (result.status === 'pulled' || result.status === 'joined') {
          queryClient.invalidateQueries().catch(() => {});
        }
      })
      .catch(() => {});
  }, [queryClient]);

  useEffect(() => {
    let cleanup = () => {};

    observeNotificationResponses(queryClient)
      .then((dispose) => {
        cleanup = dispose;
      })
      .catch(() => {});

    return () => cleanup();
  }, [queryClient]);

  return null;
}
