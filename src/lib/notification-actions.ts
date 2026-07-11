import type { QueryClient } from '@tanstack/react-query';
import { router } from 'expo-router';
import type { NotificationResponse } from 'expo-notifications';

import { getCareTask } from '@/db/helpers';

import { refreshAllPetsCareNotifications } from './care-notifications';
import { markCareTaskDone, snoozeTaskByDays } from './care-task-engine';
import { refreshCareStatusWidget } from './care-widget';
import { getNotificationsModule, type NotificationsModule } from './notifications-runtime';

export const CARE_REMINDER_CATEGORY_ID = 'care-reminder-actions';
export const CARE_REMINDER_DONE_ACTION_ID = 'care-reminder-done';
export const CARE_REMINDER_SNOOZE_ACTION_ID = 'care-reminder-snooze';
export const DAILY_FACT_CATEGORY_ID = 'daily-fact-reminder';

export const CARE_REMINDER_CHANNEL_ID = 'care-reminders';
export const CARE_OVERDUE_CHANNEL_ID = 'care-overdue';
export const DAILY_FACT_CHANNEL_ID = 'daily-facts';

async function ensureAndroidChannels(notifications: NotificationsModule): Promise<void> {
  await notifications.setNotificationChannelAsync(CARE_REMINDER_CHANNEL_ID, {
    name: 'Care reminders',
    importance: notifications.AndroidImportance.DEFAULT,
  });
  await notifications.setNotificationChannelAsync(CARE_OVERDUE_CHANNEL_ID, {
    name: 'Care overdue alerts',
    importance: notifications.AndroidImportance.HIGH,
  });
  await notifications.setNotificationChannelAsync(DAILY_FACT_CHANNEL_ID, {
    name: 'Daily facts',
    importance: notifications.AndroidImportance.DEFAULT,
  });
}

export async function ensureNotificationInteractions(
  notifications: NotificationsModule | null = null
): Promise<void> {
  const resolvedNotifications = notifications ?? (await getNotificationsModule());
  if (!resolvedNotifications) {
    return;
  }

  await ensureAndroidChannels(resolvedNotifications).catch(() => {});
  await resolvedNotifications
    .setNotificationCategoryAsync(CARE_REMINDER_CATEGORY_ID, [
      {
        identifier: CARE_REMINDER_DONE_ACTION_ID,
        buttonTitle: 'Mark done',
      },
      {
        identifier: CARE_REMINDER_SNOOZE_ACTION_ID,
        buttonTitle: 'Snooze +1 day',
      },
    ])
    .catch(() => {});
}

async function handleNotificationResponse(
  queryClient: QueryClient,
  notifications: NotificationsModule,
  response: NotificationResponse
): Promise<void> {
  const data = response.notification.request.content.data ?? {};
  const taskId = typeof data.taskId === 'string' ? data.taskId : null;
  const url = typeof data.url === 'string' ? data.url : null;

  if (response.actionIdentifier === CARE_REMINDER_DONE_ACTION_ID && taskId) {
    const task = await getCareTask(taskId);
    if (task) {
      await markCareTaskDone(task);
      await refreshAllPetsCareNotifications().catch(() => {});
      await refreshCareStatusWidget().catch(() => {});
      await queryClient.invalidateQueries();
    }
    return;
  }

  if (response.actionIdentifier === CARE_REMINDER_SNOOZE_ACTION_ID && taskId) {
    const task = await getCareTask(taskId);
    if (task) {
      await snoozeTaskByDays(task, 1);
      await refreshAllPetsCareNotifications().catch(() => {});
      await refreshCareStatusWidget().catch(() => {});
      await queryClient.invalidateQueries();
    }
    return;
  }

  if (url) {
    router.navigate(url as never);
  }
}

export async function observeNotificationResponses(queryClient: QueryClient): Promise<() => void> {
  const notifications = await getNotificationsModule();
  if (!notifications) {
    return () => {};
  }

  await ensureNotificationInteractions(notifications);

  const lastResponse = await notifications.getLastNotificationResponseAsync().catch(() => null);
  if (lastResponse) {
    await handleNotificationResponse(queryClient, notifications, lastResponse);
  }

  const subscription = notifications.addNotificationResponseReceivedListener((response) => {
    void handleNotificationResponse(queryClient, notifications, response);
  });

  return () => subscription.remove();
}
