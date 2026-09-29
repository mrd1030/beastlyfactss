import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Check, RotateCcw, RotateCw } from 'lucide-react';
import { drawGrid } from '@/lib/critterKeeper/pixel';
import { DRAGON_H, DRAGON_W, TILT_ANCHOR, TILT_H, TILT_W, buildDragon, dragonPalette, dragonScale } from '@/lib/critterKeeper/sprites/dragon';
import { DECOR, ITEM_PAL, itemSprite } from '@/lib/critterKeeper/sprites/items';
import { TANK_SLOTS } from '@/lib/critterKeeper/rules';
import { ageDays, baskRange, isDay } from '@/lib/critterKeeper/sim';

// The pixel tank. Everything is drawn at a small logical size and scaled up
// with image-rendering: pixelated, so one logical unit is one art pixel.
const SW = 176;
const SH = 104;
const FLOOR = 86;
const TANK_TOP = 16;
const TANK_WIDTH = { 20: 92, 40: 124, 120: 164 };

const SUBSTRATE_LOOK = {
  tile: { base: '#cdbca3', dot: '#a8977f', grout: '#b5a48c' },
  paper: { base: '#f3efe6', dot: '#e2dccf' },
  sand: { base: '#f1d37a', dot: '#dcb553' },
  walnut: { base: '#8b5e3c', dot: '#6a4328' },
  bioactive: { base: '#5a4130', dot: '#7a5a40', leaf: ['#b0662c', '#8c5a2a', '#6f8a3a'] },
};

function tankBox(size) {
  const w = TANK_WIDTH[size] || TANK_WIDTH[120];
  const L = Math.round((SW - w) / 2);
  return { L, R: L + w };
}

// Where each floor decor spot sits, by fraction of the tank width.
export function slotRects(size) {
  const { L, R } = tankBox(size);
  const w = R - L;
  const floor = (f) => ({ x: Math.round(L + w * f - 18), y: FLOOR - 28, w: 36, h: 30 });
  const all = { cool: floor(0.2), middle: floor(0.43), warm: floor(0.63) };
  return Object.fromEntries((TANK_SLOTS[size] || TANK_SLOTS[120]).map((id) => [id, all[id]]));
}

// Where a free-placed item (branch, hammock) sits: centered on its saved
// point, kept inside the tank. A saved point of null gets a sensible default.
export function freeBox(size, id, p = {}) {
  const { L, R } = tankBox(size);
  const g = itemSprite(id, p.rot || 0);
  const w = g[0].length;
  const h = g.length;
  const def = id === 'hammock' ? [L + (R - L) * 0.4, TANK_TOP + 16] : [L + (R - L) * 0.4, FLOOR - 18];
  const cx = Math.min(Math.max(p.x ?? def[0], L + w / 2), R - w / 2);
  const cy = Math.min(Math.max(p.y ?? def[1], TANK_TOP + h / 2), FLOOR + 1 - h / 2);
  return { g, w, h, cx, cy, x: Math.round(cx - w / 2), y: Math.round(cy - h / 2) };
}

// Every placed item with its sprite, position and layer, back to front. The
// player can send things to the front or back; unlayered floor items sit
// behind the branch and hammock.
export function layoutItems(game, free = game.free || {}) {
  const slots = slotRects(game.setup.tank);
  const layers = game.layers || {};
  return [
    ...Object.entries(game.decor || {})
      .filter(([slot, id]) => slots[slot] && DECOR[id] && !DECOR[id].free)
      .map(([slot, id]) => {
        const g = itemSprite(id);
        return { id, slot, g, x: Math.round(slots[slot].x + slots[slot].w / 2 - g[0].length / 2), y: FLOOR + 1 - g.length, z: layers[id] ?? 0 };
      }),
    ...Object.entries(free)
      .filter(([id]) => DECOR[id]?.free)
      .map(([id, p]) => {
        const box = freeBox(game.setup.tank, id, p);
        return { id, slot: 'free', g: box.g, x: box.x, y: box.y, z: layers[id] ?? 1 };
      }),
  ].sort((a, b) => a.z - b.z);
}

// Tiny seeded random so the substrate texture never flickers between frames.
function rand(seed) {
  let x = seed;
  return () => {
    x = (x * 1103515245 + 12345) % 2147483648;
    return x / 2147483648;
  };
}

function moodOf(game, now) {
  if (game.cond.stress) return 'stress';
  if (game.shed.until && now < game.shed.until) return 'shed';
  if (Object.keys(game.cond).length) return 'sick';
  return 'normal';
}

function drawScene(ctx, game, now, frame, pose, free = game.free || {}, selected = null) {
  const st = game.setup;
  const { L, R } = tankBox(st.tank);
  const day = isDay(now);
  ctx.clearRect(0, 0, SW, SH);

  // Room behind the tank.
  ctx.fillStyle = day ? '#efe6d2' : '#3a3a4a';
  ctx.fillRect(0, 0, SW, SH);
  ctx.fillStyle = day ? '#e3d7bd' : '#33333f';
  ctx.fillRect(0, FLOOR + 10, SW, SH - FLOOR - 10);

  // Back and side walls, covered as the tank guide suggests.
  ctx.fillStyle = '#d9c7a3';
  ctx.fillRect(L, TANK_TOP, R - L, FLOOR - TANK_TOP);
  ctx.fillStyle = '#cfbb94';
  for (let x = L + 3; x < R; x += 7) ctx.fillRect(x, TANK_TOP, 1, FLOOR - TANK_TOP);

  // Substrate.
  const look = SUBSTRATE_LOOK[st.substrate] || SUBSTRATE_LOOK.tile;
  ctx.fillStyle = look.base;
  ctx.fillRect(L, FLOOR, R - L, 8);
  const r = rand(7);
  if (st.substrate === 'tile') {
    ctx.fillStyle = look.grout;
    for (let x = L + 10; x < R; x += 11) ctx.fillRect(x, FLOOR, 1, 8);
    ctx.fillRect(L, FLOOR + 4, R - L, 1);
  } else {
    ctx.fillStyle = look.dot;
    for (let i = 0; i < (R - L) * 1.6; i++) ctx.fillRect(L + Math.floor(r() * (R - L)), FLOOR + Math.floor(r() * 8), 1, 1);
  }
  if (st.substrate === 'bioactive') {
    for (let i = 0; i < (R - L) * 0.5; i++) {
      ctx.fillStyle = look.leaf[i % 3];
      ctx.fillRect(L + Math.floor(r() * (R - L - 2)), FLOOR - 1 + Math.floor(r() * 3), 2, 1);
    }
    // A few springtails and isopods from the cleanup crew.
    ctx.fillStyle = '#f2efe8';
    for (let i = 0; i < 6; i++) ctx.fillRect(L + Math.floor(r() * (R - L)), FLOOR + 3 + Math.floor(r() * 4), 1, 1);
    ctx.fillStyle = '#e08a3a';
    for (let i = 0; i < 3; i++) ctx.fillRect(L + Math.floor(r() * (R - L - 2)), FLOOR + 2 + Math.floor(r() * 5), 2, 1);
  }

  // Thermometer on the back wall.
  drawGrid(ctx, itemSprite('thermometer'), ITEM_PAL, R - 16, TANK_TOP + 6);

  // Heat from the basking bulb, by day.
  const bulbX = R - 22;
  if (day) {
    ctx.fillStyle = 'rgba(255, 214, 110, 0.28)';
    ctx.beginPath();
    ctx.moveTo(bulbX - 3, TANK_TOP);
    ctx.lineTo(bulbX + 5, TANK_TOP);
    ctx.lineTo(bulbX + 18, FLOOR);
    ctx.lineTo(bulbX - 18, FLOOR);
    ctx.fill();
  }

  // Basking platform under the bulb, water dish on the cool side.
  drawGrid(ctx, itemSprite('platform'), ITEM_PAL, R - 39, FLOOR - 20);
  if (st.heat === 'rock') drawGrid(ctx, itemSprite('heatRock'), ITEM_PAL, Math.round((L + R) / 2) - 9, FLOOR - 7);

  // The dragon: basking on the platform when it is warm, down on the floor
  // when it is cold, curled up asleep at night, inside his hide if he has one.
  // He is drawn at his size for his age, every pose placed by the point
  // between his feet.
  const scale = dragonScale(ageDays(game, now));
  const [bmin] = baskRange(game, now);
  const sleeping = !day;
  const lift = !sleeping && frame % 2 ? 1 : 0;
  const blink = !sleeping && frame % 9 === 8;
  const mood = moodOf(game, now);
  const pal = dragonPalette(mood);
  const body = (opts) => buildDragon({ lift, blink, mood, zs: false, scale, anchored: true, ...opts });
  const slots = slotRects(st.tank);
  const hideSlot = Object.entries(game.decor || {}).find(([slot, id]) => DECOR[id]?.hide && slots[slot])?.[0];
  const items = layoutItems(game, free);
  const hut = sleeping ? items.find((it) => it.slot === hideSlot) : null;
  let fx;
  let fy;
  if (hut) {
    // Asleep in a hut: his sleeping face (16 across and 12.5 up from his
    // feet at full size) sits in the doorway; only what is inside the
    // opening is drawn.
    fx = hut.x + 20 - 16 * scale;
    fy = hut.y + 21 + 12.5 * scale;
  } else if (sleeping) {
    fx = L + (R - L) * 0.42 - 3;
    fy = FLOOR - 1.5;
  } else if (st.basking >= bmin) {
    fx = R - 26;
    fy = FLOOR - 16.5;
  } else {
    fx = L + (R - L) * 0.45 - 3;
    fy = FLOOR - 0.5;
  }
  const grid = body({ pose: sleeping ? 'sleep' : pose });
  const ox = Math.round(fx - TILT_ANCHOR.x);
  const oy = Math.round(fy - TILT_ANCHOR.y);

  // Perched on the branch: tilted along it, facing uphill, feet on the bark.
  // Drawn right after the branch, so whatever is in front of the branch is
  // in front of him too.
  // Where his head is, for the "?!" bubble; the perch moves it.
  let head = { x: fx + 12 * scale, y: fy - 34 * scale };
  const branch = !sleeping && game.perchUntil > now && free.branch ? freeBox(st.tank, 'branch', free.branch) : null;
  const perch = branch && (() => {
    const rot = ((free.branch.rot || 0) * Math.PI) / 180;
    // The perch is midway up the main limb (shape points 22,21 to 42,13).
    const a = Math.atan2(-8, 20) + rot;
    const d = { x: Math.cos(a), y: Math.sin(a) };
    const up = d.y <= 0 ? d : { x: -d.x, y: -d.y };
    const right = up.x >= 0;
    const tilt = Math.max(-1.1, Math.min(1.1, Math.atan2(up.y, right ? up.x : -up.x)));
    const n = d.x >= 0 ? { x: d.y, y: -d.x } : { x: -d.y, y: d.x };
    const [px, py] = branch.g.toSprite(32, 17);
    const bx = branch.x + px + n.x * 2.6;
    const by = branch.y + py + n.y * 2.6;
    const ax = right ? TILT_ANCHOR.x : TILT_W - 1 - TILT_ANCHOR.x;
    head = { x: bx + (right ? 12 : -12) * scale, y: by - 34 * scale };
    drawGrid(ctx, body({ tilt }), pal, Math.round(bx - ax), Math.round(by - TILT_ANCHOR.y), { flip: !right });
  });

  for (const it of items) {
    drawGrid(ctx, it.g, ITEM_PAL, it.x, it.y);
    if (perch && it.id === 'branch') perch();
    if (it === hut) {
      // Only his pixels that land on the dark inside of the doorway.
      for (let y = 0; y < TILT_H; y++) {
        for (let x = 0; x < TILT_W; x++) {
          const k = grid[y][x];
          if (!k || it.g[oy + y - it.y]?.[ox + x - it.x] !== 'v') continue;
          ctx.fillStyle = pal[k];
          ctx.fillRect(ox + x, oy + y, 1, 1);
        }
      }
    }
    if (it.id === selected) {
      // Marching-ants box around the item picked for moving or layering.
      ctx.fillStyle = '#ffffff';
      const w = it.g[0].length;
      const h = it.g.length;
      for (let i = 0; i < w; i += 2) { ctx.fillRect(it.x + i, it.y - 1, 1, 1); ctx.fillRect(it.x + i, it.y + h, 1, 1); }
      for (let i = 0; i < h; i += 2) { ctx.fillRect(it.x - 1, it.y + i, 1, 1); ctx.fillRect(it.x + w, it.y + i, 1, 1); }
    }
  }

  if (!hut && !perch) drawGrid(ctx, grid, pal, ox, oy);

  // "?!" over his head for a few seconds after the player repeats something
  // five times in a row.
  if (Date.now() - (game.what || 0) < 5000 && !hut) {
    const bx = Math.round(head.x) - 5;
    const by = Math.round(head.y) - 9;
    ctx.fillStyle = '#2b1d12';
    ctx.fillRect(bx - 1, by - 1, 13, 10);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(bx, by, 11, 8);
    ctx.fillRect(bx + 2, by + 8, 2, 2);
    ctx.fillStyle = '#c0392b';
    [[2, 1], [3, 1], [4, 1], [5, 2], [4, 3], [3, 4], [3, 6], [8, 1], [8, 2], [8, 3], [8, 4], [8, 6]].forEach(([a, b]) => ctx.fillRect(bx + a, by + b, 1, 1));
  }

  // The water dish sits in front, so a big hide never covers it.
  const fresh = now - game.waterAt < 24 * 3600e3;
  drawGrid(ctx, itemSprite('waterDish', fresh), ITEM_PAL, L + 4, FLOOR - 4);

  // Poop left in the tank.
  ctx.fillStyle = '#5a3a1e';
  for (let i = 0; i < Math.min(game.poops, 5); i++) {
    const px = L + 30 + ((i * 37) % (R - L - 60));
    ctx.fillRect(px, FLOOR - 1, 3, 1);
    ctx.fillStyle = '#f4f1e8';
    ctx.fillRect(px + 3, FLOOR - 1, 1, 1);
    ctx.fillStyle = '#5a3a1e';
  }

  // Night falls inside the tank.
  if (!day) {
    ctx.fillStyle = 'rgba(14, 22, 52, 0.5)';
    ctx.fillRect(L, TANK_TOP, R - L, FLOOR + 8 - TANK_TOP);
    // Floating Zs above him.
    ctx.fillStyle = '#9cc0ff';
    // Above the hut when he is in one, otherwise above his head.
    const zx = hut ? hut.x + Math.round(hut.g[0].length / 2) + 4 : Math.round(fx + 15 * scale);
    const zy = (hut ? hut.y - 7 : Math.round(fy - 28 * scale)) - (frame % 4);
    [[0, 0], [1, 0], [2, 0], [2, 1], [1, 2], [0, 3], [1, 3], [2, 3]].forEach(([a, b]) => ctx.fillRect(zx + a, zy + b, 1, 1));
  }

  // Glass front: a couple of glare streaks.
  ctx.fillStyle = 'rgba(255, 255, 255, 0.18)';
  for (const off of [14, 20]) {
    for (let k = 0; k < 26; k++) ctx.fillRect(L + off + k, TANK_TOP + 40 - k, 1, 1);
  }

  // Lid: mesh, or a glass cover that blocks UVB.
  if (st.mount === 'glass') {
    ctx.fillStyle = '#a9d3ea';
    ctx.fillRect(L, TANK_TOP - 3, R - L, 3);
    ctx.fillStyle = '#e8f6ff';
    ctx.fillRect(L + 4, TANK_TOP - 3, (R - L) * 0.4, 1);
  } else {
    ctx.fillStyle = '#6d6d6d';
    ctx.fillRect(L, TANK_TOP - 3, R - L, 3);
    ctx.fillStyle = '#9b9b9b';
    for (let x = L; x < R; x += 2) ctx.fillRect(x, TANK_TOP - 2, 1, 1);
  }

  // Fixtures on top: the UVB tube and the basking dome.
  if (st.uvb !== 'none') {
    const x0 = Math.round(L + (R - L) * 0.28);
    const x1 = R - 30;
    ctx.fillStyle = '#7c848c';
    ctx.fillRect(x0 - 1, TANK_TOP - 9, x1 - x0 + 2, 3);
    ctx.fillStyle = day ? (st.uvb === 't5' ? '#e9e2ff' : '#d8d2ee') : '#8c8a96';
    ctx.fillRect(x0, TANK_TOP - 6, x1 - x0, 2);
    if (day && st.mount !== 'glass') {
      ctx.fillStyle = 'rgba(200, 185, 255, 0.12)';
      ctx.fillRect(x0, TANK_TOP, x1 - x0, FLOOR - TANK_TOP);
    }
  }
  ctx.fillStyle = '#5b5b5b';
  ctx.beginPath();
  ctx.arc(bulbX + 1, TANK_TOP - 4, 8, Math.PI, 0);
  ctx.fill();
  ctx.fillStyle = day ? '#ffd46e' : '#77705e';
  ctx.fillRect(bulbX - 2, TANK_TOP - 5, 6, 3);

  // Frame.
  ctx.fillStyle = '#3b2a1c';
  ctx.fillRect(L - 2, TANK_TOP - 3, 2, FLOOR + 11 - TANK_TOP);
  ctx.fillRect(R, TANK_TOP - 3, 2, FLOOR + 11 - TANK_TOP);
  ctx.fillRect(L - 2, FLOOR + 8, R - L + 4, 3);
}

// A lone animated dragon, for the adopt screen.
export function DragonCanvas({ pose = 'idle', mood = 'normal', className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    let frame = 0;
    const paint = () => {
      const c = ref.current;
      if (!c) return;
      const ctx = c.getContext('2d');
      ctx.clearRect(0, 0, DRAGON_W, DRAGON_H);
      drawGrid(ctx, buildDragon({ pose, mood, lift: frame % 2, blink: frame % 9 === 8 }), dragonPalette(mood));
    };
    paint();
    const t = setInterval(() => { frame += 1; paint(); }, 550);
    return () => clearInterval(t);
  }, [pose, mood]);
  return <canvas ref={ref} width={DRAGON_W} height={DRAGON_H} className={className} style={{ imageRendering: 'pixelated' }} />;
}

function ItemIcon({ id }) {
  const ref = useRef(null);
  useEffect(() => {
    const g = itemSprite(id);
    const c = ref.current;
    c.width = g[0].length;
    c.height = g.length;
    drawGrid(c.getContext('2d'), g, ITEM_PAL);
  }, [id]);
  return <canvas ref={ref} className="h-8 w-auto max-w-[3.5rem]" style={{ imageRendering: 'pixelated' }} aria-hidden="true" />;
}

const pct = (v, of) => `${(v / of) * 100}%`;

export default function TankScene({ game, now, pose = 'idle', onDecor, badge, footer, decorating = false, onDoneDecorating }) {
  const canvasRef = useRef(null);
  const boxRef = useRef(null);
  const [frame, setFrame] = useState(0);
  const [drag, setDrag] = useState(null); // { id, from: slot | 'free' | null, x, y, moved }
  const [picked, setPicked] = useState(null); // tap-to-place fallback
  const [selected, setSelected] = useState(null); // a free item picked for rotating
  const size = game.setup.tank;
  const slots = useMemo(() => slotRects(size), [size]);
  const decor = game.decor || {};
  const free = game.free || {};
  const inTank = new Set([...Object.values(decor), ...Object.keys(free)]);

  useEffect(() => {
    const t = setInterval(() => setFrame((f) => f + 1), 550);
    return () => clearInterval(t);
  }, []);

  // Screen point to tank pixels, and whether it is over the tank at all.
  const toTank = (clientX, clientY) => {
    const r = canvasRef.current?.getBoundingClientRect();
    if (!r) return null;
    const inside = clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom;
    return { x: ((clientX - r.left) / r.width) * SW, y: ((clientY - r.top) / r.height) * SH, inside };
  };

  // While a free item is dragged over the tank, draw it where it would land.
  const preview = useMemo(() => {
    if (!drag?.moved || !DECOR[drag.id].free) return free;
    const pt = toTank(drag.x, drag.y);
    const next = { ...free };
    const rot = free[drag.id]?.rot || 0;
    if (pt?.inside) {
      const box = freeBox(size, drag.id, { x: pt.x, y: pt.y, rot });
      next[drag.id] = { x: box.cx, y: box.cy, rot };
    } else if (drag.from === 'free') {
      delete next[drag.id];
    }
    return next;
  }, [drag, free, size]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) drawScene(ctx, game, now, frame, pose, preview, selected);
  }, [game, now, frame, pose, preview, selected]);

  const placeSlot = useCallback((id, slot, from) => {
    const next = { ...decor };
    if (from) delete next[from];
    if (slot) {
      const bumped = next[slot];
      next[slot] = id;
      if (bumped && from) next[from] = bumped;
    }
    onDecor({ decor: next });
  }, [decor, onDecor]);

  const placeFree = useCallback((id, pt) => {
    const rot = free[id]?.rot || 0;
    const box = freeBox(size, id, { x: pt.x, y: pt.y, rot });
    onDecor({ free: { ...free, [id]: { x: box.cx, y: box.cy, rot } } });
  }, [free, size, onDecor]);

  const removeFree = useCallback((id) => {
    const next = { ...free };
    delete next[id];
    onDecor({ free: next });
    setSelected(null);
  }, [free, onDecor]);

  // Front to back: move an item above or below everything else.
  const layer = (id, front) => {
    const current = game.layers || {};
    const all = [...Object.values(decor).map((d) => current[d] ?? 0), ...Object.keys(free).map((f) => current[f] ?? 1)];
    const z = front ? Math.max(0, ...all) + 1 : Math.min(0, ...all) - 1;
    onDecor({ layers: { ...current, [id]: z } });
  };

  const takeOut = (id) => {
    if (free[id]) return removeFree(id);
    const slot = Object.keys(decor).find((k) => decor[k] === id);
    if (slot) placeSlot(id, null, slot);
    setSelected(null);
    return undefined;
  };

  const rotate = (id, by) => {
    const p = free[id] || {};
    const rot = ((((p.rot || 0) + by) % 360) + 360) % 360;
    const box = freeBox(size, id, { ...p, rot });
    onDecor({ free: { ...free, [id]: { x: box.cx, y: box.cy, rot } } });
  };

  // Pointer-driven drag so it works with a finger as well as a mouse. The
  // live drag sits in a ref so the pointerup handler acts on it exactly once.
  const dragRef = useRef(null);
  const setDragNow = (d) => {
    dragRef.current = d;
    setDrag(d);
  };
  const dragging = drag !== null;
  useEffect(() => {
    if (!dragging) return undefined;
    const move = (e) => {
      const d = dragRef.current;
      if (!d) return;
      setDragNow({ ...d, x: e.clientX, y: e.clientY, moved: d.moved || Math.hypot(e.clientX - d.sx, e.clientY - d.sy) > 6 });
    };
    const up = (e) => {
      const d = dragRef.current;
      setDragNow(null);
      if (!d) return;
      if (!d.moved) {
        if (d.from) setSelected((cur) => (cur === d.id ? null : d.id));
        else setPicked((p) => (p && p.id === d.id && p.from === d.from ? null : { id: d.id, from: d.from }));
        return;
      }
      setPicked(null);
      const pt = toTank(e.clientX, e.clientY);
      if (DECOR[d.id].free) {
        if (pt?.inside) {
          placeFree(d.id, pt);
          setSelected(d.id);
        } else if (d.from === 'free') {
          removeFree(d.id);
        }
        return;
      }
      const slot = document.elementFromPoint(e.clientX, e.clientY)?.closest('[data-slot]')?.getAttribute('data-slot');
      if (slot) placeSlot(d.id, slot, d.from);
      else if (d.from && !pt?.inside) placeSlot(d.id, null, d.from);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
  }, [dragging, placeSlot, placeFree, removeFree]);

  const startDrag = (id, from) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragNow({ id, from, x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, moved: false });
  };

  const grabAt = (e) => {
    if (picked) return;
    const pt = toTank(e.clientX, e.clientY);
    if (!pt?.inside) return;
    const hit = layoutItems(game).reverse().find((it) => it.g[Math.floor(pt.y) - it.y]?.[Math.floor(pt.x) - it.x]);
    if (hit) startDrag(hit.id, hit.slot)(e);
    else setSelected(null);
  };

  // Tap-to-place: floor items go in the tapped spot, free items where tapped.
  const tapTank = (e) => {
    if (!picked) return;
    if (DECOR[picked.id].free) {
      const pt = toTank(e.clientX, e.clientY);
      if (pt?.inside) {
        placeFree(picked.id, pt);
        setSelected(picked.id);
        setPicked(null);
      }
      return;
    }
    const slot = e.target.closest?.('[data-slot]')?.getAttribute('data-slot');
    if (slot) {
      placeSlot(picked.id, slot, picked.from);
      setPicked(null);
    }
  };

  const active = drag?.moved ? drag : picked;
  const fits = active && !DECOR[active.id].free;
  const floorDrag = drag?.moved && !DECOR[drag.id].free;
  const freeOutside = drag?.moved && DECOR[drag.id].free && !toTank(drag.x, drag.y)?.inside;

  return (
    <div className="contents">
      <div
        ref={boxRef}
        data-tank-box
        onClick={tapTank}
        onPointerDown={grabAt}
        className="sticky z-20 select-none rounded-2xl overflow-hidden border border-border shadow-md bg-card"
        style={{ top: 'calc(56px + var(--safe-area-inset-top, 0px))', touchAction: drag ? 'none' : 'auto' }}
      >
        <canvas
          ref={canvasRef}
          width={SW}
          height={SH}
          className="block w-full"
          style={{ imageRendering: 'pixelated', aspectRatio: `${SW} / ${SH}` }}
          role="img"
          aria-label={`${game.name}'s tank`}
        />
        {Object.entries(slots).map(([slot, r]) => {
          const id = decor[slot];
          return (
            <div
              key={slot}
              data-slot={slot}
              className={`absolute rounded-md transition-colors ${fits ? 'border-2 border-dashed border-white/90 bg-white/20' : ''} ${id ? 'cursor-grab' : ''}`}
              style={{ left: pct(r.x, SW), top: pct(r.y, SH), width: pct(r.w, SW), height: pct(r.h, SH), touchAction: 'none' }}
              aria-label={id ? `${DECOR[id].label} in the tank. Drag it to move it, tap it for more.` : 'Empty floor spot'}
            />
          );
        })}
        {badge}
        {footer}
      </div>

      {decorating && (
      <div className="bg-card border border-border rounded-2xl p-3 mt-3 mb-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-display font-bold text-foreground">Decorate</p>
          <button type="button" onClick={onDoneDecorating} className="px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-body font-bold">Done</button>
        </div>
        {selected && inTank.has(selected) ? (
          <div className="flex flex-wrap items-center gap-2 mb-3 pb-3 border-b border-border">
            <span className="text-sm font-body font-bold text-foreground mr-auto">{DECOR[selected].label}</span>
            {DECOR[selected].free && (
              <>
                <button type="button" onClick={() => rotate(selected, -15)} aria-label="Rotate left" className="p-2 rounded-xl border border-border hover:bg-muted"><RotateCcw className="w-4 h-4" /></button>
                <button type="button" onClick={() => rotate(selected, 15)} aria-label="Rotate right" className="p-2 rounded-xl border border-border hover:bg-muted"><RotateCw className="w-4 h-4" /></button>
              </>
            )}
            <button type="button" onClick={() => layer(selected, false)} className="px-2.5 py-2 rounded-xl border border-border text-xs font-body font-bold hover:bg-muted">To back</button>
            <button type="button" onClick={() => layer(selected, true)} className="px-2.5 py-2 rounded-xl border border-border text-xs font-body font-bold hover:bg-muted">To front</button>
            <button type="button" onClick={() => takeOut(selected)} className="px-2.5 py-2 rounded-xl border border-border text-xs font-body font-bold hover:bg-muted">Take out</button>
            <button type="button" onClick={() => setSelected(null)} aria-label="Done" className="p-2 rounded-xl bg-primary text-primary-foreground"><Check className="w-4 h-4" /></button>
          </div>
        ) : null}
        <p className="text-xs font-body font-bold text-muted-foreground mb-2">
          {picked
            ? `Tap ${DECOR[picked.id].free ? 'anywhere in the tank' : 'a floor spot in the tank'} for the ${DECOR[picked.id].label.toLowerCase()}`
            : 'Drag items into the tank. The branch and hammock go anywhere. Tap anything in the tank to move it to the front or back.'}
        </p>
        <div className="flex flex-wrap gap-2">
          {Object.entries(DECOR).map(([id, item]) => {
            const used = inTank.has(id);
            return (
              <button
                key={id}
                type="button"
                onPointerDown={used ? undefined : startDrag(id, null)}
                disabled={used}
                className={`flex flex-col items-center gap-1 px-2 py-1.5 rounded-xl border text-[11px] font-body font-bold touch-none ${
                  picked?.id === id && !picked.from ? 'border-primary bg-primary/10' : 'border-border bg-card'
                } ${used ? 'opacity-35' : 'cursor-grab'}`}
              >
                <ItemIcon id={id} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
      )}
      {!decorating && <div className="mb-4" />}

      {(floorDrag || freeOutside) && (
        <div className="fixed pointer-events-none z-50" style={{ left: drag.x - 24, top: drag.y - 20 }}>
          <ItemIcon id={drag.id} />
        </div>
      )}
    </div>
  );
}
