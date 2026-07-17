import React from 'react';

// Every article that uses this component already writes its own "## Sources"
// heading in the markdown right before <Sources> - this used to also render
// its own heading, which doubled it up on the page (and in the ToC).
//
// No border/padding of its own on purpose: the preceding "---" in the markdown
// already draws one divider ahead of the heading. This component used to add a
// second border-t right after the heading, which visually split "Sources &
// Further Reading" from its own list instead of reading as one section.
export default function Sources({ children, className = '' }) {
  return (
    <div className={`mb-10 prose prose-sm max-w-none text-muted-foreground ${className}`}>
      {children}
    </div>
  );
}
