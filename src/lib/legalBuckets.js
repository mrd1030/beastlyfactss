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
    blurb: 'Legal, but you need a permit or license before the animal arrives.',
    fill: '#EA580C',
    text: '#1F0A00',
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
