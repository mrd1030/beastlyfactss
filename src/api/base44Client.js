import { createClient } from '@base44/sdk';

// Get the App ID from environment variable (set in Cloudflare)
const appId = import.meta.env.VITE_BASE44_APP_ID || '6a0c18cd7389ddefed517c2f';

// Create the client safely
let base44;

try {
  base44 = createClient({
    appId,
    // Only add custom headers if you truly need them (avoid exposing keys)
  });
} catch (error) {
  console.warn('[Base44] Failed to initialize client:', error);
  // Create a dummy client so the app doesn't crash
  base44 = {
    entities: new Proxy({}, {
      get: () => () => Promise.resolve([]),
    }),
    functions: {
      invoke: () => Promise.resolve({ data: null }),
    },
    analytics: {
      track: () => {},
    },
  };
}

export { base44 };