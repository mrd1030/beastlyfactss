import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { drawGrid } from '@/lib/critterKeeper/pixel';
import { DRAGON_H, DRAGON_W, buildDragon, dragonPalette } from '@/lib/critterKeeper/sprites/dragon';
import { DECOR, ITEM_PAL, itemSprite } from '@/lib/critterKeeper/sprites/items';
import { TANK_SLOTS } from '@/lib/critterKeeper/rules';
import { baskRange, isDay } from '@/lib/critterKeeper/sim';

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

// Where each decor slot sits: floor slots by fraction of the tank width,
// the hanging spot up on the back wall.
export function slotRects(size) {
  const { L, R } = tankBox(size);
  const w = R - L;
  const floor = (f) => ({ x: Math.round(L + w * f - 16), y: FLOOR - 22, w: 32, h: 24 });
  const all = {
    cool: floor(0.22),
    middle: floor(0.46),
    warm: floor(0.64),
    // Tall enough to cover a branch standing on the floor as well as a hammock.
    hang: { x: Math.round(L + w * 0.18), y: TANK_TOP + 8, w: Math.round(w * 0.44), h: FLOOR - TANK_TOP - 12 },
  };
  // The hanging spot comes first so the floor spots, rendered after it, win
  // where they overlap it.
  const ids = [...(TANK_SLOTS[size] || TANK_SLOTS[120])].sort((x, y) => (x === 'hang' ? -1 : y === 'hang' ? 1 : 0));
  return Object.fromEntries(ids.map((id) => [id, all[id]]));
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

function drawScene(ctx, game, now, frame, pose) {
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
  drawGrid(ctx, itemSprite('platform'), ITEM_PAL, R - 38, FLOOR - 14);
  const fresh = now - game.waterAt < 24 * 3600e3;
  drawGrid(ctx, itemSprite('waterDish', fresh), ITEM_PAL, L + 4, FLOOR - 4);
  if (st.heat === 'rock') drawGrid(ctx, itemSprite('heatRock'), ITEM_PAL, Math.round((L + R) / 2) - 9, FLOOR - 7);

  // The dragon: basking on the platform when it is warm, down on the floor
  // when it is cold, curled up asleep at night, inside his hide if he has one.
  const [bmin] = baskRange(game, now);
  const sleeping = !day;
  const lift = !sleeping && frame % 2 ? 1 : 0;
  const blink = !sleeping && frame % 9 === 8;
  const g = buildDragon({ lift, pose: sleeping ? 'sleep' : pose, blink, mood: moodOf(game, now), zs: false });
  const slots = slotRects(st.tank);
  const hideSlot = Object.entries(game.decor || {}).find(([slot, id]) => DECOR[id]?.hide && slots[slot] && slot !== 'hang')?.[0];
  let dx;
  let dy;
  if (sleeping) {
    const cx = hideSlot ? slots[hideSlot].x + slots[hideSlot].w / 2 + 2 : L + (R - L) * 0.42;
    dx = Math.round(cx - DRAGON_W / 2);
    dy = FLOOR + 1 - (DRAGON_H - 1);
  } else if (st.basking >= bmin) {
    dx = R - 44;
    dy = FLOOR - 11 - 30;
  } else {
    dx = Math.round(L + (R - L) * 0.45 - DRAGON_W / 2);
    dy = FLOOR + 1 - 31;
  }
  const drawDragon = () => drawGrid(ctx, g, dragonPalette(moodOf(game, now)), dx, dy);

  if (sleeping && hideSlot) drawDragon();
  // Decor in its slots.
  // The hanging spot first, so a branch stands behind the floor items.
  const order = Object.entries(game.decor || {}).sort(([a], [b]) => (a === 'hang' ? -1 : b === 'hang' ? 1 : 0));
  for (const [slot, id] of order) {
    const rect = slots[slot];
    if (!rect || !DECOR[id]) continue;
    const g = itemSprite(id);
    const w = g[0].length;
    const h = g.length;
    const x = Math.round(rect.x + rect.w / 2 - w / 2);
    const y = slot === 'hang' && id !== 'branch' ? rect.y + 4 : FLOOR + 1 - h;
    drawGrid(ctx, g, ITEM_PAL, x, y);
  }

  if (!(sleeping && hideSlot)) drawDragon();

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
    const zx = dx + 34;
    const zy = dy + 2 - (frame % 4);
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

export default function TankScene({ game, now, pose = 'idle', onDecor, badge }) {
  const canvasRef = useRef(null);
  const boxRef = useRef(null);
  const [frame, setFrame] = useState(0);
  const [drag, setDrag] = useState(null); // { id, from, x, y, moved }
  const [picked, setPicked] = useState(null); // tap-to-place fallback
  const slots = useMemo(() => slotRects(game.setup.tank), [game.setup.tank]);
  const decor = game.decor || {};
  const placed = new Set(Object.values(decor));

  useEffect(() => {
    const t = setInterval(() => setFrame((f) => f + 1), 550);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (ctx) drawScene(ctx, game, now, frame, pose);
  }, [game, now, frame, pose]);

  const place = useCallback((id, slot, from) => {
    const next = { ...decor };
    if (from) delete next[from];
    if (slot) {
      if (DECOR[id].hangs !== (slot === 'hang')) return false;
      const bumped = next[slot];
      next[slot] = id;
      if (bumped && from) next[from] = bumped;
    }
    onDecor(next);
    return true;
  }, [decor, onDecor]);

  // Pointer-driven drag so it works with a finger as well as a mouse. The
  // live drag sits in a ref so the pointerup handler acts on it exactly once.
  const dragRef = useRef(null);
  const setDragNow = (d) => {
    dragRef.current = d;
    setDrag(d);
  };
  useEffect(() => {
    if (!drag) return undefined;
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
        setPicked((p) => (p && p.id === d.id && p.from === d.from ? null : { id: d.id, from: d.from }));
        return;
      }
      const under = document.elementFromPoint(e.clientX, e.clientY);
      const slot = under?.closest('[data-slot]')?.getAttribute('data-slot');
      if (slot) place(d.id, slot, d.from);
      else if (d.from && !boxRef.current?.contains(under)) place(d.id, null, d.from);
      setPicked(null);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
  }, [drag !== null, place]);

  const startDrag = (id, from) => (e) => {
    e.preventDefault();
    setDragNow({ id, from, x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, moved: false });
  };

  const tapSlot = (slot) => {
    if (!picked) return;
    if (place(picked.id, slot, picked.from)) setPicked(null);
  };

  const active = drag?.moved ? drag : picked;
  const fits = (slot) => active && DECOR[active.id].hangs === (slot === 'hang');

  return (
    <div className="contents">
      <div
        ref={boxRef}
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
              onClick={() => tapSlot(slot)}
              onPointerDown={id && !picked ? startDrag(id, slot) : undefined}
              className={`absolute rounded-md transition-colors ${
                fits(slot) ? 'border-2 border-dashed border-white/90 bg-white/20' : active ? 'border border-dashed border-white/30' : ''
              } ${id ? 'cursor-grab' : ''}`}
              style={{ left: pct(r.x, SW), top: pct(r.y, SH), width: pct(r.w, SW), height: pct(r.h, SH), touchAction: 'none' }}
              aria-label={id ? `${DECOR[id].label} in the tank. Drag it out or to another spot.` : `Empty ${slot === 'hang' ? 'hanging' : 'floor'} spot`}
            />
          );
        })}
        {badge}
      </div>

      <div className="bg-card border border-border rounded-2xl p-3 mt-3 mb-4">
        <p className="text-xs font-body font-bold text-muted-foreground mb-2">
          {picked ? `Tap a spot in the tank for the ${DECOR[picked.id].label.toLowerCase()}` : 'Drag items into the tank'}
        </p>
        <div className="flex flex-wrap gap-2">
          {Object.entries(DECOR).map(([id, item]) => {
            const inTank = placed.has(id);
            return (
              <button
                key={id}
                type="button"
                onPointerDown={inTank ? undefined : startDrag(id, null)}
                disabled={inTank}
                className={`flex flex-col items-center gap-1 px-2 py-1.5 rounded-xl border text-[11px] font-body font-bold touch-none ${
                  picked?.id === id && !picked.from ? 'border-primary bg-primary/10' : 'border-border bg-card'
                } ${inTank ? 'opacity-35' : 'cursor-grab'}`}
              >
                <ItemIcon id={id} />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {drag?.moved && (
        <div className="fixed pointer-events-none z-50" style={{ left: drag.x - 24, top: drag.y - 20 }}>
          <ItemIcon id={drag.id} />
        </div>
      )}
    </div>
  );
}
