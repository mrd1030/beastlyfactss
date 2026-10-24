// Line icons drawn here for animal days that neither lucide nor its lab set
// covers. Same rules as lucide: a 24px grid with a 2px margin, 2px round
// stroke, no fill, every shape a path so the icon takes its color from text.
// Plain data (no JSX) so scripts/icon-sheet.mjs can render a contact sheet of
// them beside real lucide icons; labIcons.jsx wraps each one as a component.

// Ring-tailed lemur sitting: face on top of a round body, the tail an
// outlined band rising from the body's right side like a question mark,
// with two rings bridging it (owner's sketch, 2026-10-24).
export const lemur = [
  ['path', { key: 'l1', d: 'M9.5 7.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z' }],
  ['path', { key: 'l2', d: 'M3.4 5.3C2.5 4.3 2.2 2.8 3 1.8c1.1.4 2 1.1 2.7 2.2' }],
  ['path', { key: 'l3', d: 'M8.6 5.3c.9-1 1.2-2.5.4-3.5-1.1.4-2 1.1-2.7 2.2' }],
  ['path', { key: 'l4', d: 'M4.8 7.1v.5' }],
  ['path', { key: 'l5', d: 'M7.2 7.1v.5' }],
  ['path', { key: 'l6', d: 'm5.5 9.3.5.5.5-.5' }],
  ['path', { key: 'l7', d: 'M14 15.5a5.5 4.5 0 1 1-11 0 5.5 4.5 0 0 1 11 0Z' }],
  ['path', { key: 'l8', d: 'M12 18.9c5.5.3 9-3.4 9-8.4V5.5a1.75 1.75 0 0 0-3.5 0v5c0 3-1.7 5.2-3.7 5.8' }],
  ['path', { key: 'l9', d: 'M17.5 7.5h3.5' }],
  ['path', { key: 'l10', d: 'm16.8 13.7 2.6 2' }],
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
