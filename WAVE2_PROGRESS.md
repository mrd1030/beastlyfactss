# Wave 2 progress (checkpoint 2026-09-24 22:46)

Wave 2 of FIX_PLAN.md is partway done. The agent brief is below the status list. FIX_PLAN.md ticks are not updated yet.

Finished and ticked in FIX_PLAN.md: R3 (tegu, bearded dragon, Jackson's chameleon, tokay, hognose) and R4 (milk snake, corn snake, ball python, blue-tongued skink, green anole, Russian tortoise).

Stopped mid-work to save credits. Their partial edits are committed, unreviewed, citations not yet verified, and none of their items are ticked:
- R1: green iguana, box turtle, crested gecko, uromastyx, fire skink (was on the fire skink health guide)
- R2: African fat-tail, kingsnake, rosy boa, red-eared slider, sulcata (was on the sulcata cost guide vet section)
- R5: ackie monitor, boa, leopard gecko, savannah monitor, veiled chameleon
- R6: mourning, gargoyle, leaf-tailed gecko, garter snake, red-footed tortoise (was on the gargoyle cost guide)
- A1: amphibians (was on the White's tree frog cost guide)
- N1: wild animals (was rewriting the parrot social interaction article)
- N2: fun facts
- N3: shared class guides, including the new reptile-salmonella-hygiene-guide "Enclosure cleaning schedule" and reptile-quarantine-guide "Choosing a healthy reptile and a reptile vet" sections, which R3 and R4 pages already link to. Finish these first.
- N4: chronicles and overviews (was relabeling the Otis garden prequel)

Also still to do before the wave closes: apply the R2 requests below, fix check-hub-figures on jacksons-chameleon, run the full check list from FIX_PLAN.md "Waves 2 and 3", and review each partial diff against e4b92b7.

## Pending hub and encyclopedia requests

### R2
# R2 requests (Reptiles: african-fat-tail, california-kingsnake, rosy-boa, red-eared-slider, sulcata-tortoise)

## 1. California kingsnake encyclopedia (FIX_PLAN [THIN] "Encyclopedia graded B")

File: src/lib/data/encyclopedia/snakes.js, entry `id: "kingsnake"`.

Reason: the s15 reader graded it B ("short but genuinely informative"). The current overview also has two problems of its own: it uses " - " as a dash (house rule), and it says kingsnakes "are immune to pit viper venom", which contradicts california-kingsnake-handling-guide ("resistance isn't universal ... varies by population"). The history field is an unsourced "one of the first snakes bred regularly" claim. The proposed text adds material that appears nowhere else in the set (activity shift with temperature, the Arizona intergrades, the jungle corn hybrid, the California permit), so the entry earns its place beyond the deep dives.

Current `overview`:
```
The California kingsnake is a non-venomous colubrid found throughout the western United States and northwestern Mexico. \"King\" snakes earned their name from their ability to kill and consume venomous rattlesnakes - they are immune to pit viper venom. Highly variable in pattern and coloration, they can mimic the banding of venomous coral snakes in some regions. Hardy and easy to care for, they are a popular beginner species.
```
Proposed `overview`:
```
The California kingsnake is a non-venomous colubrid found throughout the western United States and northwestern Mexico. \"King\" snakes earned their name from killing and eating other snakes, rattlesnakes included, and their blood serum neutralizes a good deal of pit viper venom. That resistance is strong, not total, and it varies between kingsnake species and populations. A powerful constrictor, it takes almost anything it can overpower, from rodents and lizards to eggs, birds and other snakes. It is active by day in cool weather and shifts to dawn, dusk and night when it is hot. Pattern varies from black and white bands to brown and cream, and some populations are striped instead of banded. Hardy and easy to care for, it is a popular beginner species.
```
Sources for the lead to confirm when applying (all opened by R2 on 2026-09-24): California Herps species page https://www.californiaherps.com/snakes/pages/l.californiae.html (activity, diet list, constriction); Wikipedia https://en.wikipedia.org/wiki/California_kingsnake (banded vs striped, Arizona intergrades, California sale permits); the venom sentence matches what california-kingsnake-handling-guide already says (Weinstein, DeWitt and Smith 1992, "Variability of venom-neutralizing properties of serum from snakes of the colubrid genus Lampropeltis"; R2 found it cited but did not open the paper itself).

Current `history`:
```
This was one of the first snakes bred regularly in captivity, which is why it entered the hobby with a deep catalogue of patterns and morphs while most species still had none. Ease of breeding is the reason: a hardy colubrid that takes rodents readily and tolerates a simple setup is a species a hobbyist can work with over generations. The result is that a beginner buying one today is buying the product of decades of selective breeding rather than a recently collected wild animal.
```
Proposed `history`:
```
The California kingsnake is one of the most popular pet snakes, kept for its easy care, its range of colors and its calm temperament, and almost every pet today is captive-bred. That breeding has a tangle in it. In the wild the species intergrades with the desert kingsnake and the Mexican black kingsnake in Arizona, and in captivity it has been crossed with the corn snake to make the \"jungle corn\", a hybrid of two different genera that is fertile. At home it is protected by paperwork: California sets limits on wild collection and requires a propagation permit to breed and sell the species inside the state, so a California seller should be able to name the permit.
```
Sources: Wikipedia California kingsnake (popularity, intergrades), Wikipedia Corn snake (jungle corn, fertile), Reptiles Magazine "All Hail the California Kingsnake" https://reptilesmagazine.com/all-hail-the-california-kingsnake/ (collection limits, propagation permit).

No figures change, so no hub row is affected.

## Agent brief

## Wave 2 agent brief (read fully before editing)

Repo: /home/user/beastlyfactss, branch claude/fix-plan-wave-2-reptiles-81w4hm. Other agents are editing other files in parallel.

### Read first
1. CLAUDE.md and docs/RULES.md (non-negotiable writing and sourcing rules).
2. FIX_PLAN.md: the "Waves 2 and 3" section, section 1 "How to use this plan", section 2 table of shared guides, and the FULL text of your assigned sections (items say "the row above": read the context, including already-ticked lines).

### Your job
Close every open `- [ ]` item in your assigned sections, in this order per species: [COVERED+LINKED] leftovers, [TRULY MISSING], [LOW GRADE]/[THIN], [SHORT].
- [TRULY MISSING]: web research (WebSearch/WebFetch; load them with ToolSearch "select:WebSearch,WebFetch"). Real pages you actually opened that state the claim. Prefer vets, universities, peer-reviewed papers, .gov, established husbandry references. Never retailers for facts. Never homepages. Never cite from memory. No source found = leave the claim out and say so in your report. Add new sources to the page's `<Sources>` block (4 to 5 target, justify extras in an MDX comment above <Sources>). Every source URL you add must load (curl -sIL or WebFetch it and confirm the page contains the claim).
- [THIN]/[LOW GRADE]: rewrite or trim the named repetition, add substance with sources.
- [SHORT]: expand toward about 600 body words with real, sourced, species-specific substance (not padding). If you cannot find sourced substance for a page, leave it shorter and say so. Never pad.
- Documentary voice for every species not in src/lib/data/firsthand.js. No em or en dashes anywhere (check your diff: grep for "—" and "–"). US spelling. No "see our"/"check out our". No self-reference ("on this site", "our X guide covers"). "X, not Y" at most twice per article. Give the number in the body, the source in the Sources block.
- Links: in-body links only to other species, cross-species/shared guides, encyclopedia, overviews. Never the same species' sibling guides or hub. Links ride inside a content sentence. Format /blog/<slug>/.
- Stamp `lastUpdated` with the US Eastern date (`TZ=America/New_York date +%F`) on every page where you added or corrected a fact. Link-only edits do not bump it.
- Keep split structure. Do not create new articles.

### Files you must NOT edit (report instead)
- src/lib/data/guides/*.js (hubs), src/lib/data/encyclopedia/*.js, src/lib/data/relatedArticles.js, src/lib/data/rotation.json, FIX_PLAN.md, any file outside your assigned list.
- If a hub or encyclopedia change is needed (a figure you changed that a hub row carries, a hub item named in the plan), write the exact requested edit (file, current text, new text, reason) to
  /tmp/claude-0/-home-user-beastlyfactss/4cd3ccc9-321e-559d-b3d6-1fa177f917b3/scratchpad/requests/<your-agent-name>.md
  The lead applies them.
- Do not commit or push. Do not run npm run build.

### Shared reptile sections being written right now by the shared-guides agent (link to these, do not write your own copy)
- reptile-salmonella-hygiene-guide gets a new section "## Enclosure cleaning schedule" (daily spot clean, weekly, monthly deep clean, substrate replacement, a reptile-safe disinfectant and contact time). Species pages that need a "cleaning cadence" item: add ONE species-specific sentence (anything species-specific, like a bioactive note or a water dish interval) that links /blog/reptile-salmonella-hygiene-guide/ in-body, then tick.
- reptile-quarantine-guide gets a new section "## Choosing a healthy reptile and a reptile vet" (breeder vs store vs rescue, health checks before buying, how to find and vet an ARAV/herp vet). Species items about "vetting a breeder", "where to buy", "finding a vet": one species-specific sentence or short paragraph (for example a species-specific fraud or wild-caught risk you can source) with an in-body link to /blog/reptile-quarantine-guide/.
- Sexing stays species-specific on each species page (research it per species).

### Checks before you report
- node scripts/check-voice.mjs --slug <slug> for every page you touched (0 errors; warnings reviewed).
- node scripts/check-internal-links.mjs (must pass for your pages).
- node scripts/check-species-numbers.mjs <species-id> for each species; resolve conflicts you introduced.
- grep your diff for — and –.

### Report (your final message, concise)
- Per item: done / partly done / not done, with one line why.
- Every new source URL added, with the page it went on, and confirmation it loaded.
- Any hub/encyclopedia requests written.
- Word counts before/after for SHORT pages.
