import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { beastfiles, beastfileGroups } from '@/lib/data/beastlypedia';
import BeastfileCard from '@/components/beastlypedia/BeastfileCard';

const CANONICAL = 'https://beastlyfacts.com/beastlypedia/';
const DESCRIPTION =
  'Wild animal profiles from Beastly Facts. Short, curious guides to how remarkable animals live, where they are found, and what makes each one strange.';

export default function Beastlypedia() {
  const { groupSlug } = useParams();
  const navigate = useNavigate();

  const activeGroup = useMemo(() => {
    if (!groupSlug) return 'All';
    return beastfileGroups.find((g) => g.slug === groupSlug)?.name || 'All';
  }, [groupSlug]);

  const [query, setQuery] = useState('');

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return beastfiles.filter((b) => {
      if (activeGroup !== 'All' && b.group !== activeGroup) return false;
      if (!q) return true;
      return (
        b.name.toLowerCase().includes(q) ||
        b.scientific.toLowerCase().includes(q) ||
        (b.alsoKnownAs || []).some((n) => n.toLowerCase().includes(q))
      );
    });
  }, [activeGroup, query]);

  // Only groups that actually have entries get a chip. Showing an empty filter
  // is a dead end, and the section starts small.
  const populatedGroups = useMemo(() => {
    const counts = new Set(beastfiles.map((b) => b.group));
    return beastfileGroups.filter((g) => counts.has(g.name));
  }, []);

  const selectGroup = (group) => {
    // URL-driven so a filtered view is linkable and prerenderable, matching
    // how /encyclopedia/category/ and /guides/category/ already behave.
    navigate(group === 'All' ? '/beastlypedia/' : `/beastlypedia/group/${group.slug}/`);
  };

  const canonical = activeGroup === 'All' ? CANONICAL : `${CANONICAL}group/${groupSlug}/`;
  const title =
    activeGroup === 'All'
      ? 'Beastlypedia | Wild Animal Profiles | BeastlyFacts'
      : `${activeGroup} | Beastlypedia | BeastlyFacts`;

  return (
    <div className="min-h-screen pt-12 px-4 sm:px-6 pb-16">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>

      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
            Beastlypedia
          </h1>
          <p className="text-sm text-muted-foreground font-body max-w-xl mx-auto leading-relaxed">
            Wild animal profiles. How they live, where they are found, and what makes each one
            strange. No care sheets, no difficulty ratings, just the animals.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-2 mb-5">
          <button
            type="button"
            onClick={() => selectGroup('All')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-body font-bold border transition-colors ${
              activeGroup === 'All'
                ? 'bg-secondary text-secondary-foreground border-secondary'
                : 'bg-card text-muted-foreground border-border hover:border-secondary/40'
            }`}
          >
            All
          </button>
          {populatedGroups.map((g) => (
            <button
              key={g.slug}
              type="button"
              onClick={() => selectGroup(g)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-body font-bold border transition-colors ${
                activeGroup === g.name
                  ? 'bg-secondary text-secondary-foreground border-secondary'
                  : 'bg-card text-muted-foreground border-border hover:border-secondary/40'
              }`}
            >
              {`${g.emoji} ${g.name}`}
            </button>
          ))}
        </div>

        <div className="max-w-sm mx-auto mb-10">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Beastlypedia"
            aria-label="Search Beastlypedia"
            className="w-full px-4 py-2 rounded-xl border border-border bg-card text-sm font-body text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
          />
        </div>

        {visible.length > 0 ? (
          // Generous row gap: the cards deliberately overlap their own top edge,
          // so a tight vertical rhythm would let one card's photo collide with
          // the card above it.
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-16 pt-10">
            {visible.map((b) => (
              <BeastfileCard key={b.id} beastfile={b} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="text-4xl block mb-3">🔍</span>
            <p className="font-display font-bold text-lg text-foreground mb-1">Nothing here yet</p>
            <p className="text-sm text-muted-foreground font-body">
              {query ? 'No Beastfile matches that search.' : 'More Beastfiles are on the way.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
