import React from 'react';

// Secondary citations, rendered as fine print with no outbound links.
//
// An article that covers a dozen conditions genuinely rests on more than the
// five or six sources worth linking, but shipping 20+ external <a> tags turns
// the foot of the page into a directory of other people's sites. These entries
// keep the evidence visible and findable (title, journal, year) while the
// linked list above stays short enough to read as further reading.
//
// The list items still match sync-articles.js countSources(), so an article's
// reported source count reflects everything it was actually built on.
export default function AlsoConsulted({ children, label = 'Also consulted', className = '' }) {
  return (
    <div className={`mt-6 text-xs leading-relaxed text-muted-foreground/80 ${className}`}>
      <p className="mb-1 font-semibold uppercase tracking-wide not-italic">{label}</p>
      <div className="italic [&_ul]:my-0 [&_ul]:list-none [&_ul]:pl-0 [&_li]:my-1">
        {children}
      </div>
    </div>
  );
}
