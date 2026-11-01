import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Siren, ArrowRight, Loader2, Scale } from 'lucide-react';
import TurnstileWidget, { isTurnstileEnabled } from '@/components/shared/TurnstileWidget';
import IconChip from '@/components/shared/IconChip';
import { trackEvent } from '@/lib/analytics';

// Ask Beastly (docs/ASK_BEASTLY.md): the search box's query, asked as a
// question. POST /api/ask answers only from our own pages, so anything that
// is not an answer (no match, a limit, a refusal, an outage) quietly leaves
// the reader with the normal search results below. No error ever shows.
//
// The answer arrives whole, not streamed: the worker checks it (dashes,
// links, a cut sentence) before anyone sees it.

const MIN_WORDS = 3;
export const isQuestion = (q) => q.trim().split(/\s+/).filter(Boolean).length >= MIN_WORDS;

// The emergency card lives on the species' router hub. The guide data is
// large, so it loads only when an answer needs it.
function useEmergencyCard(guideId, active) {
  const [card, setCard] = useState(null);
  useEffect(() => {
    let cancelled = false;
    setCard(null);
    if (!active || !guideId) return undefined;
    import('@/lib/data/guides').then(({ allGuides }) => {
      if (cancelled) return;
      const guide = allGuides.find((g) => g.id === guideId);
      if (guide?.emergencyCard) setCard({ ...guide.emergencyCard, guideId, name: guide.name });
    }).catch(() => {});
    return () => { cancelled = true; };
  }, [guideId, active]);
  return card;
}

// The vet line goes above the answer; the species' card (often a dozen or
// more signs) goes under it, so the answer stays on the first screen.
function VetLine() {
  return (
    <p className="bg-destructive/5 border border-destructive/20 rounded-xl px-4 py-3 mb-4 font-body font-bold text-sm text-foreground flex items-center gap-2">
      <IconChip icon={Siren} color="orange" size="row" />
      If this is happening now, call an exotics vet.
    </p>
  );
}

function EmergencyCard({ species, card }) {
  if (!card) return null;
  return (
    <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4 mt-4">
      {(
        <>
          <p className="text-xs text-muted-foreground font-body mb-2">
            {card.heading || 'Call the vet now if you see any of these.'}
          </p>
          <ul className="space-y-1">
            {card.callNow.map((item) => (
              <li key={item} className="flex items-start gap-2 text-xs text-foreground font-body">
                <span aria-hidden="true" className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link to={`/guides/${card.guideId}/`} className="inline-block text-xs font-body font-semibold text-secondary hover:underline mt-2">
            {`The full ${species?.name || card.name} emergency card →`}
          </Link>
        </>
      )}
    </div>
  );
}

export default function AskBeastly({ query, askSignal = 0, onReply, hasResults = false }) {
  const [state, setState] = useState({ status: 'idle' }); // idle | asking | done
  const [askedFor, setAskedFor] = useState('');
  const [captchaToken, setCaptchaToken] = useState('');
  const [captchaNonce, setCaptchaNonce] = useState(0);
  const [captchaBlocked, setCaptchaBlocked] = useState(false);

  const reply = state.status === 'done' ? state.reply : null;
  const card = useEmergencyCard(reply?.species?.guideId, Boolean(reply?.emergency));
  const canAsk = isQuestion(query) && state.status !== 'asking'
    && (!isTurnstileEnabled || captchaToken || captchaBlocked);

  const ask = async () => {
    const question = query.trim();
    if (!canAsk || question === askedFor) return;
    setAskedFor(question);
    setState({ status: 'asking' });
    let data = { result: 'unavailable' };
    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ question, captcha: captchaToken }),
      });
      data = await res.json();
    } catch {
      // Network trouble reads the same as no answer: the search results stay.
    } finally {
      // A Turnstile token is single use: the next question gets a fresh one.
      setCaptchaToken('');
      setCaptchaNonce((n) => n + 1);
    }
    trackEvent('ask_beastly', { result: data.result || 'unavailable' });
    setState({ status: 'done', reply: data });
    onReply?.(data.result);
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
            <Sparkles className="w-4 h-4" /> Ask Beastly
          </button>
          <span className="text-xs font-body text-muted-foreground">Get a short answer from our guides.</span>
        </div>
      )}
      {showAsk && isTurnstileEnabled && (
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

      {reply?.result === 'answered' && (
        <div className="mt-4 bg-card border border-secondary/30 rounded-2xl p-5 shadow-sm" aria-live="polite">
          {reply.emergency && <VetLine />}
          <p className="font-display font-bold text-sm text-secondary flex items-center gap-1.5 mb-2">
            <Sparkles className="w-4 h-4" /> Beastly says
          </p>
          <p className="font-body text-base text-foreground leading-relaxed">{reply.answer}</p>
          {reply.links?.length > 0 && (
            <div className="mt-4 space-y-1.5">
              {reply.links.map((l) => (
                <Link key={l.url} to={l.url} className="flex items-center gap-1.5 text-sm font-body font-semibold text-secondary hover:underline">
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" /> {l.title}
                </Link>
              ))}
            </div>
          )}
          {reply.emergency && <EmergencyCard species={reply.species} card={card} />}
          <p className="mt-4 text-[11px] font-body text-muted-foreground">
            Answers come from our guides. Not a substitute for a vet.
          </p>
        </div>
      )}

      {reply?.result === 'legal' && (
        <div className="mt-4 bg-card border border-border rounded-2xl p-5 shadow-sm" aria-live="polite">
          <p className="font-display font-bold text-sm text-foreground flex items-center gap-2 mb-2">
            <IconChip icon={Scale} color="gold" size="row" /> Pet laws change, so we link the source
          </p>
          <p className="font-body text-sm text-muted-foreground mb-3">
            Our law pages are checked every month and cite the statute for each state. Start here:
          </p>
          <div className="space-y-1.5">
            {reply.links.map((l) => (
              <Link key={l.url} to={l.url} className="flex items-center gap-1.5 text-sm font-body font-semibold text-secondary hover:underline">
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" /> {l.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      {reply?.result === 'no_match' && (
        <p className="mt-4 text-sm font-body text-muted-foreground" aria-live="polite">
          {hasResults ? "We don't cover that yet. The search results below are the closest we have." : "We don't cover that yet."}
        </p>
      )}
    </div>
  );
}
