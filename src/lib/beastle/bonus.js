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
const nameWords = (name) => name.toLowerCase().split(/[\s-]+/).filter((w) => w.length >= 3);

// Splits a fact into plain text and the blanked name, so the round can show
// the blank before an answer and the real word after it. Every word of the
// animal's names (and its plural) is blanked, longest first, so "red pandas"
// goes before "red" and nothing leaks through as half a name. A run of
// blanked words ("Wandering _____ _____") becomes one blank.
export function maskParts(text, names) {
  const words = [...new Set(names.flatMap((n) => [n, ...n.split(/[\s-]+/)]))]
    .filter((w) => w.length >= 3)
    .sort((a, b) => b.length - a.length);
  if (!words.length) return [{ text }];
  const re = new RegExp(`\\b(?:${words.map(escape).join('|')})(?:es|s)?\\b`, 'gi');
  const parts = [];
  let at = 0;
  for (const m of text.matchAll(re)) {
    const gap = text.slice(at, m.index);
    const last = parts[parts.length - 1];
    if (last?.blank && /^[\s-]*$/.test(gap)) last.blank += gap + m[0];
    else {
      if (gap) parts.push({ text: gap });
      parts.push({ blank: m[0] });
    }
    at = m.index + m[0].length;
  }
  if (at < text.length) parts.push({ text: text.slice(at) });
  return parts;
}

export const maskFact = (text, names) => maskParts(text, names).map((p) => p.text ?? '_____').join('');

// Wrong answers that make you read the fact without turning it into a
// trick: two of the same kind of animal (birds for a bird) and one of
// another kind, all well known. A choice never shares a word with the answer
// (no second chameleon on a chameleon fact) and is never named in the fact.
const DECOYS = pool.filter((e) => e.level !== 'hard');

function decoysFor(entry, fact, exclude, rand) {
  const banned = new Set([entry.name, entry.answer, fact.animal].flatMap(nameWords));
  const factText = fact.fact.toLowerCase();
  const fits = (o) => o.answer !== entry.answer
    && o.answer !== exclude
    && !nameWords(o.name).some((w) => banned.has(w) || new RegExp(`\\b${escape(w)}(?:es|s)?\\b`).test(factText));
  const draw = (list, n, taken) => {
    const open = list.filter((o) => fits(o) && !taken.includes(o));
    const out = [];
    while (out.length < n && open.length) out.push(open.splice(Math.floor(rand() * open.length), 1)[0]);
    return out;
  };
  const same = draw(DECOYS.filter((o) => o.group && o.group === entry.group), 2, []);
  const other = draw(DECOYS.filter((o) => o.group !== entry.group), 3 - same.length, same);
  return [...same, ...other];
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
    const options = [entry, ...decoysFor(entry, fact, excludeAnswer, rand)]
      .map((o) => ({ o, k: rand() }))
      .sort((a, b) => a.k - b.k)
      .map(({ o }) => ({ answer: o.answer, name: o.name }));
    const parts = maskParts(fact.fact, [entry.name, fact.animal, entry.answer]);
    return {
      answer: entry.answer,
      name: entry.name,
      factId: fact.id,
      clue: parts.map((p) => p.text ?? '_____').join(''),
      parts,
      options,
    };
  });
}

export const factFor = (id) => factById.get(id);
