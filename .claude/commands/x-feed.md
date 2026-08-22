---
description: Build a 7 day X calendar for @Beastly_Facts from repo content. Native posts, url in first reply only.
argument-hint: "[blank = Phase 1 shortlist] [go = Phase 2 write] [cadence e.g. '2 facts 2 articles'] [notes to steer picks]"
allowed-tools: Read, Glob, Grep, Bash(ls:*), Bash(sed:*), Bash(head:*), Bash(wc:*), Bash(sort:*), Bash(grep:*), Bash(awk:*)
---

# X feed builder

ARGUMENTS: $ARGUMENTS

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

Useful when overriding:
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
1.  Main post carries NO url, no beastlyfacts.com, no link card, ever.
2.  The url goes in the FIRST REPLY only. One line of context, then the url.
    Not "read the full guide". Give a reason to click that is different from
    what the main post already said.
3.  Post the requested cadence, no more. Give every post its own time slot and
    space them across waking hours, never back to back. Two posts sit in
    opposite halves of the day. Four or more should be at least 3 hours apart,
    and no two posts from the same track run consecutively.
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
Not a fixed weekly quota. Use it whenever a source has one genuine mistake
with a real mechanism and a real fix, which most guides do not, most weeks
that is a few sources, not all seven. Forcing it daily either burns your
strongest thread-shaped material fast or produces weak, formulaic threads
that read as templated. A few a week beats one a day.

3 to 5 posts on ONE husbandry mistake, from ONE guide.
  Post 1: state the mistake so it stings slightly.
  Middle: the mechanism and the real numbers from the article.
  Last:   the fix, specific enough to do today.
  Reply to the last post: the url. Nowhere else in the thread.
Number nothing. No "1/5". Let the thread carry itself.

Mechanically this is one CSV row: the main post is Post 1, every post after
it goes in that row's Comment(s) column joined by ||, and each fires
automatically in order once the main post goes live. See Publer CSV below.

--- IMAGES ---
Use the source's frontmatter `image` verbatim. Never invent a path. Prefer a
real Dex or Otis photo (/assets/images/dex/...) when the topic allows. Never
reuse one image across two posts in the same week. Flag any post where the
image does not actually show what the post claims.

=====================================================================
OUTPUT FORMAT. Nothing outside these sections.
=====================================================================

## Week at a glance
Table: Day | Fact (id + animal) | Article (species + kind) | Shapes

## Day 1 through Day 7
Repeat this block once per post, in posting order, labelled FACT or ARTICLE.

  DAY / TIME:   one slot per post, not three options
  TRACK:        fact | article
  SHAPE:        claim | correction | cost | scene | question | thread
  SOURCE:       facts.js id=<n>   or   content/.../file.mdx
  QUOTE USED:   "<verbatim>"
  SUPPORTS:     <the one sentence in the post this quote backs>

  MAIN POST
  <paste ready, no url>
  chars: <n>

  FIRST REPLY
  <one line + url>

  IMAGE:        <resolved path>
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
  Media URL(s)  the FULL https://beastlyfacts.com/... path, not the
                relative frontmatter path. Must be a real, live, public
                URL. Confirmed working before use, never assumed correct
                from the path alone.
  Comment(s)    the first reply, carrying the url. For a thread, every post
                after the first goes here too, joined by ||, e.g.
                "second post||third post||fourth post with the url". Each
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
    node scripts/social-inventory.mjs mark --platform x --article content/.../file.mdx --date YYYY-MM-DD

## What to cancel
Any queued seoTitle + excerpt + url posts still scheduled this week, and a one
line replacement angle for each.

## Self check
State pass or fail on each. Fix failures before outputting. Do not ship a
failing calendar with a note attached.
  [ ] No em or en dashes anywhere
  [ ] No banned phrase
  [ ] No url in any main post
  [ ] Every main post under 280 chars
  [ ] No species repeats, across BOTH tracks
  [ ] No three reptiles in a row
  [ ] No post shape used twice consecutively
  [ ] No two posts from the same track scheduled back to back
  [ ] Every article QUOTE USED appears verbatim in its named file
  [ ] Every fact QUOTE USED appears verbatim in facts.js under that id
  [ ] No image path used twice across the whole week
  [ ] A quarter or more of posts end on a real question, at least one a fact
  [ ] The article track includes a chronicle and a standalone fact article
  [ ] Ledger section lists a mark command for every post
  [ ] Every article url is /blog/{slug}/, never /guides/{article-slug}/
  [ ] Every chronicles part number was derived from date order, not filename
