import React, { useEffect, useId, useState } from 'react';
import { ChevronDown, Folder, FolderOpen } from 'lucide-react';

// A group of species inside a browse list (the tetras), shown as an accordion
// row that sits in the grid like any other row and opens a panel beneath it.
//
// The panel is a sibling grid item spanning the full width, not part of the
// row, so the row keeps its normal cell size. The list grid uses dense packing
// (grid-flow-row-dense), which lets the rows after the group fill the cells
// beside it when it opens, so the panel lands under the row the group sits in
// rather than leaving a hole. Closed, the panel is hidden, not unmounted (the
// class toggles too, since Tailwind's `grid` would override the attribute):
// every species link stays in the DOM and so in the prerendered HTML.
//
// It reads as "opens" rather than "links" by breaking the three things every
// species row carries, in the same slots: a dashed folder tile where the photo
// sits (never a species photo: each photo appears once per slot), the member
// count where the difficulty chip sits, and a down chevron. Same cell size, so
// the grid stays aligned.
//
// `defaultOpen` opens it while a search or a filter is narrowing the list, so
// a species found by name is on screen without a click.
export default function BrowseGroup({ name, subtitle, count, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  useEffect(() => { setOpen(defaultOpen); }, [defaultOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${name}, ${count} species, ${open ? 'collapse' : 'expand'}`}
        className={`flex items-center justify-between w-full text-left bg-card border rounded-xl px-4 py-3 hover:border-secondary/40 hover:shadow-sm transition-all group cursor-pointer ${open ? 'border-secondary/40' : 'border-border'}`}
      >
        <span className="flex items-center gap-3 min-w-0">
          <span className={`w-10 h-10 rounded-lg flex-shrink-0 grid place-items-center border border-dashed transition-colors ${open ? 'bg-secondary/15 border-secondary/60 text-secondary' : 'bg-muted border-border text-muted-foreground group-hover:text-secondary group-hover:border-secondary/40'}`}>
            {open ? <FolderOpen className="w-5 h-5" aria-hidden="true" /> : <Folder className="w-5 h-5" aria-hidden="true" />}
          </span>
          <span className="min-w-0">
            <span className="block font-body font-semibold text-sm text-foreground line-clamp-2 break-words">{name}</span>
            {subtitle && <span className="block text-xs text-muted-foreground font-body italic truncate">{subtitle}</span>}
          </span>
        </span>
        <span className="flex items-center gap-2 flex-shrink-0">
          <span className="inline-flex justify-center min-w-[2.125rem] text-xs font-body font-semibold px-2 py-0.5 rounded-full bg-secondary/15 text-secondary">{count}</span>
          <ChevronDown className={`w-3.5 h-3.5 text-muted-foreground group-hover:text-secondary transition-transform ${open ? 'rotate-180' : ''}`} />
        </span>
      </button>
      <div
        id={panelId}
        hidden={!open}
        className={`col-span-full ml-3 pl-3 border-l-2 border-secondary/60 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ${open ? 'grid' : 'hidden'}`}
      >
        {children}
      </div>
    </>
  );
}
