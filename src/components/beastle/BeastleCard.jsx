import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
          {state?.done ? 'See it' : 'Play'} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
          <p className="text-xs font-body font-bold text-foreground mb-2">
            {`Field journal · ${state.journal.length} ${state.journal.length === 1 ? 'animal' : 'animals'}`}
          </p>
          {state.journal.length ? (
            <div className="flex flex-wrap gap-1.5">
              {state.journal.map((j) => (
                <span key={j.answer} className="text-xs font-body font-semibold bg-primary/10 text-foreground px-2.5 py-1 rounded-full">{j.name}</span>
              ))}
            </div>
          ) : (
            <p className="text-xs text-muted-foreground font-body">Solve today&apos;s Beastle, then name the animals in the bonus round to fill it.</p>
          )}
        </div>
      )}
    </div>
  );
}
