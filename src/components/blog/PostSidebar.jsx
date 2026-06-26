import React, { useMemo, useState, useEffect } from 'react';
import { Clock, Heart } from 'lucide-react';
import { facts } from '@/lib/data/facts';
import BeehiivSubscribe from './BeehiivSubscribe';
import { useFavoritesCtx } from '@/lib/FavoritesContext';

export default function PostSidebar({ allPosts, currentPost, onSelectPost }) {
  const { isFavorite, toggleFavorite } = useFavoritesCtx();
  
  const [displayRelated, setDisplayRelated] = useState([]);
  const [displayFact, setDisplayFact] = useState(null);

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

// Smart icon guesser using your imported 'facts' data
  const getPostIcon = (post) => {
    // 1. If you explicitly set an emoji in the CMS, always use that first!
    if (post.emoji) return post.emoji;

    // 2. Grab the text strings we want to search through, safely converted to lowercase
    const postTitle = (post.title || '').toLowerCase();
    const postCategory = (post.category?.title || post.category || '').toLowerCase();
    const postAnimal = (post.animalType?.title || post.animalType || '').toLowerCase();

    // 3. Look through your imported 'facts' array for a match
    const matchedFact = facts.find((fact) => {
      // Assuming your fact objects have an 'animal' property (e.g., animal: 'Honey Badger')
      const factAnimalName = (fact.animal || '').toLowerCase();
      
      // If the fact's animal name shows up in the post's title, category, or animalType, it's a match!
      return (
        postTitle.includes(factAnimalName) || 
        postCategory.includes(factAnimalName) || 
        postAnimal.includes(factAnimalName)
      );
    });

    // 4. Return the emoji from the matched fact, or fallback to a paw print if nothing matches
    return matchedFact?.emoji || '🐾';
  };

  return (
    <div className="space-y-5">
      {/* ... KEEP YOUR EXISTING SUBSCRIBE, RELATED, AND FACT JSX BELOW ... */}
      
      {/* Subscribe */}
      <div className="bg-card border border-border rounded-2xl p-5">
        <h3 className="font-display font-bold text-sm text-foreground mb-1">Subscribe — it's free</h3>
        <p className="text-xs text-muted-foreground font-body mb-4">New articles straight to your inbox. No spam. 🐾</p>
        <BeehiivSubscribe />
      </div>

      {/* Related Posts */}
      <div className="bg-card border border-border rounded-2xl p-5">
        <h3 className="font-display font-bold text-sm text-foreground mb-4">You Might Also Like</h3>
        <div className="space-y-3">
          {displayRelated.map(post => {
            const slug = post.slug?.current || post._id || post.id;
            return (
              <a
                key={post._id || post.id}
                href={`/blog/${slug}`}
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
                            <Clock className="w-3 h-3" /> {post.readTime} min read
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
        <p className="text-xs font-display font-bold text-secondary mb-1">{displayFact.title}</p>
        <p className="text-xs text-muted-foreground font-body leading-relaxed">{displayFact.fact}</p>
        <p className="text-xs text-muted-foreground/60 font-body mt-2 italic">— {displayFact.animal}</p>
        <button
          onClick={() => toggleFavorite(displayFact.id)}
          className={`mt-3 w-full flex items-center justify-center gap-1.5 py-1.5 rounded-xl text-xs font-display font-bold border transition-all ${
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