import React from 'react';
import { Tag } from 'lucide-react';

export default function AffiliateDisclosure({ children, className = '' }) {
  return (
    <div className={`my-8 rounded-2xl border border-border bg-muted/50 p-6 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
          <Tag className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <div className="mb-1 text-xs font-display font-bold uppercase tracking-wider text-muted-foreground">
            Affiliate Disclosure
          </div>
          <div className="text-foreground font-body text-[15px] leading-relaxed">
            {children || 'This post contains affiliate links. We may earn a commission from qualifying purchases at no extra cost to you.'}
          </div>
        </div>
      </div>
    </div>
  );
}
