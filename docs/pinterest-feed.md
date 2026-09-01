# Pinterest feed

Pinterest is the one social channel run as a search engine play: pins are
scheduled through Publer, every pin links back to a real page, and nothing
requires conversing with anyone. Pins compound for months, so consistency
beats volume.

## The pin pipeline

1. Pins are 1000x1500 (2:3) portrait cards composed from existing site
   assets by `scripts/generate-pins.mjs`: photo on top, cream band with the
   title in Fredoka, orange kicker and BeastlyFacts.com footer. No new
   photography, no text on the photo itself.
2. The generator takes a JSON spec (`out`, `image`, `kicker`, `title`) and
   writes JPEGs to `public/assets/pins/`, which deploy with the site, so
   Publer's Media URL column can reference them at
   `https://beastlyfacts.com/assets/pins/<out>.jpg`. Pins must be MERGED AND
   DEPLOYED before importing the CSV, or Publer fetches 404s.
3. Fonts: the generator renders through fontconfig. Instance the site's
   variable fonts once per machine/session (Fredoka at wght 600 as
   "Fredoka-SemiBold", Nunito at 700 as "Nunito-Bold", via fonttools
   instancer into ~/.fonts, then `fc-cache -f`), or titles fall back to
   DejaVu.

## Publer CSV (12-column bulk template)

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
- Fact pins link their `/facts/<slug>/` share page (built from the fact
  title via slugify). Article pins link `/blog/<slug>/`, species pins may
  link the `/guides/<species>/` hub.
- Pin titles must be claims the destination actually supports, drawn from
  the fact text or article body, never invented. Same sourcing discipline
  as every other feed.
- Expectations: Pinterest is a slow burn. Meaningful impressions typically
  start at 1 to 3 months, clicks follow. Do not judge it by week two.

## One-time account setup

- Claim beastlyfacts.com in Pinterest settings (unlocks analytics and rich
  pins, which pull article titles/descriptions automatically). If the old
  claim lapsed, the fresh HTML tag goes in index.html, NOT via GTM,
  Pinterest's verifier does not reliably run JavaScript.
- Turn off any Instagram-to-Pinterest auto-publish so linkless duplicates
  stop appearing.
