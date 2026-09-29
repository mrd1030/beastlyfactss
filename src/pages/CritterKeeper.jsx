import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Bug, Droplets, Hand, Leaf, RotateCcw, Sofa, Sparkles, Stethoscope, Thermometer, Trash2, Waves } from 'lucide-react';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import {
  ENRICHMENT, GUIDES, MARKS, HANDLE_LENGTHS, HEAT_SOURCES, INSECTS, DUSTS, PLANTS, SUBSTRATES, TANKS, UVB_MOUNTS, UVB_TYPES, CONDITIONS,
} from '@/lib/critterKeeper/rules';
import {
  act, ageDays, health, mbdSymptoms, mood, needsVet, newGame, nextFix, nextStep, tankChecks, tick,
} from '@/lib/critterKeeper/sim';
import TankScene, { DragonCanvas } from '@/components/critterKeeper/TankScene';

const STORAGE_KEY = 'critter-keeper-v1';
const STEP_LABEL = { vet: 'Vet', tank: 'Tank', decorate: 'Decorate', insects: 'Feed', salad: 'Salad', water: 'Water', clean: 'Clean', enrich: 'Play', handle: 'Handle' };

const TONE = {
  good: 'bg-primary/10 border-primary/30',
  info: 'bg-muted border-border',
  warn: 'bg-accent/15 border-accent/40',
  bad: 'bg-destructive/10 border-destructive/40',
};
const CHECK_STYLE = {
  ok: 'text-primary',
  low: 'text-destructive',
  high: 'text-destructive',
};

function GuideLink({ id, children }) {
  const g = GUIDES[id];
  if (!g) return null;
  return (
    <Link to={g.to} className="inline-flex items-center gap-1 text-xs font-body font-bold text-primary underline underline-offset-2">
      <BookOpen className="w-3.5 h-3.5" /> {children || `Read the ${g.label}`}
    </Link>
  );
}

function Meter({ label, value }) {
  const color = value >= 60 ? 'bg-primary' : value >= 30 ? 'bg-accent' : 'bg-destructive';
  return (
    <div>
      <div className="flex justify-between text-xs font-body text-muted-foreground mb-1">
        <span>{label}</span>
        <span className="tabular-nums">{Math.round(value)}</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function Chip({ active, onClick, children, danger }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`px-3 py-1.5 rounded-xl text-sm font-body border transition-colors ${
        active ? 'bg-primary text-primary-foreground border-primary' : `bg-card text-foreground border-border hover:bg-muted ${danger ? '' : ''}`
      }`}
    >
      {children}
    </button>
  );
}

function Field({ label, children }) {
  return (
    <div className="mb-3">
      <p className="text-xs font-body font-bold text-muted-foreground mb-1.5">{label}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Go({ onClick, children }) {
  return (
    <button type="button" onClick={onClick} className="w-full mt-1 bg-primary text-primary-foreground font-body font-bold text-sm py-2.5 rounded-xl">
      {children}
    </button>
  );
}

function InsectPanel({ onDo }) {
  const [insect, setInsect] = useState('dubia');
  const [size, setSize] = useState('right');
  const [dust, setDust] = useState('calcium');
  return (
    <div>
      <Field label="Feeder">
        {Object.entries(INSECTS).map(([id, i]) => <Chip key={id} active={insect === id} onClick={() => setInsect(id)}>{i.label}</Chip>)}
      </Field>
      <Field label="Size">
        <Chip active={size === 'right'} onClick={() => setSize('right')}>No wider than his eyes</Chip>
        <Chip active={size === 'big'} onClick={() => setSize('big')}>Bigger, more food per bug</Chip>
      </Field>
      <Field label="Dust with">
        {Object.entries(DUSTS).map(([id, d]) => <Chip key={id} active={dust === id} onClick={() => setDust(id)}>{d.label}</Chip>)}
      </Field>
      <Go onClick={() => onDo('insects', { insect, size, dust })}>Feed</Go>
    </div>
  );
}

function SaladPanel({ onDo }) {
  const [plants, setPlants] = useState(['collard']);
  const [dust, setDust] = useState(false);
  const [mist, setMist] = useState(true);
  const toggle = (id) => setPlants((p) => (p.includes(id) ? p.filter((x) => x !== id) : p.length >= 3 ? p : [...p, id]));
  return (
    <div>
      <Field label="Pick up to 3">
        {Object.entries(PLANTS).map(([id, p]) => <Chip key={id} active={plants.includes(id)} onClick={() => toggle(id)}>{p.label}</Chip>)}
      </Field>
      <Field label="Extras">
        <Chip active={dust} onClick={() => setDust(!dust)}>Dust with calcium</Chip>
        <Chip active={mist} onClick={() => setMist(!mist)}>Mist the salad</Chip>
      </Field>
      <Go onClick={() => onDo('salad', { plants, dust, mist })}>Serve</Go>
    </div>
  );
}

function HandlePanel({ onDo }) {
  return (
    <Field label="How long?">
      {Object.entries(HANDLE_LENGTHS).map(([id, h]) => <Chip key={id} onClick={() => onDo('handle', { length: id })}>{h.label}</Chip>)}
    </Field>
  );
}

function EnrichPanel({ onDo }) {
  return (
    <Field label="Pick one">
      {Object.entries(ENRICHMENT).map(([id, e]) => <Chip key={id} onClick={() => onDo('enrich', { kind: id })}>{e.label}</Chip>)}
    </Field>
  );
}

function Slider({ label, value, min, max, unit, onChange }) {
  return (
    <label className="block mb-3">
      <span className="flex justify-between text-xs font-body font-bold text-muted-foreground mb-1">
        <span>{label}</span>
        <span className="tabular-nums text-foreground">{value}{unit}</span>
      </span>
      <input type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-[hsl(var(--primary))]" />
    </label>
  );
}

function TankPanel({ game, now, onDo, msg }) {
  const [draft, setDraft] = useState(game.setup);
  const set = (k) => (v) => setDraft((d) => ({ ...d, [k]: v }));
  const checks = tankChecks(game, now);
  const changed = JSON.stringify(draft) !== JSON.stringify(game.setup);
  return (
    <div>
      <p className="text-xs font-body font-bold text-muted-foreground mb-1.5">Thermometer and a look around</p>
      <ul className="mb-4 divide-y divide-border border border-border rounded-xl overflow-hidden">
        {checks.map((c) => (
          <li key={c.id} className="flex items-center justify-between gap-3 px-3 py-2 bg-card">
            <span className="text-sm font-body text-foreground">{c.label}</span>
            <span className="text-right">
              <span className={`block text-sm font-body font-bold ${CHECK_STYLE[c.state]}`}>{c.state === 'ok' ? '✓ ' : '✗ '}{c.value}</span>
              <span className="block text-[11px] font-body text-muted-foreground">{c.target}</span>
            </span>
          </li>
        ))}
      </ul>
      {(() => {
        const fix = nextFix(game, now);
        const left = checks.filter((c) => c.state !== 'ok').length;
        return (
          <div className="mb-4 bg-primary/10 border border-primary/30 rounded-xl p-3">
            <p className="text-sm font-body text-foreground mb-2">
              {fix
                ? <><strong>Basic setup:</strong> {`${left} thing${left === 1 ? '' : 's'} to fix. Fix them yourself below, or one at a time here, each with the reason.`}</>
                : <><strong>Basic setup:</strong> everything checks out.</>}
            </p>
            {msg && <p className="text-sm font-body text-foreground bg-card/70 rounded-lg px-3 py-2 mb-2">{msg.text}</p>}
            {fix && (
              <button type="button" onClick={() => onDo('fixnext')} className="bg-primary text-primary-foreground font-body font-bold text-sm px-4 py-2 rounded-xl">
                Fix the next problem
              </button>
            )}
          </div>
        );
      })()}
      <Field label="Tank">
        {Object.entries(TANKS).map(([id, t]) => <Chip key={id} active={draft.tank === id} onClick={() => set('tank')(id)}>{t.label}</Chip>)}
      </Field>
      <Field label="Substrate">
        {Object.entries(SUBSTRATES).map(([id, t]) => <Chip key={id} active={draft.substrate === id} onClick={() => set('substrate')(id)}>{t.label}</Chip>)}
      </Field>
      <Field label="UVB">
        {Object.entries(UVB_TYPES).map(([id, t]) => <Chip key={id} active={draft.uvb === id} onClick={() => set('uvb')(id)}>{t.label}</Chip>)}
      </Field>
      <Field label="UVB mounted">
        {Object.entries(UVB_MOUNTS).map(([id, t]) => <Chip key={id} active={draft.mount === id} onClick={() => set('mount')(id)}>{t.label}</Chip>)}
      </Field>
      <Field label="Heat">
        {Object.entries(HEAT_SOURCES).map(([id, t]) => <Chip key={id} active={draft.heat === id} onClick={() => set('heat')(id)}>{t.label}</Chip>)}
      </Field>
      <Slider label="Basking spot" value={draft.basking} min={80} max={130} unit="°F" onChange={set('basking')} />
      <Slider label="Cool side" value={draft.cool} min={60} max={95} unit="°F" onChange={set('cool')} />
      <Slider label="Humidity" value={draft.humidity} min={15} max={80} unit="%" onChange={set('humidity')} />
      {changed && <Go onClick={() => onDo('setup', draft)}>Save tank changes</Go>}
      {game.setup.uvb !== 'none' && (
        <button type="button" onClick={() => onDo('bulb')} className="w-full mt-2 bg-secondary text-secondary-foreground font-body font-bold text-sm py-2.5 rounded-xl">
          Replace the UVB bulb
        </button>
      )}
      <div className="mt-3"><GuideLink id="tank" /></div>
    </div>
  );
}

const ACTIONS = [
  { id: 'insects', label: 'Insects', icon: Bug, panel: InsectPanel },
  { id: 'salad', label: 'Salad', icon: Leaf, panel: SaladPanel },
  { id: 'water', label: 'Fresh water', icon: Droplets },
  { id: 'soak', label: 'Soak', icon: Waves },
  { id: 'handle', label: 'Handle', icon: Hand, panel: HandlePanel },
  { id: 'enrich', label: 'Enrichment', icon: Sparkles, panel: EnrichPanel },
  { id: 'clean', label: 'Spot clean', icon: Trash2 },
  { id: 'tank', label: 'Tank', icon: Thermometer, panel: TankPanel },
  { id: 'decorate', label: 'Decorate', icon: Sofa },
];

function Adopt({ onAdopt }) {
  const [name, setName] = useState('Dex');
  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="bg-[#efe6d2] flex justify-center py-6">
        <DragonCanvas className="w-3/4 max-w-xs" />
      </div>
      <div className="p-5">
        <h2 className="font-display font-bold text-xl text-foreground mb-2">Adopt a bearded dragon</h2>
        <p className="text-sm font-body text-foreground leading-relaxed mb-2">
          He is 4 months old and comes home today with a pet store starter kit. Keep him healthy with the same care our guides teach: the right heat and UVB, the right food, water, handling and enrichment.
        </p>
        <p className="text-sm font-body text-muted-foreground leading-relaxed mb-4">
          He lives in real time, even while this page is closed, and grows a week older every day. Get something wrong and he shows real symptoms.
        </p>
        <label className="block text-xs font-body font-bold text-muted-foreground mb-1.5" htmlFor="ck-name">His name</label>
        <input
          id="ck-name"
          value={name}
          maxLength={20}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 px-3 py-2.5 rounded-xl border border-border bg-background text-foreground font-body"
        />
        <Go onClick={() => onAdopt(name)}>Bring him home</Go>
      </div>
    </div>
  );
}

function Problems({ game }) {
  const ids = Object.keys(game.cond);
  const marks = game.marks || [];
  if (!ids.length && !marks.length) return null;
  return (
    <div className="space-y-2 mb-4">
      {ids.map((id) => {
        const c = CONDITIONS[id];
        return (
          <div key={id} className="border border-destructive/40 bg-destructive/10 rounded-2xl p-3">
            <p className="font-body font-bold text-sm text-foreground">{c.label}</p>
            <p className="text-sm font-body text-foreground mb-1.5">{id === 'mbd' ? mbdSymptoms(game) : c.symptoms}</p>
            <GuideLink id={c.guide}>{`What causes it: ${GUIDES[c.guide].label}`}</GuideLink>
          </div>
        );
      })}
      {marks.map((id) => (
        <p key={id} className="text-xs font-body text-muted-foreground">Lifelong: {MARKS[id]}</p>
      ))}
    </div>
  );
}

function Log({ entries }) {
  if (!entries.length) return null;
  return (
    <div className="mt-6">
      <h2 className="font-display font-bold text-lg text-foreground mb-2">Care log</h2>
      <ul className="space-y-2">
        {entries.slice(0, 12).map((e, i) => (
          <li key={`${e.t}-${i}`} className={`border rounded-xl px-3 py-2 ${TONE[e.tone] || TONE.info}`}>
            <p className="text-[11px] font-body text-muted-foreground">
              {new Date(e.t).toLocaleString('en-US', { weekday: 'short', hour: 'numeric', minute: '2-digit' })}
            </p>
            <p className="text-sm font-body text-foreground">{e.text}</p>
            {e.guide && e.tone !== 'good' && <div className="mt-1"><GuideLink id={e.guide} /></div>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CritterKeeper() {
  const [game, setGame, loaded] = useLocalStorage(STORAGE_KEY, null);
  const [now, setNow] = useState(null);
  const [open, setOpen] = useState(null);
  const [msg, setMsg] = useState(null);
  const [eating, setEating] = useState(false);
  const [decorating, setDecorating] = useState(false);
  const panelRef = useRef(null);

  // Time is read after mount only, so the prerendered page is the same for
  // everyone and the live dragon appears on hydration.
  useEffect(() => {
    if (window.__IS_PRERENDER__) return undefined;
    const beat = () => setNow(Date.now());
    beat();
    const t = setInterval(beat, 30000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!loaded || !now || !game) return;
    if (now - game.lastTick >= 60000) setGame(tick(game, now));
  }, [loaded, now, game, setGame]);

  const doAction = (type, opts) => {
    const t = Date.now();
    const { state, msg: m } = act(game, type, opts, t);
    setGame(state);
    setNow(t);
    setMsg(m);
    if (['insects', 'salad'].includes(type) && m?.tone !== 'bad') {
      setEating(true);
      setTimeout(() => setEating(false), 2500);
    }
    if (!['tank'].includes(open)) setOpen(null);
  };

  const pageTitle = 'Critter Keeper: Raise a Virtual Bearded Dragon | Beastly Facts';
  const pageDescription = 'Raise a virtual bearded dragon in real time using real care rules. Get the heat, UVB, food and handling right, or he shows the symptoms a real dragon would.';

  const ready = loaded && now;
  const vet = ready && game && needsVet(game);
  const md = ready && game ? mood(game, now) : null;
  const hp = ready && game ? health(game) : 100;
  const age = ready && game ? ageDays(game, now) : 0;
  const step = ready && game ? nextStep(game, now) : null;

  // One way in for the action buttons and the next-step button: open a
  // panel, toggle decorating, or just do it.
  const runStep = (id, toggle = true) => {
    if (id === 'decorate') {
      setDecorating((d) => (toggle ? !d : true));
      return;
    }
    const action = ACTIONS.find((a) => a.id === id);
    if (action?.panel) {
      setOpen(toggle && open === id ? null : id);
      setTimeout(() => panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
    } else {
      doAction(id);
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://beastlyfacts.com/critter-keeper/" />
        <meta property="og:title" content="Critter Keeper: Raise a Virtual Bearded Dragon" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://beastlyfacts.com/critter-keeper/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="max-w-lg mx-auto px-4 pt-8 pb-16">
        <div className="mb-4">
          <h1 className="font-display font-bold text-3xl text-foreground">Critter Keeper</h1>
          <p className="text-xs text-muted-foreground font-body">Raise a bearded dragon with real care rules</p>
        </div>

        {!ready && <div className="h-96 rounded-2xl bg-muted animate-pulse" aria-hidden="true" />}

        {ready && !game && <Adopt onAdopt={(name) => setGame(newGame(name, Date.now()))} />}

        {ready && game && (
          <>
            {/* The tank is a direct child of the page column (TankScene's
                root is display: contents) so it can stay stuck under the
                header while everything below it scrolls. */}
            <TankScene
              game={game}
              now={now}
              pose={eating ? 'eat' : 'idle'}
              onDecor={(change) => doAction('decor', change)}
              decorating={decorating}
              onDoneDecorating={() => setDecorating(false)}
              badge={(
                <span className="absolute left-2 top-2 bg-card/90 backdrop-blur px-2.5 py-1 rounded-lg text-xs font-body font-bold text-foreground pointer-events-none">
                  {md.emoji} {md.text}
                </span>
              )}
              footer={step && (
                <div className="flex items-center gap-2 px-3 py-2 border-t border-border bg-card">
                  <p className="flex-1 text-xs font-body font-bold text-foreground">{step.text}</p>
                  {step.action && (
                    <button type="button" onClick={() => runStep(step.action, false)} className="shrink-0 inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-body font-bold px-3 py-1.5 rounded-lg">
                      {STEP_LABEL[step.action] || 'Go'} <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              )}
            />
            <div className="bg-card border border-border rounded-2xl mb-4">
              <div className="p-4">
                <div className="flex items-baseline justify-between gap-3 mb-3">
                  <h2 className="font-display font-bold text-2xl text-foreground">{game.name}</h2>
                  <p className="text-xs font-body text-muted-foreground text-right">
                    {Math.round(age / 30.4)} months · {Math.round(game.h.weight)} g
                    {game.streak > 0 && <> · 🔥 {game.streak} healthy day{game.streak === 1 ? '' : 's'}</>}
                    {game.vetVisits > 0 && <> · 🩺 {game.vetVisits} vet visit{game.vetVisits === 1 ? '' : 's'}</>}
                  </p>
                </div>
                <div className="mb-3"><Meter label="Health" value={hp} /></div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  <Meter label="Fullness" value={game.m.full} />
                  <Meter label="Hydration" value={game.m.water} />
                  <Meter label="Trust" value={game.m.trust} />
                  <Meter label="Enrichment" value={game.m.fun} />
                  <Meter label="Tank clean" value={game.m.clean} />
                </div>
                {game.poops > 0 && <p className="mt-3 text-xs font-body text-muted-foreground">💩 {game.poops} in the tank</p>}
              </div>
            </div>

            <Problems game={game} />

            {vet && (
              <button type="button" onClick={() => doAction('vet')} className="w-full mb-4 flex items-center justify-center gap-2 bg-destructive text-destructive-foreground font-body font-bold text-sm py-3 rounded-xl">
                <Stethoscope className="w-4 h-4" /> Take {game.name} to the vet
              </button>
            )}

            {msg && (
              <div className={`border rounded-2xl p-3 mb-4 ${TONE[msg.tone]}`} role="status">
                <p className="text-sm font-body text-foreground">{msg.text}</p>
                {msg.guide && msg.tone !== 'good' && <div className="mt-1.5"><GuideLink id={msg.guide} /></div>}
              </div>
            )}

            <div className="grid grid-cols-3 gap-2 mb-3">
              {ACTIONS.map(({ id, label, icon: Icon, panel }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => runStep(id)}
                  aria-expanded={panel ? open === id : id === 'decorate' ? decorating : undefined}
                  className={`flex flex-col items-center gap-1 py-3 rounded-xl border text-xs font-body font-bold transition-colors ${
                    open === id || (id === 'decorate' && decorating) ? 'bg-primary text-primary-foreground border-primary' : 'bg-card text-foreground border-border hover:bg-muted'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {label}
                </button>
              ))}
            </div>

            {open && (() => {
              const Panel = ACTIONS.find((a) => a.id === open).panel;
              return (
                <div ref={panelRef} className="bg-card border border-border rounded-2xl p-4 mb-4 scroll-mt-72">
                  <Panel key={`${open}-${JSON.stringify(game.setup)}`} game={game} now={now} onDo={doAction} msg={msg} />
                </div>
              );
            })()}

            <Log entries={game.log} />

            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2">
              {['feeding', 'health', 'handling', 'uvb'].map((id) => <GuideLink key={id} id={id} />)}
            </div>

            <button
              type="button"
              onClick={() => { if (window.confirm(`Start over? ${game.name} and his care log will be gone.`)) { setGame(null); setMsg(null); setOpen(null); } }}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Start over
            </button>
          </>
        )}
      </div>
    </div>
  );
}
