import React, { useEffect, useRef, useState } from 'react'; // Added useState here
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Heart, Share2 } from 'lucide-react';
import { useFavoritesCtx } from '@/lib/FavoritesContext';
import { encyclopediaAnimals } from '@/lib/data/encyclopedia';

export default function FactModal({ fact, onClose }) {
  const { toggleFavorite, isFavorite } = useFavoritesCtx();
  const [copied, setCopied] = useState(false); // State to track clipboard copy inside modal
  const modalRef = useRef(null);

  // Exact match only (case-insensitive) - a "contains" match risks linking a fact to the
  // wrong animal (e.g. Komodo Dragon vs Bearded Dragon), so most facts just show no link at all.
  const encyclopediaMatch = fact?.animal
    ? encyclopediaAnimals.find(a => a.name.toLowerCase() === fact.animal.toLowerCase())
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
    const factsPageUrl = window.location.origin + '/facts/';
    
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
                className="p-2 rounded-full hover:bg-muted transition-colors focus:ring-2 focus:ring-secondary focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <span className="text-xs font-display font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {fact.category} • {fact.animal}
            </span>

            <h2 className="font-display font-bold text-xl mt-3 mb-3 text-foreground">
              {fact.title}
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed font-body">
              {fact.fact}
            </p>

            {encyclopediaMatch && (
              <Link
                to={`/encyclopedia/animal/${encyclopediaMatch.id}/`}
                className="inline-block text-xs text-muted-foreground hover:text-foreground underline decoration-dotted underline-offset-2 mt-3 font-body"
              >
                Curious about {encyclopediaMatch.name}? Full animal profile →
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}