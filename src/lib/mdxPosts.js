// src/lib/mdxPosts.js
//
// Post metadata comes from src/lib/generated/mdx-meta.json (written by
// scripts/sync-articles.js, which runs on `npm run dev` and `npm run build`),
// NOT from an eager import.meta.glob. Article bodies load through the lazy
// glob below, so each compiled MDX article stays in its own on-demand chunk.
//
// IMPORTANT: never add an eager/static import of anything under /content.
// Rollup merges a statically-imported module into the importing chunk, and
// every dynamic import() of that module then resolves to the same chunk -
// which is exactly how ~330KB of compiled article text previously ended up
// in the shared bundle that Home, Blog, GuideDetail, etc. all loaded.

import { lazy } from 'react';
import mdxMeta from './generated/mdx-meta.json';

// Lazy loaders keyed by content path - the only reference to MDX modules in
// the app. Keys must match the `path` field emitted by sync-articles.js.
const contentLoaders = {
  ...import.meta.glob('/content/blog/*.mdx'),
  ...import.meta.glob('/content/guides/*.mdx'),
  ...import.meta.glob('/content/fun-facts/*.mdx'),
  ...import.meta.glob('/content/short-story/*.mdx'),
};

function toPost(meta) {
  const loader = contentLoaders[meta.path];

  return {
    // Core fields
    _id: meta.slug,
    slug: { current: meta.slug },
    title: meta.title,
    seoTitle: meta.seoTitle,
    excerpt: meta.excerpt,
    publishedAt: meta.date || new Date().toISOString(),

    // Metadata
    category: meta.category,
    allCategories: meta.category ? [meta.category] : [],
    tags: meta.tags,
    readTime: meta.readTime,
    difficulty: meta.difficulty,

    // Images
    image: meta.image,
    imageAlt: meta.imageAlt,

    // Content: a React.lazy component - the article body downloads only when
    // this is actually rendered. Render sites wrap it in <Suspense> with a
    // [data-mdx-loading] fallback (prerender.mjs waits for that marker to
    // clear so captured HTML always contains the full article).
    content: loader ? lazy(loader) : null,
    source: 'mdx',

    // Optional extra fields
    emoji: meta.emoji,
    lastReviewed: meta.lastReviewed,
    canonicalUrl: meta.canonicalUrl,
    faqs: meta.faqs,
    relatedProducts: meta.relatedProducts || [],
  };
}

export const mdxPosts = mdxMeta.map(toPost);

// Optional: Export a helper to get posts by category
export function getMdxPostsByCategory(category) {
  if (!category || category.toLowerCase() === 'all') return mdxPosts;
  return mdxPosts.filter(post =>
    post.category?.toLowerCase() === category.toLowerCase()
  );
}
