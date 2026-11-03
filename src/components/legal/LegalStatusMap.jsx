import React, { useId } from 'react';
import { US_STATES, DC_MARKER, MAP_VIEWBOX } from '@/lib/data/usStatePaths';

// The buckets, their labels and bucketFor live in src/lib/legalBuckets.js so
// the Ask Beastly chat can word a status exactly as this map does without
// loading the state shapes. Re-exported here for the pages that import them.
export { STATUS_BUCKETS, BUCKET_ORDER, bucketFor } from '@/lib/legalBuckets';
import { STATUS_BUCKETS, bucketFor } from '@/lib/legalBuckets';

// The map paints two different questions from the same SVG.
//
// Its original job is one animal across every jurisdiction: `statuses` carries
// that animal's entry per code and the buckets above decide the colour. The
// state index asks the transposed question, how restrictive each jurisdiction is
// across all 52 animals, which has no status to bucket and needs its own scale.
//
// Rather than fork the component (the paths, the DC marker, the keyboard
// handling and the focus styles are the bulk of it and are identical either
// way), the two hooks below let a caller supply its own fill and its own
// description. Both default to the per-animal behaviour, so the animal map
// passes neither and is unchanged.
export default function LegalStatusMap({
  statuses = {},
  selected = null,
  onSelect,
  animalName = 'this animal',
  paintFor = null,
  describeFor = null,
  ariaLabel = null,
}) {
  // useId keeps the pattern id unique if two maps ever render on one page,
  // which would otherwise make both of them reference the same fill.
  const uid = useId();
  const hatchId = `${uid}-unclear-hatch`;
  const dotsId = `${uid}-not-checked-dots`;

  const paint = (code) => {
    if (paintFor) return paintFor(code);
    const bucket = STATUS_BUCKETS[bucketFor(statuses[code]?.status)];
    if (bucket.key === 'unclear') return `url(#${hatchId})`;
    if (bucket.key === 'notChecked') return `url(#${dotsId})`;
    if (bucket.key === 'none') return 'hsl(var(--muted))';
    return bucket.fill;
  };

  const describe = (code, name) => {
    if (describeFor) return describeFor(code, name);
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
      aria-label={ariaLabel ?? `Map of the United States showing where ${animalName} is restricted`}
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
