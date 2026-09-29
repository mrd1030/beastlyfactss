import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import QuickCare from '@/components/critterKeeper/QuickCare';
import { drawGrid } from '@/lib/critterKeeper/pixel';
import { DRAGON_H, DRAGON_W, buildDragon, dragonPalette } from '@/lib/critterKeeper/sprites/dragon';
import { isDay, mood, needsVet, tick } from '@/lib/critterKeeper/sim';
import { useCritterGame } from '@/lib/critterKeeper/useCritterGame';

// The floating Critter Keeper bubble: his pixel sprite in the corner of
// every page, showing how he is at a glance. A red dot means something needs
// you; a red pulse means he is critical. Tapping it opens quick care.

// Pages where the bubble would be in the way.
const HIDDEN_ON = ['/critter-keeper', '/composer'];

function lookOf(s, now) {
  if (s.cond.stress) return 'stress';
  if (s.shed.until && now < s.shed.until) return 'shed';
  if (Object.keys(s.cond).length) return 'sick';
  return 'normal';
}

// Problems whose fix is to leave him be (quiet time for a black beard, no
// more D3 dusting) never call the player over.
const LEAVE_BE = ['stress', 'd3'];

function alertOf(s) {
  if (s.critical) return 'critical';
  const needsYou = Object.keys(s.cond).some((id) => !LEAVE_BE.includes(id));
  if (needsVet(s) || needsYou || s.m.full < 25 || s.m.water < 30) return 'alert';
  return null;
}

export default function CritterBubble() {
  const [game, setGame, loaded] = useCritterGame();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const canvasRef = useRef(null);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(t);
  }, []);

  // What he is like right now: the saved game run forward to this minute.
  // Display only; the page and the popup save.
  const live = loaded && game && !game.dead ? tick(game, now) : null;
  const sleeping = live ? !isDay(now) : false;
  const look = live ? lookOf(live, now) : 'normal';

  useEffect(() => {
    if (!live) return undefined;
    let frame = 0;
    const paint = () => {
      const c = canvasRef.current;
      if (!c) return;
      const ctx = c.getContext('2d');
      ctx.clearRect(0, 0, DRAGON_W, DRAGON_H);
      drawGrid(ctx, buildDragon({ pose: sleeping ? 'sleep' : 'idle', mood: look, lift: sleeping ? 0 : frame % 2, blink: frame % 9 === 8 }), dragonPalette(look));
    };
    paint();
    const t = setInterval(() => { frame += 1; paint(); }, 600);
    return () => clearInterval(t);
  }, [!!live, sleeping, look]);

  if (!live) return null;
  if (HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`))) return null;
  if (document.documentElement.classList.contains('beastle-app')) return null;

  const alert = alertOf(live);
  const md = mood(live, now);

  return (
    <>
    <button
      type="button"
      onClick={() => setOpen(true)}
      aria-haspopup="dialog"
      aria-expanded={open}
      aria-label={`${live.name}: ${md.text}. Open quick care.`}
      title={`${live.name}: ${md.text}`}
      className="fixed right-4 z-40 w-16 h-16 rounded-full bg-card border-2 border-foreground/80 shadow-lg flex items-center justify-center hover:scale-105 transition-transform bottom-[calc(56px+var(--safe-area-inset-bottom,0px)+12px)] md:bottom-6"
    >
      <canvas ref={canvasRef} width={DRAGON_W} height={DRAGON_H} className="w-12" style={{ imageRendering: 'pixelated' }} aria-hidden="true" />
      {alert && (
        <span className="absolute -top-0.5 -right-0.5 flex w-4 h-4">
          {alert === 'critical' && <span className="absolute inset-0 rounded-full bg-destructive animate-ping" />}
          <span className="relative w-4 h-4 rounded-full bg-destructive border-2 border-card" />
        </span>
      )}
    </button>
    {open && <QuickCare game={game} setGame={setGame} onClose={() => setOpen(false)} />}
    </>
  );
}
