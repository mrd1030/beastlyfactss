import React, { useMemo, useState, useEffect } from 'react';
import { Clock, Heart } from 'lucide-react';
import { facts } from '@/lib/data/facts';
import { matchesAnimal } from '@/lib/utils/matchAnimal';
import { getDeepDiveSiblings } from '@/lib/data/relatedArticles';
import BeehiivSubscribe from './BeehiivSubscribe';
import { useFavoritesCtx } from '@/lib/FavoritesContext';

export default function PostSidebar({ allPosts, currentPost, onSelectPost }) {
  const { isFavorite, toggleFavorite } = useFavoritesCtx();

  const [displayRelated, setDisplayRelated] = useState([]);
  const [displayFact, setDisplayFact] = useState(null);

  // Same curated same-species list Guide/Encyclopedia pages show as "Deep
  // Dive" - without this, a reader who clicks a Deep Dive link to get here
  // has no way to keep following that same thread once they've landed.
  const deepDiveArticles = useMemo(() => {
    const currentSlug = currentPost.slug?.current || currentPost._id || currentPost.id;
    const siblingSlugs = getDeepDiveSiblings(currentSlug);
    if (siblingSlugs.length === 0) return [];
    return siblingSlugs
      .map((slug) => allPosts.find((p) => (p.slug?.current || p._id || p.id) === slug))
      .filter(Boolean);
  }, [allPosts, currentPost]);

  // 1. Separate the rest of the blog into "Matches" and "Everything Else"
  const { matches, nonMatches } = useMemo(() => {
    // Exclude the post we are currently reading
    const others = allPosts.filter(p => (p._id || p.id) !== (currentPost._id || currentPost.id));

    const getSafeString = (field) => {
      if (!field) return null;
      if (typeof field === 'string') return field.toLowerCase();
      if (field.title) return field.title.toLowerCase();
      return null;
    };

    const currentCat = getSafeString(currentPost.category);
    const currentAnimal = getSafeString(currentPost.animalType);

    const matchedPosts = [];
    const notMatchedPosts = [];

    // Sort every other post into either the 'matched' bucket or 'not matched' bucket
    others.forEach(p => {
      const pCat = getSafeString(p.category);
      const pAnimal = getSafeString(p.animalType);
      
      if ((currentCat && pCat === currentCat) || (currentAnimal && pAnimal === currentAnimal)) {
        matchedPosts.push(p);
      } else {
        notMatchedPosts.push(p);
      }
    });

    return { matches: matchedPosts, nonMatches: notMatchedPosts };
  }, [allPosts, currentPost]);

  // 2. Shuffle both buckets and combine them on the client-side
  useEffect(() => {
    // Skipped during prerendering: this effect (Math.random() shuffling
    // included) can settle before prerender.mjs captures the page, baking
    // the real sidebar into the static HTML - but a real client's
    // hydration-time first render always starts at the useState defaults
    // (the "Loading..." skeleton below), so the prerendered version
    // mismatches. Same class of issue as CategoryBrowse's old Math.random()
    // shuffle and CritterDigestPreview's fetch-driven state before their
    // fixes - the "Loading Guard" comment below shows this was already a
    // known concern, just solved backwards (it prevented a CRASH, not the
    // mismatch itself).
    if (window.__IS_PRERENDER__) return;
    // Shuffle the matching category posts
    const shuffledMatches = [...matches].sort(() => 0.5 - Math.random());
    
    // Shuffle the rest of the blog
    const shuffledNonMatches = [...nonMatches].sort(() => 0.5 - Math.random());
    
    // Combine them: Put matches first, then pad the remaining slots with random blog posts
    const finalRelated = [...shuffledMatches, ...shuffledNonMatches].slice(0, 5);
    
    setDisplayRelated(finalRelated);

    // Pick a random fact
    const randomF = facts[Math.floor(Math.random() * facts.length)];
    setDisplayFact(randomF);
  }, [matches, nonMatches]); // Re-run if the buckets change

  // 3. Loading Guard to prevent Hydration Errors
  if (!displayFact || displayRelated.length === 0) {
    return <div className="space-y-5 animate-pulse opacity-50">Loading...</div>;
  }

  // Picks a post's emoji by finding a fact about the same animal.
  //
  // Uses matchesAnimal rather than a substring test. The substring version this
  // replaces searched full post titles, where any word merely containing an
  // animal name counted: "Educational Enrichment for Your Gecko" matched Cat on
  // "eduCATional" and rendered a cat emoji on a gecko post. Only one live post
  // changes as a result of this fix, but the trap resets with every new title.
  const getPostIcon = (post) => {
    // An explicitly set emoji always wins.
    if (post.emoji) return post.emoji;

    const postCategory = post.category?.title || post.category || '';
    const postAnimal = post.animalType?.title || post.animalType || '';

    const matchedFact = facts.find((fact) =>
      matchesAnimal(post.title || '', fact.animal) ||
      matchesAnimal(postCategory, fact.animal) ||
      matchesAnimal(postAnimal, fact.animal)
    );

    return matchedFact?.emoji || '🐾';
  };

  return (
    <div className="space-y-5">
      {/* ... KEEP YOUR EXISTING SUBSCRIBE, RELATED, AND FACT JSX BELOW ... */}
      
      {/* Subscribe */}
      <div className="bg-card border border-border rounded-2xl p-5">
        <h3 className="font-display font-bold text-sm text-foreground mb-1">Subscribe - it's free</h3>
        <p className="text-xs text-muted-foreground font-body mb-4">New articles straight to your inbox. No spam. 🐾</p>
        <BeehiivSubscribe />
      </div>

      {/* Deep Dive: the same curated same-species list Guide/Encyclopedia
          pages show, so clicking through from one of those doesn't strand a
          reader with no way to keep following the thread. */}
      {deepDiveArticles.length > 0 && (
        <div className="bg-card border border-border rounded-2xl p-5">
          <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            📰 Deep Dive
          </p>
          <div className="space-y-3">
            {deepDiveArticles.map((article) => (
              <a
                key={article._id || article.id}
                href={`/blog/${article.slug?.current || article._id || article.id}/`}
                onClick={(e) => { e.preventDefault(); onSelectPost(article); }}
                className="group block"
              >
                <p className="text-xs font-body font-bold text-foreground group-hover:text-secondary transition-colors leading-snug">
                  {(article.emoji ? `${article.emoji} ` : '') + article.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Related Posts */}
      <div className="bg-card border border-border rounded-2xl p-5">
        <h3 className="font-display font-bold text-sm text-foreground mb-4">You Might Also Like</h3>
        <div className="space-y-3">
          {displayRelated.map(post => {
            const slug = post.slug?.current || post._id || post.id;
            return (
              <a
                key={post._id || post.id}
                href={`/blog/${slug}/`}
                onClick={e => { e.preventDefault(); onSelectPost(post); }}
                className="w-full text-left group block"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-lg flex-shrink-0 mt-0.5">{getPostIcon(post)}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-body text-muted-foreground group-hover:text-foreground transition-colors leading-snug line-clamp-2 mb-1">
                      {post.title}
                    </p>
                    {(post.readTime || post.category) && (
                      <div className="flex items-center gap-2">
                        {post.readTime && (
                          <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                            <Clock className="w-3 h-3" />{`${post.readTime} min read`}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* Random Fact */}
      <div className="bg-card border border-border rounded-2xl p-5">
        <h3 className="font-display font-bold text-sm text-foreground mb-3">🐾 Random Fact</h3>
        <div className="text-center mb-3">
          <span className="text-3xl">{displayFact.emoji}</span>
        </div>
        <p className="text-xs font-body font-bold text-secondary mb-1">{displayFact.title}</p>
        <p className="text-xs text-muted-foreground font-body leading-relaxed">{displayFact.fact}</p>
        <p className="text-xs text-muted-foreground/60 font-body mt-2 italic">{` - ${displayFact.animal}`}</p>
        <button
          onClick={() => toggleFavorite(displayFact.id)}
          className={`mt-3 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-xl text-xs font-body font-bold border transition-all ${
            isFavorite(displayFact.id)
              ? 'bg-hotpink/10 text-hotpink border-hotpink/30'
              : 'bg-muted text-muted-foreground border-border hover:text-hotpink hover:border-hotpink/30'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorite(displayFact.id) ? 'fill-hotpink' : ''}`} />
          {isFavorite(displayFact.id) ? 'Saved to Pack 🐾' : 'Save to My Pack'}
        </button>
      </div>
    </div>
  );
}