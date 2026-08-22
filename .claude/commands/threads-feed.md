---
description: Build a 7 day Threads calendar from repo content. Take first, reply driven, links suppressed.
argument-hint: "[blank = Phase 1 shortlist] [go = Phase 2 write] [cadence e.g. '2 facts 2 articles'] [mirror x]"
allowed-tools: Read, Glob, Grep, Bash(ls:*), Bash(sed:*), Bash(head:*), Bash(wc:*), Bash(sort:*), Bash(grep:*), Bash(awk:*)
---

# Threads feed builder

ARGUMENTS: $ARGUMENTS

How to read the arguments:
- Empty, or anything that is not "go": run PHASE 1 only, then stop.
- Starts with "go": run PHASE 2 using the shortlist already approved earlier in
  this conversation. If there is no approved shortlist in context, say so and
  run PHASE 1 instead. Never invent a shortlist you were not given.
- CADENCE: if the arguments name a per-day volume ("2 facts 2 articles"), use
  it in both phases and pass it to the inventory script. Default 1 fact + 1
  article per day. Carry the same cadence into Phase 2 that Phase 1 was
  approved at.
- MIRROR: "mirror x" or "mirror ig" means propose only what that platform has
  already posted, so this run rewrites proven material rather than opening a
  new seam. Pass it through as --mirror. This is the most useful mode here,
  since a take that earned replies on X usually earns them again in a
  conversational register.
- Anything else is steering for which sources to favor.

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

TWO TRACKS, at the cadence the arguments ask for. Default 1 fact + 1 article
per day.

Do NOT read the content directories by hand and do NOT limit yourself to recent
files. The whole library is in play and it is far more than fits in context.
Both pools grow as facts and articles are added, so never quote a count from
memory or an earlier run. Start here every time:

    node scripts/social-inventory.mjs stats
    node scripts/social-inventory.mjs plan 7 --platform threads --facts-per-day N --articles-per-day M

Add --mirror x (or --mirror ig) when the arguments asked for a mirror run.

Threads keeps its own ledger bucket, so a source that already ran on X is still
unused here. That is deliberate: the same material is meant to run on all three
in different registers. Always pass --platform threads.

Useful when overriding:
    node scripts/social-inventory.mjs facts --platform threads --unused --limit 40
    node scripts/social-inventory.mjs articles --platform threads --unused --kind guide
    node scripts/social-inventory.mjs articles --platform threads --unused --kind chronicle

`plan` enforces: nothing this platform's ledger has consumed, category spread
scaled to the ask, no photo used twice in the run, no species repeated, split
types spread, no fact/article collision, and striping so one day never gets two
of the same kind. Treat its output as a starting shortlist, not a verdict.
Override any pick nobody could argue with, and say what you swapped and why.

Source shape:
  FACTS     src/lib/data/facts.js, curated facts keyed by stable id. Ids are
            load-bearing: favorites are keyed by id and gaps are deliberate.
            Never renumber, never invent an id.
  ARTICLES  content/guides (care guides split cost / handling / health / tank
            setup / feeding / legal / enrichment, plus standalone fact
            articles), content/fun-facts (listicles), content/short-story
            (chronicles: Dex the bearded dragon, pompous and self-serious;
            Otis the bunny). content/blog holds one file, ignore it.
            content/_scheduled-* is NOT LIVE.

For each FACT pick, output:
  FACT ID:    <id from facts.js>
  ANIMAL:     <animal>  CATEGORY: <category>
  QUOTE:      "<verbatim from the `fact` field>"
  DISAGREES?: YES or NO, plus one line on what the pushback is
  ANGLE:      <one line>
  IMAGE:      <resolved photo path>
  URL:        <fact url from the inventory>

For each ARTICLE pick, output:
  FILE:       content/.../slug.mdx
  DATE:       <frontmatter date>
  QUOTE:      "<verbatim sentence from the BODY>"
  DISAGREES?: YES or NO, plus one line on what the pushback is
  ANGLE:      <one line>
  IMAGE:      <frontmatter `image` value, or NONE>
  URL:        <live url, built per the URL rules below>

DISAGREES is the gate that matters on this platform. Would a real keeper push
back, correct a number, or volunteer their own setup? Prefer picks where the
answer is YES, and aim for at least half the week. Something nobody can respond
to is a dead post here, however true it is. Care guides with a contested or
counterintuitive recommendation are the richest seam, so weight toward them
when overriding.

QUOTE rules:
  Articles: from the BODY, never the seoTitle, excerpt, or description.
  Facts: from the `fact` field, the clause carrying the claim.
  The sharpest claim available, not a topic sentence. Character for character.
  It will be grepped.

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
  the link. The inventory script prints the resolved url for every fact, so use
  that rather than building it by hand.

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
    place, put it in the first reply, same as X. Cap linked posts at a fifth of
    the week's volume.
4.  No hashtags. Threads has topic tags and you may attach at most one, only
    when it is the obvious one for the species. Usually attach none.
5.  Write for the reply. Every post should leave an obvious opening: a number
    someone will want to correct, a setup someone will want to compare, or a
    claim someone will want to qualify.
6.  Write a PLANNED REPLY for each post: what the account says back when the
    first person responds. This is where the conversation actually happens and
    it should not be improvised.
7.  Post the requested cadence, no more. Give each post its own slot, spaced
    across the day, and never two from the same track back to back.

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

--- THE THREAD (an article slot filled this way instead of a single post) ---
Not a fixed weekly quota, and arguably more natural here than on X, since
this whole platform is a conversation surface. Still: use it only when a
source has one genuine mistake with a real mechanism and a real fix. Most
guides do not. Forcing it daily either burns your strongest thread-shaped
material fast or produces weak, formulaic threads that read as templated.
A few a week beats one a day.

3 to 5 posts on ONE husbandry mistake, from ONE guide. Tighter and less
declarative than the X version of the same idea.
  Post 1: the mistake, stated as something we see constantly.
  Middle: mechanism and real numbers from the article.
  Last:   the fix.
  Url, if any, goes on a reply to the last post only.
No numbering. No "1/5".

Mechanically this is one CSV row: the main post is Post 1, every post after
it goes in that row's Comment(s) column joined by ||, and each fires
automatically in order once the main post goes live. Publer's own docs
specifically name Threads as one of the platforms Comment(s) creates real
threaded discussions on, same as X. See Publer CSV below.

--- CHRONICLES ---
Dex and Otis in the animal's voice, 2 to 4 lines of the actual scene from the
file. Never "Part 12 is up". Keep Dex pompous and self-serious, with the comedy
being that he is wrong about himself. Do not invent events not in the file.

--- CROSS-POST CHECK ---
Overlap with X is expected, not a problem: each platform has its own ledger
bucket precisely so the same source can run on all three. A --mirror run is
overlap by design. What is NOT acceptable is the same COPY on two platforms.

For every source that has already run on X or IG, say so explicitly and confirm
the copy is genuinely rewritten rather than trimmed. Same fact, different
register, is the standard. Threads copy leads with the take, drops the setup,
runs shorter, and leaves a reply opening the X version did not need. If you
cannot make it read differently, pick another source.

=====================================================================
OUTPUT FORMAT. Nothing outside these sections.
=====================================================================

## Week at a glance
Table: Day | Species | Shape | Linked? | Source file

## Day 1 through Day 7
Repeat this block once per post, in posting order, labelled FACT or ARTICLE.

  DAY / TIME:     one slot per post
  TRACK:          fact | article
  SHAPE:          position | number | confession | scene | ask | thread
  SOURCE:         facts.js id=<n>   or   content/.../file.mdx
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

## Publer CSV
Only build this once the calendar above is approved. Do not generate it
alongside the first draft.

Read the real start date, never guess it:
    node scripts/social-inventory.mjs next-start --platform threads
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
  Text          the main post, verbatim from above. No url in this field,
                ever, unless the post is one of the rare linked ones, in
                which case put the url directly in Text rather than in
                Link(s) (see below).
  Link(s)       leave EMPTY for a native photo post. Per Publer's docs this
                column takes priority over Media URL(s) on platforms that
                support link sharing, and produces a link-preview post
                instead of the native image this format exists to deliver.
                For the rare linked post, put the url in Text and still
                leave Link(s) empty so the image stays attached natively.
  Media URL(s)  the FULL https://beastlyfacts.com/... path, not the
                relative frontmatter path. Must be a real, live, public
                URL. Confirmed working before use, never assumed correct
                from the path alone.
  Comment(s)    the FIRST REPLY or the PLANNED REPLY, carrying the url when
                there is one. For a thread, every post after the first goes
                here too, joined by ||. Each fires automatically in order
                once the main post goes live, no Condition needs to be set.
                Confirmed live on X: a single reply, and separately a full
                3-comment || chain, all landing in order roughly 4 seconds
                apart. Threads-the-platform specifically has not been
                separately tested, only X, so the first time a real thread
                runs here, check every post in the chain actually landed
                before trusting it blind on this platform too.
  Everything else (Link Title, Label, Alt text, Board/Album, Post subtype,
  CTA, Reminder) stays empty for a plain native Threads post.

After the CSV is imported AND the user has confirmed it actually scheduled
correctly in Publer, not just generated:
    node scripts/social-inventory.mjs set-next-start --platform threads --through <last day used>
so the next batch picks up automatically without re-asking what day it is.

## Ledger
The exact commands to run once the week is actually posted, one line per item,
ready to paste. Nothing is consumed until these run, so a week that gets
scheduled but never marked will be proposed again.

    node scripts/social-inventory.mjs mark --platform threads --fact <id> --date YYYY-MM-DD
    node scripts/social-inventory.mjs mark --platform threads --article content/.../file.mdx --date YYYY-MM-DD

## Self check
State pass or fail on each. Fix failures before outputting.
  [ ] No em or en dashes anywhere
  [ ] No banned phrase
  [ ] Every post leads with the take, no setup line
  [ ] Linked posts within a fifth of the week's volume, all in the first reply
  [ ] No hashtags anywhere
  [ ] No shape used twice consecutively
  [ ] No two posts from the same track scheduled back to back
  [ ] No species repeats, across BOTH tracks
  [ ] Every article QUOTE USED appears verbatim in its named file
  [ ] Every fact QUOTE USED appears verbatim in facts.js under that id
  [ ] No image path used twice across the whole week
  [ ] Every post has a planned reply written
  [ ] No copy identical to the X or IG calendar
  [ ] Every article url is /blog/{slug}/, never /guides/{article-slug}/
  [ ] Every chronicles part number was derived from date order, not filename
  [ ] Ledger section lists a mark command for every post
