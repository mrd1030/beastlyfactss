// BreadcrumbList structured data.
//
// What Google does with this is replace the raw URL path under a search result
// with a readable trail, so a listing reads "Beastly Facts > Exotic Pet Laws >
// Texas" instead of "beastlyfacts.com > exotic-pet-laws > state > texas". It
// also states how a page sits under its hub, which is how the 52 state pages
// are read as one family rather than 52 unrelated pages.
//
// GuideDetail.jsx and Blog.jsx each wrote this object out by hand, identically
// apart from the middle rung, and the pages added since had simply gone
// without. A GSC export on 2026-09-13 showed 91 valid breadcrumb items and,
// usefully, zero invalid ones in the whole recorded history back to June, so
// the shape those two settled on is the shape to copy rather than reinvent.
//
// Trail entries are [name, path] and every path is site-relative. The home
// rung is added here so no caller can forget it: Google wants the trail to
// start at the root, and a list that begins halfway down is the usual way this
// markup goes quietly wrong.
const SITE = 'https://beastlyfacts.com';

const absolute = (path) => (path.startsWith('http') ? path : `${SITE}${path}`);

export function breadcrumbSchema(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [['Home', '/'], ...trail].map(([name, path], i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name,
      item: absolute(path),
    })),
  };
}
