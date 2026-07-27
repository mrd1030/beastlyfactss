import Constants from 'expo-constants';

export type RemoteConfig = {
  featureFlags: {
    advancedSyncQueue: boolean;
    telemetryEnabled: boolean;
    backgroundRefreshEnabled: boolean;
  };
  minSupportedVersion: string;
  releaseChannel: 'stable' | 'staged' | 'canary';
};

const DEFAULT_CONFIG: RemoteConfig = {
  featureFlags: {
    advancedSyncQueue: true,
    telemetryEnabled: true,
    backgroundRefreshEnabled: true,
  },
  minSupportedVersion: '1.0.0',
  releaseChannel: 'stable',
};

let cachedConfig: RemoteConfig = DEFAULT_CONFIG;

export function getRemoteConfig(): RemoteConfig {
  return cachedConfig;
}

export function loadRemoteConfig(): RemoteConfig {
  const maybeConfig = Constants.expoConfig?.extra?.remoteConfig as Partial<RemoteConfig> | undefined;
  cachedConfig = {
    ...DEFAULT_CONFIG,
    ...maybeConfig,
    featureFlags: {
      ...DEFAULT_CONFIG.featureFlags,
      ...(maybeConfig?.featureFlags ?? {}),
    },
  };
  return cachedConfig;
}
