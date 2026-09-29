import { makeGrid, pip } from '@/lib/critterKeeper/pixel';

// The chibi bearded dragon, facing right. One sprite, drawn from shapes, so
// every pose and mood lines up. Moods only swap palette colors.
export const DRAGON_W = 44;
export const DRAGON_H = 33;

export const DRAGON_PAL = {
  o: '#2b1d12', b: '#dea050', d: '#ad6a2c', l: '#f5d58f', y: '#f8e6b4', s: '#8a5424',
  e: '#141414', w: '#ffffff', r: '#c07a34', t: '#8f5222', m: '#5a3418', z: '#3d6fb6', c: '#4a3a1a', k: '#e98a6f',
  p: '#f7f2ea',
};

export const DRAGON_MOODS = {
  normal: {},
  stress: { r: '#161616', t: '#000000', b: '#a06a38', d: '#6c4420', l: '#c49a5c', y: '#d9c08a', s: '#4a2e12' },
  shed: { b: '#cdbba0', d: '#a08c72', l: '#e8ddca', y: '#f0e7d6', r: '#b8a488', t: '#9a876c', s: '#9a876c' },
  sick: { b: '#bfa57c', d: '#8f7856', l: '#dac9a3', y: '#e5d8b9', r: '#a38c68', t: '#86704f', k: '#c9a28f' },
};

// Flaky patches of old skin, painted over the idle pose while shedding.
const SHED_PATCHES = [[15, 16], [16, 16], [20, 15], [23, 16], [24, 16], [30, 10], [31, 10], [6, 23], [35, 18]];

export function dragonPalette(mood = 'normal') {
  return { ...DRAGON_PAL, ...(DRAGON_MOODS[mood] || {}) };
}

// pose: 'idle' | 'eat' | 'sleep'. lift bobs the body a pixel; the feet stay put.
export function buildDragon({ lift = 0, pose = 'idle', blink = false, mood = 'normal', zs = true } = {}) {
  const W = DRAGON_W;
  const H = DRAGON_H;
  const g = makeGrid(W, H);
  const set = (x, y, c) => {
    const X = Math.round(x);
    const Y = Math.round(y);
    if (X >= 0 && X < W && Y >= 0 && Y < H) g[Y][X] = c;
  };
  const get = (x, y) => (x >= 0 && x < W && y >= 0 && y < H ? g[y][x] : null);
  const poly = (pts, c) => {
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (pip(x + 0.5, y + 0.5, pts)) g[y][x] = c;
  };
  const sleep = pose === 'sleep';
  // Asleep he lies flat with his chin down, so the head drops and the tail
  // wraps around the front of him.
  const hl = sleep ? -3 : lift;
  const up = (pts) => pts.map(([x, y]) => [x, y - hl]);

  const tail = sleep
    ? [[11, 22.5], [7, 23.6], [5, 26], [6.6, 28.6], [12, 29.6], [19, 29.8], [25, 29.3], [30, 28.3], [34, 26.8]]
    : [[12, 22], [8, 24], [5, 25], [2.5, 24], [1.6, 21.5], [3, 19.8]];
  const tailPx = new Set();
  const drawTail = (ring = false, from = 0) => {
    for (let i = 0; i < tail.length - 1; i++) {
      for (let s = 0; s <= 1; s += 0.1) {
        const f = (i + s) / (tail.length - 1);
        // Only the stretch that wraps in front of him gets the extra outline.
        if ((ring && f < 0.35) || f < from) continue;
        const cx = tail[i][0] + (tail[i + 1][0] - tail[i][0]) * s;
        const cy = tail[i][1] + (tail[i + 1][1] - tail[i][1]) * s - lift * (1 - f);
        const r = (sleep ? 1.8 : 2.6) * (1 - f) + (sleep ? 0.8 : 0.5) + (ring ? 1 : 0);
        for (let y = Math.floor(cy - r); y <= cy + r; y++) {
          for (let x = Math.floor(cx - r); x <= cx + r; x++) {
            if ((x + 0.5 - cx) ** 2 + (y + 0.5 - cy) ** 2 > r * r || !g[y] || x < 0 || x >= W) continue;
            if (ring && from && tailPx.has(`${x},${y}`)) continue;
            g[y][x] = ring ? 'o' : f > 0.15 && Math.floor(f * 9) % 2 ? 'd' : 'b';
            if (!ring) tailPx.add(`${x},${y}`);
          }
        }
      }
    }
  };
  if (!sleep) drawTail();

  // Chunky body.
  const bx = 19;
  const by = 20.5 - lift + (sleep ? 2.6 : 0);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const dx = (x + 0.5 - bx) / 9;
      const dy = (y + 0.5 - by) / 5.6;
      if (dx * dx + dy * dy <= 1) g[y][x] = y + 0.5 > by + 2.2 ? 'y' : 'b';
    }
  }
  // Back highlight, chevrons and the row of side spikes.
  for (let x = 12; x <= 26; x++) {
    let top = -1;
    for (let y = 0; y < H; y++) if (g[y][x]) { top = y; break; }
    if (top < 0) continue;
    g[top + 1][x] = 'l';
    if (x % 3 === 1 && x < 25) {
      g[top + 2][x] = 'd';
      g[top + 3][x + 1] = 'd';
      g[top + 2][x + 2] = 'd';
    }
  }
  for (let x = 12; x <= 25; x += 2) set(x, by + 1.2, 's');

  if (sleep) {
    // An outline ring first, so the wrapped tail reads against his belly.
    drawTail(true);
    drawTail();
  } else {
    // Stubby legs; the feet stay planted while he bobs.
    for (const x0 of [13, 23]) {
      for (let y = Math.round(by + 3); y <= 28; y++) { set(x0, y, 'b'); set(x0 + 1, y, 'b'); set(x0 + 2, y, 'b'); }
      for (let x = x0 - 1; x <= x0 + 3; x++) set(x, 29, 'b');
      set(x0 - 1, 29, 'd'); set(x0 + 1, 29, 'd'); set(x0 + 3, 29, 'd');
    }
  }

  // Big wide head.
  poly(up([[24, 12], [27, 9.5], [33, 8.5], [38, 10], [41.5, 13.5], [42, 17], [40, 19.5], [31, 21], [26, 21.5], [23.5, 18]]), 'b');
  for (let x = 28; x <= 37; x++) set(x, 10 - hl, 'l');
  set(38, 11 - hl, 'l');
  set(27, 11 - hl, 'l');
  // Spiky beard pouch under the jaw.
  poly(up([[25, 19], [38, 19.5], [37, 22], [36, 21.8], [35, 24], [33.5, 22.5], [32, 25], [30.5, 22.8], [29, 25], [27.5, 22.8], [26, 24], [25, 21.5]]), 'r');
  for (const x of [27, 30, 33, 36]) set(x, 21 - hl, 't');
  // Spikes: back of the head and along the rear jaw.
  [[24, 11], [23, 12], [25, 10], [23, 15], [22, 16], [24, 20], [23, 21]].forEach(([x, y]) => set(x, y - hl, 's'));
  set(26, 8.6 - hl, 's');
  set(29, 8 - hl, 's');
  // Brow ridge and a big eye.
  const ex = 34;
  const ey = 12 - hl;
  for (let x = 33; x <= 36; x++) set(x, 11 - hl, 's');
  if (sleep || blink) {
    set(33, ey + 2, 'e'); set(34, ey + 2, 'e'); set(35, ey + 2, 'e'); set(36, ey + 1, 'e');
  } else {
    for (let y = ey + 1; y <= ey + 3; y++) for (let x = ex; x <= ex + 2; x++) set(x, y, 'e');
    set(ex, ey + 1, 'w');
    set(ex + 1, ey + 1, 'w');
  }
  set(36, 16 - hl, 'k');
  set(37, 16 - hl, 'k');
  set(40, 13 - hl, 'm');
  if (pose === 'eat') {
    poly(up([[33, 17.5], [43, 15], [43, 20], [33, 18.5]]), null);
    [[39, 17], [40, 17], [41, 17], [42, 16], [41, 16], [43, 16], [43, 15], [42, 18], [40, 18]].forEach(([x, y]) => set(x, y - hl, 'c'));
  } else {
    for (let x = 31; x <= 41; x++) set(x, 18.4 - hl - (x > 38 ? (x - 38) * 0.6 : 0), 'm');
  }

  // Asleep, the tail tip rests in front of his chin, outlined on its own.
  if (sleep) {
    drawTail(true, 0.72);
    drawTail(false, 0.72);
  }

  const out = g.map((row) => row.slice());
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (g[y][x]) continue;
      if ([[1, 0], [-1, 0], [0, 1], [0, -1]].some(([a, b]) => get(x + a, y + b) && get(x + a, y + b) !== 'c')) out[y][x] = 'o';
    }
  }
  if (mood === 'shed' && !sleep) SHED_PATCHES.forEach(([x, y]) => { if (out[y - lift]?.[x]) out[y - lift][x] = 'p'; });
  if (sleep && zs) {
    const Z = (x0, y0, rows) => rows.forEach((r, j) => [...r].forEach((ch, i) => { if (ch === '#') out[y0 + j][x0 + i] = 'z'; }));
    Z(30, 4, ['#####', '...#.', '..#..', '.#...', '#####']);
    Z(37, 0, ['######', '....#.', '...#..', '..#...', '.#....', '######']);
  }
  return out;
}
