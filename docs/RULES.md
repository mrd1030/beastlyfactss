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
- No em or en dashes anywhere. When a draft reaches for a dash, say it another
  way: split it into two sentences, use a colon, or cut the aside. A comma is
  not a dash substitute. "Round fish gulp air, it is how they fail" is a comma
  splice wearing a dash's job, and 900 of them in a row is a fingerprint. If
  both halves are full clauses, they get a period.
- US spelling, "grey" preferred. No AI-tell phrasing ("nature's ultimate X",
  "let that sink in", "delve into").
- Intensifiers are rationed, not banned. "genuinely", "actually", "really",
  and "the real X" are fine in Mike's mouth once in a while. They are not
  fine as the thing that makes a claim sound credible. Limits: at most one per
  section, never in a heading, never in the first sentence of an article, and
  never two in one paragraph. If the sentence dies without it, the sentence
  had no claim.
- Two voices, chosen by whether Mike has lived with the animal. Firsthand
  species (bearded dragon, rabbit, golden retriever, guinea pig, cockatoo,
  budgie, lovebird, chinchilla; the list is src/lib/data/firsthand.js) may use
  first person, one concrete beat per article, and the byline shows a note
  automatically. Every other species is documentary voice: third person, the
  sources carry the weight, no warmth about an animal nobody here has held.
  Never write "I keep" or "in my experience" on a documentary page. A line
  like "I would not handle a mourning gecko" is allowed anywhere because it
  is a recommendation, not a claim of experience. Legal pieces and the
  Chronicles keep their own voices.
- The first sentence of an article is about the animal, and so is the first
  section. No care-guide sentence, no "companion guides on cost, feeding,
  handling, and cage setup" list. "For everything else, see our full guide"
  is a nav bar pretending to be a sentence, wherever it sits. The Deep Dive
  list (sidebar on desktop, the block after the FAQ on phones) carries the
  care guide and every sibling guide on every page, in the prerendered HTML.
- "X, not Y" and "X rather than Y" are one move, not a paragraph closer. Use
  each at most twice per article. A section that ends on that cadence every
  time reads as assembled.
- Deliver the structure the lead-in promises: "six surprising facts" means an
  actual numbered list, numbered consistently.
- Care guides keep the split structure (cost / handling / health / tank setup),
  never merged into pillar pages. `<VetDisclaimer />` right after the H1 on
  medical content, `<LegalDisclaimer />` on legality content.

## Sources

- A source is a page actually opened that contains the specific claim. Never a
  homepage, never a search results page, never a constructed URL.
- Keep the `<Sources>` block curated: 4 to 5 links is the target, not a hard cap,
  and never a URL library. Going over is allowed when every extra link carries a
  claim nothing else in the block supports; when it does, say why in an MDX
  comment directly above `<Sources>` so the next audit doesn't trim it. Current
  overruns: `bearded-dragon-health-issues-guide.mdx` runs 7 (the prolapse and ADV
  material), `red-eared-slider-health-issues-guide.mdx` runs 6 (the pyramiding
  correction needs both the Stancel feeding trial and a cause list). Don't "fix"
  either back down.
  Prefer peer-reviewed papers with DOI, then .gov agencies, then museums and
  universities, then established science journalism. Name the actual paper
  title and credit the authors, not just the journal.
- "No source found, claim removed" is a good outcome. A fabricated citation is
  the worst outcome because it survives review.
- Every superlative gets verified. Mechanisms must match claims, species-specific
  traits get scoped, figures must be current. Arithmetic-check the title,
  excerpt, and meta description last and deliberately, they are the most shared.

### Sources are for facts, not prices

A `<Sources>` entry is a vet, university, government, manufacturer spec, or
established husbandry reference. Never a retailer product page or a
for-sale listing. When a cost guide quotes retail prices, put one plain
line under the last cost table, no links: "Prices last checked <Month
Year> at <retailer names>. Retail prices move; treat the table as a
snapshot, not a quote."

## Linking: everything to and from somewhere

- Every article carries 1 to 2+ in-body internal links, written by hand. The
  build gates on this, but the check is a net, not the author.
- In-body links point somewhere the Deep Dive does not: another species
  ("the same calcium problem sugar gliders have"), a cross-species guide
  (quarantine, UVB, gut-loading), the encyclopedia profile, an overview or
  vs piece. Never a link to the same species' cost, handling, health,
  setup, feeding, enrichment, or legal guide, and never to the care guide
  hub: the Deep Dive lists all of those on every page. A sentence that
  exists only to carry a link ("For what it costs, see our cost guide")
  is deleted, not moved. A content sentence that carried one ("covered in
  our health guide") loses the clause and keeps the point. Decided
  2026-09-08 on the flying squirrel set; the rest of the series follow.
  One exception: when a sibling guide is the direct answer to the question
  the article raised (the health guide says diet drives everything, the
  feeding guide has the bowl), one sentence with a reason may link it. At
  most one such link per article, and the sentence says what is there.
- The site never talks about itself. No "on this site", "this site's",
  "covered elsewhere", "already covered", "our X guide covers". A
  sentence that compares two articles is an editor's note, not something
  a keeper says about the animal; cut it or say the thing about the animal.
  The checker warns on the phrases (`self-reference`).
- Articles end on the animal: the last body paragraph is a point, not a
  list of places to go next. One encyclopedia or overview sentence is fine.
- Navigation-only edits (links added, moved, or removed) and FunFact
  rewrites do not bump lastUpdated or lastReviewed. Only a fact added or
  reviewed does.
- Every article must be reachable from a guide. Standard species suffixes
  (cost, handling, health-issues, tank-setup, feeding, enrichment) auto-wire;
  everything else gets a RELATED_ARTICLES entry against the guide ids it serves.
- The inbound-link audit is a ratchet: the thin-page budget only goes down, so
  no new page ships that nothing links to.

## Hubs: the deep dives own the numbers

Decided 2026-09-08 after the rabbit set test found the care guide hub
contradicting its own deep dives on the vet clock, greens, hay share,
lifespan, and vet schedule. The hub is a router and a storefront, not a
third care sheet.

- A reconciled hub (`layout: "router"` in src/lib/data/guides/*.js) carries:
  a first-week card of numbers, each copied word for word from the deep
  dive named in its `source` and linked to it; an emergency card copied
  from the health guide's call-the-vet list; one routing sentence per deep
  dive; a buy list with no prices; three FAQs copied from the deep dives.
  No housing, diet, enrichment, or health prose, no cost tables. The hub
  keeps no figure of its own; a number changes in the deep dive and the
  hub follows. The rare row no deep dive covers (rabbit heat, lifespan)
  carries no source and is a gap to fill in the deep dives. Rows may cite
  the shared class guides in the sidebar's Health and More list (heat
  stress, grooming, vet trips, quarantine, shedding, hygiene, the
  emergency plan) the same way: those pages answer what every set test
  reported as a gap, and a hub row is how a reader finds out they exist.
- `node scripts/check-species-numbers.mjs <species>` lists every topic
  where the hub, encyclopedia entry, and deep dives state different
  figures, each with its sentence. Run it before and after touching a
  species set. Advisory: a minimum and an exercise space are two figures,
  not a conflict, and the reviewer decides.
- Care packages are sold ($8.99) and never printed free. The hub's print
  icon prints two free cards only, the emergency card and the setup
  checklist (buy list plus first-week numbers), with the package name and
  price in the footer. It only appears on hubs that have an emergency
  card. The package card stays in the sidebar on every hub.
- Legacy hubs (every species not yet reconciled) still render the old
  care sheet and have no print button. Reconcile one species at a time,
  after its set test, and dogs and cats last.

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
