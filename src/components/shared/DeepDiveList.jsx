import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { rememberDeepDiveGuide } from '@/lib/data/deepDiveContext';

// The "Deep Dive" sidebar block, shared by GuideDetail and EncyclopediaAnimal
// because both built the same list from the same data and rendered it with the
// same markup.
//
// Both used to render every related article. That was fine when a guide had
// five or six, and stopped being fine as the series filled out: the bird guides
// now carry 25 or 26 each, and 27 of 106 guides are over twelve. A sidebar card
// that runs 26 entries long is not a list a reader scans, it is a wall they
// scroll past, and it pushes everything below it (short story, fun facts, care
// package) off the screen entirely.
//
// Eight, chosen against the actual distribution rather than by feel. Across
// 106 guides: min 2, p25 8, median 10, p75 13, max 26. Six would have been the
// tidy answer (it is exactly the standard per-species set: cost, handling,
// health-issues, tank-setup, feeding, enrichment) but it puts a button on 87%
// of guides, hiding entries on pages that were never the problem. Eight shows
// that standard set plus a couple of extras, leaves a third of guides with no
// button at all, and still cuts the bird guides from 26 to 8.
//
// Retune by changing this one number: 6 puts a button on 87% of guides, 8 on
// 66%, 10 on 47%, 12 on 25%.
const DEFAULT_VISIBLE = 8;

// The overflow is rendered and hidden rather than left out of the tree. These
// are internal links to the husbandry series, and dropping twenty of them from
// a guide page would quietly cut its outbound links right after
// scripts/audit-internal-links.mjs was written to watch for exactly that. In
// the DOM behind a toggle they still count; sliced out of the array they do
// not.
export default function DeepDiveList({ articles, guideId }) {
  const [expanded, setExpanded] = useState(false);

  if (!articles || articles.length === 0) return null;

  const visible = articles.slice(0, DEFAULT_VISIBLE);
  const overflow = articles.slice(DEFAULT_VISIBLE);

  const renderLink = article => (
    // Carries which guide this click came from, so the article's own Deep Dive
    // block can continue this exact list instead of guessing. See
    // deepDiveContext.js.
    <Link
      key={article._id}
      to={`/blog/${article.slug.current}/`}
      onClick={() => rememberDeepDiveGuide(guideId)}
      className="group block"
    >
      <p className="text-xs font-body font-bold text-foreground group-hover:text-secondary transition-colors leading-snug">
        {(article.emoji ? `${article.emoji} ` : '') + article.title}
      </p>
    </Link>
  );

  return (
    <div className="bg-card border border-border rounded-2xl p-5">
      <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide mb-3">
        📰 Deep Dive
      </p>
      <div className="space-y-3">
        {visible.map(renderLink)}
        {overflow.length > 0 && (
          <div className="space-y-3" hidden={!expanded}>
            {overflow.map(renderLink)}
          </div>
        )}
      </div>
      {overflow.length > 0 && (
        <button
          type="button"
          onClick={() => setExpanded(v => !v)}
          aria-expanded={expanded}
          className="mt-3 text-xs font-body font-semibold text-secondary hover:underline"
        >
          {expanded ? 'Show fewer' : `Show all ${articles.length}`}
        </button>
      )}
    </div>
  );
}
