---
description: Build a 7 day Instagram calendar from repo content. Image first, carousel spec, hashtag blocks, alt text.
argument-hint: "[blank = Phase 1 shortlist + image audit] [go = Phase 2 write] [notes to steer picks]"
allowed-tools: Read, Glob, Grep, Bash(ls:*), Bash(sed:*), Bash(head:*), Bash(wc:*), Bash(sort:*), Bash(grep:*), Bash(awk:*)
---

# Instagram feed builder

ARGUMENTS: $ARGUMENTS

How to read the arguments:
- Empty, or anything that is not "go": run PHASE 1 only, then stop. Treat any
  extra text as steering for which sources to favor.
- Starts with "go": run PHASE 2 using the shortlist already approved earlier in
  this conversation. If there is no approved shortlist in context, say so and
  run PHASE 1 instead. Never invent a shortlist you were not given.

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

Content locations:
  content/guides/*.mdx       433 care guides, split cost / handling / health /
                             tank setup / feeding / legal
  content/fun-facts/*.mdx    20 listicles. Your best carousel source. Weight
                             toward them.
  content/short-story/*.mdx  26 chronicles. Dex (bearded dragon, pompous,
                             self-serious). Otis (bunny). Real photos at
                             /assets/images/dex/...
  content/blog/*.mdx         1 file. Ignore.
  content/_scheduled-*       NOT LIVE. Never source from here.

Every guide is status: "published", so status filters nothing. Sort by
frontmatter `date` descending, work from the most recent 60 files.

Pick 7 sources, weighted for visual strength:
  2 to 3 fun-facts (carousel candidates)
  2 to 3 care guides, different species, not all the same split type
  1 Dex chronicle (real photo, highest engagement potential)
  1 Otis chronicle

No species repeats across the week.

For each pick, output:
  FILE:       content/.../slug.mdx
  DATE:       <frontmatter date>
  QUOTE:      "<verbatim sentence from the BODY>"
  IMAGE:      <frontmatter `image` value, verbatim>
  IMAGE ALT:  <frontmatter `imageAlt` value, verbatim>
  CARRIES?:   YES or NO. Does this image, alone, at thumbnail size, make
              someone stop? Judge it from `imageAlt`, which describes what is
              actually in the frame.
  FORMAT:     single | carousel | needs-new-asset
  ANGLE:      <one line>

If CARRIES is NO and the source is a listicle, propose a carousel where slide 1
is a text card, which does not depend on the photo.
If CARRIES is NO and it is not a listicle, mark it needs-new-asset and pick a
different source. Do not ship a weak image with a strong caption.

QUOTE rules:
  From the body, never the seoTitle, excerpt, or description. It must be the
  sharpest claim in the piece, not a topic sentence. Character for character.
  It will be grepped.

Report how many of the 7 came back CARRIES: NO. If it is more than 3, say so
plainly. That is an asset problem, not a copy problem, and no prompt fixes it.

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
6.  End 3 of the 7 captions with a real question. Not "thoughts?". A question a
    keeper would answer with a specific setup or number.

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
Table: Day | Species | Format | Photo-led or text-led | Source file

## Day 1 through Day 7
  DAY / TIME:     one slot
  FORMAT:         single | carousel (n slides)
  SOURCE:         content/.../file.mdx
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

## Asset gaps
Every needs-new-asset call and every carousel slide with no existing image.
This is the shot list.

## Self check
State pass or fail on each. Fix failures before outputting.
  [ ] No em or en dashes anywhere
  [ ] No banned phrase
  [ ] Every line 1 reads complete at 125 chars
  [ ] Every post has alt text
  [ ] No hashtag block exceeds 10 tags or contains a banned tag
  [ ] No species repeats
  [ ] No 3 text-led posts consecutively
  [ ] Every QUOTE USED appears verbatim in its named file
  [ ] No image path used twice
  [ ] 3 or more captions end on a real question
  [ ] "link in bio" used 3 times or fewer, each with a BIO TARGET printed
  [ ] Every BIO TARGET is /blog/{slug}/, never /guides/{article-slug}/
