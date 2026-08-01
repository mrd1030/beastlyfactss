import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import LocalImage from '@/components/shared/LocalImage';
import articlesIndex from '@/lib/generated/articles-index.json';
import { getFeaturedEvent } from '@/lib/animalEvent';

// Surfaces a topical article while an animal awareness day is running, and
// renders nothing the rest of the year.
//
// Deliberately starts as null and fills in after mount, rather than computing
// the event during render. Whichever day prerender.mjs happens to build on gets
// baked into the static HTML, and this page is not rebuilt daily, so a visitor
// arriving a week later would compute a different event than the one in the
// prerendered markup - a structural mismatch severe enough to make React
// discard hydration and re-render the whole root. Same fix, same reason, as
// HeroSection's dailyFact and CategoryBrowse's daySeed.
//
// Sitting directly after the hero keeps the reveal off the CLS books: the hero
// fills the viewport on load, so this band appears below the fold and shifts
// only content nobody is looking at yet.
export default function FeaturedEvent() {
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setFeatured(getFeaturedEvent(articlesIndex.articles));
  }, []);

  if (!featured) return null;
  const { event, article } = featured;

  return (
    <section className="px-4 sm:px-6 pt-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to={`/blog/${article.slug}/`}
          className="group flex flex-col sm:flex-row gap-4 sm:items-center bg-card border border-secondary/30 rounded-2xl p-4 sm:p-5 hover:border-secondary/60 hover:shadow-md transition-all"
        >
          {article.image && (
            <div className="sm:w-44 sm:flex-shrink-0 aspect-[16/9] sm:aspect-[4/3] rounded-xl overflow-hidden bg-muted">
              <LocalImage
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                width={352}
                height={264}
                variant="card"
              />
            </div>
          )}

          <div className="min-w-0 flex-1">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-display font-bold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-0.5 rounded-full mb-2">
              <span aria-hidden="true">{event.emoji}</span>{event.name}
            </span>
            <h2 className="font-display font-bold text-lg sm:text-xl text-foreground leading-snug group-hover:text-secondary transition-colors line-clamp-2">
              {article.title}
            </h2>
            {event.blurb && (
              <p className="text-xs sm:text-sm text-muted-foreground font-body mt-1 line-clamp-2">
                {event.blurb}
              </p>
            )}
            <span className="inline-flex items-center gap-1 mt-2 text-xs font-display font-bold text-secondary">
              Read it <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
