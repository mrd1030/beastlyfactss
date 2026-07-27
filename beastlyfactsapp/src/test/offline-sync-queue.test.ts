import {
  clearQueuedSyncActions,
  enqueueSyncAction,
  flushQueuedSyncActions,
  listQueuedSyncActions,
} from '@/lib/offline-sync-queue';

describe('offline sync queue', () => {
  beforeEach(async () => {
    await clearQueuedSyncActions();
  });

  it('queues and lists actions', async () => {
    await enqueueSyncAction('syncNow');
    await enqueueSyncAction('pullLatest');

    const queued = await listQueuedSyncActions();
    expect(queued).toHaveLength(2);
    expect(queued.map((item) => item.action)).toEqual(['syncNow', 'pullLatest']);
  });

  it('flushes successful actions', async () => {
    await enqueueSyncAction('syncNow');
    await enqueueSyncAction('pushDevice');

    const completed = await flushQueuedSyncActions(async () => ({ status: 'pulled' }));
    expect(completed).toBe(2);
    expect(await listQueuedSyncActions()).toHaveLength(0);
  });

  it('retains blocked actions', async () => {
    await enqueueSyncAction('syncNow');

    const completed = await flushQueuedSyncActions(async () => ({ status: 'conflict' }));
    expect(completed).toBe(0);
    expect(await listQueuedSyncActions()).toHaveLength(1);
  });
});
