import type { Config } from 'drizzle-kit';

/**
 * drizzle-kit config for the on-device SQLite database (expo-sqlite).
 * `npx drizzle-kit generate` reads src/db/schema.ts and writes SQL
 * migration files + a JS migrations bundle into src/db/migrations,
 * which src/db/client.ts imports and applies on app start via
 * drizzle-orm's expo-sqlite `useMigrations` hook.
 */
export default {
  dialect: 'sqlite',
  driver: 'expo',
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
} satisfies Config;
