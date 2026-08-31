import React from 'react';
import { useArticleMeta } from '@/lib/articleMeta';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Formatted from the ISO parts rather than through toLocaleDateString or a
// Date. new Date('2026-07-06') is parsed as UTC midnight and then printed in
// the reader's zone, which renders as the 5th anywhere west of Greenwich, and
// toLocaleDateString would additionally give the prerendered HTML the build
// machine's locale and the hydrating client theirs - a text mismatch on 594
// pages. Slicing the string has neither problem.
function formatReviewDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(iso || ''));
  if (!m) return null;
  const month = MONTHS[Number(m[2]) - 1];
  if (!month) return null;
  return `${Number(m[3])} ${month} ${m[1]}`;
}

// Every article that uses this component already writes its own "## Sources"
// heading in the markdown right before <Sources> - this used to also render
// its own heading, which doubled it up on the page (and in the ToC).
//
// No border/padding of its own on purpose: the preceding "---" in the markdown
// already draws one divider ahead of the heading. This component used to add a
// second border-t right after the heading, which visually split "Sources &
// Further Reading" from its own list instead of reading as one section.
//
// The review line above the list is the only place either of these numbers is
// visible to a reader. 594 articles carry lastReviewed and 561 carry a derived
// sourceCount, and until now both existed purely to feed schema.org's
// dateModified, so the site did the work of dating and citing everything and
// then showed none of it. Here rather than under the title because that is
// where a reader who is checking whether to trust the piece is already looking.
//
// Both halves are independent: an article with a review date but no <Sources>
// list still gets the date, and one with sources but no date still gets the
// count. Nothing renders when the component is used outside an article.
export default function Sources({ children, className = '' }) {
  const { lastReviewed, sourceCount } = useArticleMeta();
  const reviewed = formatReviewDate(lastReviewed);
  const parts = [];
  if (reviewed) parts.push(`Last reviewed ${reviewed}`);
  if (sourceCount > 0) parts.push(`${sourceCount} source${sourceCount === 1 ? '' : 's'}`);

  return (
    <div className={`mb-10 prose prose-sm max-w-none text-muted-foreground ${className}`}>
      {parts.length > 0 && (
        <p className="not-prose text-xs font-body text-muted-foreground mb-3">
          {parts.join(' · ')}
        </p>
      )}
      {children}
    </div>
  );
}
