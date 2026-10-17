// The question bank behind the Threads and X question slots (docs/SOCIAL_PLAN.md,
// 2026-10-17). social/questions.json is a flat array, one entry per question:
//
//   { "id": 1,                              stable, never renumbered, gaps stay
//     "threads": "take first, one or two lines, the question last",
//     "x": "one line",
//     "headline": "short form for the question card",
//     "animal": "Beagle",                    which photo the question card shows
//     "tag": "pet",                          the word in `threads` that carries the one topic tag
//     "focusX": 0.55,                        optional, as on any card spec: pins the crop
//     "used": { "threads": null, "x": null } } date the platform ran it, or null
//
// Shared by scripts/social-inventory.mjs (propose, mark) and
// scripts/generate-pins.mjs (the question card), so the two never disagree on
// where the file is or how an animal name becomes a photo.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
export const QUESTIONS_FILE = path.join(ROOT, 'social', 'questions.json');
export const QUESTION_PLATFORMS = ['threads', 'x'];

export function loadQuestions() {
  if (!fs.existsSync(QUESTIONS_FILE)) return [];
  const list = JSON.parse(fs.readFileSync(QUESTIONS_FILE, 'utf8'));
  const seen = new Set();
  for (const q of list) {
    if (seen.has(q.id)) throw new Error(`social/questions.json: duplicate id ${q.id}`);
    seen.add(q.id);
    q.used = q.used || {};
    for (const p of QUESTION_PLATFORMS) if (!(p in q.used)) q.used[p] = null;
  }
  return list;
}

export function saveQuestions(list) {
  fs.writeFileSync(QUESTIONS_FILE, JSON.stringify(list, null, 2) + '\n');
}

const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// Size-class dog guides are named the other way round from how a person
// writes them.
const ALIASES = { 'small-dog': 'dog-small', 'medium-dog': 'dog-medium', 'large-dog': 'dog-large' };

// A question card shows the suggested animal, not a fact photo. The species
// guide hero (public/assets/guides/<slug>.jpg, with dog-/cat- prefixes for
// breeds) comes first because that is where the pet species live; a fact
// photo from ANIMAL_IMAGES in src/lib/data/factImages.js is the fallback. A
// spec may also give "image" outright, which wins over both. Returns a path
// relative to the repo root, or null when nothing matches.
export function resolveAnimalImage(animal) {
  if (!animal) return null;
  if (/^(public\/|\/)/.test(animal)) {
    const p = animal.replace(/^\//, 'public/');
    return fs.existsSync(path.join(ROOT, p)) ? p : null;
  }
  const s = slug(animal);
  const candidates = [ALIASES[s] || s, `dog-${s}`, `cat-${s}`];
  for (const c of candidates) {
    const rel = `public/assets/guides/${c}.jpg`;
    if (fs.existsSync(path.join(ROOT, rel))) return rel;
  }
  const src = fs.readFileSync(path.join(ROOT, 'src/lib/data/factImages.js'), 'utf8');
  const block = src.slice(src.indexOf('ANIMAL_IMAGES'), src.indexOf('const FACT_IMAGES'));
  const KEYED = /(?:"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)')\s*:\s*(?:"([^"]*)"|'([^']*)')/g;
  for (const m of block.matchAll(KEYED)) {
    const key = (m[1] ?? m[2]).replace(/\\(.)/g, '$1');
    if (key.toLowerCase() === String(animal).toLowerCase()) {
      const rel = `public${m[3] ?? m[4]}`;
      return fs.existsSync(path.join(ROOT, rel)) ? rel : null;
    }
  }
  return null;
}
