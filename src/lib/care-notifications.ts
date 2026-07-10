import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import { isDatabaseAvailable } from '@/db/client';
import { listCareTasksForPet, listPets } from '@/db/helpers';
import type { CareTask, Pet } from '@/db/types';

import { addDays, localDateString } from './date';
import { ensureNotificationPermission } from './notification-permission';

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

/**
 * Every occurrence date ('YYYY-MM-DD') for `task` from its current
 * `nextDueDate` (fast-forwarded to today if already overdue) through the
 * end of the rolling window, inclusive.
 */
function occurrencesInWindow(task: CareTask, todayStr: string, windowEndStr: string): string[] {
  const interval = Math.max(task.intervalDays, 1);
  const dates: string[] = [];
  let cursor = task.nextDueDate < todayStr ? todayStr : task.nextDueDate;
  for (let i = 0; i < MAX_OCCURRENCES_PER_TASK && cursor <= windowEndStr; i++) {
    dates.push(cursor);
    cursor = addDays(cursor, interval);
  }
  return dates;
}

async function cancelAllCareNotifications(): Promise<void> {
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  const toCancel = scheduled.filter((n) => n.identifier?.startsWith(CARE_NOTIFICATION_PREFIX));
  await Promise.all(toCancel.map((n) => Notifications.cancelScheduledNotificationAsync(n.identifier)));
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
  if (Platform.OS === 'web') return;

  try {
    const granted = await ensureNotificationPermission();
    if (!granted) return;

    await cancelAllCareNotifications();

    const today = localDateString();
    const windowEnd = addDays(today, WINDOW_DAYS);

    for (const { pet, task } of pairs) {
      const occurrences = occurrencesInWindow(task, today, windowEnd);
      for (const dateStr of occurrences) {
        const [year, month, day] = dateStr.split('-').map(Number);
        const fireDate = new Date(year, month - 1, day, REMINDER_HOUR, 0, 0);
        if (fireDate.getTime() <= Date.now()) continue; // never schedule in the past

        await Notifications.scheduleNotificationAsync({
          identifier: identifierFor(task.id, dateStr),
          content: {
            title: `${pet.nickname}: ${taskLabel(task)}`,
            body: `${taskLabel(task)} is due for ${pet.nickname} today.`,
          },
          trigger: { type: Notifications.SchedulableTriggerInputTypes.DATE, date: fireDate },
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
  if (!isDatabaseAvailable || Platform.OS === 'web') return;
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
