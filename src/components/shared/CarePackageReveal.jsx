import { useEffect } from 'react';

// Reveal-on-scroll for the product page, done so a crawler never sees a
// hidden section.
//
// The Gumroad pages set every .reveal to opacity: 0 in CSS and let an
// IntersectionObserver switch it on. Ported as-is that would prerender an
// invisible page, because prerender.mjs captures the DOM after paint and the
// sections below the fold would be captured at opacity 0. So the CSS in
// care-package-product.css only hides .cp-reveal under a [data-cp-anim]
// ancestor, and this hook is the only thing that sets that attribute:
//
//   1. never during prerender (window.__IS_PRERENDER__), so the captured HTML
//      is fully visible;
//   2. on a real client, only after mount, and only after every .cp-reveal
//      already on screen has been marked is-in, so enabling the animation
//      does not blank the hero for a frame;
//   3. then an observer reveals the rest as they scroll into view.
//
// Progressive enhancement in the literal sense: with JavaScript off, or before
// hydration, the page is simply visible.
export function useCarePackageReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof window === 'undefined' || window.__IS_PRERENDER__) return undefined;
    if (!('IntersectionObserver' in window)) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;

    const els = Array.from(root.querySelectorAll('.cp-reveal'));
    if (els.length === 0) return undefined;

    const viewportBottom = window.innerHeight || document.documentElement.clientHeight;
    const pending = [];
    els.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < viewportBottom && r.bottom > 0) el.classList.add('is-in');
      else pending.push(el);
    });

    root.setAttribute('data-cp-anim', '');
    if (pending.length === 0) return undefined;

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    pending.forEach(el => io.observe(el));

    return () => io.disconnect();
  }, [rootRef]);
}
