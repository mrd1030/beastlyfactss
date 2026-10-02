# Cockatoo v2 notes

Written during the 1.0 build (September 2026), the fourth bird package on the t3 template
and the first **large** parrot in the series. Read this before starting v2, along with the
**Cockatoo 1.0** block under **Site content gaps by package** in `../TEMPLATE_GUIDE.md`,
and read `cockatiel-v2-notes.md` alongside it, since the two were built together.

## What 1.0 is

44 pages, guide version 1.0, template t3, built from fragments plus a build script in
`../source/cockatoo-src/`, over five page files. There is no earlier edition.

## Page count: 44, and the bird row needs a second number

The template guide's bird row says 36 to 39 for a small parrot. **That figure does not
apply to a large cockatoo, and it should not be stretched to.** This came in at 44 and the
extra pages are not padding; every one of them answers a question a small-parrot package
never has to.

What a large cockatoo needs that a lovebird, budgie or cockatiel does not:

| Page | Why it exists |
|---|---|
| 5, the decision test | Cockatoos are among the most surrendered parrots there are, and no other species in this series has a documented pattern of the buyer being the problem. It is the strongest page in the book |
| 6, which cockatoo | "Cockatoo" covers birds differing threefold in weight and tenfold in price. This is the species-choice page both mammal builds needed, and here it is unavoidable |
| 10, feather dust and your own lungs | Powder down at this scale is a household problem and a human health problem. Bird fancier's lung has no equivalent anywhere else in the series |
| 16, training | The only page in this series built on a species-specific treatment trial. It earns its place on the evidence alone |
| 18, over-bonding and independence | The defining failure mode, created in the first three weeks by owners doing what feels loving |
| 19, screaming | Normal, permanent, and a housing decision. A small parrot's noise page is a paragraph |
| 30, legal | CITES Appendix I and the Maine carve-out are real for three commonly kept species. The tarantula package set the precedent for a legal page |
| 31, succession | A 30 to 45 year animal, up to 70 in Moluccans. Nothing else in the series may outlive its owner |

**Take 42 to 45 for a large cockatoo, and treat 36 to 39 as the small-parrot band only.**

The contents page also has to be **two-column** past about 38 entries. At 44 it overflowed
by 111 px in one column and cleared with 371 px free in two.

And the sources need two pages at the back, the same finding the cockatiel build produced:
one for the source table, one for the source-drift table plus version history and colophon.

## Head CSS: one step tighter again

The cockatiel head was already a large step tighter than the budgie's, and that pass took
this guide from 12 overflowing pages to 9. A further pass on top of it cleared seven of the
nine:

| Rule | Cockatiel 1.0 | Cockatoo 1.0 |
|---|---|---|
| `.callout` | 7/11pt, margin 6pt | **6.5/10.5pt, margin 5pt** |
| `h2.h` margins | 7.5 / 2.5 | 6.5 / 2 |
| `.check-item` margin-bottom | 3.2pt | 2.8pt |
| `table` margin-top | 5pt | 4.5pt |
| `.section-sub` margin-bottom | 6.5pt | 5.5pt |
| `table.dense td` | 2.2pt / 1.26 | 2.0pt / 1.24 |
| `.toc` | single column | **`column-count:2`** |

This is now the tightest head in the series and it is still comfortably readable at print
size. It is the head to copy forward. Do not loosen it, and do not start a new package from
`_template.html`.

## Two layout moves that were worth more than any trim

Worth stating separately because both are reusable and neither costs content:

- **Two-column check-item blocks.** The First 30 Days page overflowed by 42 px with five
  single-column week sections. Splitting each week into two columns cleared it with 16 px
  to spare and reads better. Any page that is mostly `check-item` rows should be
  two-column by default.
- **Two-column fill blocks.** The same trick on the succession plan's six fill lines took
  page 31 from 8 px to 84 px free.

## Free space per page, final measurement

```
p2=371  p3=240  p4=108  p5=16  p6=101  p7=152  p8=73  p9=232  p10=122  p11=40  p12=93
p13=185  p14=213  p15=94  p16=29  p17=27  p18=106  p19=150  p20=161  p21=66  p22=76
p23=87  p24=40  p25=141  p26=141  p27=42  p28=156  p29=37  p30=105  p31=84  p32=210
p33=137  p34=35  p35=16  p36=39  p37=73  p38=108  p39=115  p40=215  p41=138  p42=142
p43=99  p44=306
```

The tight ones, which will overflow first if anything is added: 5 (the decision test, 16),
35 (first 30 days, 16), 17 (handling and bites, 27), 16 (training, 29), 34 (budget, 35).
Real headroom: 2 (contents, 371), 44 (about, 306), 9 (light and sleep, 232), 40 (owner log,
215), 14 (nuts, 213), 32 (checklist, 210).

## Parked blocks

Nothing was removed from the package. Fourteen blocks were tightened rather than dropped,
and three are worth keeping the original wording for, because the longer version says
slightly more.

### Page 31, the succession review row, removed entirely

The only genuine deletion. It is covered by the seasonal routine on page 37, but it was
better here:

```html
    <tr><td><strong>A review every few years</strong></td><td>People move, die and change their minds across four decades. A plan made once at year one and never revisited is a plan that has quietly expired</td></tr>
```

### Page 21, the sexing callout before it became a paragraph

```html
  <div class="callout info">
    <span class="label">Why you need to know</span>
    Because a hen can lay without a mate, and because chronic laying is a serious, expensive and preventable problem. An owner who assumes their bird is a cock is an owner who does not recognise a laying cycle starting. Page {{P:eggs}}.
  </div>
```

### Page 11, the bite-risk paragraph before it was shortened

```html
  <p>A large cockatoo can inflict a bite that needs stitches, and it can destroy structural woodwork, a laptop, a window frame or a set of blinds in the time it takes to answer the door. Bird-proofing a room for this species means protecting the room from the bird as much as the bird from the room. Page {{P:handling}} covers bites and the sexual-maturity change that catches owners out.</p>
```

## Ideas raised and never drafted

In rough priority order. Each needs sourcing before it goes on a page.

1. **A noise page with actual numbers.** Page 19 handles screaming honestly but prints no
   measured figure, because none was found in a source worth citing. A sound-pressure
   figure for a Moluccan or umbrella scream, from a citable acoustic or veterinary source,
   would make the housing decision on page 5 concrete rather than adjectival. This is the
   single biggest hole in the package.
2. **Introducing a cockatoo to a household with children.** Bite risk at sexual maturity
   plus a bird that bonds to one adult is a specific and common problem, and the package
   only touches it in one row on page 5.
3. **Working with a rescue cockatoo**, as its own page. An adult bird with a plucking
   history, an existing bond to someone else, and unknown handling is a different starting
   position from a weaned baby, and page 6 recommends adoption without teaching it.
4. **Grooming, restraint and towelling**, taught with rewards. Page 16 lists towel
   acceptance as a behaviour to train and nothing teaches it. On a bird that can take a
   stitch-requiring bite this matters more than it does in any small-parrot package.
5. **Foot and beak care, and what an overgrown beak actually means.** Currently one row on
   page 27.
6. **A page on what a day genuinely looks like**, hour by hour, for a working household
   keeping a cockatoo. Page 37 is a checklist; this would be a worked example, and it would
   make page 5 much harder to answer dishonestly.
7. **Nutritional detail on chop recipes and portion weights**, which page 13 gestures at.

## Proposed gaps, carried from the build

Also in the gap log in `TEMPLATE_GUIDE.md`. Repeated here because they drive the next
edition of the PDF as well as site articles, and they still need sourcing before either use.

- **Feather dust, air quality and bird fancier's lung.** Nothing on the site, and it is the
  page a cockatoo buyer most needs before purchase rather than after.
- **Succession and estate planning for a long-lived parrot.** Cross-species for every large
  parrot and the tortoises too, and the site has nothing.
- **Training as the primary intervention**, with the sulphur-crested study as the spine.
- **Iris sexing in white cockatoos, and DNA sexing as the answer.**
- Plus the cross-species bird rows the lovebird and budgie blocks already opened.

## Cut list for v2, in priority order

If v2 has to lose pages, in this order:

1. **Page 20, wing clipping.** Only if the site publishes a clipping article and this can
   become a half-page pointer. Same position it holds in every bird package.
2. **Page 14, nuts and treats**, folded into page 13. The never-feed list has to survive
   intact; the nut portioning can compress.
3. **Page 28, droppings**, compressed to a half page if a cross-species bird droppings
   article ever ships.
4. **Page 44, where the sources disagree**, folded back into 43 at 8pt.

**Do not cut, in any version:**

- **Page 5, the decision test.** It is the most valuable page in the book and the only one
  in this series written to change a reader's mind. Every surrendered cockatoo is a copy of
  this page that nobody read.
- **Page 6, which cockatoo.** The price, noise, cage and lifespan all hang off it.
- **Page 10, feather dust.** A human health page with no equivalent elsewhere in the series.
- **Page 16, training.** The one evidence-backed intervention this species has.
- **Page 18, over-bonding.** The failure mode, and it is created in weeks one to three.
- **Page 31, succession.** The bird may outlive the buyer. Nothing else here is that.
- **The fillable pages, 39 to 41.**

## One process note for the next large-parrot package

The cockatiel package was built in the same session and the two share nine cross-species
bird pages in shape and almost nothing in figures. **Nothing transferred except the diet
split and the photoperiod**, and both of those genuinely are the same figure from the same
source. The cage size, bar spacing, perch diameter, weight, lifespan, sexual maturity,
heart and respiratory rate, bite risk, noise, cost and the whole behavioural section are
different animals, and the temptation to carry a number across was strongest exactly where
it would have been most wrong. Build a large parrot from the large-parrot sources, and use
the small-parrot package only for page shape.

---

## 1.1 corrections pass, 4 September 2026

Cross-check of the whole package against the bird articles published since this
edition: the fifteen in commit `42fd86f` plus the five cross-species bird guides
that landed the day before it. Guide version 1.0 to 1.1, template still t3,
44 pages to 45.

### The one that mattered most

**Page 31 called a rehomed bird's withdrawal grief.** The line read: "A rehomed
cockatoo commonly screams and refuses food and handling for weeks. That is grief,
not a character flaw." `rehomed-parrot-guide` refuses that attribution
deliberately, and for a reason worth reading twice: the Merck Veterinary Manual
lists a bird **not vocalizing in the morning** and showing **decreased
interaction with family members** as changes that "should be considered potential
signs of illness." A bird that goes quiet and off its food after a move is
showing the exact pattern an avian vet wants to see, and telling the new owner it
is grief is telling them to wait it out. The page now describes what the bird
does rather than what it feels, routes it to a vet check first, and carries VCA's
first-exam window of 1 to 2 weeks after acquiring any bird.

### The other errors

- **Page 27, blood feather.** "Gentle pressure with gauze and cornstarch; if it does not stop in a few minutes the feather must be pulled." Corrected to firm steady pressure, powder on the exposed broken tip and never into an open follicle, a vet at two to three minutes, and VCA's actual position that pulling one at home is not recommended and is a last resort even in clinic.
- **Page 21, weighing.** Weekly, against Lafeber's daily before the first feed. The page already said to weigh daily for the first fortnight, so it contradicted itself. Now daily throughout, citing Orosz.
- **Page 29, quarantine.** The 45 to 60 day multi-bird figure was invented. Replaced with Merck's 90 days with testing.
- **Page 43, the bird fancier's lung source line** cited "case reports in psittacine keepers." The case report actually behind that material, Kila et al. in *Cureus* (2025), documents a **pigeon** keeper. The line now says so, and credits the NHLBI as what generalizes the risk to pet birds in the home.
- **Page 16, training session length.** A flat "ten to fifteen minutes, twice a day" where VCA describes a ramp: five to ten minutes, once or twice a day, working up to two twenty-minute sessions once the bird is engaged. Now printed as the ramp.
- **Page 44's unsourced list was stale.** It named seven things the site had no article for. Six of them now have one. Rewritten to say what is genuinely still PDF-only: the itemized budget, the weights and weaning ages by species, and the noise figure this book deliberately does not print.

### The noise row, deliberately still open

`choosing-a-pet-bird-guide` went looking for a measured sound-pressure figure for
a large parrot and reported that it could not find one from an acoustic or
veterinary source worth citing, and that the decibel numbers circulating online
trace back to nothing. That is the same conclusion page 19 reached during the
original build. **No figure was added**, and the row stays open in the gap log.
The article's finding is worth more than a number would have been: it means the
absence is real rather than a gap in this book's research.

### Added

- **Page 6**, the hand-raised against parent-raised tradeoff from Schmid, Doherr and Steiger (2006), which is the one thing this package's own source page said the site named and then stopped at.
- **Page 10**, the NHLBI's point that pet birds in the home are a risk factor in their own right rather than only occupational exposure, and that most diagnoses fall between 50 and 70.
- **Page 21**, LafeberVet's pale grey juvenile iris, which is the reason the sexing cue fails in a young bird, and the Sakas citation replaced with LafeberVet's cockatoo sheet, a stronger source that carries the same claim.
- **Page 31**, that companion animals are legally property and so cannot inherit directly, and that as of 2026 all 50 states and DC have pet trust laws, from the Michigan State Animal Legal & Historical Center.
- Page 9: Merck's over-12-hour photoperiod threshold and LafeberVet's 8 to 10 hour range. Page 11: lead's sweet taste and electroplated against hot-dipped zinc. Page 20: Merck's four to seven outermost primaries with secondaries untouched. Page 22: VCA's 48-hour egg marker. Page 24: Merck's partial second molt. Page 28: polyuria as the first sign of zinc kidney damage, and whole seed cross-referenced to avian gastric yeast. Page 38: the CDC's 20 feet for a generator and a carbon monoxide detector. Page 45: VCA's 25 to 45 years with the larger species at 70 to 80-plus, added to the life span disagreement.

### Fitting it: 44 pages to 45

Four pages went over. The head CSS on this file is the tightest in the series and
there was nothing left to reclaim there, so this was a content and layout problem
rather than a typography one.

The sources page overflowed by 271 px even after condensing rows, and it already
had a companion page, so **the back matter went to three: page 43 Sources, page 44
Sources Continued, and page 45 Where the Sources Disagree**. That pushed exactly
one existing page number, the old 44 to 45, which the contents, the badge, the
colophon and both in-text cross references were updated for. 45 sits inside the
42-to-45 band the class table gives a large parrot.

The hand-raising note took three attempts to place. As a callout it was 131 px and
overflowed page 6; moved to page 18, which it references, it overflowed there too,
because what sets that page's floor is a table rather than prose. Rewritten as a
plain paragraph on page 6, next to the rescue-against-breeder table where a buyer
is actually making the decision, it fits and reads better than the callout did.

Final measurement: all 45 pages clear, minimum 15 px free.

### The warming figure, caught on review

The 1.1 pass was supposed to put the same sick-bird warming wording on all four
packages. It went onto Lovebird, Budgie and Cockatiel and was **missed here
entirely**, which review caught. This package had no owner-facing warming figure
anywhere: page 22 named supplemental heat only inside the vet's treatment
sequence, page 27 had a controllable heat source in the kit list with no target,
and the page 33 card had a room-temperature row but no sick-bird row. So the one
package whose bird is large enough for a long drive in a carrier never said what
temperature to hold it at.

Added at **page 22**, owner-facing, matching the other three packages' egg pages:
80 to 85 F (27 to 29 C) in a dark quiet carrier, inside LafeberVet's 80 to 90 F
range under supplemental heat with VCA's 75 to 80 F for a recovering bird, plus
the overheating signs and a do-not-massage line. Added at **page 33** as a card
row, so the figure now reads the same on the care page and the emergency card,
which is what the rule asks for. Page 27 was left pointing at neither: it lists a
controllable heat source and the two pages above carry the number, and a third
copy cost more space than it earned.

While fitting it, the cat-bite row on page 27 turned out to still say bacteria
"kill birds within about 48 hours". That correction had gone onto Budgie and
Cockatiel and was missed here too. It now reads <em>Pasteurella</em> turning
septic within hours, matching the other three.

Re-measured and re-rendered over the same 1.1 file. All 45 pages clear, minimum
15 px.

### Still only in this PDF

The over-bonding row stays open: `parrot-training-guide` supports the rotation
half through VCA, but nothing covers the prevention protocol, and the gap log
still points at expanding `cockatoo-screaming-feather-plucking-explained.mdx`
rather than opening a new URL. The weaning window of 90 to 150 days on page 6, the
weights by species on pages 4 and 6, and the itemized budget on page 34 also have
no article behind them.

---

## Cut in 1.2

The October 2026 pass cross-checked every figure against the site again and moved the
package to whatever the site's guides now print. Nothing below was deleted outright: the
first group was withdrawn because the site corrected away from it, the second was tightened
for space. Original wording from the 1.1 file (with the September legal edition) follows.

### Withdrawn because the site no longer supports it

**Page 16, the training study callout and its framing.** `cockatoo-enrichment-guide` now says
the 2014 sulphur-crested study's full text is not openly available and declines to repeat
the claim that training outperformed the other treatments. The page now cites the study
design only, plus the van Zeeland (2009) review, which lists training, environmental and
foraging enrichment together without ranking them. The cover blurb, the contents title and
pages 3, 5 and 24 lost the same claim.

```html
    <span class="label">What the study found</span>
    An assessment and treatment programme for feather plucking in <strong>sulphur-crested cockatoos</strong> compared medication, socialization, training sessions and feeding enrichment, and checked the results against behavioural observation, feather condition scoring and corticosterone levels. <strong>Training sessions were the most successful treatment.</strong> The authors attributed that to the social attention and mental stimulation the sessions provided, rather than to anything about the specific behaviours being taught.
  <p style="margin-top:5pt;">That is not a result about tricks. It says the most effective intervention available for the signature problem of this species is <strong>structured time you personally spend with the bird</strong>, which is exactly the thing most owners have least of and no product can replace. So protect the sessions when the week gets busy, ahead of almost anything else in the routine.</p>
    It is not a substitute for the hours out of the cage, the foraging, or the sleep. And it is not a fix applied after a problem starts: the study treated established plucking, but every practitioner in this field says the same thing, which is that prevention in this species is disproportionately more effective than treatment. Start the sessions in week one, on a bird with no problems at all.
```

**Page 15 and the glossary, the six-hour wild foraging figure.** Same guide: the hour
figures do not trace to a source worth citing. Now "a large share of its waking day".

```html
  <div class="section-sub">Wild parrots spend up to six hours a day getting food. A full bowl takes minutes. That gap is the problem.</div>
  <p>Wild parrots spend <strong>up to six hours a day</strong> searching for, selecting and manipulating food. A captive bird with a full dish is finished in minutes. That is not a small difference in daily routine, it is most of the bird's waking behaviour missing, and something fills the space: in this species it is screaming, destruction and plucking.</p>
    <tr><td style="font-weight:700;color:var(--accent-dark);">Foraging</td><td>Working for food rather than eating it from a bowl. Wild parrots spend up to six hours a day doing it. Page 15</td></tr>
```

**Page 12, the diet split and one unsourced aside.** Fresh food is now the remaining 20 to
25%, seed under about 10% (`cockatoo-feeding-guide`).

```html
  <p>VCA gives the target as <strong>approximately 75 to 80% formulated pellets</strong>, with fresh fruit and vegetables making up <strong>no more than 20 to 40%</strong> of the daily diet, and seed as a small minority rather than the base of it. That is the whole prescription, and it is the same figure across every large parrot.</p>
```

**Page 34, cage, first vet visit, food and annual exam lines.** Replaced by the site's cage
ranges, the $140 to $210 exam with PBFD test, $20 to $50 a month for food and $78 to $115 for
a wellness exam (`cockatoo-cost-guide`). Page 37 lost "with bloodwork" to match.

```html
    <tr><td>Cage: heavy powder-coated at the low end, stainless at the high</td><td>$700</td><td>$1,550</td></tr>
    <tr><td>Well-bird exam plus a PCR panel, week one</td><td>$200</td><td>$450</td></tr>
    <tr><td>Pellets</td><td>$200</td><td>$350</td></tr>
    <tr><td>Fresh vegetables, fruit and nuts</td><td>$250</td><td>$450</td></tr>
    <tr><td>Annual avian exam plus bloodwork</td><td>$150</td><td>$300</td></tr>
    <tr><td><strong>Once a year</strong></td><td>Wellness exam with bloodwork, even when nothing is wrong. In a bird that hides illness this well, the annual exam is where problems are actually found</td></tr>
```

**Page 37, weekly bathing and weekly weighing, and the session length.** Bathing and
weighing are daily on the site; sessions follow VCA's ramp.

```html
      <div class="check-item"><div class="box"></div><span><strong>Two training sessions, ten to fifteen minutes each</strong></span></div>
      <div class="check-item"><div class="box"></div><span>Weigh and log it. Page 40</span></div>
      <div class="check-item"><div class="box"></div><span>Bathe or shower the bird two or three times. Page 10</span></div>
```

**Page 22, the 80 to 85 F warming figure.** `bird-emergency-travel-guide` gives 75 to 80 F
for a sick bird, with recovery best at the upper end.

```html
  <p style="margin-top:4pt;">Meanwhile: carrier, dark and quiet, warmed to <strong>80 to 85&deg;F (27 to 29&deg;C)</strong>, inside LafeberVet's 80 to 90&deg;F range under supplemental heat where VCA puts a recovering bird at 75 to 80&deg;F. Back off at flat sleek feathers, wings held out or open-mouth breathing, which mean too hot. Never massage the abdomen or pull at a visible egg.</p>
```

### Tightened for space

**Page 30**, which overflowed by 139 px at the start of this pass because the September
legal edition added the New Jersey reasoning without re-measuring. California and Virginia
now share a row. The Massachusetts row was corrected as well as cut: it called the bar
"IUCN Endangered and Critically Endangered" where the site reads 9.01(3)(b) as any IUCN
listing, with a permit tier MassWildlife does not issue for pets.

```html
  <p>In the great majority of US states a pet cockatoo raises no legal question at all. Idaho and Colorado clear pet birds as a category outright; Oklahoma's noncontrolled exotic-species exemption names cockatoos specifically; New Hampshire and Montana name the parrot order or family as unregulated. Where a state does restrict a parrot, it is almost always the monk parakeet, named in California, Connecticut, New Jersey and Virginia among others, and every cockatoo is outside those lists.</p>
    CITES governs <strong>international trade</strong>, not domestic ownership, so an Appendix I listing does not by itself make a captive-bred bird illegal to keep. It matters here for two reasons: a state can write its own rule that keys off the listing, and moving a bird across an international border is a serious permitting exercise rather than a formality.
    <tr><td><strong>Maine</strong>, for the Moluccan, yellow-crested and umbrella</td><td>Permit required</td><td>Maine clears the whole parrot order from its captivity-permit requirement, then carves out any species on CITES Appendix I or the IUCN's Endangered, Critically Endangered or Extinct in the Wild tiers. The Moluccan and yellow-crested are Appendix I; the umbrella is IUCN Endangered even though it is only Appendix II, so the IUCN half of the rule catches it on its own</td></tr>
    <tr><td><strong>Maine</strong>, for the galah, cockatiel and other smaller species</td><td>Legal, no permit</td><td>Not on Appendix I or the most endangered IUCN tiers, so they clear the blanket exemption</td></tr>
    <tr><td><strong>Arkansas</strong></td><td>Legal</td><td>Five cockatoo species, including the Appendix I Moluccan and yellow-crested, are named directly on the state's unrestricted list with no conservation-status carve-out at all. The same birds Maine permits</td></tr>
    <tr><td><strong>Hawaii</strong></td><td>Conditional, a real import process</td><td>White cockatoos, the galah, gang-gang, black cockatoos and palm cockatoo are on the conditionally approved animal list. Bringing one in requires an import permit, pre-departure quarantine, health certification and permanent identification before the bird arrives. A process, not a ban</td></tr>
    <tr><td><strong>California</strong></td><td>Legal</td><td>The only parrot on the restricted species list is the monk parakeet</td></tr>
    <tr><td><strong>Virginia</strong></td><td>Legal</td><td>The only parrot on the permit table is the monk parakeet. <em>Cacatua</em> is absent from it</td></tr>
    <tr><td><strong>New Jersey</strong></td><td>Permit</td><td>Easy to read backwards. The potentially dangerous table at 4.8(a) names three parrots and no cockatoo, but that table lists escape-and-establish agricultural pests, so being off it only means a bird is not banned. What decides whether a bird is free is the exempt list at 4.4, and its nine entries are the budgerigar, cockatiel, peafowl, rock dove, canary, house sparrow, European starling, zebra finch and society finch. No cockatoo, so 4.5 requires a permit. The Division also treats an IUCN Red List entry as an endangered listing, and the umbrella is Endangered and the Moluccan Vulnerable, so for those two the answer may be harder than a permit</td></tr>
    <tr><td><strong>Vermont</strong></td><td>Banned</td><td>An inverted-list state. The Domestic Species List clears psittacines one binomial at a time, the budgerigar, cockatiel, lovebirds, rosellas and <em>Psittacula</em> among them, and <em>Cacatua</em> is on none of the three lists. A species on none of them is treated as Restricted</td></tr>
    <tr><td><strong>Massachusetts</strong></td><td>Permit for the listed species</td><td>The exemption is subject to a categorical bar on IUCN Endangered and Critically Endangered species, which catches the umbrella, Moluccan and yellow-crested the same way Maine's rule does</td></tr>
    <tr><td><strong>Everywhere else</strong></td><td>Generally legal</td><td>No state-level restriction found. An ordinary captive-bred psittacine pet</td></tr>
    <strong>Your lease or HOA.</strong> A noise clause is far more likely to end a cockatoo's stay than a wildlife statute is. Page 19.<br />
    <strong>Local ordinances.</strong> City and county rules on exotic animals and on noise sit underneath state law and are not covered by any state list.<br />
    <strong>Paperwork on the bird itself.</strong> Ask for hatch records, banding or microchip details, and for CITES documentation if the bird was ever imported. A bird you cannot document is a bird you may struggle to move, sell, or place in a sanctuary later. Page 31.
```

**Page 29**, two clauses, to absorb the 30 to 45 day figure.

```html
    Public health guidance for birds exposed to other birds at shows, sales or events is to quarantine <strong>at least 30 days and test before returning or adding them to a group</strong>. Take that as the floor. In a household with an existing bird, Merck's figure for introducing a bird to an aviary or an established group is <strong>90 days</strong> with testing, because an infected adult can shed polyomavirus intermittently for up to 90 days before clearing it. There is no version of this that takes a weekend.
    A 30-day settling period in a quiet room, with a vet exam at the start of it, is good for a single new cockatoo too. It catches problems while your expectations are still forming, gives the bird the low-pressure start page 18 asks for, and stops the intense first-weeks over-bonding that causes so much trouble later.
```

**Page 45**, the three rewritten disagreement rows, the closed-gap list, and the two
history rows, which were merged and shortened when the unreleased September legal edition
and this pass became one 1.2.

```html
    <tr><td><strong>Life span</strong></td><td>LafeberVet's veterinary information sheet gives <strong>30 to 45 years</strong> generally, with Moluccans up to 70. VCA gives <strong>25 to 45, with the larger species at 70 to 80 or more</strong>, a wider band at both ends. Consumer sources commonly give 40 to 70-plus, and umbrellas at 50 to 70. This book prints the veterinary range with the documented upper figure alongside it, because the planning consequence on page 31 is the same either way: assume the bird outlives you</td></tr>
    <tr><td><strong>Diet split</strong></td><td>Some care references give 60 to 70% pellets for large parrots. VCA's cockatoo feeding page gives <strong>75 to 80%</strong>, with fresh food at no more than 20 to 40%, and that is what is printed here</td></tr>
    <tr><td><strong>Cost</strong></td><td>Published setup figures of $250 to $1,300 omit the play stand, the air purifier, a gram scale, a carrier and a real first veterinary visit with a PCR panel. Page 34 itemizes all of them and lands at $2,105 to $6,930, with the lines summing to the totals</td></tr>
    At 1.0 this list ran to seven items. All but one have since been closed by articles on the site: the bird fancier's lung material on page 10, the iris sexing and keel scoring on page 21, the quarantine periods on page 29, the droppings reference on page 28, the wing clipping page and the succession material on page 31 all now have a companion guide behind them, and every one was cross-checked against it at 1.1. What is still carried by this book alone: the <strong>itemized budget on page 34</strong>, the weights and weaning ages by species on pages 4 and 6, and the measured noise figure this book deliberately does <strong>not</strong> print, because no acoustic or veterinary source worth citing gives one. Everything else is sourced on pages 43 and 44.
    <tr><td>1.2</td><td>Sep 2026</td><td>t3</td><td>Legal edition. New Jersey was wrong and is corrected: the package read the potentially dangerous table at 4.8(a), found no cockatoo, and called the bird legal. That is backwards. The exempt list at 4.4 decides, its nine entries hold no cockatoo, and 4.5 therefore requires a permit. Virginia keeps its own row. Vermont was added as a ban, since the Domestic Species List clears psittacines one binomial at a time and <em>Cacatua</em> is on none of the three lists, and Massachusetts was added as a permit for the IUCN-listed species.</td></tr>
    <tr><td>1.1</td><td>Sep 2026</td><td>t3</td><td>Corrections pass, cross-checked page by page against the site's cross-species bird articles. Page 31 stopped calling a rehomed bird's withdrawal grief, which Merck lists as a potential sign of illness, and routes it to a vet check; blood-feather first aid was corrected to firm pressure with no pulling at home; weighing moved from weekly to daily; the 45 to 60 day multi-bird quarantine became Merck's 90 days; the training session length became VCA's ramp; and the bird fancier's lung source line was corrected, since the case report behind it documents a pigeon keeper rather than a psittacine one. Added: the hand-raised against parent-raised tradeoff, the pale grey juvenile iris, the pet trust law position, the 48-hour egg marker, Merck's four to seven outermost primaries and partial second molt, and the generator, carbon monoxide, lead, zinc and droppings figures.</td></tr>
```

### Tightened for the abbreviations pass

The owner asked for every abbreviation to be spelled out, with a plain description, at its
first mention and in the glossary. Two contents entries were reworded so the first mention
lands in the body, where there is room to explain it. Pages 6 and 29 lost a few words to
absorb the expansions. Both were tried back at full wording in the glossary split below, and
each pushed its page to 6 px free, so both stay trimmed.

**Page 2, two contents entries.** Now "Beak & Feather Disease & Other Viruses" and "Legal
Status, the Wildlife Trade Treaty & State Rules".

```html
      <tr><td>PBFD &amp; Viral Disease</td><td class="small" style="text-align:right;">25</td></tr>
      <tr><td>Legal Status, CITES &amp; State Rules</td><td class="small" style="text-align:right;">30</td></tr>
```

**Page 6, two clauses of the "What does not change" callout.**

```html
    Every commonly kept cockatoo is highly social, highly intelligent, loud, destructive and long-lived. There is <strong>no low-maintenance cockatoo</strong>. Choosing a smaller species buys you a smaller cage, a smaller food bill and a quieter bird by degrees, not a different animal. Do not read this page as a way to get a cockatoo without the commitment on page 5.
```

**Page 29, one word in the introduction list** ("seriously" became "hard").

```html
    <li><strong>Neutral ground first.</strong> The first physical meeting happens on a play stand or a table, never inside either cage. A cockatoo defends its cage seriously and a bite from this beak lands differently between birds than between budgies</li>
```

**Restored: the glossary.** The abbreviations pass took the glossary from 25 rows to 42 on
one page, cut 16 two-line definitions to one line and narrowed the term column from 28% to
21%. The owner's ruling: more pages rather than a shortened glossary. The glossary is now two
pages, 42 (B to I) and 43 (K to Z, "Glossary, continued"), with all 16 definitions back at
their full 1.1 wording, the CITES row keeping the treaty's full name, the column back at 28%,
and each of the 17 abbreviation rows given a full entry: the expansion, what it is, and what
it means for an owner. The package went from 45 to 46 pages; Sources, Sources Continued and
Where the Sources Disagree moved to 44, 45 and 46, and every page reference to them moved with
them.

## Review fixes, 1.2

An editor's review of the 46-page 1.2 PDF, applied 1 October 2026. Statuses were checked
before editing: the Global Biodiversity Information Facility species API returns the
Moluccan (IUCN taxon 22684784) as ENDANGERED, Goffin's (22684800) and the palm (22684723)
as NEAR_THREATENED and the sulphur-crested (22684781) as LEAST_CONCERN; the Norwegian
Scientific Committee for Food and Environment's 2020 report on CITES Appendix I parrots names
the Moluccan, Goffin's (Tanimbar corella), yellow-crested and palm cockatoos as Appendix I.
cites.org itself refused automated fetches (403). Both sources were added as one row on the
sources pages.

The package went from 46 to 47 pages. Six new glossary entries pushed the two glossary pages
117 px past the footer, and the owner's rule is a new page rather than shorter definitions, so
the glossary is now three pages: 42 (B to Cr), 43 (D to N, "Terms D to N.") and 44 (P to Z,
"Terms P to Z."). Sources, Sources Continued and Where the Sources Disagree moved to 45, 46 and
47; the contents page, cover badge, colophon, every "page 44/45/46" reference, the glossary
page references, and the store `pages`, blurb, seoDescription, heroParagraph, heroTicks and
contents list moved with them. The new sources row sits on page 46, because page 45 had no
room for it.

### Replaced wording

**Page 30, New Jersey row (legal blocker).**

```html
The Division also treats an IUCN Red List entry as an endangered listing, and the umbrella is Endangered and the Moluccan Vulnerable, so for those two the answer may be harder than a permit
```

Now "the umbrella and the Moluccan are both IUCN Endangered", hedge unchanged. No other
"Vulnerable" was in the file.

**Page 30, both Maine rows (legal blocker).** Goffin's is Appendix I, so it was wrongly
covered by "Legal, no permit".

```html
<tr><td><strong>Maine</strong>, for the Moluccan, yellow-crested and umbrella</td><td>Permit required</td><td>Maine clears the parrot order from its permit requirement, then carves out any species on CITES Appendix I or the IUCN's Endangered, Critically Endangered or Extinct in the Wild tiers. The Moluccan and yellow-crested are Appendix I; ...
<tr><td><strong>Maine</strong>, for the galah, cockatiel and other smaller species</td><td>Legal, no permit</td><td>Not on Appendix I or those IUCN tiers</td></tr>
```

Row 1 now covers the Moluccan, Goffin's, yellow-crested, palm and umbrella, with "permit rule"
and "anything on" absorbing the extra names. Row 2 is now "for species off both lists", naming
the galah, sulphur-crested, Major Mitchell's and cockatiel in the Why column.

**Page 6, species table.** Goffin's gained "CITES Appendix I. Page 30"; the palm gained "CITES
Appendix I"; the Moluccan's "CITES Appendix I, which has real legal consequences" became "IUCN
Endangered and CITES Appendix I, which has real legal consequences".

**Page 4, conservation row.**

```html
The umbrella is Endangered on the Red List ... Several species are on Appendix I of CITES
```

Now "The umbrella and the Moluccan are Endangered ... The Moluccan, Goffin's, yellow-crested
and palm are on Appendix I of CITES".

**Behavior consultant, one name throughout.** Was: page 3 "a certified avian behavior
consultant", pages 18 and 23 the same, page 24 "When to bring in a behaviorist" and "a
certified avian behaviorist ... Behaviorists work with", page 33 "Avian behavior consultant",
page 36 "a behaviorist after", glossary "Certified Parrot Behavior Consultant ... Page 45",
store whatNot "certified avian behavior consultant". Now "certified parrot behavior consultant
(CPBC)" at page 3 and "certified parrot behavior consultant" or "behavior consultant" after;
the glossary row points to pages 3, 33 and 46.

**Sexual maturity.** Page 17 subtitle "the change at five to seven years old" is now "three to
six years old"; page 36 "aged 3 to 7" is now "aged 3 to 6", matching LafeberVet's 3 to 4 and 5
to 6 on pages 4 and 17.

**US usage.** Page 11 "Ceiling fans and hobs", "Mains cables", "a cable a budgie could not
dent" and "cable trunking" are now "Ceiling fans and stove burners", "Power cords", "a cord"
and "cord covers"; the hazard table's columns went from 22/28% to 25/30% so the longer label
holds one line. Page 28 "beetroot" is now "beets"; page 38 "power cut" (twice) is now "power
outage"; pages 17 and 19 "afterwards" is now "afterward"; page 34 "untreated offcuts" (twice)
is now "untreated wood scraps". No hob, mains, torch, boot, skirting, fortnight or laboured
remained; "penciled" was already US.

**Page 36, droppings.** "Lime-green droppings ... 48 hours" and "Unformed droppings, no solid
part ... 48 hours" are now "Vet within 24 hours", matching pages 28 and 33.

**Glossary page refs.** Corticosterone "Page 16" (page 16 never uses the word; the sources page
does) is now the sources page, 45 after the renumber. Regurgitation "Page 22" is now 23, where
courtship regurgitation is described.

**Page 4 total.** "$2,200 to $7,300" is now "$2,195 to $7,340", matching pages 34 and 47.

**Page 30 footer.** "as of September 2026" is now "October 2026".

**Six species.** Cover "Five species compared" is now "Six species compared", and the same in
the store blurb, seoDescription, heroParagraph and the honest-test inside line.

**Page 5 adoption callout.** "$1,000 to $3,500 for a baby" is now "$700 to $3,500".

**Page 35, week 1.** "Baseline weight established across seven days" is now "Weighed daily,
toward a two-week baseline. Page 21".

**Page 25.** "amazons" is now "Amazons".

**Sources.** The two LafeberVet rows ("Basic Information Sheet: Cockatoo" and "Basic
Information Sheet for the Cockatoo", the second carrying only the iris quote, DNA testing and
a repeat of the weights) are one row under the second title, with the iris quote and DNA
testing appended. No glossary or text reference named either title.

**Page 3, print these first.** The columns ran 32, 33, 36, 37 / 39, 40, 41, 31; they now run
31, 32, 33, 36 / 37, 39, 40, 41.

**First-mention glosses, each with a glossary row.** Page 24 "Giardia and PBFD" is now
"Giardia, a gut parasite (page 27), and PBFD"; page 16 "haloperidol" is now "haloperidol (an
antipsychotic drug)"; page 25 "a circovirus" is now "a circovirus, a small virus"; page 25
"crop secretions" is now "secretions from the crop (the storage pouch in the throat)" and
"crop stasis" is "crop stasis (food sitting unmoving in the crop)"; page 30 "one binomial at a
time" is now "one binomial (the two-part scientific name) at a time"; page 11 "Chelated by a
vet" is now "Treated by chelation, a course of drugs that bind the metal so the body can pass
it". Two more jargon first mentions the review did not list, fixed the same way: page 25
"other psittacines including cockatoos" is now "other psittacines (parrots and cockatoos)
too", with a Psittacine glossary row, and page 25 "mouth, nose or cloaca" is now "mouth, nose
or vent", the word the book already uses. New glossary rows: Binomial, Chelation, Circovirus,
Crop stasis, Giardia, Haloperidol, Psittacine.

**Page 37 log.** Three blank rows became five, which fills the page to 28 px.

**Bar spacing.** Pages 4, 7, 32 (checklist and numbers table) and 33 now all read "3/4 in (19
mm) for Goffin's and galah, up to 1 in (25 mm) for the large species". Pages 4 and 7 had "3/4
to 1 in (19 to 25 mm) for a large cockatoo"; pages 32 and 33 had "3/4 to 1 in (19 to 25 mm)"
with no qualifier. The page 7 cage drawing label "Bars 3/4 to 1 in apart" is unchanged.

### Not done

**Version history line.** A clause on the Moluccan and Goffin's corrections was tried on the
1.2 row and took page 47 to -5 px free, then 9 px in a shorter form, so it is not in the PDF.
Suggested wording for when there is room: "the Moluccan was corrected to IUCN Endangered, and
Goffin's and the palm, both CITES Appendix I, now need a Maine permit."

**Site legal guide.** content/guides/cockatoo-legal-guide.mdx has the same Goffin's gap: its
Maine row puts "cockatiel, galah, other smaller species" under "Legal, no permit". Out of scope
here; it needs its own fix.

### Free space after the fixes

Minimum 15 px (page 30). Tightest: p30 15, p5 16, p35 16, p31 22, p6 23, p29 23, p47 23, p11
26, p24 26, p17 27, p27 28, p37 28.

## Review fixes, 1.3

Applied 2 October 2026, under docs/RULES.md "The source goes in the block, not the sentence".
A script over the visible text found 25 mentions of Merck, VCA, LafeberVet or Lafeber, the
NHLBI, the CDC and the CPSC outside the glossary (42 to 44), the sources pages (45, 46) and
page 47, in 21 passages. Each was rewritten as a plain statement in the book's own words, with
every number, instruction and safety point kept. Wording that was still the source's own
("acute death is often the only clinical sign", "potential signs of illness", "immature
cockatoos have a pale gray iris", the dinner-plate portion line) was reworded, not just
de-attributed. The rerun of the script finds 0 mentions outside pages 42 to 47, and 0 dashes.

### Before and after

**Page 9, light table.**

- Before: 8 hours a day, or LafeberVet's slightly wider 8 to 10. An intervention, under vet advice, not a permanent setting. Merck names a photoperiod over 12 hours as a documented risk factor for excessive laying
- After: 8 hours a day. The workable range is 8 to 10; start at 8, the low end. An intervention, under vet advice, not a permanent setting. More than 12 hours of light a day is a documented risk factor for excessive laying

**Page 10, bird fancier's lung callout.**

- Before: The NHLBI (National Heart, Lung, and Blood Institute, the US government's heart and lung research institute) lists having pet birds in the home as a risk factor in its own right, not just occupational exposure, and puts most diagnoses between the ages of 50 and 70.
- After: Having pet birds in the home is a risk factor in its own right, not just occupational exposure, and most diagnoses come between the ages of 50 and 70.

**Page 11, PTFE callout.**

- Before: it gives off fumes that cause direct caustic damage to the lung, and the Merck Veterinary Manual notes that acute death is often the only clinical sign.
- After: it gives off fumes that cause direct caustic damage to the lung, and often the bird simply dies, with no sign beforehand.

**Page 11, PTFE callout, other sources.**

- Before: Cookware is not the only source. Merck also lists irons and ironing board covers
- After: Cookware is not the only source. The same coating turns up in irons and ironing board covers

**Page 12, portions.**

- Before: VCA (Veterinary Centers of America), a large US chain of veterinary hospitals, offers a mental picture worth keeping: a small handful of food for a cockatoo is roughly a dinner-plate portion for a person.
- After: Keep the scale in mind: to a cockatoo, a small handful of food is about what a full dinner plate is to a person.

**Page 14, never-feed list.**

- Before: VCA names all four as toxic and potentially fatal.
- After: All four are toxic and can be fatal.

**Page 16, training table.**

- Before: VCA's ramp: five to ten minutes, once or twice a day, working up to two twenty-minute sessions
- After: Start at five to ten minutes, once or twice a day, and work up to two twenty-minute sessions

**Page 20, blood feathers callout.**

- Before: Merck's method is four to seven of the outermost primaries on both wings, cut below the coverts that overlay them, with the secondaries closer to the body left alone, because
- After: A standard clip takes four to seven of the outermost primaries on both wings, cut below the coverts that overlay them, and leaves the secondaries closer to the body alone, because

**Page 21, sexing by iris.**

- Before: LafeberVet gives the reason it fails in a young bird: immature cockatoos have a pale gray iris, so the cue simply is not there yet.
- After: In a young bird it fails outright: a juvenile's iris is pale gray in both sexes, so the cue simply is not there yet.

**Page 21, weighing.**

- Before: Lafeber's Susan Orosz is specific: a scale reading grams rather than ounces, used daily, with the number written down, because it is the chart rather than any single reading that shows a trend.
- After: Weigh in grams, not ounces, every day, and write each number down: a trend shows on the chart, never in one reading.

**Page 21, weight table.**

- Before: Merck's working definition of obesity in a bird. Page 26
- After: Obese. Page 26

**Page 22, egg binding.**

- Before: VCA adds a marker that stands on its own before the rest of that list appears: no egg passed in 48 hours
- After: One marker counts on its own, before any of those signs appear: no egg passed in 48 hours

**Page 24, molt table.**

- Before: Merck's picture is a full molt at least once a year, with many birds also running a smaller partial molt about six months after.
- After: Expect a full molt at least once a year, and in many birds a smaller partial molt about six months after.

**Page 26, obesity.**

- Before: Merck's working figure for obesity in a bird is roughly 20% over ideal weight, and Merck names galahs, alongside macaws, Amazons and Quaker parrots, as species prone to it.
- After: Obesity in a bird starts at roughly 20% over ideal weight, and galahs, alongside macaws, Amazons and Quaker parrots, are among the species prone to it.

**Page 26, vitamin A callout.**

- Before: Merck notes that even a diet of half seed and half pellets leaves a bird deficient.
- After: A diet that is half seed and half pellets still falls short.

**Page 27, blood feather first aid.**

- Before: Do not pull it: VCA does not recommend pulling one at home, and even in clinic it is a last resort
- After: Do not pull it at home; even in clinic, pulling is a last resort

**Page 28, droppings: polyuria.**

- Before: and VCA notes polyuria is often the first sign of kidney damage from zinc.
- After: and in zinc poisoning, polyuria is often the first sign that the kidneys are being damaged.

**Page 28, droppings: undigested food.**

- Before: Always abnormal, and Merck lists whole seed in the droppings as a sign of avian gastric yeast,
- After: Always abnormal, and whole seed in the droppings is a sign of avian gastric yeast,

**Page 29, quarantine.**

- Before: Merck's figure for introducing a bird to an aviary or an established group is 90 days with testing,
- After: introducing a new bird to an aviary or an established group takes 90 days with testing,

**Page 31, rehoming.**

- Before: Merck treats reduced morning vocalizing and reduced interaction as potential signs of illness, so the first move is a vet check rather than an assumption about grief. VCA puts the first exam within 1 to 2 weeks of acquiring any bird
- After: less morning calling and less interaction can both signal illness, so the first move is a vet check rather than an assumption about grief. Any newly acquired bird gets its first exam within 1 to 2 weeks

**Page 38, power outage callout.**

- Before: A generator runs outside and at least 20 feet from any door, window or vent, the figure from the CDC (US Centers for Disease Control and Prevention), and the CPSC (US Consumer Product Safety Commission) rules out running one in or near an enclosed space, so an open garage door does not qualify.
- After: A generator runs outside, at least 20 feet from any door, window or vent, and never in or near an enclosed space: an open garage door does not make a garage safe.

### Glossary page pointers

Four entries pointed at body pages that no longer use the term, and now point at the sources
page where it appears: CDC, pages 38 and 45 to pages 45 and 46; CPSC, page 38 to page 46;
NHLBI, page 10 to page 45; VCA, page 12 to page 45. MSD already pointed at page 45. No
definition was changed or shortened, and every abbreviation stays in the glossary because the
sources pages still use it.

### Version

Cover badge "Version 1.3 · Oct 2026", colophon line on page 47 to Version 1.3, and a 1.3 row
in the version history: "Outside sources named in the care text rewritten as plain statements;
every source is still credited on pages 45 and 46."

The new row took page 47 from 23 px free to -12 px. No content was cut. Three layout moves on
that page only: the version table's narrow columns went from 12/12/12% to 9/11/11%, which gave
the What Changed column room to drop a line (+15 px); the divider above the colophon went from
8 pt to 4 pt margins (+10 px); and the closing muted paragraph's top margin went from 5 pt to
3 pt. Page 47 is now 16 px free.

### Not done

**First-mention spelling on the sources pages.** With VCA, the CDC and the CPSC gone from the
body, their first appearance in the book is now on the sources pages, where VCA (page 45, "VCA
Animal Hospitals"), the CDC (page 45, after the spelled-out NASPHV) and the CPSC (page 46, "US
CDC and CPSC") are not spelled out inline. All three are in the glossary. Out of scope for this
pass; spelling them out inline would be a change to pages 45 and 46.

**Page 47 and the 1.1 history row** still name Merck and VCA, by design: that page is the
sources-disagree page and version history, and was excluded from this pass.

### Free space after the fixes

Minimum 15 px (page 30, unchanged). Changed: p10 87 to 105, p21 30 to 48, p38 56 to 73,
p20 126 to 109 (the clip sentence runs a line longer), p47 23 to 16. Every other page is
as it was at 1.2.
