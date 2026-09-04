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
