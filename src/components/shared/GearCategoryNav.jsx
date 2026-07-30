import React from 'react';
import { List } from 'lucide-react';
import { slugify } from '@/lib/utils/slugify';

// Jump-to-category nav for the Gear page, styled after TableOfContents.jsx's
// "On This Page" card - lets someone land on e.g. "Birds" and go straight to
// "Feeding & Watering" instead of scrolling past every other category first.
export default function GearCategoryNav({ categories }) {
  if (!categories || categories.length < 2) return null;

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-5">
      <h3 className="font-display font-bold text-sm text-foreground mb-3 flex items-center gap-1.5">
        <List className="w-4 h-4" /> Jump to a Category
      </h3>
      <nav className="space-y-2">
        {categories.map(({ category, count }) => {
          const id = slugify(category);
          return (
            <a
              key={category}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className="flex items-center justify-between gap-2 text-xs font-body text-muted-foreground hover:text-secondary transition-colors leading-snug"
            >
              <span>{category}</span>
              <span className="text-muted-foreground/60 flex-shrink-0">{count}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
