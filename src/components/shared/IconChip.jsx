import React from 'react';

// A lucide icon in a colored chip: the site's interface icon in place of
// emoji, the same idea as the Beastle reminder's bell. One color per page,
// matching the page's own accent, so a page never turns into a rainbow.
// The page-title badge is solid so it stands out; smaller chips are tinted.
const TINTED = {
  teal: 'bg-primary/15 dark:bg-primary/20 text-primary',
  orange: 'bg-secondary/15 dark:bg-secondary/20 text-secondary',
  gold: 'bg-[#f39b16]/20 dark:bg-accent/20 text-accent-ink dark:text-accent',
  gray: 'bg-muted text-muted-foreground',
};
const SOLID = {
  teal: 'bg-primary text-primary-foreground',
  orange: 'bg-secondary text-secondary-foreground',
  // Light mode uses Beastle's amber: the theme's light accent reads as mustard.
  gold: 'bg-[#f39b16] text-[#113b30] dark:bg-accent dark:text-accent-foreground',
  gray: 'bg-muted text-muted-foreground',
};

const SIZES = {
  hero: { box: 'w-14 h-14 md:w-12 md:h-12 rounded-2xl shadow-sm', icon: 'w-7 h-7 md:w-6 md:h-6', stroke: 2, solid: true },
  heading: { box: 'w-8 h-8 rounded-lg', icon: 'w-[18px] h-[18px]', stroke: 2.25 },
  row: { box: 'w-11 h-11 rounded-xl', icon: 'w-[22px] h-[22px]', stroke: 2 },
  empty: { box: 'w-16 h-16 rounded-full', icon: 'w-8 h-8', stroke: 1.5 },
};

// The page-title badge: above the title on phones, where a long title needs
// the full width, and beside the title and subtitle from md up, where a
// badge above would float in the empty width.
export function PageBadge({ icon, color = 'teal' }) {
  return <IconChip icon={icon} color={color} size="hero" className="page-badge mb-3 md:float-left md:mr-3" />;
}

export default function IconChip({ icon: Icon, color = 'teal', size = 'row', className = '' }) {
  const s = SIZES[size];
  const tone = (s.solid ? SOLID : TINTED)[color];
  return (
    <span className={`inline-flex items-center justify-center flex-shrink-0 ${s.box} ${tone} ${className}`} aria-hidden="true">
      <Icon className={s.icon} strokeWidth={s.stroke} />
    </span>
  );
}
