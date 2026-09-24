// "Today's reads": a fresh handful of articles every day, picked by number
// rather than by publish date.
//
// Each article has a permanent number in src/lib/data/rotation.json
// (scripts/check-rotation.mjs keeps it complete). The numbered list is cut
// into columns of `count`: day 0 shows positions 0, D, 2D, ... where D is the
// number of days in a full cycle, day 1 shows 1, D+1, 2D+1, and so on. Every
// article appears exactly once per cycle, and because the picks stride across
// the whole numbering, one day mixes early articles with recent ones instead
// of showing five neighbours from the same batch.
//
// The day count runs from a fixed date, not from the build, so a rebuild or
// two deploys in one day never change which articles show. Callers pass the
// build stamp on the first render and siteToday() after mount, the same
// hydration contract the rest of the homepage uses.
import registry from '@/lib/data/rotation.json';

const EPOCH = Date.UTC(2026, 9, 1); // 2026-10-01, day 0
const DAY_MS = 24 * 60 * 60 * 1000;

export function dayNumber(today) {
  const [y, m, d] = String(today).slice(0, 10).split('-').map(Number);
  return Math.floor((Date.UTC(y, m - 1, d) - EPOCH) / DAY_MS);
}

export function todaysPicks(posts, today, count = 5) {
  const numbered = posts
    .filter(p => registry[p.slug] !== undefined)
    .sort((a, b) => registry[a.slug] - registry[b.slug]);
  const total = numbered.length;
  if (!total) return [];
  const cycle = Math.ceil(total / count);
  const day = ((dayNumber(today) % cycle) + cycle) % cycle;
  const picks = [];
  for (let k = 0; k < count; k++) {
    const i = day + k * cycle;
    if (i < total) picks.push(numbered[i]);
  }
  return picks;
}
