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

// mdxChroniclesPosts / groupChronicles moved to chroniclesPosts.js - they need
// mdxPosts.js (and its ~925KB mdx-meta.json), so only the Chronicles listing
// page should pull those in. Everything in this file stays mdxPosts-free.

// Canonical site paths: the series root is a landing page listing all parts;
// individual stories read at /chronicles/<series>/<part>/.
export const chroniclesPath = (seriesId, part = null) =>
  part ? `/chronicles/${seriesId}/${part}/` : `/chronicles/${seriesId}/`;
