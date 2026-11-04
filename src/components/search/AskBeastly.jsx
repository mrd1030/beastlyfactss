import React, { useEffect, useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import TurnstileWidget, { isTurnstileEnabled } from '@/components/shared/TurnstileWidget';
import AskReply, { BetaTag } from '@/components/ask/AskReply';
import { askQuestion, hasAskPass, isQuestion } from '@/lib/askBeastly';
import { trackEvent } from '@/lib/analytics';

export { isQuestion };

// Ask Beastly on the search page (docs/ASK_BEASTLY.md): the search box's
// query, asked as a question, with the answer drawn full width above the
// results. The floating chat (components/ask/AskBeastlyChat.jsx) is the same
// thing on every page; both share today's history (lib/askBeastly.js).
//
// Anything that is not an answer (no match, a limit, a refusal, an outage)
// leaves the reader with the normal search results below. No error shows.
// The answer arrives whole, not streamed: the worker checks it first.

export default function AskBeastly({ query, askSignal = 0, onReply, hasResults = false }) {
  const [state, setState] = useState({ status: 'idle' }); // idle | asking | done
  const [askedFor, setAskedFor] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaNonce, setCaptchaNonce] = useState(0);
  const [captchaBlocked, setCaptchaBlocked] = useState(false);
  // The chat's 30-minute pass covers this box too (askBeastly.js).
  const passed = hasAskPass();

  const canAsk = isQuestion(query) && state.status !== 'asking'
    && (!isTurnstileEnabled || passed || captchaToken || captchaBlocked);

  const ask = async () => {
    const question = query.trim();
    if (!canAsk || question === askedFor) return;
    setAskedFor(question);
    setState({ status: 'asking' });
    // The search page asks one question at a time: always a new conversation.
    const conversation = await askQuestion(question, captchaToken);
    const entry = conversation.turns[conversation.turns.length - 1];
    // A Turnstile token is single use: the next question gets a fresh one.
    setCaptchaToken('');
    setCaptchaNonce((n) => n + 1);
    trackEvent('ask_beastly', { result: entry.reply.result, place: 'search' });
    setState({ status: 'done', entry });
    onReply?.(entry.reply.result);
  };

  // The parent bumps askSignal when Enter is pressed in the search box.
  useEffect(() => {
    if (askSignal) ask();
  }, [askSignal]);

  // A cleared box clears the answer.
  useEffect(() => {
    if (!query.trim()) {
      setState({ status: 'idle' });
      setAskedFor('');
      onReply?.(null);
    }
  }, [query]);

  const showAsk = isQuestion(query) && query.trim() !== askedFor;
  const entry = state.status === 'done' ? state.entry : null;
  const boxed = entry && ['answered', 'fact', 'legal'].includes(entry.reply.result)
    || (entry?.reply.result === 'refused' && entry.reply.links?.length);

  return (
    <div className="mt-3">
      {showAsk && (
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={ask}
            disabled={!canAsk}
            className="inline-flex items-center gap-1.5 bg-secondary text-secondary-foreground font-body font-bold text-sm px-4 py-2 rounded-full shadow-sm hover:opacity-90 disabled:opacity-50 transition-opacity"
          >
            <Sparkles className="w-4 h-4" /> Ask Beastly <BetaTag inverse />
          </button>
          <span className="text-xs font-body text-muted-foreground">Get a short answer from our guides.</span>
        </div>
      )}
      {showAsk && isTurnstileEnabled && !passed && (
        <TurnstileWidget
          className="mt-2"
          onToken={setCaptchaToken}
          onUnavailable={() => setCaptchaBlocked(true)}
          resetSignal={captchaNonce}
        />
      )}

      {state.status === 'asking' && (
        <div className="mt-4 flex items-center gap-2 text-sm font-body text-muted-foreground" role="status">
          <Loader2 className="w-4 h-4 animate-spin" /> Looking through our guides...
        </div>
      )}

      {entry && (
        <div className={boxed ? 'mt-4 bg-card border border-secondary/30 rounded-2xl p-5 shadow-sm' : 'mt-4'}>
          <AskReply question={entry.q} reply={entry.reply} hasResults={hasResults} />
        </div>
      )}
    </div>
  );
}
