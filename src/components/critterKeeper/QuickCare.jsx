import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Bug, Droplets, Leaf, Scale, Stethoscope, Trash2, Waves, X } from 'lucide-react';
import { GUIDES } from '@/lib/critterKeeper/rules';
import { act, ageDays, checklist, feedBlock, markCriticalSeen, mood, needsVet, nextStep, stageOf, tick } from '@/lib/critterKeeper/sim';
import { MiniTank } from '@/components/critterKeeper/TankScene';
import TongTime from '@/components/critterKeeper/TongTime';
import { useDialogFocus } from '@/lib/critterKeeper/ui';

// The quick-care sheet the bubble opens: a live look at him, what to do
// next, today's checklist, and one-tap care. Everything else (the tank,
// decorating, the care log) is a tap away on his page.

const TONE = {
  good: 'bg-primary/10 border-primary/30',
  info: 'bg-muted border-border',
  warn: 'bg-accent/15 border-accent/40',
  bad: 'bg-destructive/10 border-destructive/40',
};

function Quick({ icon: Icon, label, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="flex flex-col items-center gap-1 py-2.5 rounded-xl border border-border bg-card text-[11px] font-body font-bold text-foreground hover:bg-muted disabled:opacity-40"
    >
      <Icon className="w-5 h-5" />
      {label}
    </button>
  );
}

export default function QuickCare({ game, setGame, onClose }) {
  const [now, setNow] = useState(() => Date.now());
  const [msg, setMsg] = useState(null);
  const [eating, setEating] = useState(false);
  const [tong, setTong] = useState(false);
  const panelRef = useDialogFocus(() => (tong ? null : onClose()));

  // Opening the sheet brings him up to date and saves it. If he is
  // critical, the warning is now on screen, so the rescue window starts.
  useEffect(() => {
    const t = Date.now();
    setGame(markCriticalSeen(tick(game, t), t));
    const beat = setInterval(() => setNow(Date.now()), 30000);
    return () => clearInterval(beat);
  }, []);

  const doAction = (type, opts) => {
    const t = Date.now();
    const { state, msg: m } = act(game, type, opts, t);
    setGame(state);
    setNow(t);
    setMsg(m);
    if (['insects', 'salad', 'tongs'].includes(type) && m?.tone !== 'bad') {
      setEating(true);
      setTimeout(() => setEating(false), 2500);
    }
  };

  const adult = stageOf(game, now) === 'adult';
  const feed = () => (adult
    ? doAction('salad', { plants: ['collard', 'mustard'], dust: true, mist: true })
    : doAction('insects', { insect: 'dubia', size: 'right', dust: 'calcium' }));
  const step = nextStep(game, now);
  const md = mood(game, now);
  const items = checklist(game, now);
  const vet = needsVet(game);

  return (
    <div className="fixed inset-0 z-[55] flex items-end md:items-auto md:block" role="dialog" aria-modal="true" aria-label={`Quick care for ${game.name}`}>
      <button type="button" aria-label="Close" onClick={onClose} className="absolute inset-0 bg-black/40 md:bg-transparent cursor-default" />
      <div ref={panelRef} className="relative w-full md:absolute md:right-4 md:bottom-24 md:w-96 max-h-[88vh] overflow-y-auto bg-background border border-border rounded-t-2xl md:rounded-2xl shadow-xl pb-[calc(var(--safe-area-inset-bottom,0px)+12px)]">
        <div className="flex items-center justify-between px-4 pt-3 pb-2">
          <div>
            <p className="font-display font-bold text-lg text-foreground leading-tight">{game.name}</p>
            <p className="text-xs font-body text-muted-foreground">{md.emoji} {md.text}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="p-2 rounded-xl hover:bg-muted"><X className="w-5 h-5" /></button>
        </div>

        <div className="mx-4 rounded-xl overflow-hidden border border-border">
          <MiniTank game={game} now={now} pose={eating ? 'eat' : 'idle'} />
          {step && (
            <p className={`px-3 py-2 text-xs font-body font-bold ${step.urgent ? 'bg-destructive text-destructive-foreground' : 'bg-card text-foreground'}`}>
              {step.text}
            </p>
          )}
        </div>

        {vet && (
          <button type="button" onClick={() => doAction('vet')} className="mx-4 mt-3 w-[calc(100%-2rem)] flex items-center justify-center gap-2 bg-destructive text-destructive-foreground font-body font-bold text-sm py-2.5 rounded-xl">
            <Stethoscope className="w-4 h-4" /> Take {game.name} to the vet
          </button>
        )}

        {msg && (
          <div className={`mx-4 mt-3 border rounded-xl px-3 py-2 ${TONE[msg.tone] || TONE.info}`} role="status">
            <p className="text-xs font-body text-foreground">{msg.text}</p>
            {msg.guide && msg.tone !== 'good' && GUIDES[msg.guide] && (
              <Link to={GUIDES[msg.guide].to} onClick={onClose} className="mt-1 inline-flex items-center gap-1 text-[11px] font-body font-bold text-primary underline underline-offset-2">
                <BookOpen className="w-3 h-3" /> Read the {GUIDES[msg.guide].label}
              </Link>
            )}
          </div>
        )}

        <div className="mx-4 mt-3 grid grid-cols-4 gap-1.5">
          {items.map((c) => (
            <span key={c.id} className={`text-center py-1.5 rounded-lg text-[11px] font-body font-bold border ${c.done ? 'bg-primary/10 border-primary/30 text-primary' : 'border-dashed border-border text-muted-foreground'}`}>
              {c.done ? '✓ ' : ''}{c.label}
            </span>
          ))}
        </div>

        <div className="mx-4 mt-3 grid grid-cols-5 gap-1.5">
          <Quick icon={adult ? Leaf : Bug} label={adult ? 'Salad' : 'Feed'} onClick={feed} />
          <Quick icon={Droplets} label="Water" onClick={() => doAction('water')} />
          <Quick icon={Waves} label="Soak" onClick={() => doAction('soak')} />
          <Quick icon={Trash2} label="Clean" onClick={() => doAction('clean')} />
          <Quick icon={Scale} label="Weigh" onClick={() => doAction('weigh')} />
        </div>
        {!adult && (
          <button
            type="button"
            onClick={() => {
              const why = feedBlock(game, Date.now());
              if (why) setMsg({ text: why, tone: 'info' });
              else setTong(true);
            }}
            className="mx-4 mt-2 w-[calc(100%-2rem)] py-2 rounded-xl bg-accent/20 border border-accent/40 text-xs font-body font-bold text-foreground hover:bg-accent/30"
          >
            🥢 Tong Time
          </button>
        )}

        <Link
          to="/critter-keeper/"
          onClick={onClose}
          className="mx-4 mt-3 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-body font-bold"
        >
          Open Critter Keeper <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="mx-4 mt-2 text-[11px] font-body text-muted-foreground text-center">Tank, decorating, handling and his care log are on his page.</p>
      </div>

      {tong && (
        <TongTime
          age={ageDays(game, now)}
          dust="calcium"
          onFinish={(result) => {
            setTong(false);
            doAction('tongs', { ...result, dust: 'calcium' });
          }}
        />
      )}
    </div>
  );
}
