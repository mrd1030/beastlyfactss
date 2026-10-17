# Social plan

The day shape per platform, the slot times, and the reply rules. This plan
took effect on Friday, October 17, 2026 (owner, 2026-10-17). It replaces the
"facts only" scope of October 10 on X and Threads where the two differ, and
the two-track day on Instagram. Pinterest is unchanged.

All times are US Eastern. The per-platform writing rules stay in the skills
(`.claude/commands/x-feed.md`, `threads-feed.md`, `ig-feed.md`) and in
`docs/pinterest-feed.md`; this page is the shape they fill.

## Threads: 4 posts a day

| Slot | Post |
|---|---|
| 9:00 AM | Question. Text only, take first, built to get a reply. One community tag as now, on a word already in the sentence. |
| 12:00 PM | Fact card. |
| 4:00 PM | Question. |
| 9:30 PM | Wallpaper pair. Two images side by side, no caption, one self reply with a short fact tied to the art. |

One fact a day. Two questions a day from `social/questions.json`, never one
the bank marks used on Threads.

## X: 4 posts a day, 30 minutes behind Threads

| Slot | Post |
|---|---|
| 9:30 AM | Fact card. |
| 12:30 PM | Question card: the card headline from `social/questions.json` over the suggested animal's photo, with the one-line X version of the question as the post text. |
| 4:30 PM | Fact card. |
| 10:00 PM | Wallpaper pair. Two images side by side, no caption, one self reply with a short fact tied to the art. |

X stays all images: every X post carries an image. Two facts a day. One
question a day, never one the bank marks used on X. Mirror the Threads fact
where it makes sense (same fact, different register, never the same copy).

The fact card rules stay as they are: full-bleed layout, full-sentence
headline of up to twelve words naming the animal or body part, first reply
adds one detail the post left out, no links in post or replies.

## Instagram: 1 post a day at 12:00 PM

| Day | Post |
|---|---|
| Mon, Wed, Fri | Wallpaper carousel from that week's pairs (Monday carries Friday, Saturday and Sunday's pairs; Wednesday carries Monday and Tuesday's; Friday carries Wednesday and Thursday's), the phone mockup as the last slide. |
| Tue, Thu, Sat, Sun | A fact carousel or a photo carousel, as before. |

The article post is dropped. Captions, hashtag block and alt text as before.

## Pinterest: no change

Four pins a day at the existing slots, the existing slot types, boards and
card specs, exactly as `docs/pinterest-feed.md` has them. Wallpaper pins are
a manual fifth slot the owner posts from the Beastly Walls app, outside the
repo.

## The wallpaper slot

The wallpapers come from the owner's Beastly Walls app, not the repo. At
Phase 1 of the X and Threads build the owner supplies the week's seven
pairs: two files each and the two animals shown.

- Files: `social-batches/pins/wallpapers/YYYY-MM-DD-a.jpg` and
  `-b.jpg`, uploaded in the same `scripts/upload-pins.mjs` run as the
  cards, served at `https://pins.beastlyfacts.com/wallpapers/YYYY-MM-DD-a.jpg`
  and `-b.jpg`.
- The post is the two images side by side with no caption. The Publer CSV
  builder takes it as `"type": "wallpaper"` with two media urls and no text.
- One self reply per pair, posted right after the wallpapers: a short fact
  tied to what the art shows (the pose, the setting, the animal's look),
  sourced from the repo like any other fact.
- The pair is logged once in `social-ledger.json` with
  `node scripts/social-inventory.mjs mark --wallpaper "Animal A,Animal B" --date YYYY-MM-DD`,
  which refuses an animal that ran in a wallpaper post within six days
  either side, so no animal appears in two wallpaper posts in the same week.

## The question bank

`social/questions.json` holds about fifty questions for pet owners: the
story behind a name, the best "I did nothing wrong" face, the oldest pet
they have had, the weirdest thing their pet eats, and so on. No "comment
YES" style bait. Each entry carries a Threads version (one or two lines,
take first), an X version (one line), a card headline, a suggested animal
for the card photo, the word that carries the Threads tag, and a used date
per platform.

`node scripts/social-inventory.mjs plan` proposes questions the way it
proposes facts and never a used one. `stats` and `plan` flag a platform
when fewer than 14 unused remain. `mark --platform threads --question <id>`
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
| Wallpaper and question CSV rows | `scripts/build-social-csv.mjs` (`"type": "wallpaper"`, `"type": "question"`), documented in `docs/PUBLER_CSV_HOWTO.md` |
| Wallpaper upload | `scripts/upload-pins.mjs` with the batch JSON, reads the files from `social-batches/pins/wallpapers/` |
