import React, { useEffect, useState } from 'react';
import { List } from 'lucide-react';
import { slugify } from '@/lib/utils/slugify';

// Scans the already-rendered content DOM for headings instead of parsing
// each content source (MDX component, Sanity portable text, raw string)
// separately - works uniformly regardless of where the post came from.
export default function TableOfContents({ contentRef, watch, skipText, collapsible = false }) {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Skipped during prerendering: this effect populates `headings` (which
    // gates whether the whole component renders at all, via the
    // `headings.length < 3` check below) and also mutates heading elements
    // directly (id, scrollMarginTop). If it settles before prerender.mjs
    // captures the page, the static HTML shows the full TOC card - but a
    // real client's hydration-time first render always starts at
    // headings=[] (this effect hasn't run yet), which returns null instead -
    // a whole-component structural mismatch, not just a style difference.
    // Same class of issue as CategoryBrowse's/CritterDigestPreview's
    // fetch-driven state before their fixes.
    if (window.__IS_PRERENDER__) return;
    const container = contentRef.current;
    if (!container) { setHeadings([]); return; }

    const nodes = [...container.querySelectorAll('h2, h3')];
    // Read every heading's text FIRST, in its own pass, before any of the
    // id/style writes below. `innerText` forces a synchronous layout read -
    // doing that read for node N+1 interleaved with the id/style write for
    // node N (as a single filter().map() chain over the live nodes used to)
    // meant each write invalidated layout right before the next node's read,
    // forcing a synchronous reflow once per heading. Batching all the reads
    // up front, then all the writes after, means layout only needs to
    // settle once (for the reads) and once again after (for the writes),
    // instead of ping-ponging per node.
    const entries = nodes
      .map(node => ({ node, text: node.innerText?.trim() || '' }))
      .filter(({ text }) => text && text !== skipText);

    const seenIds = new Set();
    const list = entries.map(({ node, text }) => {
      let id = node.id || slugify(text) || 'section';
      let unique = id;
      let i = 2;
      while (seenIds.has(unique)) unique = `${id}-${i++}`;
      seenIds.add(unique);
      if (!node.id) node.id = unique;
      // Clears the fixed navbar (+ reading progress bar, which overlaps it) plus
      // a little breathing room, so a jumped-to heading isn't flush against the top.
      node.style.scrollMarginTop = 'calc(56px + var(--safe-area-inset-top, 0px) + 16px)';
      return { id: unique, text, level: node.tagName === 'H3' ? 3 : 2 };
    });

    setHeadings(list);
  }, [contentRef, watch, skipText]);

  // Below this, it's not worth a nav card - e.g. fact-list articles that only
  // have the trailing Sources heading(s) and no real section structure.
  if (headings.length < 3) return null;

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const nav = (
    <nav className="space-y-2">
      {headings.map(h => (
        <a
          key={h.id}
          href={`#${h.id}`}
          onClick={(e) => handleClick(e, h.id)}
          className={`block text-xs font-body text-muted-foreground hover:text-secondary transition-colors leading-snug ${h.level === 3 ? 'pl-3' : ''}`}
        >
          {h.text}
        </a>
      ))}
    </nav>
  );

  // Collapsible mode is for the mobile-only instance placed above the
  // article (see Blog.jsx): a jump-to-section nav is only useful before
  // reading, but showing it open by default there would push the whole
  // article down the page before a reader sees any of it. The always-open
  // card below is unchanged for the desktop sticky sidebar, where that's
  // not a concern.
  if (collapsible) {
    return (
      <details className="bg-card border border-border rounded-2xl overflow-hidden group">
        <summary className="p-4 flex items-center gap-1.5 font-display font-bold text-sm text-foreground cursor-pointer list-none">
          <List className="w-4 h-4 flex-shrink-0" />
          On This Page
          <span className="ml-auto text-xs text-muted-foreground font-body transition-transform group-open:rotate-180">▾</span>
        </summary>
        <div className="px-4 pb-4">{nav}</div>
      </details>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-5">
      <h3 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-1.5">
        <List className="w-4 h-4" /> On This Page
      </h3>
      {nav}
    </div>
  );
}
