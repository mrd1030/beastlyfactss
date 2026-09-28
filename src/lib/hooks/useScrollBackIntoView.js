import { useCallback, useRef } from 'react';

// For quizzes: Next collapses the answer explanation, so the page gets shorter
// while the scroll position stays put. On a phone that leaves the next
// question above the screen. Put the ref on the top of the play area and call
// the returned function from Next: it scrolls back only when that top has gone
// under the fixed navbar, whose height the element's scroll-margin-top carries
// (scroll-mt-24 on the element).
export function useScrollBackIntoView() {
  const ref = useRef(null);
  const scrollBack = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const navbarGap = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    if (el.getBoundingClientRect().top >= navbarGap) return;
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  }, []);
  return [ref, scrollBack];
}
