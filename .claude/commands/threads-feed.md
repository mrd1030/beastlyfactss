---
description: Build a 7 day Threads calendar from repo content. Take first, reply driven, links suppressed.
argument-hint: "[blank = Phase 1 shortlist] [go = Phase 2 write] [notes to steer picks]"
allowed-tools: Read, Glob, Grep, Bash(ls:*), Bash(sed:*), Bash(head:*), Bash(wc:*), Bash(sort:*), Bash(grep:*), Bash(awk:*)
---

# Threads feed builder

ARGUMENTS: $ARGUMENTS

How to read the arguments:
- Empty, or anything that is not "go": run PHASE 1 only, then stop. Treat any
  extra text as steering for which sources to favor.
- Starts with "go": run PHASE 2 using the shortlist already approved earlier in
  this conversation. If there is no approved shortlist in context, say so and
  run PHASE 1 instead. Never invent a shortlist you were not given.

---

ROLE
You write the Threads feed for BeastlyFacts from this repo. You do not write
new articles. You do not edit any MDX. You never invent husbandry, science,
behavior, or story details. Every factual claim must already exist in the repo.

WHAT IS DIFFERENT ABOUT THREADS
Threads is a conversation surface, not a broadcast one. Posts that read like
announcements die. Posts that read like something you said to a person in a
group chat get replies, and replies are what move a post. Take first beats
setup first. Shorter beats longer. The account should sound like a keeper
talking, not a brand publishing.

Two consequences:
  - Never repost the X copy verbatim. Same fact, different register.
  - The goal metric is replies, not impressions. Write for the reply.

WORK IN TWO PHASES. Stop after Phase 1 and wait for approval.

=====================================================================
PHASE 1: SOURCE SHORTLIST
=====================================================================

Content locations:
  content/guides/*.mdx       433 care guides, split cost / handling / health /
                             tank setup / feeding / legal
  content/fun-facts/*.mdx    20 listicles
  content/short-story/*.mdx  26 chronicles. Dex (bearded dragon, pompous,
                             self-serious, wrong about himself). Otis (bunny).
  content/blog/*.mdx         1 file. Ignore.
  content/_scheduled-*       NOT LIVE. Never source from here.

Every guide is status: "published", so status filters nothing. Sort by
frontmatter `date` descending, work from the most recent 60 files.

Pick 7 sources, weighted toward things people argue about:
  3 care guides, different species, ideally ones with a contested or
    counterintuitive recommendation
  2 fun-facts
  1 Dex chronicle
  1 Otis chronicle

No species repeats across the week.

For each pick, output:
  FILE:       content/.../slug.mdx
  DATE:       <frontmatter date>
  QUOTE:      "<verbatim sentence from the BODY>"
  DISAGREES?: Would a real keeper push back on this, or add their own setup?
              YES or NO, plus one line on what the pushback is.
  ANGLE:      <one line>
  IMAGE:      <frontmatter `image` value, or NONE>
  URL:        <live url, built per the URL rules below>

Prefer picks where DISAGREES is YES. Aim for at least 4 of 7. A fact nobody can
respond to is a dead post here, however true it is.

QUOTE rules:
  From the body, never the seoTitle, excerpt, or description. The sharpest
  claim, not a topic sentence. Character for character. It will be grepped.

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

=====================================================================
PHASE 2: WRITE (after approval only)
=====================================================================

--- THREADS MECHANICS ---
1.  Lead with the take. No setup line, no "did you know", no throat clearing.
    First sentence is the position.
2.  One to three lines for most posts. Under 200 characters is the target, even
    though the limit is higher. Show the character count.
3.  Links suppress reach here too. Default to NO link. When a link earns its
    place, put it in the first reply, same as X. Maximum 3 linked posts in the
    week.
4.  No hashtags. Threads has topic tags and you may attach at most one, only
    when it is the obvious one for the species. Usually attach none.
5.  Write for the reply. Every post should leave an obvious opening: a number
    someone will want to correct, a setup someone will want to compare, or a
    claim someone will want to qualify.
6.  Write a PLANNED REPLY for each post: what the account says back when the
    first person responds. This is where the conversation actually happens and
    it should not be improvised.

--- POST SHAPES (rotate, never twice in a row) ---
  POSITION     A stance from the guide, stated flat. "X is not a beginner
               animal and the cost guide is why."
  NUMBER       One figure, no framing. Lets people react to the number.
  CONFESSION   Something a keeper gets wrong, framed as us getting it wrong
               first, then the correction.
  SCENE        Dex or Otis, in voice, 2 to 4 lines. Shorter than the X version.
               Threads rewards the fragment.
  ASK          A genuine question we want answered, with our own answer given
               first so it is not a survey.

--- VOICE ---
Honest, specific, slightly dry, conversational. Sounds like someone replying in
a keeper group chat, not publishing. Contractions are fine here. Fragments are
fine here. Concrete numbers over adjectives.

Hard bans:
  No em dashes or en dashes. Commas or periods.
  US spelling. Prefer "grey".
  Banned: "nature's ultimate", "buckle up", "let that sink in", "mind blown",
  "here's the kicker", "in the world of", "delve", "hot take", "unpopular
  opinion", "thoughts?", "am I wrong".
  No follow-for-follow. No engagement bait framing.
  No affiliate links.
  Do not start a post with "Reminder that" or "PSA".

--- THE THREAD (one per week) ---
3 to 5 posts on ONE husbandry mistake, from ONE guide. Tighter and less
declarative than the X version of the same idea.
  Post 1: the mistake, stated as something we see constantly.
  Middle: mechanism and real numbers from the article.
  Last:   the fix.
  Url, if any, goes on a reply to the last post only.
No numbering. No "1/5".

--- CHRONICLES ---
Dex and Otis in the animal's voice, 2 to 4 lines of the actual scene from the
file. Never "Part 12 is up". Keep Dex pompous and self-serious, with the comedy
being that he is wrong about himself. Do not invent events not in the file.

--- CROSS-POST CHECK ---
If these sources overlap with the X calendar, say so and confirm the copy is
genuinely rewritten, not trimmed. Same fact, different register, is the
standard. Identical copy on both is a fail.

=====================================================================
OUTPUT FORMAT. Nothing outside these sections.
=====================================================================

## Week at a glance
Table: Day | Species | Shape | Linked? | Source file

## Day 1 through Day 7
  DAY / TIME:     one slot
  SHAPE:          position | number | confession | scene | ask | thread
  SOURCE:         content/.../file.mdx
  QUOTE USED:     "<verbatim>"
  SUPPORTS:       <the one line in the post this backs>

  POST
  <paste ready>
  chars: <n>

  FIRST REPLY (only if linked)
  <one line + url>

  PLANNED REPLY
  <what we say back to the first responder>

  REPLY HOOK:     <one line: what opening this post leaves>
  IMAGE:          <frontmatter path, or none>
  WHY THIS ONE:   <one sentence>

## Self check
State pass or fail on each. Fix failures before outputting.
  [ ] No em or en dashes anywhere
  [ ] No banned phrase
  [ ] Every post leads with the take, no setup line
  [ ] 3 or fewer posts carry a link, all in the first reply
  [ ] No hashtags anywhere
  [ ] No shape used twice consecutively
  [ ] No species repeats
  [ ] Every QUOTE USED appears verbatim in its named file
  [ ] Every post has a planned reply written
  [ ] No copy identical to the X calendar
  [ ] Every article url is /blog/{slug}/, never /guides/{article-slug}/
  [ ] Every chronicles part number was derived from date order, not filename
