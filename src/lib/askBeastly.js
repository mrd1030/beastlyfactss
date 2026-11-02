// Ask Beastly, the browser half (docs/ASK_BEASTLY.md): asking POST /api/ask
// and keeping today's questions in this browser.
//
// The history is the reader's own, like My Pack: localStorage only, never
// sent anywhere. It holds today's questions (US Eastern date, matching the
// worker's daily cap) and starts empty on a new day. The search page box and
// the floating chat share it, so a question asked in one shows in the other.

const KEY = 'beastly-ask-history';
const EVENT = 'beastly-ask-history-change';
const MAX_ITEMS = 20;

export const ASK_HISTORY_EVENT = EVENT;

const MIN_WORDS = 3;
export const isQuestion = (q) => String(q).trim().split(/\s+/).filter(Boolean).length >= MIN_WORDS;

export function easternDate(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York' }).format(now);
}

export function readHistory() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (raw && raw.date === easternDate() && Array.isArray(raw.items)) return raw.items;
  } catch { /* storage off or bad JSON: start empty */ }
  return [];
}

function writeHistory(items) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ date: easternDate(), items: items.slice(-MAX_ITEMS) }));
  } catch { /* private window or storage full: the chat still works for this visit */ }
  window.dispatchEvent(new CustomEvent(EVENT));
}

export function clearHistory() {
  writeHistory([]);
}

// Only what the reader needs to see again goes in: the source chunks the test
// site returns are dropped.
function keepable(reply) {
  const { result, answer = '', links = [], emergency = false, species = null } = reply || {};
  return { result: result || 'unavailable', answer, links, emergency, species };
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
