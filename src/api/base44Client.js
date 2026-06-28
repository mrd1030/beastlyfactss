import { createClient } from '@base44/sdk';

const APP_ID = import.meta.env.VITE_BASE44_APP_ID || '6a0c18cd7389ddefed517c2f';

// Two-level proxy: entity.AnyEntity.anyMethod() resolves cleanly instead of throwing
const createEntityProxy = () => new Proxy({}, {
  get: () => () => Promise.resolve([]),
});

// Fallback client used only if createClient throws at init time
const createDummyClient = () => ({
  entities: new Proxy({}, {
    get: () => createEntityProxy(),
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

try {
  base44 = createClient({ appId: APP_ID });
} catch {
  base44 = createDummyClient();
}

export { base44 };