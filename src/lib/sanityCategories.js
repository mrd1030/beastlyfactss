import { client } from '@/lib/sanity';
import groq from 'groq';

const CATEGORIES_QUERY = groq`*[_type == "category"] | order(title asc) {
  _id, title, "slug": slug.current,
  "count": count(*[_type == "post" && references(^._id)])
}`;

let cached = null;

// One Sanity round-trip for the category list, shared by the Navbar and any
// page that needs it (Blog, Search, CategoryPage). Consumers filter to
// `count > 0` where they only want non-empty categories. A failed fetch
// clears the cache so the next caller retries instead of inheriting the error.
export function fetchCategories() {
  if (!cached) {
    cached = client.fetch(CATEGORIES_QUERY).catch(err => {
      cached = null;
      throw err;
    });
  }
  return cached;
}
