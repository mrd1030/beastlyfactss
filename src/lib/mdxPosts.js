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

import mdxMeta from './generated/mdx-meta.json';

// Lazy loaders keyed by content path - the only reference to MDX modules in
// the app. Keys must match the `path` field emitted by sync-articles.js.
const contentLoaders = {
  ...import.meta.glob('/content/blog/*.mdx'),
  ...import.meta.glob('/content/guides/*.mdx'),
  ...import.meta.glob('/content/fun-facts/*.mdx'),
  ...import.meta.glob('/content/short-story/*.mdx'),
};

// Resolved MDX article/story components, keyed by slug - populated by
// preloadMdxBySlug() before hydrateRoot runs (see routePreload.js), NOT via
// React.lazy(). React.lazy()'s own factory call throws a brand-new,
// unsettled promise the first time IT calls it, even if the underlying
// module was already fetched by a separate import() call - confirmed
// directly (the identical issue, for Home's sections, is documented in
// homePreload.js). MdxArticleBody (used by Blog.jsx/Chronicles.jsx) reads
// this cache synchronously instead of suspending, so nothing throws during
// hydration, and no <Suspense> boundary is needed either - confirmed
// separately (AppLayout.jsx's comment) that ANY <Suspense> boundary fails to
// hydrate against this app's prerendered HTML regardless of whether its
// content ever actually suspends.
const mdxComponentCache = {};
const mdxPreloadPromises = {};

function loaderForSlug(slug) {
  const meta = mdxMeta.find(m => m.slug === slug);
  return meta ? contentLoaders[meta.path] : null;
}

// Memoized per slug - safe to call again from MdxArticleBody's own effect
// (client-side navigation to an article whose chunk wasn't preloaded at
// boot) without kicking off a second import() for the same module.
export function preloadMdxBySlug(slug) {
  if (!slug) return Promise.resolve();
  if (mdxPreloadPromises[slug]) return mdxPreloadPromises[slug];
  const loader = loaderForSlug(slug);
  if (!loader) return Promise.resolve();
  mdxPreloadPromises[slug] = loader().then((mod) => {
    mdxComponentCache[slug] = mod.default;
  });
  return mdxPreloadPromises[slug];
}

export function getMdxComponent(slug) {
  return mdxComponentCache[slug] || null;
}

function toPost(meta) {
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

    // Marker only - not a component. Renderers look the real component up
    // by slug via getMdxComponent()/MdxArticleBody, not through this field.
    content: contentLoaders[meta.path] ? true : null,
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
