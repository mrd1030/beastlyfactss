// Ask Beastly, the browser half (docs/ASK_BEASTLY.md): asking POST /api/ask
// and keeping the reader's recent conversations in this browser.
//
// A conversation is up to MAX_TURNS answers on one topic: the first question
// plus follow-ups ("what about babies?"). A follow-up sends the previous
// question as context so the search keeps the animal and topic; the previous
// answer is never sent. The worker says whether it treated the question as a
// follow-up (followUp); when it did not (a different animal, or no context),
// the question starts a new conversation. A legal answer never joins one: it
// is a conversation of its own, closed.
//
// History is the reader's own, like My Pack: localStorage only, never sent
// anywhere. It keeps the last 7 days (US Eastern dates), at most 30
// conversations, newest kept; older ones drop off when read. The search page
// box and the floating chat share it. A stored answer is a snapshot of the
// day it was asked.

const KEY = 'beastly-ask-history';
const EVENT = 'beastly-ask-history-change';
const MAX_CONVERSATIONS = 30;
const KEEP_DAYS = 7;
export const MAX_TURNS = 3;

export const ASK_HISTORY_EVENT = EVENT;

const MIN_WORDS = 3;
export const isQuestion = (q) => String(q).trim().split(/\s+/).filter(Boolean).length >= MIN_WORDS;

export function easternDate(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' }).format(now);
}

// The Eastern date KEEP_DAYS - 1 days back: conversations active on or after
// it are kept.
function oldestKeptDate() {
  return easternDate(new Date(Date.now() - (KEEP_DAYS - 1) * 86400000));
}

// Earlier builds stored one question per item ({ id, q, at, reply }). Each
// becomes a one-answer conversation.
function migrate(item) {
  if (item && Array.isArray(item.turns)) return item;
  if (!item || !item.q) return null;
  return { id: item.id, at: item.at, closed: false, turns: [{ q: item.q, at: item.at, reply: item.reply }] };
}

export function readHistory() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!raw || !Array.isArray(raw.items)) return [];
    const cutoff = oldestKeptDate();
    const all = raw.items.map(migrate).filter(Boolean);
    const kept = all.filter((c) => c.at && easternDate(new Date(c.at)) >= cutoff);
    if (kept.length !== raw.items.length || raw.date || all.some((c, i) => c !== raw.items[i])) store(kept);
    return kept;
  } catch { /* storage off or bad JSON: start empty */ }
  return [];
}

function store(items) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ items: items.slice(-MAX_CONVERSATIONS) }));
  } catch { /* private window or storage full: the chat still works for this visit */ }
}

function writeHistory(items) {
  store(items);
  window.dispatchEvent(new CustomEvent(EVENT));
}

export function clearHistory() {
  writeHistory([]);
}

export function deleteConversation(id) {
  writeHistory(readHistory().filter((c) => c.id !== id));
}

// Only answers that gave the reader something count toward the cap: a
// question the guides do not cover (or one that failed) does not use one up.
const COUNTED = new Set(['answered', 'navigate', 'legal', 'refused']);
export const answersUsed = (c) => (c ? c.turns.filter((t) => COUNTED.has(t.reply?.result)).length : 0);
export const canFollowUp = (c) => Boolean(c) && !c.closed && answersUsed(c) < MAX_TURNS;

// Only what the reader needs to see again goes in: the source chunks the test
// site returns are dropped.
function keepable(reply) {
  const { result, answer = '', links = [], emergency = false, species = null, legal = null, health = false } = reply || {};
  return { result: result || 'unavailable', answer, links, emergency, species, legal, health };
}

// Asks one question, as a follow-up in conversation `conversationId` when it
// can take one. Never throws: a failure comes back as result 'unavailable',
// which every view treats as "no answer, no error". Returns the conversation
// the answer landed in.
export async function askQuestion(question, captcha = '', conversationId = null) {
  const q = String(question).trim();
  const current = readHistory().find((c) => c.id === conversationId);
  // The last real question: a thank-you turn carries nothing to search, so a
  // follow-up after "thanks!" goes back to the question before it.
  const lastTurn = canFollowUp(current)
    ? [...current.turns].reverse().find((t) => t.reply?.result !== 'thanks') || null
    : null;
  const prev = lastTurn ? lastTurn.q : '';
  // After "which animal?", the reply that names it carries the question.
  const clarify = lastTurn?.reply?.result === 'clarify';

  let reply = { result: 'unavailable' };
  try {
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ question: q, captcha, ...(prev && { context: { prev, ...(clarify && { clarify: true }) } }) }),
    });
    reply = await res.json();
  } catch { /* stays unavailable */ }

  const now = Date.now();
  const turn = { q, at: now, reply: keepable(reply) };
  const legal = turn.reply.result === 'legal';
  const items = readHistory();
  const target = items.find((c) => c.id === conversationId);
  let conversation;
  if (prev && reply.followUp && !legal && target && canFollowUp(target)) {
    conversation = { ...target, at: now, turns: [...target.turns, turn] };
    writeHistory([...items.filter((c) => c.id !== target.id), conversation]);
  } else {
    conversation = { id: `${now}`, at: now, closed: legal, turns: [turn] };
    writeHistory([...items, conversation]);
  }
  return conversation;
}
