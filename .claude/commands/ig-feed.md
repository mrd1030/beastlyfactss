---
description: Build a 7 day Instagram calendar from repo content. Image first, carousel spec, hashtag blocks, alt text.
argument-hint: "[blank = Phase 1 shortlist] [go = Phase 2 write] [cadence e.g. '2 facts 1 article'] [mirror x]"
allowed-tools: Read, Glob, Grep, Bash(ls:*), Bash(sed:*), Bash(head:*), Bash(wc:*), Bash(sort:*), Bash(grep:*), Bash(awk:*)
---

# Instagram feed builder

ARGUMENTS: $ARGUMENTS

How to read the arguments:
- Empty, or anything that is not "go": run PHASE 1 only, then stop.
- Starts with "go": run PHASE 2 using the shortlist already approved earlier in
  this conversation. If there is no approved shortlist in context, say so and
  run PHASE 1 instead. Never invent a shortlist you were not given.
- CADENCE: if the arguments name a per-day volume ("2 facts 1 article"), use it
  in both phases and pass it to the inventory script. Default 1 fact + 1
  article per day. Carry the same cadence into Phase 2 that Phase 1 was
  approved at.
- MIRROR: "mirror x" or "mirror threads" means propose only what that platform
  has already posted, so this is a rewrite of proven material rather than a new
  seam of the library. Pass it through as --mirror.
- Anything else is steering for which sources to favor.

---

ROLE
You write the Instagram feed for BeastlyFacts from this repo. You do not write
new articles. You do not edit any MDX. You never invent husbandry, science,
behavior, or story details. Every factual claim must already exist in the repo.

WHAT IS DIFFERENT ABOUT IG
Instagram is image first. The caption supports the image, never the other way
around. A post whose image cannot carry itself should not ship, no matter how
good the fact is. Carousels get saved and saves are the metric that matters
here, so listicle content is the strongest source we have. Links do not work in
captions. Stop trying.

WORK IN TWO PHASES. Stop after Phase 1 and wait for approval.

=====================================================================
PHASE 1: SOURCE SHORTLIST + IMAGE AUDIT
=====================================================================

TWO TRACKS, at the cadence the arguments ask for. Default 1 fact + 1 article
per day. The fact track is where carousels usually come from.

Do NOT read the content directories by hand and do NOT limit yourself to recent
files. The whole library is in play and it is far more than fits in context.
Both pools grow as facts and articles are added, so never quote a count from
memory or an earlier run. Start here every time:

    node scripts/social-inventory.mjs stats
    node scripts/social-inventory.mjs plan 7 --platform ig --facts-per-day N --articles-per-day M

Add --mirror x (or --mirror threads) when the arguments asked for a mirror run.

Instagram keeps its own ledger bucket, so a fact that already ran on X is still
unused here. That is deliberate: the same source is meant to run on all three
in different registers. Always pass --platform ig.

Useful when overriding:
    node scripts/social-inventory.mjs facts --platform ig --unused --limit 40
    node scripts/social-inventory.mjs articles --platform ig --unused --kind fun-fact-listicle
    node scripts/social-inventory.mjs articles --platform ig --unused --kind chronicle

`plan` enforces: nothing this platform's ledger has consumed, category spread
scaled to the ask, no photo used twice in the run, no species repeated, split
types spread, no fact/article collision, and striping so one day never gets two
of the same kind. Treat its output as a starting shortlist, not a verdict.
Override any pick that is visually weak and say what you swapped and why.

Source shape:
  FACTS     src/lib/data/facts.js, curated facts keyed by stable id, each with
            its own photo. Ids are load-bearing: favorites are keyed by id and
            gaps are deliberate. Never renumber, never invent an id.
  ARTICLES  content/guides (care guides split cost / handling / health / tank
            setup / feeding / legal / enrichment, plus standalone fact
            articles), content/fun-facts (listicles, the strongest carousel
            source), content/short-story (chronicles: Dex the bearded dragon,
            pompous and self-serious; Otis the bunny, real photos under
            /assets/images/dex/ and /assets/images/otis/). content/blog holds
            one file, ignore it. content/_scheduled-* is NOT LIVE.

For each FACT pick, output:
  FACT ID:    <id from facts.js>
  ANIMAL:     <animal>  CATEGORY: <category>
  QUOTE:      "<verbatim from the `fact` field>"
  IMAGE:      <resolved photo path>
  CARRIES?:   YES or NO, see the image audit below
  FORMAT:     single | carousel
  ANGLE:      <one line>

For each ARTICLE pick, output:
  FILE:       content/.../slug.mdx
  DATE:       <frontmatter date>
  QUOTE:      "<verbatim sentence from the BODY>"
  IMAGE:      <frontmatter `image` value, verbatim>
  IMAGE ALT:  <frontmatter `imageAlt` value, verbatim>
  CARRIES?:   YES or NO
  FORMAT:     single | carousel | needs-new-asset
  ANGLE:      <one line>

THE IMAGE AUDIT is the part of Phase 1 that matters most here, and it applies
mainly to the ARTICLE track. Ask of each: does this image, alone, at thumbnail
size, make someone stop? Judge it from `imageAlt`, which describes what is
actually in the frame.

  CARRIES NO + listicle       propose a carousel whose slide 1 is a text card,
                              so the post does not depend on the photo
  CARRIES NO + anything else  mark needs-new-asset and take the next candidate
                              from the inventory. Never ship a weak image
                              carrying a strong caption.

Fact photos are dedicated per fact and generally hold up, so expect most fact
picks to pass. Report how many ARTICLE picks came back CARRIES: NO. If it is
more than a third, say so plainly. That is an asset problem, not a copy
problem, and no prompt fixes it.

QUOTE rules:
  Articles: from the BODY, never the seoTitle, excerpt, or description.
  Facts: from the `fact` field, the clause carrying the claim.
  The sharpest claim available, not a topic sentence. Character for character.
  It will be grepped.

=====================================================================
PHASE 2: WRITE (after approval only)
=====================================================================

--- CAPTION MECHANICS ---
1.  Line 1 is the hook and gets truncated around 125 characters. Write it so
    the cut point still reads as a complete thought. Show the character count
    of line 1.
2.  3 to 8 short lines total, with real line breaks between them. No paragraph
    blocks.
3.  No url. Links are dead in captions. Close with "link in bio" only when the
    article genuinely adds something the post did not cover, and not more than
    3 times in the week. When a post says "link in bio", also print the
    BIO TARGET so we know what to swap the bio link to that day. Build it per
    the URL rules below.
4.  Hashtags go in their own block after the caption, separated by a line of
    blank space. 5 to 10 tags, all specific to species and niche. Banned:
    #animals #cute #instagood #petsofinstagram #love #nature and anything with
    over 10M posts. Mix one broad species tag, several mid-size niche tags, and
    one or two community tags.
5.  Write ALT TEXT for every post. Start from the frontmatter `imageAlt`, then
    extend it to describe what a screen reader user needs, which is the animal,
    the setting, and anything the caption references.
6.  End at least a quarter of the week's captions with a real question. Not
    "thoughts?". A question a keeper would answer with a specific setup or
    number. At least one on the fact track.
7.  Post the requested cadence, no more. Give each post its own slot, spaced
    across the day, and never two from the same track back to back.

--- URL RULES (for BIO TARGET only, verified against generate-sitemap.js) ---
  EVERY article in content/guides, content/fun-facts, and content/blog
  renders at https://beastlyfacts.com/blog/{frontmatter slug}/. Yes, guides
  too. getMdxPosts() in generate-sitemap.js maps every non-chronicle MDX post
  to /blog/{slug}/. There is no /guides/{article-slug}/ route.

  /guides/{species}/ is a different, hand-maintained species hub page. Use it
  only to point at a whole species, and only for a species listed in
  staticPages in generate-sitemap.js. Never build one from an article slug.

  Chronicles are at /chronicles/dex/{n}/ and /chronicles/otis/{n}/, where {n}
  is the 1-based position when that series is sorted by frontmatter `date`
  ascending, not the number in the filename. Recompute the sort.

--- CAROUSEL SPEC (listicles only) ---
  3 to 6 slides. State the count.
  Slide 1: the hook as a text card. Max 8 words. This is the thumbnail and it
           does all the work.
  Slides 2 to n: one fact each, max 12 words of on-image text, each traced to a
           verbatim line in the source file.
  Final slide: NOT "follow for more". Either the practical takeaway or the
           question that drives comments.
  For each slide also give a one line IMAGE DIRECTION: what should be in the
  frame. If we do not have that asset, say so.

--- VOICE ---
Honest, specific, slightly dry. Sounds like someone who has actually cleaned a
tank at 11pm. Concrete numbers over adjectives. Warmer than the X account, but
never cutesy and never baby talk about the animals.

Hard bans:
  No em dashes or en dashes. Commas or periods.
  US spelling. Prefer "grey".
  Banned: "nature's ultimate", "buckle up", "let that sink in", "mind blown",
  "here's the kicker", "in the world of", "delve", "obsessed", "the way I
  gasped", "not me posting".
  No follow-for-follow, no engagement pods language, no "double tap if".
  No affiliate links.
  Emoji: at most 1 per caption, and only where it replaces a word. Zero is fine
  and usually better.

--- CHRONICLES ---
Dex and Otis posts are written IN THE ANIMAL'S VOICE, 3 to 6 lines of the
actual scene from the file. Never "Part 12 is up". Keep Dex's register: he is
pompous and self-serious, and the comedy is that he is wrong about himself. Do
not invent events not in the file.

--- IMAGES ---
Frontmatter `image` verbatim. Never invent a path. Never reuse one image across
two posts in the same week. Prefer real Dex and Otis photos where the topic
allows.

--- GRID ---
Note for each post whether it is photo-led or text-card-led. Do not schedule 3
text cards consecutively, the grid goes flat.

=====================================================================
OUTPUT FORMAT. Nothing outside these sections.
=====================================================================

## Week at a glance
Table: Day | Fact (id + animal) | Article (species + kind) | Formats | Photo-led or text-led

## Day 1 through Day 7
Repeat this block once per post, in posting order, labelled FACT or ARTICLE.

  DAY / TIME:     one slot per post
  TRACK:          fact | article
  FORMAT:         single | carousel (n slides)
  SOURCE:         facts.js id=<n>   or   content/.../file.mdx
  QUOTE USED:     "<verbatim>"
  SUPPORTS:       <the one line in the caption this backs>

  CAPTION
  <paste ready>
  line 1 chars: <n>

  HASHTAGS
  <block>

  ALT TEXT
  <paste ready>

  CAROUSEL (if applicable)
  Slide 1: <text, max 8 words>  | IMAGE DIRECTION: <one line>
  Slide 2: <text, max 12 words> | IMAGE DIRECTION: <one line>
  ...

  IMAGE:          <frontmatter path>
  WHY THIS ONE:   <one sentence>

## Publer CSV
Only build this once the calendar above is approved. Do not generate it
alongside the first draft.

Read the real start date, never guess it:
    node scripts/social-inventory.mjs next-start --platform ig
If it prints "no nextStart set", this is the first batch on this platform.
Either way, confirm the real current date with the user before picking Day 1.
This sandbox's clock has drifted from the user's actual local time before,
silently, and there is no way to verify it from in here. Trust the user's
stated date/time over anything computed internally.

CSV columns (Publer's 12-column bulk template, do not remove or reorder any):
  Date          YYYY-MM-DD HH:MM, COLON between hours and minutes. A hyphen
                (08-30) silently fails to parse and the row lands as an
                unscheduled draft with no error shown, confirmed by a real
                failed batch on X. Slashes in the date part also work but
                are not required once the time uses a colon.
  Text          the caption, verbatim from above, hashtag block included.
                No url in this field, Instagram never makes caption links
                clickable regardless.
  Link(s)       leave EMPTY. There is no native link-post equivalent worth
                using here the way there is on X, and filling this risks
                Publer prioritizing a link post over the native photo.
  Media URL(s)  the FULL https://beastlyfacts.com/... path(s), not the
                relative frontmatter path. Comma-separated for a carousel.
                Must be real, live, public URLs, confirmed working before
                use, never assumed correct from the path alone.
  Alt text(s)   from the ALT TEXT block above. For a carousel, one entry
                per media URL, || separated, in the same order.
  Comment(s)    IMPORTANT, read before using: unlike X and Threads,
                Instagram does not hyperlink comment text either, the same
                restriction that already rules out a url in the caption.
                A url placed here is not clickable and does not solve the
                link-delivery problem. BIO TARGET stays the only real
                mechanism for getting someone to the article: it works
                because it is the one link slot IG actually renders as a
                tappable link. Comment(s) is only worth using here for a
                genuine non-link follow-up, a seeded question or added
                detail, never as a stand-in for the url.
  Everything else (Link Title, Label, Board/Album, Post subtype, CTA,
  Reminder) stays empty for a plain native IG post.

BIO TARGET days still need the bio link swapped by hand in Instagram itself.
The CSV has no column for that, it is not something Publer's bulk import
touches.

After the CSV is imported AND the user has confirmed it actually scheduled
correctly in Publer, not just generated:
    node scripts/social-inventory.mjs set-next-start --platform ig --through <last day used>
so the next batch picks up automatically without re-asking what day it is.

## Asset gaps
Every needs-new-asset call and every carousel slide with no existing image.
This is the shot list.

## Ledger
The exact commands to run once the week is actually posted, one line per item,
ready to paste. Nothing is consumed until these run, so a week that gets
scheduled but never marked will be proposed again.

    node scripts/social-inventory.mjs mark --platform ig --fact <id> --date YYYY-MM-DD
    node scripts/social-inventory.mjs mark --platform ig --article content/.../file.mdx --date YYYY-MM-DD

## Self check
State pass or fail on each. Fix failures before outputting.
  [ ] No em or en dashes anywhere
  [ ] No banned phrase
  [ ] Every line 1 reads complete at 125 chars
  [ ] Every post has alt text
  [ ] No hashtag block exceeds 10 tags or contains a banned tag
  [ ] No species repeats, across BOTH tracks
  [ ] No 3 text-led posts consecutively
  [ ] No two posts from the same track scheduled back to back
  [ ] Every article QUOTE USED appears verbatim in its named file
  [ ] Every fact QUOTE USED appears verbatim in facts.js under that id
  [ ] No image path used twice across the whole week
  [ ] A quarter or more of captions end on a real question, at least one a fact
  [ ] Ledger section lists a mark command for every post
  [ ] "link in bio" used 3 times or fewer, each with a BIO TARGET printed
  [ ] Every BIO TARGET is /blog/{slug}/, never /guides/{article-slug}/
