import { mdxPosts } from '@/lib/mdxPosts';

// Each series is identified by its slug prefix - story slugs are stable
// ("chronicles-of-dex-...", "chronicles-of-otis-..."), so new parts published
// in Sanity or dropped into content/short-story/ are picked up automatically
// without touching this file. Adding a NEW character = add an entry here
// (and mirror it in prerender.mjs / generate-sitemap.js).
export const CHRONICLES_SERIES = [
  {
    id: 'dex',
    slugPrefix: 'chronicles-of-dex',
    character: 'Dex the Bearded Dragon',
    shortName: 'Dex',
    emoji: '🦎',
    blurb: 'A bearded dragon with opinions, ambitions, and a cricket problem - told entirely from his point of view.',
  },
  {
    id: 'otis',
    slugPrefix: 'chronicles-of-otis',
    character: 'Otis the Bunny',
    shortName: 'Otis',
    emoji: '🐰',
    blurb: 'A house rabbit who is quite sure the garden - and everything in it - belongs to him.',
  },
];

const postSlug = (post) => post?.slug?.current || post?.slug || post?._id || post?.id;

export const seriesForSlug = (slug) =>
  CHRONICLES_SERIES.find(s => typeof slug === 'string' && slug.startsWith(s.slugPrefix));

export const isChroniclesPost = (post) => Boolean(seriesForSlug(postSlug(post)));

// MDX-sourced chronicle parts (Sanity-sourced ones are fetched at runtime by
// the Chronicles page and merged with these).
export const mdxChroniclesPosts = mdxPosts.filter(isChroniclesPost);

// Group a combined post list into { [seriesId]: [part1, part2, ...] },
// ordered by publish date so part numbers stay stable as new parts release.
export function groupChronicles(posts) {
  const bySeries = {};
  for (const s of CHRONICLES_SERIES) bySeries[s.id] = [];
  for (const post of posts) {
    const series = seriesForSlug(postSlug(post));
    if (series) bySeries[series.id].push(post);
  }
  for (const id of Object.keys(bySeries)) {
    bySeries[id].sort((a, b) => new Date(a.publishedAt || a.date || 0) - new Date(b.publishedAt || b.date || 0));
  }
  return bySeries;
}

// Canonical site paths: the series root is a landing page listing all parts;
// individual stories read at /chronicles/<series>/<part>/.
export const chroniclesPath = (seriesId, part = null) =>
  part ? `/chronicles/${seriesId}/${part}/` : `/chronicles/${seriesId}/`;
