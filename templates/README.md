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
Use this for longer, in-depth guides (cost breakdowns, handling, health issues, tank setup, comparisons, legal-to-own, etc.).

**Includes:**
- Full frontmatter schema, including `seoTitle`, `emoji`, and `faqs` (every real guide has 2-4 FAQs, not optional in practice)
- `<AffiliateDisclosure />` placement (required immediately after the H1 whenever `affiliate: true` - all 67 current affiliate articles pair the two)
- Examples of `ComparisonTable`, `AffiliateLink`, `FunFact`, and `Sources`
- Notes on `<VetDisclaimer />` and `<LegalDisclaimer />` for medical/legal content

### `FUN_FACT_TEMPLATE.mdx`
Use this for shorter, lighter "fun fact" style pages.

**Includes:**
- Lighter frontmatter schema (no `seoTitle`/`emoji`/`faqs` - real fun-facts articles don't use them)
- The real body structure: a single flowing numbered list (all 15 existing fun-facts articles use this, none use `## Fact 1` headings)
- One `<FunFact>` callout and a `## Sources` section

### `RESEARCH_BRIEF_TEMPLATE.md`
Use this *before* `GUIDE_TEMPLATE.mdx` when starting a new species' cost / handling / health-issues / tank-setup deep-dive batch. It's a copy-pasteable research prompt, not an article template, run it in whatever research tool you're using outside Claude Code, then bring the results back to fill in the actual articles.

---

## Frontmatter Guidelines

- Always fill in `title`, `slug`, `date`, `excerpt`, and `description`.
- `category` is fully dynamic (no hardcoded list in code - see `src/lib/data/glossaryTerms.js` for the same pattern applied to glossary terms), but stick to a real existing value unless you're deliberately introducing a new content-type category the way "Comparisons", "Legal", and "Roundups" were added. Current values in use: `Reptiles`, `Amphibians`, `Aquatic Life`, `Birds`, `Small & Exotic Pets`, `Invertebrates`, `Cats`, `Dogs`, `Comparisons`, `Legal`, `Roundups`, `Fun Facts`.
- Add good `image` + `imageAlt` for social sharing. Most guides use `/assets/images/<slug>.jpg`; check what sibling articles in the same series already use before picking a folder.
- Set `affiliate: true` if the post contains `<AffiliateLink>` usage, and pair it with `<AffiliateDisclosure />` right after the H1 - always, not optionally.
- Add `faqs` to guides (2-4 is typical). Skip on fun-facts articles.
- Use `difficulty` (Beginner / Beginner-Intermediate / Intermediate / Intermediate-Advanced / Advanced / Self-Sufficient) on guides.
- Fill in `lastReviewed` to show content is up to date.
- `readingTime` is optional but helpful for readers.
- Only use `noIndex: true` for pages you don't want to appear in search results (rare for normal content).
- No em dashes or en dashes anywhere in body copy, site-wide house style - use a comma or period instead.
- New content should start as `status: "draft"` and flip to `"published"` (plus running `node scripts/sync-articles.js`) once it's actually ready to go live, including having a real image in place.

---

## MDX Components Available

These components are located in `src/components/mdx/`. Usage rates below are across the ~98 real guide articles currently on the site, worth knowing before reaching for one:

- `<AffiliateDisclosure />` - required disclosure, used on all 67 articles with `affiliate: true`
- `<ComparisonTable />` - clean comparison tables, very commonly used
- `<AffiliateLink href="" product="">` - affiliate/Amazon links, works inline in prose or inside a `<ComparisonTable>` cell
- `<FunFact />` - highlighted callout, real articles use exactly one per article, not one per section/fact
- `<Sources />` - sources section, closes almost every article
- `<VetDisclaimer />` - used on 20+ guides discussing a medical/health condition, placed right after the H1
- `<LegalDisclaimer />` - same placement, for anything discussing legality/regulations (see the "Is It Legal to Own a ___" series)
- `<ProsCons />` and `<Figure />` - both exist but aren't used by any current article. The frontmatter `image` field alone handles the hero image; don't reach for either unless there's a genuine reason to.

---

**Tip:** After copying a template, delete any example content you don't need and replace it with your own.