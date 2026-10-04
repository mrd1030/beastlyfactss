// Trim meta-description text to fit Google's ~160-char display limit.
// Prefers ending on a complete sentence so the snippet reads as finished.
// Falls back to a word-boundary cut with an ellipsis when no sentence end
// lands late enough to leave a useful description.
//
// The floor was 70, which let a short tagline or opening sentence end the
// description on its own: Ahrefs flagged 23 pages under its 110-char minimum
// (Beastfiles, encyclopedia profiles, two excerpt-fallback posts). At 110 a
// cut that early falls through to the word-boundary cut instead.
const MIN_SENTENCE_CUT = 110;

export function truncateDescription(text, max = 160) {
  if (!text || text.length <= max) return text;
  const window = text.slice(0, max + 1);
  const sentenceEnd = /[.!?](?=\s)/g;
  let end = -1;
  let match;
  while ((match = sentenceEnd.exec(window)) !== null) {
    if (match.index < max) end = match.index;
  }
  if (end + 1 >= MIN_SENTENCE_CUT) return window.slice(0, end + 1);
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max - 1).replace(/[,;:.\s]+$/, '')}…`;
}
