import React from 'react';

// Every article that uses this component already writes its own "## Sources"
// heading in the markdown right before <Sources> - this used to also render
// its own heading, which doubled it up on the page (and in the ToC).
export default function Sources({ children, className = '' }) {
  return (
    <div className={`my-10 border-t border-border pt-8 ${className}`}>
      <div className="prose prose-sm max-w-none text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
