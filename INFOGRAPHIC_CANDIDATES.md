# Infographic Candidates

Articles picked for having real, sourced numbers or a clear sequence, not just prose that could be illustrated. Ranked by how naturally the content already breaks into panels/data points versus how much would need to be invented to fill a canvas.

**Progress as of 2026-08-08:** #1 (cat) and #2 (mantis shrimp) generated clean on the first real Grok Imagine 2.0 attempt (earlier attempts were accidentally on 1.5, which could not land the chart's peak position after 3 tries; 2.0 got it right first try). #3 (giraffe) generated clean, one cosmetic trailing-comma typo left unfixed by request. #4 (UVB zones) generated with fully correct data but a proportional-width issue on the scale bar, see note below, parked. #5-7 not yet generated.

**Bonus, not one of the 7 below:** a bearded dragon reptile-enclosure reference chart (not an article infographic, a standalone specs chart) was also generated, 3 layout variants tested, all with fully correct data and the same recurring trailing-comma cosmetic issue seen on #3. The numbered 7-card grid layout was the keeper, picked for being scannable by icon/shape rather than read top-to-bottom.

## 1. Cats Always Land on Their Feet, Not Unhurt
`/blog/cats-always-land-on-their-feet-not-always-unhurt/`

Two infographics in one article:
- A 4-step sequence diagram: vestibular sense triggers -> head rotates level -> front half twists (loose clavicle) -> back half follows -> legs extend. Genuinely sequential, genuinely physical, easy to panel.
- A data curve: injury severity rising from the 2nd to 7th floor, then dropping past that (the counterintuitive finding from the 1987 Whitney & Mehlhaff JAVMA study). A real chart, not a decorative one.

**Top pick for the detailed prompt below** - richest mix of sequence + real data of anything on the list.

**Status: done.** Sequence + line chart generated together, peak correctly on floor 7, endpoint correctly above zero, citation rendered cleanly.

## 2. Mantis Shrimp: Vision & Punch Power
`/blog/mantis-shrimp-16-color-vision-punch-power/`

Clean numeric comparison: humans have 3 photoreceptor types, mantis shrimp have 16. Pairs naturally with the punch-speed stat. A side-by-side "3 vs 16" panel plus a punch-force callout is close to a finished layout already.

**Status: done.** Every number exact (16 vs 3, 23 m/s, 1,500 N, 150 kg), nothing invented.

## 3. The Giraffe Heart Myth
`/blog/giraffe-heart-myth-what-the-research-shows/`

Textbook myth-vs-reality infographic: the commonly repeated 25 lb heart claim next to the measured ~11 lb reality, with blood pressure (roughly 2x human) as the actual standout adaptation. The "the wrong stat is memorable, the real one is stranger" framing does the work for you.

**Status: done.** Every number exact (25 lbs, 11 lbs, 224 mmHg, 90 mmHg, 0.59 ml/kg, 2 meters), bar chart proportionally accurate. One cosmetic trailing-comma typo left unfixed by request.

## 4. UVB Lighting: The Ferguson Zones
`/blog/uvb-lighting-complete-guide/`

**Status: generated 2026-08-08, on hold.** The one genuinely reference-style candidate - a Ferguson Zone 1-4 chart (UVI target ranges by zone, which species/setups fall into each) is exactly the kind of thing a reader bookmarks or screenshots rather than reads once. Worth treating as a standalone reference graphic, not just an in-article illustration.

**Known issue, parked, not fixed:** every number and species name on the generated version is exactly correct (Zone 1 0.6-1.4, Zone 3 1.1-3.0, Zone 4 2.9-7.4+, Zone 2 correctly left without an invented numeric range), but the four colored zone segments on the 0-8 scale bar are evenly quartered rather than sized proportionally to their real numeric width. Zone 4 alone spans 2.9 to 7.4+, nearly half the total scale, but occupies the same visual width as Zone 1's narrow 0.6-1.4 sliver. Text is trustworthy, the bar's width-as-magnitude encoding is not. Left as-is since the text carries the real information for a quick reference chart; revisit with an explicit "segment width must be proportional to its numeric range, Zone 4 should occupy roughly half the bar" instruction if this needs to be visually honest rather than just textually accurate.

## 5. Two Pets Where You're Really Buying a Pair (Degu vs Gerbil)
`/blog/degu-gerbil-overview/`

Direct side-by-side species comparison: housing type (tall/climbing vs deep-digging), social structure, activity pattern, defining health risk (diabetes vs Tyzzer's disease). Comparison-table content that's already structured, just needs a visual treatment.

**Status: done.** Two-column comparison table, all 6 rows exactly correct, row alignment held cleanly across 3 layout variants tested (the actual risk with this format). Kept the version using one shared icon per row rather than a different icon per column, and mouse-silhouette icons in the header bars.

## 6. Why Wombat Droppings Are Cube Shaped
`/blog/why-wombats-produce-cube-shaped-droppings/`

Mechanism diagram rather than a data chart: cross-section style visual showing the intestinal wall elasticity variation that shapes the droppings, contrasted with the "square sphincter" myth it corrects. More illustrative than numeric, but the mechanism is genuinely visual, not just descriptive.

**Status: done, the strongest result of the whole set.** This was the hardest test so far, a real cause-and-effect mechanism diagram (2 stiff bands producing 4 corners, 2 pushed directly + 2 dragged by lag) rather than a stat block or comparison table, and all 3 variants drew the actual mechanism correctly rather than falling back to a generic square. Water content table (0.81/0.53/0.74) and all callout numbers exact across all 3. Kept the version with textured intestine-wall rendering and proper leader-line labels connecting text to the diagram.

## 7. Seahorse Male Pregnancy: How It Actually Works
`/blog/seahorse-male-pregnancy-how-it-works/`

Process diagram: eggs transferred to the male's pouch, pouch develops placenta-like structure, immune suppression prevents rejection, live birth. A real biological sequence, same shape as the cat righting-reflex piece but slower and less kinetic.

**Status: done, clean on the first attempt.** Combined a 4-step sequence with a 5-row comparison table in one image, both formats already proven separately. Every step, every table row, the hormonal-inversion callout, and the citation all landed exactly right, including the densest technical text of the whole set (the immune-system panel). No errors, not even a cosmetic one.

## Labeled-diagram format: tank/enclosure setups

Separate from the 7 narrative candidates above, a second track using the labeled-diagram template (central illustration + callout boxes with leader lines) applied to tank-setup guides.

**Standing rule (added after the betta/slider reskin, confirmed going forward):** every new subject in this format gets its own border style, corner motif, arrow color, and palette designed around what's actually distinctive about that animal or setup, never the previous subject's template reused unchanged. Sugar glider (cream/navy, rope and paw-print motifs) and betta/red-eared slider (aqua bubble and wave motifs) already established this by accident when the betta piece had to be redone; axolotl (icy lavender, ripple rings, cold-water framing), hermit crab (sandy tan/coral/seafoam, shell-scalloped border), and chinchilla (lilac/plum, dust-cloud-puff border) were designed this way from the first prompt. Keep doing this by default, don't wait for a mismatch to force it.

**Sugar Glider Cage Setup** (`/blog/sugar-glider-tank-setup-guide/`) — **done.** Six callouts (fleece cover, sleeping pouch, bar spacing, axle-free wheel, climbing routes, solid floor) plus a stat footer, all verified word for word against the article. Caught and fixed one own error mid-process: the footer originally mislabeled the recommended 24x24x48in size as the "(MIN.)" when the article's actual stated minimum is 30x18x36in.

**Betta Fish Tank Setup** (`/blog/betta-fish-tank-setup-guide/`) — **done.** Six callouts (secure lid, adjustable heater, hide, sponge filter, live/silk plants, surface access/leaf hammock) plus a stat footer (5 gal minimum, 78-80°F), verified against the article. Needed one revision: the first pass reused the land-mammal mint-green/leaf template unchanged, redone with an aquatic bubble/wave border and blue arrows instead.

**Red-Eared Slider Tank Setup** (`/blog/red-eared-slider-tank-setup-guide/`) — **done.** Six callouts (UVB lighting, secure lid, strong filtration, basking platform, bare bottom/large river rock, water depth) plus a stat footer (75-100 gal adult minimum, 90-95°F basking), verified against the article. Needed two revisions: same aquatic-reskin fix as the betta piece, plus a real lesson on labeled-diagram prompts specifically: naming a callout ("Secure Lid") isn't enough if the underlying illustration doesn't actually contain that feature. The first two passes labeled a lid but never drew one, so the arrow pointed at empty tank rim. Fixed by explicitly instructing the illustration to include the feature as its own visible element ("a flat mesh screen lid covering the entire top opening, clearly visible as its own distinct panel") rather than just naming it in a callout and assuming the model will invent a matching visual.

**Axolotl Tank Setup** (`/blog/axolotl-tank-setup-guide/`) — **done.** Six callouts (chiller, secure lid, low-flow filter, dim lighting, fine sand/bare bottom, hides) plus a stat footer (20 gal long minimum, 60-68°F), verified against the article. Caught one own error before generating: the draft prompt showed two axolotls in the tank, copied unchecked from the sugar glider prompt's pattern. Axolotls are solitary by default, unlike sugar gliders, and the article is explicit that a second axolotl needs a 40-gallon breeder, not the 20-gallon-long minimum being illustrated and labeled in the same image. Fixed to one axolotl before generating.

**Hermit Crab Enclosure Setup** (`/blog/hermit-crab-tank-setup-guide/`) — **done.** Six callouts (sealed lid, side-mounted heat mat, humidity/moss pit, deep substrate, two water dishes, extra shells) plus a stat footer (10 gal for 2-3 crabs, 75-85% humidity), verified against the article. Two catches: (1) the first draft omitted the "dedicated moss pit" the article names as one of three specific humidity-maintenance elements, added into both the illustration and the Humidity callout description. (2) the opposite problem from axolotl: hermit crabs are explicitly social ("keep at least two crabs together") and the first draft only showed one, corrected to two once flagged.

**Bearded Dragon Tank Setup** (`/blog/bearded-dragon-tank-setup-guide/`) — **done, after two revisions.** Six callouts (UVB lighting, basking platform, warm-side hide, cool-side hide and climbing branch, shallow water dish, safe substrate) plus a stat footer (4x2x2 ft / 120 gal adult minimum, 95-110°F basking), verified against the article. Distinct desert visual identity: terracotta mesa-silhouette border with sun-ray bursts, cactus corner motifs, warm gold/terracotta/brick-red palette. Two real fixes needed: (1) first draft mounted the UVB tube and basking lamp inside the tank hanging from the ceiling rather than on top of a mesh screen, same lesson as the red-eared slider lid, a named feature needs to be explicitly placed relative to a real structural element (the mesh top) or the model improvises. (2) second draft correctly moved both fixtures on top of the mesh but split them to opposite ends of the tank, UVB over the warm side, basking dome over the cool side, when the article and real setups require both grouped together over the same warm side. Fixed by explicitly stating both fixtures sit together on the LEFT side only, with the right side stated as having no fixtures at all.

**Chinchilla Housing** (`/blog/chinchilla-tank-setup-guide/`) — **done, after one real layout bug.** Six callouts (solid metal cage, solid exercise wheel, paper/fleece bedding, constant hay access, dust bath house, cool room temperature) plus a stat footer (24x24x36in minimum, 50-68°F), verified against the article. The first generation crossed two arrows: "Dust Bath House" pointed at the exercise wheel, and "Cool Room Temperature" pointed at the actual dust bath house, because both the wheel and the dust house sit on the same bottom shelf but the prompt's layout instructions stacked their callouts vertically as if they were at different heights. Fixed by explicitly anchoring each bottom-shelf feature to a left/right side matching where it's actually drawn ("wheel on the LEFT side of the bottom shelf," "dust house on the RIGHT side"), rather than relying on generic top-to-bottom height matching when two features share a shelf. Worth checking for on every future diagram with more than one feature at the same physical height.

## Note on generating these

AI image generators are unreliable at rendering precise text and numbers accurately, worth expecting the first pass to need real text/labels added afterward in a design tool rather than trusting generated numbers on the image itself. The prompt below is written to lean on short labels and icons rather than full sentences, for exactly that reason.

**Update after testing #1-4 on real Grok Imagine 2.0:** the above caveat turned out to be too pessimistic for discrete stat/card layouts (mantis shrimp and giraffe both landed every number exactly right first try) and for sequence panels (cat step-by-step, all labels clean). It's still true for two specific things: (1) continuous curves needed exact values pinned per point to avoid the model improvising a plausible-but-wrong shape, and even then took real iteration to land a peak on the correct axis position, and (2) proportional width/size encoding on a scale bar (Ferguson zones) isn't reliably respected even when the underlying numbers are all correct. Recurring minor issue across multiple generations: a trailing comma left on the last item in a list-style stat line, worth a manual pass rather than fighting in the prompt.

**Update after testing the labeled-diagram format (sugar glider cage, ackie monitor color forms):** this style, a central illustration with callout boxes and leader lines/arrows pointing to real features, is a strong fit for tank-setup guides and comparison articles specifically, and scales well since it's the same template per guide. Two things worth carrying forward: (1) the exact same content prompt run multiple times produces real style variation (box shape, decoration style, arrow color) even without asking for it, so it's worth generating a couple of passes and picking the best rather than expecting one deterministic result. (2) Colors, arrow style, border style, and corner rounding can all be adjusted after generation without a re-prompt, so the prompt itself doesn't need to over-specify palette, it should spend its precision on content accuracy (exact figures, correct labels, no invented details) and layout structure instead. Also confirmed again: Grok still reliably renders extra toes/digits on animal feet in these illustrated styles, a known limitation, not fixable by prompt wording so far.
