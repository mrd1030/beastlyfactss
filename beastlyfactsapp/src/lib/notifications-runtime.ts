import Constants, { ExecutionEnvironment } from 'expo-constants';
import { Platform } from 'react-native';

type NotificationsModule = typeof import('expo-notifications');

let notificationsModulePromise: Promise<NotificationsModule | null> | null = null;

export function isNotificationsSupportedEnvironment(): boolean {
  if (Platform.OS === 'web') {
    return false;
  }

  // SDK 53+ removed Android push support from Expo Go. Even though this app
  // only uses local notifications, loading expo-notifications at module scope
  // inside Expo Go can still fail before the router finishes importing routes.
  if (Platform.OS === 'android' && Constants.executionEnvironment === ExecutionEnvironment.StoreClient) {
    return false;
  }

  return true;
}

export async function getNotificationsModule(): Promise<NotificationsModule | null> {
  if (!isNotificationsSupportedEnvironment()) {
    return null;
  }

  if (!notificationsModulePromise) {
    notificationsModulePromise = import('expo-notifications')
      .then((module) => module)
      .catch((error: unknown) => {
        console.warn('[notifications] expo-notifications is unavailable in this environment', error);
        return null;
      });
  }

  return notificationsModulePromise;
}

export type { NotificationsModule };
