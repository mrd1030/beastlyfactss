import React from 'react';
import { Lightbulb } from 'lucide-react';

export default function FunFact({ children, className = '' }) {
  return (
    <div className={`my-8 rounded-2xl border border-secondary/30 bg-secondary/5 p-6 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
          <Lightbulb className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <div className="mb-1 text-xs font-display font-bold uppercase tracking-wider text-secondary">
            Fun Fact
          </div>
          <div className="text-foreground font-body text-[15px] leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
