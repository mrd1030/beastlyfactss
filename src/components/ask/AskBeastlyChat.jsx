import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Sparkles, X, Minus, PanelRight, PanelRightClose, Send, Loader2, GripHorizontal, History, ArrowLeft, Plus, ChevronRight,
} from 'lucide-react';
import TurnstileWidget, { isTurnstileEnabled } from '@/components/shared/TurnstileWidget';
import AskReply from '@/components/ask/AskReply';
import {
  ASK_HISTORY_EVENT, MAX_TURNS, askQuestion, canFollowUp, clearHistory, deleteConversation, easternDate, readHistory,
} from '@/lib/askBeastly';
import { formatDay } from '@/lib/utils/verifiedDates';
import { useIsMobileViewport } from '@/lib/hooks/useIsMobileViewport';
import { trackEvent } from '@/lib/analytics';

// Ask Beastly's floating chat, on every page (docs/ASK_BEASTLY.md).
//
//   closed     the round button in the corner, above the phone tab bar
//   open       phone: a sheet over the tab bar. Wider screens: a floating
//              panel dragged by its header, or docked down the right edge as a
//              sidebar over the page (the page does not shift, so an article
//              stays centered; owner, 2026-11-02)
//   minimized  a small bar in the corner that reopens it
//
// Inside, an answer card rather than a chat log (owner, 2026-11-02, on a
// Fable layout):
//   ask        the current conversation: up to three answers on one topic,
//              the first question plus follow-ups. With none, an intro, the
//              example questions and the most recent conversations.
//   history    the last 7 days of conversations, by day, each deletable
//   past       one conversation from history, read only, with a way back
//
// Conversations live in this browser only (lib/askBeastly.js), shared with
// the search page box. Where the panel sits and how it is shown are a
// per-browser convenience, kept in localStorage.

const UI_KEY = 'beastly-ask-chat';
const PANEL_W = 380;
const PANEL_H = 560;
const EDGE = 16;
const EXAMPLES = [
  'Why won\'t my leopard gecko eat?',
  'How often should I clean a hamster cage?',
  'How many hearts does an octopus have?',
];

function readUi() {
  try {
    return { mode: 'closed', dock: 'float', x: null, y: null, current: null, ...JSON.parse(localStorage.getItem(UI_KEY) || '{}') };
  } catch {
    return { mode: 'closed', dock: 'float', x: null, y: null, current: null };
  }
}
function saveUi(ui) {
  try { localStorage.setItem(UI_KEY, JSON.stringify(ui)); } catch { /* per visit only */ }
}

const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), Math.max(lo, hi));
const shortDay = (day) => (formatDay(day) || day).replace(/, \d{4}$/, '');
const timeOf = (at) => new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit' }).format(new Date(at));

// "Today", "Yesterday", or a short date, for the history's day headings.
function dayLabel(day) {
  if (day === easternDate()) return 'Today';
  if (day === easternDate(new Date(Date.now() - 86400000))) return 'Yesterday';
  return shortDay(day);
}

// What answered a conversation, for its history row: the first link of its
// first answer, or a plain word for the other results.
function answeredBy(c) {
  const r = c.turns[0]?.reply;
  if (!r) return '';
  if (r.result === 'legal') return r.legal ? `${r.legal.animal} in ${r.legal.state}` : 'Pet law pages';
  if (r.links?.length) return r.links[0].title;
  return r.result === 'no_match' ? 'Not covered yet' : 'No answer';
}

// The reader's own question, as a bubble on the right, so it never reads as
// part of the answer.
function QuestionBubble({ children }) {
  return (
    <div className="flex justify-end mb-2">
      <p className="max-w-[85%] bg-secondary text-secondary-foreground text-sm font-body rounded-2xl rounded-br-md px-3.5 py-2 shadow-sm">
        {children}
      </p>
    </div>
  );
}

// One conversation's answers, stacked: the reader's question on the right,
// then the answer.
function Turns({ conversation, onNavigate, showDate = false }) {
  const day = easternDate(new Date(conversation.turns[0].at));
  return (
    <div className="space-y-5">
      {showDate && day !== easternDate() && (
        <p className="text-[11px] font-body text-muted-foreground">{`Answered ${shortDay(day)}. Guides may have changed since.`}</p>
      )}
      {conversation.turns.map((t) => (
        <div key={t.at}>
          <QuestionBubble>{t.q}</QuestionBubble>
          <AskReply question={t.q} reply={t.reply} compact onNavigate={onNavigate} />
        </div>
      ))}
    </div>
  );
}

export default function AskBeastlyChat() {
  const isMobile = useIsMobileViewport();
  const [ui, setUiState] = useState(readUi);
  const [history, setHistory] = useState(readHistory);
  const [view, setView] = useState('ask'); // ask | history | past
  const [pastId, setPastId] = useState(null);
  const [pending, setPending] = useState(null);
  // Clearing cannot be undone, so "Clear all" asks first.
  const [confirmClear, setConfirmClear] = useState(false);
  const [input, setInput] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaNonce, setCaptchaNonce] = useState(0);
  const [captchaBlocked, setCaptchaBlocked] = useState(false);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const drag = useRef(null);

  const setUi = useCallback((patch) => {
    setUiState((prev) => {
      const next = { ...prev, ...patch };
      saveUi(next);
      return next;
    });
  }, []);

  // History is shared with the search page box and other tabs.
  useEffect(() => {
    const sync = () => setHistory(readHistory());
    window.addEventListener(ASK_HISTORY_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(ASK_HISTORY_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const open = ui.mode === 'open';
  const docked = open && !isMobile && ui.dock === 'side';
  const current = history.find((c) => c.id === ui.current) || null;
  const past = history.find((c) => c.id === pastId) || null;
  const followable = canFollowUp(current);

  // The newest answer in view.
  useEffect(() => {
    if (open && view === 'ask' && bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [open, view, current?.turns.length, pending]);

  useEffect(() => {
    if (open && !isMobile && view === 'ask') inputRef.current?.focus();
  }, [open, isMobile, view]);

  // Escape steps back out of history, then minimizes.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (view === 'past') setView('history');
      else if (view === 'history') setView('ask');
      else setUi({ mode: 'minimized' });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, view, setUi]);

  // Dragging the floating panel by its header, kept inside the window.
  const onDragStart = (e) => {
    if (isMobile || docked || e.button > 0) return;
    if (e.target.closest('button')) return;
    const panel = e.currentTarget.closest('[data-ask-panel]');
    const rect = panel.getBoundingClientRect();
    drag.current = { dx: e.clientX - rect.left, dy: e.clientY - rect.top };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onDragMove = (e) => {
    if (!drag.current) return;
    setUiState((prev) => ({
      ...prev,
      x: clamp(e.clientX - drag.current.dx, EDGE, window.innerWidth - PANEL_W - EDGE),
      y: clamp(e.clientY - drag.current.dy, 56 + EDGE, window.innerHeight - 120),
    }));
  };
  const onDragEnd = () => {
    if (!drag.current) return;
    drag.current = null;
    setUiState((prev) => { saveUi(prev); return prev; });
  };

  const verified = !isTurnstileEnabled || captchaToken || captchaBlocked;
  const canSend = input.trim().length >= 3 && !pending && verified;

  const send = async (text = input) => {
    const q = String(text).trim();
    if (q.length < 3 || pending || !verified) return;
    setInput('');
    setView('ask');
    setPending(q);
    // A follow-up while the conversation can take one; otherwise a new one.
    const conversation = await askQuestion(q, captchaToken, followable ? current.id : null);
    setCaptchaToken('');
    setCaptchaNonce((n) => n + 1);
    const last = conversation.turns[conversation.turns.length - 1];
    trackEvent('ask_beastly', { result: last.reply.result, place: 'chat', turn: conversation.turns.length });
    setUi({ current: conversation.id });
    setPending(null);
  };

  const newQuestion = () => {
    setUi({ current: null });
    setView('ask');
    inputRef.current?.focus();
  };

  // On a phone the sheet covers the page, so following a link folds it away.
  const onNavigate = () => { if (isMobile) setUi({ mode: 'minimized' }); };

  // ---------------------------------------------------------------- closed
  if (ui.mode === 'closed') {
    return (
      <button
        type="button"
        onClick={() => setUi({ mode: 'open' })}
        aria-label="Ask Beastly a question"
        title="Ask Beastly"
        data-follows-tabs
        className="fixed right-4 z-40 w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 bottom-[calc(56px+var(--safe-area-inset-bottom,0px)+12px)] md:bottom-6"
      >
        <Sparkles className="w-6 h-6" />
      </button>
    );
  }

  // ------------------------------------------------------------- minimized
  // Docked on a wide screen, minimizing tucks the sidebar into a tab on the
  // right edge (owner, 2026-11-02, Fable spec); floating and phone keep the
  // pill in the corner.
  if (ui.mode === 'minimized' && !isMobile && ui.dock === 'side') {
    return (
      <button
        type="button"
        onClick={() => setUi({ mode: 'open' })}
        aria-label="Open Ask Beastly"
        title="Open Ask Beastly"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 w-10 h-[140px] rounded-l-xl bg-secondary text-secondary-foreground border-l border-black/15 shadow-lg flex flex-col items-center justify-center gap-3 transition-all duration-200 hover:-translate-x-1 hover:brightness-110"
      >
        <span className="relative">
          <Sparkles className="w-4 h-4" />
          {pending && <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-card ring-2 ring-secondary" aria-label="Answer on its way" />}
        </span>
        <span className="text-[13px] font-body font-semibold whitespace-nowrap [writing-mode:vertical-rl] rotate-180">Ask Beastly</span>
      </button>
    );
  }

  if (ui.mode === 'minimized') {
    const lastQ = current ? current.turns[current.turns.length - 1].q : null;
    return (
      <div
        data-follows-tabs
        className="fixed right-4 z-40 flex items-center gap-1 bg-card border border-border rounded-full shadow-lg pl-3 pr-1 py-1 max-w-[calc(100vw-2rem)] bottom-[calc(56px+var(--safe-area-inset-bottom,0px)+12px)] md:bottom-6"
      >
        <button type="button" onClick={() => setUi({ mode: 'open' })} className="flex items-center gap-2 min-w-0 py-1.5 text-left">
          <Sparkles className="w-4 h-4 text-secondary flex-shrink-0" />
          <span className="text-sm font-body font-semibold text-foreground truncate max-w-[14rem]">
            {pending ? 'Looking through our guides...' : lastQ || 'Ask Beastly'}
          </span>
        </button>
        <button type="button" onClick={() => setUi({ mode: 'closed' })} aria-label="Close Ask Beastly" className="p-2 rounded-full text-muted-foreground hover:text-foreground">
          <X className="w-4 h-4" />
        </button>
      </div>
    );
  }

  // ------------------------------------------------------------------ open
  let placement;
  let style;
  if (isMobile) {
    // Sits on the tab bar rather than under it, and slides down with it when
    // the bar hides while reading (data-follows-tabs, index.css).
    placement = 'left-0 right-0 bottom-[calc(56px+var(--safe-area-inset-bottom,0px))] h-[72vh] rounded-t-2xl border-t';
  } else if (docked) {
    placement = 'right-0 top-14 bottom-0 border-l shadow-2xl ask-slide-in';
    style = { width: PANEL_W };
  } else {
    placement = 'rounded-2xl border shadow-2xl';
    const x = ui.x ?? window.innerWidth - PANEL_W - 24;
    const y = ui.y ?? window.innerHeight - PANEL_H - 24;
    style = {
      width: PANEL_W,
      height: Math.min(PANEL_H, window.innerHeight - 56 - 2 * EDGE),
      left: clamp(x, EDGE, window.innerWidth - PANEL_W - EDGE),
      top: clamp(y, 56 + EDGE, window.innerHeight - PANEL_H - EDGE),
    };
  }

  const iconBtn = 'p-1.5 rounded-lg text-muted-foreground hover:text-foreground';
  const title = view === 'history' ? 'Your questions' : 'Ask Beastly';
  const recent = [...history].reverse().slice(0, 3);
  const placeholder = current && followable ? 'Ask a follow-up, or something new' : current ? 'Ask something new' : 'Ask a question...';

  // History, newest day first, newest conversation first within a day.
  const byDay = [];
  for (const c of [...history].reverse()) {
    const day = easternDate(new Date(c.at));
    if (!byDay.length || byDay[byDay.length - 1].day !== day) byDay.push({ day, items: [] });
    byDay[byDay.length - 1].items.push(c);
  }

  return (
    <>
      {isMobile && <div className="fixed inset-0 z-[48] bg-black/30" onClick={() => setUi({ mode: 'minimized' })} aria-hidden="true" />}
      {/* One layer under the navbar and the phone tab bar (both z-50), so the
          navbar's menus always open over the chat, docked or not. */}
      <section
        data-ask-panel
        data-follows-tabs={isMobile ? '' : undefined}
        role="dialog"
        aria-label="Ask Beastly"
        className={`fixed z-[49] bg-card border-border flex flex-col ${placement}`}
        style={style}
      >
        <header
          className={`flex items-center gap-1.5 px-3 py-3 border-b border-border select-none ${!isMobile && !docked ? 'cursor-move' : ''}`}
          onPointerDown={onDragStart}
          onPointerMove={onDragMove}
          onPointerUp={onDragEnd}
          onPointerCancel={onDragEnd}
        >
          {view !== 'ask' ? (
            <button type="button" onClick={() => setView(view === 'past' ? 'history' : 'ask')} aria-label="Back" title="Back" className={iconBtn}>
              <ArrowLeft className="w-4 h-4" />
            </button>
          ) : (
            <>
              {!isMobile && !docked && <GripHorizontal className="w-4 h-4 text-muted-foreground ml-1" aria-hidden="true" />}
              <Sparkles className="w-4 h-4 text-secondary ml-1" aria-hidden="true" />
            </>
          )}
          <h2 className="font-display font-bold text-base text-foreground flex-1 ml-1">{title}</h2>
          {view !== 'history' && history.length > 0 && (
            <button type="button" onClick={() => { setView('history'); setConfirmClear(false); }} aria-label="Your questions" title="Your questions" className={iconBtn}>
              <History className="w-4 h-4" />
            </button>
          )}
          {!isMobile && (
            <button
              type="button"
              onClick={() => setUi({ dock: docked ? 'float' : 'side' })}
              aria-label={docked ? 'Float the chat' : 'Dock the chat to the side'}
              title={docked ? 'Float' : 'Dock to the side'}
              className={iconBtn}
            >
              {docked ? <PanelRightClose className="w-4 h-4" /> : <PanelRight className="w-4 h-4" />}
            </button>
          )}
          <button type="button" onClick={() => setUi({ mode: 'minimized' })} aria-label="Minimize" title="Minimize" className={iconBtn}>
            <Minus className="w-4 h-4" />
          </button>
          <button type="button" onClick={() => setUi({ mode: 'closed' })} aria-label="Close" title="Close" className={iconBtn}>
            <X className="w-4 h-4" />
          </button>
        </header>

        <div ref={bodyRef} className="flex-1 overflow-y-auto px-4 py-4">
          {/* ------------------------------------------------ the answer card */}
          {view === 'ask' && !current && !pending && (
            <div>
              <p className="text-sm font-body text-foreground mb-1">Ask about any animal on the site.</p>
              <p className="text-xs font-body text-muted-foreground mb-3">Answers come only from our guides and fact files, with links to read more.</p>
              <div className="flex flex-col items-start gap-2">
                {EXAMPLES.map((q) => (
                  <button key={q} type="button" onClick={() => send(q)} disabled={!verified}
                    className="text-left text-sm font-body text-secondary bg-secondary/10 hover:bg-secondary/15 rounded-xl px-3 py-2 disabled:opacity-50">
                    {q}
                  </button>
                ))}
              </div>
              {recent.length > 0 && (
                <div className="mt-6">
                  <p className="text-[11px] font-body font-semibold uppercase tracking-wide text-muted-foreground mb-2">Recent</p>
                  <div className="space-y-1">
                    {recent.map((c) => (
                      <button key={c.id} type="button" onClick={() => { setPastId(c.id); setView('past'); }}
                        className="w-full flex items-center gap-2 text-left text-sm font-body text-foreground hover:text-secondary py-1">
                        <span className="flex-1 truncate">{c.turns[0].q}</span>
                        <ChevronRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                      </button>
                    ))}
                  </div>
                  <button type="button" onClick={() => setView('history')} className="mt-2 text-xs font-body font-semibold text-secondary hover:underline">
                    {`All your questions (${history.length})`}
                  </button>
                </div>
              )}
            </div>
          )}

          {view === 'ask' && (current || pending) && (
            <div>
              {current && <Turns conversation={current} onNavigate={onNavigate} />}
              {pending && (
                <div className={current ? 'mt-5' : ''}>
                  <QuestionBubble>{pending}</QuestionBubble>
                  <p className="flex items-center gap-2 text-sm font-body text-muted-foreground" role="status">
                    <Loader2 className="w-4 h-4 animate-spin" /> Looking through our guides...
                  </p>
                </div>
              )}
              {current && !pending && (
                <div className="mt-5 pt-3 border-t border-border flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-body text-muted-foreground">
                    {current.closed
                      ? 'Ask your next question below.'
                      : current.turns.length >= MAX_TURNS
                        ? `That's ${MAX_TURNS} on this topic. Start a new question.`
                        : `You can ask ${MAX_TURNS - current.turns.length} more about this.`}
                  </p>
                  <button type="button" onClick={newQuestion} className="inline-flex items-center gap-1 text-xs font-body font-semibold text-secondary hover:underline">
                    <Plus className="w-3.5 h-3.5" /> New question
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ------------------------------------------------------- history */}
          {view === 'history' && (
            <div>
              {byDay.length === 0 && <p className="text-sm font-body text-muted-foreground">No questions in the last 7 days.</p>}
              {byDay.map(({ day, items }) => (
                <div key={day} className="mb-4">
                  <p className="text-[11px] font-body font-semibold uppercase tracking-wide text-muted-foreground mb-1.5">{dayLabel(day)}</p>
                  <div className="divide-y divide-border border-y border-border">
                    {items.map((c) => (
                      <div key={c.id} className="flex items-center gap-1">
                        <button type="button" onClick={() => { setPastId(c.id); setView('past'); }} className="flex-1 min-w-0 text-left py-2.5">
                          <p className="flex items-center gap-2">
                            <span className="text-sm font-body font-semibold text-foreground truncate">{c.turns[0].q}</span>
                            {c.turns.length > 1 && (
                              <span className="flex-shrink-0 text-[10px] font-body font-bold text-secondary bg-secondary/10 rounded-full px-1.5 py-0.5">{`${c.turns.length} answers`}</span>
                            )}
                          </p>
                          <p className="text-xs font-body text-muted-foreground truncate">{`${answeredBy(c)} · ${timeOf(c.at)}`}</p>
                        </button>
                        <button type="button" onClick={() => deleteConversation(c.id)} aria-label={`Delete "${c.turns[0].q}"`} title="Delete" className={iconBtn}>
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {history.length > 0 && (
                confirmClear ? (
                  <div role="alertdialog" aria-label="Clear all questions?" className="mt-2 rounded-xl bg-destructive/5 border border-destructive/20 p-3">
                    <p className="text-sm font-body text-foreground mb-2">Clear all your questions? This can't be undone.</p>
                    <div className="flex justify-end gap-2">
                      <button type="button" onClick={() => setConfirmClear(false)} className="text-sm font-body font-semibold px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground">
                        Cancel
                      </button>
                      <button type="button" onClick={() => { clearHistory(); setConfirmClear(false); setUi({ current: null }); setView('ask'); }} className="text-sm font-body font-bold px-3 py-1.5 rounded-full bg-destructive text-destructive-foreground hover:opacity-90">
                        Clear all
                      </button>
                    </div>
                  </div>
                ) : (
                  <button type="button" onClick={() => setConfirmClear(true)} className="mt-2 text-xs font-body font-semibold text-muted-foreground hover:text-destructive">
                    Clear all
                  </button>
                )
              )}
            </div>
          )}

          {/* ---------------------------------------------- one past answer */}
          {view === 'past' && past && (
            <div>
              <Turns conversation={past} onNavigate={onNavigate} showDate />
              <button type="button" onClick={newQuestion} className="mt-5 inline-flex items-center gap-1 text-xs font-body font-semibold text-secondary hover:underline">
                <Plus className="w-3.5 h-3.5" /> Ask something new
              </button>
            </div>
          )}
        </div>

        {view === 'ask' && (
          <form
            className="border-t border-border px-3 pt-3 pb-[calc(0.75rem+var(--safe-area-inset-bottom,0px))]"
            onSubmit={(e) => { e.preventDefault(); if (canSend) send(); }}
          >
            {isTurnstileEnabled && (
              <TurnstileWidget
                className="mb-2"
                onToken={setCaptchaToken}
                onUnavailable={() => setCaptchaBlocked(true)}
                resetSignal={captchaNonce}
              />
            )}
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={300}
                placeholder={placeholder}
                aria-label="Your question"
                className="flex-1 bg-background border border-border rounded-full px-4 py-2.5 text-base md:text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/40"
              />
              <button type="submit" disabled={!canSend} aria-label="Send" className="w-10 h-10 flex-shrink-0 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center disabled:opacity-40 transition-opacity">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="mt-2 text-[11px] md:text-xs font-body text-muted-foreground">
              Answers come from our guides. Not a substitute for a vet. Your questions stay in this browser for 7 days.
            </p>
          </form>
        )}
      </section>
    </>
  );
}
