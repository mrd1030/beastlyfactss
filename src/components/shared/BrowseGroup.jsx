import React from 'react';
import BrowseRow from '@/components/shared/BrowseRow';

// A group of species inside a browse list (the tetras under their group hub),
// shown as an always-open folder: the hub's row on top, the species indented
// beneath it behind a rule. It never collapses, so every species keeps its
// name, chip and link on screen and in the prerendered HTML, and it spans the
// full width of the list's grid so the indented rows get their own columns.
export default function BrowseGroup({ header, children }) {
  return (
    <div className="col-span-full">
      <BrowseRow {...header} />
      <div className="mt-2 ml-3 pl-3 border-l-2 border-border grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {children}
      </div>
    </div>
  );
}
