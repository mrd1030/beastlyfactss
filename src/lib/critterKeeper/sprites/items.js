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
  // treat ball
  P: '#e0564a', p: '#f28b7f',
};

// Hides stand about half the tank's height, big enough for him to curl up in.
function hide() {
  const g = makeGrid(40, 26);
  fillEllipse(g, 20, 26, 19.5, 25, 'b');
  // Bark grain and a lit top edge.
  for (let x = 3; x < 38; x += 4) for (let y = 3; y < 26; y++) if (g[y][x]) g[y][x] = 'B';
  for (let x = 8; x < 32; x++) if (g[3][x]) g[3][x] = 'h';
  for (let x = 12; x < 28; x++) if (g[2][x]) g[2][x] = 'h';
  // The doorway.
  fillEllipse(g, 20, 27, 9, 14, null);
  return outline(g);
}

function cave() {
  const g = makeGrid(38, 25);
  fillEllipse(g, 19, 25, 18.5, 24, 's');
  fillEllipse(g, 14, 12, 9, 6, 't');
  for (const [x, y] of [[7, 14], [26, 6], [30, 14], [17, 5], [10, 20], [28, 20], [22, 10]]) g[y][x] = 'S';
  fillEllipse(g, 20, 26, 8.5, 13, null);
  return outline(g);
}

function branch() {
  const g = makeGrid(46, 24);
  stroke(g, [[2, 21], [16, 15], [28, 10], [43, 3]], (f) => 2.3 - f * 0.9, (f, x, y) => ((x + y) % 5 === 0 ? 'B' : y % 3 ? 'b' : 'h'));
  stroke(g, [[20, 13], [25, 18], [30, 20]], 1.3, 'b');
  stroke(g, [[32, 9], [35, 13]], 1, 'B');
  return outline(g);
}

function hammock() {
  const g = makeGrid(36, 12);
  for (let x = 3; x <= 32; x++) {
    const t = (x - 3) / 29;
    const y = 2 + Math.round(Math.sin(t * Math.PI) * 6);
    for (let k = 0; k < 2; k++) g[y + k][x] = (x + k) % 2 ? 'm' : 'n';
  }
  // Suction cups at the ends.
  fillRect(g, 0, 1, 3, 3, 'X');
  fillRect(g, 33, 1, 3, 3, 'X');
  return outline(g);
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
  fillPoly(g, [[1, 22], [2, 10], [9, 6], [25, 5], [34, 8], [35, 22]], 's');
  fillPoly(g, [[2, 10], [9, 6], [25, 5], [34, 8], [32, 10], [5, 11]], 't');
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

// Decor the player can drag into the tank. `hangs` items only go in the
// hanging spot; the rest go on the floor.
export const DECOR = {
  hide: { label: 'Log hide', hangs: false, hide: true },
  cave: { label: 'Rock cave', hangs: false, hide: true },
  digbox: { label: 'Dig box', hangs: false },
  plant: { label: 'Succulent', hangs: false },
  treatball: { label: 'Treat ball', hangs: false },
  branch: { label: 'Climbing branch', hangs: true },
  hammock: { label: 'Hammock', hangs: true },
};
