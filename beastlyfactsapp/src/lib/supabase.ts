// Supabase backend is disabled. This stub keeps the same exported interface
// so nothing else in the app breaks at import time.

export const isSupabaseConfigured = false;

export const supabase = null;

export function requireSupabase(): never {
  throw new Error(
    'Supabase is disabled. Enable it by installing the required packages and re-adding the real supabase.ts implementation.'
  );
}
