import { createClient } from '@base44/sdk';

const isDev = import.meta.env.DEV;
const APP_ID = import.meta.env.VITE_BASE44_APP_ID || '6a0c18cd7389ddefed517c2f';

// Safe dummy client (no network calls)
const createDummyClient = () => ({
  entities: new Proxy({}, {
    get: () => () => Promise.resolve([]),
  }),
  functions: {
    invoke: () => Promise.resolve({ data: null }),
  },
  analytics: {
    track: () => {},
  },
  integrations: {},
  connectors: {},
});

let base44;

if (isDev && APP_ID) {
  // Only use real Base44 client in development
  try {
    base44 = createClient({ appId: APP_ID });
    console.log('[Base44] Using real client (development mode)');
  } catch (error) {
    console.warn('[Base44] Failed to init in dev. Using dummy.', error);
    base44 = createDummyClient();
  }
} else {
  // Production or no App ID → always use dummy
  if (!isDev) {
    console.log('[Base44] Production mode → using safe dummy client');
  }
  base44 = createDummyClient();
}

export { base44 };