import React from 'react';

export default function Sources({ children, className = '' }) {
  return (
    <div className={`my-10 border-t border-border pt-8 ${className}`}>
      <h3 className="mb-4 font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">
        Sources &amp; Further Reading
      </h3>
      <div className="prose prose-sm max-w-none text-muted-foreground">
        {children}
      </div>
    </div>
  );
}
