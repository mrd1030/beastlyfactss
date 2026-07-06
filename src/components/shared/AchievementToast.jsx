import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useFavoritesCtx } from '@/lib/FavoritesContext';

const AUTO_DISMISS_MS = 6000;

export default function AchievementToast() {
  const { currentAchievementToast, dismissCurrentToast } = useFavoritesCtx();

  useEffect(() => {
    if (!currentAchievementToast) return;
    const timer = setTimeout(dismissCurrentToast, AUTO_DISMISS_MS);
    return () => clearTimeout(timer);
    // Depend on the id only — dismissCurrentToast is a new reference every
    // FavoritesProvider render, which would otherwise keep resetting the timer.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentAchievementToast?.id]);

  return (
    <div className="fixed top-16 left-0 right-0 z-[70] flex justify-center px-4 pointer-events-none">
      <AnimatePresence mode="wait">
        {currentAchievementToast && (
          <motion.div
            key={currentAchievementToast.id}
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="pointer-events-auto flex items-center gap-3 bg-card border border-border rounded-2xl shadow-xl px-4 py-3 max-w-sm"
          >
            <span className="text-2xl flex-shrink-0">{currentAchievementToast.emoji}</span>
            <div className="min-w-0">
              <p className="font-display font-bold text-sm text-foreground leading-tight">
                Achievement unlocked: {currentAchievementToast.title}
              </p>
              <Link
                to="/pack"
                onClick={dismissCurrentToast}
                className="text-xs font-body text-secondary hover:underline"
              >
                Check out your pack! →
              </Link>
            </div>
            <button
              onClick={dismissCurrentToast}
              className="flex-shrink-0 p-1 rounded-full hover:bg-muted transition-colors"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
