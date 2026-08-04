import React, { useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// One pagination control for Blog, Facts and Gallery.
//
// They had drifted into three different things: Blog showed only "Page 4 of 10"
// with no numbers, Facts had a sliding window, and Gallery rendered every page
// number (10 today, and it grows with the fact database). Blog scrolled to the
// top of its list, the other two jumped to the top of the document. Patching
// them separately is how they diverged, so there is now one component.

// Five numbers in the usual case, so the control holds a roughly steady width
// instead of collapsing to two or three entries at the ends.
//
// An ellipsis only ever stands in for more than one page. Where the gap is
// exactly one, that page is drawn instead, because "1 2 3" reads better than
// "1 ... 3" and costs the same space. That rule does widen the control by one
// slot in the two positions where it fires (page 4 and page 7 of 10, say,
// render six numbers rather than five). Correctness over a perfectly fixed
// width: an ellipsis concealing a single page is just a worse button.
//
//   total 10, page 1  ->  1 2 3 4 … 10
//   total 10, page 4  ->  1 2 3 4 5 … 10
//   total 10, page 6  ->  1 … 5 6 7 … 10
//   total 10, page 9  ->  1 … 7 8 9 10
//   total 6,  page 1  ->  1 2 3 4 5 6      (never "1 2 3 4 … 6")
export function pageItems(page, totalPages) {
  if (totalPages <= 1) return [];

  const wanted = new Set([1, totalPages]);
  for (let p = page - 1; p <= page + 1; p++) {
    if (p >= 1 && p <= totalPages) wanted.add(p);
  }
  // Pad back to five. Near either end the current-page window is clipped, so
  // without this the control would visibly narrow on the first and last pages.
  for (let d = 2; wanted.size < Math.min(5, totalPages); d++) {
    if (page - d >= 1) wanted.add(page - d);
    if (wanted.size < Math.min(5, totalPages) && page + d <= totalPages) wanted.add(page + d);
    if (d > totalPages) break;
  }

  const sorted = [...wanted].sort((a, b) => a - b);
  const items = [];
  for (let i = 0; i < sorted.length; i++) {
    if (i > 0) {
      const gap = sorted[i] - sorted[i - 1];
      if (gap === 2) items.push(sorted[i] - 1);
      else if (gap > 2) items.push({ ellipsis: true, key: `gap-${sorted[i]}` });
    }
    items.push(sorted[i]);
  }
  return items;
}

// Scrolls the list back into view rather than jumping to the top of the
// document. Clicking "next" near the bottom of a long page used to throw you
// past the header, the filters and everything else.
//
// The offset clears the sticky navbar. behavior follows prefers-reduced-motion,
// since a long smooth scroll is exactly what that setting exists to stop.
const SCROLL_OFFSET = 80;

function scrollListIntoView(ref) {
  if (typeof window === 'undefined' || !ref?.current) return;
  const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const top = ref.current.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior: reduced ? 'auto' : 'smooth' });
}

/**
 * @param {number}   page          current page, 1-based
 * @param {number}   totalPages
 * @param {Function} onChange      called with the new page number
 * @param {object}   [scrollTo]    ref to the list container. Passing it opts
 *                                 into scrolling that list into view. The copy
 *                                 rendered above the list deliberately omits
 *                                 it: you are already at the top there, so
 *                                 scrolling would just jerk the page.
 */
export default function Pagination({ page, totalPages, onChange, scrollTo, className = '' }) {
  const items = useMemo(() => pageItems(page, totalPages), [page, totalPages]);

  if (totalPages <= 1) return null;

  const go = (p) => {
    if (p < 1 || p > totalPages || p === page) return;
    onChange(p);
    // After the new page renders. rAF alone fires before the list has been
    // painted at its new height, which lands the scroll short.
    requestAnimationFrame(() => setTimeout(() => scrollListIntoView(scrollTo), 0));
  };

  // Slightly larger on phones, where these are thumb targets rather than
  // pointer targets, and back to 32px from sm up to match the surrounding UI.
  const numberClass = (p) =>
    `w-9 h-9 sm:w-8 sm:h-8 rounded-lg text-xs font-display font-bold transition-all ${
      p === page
        ? 'bg-secondary text-secondary-foreground shadow-sm'
        : 'bg-transparent border border-transparent text-muted-foreground hover:border-border hover:text-foreground'
    }`;

  const arrowClass =
    'flex items-center justify-center w-9 h-9 sm:w-8 sm:h-8 rounded-lg bg-muted/60 border border-border/50 text-muted-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:text-foreground hover:border-secondary/40 transition-all';

  return (
    <nav
      aria-label="Pagination"
      className={`flex items-center justify-center gap-2 bg-card border border-border/60 p-1.5 rounded-xl shadow-sm max-w-max mx-auto ${className}`}
    >
      <button
        type="button"
        onClick={() => go(page - 1)}
        disabled={page === 1}
        className={arrowClass}
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Numbers on every screen. I first hid them below sm on the assumption
          that five numbers, two ellipses and two arrows would not fit; measured
          at 375px they come to roughly 330px including gaps and padding, so
          they fit with room to spare and the phone layout was just wasting it
          on a bare "7 / 40". */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        {items.map((item) =>
          typeof item === 'number' ? (
            <button
              type="button"
              key={item}
              onClick={() => go(item)}
              className={numberClass(item)}
              aria-current={item === page ? 'page' : undefined}
              aria-label={`Page ${item}`}
            >
              {item}
            </button>
          ) : (
            <span key={item.key} aria-hidden="true" className="text-muted-foreground text-xs px-0.5">
              …
            </span>
          )
        )}
      </div>

      <button
        type="button"
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        className={arrowClass}
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
