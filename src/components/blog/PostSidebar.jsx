import React, { useMemo } from 'react';
import { Clock, Heart } from 'lucide-react';
import { facts } from '@/lib/data/facts';
import BeehiivSubscribe from './BeehiivSubscribe';
import { useFavoritesCtx } from '@/lib/FavoritesContext';

export default function PostSidebar({ allPosts, currentPost, onSelectPost }) {
  const { isFavorite, toggleFavorite } = useFavoritesCtx();
  // Related posts: same animalType/category, excluding current, up to 5
  const related = useMemo(() => {
    const others = allPosts.filter(p => (p._id || p.id) !== (currentPost._id || currentPost.id));
    const sameCategory = others.filter(p =>
      p.category === currentPost.category || p.animalType === currentPost.animalType
    );
    const pool = sameCategory.length >= 3 ? sameCategory : others;
    return pool.slice(0, 5);
  }, [allPosts, currentPost]);

  // Random fact — changes every time currentPost changes
  const randomFact = useMemo(() => {
    return facts[Math.floor(Math.random() * facts.length)];
  }, [currentPost._id || currentPost.id]);

  return (
    <div className="space-y-5">
      {/* Subscribe */}
      <div className="bg-card border border-border rounded-2xl p-5">
        <h3 className="font-display font-bold text-sm text-foreground mb-1">Subscribe — it's free</h3>
        <p className="text-xs text-muted-foreground font-body mb-4">New articles straight to your inbox. No spam. 🐾</p>
        <BeehiivSubscribe />
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <div className="bg-card border border-border rounded-2xl p-5">
          <h3 className="font-display font-bold text-sm text-foreground mb-4">You Might Also Like</h3>
          <div className="space-y-3">
            {related.map(post => (
              <button
                key={post._id || post.id}
                onClick={() => onSelectPost(post)}
                className="w-full text-left group"
              >
                <div className="flex items-start gap-2.5">
                  <span className="text-lg flex-shrink-0 mt-0.5">{post.emoji || '🦎'}</span>
                  <div className="min-w-0">
                    <p className="text-xs font-body text-muted-foreground group-hover:text-foreground transition-colors leading-snug line-clamp-2 mb-1">
                      {post.title}
                    </p>
                    {(post.readTime || post.category) && (
                      <div className="flex items-center gap-2">
                        {post.readTime && (
                          <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {post.readTime} min read
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Random Fact */}
      <div className="bg-card border border-border rounded-2xl p-5">
        <h3 className="font-display font-bold text-sm text-foreground mb-3">🐾 Random Fact</h3>
        <div className="text-center mb-3">
          <span className="text-3xl">{randomFact.emoji}</span>
        </div>
        <p className="text-xs font-display font-bold text-secondary mb-1">{randomFact.title}</p>
        <p className="text-xs text-muted-foreground font-body leading-relaxed">{randomFact.fact}</p>
        <p className="text-xs text-muted-foreground/60 font-body mt-2 italic">— {randomFact.animal}</p>
        <button
          onClick={() => toggleFavorite(randomFact.id)}
          className={`mt-3 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-xl text-xs font-display font-bold border transition-all ${
            isFavorite(randomFact.id)
              ? 'bg-hotpink/10 text-hotpink border-hotpink/30'
              : 'bg-muted text-muted-foreground border-border hover:text-hotpink hover:border-hotpink/30'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorite(randomFact.id) ? 'fill-hotpink' : ''}`} />
          {isFavorite(randomFact.id) ? 'Saved to Pack 🐾' : 'Save to My Pack'}
        </button>
      </div>
    </div>
  );
}