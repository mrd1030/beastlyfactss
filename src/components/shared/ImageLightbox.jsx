import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from '@/lib/motion-safe';
import { X, Heart, Share2, Check } from 'lucide-react';
import { useFavoritesCtx } from '@/lib/FavoritesContext';
import { slugify } from '@/lib/utils/slugify';

// Full-size photo popup for a fact - opened from the "Image" action on
// FactCard/FactModal, from gallery tiles, and from a Beastfile's fun facts.
// Still lighter than FactModal (no focus trap) but it carries Save and Share,
// because this is where someone actually looking at a photo decides to keep or
// send it, and the alternative was closing it to reach the tile's controls.
//
// Share sends the fact's own page rather than the raw image file. That page
// carries this photo as its og:image (Facts.jsx resolves it through
// absoluteImageFor), so the preview shows the picture and the link still lands
// somewhere readable.
export default function ImageLightbox({ fact, imagePath, onClose }) {
  const { toggleFavorite, isFavorite } = useFavoritesCtx();
  const [copied, setCopied] = useState(false);

  // Beastfile fun facts arrive from a generated payload; every other caller
  // passes a full fact. Both carry the real fact id, which is what favourites
  // are keyed by, but guard anyway rather than write a bad key.
  const factId = fact?.id || fact?._id || null;
  const fav = factId ? isFavorite(factId) : false;

  const handleShare = () => {
    if (!fact) return;
    const url = `${window.location.origin}/facts/${slugify(fact.title)}/`;
    if (navigator.share) {
      navigator.share({ title: fact.title, text: `${fact.emoji || '🐾'} ${fact.fact}`, url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${fact.emoji || '🐾'} ${fact.fact} ${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    if (!fact) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [fact, onClose]);

  if (!fact || !imagePath) return null;

  return (
    <AnimatePresence>
      {fact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-foreground/70 backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Photo for ${fact.title}`}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            className="relative max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 z-10 p-2 rounded-full bg-card text-foreground shadow-lg hover:bg-muted transition-colors focus:ring-2 focus:ring-secondary focus:outline-none"
              aria-label="Close image"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/60 bg-card">
              <img
                src={imagePath}
                alt={`${fact.animal} - ${fact.title}`}
                className="w-full max-h-[80vh] object-contain bg-muted"
              />
              <div className="px-4 py-3 bg-card flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-body font-semibold text-muted-foreground">
                    {`${fact.category} • ${fact.animal}`}
                  </p>
                  <p className="font-body font-bold text-sm text-foreground mt-0.5">
                    {fact.title}
                  </p>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  {factId && (
                    <button
                      onClick={() => toggleFavorite(factId)}
                      className="flex items-center gap-1.5 text-xs font-body font-semibold text-muted-foreground hover:text-foreground transition-colors p-2 -m-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 rounded-lg"
                      aria-label={fav ? `Remove ${fact.title} from your Pack` : `Save ${fact.title} to your Pack`}
                      aria-pressed={fav}
                    >
                      <Heart className={`w-4 h-4 ${fav ? 'fill-secondary text-secondary' : ''}`} />
                      <span className="hidden sm:inline">{fav ? 'Saved' : 'Save'}</span>
                    </button>
                  )}
                  <button
                    onClick={handleShare}
                    className="flex items-center gap-1.5 text-xs font-body font-semibold text-muted-foreground hover:text-foreground transition-colors p-2 -m-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 rounded-lg"
                    aria-label={`Share ${fact.title}`}
                  >
                    {copied ? <Check className="w-4 h-4 text-secondary" /> : <Share2 className="w-4 h-4" />}
                    <span className="hidden sm:inline">{copied ? 'Copied!' : 'Share'}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
