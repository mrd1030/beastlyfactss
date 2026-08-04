import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { isPlainLeftClick } from '@/lib/utils/linkClick';

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
  const location = useLocation();
  const items = useMemo(() => pageItems(page, totalPages), [page, totalPages]);

  if (totalPages <= 1) return null;

  // Every page control is a real <a href>, not a bare button.
  //
  // These were buttons, which meant a crawler had no way to reach page 2 of
  // anything: /facts/ alone is 18 pages. The items themselves are in the
  // sitemap so nothing was unreachable, but no internal link pointed past the
  // first page of any listing.
  //
  // Every consumer (Blog, Facts, Gallery, Fact Files) reads ?page back off the
  // URL on mount and on history moves, so the href and the click handler
  // always land on the same view.
  const hrefFor = (p) => {
    const params = new URLSearchParams(location.search);
    if (p > 1) params.set('page', String(p));
    else params.delete('page');
    const qs = params.toString();
    return qs ? `${location.pathname}?${qs}` : location.pathname;
  };

  const go = (p) => {
    if (p < 1 || p > totalPages || p === page) return;
    onChange(p);
    // After the new page renders. rAF alone fires before the list has been
    // painted at its new height, which lands the scroll short.
    requestAnimationFrame(() => setTimeout(() => scrollListIntoView(scrollTo), 0));
  };

  // Let the browser handle anything that is not a plain left click, so
  // middle-click and cmd/ctrl-click still open a page in a new tab. Otherwise
  // take over and keep the existing in-place navigation.
  const clickHandler = (p) => (e) => {
    if (!isPlainLeftClick(e)) return;
    e.preventDefault();
    go(p);
  };

  // Slightly larger on phones, where these are thumb targets rather than
  // pointer targets, and back to 32px from sm up to match the surrounding UI.
  const numberClass = (p) =>
    `w-9 h-9 sm:w-8 sm:h-8 rounded-lg text-xs font-body font-bold transition-all ${
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
      {/* At the ends there is no page to go to, so there is no href either.
          A disabled link is not a thing: it renders as a span instead. */}
      {page === 1 ? (
        <span className={`${arrowClass} opacity-40`} aria-hidden="true">
          <ChevronLeft className="w-4 h-4" />
        </span>
      ) : (
        <a
          href={hrefFor(page - 1)}
          onClick={clickHandler(page - 1)}
          rel="prev"
          className={arrowClass}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
        </a>
      )}

      {/* Numbers on every screen. I first hid them below sm on the assumption
          that five numbers, two ellipses and two arrows would not fit; measured
          at 375px they come to roughly 330px including gaps and padding, so
          they fit with room to spare and the phone layout was just wasting it
          on a bare "7 / 40". */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        {items.map((item) =>
          typeof item === 'number' ? (
            <a
              key={item}
              href={hrefFor(item)}
              onClick={clickHandler(item)}
              className={`${numberClass(item)} flex items-center justify-center`}
              aria-current={item === page ? 'page' : undefined}
              aria-label={`Page ${item}`}
            >
              {item}
            </a>
          ) : (
            <span key={item.key} aria-hidden="true" className="text-muted-foreground text-xs px-0.5">
              …
            </span>
          )
        )}
      </div>

      {page === totalPages ? (
        <span className={`${arrowClass} opacity-40`} aria-hidden="true">
          <ChevronRight className="w-4 h-4" />
        </span>
      ) : (
        <a
          href={hrefFor(page + 1)}
          onClick={clickHandler(page + 1)}
          rel="next"
          className={arrowClass}
          aria-label="Next page"
        >
          <ChevronRight className="w-4 h-4" />
        </a>
      )}
    </nav>
  );
}
