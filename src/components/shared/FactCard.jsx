import React, { useState } from 'react'; // Added useState here
import { motion } from 'framer-motion';
import { Heart, Share2, Image as ImageIcon } from 'lucide-react';
import { useFavoritesCtx } from '@/lib/FavoritesContext';
import { slugify } from '@/lib/utils/slugify';
import { imagePathFor } from '@/lib/data/factImages';

// onOpenImage is optional and handled by the parent page (not rendered here) -
// this card sits inside a framer-motion element with hover/viewport transforms,
// and a `position: fixed` lightbox nested inside a transformed ancestor would be
// confined to that ancestor instead of covering the viewport. Same reason
// FactModal itself is always rendered at the page level, not inside the card.
export default function FactCard({ fact, index = 0, onOpen, onOpenImage }) {
  const { toggleFavorite, isFavorite } = useFavoritesCtx();
  const [copied, setCopied] = useState(false); // State to track clipboard copy
  const imagePath = imagePathFor(fact);

  // Support both static facts (fact.id) and dynamic/DB facts (fact._id)
  const factId = fact.id || fact._id;
  const fav = isFavorite(factId);

  const handleShare = (e) => {
    e.stopPropagation();
    const factsPageUrl = `${window.location.origin}/facts/${slugify(fact.title)}/`;
    
    if (navigator.share) {
      navigator.share({ 
        title: fact.title, 
        text: `${fact.emoji || '🐾'} ${fact.fact}`, 
        url: factsPageUrl 
      });
    } else {
      // Desktop fallback: copy to clipboard and trigger visual feedback
      navigator.clipboard.writeText(`${fact.emoji || '🐾'} ${fact.fact} ${factsPageUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset text after 2 seconds
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onOpen?.(fact);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 rounded-2xl"
      onClick={() => onOpen?.(fact)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Read more: ${fact.title}`}
    >
      <div className="bg-card border border-border rounded-2xl p-4 h-full flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-secondary/40">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-3xl">{fact.emoji || '🐾'}</span>
            <span className="text-[10px] font-display font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
              {fact.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-base mb-2 text-foreground group-hover:text-secondary transition-colors">
            {fact.title}
          </h3>

          {/* Fact */}
          <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3 font-body">
            {fact.fact}
          </p>
        </div>

        {/* Actions (This is where the text safely updates) */}
        <div className="flex items-center gap-4 mt-4 pt-3 border-t border-border">
          <button
            onClick={(e) => { e.stopPropagation(); toggleFavorite(factId); }}
            className="flex items-center gap-1.5 text-xs font-semibold transition-colors focus:outline-none"
          >
            <motion.div
              whileTap={{ scale: 1.4, rotate: 15 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <Heart className={`w-4 h-4 ${fav ? 'fill-hotpink text-hotpink' : 'text-muted-foreground'}`} />
            </motion.div>
            <span className={fav ? 'text-hotpink' : 'text-muted-foreground'}>
              {fav ? 'Saved!' : 'Save'}
            </span>
          </button>
          
          <button
            onClick={handleShare}
            className={`flex items-center gap-1.5 text-xs font-semibold transition-colors focus:outline-none ${
              copied ? 'text-secondary font-bold' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>{copied ? 'Copied!' : 'Share'}</span>
          </button>

          {imagePath && onOpenImage && (
            <button
              onClick={(e) => { e.stopPropagation(); onOpenImage(fact); }}
              className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
            >
              <ImageIcon className="w-4 h-4" />
              <span>Image</span>
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}