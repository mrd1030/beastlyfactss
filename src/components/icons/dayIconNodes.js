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

// Sloth hanging under a branch, face toward us: the dark eye stripes and the
// smile are the whole animal at 16px.
export const sloth = [
  ['path', { key: 's1', d: 'M2 4h20' }],
  ['path', { key: 's2', d: 'M7 4v5.3' }],
  ['path', { key: 's3', d: 'M17 4v5.3' }],
  ['path', { key: 's4', d: 'M18.5 13.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z' }],
  ['path', { key: 's5', d: 'm10.5 12.5-3.5-.6' }],
  ['path', { key: 's6', d: 'm13.5 12.5 3.5-.6' }],
  ['path', { key: 's7', d: 'M12 15.2h.01' }],
  ['path', { key: 's8', d: 'M9.5 17c1.5 1.2 3.5 1.2 5 0' }],
];

// Wombat, face on: round head, small rounded ears, and the big flat nose
// low on the face. A side view read as a capybara.
export const wombat = [
  ['path', { key: 'w1', d: 'M18.5 13.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z' }],
  ['path', { key: 'w2', d: 'M7 9.3c-.8-1.2-.8-2.8.2-3.8 1 .4 1.8 1.2 2.3 2.2' }],
  ['path', { key: 'w3', d: 'M17 9.3c.8-1.2.8-2.8-.2-3.8-1 .4-1.8 1.2-2.3 2.2' }],
  ['path', { key: 'w4', d: 'M9.5 12v.5' }],
  ['path', { key: 'w5', d: 'M14.5 12v.5' }],
  ['path', { key: 'w6', d: 'M10 14.5h4a1.75 1.75 0 0 1 0 3.5h-4a1.75 1.75 0 0 1 0-3.5Z' }],
];

// Giant anteater, side view: the long tapering snout, a shoulder stripe and
// the bushy tail raised behind.
export const anteater = [
  ['path', { key: 'a1', d: 'M21 16c-3-3-5.5-7-9.5-7C7.5 9 4 11.5 4 15c0 2 1.5 3 4 3h6c1.5 0 3-.5 4-1.5Z' }],
  ['path', { key: 'a2', d: 'M4.5 13C2.5 12 2 9 3 6c1.5 1.5 3 2 5 3' }],
  ['path', { key: 'a3', d: 'm9 10 2 4' }],
  ['path', { key: 'a4', d: 'm12 8.5.5-2 1.3 1.7' }],
  ['path', { key: 'a5', d: 'M8 18v2.5' }],
  ['path', { key: 'a6', d: 'M13 18v2.5' }],
];

// Monkey, face on: round head with the round ears out at the sides and the
// muzzle low on the face.
export const monkey = [
  ['path', { key: 'm1', d: 'M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z' }],
  ['path', { key: 'm2', d: 'M6.4 9.6a2.8 2.8 0 1 0 0 4.8' }],
  ['path', { key: 'm3', d: 'M17.6 9.6a2.8 2.8 0 1 1 0 4.8' }],
  ['path', { key: 'm4', d: 'M9.5 10.5v.5' }],
  ['path', { key: 'm5', d: 'M14.5 10.5v.5' }],
  ['path', { key: 'm6', d: 'M8.5 13.5c0 2.5 1.5 4 3.5 4s3.5-1.5 3.5-4' }],
  ['path', { key: 'm7', d: 'M12 15.5h.01' }],
];

// Llama: head and the long neck in profile, banana ears up.
export const llama = [
  ['path', { key: 'll1', d: 'M5 21c0-5 .5-9 2.5-12.5C8.5 6.5 9.5 5.5 11 5.5l1-3 1 3h1l1-3 1 3c1.5 0 2.5 1 3 2.5l1 2c.3 1-.3 1.8-1.3 2l-2.5.5c-.5 2.2-1.8 3.5-3.7 4-.8 2-1 4-1 6.5' }],
  ['path', { key: 'll2', d: 'M14 8.2h.01' }],
];
