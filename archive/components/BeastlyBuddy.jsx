// ARCHIVED 2026-08-07. Unmounted from AppLayout.jsx (was rendered on every
// page as a `position: fixed` floating button). It stayed anchored to the
// viewport while the page scrolled underneath it, which meant it could sit
// directly on top of body text - confirmed on a live mobile screenshot, the
// button was covering an article heading mid-scroll.
//
// Retired to see whether a mobile font-size bump on its own fixes the
// "harder to read on the site than expected" report before deciding whether
// this comes back, comes back repositioned, or stays retired. Not deleted:
// this file still has real, working logic (the greeting rotation, favorites
// integration, analytics) if it does come back.
//
// To restore: move this file back to src/components/shared/BeastlyBuddy.jsx,
// then import and render <BeastlyBuddy /> in AppLayout.jsx (see git history
// on that file for the exact two lines removed).
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from '@/lib/motion-safe';
import { X, Heart } from 'lucide-react';
import { facts } from '@/lib/data/facts';
import { useFavoritesCtx } from '@/lib/FavoritesContext';
import { trackEvent } from '@/lib/analytics';

// Previously this lazily imported @base44/sdk so its chunk was only fetched once
// a visitor actually opened this widget - BeastlyBuddy renders on every page via
// AppLayout, so a static import would have forced the SDK into the eager bundle.
// trackEvent now just pushes to the GTM dataLayer, which index.html already
// loads, so there is no chunk to defer and no dynamic import needed.

const greetings = [
  "Hey there, animal friend! 🐾 Want a fun fact?",
  "Did you know? 🤓 Click me for a random fact!",
  "Welcome back to the wild side! 🌿",
  "I've got a beastly fact for you! 🦁",
];

export default function BeastlyBuddy() {
  const [open, setOpen] = useState(false);
  const [currentFact, setCurrentFact] = useState(null);
  const [greeting] = useState(greetings[Math.floor(Math.random() * greetings.length)]);
  const [footerVisible, setFooterVisible] = useState(false);
  const { toggleFavorite, isFavorite } = useFavoritesCtx();

  const popupRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // Skipped during prerendering: this effect can fire (and change what
    // renders) before prerender.mjs captures the page - e.g. on a short
    // page where the footer is already in view - baking a non-default
    // footerVisible into the static HTML that won't match a real client's
    // hydration-time first render, which always starts at the useState(false)
    // default. Same class of issue as the localStorage-backed state in
    // useLocalStorage.js/FavoritesContext.jsx, just effect-driven instead.
    if (window.__IS_PRERENDER__) return;
    const footer = document.getElementById('site-footer');
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Keyboard accessibility, focus capture, & Out-of-bounds interaction handler
  useEffect(() => {
    if (!open) return;

    // FIX: Programmatically pull focus inside the card as soon as it opens
    const focusableSelectors = 'a[href], button, input, textarea, select, [tabindex]:not([tabindex="-1"])';
    
    // We use a safe micro-tick to ensure Framer Motion has mounted the DOM node cleanly
    const focusTimeout = setTimeout(() => {
      if (popupRef.current) {
        const focusableElements = popupRef.current.querySelectorAll(focusableSelectors);
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      }
    }, 30);

    const handleOutsideInteraction = (event) => {
      if (
        popupRef.current && !popupRef.current.contains(event.target) &&
        triggerRef.current && !triggerRef.current.contains(event.target)
      ) {
        setOpen(false);
        trackEvent('beastly_buddy_closed');
      }
    };

    const handleKeyDown = (event) => {
      // Close popup via Escape Key
      if (event.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
        trackEvent('beastly_buddy_closed');
        return;
      }

      // Tab Lock Focus Trap Engine
      if (event.key === 'Tab' && popupRef.current) {
        const focusableElements = popupRef.current.querySelectorAll(focusableSelectors);
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) { // Back tab
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else { // Forward tab
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideInteraction);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(focusTimeout);
      document.removeEventListener('mousedown', handleOutsideInteraction);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const getRandomFact = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setCurrentFact(randomFact);
    trackEvent('beastly_buddy_random_fact', { animal: randomFact.animal, category: randomFact.category });
  };

  return (
    <div className={`fixed right-4 z-50 transition-all duration-300 ${footerVisible ? 'bottom-[calc(var(--safe-area-inset-bottom,0px)+14rem)] md:bottom-16' : 'bottom-20 md:bottom-16'}`}>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-3 bg-card border border-border rounded-2xl p-4 shadow-xl w-72"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-2xl">🦊</span>
              <button onClick={() => setOpen(false)} className="p-1 hover:bg-muted rounded-full" aria-label="Close fact panel">
                <X className="w-4 h-4" />
              </button>
            </div>
            {!currentFact ? (
              <>
                <p className="text-sm font-body text-foreground mb-3">{greeting}</p>
                <button
                  onClick={getRandomFact}
                  className="w-full bg-secondary text-secondary-foreground font-body font-bold text-sm py-2 rounded-xl hover:opacity-90 transition-opacity"
                >
                  🎲 Random Fact!
                </button>
              </>
            ) : (
              <>
                <p className="text-sm font-body text-foreground mb-1">
                  <span className="text-lg mr-1">{currentFact.emoji}</span>
                  <strong>{currentFact.title}</strong>
                </p>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{currentFact.fact}</p>
                <div className="flex gap-2">
                  <button
                    onClick={getRandomFact}
                    className="flex-1 bg-secondary text-secondary-foreground font-body font-bold text-sm py-2 rounded-xl hover:opacity-90 transition-opacity"
                  >
                    🎲 Another!
                  </button>
                  <button
                    onClick={() => {
                      toggleFavorite(currentFact.id);
                      trackEvent('beastly_buddy_favorite_toggled', { animal: currentFact.animal, favorited: !isFavorite(currentFact.id) });
                    }}
                    className={`px-3 py-2 rounded-xl transition-all ${isFavorite(currentFact.id) ? 'bg-pink-100 dark:bg-pink-950' : 'bg-muted hover:bg-muted/80'}`}
                    aria-label={isFavorite(currentFact.id) ? "Remove fact from favorites" : "Save fact to favorites"}
                  >
                    <Heart className={`w-4 h-4 ${isFavorite(currentFact.id) ? 'fill-hotpink text-hotpink' : 'text-muted-foreground'}`} />
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        ref={triggerRef}
        onClick={() => {
          const opening = !open;
          setOpen(opening);
          if (opening) {
            setCurrentFact(null);
            trackEvent('beastly_buddy_opened');
          } else {
            trackEvent('beastly_buddy_closed');
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg shadow-secondary/30 text-2xl"
        aria-label={open ? "Close Beastly Buddy panel" : "Open Beastly Buddy fact assistant"}
        aria-expanded={open}
      >
        <motion.span
          animate={open ? {} : { rotate: [0, -5, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          🦊
        </motion.span>
      </motion.button>
    </div>
  );
}