import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';
import SanityImage from '@/components/SanityImage';
import LocalImage from '@/components/shared/LocalImage';
import { getDisplayDate } from '@/lib/utils/date';

export default function CompactPostCard({ post, onClick }) {
  // getDisplayDate() compares publishedAt against the live "now" clock, so a
  // post that's future-scheduled at build time (staggered publish dates are
  // routine on this site) prerenders with the date hidden - once the real
  // world catches up to that date without a redeploy, a real visitor's
  // hydration-time render would compute a shown date where the prerendered
  // HTML has none, a structural mismatch (same class of bug fixed in
  // HeroSection.jsx/TrendingFacts.jsx/CategoryBrowse.jsx, and Blog.jsx's
  // PostView for this same helper). Default to hidden (matching what a
  // prerender pass always captures, since the effect below is a no-op there)
  // and reveal post-mount for real clients only.
  const [date, setDate] = useState('');
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setDate(getDisplayDate(post.publishedAt));
  }, [post.publishedAt]);

  const category = post.category || post.animalType || 'Article';
  const slug = post.slug?.current || post._id || post.id;

  return (
    <a
      href={`/blog/${slug}/`}
      onClick={e => { e.preventDefault(); onClick?.(e); }}
      className="flex items-start gap-3 bg-card border border-border rounded-xl p-3 hover:border-secondary/40 hover:shadow-sm transition-all group cursor-pointer"
    >
      {/* Image */}
      {post.mainImage ? (
        <div className="w-20 h-14 flex-shrink-0 overflow-hidden rounded-lg">
          <SanityImage 
            image={post.mainImage} 
            alt={post.title}
            width={160}
            className="w-full h-full object-cover"
          />
        </div>
      ) : post.image ? (
        <div className="w-20 h-14 flex-shrink-0 overflow-hidden rounded-lg">
          <LocalImage
            src={post.image}
            alt={post.imageAlt || post.title}
            className="w-full h-full object-cover"
            loading="lazy"
            width={160}
            height={112}
          />
        </div>
      ) : (
        <div className="w-20 h-14 rounded-lg bg-muted flex items-center justify-center flex-shrink-0 text-2xl">
          🐾
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-1 flex-wrap">
          <span className="text-xs font-display font-semibold text-secondary bg-secondary/10 px-1.5 py-0.5 rounded-full">
            {category}
          </span>
        </div>

        <h3 className="font-display font-bold text-sm text-foreground leading-snug mb-1 group-hover:text-secondary transition-colors line-clamp-2">
          {post.title}
        </h3>

        {post.excerpt && (
          <p className="text-xs text-muted-foreground font-body line-clamp-2 leading-relaxed mb-1">
            {post.excerpt}
          </p>
        )}

        <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
          {date && (
            <span className="flex items-center gap-0.5">
              <Calendar className="w-3 h-3" />{date}
            </span>
          )}
          {post.readTime && (
            <span className="flex items-center gap-0.5">
              <Clock className="w-3 h-3" />{`${post.readTime} min`}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}