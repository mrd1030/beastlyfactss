import React from 'react';

// A breather between two untinted homepage sections, where there is no band
// edge to do the separating. Three scale arcs, the same motif the band gutters
// tile, between two hairlines that fade out into the page.
//
// Purely decorative, so aria-hidden: it carries no information a screen reader
// needs, and the headings on either side already mark the boundary in the
// accessibility tree.
//
// Colours come from inline style rather than SVG stroke="" attributes. A
// presentation attribute is not a CSS declaration, so var() does not resolve
// there and the strokes would come out unpainted; in a style object it does.
export default function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-3 px-4 py-3 sm:py-5" aria-hidden="true">
      <span className="h-px w-14 sm:w-32 bg-gradient-to-r from-transparent to-border/50" />
      <svg
        width="44"
        height="14"
        viewBox="0 0 44 14"
        fill="none"
        className="flex-shrink-0"
        role="presentation"
      >
        <path d="M2 12a6 6 0 0 1 12 0" style={{ stroke: 'hsl(var(--accent))' }} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M16 12a6 6 0 0 1 12 0" style={{ stroke: 'hsl(var(--secondary))' }} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M30 12a6 6 0 0 1 12 0" style={{ stroke: 'hsl(var(--accent))' }} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <span className="h-px w-14 sm:w-32 bg-gradient-to-l from-transparent to-border/50" />
    </div>
  );
}
