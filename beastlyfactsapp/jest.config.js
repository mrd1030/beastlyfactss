/** @type {import('jest').Config} */
module.exports = {
  preset: 'jest-expo',
  testMatch: ['**/src/test/**/*.test.ts', '**/src/test/**/*.test.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverageFrom: [
    'src/lib/accessibility.ts',
    'src/lib/background-refresh.ts',
    'src/lib/facts-utils.ts',
    'src/lib/favorite-keys.ts',
    'src/lib/i18n.ts',
    'src/lib/offline-sync-queue.ts',
    'src/lib/remote-config.ts',
    'src/lib/sync-status.ts',
    'src/lib/telemetry.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 64,
      functions: 85,
      lines: 85,
      statements: 80,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
