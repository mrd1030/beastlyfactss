import React, { useEffect, useRef, useState } from 'react'; // Added useState here
import { motion, AnimatePresence } from '@/lib/motion-safe';
import { Link } from 'react-router-dom';
import { X, Heart, Share2, Image as ImageIcon } from 'lucide-react';
import { useFavoritesCtx } from '@/lib/FavoritesContext';
import { encyclopediaAnimals } from '@/lib/data/encyclopedia';
import { slugify } from '@/lib/utils/slugify';
import { imagePathFor } from '@/lib/data/factImages';
// 2.8KB of {normalised animal name -> {id, name}}, built by
// scripts/generate-beastlypedia-index.js. Not the beastfile data itself, which
// is 94KB, and not the full index at 56KB: this component is imported by Home,
// Facts, Gallery and Pack, and none of them should carry that to render one
// optional link.
import beastlypediaAnimals from '@/lib/generated/beastlypedia-animal-map.json';
import { useIsMobileViewport } from '@/lib/hooks/useIsMobileViewport';

// onOpenImage is optional and handled by the parent page (not rendered here) -
// same reason as FactCard: this modal animates scale/y via framer-motion, so a
// `position: fixed` lightbox nested inside it would be confined to this
// transformed element instead of covering the viewport.
export default function FactModal({ fact, onClose, onOpenImage }) {
  const { toggleFavorite, isFavorite } = useFavoritesCtx();
  const [copied, setCopied] = useState(false); // State to track clipboard copy inside modal
  const modalRef = useRef(null);
  const imagePath = imagePathFor(fact);
  const isMobile = useIsMobileViewport();

  // Exact match only (case-insensitive) - a "contains" match risks linking a fact to the
  // wrong animal (e.g. Komodo Dragon vs Bearded Dragon), so most facts just show no link at all.
  //
  // Two sources, checked in that order. The Encyclopedia covers species kept as
  // pets; Beastlypedia covers wild ones. Before the second lookup existed, an
  // axolotl fact offered a profile link and an elephant or sloth fact did not,
  // purely because the elephant is not a pet.
  //
  // Encyclopedia wins a tie so husbandry stays the destination for anything
  // someone might actually keep. Only the axolotl is currently in both.
  const animalKey = fact?.animal ? fact.animal.trim().toLowerCase().replace(/\s+/g, ' ') : '';
  const encyclopediaMatch = animalKey
    ? encyclopediaAnimals.find(a => a.name.toLowerCase() === animalKey)
    : null;
  const beastfileMatch = !encyclopediaMatch && animalKey ? beastlypediaAnimals[animalKey] : null;

  const profileLink = encyclopediaMatch
    ? { to: `/encyclopedia/animal/${encyclopediaMatch.id}/`, name: encyclopediaMatch.name }
    : beastfileMatch
      ? { to: `/beastlypedia/${beastfileMatch.id}/`, name: beastfileMatch.name }
      : null;

  useEffect(() => {
    if (!fact) return;
    
    // Lock background scrolling
    document.body.style.overflow = 'hidden';
    
    // Listen for Escape AND Tab keys (The Focus Trap)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!modalRef.current) return;

        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) { // Shift + Tab (going backwards)
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else { // Tab (going forwards)
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);

    // Auto-focus the close button when the modal opens
    const focusTimer = setTimeout(() => {
      if (modalRef.current) {
        const firstBtn = modalRef.current.querySelector('button');
        if (firstBtn) firstBtn.focus();
      }
    }, 100);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(focusTimer);
    };
  }, [fact, onClose]);

  if (!fact) return null;
  
  const fav = isFavorite(fact.id);

  // Reusable share handler matching your FactCard behavior
  const handleShare = () => {
    const factsPageUrl = `${window.location.origin}/facts/${slugify(fact.title)}/`;
    
    if (navigator.share) {
      navigator.share({ 
        title: fact.title, 
        text: `${fact.emoji || '🐾'} ${fact.fact}`, 
        url: factsPageUrl 
      });
    } else {
      // Desktop copy fallback with state update
      navigator.clipboard.writeText(`${fact.emoji || '🐾'} ${fact.fact} ${factsPageUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset text after 2 seconds
    }
  };

  return (
    <AnimatePresence>
      {fact && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            // Swipe-down-to-dismiss, mobile only: `drag` with a mouse on
            // desktop would fight text selection and feel unintended there,
            // so it's off entirely (not just visually inert) unless isMobile.
            drag={isMobile ? 'y' : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={(e, info) => {
              if (info.offset.y > 120 || info.velocity.y > 500) onClose();
            }}
            className="bg-card rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-between items-start mb-4">
              <motion.span
                className="text-6xl"
                animate={{ rotate: [0, -5, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                {fact.emoji}
              </motion.span>
              <button 
                onClick={onClose} 
                className="p-3 sm:p-2 rounded-full hover:bg-muted transition-colors focus:ring-2 focus:ring-secondary focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <span className="text-xs font-body font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {`${fact.category} • ${fact.animal}`}
            </span>

            <h2 className="font-display font-bold text-xl mt-3 mb-3 text-foreground">
              {fact.title}
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed font-body">
              {fact.fact}
            </p>

            {profileLink && (
              <Link
                to={profileLink.to}
                className="inline-block text-xs text-muted-foreground hover:text-foreground underline decoration-dotted underline-offset-2 mt-3 font-body"
              >
                {`Curious about ${profileLink.name}? Full animal profile →`}
              </Link>
            )}

            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
              <button
                onClick={() => toggleFavorite(fact.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all focus:ring-2 focus:ring-secondary focus:outline-none ${
                  fav ? 'bg-hotpink/10 text-hotpink' : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Heart className={`w-4 h-4 ${fav ? 'fill-hotpink' : ''}`} />
                {fav ? 'Saved to Pack' : 'Save to Pack'}
              </button>
              
              {/* FIX: Dynamic text and color feedback based on state */}
              <button
                onClick={handleShare}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all focus:ring-2 focus:ring-secondary focus:outline-none ${
                  copied
                    ? 'bg-secondary/10 text-secondary font-bold'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Share2 className="w-4 h-4" />
                <span>{copied ? 'Copied!' : 'Share'}</span>
              </button>

              {imagePath && onOpenImage && (
                <button
                  onClick={() => onOpenImage(fact)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-muted text-muted-foreground hover:bg-muted/80 transition-all focus:ring-2 focus:ring-secondary focus:outline-none"
                >
                  <ImageIcon className="w-4 h-4" />
                  <span>Image</span>
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}