import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

/**
 * Shared local-notification setup for this app's two notification sources
 * (the daily-fact reminder in notifications.ts, and the care-task reminders
 * in care-notifications.ts) — both are local-only, no push server involved.
 *
 * Native-only in effect: this app runs mostly under `npm run web`, which
 * has no real OS notification permission to grant, so every function here
 * feature-detects/try-catches to degrade to a no-op on web instead of
 * crashing or hanging on a permission prompt.
 */

let handlerConfigured = false;

/** Configures how a foregrounded notification is presented. Safe to call
 * repeatedly — only takes effect once. */
export function ensureNotificationHandler(): void {
  if (handlerConfigured || Platform.OS === 'web') return;
  handlerConfigured = true;
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

/** Ensures notification permission is granted, requesting it if needed and
 * possible. Returns false (never throws) on web, on denial, or if the
 * permission APIs aren't available in this environment. */
export async function ensureNotificationPermission(): Promise<boolean> {
  if (Platform.OS === 'web') return false;
  try {
    ensureNotificationHandler();
    const existing = await Notifications.getPermissionsAsync();
    let status = existing.status;
    if (status !== 'granted' && existing.canAskAgain) {
      const requested = await Notifications.requestPermissionsAsync();
      status = requested.status;
    }
    return status === 'granted';
  } catch (err) {
    console.warn('[notifications] Could not determine/request notification permission', err);
    return false;
  }
}
