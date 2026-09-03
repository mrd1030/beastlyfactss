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
