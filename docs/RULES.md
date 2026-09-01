# BeastlyFacts content rulebook

The consolidated rules, gathered from CLAUDE.md, docs/content-ai-house-rules.md,
templates/README.md, the check scripts, IMAGE_PROMPTS.md, and the data-file
comments. Every rule traces to a documented failure or an enforced check. The
deeper reasoning and the war stories live in the files named above; this is the
working checklist.

## Writing an article

- Start from the template. Guides carry `seoTitle`, `seoDescription`, `emoji`,
  `difficulty`, `author`, and 2 to 4 `faqs`. Fun facts skip those and are one
  flowing numbered list, no `## Fact 1` headings.
- Complete frontmatter IS the structured data. BlogPosting, BreadcrumbList, and
  FAQPage JSON-LD are generated automatically from it, the author byline ties to
  /about via `sameAs`, `dateModified` comes from `lastReviewed`, and
  `datePublished` appears on the first build after the article's date arrives.
  Never hand-write schema blocks in an article.
- `seoTitle` under 60 characters, `seoDescription` 150 to 160. The meta
  description is `seoDescription`, falling back to `excerpt` truncated at 155.
  The long `description` field is not the meta description, do not polish it
  expecting SERP impact.
- `date` is the real intended publish date, never backdated. Spread batches 4 to
  5 per day, never dumped on one date.
- `category` comes from the values in use: Reptiles, Amphibians, Aquatic Life,
  Birds, Small & Exotic Pets, Invertebrates, Cats, Dogs, Comparisons, Legal,
  Roundups, Fun Facts, Pet Care, Enrichment. New categories are a deliberate
  decision, not a convenience.
- A cross-species article also sets the `categories` array (primary first),
  e.g. `categories: ["Pet Care", "Dogs", "Cats"]`, or it never appears under
  the species pills on /blog/. The blog filters on the array when present.
  Ten dog/cat health guides shipped invisible to both pills before this rule.
- No em or en dashes anywhere. US spelling, "grey" preferred. No AI-tell
  phrasing ("nature's ultimate X", "let that sink in", "delve into").
- Deliver the structure the lead-in promises: "six surprising facts" means an
  actual numbered list, numbered consistently.
- Care guides keep the split structure (cost / handling / health / tank setup),
  never merged into pillar pages. `<VetDisclaimer />` right after the H1 on
  medical content, `<LegalDisclaimer />` on legality content.

## Sources

- A source is a page actually opened that contains the specific claim. Never a
  homepage, never a search results page, never a constructed URL.
- Keep the `<Sources>` block curated: 4 to 5 links maximum, not a URL library.
  Prefer peer-reviewed papers with DOI, then .gov agencies, then museums and
  universities, then established science journalism. Name the actual paper
  title and credit the authors, not just the journal.
- "No source found, claim removed" is a good outcome. A fabricated citation is
  the worst outcome because it survives review.
- Every superlative gets verified. Mechanisms must match claims, species-specific
  traits get scoped, figures must be current. Arithmetic-check the title,
  excerpt, and meta description last and deliberately, they are the most shared.

## Linking: everything to and from somewhere

- Every article carries 1 to 2+ in-body internal links, written by hand. The
  build gates on this, but the check is a net, not the author.
- Every article must be reachable from a guide. Standard species suffixes
  (cost, handling, health-issues, tank-setup, feeding) auto-wire; everything
  else gets a RELATED_ARTICLES entry against the guide ids it serves.
- The inbound-link audit is a ratchet: the thin-page budget only goes down, so
  no new page ships that nothing links to.

## Affiliate

- Grep affiliateProducts.js for the exact existing link, never from memory.
  Cost Builder line items must exactly match a product's `covers` string, there
  is no fuzzy matching.
- `affiliate: true` always pairs with `<AffiliateDisclosure />` immediately
  after the H1. No product linked twice in the same article.

## Images

- Everything is 3:2. Article images 1600x1067, guide images 1168x784, mozjpeg
  quality 80. Hero at `/assets/images/<slug>.jpg`, matching the sibling series.
  `image` and `imageAlt` always set, or social shares fall back to the generic
  site hero.
- One photo per fact, never shared, never reused from a Beastfile. New fact
  photos register in FACT_IMAGES by id in BOTH src/lib/data/factImages.js and
  public/_worker.js, synced by hand. Wikimedia photos get logged in
  IMAGE_CREDITS.md.
- Never renumber facts. A removed fact leaves an id gap, favorites are keyed by
  id in the app's frozen snapshot.

## Themed quizzes

- Format, voice, and publishing checklist live in docs/QUIZZES.md. Ids and
  numbers are permanent, every question needs a released source page, and a
  committed quiz is never future-dated.

## Placement quirks

- Beastlypedia only surfaces articles filed under `category: "Wild Animals"`,
  it refuses the care categories outright.
- Content pipeline order: matrix, then legal guide, then encyclopedia/Beastfile,
  then care guides.
