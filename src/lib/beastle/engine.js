import data from '@/lib/data/beastle/pool.json';

// Pure game logic for Beastle. Pool and schedule come from
// scripts/generate-beastle.mjs; nothing here touches storage or the DOM.

export const MAX_GUESSES = 6;
export const pool = data.pool;
export const byAnswer = new Map(pool.map((e) => [e.answer, e]));
export { dayNumber, dateForDay } from '@/lib/beastle/day';

// Past the end of the written schedule it wraps rather than failing; the
// generator is meant to be rerun long before that.
export function answerForDay(n) {
  const s = data.schedule;
  const answer = s[(((n - 1) % s.length) + s.length) % s.length];
  return byAnswer.get(answer);
}

// The board layout: letters are slots, spaces and hyphens are fixed gaps.
// "RED PANDA" -> [{word:0,len:3},{sep:' '},{word:1,len:5}]
export function shapeOf(answer) {
  const parts = answer.split(/([ -])/).filter(Boolean);
  const shape = [];
  let word = 0;
  for (const p of parts) {
    if (p === ' ' || p === '-') shape.push({ sep: p });
    else shape.push({ word: word++, len: p.length });
  }
  return shape;
}

export const lettersOf = (answer) => answer.replace(/[ -]/g, '');
export const wordLengths = (answer) => answer.split(/[ -]/).map((w) => w.length);

// Standard Wordle scoring across the whole name: greens first, then golds
// only while unmatched copies of that letter remain, so a doubled letter in a
// guess never lights up more golds than the answer has.
export function score(guessLetters, answerLetters) {
  const result = Array(guessLetters.length).fill('absent');
  const remaining = {};
  for (let i = 0; i < answerLetters.length; i++) {
    if (guessLetters[i] === answerLetters[i]) result[i] = 'correct';
    else remaining[answerLetters[i]] = (remaining[answerLetters[i]] || 0) + 1;
  }
  for (let i = 0; i < guessLetters.length; i++) {
    if (result[i] === 'correct') continue;
    const l = guessLetters[i];
    if (remaining[l]) {
      result[i] = 'present';
      remaining[l]--;
    }
  }
  return result;
}

// Best state per letter for the on-screen keyboard.
const RANK = { absent: 1, present: 2, correct: 3 };
export function keyStates(guesses, answerLetters) {
  const keys = {};
  for (const g of guesses) {
    score(g, answerLetters).forEach((s, i) => {
      const l = g[i];
      if (!keys[l] || RANK[s] > RANK[keys[l]]) keys[l] = s;
    });
  }
  return keys;
}

// Every word in an answer counts as a real word, so ANOLE and AXOLOTL are
// always guessable even if the dictionary lacks them.
const answerWords = new Set(pool.flatMap((e) => e.answer.split(/[ -]/)));

// Returns null when the guess is playable, or the reason it is not. `words`
// is the loaded dictionary (a Set of lowercase words) or null while loading,
// in which case only length is checked.
export function validate(guessLetters, answer, words) {
  const lengths = wordLengths(answer);
  const total = lengths.reduce((a, b) => a + b, 0);
  if (guessLetters.length < total) return 'Fill in every letter first';
  let at = 0;
  for (let w = 0; w < lengths.length; w++) {
    const word = guessLetters.slice(at, at + lengths[w]);
    at += lengths[w];
    if (words && !words.has(word.toLowerCase()) && !answerWords.has(word)) {
      return lengths.length > 1
        ? `${word} isn't in our word list (word ${w + 1} needs a real ${lengths[w]}-letter word)`
        : `${word} isn't in our word list`;
    }
  }
  return null;
}

let wordsPromise = null;
export function loadWords() {
  if (!wordsPromise) {
    wordsPromise = fetch('/beastle/words.txt')
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error(String(r.status)))))
      // \r? because a Windows checkout can hand the file over with CRLF.
      .then((t) => new Set(t.split(/\r?\n/).filter(Boolean)))
      .catch(() => {
        // Without the list every full-length guess is allowed, which beats a
        // game that cannot be played.
        wordsPromise = null;
        return null;
      });
  }
  return wordsPromise;
}

const TILE = { correct: '🟩', present: '🟨', absent: '⬛' };

// Spoiler-free share grid; word gaps are kept so the shape reads.
export function shareText({ title, guesses, answer, won, streak, hinted = false }) {
  const letters = lettersOf(answer);
  const lengths = wordLengths(answer);
  const rows = guesses.map((g) => {
    const s = score(g, letters).map((x) => TILE[x]);
    let at = 0;
    return lengths.map((len) => {
      const part = s.slice(at, at + len).join('');
      at += len;
      return part;
    }).join(' ');
  });
  // 💡 marks a solve that used the reveal-a-letter hint.
  const head = `🦎 ${title}: ${won ? guesses.length : 'X'}/${MAX_GUESSES}${hinted ? ' 💡' : ''}${streak > 1 ? ` 🔥${streak} day streak` : ''}`;
  // The grid alone reads as random squares to anyone who has not played,
  // so a line says what the game is and what the result means.
  const line = won
    ? `I guessed today's hidden animal in ${guesses.length} ${guesses.length === 1 ? 'try' : 'tries'} on Beastle, the daily animal word game. Give it a try!`
    : "Today's hidden animal on Beastle, the daily animal word game, stumped me. Can you get it?";
  return `${head}\n${line}\n\n${rows.join('\n')}`;
}

// Unlimited difficulty: which answer levels each setting plays.
export const LEVELS = {
  easy: ['easy'],
  medium: ['easy', 'medium'],
  hard: ['easy', 'medium', 'hard'],
};

// Unlimited: anything at the chosen difficulty except today's daily answer,
// unseen answers first.
export function pickUnlimited(seen, exclude, level = 'medium') {
  const allowed = LEVELS[level] || LEVELS.medium;
  // dailyOnly answers (TOKAY for the tokay gecko) play here under their full name.
  const open = pool.filter((e) => !e.dailyOnly && e.answer !== exclude && allowed.includes(e.level));
  const fresh = open.filter((e) => !seen.includes(e.answer));
  const from = fresh.length ? fresh : open;
  return from[Math.floor(Math.random() * from.length)];
}
