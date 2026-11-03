import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Siren, ArrowRight, Scale } from 'lucide-react';
import IconChip from '@/components/shared/IconChip';
import { STATUS_BUCKETS, bucketFor } from '@/lib/legalBuckets';
import { formatDay } from '@/lib/utils/verifiedDates';

// One Ask Beastly reply, drawn the same way in the search page box and the
// floating chat. `compact` is the chat's smaller type.
//
// Results: answered | fact | legal | no_match come from the worker as written.
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

// The search page matches the whole typed text against titles, summaries and
// tags, so a full question finds nothing there. When the reply names the
// animal, the link searches for the animal instead, which lists its guides.
const searchLink = (q, reply) => `/search/${encodeURIComponent(reply?.species?.name || q)}/`;

// One animal in one state, straight from the legal matrix (the worker never
// sends a legal question to the model). Laid out like a state row on the
// animal law page, with the map's own label and blurb for the status. An
// unclear rule shows the label and the links only: its long note is the
// law page's to explain.
function LegalCell({ cell }) {
  // The status, its one-line meaning and the cite show first; the statute
  // wording, the note and the rest open under "Why", since a full cell runs
  // a dozen lines on a phone.
  const [open, setOpen] = useState(false);
  const bucket = STATUS_BUCKETS[bucketFor(cell.status)];
  const unclear = bucket.key === 'unclear';
  const checked = formatDay(cell.verifiedOn);
  const painted = bucket.fill !== 'transparent';
  return (
    <div className="mt-1">
      <p className="font-body font-bold text-sm text-foreground">{`${cell.animal} in ${cell.state}`}</p>
      <p className="mt-1.5 flex flex-wrap items-center gap-2">
        <span
          className={`text-xs font-body font-bold px-2 py-0.5 rounded-full ${painted ? '' : 'border border-border text-foreground'}`}
          style={painted ? { background: bucket.fill, color: bucket.text } : undefined}
        >
          {bucket.label}
        </span>
      </p>
      <p className="mt-1.5 text-sm font-body text-muted-foreground">{bucket.blurb}</p>
      {!unclear && cell.status && cell.cite && <p className="mt-2 text-xs font-body font-semibold text-foreground">{cell.cite}</p>}
      {!unclear && cell.status && (cell.quote || cell.note || cell.grandfathered || cell.localOverride) && (
        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="mt-1.5 text-xs font-body font-semibold text-secondary hover:underline">
          {open ? 'Hide why' : 'Why'}
        </button>
      )}
      {!unclear && cell.status && open && (
        <>
          {cell.quote && (
            <blockquote className="mt-1.5 border-l-2 border-primary/40 pl-3 text-xs font-body italic text-muted-foreground leading-relaxed">
              {cell.quote}
            </blockquote>
          )}
          {cell.note && <p className="mt-1.5 text-xs font-body text-muted-foreground leading-relaxed">{cell.note}</p>}
          {cell.grandfathered && (
            <p className="mt-1.5 text-xs font-body text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Existing owners: </span>{cell.grandfathered}
            </p>
          )}
          {cell.localOverride && (
            <p className="mt-1.5 text-xs font-body text-muted-foreground leading-relaxed">
              This state allows cities and counties to prohibit what state law permits, so check your local ordinance too.
            </p>
          )}
        </>
      )}
      {checked && cell.status && (
        <p className="mt-1.5 text-xs font-body text-muted-foreground">{`Checked against the published text on ${checked}.`}</p>
      )}
    </div>
  );
}

// showDisclaimer: the "not a substitute for a vet" line under an answer. The
// chat shows it once under its input instead of under every answer.
export default function AskReply({ question, reply, compact = false, hasResults = false, onNavigate, showDisclaimer = !compact }) {
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
        {showDisclaimer && (
          <p className="mt-3 text-[11px] font-body text-muted-foreground">
            Answers come from our guides. Not a substitute for a vet.
          </p>
        )}
      </div>
    );
  }

  // One fact, as written: a lead line naming the animal and the fact's
  // title (linked to its page), the fact, then the links. An animal with no
  // facts gets a line saying so, with its care guide when it has one, and a
  // fact of another animal under it.
  if (reply.result === 'fact' && reply.fact) {
    const { fact, missing } = reply;
    return (
      <div aria-live="polite">
        {missing && (
          <p className={`${muted} mb-2`}>
            {missing.seen ? `That was the only ${missing.name.toLowerCase()} fact so far` : `No ${missing.name.toLowerCase()} facts yet`}
            {missing.url && (
              <>
                {', but its '}
                <Link to={missing.url} onClick={onNavigate} className="font-semibold text-secondary hover:underline">care guide</Link>
                {' is here'}
              </>
            )}
            {'. Here is one from another animal:'}
          </p>
        )}
        <p className="font-display font-bold text-sm text-secondary flex items-start gap-1.5 mb-1.5">
          <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <Link to={fact.url} onClick={onNavigate} className="hover:underline">{`${fact.animal || 'Animal'} fact: ${fact.title}`}</Link>
        </p>
        <p className={`font-body ${text} text-foreground leading-relaxed`}>{reply.answer}</p>
        <Links links={reply.links} onNavigate={onNavigate} />
      </div>
    );
  }

  if (reply.result === 'legal') {
    return (
      <div aria-live="polite">
        <p className="font-display font-bold text-sm text-foreground flex items-center gap-2 mb-1.5">
          <IconChip icon={Scale} color="gold" size="row" /> {reply.legal ? 'From our exotic pet law matrix' : 'Pet laws change, so we link the source'}
        </p>
        {reply.legal ? (
          <LegalCell cell={reply.legal} />
        ) : (
          <p className={muted}>Our law pages are checked every month and cite the statute for each state. Start here:</p>
        )}
        <Links links={reply.links} onNavigate={onNavigate} />
      </div>
    );
  }

  // "He's acting weird" with no animal named: the worker asks which one. In
  // the chat the reader's next message carries the question; it does not use
  // up one of the conversation's answers.
  // A thank-you gets a short one back, no links.
  if (reply.result === 'clarify' || reply.result === 'thanks' || reply.result === 'greeting') {
    return (
      <p className={`font-body ${text} text-foreground`} aria-live="polite">{reply.answer}</p>
    );
  }

  // "What animals do you cover": the count, a group's listing or the whole
  // catalog, with the category pages as links.
  if (reply.result === 'catalog') {
    return (
      <div aria-live="polite">
        <p className={`font-body ${text} text-foreground leading-relaxed`}>{reply.answer}</p>
        <Links links={reply.links} onNavigate={onNavigate} />
      </div>
    );
  }

  // "Where is it" questions: the worker answers with the species' hub.
  if (reply.result === 'navigate') {
    return (
      <div aria-live="polite">
        <p className={`font-body ${text} text-foreground`}>
          {`Everything we have on the ${reply.species?.name || 'animal'} starts here:`}
        </p>
        <Links links={reply.links} onNavigate={onNavigate} />
      </div>
    );
  }

  // Not in the guides: said gently, with something to try, and a vet line
  // when the question sounds like something is wrong with the animal.
  if (reply.result === 'no_match') {
    return (
      <div className={muted} aria-live="polite">
        <p>
          {"That one isn't in our guides yet. "}
          {compact || !hasResults ? 'Try asking it another way, or ' : 'The search results below are the closest we have, or try asking it another way.'}
          {(compact || !hasResults) && question && (
            <Link to={searchLink(question, reply)} onClick={onNavigate} className="font-semibold text-secondary hover:underline">search the site</Link>
          )}
          {(compact || !hasResults) && (question ? '.' : 'search the site.')}
        </p>
        {reply.health && <p className="mt-1.5">If something seems wrong with your pet, a vet is the safest call.</p>}
      </div>
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
      <Link to={searchLink(question, reply)} onClick={onNavigate} className="font-semibold text-secondary hover:underline">search the site</Link>.
    </p>
  );
}
