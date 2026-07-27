jest.mock('@/lib/remote-config', () => ({
  getRemoteConfig: jest.fn(() => ({ featureFlags: { telemetryEnabled: true, backgroundRefreshEnabled: true } })),
}));

const mockRefreshNotifications = jest.fn(async () => {});
const mockRefreshWidget = jest.fn(async () => {});
const mockFlushQueue = jest.fn(async () => 0);

jest.mock('@/lib/care-notifications', () => ({
  refreshAllPetsCareNotifications: mockRefreshNotifications,
}));

jest.mock('@/lib/care-widget', () => ({
  refreshCareStatusWidget: mockRefreshWidget,
}));

jest.mock('@/lib/offline-sync-queue', () => ({
  flushQueuedSyncActions: mockFlushQueue,
}));

jest.mock('@/lib/household-sync', () => ({
  syncConnectedHousehold: jest.fn(async () => ({ status: 'idle' })),
  pullConnectedHousehold: jest.fn(async () => ({ status: 'idle' })),
  pushConnectedHousehold: jest.fn(async () => ({ status: 'idle' })),
}));

describe('telemetry and background refresh', () => {
  it('logs telemetry event without endpoint', async () => {
    const spy = jest.spyOn(console, 'info').mockImplementation(() => {});
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { trackEvent } = require('@/lib/telemetry') as typeof import('@/lib/telemetry');

    await trackEvent('unit_test_event', { enabled: true });
    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });

  it('starts and stops background refresh loop', async () => {
    jest.useFakeTimers();
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { startBackgroundRefreshLoop } = require('@/lib/background-refresh') as typeof import('@/lib/background-refresh');

    const stop = startBackgroundRefreshLoop();
    jest.advanceTimersByTime(10 * 60 * 1000 + 1);
    await Promise.resolve();
    await Promise.resolve();

    expect(mockRefreshNotifications).toHaveBeenCalled();
    expect(mockRefreshWidget).toHaveBeenCalled();
    expect(mockFlushQueue).toHaveBeenCalled();

    stop();
    jest.useRealTimers();
  });
});
