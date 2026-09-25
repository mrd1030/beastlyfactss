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
  /about via `sameAs`, `dateModified` comes from `lastUpdated` (falling back to `lastReviewed`), and
  `datePublished` comes from `date`.
  Never hand-write schema blocks in an article.
- `seoTitle` under 60 characters, `seoDescription` 150 to 160. The meta
  description is `seoDescription`, falling back to `excerpt` truncated at 155.
  The long `description` field is not the meta description, do not polish it
  expecting SERP impact.
- `date` is the day the article ships: never backdated, never future-dated.
  scripts/check-publish-dates.mjs fails the build on a future `date`,
  `lastUpdated` or `lastReviewed`. Writing ahead goes in `content/_scheduled-*`,
  which the build skips, and moves into `content/` on its day. Spread a batch by
  shipping 4 to 5 per day, never by dating ahead. Future dating returns only
  with an automated release queue that moves scheduled files on their day.
- Every new article gets a permanent rotation number in
  `src/lib/data/rotation.json` (`node scripts/check-rotation.mjs --assign`
  after `node scripts/sync-articles.js`). Today's reads picks by number, not
  date. Never renumber; a removed article leaves a gap.
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
- A setup guide names the animal's real home in its title, seoTitle, H1, tags
  and link text: Tank for fish, shrimp, axolotls and aquatic turtles, Pond for
  koi, Cage for birds and cage mammals, Housing for rabbits, Enclosure for
  everything else. The slug stays `<species>-tank-setup-guide` for every
  species: it is the URL, and the `tank-setup` suffix drives auto-wiring.

## Sources

- A source is a page actually opened that contains the specific claim. Never a
  homepage, never a search results page, never a constructed URL.
- Keep the `<Sources>` block curated: 4 to 5 links is the target, not a hard cap,
  and never a URL library. Going over is allowed when every extra link carries a
  claim nothing else in the block supports; when it does, say why in an MDX
  comment directly above `<Sources>` so the next audit doesn't trim it. Current
  overruns: `bearded-dragon-health-issues-guide.mdx` runs 9 (the prolapse, ADV and vet-finding
  material), `red-eared-slider-health-issues-guide.mdx` runs 6 (the pyramiding
  correction needs both the Stancel feeding trial and a cause list),
  `small-mammal-temperature-heat-stress-guide.mdx` runs 7 and
  `small-mammal-grooming-nails-molting-guide.mdx` runs 8 (one source per species
  where no broad page covers several; consolidated 2026-09-25),
  `uvb-lighting-complete-guide.mdx` runs 7 (the fat-tailed gecko zone is not in
  Baines 2016). Before adding a source to any of these, check whether one
  already cited states the claim.
  Prefer peer-reviewed papers with DOI, then .gov agencies, then museums and
  universities, then established science journalism. Name the actual paper
  title and credit the authors, not just the journal.
- "No source found, claim removed" is a good outcome. A fabricated citation is
  the worst outcome because it survives review.
- Every superlative gets verified. Mechanisms must match claims, species-specific
  traits get scoped, figures must be current. Arithmetic-check the title,
  excerpt, and meta description last and deliberately, they are the most shared.

### The source goes in the block, not the sentence

This site is where a keeper gets the answer, not a survey of where the answer
lives. The `<Sources>` block exists so a reader can verify a figure. The body
exists to state it.

- Give the number, not the provenance. "Dark leafy greens run 80 to 90% of the
  diet", not "VCA gives 80 to 90% while LafeberVet says the majority."
- Never make disagreement between sources the subject of a section or a heading.
  When published guidance splits, state the range in one line, say which end to
  use and why, then move on. A reader following the recommendation should never
  have to arbitrate between two vets.
- Cut the sentences that narrate the research: "both bounds are worth knowing",
  "the honest reading is", "the sources are thinner here", "the gap is worth
  seeing", "this is the part most care sheets skip". They show the working, and
  they push the actual instruction further down the page.
- Name a source in the body only when the name is the fact: a legal citation, a
  named study whose authors carry the claim, or a manufacturer's spec for its
  own product. One more exception: when two or three veterinary manuals each
  contribute a different part of one symptom list, or when the spread between
  sources is itself the instruction (adult size, lifespan), naming them inline
  is allowed. The quaker parakeet health guide and the Argentine tegu handling
  guide are the reference. Everywhere else the rule above stands.
- De-attributing is not de-quoting. Stripping a source name from around wording
  that is still the source's wording leaves an unmarked lift. Rewrite the claim
  in your own words instead.
- The models for how this should read are `bearded-dragon-feeding-guide.mdx` and
  `goldfish-feeding-guide.mdx`.

### Sources are for facts, not prices

A `<Sources>` entry is a vet, university, government, manufacturer spec, or
established husbandry reference. Never a retailer product page or a
for-sale listing. When a cost guide quotes retail prices, put one plain
line under the last cost table, no links: "Prices last checked <Month
Year> at <retailer names>. Retail prices move; treat the table as a
snapshot, not a quote."

## Linking: everything to and from somewhere

- Every article carries 1 to 2+ in-body internal links, written by hand. That
  is a floor, not a target: with this many guides on the site, an article
  links wherever another page is the real answer to something it raised.
  The build gates on the floor, but the check is a net, not the author.
- A link rides inside a sentence that says something. No "see our", "check
  out our", "read our", "head over to our": the sentence names what the
  other page settles and links it there ("the same impaction risk the
  [leopard gecko](/blog/leopard-gecko-health-issues-guide/) faces on loose
  substrate"). An article never ends on a link library: no closing
  paragraph that exists to hand the reader three other guides. The last
  paragraph is content, and if it links, it links the one page that
  follows from the point it makes. The bearded dragon guides are the
  reference. Decided 2026-09-14.
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

- The first-week card is capped at 18 rows and 500 words, enforced by
  scripts/check-hub-rows.mjs. That is the top of the range the five template
  hubs sit in (rabbit 15 rows/321 words, goldfish 14/456, axolotl 16/423,
  leopard gecko 17/424, bearded dragon 18/388), and the templates have never
  moved. Rows are combined, never accumulated: two rows from the same deep dive
  answering the same first-week question are one row with a broader label, and
  anything that is not a decision a keeper makes in week one belongs in the deep
  dive the route line already points at. A reader gap or a check finding is not a
  reason to add a row; it is a reason to fix the deep dive. Decided 2026-09-15,
  after hubs drifted from 13 rows and 340 words in batch A to 32 rows and 1,300
  words in batch P with nothing in the process pushing back.
- Rows are rewritten, never glued together. The first pass at the cap reached
  it by concatenating neighboring rows, which left a dozen rows whose kept
  sentence had lost its subject to a dropped one (the degu pellet cap attached
  to unlimited hay) and passed every check. So each row is written fresh as a
  standalone sentence or two, and check-hub-rows also fails any row over 62
  words, the longest template row. Ten words of slack on either word cap, only
  when a figure will not fit otherwise. The first hub of any batch is compared
  against bearded dragon before the rest are built. Decided 2026-09-16, after
  the router review (archive/docs-completed/HUB_ROUTER_REVIEWS.md); all 84 hubs were rebuilt
  from the pre-trim rows that day.
- Figures are copied exactly, prose may be compressed. Every number, unit and
  hedge in a hub row reads as the deep dive states it: 110 to 120F stays 110 to
  120F, "most rooms" does not become "any room", and a range does not become its
  midpoint. The sentence around the figure can be shorter than the article's,
  because a card is not the article in a different font. Enforced by
  scripts/check-hub-figures.mjs, which fails the build when a row states a number
  the article it cites does not carry. Decided 2026-09-16: the five template hubs
  have always compressed their sources, the word-for-word rule was invented by a
  later batch and then enforced on itself, and it is a large part of why rows
  grew until they had to be capped.
- A reconciled hub (`layout: "router"` in src/lib/data/guides/*.js) carries:
  a first-week card of numbers, each taken from the deep dive named in its
  `source` and linked to it; an emergency card carrying the health guide's
  signs, with a `heading` set per hub (fish and invertebrate cards open with
  what to check first, since their cost guides say no vet will see them; the
  page falls back to "Call the vet now" when no heading is set) and an optional
  `soon` list only where the health guide itself sorts its signs into
  immediate and prompt, never a split the hub invents on a flat list; one
  routing sentence per deep
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
