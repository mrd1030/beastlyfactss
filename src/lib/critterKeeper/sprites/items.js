import { fillEllipse, fillPoly, fillRect, makeGrid, outline, stroke } from '@/lib/critterKeeper/pixel';

// Enclosure items as pixel sprites. Each builder returns a grid of keys from
// ITEM_PAL, outlined, ready for drawGrid().
export const ITEM_PAL = {
  o: '#2b1d12',
  // wood and bark
  B: '#8a5a2b', b: '#a8743d', h: '#c99458',
  // stone
  S: '#6f6a64', s: '#8f8a82', t: '#b3ada3',
  // sand and soil
  Y: '#e6c47c', y: '#f2d9a0', D: '#5a4130', d: '#7a5a40',
  // plants
  G: '#3f7a3a', g: '#5fa34f', j: '#86c26a',
  // water
  W: '#4f8fd0', w: '#9fcaf0',
  // hammock mesh
  M: '#3a3a3a', m: '#6b6b6b', n: '#d9d4c8',
  // heat rock glow
  R: '#b8432a', r: '#e2733f', q: '#f5b169',
  // metal and glass
  X: '#9aa3ab', x: '#cfd6dc', K: '#e8edf0', k: '#c0392b',
  // the dark inside of a hide
  v: '#22150c', u: '#3a2618',
  // treat ball
  P: '#e0564a', p: '#f28b7f',
};

// Hides are little huts: about half the tank's height, big enough for him
// to curl up in, with a dark, solid doorway. The 'shell' variant leaves the
// doorway empty, for drawing him inside it.
function hut(g, part) {
  const out = outline(g);
  if (part === 'shell') return out.map((row) => row.map((k) => (k === 'v' || k === 'u' ? null : k)));
  return out;
}

function hide(part) {
  const g = makeGrid(40, 26);
  fillEllipse(g, 20, 26, 19.5, 25, 'b');
  // Bark grain and a lit top edge.
  for (let x = 3; x < 38; x += 4) for (let y = 3; y < 26; y++) if (g[y][x]) g[y][x] = 'B';
  for (let x = 8; x < 32; x++) if (g[3][x]) g[3][x] = 'h';
  for (let x = 12; x < 28; x++) if (g[2][x]) g[2][x] = 'h';
  // The doorway, dark inside with a shadowed rim.
  fillEllipse(g, 20, 27, 9, 14, 'u');
  fillEllipse(g, 20, 28, 8, 13, 'v');
  return hut(g, part);
}

function cave(part) {
  const g = makeGrid(38, 25);
  fillEllipse(g, 19, 25, 18.5, 24, 's');
  fillEllipse(g, 14, 12, 9, 6, 't');
  for (const [x, y] of [[7, 14], [26, 6], [30, 14], [17, 5], [10, 20], [28, 20], [22, 10]]) g[y][x] = 'S';
  fillEllipse(g, 20, 26, 8.5, 13, 'u');
  fillEllipse(g, 20, 27, 7.5, 12, 'v');
  return hut(g, part);
}

// Free-placed items are drawn from their shapes after rotating them, so
// they stay crisp pixel art at any angle instead of a blurry rotated image.
function rotated(parts, rot, [cx, cy]) {
  const rad = (rot * Math.PI) / 180;
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  const turn = ([x, y]) => [cx + (x - cx) * cos - (y - cy) * sin, cy + (x - cx) * sin + (y - cy) * cos];
  const turned = parts.map((p) => ({ ...p, pts: p.pts.map(turn) }));
  const all = turned.flatMap((p) => p.pts);
  const pad = 5;
  const minX = Math.floor(Math.min(...all.map((q) => q[0]))) - pad;
  const minY = Math.floor(Math.min(...all.map((q) => q[1]))) - pad;
  const maxX = Math.ceil(Math.max(...all.map((q) => q[0]))) + pad;
  const maxY = Math.ceil(Math.max(...all.map((q) => q[1]))) + pad;
  const g = makeGrid(maxX - minX, maxY - minY);
  for (const p of turned) stroke(g, p.pts.map(([x, y]) => [x - minX, y - minY]), p.r, p.c);
  // Trim the empty border so the sprite's box hugs the art.
  const rows = g.map((row, y) => (row.some(Boolean) ? y : -1)).filter((y) => y >= 0);
  const cols = g[0].map((_, x) => (g.some((row) => row[x]) ? x : -1)).filter((x) => x >= 0);
  const trimmed = g.slice(rows[0] - 1, rows.at(-1) + 2).map((row) => row.slice(cols[0] - 1, cols.at(-1) + 2));
  return outline(trimmed);
}

function branch(rot = 0) {
  const bark = (f, x, y) => ((x + y) % 5 === 0 ? 'B' : y % 3 ? 'b' : 'h');
  return rotated([
    { pts: [[2, 30], [22, 21], [42, 13], [64, 3]], r: (f) => 3.2 - f * 1.5, c: bark },
    { pts: [[28, 18], [36, 26], [44, 29]], r: 1.8, c: 'b' },
    { pts: [[50, 9], [55, 16]], r: 1.3, c: 'B' },
  ], rot, [33, 16]);
}

function hammock(rot = 0) {
  const curve = Array.from({ length: 15 }, (_, i) => [4 + (i * 52) / 14, 3 + Math.sin((i / 14) * Math.PI) * 10]);
  return rotated([
    { pts: curve, r: 1.4, c: (f, x, y) => ((x + y) % 2 ? 'm' : 'n') },
    { pts: [[1, 3], [1.2, 3]], r: 2.2, c: 'X' },
    { pts: [[59, 3], [59.2, 3]], r: 2.2, c: 'X' },
  ], rot, [30, 8]);
}

function digbox() {
  const g = makeGrid(26, 12);
  fillRect(g, 0, 3, 26, 9, 'b');
  for (let x = 0; x < 26; x += 4) for (let y = 3; y < 12; y++) g[y][x] = 'B';
  // Topsoil and play sand, mounded.
  fillEllipse(g, 13, 4, 12, 3.2, 'y');
  for (let x = 2; x < 24; x += 3) g[3 + (x % 2)][x] = 'd';
  for (let x = 4; x < 22; x += 5) g[2 + (x % 2)][x] = 'Y';
  return outline(g);
}

function treatball() {
  const g = makeGrid(10, 10);
  fillEllipse(g, 5, 5, 4.6, 4.6, 'P');
  g[2][3] = 'p'; g[3][2] = 'p'; g[2][4] = 'p';
  g[5][6] = 'o'; g[4][3] = 'o'; g[7][4] = 'o';
  return outline(g);
}

function plant() {
  const g = makeGrid(18, 16);
  // A spineless succulent: fat leaves from one base.
  const leaves = [[[9, 15], [2, 6], [5, 5]], [[9, 15], [6, 2], [9, 3]], [[9, 15], [12, 1], [13, 4]], [[9, 15], [16, 5], [15, 8]], [[9, 15], [3, 11], [6, 9]], [[9, 15], [14, 11], [11, 9]]];
  leaves.forEach((pts, i) => fillPoly(g, [...pts, [9 + (i % 2 ? 1 : -1), 13]], i % 2 ? 'g' : 'G'));
  for (let y = 3; y < 13; y += 3) for (let x = 3; x < 16; x += 4) if (g[y][x] === 'g') g[y][x] = 'j';
  fillRect(g, 6, 14, 7, 2, 'd');
  return outline(g);
}

function waterDish(full = true) {
  const g = makeGrid(18, 6);
  fillEllipse(g, 9, 3, 8.5, 3, 's');
  fillEllipse(g, 9, 2.6, 6.5, 1.8, full ? 'W' : 'S');
  if (full) { g[2][6] = 'w'; g[2][7] = 'w'; }
  return outline(g);
}

function heatRock() {
  const g = makeGrid(18, 8);
  fillEllipse(g, 9, 5, 8.5, 4, 'R');
  fillEllipse(g, 8, 4.5, 5.5, 2.4, 'r');
  g[3][6] = 'q'; g[3][7] = 'q'; g[4][9] = 'q';
  fillRect(g, 0, 8, 18, 0, null);
  return outline(g);
}

// A taller stack of basking slate, so he sits up closer to the lamp.
function platform() {
  const g = makeGrid(36, 22);
  // A flat top, so his feet sit on it wherever he stands.
  fillPoly(g, [[1, 22], [2, 7], [5, 5], [31, 5], [34, 7], [35, 22]], 's');
  fillPoly(g, [[2, 7], [5, 5], [31, 5], [34, 7], [32, 10], [4, 10]], 't');
  // Slate layers.
  for (const y of [13, 17]) for (let x = 2; x < 35; x++) g[y][x] = 'S';
  for (let x = 5; x < 34; x += 7) for (let y = 11; y < 22; y++) if (g[y][x]) g[y][x] = 'S';
  for (let x = 3; x < 34; x += 5) g[15][x] = 't';
  return outline(g);
}

function thermometer() {
  const g = makeGrid(9, 9);
  fillEllipse(g, 4.5, 4.5, 4.3, 4.3, 'K');
  g[4][4] = 'k'; g[3][5] = 'k'; g[2][6] = 'k';
  g[1][4] = 'X'; g[4][1] = 'X'; g[4][7] = 'X';
  return outline(g);
}

function ceramicEmitter() {
  const g = makeGrid(12, 9);
  fillRect(g, 3, 0, 6, 3, 'X');
  fillEllipse(g, 6, 6, 5.5, 3.5, 'x');
  return outline(g);
}

const BUILDERS = { hide, cave, branch, hammock, digbox, treatball, plant, waterDish, heatRock, platform, thermometer, ceramicEmitter };
const cache = new Map();

export function itemSprite(id, variant) {
  const key = `${id}:${variant ?? ''}`;
  if (!cache.has(key)) cache.set(key, BUILDERS[id](variant));
  return cache.get(key);
}

// Decor the player can drag into the tank. Floor items snap into the floor
// spots; `free` items (branch, hammock) go wherever they are dropped and can
// be rotated.
export const DECOR = {
  hide: { label: 'Log hide', hide: true },
  cave: { label: 'Rock cave', hide: true },
  digbox: { label: 'Dig box' },
  plant: { label: 'Succulent' },
  treatball: { label: 'Treat ball' },
  branch: { label: 'Climbing branch', free: true },
  hammock: { label: 'Hammock', free: true },
};
