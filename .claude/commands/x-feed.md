---
description: Build a 7 day X calendar for @Beastly_Facts. Four posts a day at fixed slots (two fact cards, a question card, a wallpaper pair), every post an image, no links anywhere.
argument-hint: "[blank = Phase 1 shortlist] [go = Phase 2 write] [cadence e.g. '2 facts'] [notes to steer picks]"
allowed-tools: Read, Glob, Grep, Bash(ls:*), Bash(sed:*), Bash(head:*), Bash(wc:*), Bash(sort:*), Bash(grep:*), Bash(awk:*)
---

# X feed builder

ARGUMENTS: $ARGUMENTS

CURRENT SCOPE (owner, 2026-10-17, effective Friday 2026-10-17). Supersedes
the 2026-10-10 note below wherever the two differ. The 2026-10-10 rules on
the fact card and on links still hold. The full plan across every platform,
with the reply rules, is docs/SOCIAL_PLAN.md.
- DAY SHAPE: 4 posts a day at fixed slots, 30 minutes behind Threads, all
  times US Eastern. X stays all images: every post carries an image.
    9:30 AM   FACT CARD. The fact card rules below, unchanged: full-bleed
              layout, full-sentence headline, first reply adds one detail
              the post left out, no links in post or replies.
   12:30 PM   QUESTION CARD. The "question" card from
              scripts/generate-pins.mjs, spec { "question": <id> } run with
              --4x5: the card headline from social/questions.json over a photo
              of the question's suggested animal, no fact text. The post text
              is the question's one-line X version, verbatim. First reply:
              one line that keeps it going (our own answer, or the obvious
              follow-up), no url.
    4:30 PM   FACT CARD.
   10:00 PM   WALLPAPER PAIR. Two images from the owner's Beastly Walls app,
              side by side, no caption. The owner supplies the week's seven
              pairs at Phase 1: two files each and the two animals shown.
              Files go in social-batches/pins/wallpapers/YYYY-MM-DD-a.jpg
              and -b.jpg and ride the same scripts/upload-pins.mjs run as
              the cards, so the media urls are
              https://pins.beastlyfacts.com/wallpapers/YYYY-MM-DD-a.jpg and
              -b.jpg. One self reply per pair, posted right after: a short
              fact tied to what the art shows (the pose, the setting, the
              animal's look), sourced from the repo like any other fact.
- FACTS: two a day, 14 a week. Threads needs one a day; mirror picks where
  it makes sense, same fact in a different register, never the same copy.
- QUESTIONS: one a day from social/questions.json, never one the bank marks
  used on X. `plan` proposes them with the facts and warns when the bank
  runs under 14 unused. `mark --platform x --question <id>` consumes one.
- WALLPAPERS: no animal in two wallpaper posts in the same week. Log each
  pair with `mark --wallpaper "Animal A,Animal B" --date YYYY-MM-DD`, which
  refuses a repeat within six days either side. `plan` prints the animals
  used in the last week so the new pairs stay off them.
- WEIRD FIRST at Phase 1: see the shortlist rule under PHASE 1.
- CSV: the wallpaper row is `"type": "wallpaper"` with two media urls, no
  text and the self reply in comments. The question row is `"type":
  "question"` with the card as its one media url. See Publer CSV below.

CURRENT SCOPE (owner, 2026-10-10). This overrides everything below that
assumes two tracks.
- FACT TRACK ONLY. No article posts, no threads from guides, no chronicles.
  Wherever this file describes the article track, skip it.
- Every post carries a fact photo card: scripts/generate-pins.mjs run with
  `--4x5`, a spec of { out, image: the fact's own photo, kicker: "Wild animal fact"
  on every card (wild as in crazy, so pets too; never "weird"), title: the fact itself in
  one plain sentence of up to twelve words, naming the animal or the body part
  the number is about, so the card makes sense with no post text under it.
  Never a teaser or a pun: "Its tongue pulls more G-force than a fighter pilot
  can take", not "More G-force than a pilot" (owner, 2026-10-16: six-word
  headlines read as riddles). Three lines fit the card. }
  Since 2026-10-16 the --4x5 fact card is the photo filling the whole frame
  with the headline over its bottom on a dark gradient; the generator falls
  back to the cream panel by itself when the bottom of the photo is bright
  (white studio shots), so nothing to choose. A landscape photo cut to 4:5
  loses its sides: when the crop sheet shows the animal cut off, add
  "focusX": 0 to 1 (left to right) to the spec, as "focusY" does for tall ones. Check the crop with
  scripts/pin-crop-sheet.mjs, upload with scripts/upload-pins.mjs, and use
  https://pins.beastlyfacts.com/<out>-4x5.jpg as the media url.
- No url anywhere, post or replies. The card's footer names BeastlyFacts.com
  and the profile link carries the click.
- Default cadence: 2 facts a day. "3 facts" or similar in the arguments
  overrides it. Any article count in the arguments is ignored. Since
  2026-10-17 the two facts sit at 9:30 AM and 4:30 PM, with the question card
  and the wallpaper pair making up the four.

How to read the arguments:
- Empty, or anything that is not "go": run PHASE 1 only, then stop.
- Starts with "go": run PHASE 2 using the shortlist already approved earlier in
  this conversation. If there is no approved shortlist in context, say so and
  run PHASE 1 instead. Never invent a shortlist you were not given.
- CADENCE: if the arguments name a per-day volume ("2 facts 2 articles",
  "3 and 2", "two of each"), use it for both phases and pass it through to the
  inventory script. Default is 1 fact + 1 article per day. Carry the same
  cadence into Phase 2 that Phase 1 was approved at.
- Anything else is steering for which sources to favor.

---

ROLE
You write the X feed for @Beastly_Facts from this repo. You do not write new
articles. You do not edit any MDX. You never invent husbandry, science,
behavior, or story details. Every factual claim in every post must already
exist in the repo.

THE PROBLEM YOU ARE FIXING
The account has been posting seoTitle + excerpt + a beastlyfacts.com url.
Those posts get 1 to 8 views. Native posts with no url got 20 to 80. The url
is the problem. Fix the format.

GROWTH-PHASE VOLUME
X is architecturally different from Threads and IG here: a tweet decays
roughly 50% every 6 hours and is largely done within 24, so posts don't
compete with each other the way an over-stuffed Meta feed does, and higher
frequency is a documented lever specifically on this platform while the
account is small (under a few hundred followers).

Cadence history:
- Week of 2026-09-12: 3 posts a day, 2 facts and 1 article thread, counting a
  whole thread as one post the same way the ledger does. Deliberately half of
  what the first three weeks ran at (6 a day, 4 facts and 2 threads); the
  higher rate burned through the strongest thread-shaped guides faster than
  the library refilled.
- 2026-10-10: facts only, 2 a day, every post a card, no links anywhere.
- 2026-10-17: 4 posts a day at fixed slots, 9:30 AM fact card, 12:30 PM
  question card, 4:30 PM fact card, 10:00 PM wallpaper pair. 28 posts a
  week. See CURRENT SCOPE at the top and docs/SOCIAL_PLAN.md.

Only raise it again if engagement is genuinely landing (real replies, not
just views) and the guide pool can support the extra threads. Volume is
never the reason to ship a weak post.

WORK IN TWO PHASES. Stop after Phase 1 and wait for approval.

=====================================================================
PHASE 1: SOURCE SHORTLIST
=====================================================================

TWO TRACKS, at the cadence the arguments ask for. Default 1 fact + 1 article
per day. At 2 and 2 a week is 14 facts and 14 articles, 28 posts.

Do NOT read the content directories by hand and do NOT limit yourself to recent
files. The whole library is in play and it is far more than fits in context.
Both pools grow as facts and articles are added, so never quote a count from
memory or from an earlier run. Start here every time:

    node scripts/social-inventory.mjs stats
    node scripts/social-inventory.mjs plan 7 --platform x --facts-per-day N --articles-per-day M

`stats` reports the current pool sizes, how much the ledger has already
consumed, and the runway at several cadences. Read it before proposing a
cadence change: a higher volume shortens the runway proportionally, and it
names which track runs out first.

`plan` proposes picks drawn from the WHOLE library, spread by a stable hash
rather than by date, so old material surfaces as readily as new. It enforces:
nothing the ledger marks as posted, category spread scaled to the ask, no photo
used twice in the run, no species repeated, care-guide split types spread, no
collision between the fact and article tracks, and striping so a single day
does not get two of the same kind. Treat its output as the starting shortlist,
not a verdict. Override any pick whose source turns out to be weak, and say
what you swapped and why.

WEIRD FIRST (owner, 2026-10-17). Prefer facts a reader stops on: strange,
gross, "wait, what", over pleasant ones. The sea cucumber organ fact did
about three times the views of the clownfish lifespan fact in the week of
2026-10-11. Those facts tend to come from the Ocean, Weird & Wonderful and
Invertebrates pools (and the stranger end of Reptiles and Birds), not from
the mammal default, so when `plan` hands back a pleasant mammal fact, swap it
for the strangest unused one in those pools and say so. A fact with no
"wait, what" in it is the one to cut when the week is over the count.

Questions come out of the same `plan` run (one a day on X by default,
--questions-per-day overrides), drawn from social/questions.json and never
one the bank marks used on X. Check the suggested animal has a photo the
card can use (the generator refuses one that does not) and that no two
question cards in the week show the same animal.

Useful when overriding:
    node scripts/social-inventory.mjs questions --platform x --unused
    node scripts/social-inventory.mjs wallpapers
    node scripts/social-inventory.mjs facts --platform x --unused --limit 40
    node scripts/social-inventory.mjs articles --platform x --unused --kind fact-article
    node scripts/social-inventory.mjs articles --platform x --unused --kind chronicle
    node scripts/social-inventory.mjs plan 7 --platform x --recent   (recency bias, opt in)

Every platform keeps its own ledger bucket, so X's runway is unaffected by what
Instagram or Threads has run. Always pass --platform x here.

Source shape:
  FACTS     src/lib/data/facts.js, curated facts keyed by stable id. Ids are
            load-bearing: favorites are keyed by id and gaps are deliberate.
            Never renumber, never invent an id.
  ARTICLES  content/guides (care guides split cost / handling / health /
            tank setup / feeding / legal / enrichment, plus standalone fact
            articles), content/fun-facts (listicles), content/short-story
            (chronicles: Dex the bearded dragon, pompous and self-serious;
            Otis the bunny). content/blog holds one file, ignore it.
            content/_scheduled-* is NOT LIVE, never source from it.

Across the week the ARTICLE track must include at least one Dex or Otis
chronicle and at least one standalone fact article. Never three reptiles
consecutively on either track. If the run is short of either, `plan` says so on
a SHORT line: report that rather than padding around it.

For each FACT pick, output exactly:
  FACT ID:  <id from facts.js>
  ANIMAL:   <animal field>  CATEGORY: <category field>
  QUOTE:    "<verbatim from the `fact` field, the sharpest clause>"
  ANGLE:    <one line: what the post argues>
  IMAGE:    <resolved image path>  <own | SHARED>
  URL:      https://beastlyfacts.com/facts/{slugify(title)}/

For each QUESTION pick, output exactly:
  QUESTION ID: <id from social/questions.json>
  ANIMAL:      <animal field>
  HEADLINE:    "<headline field>"
  X TEXT:      "<x field, verbatim>"

For each WALLPAPER day, output exactly (from what the owner supplied):
  DATE:     YYYY-MM-DD
  ANIMALS:  <animal a> + <animal b>
  FILES:    wallpapers/YYYY-MM-DD-a.jpg, wallpapers/YYYY-MM-DD-b.jpg
  CLEAR:    yes, or the animal that already ran in a wallpaper this week

For each ARTICLE pick, output exactly:
  FILE:   content/.../slug.mdx
  DATE:   <frontmatter date>
  QUOTE:  "<verbatim sentence from the BODY, 1 to 2 sentences max>"
  ANGLE:  <one line: what the post argues>
  IMAGE:  <frontmatter `image` value, verbatim>
  URL:    <live url, built per the URL rules below>

QUOTE rules:
  - Articles: from the BODY. Never the seoTitle, excerpt, or description.
  - Facts: from the `fact` field in facts.js. The fact text is already tight,
    so quote the clause that carries the claim, not the whole entry.
  - It must be the sharpest CLAIM available: something a keeper could disagree
    with, be surprised by, or act on tonight. Not a topic sentence.
  - If a source's best line is still an SEO restatement, drop it, take the next
    candidate from the inventory, and say which you dropped.
  - Character for character. It will be grepped.

IMAGE rules at Phase 1:
  Every fact currently has its own photo, no two facts share a file, and none
  is missing one. Some resolve by id through FACT_IMAGES and some by animal
  name through ANIMAL_IMAGES, but both point at distinct files, so the
  resolution route says nothing about image quality and is not worth
  mentioning in the shortlist.

  `stats` recomputes this every run. If it ever reports a nonzero "shares a
  photo" count, facts are being added faster than photos and two posts would
  go out with the same image, which the house rules forbid. `plan` refuses to
  reuse a file inside a run, so that shows up as a SHORT line rather than a
  duplicate. Report it, do not work around it. Same for any fact listed
  under "no photo": skip it and say so.

URL rules (verified against generate-sitemap.js, do not deviate):

  EVERY article in content/guides, content/fun-facts, and content/blog
  renders at:
      https://beastlyfacts.com/blog/{frontmatter slug}/

  Yes, guides too. getMdxPosts() in generate-sitemap.js maps every
  non-chronicle MDX post to /blog/{slug}/. There is no
  /guides/{article-slug}/ route and building one produces a 404.

  /guides/{species}/ is a DIFFERENT page: a hand-maintained species hub that
  links a species' split care guides. Use it only to point at a whole species
  rather than one article, and only for a species that appears in the
  staticPages list in generate-sitemap.js. Never build one from an article
  slug.

  Individual FACTS render at:
      https://beastlyfacts.com/facts/{slugify(fact title)}/
  built from the fact's TITLE, not its animal or id, using the slugify rule in
  src/lib/utils/slugify.js (note that "&" and the standalone word "and" both
  become "-and-"). These pages are prerendered and set their own canonical, but
  they carry noindex. That is an SEO choice and does not affect a human opening
  the link, so they are fine as a first-reply target. The inventory script
  prints the resolved url for every fact, so use that rather than building it
  by hand.

  Chronicles render at:
      https://beastlyfacts.com/chronicles/dex/{n}/
      https://beastlyfacts.com/chronicles/otis/{n}/
  where {n} is the story's 1-based position when that series is sorted by
  frontmatter `date` ASCENDING. Chronicles.jsx resolves the route as
  parts[n - 1] against that date-sorted array, so {n} is NOT read from the
  filename or the title. As of the last check the two agree (13 parts each,
  a file named part-N lands at /N/), but the URL is derived from date order,
  so a backdated or inserted story shifts everything after it. Recompute the
  sort, do not trust the filename.

  The first reply is the only link slot we get. A 404 there wastes the whole
  post.

If the inventory cannot fill the mix, say exactly what ran short. Do not pad
by repeating a species, reusing a photo, or pulling something the ledger
already marks as posted.

=====================================================================
PHASE 2: WRITE (after approval only)
=====================================================================

--- X MECHANICS (non-negotiable) ---
1.  NO url anywhere, main post or replies (owner, 2026-10-10). People reach
    the site through the profile link, and the card's footer already names
    BeastlyFacts.com. No link card, and no "link in bio" line in the text.
2.  The FIRST REPLY adds one real detail the main post left out: a number, a
    mechanism, a consequence from the same source. Never a url, never "more
    on the site". It exists to give a reader something to answer.
3.  Post the requested cadence, no more. Since 2026-10-17 the slots are
    fixed: 9:30 AM fact, 12:30 PM question, 4:30 PM fact, 10:00 PM
    wallpaper pair, US Eastern. Do not move them.
4.  Main post under 280 characters. Count it and show the count.
5.  Zero hashtags unless exactly one genuinely fits.
6.  One post, one take. Never the seoTitle.
7.  Line breaks are free and help. Use them. No wall of text.
8.  Do not open with a question. Open with the claim, then question at the end
    if the post earns it.

--- VOICE ---
Honest, specific, slightly dry. Sounds like someone who has actually cleaned a
tank at 11pm. Concrete numbers over adjectives. If the article hedges, you
hedge.

Hard bans:
  No em dashes or en dashes. Commas or periods.
  US spelling. Prefer "grey".
  Banned: "nature's ultimate", "buckle up", "let that sink in", "mind blown",
  "here's the kicker", "in the world of", "delve", "sent shockwaves", "little
  did they know", "the truth is", "this changes everything".
  No F4F. No follow-for-follow. No "drop a comment".
  No affiliate links.

--- POST SHAPES (rotate, do not use the same shape twice in a row) ---
  CLAIM        Sharp statement, then the number that backs it.
  CORRECTION   A thing keepers get wrong, then what is actually true.
  COST         A real dollar figure from a cost guide, stated flatly.
  SCENE        Dex or Otis, in voice, 3 to 6 lines of the actual scene.
  QUESTION     A claim, then a question with a real answer or a real argument.
               Never "thoughts?".

At least a quarter of the week's posts end on a real question, and at least
one of those is on the fact track.

Fact posts are their own register. A fact post is short, one claim, no setup,
and it does NOT need the article track's framing. Do not turn a fact into a
mini care guide. If the fact cannot stand as 2 or 3 lines, pick another.

--- THE THREAD (an article slot filled this way instead of a single post) ---
One a day at the current cadence (see GROWTH-PHASE VOLUME above), filling
the single article slot. A thread adds real dwell time and still only counts
as one post toward the daily total. Use it whenever a source has one genuine
mistake with a real mechanism and a real fix, which most guides do not.
Forcing it past what the sources support either burns your strongest
thread-shaped material fast or produces weak, formulaic threads that read as
templated. If a given day's article source has no real mistake in it, run a
single post instead, a flat week of 7 strong threads is not worth 2 hollow
ones.

3 to 5 posts on ONE husbandry mistake, from ONE guide.
  Post 1: state the mistake so it stings slightly.
  Middle: the mechanism and the real numbers from the article.
  Last:   the fix, specific enough to do today.
  No url anywhere in the thread.
Number nothing. No "1/5". Let the thread carry itself.

Mechanically this is one CSV row: the main post is Post 1, every post after
it goes in that row's Comment(s) column joined by ||, and each fires
automatically in order once the main post goes live. See Publer CSV below.

--- IMAGES ---
Since 2026-10-11 every post carries a card, not a bare photo (owner: the
cards are the visual, text-only reach was poor). Cards come from
scripts/generate-pins.mjs rendered with `--4x5` (1000x1250) and uploaded
with scripts/upload-pins.mjs, so the media url is
https://pins.beastlyfacts.com/<out>-4x5.jpg.
  ARTICLE posts: the layout that fits the source, same rules as Pinterest
  (docs/pinterest-feed.md): checklist for tank setup, feeding tiers, numbered
  for fun facts and enrichment, cost with a hook and never a price, legal
  with the question and never the verdict, photo card for comparisons. If a
  Pinterest card already exists for that source, render its spec at 4x5
  rather than writing a new one.
  FACT posts: the photo card (fact photo + a six word headline). The post
  text states the fact, so the headline here may state it too.
The card's photo is still the source's own image: frontmatter `image` for
articles, the fact's photo for facts. Never invent a path, never reuse one
image across two posts in the same week, and flag any card whose photo does
not show what the post claims. A strip crop that loses the animal (only
ears showing) gets a different photo.

=====================================================================
OUTPUT FORMAT. Nothing outside these sections.
=====================================================================

## Week at a glance
Table: Day | 9:30 fact (id + animal) | 12:30 question (id + animal) | 4:30 fact (id + animal) | 10:00 wallpaper (animal pair)

## Day 1 through Day 7
Repeat this block once per post, in posting order, labelled FACT, QUESTION
or WALLPAPER (ARTICLE only when the owner asks for the article track back).

  DAY / TIME:   one slot per post, not three options
  TRACK:        fact | question | wallpaper | article
  SHAPE:        claim | correction | cost | scene | question | thread
  SOURCE:       facts.js id=<n>   or   questions.json id=<n>   or   content/.../file.mdx
  QUOTE USED:   "<verbatim>"   (a question: its x field; a wallpaper: the fact the reply uses)
  SUPPORTS:     <the one sentence in the post this quote backs>

  MAIN POST
  <paste ready, no url. A wallpaper post: NONE, the pair posts with no caption>
  chars: <n>

  FIRST REPLY
  <one added detail, no url. A wallpaper: the short fact tied to the art>

  IMAGE:        <resolved path, or the two wallpaper files>
  WHY THIS ONE: <one sentence>

## Publer CSV
Only build this once the calendar above is approved. Do not generate it
alongside the first draft.

Read the real start date, never guess it:
    node scripts/social-inventory.mjs next-start --platform x
If it prints "no nextStart set", this is the first batch on this platform.
Either way, confirm the real current date with the user before picking Day 1.
This sandbox's clock has drifted from the user's actual local time before,
silently, and there is no way to verify it from in here. Trust the user's
stated date/time over anything computed internally.

CSV columns (Publer's 12-column bulk template, do not remove or reorder any):
  Date          YYYY-MM-DD HH:MM, COLON between hours and minutes. A hyphen
                (08-30) silently fails to parse and the row lands as an
                unscheduled draft with no error shown, confirmed by a real
                failed batch. Slashes in the date part also work but are
                not required once the time uses a colon.
  Text          the main post, verbatim from above. No url in this field,
                ever.
  Link(s)       leave EMPTY. Per Publer's own docs, this column takes
                priority over Media URL(s) on platforms that support link
                sharing, X included, which means anything in it produces a
                link-preview post instead of the native photo post this
                whole format exists to deliver. Confirmed: an empty
                Link(s) column is what makes the image attach natively.
  Media URL(s)  the card, https://pins.beastlyfacts.com/<out>-4x5.jpg (see
                IMAGES). upload-pins.mjs confirms it is live before the CSV
                is built. A wallpaper row carries two urls,
                https://pins.beastlyfacts.com/wallpapers/YYYY-MM-DD-a.jpg
                and -b.jpg, and nothing in Text: in the batch JSON it is
                { "type": "wallpaper", "date", "media": [a, b],
                "comments": [the self reply] }. The builder refuses a
                wallpaper row with a caption, with one image, or with the
                files anywhere but wallpapers/.
  Comment(s)    the first reply, no url (2026-10-10 rule). For a thread, every post
                after the first goes here too, joined by ||, e.g.
                "second post||third post||fourth post". Each
                fires automatically in order once the main post goes live,
                no Condition needs to be set. Confirmed live, both a single
                reply and a full 3-comment || chain (posted roughly 4
                seconds apart, in order, no drops).
  Everything else (Link Title, Label, Alt text, Board/Album, Post subtype,
  CTA, Reminder) stays empty for a plain native X post.

After the CSV is imported AND the user has confirmed it actually scheduled
correctly in Publer, not just generated:
    node scripts/social-inventory.mjs set-next-start --platform x --through <last day used>
so the next batch picks up automatically without re-asking what day it is.

## Ledger
The exact commands to run once the week is actually posted, one line per item,
ready to paste. Nothing is consumed until these run, so a week that gets
scheduled but not marked will be proposed again.

    node scripts/social-inventory.mjs mark --platform x --fact <id> --date YYYY-MM-DD
    node scripts/social-inventory.mjs mark --platform x --question <id> --date YYYY-MM-DD
    node scripts/social-inventory.mjs mark --wallpaper "Animal A,Animal B" --date YYYY-MM-DD
    node scripts/social-inventory.mjs mark --platform x --article content/.../file.mdx --date YYYY-MM-DD

The wallpaper line is shared with Threads: run it once per pair, not once per
platform, and it refuses an animal that ran in a wallpaper within the week.

## What to cancel
Any queued seoTitle + excerpt + url posts still scheduled this week, and a one
line replacement angle for each.

## Self check
State pass or fail on each. Fix failures before outputting. Do not ship a
failing calendar with a note attached.
  [ ] No em or en dashes anywhere
  [ ] No banned phrase
  [ ] No url anywhere, main posts or replies
  [ ] Every main post under 280 chars
  [ ] No species repeats across the week
  [ ] No three reptiles in a row
  [ ] No post shape used twice consecutively
  [ ] Every fact QUOTE USED appears verbatim in facts.js under that id
  [ ] Every post has its own fact photo card, crop checked, no photo used twice
  [ ] Every day has the four slots at 9:30, 12:30, 4:30 and 10:00, nothing moved
  [ ] Every question is unused on X in social/questions.json, no animal on two question cards
  [ ] Every wallpaper pair is clear of this week's other pairs, and its reply is a fact from the repo
  [ ] A quarter or more of posts end on a real question, at least one a fact
  [ ] Ledger section lists a mark command for every post
