import { drizzle, type ExpoSQLiteDatabase } from 'drizzle-orm/expo-sqlite';
import { openDatabaseSync, type SQLiteDatabase } from 'expo-sqlite';

import * as schema from './schema';

/**
 * On-device database connection.
 *
 * expo-sqlite ships a web implementation, but its *synchronous* API
 * (what drizzle-orm's expo-sqlite driver requires) bridges to a Worker
 * via SharedArrayBuffer/Atomics, which only exists on pages served with
 * COOP/COEP cross-origin-isolation headers. Plain `expo start --web`
 * does not set those headers — and force-enabling them app-wide would
 * risk breaking the already-working cross-origin Sanity image loads on
 * the Browse screen (COEP `require-corp` blocks no-cors cross-origin
 * resources unless the server opts in). So on a standard web preview,
 * opening the database throws; we catch that here so the app still
 * boots, exactly like the native-only notification calls elsewhere are
 * expected to degrade gracefully on web instead of crashing.
 *
 * Native builds (and any web host that does set those headers) get a
 * real, persistent database. Callers should check `isDatabaseAvailable`
 * (or catch the error `requireDb()` throws) before relying on
 * persistence in an environment where it may be unavailable.
 */
export const DATABASE_NAME = 'beastlyfacts.db';

type Database = ExpoSQLiteDatabase<typeof schema>;

let sqliteDb: SQLiteDatabase | null = null;
let db: Database | null = null;
let initError: unknown = null;

try {
  sqliteDb = openDatabaseSync(DATABASE_NAME);
  // Needed for the `onDelete: 'cascade'` foreign keys in schema.ts to
  // actually cascade — sqlite disables FK enforcement by default.
  sqliteDb.execSync('PRAGMA foreign_keys = ON;');
  db = drizzle(sqliteDb, { schema });
} catch (err) {
  initError = err;
  console.warn(
    '[db] Local SQLite database is unavailable in this environment ' +
      '(likely a web preview without cross-origin isolation). ' +
      'Local-storage-backed features will be disabled instead of crashing the app.',
    err
  );
}

export const isDatabaseAvailable = db !== null;
export const databaseInitError = initError;

/** Throws a clear error if called somewhere the database couldn't open. */
export function requireDb(): Database {
  if (!db) {
    throw new Error(
      'Local database is unavailable in this environment. Check isDatabaseAvailable before calling data helpers.'
    );
  }
  return db;
}

export type { Database };
