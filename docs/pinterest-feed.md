# Pinterest feed

Pinterest is the one social channel run as a search engine play: pins are
scheduled through Publer, every pin links back to a real page, and nothing
requires conversing with anyone. Pins compound for months, so consistency
beats volume.

## The pin pipeline

1. Pins are 1000x1500 (2:3) portrait cards composed from existing site
   assets by `scripts/generate-pins.mjs`: photo on top, cream band with the
   title in Schibsted Grotesk, orange kicker and BeastlyFacts.com footer. No new
   photography, no text on the photo itself.
2. The generator takes a JSON spec (`out`, `image`, `kicker`, `title`) and
   writes JPEGs to `public/assets/pins/`, which deploy with the site, so
   Publer's Media URL column can reference them at
   `https://beastlyfacts.com/assets/pins/<out>.jpg`. Pins must be MERGED AND
   DEPLOYED before importing the CSV, or Publer fetches 404s.
3. Fonts: the generator renders through fontconfig. Instance the site's
   variable fonts once per machine/session (Schibsted Grotesk at wght 700 as
   "Schibsted-Bold", Atkinson Hyperlegible Next at 700 as "Atkinson-Bold", via fonttools
   instancer into ~/.fonts, then `fc-cache -f`), or titles fall back to
   DejaVu.

## Publer CSV (12-column bulk template)

Build it with the shared builder, which knows Pinterest's inverted rules and
refuses to emit a file that breaks them:

```bash
node scripts/build-social-csv.mjs pins.json
```

The batch JSON shape is in `docs/PUBLER_CSV_HOWTO.md`. In short, a pin needs
`link`, `title`, and `board` (all rejected on the other platforms), exactly one
image under `/assets/pins/`, one alt text, and no comments.

Same template as the X feed, different columns matter:

- `Date`        YYYY-MM-DD HH:MM, colon in the time.
- `Text`        the pin description: 100 to 200 chars, natural keywords,
                no hashtag pile (0 to 2 max), house style applies (no em or
                en dashes, US spelling, no banned phrases).
- `Link(s)`     the DESTINATION page on beastlyfacts.com. On Pinterest this
                is the pin's outbound link, the entire point of the channel.
                (Unlike X, where this column must stay empty.)
- `Media URL(s)` the full https URL of the generated pin image.
- `Link Title`  the pin title.
- `Alt text`    a real description of the image.
- `Board/Album` the exact Pinterest board name, must exist before import.

## Boards

Topical boards, keyword-named, because Pinterest treats each board as its
own little search index:

- Bearded Dragon Care
- Reptile Care & Setups
- Weird Animal Facts
- Aquarium & Fish Keeping
- Small Pet Care

Add Dog Care / Cat Care boards when that content lane has enough pins to
open with 5+ (an emptyish board looks abandoned).

## Cadence and rules

- 2 pins per day, one care/comparison pin and one fact pin, spread morning
  and late afternoon. Steady daily beats weekly bursts; Pinterest rewards
  fresh pins (new image + new URL combinations) over re-pins.
- Never pin the same image twice; a page may be re-pinned later only with a
  NEW image composition.
- Fact pins link the deepest page that exists for the animal: the
  Encyclopedia profile (`/encyclopedia/animal/<id>/`) for a kept species,
  else the Beastfile (`/beastlypedia/<id>/`) for a wild one, else the
  fact's own `/facts/<slug>/` share page. Both profile types render the
  animal's facts from `facts.js` in their Fun Facts section, so the pinned
  fact is on the profile page too, with the rest of the page around it. Article pins link `/blog/<slug>/`, species
  pins may link the `/guides/<species>/` hub. See "Fact pin headlines"
  below for why the destination decides the headline.
- Pin titles must be claims the destination actually supports, drawn from
  the fact text or article body, never invented. Same sourcing discipline
  as every other feed.
- Expectations: Pinterest is a slow burn. Meaningful impressions typically
  start at 1 to 3 months, clicks follow. Do not judge it by week two.

## Fact pin headlines

### Why this exists

In the 30 days to 9/26 the account took 93K impressions, 228 saves and 24
outbound clicks. That is a 0.026% click rate against a 0.245% save rate, one
click for every nine or ten saves. The cards were finishing the thought:
"Three Hearts, One Stops" hands over the whole mechanism in four words, so the
pin is a complete, saveable object and there is nothing left to click for.

The fix is a headline that states the result and withholds the cause. But a
withheld cause is a promise, and the promise is only honest if the page the
pin lands on actually pays it. A fact modal holds one sentence. Some fact
sentences carry the mechanism (octopus, id 1: the body heart stops while it
swims, which is why it crawls). Some do not (kangaroo, id 101). A curiosity
headline pointed at a page with no payoff is clickbait, and the click bounces
in seconds. So the destination is decided first, and the headline follows
from what is actually on it.

### The prompt

For each fact pin, output all of the following, in this order, with the
reasoning written out.

1. **Destination.** Resolve where the pin lands, in this precedence, matching
   the animal name exactly and case-insensitively the way `FactModal.jsx`
   does (a loose "contains" match sends a Komodo dragon fact to the bearded
   dragon page):
   - `encyclopedia` : the animal is in the Encyclopedia, a kept species
   - `beastfile` : else it has a Beastfile, `src/lib/generated/beastlypedia-animal-map.json`
   - `fact-modal` : else neither exists, and the pin links `/facts/<slug>/`

   Check the rendered page, not the data file. A Beastfile's Fun Facts
   section is built from `facts.js` at build time (see
   `src/lib/generated/beastlypedia-content.json`, each entry's `facts`), so
   every fact for that animal appears on it, including the one being
   pinned. Reading only the authored entry in
   `src/lib/data/beastlypedia/*.js` misses them: that is how the platypus
   and manta ray Beastfiles were wrongly judged thin in the first pass of
   the 9/27 redo. Encyclopedia pages differ in one way: they show at most
   3 matching facts (`getRelatedFacts` in `src/lib/utils/matchAnimal.js`),
   so confirm the pinned fact is among them before counting on it.

   A `beastfile` link carries the fact id, `/beastlypedia/<id>/?fact=<fact id>`.
   The page scrolls to that fact and outlines it, so the reader lands on the
   answer rather than at the top of a long profile. Without the parameter
   the pinned fact sits below the fold and nothing marks it.

   Print the destination type and the url. This one line is what lets
   someone reading the batch later see why some fact pins got a curiosity
   headline and others did not, instead of it looking arbitrary.
2. **The fact.** State the surprising fact plainly.
3. **The mechanism, quoted.** Quote, verbatim, the sentence on the
   destination page that explains why the fact is true. The fact's own
   `fact` field counts for every destination type, since it renders on the
   profile pages as well as the modal. A profile body can add a mechanism
   the fact sentence lacks. This is what stays on the
   site and never goes on the card.

   **The gate.** If no sentence on that page explains the mechanism, stop
   here. The pin gets a plain headline that states the fact, and step 4 is
   skipped. Do not write a withholding headline for a payoff you cannot
   quote. This applies in both directions: a Beastfile does not earn a
   curiosity headline just for existing, and a fact pin must not default to
   a plain headline when the Beastfile body holds a mechanism the fact
   sentence lacks, just because nobody read it.
4. **Why this headline works.** One or two sentences on how the headline
   creates curiosity without resolving it. Confirm explicitly that someone
   who read only the headline could not explain the mechanism to a friend.
   If you cannot say why the headline withholds the payoff, rewrite it until
   you can.
5. **Headline.** Six words maximum, states the result, not the cause. At the
   generator's 76px title size, six words is two lines, which is the shape
   every pin already renders at. The headline also goes in the pin's
   `title` field.
6. **CTA line.** Frames the site as where the answer lives, "The reason why
   → BeastlyFacts.com", not a plain attribution. The card footer is
   hardcoded to `BeastlyFacts.com` at `scripts/generate-pins.mjs:75`, so
   until the generator gets a CTA slot, the CTA line goes as the closing
   sentence of the pin description instead.

7. **Description.** Must not leak the mechanism either. Pinterest shows
   the description on the pin's closeup, so a card that withholds the
   cause and a description that explains it leaves nothing to click for,
   the same failure one field over. State the result, point at the answer,
   end with the CTA line. Plain-headline pins keep a plain description and
   no "reason why" CTA, since there is no withheld reason to promise.

House rules still apply to every field: no em or en dashes, US spelling,
nothing claimed that the destination page does not say.

### What to expect

- Saves will probably drop. On Pinterest a save is distribution, not vanity,
  and 228 of them are part of why the account reached 93K impressions. A
  card built to feel unfinished is less saveable by design. Fewer saves and
  far more clicks is the trade this is making on purpose, so a lower save
  number is not by itself a sign it failed.
- Do not read the 10/26 window as a verdict on headlines. At the account's
  current click rate, 20 redone fact pins produce a handful of clicks at
  most, which is too few to separate a better headline from noise. The
  reason to fix unposted pins is that a pin keeps drawing impressions for
  months, so every future click lands wherever it is pointed now.
- Read the next 30 days as the real test, not the last 30 as the baseline.
  The 9/26 window mostly predates this pipeline: our first pins went out
  9/12 and the first month batch only started 9/19. The first clean read,
  a window made almost entirely of pins built this way, lands around 10/26.
- Coverage is partial today. Of the 28 fact pins in the 9/19 batch, 10 had a
  Beastfile. The 6 of those still unposted when this was applied all link
  their Beastfile now. The share of fact pins that can earn a curiosity headline grows
  as the Beastfiles and Encyclopedia do.

## One-time account setup

- Claim beastlyfacts.com in Pinterest settings (unlocks analytics and rich
  pins, which pull article titles/descriptions automatically). If the old
  claim lapsed, the fresh HTML tag goes in index.html, NOT via GTM,
  Pinterest's verifier does not reliably run JavaScript.
- Turn off any Instagram-to-Pinterest auto-publish so linkless duplicates
  stop appearing.
