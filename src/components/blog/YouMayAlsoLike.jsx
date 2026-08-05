import React, { useMemo, useState, useEffect } from 'react';
import { motion } from '@/lib/motion-safe';
import CompactPostCard from '@/components/shared/CompactPostCard';
import FactFileRow from '@/components/shared/FactFileRow';
import { mdxPosts } from '@/lib/mdxPosts';
import { slugify } from '@/lib/utils/slugify';
import { seededShuffle, hashString } from '@/lib/utils/seededShuffle';
import buildStamp from '@/lib/generated/build-stamp.json';

// 4, matching what the old Sanity-backed version rendered.
const RELATED_LIMIT = 4;

// Matches the worker's gate in public/_worker.js so a post appears here on the
// same day it appears in the feed.
const SITE_TIMEZONE = 'America/New_York';

const idOf = (post) => post._id || post.slug?.current || post.id;
const dayOf = (post) => String(post.publishedAt || '').slice(0, 10);

// MDX posts carry `allCategories`; older shapes carry a single `category` or a
// `categorySlug`. Everything is compared through slugify, the same way
// Search.jsx reconciles the two.
function categorySlugsOf(post) {
  const list = post.allCategories?.length
    ? post.allCategories
    : (post.category ? [post.category] : []);
  const out = new Set(list.map(slugify));
  if (post.categorySlug) out.add(slugify(post.categorySlug));
  return out;
}

function tagsOf(post) {
  return new Set((post.tags || []).map((t) => String(t).toLowerCase()));
}

// Three tiers, each shuffled, filled in order until there are four:
//   1. same category
//   2. shares at least one tag, most shared tags first
//   3. anything else
//
// Tier 2 is what makes "similar" mean something beyond the category. It is
// shuffled before it is sorted by shared-tag count, and Array.sort is stable,
// so posts of equal similarity stay in random order rather than always
// resolving to the same ones.
function selectRelated({ currentPostId, categorySlug, cutoff, seed, factFilesOnly = false }) {
  const current = mdxPosts.find((p) => idOf(p) === currentPostId);

  // Arriving from Fact Files narrows the pool to Fact Files. This is not just
  // styling: a row states the claim being corrected and what replaced it, and
  // an ordinary article has neither, so it cannot be drawn as one. Keeping the
  // whole pool would mean two different card shapes stacked in one list.
  const pool = mdxPosts.filter(
    (p) =>
      idOf(p) !== currentPostId &&
      dayOf(p) <= cutoff &&
      (!factFilesOnly || (p.factFile && p.myth && p.truth))
  );

  const wantedCats = categorySlug
    ? new Set([slugify(categorySlug)])
    : categorySlugsOf(current || {});
  const wantedTags = tagsOf(current || {});

  const sameCategory = [];
  const sharesTag = [];
  const rest = [];

  for (const p of pool) {
    if ([...categorySlugsOf(p)].some((c) => wantedCats.has(c))) {
      sameCategory.push(p);
      continue;
    }
    let shared = 0;
    for (const t of tagsOf(p)) if (wantedTags.has(t)) shared++;
    if (shared > 0) sharesTag.push({ post: p, shared });
    else rest.push(p);
  }

  const picked = [];
  const take = (list) => {
    for (const p of list) {
      if (picked.length >= RELATED_LIMIT) return;
      picked.push(p);
    }
  };

  take(seededShuffle(sameCategory, seed));
  if (picked.length < RELATED_LIMIT) {
    take(
      seededShuffle(sharesTag, seed + 1)
        .sort((a, b) => b.shared - a.shared)
        .map((x) => x.post)
    );
  }
  if (picked.length < RELATED_LIMIT) take(seededShuffle(rest, seed + 2));

  return picked;
}

export default function YouMayAlsoLike({ currentPostId, categorySlug, onSelectPost, factFilesMode = false }) {
  // Two passes on purpose.
  //
  // The first render has to be byte-identical between prerender.mjs's capture
  // and hydration, so it uses a seed derived from the post id (stable, and
  // different per article) and the build date from build-stamp.json rather than
  // a live clock. Calling Math.random() or new Date() during that render is the
  // exact thing that produced React #418/#423 elsewhere on this site.
  //
  // After mount, neither constraint applies: a real random seed goes in, so the
  // selection differs on every visit, and the real date replaces the build date
  // so a post published since the last deploy is included and one that has not
  // reached its date yet is dropped.
  const [runtime, setRuntime] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.__IS_PRERENDER__) return;
    setRuntime({
      seed: Math.floor(Math.random() * 0x7fffffff),
      cutoff: new Date().toLocaleDateString('en-CA', { timeZone: SITE_TIMEZONE }),
    });
  }, [currentPostId]);

  const related = useMemo(() => {
    if (!currentPostId) return [];
    return selectRelated({
      currentPostId,
      categorySlug,
      cutoff: runtime?.cutoff ?? buildStamp.generatedAt,
      seed: runtime?.seed ?? hashString(String(currentPostId)),
      factFilesOnly: factFilesMode,
    });
  }, [currentPostId, categorySlug, runtime, factFilesMode]);

  if (related.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-12 pt-8 border-t border-border"
    >
      <h2 className="font-display font-bold text-xl text-foreground mb-4">
        You May Also Like
      </h2>
      {/* Roomier gap for the rows: their polaroid overhangs the top edge, so
          the tighter blog-card rhythm would let one photo touch the row above. */}
      <div className={factFilesMode ? 'space-y-5' : 'space-y-3'}>
        {related.map((post, i) => (
          <motion.div
            key={idOf(post)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            {factFilesMode ? (
              // FactFileRow is a Link carrying from: 'fact-files' itself, so
              // the next article keeps the same back button and the same
              // related list. It does not need onSelectPost, and App.jsx's
              // ScrollToTop handles the jump to the top on arrival.
              <FactFileRow
                entry={{
                  slug: post.slug?.current || post.slug,
                  animal: post.animal || post.category,
                  myth: post.myth,
                  truth: post.truth,
                  sources: post.sourceCount,
                  image: post.image,
                  imageAlt: post.imageAlt,
                }}
              />
            ) : (
              <CompactPostCard post={post} onClick={() => onSelectPost(post)} />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
