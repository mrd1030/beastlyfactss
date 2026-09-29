import { supabase, isSupabaseConfigured } from '@/api/supabaseClient';

// Everyone's results for a daily Beastle (supabase/beastle_results.sql).
// One row per device per day: the logged day is remembered locally, so a
// reload or a second tab never counts the same player twice.
const LOGGED_KEY = 'beastle-logged-day';

export function logDailyResult(day, guesses) {
  if (!isSupabaseConfigured) return Promise.resolve();
  try {
    if (Number(localStorage.getItem(LOGGED_KEY)) === day) return Promise.resolve();
    localStorage.setItem(LOGGED_KEY, String(day));
  } catch { /* storage blocked: log anyway */ }
  return supabase
    .from('beastle_results')
    .insert({ day, guesses })
    .then(() => {}, () => {});
}

// { played, wins, dist: [1..6] } or null when it can't be read.
export async function fetchDailyStats(day) {
  if (!isSupabaseConfigured) return null;
  const { data, error } = await supabase.rpc('get_beastle_stats', { p_day: day });
  if (error || !data) return null;
  return data;
}

// Share of the other players this result did better than: every miss, plus
// every solve that took more guesses. Ties count as neither.
export function beatShare(stats, guesses) {
  const others = Math.max(0, stats.played - 1);
  if (!others || guesses == null) return null;
  const misses = stats.played - stats.wins;
  const slower = stats.dist.slice(guesses).reduce((a, b) => a + b, 0);
  return Math.round(((misses + slower) / others) * 100);
}
