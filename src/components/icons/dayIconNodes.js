// Line icons drawn here for animal days that neither lucide nor its lab set
// covers. Same rules as lucide: a 24px grid with a 2px margin, 2px round
// stroke, no fill, every shape a path so the icon takes its color from text.
// Plain data (no JSX) so scripts/icon-sheet.mjs can render a contact sheet of
// them beside real lucide icons; labIcons.jsx wraps each one as a component.

// Ring-tailed lemur: small round face with tufted ears on the left, the
// tail an outlined band curling up beside it like a question mark, with
// three rings bridging the band. Strokes across a single-line tail read as a
// caterpillar, and a dashed tail as beads; the band is what survives 16px.
export const lemur = [
  ['path', { key: 'l1', d: 'M10.5 12.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z' }],
  ['path', { key: 'l2', d: 'M3.6 9.6C2.3 8.3 2 6 3 4.5c1.4.5 2.6 1.4 3.4 2.8' }],
  ['path', { key: 'l3', d: 'M9.4 9.6c1.3-1.3 1.6-3.6.6-5.1-1.4.5-2.6 1.4-3.4 2.8' }],
  ['path', { key: 'l4', d: 'M5.2 12v.5' }],
  ['path', { key: 'l5', d: 'M7.8 12v.5' }],
  ['path', { key: 'l6', d: 'm6 14.5.5.5.5-.5' }],
  ['path', { key: 'l7', d: 'M9.5 19c6.5 0 11.5-4 11.5-10V4.5a1.75 1.75 0 0 0-3.5 0V9c0 3.5-3 6.5-7 6.5' }],
  ['path', { key: 'l8', d: 'M17.5 7h3.5' }],
  ['path', { key: 'l9', d: 'm15.5 13.6 2.2 2.7' }],
  ['path', { key: 'l10', d: 'm12.8 15.2.4 3.3' }],
];

// Numbat: side view, long thin snout to the right, three stripes across the
// rump and the bushy tail raised behind.
export const numbat = [
  ['path', { key: 'n1', d: 'M6 16.5c-1.5-2-1-5 1-7 1-.8 3-1.5 6-1.5l9 3.5-7 .5c-.5 2-2 4-5 4.5H6Z' }],
  ['path', { key: 'n2', d: 'M7.2 10.6v4.6' }],
  ['path', { key: 'n3', d: 'M9.8 9.3v5.6' }],
  ['path', { key: 'n4', d: 'M12.4 8.6v4.8' }],
  ['path', { key: 'n5', d: 'M15.5 10.5h.01' }],
  ['path', { key: 'n6', d: 'M13.5 8.8 14 6l1.5 2' }],
  ['path', { key: 'n7', d: 'M6.5 11.2C3.4 10.6 2 8 3 4.5c2 .8 3.7 2.4 4.8 4.8' }],
  ['path', { key: 'n8', d: 'M8 16.5v3' }],
  ['path', { key: 'n9', d: 'M12 16.5v3' }],
];
