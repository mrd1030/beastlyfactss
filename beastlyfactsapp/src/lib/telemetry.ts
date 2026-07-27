import Constants from 'expo-constants';

import { getRemoteConfig } from './remote-config';

type TelemetryEvent = {
  name: string;
  properties?: Record<string, string | number | boolean | null>;
  timestamp: string;
};

const TELEMETRY_ENDPOINT = Constants.expoConfig?.extra?.telemetryEndpoint as string | undefined;

export async function trackEvent(name: string, properties?: TelemetryEvent['properties']): Promise<void> {
  if (!getRemoteConfig().featureFlags.telemetryEnabled) return;

  const payload: TelemetryEvent = {
    name,
    properties,
    timestamp: new Date().toISOString(),
  };

  if (!TELEMETRY_ENDPOINT) {
    console.info('[telemetry:event]', payload);
    return;
  }

  try {
    await fetch(TELEMETRY_ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.warn('[telemetry] failed to send event', error);
  }
}

export async function trackError(scope: string, error: unknown): Promise<void> {
  const message = error instanceof Error ? error.message : String(error);
  await trackEvent('runtime_error', { scope, message });
}
