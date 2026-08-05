import React, { useId } from 'react';
import { US_STATES, DC_MARKER, MAP_VIEWBOX } from '@/lib/data/usStatePaths';

// The five buckets the map paints. The dataset carries six statuses plus
// "absent", which is too many colours to read at a glance, so `restricted`
// and `conditional` share a bucket: from a keeper's point of view both mean
// "allowed, but only if you meet a condition."
//
// `legal` deliberately gets no colour. The user's instinct here was right:
// a map where most of the country is painted green reads as "lots of rules
// everywhere", which is the opposite of what the data says. Leaving the
// permissive states as plain background makes the restrictions the thing
// your eye lands on.
export const STATUS_BUCKETS = {
  banned: {
    key: 'banned',
    label: 'Banned',
    blurb: 'No legal way to keep one, and no permit to apply for.',
    fill: '#DC2626',
    text: '#FFFFFF',
  },
  permit: {
    key: 'permit',
    label: 'Permit required',
    blurb: 'Legal, but you need a permit or licence before the animal arrives.',
    fill: '#F59E0B',
    text: '#3B2600',
  },
  conditions: {
    key: 'conditions',
    label: 'Conditions apply',
    blurb: 'Legal without a permit only if a stated condition is met, such as a generation, a size or an indoor-only rule.',
    fill: '#FBBF24',
    text: '#3B2600',
  },
  unclear: {
    key: 'unclear',
    label: 'Unclear',
    blurb: 'The rule genuinely does not resolve for this animal. Ask the agency before relying on it.',
    fill: '#94A3B8',
    text: '#0F172A',
  },
  none: {
    key: 'none',
    label: 'No restriction found',
    blurb: 'This jurisdiction was read for this animal and nothing in it restricts one.',
    fill: 'transparent',
    text: 'inherit',
  },
  notChecked: {
    key: 'notChecked',
    label: 'Not checked yet',
    blurb: 'We have not read this jurisdiction for this animal. It is not a clean bill of health, it is a gap.',
    fill: 'transparent',
    text: 'inherit',
  },
};

export const BUCKET_ORDER = ['banned', 'permit', 'conditions', 'unclear', 'none', 'notChecked'];

// Maps a dataset status onto a paint bucket.
//
// The important case is `undefined`, which means no entry exists for this
// animal in this jurisdiction. That is not the same as having read the rules
// and found nothing, and painting the two identically let a map with two
// researched jurisdictions look like a verified all-clear across the country.
// Coverage runs from 2 jurisdictions to 51 depending on the animal, so the
// difference is most of the map for most species.
export function bucketFor(status) {
  if (status === undefined || status === null) return 'notChecked';
  if (status === 'banned') return 'banned';
  if (status === 'permit') return 'permit';
  if (status === 'conditional' || status === 'restricted') return 'conditions';
  if (status === 'unclear') return 'unclear';
  return 'none';
}

export default function LegalStatusMap({
  statuses = {},
  selected = null,
  onSelect,
  animalName = 'this animal',
}) {
  // useId keeps the pattern id unique if two maps ever render on one page,
  // which would otherwise make both of them reference the same fill.
  const uid = useId();
  const hatchId = `${uid}-unclear-hatch`;
  const dotsId = `${uid}-not-checked-dots`;

  const paint = (code) => {
    const bucket = STATUS_BUCKETS[bucketFor(statuses[code]?.status)];
    if (bucket.key === 'unclear') return `url(#${hatchId})`;
    if (bucket.key === 'notChecked') return `url(#${dotsId})`;
    if (bucket.key === 'none') return 'hsl(var(--muted))';
    return bucket.fill;
  };

  const describe = (code, name) => {
    const bucket = STATUS_BUCKETS[bucketFor(statuses[code]?.status)];
    if (bucket.key === 'none') return `${name}: no restriction found for ${animalName}`;
    if (bucket.key === 'notChecked') return `${name}: not checked yet for ${animalName}`;
    return `${name}: ${bucket.label.toLowerCase()} for ${animalName}`;
  };

  const handleKey = (e, code) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    onSelect?.(code);
  };

  return (
    <svg
      viewBox={MAP_VIEWBOX}
      role="img"
      aria-label={`Map of the United States showing where ${animalName} is restricted`}
      className="w-full h-auto"
    >
      <defs>
        {/* Unclear is hatched rather than flat, so the one status that means
            "we could not resolve this" never gets mistaken for a decision. */}
        <pattern id={hatchId} width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="6" height="6" fill="#CBD5E1" />
          <line x1="0" y1="0" x2="0" y2="6" stroke="#64748B" strokeWidth="2.5" />
        </pattern>
        {/* Not checked is a faint dot grid. It has to be visibly different from
            the flat fill used for "read it, found nothing", and quieter than
            everything else on the map, because it is an absence of work rather
            than a finding. Distinguished by texture as well as tone so it does
            not rely on colour alone. */}
        <pattern id={dotsId} width="5" height="5" patternUnits="userSpaceOnUse">
          <rect width="5" height="5" fill="hsl(var(--background))" />
          <circle cx="1.5" cy="1.5" r="0.9" fill="hsl(var(--muted-foreground))" opacity="0.45" />
        </pattern>
      </defs>

      {US_STATES.filter((s) => s.code !== 'DC').map((state) => {
        const isSelected = selected === state.code;
        return (
          <path
            key={state.code}
            d={state.d}
            fill={paint(state.code)}
            stroke={isSelected ? 'hsl(var(--foreground))' : 'hsl(var(--background))'}
            strokeWidth={isSelected ? 2.5 : 1}
            className="cursor-pointer transition-[stroke-width,opacity] duration-150 hover:opacity-80 focus:outline-none focus-visible:opacity-70"
            tabIndex={0}
            role="button"
            aria-pressed={isSelected}
            onClick={() => onSelect?.(state.code)}
            onKeyDown={(e) => handleKey(e, state.code)}
          >
            <title>{describe(state.code, state.name)}</title>
          </path>
        );
      })}

      <circle
        cx={DC_MARKER.cx}
        cy={DC_MARKER.cy}
        r={DC_MARKER.r + 1.5}
        fill={paint('DC')}
        stroke={selected === 'DC' ? 'hsl(var(--foreground))' : 'hsl(var(--background))'}
        strokeWidth={selected === 'DC' ? 2.5 : 1}
        className="cursor-pointer transition-[stroke-width,opacity] duration-150 hover:opacity-80 focus:outline-none focus-visible:opacity-70"
        tabIndex={0}
        role="button"
        aria-pressed={selected === 'DC'}
        onClick={() => onSelect?.('DC')}
        onKeyDown={(e) => handleKey(e, 'DC')}
      >
        <title>{describe('DC', 'District of Columbia')}</title>
      </circle>
    </svg>
  );
}
