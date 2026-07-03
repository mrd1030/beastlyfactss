// Trim meta-description text to fit Google's ~160-char display limit,
// cutting at a word boundary so the ellipsis never splits a word.
export function truncateDescription(text, max = 155) {
  if (!text || text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).replace(/[,;:.\s]+$/, '')}…`;
}
