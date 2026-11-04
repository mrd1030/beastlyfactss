// Ask Beastly, the browser half (docs/ASK_BEASTLY.md): asking POST /api/ask
// and keeping the reader's recent conversations in this browser.
//
// A conversation is the first question plus any number of follow-ups ("what
// about babies?"): no cap per conversation since 2026-11-04 (owner), only the
// worker's hourly limit per visitor. Its animal carries until the reader
// names a different one. A follow-up sends the previous
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

export const canFollowUp = (c) => Boolean(c) && !c.closed;

// Only what the reader needs to see again goes in: the source chunks the test
// site returns are dropped.
function keepable(reply) {
  const { result, answer = '', links = [], emergency = false, species = null, group = null, legal = null, health = false, fact = null, missing = null, disclosure = '' } = reply || {};
  return { result: result || 'unavailable', answer, links, emergency, species, group, legal, health, fact, missing, disclosure };
}

// The 30-minute pass the worker hands back after one Turnstile check, so the
// widget does not run before every question (owner, 2026-11-03). Its first 13
// characters are the expiry time; the worker checks the signature.
const PASS_KEY = 'beastly-ask-pass';
function readPass() {
  try {
    const pass = localStorage.getItem(PASS_KEY) || '';
    const exp = Number(pass.slice(0, 13));
    return exp > Date.now() + 15000 ? pass : '';
  } catch {
    return '';
  }
}
export const hasAskPass = () => Boolean(readPass());
function savePass(pass) {
  try {
    if (pass) localStorage.setItem(PASS_KEY, pass);
    else localStorage.removeItem(PASS_KEY);
  } catch { /* storage off: Turnstile runs each time, as before */ }
}

// The signed-in session's token, sent so the worker can skip the hourly
// limit for the admin (owner, 2026-11-03). Only someone who has signed in on
// this browser (the /composer/ login) has 'bf-auth' saved; everyone else
// never loads the Supabase client here. getSession() refreshes an expired
// token. The worker checks it against app_admins; this side proves nothing.
async function adminToken() {
  try {
    if (!localStorage.getItem('bf-auth')) return '';
    const { supabase } = await import('@/api/supabaseClient');
    if (!supabase) return '';
    const { data } = await supabase.auth.getSession();
    return data?.session?.access_token || '';
  } catch {
    return '';
  }
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
    ? [...current.turns].reverse().find((t) => !['thanks', 'greeting'].includes(t.reply?.result)) || null
    : null;
  const prev = lastTurn ? lastTurn.q : '';
  // After "which animal?", the reply that names it carries the question.
  const clarify = lastTurn?.reply?.result === 'clarify';
  // After a fact, its url: the worker keeps its animal and skips it next.
  const fact = lastTurn?.reply?.result === 'fact' ? lastTurn.reply.fact?.url || '' : '';
  // The conversation's animal: the last one the worker reported, so it
  // carries past a question that names none ("she has 3 babies" after "I
  // have a platy fish"). The worker uses it only when neither the question
  // nor the previous one names an animal (owner, 2026-11-04). When the last
  // topic was a group instead ("tetras", "fish"), its id goes as
  // context.group, so "what do they eat" after "tell me about tetras"
  // stays on the tetras.
  const topic = lastTurn ? [...current.turns].reverse().find((t) => t.reply?.species?.name || t.reply?.group?.id) : null;
  const species = topic?.reply?.species?.name || '';
  const group = !species ? topic?.reply?.group?.id || '' : '';

  let reply = { result: 'unavailable' };
  try {
    const token = await adminToken();
    const pass = readPass();
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...(token && { authorization: `Bearer ${token}` }) },
      body: JSON.stringify({ question: q, captcha, ...(pass && { pass }), ...(prev && { context: { prev, ...(clarify && { clarify: true }), ...(fact && { fact }), ...(species && { species }), ...(group && { group }) } }) }),
    });
    reply = await res.json();
    if (reply.pass) savePass(reply.pass);
    // A pass the worker refused (expired in between): drop it, so the
    // Turnstile widget comes back for the next question.
    else if (pass && reply.result === 'unavailable' && !captcha) savePass('');
  } catch { /* stays unavailable */ }

  const now = Date.now();
  const turn = { q, at: now, reply: keepable(reply) };
  const legal = turn.reply.result === 'legal';
  const items = readHistory();
  const target = items.find((c) => c.id === conversationId);
  let conversation;
  // The hourly limit ends the chat (owner, 2026-11-04): the capped reply
  // joins the conversation it interrupted and closes it, so the next
  // question, once the hour allows, starts a new chat.
  if (turn.reply.result === 'capped') {
    conversation = target && !target.closed
      ? { ...target, at: now, closed: true, turns: [...target.turns, turn] }
      : { id: `${now}`, at: now, closed: true, turns: [turn] };
    writeHistory([...items.filter((c) => c.id !== conversation.id), conversation]);
    return conversation;
  }
  if (prev && reply.followUp && !legal && target && canFollowUp(target)) {
    conversation = { ...target, at: now, turns: [...target.turns, turn] };
    writeHistory([...items.filter((c) => c.id !== target.id), conversation]);
  } else {
    conversation = { id: `${now}`, at: now, closed: legal, turns: [turn] };
    writeHistory([...items, conversation]);
  }
  return conversation;
}
