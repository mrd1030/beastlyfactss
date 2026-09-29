// Builds the Beastle answer pool and daily schedule into
// src/lib/data/beastle/pool.json, and the guess dictionary into
// public/beastle/words.txt.
//
// Run by hand after adding encyclopedia animals, Beastfiles or facts:
//   node scripts/generate-beastle.mjs
//
// The schedule is append-only. Days already written never change, so a new
// animal can never rewrite a past puzzle (or someone's streak). New animals
// join the rotation when the schedule is next extended.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const load = (rel) => import(pathToFileURL(path.join(root, rel)).href);

// Encyclopedia index.js imports without extensions, which Vite resolves and
// Node does not, so the category files are read one by one.
const ENCYCLOPEDIA_FILES = [
  'amphibians', 'birds', 'cats', 'dogs', 'fish', 'geckos', 'invertebrates',
  'lizards', 'smallMammals', 'snakes', 'turtles',
];

// Answer overrides, keyed "enc:<id>", "bp:<id>" or "fact:<animal>". The answer
// is what the player types, so it is the short common name: WOMBAT, not the
// southern hairy-nosed wombat. null drops the animal from the game.
const OVERRIDES = {
  // Encyclopedia
  'enc:betta-fish': 'Betta',
  'enc:corydoras-catfish': 'Corydoras',
  'enc:labrador': 'Labrador',
  'enc:siberian-husky': 'Husky',
  'enc:green-iguana': 'Iguana',
  'enc:green-anole': 'Anole',
  'enc:kingsnake': 'Kingsnake',
  'enc:hognose-snake': 'Hognose',
  'enc:bristlenose-pleco': 'Pleco',
  'enc:emperor-scorpion': 'Scorpion',
  'enc:mouse': 'Mouse',
  'enc:rat': 'Rat',
  'enc:budgie': 'Budgie',
  'enc:conure': 'Conure',
  'enc:african-grey': 'African Grey',
  'enc:whites-tree-frog': 'Tree Frog',
  'enc:millipede': 'Millipede',
  'enc:hissing-cockroach': 'Cockroach',
  'enc:tegu': 'Tegu',
  'enc:flying-squirrel': 'Flying Squirrel',
  'enc:jacksons-chameleon': null,
  'enc:fire-bellied-toad': null,
  'enc:african-fat-tail': null,
  'enc:leaf-tailed-gecko': null,
  'enc:blue-tongue-skink': null,
  'enc:red-eared-slider': null,
  'enc:red-footed-tortoise': null,
  // Coat types, not animals anyone would guess.
  'enc:domestic-shorthair': null,
  'enc:american-shorthair': null,
  // Beastlypedia
  'bp:african-elephant': 'Elephant',
  'bp:dolphin': 'Dolphin',
  'bp:emperor-penguin': 'Penguin',
  'bp:gray-wolf': 'Wolf',
  'bp:green-anaconda': 'Anaconda',
  'bp:immortal-jellyfish': 'Jellyfish',
  'bp:shark': 'Shark',
  'bp:sloth': 'Sloth',
  'bp:blue-poison-dart-frog': 'Dart Frog',
  'bp:victoria-crowned-pigeon': 'Crowned Pigeon',
  'bp:manta-ray': 'Manta Ray',
  'bp:leafy-sea-dragon': 'Leafy Seadragon',
  // Fact animals (unlimited only unless they match a daily answer)
  'fact:Honey Bee': 'Honeybee',
  'fact:Rhino': 'Rhinoceros',
  'fact:Siamese Cat': 'Siamese',
  'fact:Sphynx Cat': 'Sphynx',
  'fact:Sea Turtles': 'Sea Turtle',
  'fact:Green Sea Turtle': 'Sea Turtle',
  'fact:Tamarin Monkeys': 'Tamarin',
  'fact:American Alligator': 'Alligator',
  'fact:African Grey Parrot': 'African Grey',
  'fact:Cuban Tree Frog': 'Tree Frog',
  'fact:Three-Toed Sloth': 'Sloth',
  'fact:Common House Spider': 'House Spider',
  'fact:California Sea Lion': 'Sea Lion',
  "fact:Wallace's Flying Frog": 'Flying Frog',
  'fact:Pen-tailed Tree Shrew': 'Tree Shrew',
  'fact:Gentoo and Adélie Penguin': 'Penguin',
  'fact:Bar-Tailed Godwit': 'Godwit',
  'fact:Naked Mole Rat': 'Mole Rat',
  'fact:Star-Nosed Mole': 'Mole',
  'fact:Leafy Sea Dragon': 'Leafy Seadragon',
  'fact:Giant Manta Ray': 'Manta Ray',
  'fact:Frilled-necked Lizard': 'Frilled Lizard',
  'fact:Blue Poison Dart Frog': 'Dart Frog',
  'fact:Victoria Crowned Pigeon': 'Crowned Pigeon',
  'fact:Red-Footed Tortoise': 'Tortoise',
  'fact:Pembroke Welsh Corgi': 'Corgi',
  'fact:Short-Beaked Echidna': 'Echidna',
  'fact:Red-footed Booby': null,
  // Same animal as an encyclopedia or Beastfile answer under another name.
  'fact:Green Anaconda': 'Anaconda',
  'fact:Fancy Rat': 'Rat',
  'fact:Fancy Mouse': 'Mouse',
  'fact:Bristlenose Pleco': 'Pleco',
};

// Unlimited difficulty. Easy: animals nearly everyone can name. Hard: deep
// cuts nobody could guess from letters alone (hobby species, rare wildlife).
// Everything else is medium. Medium plays easy + medium, hard plays all.
// Keyed by answer; an answer not listed is medium.
const EASY = new Set([
  'ALLIGATOR', 'BAT', 'BALD EAGLE', 'BULLDOG', 'BUTTERFLY', 'CANARY', 'CAT', 'CHEETAH',
  'CHICKEN', 'CRICKET', 'CROCODILE', 'CROW', 'DEER', 'DOG', 'DOLPHIN', 'ELEPHANT',
  'FIREFLY', 'FLAMINGO', 'GECKO', 'GIRAFFE', 'GOAT', 'GOLDFISH', 'GUINEA PIG', 'HAMSTER',
  'HEDGEHOG', 'HIPPO', 'HONEYBEE', 'HUMMINGBIRD', 'IGUANA', 'JELLYFISH', 'KANGAROO', 'KOALA',
  'LION', 'MOUSE', 'OCTOPUS', 'ORCA', 'OWL', 'PARROT', 'PENGUIN', 'POLAR BEAR', 'RABBIT',
  'RAT', 'REINDEER', 'RHINOCEROS', 'SCORPION', 'SEA LION', 'SEA TURTLE', 'SEAHORSE', 'SHARK',
  'SLOTH', 'SNAKE', 'STARFISH', 'TIGER', 'TORTOISE', 'VULTURE', 'WOLF', 'WOODPECKER', 'ZEBRA',
]);
const HARD = new Set([
  'ACKIE MONITOR', 'AMANO SHRIMP', 'AYE-AYE', 'BARRELEYE FISH', 'BASENJI', 'BASILISK LIZARD',
  'BOMBARDIER BEETLE', 'CARDINAL TETRA', 'CHERRY SHRIMP', 'CONURE', 'CORYDORAS',
  'CROWNED PIGEON', 'DEGU', 'DISCUS', 'DRACO LIZARD', 'DUMBO OCTOPUS', 'FIRE SKINK',
  'FLYING FROG', 'FRILLED SHARK', 'GABOON VIPER', 'GARGOYLE GECKO', 'GHARIAL', 'GHOST SHRIMP',
  'GODWIT', 'HAGFISH', 'HAIRY FROG', 'HOATZIN', 'KAKAPO', 'KEA', 'LYREBIRD', 'MATAMATA TURTLE',
  'MOLLY', 'MOURNING GECKO', 'MUDSKIPPER', 'NORWEGIAN LUNDEHUND', 'NUDIBRANCH', 'NUMBAT',
  'OCEAN SUNFISH', 'OKAPI', 'OSCAR', 'PARROTLET', 'PISTOL SHRIMP', 'PLATY', 'PLECO', 'POTOO',
  'PRONGHORN', 'PYGMY MARMOSET', 'QUAKER PARAKEET', 'ROSY BOA', 'SATIN BOWERBIRD',
  'SECRETARY BIRD', 'SHIMA ENAGA', 'SHOEBILL', 'SULCATA TORTOISE', 'SWORDTAIL', 'TAMARIN',
  'TEGU', 'THORNY DEVIL', 'TOKAY GECKO', 'TREE SHREW', 'TUATARA', 'UROMASTYX',
  'VAMPIRE SQUID', 'WANDERING ALBATROSS', 'YETI CRAB', 'ZEBRA DANIO',
]);
const levelOf = (answer) => (EASY.has(answer) ? 'easy' : HARD.has(answer) ? 'hard' : 'medium');

// Long two-word names never go in the daily. Past this many letters, the
// daily uses one word instead (the last one, unless DAILY_SHORT says
// otherwise), the reveal card still shows the full name, and the full
// two-word answer stays in unlimited as Hard only. RED PANDA, FENNEC FOX and
// the like stay two words.
const DAILY_TWO_WORD_MAX = 11;
// One-word daily answers for long names, keyed like OVERRIDES. null keeps the
// animal out of the daily entirely (its full name stays in unlimited Hard).
const DAILY_SHORT = {
  // BOA: a three-letter reptile is over in two guesses with the group hint.
  'enc:boa-constrictor': null,
  // MONITOR reads as a screen, not a lizard, even with the reptile hint.
  'enc:savannah-monitor': null,
  'enc:scottish-fold': null,
  'bp:mantis-shrimp': null,
};

// Daily answers that feel like repeats of each other, kept at least the same
// 30 days apart as a repeat of one answer.
const RELATED = [['DRAGON', 'SEADRAGON']];
const letterCount = (answer) => answer.replace(/[ -]/g, '').length;

// The daily's free hint: which kind of animal it is. Encyclopedia categories
// and Beastfile groups map straight across, except Beastlypedia's Marine
// Life, which mixes fish, mammals and invertebrates, so it goes by id.
const ENC_GROUP = {
  Amphibians: 'amphibian', Birds: 'bird', Cats: 'mammal', Dogs: 'mammal', Fish: 'fish',
  Geckos: 'reptile', Invertebrates: 'invertebrate', Lizards: 'reptile',
  'Small Mammals': 'mammal', Snakes: 'reptile', 'Turtles & Tortoises': 'reptile',
};
const BP_GROUP = { Mammals: 'mammal', Reptiles: 'reptile', Amphibians: 'amphibian', Birds: 'bird' };
const MARINE_GROUP = {
  'manta-ray': 'fish', 'leafy-sea-dragon': 'fish', dolphin: 'mammal', clownfish: 'fish',
  'immortal-jellyfish': 'invertebrate', seahorse: 'fish', shark: 'fish', octopus: 'invertebrate',
  'mantis-shrimp': 'invertebrate', cuttlefish: 'invertebrate', 'humpback-whale': 'mammal', 'sea-otter': 'mammal',
};

// Days are numbered from launch in the site's timezone (America/New_York):
// Beastle #1 is this date.
// Must match EPOCH in src/lib/beastle/day.js.
const EPOCH = '2026-09-28';
const SCHEDULE_DAYS = 730;
// One two-word answer per seven-day block, the rest single words.
const WEEK = 7;

const MAX_WORDS = 2;
const MIN_WORD = 3;
const MAX_WORD = 12;

// Letters only, words split on spaces and hyphens. The separator is kept so
// AYE-AYE shows its hyphen on the board.
function toAnswer(raw) {
  if (raw === null) return null;
  const cleaned = raw
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toUpperCase()
    .replace(/'/g, '')
    .trim();
  const parts = cleaned.split(/([ -])/).filter(Boolean);
  const words = parts.filter((p) => p !== ' ' && p !== '-');
  if (!words.length || words.length > MAX_WORDS) return null;
  if (words.some((w) => !/^[A-Z]+$/.test(w) || w.length < MIN_WORD || w.length > MAX_WORD)) return null;
  return parts.join('').replace(/ +/g, ' ');
}

function answerFor(key, name) {
  if (Object.prototype.hasOwnProperty.call(OVERRIDES, key)) return toAnswer(OVERRIDES[key]);
  return toAnswer(name);
}

const firstSentence = (text = '') => {
  const m = text.match(/^.*?[.!?](\s|$)/);
  return (m ? m[0] : text).trim();
};

// Seeded so a rerun extends the schedule the same way every time.
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

function shuffle(list, rand) {
  const a = [...list];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function main() {
  const encyclopedia = [];
  for (const f of ENCYCLOPEDIA_FILES) {
    const mod = await load(`src/lib/data/encyclopedia/${f}.js`);
    for (const v of Object.values(mod)) if (Array.isArray(v)) encyclopedia.push(...v);
  }
  const { beastfiles } = await load('src/lib/data/beastlypedia/index.js');
  const { facts } = await load('src/lib/data/facts.js');
  const { imagePathFor } = await load('src/lib/data/factImages.js');
  const { slugify } = await load('src/lib/utils/slugify.js');

  const factsByAnswer = new Map();
  const skipped = [];
  const entries = new Map();

  const add = (entry, daily) => {
    if (!entry.answer) {
      skipped.push(entry.key);
      return;
    }
    // A long two-word daily name splits in two: the full name for unlimited
    // Hard, and a one-word answer (same card) for the daily.
    if (daily && /[ -]/.test(entry.answer) && letterCount(entry.answer) > DAILY_TWO_WORD_MAX) {
      add({ ...entry, forceLevel: 'hard' }, false);
      const short = Object.prototype.hasOwnProperty.call(DAILY_SHORT, entry.key)
        ? DAILY_SHORT[entry.key]
        : entry.answer.split(/[ -]/).pop();
      // A hard animal stays out of the daily in any form.
      if (short && !HARD.has(entry.answer)) add({ ...entry, key: `${entry.key}:daily`, answer: toAnswer(short) }, true);
      return;
    }
    const existing = entries.get(entry.answer);
    if (existing) {
      existing.daily = existing.daily || daily;
      return;
    }
    entries.set(entry.answer, { ...entry, daily });
  };

  // Facts first, only to learn which answers have facts: the reveal on any
  // answer shows one of them when it can.
  for (const f of facts) {
    const answer = answerFor(`fact:${f.animal}`, f.animal);
    if (!answer) continue;
    if (!factsByAnswer.has(answer)) factsByAnswer.set(answer, []);
    factsByAnswer.get(answer).push(f.id);
  }

  // Encyclopedia before Beastlypedia, so an animal in both links to its
  // encyclopedia page.
  for (const a of encyclopedia) {
    const answer = answerFor(`enc:${a.id}`, a.name);
    add({
      key: `enc:${a.id}`,
      answer,
      name: a.name,
      emoji: a.emoji,
      image: a.image || null,
      link: `/encyclopedia/animal/${a.id}/`,
      group: ENC_GROUP[a.category] || null,
      blurb: firstSentence(a.bio?.overview),
    }, true);
  }
  for (const b of beastfiles) {
    const answer = answerFor(`bp:${b.id}`, b.name);
    add({
      key: `bp:${b.id}`,
      answer,
      name: b.name,
      emoji: null,
      image: b.heroImage || null,
      link: `/beastlypedia/${b.id}/`,
      group: BP_GROUP[b.group] || MARINE_GROUP[b.id] || null,
      blurb: b.funFacts?.[0] || b.tagline || '',
    }, true);
  }
  // Fact animals join unlimited only.
  for (const f of facts) {
    const answer = answerFor(`fact:${f.animal}`, f.animal);
    add({
      key: `fact:${f.animal}`,
      answer,
      name: f.animal,
      emoji: f.emoji,
      image: imagePathFor(f),
      link: `/facts/${slugify(f.title)}/`,
      blurb: '',
    }, false);
  }

  const pool = [...entries.values()]
    .map(({ forceLevel, ...e }) => ({ ...e, factIds: factsByAnswer.get(e.answer) || [], level: forceLevel || levelOf(e.answer) }))
    .sort((a, b) => a.answer.localeCompare(b.answer));

  // Schedule: append-only list of daily answers.
  const outFile = path.join(root, 'src/lib/data/beastle/pool.json');
  const previous = fs.existsSync(outFile) ? JSON.parse(fs.readFileSync(outFile, 'utf8')) : null;
  // Hard answers stay out of the daily: everyone plays it and a miss costs a
  // streak. They are still in unlimited on Hard.
  const dailyAnswers = new Set(pool.filter((e) => e.daily && e.level !== 'hard').map((e) => e.answer));
  let schedule = [...(previous?.schedule || [])];

  // --rebuild-future: keep every day up to and including today (site clock)
  // and redeal the rest, for when the daily pool itself changes. Past and
  // current puzzles never change, so no one's streak or share grid moves.
  if (process.argv.includes('--rebuild-future')) {
    const todayEt = new Date().toLocaleDateString('en-CA', { timeZone: 'America/New_York' });
    const today = Math.floor((Date.parse(`${todayEt}T00:00:00Z`) - Date.parse(`${EPOCH}T00:00:00Z`)) / 86400000) + 1;
    schedule = schedule.slice(0, Math.max(0, today));
    console.log(`rebuilding the schedule after Beastle #${today} (${todayEt})`);
  }

  const singles = [...dailyAnswers].filter((a) => !/[ -]/.test(a));
  const multis = [...dailyAnswers].filter((a) => /[ -]/.test(a));
  const rand = rng(0xbea57 + schedule.length);
  let singleQueue = [];
  let multiQueue = [];
  const recent = (n) => new Set(schedule.slice(-n));
  const next = (queueName) => {
    const refill = () => shuffle(queueName === 'multi' ? multis : singles, rand);
    let queue = queueName === 'multi' ? multiQueue : singleQueue;
    if (!queue.length) queue = refill();
    // Never repeat an answer inside a 30-day window across a reshuffle.
    const avoid = recent(30);
    for (const group of RELATED) {
      if (group.some((a) => avoid.has(a))) group.forEach((a) => avoid.add(a));
    }
    const idx = queue.findIndex((a) => !avoid.has(a));
    const pick = queue.splice(idx === -1 ? 0 : idx, 1)[0];
    if (queueName === 'multi') multiQueue = queue; else singleQueue = queue;
    return pick;
  };
  while (schedule.length < SCHEDULE_DAYS) {
    const blockStart = schedule.length - (schedule.length % WEEK);
    const multiSlot = blockStart + Math.floor(rng(blockStart + 1)() * WEEK);
    const useMulti = multis.length && schedule.length === multiSlot;
    schedule.push(next(useMulti ? 'multi' : 'single'));
  }

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify({
    epoch: EPOCH,
    schedule,
    pool: pool.map(({ daily, ...rest }) => ({ ...rest, daily: daily || undefined })),
  }, null, 0) + '\n');

  // Dictionary: common English (SCOWL size 50, American plus shared English)
  // plus every word that appears in an answer.
  const words = new Set();
  for (const variant of ['english', 'american']) {
    for (const size of [10, 20, 35, 40, 50]) {
      const file = path.join(root, `node_modules/wordlist-english/${variant}-words-${size}.json`);
      for (const w of JSON.parse(fs.readFileSync(file, 'utf8'))) {
        if (/^[a-z]{2,12}$/.test(w)) words.add(w);
      }
    }
  }
  for (const e of pool) for (const w of e.answer.split(/[ -]/)) words.add(w.toLowerCase());
  const wordsFile = path.join(root, 'public/beastle/words.txt');
  fs.mkdirSync(path.dirname(wordsFile), { recursive: true });
  fs.writeFileSync(wordsFile, [...words].sort().join('\n') + '\n');

  console.log(`pool ${pool.length} (daily ${dailyAnswers.size}: ${singles.length} single, ${multis.length} two-word)`);
  console.log(`schedule ${schedule.length} days from ${EPOCH}, dictionary ${words.size} words`);
  const unknown = [...EASY, ...HARD].filter((a) => !pool.some((e) => e.answer === a));
  if (unknown.length) console.log(`difficulty lists name answers not in the pool: ${unknown.join(', ')}`);
  const count = (l) => pool.filter((e) => e.level === l).length;
  console.log(`levels: ${count('easy')} easy, ${count('medium')} medium, ${count('hard')} hard`);
  const noGroup = pool.filter((e) => e.daily && !e.group).map((e) => e.answer);
  if (noGroup.length) console.log(`daily answers with no group hint: ${noGroup.join(', ')}`);
  if (skipped.length) console.log(`skipped (no playable name, add an override): ${[...new Set(skipped)].join(', ')}`);
}

main();
