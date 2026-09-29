import { supabase, isSupabaseConfigured } from '@/api/supabaseClient';

// Logs a quiz completion to public.site_events, which pings the owner's phone
// through ntfy (see supabase/site_events.sql). Push opt-ins are logged by a
// database trigger and comments already ping on their own, so only quizzes
// call this.
//
// Fire and forget: a failed insert must never touch the results screen. One
// row per kind + label per tab session, so replaying a quiz doesn't re-ping.
export function logSiteEvent(kind, label = '') {
  if (!isSupabaseConfigured) return;
  const key = `beastly-event:${kind}:${label}`;
  try {
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, '1');
  } catch { /* storage blocked: log anyway */ }
  supabase
    .from('site_events')
    .insert({ kind, label: String(label).slice(0, 160) })
    .then(() => {}, () => {});
}
