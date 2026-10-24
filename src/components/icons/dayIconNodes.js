// Line icons drawn here for animal days that neither lucide nor its lab set
// covers. Same rules as lucide: a 24px grid with a 2px margin, 2px round
// stroke, no fill, every shape a path so the icon takes its color from text.
// Plain data (no JSX) so scripts/icon-sheet.mjs can render a contact sheet of
// them beside real lucide icons; labIcons.jsx wraps each one as a component.

// Ring-tailed lemur sitting, one outline: the tufted head flows into the
// body with no break, and the tail, an outlined band with two rings bridging
// it, rises off the back like a question mark (owner, 2026-10-24: the head
// must look attached to the body, and the tail attached behind it).
export const lemur = [
  ['path', { key: 'l1', d: 'M3.6 9.2C2.4 7.8 2 5.2 3 3.6c1.4.5 2.6 1.4 3.3 2.7C7.2 6.1 8 6.1 8.9 6.3c.7-1.3 1.9-2.2 3.3-2.7 1 1.6.6 4.2-.6 5.6C13 10.5 14.5 12.5 15 15c.3-1.8 1.5-3 2.5-4V5.5a1.75 1.75 0 0 1 3.5 0v6c0 4.5-3 8-7.5 8C10 19.5 6 19.5 4.5 18 3.2 16.5 3 13 3.6 9.2Z' }],
  ['path', { key: 'l2', d: 'M17.5 7.5h3.5' }],
  ['path', { key: 'l3', d: 'M17.5 10.5h3.5' }],
  ['path', { key: 'l4', d: 'M5.8 8.1v.5' }],
  ['path', { key: 'l5', d: 'M8.8 8.1v.5' }],
  ['path', { key: 'l6', d: 'm6.8 10.2.5.5.5-.5' }],
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
