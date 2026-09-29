import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import QuickCare from '@/components/critterKeeper/QuickCare';
import { drawGrid } from '@/lib/critterKeeper/pixel';
import { DRAGON_H, DRAGON_W, buildDragon, dragonPalette } from '@/lib/critterKeeper/sprites/dragon';
import { isDay, mood, needsVet, tick } from '@/lib/critterKeeper/sim';
import { useCritterGame } from '@/lib/critterKeeper/useCritterGame';
import { useFrames } from '@/lib/critterKeeper/ui';

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

  const hidden = HIDDEN_ON.some((p) => pathname === p || pathname.startsWith(`${p}/`));

  // Bring him up to date and save it, once a minute, like his page does.
  // Ticking without saving re-rolled the random parts of the sim on every
  // render, so his look and the red dot could flicker. On his own page the
  // page does the ticking.
  useEffect(() => {
    if (!loaded || !game || game.dead || hidden) return;
    if (now - game.lastTick >= 60000) setGame(tick(game, now));
  }, [loaded, game, now, hidden, setGame]);

  const live = loaded && game && !game.dead ? game : null;
  const sleeping = live ? !isDay(now) : false;
  const look = live ? lookOf(live, now) : 'normal';

  const frame = useFrames(600);
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    ctx.clearRect(0, 0, DRAGON_W, DRAGON_H);
    drawGrid(ctx, buildDragon({ pose: sleeping ? 'sleep' : 'idle', mood: look, lift: sleeping ? 0 : frame % 2, blink: frame % 9 === 8 }), dragonPalette(look));
  }, [frame, sleeping, look, hidden, open]);

  if (!live) return null;
  if (hidden) return null;
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
      className="fixed right-4 z-40 w-14 h-14 md:w-16 md:h-16 rounded-full bg-card border-2 border-foreground/80 shadow-lg flex items-center justify-center hover:scale-105 transition-transform bottom-[calc(56px+var(--safe-area-inset-bottom,0px)+12px)] md:bottom-6"
    >
      <canvas ref={canvasRef} width={DRAGON_W} height={DRAGON_H} className="w-10 md:w-12" style={{ imageRendering: 'pixelated' }} aria-hidden="true" />
      {alert && (
        <span className="absolute -top-0.5 -right-0.5 flex w-4 h-4">
          {alert === 'critical' && <span className="absolute inset-0 rounded-full bg-destructive motion-safe:animate-ping" />}
          <span className="relative w-4 h-4 rounded-full bg-destructive border-2 border-card" />
        </span>
      )}
    </button>
    {open && <QuickCare game={game} setGame={setGame} onClose={() => setOpen(false)} />}
    </>
  );
}
