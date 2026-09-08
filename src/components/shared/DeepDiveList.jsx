import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { rememberDeepDiveGuide } from '@/lib/data/deepDiveContext';
import { DEEP_DIVE_LIMIT, isSharedDeepDiveArticle } from '@/lib/data/relatedArticles';

// The Deep Dive sidebar, shared by GuideDetail, EncyclopediaAnimal and the blog
// sidebar, which all built the same list from the same data and rendered it
// with the same markup.
//
// It used to be one block containing everything, which stopped working as the
// series filled out: budgie and cockatiel carry 26 related articles each, and
// 27 of 106 guides are over twelve. A single card that long is not a list a
// reader scans, and it pushes the short story, fun facts and care package cards
// off the screen underneath it.
//
// Splitting it in two is better than truncating it, because the list was
// already two different things wearing one heading:
//
//   Deep Dive        this species' own articles. Five or six for most, twelve
//                    for the well-covered ones. Cost, handling, health,
//                    setup, feeding, enrichment, plus any species-specific
//                    extras like budgie-cere-color or bearded-dragon-brumation.
//   Health and More  shared care material that applies to the whole class.
//                    bird-quarantine-guide sits under 10 bird guides,
//                    reptile-salmonella-hygiene-guide under 36. Genuinely
//                    useful, and not what someone reading about conures is
//                    looking for first.
//
// The split is data, not a guess: isSharedDeepDiveArticle counts how many
// guides list an article. Exactly one means it belongs to this species; more
// than one means it is shared.
//
// A generic second heading rather than "More on Birds" on purpose. The class
// name lives in the guide index, which the blog route does not import and
// should not start importing 32KB for a label.
const SHARED_TITLE = '🩺 Health and More';
const OWN_TITLE = '📰 Deep Dive';

// One section: the visible slice, the overflow, and the toggle between them.
//
// The overflow is rendered and hidden rather than left out of the tree. These
// are internal links to the husbandry series, and dropping twenty of them from
// a guide page would quietly cut its outbound links right after
// scripts/audit-internal-links.mjs was written to watch for exactly that. In
// the DOM behind a toggle they still count; sliced out of the array they do not.
function Section({ title, articles, renderLink }) {
  const [expanded, setExpanded] = useState(false);
  if (articles.length === 0) return null;

  const visible = articles.slice(0, DEEP_DIVE_LIMIT);
  const overflow = articles.slice(DEEP_DIVE_LIMIT);

  return (
    <div className="bg-card border border-border rounded-2xl p-5">
      <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide mb-3">
        {title}
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

// onSelect is how the blog sidebar navigates: it swaps the article in place
// rather than routing, so it needs a plain anchor whose default is prevented.
// Guide and encyclopedia pages pass nothing and get a real router Link. Both
// render identically; only the navigation differs.
// ownTitle lets the after-article block on blog posts label the species list
// "More on the Argentine Tegu" while the sidebars keep "Deep Dive".
// show: 'both' (default), 'own' or 'shared', so a caller can place the two
// sections in different spots (the blog puts the species list after the FAQ
// on phones and keeps the shared list in the sidebar).
export default function DeepDiveList({ articles, guideId, onSelect, ownTitle = OWN_TITLE, show = 'both' }) {
  if (!articles || articles.length === 0) return null;

  const slugOf = article => article.slug?.current || article._id || article.id;
  const own = articles.filter(a => !isSharedDeepDiveArticle(slugOf(a)));
  const shared = articles.filter(a => isSharedDeepDiveArticle(slugOf(a)));

  const label = article => (article.emoji ? `${article.emoji} ` : '') + article.title;
  const textClass = 'text-xs font-body font-bold text-foreground group-hover:text-secondary transition-colors leading-snug';

  const renderLink = article => {
    const href = `/blog/${slugOf(article)}/`;
    // Carries which guide this click came from, so the next article's own Deep
    // Dive can continue this exact list instead of guessing. See
    // deepDiveContext.js. This is what keeps a reader who wandered into
    // bird-quarantine-guide from a conure page still seeing conure articles.
    const remember = () => { if (guideId) rememberDeepDiveGuide(guideId); };

    if (onSelect) {
      return (
        <a
          key={article._id || article.id}
          href={href}
          onClick={(e) => { e.preventDefault(); remember(); onSelect(article); }}
          className="group block"
        >
          <p className={textClass}>{label(article)}</p>
        </a>
      );
    }
    return (
      <Link key={article._id || article.id} to={href} onClick={remember} className="group block">
        <p className={textClass}>{label(article)}</p>
      </Link>
    );
  };

  return (
    <>
      {show !== 'shared' && <Section title={ownTitle} articles={own} renderLink={renderLink} />}
      {show !== 'own' && <Section title={SHARED_TITLE} articles={shared} renderLink={renderLink} />}
    </>
  );
}
