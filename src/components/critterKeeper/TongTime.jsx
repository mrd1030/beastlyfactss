import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

// Tong Time: feeders scurry across the floor and the player picks them up
// with tongs. The feeding guide's rule is the whole game: prey no wider than
// the space between his eyes, and never a firefly. 30 seconds, three
// strikes for oversized prey, and a firefly ends it on the spot.
// A small playfield scaled up, so the bugs are big enough to judge on a phone.
const W = 100;
const H = 68;
const TOP = 12; // below the ruler strip
const ROUND_MS = 30000;

const LOOK = {
  cricket: { body: '#8a5a2b', head: '#5a3a1e', leg: '#5a3a1e' },
  dubia: { body: '#4a2e1a', head: '#2b1a0e', leg: '#2b1a0e', stripe: '#6b4a2e' },
  firefly: { body: '#1f1f1f', head: '#8a2a1a', leg: '#1f1f1f', glow: '#f6e05e' },
};

// The widest prey he can take grows with him: about 4 pixels at 4 months
// to 7 as an adult.
const maxWidthFor = (age) => Math.round(4 + ((Math.min(Math.max(age, 120), 548) - 120) / 428) * 3);

function spawn(maxW, id) {
  const firefly = Math.random() < 0.12;
  const roll = Math.random();
  const size = firefly ? 'right' : roll < 0.25 ? 'small' : roll < 0.7 ? 'right' : 'big';
  const w = size === 'small' ? Math.max(2, maxW - 2) : size === 'right' ? maxW : maxW + 3;
  const fromLeft = Math.random() < 0.5;
  const speed = 9 + Math.random() * 10;
  const ang = (fromLeft ? 0 : Math.PI) + (Math.random() - 0.5) * 1.2;
  return {
    id,
    kind: firefly ? 'firefly' : Math.random() < 0.5 ? 'cricket' : 'dubia',
    size,
    w,
    len: Math.round(w * 1.7) + 1,
    x: fromLeft ? 3 : W - 3,
    y: TOP + 7 + Math.random() * (H - TOP - 14),
    vx: Math.cos(ang) * speed,
    vy: Math.sin(ang) * speed,
    born: performance.now(),
  };
}

function drawBug(ctx, b, now) {
  const L = LOOK[b.kind];
  const a = Math.atan2(b.vy, b.vx);
  const cos = Math.cos(a);
  const sin = Math.sin(a);
  const rl = b.len / 2;
  const rw = b.w / 2;
  const r = Math.ceil(rl) + 2;
  const glowOn = Math.floor(now / 300) % 2 === 0;
  for (let dy = -r; dy <= r; dy++) {
    for (let dx = -r; dx <= r; dx++) {
      // Into the bug's own frame: lx along its body, ly across it.
      const lx = dx * cos + dy * sin;
      const ly = -dx * sin + dy * cos;
      const e = (lx / rl) ** 2 + (ly / rw) ** 2;
      let c = null;
      if (e <= 1) {
        c = L.body;
        if (lx > rl * 0.55) c = L.head;
        if (L.stripe && Math.round(lx) % 2 === 0 && lx < rl * 0.5) c = L.stripe;
        if (L.glow && glowOn && lx < -rl * 0.3) c = L.glow;
      } else if (Math.abs(ly) <= rw + 1.5 && Math.abs(lx) < rl * 0.6 && Math.round(lx) % 3 === 0 && e < 2.2) {
        c = L.leg;
      } else if (lx > rl && lx < rl + 2.5 && Math.abs(ly - (lx - rl) * 0.8) < 0.6) {
        c = L.leg; // antenna
      }
      if (c) {
        ctx.fillStyle = c;
        ctx.fillRect(Math.round(b.x + dx), Math.round(b.y + dy), 1, 1);
      }
    }
  }
}

export default function TongTime({ age, dust, onFinish }) {
  const canvasRef = useRef(null);
  const bugs = useRef([]);
  const score = useRef({ good: 0, small: 0, big: 0, firefly: 0 });
  const [hud, setHud] = useState({ left: ROUND_MS, good: 0, strikes: 0 });
  const [pop, setPop] = useState(null); // { text, tone, key }
  const [over, setOverState] = useState(null); // why it ended
  const overRef = useRef(null);
  const setOver = (why) => {
    overRef.current = why;
    setOverState(why);
  };
  const maxW = maxWidthFor(age);
  const target = age >= 548 ? 5 : 8;

  useEffect(() => {
    let raf;
    let last = performance.now();
    const start = last;
    let nextSpawn = last;
    let n = 0;
    const loop = (t) => {
      if (overRef.current) return;
      const dt = Math.min(0.05, (t - last) / 1000);
      last = t;
      const left = ROUND_MS - (t - start);
      if (left <= 0) {
        setOver('time');
        return;
      }
      if (t >= nextSpawn && bugs.current.length < 6) {
        bugs.current.push(spawn(maxW, n++));
        nextSpawn = t + 500 + Math.random() * 500;
      }
      for (const b of bugs.current) {
        if (Math.random() < 0.02) {
          const a = Math.atan2(b.vy, b.vx) + (Math.random() - 0.5) * 1.6;
          const sp = Math.hypot(b.vx, b.vy);
          b.vx = Math.cos(a) * sp;
          b.vy = Math.sin(a) * sp;
        }
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        if (b.y < TOP + 4 || b.y > H - 4) b.vy = -b.vy;
      }
      // Bugs that run off the side are gone.
      bugs.current = bugs.current.filter((b) => b.x > -8 && b.x < W + 8);

      const ctx = canvasRef.current?.getContext('2d');
      if (ctx) {
        ctx.fillStyle = '#cdbca3';
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = '#b5a48c';
        for (let x = 9; x < W; x += 10) ctx.fillRect(x, TOP, 1, H - TOP);
        for (let y = TOP + 10; y < H; y += 10) ctx.fillRect(0, y, W, 1);
        // The ruler: the widest prey he can take today.
        ctx.fillStyle = '#fffaf0';
        ctx.fillRect(0, 0, W, TOP - 2);
        ctx.fillStyle = '#1d3226';
        ctx.fillRect(3, 3, maxW, 5);
        ctx.fillStyle = '#e8a33d';
        ctx.fillRect(3, 2, maxW, 1);
        ctx.fillRect(3, 8, maxW, 1);
        for (const b of bugs.current) drawBug(ctx, b, t);
      }
      setHud((h) => (Math.ceil(left / 1000) !== Math.ceil(h.left / 1000) ? { ...h, left } : h));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [maxW]);

  const flash = (text, tone) => setPop({ text, tone, key: Math.random() });

  const tap = (e) => {
    if (over) return;
    const r = canvasRef.current.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * W;
    const y = ((e.clientY - r.top) / r.height) * H;
    let best = null;
    let bestD = Infinity;
    for (const b of bugs.current) {
      const d = Math.hypot(b.x - x, b.y - y);
      if (d < b.len / 2 + 3 && d < bestD) {
        best = b;
        bestD = d;
      }
    }
    if (!best) return;
    bugs.current = bugs.current.filter((b) => b !== best);
    const s = score.current;
    if (best.kind === 'firefly') {
      s.firefly = 1;
      flash('A firefly! Toxic.', 'bad');
      setOver('firefly');
      return;
    }
    if (best.size === 'big') {
      s.big += 1;
      const strikes = s.big;
      setHud((h) => ({ ...h, strikes }));
      flash('Too big!', 'bad');
      if (strikes >= 3) setOver('strikes');
      return;
    }
    if (best.size === 'small') s.small += 1;
    else s.good += 1;
    const good = s.good + s.small;
    setHud((h) => ({ ...h, good }));
    flash(best.size === 'small' ? 'Small, but fine' : 'Chomp!', 'good');
    if (good >= target) setOver('full');
  };

  const ended = {
    time: 'Time is up.',
    full: 'He has had his fill.',
    strikes: 'Three oversized bugs. Prey should be no wider than the space between his eyes.',
    firefly: 'You picked up a firefly. A single one can kill a bearded dragon.',
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-3" role="dialog" aria-modal="true" aria-label="Tong Time">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
        <div className="flex items-center justify-between px-4 pt-3">
          <h2 className="font-display font-bold text-lg text-foreground">Tong Time</h2>
          <button type="button" onClick={() => onFinish(score.current)} aria-label="Stop" className="p-1.5 rounded-lg hover:bg-muted"><X className="w-4 h-4" /></button>
        </div>
        <p className="px-4 text-xs font-body text-muted-foreground mb-2">
          Tap bugs to pick them up with the tongs. Only ones no wider than the dark bar (the space between his eyes). Never a firefly.
        </p>
        <div className="flex justify-between px-4 text-xs font-body font-bold text-foreground mb-1.5">
          <span>⏱ {Math.ceil(hud.left / 1000)}s</span>
          <span>🦗 {hud.good}/{target}</span>
          <span>{'❌'.repeat(hud.strikes)}{'▫️'.repeat(Math.max(0, 3 - hud.strikes))}</span>
        </div>
        <div className="relative">
          <canvas
            ref={canvasRef}
            width={W}
            height={H}
            onPointerDown={tap}
            className="block w-full touch-none cursor-pointer"
            style={{ imageRendering: 'pixelated', aspectRatio: `${W} / ${H}` }}
          />
          {pop && !over && (
            <span key={pop.key} className={`absolute left-1/2 top-6 -translate-x-1/2 px-2.5 py-1 rounded-lg text-xs font-body font-bold pointer-events-none ${pop.tone === 'bad' ? 'bg-destructive text-destructive-foreground' : 'bg-primary text-primary-foreground'}`}>
              {pop.text}
            </span>
          )}
          {over && (
            <div className="absolute inset-0 bg-card/90 flex flex-col items-center justify-center text-center p-4">
              <p className="font-display font-bold text-foreground mb-1">{ended[over]}</p>
              <p className="text-sm font-body text-muted-foreground mb-3">
                {score.current.good + score.current.small} fed{score.current.big ? `, ${score.current.big} too big` : ''}{dust && dust !== 'none' ? ', dusted' : ''}
              </p>
              <button type="button" onClick={() => onFinish(score.current)} className="bg-primary text-primary-foreground font-body font-bold text-sm px-5 py-2 rounded-xl">
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
