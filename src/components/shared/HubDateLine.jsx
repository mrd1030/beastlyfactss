import hubDates from '@/lib/generated/hub-dates.json';

// One date line for a species hub, shared by its two toggle views (the care
// guide and the encyclopedia entry) so both always show and emit the same
// dates. The dates come from scripts/generate-hub-dates.mjs: a hub is as
// current as the deep dives its rows are copied from, and "Reviewed" appears
// only when the owner has reread that hub by hand.

const fmt = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

export function getHubDates(guideId) {
  return (guideId && hubDates[guideId]) || null;
}

// datePublished / dateModified for the hub's Article JSON-LD. Same precedence as
// Blog.jsx: the newer of the derived update and a hand-set review.
export function hubDateSchema(guideId) {
  const d = getHubDates(guideId);
  if (!d) return {};
  const modified = d.lastReviewed && d.lastReviewed > d.updated ? d.lastReviewed : d.updated;
  return { datePublished: d.published, dateModified: modified };
}

export default function HubDateLine({ guideId, className = '' }) {
  const d = getHubDates(guideId);
  if (!d) return null;
  return (
    <p className={`text-xs text-muted-foreground font-body ${className}`}>
      Beastly Facts · Updated <time dateTime={d.updated}>{fmt(d.updated)}</time>
      {d.lastReviewed && (
        <> · Reviewed <time dateTime={d.lastReviewed}>{fmt(d.lastReviewed)}</time></>
      )}
    </p>
  );
}
