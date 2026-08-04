import React from 'react';
import { Shuffle, Sparkles, ListOrdered } from 'lucide-react';

/**
 * The order switcher shared by /facts/ and /gallery/, which browse the same
 * fact set two ways and should offer the same three orders:
 *
 *   daily    a day-seeded shuffle, the default (see the note on daySeed in
 *            whichever page renders this - it must never be Math.random(),
 *            both pages are prerendered)
 *   numeric  by fact number
 *   random   a true shuffle
 *
 * Random is a button, not a third toggle state: pressing it again should
 * reshuffle rather than switch it off, and the other two are an explicit way
 * back. It relabels once active so that is discoverable.
 *
 * Its own row rather than sitting beside the search box, because three controls
 * plus a search field do not fit across a phone.
 */
const MODES = [
  { key: 'daily', label: "Today's mix", Icon: Sparkles },
  { key: 'numeric', label: 'Numbered', Icon: ListOrdered },
];

const pill = (active) =>
  `flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-display font-semibold border transition-all ${
    active
      ? 'bg-secondary text-secondary-foreground border-secondary shadow-md shadow-secondary/20'
      : 'bg-card border-border text-muted-foreground hover:text-foreground hover:border-secondary/40'
  }`;

export default function FactOrderControl({ order, onChange, onRandomize, className = 'mt-3' }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`} role="group" aria-label="Sort order">
      {MODES.map(({ key, label, Icon }) => (
        <button
          key={key}
          type="button"
          onClick={() => onChange(key)}
          aria-pressed={order === key}
          className={pill(order === key)}
        >
          <Icon className="w-3.5 h-3.5" /> {label}
        </button>
      ))}
      <button type="button" onClick={onRandomize} aria-pressed={order === 'random'} className={pill(order === 'random')}>
        <Shuffle className="w-3.5 h-3.5" /> {order === 'random' ? 'Shuffle again' : 'Random'}
      </button>
    </div>
  );
}
