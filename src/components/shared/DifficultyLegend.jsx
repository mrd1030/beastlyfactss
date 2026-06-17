import React from 'react';

export function DifficultyLegend() {
  return (
    <div className="my-2 border border-border rounded-xl overflow-hidden bg-card">
      {/* Scrollable wrappers: 
        max-h stops the modal from overflowing the screen vertically on mobile.
        overflow-x-auto allows the table columns to slide sideways instead of shrinking.
      */}
      <div className="max-h-[60vh] sm:max-h-[none] overflow-y-auto overflow-x-auto text-left">
        <table className="w-full border-collapse min-w-[500px] sm:min-w-0">
          <thead className="bg-muted/50 sticky top-0 backdrop-blur-md">
            <tr>
              <th className="p-2.5 sm:p-3 border-b border-border font-display font-semibold text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                Level
              </th>
              <th className="p-2.5 sm:p-3 border-b border-border font-display font-semibold text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider whitespace-nowrap">
                Tier
              </th>
              <th className="p-2.5 sm:p-3 border-b border-border font-body font-semibold text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                Care Commitment Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border text-xs sm:text-sm">
            <tr>
              <td className="p-2.5 sm:p-3 font-display font-bold text-sky-500 dark:text-sky-400 whitespace-nowrap">1</td>
              <td className="p-2.5 sm:p-3 font-display font-semibold text-foreground whitespace-nowrap">Self-Sufficient</td>
              <td className="p-2.5 sm:p-3 text-muted-foreground font-body leading-relaxed">
                Minimal daily interaction required. Thrives on a steady, automated environment setup. Ideal for observation-only configurations.
              </td>
            </tr>
            <tr>
              <td className="p-2.5 sm:p-3 font-display font-bold text-emerald-500 dark:text-emerald-400 whitespace-nowrap">2</td>
              <td className="p-2.5 sm:p-3 font-display font-semibold text-foreground whitespace-nowrap">Beginner</td>
              <td className="p-2.5 sm:p-3 text-muted-foreground font-body leading-relaxed">
                Requires standard routine husbandry (feeding, cleaning) but features a forgiving learning curve and highly documented care steps.
              </td>
            </tr>
            <tr>
              <td className="p-2.5 sm:p-3 font-display font-bold text-amber-500 dark:text-amber-400 whitespace-nowrap">3</td>
              <td className="p-2.5 sm:p-3 font-display font-semibold text-foreground whitespace-nowrap">Intermediate</td>
              <td className="p-2.5 sm:p-3 text-muted-foreground font-body leading-relaxed">
                Demands specialized husbandry parameters, precise dietary variations, regular environmental balancing, or managed handling temperaments.
              </td>
            </tr>
            <tr>
              <td className="p-2.5 sm:p-3 font-display font-bold text-hotpink whitespace-nowrap">4</td>
              <td className="p-2.5 sm:p-3 font-display font-semibold text-foreground whitespace-nowrap">Advanced</td>
              <td className="p-2.5 sm:p-3 text-muted-foreground font-body leading-relaxed">
                Strict environmental control tolerances, complex diet demands, major space allocations, intense financial or long-term lifespans, or expert-only species profiles.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
