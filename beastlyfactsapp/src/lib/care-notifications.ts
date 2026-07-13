import { isDatabaseAvailable } from '@/db/client';
import { listCareTasksForPet, listPets } from '@/db/helpers';
import type { CareTask, Pet } from '@/db/types';

import { addDays, localDateString } from './date';
import { ensureNotificationPermission } from './notification-permission';
import {
  CARE_OVERDUE_CHANNEL_ID,
  CARE_REMINDER_CATEGORY_ID,
  CARE_REMINDER_CHANNEL_ID,
  ensureNotificationInteractions,
} from './notification-actions';
import { getNotificationsModule, type NotificationsModule } from './notifications-runtime';

/**
 * Local-only care-task reminders (feeding, cleaning, temp/humidity
 * checks). No push server — same local-only model as notifications.ts's
 * daily-fact reminder, and same web/native guard rules.
 *
 * ROLLING WINDOW: iOS caps an app to ~64 pending local notifications
 * total. A pet's tasks can repeat as often as daily, and a household can
 * have several pets, so scheduling every future occurrence up front would
 * blow that cap fast. Instead, `refreshCareNotifications` only schedules
 * occurrences that fall within the next WINDOW_DAYS days, and is meant to
 * be called again on every app open (see src/app/_layout.tsx) — each call
 * cancels every previously-scheduled care notification and re-derives a
 * fresh window from current data, so the window effectively "rolls
 * forward" over time without ever needing to schedule further ahead.
 */
const CARE_NOTIFICATION_PREFIX = 'caretask-';
const WINDOW_DAYS = 14;
/** Safety valve only — with WINDOW_DAYS=14 and a minimum 1-day interval
 * this can never actually reach 14, but guards against a bad/zero
 * interval ever looping unboundedly. */
const MAX_OCCURRENCES_PER_TASK = 14;
const REMINDER_HOUR = 9;

interface PetTaskPair {
  pet: Pet;
  task: CareTask;
}

function taskLabel(task: CareTask): string {
  return task.label ?? task.taskType;
}

function identifierFor(taskId: string, dateStr: string): string {
  return `${CARE_NOTIFICATION_PREFIX}${taskId}-${dateStr}`;
}

function effectiveDueDate(task: CareTask): string {
  return task.snoozedUntilDate && task.snoozedUntilDate > task.nextDueDate ? task.snoozedUntilDate : task.nextDueDate;
}

/**
 * Every occurrence date ('YYYY-MM-DD') for `task` from its current
 * `nextDueDate` (fast-forwarded to today if already overdue) through the
 * end of the rolling window, inclusive.
 */
function occurrencesInWindow(task: CareTask, todayStr: string, windowEndStr: string): string[] {
  const interval = Math.max(task.intervalDays, 1);
  const dates: string[] = [];
  const effectiveDue = effectiveDueDate(task);
  let cursor = effectiveDue < todayStr ? todayStr : effectiveDue;
  for (let i = 0; i < MAX_OCCURRENCES_PER_TASK && cursor <= windowEndStr; i++) {
    dates.push(cursor);
    cursor = addDays(cursor, interval);
  }
  return dates;
}

async function cancelAllCareNotifications(notifications: NotificationsModule): Promise<void> {
  const scheduled = await notifications.getAllScheduledNotificationsAsync();
  const toCancel = scheduled.filter((n) => n.identifier?.startsWith(CARE_NOTIFICATION_PREFIX));
  await Promise.all(toCancel.map((n) => notifications.cancelScheduledNotificationAsync(n.identifier)));
}

/**
 * Reschedules local care-reminder notifications for the given pet/task
 * pairs. Cancels every previously-scheduled care notification first, then
 * schedules only the occurrences that fall in the next ~WINDOW_DAYS days —
 * never every future occurrence at once. Safe to call repeatedly (e.g.
 * after marking a task done, or on every app open); it always re-derives
 * the window from current data. No-ops on web or without permission.
 */
export async function refreshCareNotifications(pairs: PetTaskPair[]): Promise<void> {
  try {
    const notifications = await getNotificationsModule();
    if (!notifications) return;

    const granted = await ensureNotificationPermission(notifications);
    if (!granted) return;
    await ensureNotificationInteractions(notifications);

    await cancelAllCareNotifications(notifications);

    const today = localDateString();
    const windowEnd = addDays(today, WINDOW_DAYS);

    for (const { pet, task } of pairs) {
      const occurrences = occurrencesInWindow(task, today, windowEnd);
      for (const dateStr of occurrences) {
        const [year, month, day] = dateStr.split('-').map(Number);
        const fireDate = new Date(year, month - 1, day, REMINDER_HOUR, 0, 0);
        if (fireDate.getTime() <= Date.now()) continue; // never schedule in the past

        await notifications.scheduleNotificationAsync({
          identifier: identifierFor(task.id, dateStr),
          content: {
            title: `${pet.nickname}: ${taskLabel(task)}`,
            body:
              effectiveDueDate(task) < today
                ? `${taskLabel(task)} is overdue for ${pet.nickname}. Open the reminder to mark it done or snooze it.`
                : `${taskLabel(task)} is due for ${pet.nickname} today. Mark it done or snooze it from the reminder.`,
            categoryIdentifier: CARE_REMINDER_CATEGORY_ID,
            data: {
              url: `/pet/${pet.id}`,
              taskId: task.id,
              petId: pet.id,
            },
          },
          trigger: {
            type: notifications.SchedulableTriggerInputTypes.DATE,
            date: fireDate,
            channelId: effectiveDueDate(task) < today ? CARE_OVERDUE_CHANNEL_ID : CARE_REMINDER_CHANNEL_ID,
          },
        });
      }
    }
  } catch (err) {
    console.warn('[care-notifications] Could not schedule care task reminders', err);
  }
}

/**
 * Loads every pet and its care tasks from the local database and refreshes
 * their rolling-window notifications. Self-contained so callers (app
 * startup, and the pet detail screen after marking a task done) don't need
 * to assemble the pet/task list themselves. No-ops if the local database
 * isn't available in this environment (see src/db/client.ts) or on web.
 */
export async function refreshAllPetsCareNotifications(): Promise<void> {
  if (!isDatabaseAvailable) return;
  try {
    const pets = await listPets();
    const pairs: PetTaskPair[] = [];
    for (const pet of pets) {
      const tasks = await listCareTasksForPet(pet.id);
      for (const task of tasks) pairs.push({ pet, task });
    }
    await refreshCareNotifications(pairs);
  } catch (err) {
    console.warn('[care-notifications] Could not load pets/tasks to refresh reminders', err);
  }
}

export async function scheduleCareReminderPreview(kind: 'due' | 'overdue'): Promise<void> {
  const notifications = await getNotificationsModule();
  if (!notifications) {
    return;
  }

  const granted = await ensureNotificationPermission(notifications);
  if (!granted) {
    return;
  }
  await ensureNotificationInteractions(notifications);

  await notifications.scheduleNotificationAsync({
    content: {
      title: kind === 'overdue' ? 'Mango: Medication' : 'Mango: Feeding',
      body:
        kind === 'overdue'
          ? 'Medication is overdue. Use the reminder actions to mark it done or snooze it.'
          : 'Feeding is due today. Use the reminder actions to mark it done or snooze it.',
      categoryIdentifier: CARE_REMINDER_CATEGORY_ID,
      data: {
        url: '/profile',
      },
    },
    trigger: {
      type: notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: 1,
      channelId: kind === 'overdue' ? CARE_OVERDUE_CHANNEL_ID : CARE_REMINDER_CHANNEL_ID,
    },
  });
}
