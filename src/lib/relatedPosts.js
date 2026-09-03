// The slim article index for pages that only LINK to articles: GuideDetail and
// EncyclopediaAnimal render a related-article list from slug, title, emoji and
// category, nothing else. They used to import mdxPosts for that, which drags
// the whole of mdx-meta.json (every article's excerpt, tags, FAQs and product
// lists, ~450 KB on the wire) into every guide and encyclopedia page. This
// index is the same rows with only those four fields, written by
// scripts/sync-articles.js next to mdx-meta.json, in the same post shape
// getRelatedArticleSlugs() and the two pages already read.
import related from './generated/mdx-related.json';

export const relatedPosts = related.map(m => ({
  _id: m.slug,
  slug: { current: m.slug },
  title: m.title,
  emoji: m.emoji,
  category: m.category,
}));
