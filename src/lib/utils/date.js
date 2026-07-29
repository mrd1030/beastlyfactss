// A post's publish date can be set in the future as a soft scheduling signal.
// These helpers keep that date invisible everywhere (visible text, JSON-LD,
// meta tags) until the real-world clock actually reaches it.

export function isFutureDated(dateValue) {
  if (!dateValue) return false;
  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) return false;
  return parsed > new Date();
}

export function getDisplayDate(dateValue, options = { month: 'short', day: 'numeric', year: 'numeric' }) {
  if (!dateValue || isFutureDated(dateValue)) return '';
  return new Date(dateValue).toLocaleDateString('en-US', options);
}

// For machine-readable fields (JSON-LD, <meta> tags) that should be omitted
// entirely rather than shown with a formatted fallback.
export function getDisplayIsoDate(dateValue) {
  if (!dateValue || isFutureDated(dateValue)) return '';
  return dateValue;
}
