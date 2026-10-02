import { facts } from '@/lib/data/facts';
import { pool } from '@/lib/beastle/engine';

// The bonus round after the daily Beastle: fact clues with the animal's name
// blanked out, four choices each. Seeded by day, so a reload shows the same
// three questions and everyone gets the same round.

export const BONUS_QUESTIONS = 3;
const factById = new Map(facts.map((f) => [f.id, f]));
// dailyOnly answers are a second entry for an animal already here by full name.
const withFacts = pool.filter((e) => e.factIds.length && !e.dailyOnly);

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

// The match below adds "s" and "es" itself; these are the plurals it can't
// reach. "Wolves" slipped past a WOLF clue on Beastle #4 and gave it away.
const IRREGULAR = [[/mouse$/i, 'mice'], [/goose$/i, 'geese'], [/louse$/i, 'lice']];
function plurals(w) {
  const out = [w];
  if (/[^aeiou]y$/i.test(w)) out.push(`${w.slice(0, -1)}ies`);
  if (/fe$/i.test(w)) out.push(`${w.slice(0, -2)}ves`);
  else if (/f$/i.test(w)) out.push(`${w.slice(0, -1)}ves`);
  for (const [re, pl] of IRREGULAR) if (re.test(w)) out.push(w.replace(re, pl));
  return out;
}
const nameWords = (name) => name.toLowerCase().split(/[\s-]+/).filter((w) => w.length >= 3);

// Splits a fact into plain text and the blanked name, so the round can show
// the blank before an answer and the real word after it. Every word of the
// animal's names (and its plural) is blanked, longest first, so "red pandas"
// goes before "red" and nothing leaks through as half a name. A run of
// blanked words ("Wandering _____ _____") becomes one blank.
// Words that give the answer away without being its name: a root, a
// scientific name, a country the breed is named for. Keyed by answer, which
// every caller passes in `names`. Found by checking every pool clue for
// leftover pieces of the name; add to it when a new animal joins the pool.
const ALSO_MASK = {
  LION: ['lioness'],
  RHINOCEROS: ['rhino'],
  MANTIS: ['Mantodea'],
  'PRAYING MANTIS': ['Mantodea'],
  CUTTLEFISH: ['cuttlebone'],
  BUDGIE: ['budgerigar'],
  BENGAL: ['bengalensis'],
  CROCODILE: ['crocodilian'],
  FERRET: ['ferreting'],
  'ELECTRIC EEL': ['electricity'],
  SWORDTAIL: ['sword'],
  'SATIN BOWERBIRD': ['bower'],
  PERSIAN: ['Persia'],
  SIAMESE: ['Siam'],
  'GERMAN SHEPHERD': ['Germany'],
  SHEPHERD: ['Germany'],
  'SCOTTISH FOLD': ['Scotland', 'folded'],
  PARROTLET: ['parrot'],
  'BALD EAGLE': ['balde'],
  'BEARDED DRAGON': ['beard'],
  'HAIRY FROG': ['hair'],
  CHICKEN: ['chick'],
  'CROWNED PIGEON': ['crown'],
  BLOBFISH: ['blob'],
  BULLDOG: ['bull'],
  'BOA CONSTRICTOR': ['constriction'],
  'LEAFY SEADRAGON': ['leaf'],
  'WOOD FROG': ['woodland'],
  GHARIAL: ['ghara'],
  'SAVANNAH MONITOR': ['savanna'],
  // Daily answers that are one word of a longer name (scripts/generate-beastle.mjs
  // DAILY_HINT), keyed by the full name.
  'DOMESTIC SHORTHAIR': ['short'],
  'AMERICAN SHORTHAIR': ['America'],
  "JACKSON'S CHAMELEON": ['Jackson'],
  'BLUE TONGUE SKINK': ['tongued'],
  'LEAF-TAILED GECKO': ['tail'],
};

export function maskParts(text, names) {
  const all = names.flatMap((n) => [n, ...(ALSO_MASK[n.toUpperCase()] || [])]);
  const words = [...new Set(all.flatMap((n) => [n, ...n.split(/[\s-]+/)]))]
    .filter((w) => w.length >= 3)
    .flatMap(plurals)
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
const DECOYS = pool.filter((e) => e.level !== 'hard' && !e.dailyOnly);

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

// From this day on, the round walks one fixed shuffled order of every fact
// animal, three a day, so an animal never comes back until all the others
// have had a turn (about two months). Days before it keep the free draw they
// were played with, so a round already played never changes under anyone.
const SEQUENCE_FROM_DAY = 4;
const ORDER = (() => {
  const rand = rng(20260928);
  const order = [...withFacts];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order;
})();

function pickAnimals(day, excludeAnswer, rand) {
  const picked = [];
  if (day >= SEQUENCE_FROM_DAY) {
    const start = (day - SEQUENCE_FROM_DAY) * BONUS_QUESTIONS;
    const half = Math.floor(ORDER.length / 2);
    for (let slot = 0; slot < BONUS_QUESTIONS; slot++) {
      // A slot holding the day's own answer is filled from halfway round the
      // order, not the next animal along, which is tomorrow's first question.
      let e = ORDER[(start + slot) % ORDER.length];
      if (e.answer === excludeAnswer || picked.includes(e)) e = ORDER[(start + slot + half) % ORDER.length];
      picked.push(e);
    }
    return picked;
  }
  const candidates = withFacts.filter((e) => e.answer !== excludeAnswer);
  while (picked.length < BONUS_QUESTIONS && picked.length < candidates.length) {
    const e = candidates[Math.floor(rand() * candidates.length)];
    if (!picked.includes(e)) picked.push(e);
  }
  return picked;
}

export function bonusRound(day, excludeAnswer) {
  const rand = rng(day * 7919);
  const picked = pickAnimals(day, excludeAnswer, rand);
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
