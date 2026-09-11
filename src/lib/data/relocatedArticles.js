// Articles whose MDX file still lives in content/ but which no longer render
// at /blog/<slug>/, because they became a section page with its own route.
//
// The file has to stay where it is: mdxPosts.js resolves a slug to its lazy
// chunk through mdx-meta.json, so anything removed from that pipeline stops
// being loadable at all. What changes is only where it is *listed* and
// *prerendered*. Three consumers read this:
//
//   mdxPosts.js         keeps it out of the blog listing, category pills and
//                       related-post pickers, while leaving loaderForSlug
//                       (which reads mdxMeta directly) able to find it
//   prerender.mjs       stops generating a /blog/<slug>/ page for it
//   generate-sitemap.js stops listing that URL
//
// Every entry needs a 301 in public/_redirects from the old /blog/ URL to the
// new one, or the inbound links and whatever ranking it had go to a 404.
export const RELOCATED_ARTICLE_SLUGS = [
  // Now the body of /exotic-pet-laws/ (see ExoticPetLawsHub.jsx). It held 40
  // inbound internal links while sitting at position 40 in a URL that reads
  // "article" rather than "reference section".
  'exotic-pet-legal-hub',
];

export const RELOCATED_ARTICLE_SLUG_SET = new Set(RELOCATED_ARTICLE_SLUGS);
