import React, { useEffect, useState } from 'react';
import { List } from 'lucide-react';
import { slugify } from '@/lib/utils/slugify';

// Scans the already-rendered content DOM for headings instead of parsing
// each content source (MDX component, Sanity portable text, raw string)
// separately — works uniformly regardless of where the post came from.
export default function TableOfContents({ contentRef, watch, skipText }) {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) { setHeadings([]); return; }

    const nodes = [...container.querySelectorAll('h2, h3')];
    const seenIds = new Set();
    const list = nodes
      .filter(node => node.innerText?.trim() && node.innerText.trim() !== skipText)
      .map(node => {
        const text = node.innerText.trim();
        let id = node.id || slugify(text) || 'section';
        let unique = id;
        let i = 2;
        while (seenIds.has(unique)) unique = `${id}-${i++}`;
        seenIds.add(unique);
        if (!node.id) node.id = unique;
        return { id: unique, text, level: node.tagName === 'H3' ? 3 : 2 };
      });

    setHeadings(list);
  }, [contentRef, watch, skipText]);

  // Below this, it's not worth a nav card — e.g. fact-list articles that only
  // have the trailing Sources heading(s) and no real section structure.
  if (headings.length < 3) return null;

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-5">
      <h3 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-1.5">
        <List className="w-4 h-4" /> On This Page
      </h3>
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
    </div>
  );
}
