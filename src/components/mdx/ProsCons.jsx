import React from 'react';
import { Check, X } from 'lucide-react';

export default function ProsCons({ 
  pros = [], 
  cons = [], 
  className = '' 
}) {
  return (
    <div className={`my-8 grid gap-4 md:grid-cols-2 ${className}`}>
      {/* Pros */}
      <div className="rounded-2xl border border-green-200 bg-green-50/50 p-6 dark:border-green-900/50 dark:bg-green-950/20">
        <div className="mb-4 flex items-center gap-2 text-green-700 dark:text-green-400">
          <Check className="h-5 w-5" />
          <span className="font-display text-sm font-bold uppercase tracking-wider">Pros</span>
        </div>
        <ul className="space-y-2 text-sm text-foreground">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="rounded-2xl border border-red-200 bg-red-50/50 p-6 dark:border-red-900/50 dark:bg-red-950/20">
        <div className="mb-4 flex items-center gap-2 text-red-700 dark:text-red-400">
          <X className="h-5 w-5" />
          <span className="font-display text-sm font-bold uppercase tracking-wider">Cons</span>
        </div>
        <ul className="space-y-2 text-sm text-foreground">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-500" />
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
