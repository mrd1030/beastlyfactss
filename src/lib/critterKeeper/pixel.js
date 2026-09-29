// Shared pixel-art helpers for Critter Keeper. A sprite is a grid of palette
// keys (or null for transparent); a palette maps keys to colors.

export function makeGrid(w, h) {
  return Array.from({ length: h }, () => Array(w).fill(null));
}

export function pip(x, y, pts) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i];
    const [xj, yj] = pts[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

export function fillPoly(g, pts, c) {
  for (let y = 0; y < g.length; y++) {
    for (let x = 0; x < g[0].length; x++) if (pip(x + 0.5, y + 0.5, pts)) g[y][x] = c;
  }
}

export function fillRect(g, x0, y0, w, h, c) {
  for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) if (g[y] && x >= 0 && x < g[0].length) g[y][x] = c;
}

export function fillEllipse(g, cx, cy, rx, ry, c) {
  for (let y = 0; y < g.length; y++) {
    for (let x = 0; x < g[0].length; x++) {
      const dx = (x + 0.5 - cx) / rx;
      const dy = (y + 0.5 - cy) / ry;
      if (dx * dx + dy * dy <= 1) g[y][x] = c;
    }
  }
}

// A thick line made of stamped discs, for branches and tails.
export function stroke(g, pts, radius, c) {
  for (let i = 0; i < pts.length - 1; i++) {
    for (let s = 0; s <= 1; s += 0.05) {
      const cx = pts[i][0] + (pts[i + 1][0] - pts[i][0]) * s;
      const cy = pts[i][1] + (pts[i + 1][1] - pts[i][1]) * s;
      const r = typeof radius === 'function' ? radius((i + s) / (pts.length - 1)) : radius;
      for (let y = Math.floor(cy - r); y <= cy + r; y++) {
        for (let x = Math.floor(cx - r); x <= cx + r; x++) {
          if (g[y] && x >= 0 && x < g[0].length && (x + 0.5 - cx) ** 2 + (y + 0.5 - cy) ** 2 <= r * r) {
            g[y][x] = typeof c === 'function' ? c((i + s) / (pts.length - 1), x, y) : c;
          }
        }
      }
    }
  }
}

// Every transparent pixel touching the sprite becomes outline.
export function outline(g, key = 'o', skip = []) {
  const h = g.length;
  const w = g[0].length;
  const out = g.map((row) => row.slice());
  const at = (x, y) => (x >= 0 && x < w && y >= 0 && y < h ? g[y][x] : null);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (g[y][x]) continue;
      if ([[1, 0], [-1, 0], [0, 1], [0, -1]].some(([a, b]) => at(x + a, y + b) && !skip.includes(at(x + a, y + b)))) out[y][x] = key;
    }
  }
  return out;
}

// Sprites from strings: each character is a palette key, '.' is transparent.
export function fromRows(rows) {
  return rows.map((r) => [...r].map((ch) => (ch === '.' ? null : ch)));
}

export function drawGrid(ctx, g, pal, ox = 0, oy = 0, { flip = false } = {}) {
  const w = g[0].length;
  for (let y = 0; y < g.length; y++) {
    for (let x = 0; x < w; x++) {
      const k = g[y][x];
      if (!k || !pal[k]) continue;
      ctx.fillStyle = pal[k];
      ctx.fillRect(ox + (flip ? w - 1 - x : x), oy + y, 1, 1);
    }
  }
}
