// Line icons drawn here for animal days that neither lucide nor its lab set
// covers. Same rules as lucide: a 24px grid with a 2px margin, 2px round
// stroke, no fill, every shape a path so the icon takes its color from text.
// Plain data (no JSX) so scripts/icon-sheet.mjs can render a contact sheet of
// them beside real lucide icons; labIcons.jsx wraps each one as a component.

// Ring-tailed lemur: round face with tufted ears on the left, the banded tail
// curling up beside it like a question mark. The bands cross the tail.
export const lemur = [
  ['path', { key: 'l1', d: 'M12 13a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z' }],
  ['path', { key: 'l2', d: 'M4.3 9.8C2.8 8.4 2.4 6 3.4 4.4c1.6.5 3 1.6 3.8 3.2' }],
  ['path', { key: 'l3', d: 'M10.7 9.8c1.5-1.4 1.9-3.8.9-5.4-1.6.5-3 1.6-3.8 3.2' }],
  ['path', { key: 'l4', d: 'M6 12.5v.5' }],
  ['path', { key: 'l5', d: 'M9 12.5v.5' }],
  ['path', { key: 'l6', d: 'm7 15.3.5.5.5-.5' }],
  ['path', { key: 'l7', d: 'M11 18a8.5 8.5 0 0 0 9-8.5V4.5' }],
  ['path', { key: 'l8', d: 'm15 15.6 1.5 2.6' }],
  ['path', { key: 'l9', d: 'm17.6 13 2.6 1.5' }],
  ['path', { key: 'l10', d: 'M18.5 7h3' }],
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
