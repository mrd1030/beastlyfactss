import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

// Simple full-size photo popup for a fact - opened from the "Image" action on
// FactCard/FactModal, and from gallery thumbnails. Deliberately lighter than
// FactModal (no focus trap, no Save/Share) since its only job is showing the photo.
export default function ImageLightbox({ fact, imagePath, onClose }) {
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
              <div className="px-4 py-3 bg-card">
                <p className="text-xs font-display font-semibold text-muted-foreground">
                  {fact.category} • {fact.animal}
                </p>
                <p className="font-display font-bold text-sm text-foreground mt-0.5">
                  {fact.title}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
