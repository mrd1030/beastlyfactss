import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from '@/lib/motion-safe';
import { X, Lock, Check } from 'lucide-react';

// Rendered through a portal at the document root, for the same reason
// ImageLightbox is: the Pack's cards animate via framer-motion transforms, and
// a position:fixed overlay nested inside a transformed ancestor is confined to
// that ancestor instead of the viewport.
export default function AchievementDialog({ achievement, unlocked, state, onClose }) {
  useEffect(() => {
    if (!achievement) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [achievement, onClose]);

  // Unmount outright rather than leaving AnimatePresence to animate the exit,
  // matching ImageLightbox. motion.div here is wrapped by motion-safe's
  // PrerenderSafeMotion, and AnimatePresence cannot drive an exit through that
  // wrapper on an unkeyed child - the dialog stayed on screen forever, ignoring
  // Escape and its own close button, because state was updating but the node
  // was never removed. AnimatePresence still covers the entrance.
  if (typeof document === 'undefined' || !achievement) return null;

  const current = state ? Math.min(achievement.current(state), achievement.target) : 0;
  const target = achievement.target ?? 0;
  const pct = target > 0 ? Math.round((current / target) * 100) : 0;

  return createPortal(
    <AnimatePresence>
      {achievement && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${achievement.title} achievement`}
        >
          <motion.div
            initial={{ scale: 0.92, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xs bg-card border border-border rounded-2xl p-6 text-center shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-2.5 right-2.5 w-7 h-7 flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {/* A locked badge stays greyed here too. Showing it in full colour
                in the dialog would read as though tapping it earned it. */}
            <span className={`text-5xl block mb-2 ${unlocked ? '' : 'grayscale opacity-50'}`}>
              {achievement.emoji}
            </span>

            <h3 className="font-display font-bold text-lg text-foreground">{achievement.title}</h3>

            <span
              className={`inline-flex items-center gap-1 text-[10px] font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mt-1.5 mb-3 ${
                unlocked
                  ? 'bg-secondary/15 text-secondary'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {unlocked ? <><Check className="w-3 h-3" /> Earned</> : <><Lock className="w-3 h-3" /> Locked</>}
            </span>

            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              {unlocked ? achievement.description : achievement.hint}
            </p>

            {/* Progress only makes sense while it is still out of reach; after
                unlocking, a full bar is just noise. */}
            {!unlocked && target > 1 && (
              <div className="mt-4">
                {/* Plain width rather than a motion scaleX transform. This
                    dialog's motion.div goes through motion-safe's wrapper,
                    which drops `animate` on an instance's first render - and
                    since the dialog mounts fresh on every open, that first
                    render is the only one that matters. The bar rendered at a
                    full 100% while the label underneath read 28%, which is
                    worse than not animating at all. */}
                <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-secondary h-1.5 rounded-full transition-[width] duration-500 ease-out"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="text-[11px] text-muted-foreground font-body mt-1.5 tabular-nums">
                  {`${current} of ${target} ${achievement.unit} · ${pct}%`}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
