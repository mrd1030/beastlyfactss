import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import { ensureNotificationPermission } from './notification-permission';

/**
 * Local-only daily reminder pointing at today's Daily Fact card. No push
 * server involved — expo-notifications here only schedules an on-device
 * local notification. Rescheduled on every app open (see DailyFactCard)
 * so its body text tracks whatever pickDailyEntry() picked for today;
 * if the app isn't opened on a given day the previously-scheduled repeat
 * fires with the last-seen fact rather than nothing, which is an
 * acceptable placeholder tradeoff given there's no backend to push fresh
 * content.
 *
 * Native-only: this app runs mostly under `npm run web` in a browser
 * preview with no way to grant real OS notification permission, so every
 * call here is feature-detected/try-caught to degrade to a no-op on web
 * instead of crashing or hanging on a permission prompt.
 */
const DAILY_FACT_NOTIFICATION_ID = 'daily-fact-notification';

export interface DailyFactNotificationContent {
  title: string;
  body: string;
}

/**
 * Ensures a single daily local notification exists with today's fact,
 * requesting permission if needed. Safe to call on every app open; safe
 * to call repeatedly (re-schedules in place). Silently no-ops on web or
 * if permission is denied/unavailable.
 */
export async function ensureDailyFactNotification(fact: DailyFactNotificationContent): Promise<void> {
  if (Platform.OS === 'web') return;

  try {
    const granted = await ensureNotificationPermission();
    if (!granted) return;

    await Notifications.cancelScheduledNotificationAsync(DAILY_FACT_NOTIFICATION_ID).catch(() => {});
    await Notifications.scheduleNotificationAsync({
      identifier: DAILY_FACT_NOTIFICATION_ID,
      content: { title: fact.title, body: fact.body },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.DAILY,
        hour: 9,
        minute: 0,
      },
    });
  } catch (err) {
    // Native but simulator/permission/config issue — degrade gracefully,
    // matching how src/db/client.ts handles unavailable local storage.
    console.warn('[notifications] Could not schedule daily fact notification', err);
  }
}
