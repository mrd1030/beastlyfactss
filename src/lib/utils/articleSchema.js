// Article JSON-LD for the page types that read as articles but are not blog
// posts: Beastfiles, the legal map and state pages, and Chronicles parts.
// Ahrefs' 2026-10-20 audit flagged 228 such pages as articles with no Article
// schema. The blog has its own BlogPosting block in Blog.jsx and the care
// guides theirs in GuideDetail.jsx.

const SITE = 'https://beastlyfacts.com';
const ORG = { '@type': 'Organization', name: 'Beastly Facts', url: SITE };

// Newest of a set of YYYY-MM-DD dates, ignoring blanks. Undefined when none.
export const newestDate = (dates) => (dates || []).filter((d) => typeof d === 'string' && d).sort().pop();

export function articleSchema({ headline, description, image, url, datePublished, dateModified, about }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    ...(description ? { description } : {}),
    image: image || `${SITE}/assets/og-default.jpg`,
    url,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified || datePublished ? { dateModified: dateModified || datePublished } : {}),
    author: ORG,
    publisher: { ...ORG, logo: { '@type': 'ImageObject', url: `${SITE}/assets/og-default.jpg` } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    ...(about ? { about } : {}),
  };
}
