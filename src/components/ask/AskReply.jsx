import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Siren, ArrowRight, Scale } from 'lucide-react';
import IconChip from '@/components/shared/IconChip';

// One Ask Beastly reply, drawn the same way in the search page box and the
// floating chat. `compact` is the chat's smaller type.
//
// Results: answered | legal | no_match come from the worker as written.
// refused (the model declined or failed) still carries the matched pages, so
// they show as plain links. capped and unavailable never read as errors: a
// sentence and a way to the normal search.

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
    <p className="bg-destructive/5 border border-destructive/20 rounded-xl px-3 py-2.5 mb-3 font-body font-bold text-sm text-foreground flex items-center gap-2">
      <IconChip icon={Siren} color="orange" size="row" />
      If this is happening now, call an exotics vet.
    </p>
  );
}

function EmergencyCard({ species, card }) {
  if (!card) return null;
  return (
    <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-3 mt-3">
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
    </div>
  );
}

function Links({ links, onNavigate }) {
  if (!links?.length) return null;
  return (
    <div className="mt-3 space-y-1.5">
      {links.map((l) => (
        <Link key={l.url} to={l.url} onClick={onNavigate} className="flex items-start gap-1.5 text-sm font-body font-semibold text-secondary hover:underline">
          <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" /> <span>{l.title}</span>
        </Link>
      ))}
    </div>
  );
}

const searchLink = (q) => `/search/${encodeURIComponent(q)}/`;

export default function AskReply({ question, reply, compact = false, hasResults = false, onNavigate }) {
  const card = useEmergencyCard(reply?.species?.guideId, Boolean(reply?.emergency && reply?.result === 'answered'));
  const text = compact ? 'text-sm' : 'text-base';
  const muted = `font-body ${compact ? 'text-sm' : 'text-sm'} text-muted-foreground`;
  if (!reply) return null;

  if (reply.result === 'answered') {
    return (
      <div aria-live="polite">
        {reply.emergency && <VetLine />}
        <p className="font-display font-bold text-sm text-secondary flex items-center gap-1.5 mb-1.5">
          <Sparkles className="w-4 h-4" /> Beastly says
        </p>
        <p className={`font-body ${text} text-foreground leading-relaxed`}>{reply.answer}</p>
        <Links links={reply.links} onNavigate={onNavigate} />
        {reply.emergency && <EmergencyCard species={reply.species} card={card} />}
        <p className="mt-3 text-[11px] font-body text-muted-foreground">
          Answers come from our guides. Not a substitute for a vet.
        </p>
      </div>
    );
  }

  if (reply.result === 'legal') {
    return (
      <div aria-live="polite">
        <p className="font-display font-bold text-sm text-foreground flex items-center gap-2 mb-1.5">
          <IconChip icon={Scale} color="gold" size="row" /> Pet laws change, so we link the source
        </p>
        <p className={muted}>Our law pages are checked every month and cite the statute for each state. Start here:</p>
        <Links links={reply.links} onNavigate={onNavigate} />
      </div>
    );
  }

  if (reply.result === 'no_match') {
    return (
      <p className={muted} aria-live="polite">
        {compact || !hasResults ? "We don't cover that yet." : "We don't cover that yet. The search results below are the closest we have."}
        {compact && question && (
          <> <Link to={searchLink(question)} onClick={onNavigate} className="font-semibold text-secondary hover:underline">Search the site instead</Link>.</>
        )}
      </p>
    );
  }

  if (reply.result === 'refused' && reply.links?.length) {
    return (
      <div aria-live="polite">
        <p className={muted}>These pages cover it:</p>
        <Links links={reply.links} onNavigate={onNavigate} />
      </div>
    );
  }

  // capped, unavailable, or refused with nothing matched. The search page
  // box shows nothing here: its results are already on screen.
  if (!compact) return null;
  return (
    <p className={muted} aria-live="polite">
      {reply.result === 'capped'
        ? "That's all the questions for now. Try again in a little while, or "
        : "I couldn't look that up right now. Try again in a moment, or "}
      <Link to={searchLink(question)} onClick={onNavigate} className="font-semibold text-secondary hover:underline">search the site</Link>.
    </p>
  );
}
