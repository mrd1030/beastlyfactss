---
description: Build a 7 day Threads calendar. Five posts a day at fixed slots (a question, two text facts with the card in the reply, two looked-up evening facts) plus one-line facts between them, take first, reply driven, no links anywhere.
argument-hint: "[blank = Phase 1 shortlist] [go = Phase 2 write] [cadence e.g. '1 fact'] [mirror x]"
allowed-tools: Read, Glob, Grep, Bash(ls:*), Bash(sed:*), Bash(head:*), Bash(wc:*), Bash(sort:*), Bash(grep:*), Bash(awk:*)
---

# Threads feed builder

ARGUMENTS: $ARGUMENTS

CURRENT SCOPE (owner, 2026-10-31, effective Saturday 2026-10-31). Supersedes
the 2026-10-17 and 2026-10-10 notes below wherever they differ. The full plan
across every platform is docs/SOCIAL_PLAN.md.
- DAY SHAPE: 5 posts a day at fixed slots plus one-liners, all times US
  Eastern. X runs the same shape 30 minutes later with cards where Threads
  runs text.
    9:00 AM   QUESTION. Text only, no image. The bank's Threads version
              verbatim, take first. The tag inside the sentence. SELF REPLY
              is our own answer; PLANNED REPLY as for any post.
   12:00 PM   FACT AS TEXT. The fact in Threads register, different wording
              from X's version of the same fact, no image on the post, the
              tag inside the sentence. The REPLY is the fact card (the --4x5
              card below) with no text. No self reply detail and no lead-in
              line: the card is the reply.
    4:00 PM   FACT AS TEXT. Same rules, a different fact.
    8:00 PM   "Did you know?" A LOOKED-UP fact, text only, no image, no
              reply. Rules under LOOKED-UP FACTS in docs/SOCIAL_PLAN.md.
   10:00 PM   "Fun Fact:" A LOOKED-UP fact, same rules.
   BETWEEN    "Animal:" ONE-LINERS: one-line facts from the repo, no image,
              no reply, the tag inline, placed between the anchor posts. How
              many is set at Phase 1 with the shortlist.
- FACTS: two a day from the repo, 14 a week, plus the one-liners. X runs the
  same two; mirror where it makes sense, never the same copy.
- QUESTIONS: one a day from social/questions.json, never one the bank marks
  used on Threads. `mark --platform threads --question <id>` consumes one.
- LOOKED-UP FACTS: 14 a week, one per evening slot, researched with a real
  primary source each, the URL in the batch JSON as `source` and never in
  the post. The same looked-up fact runs on X in different wording. Log them
  in social/looked-up-facts.json when the week is marked; read the log and
  grep facts.js first so nothing repeats.
- TAGS: one per post on a word already in the sentence, on facts and
  one-liners as well as questions. Common words only (#turtle, #fish, #bird,
  #frog), never the species name (#matamata).
- WALLPAPERS: gone from the schedule (owner, 2026-10-31). No wallpaper
  rows, replies or ledger lines.
- CSV: a question row is `"type": "question"` with text, the self reply and
  no media. A fact row has the text and NO media url; the card goes on the
  reply, and the CSV Comment(s) column is text only, so the card reply is
  attached in Publer by hand after import. Looked-up and one-liner rows are
  text with no media and no comment.

CURRENT SCOPE (owner, 2026-10-17, effective Friday 2026-10-17). Superseded by the 2026-10-31 scope above. Supersedes
the 2026-10-10 note below wherever the two differ. The 2026-10-10 rules on
the fact card and on links still hold. The full plan across every platform,
with the reply rules, is docs/SOCIAL_PLAN.md.
- DAY SHAPE: 4 posts a day at fixed slots, all times US Eastern. X runs the
  same shape 30 minutes later with cards where Threads runs text.
    9:00 AM   QUESTION. Text only, no image. The Threads version from
              social/questions.json, verbatim: take first, one or two lines,
              built to get a reply. One community tag as now, on the word
              the entry's `tag` field names, which is already in the
              sentence. PLANNED REPLY and SELF REPLY as for any post.
   12:00 PM   FACT CARD. The fact card rules below, unchanged.
    4:00 PM   QUESTION. Same as 9:00 AM, a different entry.
    9:30 PM   WALLPAPER PAIR. Two images from the owner's Beastly Walls app,
              side by side, no caption. The owner supplies the week's seven
              pairs with the Phase 1 approval: the two animals per night and
              the images, so the reply can be written from what the art
              shows. One self reply per pair, posted right after: a short
              fact tied to what the art shows (the pose, the setting, the
              animal's look), sourced from the repo like any other fact. The
              same pair runs on X at 10:00 PM; the reply is rewritten, not
              copied. POSTED BY HAND (owner, 2026-10-17): the owner uploads
              the wallpaper posts to Publer themselves. Do not upload
              wallpaper files and do not put wallpaper rows in the CSV. The
              hand-off is the WALLPAPER SHEET in the X skill, which carries
              both platforms' slots and replies.
- FACTS: one a day, 7 a week. X needs two a day; mirror X's picks where it
  makes sense, same fact in a different register, never the same copy.
- QUESTIONS: two a day from social/questions.json, never one the bank marks
  used on Threads. `plan` proposes them with the fact and warns when the
  bank runs under 14 unused, which is one Threads week. `mark --platform
  threads --question <id>` consumes one.
- WALLPAPERS: no animal in two wallpaper posts in the same week. Log each
  pair once with `mark --wallpaper "Animal A,Animal B" --date YYYY-MM-DD`
  (shared with X, not per platform), which refuses a repeat within six days
  either side. `plan` prints the animals used in the last week.
- WEIRD FIRST at Phase 1: see the shortlist rule under PHASE 1.
- CSV: a question row is `"type": "question"` with text, the self reply, and
  no media. Wallpapers stay out of the CSV (posted by hand); the builder's
  `"type": "wallpaper"` row exists for the day that changes. See Publer CSV
  below.

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
- Default cadence: 2 facts a day (2026-10-10). Since 2026-10-17 it is 1 fact
  a day at 12:00 PM, with two questions and the wallpaper pair making up the
  four; "2 facts" in the arguments overrides it. Any article count in the
  arguments is ignored.

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

WEIRD FIRST (owner, 2026-10-17). Prefer facts a reader stops on: strange,
gross, "wait, what", over pleasant ones. The sea cucumber organ fact did
about three times the views of the clownfish lifespan fact in the week of
2026-10-11. Those facts tend to come from the Ocean, Weird & Wonderful and
Invertebrates pools (and the stranger end of Reptiles and Birds), not from
the mammal default, so when `plan` hands back a pleasant mammal fact, swap it
for the strangest unused one in those pools and say so. DISAGREES still
gates: the best pick is strange and arguable.

Questions come out of the same `plan` run (two a day on Threads by default,
--questions-per-day overrides), drawn from social/questions.json and never
one the bank marks used on Threads. Keep the two questions in one day on
different kinds of pet (one for a dog or cat person, one a keeper can
answer) so the morning and afternoon do not read as the same post.

Useful when overriding:
    node scripts/social-inventory.mjs questions --platform threads --unused
    node scripts/social-inventory.mjs wallpapers
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

For each QUESTION pick, output:
  QUESTION ID: <id from social/questions.json>
  ANIMAL:      <animal field>  TAG: #<tag field>
  THREADS:     "<threads field, verbatim>"

For each WALLPAPER day, output (from what the owner supplied, so at Phase 1
this block is usually "pending the owner's pairs" and fills in with the
approval):
  DATE:     YYYY-MM-DD
  ANIMALS:  <animal a> + <animal b>
  CLEAR:    yes, or the animal that already ran in a wallpaper this week

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
3.  NO url anywhere, post or replies (owner, 2026-10-10), same as X. People
    reach the site through the profile link, and the card's footer already
    names BeastlyFacts.com. No "link in bio" line in the text either.
4.  Exactly ONE topic tag per post (Threads allows one), on a single word
    that is ALREADY in the sentence: "#Cats cannot taste sweet." Threads keeps
    the tagged word in the text, so a tag tacked onto the end leaves a stray
    word there (seen in Publer's preview, 2026-10-10). Tag a plain word with
    no apostrophe ("#Dogs have a nose", not "A #dog's nose"), because the tag
    stops at punctuation, and single words only, since a multi-word topic
    through a Publer CSV stops at the first space. Pick the community that
    fits the animal (a frog is a frog or an amphibian, never a reptile).
5.  Write for the reply. Every post should leave an obvious opening: a number
    someone will want to correct, a setup someone will want to compare, or a
    claim someone will want to qualify.
6.  Write a PLANNED REPLY for each post: what the account says back when the
    first person responds. This is reactive, off the CSV, not something to
    schedule, and it should not be improvised when the moment comes.
7.  Write a SELF REPLY for every post: one added detail, stat, or angle the
    main post didn't cover, never a repeat of it and never a url. This is a
    documented working signal on Threads specifically, distinct from
    engagement bait, because it adds real content and extends dwell time.
    Every post carries exactly that one comment (a thread carries its chain
    instead). It goes in Comment(s), so it fires within seconds of the main
    post, inside the 15-to-30-minute window that counts most.
8.  Post the requested cadence, no more. Since 2026-10-31 the slots are
    fixed: 9:00 AM question, 12:00 PM fact as text, 4:00 PM fact as text,
    8:00 PM "Did you know?", 10:00 PM "Fun Fact:", US Eastern, with the
    "Animal:" one-liners between them. Do not move them.
10. A fact post is text; its reply is the fact card with no text. Rule 7's
    self reply does not apply to fact posts, looked-up posts or one-liners.
11. A looked-up post opens with its prefix exactly ("Did you know?" or
    "Fun Fact:"), then one or two sentences under 200 characters, text only,
    no reply. Its source URL goes in the batch JSON, never in the post.
9.  A question post is the bank's Threads version verbatim, with the tag on
    the word its `tag` field names. Its SELF REPLY is our own answer to the
    question, or the first real example, so the thread is never empty when
    the first person arrives. Its PLANNED REPLY keeps the back and forth
    going: ask about their answer, never close it.

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
  No url anywhere in the thread.
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
Table: Day | 9:00 question (id + animal) | 12:00 fact (id + animal) | 4:00 fact (id + animal) | one-liners (ids) | 8:00 did you know (animal) | 10:00 fun fact (animal)

## Day 1 through Day 7
Repeat this block once per post, in posting order, labelled QUESTION, FACT,
ONE-LINER or LOOKED-UP (ARTICLE only when the owner asks for the article
track back).

  DAY / TIME:     one slot per post
  TRACK:          question | fact | one-liner | looked-up | article
  SHAPE:          position | number | confession | scene | ask | thread
  SOURCE:         facts.js id=<n>   or   questions.json id=<n>   or   content/.../file.mdx   or   a looked-up fact's source URL
  QUOTE USED:     "<verbatim>"   (a question: its threads field; a looked-up fact: the sentence from the source it rests on)
  SUPPORTS:       <the one line in the post this backs>

  POST
  <paste ready>
  chars: <n>

  SELF REPLY
  <a question: our own answer. A fact: THE CARD, no text. A one-liner or a looked-up fact: NONE>

  PLANNED REPLY
  <what we say back to the first responder>

  REPLY HOOK:     <one line: what opening this post leaves>
  IMAGE:          <a fact: the card's photo, in the reply. Everything else: none>
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
  Text          the main post, verbatim from above. No url, ever.
  Link(s)       leave EMPTY. Per Publer's docs this column takes priority
                over Media URL(s) on platforms that support link sharing,
                and produces a link-preview post instead of the native image
                this format exists to deliver. Confirmed: an empty Link(s)
                column is what makes the image attach natively.
  Media URL(s)  the card: https://pins.beastlyfacts.com/<out>-4x5.jpg. Since
                2026-10-11 every post carries a 4x5 card, not a bare photo;
                the card rules (which layout, no prices, no legal verdicts,
                the source's own photo) are the IMAGES block in
                .claude/commands/x-feed.md. Upload before building the CSV,
                not the relative frontmatter path. Must be a real, live, public
                URL. Confirmed working before use, never assumed correct
                from the path alone. Since 2026-10-31 a Threads FACT row
                also leaves this EMPTY: the card goes on the reply, attached
                in Publer by hand after import, because Comment(s) carries
                text only. Question, one-liner and looked-up rows are text
                with no media. No wallpaper rows (the builder's "type":
                "wallpaper" row is there for the day that changes).
  Comment(s)    a question's SELF REPLY, no url. Empty for a fact row (the
                card reply is added by hand), a one-liner or a looked-up
                fact. For a thread, every post after the first goes here,
                joined by ||. The PLANNED REPLY is
                different: it is for the account to send once someone
                actually responds, and it does not belong in the CSV. Each
                comment fires automatically in order once the main post goes
                live, no Condition needs to be set. Confirmed live on both X
                and Threads: a single reply and chains of 3 and 4 comments,
                all landing in order within seconds of the main post.
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
    node scripts/social-inventory.mjs mark --platform threads --question <id> --date YYYY-MM-DD
    node scripts/social-inventory.mjs mark --platform threads --article content/.../file.mdx --date YYYY-MM-DD

One-liners are marked like any fact. Looked-up facts have no id: append each
to social/looked-up-facts.json (date, slot, platform, text, source) when the
week is marked.

## Self check
State pass or fail on each. Fix failures before outputting.
  [ ] No em or en dashes anywhere
  [ ] No banned phrase
  [ ] Every post leads with the take, no setup line
  [ ] No url anywhere, posts or replies
  [ ] Exactly one topic tag per post, on a word already in the sentence, none trailing
  [ ] No shape used twice consecutively
  [ ] No species repeats across the week
  [ ] Every fact QUOTE USED appears verbatim in facts.js under that id
  [ ] Every fact post is text with its own fact photo card as the reply, crop checked, no photo used twice
  [ ] Every day has the five slots at 9:00, 12:00, 4:00, 8:00 and 10:00, nothing moved, one-liners between them
  [ ] Every question is unused on Threads in social/questions.json, text verbatim, tag on its named word
  [ ] Every tag is a common word, never a species name
  [ ] Every looked-up fact opens with its exact prefix, has a primary source URL in the batch JSON, is not in facts.js and not in social/looked-up-facts.json
  [ ] Every question and fact post has a planned reply written
  [ ] Every question has one self reply with our answer, no url; no other post carries a text reply
  [ ] No copy identical to the X or IG calendar
  [ ] Ledger section lists a mark command for every post
