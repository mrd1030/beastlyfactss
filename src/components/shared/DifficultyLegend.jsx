import React from 'react';

export function DifficultyLegend() {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-left border-collapse border border-border rounded-xl overflow-hidden">
        <thead className="bg-muted/50">
          <tr>
            <th className="p-3 border-b border-border font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider">Level</th>
            <th className="p-3 border-b border-border font-display font-semibold text-xs text-muted-foreground uppercase tracking-wider">Tier</th>
            <th className="p-3 border-b border-border font-body font-semibold text-xs text-muted-foreground uppercase tracking-wider">Care Commitment Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card text-sm">
          <tr>
            <td className="p-3 font-display font-bold text-sky-500 dark:text-sky-400">1</td>
            <td className="p-3 font-display font-semibold text-sky-500 dark:text-sky-400">Self-Sufficient</td>
            <td className="p-3 text-muted-foreground font-body leading-relaxed">
              Minimal daily interaction required. Thrives on a steady, automated environment setup. Ideal for observation-only configurations.
            </td>
          </tr>
          <tr>
            <td className="p-3 font-display font-bold text-emerald-500 dark:text-emerald-400">2</td>
            <td className="p-3 font-display font-semibold text-emerald-500 dark:text-emerald-400">Beginner</td>
            <td className="p-3 text-muted-foreground font-body leading-relaxed">
              Requires standard routine husbandry (feeding, cleaning) but features a forgiving learning curve and highly documented care steps.
            </td>
          </tr>
          <tr>
            <td className="p-3 font-display font-bold text-amber-500 dark:text-amber-400">3</td>
            <td className="p-3 font-display font-semibold text-amber-500 dark:text-amber-400">Intermediate</td>
            <td className="p-3 text-muted-foreground font-body leading-relaxed">
              Demands specialized husbandry parameters, precise dietary variations, regular environmental balancing, or managed handling temperaments.
            </td>
          </tr>
          <tr>
            <td className="p-3 font-display font-bold text-hotpink">4</td>
            <td className="p-3 font-display font-semibold text-hotpink">Advanced</td>
            <td className="p-3 text-muted-foreground font-body leading-relaxed">
              Strict environmental control tolerances, complex diet demands, major space allocations, intense financial or long-term lifespans, or expert-only species profiles.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}