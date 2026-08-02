import { createClient } from '@supabase/supabase-js';

// Replaces src/api/base44Client.js as the backing store for blog likes and
// comments. Schema and row-level security live in supabase/schema.sql.
//
// VITE_SUPABASE_ANON_KEY holds what the Supabase dashboard now calls the
// "publishable key" (sb_publishable_...), the replacement for the legacy anon
// key. The env var keeps the older name because that is the argument the client
// takes, but do not go looking for an "anon key" in Settings -> API Keys; it is
// listed as Publishable.
//
// It is meant to be public: it identifies the project and nothing else, and
// every table it can reach is gated by RLS. Shipping it in the bundle is the
// intended usage. The secret key (sb_secret_...) is the one that must never
// appear here.
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && anonKey);

// Null rather than a throwing stub when unconfigured. Callers check
// isSupabaseConfigured and fall back to local-only behaviour, so a missing env
// var degrades the like button instead of breaking the page it sits on.
export const supabase = isSupabaseConfigured
  ? createClient(url, anonKey, {
      auth: { persistSession: false },
    })
  : null;
