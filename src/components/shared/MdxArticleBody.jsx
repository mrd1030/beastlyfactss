import React, { useState, useEffect } from 'react';
import { getMdxComponent, preloadMdxBySlug } from '@/lib/mdxPosts';

// Renders a preloaded MDX article/story body. NOT React.lazy()+<Suspense> -
// see mdxPosts.js's comment for why that always suspended on hydration's
// first render even when preloaded, and AppLayout.jsx's comment for why ANY
// <Suspense> boundary fails to hydrate against this app's prerendered HTML
// regardless of whether its content ever actually suspends. This reads a
// synchronous cache instead, populated before hydrateRoot runs for a fresh
// page load (see routePreload.js) - client-side navigation to an article
// whose chunk hasn't preloaded yet just shows the loading fallback briefly
// (no hydration involved there, so no mismatch risk).
//
// [data-mdx-loading] is what prerender.mjs's wait condition polls for - it
// never captures the page until this marker is gone, so the static HTML
// always has the real article body, not this fallback.
export default function MdxArticleBody({ slug, components, loadingLabel }) {
  const [, setTick] = useState(0);
  const Comp = getMdxComponent(slug);

  useEffect(() => {
    if (Comp) return;
    preloadMdxBySlug(slug).then(() => setTick((n) => n + 1));
  }, [Comp, slug]);

  if (!Comp) {
    return (
      <div data-mdx-loading className="py-12 text-center text-sm text-muted-foreground font-body">
        {loadingLabel}
      </div>
    );
  }

  return <Comp components={components} />;
}
