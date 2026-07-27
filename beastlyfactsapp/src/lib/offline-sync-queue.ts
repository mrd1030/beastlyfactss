import AsyncStorage from '@react-native-async-storage/async-storage';

import type { SyncActionStatus } from './sync-status';

export type QueuedSyncAction = {
  id: string;
  action: 'syncNow' | 'pullLatest' | 'pushDevice';
  queuedAt: string;
  attempts: number;
};

const STORAGE_KEY = 'beastlyfacts.sync-queue.v1';

async function readQueue(): Promise<QueuedSyncAction[]> {
  try {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as QueuedSyncAction[];
  } catch {
    return [];
  }
}

async function writeQueue(queue: QueuedSyncAction[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(queue));
}

export async function listQueuedSyncActions(): Promise<QueuedSyncAction[]> {
  return readQueue();
}

export async function enqueueSyncAction(action: QueuedSyncAction['action']): Promise<void> {
  const queue = await readQueue();
  queue.push({
    id: `${action}:${Date.now()}`,
    action,
    queuedAt: new Date().toISOString(),
    attempts: 0,
  });
  await writeQueue(queue.slice(-50));
}

export async function clearQueuedSyncActions(): Promise<void> {
  await AsyncStorage.removeItem(STORAGE_KEY);
}

export async function flushQueuedSyncActions(
  runner: (action: QueuedSyncAction['action']) => Promise<{ status: SyncActionStatus }>
): Promise<number> {
  const queue = await readQueue();
  if (queue.length === 0) return 0;

  const pending: QueuedSyncAction[] = [];
  let completed = 0;

  for (const item of queue) {
    try {
      const result = await runner(item.action);
      if (result.status === 'conflict' || result.status === 'not-signed-in' || result.status === 'not-connected') {
        pending.push({ ...item, attempts: item.attempts + 1 });
      } else {
        completed += 1;
      }
    } catch {
      pending.push({ ...item, attempts: item.attempts + 1 });
    }
  }

  await writeQueue(pending.slice(-50));
  return completed;
}
