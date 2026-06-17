import { createClient } from '@base44/sdk';

const APP_ID = import.meta.env.VITE_BASE44_APP_ID || '6a0c18cd7389ddefed517c2f';

// Create a completely safe dummy client
const createSafeClient = () => {
  const dummy = {
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
  };
  return dummy;
};

let base44;

try {
  // Only try to create real client if we have a valid app ID
  if (APP_ID && APP_ID.length > 10) {
    base44 = createClient({ appId: APP_ID });
  } else {
    console.warn('[Base44] No valid App ID found. Using safe dummy client.');
    base44 = createSafeClient();
  }
} catch (error) {
  console.warn('[Base44] Failed to initialize. Using safe dummy client.', error);
  base44 = createSafeClient();
}

export { base44 };