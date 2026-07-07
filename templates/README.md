# MDX Templates

This folder contains starter templates for creating new content on BeastlyFacts.

## How to Use These Templates

1. Copy the template file you need.
2. Rename it with a clear slug (e.g. `bioactive-setups-bearded-dragons.mdx`).
3. Move it into the appropriate content folder once created (e.g. `content/guides/` or `content/blog/`).
4. Fill in the frontmatter and content.

---

## Available Templates

### `GUIDE_TEMPLATE.mdx`
Use this for longer, in-depth guides (Reptile Care, Rabbit Care, etc.).

**Includes:**
- Full frontmatter schema
- Examples of `Figure`, `ProsCons`, `ComparisonTable`, `AffiliateLink`, `FunFact`, and `Sources` components

### `FUN_FACT_TEMPLATE.mdx`
Use this for shorter, lighter "fun fact" style pages.

**Includes:**
- Lighter frontmatter schema
- Examples of `Figure` and `FunFact` components

---

## Frontmatter Guidelines

- Always fill in `title`, `slug`, `date`, `excerpt`, and `description`.
- Use consistent `category` values.
- Add good `image` + `imageAlt` for social sharing.
- Set `affiliate: true` if the post contains affiliate links.
- Use `difficulty` (Beginner / Intermediate / Advanced) on guides.
- Fill in `lastReviewed` to show content is up to date.
- `readingTime` is optional but helpful for readers.
- Only use `noIndex: true` for pages you don't want to appear in search results (rare for normal content).

---

## MDX Components Available

These components are located in `src/components/mdx/`:

- `<Figure />` - Images with captions
- `<FunFact />` - Highlighted fun fact callouts
- `<ProsCons />` - Pros and Cons side-by-side
- `<ComparisonTable />` - Clean comparison tables
- `<AffiliateLink />` - Affiliate / Amazon links
- `<Sources />` - Sources section

---

**Tip:** After copying a template, delete any example content you don’t need and replace it with your own.