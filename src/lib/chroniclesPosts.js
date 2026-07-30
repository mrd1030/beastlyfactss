// Split out of chronicles.js: this half needs mdxPosts (and its ~925KB
// mdx-meta.json bundle), so only import from here in code that genuinely
// needs post data (the Chronicles listing page). chronicles.js itself stays
// mdxPosts-free so lightweight consumers (DexTeaser, Blog category tagging,
// GuideDetail/EncyclopediaAnimal "read the story" links) don't drag in the
// whole site's article metadata just to read a slug prefix or build a URL -
// that exact anti-pattern was pulling mdxPosts-CsLjham4.js (924KB raw) into
// every homepage load via DexTeaser, which only ever needed CHRONICLES_SERIES
// and chroniclesPath.
import { mdxPosts } from '@/lib/mdxPosts';
import { CHRONICLES_SERIES, seriesForSlug, isChroniclesPost } from '@/lib/chronicles';

const postSlug = (post) => post?.slug?.current || post?.slug || post?._id || post?.id;

// MDX-sourced chronicle parts (Sanity-sourced ones are fetched at runtime by
// the Chronicles page and merged with these).
export const mdxChroniclesPosts = mdxPosts.filter(isChroniclesPost);

// Group a combined post list into { [seriesId]: [part1, part2, ...] },
// ordered by publish date so part numbers stay stable as new parts release.
export function groupChronicles(posts) {
  const bySeries = {};
  for (const s of CHRONICLES_SERIES) bySeries[s.id] = [];
  const seenSlugs = new Set();
  for (const post of posts) {
    const slug = postSlug(post);
    // A story can briefly exist in both MDX and Sanity mid-migration - keep
    // whichever copy appeared first (callers always spread MDX before Sanity).
    if (seenSlugs.has(slug)) continue;
    seenSlugs.add(slug);
    const series = seriesForSlug(slug);
    if (series) bySeries[series.id].push(post);
  }
  for (const id of Object.keys(bySeries)) {
    bySeries[id].sort((a, b) => new Date(a.publishedAt || a.date || 0) - new Date(b.publishedAt || b.date || 0));
  }
  return bySeries;
}
