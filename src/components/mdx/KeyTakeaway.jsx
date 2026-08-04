import React from 'react';
import { Target } from 'lucide-react';

// The "here is the thing to remember" callout, distinct from FunFact.
//
// FunFact is an aside: something enjoyable that the article would still work
// without. KeyTakeaway is the opposite, the load-bearing point of the section
// it follows, pulled out so a skimming reader still leaves with it. Styled on
// the accent rather than the secondary colour so the two never read as the
// same box, and given a heavier left rule since it is part of the argument
// rather than a digression from it.
export default function KeyTakeaway({ children, className = '' }) {
  return (
    <div className={`my-8 rounded-2xl border border-accent/30 border-l-4 border-l-accent bg-accent/5 p-6 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
          <Target className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <div className="mb-1 text-xs font-body font-bold uppercase tracking-wider text-accent">
            Key Takeaway
          </div>
          <div className="text-foreground font-body text-[15px] leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
