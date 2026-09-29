import { facts } from '@/lib/data/facts';
import { pool } from '@/lib/beastle/engine';

// The bonus round after the daily Beastle: fact clues with the animal's name
// blanked out, four choices each. Seeded by day, so a reload shows the same
// three questions and everyone gets the same round.

export const BONUS_QUESTIONS = 3;
const factById = new Map(facts.map((f) => [f.id, f]));
const withFacts = pool.filter((e) => e.factIds.length);

function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Blanks every word of the animal's names (and its plural), longest first, so
// "red pandas" goes before "red" and nothing leaks through as half a name.
export function maskFact(text, names) {
  const words = [...new Set(names.flatMap((n) => [n, ...n.split(/[\s-]+/)]))]
    .filter((w) => w.length >= 3)
    .sort((a, b) => b.length - a.length);
  let out = text;
  for (const w of words) {
    out = out.replace(new RegExp(`\\b${escape(w)}(es|s)?\\b`, 'gi'), '_____');
  }
  return out.replace(/(_____[\s-]*)+_____/g, '_____');
}

export function bonusRound(day, excludeAnswer) {
  const rand = rng(day * 7919);
  const candidates = withFacts.filter((e) => e.answer !== excludeAnswer);
  const picked = [];
  while (picked.length < BONUS_QUESTIONS && picked.length < candidates.length) {
    const e = candidates[Math.floor(rand() * candidates.length)];
    if (!picked.includes(e)) picked.push(e);
  }
  return picked.map((entry) => {
    const fact = factById.get(entry.factIds[Math.floor(rand() * entry.factIds.length)]);
    const others = [];
    while (others.length < 3) {
      const o = candidates[Math.floor(rand() * candidates.length)];
      if (o !== entry && !others.includes(o)) others.push(o);
    }
    const options = [entry, ...others]
      .map((o) => ({ o, k: rand() }))
      .sort((a, b) => a.k - b.k)
      .map(({ o }) => ({ answer: o.answer, name: o.name }));
    return {
      answer: entry.answer,
      name: entry.name,
      factId: fact.id,
      clue: maskFact(fact.fact, [entry.name, fact.animal, entry.answer]),
      options,
    };
  });
}

export const factFor = (id) => factById.get(id);
