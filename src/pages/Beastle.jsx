import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BarChart3, Bell, BellOff, Check, Delete, HelpCircle, Image as ImageIcon, Lightbulb, Loader2, RotateCcw, Share2, BookOpen, X } from 'lucide-react';
import {
  LEVELS, MAX_GUESSES, answerForDay, dayNumber, keyStates, lettersOf, loadWords, pickUnlimited,
  score, shapeOf, shareText, validate, byAnswer,
} from '@/lib/beastle/engine';
import { STORAGE, dateForDay, liveStreak } from '@/lib/beastle/day';
import { beatShare, fetchDailyStats, logDailyResult } from '@/lib/beastle/results';
import { bonusRound, factFor, maskFact } from '@/lib/beastle/bonus';
import { useLocalStorage } from '@/lib/hooks/useLocalStorage';
import { useFavoritesCtx } from '@/lib/FavoritesContext';
import { logSiteEvent } from '@/lib/siteEvents';
import { canShareImage, shareQuizResult } from '@/lib/utils/quizShareImage';
import { beastleShareImage } from '@/lib/beastle/shareImage';
import { SITE_TIMEZONE } from '@/lib/utils/date';
import { useIsMobileViewport } from '@/lib/hooks/useIsMobileViewport';
import { useDialogFocus } from '@/lib/critterKeeper/ui';
import { getBeastleReminder, getExistingSubscription, isPushSupported, setBeastleReminder } from '@/lib/pushNotifications';

const EMPTY_STATS = { played: 0, wins: 0, streak: 0, maxStreak: 0, lastWinDay: null, dist: [0, 0, 0, 0, 0, 0] };
const EMPTY_UNLIMITED = { seen: [], current: null, played: 0, wins: 0 };
const KEY_ROWS = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

const TILE_STYLE = {
  correct: 'bg-primary border-primary text-primary-foreground',
  present: 'bg-accent border-accent text-accent-foreground',
  // Pale on purpose: absent has to read as clearly lighter than the dark
  // green, not just a different hue, or color-blind players lose it.
  absent: 'bg-muted-foreground/40 border-transparent text-foreground',
};
const KEY_STYLE = {
  correct: 'bg-primary text-primary-foreground',
  present: 'bg-accent text-accent-foreground',
  absent: 'bg-muted-foreground/40 text-foreground',
};

// Seconds until the next day on the site clock, for the "next Beastle" line.
function secondsToMidnight() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: SITE_TIMEZONE, hour: 'numeric', minute: 'numeric', second: 'numeric', hourCycle: 'h23',
  }).formatToParts(new Date());
  const get = (t) => Number(parts.find((p) => p.type === t)?.value || 0);
  return 86400 - (get('hour') * 3600 + get('minute') * 60 + get('second'));
}

function Countdown() {
  const [left, setLeft] = useState(secondsToMidnight);
  useEffect(() => {
    const t = setInterval(() => setLeft(secondsToMidnight()), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(left / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;
  return <span className="tabular-nums">{`${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`}</span>;
}

// One grid column per letter, a narrow one per space or hyphen, so a two-word
// name keeps its gap and every row lines up.
function gridColumns(shape) {
  return shape.map((s) => (s.sep ? '0.55rem' : `repeat(${s.len}, minmax(0, 2.9rem))`)).join(' ');
}

function Board({ answer, guesses, current, done, shaking, locked = null }) {
  const shape = useMemo(() => shapeOf(answer), [answer]);
  const letters = lettersOf(answer);
  const columns = gridColumns(shape);
  const rows = [];
  for (let r = 0; r < MAX_GUESSES; r++) {
    const guess = guesses[r];
    const typing = r === guesses.length && !done;
    const scored = guess ? score(guess, letters) : null;
    const cells = [];
    let i = 0;
    shape.forEach((part, p) => {
      if (part.sep) {
        cells.push(
          <div key={`s${p}`} className="flex items-center justify-center text-muted-foreground font-display font-bold" aria-hidden="true">
            {part.sep === '-' ? '-' : ''}
          </div>,
        );
        return;
      }
      for (let k = 0; k < part.len; k++, i++) {
        const ch = guess ? guess[i] : typing ? current[i] || '' : '';
        const state = scored?.[i] || (typing && locked?.has(i) ? 'correct' : undefined);
        cells.push(
          <div
            key={i}
            className={`aspect-square flex items-center justify-center rounded-[18%] border-2 font-display font-bold uppercase select-none transition-colors duration-300 ${
              state ? TILE_STYLE[state] : ch ? 'border-foreground/50 text-foreground bg-card' : 'border-border bg-card'
            }`}
            style={{ fontSize: 'clamp(0.7rem, 4.2vw, 1.5rem)', transitionDelay: state ? `${i * 60}ms` : '0ms' }}
          >
            {ch}
          </div>,
        );
      }
    });
    rows.push(
      <div
        key={r}
        className={`grid gap-1 justify-center ${typing && shaking ? 'beastle-shake' : ''}`}
        style={{ gridTemplateColumns: columns }}
        aria-label={guess ? `Guess ${r + 1}: ${guess}, ${scored.map((s) => s).join(' ')}` : undefined}
      >
        {cells}
      </div>,
    );
  }
  return <div className="flex flex-col gap-1 w-full">{rows}</div>;
}

// A raised key that sinks when pressed. A quick tap is over before the
// browser paints :active, so the pressed look is held in state for a beat,
// and a key typed on a real keyboard flashes its on-screen key too.
const RAISED = 'shadow-[0_3px_0_0_rgb(0_0_0/0.25)] transition-[transform,box-shadow] duration-75';
const SUNK = 'translate-y-[3px] shadow-none brightness-90';
const HOLD_MS = 110;

function usePressed() {
  const [down, setDown] = useState(null);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const press = useCallback((id) => {
    clearTimeout(timer.current);
    setDown(id);
  }, []);
  const release = useCallback(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setDown(null), HOLD_MS);
  }, []);
  const flash = useCallback((id) => {
    press(id);
    release();
  }, [press, release]);
  return { down, press, release, flash };
}

function Keyboard({ keys, onKey, disabled }) {
  const { down, press, release, flash } = usePressed();
  useEffect(() => {
    if (disabled) return undefined;
    const handler = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const tag = e.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (document.querySelector('[aria-modal="true"]')) return;
      if (e.key === 'Enter') flash('ENTER');
      else if (e.key === 'Backspace') flash('BACK');
      else if (/^[a-zA-Z]$/.test(e.key)) flash(e.key.toUpperCase());
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [disabled, flash]);
  const pressProps = (id) => ({
    onPointerDown: () => press(id),
    onPointerUp: release,
    onPointerLeave: release,
    onPointerCancel: release,
  });
  const btn = (id) => `h-12 rounded-md font-body font-bold text-sm flex items-center justify-center select-none touch-manipulation disabled:opacity-50 ${RAISED} ${down === id ? SUNK : ''}`;
  return (
    <div className="flex flex-col gap-1.5 w-full max-w-lg mx-auto" aria-label="Keyboard">
      {KEY_ROWS.map((row, r) => (
        <div key={row} className="flex gap-1 justify-center">
          {r === 2 && (
            <button type="button" disabled={disabled} onClick={() => onKey('ENTER')} {...pressProps('ENTER')} className={`${btn('ENTER')} px-2 flex-[1.5] bg-secondary text-secondary-foreground text-xs`}>
              Enter
            </button>
          )}
          {row.split('').map((l) => (
            <button
              key={l}
              type="button"
              disabled={disabled}
              onClick={() => onKey(l)}
              {...pressProps(l)}
              className={`${btn(l)} flex-1 max-w-[2.6rem] ${KEY_STYLE[keys[l]] || 'bg-muted text-foreground'}`}
            >
              {l}
            </button>
          ))}
          {r === 2 && (
            <button type="button" disabled={disabled} onClick={() => onKey('BACK')} {...pressProps('BACK')} aria-label="Delete letter" className={`${btn('BACK')} flex-[1.5] bg-muted text-foreground`}>
              <Delete className="w-5 h-5" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

// The board, keyboard and input for one puzzle. The parent owns the guesses
// so daily and unlimited can store them differently.
function Game({ entry, guesses, done, words, onSubmit, showGroup = false, children }) {
  const [current, setCurrent] = useState('');
  const [message, setMessage] = useState('');
  const [shaking, setShaking] = useState(false);
  const letters = lettersOf(entry.answer);

  // The typed letters live in a ref as well as state: a fast Enter can land
  // before React re-renders and rebinds the key listener, and reading state
  // there would validate the guess as it was one keystroke earlier.
  const currentRef = useRef('');
  const setTyped = (value) => {
    currentRef.current = value;
    setCurrent(value);
  };

  useEffect(() => {
    setTyped('');
    setMessage('');
  }, [entry.answer]);

  const reject = (why) => {
    setMessage(why);
    setShaking(true);
    setTimeout(() => setShaking(false), 450);
  };

  // In a two-word answer, a word a guess has already got fully green stays
  // filled in and locked in every later row, so only the other word is
  // typed. The typed string holds just the open letters; the full guess is
  // put back together on Enter, so it scores and shares like any other row.
  const locked = useMemo(() => {
    const lengths = entry.answer.split(/[ -]/).map((w) => w.length);
    const set = new Set();
    if (lengths.length < 2) return set;
    let at = 0;
    for (const len of lengths) {
      const range = Array.from({ length: len }, (_, k) => at + k);
      if (guesses.some((g) => range.every((i) => g[i] === letters[i]))) range.forEach((i) => set.add(i));
      at += len;
    }
    return set;
  }, [entry.answer, guesses, letters]);
  const openCount = letters.length - locked.size;
  const compose = useCallback((typed) => {
    let t = 0;
    return [...letters].map((ch, i) => (locked.has(i) ? ch : typed[t++] || ''));
  }, [letters, locked]);

  const onKey = useCallback((key) => {
    if (done) return;
    const typed = currentRef.current;
    if (key === 'BACK') {
      setMessage('');
      setTyped(typed.slice(0, -1));
      return;
    }
    if (key === 'ENTER') {
      const full = typed.length < openCount ? typed : compose(typed).join('');
      const why = validate(full, entry.answer, words);
      if (why) {
        reject(why);
        return;
      }
      setMessage('');
      setTyped('');
      onSubmit(full);
      return;
    }
    if (/^[A-Z]$/.test(key) && typed.length < openCount) {
      setMessage('');
      setTyped(typed + key);
    }
  }, [done, entry.answer, words, onSubmit, openCount, compose]);

  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      const tag = e.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      // A popup like the give-up check owns the keys while it is open.
      if (document.querySelector('[aria-modal="true"]')) return;
      if (e.key === 'Enter') { e.preventDefault(); onKey('ENTER'); }
      else if (e.key === 'Backspace') onKey('BACK');
      else if (/^[a-zA-Z]$/.test(e.key)) onKey(e.key.toUpperCase());
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onKey]);

  const keys = useMemo(() => keyStates(guesses, letters), [guesses, letters]);
  const words_ = entry.answer.split(/[ -]/);

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-xs text-muted-foreground font-body text-center">
        {showGroup && entry.group && (
          <span className="font-bold text-foreground">{`It's ${/^[aeiou]/.test(entry.group) ? 'an' : 'a'} ${entry.group}`}</span>
        )}
        {showGroup && entry.group && ' · '}
        {words_.length > 1
          ? `${words_.length} words: ${words_.map((w) => `${w.length} letters`).join(' + ')}`
          : `${letters.length} letters`}
      </p>
      <Board answer={entry.answer} guesses={guesses} current={compose(current)} done={done} shaking={shaking} locked={locked} />
      <p className="min-h-[1.25rem] text-sm font-body font-semibold text-secondary text-center" role="status" aria-live="polite">
        {message}
      </p>
      {children}
      {!done && <Keyboard keys={keys} onKey={onKey} disabled={done} />}
    </div>
  );
}

// A share button that sinks when tapped and says it is working until the
// share sheet or the copy finishes, since the image takes a moment to draw.
function ShareButton({ onShare, icon: Icon, label, busyLabel, className }) {
  const { down, press, release } = usePressed();
  const [busy, setBusy] = useState(false);
  const run = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await onShare();
    } finally {
      setBusy(false);
    }
  };
  return (
    <button
      type="button"
      onClick={run}
      onPointerDown={() => press('share')}
      onPointerUp={release}
      onPointerLeave={release}
      onPointerCancel={release}
      disabled={busy}
      aria-busy={busy}
      className={`inline-flex items-center justify-center gap-2 font-body font-bold text-sm px-5 py-2.5 rounded-2xl select-none touch-manipulation disabled:opacity-80 ${RAISED} ${down || busy ? SUNK : ''} ${className}`}
    >
      {busy ? <Loader2 className="w-4 h-4 motion-safe:animate-spin" /> : <Icon className="w-4 h-4" />}
      {busy ? busyLabel : label}
    </button>
  );
}

const MINI_TILE = {
  correct: 'bg-primary',
  present: 'bg-accent',
  absent: 'bg-muted-foreground/40',
};

// The player's own daily result, kept apart from the animal's card so the
// share buttons clearly share the Beastle, not the animal: score, streak, a
// small copy of the grid, everyone's totals, the shares and the countdown.
function ResultBox({ day, entry, game, streak, children }) {
  const hinted = game.hintIndex != null || !!game.clueShown;
  const letters = lettersOf(entry.answer);
  const lengths = entry.answer.split(/[ -]/).map((w) => w.length);
  return (
    <div className="rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-card to-accent/15 p-5 sm:p-6 text-center">
      <p className="text-[10px] font-body font-bold uppercase tracking-widest text-primary dark:text-accent mb-1">Your result</p>
      <h2 className="font-display font-bold text-2xl text-foreground">
        {`Beastle #${day} · ${game.won ? game.guesses.length : 'X'}/${MAX_GUESSES}${hinted ? ' 💡' : ''}${streak > 1 ? ` 🔥${streak}` : ''}`}
      </h2>
      <div className="mt-3 flex flex-col items-center gap-1" aria-hidden="true">
        {game.guesses.map((g, r) => {
          const states = score(g, letters);
          let at = 0;
          return (
            <div key={r} className="flex gap-2">
              {lengths.map((len, w) => {
                const part = states.slice(at, at + len);
                at += len;
                return (
                  <div key={w} className="flex gap-1">
                    {part.map((s, i) => <span key={i} className={`w-[18px] h-[18px] rounded ${MINI_TILE[s]}`} />)}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      {children}
    </div>
  );
}

function Reveal({ entry, won, guesses, kicker, children }) {
  const fact = entry.factIds[0] ? factFor(entry.factIds[0]) : null;
  const blurb = entry.blurb || fact?.fact || '';
  return (
    <div className="rounded-3xl border-2 border-secondary/40 bg-gradient-to-br from-secondary/10 via-card to-primary/10 overflow-hidden">
      {entry.image && (
        <img src={entry.image} alt={entry.name} className="w-full aspect-[3/2] object-cover" loading="lazy" />
      )}
      <div className="p-5 sm:p-6 text-center">
        <p className="text-[10px] font-body font-bold uppercase tracking-widest text-secondary mb-1">
          {kicker || (won ? `Solved in ${guesses} of ${MAX_GUESSES}` : 'The answer was')}
        </p>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground">{entry.name}</h2>
        {blurb && <p className="text-sm text-muted-foreground font-body mt-2 leading-relaxed">{blurb}</p>}
        <Link to={entry.link} className="inline-flex items-center gap-1 mt-3 text-sm font-body font-bold text-secondary hover:underline">
          {`Meet the ${entry.name}`} <ArrowRight className="w-4 h-4" />
        </Link>
        {children}
      </div>
    </div>
  );
}

function Stats({ stats, today }) {
  const streak = liveStreak(stats, today);
  const max = Math.max(1, ...stats.dist);
  const cells = [
    ['Played', stats.played],
    ['Win %', stats.played ? Math.round((stats.wins / stats.played) * 100) : 0],
    ['Streak', streak],
    ['Best', stats.maxStreak],
  ];
  return (
    <div className="bg-card border border-border rounded-2xl p-5">
      <div className="grid grid-cols-4 gap-2 text-center">
        {cells.map(([label, value]) => (
          <div key={label}>
            <p className="font-display font-bold text-2xl text-foreground tabular-nums">{value}</p>
            <p className="text-[10px] font-body font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
      <p className="text-xs font-body font-bold text-foreground mt-4 mb-2">Guesses to solve</p>
      <div className="space-y-1">
        {stats.dist.map((n, i) => (
          <div key={i} className="flex items-center gap-2 text-xs font-body">
            <span className="w-3 text-muted-foreground tabular-nums">{i + 1}</span>
            <div className="flex-1">
              <div
                className="bg-primary text-primary-foreground rounded px-1.5 py-0.5 text-right font-bold tabular-nums min-w-[1.5rem]"
                style={{ width: `${Math.max(8, (n / max) * 100)}%` }}
              >
                {n}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Bonus({ today, dailyAnswer, bonus, setBonus, addToJournal }) {
  const questions = useMemo(() => bonusRound(today, dailyAnswer), [today, dailyAnswer]);
  const picks = bonus?.day === today ? bonus.picks : [];
  const correct = picks.filter((p, i) => p === questions[i]?.answer).length;
  const finished = picks.length === questions.length;

  const choose = (qi, answer) => {
    if (picks[qi] !== undefined) return;
    const next = [...picks];
    next[qi] = answer;
    setBonus({ day: today, picks: next });
    const q = questions[qi];
    if (answer === q.answer) addToJournal({ answer: q.answer, name: q.name, factId: q.factId, day: today });
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-5">
      <p className="text-[10px] font-body font-bold uppercase tracking-widest text-secondary">Bonus round</p>
      <h2 className="font-display font-bold text-xl text-foreground">Who is this?</h2>
      <p className="text-xs text-muted-foreground font-body mt-1 mb-4">
        Three real facts with the name blanked out. Every one you get lands in your field journal.
      </p>
      <div className="space-y-5">
        {questions.map((q, qi) => {
          const pick = picks[qi];
          const answered = pick !== undefined;
          if (qi > 0 && picks[qi - 1] === undefined) return null;
          return (
            <div key={q.factId}>
              {/* Once answered, the blank fills in with the real word, so a
                  miss still teaches the animal and "_____ have" reads right. */}
              <p className="text-sm font-body text-foreground leading-relaxed mb-2">
                {answered
                  ? [`${qi + 1}. `, ...q.parts.map((p, i) => (p.blank ? <strong key={i} className="font-bold text-primary dark:text-accent">{p.blank}</strong> : p.text))]
                  : `${qi + 1}. ${q.clue}`}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {q.options.map((o) => {
                  const isRight = o.answer === q.answer;
                  const state = !answered ? 'bg-muted hover:bg-muted/70 text-foreground'
                    : isRight ? 'bg-primary text-primary-foreground'
                      : o.answer === pick ? 'bg-secondary/20 text-foreground line-through' : 'bg-muted/50 text-muted-foreground';
                  return (
                    <button
                      key={o.answer}
                      type="button"
                      disabled={answered}
                      onClick={() => choose(qi, o.answer)}
                      className={`rounded-xl px-3 py-2.5 text-sm font-body font-bold transition-colors ${state}`}
                    >
                      {o.name}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      {finished && (
        <p className="text-sm font-body text-foreground mt-4">
          {`${correct} of ${questions.length} added to your `}
          <Link to="/pack/" className="font-bold text-secondary hover:underline">field journal</Link>
          .
        </p>
      )}
    </div>
  );
}

// Opt-in 9am ping for the next Beastle. Mobile only, like the Pack's
// notification switch (NotificationOptIn), which it shares a subscription with.
function BeastleReminder() {
  const isMobile = useIsMobileViewport();
  const [supported, setSupported] = useState(false);
  const [on, setOn] = useState(false);
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  // Whether Beastly Facts notifications are already on for this device. Only
  // people without them need telling that the reminder switches them on.
  const [subscribed, setSubscribed] = useState(true);

  useEffect(() => {
    if (!isPushSupported()) return;
    setSupported(true);
    setOn(getBeastleReminder());
    getExistingSubscription().then((sub) => setSubscribed(!!sub)).catch(() => setSubscribed(false));
  }, []);

  if (!isMobile || !supported) return null;

  const toggle = async () => {
    setBusy(true);
    setFailed(false);
    const ok = await setBeastleReminder(!on).catch(() => false);
    if (ok) {
      setOn(!on);
      setSubscribed(true);
    } else setFailed(true);
    setBusy(false);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-5 flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
        {on ? <Bell className="w-5 h-5 text-secondary" /> : <BellOff className="w-5 h-5 text-muted-foreground" />}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display font-bold text-sm text-foreground">{on ? 'Daily reminder is on' : 'Remind me tomorrow'}</p>
        <p className="text-xs text-muted-foreground font-body mt-0.5">
          {failed
            ? "That didn't work. Check that notifications are allowed for this site."
            : on || subscribed
              ? 'A ping at 9am Eastern when the new animal arrives.'
              : 'A ping at 9am Eastern when the new animal arrives. Also turns on Beastly Facts notifications.'}
        </p>
      </div>
      <button
        type="button"
        onClick={toggle}
        disabled={busy}
        className={`flex-shrink-0 px-4 py-3 rounded-xl text-xs font-body font-bold transition-colors disabled:opacity-50 ${
          on ? 'bg-muted text-muted-foreground' : 'bg-secondary text-secondary-foreground'
        }`}
      >
        {busy ? '...' : on ? 'Turn off' : 'Remind me'}
      </button>
    </div>
  );
}

// How everyone else did on today's daily. Logs this player's result first
// (once per device per day, which also covers anyone who finished before
// this existed), then reads the day's totals.
function EveryoneToday({ day, guesses }) {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    let cancelled = false;
    logDailyResult(day, guesses)
      .then(() => fetchDailyStats(day))
      .then((s) => { if (!cancelled) setStats(s); });
    return () => { cancelled = true; };
  }, [day, guesses]);

  if (!stats || stats.played < 1) return null;
  const solvedPct = Math.round((stats.wins / stats.played) * 100);
  const avg = stats.wins
    ? (stats.dist.reduce((sum, n, i) => sum + n * (i + 1), 0) / stats.wins).toFixed(1)
    : null;
  const beat = beatShare(stats, guesses);
  return (
    <div className="mt-4 rounded-2xl bg-primary/10 px-4 py-3 text-sm font-body text-foreground">
      <p>
        {`${stats.played.toLocaleString()} ${stats.played === 1 ? 'player' : 'players'} today · ${solvedPct}% solved${avg ? ` · ${avg} guesses on average` : ''}`}
      </p>
      {beat != null && stats.played >= 3 && (
        <p className="font-bold mt-0.5">{`You did better than ${beat}% of players`}</p>
      )}
    </div>
  );
}

const formatDay = (n) =>
  new Date(`${dateForDay(n)}T12:00:00Z`).toLocaleDateString(undefined, { month: 'short', day: 'numeric', timeZone: 'UTC' });

// A saved replay only counts for the answer it was played against. If a
// past day's answer is ever changed (SCHEDULE_OVERRIDES in
// scripts/generate-beastle.mjs), the old replay is ignored and the day
// starts fresh. Replays saved before answers were recorded count as stale.
const EMPTY_REPLAY = { guesses: [], done: false, won: false };
function archiveRecord(all, day) {
  const rec = all[day];
  return rec && rec.answer === answerForDay(day)?.answer ? rec : null;
}

// Every past daily, newest first. Replays never touch the streak, the stats
// or everyone's totals.
function ArchiveList({ today, archive, onPick }) {
  const days = [];
  for (let n = today - 1; n >= 1; n--) days.push(n);
  if (!days.length) {
    return <p className="py-10 text-center text-sm text-muted-foreground font-body">Past puzzles show up here from tomorrow.</p>;
  }
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
      {days.map((n) => {
        const g = archiveRecord(archive, n);
        const status = g?.done ? (g.won ? 'won' : 'lost') : g?.guesses?.length ? 'playing' : 'new';
        return (
          <button
            key={n}
            type="button"
            onClick={() => onPick(n)}
            className={`rounded-xl border px-2 py-3 text-center transition-colors ${
              status === 'won' ? 'border-primary/40 bg-primary/10'
                : status === 'lost' ? 'border-border bg-muted/60'
                  : 'border-border bg-card hover:border-secondary/40'
            }`}
          >
            <span className="block font-display font-bold text-base text-foreground">{`#${n}`}</span>
            <span className="block text-[11px] text-muted-foreground font-body">{formatDay(n)}</span>
            <span className="mt-1 flex items-center justify-center gap-1 text-[11px] font-body font-bold">
              {status === 'won' && <><Check className="w-3.5 h-3.5 text-primary dark:text-accent" />{`${g.guesses.length}/${MAX_GUESSES}`}</>}
              {status === 'lost' && <><X className="w-3.5 h-3.5 text-muted-foreground" />Missed</>}
              {status === 'playing' && <span className="text-secondary">In progress</span>}
              {status === 'new' && <span className="text-secondary">Play</span>}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// A short clue for unlimited: the first sentence of the animal's fact (or its
// profile blurb) with every form of its name blanked out.
function clueFor(entry) {
  const fact = entry.factIds[0] ? factFor(entry.factIds[0]) : null;
  const text = fact?.fact || entry.blurb;
  if (!text) return null;
  const first = (text.match(/^.*?[.!?](\s|$)/)?.[0] || text).trim();
  return maskFact(first, [entry.name, fact?.animal, entry.answer].filter(Boolean));
}

// The daily and archive clue opens after the second guess, once per puzzle,
// so a 1/6 or 2/6 never had it.
const CLUE_AFTER = 2;

// Unlimited's way out, behind an "are you sure" so a stray tap never ends
// the animal.
function GiveUp({ onGiveUp }) {
  const [asking, setAsking] = useState(false);
  return (
    <div className="flex justify-center">
      <button
        type="button"
        onClick={() => setAsking(true)}
        className="text-xs font-body font-bold text-muted-foreground hover:text-foreground underline underline-offset-4"
      >
        Give up and show the answer
      </button>
      {asking && <ConfirmGiveUp onKeep={() => setAsking(false)} onGiveUp={() => { setAsking(false); onGiveUp(); }} />}
    </div>
  );
}

function ConfirmGiveUp({ onKeep, onGiveUp }) {
  const ref = useDialogFocus(onKeep);
  return (
    <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="beastle-giveup-title">
      <div ref={ref} className="w-full max-w-sm bg-card border border-border rounded-2xl p-5 shadow-xl">
        <h2 id="beastle-giveup-title" className="font-display font-bold text-lg text-foreground mb-1">Are you sure?</h2>
        <p className="text-sm font-body text-muted-foreground mb-4">This animal ends as a miss and the answer shows.</p>
        <div className="flex gap-2 justify-end">
          <button type="button" onClick={onKeep} className="px-4 py-2 rounded-xl border border-border font-body font-bold text-sm text-foreground hover:bg-muted">Keep playing</button>
          <button type="button" onClick={onGiveUp} className="px-4 py-2 rounded-xl bg-destructive text-destructive-foreground font-body font-bold text-sm">Show the answer</button>
        </div>
      </div>
    </div>
  );
}

const LEVEL_OPTIONS = [
  ['easy', 'Easy', 'Easy: animals everyone knows, like lions and dolphins'],
  ['medium', 'Medium', 'Medium: everything in Easy, plus animals most people have heard of'],
  ['hard', 'Hard', 'Hard: Easy and Medium, plus rare and hobby animals almost nobody knows'],
];

function DifficultyPicker({ level, onChange, pending }) {
  const blurb = LEVEL_OPTIONS.find(([id]) => id === level)?.[2];
  return (
    <div>
      <div className="flex gap-1 p-1 bg-muted rounded-xl" role="radiogroup" aria-label="Difficulty">
        {LEVEL_OPTIONS.map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="radio"
            aria-checked={level === id}
            onClick={() => onChange(id)}
            className={`flex-1 py-1.5 rounded-lg text-xs font-body font-bold transition-colors ${level === id ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'}`}
          >
            {label}
          </button>
        ))}
      </div>
      <p className="text-center text-[11px] text-muted-foreground font-body mt-1.5">
        {pending ? `${blurb}. Starts with the next animal.` : blurb}
      </p>
    </div>
  );
}

// Unlimited only: one hint per animal, offered once four guesses are used.
// It reveals the leftmost letter no guess has turned green yet. The spot is
// fixed when the hint is taken, so later greens never move what it shows.
const HINT_AFTER = 4;

function firstUngreened(answer, guesses) {
  const letters = lettersOf(answer);
  const green = new Set();
  for (const g of guesses) score(g, letters).forEach((s, i) => { if (s === 'correct') green.add(i); });
  for (let i = 0; i < letters.length; i++) if (!green.has(i)) return i;
  return null;
}

function spotLabel(answer, index) {
  const lengths = answer.split(/[ -]/).map((w) => w.length);
  if (lengths.length === 1) return `Letter ${index + 1}`;
  let i = index;
  for (let w = 0; w < lengths.length; w++) {
    if (i < lengths[w]) return `Word ${w + 1}, letter ${i + 1}`;
    i -= lengths[w];
  }
  return `Letter ${index + 1}`;
}

// Daily and archive help, in one strip so both are visible from the start:
// the fact clue (after guess 2), then the letter (after guess 4). Each shows
// a countdown until it opens, a button while it is open, and a check once
// used. Using either puts a 💡 on the result.
const HELP_CHIP = 'inline-flex items-center gap-1.5 font-body font-bold text-sm px-3 py-1.5 rounded-xl';
const tries = (n) => `${n} ${n === 1 ? 'try' : 'tries'}`;

function HelpChip({ label, after, guesses, used, available, onUse }) {
  if (used) {
    return <span className={`${HELP_CHIP} text-muted-foreground`}><Check className="w-4 h-4 text-primary" /> {label}</span>;
  }
  if (guesses.length < after) {
    return (
      <span className={`${HELP_CHIP} border border-dashed border-border text-muted-foreground`}>
        <Lightbulb className="w-4 h-4" /> {`${label} in ${tries(after - guesses.length)}`}
      </span>
    );
  }
  if (!available) return null;
  return (
    <button type="button" onClick={onUse} className={`${HELP_CHIP} bg-accent/20 hover:bg-accent/30 text-foreground transition-colors`}>
      <Lightbulb className="w-4 h-4 text-accent-ink" /> {`Get ${label.toLowerCase()}?`}
    </button>
  );
}

function HelpStrip({ entry, guesses, done, clueShown, hintIndex, onClue, onHint }) {
  const clue = useMemo(() => clueFor(entry), [entry]);
  const nextLetter = firstUngreened(entry.answer, guesses);
  const letterUsed = hintIndex != null;
  return (
    <>
      {!done && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {clue && <HelpChip label="Clue" after={CLUE_AFTER} guesses={guesses} used={clueShown} available onUse={onClue} />}
          <HelpChip label="Letter" after={HINT_AFTER} guesses={guesses} used={letterUsed} available={nextLetter != null} onUse={() => onHint(nextLetter)} />
        </div>
      )}
      {clueShown && clue && (
        <div className="w-full bg-accent/15 border border-accent/40 rounded-2xl px-4 py-2.5" role="note">
          <p className="text-sm font-body text-foreground leading-relaxed">
            <Lightbulb className="w-4 h-4 text-accent-ink inline -mt-0.5 mr-1.5" />
            {clue}
          </p>
        </div>
      )}
      {letterUsed && !done && (
        <div className="flex items-center gap-3 bg-accent/15 border border-accent/40 rounded-2xl px-4 py-2.5" role="note">
          <Lightbulb className="w-4 h-4 text-accent-ink flex-shrink-0" />
          <p className="text-sm font-body text-foreground">{`${spotLabel(entry.answer, hintIndex)} is`}</p>
          <span className="w-9 h-9 flex items-center justify-center rounded-[18%] bg-primary text-primary-foreground font-display font-bold text-lg">
            {lettersOf(entry.answer)[hintIndex]}
          </span>
        </div>
      )}
    </>
  );
}

function HowToPlay() {
  return (
    <div className="text-sm font-body text-muted-foreground leading-relaxed space-y-2">
      <p>
        {`Guess the hidden animal in ${MAX_GUESSES} tries. The blank tiles show how many letters it has, and a two-word name shows its gap, so RED PANDA looks like ___ _____.`}
      </p>
      <p>
        Type any real word that fits each space. After each guess the tiles change color:
      </p>
      <ul className="space-y-1">
        <li><span className="inline-block w-4 h-4 rounded-sm bg-primary align-middle mr-2" />Green: right letter, right spot.</li>
        <li><span className="inline-block w-4 h-4 rounded-sm bg-accent align-middle mr-2" />Gold: the letter is in the name, but somewhere else. This is Wordle&apos;s yellow.</li>
        <li><span className="inline-block w-4 h-4 rounded-sm bg-muted-foreground/40 align-middle mr-2" />Gray: the letter is not in the name.</li>
      </ul>
      <p>In a two-word name, once one word is all green it stays filled in, and you only type the other word.</p>
      <p>Everyone gets the same animal each day, and a new one arrives at midnight Eastern. The number of letters changes every day, from short names like LION to longer ones like SALAMANDER.</p>
      <p>Each daily puzzle tells you what kind of animal it is, like a mammal or a bird. If you want more help, you can get a clue from a real fact about the animal after 2 guesses, and after 4 guesses you can reveal one letter. A result that used either shows a 💡 when you share it.</p>
      <p>Unlimited lets you keep playing, at the level you pick:</p>
      <ul className="space-y-1">
        {LEVEL_OPTIONS.map(([id, , text]) => <li key={id}>{`${text}.`}</li>)}
      </ul>
    </div>
  );
}

export default function Beastle() {
  const [today, setToday] = useState(null);
  const [mode, setMode] = useState('daily');
  const [showHelp, setShowHelp] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [words, setWords] = useState(null);
  const [daily, setDaily, dailyLoaded] = useLocalStorage(STORAGE.daily, null);
  const [stats, setStats, statsLoaded] = useLocalStorage(STORAGE.stats, EMPTY_STATS);
  const [bonus, setBonus] = useLocalStorage(STORAGE.bonus, null);
  const [, setJournal] = useLocalStorage(STORAGE.journal, []);
  const [unlimited, setUnlimited, unlimitedLoaded] = useLocalStorage(STORAGE.unlimited, EMPTY_UNLIMITED);
  const [archive, setArchive, archiveLoaded] = useLocalStorage(STORAGE.archive, {});
  const [archiveDay, setArchiveDay] = useState(null);
  const { recordQuizCompletion, recordBeastleStreak } = useFavoritesCtx();

  // On this page "Install" / "Add to Home Screen" offers the Beastle app
  // (public/beastle-manifest.json) instead of Beastly Facts. Head tags are
  // swapped in place rather than through Helmet, because the browser reads
  // the first manifest link and index.html already has one. Runs during
  // prerender too, so the baked /beastle/ HTML carries the Beastle manifest.
  useEffect(() => {
    const swaps = [
      ['link[rel="manifest"]', 'href', '/beastle-manifest.json'],
      ['link[rel="apple-touch-icon"]', 'href', '/pwa/beastle-apple-touch-180.png'],
      ['meta[name="apple-mobile-web-app-title"]', 'content', 'Beastle'],
    ];
    const previous = swaps.map(([sel, attr, value]) => {
      const el = document.querySelector(sel);
      if (!el) return null;
      const old = el.getAttribute(attr);
      el.setAttribute(attr, value);
      return [el, attr, old];
    });
    return () => previous.forEach((p) => p && p[0].setAttribute(p[1], p[2]));
  }, []);

  // The day is read after mount, never during prerender, so the baked HTML
  // is the same for everyone and the real puzzle appears on hydration.
  useEffect(() => {
    if (window.__IS_PRERENDER__) return;
    setToday(dayNumber());
    loadWords().then(setWords);
  }, []);

  const ready = today !== null && dailyLoaded && statsLoaded && unlimitedLoaded && archiveLoaded;
  const dailyEntry = today ? answerForDay(today) : null;
  const dailyGame = daily?.day === today ? daily : { day: today, guesses: [], done: false, won: false };

  // First visit: open the rules once.
  useEffect(() => {
    if (ready && stats.played === 0 && !dailyGame.guesses.length) setShowHelp(true);
  }, [ready]);

  const celebrate = () => {
    import('canvas-confetti').then(({ default: confetti }) => {
      confetti({ particleCount: 160, spread: 90, origin: { y: 0.6 }, colors: ['#E4632F', '#D9A441', '#FFD93D', '#154B3D'] });
    }).catch(() => {});
  };

  // Latest game state for the submit handlers, which can run before the
  // render that follows the previous guess (same reason as Game's ref).
  const dailyRef = useRef(dailyGame);
  dailyRef.current = dailyGame;
  const unlimitedRef = useRef(unlimited);
  unlimitedRef.current = unlimited;
  const archiveRef = useRef(archive);
  archiveRef.current = archive;

  const submitDaily = useCallback((guess) => {
    const game = dailyRef.current;
    if (game.done) return;
    const letters = lettersOf(dailyEntry.answer);
    const guesses = [...game.guesses, guess];
    const next = { ...game, day: today, guesses, done: false, won: false };
    dailyRef.current = next;
    const won = guess === letters;
    const done = won || guesses.length >= MAX_GUESSES;
    Object.assign(next, { done, won });
    setDaily(next);
    if (!done) return;
    const streak = won ? liveStreak(stats, today) + 1 : 0;
    setStats((s) => {
      const dist = [...(s.dist || EMPTY_STATS.dist)];
      if (won) dist[guesses.length - 1] += 1;
      return {
        played: s.played + 1,
        wins: s.wins + (won ? 1 : 0),
        streak,
        maxStreak: Math.max(s.maxStreak || 0, streak),
        lastWinDay: won ? today : s.lastWinDay,
        dist,
      };
    });
    recordQuizCompletion();
    if (won) recordBeastleStreak(streak);
    const helps = [next.clueShown && 'clue', next.hintIndex != null && 'letter'].filter(Boolean);
    logSiteEvent('themed_quiz', `Beastle #${today}: ${won ? guesses.length : 'X'}/${MAX_GUESSES} (${dailyEntry.name})${helps.length ? ` 💡 used ${helps.join(' + ')}` : ' no help'}`);
    if (won) celebrate();
    setShowStats(true);
  }, [dailyEntry, today, stats, setDaily, setStats, recordQuizCompletion, recordBeastleStreak]);

  const unlimitedEntry = unlimited.current ? byAnswer.get(unlimited.current.answer) : null;

  const newUnlimited = useCallback((levelOverride) => {
    const u = unlimitedRef.current;
    const level = levelOverride || u.level || 'medium';
    const pick = pickUnlimited(u.seen || [], dailyEntry?.answer, level);
    const next = { ...u, level, current: { answer: pick.answer, guesses: [], done: false, won: false } };
    unlimitedRef.current = next;
    setUnlimited(next);
  }, [setUnlimited, dailyEntry]);

  useEffect(() => {
    if (mode === 'unlimited' && ready && !unlimitedEntry) newUnlimited();
  }, [mode, ready, unlimitedEntry, newUnlimited]);

  const submitUnlimited = useCallback((guess) => {
    const u = unlimitedRef.current;
    const cur = u.current;
    if (!cur || cur.done) return;
    const guesses = [...cur.guesses, guess];
    const won = guess === lettersOf(cur.answer);
    const done = won || guesses.length >= MAX_GUESSES;
    const next = {
      ...u,
      current: { ...cur, guesses, done, won },
      seen: done ? [...new Set([...(u.seen || []), cur.answer])] : u.seen,
      played: done ? (u.played || 0) + 1 : u.played,
      wins: done && won ? (u.wins || 0) + 1 : u.wins,
    };
    unlimitedRef.current = next;
    setUnlimited(next);
    if (won) celebrate();
  }, [setUnlimited]);

  // A new difficulty deals a fresh animal right away unless a game is under
  // way, which finishes first; the next animal uses the new level.
  const setUnlimitedLevel = useCallback((level) => {
    const u = unlimitedRef.current;
    if (u.level === level) return;
    if (!u.current || u.current.done || u.current.guesses.length === 0) {
      newUnlimited(level);
      return;
    }
    const next = { ...u, level };
    unlimitedRef.current = next;
    setUnlimited(next);
  }, [newUnlimited, setUnlimited]);

  const showUnlimitedClue = useCallback(() => {
    const u = unlimitedRef.current;
    if (!u.current || u.current.done || u.current.clueShown || u.current.guesses.length < CLUE_AFTER) return;
    const next = { ...u, current: { ...u.current, clueShown: true } };
    unlimitedRef.current = next;
    setUnlimited(next);
  }, [setUnlimited]);

  // Ends the current unlimited animal as a miss and shows the answer.
  const giveUpUnlimited = useCallback(() => {
    const u = unlimitedRef.current;
    const cur = u.current;
    if (!cur || cur.done) return;
    const next = {
      ...u,
      current: { ...cur, done: true, won: false, gaveUp: true },
      seen: [...new Set([...(u.seen || []), cur.answer])],
      played: (u.played || 0) + 1,
    };
    unlimitedRef.current = next;
    setUnlimited(next);
  }, [setUnlimited]);

  // The daily's reveal-a-letter: same rules as unlimited, and the result
  // then carries a 💡 in the share so a hinted solve reads as one.
  const takeDailyClue = useCallback(() => {
    const game = dailyRef.current;
    if (game.done || game.clueShown || game.guesses.length < CLUE_AFTER) return;
    const next = { ...game, day: today, clueShown: true };
    dailyRef.current = next;
    setDaily(next);
  }, [today, setDaily]);

  const takeArchiveClue = useCallback(() => {
    const all = archiveRef.current;
    const game = archiveRecord(all, archiveDay) || EMPTY_REPLAY;
    if (game.done || game.clueShown || game.guesses.length < CLUE_AFTER) return;
    const next = { ...all, [archiveDay]: { ...game, answer: answerForDay(archiveDay).answer, clueShown: true } };
    archiveRef.current = next;
    setArchive(next);
  }, [archiveDay, setArchive]);

  const takeDailyHint = useCallback((index) => {
    const game = dailyRef.current;
    if (game.done || game.hintIndex != null || index == null) return;
    const next = { ...game, day: today, hintIndex: index };
    dailyRef.current = next;
    setDaily(next);
  }, [today, setDaily]);

  const takeArchiveHint = useCallback((index) => {
    const all = archiveRef.current;
    const game = archiveRecord(all, archiveDay) || EMPTY_REPLAY;
    if (game.done || game.hintIndex != null || index == null) return;
    const next = { ...all, [archiveDay]: { ...game, answer: answerForDay(archiveDay).answer, hintIndex: index } };
    archiveRef.current = next;
    setArchive(next);
  }, [archiveDay, setArchive]);

  const takeUnlimitedHint = useCallback((index) => {
    const u = unlimitedRef.current;
    if (!u.current || u.current.hintIndex != null || index == null) return;
    const next = { ...u, current: { ...u.current, hintIndex: index } };
    unlimitedRef.current = next;
    setUnlimited(next);
  }, [setUnlimited]);

  const addToJournal = useCallback((item) => {
    setJournal((j) => (j.some((x) => x.answer === item.answer) ? j : [...j, item]));
  }, [setJournal]);

  const archiveEntry = archiveDay ? answerForDay(archiveDay) : null;
  const archiveGame = (archiveDay && archiveRecord(archive, archiveDay)) || EMPTY_REPLAY;

  // Replays of past dailies: saved per day, nothing else is touched.
  const submitArchive = useCallback((guess) => {
    const all = archiveRef.current;
    const game = archiveRecord(all, archiveDay) || EMPTY_REPLAY;
    if (game.done || !archiveEntry) return;
    const guesses = [...game.guesses, guess];
    const won = guess === lettersOf(archiveEntry.answer);
    const next = { ...all, [archiveDay]: { ...game, answer: archiveEntry.answer, guesses, won, done: won || guesses.length >= MAX_GUESSES } };
    archiveRef.current = next;
    setArchive(next);
    if (won) celebrate();
  }, [archiveDay, archiveEntry, setArchive]);

  const nextUnplayedArchive = () => {
    for (let n = (archiveDay || today) - 1; n >= 1; n--) if (!archiveRecord(archive, n)?.done) return n;
    for (let n = today - 1; n > (archiveDay || 0); n--) if (!archiveRecord(archive, n)?.done) return n;
    return null;
  };

  // Share sends text and link only: with a file attached the Android sheet
  // switches to its image layout, which has no Copy, and apps like Threads
  // keep the picture and drop the text. Without one the link unfurls into
  // the Beastle preview card (public/assets/og/beastle.jpg). Share result image,
  // on phones, attaches the result grid picture as well, like the quizzes.
  const share = ({ withImage = false } = {}) => {
    const streak = liveStreak(stats, today);
    const hinted = dailyGame.hintIndex != null || !!dailyGame.clueShown;
    const text = shareText({
      title: `Beastle #${today}`,
      guesses: dailyGame.guesses,
      answer: dailyEntry.answer,
      won: dailyGame.won,
      streak,
      hinted,
    });
    // Started inside the click so the share still counts as user initiated.
    const image = withImage
      ? beastleShareImage({ day: today, guesses: dailyGame.guesses, answer: dailyEntry.answer, won: dailyGame.won, streak, hinted })
      : undefined;
    return shareQuizResult({ title: 'Beastle | Beastly Facts', text, url: 'https://beastlyfacts.com/beastle/', image });
  };

  const pageTitle = 'Beastle: The Daily Animal Word Game | Beastly Facts';
  const pageDescription = 'Guess the hidden animal in six tries. A new animal every day, the same one for everyone, plus a bonus fact round and unlimited practice.';

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href="https://beastlyfacts.com/beastle/" />
        <meta property="og:title" content="Beastle: The Daily Animal Word Game" />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://beastlyfacts.com/beastle/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/og/beastle.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastle, the daily animal word game from Beastly Facts" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beastle: The Daily Animal Word Game" />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/og/beastle.jpg" />
      </Helmet>

      <div className="max-w-lg mx-auto px-4 pt-8 pb-16">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div>
            <h1 className="font-display font-bold text-3xl text-foreground">Beastle</h1>
            <p className="text-xs text-muted-foreground font-body">
              {today ? `Daily animal word game · #${today}` : 'Daily animal word game'}
            </p>
          </div>
          <div className="flex gap-1">
            <button type="button" onClick={() => setShowHelp((v) => !v)} aria-label="How to play" aria-expanded={showHelp} className="p-2 rounded-xl hover:bg-muted text-foreground">
              <HelpCircle className="w-5 h-5" />
            </button>
            <button type="button" onClick={() => setShowStats((v) => !v)} aria-label="Stats" aria-expanded={showStats} className="p-2 rounded-xl hover:bg-muted text-foreground">
              <BarChart3 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {showHelp && (
          <div className="bg-card border border-border rounded-2xl p-5 mb-4">
            <h2 className="font-display font-bold text-lg text-foreground mb-2">How to play</h2>
            <HowToPlay />
            <button type="button" onClick={() => setShowHelp(false)} className="mt-4 w-full bg-secondary text-secondary-foreground font-body font-bold text-sm py-2.5 rounded-xl">
              Got it
            </button>
          </div>
        )}

        {showStats && ready && (
          <div className="mb-4"><Stats stats={stats} today={today} /></div>
        )}

        <div className="flex gap-1 p-1 bg-muted rounded-2xl mb-5" role="tablist">
          {[['daily', 'Today'], ['unlimited', 'Unlimited'], ['archive', 'Archive']].map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={mode === id}
              onClick={() => setMode(id)}
              className={`flex-1 py-2 rounded-xl text-sm font-body font-bold transition-colors ${mode === id ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground'}`}
            >
              {label}
            </button>
          ))}
        </div>

        {!ready && (
          <div className="py-16 text-center text-sm text-muted-foreground font-body">Loading today&apos;s animal...</div>
        )}

        {ready && mode === 'daily' && dailyEntry && (
          <div className="space-y-5">
            <Game entry={dailyEntry} guesses={dailyGame.guesses} done={dailyGame.done} words={words} onSubmit={submitDaily} showGroup>
              <HelpStrip entry={dailyEntry} guesses={dailyGame.guesses} done={dailyGame.done} clueShown={!!dailyGame.clueShown} hintIndex={dailyGame.hintIndex} onClue={takeDailyClue} onHint={takeDailyHint} />
            </Game>
            {dailyGame.done && (
              <>
                <ResultBox day={today} entry={dailyEntry} game={dailyGame} streak={liveStreak(stats, today)}>
                  <EveryoneToday day={today} guesses={dailyGame.won ? dailyGame.guesses.length : null} />
                  <div className="flex flex-col sm:flex-row gap-2 justify-center mt-4">
                    <ShareButton onShare={() => share()} icon={Share2} label="Share result" busyLabel="Sharing..." className="bg-secondary text-secondary-foreground" />
                    {canShareImage() && (
                      <ShareButton onShare={() => share({ withImage: true })} icon={ImageIcon} label="Share result image" busyLabel="Making your image..." className="bg-muted text-foreground" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground font-body mt-3">
                    {'Next Beastle in '}<Countdown />
                  </p>
                </ResultBox>
                <Reveal entry={dailyEntry} won={dailyGame.won} guesses={dailyGame.guesses.length} kicker="Today's animal" />
                <BeastleReminder />
                <Bonus today={today} dailyAnswer={dailyEntry.answer} bonus={bonus} setBonus={setBonus} addToJournal={addToJournal} />
                <button type="button" onClick={() => setMode('unlimited')} className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-bold text-sm py-3 rounded-2xl">
                  Keep playing: Unlimited <ArrowRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        )}

        {ready && mode === 'unlimited' && unlimitedEntry && (
          <div className="space-y-5">
            <p className="text-center text-xs font-body font-bold text-accent-ink bg-accent/15 rounded-xl py-2 px-3">
              Practice mode: no streak here, play as many as you like. Stuck? After 2 guesses you can get a clue, and after 4 you can reveal one letter.
            </p>
            <DifficultyPicker
              level={unlimited.level || 'medium'}
              onChange={setUnlimitedLevel}
              pending={unlimited.current.guesses.length > 0 && !unlimited.current.done && unlimitedEntry && !LEVELS[unlimited.level || 'medium'].includes(unlimitedEntry.level)}
            />
            <Game
              entry={unlimitedEntry}
              guesses={unlimited.current.guesses}
              done={unlimited.current.done}
              words={words}
              onSubmit={submitUnlimited}
            >
              <HelpStrip
                entry={unlimitedEntry}
                guesses={unlimited.current.guesses}
                done={unlimited.current.done}
                clueShown={!!unlimited.current.clueShown}
                hintIndex={unlimited.current.hintIndex}
                onClue={showUnlimitedClue}
                onHint={takeUnlimitedHint}
              />
            </Game>
            {!unlimited.current.done && (
              <GiveUp onGiveUp={giveUpUnlimited} />
            )}
            {unlimited.current.done && (
              <Reveal entry={unlimitedEntry} won={unlimited.current.won} guesses={unlimited.current.guesses.length}>
                <button type="button" onClick={() => newUnlimited()} className="mt-4 inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-body font-bold text-sm px-5 py-2.5 rounded-2xl">
                  <RotateCcw className="w-4 h-4" /> Next animal
                </button>
              </Reveal>
            )}
            <p className="text-center text-xs text-muted-foreground font-body">
              {`${unlimited.wins || 0} solved of ${unlimited.played || 0} played`}
            </p>
          </div>
        )}

        {ready && mode === 'archive' && !archiveEntry && (
          <div className="space-y-4">
            <p className="text-center text-xs font-body font-bold text-accent-ink bg-accent/15 rounded-xl py-2 px-3">
              Every past Beastle. Replays never count toward your streak.
            </p>
            <ArchiveList today={today} archive={archive} onPick={setArchiveDay} />
          </div>
        )}

        {ready && mode === 'archive' && archiveEntry && (
          <div className="space-y-5">
            <div className="flex items-center justify-between gap-2">
              <button type="button" onClick={() => setArchiveDay(null)} className="inline-flex items-center gap-1.5 text-sm font-body font-bold text-foreground">
                <ArrowLeft className="w-4 h-4" /> All puzzles
              </button>
              <p className="text-xs font-body font-bold text-muted-foreground">{`Beastle #${archiveDay} · ${formatDay(archiveDay)}`}</p>
            </div>
            <Game entry={archiveEntry} guesses={archiveGame.guesses} done={archiveGame.done} words={words} onSubmit={submitArchive} showGroup>
              <HelpStrip entry={archiveEntry} guesses={archiveGame.guesses} done={archiveGame.done} clueShown={!!archiveGame.clueShown} hintIndex={archiveGame.hintIndex} onClue={takeArchiveClue} onHint={takeArchiveHint} />
            </Game>
            {archiveGame.done && (
              <Reveal entry={archiveEntry} won={archiveGame.won} guesses={archiveGame.guesses.length}>
                {nextUnplayedArchive() && (
                  <button type="button" onClick={() => setArchiveDay(nextUnplayedArchive())} className="mt-4 inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground font-body font-bold text-sm px-5 py-2.5 rounded-2xl">
                    {`Play #${nextUnplayedArchive()}`} <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </Reveal>
            )}
          </div>
        )}

        <section className="mt-12 border-t border-border pt-8">
          <h2 className="font-display font-bold text-xl text-foreground mb-3">About Beastle</h2>
          <HowToPlay />
          <p className="text-sm font-body text-muted-foreground leading-relaxed mt-2">
            {'Every answer comes from the '}
            <Link to="/encyclopedia/" className="font-bold text-secondary hover:underline">Encyclopedia</Link>
            {' or '}
            <Link to="/beastlypedia/" className="font-bold text-secondary hover:underline">Beastlypedia</Link>
            {', so each solve ends with the real animal and where to read more. The bonus round draws on our '}
            <Link to="/facts/" className="font-bold text-secondary hover:underline">animal facts</Link>
            {', and every one you get right goes into the field journal in '}
            <Link to="/pack/" className="font-bold text-secondary hover:underline">My Pack</Link>
            .
          </p>
          <p className="text-sm font-body text-muted-foreground mt-3 inline-flex items-center gap-1.5">
            <BookOpen className="w-4 h-4" />
            <Link to="/quiz/" className="font-bold text-secondary hover:underline">More animal quizzes</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
