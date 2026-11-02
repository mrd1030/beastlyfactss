import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Sparkles, X, Minus, PanelRight, PanelRightClose, Send, Loader2, Trash2, GripHorizontal } from 'lucide-react';
import TurnstileWidget, { isTurnstileEnabled } from '@/components/shared/TurnstileWidget';
import AskReply from '@/components/ask/AskReply';
import { ASK_HISTORY_EVENT, askQuestion, clearHistory, readHistory } from '@/lib/askBeastly';
import { useIsMobileViewport } from '@/lib/hooks/useIsMobileViewport';
import { trackEvent } from '@/lib/analytics';

// Ask Beastly's floating chat, on every page (docs/ASK_BEASTLY.md).
//
//   closed     the round button in the corner, above the phone tab bar
//   open       phone: a sheet from the bottom. Wider screens: a floating panel
//              dragged by its header, or docked down the right edge as a
//              sidebar over the page (the page does not shift, so an article
//              stays centered; owner, 2026-11-02)
//   minimized  a small bar in the corner that reopens it
//
// Each question is answered on its own (no follow-up memory). Today's
// questions are kept in this browser only (lib/askBeastly.js) and shared with
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
    return { mode: 'closed', dock: 'float', x: null, y: null, ...JSON.parse(localStorage.getItem(UI_KEY) || '{}') };
  } catch {
    return { mode: 'closed', dock: 'float', x: null, y: null };
  }
}
function saveUi(ui) {
  try { localStorage.setItem(UI_KEY, JSON.stringify(ui)); } catch { /* per visit only */ }
}

const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), Math.max(lo, hi));

export default function AskBeastlyChat() {
  const isMobile = useIsMobileViewport();
  const [ui, setUiState] = useState(readUi);
  const [history, setHistory] = useState(readHistory);
  const [pending, setPending] = useState(null);
  // Clearing cannot be undone, so the trash button asks first.
  const [confirmClear, setConfirmClear] = useState(false);
  const [input, setInput] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaNonce, setCaptchaNonce] = useState(0);
  const [captchaBlocked, setCaptchaBlocked] = useState(false);
  const listRef = useRef(null);
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

  // Newest message in view.
  useEffect(() => {
    if (open && listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [open, history.length, pending]);

  useEffect(() => {
    if (open && !isMobile) inputRef.current?.focus();
  }, [open, isMobile]);

  // Escape minimizes.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setUi({ mode: 'minimized' }); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, setUi]);

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

  const canSend = input.trim().length >= 3 && !pending
    && (!isTurnstileEnabled || captchaToken || captchaBlocked);

  const send = async (text = input) => {
    const q = String(text).trim();
    if (q.length < 3 || pending) return;
    if (isTurnstileEnabled && !captchaToken && !captchaBlocked) return;
    setInput('');
    setPending(q);
    const entry = await askQuestion(q, captchaToken);
    setCaptchaToken('');
    setCaptchaNonce((n) => n + 1);
    trackEvent('ask_beastly', { result: entry.reply.result, place: 'chat' });
    setPending(null);
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
  if (ui.mode === 'minimized') {
    const last = history[history.length - 1];
    return (
      <div
        data-follows-tabs
        className="fixed right-4 z-40 flex items-center gap-1 bg-card border border-border rounded-full shadow-lg pl-3 pr-1 py-1 max-w-[calc(100vw-2rem)] bottom-[calc(56px+var(--safe-area-inset-bottom,0px)+12px)] md:bottom-6"
      >
        <button type="button" onClick={() => setUi({ mode: 'open' })} className="flex items-center gap-2 min-w-0 py-1.5 text-left">
          <Sparkles className="w-4 h-4 text-secondary flex-shrink-0" />
          <span className="text-sm font-body font-semibold text-foreground truncate max-w-[14rem]">
            {pending ? 'Looking through our guides...' : last ? last.q : 'Ask Beastly'}
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
    placement = 'right-0 top-14 bottom-0 border-l shadow-2xl';
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
          className={`flex items-center gap-2 px-4 py-3 border-b border-border select-none ${!isMobile && !docked ? 'cursor-move' : ''}`}
          onPointerDown={onDragStart}
          onPointerMove={onDragMove}
          onPointerUp={onDragEnd}
          onPointerCancel={onDragEnd}
        >
          {!isMobile && !docked && <GripHorizontal className="w-4 h-4 text-muted-foreground" aria-hidden="true" />}
          <Sparkles className="w-4 h-4 text-secondary" aria-hidden="true" />
          <h2 className="font-display font-bold text-base text-foreground flex-1">Ask Beastly</h2>
          {history.length > 0 && (
            <button type="button" onClick={() => setConfirmClear(true)} aria-label="Clear today's questions" title="Clear today's questions" className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground">
              <Trash2 className="w-4 h-4" />
            </button>
          )}
          {!isMobile && (
            <button
              type="button"
              onClick={() => setUi({ dock: docked ? 'float' : 'side' })}
              aria-label={docked ? 'Float the chat' : 'Dock the chat to the side'}
              title={docked ? 'Float' : 'Dock to the side'}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground"
            >
              {docked ? <PanelRightClose className="w-4 h-4" /> : <PanelRight className="w-4 h-4" />}
            </button>
          )}
          <button type="button" onClick={() => setUi({ mode: 'minimized' })} aria-label="Minimize" title="Minimize" className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground">
            <Minus className="w-4 h-4" />
          </button>
          <button type="button" onClick={() => setUi({ mode: 'closed' })} aria-label="Close" title="Close" className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        </header>

        {confirmClear && history.length > 0 && (
          <div role="alertdialog" aria-label="Clear today's questions?" className="flex flex-wrap items-center gap-2 px-4 py-2.5 border-b border-border bg-destructive/5">
            <p className="flex-1 min-w-[10rem] text-sm font-body text-foreground">Clear today's questions? This can't be undone.</p>
            <button type="button" onClick={() => setConfirmClear(false)} className="text-sm font-body font-semibold px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground">
              Cancel
            </button>
            <button type="button" onClick={() => { clearHistory(); setConfirmClear(false); }} className="text-sm font-body font-bold px-3 py-1.5 rounded-full bg-destructive text-destructive-foreground hover:opacity-90">
              Clear
            </button>
          </div>
        )}

        <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {history.length === 0 && !pending && (
            <div>
              <p className="text-sm font-body text-foreground mb-1">Ask about any animal on the site.</p>
              <p className="text-xs font-body text-muted-foreground mb-3">Answers come only from our guides and fact files, with links to read more.</p>
              <div className="flex flex-col items-start gap-2">
                {EXAMPLES.map((q) => (
                  <button key={q} type="button" onClick={() => send(q)} disabled={!!pending || (isTurnstileEnabled && !captchaToken && !captchaBlocked)}
                    className="text-left text-sm font-body text-secondary bg-secondary/10 hover:bg-secondary/15 rounded-xl px-3 py-2 disabled:opacity-50">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {history.map((item) => (
            <div key={item.id} className="space-y-2">
              <p className="ml-8 bg-secondary/10 text-foreground text-sm font-body rounded-2xl rounded-br-md px-3 py-2">{item.q}</p>
              <div className="mr-4">
                <AskReply question={item.q} reply={item.reply} compact onNavigate={onNavigate} />
              </div>
            </div>
          ))}

          {pending && (
            <div className="space-y-2">
              <p className="ml-8 bg-secondary/10 text-foreground text-sm font-body rounded-2xl rounded-br-md px-3 py-2">{pending}</p>
              <p className="flex items-center gap-2 text-sm font-body text-muted-foreground" role="status">
                <Loader2 className="w-4 h-4 animate-spin" /> Looking through our guides...
              </p>
            </div>
          )}
        </div>

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
              placeholder="Ask a question..."
              aria-label="Your question"
              className="flex-1 bg-background border border-border rounded-full px-4 py-2.5 text-base md:text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50"
            />
            <button type="submit" disabled={!canSend} aria-label="Send" className="w-10 h-10 flex-shrink-0 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center disabled:opacity-50">
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="mt-2 text-[11px] font-body text-muted-foreground">
            Today's questions stay in this browser and clear at midnight.
          </p>
        </form>
      </section>
    </>
  );
}
