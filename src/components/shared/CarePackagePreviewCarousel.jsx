import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// The "take a look inside" strip on a product page: a snap-scrolling row of
// interior page images with arrows and dots. A port of the carousel every
// Gumroad listing carried, on refs rather than document ids so two on one
// page could never collide.
//
// The images are full letter pages, rendered by
// scripts/render-care-package-previews.mjs. They are shown top-cropped at 4:3
// so the section title and the first table are what the visitor sees; a whole
// page at card size is unreadable.
export default function CarePackagePreviewCarousel({ packageId, packageName, previews }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const count = previews.length;

  const activeIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (track.scrollLeft <= 4) return 0;
    if (track.scrollLeft >= maxScroll - 4) return count - 1;
    const rect = track.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    let closest = 0;
    let closestDist = Infinity;
    Array.from(track.children).forEach((slide, i) => {
      const r = slide.getBoundingClientRect();
      const d = Math.abs(r.left + r.width / 2 - center);
      if (d < closestDist) {
        closestDist = d;
        closest = i;
      }
    });
    return closest;
  }, [count]);

  const scrollTo = useCallback((i) => {
    const track = trackRef.current;
    if (!track) return;
    const slides = track.children;
    const target = Math.max(0, Math.min(count - 1, i));
    const maxScroll = track.scrollWidth - track.clientWidth;
    let left;
    if (target <= 0) left = 0;
    else if (target >= count - 1) left = maxScroll;
    else left = slides[target].offsetLeft - (track.clientWidth - slides[target].offsetWidth) / 2;
    track.scrollTo({ left, behavior: 'smooth' });
  }, [count]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        setActive(activeIndex());
        ticking = false;
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [activeIndex]);

  if (count === 0) return null;

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="cp-track flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6"
        aria-label={`${packageName} interior pages`}
      >
        {previews.map((p, i) => (
          <figure
            key={p.page}
            className="cp-slide snap-center flex-shrink-0 w-[80%] sm:w-[42%] rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={`/assets/care-packages/${packageId}/page-${p.page}.jpg`}
              alt={`${packageName}, page ${p.page}: ${p.alt}`}
              loading={i === 0 ? 'eager' : 'lazy'}
              decoding="async"
              width="1224"
              height="1584"
              className="w-full aspect-[4/3] object-cover object-top"
            />
          </figure>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollTo(active - 1)}
        aria-label="Previous page"
        className="cp-arrow hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full shadow-lg items-center justify-center transition-colors"
      >
        <ChevronLeft className="w-5 h-5" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => scrollTo(active + 1)}
        aria-label="Next page"
        className="cp-arrow hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full shadow-lg items-center justify-center transition-colors"
      >
        <ChevronRight className="w-5 h-5" aria-hidden="true" />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {previews.map((p, i) => (
          <button
            key={p.page}
            type="button"
            onClick={() => scrollTo(i)}
            aria-label={`Go to page image ${i + 1} of ${count}`}
            aria-current={i === active ? 'true' : undefined}
            className={`cp-dot w-2 h-2 rounded-full transition-colors ${i === active ? 'is-active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
