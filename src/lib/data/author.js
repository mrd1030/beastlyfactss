// The one place the site's author is described.
//
// This existed in two places that disagreed. Blog.jsx rendered an AuthorBio
// card reading "Written by Mike" with a bio, while the BlogPosting JSON-LD on
// the same page declared `"author": {"@type": "Organization", "name": "Beastly
// Facts"}`. The page told a reader a person wrote it and told Google a company
// did, and only one of those two is used to judge whether the site has an
// identifiable author behind its pet-health content.
//
// `url` points at /about/, which carries the matching Person entity. Keeping
// both @id values equal to that URL is what tells a crawler the byline on 600
// articles and the profile page are one entity rather than 601 unrelated
// mentions of the same first name.
export const AUTHOR = {
  name: 'Mike',
  url: 'https://beastlyfacts.com/about/',
  bio: 'Mike is the founder of Beastly Facts and a lifelong reptile enthusiast. He shares his home with Dex, a bearded dragon with strong opinions about crickets and basking schedules. Mike writes in-depth care guides, animal facts, and the occasional short story about life with exotic pets.',
  // Short form for the profile page, where the surrounding copy already
  // introduces him.
  role: 'Founder and writer, Beastly Facts',
  emoji: '🦎',
  // Accounts that are demonstrably the same operator, which is the entire point
  // of sameAs: it lets a crawler reconcile these profiles into one identity
  // rather than treating each as a separate unknown. Same three the navbar and
  // footer link, so nothing here is a claim the site does not already make.
  sameAs: [
    'https://instagram.com/beastly.facts',
    'https://www.pinterest.com/beastlyfacts/',
    'https://x.com/beastly_facts',
  ],
};

export const PUBLISHER = {
  '@type': 'Organization',
  name: 'Beastly Facts',
  url: 'https://beastlyfacts.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://beastlyfacts.com/assets/og-default.jpg',
  },
};

// The Person node to drop into any schema's `author` slot. Takes the article's
// own frontmatter author when it has one, so a future guest byline is described
// truthfully instead of being silently attributed to Mike; falls back to the
// profile above, which is what all 625 current articles declare anyway.
export function authorSchema(name) {
  const isKnown = !name || name === AUTHOR.name;
  return isKnown
    ? { '@type': 'Person', '@id': AUTHOR.url, name: AUTHOR.name, url: AUTHOR.url, sameAs: AUTHOR.sameAs }
    : { '@type': 'Person', name };
}
