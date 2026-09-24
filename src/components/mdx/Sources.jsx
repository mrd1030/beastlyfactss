import React, { useState } from 'react';
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
// visible to a reader. Articles carry lastReviewed and a derived sourceCount,
// and until now both existed purely to feed schema.org's dateModified, so the
// site did the work of dating and citing everything and then showed none of
// it. Here rather than under the title because that is where a reader who is
// checking whether to trust the piece is already looking.
//
// Both halves are independent: an article with a review date but no <Sources>
// list still gets the date, and one with sources but no date still gets the
// count. Nothing renders when the component is used outside an article.
//
// A review date in the future is a scheduling artifact (lastReviewed is set to
// the intended publish date), not a review that has happened, so it is held
// back until the day arrives - the same gate the byline date goes through.
// Same two-step clock as Blog.jsx: the build stamp for the first render so the
// prerendered HTML and the hydrating client agree, then the live clock after
// mount, so a page that crosses its date between deploys catches up without a
// hydration mismatch.
// How many sources show before the reader asks for the rest. A wide guide can
// legitimately rest on a dozen pages (the birdwatching guide spans eagle
// biology, ID method, ethics, collision and disease figures), but a foot of the
// page carrying twelve outbound links reads as a bibliography rather than an
// article, and the first thing a reader wants is the two or three figures they
// might check. The rest stay one click away.
//
// Kept in sync by hand with the nth-child selector below: Tailwind needs the
// class as a literal string, so `n+7` cannot be interpolated from this number.
const SOURCES_VISIBLE = 6;

// Scoped to the direct child list on purpose. Eight articles nest
// <AlsoConsulted> inside <Sources>, and that list is already the fine-print
// tier - a descendant selector would collapse it a second time and hide half
// of it behind a toggle that claims to be about the linked sources. `> ul` only
// ever matches the markdown list written directly inside <Sources>.
const OVERFLOW_HIDDEN = '[&>ul:first-of-type>li:nth-child(n+7)]:hidden';

// Hidden in CSS rather than unmounted: every link stays in the prerendered
// HTML, so a crawler, a reader with JS off, and Ctrl+F all still see the full
// list. Only the paint changes.
function findFirstList(node) {
  let found = null;
  React.Children.forEach(node, (child) => {
    if (found || !React.isValidElement(child)) return;
    if (child.type === 'ul' || child.type === 'ol') {
      found = child;
      return;
    }
    if (child.props?.children) found = findFirstList(child.props.children) || found;
  });
  return found;
}

function countDirectItems(list) {
  if (!list) return 0;
  let count = 0;
  React.Children.forEach(list.props?.children, (child) => {
    if (React.isValidElement(child) && child.type === 'li') count += 1;
  });
  return count;
}

export default function Sources({ children, className = '' }) {
  const { lastReviewed, sourceCount } = useArticleMeta();
  // Starts collapsed, and the prerender renders it collapsed too, so the first
  // client paint matches the served HTML with no hydration mismatch.
  const [expanded, setExpanded] = useState(false);
  const reviewed = formatReviewDate(lastReviewed);
  const parts = [];
  if (reviewed) parts.push(`Last reviewed ${reviewed}`);
  if (sourceCount > 0) parts.push(`${sourceCount} source${sourceCount === 1 ? '' : 's'}`);

  // Counts only the linked list this toggle actually controls, so the label
  // never promises to reveal <AlsoConsulted> entries it does not touch.
  const listed = countDirectItems(findFirstList(children));
  const hiddenCount = listed - SOURCES_VISIBLE;
  const collapsible = hiddenCount > 0;
  const collapsed = collapsible && !expanded;

  return (
    <div className={`mb-10 prose prose-sm max-w-none text-muted-foreground ${className}`}>
      {parts.length > 0 && (
        <p className="not-prose text-xs font-body text-muted-foreground mb-3">
          {parts.join(' · ')}
        </p>
      )}
      <div className={collapsed ? OVERFLOW_HIDDEN : undefined}>{children}</div>
      {collapsible && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="not-prose mt-2 text-xs font-body font-semibold text-primary underline decoration-primary/30 underline-offset-2 hover:decoration-primary transition-colors"
        >
          {expanded ? 'Show fewer sources' : `Show ${hiddenCount} more source${hiddenCount === 1 ? '' : 's'}`}
        </button>
      )}
    </div>
  );
}
