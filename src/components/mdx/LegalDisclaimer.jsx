import React from 'react';
import { Scale } from 'lucide-react';
import { useArticleMeta } from '@/lib/articleMeta';
import { describeVerified } from '@/lib/utils/verifiedDates';
import LEGAL_VERIFIED from '@/lib/generated/legal-verified.json';

// The legal-status date is its own date, separate from the article's
// lastUpdated: a spelling or link pass changes the page without anyone
// re-reading the law. It comes from the matrix cells' verifiedOn, via
// scripts/generate-legal-summary.mjs, so only re-verifying a cell moves it.
// Worded by describeVerified(), the same rule the map and state pages use.
// Guides with no matrix animal behind them (federal, breeding) show no line.
export default function LegalDisclaimer({ children, className = '' }) {
  const { slug } = useArticleMeta();
  const verified = slug ? describeVerified(LEGAL_VERIFIED[slug])?.line : null;
  return (
    <div className={`my-8 rounded-2xl border border-destructive/30 bg-destructive/5 p-6 ${className}`}>
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <Scale className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <div className="mb-1 text-xs font-body font-bold uppercase tracking-wider text-destructive">
            Not Legal Advice
          </div>
          <div className="text-foreground font-body text-[15px] leading-relaxed">
            {children || "Exotic pet laws change and vary by state, county, and even city, and this article can't account for every local ordinance or permit requirement. Always verify current rules with your state wildlife agency or local animal control before acquiring a pet covered here."}
          </div>
          {verified && (
            <div className="mt-2 text-xs font-body text-muted-foreground">
              {`Legal status ${verified}.`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
