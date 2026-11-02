// Ask Beastly, the browser half (docs/ASK_BEASTLY.md): asking POST /api/ask
// and keeping the reader's recent questions in this browser.
//
// The history is the reader's own, like My Pack: localStorage only, never
// sent anywhere. It keeps the last 7 days (US Eastern dates), at most 30
// questions, newest kept; older ones drop off when read. The search page box
// and the floating chat share it. A stored answer is a snapshot of the day it
// was asked, which the chat says under anything older than today.

const KEY = 'beastly-ask-history';
const EVENT = 'beastly-ask-history-change';
const MAX_ITEMS = 30;
const KEEP_DAYS = 7;

export const ASK_HISTORY_EVENT = EVENT;

const MIN_WORDS = 3;
export const isQuestion = (q) => String(q).trim().split(/\s+/).filter(Boolean).length >= MIN_WORDS;

export function easternDate(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' }).format(now);
}

// The Eastern date KEEP_DAYS - 1 days back: items on or after it are kept.
function oldestKeptDate() {
  return easternDate(new Date(Date.now() - (KEEP_DAYS - 1) * 86400000));
}

export function readHistory() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!raw || !Array.isArray(raw.items)) return [];
    const cutoff = oldestKeptDate();
    const kept = raw.items.filter((it) => it && it.at && easternDate(new Date(it.at)) >= cutoff);
    if (kept.length !== raw.items.length || raw.date) store(kept);
    return kept;
  } catch { /* storage off or bad JSON: start empty */ }
  return [];
}

function store(items) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ items: items.slice(-MAX_ITEMS) }));
  } catch { /* private window or storage full: the chat still works for this visit */ }
}

function writeHistory(items) {
  store(items);
  window.dispatchEvent(new CustomEvent(EVENT));
}

export function clearHistory() {
  writeHistory([]);
}

export function deleteHistoryItem(id) {
  writeHistory(readHistory().filter((it) => it.id !== id));
}

// Only what the reader needs to see again goes in: the source chunks the test
// site returns are dropped.
function keepable(reply) {
  const { result, answer = '', links = [], emergency = false, species = null, legal = null } = reply || {};
  return { result: result || 'unavailable', answer, links, emergency, species, legal };
}

// Asks one question. Never throws: a network or server failure comes back as
// { result: 'unavailable' }, which every view treats as "no answer, no error".
export async function askQuestion(question, captcha = '') {
  const q = String(question).trim();
  let reply = { result: 'unavailable' };
  try {
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ question: q, captcha }),
    });
    reply = await res.json();
  } catch { /* stays unavailable */ }
  const entry = { id: `${Date.now()}`, q, at: Date.now(), reply: keepable(reply) };
  writeHistory([...readHistory(), entry]);
  return entry;
}
