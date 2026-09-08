import React, { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Heart } from 'lucide-react';
import { facts } from '@/lib/data/facts';
import { matchesAnimal } from '@/lib/utils/matchAnimal';
import { getDeepDiveSiblings } from '@/lib/data/relatedArticles';
import DeepDiveList from '@/components/shared/DeepDiveList';
import { readDeepDiveGuide } from '@/lib/data/deepDiveContext';
import { themedQuizzes } from '@/lib/data/quizzes';
import BeehiivSubscribe from './BeehiivSubscribe';
import { useFavoritesCtx } from '@/lib/FavoritesContext';

export default function PostSidebar({ allPosts, currentPost, onSelectPost }) {
  const { isFavorite, toggleFavorite } = useFavoritesCtx();

  const [displayRelated, setDisplayRelated] = useState([]);
  const [displayFact, setDisplayFact] = useState(null);

  // Which guide the reader clicked through from, if they came from one. Null on
  // the first render on purpose: this route is prerendered, and the static HTML
  // cannot know anything about one particular reader's session. Reading
  // sessionStorage during render would therefore produce a different list than
  // the one in the HTML the moment a real visitor hydrates, which is the React
  // #418/#423 mismatch already fixed across the homepage. So the prerender-safe
  // context-free ranking renders first and the personalised list replaces it in
  // an effect, same pattern as displayRelated below.
  //
  // Keyed on currentPost so moving between siblings through this sidebar
  // re-reads it rather than holding the value from the article before.
  const [fromGuideId, setFromGuideId] = useState(null);
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setFromGuideId(readDeepDiveGuide());
  }, [currentPost]);

  // Same curated same-species list Guide/Encyclopedia pages show as "Deep
  // Dive" - without this, a reader who clicks a Deep Dive link to get here
  // has no way to keep following that same thread once they've landed.
  const deepDiveArticles = useMemo(() => {
    const currentSlug = currentPost.slug?.current || currentPost._id || currentPost.id;
    // A bigger pool than fits, so DeepDiveList has something to put behind
    // "Show all". The visible count is still DEEP_DIVE_LIMIT; this only decides
    // how much is reachable by expanding. Capped rather than unbounded because
    // the context-free ranking below the curated path degrades as it goes, and
    // an endless tail of loosely-related articles is not worth revealing.
    const siblingSlugs = getDeepDiveSiblings(currentSlug, allPosts, { fromGuideId, limit: 24 });
    if (siblingSlugs.length === 0) return [];
    return siblingSlugs
      .map((slug) => allPosts.find((p) => (p.slug?.current || p._id || p.id) === slug))
      .filter(Boolean);
  }, [allPosts, currentPost, fromGuideId]);

  // Themed quizzes that cite this article as a question source. Auto-wired
  // from the quiz data: a new quiz that sources an article gets its backlink
  // here with no per-article setup.
  const quizBacklinks = useMemo(() => {
    const currentSlug = currentPost.slug?.current || currentPost._id || currentPost.id;
    const path = `/blog/${currentSlug}/`;
    return themedQuizzes.filter(qz => qz.questions.some(q => q.source && q.source.to === path));
  }, [currentPost]);

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

  // 3. Loading Guard to prevent Hydration Errors. Only the two random blocks
  // (You Might Also Like, Random Fact) depend on the effect above, so only
  // they wait. Subscribe, Deep Dive and the quiz backlinks are deterministic
  // and render on first paint, which is what puts the curated species links
  // into the prerendered HTML. Before this split the whole sidebar was the
  // string "Loading..." in every static article page.
  const randomReady = Boolean(displayFact) && displayRelated.length > 0;

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
    <div className="flex flex-col gap-5">
      {/* Subscribe: first in the desktop sidebar, last on a phone, where the
          sidebar stacks under the article and the ask belongs at the end. */}
      <div className="bg-card border border-border rounded-2xl p-5 order-last lg:order-none">
        <h3 className="font-display font-bold text-sm text-foreground mb-1">Subscribe - it's free</h3>
        <p className="text-xs text-muted-foreground font-body mb-4">An occasional email when something new is worth your time. No spam. 🐾</p>
        <BeehiivSubscribe />
      </div>

      {/* Deep Dive: the same curated same-species list Guide/Encyclopedia pages
          show, and the same component, so clicking through from one of those
          doesn't strand a reader with no way to keep following the thread. */}
      {/* The species list is hidden below lg: MoreOnSpecies renders it after
          the FAQ on phones, where the sidebar stacks right under that. On
          desktop this is the only copy. The shared Health and More list has
          no in-body copy, so it always shows. */}
      <div className="hidden lg:block">
        <DeepDiveList
          articles={deepDiveArticles}
          guideId={fromGuideId}
          onSelect={onSelectPost}
          show="own"
        />
      </div>
      <DeepDiveList
        articles={deepDiveArticles}
        guideId={fromGuideId}
        onSelect={onSelectPost}
        show="shared"
      />

      {/* Quiz backlink: this article is a question source in these quizzes */}
      {quizBacklinks.length > 0 && (
        <div className="bg-card border border-border rounded-2xl p-5">
          <p className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            🧩 Quiz Yourself
          </p>
          <div className="space-y-3">
            {quizBacklinks.map(qz => (
              <Link key={qz.id} to={`/quiz/${qz.id}/`} className="group block">
                <p className="text-xs font-body font-bold text-foreground group-hover:text-secondary transition-colors leading-snug">
                  {`${qz.emoji} ${qz.title}`}
                </p>
                <p className="text-xs text-muted-foreground font-body mt-0.5">
                  {'This article answers quiz questions. Test yourself →'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {!randomReady && <div className="space-y-5 animate-pulse opacity-50">Loading...</div>}

      {/* Related Posts. Hidden below lg: on a phone the sidebar stacks right
          under YouMayAlsoLike, which already covers this. */}
      {randomReady && (
      <div className="bg-card border border-border rounded-2xl p-5 hidden lg:block">
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

      )}

      {/* Random Fact */}
      {randomReady && (
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
      )}
    </div>
  );
}