# GSC Keyword Analysis — 2026-08-10 export

Source: `gsc-keywords-2026-08-10.csv` (165 keyword rows, real Google Search
Console data — actual queries the live site already gets impressions for,
mapped to the ranking URL and average position). This is a different kind of
signal from `content-opportunities.md`, which was synthesized from Google
Autocomplete suggestions (speculative demand, no real ranking data). This
file is what Google is *actually* showing the site for, today.

Every row in this export has **0 clicks** and mostly 1-3 impressions —
expected for a single short snapshot window on a young site, so don't read
CTR into it. The signal that matters here is: (a) which pages already have a
real, indexed foothold for a topic, and (b) how weak or strong their
position is for queries that are an exact intent match.

---

## 1) Cross-check against `content-opportunities.md`

Of the 8 top priorities and other items listed there, **almost none show up
in this real-query data** — expected, since those are mostly unanswered
gaps (cost guides, legal-location pages, myth-busts) that don't exist as
content yet, so Google has nothing to show impressions for. Two partial
exceptions:

- **Giant African Millipede** (content-opportunities.md priority #2: cost
  guide + legality + poison-nuance gaps). The care guide that *does* exist
  (`/guides/millipede/`) is corroborated here with a real cluster —
  `giant african millipede care`, `millipede care`, `millipede care guide`,
  `millipede habitat`, `how to care for millipedes` (positions 53-78,
  page 5-8). The cost/legal angles from the autocomplete data are still
  unanswered and don't appear here (no page exists for Google to rank).
- **Budgie/Cockatiel naming-confusion cluster** (priority #4 territory,
  adjacent species): `parakeet vs cockatiel` (position **5**, the single
  best position in this whole export) and `cockatiel vs budgie` (3
  impressions, position 50) both point at
  `/blog/budgie-vs-cockatiel-guide/` — real, live confirmation that
  comparison guides for confused bird names pull search traffic once they
  exist.

Everything else in content-opportunities.md (Tegu, Ferret naming/legal,
legal-location batch, Sulcata, African Grey cost, Ackie Monitor,
Leaf-Tailed Gecko cost) has **zero rows here** — not a contradiction, just
confirms those are genuine content gaps rather than existing-but-weak pages.

## 2) New signal not in `content-opportunities.md`: African Fat-Tailed Gecko

The strongest topical cluster in this export that isn't mentioned anywhere
in the prior research: `fat tailed gecko` (7 impressions, position 68.71),
`fat tail gecko` (5 impressions, position 73.20), plus `african fat tail
gecko`, `aft gecko`, `african fat-tailed gecko care`, `fat tail gecko
lifespan`, `african fat tailed gecko pet`, `geckos with big tails` — 9
distinct queries all landing on `/guides/african-fat-tail/`, all clustered
in the page 5-8 range (47-82). Real, consistent demand for a page that
already exists but isn't ranking well. **Action:** this guide is the best
candidate in this dataset for an on-page strengthening pass (expand
thin sections, add the missing "lifespan"/"pet suitability" angles the
queries are asking for directly, check internal links pointing to it) —
higher ROI than new content since the demand and the page both already
exist, it just needs to rank higher.

## 3) Pattern: exact-intent listicle pages ranking weak (page 6-9)

The "10 Surprising X Facts" posts show a recurring shape: query and page
title are a near-exact match, yet position is consistently 55-89:

| Post | Best query (impr.) | Position |
|---|---|---|
| `10-surprising-ball-python-facts` | `ball python facts` (11) | 66.45 |
| `10-surprising-praying-mantis-facts` | `praying mantis facts` (6) | 88.17 |
| `10-surprising-tarantula-facts` | `tarantula facts` (2) | 65.00 |
| `10-surprising-cockatoo-facts` | `cockatoo facts` (4) | 58.00 |

Each also picks up several near-duplicate long-tail phrasings ("fun facts
about X", "interesting facts about X", "facts about a X", even typo
variants like `tranchula facts`, `playapus`) — real query breadth, but the
canonical page never gets past page 6. Since intent match is already
perfect, this reads as an on-page/authority gap rather than a targeting
gap: worth checking word count, structured data (FAQ/Article schema),
and internal links into these four posts specifically, as a batch.

## 4) Encyclopedia entries ranking weak for direct info queries

`/encyclopedia/animal/corn-snake/` picks up `corn snake information`,
`corn snake characteristics`, `corn snake range`, `corn snake info`,
`what are corn snakes`, `where do corn snakes live in the wild`, `why are
they called corn snakes` (positions 55-89). `/encyclopedia/animal/betta-fish/`
and `/encyclopedia/animal/bearded-dragon/` show the same shape at similar
positions. These are the site's reference/fact-sheet pages competing
against Wikipedia-tier authority for generic "what is X" queries — lower
priority than #2/#3 above since these pages are inherently harder to rank
well regardless of on-page work, but worth a look if there's easy
depth to add (e.g. "why are they called corn snakes" has no obvious
existing answer on that page).

## 5) Confirmed-healthy clusters (no action needed)

These already have multi-query clusters landing on the right page at
reasonable positions — don't spend effort here:

- `leopard-gecko-vs-crested-gecko-guide` — 15+ query variants (typos,
  word-order swaps, "or" vs "vs"), best position **6**.
- `ball-python-vs-corn-snake-guide` — 8 variants including reversed
  phrasing (`corn python`, `python corn`), positions 17-45. The
  `corn python`/`python cor`n rows suggest a one-line FAQ clarifying corn
  snakes aren't a python species could be a cheap add, but the page is
  already ranking fine for the core comparison.
- `hamster-vs-guinea-pig-guide`, `bearded-dragon-vs-leopard-gecko-guide`,
  `betta-fish-water-parameters-guide`, `cockatoo-screaming-feather-plucking-explained`,
  `ferret-adrenal-disease-guide`, `guinea-pig-scurvy-vitamin-c-guide`,
  `snake-brumation-guide`, `chameleon-hydration-drippers-misters-fogging`,
  `cat-hairball-vs-vomiting-guide` — each has a small real cluster (2-6
  variants) at positions in the 30s-60s. Normal for their age; no
  standout gap.

## 6) Minor / low-priority flags

- **`what calico critter are you`** (`/quiz/personality/`, position 32) —
  almost certainly a brand collision with the "Calico Critters" toy line,
  same false-positive pattern content-opportunities.md flagged for Persian/
  Canary/Oscar/Goldfish in the autocomplete data. Not a targeting
  opportunity, just noise — confirms that pattern is real, not a keyword-tool
  artifact, since it shows up in actual Search Console impressions too.
- **Platypus post URL** — this export lists the ranking URL as
  `https://beastlyfacts.com/blog/?post=the-platypus-natures-most-wonderfully-bizarre-mammal`
  (legacy query-string format) rather than the canonical
  `/blog/the-platypus-natures-most-wonderfully-bizarre-mammal/`. Checked
  `src/pages/Blog.jsx:497` — the page does set the correct canonical tag,
  so this isn't a live bug, just Google occasionally surfacing/crawling the
  old URL shape. Not worth code changes; flagging only in case it recurs
  in a future export.
- **`nyctotherus`** (`/glossary/`, position 63, 1 impression) — a single
  obscure term with no clear content angle; ignore.

---

*Cross-referenced against `content-opportunities.md` (autocomplete-based
research) and the current guide/blog/encyclopedia content as of this
export's date.*
