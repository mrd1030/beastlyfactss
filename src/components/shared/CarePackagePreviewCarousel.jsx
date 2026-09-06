import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

// The "take a look inside" strip on a product page: a snap-scrolling row of
// page images with arrows and dots, and a lightbox that opens any of them at
// full size. A port of the carousel every Gumroad listing carried, on refs
// rather than document ids so two on one page could never collide, plus the
// lightbox Gumroad never had: a buyer can read a targets table before paying.
//
// The images are full letter pages, rendered by
// scripts/render-care-package-previews.mjs. In the strip they are shown
// top-cropped at 4:3 so the section title and the first table are what the
// visitor sees; the lightbox shows the whole page.
//
// The lightbox is portaled to <body>. The strip sits inside a .cp-reveal, and
// a transformed ancestor would turn position: fixed into position: absolute
// relative to itself. It renders nothing while closed, so the prerendered
// HTML never carries it.
export default function CarePackagePreviewCarousel({ packageId, packageName, previews }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(null);
  const count = previews.length;
  const src = p => `/assets/care-packages/${packageId}/page-${p.page}.jpg`;
  const alt = p => `${packageName}, page ${p.page}: ${p.alt}`;

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
        aria-label={`${packageName} pages`}
      >
        {previews.map((p, i) => (
          <figure
            key={p.page}
            className="cp-slide snap-center flex-shrink-0 w-[80%] sm:w-[42%] rounded-xl shadow-lg overflow-hidden relative group"
          >
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`Open page ${p.page} at full size`}
              className="block w-full text-left"
            >
              <img
                src={src(p)}
                alt={alt(p)}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                width="1224"
                height="1584"
                className="w-full aspect-[4/3] object-cover object-top"
              />
              <span className="cp-zoom absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold shadow-md">
                <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                {`Page ${p.page}`}
              </span>
            </button>
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

      {open !== null && (
        <Lightbox
          previews={previews}
          index={open}
          src={src}
          alt={alt}
          onClose={() => setOpen(null)}
          onStep={d => setOpen(o => (o + d + count) % count)}
        />
      )}
    </div>
  );
}

function Lightbox({ previews, index, src, alt, onClose, onStep }) {
  const closeRef = useRef(null);
  const p = previews[index];

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') onStep(1);
      else if (e.key === 'ArrowLeft') onStep(-1);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, onStep]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt(p)}
      className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <img
        src={src(p)}
        alt={alt(p)}
        width="1224"
        height="1584"
        className="max-h-full max-w-full w-auto h-auto object-contain rounded-md shadow-2xl bg-white"
        onClick={e => e.stopPropagation()}
      />
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-3 right-3 w-11 h-11 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg hover:bg-white"
      >
        <X className="w-5 h-5" aria-hidden="true" />
      </button>
      {previews.length > 1 && (
        <>
          <button
            type="button"
            onClick={e => { e.stopPropagation(); onStep(-1); }}
            aria-label="Previous page"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg hover:bg-white"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={e => { e.stopPropagation(); onStep(1); }}
            aria-label="Next page"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 text-black flex items-center justify-center shadow-lg hover:bg-white"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </>
      )}
      <p className="absolute bottom-3 left-0 right-0 text-center text-white/85 text-xs sm:text-sm px-14 pointer-events-none">
        {`Page ${p.page} · ${p.alt} · ${index + 1} of ${previews.length}`}
      </p>
    </div>,
    document.body,
  );
}
