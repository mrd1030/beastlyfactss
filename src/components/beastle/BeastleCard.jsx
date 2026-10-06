import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { STORAGE, dayNumber, liveStreak } from '@/lib/beastle/day';

// The "Today's Beastle" card for the homepage, the quiz hub and the Pack.
// Reads storage directly instead of loading the game (and its answer pool):
// all it needs is today's number, whether today is done, and the streak.
// First render is the same for everyone (prerender safe); the player's own
// state arrives after mount.
function readState() {
  const read = (key, fallback) => {
    try {
      const v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch {
      return fallback;
    }
  };
  const today = dayNumber();
  const daily = read(STORAGE.daily, null);
  const stats = read(STORAGE.stats, null);
  const journal = read(STORAGE.journal, []);
  return {
    today,
    done: daily?.day === today && daily.done,
    won: daily?.day === today && daily.won,
    guesses: daily?.day === today ? daily.guesses.length : 0,
    streak: liveStreak(stats, today),
    played: stats?.played || 0,
    wins: stats?.wins || 0,
    maxStreak: stats?.maxStreak || 0,
    journal: Array.isArray(journal) ? journal : [],
  };
}

const GROUPS = [
  ['mammal', 'Mammals'],
  ['bird', 'Birds'],
  ['reptile', 'Reptiles'],
  ['amphibian', 'Amphibians'],
  ['fish', 'Fish'],
  ['invertebrate', 'Invertebrates'],
];
const RECENT = 8;

function JournalPill({ item, entry }) {
  const cls = 'text-xs font-body font-semibold bg-primary/10 text-foreground px-2.5 py-1 rounded-full';
  return entry?.link
    ? <Link to={entry.link} className={`${cls} hover:bg-primary/20 hover:text-secondary transition-colors`}>{item.name}</Link>
    : <span className={cls}>{item.name}</span>;
}

// The field journal as a collection: how many of the pool you've found, the
// latest few, and the whole thing by kind behind "Open journal". The pool
// (about 90KB) loads only here, on the Pack, never with the homepage card.
function Journal({ journal }) {
  const [pool, setPool] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    import('@/lib/data/beastle/pool.json').then((m) => setPool((m.default || m).pool)).catch(() => {});
  }, []);

  if (!journal.length) {
    return (
      <>
        <p className="text-xs font-body font-bold text-foreground mb-2">Field journal</p>
        <p className="text-xs text-muted-foreground font-body">Every animal you solve in Beastle, and every one you name in the bonus round, lands here.</p>
      </>
    );
  }

  // Some animals are in the pool twice, a short daily answer (DRAGON) beside
  // the full name (BEARDED DRAGON), so an animal is counted by its page.
  const byAnswer = new Map((pool || []).map((e) => [e.answer, e]));
  const idOf = (e) => e.link || e.answer;
  const animals = [...new Map((pool || []).map((e) => [idOf(e), e])).values()];
  const found = new Set(journal.map((j) => byAnswer.get(j.answer)).filter(Boolean).map(idOf));
  const recent = [...new Map(journal.map((j) => [j.name, j])).values()].slice(-RECENT).reverse();
  const count = pool ? found.size : new Set(journal.map((j) => j.name)).size;

  return (
    <>
      <div className="flex items-baseline justify-between gap-2 mb-1.5">
        <p className="text-xs font-body font-bold text-foreground">Field journal</p>
        <p className="text-xs font-body text-muted-foreground tabular-nums">
          {pool ? `${count} of ${animals.length} animals found` : `${count} ${count === 1 ? 'animal' : 'animals'} found`}
        </p>
      </div>
      {pool && (
        <div className="h-1.5 rounded-full bg-muted overflow-hidden mb-3" aria-hidden="true">
          <div className="h-full bg-primary rounded-full" style={{ width: `${Math.max(2, (count / animals.length) * 100)}%` }} />
        </div>
      )}
      <p className="text-[10px] font-body font-bold uppercase tracking-wider text-muted-foreground mb-1.5">Latest finds</p>
      <div className="flex flex-wrap gap-1.5">
        {recent.map((j) => <JournalPill key={j.answer} item={j} entry={byAnswer.get(j.answer)} />)}
      </div>
      {pool && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-3 inline-flex items-center gap-1 text-xs font-body font-bold text-secondary hover:underline"
        >
          {open ? 'Close journal' : 'Open journal'}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      )}
      {pool && open && (
        <div className="mt-3 space-y-2">
          {GROUPS.map(([group, label]) => {
            const all = animals.filter((e) => e.group === group);
            const mine = all.filter((e) => found.has(idOf(e))).sort((a, b) => a.name.localeCompare(b.name));
            return (
              <details key={group} className="group rounded-xl border border-border bg-card">
                <summary className="flex items-center justify-between gap-2 px-3 py-2 cursor-pointer list-none">
                  <span className="text-sm font-body font-bold text-foreground">{label}</span>
                  <span className="flex items-center gap-1.5 text-xs font-body text-muted-foreground tabular-nums">
                    {`${mine.length} of ${all.length}`}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-open:rotate-180" />
                  </span>
                </summary>
                <div className="px-3 pb-3">
                  {mine.length ? (
                    <div className="flex flex-wrap gap-1.5">
                      {mine.map((e) => <JournalPill key={e.answer} item={e} entry={e} />)}
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground font-body">{`No ${label.toLowerCase()} yet.`}</p>
                  )}
                </div>
              </details>
            );
          })}
        </div>
      )}
    </>
  );
}

export default function BeastleCard({ showJournal = false }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setState(readState());
  }, []);

  const status = !state ? 'Guess the hidden animal in six tries'
    : state.done ? (state.won ? `Solved in ${state.guesses} of 6` : 'Missed today, back tomorrow')
      : state.guesses ? `In progress: ${state.guesses} of 6 guesses used` : 'A new animal is waiting';

  return (
    <div className="bg-gradient-to-br from-primary/10 via-card to-accent/15 border-2 border-primary/30 rounded-3xl p-5 sm:p-6">
      <Link to="/beastle/" className="group flex items-center gap-4">
        <span className="flex-shrink-0 grid grid-cols-3 gap-0.5" aria-hidden="true">
          {['bg-primary', 'bg-accent', 'bg-muted-foreground/50', 'bg-accent', 'bg-primary', 'bg-primary', 'bg-primary', 'bg-primary', 'bg-primary'].map((c, i) => (
            <span key={i} className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-[3px] ${c}`} />
          ))}
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] font-body font-bold uppercase tracking-wider text-primary dark:text-accent mb-0.5">
            {state ? `Today's Beastle · #${state.today}` : "Today's Beastle"}
          </p>
          <h3 className="font-display font-bold text-lg sm:text-xl text-foreground group-hover:text-secondary transition-colors">
            Beastle: the daily animal word game
          </h3>
          <p className="text-xs text-muted-foreground font-body">
            {status}
            {state?.streak > 0 && <span className="ml-1.5 font-bold text-secondary">{`🔥 ${state.streak}`}</span>}
          </p>
        </div>
        <span className="flex-shrink-0 inline-flex items-center gap-1.5 text-sm font-body font-bold text-secondary">
          {state?.done ? 'See it' : 'Play'}<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
      {showJournal && state && (
        <div className="mt-4 pt-4 border-t border-border/60">
          <div className="grid grid-cols-4 gap-2 text-center mb-3">
            {[['Played', state.played], ['Win %', state.played ? Math.round((state.wins / state.played) * 100) : 0], ['Streak', state.streak], ['Best', state.maxStreak]].map(([label, value]) => (
              <div key={label}>
                <p className="font-display font-bold text-xl text-foreground tabular-nums">{value}</p>
                <p className="text-[10px] font-body font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
          <Journal journal={state.journal} />
        </div>
      )}
    </div>
  );
}
