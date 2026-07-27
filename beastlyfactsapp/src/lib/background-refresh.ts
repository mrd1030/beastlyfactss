import { AppState } from 'react-native';

import { refreshAllPetsCareNotifications } from './care-notifications';
import { refreshCareStatusWidget } from './care-widget';
import { flushQueuedSyncActions } from './offline-sync-queue';
import { getRemoteConfig } from './remote-config';
import { syncConnectedHousehold, pullConnectedHousehold, pushConnectedHousehold } from './household-sync';
import type { SyncActionStatus } from './sync-status';
import { trackError } from './telemetry';

const REFRESH_INTERVAL_MS = 10 * 60 * 1000;

type RunnerResult = { status: SyncActionStatus };

async function runQueuedAction(action: 'syncNow' | 'pullLatest' | 'pushDevice'): Promise<RunnerResult> {
  if (action === 'pullLatest') return pullConnectedHousehold();
  if (action === 'pushDevice') return pushConnectedHousehold();
  return syncConnectedHousehold();
}

async function executeRefreshTick(): Promise<void> {
  try {
    await refreshAllPetsCareNotifications();
    await refreshCareStatusWidget();
    await flushQueuedSyncActions(runQueuedAction);
  } catch (error) {
    await trackError('background_refresh', error);
  }
}

export function startBackgroundRefreshLoop(): () => void {
  if (!getRemoteConfig().featureFlags.backgroundRefreshEnabled) {
    return () => {};
  }

  void executeRefreshTick();

  const interval = setInterval(() => {
    void executeRefreshTick();
  }, REFRESH_INTERVAL_MS);

  const appStateSub = AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      void executeRefreshTick();
    }
  });

  return () => {
    clearInterval(interval);
    appStateSub.remove();
  };
}
