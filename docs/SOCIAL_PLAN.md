# Social plan

The day shape per platform, the slot times, and the reply rules. The X and
Threads days below took effect on Saturday, October 31, 2026 (owner,
2026-10-31): five posts a day on both, the wallpaper slot gone, two
looked-up text slots in the evening. Instagram keeps its October 17 shape and
Pinterest is unchanged.

All times are US Eastern. The per-platform writing rules stay in the skills
(`.claude/commands/x-feed.md`, `threads-feed.md`, `ig-feed.md`) and in
`docs/pinterest-feed.md`; this page is the shape they fill.

## Threads: 5 posts a day, plus one-liners

Effective Saturday, October 31, 2026 (owner, 2026-10-31). Threads had
already moved on from the October 17 shape in three steps: one question a
day instead of two from October 23, facts posted as text with the card in
the reply from October 19, and the "Animal:" one-liners between the anchor
posts. This table is the whole current day.

| Slot | Post | Reply |
|---|---|---|
| 9:00 AM | Question. Plain text, no image. The bank's Threads version verbatim, take first, built to get a reply. The tag inside the sentence. | Self reply with our own answer, plus a planned reply for the first person who answers. |
| 12:00 PM | Fact as text, no image on the post. Different wording from X's version of the same fact, never the same copy. The tag inside the sentence. | The fact card, with no text. |
| 4:00 PM | Fact as text, same rules as 12:00 PM. | The fact card, with no text. |
| 8:00 PM | "Did you know?" A looked-up fact, text only, no image. See "Looked-up facts" below. | None. |
| 10:00 PM | "Fun Fact:" A looked-up fact, text only, no image. See "Looked-up facts" below. | None. |
| Between the anchors | "Animal:" one-line facts from the repo, no image, the tag inline. These are what pulled followers overnight. How many, set at Phase 1. | None. |

Per week from the repo: 14 facts (two a day) and 7 questions (one a day),
never a question the bank marks used on Threads. Per week looked up: 14,
one for each 8:00 PM and 10:00 PM slot.

Tags on Threads: exactly one per post, on a word already in the sentence,
on facts as well as questions. Common words only: #turtle, #fish, #bird,
#frog, never the species (#matamata, #axolotl), because the tag is a
community, not a label.

## X: 5 posts a day, 30 minutes behind Threads

| Slot | Post | Reply |
|---|---|---|
| 9:30 AM | Fact card. | First reply adds one detail the post left out. |
| 12:30 PM | Question card: the card headline from `social/questions.json` over the suggested animal's photo, with the one-line X version of the question as the post text. | First reply: one line that keeps it going. |
| 4:30 PM | Fact card. | First reply adds one detail the post left out. |
| 8:30 PM | "Did you know?" A looked-up fact, text only, no image. | None. |
| 10:30 PM | "Fun Fact:" A looked-up fact, text only, no image. | None. |

Every X post with a fact from the repo or a question carries a card; the two
looked-up slots are the exception and run as text. Two facts a day from the
repo, one question a day, never one the bank marks used on X. Mirror the
Threads facts where it makes sense (same fact, different register, never the
same copy).

The fact card rules stay as they are: full-bleed layout, full-sentence
headline of up to twelve words naming the animal or body part, first reply
adds one detail the post left out, no links in post or replies.

## Looked-up facts (8:00 PM and 10:00 PM on Threads, 8:30 PM and 10:30 PM on X)

The two evening slots carry information that is NOT in the repo yet: new
facts found by web research for the week, with real, verifiable sources,
the same standard as an article ("research" in CLAUDE.md). Rules:

- The post opens with the prefix exactly: "Did you know?" at the early slot,
  "Fun Fact:" at the late slot. One or two sentences after it, under 200
  characters on Threads, under 280 on X.
- Text only, no image, no reply, no link. The tag inside the sentence on
  Threads; no tag on X.
- One source per fact, a primary one (a university, museum, journal,
  government agency or recognized conservation body), with its URL recorded
  in the batch JSON as `source`. The URL is never posted.
- The same looked-up fact runs on both platforms in different wording, so a
  week needs 14 lookups, not 28.
- Never a fact already in `src/lib/data/facts.js` (grep the animal first)
  and never one already used in a looked-up slot: every one is logged in
  `social/looked-up-facts.json` (date, slot, platform, text, source) when
  the week is marked, and the log is read before the next week is written.
- The usual bans hold: no dashes, no "weird", none of the banned phrases.

`plan` does not propose these yet; they are written at Phase 2 and the log
is kept by hand until the inventory script learns the file.

## Wallpapers: off the schedule

The 9:30 PM Threads and 10:00 PM X wallpaper pairs are gone (owner,
2026-10-31), replaced by the two looked-up slots. The repo generates no
captions, replies or ledger entries for wallpapers. The Beastly Walls art
still runs where the owner posts it by hand, including the Instagram
Monday, Wednesday and Friday carousels, which now take their pairs straight
from the app rather than from an X or Threads week. The mechanics stay in
the repo for the day that changes: `mark --wallpaper`, the
`social-batches/pins/wallpapers/` file convention and the CSV builder's
`"type": "wallpaper"` row.

## Instagram: 1 post a day at 12:00 PM

| Day | Post |
|---|---|
| Mon, Wed, Fri | Wallpaper carousel from the owner's Beastly Walls pairs for the week (Monday carries Friday, Saturday and Sunday's pairs; Wednesday carries Monday and Tuesday's; Friday carries Wednesday and Thursday's), the phone mockup as the last slide. Posted by hand. |
| Tue, Thu, Sat, Sun | A fact carousel or a photo carousel, as before. |

The article post is dropped. Captions, hashtag block and alt text as before.

## Pinterest: no change

Four pins a day at the existing slots, the existing slot types, boards and
card specs, exactly as `docs/pinterest-feed.md` has them. Wallpaper pins are
a manual fifth slot the owner posts from the Beastly Walls app, outside the
repo.

## The question bank

`social/questions.json` holds about fifty questions for pet owners: the
story behind a name, the best "I did nothing wrong" face, the oldest pet
they have had, the weirdest thing their pet eats, and so on. No "comment YES" style bait, and nothing that sounds like a promise (owner,
2026-10-31): no "best one wins", no prize, feature, repost or shoutout
offered for answering. A question asks; it never offers. Each entry carries a Threads version (one or two lines,
take first), an X version (one line), a card headline, a suggested animal
for the card photo, the word that carries the Threads tag, and a used date
per platform.

`node scripts/social-inventory.mjs plan` proposes questions the way it
proposes facts and never a used one. A week needs 7 on each platform;
`stats` and `plan` flag a platform when fewer than 14 unused remain. `mark --platform threads --question <id>`
and `mark --platform x --question <id>` consume them.

## Fact picks: weird first

At Phase 1, prefer facts a reader stops on (strange, gross, "wait, what")
over pleasant ones. The sea cucumber organ fact did about three times the
views of the clownfish lifespan fact in the week of October 11. Those facts
tend to come from the Ocean, Weird & Wonderful and Invertebrates pools, and
the stranger end of Reptiles and Birds, so picks spread away from the
mammal default.

## Reply rules

Replies on other accounts' posts:

- One short line about the post, then "Fun fact:" and one or two sentences.
- Use "Did you know?" instead of "Fun fact" when the animal is hurt or
  dying.
- Read the top replies first and use a different fact if yours is already
  there.
- Skip death stories and political accounts.

Replies on our own posts:

- Answer every real comment and keep the back and forth going.
- Like and move on for anyone not worth engaging.

## Mechanics in the repo

| Piece | Where |
|---|---|
| Question bank | `social/questions.json`, shared helpers in `scripts/lib/social-questions.mjs` |
| Proposing, marking, the 14-unused flag, the wallpaper log | `scripts/social-inventory.mjs` (`questions`, `wallpapers`, `plan --questions-per-day`, `mark --question`, `mark --wallpaper`) |
| Question card | `scripts/generate-pins.mjs` with a spec of `{ "question": <id> }` and `--4x5` |
| Question CSV rows, and the wallpaper row kept for the day that changes | `scripts/build-social-csv.mjs` (`"type": "question"`, `"type": "wallpaper"`), documented in `docs/PUBLER_CSV_HOWTO.md` |
| Looked-up facts log | `social/looked-up-facts.json`, kept by hand (date, slot, platform, text, source) |
| Wallpaper upload (not in use, wallpapers are off the schedule) | `scripts/upload-pins.mjs` with the batch JSON, reads the files from `social-batches/pins/wallpapers/` |
