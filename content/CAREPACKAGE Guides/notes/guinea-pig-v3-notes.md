# Guinea pig v3 notes

Written during the 2.0 rebuild (Sep 2026). 1.0 was 22 pages on the pre-t3 layout; 2.0 is
39 pages on t3, built from fragments in `source/guinea-pig-src/` across five page files.

Read this before starting v3, along with the Guinea Pig 2.0 block in `TEMPLATE_GUIDE.md`.

## Page count: 39, and it was a choice

The Rabbit block predicts 38 to 40 for a rabbit and the Hamster block puts a rodent at 34
to 37. A guinea pig sits at the rabbit end rather than the hamster end, and the reason is
structural rather than aesthetic: it is a **social** species, so it needs the pairing page
and the bonding page a hamster does not, and it has a **larger health section than either**,
because vitamin C, dental disease, GI stasis, bladder stones, ovarian cysts and the
antibiotic problem are six separate pages that all have to be full ones.

Ten health pages is the most of any package in the series so far. That is not padding.
Every one of them is a common presentation in this species and eight of the ten are
recurring, not one-off.

The build hit 39 with a minimum of 22px free on the tightest page, so it was not measured
up against a ceiling. There is room in v3 for one or two more pages without anything else
moving.

## What was merged, and what nearly was not

- **Mistakes, enrichment and floor time are one page**, following the template's own page
  13 rather than the rabbit's split. It works, but it is the fullest page in section 02
  and it is the first candidate for a split if v3 adds anything to it.
- **Sounds and body language live on the handling page.** They nearly took their own page,
  and honestly they could: this species has more distinct vocalizations than anything else
  in the series and the wheek is the single thing every owner mentions. See the undrafted
  list below.
- **The enrichment log is folded into the equipment log**, as in Hamster 3.0 and Budgie 2.0.

## Free space per page, final measurement

```
p2=39  p3=236  p4=151  p5=98  p6=168  p7=80  p8=22  p9=49  p10=60  p11=63  p12=139
p13=95  p14=75  p15=67  p16=65  p17=87  p18=49  p19=75  p20=105  p21=58  p22=188
p23=91  p24=158  p25=55  p26=71  p27=69  p28=169  p29=134  p30=~30  p31=119  p32=54
p33=146  p34=112  p35=72  p36=157  p37=54  p38=142  p39=42
```

Pages with real headroom for v3: 3 (howto), 22 (scurvy), 28 (checklist), 24 (urinary),
6 (setup), 36 (owner log), 33 (routine), 38 (glossary).

Only three pages needed trimming at all, and only the budget page needed it twice. The
head CSS inherited from the Budgie 2.0 build is why; see that package's notes, and do not
loosen it.

## Parked blocks

### Cut from the budget page (page 30)

Two callouts merged into one to fit. The emergency-fund callout in its original standalone
form:

```html
  <div class="callout never">
    <span class="label">The emergency fund is a line item</span>
    A sick or emergency visit runs $100 to $300 or more, a bladder stone surgery or a dental under anesthesia considerably more, and both are common enough in this species to plan for rather than hope about. Pet insurance for guinea pigs is limited, so most owners self-insure. Put something aside monthly from the day they arrive, so that the answer to "we should x-ray her" is yes.
  </div>
```

Four setup rows were also merged into two to save vertical space. The originals, with their
own figures, if the page ever gets room back:

```html
    <tr><td>Ceramic food dishes, two</td><td>$10</td><td>$20</td></tr>
    <tr><td>Water bottle and bowl</td><td>$10</td><td>$20</td></tr>
    <tr><td>Nail clippers and styptic powder</td><td>$10</td><td>$18</td></tr>
    <tr><td>Digital gram scale</td><td>$12</td><td>$25</td></tr>
```

Nothing else was removed. No figure, dose or threshold was cut to make a page fit.

## Pages wanted and never drafted

1. **Sounds and body language, as its own page.** Currently a seven-row table on page 11.
   A full page could carry the complete vocal repertoire with what each sound means in
   context, plus posture: the freeze, the head-toss, the wide yawn, chin-raising, and the
   difference between a relaxed sprawl and a heat-stressed sprawl, which page 7 has to make
   in a callout because there is nowhere better. **The strongest candidate for v3.**
2. **A dedicated hay-buying page.** Hay is the largest running cost and the biggest quality
   variable, and page 12 covers the types but not the economics: bale versus box, where to
   buy, what a fair price per kilogram is, how to store 20 kg in a flat, and how to judge a
   new cut. Owners ask this constantly and no care sheet answers it.
3. **Life stages.** A page for the first six months (alfalfa, growth, separating litters,
   when to neuter) and the senior years (arthritis, weight loss that is not disease,
   dental decline, keeping a bonded pair when one is failing). Currently scattered across
   pages 12, 17 and 27.
4. **Losing one of a bonded pair.** Genuinely hard, common, and unaddressed: whether to let
   the survivor see the body, how long to wait before rebonding, the argument for rebonding
   at all, and the practical problem that a bereaved older pig may need a young companion it
   will then outlive.
5. **A cage-cleaning page.** The daily, weekly and monthly routine is on page 33 in
   checkbox form, but there is no page on method: what to use (and that most household
   disinfectants are not safe), how to handle a fleece system's laundry, and how to deal
   with urine scale on coroplast.
6. **Two guinea pigs and a child.** The species is bought for children more than any other
   in this series, and page 11 handles it in one callout. A page on what a child can
   realistically do, what an adult must keep, and how to hand parts of the routine over.
7. **A dental deep-dive with drawings.** Page 20 describes cheek teeth bridging over the
   tongue, which is hard to picture. A simple diagram of a guinea pig's mouth would carry
   more than the paragraph does.

## Proposed gaps from this build

Logged in `TEMPLATE_GUIDE.md` as well. In short: antibiotic-associated enterotoxemia,
the pubic symphysis breeding deadline, sexing a guinea pig, heat stress as an emergency,
the rectal pouch in older boars, and guinea pig vocalizations. None of the six appears
anywhere on the site, and the first two are the ones that change outcomes.

## Cut list for v3, in priority order

Cut first, if something has to go:

1. The twelve-month planner on page 37.
2. The seasonal table on page 34, the least species-specific block in the package.
3. The "where to get them" and "what to look at" sections of page 9 could compress if a
   choosing-a-guinea-pig page is ever written properly.

**Do not cut, in this order:** page 13 (vitamin C), page 27 (antibiotics), page 7 (heat),
page 18 (redflags and the 8 to 12 hour rule), page 19 (GI stasis), page 9 (pairs), page 5
(enclosure size). Those seven are the product. Page 27 in particular has no equivalent
anywhere on the site or in any other package in this series, and it is the page most likely
to prevent a death caused by a well-meaning vet visit.

---

## 2.1, September 2026: the small mammal article cross-check

Written against **2.1, 41 pages, template t3**. A corrections edition, built from
the fragments as usual. It came out of checking the package against the four
cross-species small mammal articles published on 3 and 4 September 2026, and
against `guinea-pig-scurvy-vitamin-c-guide`, which has not been expanded since.

The important finding of the whole exercise: **two of the article's numbers were
roundings, and the package was right both times.** Do not assume the article
wins. Re-source the figure.

### Heat, the number that changed

Merck's housing and nutrition page gives the range as "18-26&deg;C [65-79&deg;F] and
30-60% humidity", verbatim. The cross-species article prints 65 to 80&deg;F for the
same Celsius, which is a rounding rather than a different source. **The package's
65 to 79&deg;F is Merck and it did not change.**

The danger line did. 2.0 printed "above about 82&deg;F (28&deg;C) the risk of heat
stress becomes real", which is the RSPCA's *most commonly seen* figure being used
as a ceiling. The ceiling belongs to VCA: a rodent enclosure should be kept "no
higher than 80&deg;F (27&deg;C)". So 80&deg;F is now the line, on all five pages that carry
it, with the RSPCA's shape either side of it named: risk can begin at 75&deg;F
(24&deg;C) and is most commonly seen above 82&deg;F (28&deg;C).

Page 35, the sitter sheet, already said 80&deg;F. It was the only page in the
package that agreed with the source, and it had been out of step with the other
four since the build.

### The stretched-out posture

2.0 led its heat stress sign list with "Lying stretched flat with the back feet
trailing behind" and called it "the earliest sign you get". That sentence is
Blue Cross's, and Blue Cross frames it as a pig that "may be feeling warm and
need some help to cool down", not as the head of a clinical sequence. Every
source that gives an ordered list starts elsewhere:

- **RSPCA Knowledgebase:** profuse salivation and drooling as they attempt to
  cool down by panting, rapid heart rate, shallow rapid breathing, profound
  weakness, pale gums, rectal temperature over 39.5&deg;C, then convulsions, coma
  and death.
- **PDSA:** "Taking short, quick breaths, Drooling, Struggling to breathe, Acting
  very sleepy or lethargic, Collapsing/ falling unconscious, Having fits."
- **VCA:** "panting, salivating, weakness, convulsions, and refusal to move."

The callout now runs breathing, drooling, weakness, pale gums, convulsions, and
the posture sits after it as a separate Blue Cross line, which is where it is
actually useful: it is the thing you notice before anything is wrong.

### Cold water: shock and ice burns, not vasoconstriction

2.0 said "Cold water and ice cause the surface vessels to clamp shut and slow
the cooling down." Nothing sources that. PDSA gives two different mechanisms,
both worth printing: "Never place your guinea pigs directly into cold water, not
only is bathing very stressful for them, it can also cause their small,
sensitive bodies to go into shock", and separately, "they have very sensitive
skin and can get 'ice burns' if they touch the ice directly." The instruction
was right; the reason was invented. Pages 7 and 34 now carry both real reasons,
and the ice-burn one doubles as the argument for wrapping a frozen bottle.

The treatment line survived unchanged and is now attributed: RSPCA, "Treatment is
supportive, proving oxygen and intravenous fluids while cooling the patient."
The 64 to 73&deg;F comfortable band survived too: RSPCA gives 18&deg;C to 23&deg;C.

### The antibiotic page, and why it became two

This was the largest rewrite. 2.0's implicated list was "Penicillin, ampicillin,
streptomycin, clindamycin, lincomycin, spiramycin, chlortetracycline
(aureomycin), erythromycin and bacitracin". Checked against the sources:

- **Missing, and the omission that matters most: amoxicillin and
  amoxicillin-clavulanate.** It is the drug a general practice reaches for
  first, and a list handed to a vet that does not contain it is not doing its
  job. Also missing: cephalosporins and procaine-containing injectables.
- **Chlortetracycline had to come off.** It is a tetracycline, and Merck's
  clinical techniques page lists tetracyclines among the antimicrobials that
  "generally can be used safely in guinea pigs". A never list that warns against
  a drug the current source says is usable undermines the page.
- **Spiramycin came off too**, appearing in none of the four sources checked.

The page is now organised by class, which is how Merck states the risk: "beta
lactams, lincosamides, and older macrolides pose a higher risk for development
of enteric dysbiosis and antibiotic associated enterotoxemia". VCA supplies the
drug-level list and the by-any-route point: "penicillin and related drugs,
bacitracin, erythromycin, lincomycin, tylosin, procaine additives, and
streptomycin", harmful orally, topically or by injection. Merck's lincosamides
page confirms guinea pigs by name and that the reaction "can be lethal".

**New on the page:** the drugs a vet can usually use instead, which 2.0 had
nowhere. Merck's group is fluoroquinolones, tetracyclines, chloramphenicol,
sulfonamide with trimethoprim, and aminoglycosides. Also new: the two
*Clostridioides difficile* toxins, that oral dosing is the higher-risk route, and
the University of Missouri figure that death usually follows 1 to 2 days after
the diarrhea starts.

**Fasting and recovery** gained their figures. Merck's clinical techniques page:
"A 1-2 hour fast is recommended before anesthesia because guinea pigs tend to
hold food in their mouths and cranial esophagus." And the post-operative bar,
from Merck's rabbit page and reasonable to hold a guinea pig vet to: pain relief
gets reviewed if the animal has not eaten within 2 to 3 hours. Both are now also
in the clinic script on the emergency card.

**Why it split.** All of that put page 26 at 185px over. The split follows the
gap block, which logged enterotoxemia and anesthesia as two separate rows in the
first place: page 26 is Antibiotics and Enterotoxemia, page 27 is Anesthesia and
the Vet Conversation. On a `-src` build that is one `<!--PAGE-->` marker and one
`SECTIONS` line, and every `{{P:key}}` followed. Five cross-references were
repointed by hand from `antibiotics` to `anesthesia`, because they were about the
cage mate or the surgery rather than the drugs.

**Both new pages are generously empty**, 315px and 367px free. That is
deliberate rather than an accident of the split: this is the material most likely
to grow, and the two undrafted items nearest to it, post-operative care and what
to do when a pig comes home on medication, both belong here.

### Grooming

- Nails: "roughly every three to four weeks" became Lafeber's **6 to 8 weeks**.
  The package was running at roughly double the sourced frequency.
- Dark nails: added the torch held **behind** the nail, which is Lafeber's
  guinea pig technique specifically and the case where you cannot otherwise see
  the quick.
- Short coats: "a weekly once-over" became **every few days**, which is
  Lafeber's floor for a short-haired guinea pig. The rosetted and dense rows
  moved with it.
- Bathing: added Merck's belly-level detail, that when a bath is genuinely
  necessary the animal only stands in the water and is never submerged.
- Grease gland: added Lafeber's lighter option, a cotton swab and a mild
  cleaning agent, alongside the coconut oil method for a gland that has caked.
- Added one line on shedding, because the article makes the contrast explicitly:
  unlike a rabbit, a guinea pig has no seasonal molt.

The grease gland callout became a paragraph under boar cleaning to make room.
Same words, one less frame, and the two topics are adjacent anyway.

### Vitamin C

The taste reason for not dosing through the water turns out to be **Merck's**,
not something the package invented: "Supplementation of vitamin C in the water is
not recommended" because it needs frequent changes and "can make water taste
unappetizing, potentially reducing water intake." Both reasons are now
attributed. The 90-day pellet rule now names the site guide that carries it.

The 2 to 3 week scurvy onset on page 21 is PetMD's: "It only takes 2-3 weeks of
an insufficient diet for signs of vitamin C deficiency to set in." PetMD also
gives per-kilogram figures that agree with Merck's, which is a second source for
the approach page 13 takes.

### Layout

- **The contents page needed `column-count:2`.** At 41 entries a single column
  cleared by 4px. In two columns it clears by 364. This is the Cockatoo finding
  and it applies at 41 entries, not just 44. The head CSS now carries it, with
  `break-inside:avoid` on the labels and tables so a section does not split
  across the gutter.
- There is **no `.snug` class in this package's head**, by design: the tightened
  base CSS does that job everywhere. So there is no layout lever to pull on a
  tight page here, only text and structure. Worth knowing before the next fit
  pass.
- Free space per page, 2.1 final:

```
p2=364  p3=218  p4=151  p5=98  p6=152  p7=25  p8=22  p9=49  p10=60  p11=63
p12=139  p13=76  p14=75  p15=67  p16=33  p17=87  p18=49  p19=75  p20=105
p21=43  p22=188  p23=91  p24=158  p25=55  p26=315  p27=367  p28=69  p29=169
p30=115  p31=28  p32=119  p33=54  p34=146  p35=66  p36=72  p37=157  p38=54
p39=142  p40=58  p41=326
```

Minimum 22px, on page 8.

### A measurement lesson worth carrying forward

Sentence-level trimming on a page whose tail is a callout or a table does
**nothing measurable**. On the rabbit build in the same session, four rounds of
compression moved a page by exactly 0px, because a four-line callout stays four
lines until about 100 characters come out of it. Pages here behaved the same way.
When a page is 10 to 30px over, do not compress: move or restructure a block.
Both fixes that finally worked, the grease gland callout becoming a paragraph and
the guides line moving to the version history page, were structural.

### Still only in the PDF

Unchanged by this cross-check and still carried by no site article: the
per-kilogram vitamin C figures (pages 4, 13 and 30), the 1 to 2 teaspoon pellet
and 1 to 2 cup produce portions (14, 15, 30), adult weights by sex, body
temperature, heart and respiratory rates (4, 18, 30), gestation, litter size,
weaning and the 4 to 5 week conception figure (17), the pubic symphysis deadline
(17), the ivermectin and selamectin dosing (25), the rectal pouch (16), and the
itemized budget (31). The 4 to 6 week dental recurrence interval on page 20 is
**no longer** on this list: `guinea-pig-health-issues-guide.mdx` picked it up in
its September expansion.
