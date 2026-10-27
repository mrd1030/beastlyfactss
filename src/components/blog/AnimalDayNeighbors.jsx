import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, ArrowLeft, ArrowRight } from 'lucide-react';
import IconChip from '@/components/shared/IconChip';
import { ANIMAL_EVENTS } from '@/lib/data/animalEvents';
import { resolveEventDate } from '@/lib/animalEvent';
import { siteToday } from '@/lib/utils/date';

const slugOf = (post) => post?.slug?.current || post?.slug || '';
const newest = (a, b) => String(b.date).localeCompare(String(a.date));

/**
 * The animal-day article before and after this one on the calendar.
 *
 * Animal-day pieces hang off /animal-days/ rather than a species hub, so
 * nothing on the site linked to them except the hub and whichever later day
 * piece happened to mention them. Each new one shipped with no inbound link
 * from another article at all. Linking every day piece to its calendar
 * neighbours fixes that for every piece at once, including the ones still in
 * content/_scheduled-animal-days: the day one of those ships, its two
 * neighbours pick it up on the next build without anyone editing them.
 *
 * Only days that have their own article (frontmatter `animalDay`) are in the
 * ring, so a neighbour is always a real page. The ring wraps, so the last day
 * of the year points at the first.
 */
export function animalDayNeighbors(post, posts) {
  const eventId = post?.animalDay;
  if (!eventId || !Array.isArray(posts)) return null;
  const year = Number(siteToday().slice(0, 4));
  const ring = ANIMAL_EVENTS
    .map((event) => {
      const when = resolveEventDate(event, year);
      const article = posts.filter((p) => p.animalDay === event.id).sort(newest)[0];
      return when && article ? { event, article, order: when.month * 100 + when.day } : null;
    })
    .filter(Boolean)
    .sort((a, b) => a.order - b.order);
  const i = ring.findIndex((entry) => entry.event.id === eventId);
  if (i < 0 || ring.length < 2) return null;
  const prev = ring[(i - 1 + ring.length) % ring.length];
  const next = ring[(i + 1) % ring.length];
  return { prev, next: next.event.id === prev.event.id ? null : next };
}

function NeighborCard({ entry, direction }) {
  const { event, article } = entry;
  const back = direction === 'prev';
  return (
    <Link
      to={`/blog/${slugOf(article)}/`}
      className={`group flex flex-1 items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-all hover:border-secondary/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50 ${back ? '' : 'sm:flex-row-reverse sm:text-right'}`}
    >
      {back
        ? <ArrowLeft className="h-4 w-4 shrink-0 text-secondary transition-transform group-hover:-translate-x-0.5" />
        : <ArrowRight className="h-4 w-4 shrink-0 text-secondary transition-transform group-hover:translate-x-0.5" />}
      <span className="min-w-0">
        <span className="block font-body text-xs uppercase tracking-wide text-muted-foreground">
          {back ? 'Earlier on the calendar' : 'Next on the calendar'}
        </span>
        <span className="block font-body text-sm font-semibold text-foreground group-hover:text-secondary">
          {event.emoji} {event.name}
        </span>
      </span>
    </Link>
  );
}

export default function AnimalDayNeighbors({ post, posts }) {
  const neighbors = animalDayNeighbors(post, posts);
  if (!neighbors) return null;
  return (
    <div className="mt-8">
      <h2 className="font-display font-bold text-base text-foreground mb-3 flex items-center gap-2">
        <IconChip icon={CalendarDays} color="orange" size="heading" />On the animal calendar
      </h2>
      <div className="flex flex-col gap-3 sm:flex-row">
        <NeighborCard entry={neighbors.prev} direction="prev" />
        {neighbors.next && <NeighborCard entry={neighbors.next} direction="next" />}
      </div>
    </div>
  );
}
