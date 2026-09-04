# Publer CSV: the format that actually works

This is the proven, tested format. Every rule here was confirmed by a real
import that really scheduled and really posted, not by reading Publer's docs.
If another tool, chat, or article tells you the headers are wrong or that
comments and replies are impossible, they are wrong and this file is right.

Confirmed live on X and on Threads: single posts, single replies carrying a
url, and full multi-comment reply chains, all created from CSV import alone.

Three full weeks have now gone out this way, most recently the 9/5 to 9/11
batch (X 42 posts, Threads 21, IG 11), all uploaded and queued without
incident.

**This document covers the CSV format itself.** For the end-to-end process of
building a week, which sources to pull, how to verify claims, what to check
before importing, and what to run afterward, see
`docs/SOCIAL_WEEK_RUNBOOK.md`.

---

## The header row, verbatim

Copy this exact line as row 1. Do not rename, reorder, translate, or remove
any column, including the ones you leave empty.

```
Date,Text,Link(s),Media URL(s),Title,Label(s),Alt text(s),Comment(s),Board/Album,Post subtype,CTA,Reminder
```

Twelve columns. The empty ones are not optional padding, they hold the
positions Publer expects. A row with eight columns because you dropped the
blank ones will not map correctly.

---

## The two mistakes that silently break everything

### 1. The time separator must be a colon

```
2026-08-29 10:00     correct, schedules properly
2026-08-29 10-00     WRONG, silently fails
```

A hyphen in the time does not throw an error. It does not warn you. The row
imports and lands as an **unscheduled draft**, which looks like the import
half-worked. This cost us a full 21 post batch before we caught it.

The date part is more forgiving, `2026-08-29` and `2026/08/29` both parse.
It is only the time that must use a colon.

### 2. Link(s) must stay EMPTY

Leave the `Link(s)` column blank on every row, always, on all three
platforms.

Per Publer's own behavior, `Link(s)` takes priority over `Media URL(s)` on
platforms that support link sharing. Put a url there and you get a link
preview card instead of the native photo post, which is the exact format
that was getting 1 to 8 views before we changed approach.

Urls go in `Comment(s)`, never in `Link(s)`, and never in `Text`.

---

## How comments and replies actually work

This is the part other tools claim is impossible. It is not.

The `Comment(s)` column creates real replies that fire automatically, in
order, seconds after the main post goes live. No condition, trigger, or
manual step needed.

**One reply:** just put the text in `Comment(s)`.

**A chain of replies (a thread):** join them with a double pipe `||`, no
spaces around it.

```
first reply||second reply||third reply with the url
```

Each segment becomes its own reply, chained in sequence. A four segment
value produces four replies. Confirmed landing in order roughly four
seconds apart on X, and confirmed on Threads.

So an X thread is **one CSV row**, not four. The main post goes in `Text`,
and every post after it goes in `Comment(s)` joined by `||`.

---

## Quoting rules (this is why hand-editing breaks)

CSV quoting is the other place hand-built files fall apart.

- Any field containing a comma, a double quote, or a line break **must** be
  wrapped in double quotes.
- A literal double quote inside a quoted field is escaped by **doubling it**:
  `"she said ""no"" firmly"`.
- Line breaks inside a quoted field are fine and are how multi line captions
  work.

Almost every caption we write contains a comma, so almost every `Text` and
`Comment(s)` field ends up quoted. Getting this wrong shifts every column
right and produces exactly the "headers are wrong" symptom people report.

**Do not hand-type these files.** Use `scripts/build-social-csv.mjs` (see
below), which handles quoting automatically and cannot drift.

---

## Column by column

| Column | What goes in it |
|---|---|
| `Date` | `YYYY-MM-DD HH:MM`, colon in the time, 24 hour clock |
| `Text` | The main post, verbatim. Never a url. IG captions include the hashtag block here |
| `Link(s)` | **Always empty** |
| `Media URL(s)` | Full `https://beastlyfacts.com/...` url. Comma separated for an IG carousel |
| `Title` | Empty |
| `Label(s)` | Empty |
| `Alt text(s)` | IG only. One entry per media url, `\|\|` separated, same order |
| `Comment(s)` | Replies. `\|\|` separated for a chain. Where every url lives |
| `Board/Album` | Empty |
| `Post subtype` | Empty |
| `CTA` | Empty |
| `Reminder` | Empty |

Media urls must be the full public https path, not the relative frontmatter
path. `/assets/facts/crow.jpg` will not work, `https://beastlyfacts.com/assets/facts/crow.jpg`
will.

---

## Per platform differences

**X**
- Every post gets a link in the first reply, facts included.
- A thread is one row, chain in `Comment(s)`, url on the last chain item.
- No hashtags.

**Threads**
- Every article post links in the first reply.
- Every fact post carries two comments: an added detail first, then the
  fact card link. Joined with `||`.
- Topic tags cannot be set through the CSV, add those in app if you want them.

**Instagram**
- Comments are not clickable on IG, so no urls anywhere, in caption or
  comment. The bio link stays fixed at beastlyfacts.com.
- `Comment(s)` still gets used, for a keyword rich pinned comment that
  extends the caption. It is a search signal, not a link.
- `Alt text(s)` matters here and is worth filling every time.
- Carousels: comma separated media urls, and the same number of `||`
  separated alt texts in matching order.

---

## Generating a file

Never build these by hand. Use the committed builder:

```bash
node scripts/build-social-csv.mjs batch.json            # writes batch.csv
node scripts/build-social-csv.mjs batch.json -o week.csv
node scripts/build-social-csv.mjs batch.json --check    # validate, write nothing
```

The script owns everything mechanical: the exact header, CSV quoting, the
colon in the time, keeping `Link(s)` empty, joining reply chains with `||`,
matching alt count to media count. It was verified by rebuilding a batch that
had already imported successfully and diffing, byte identical.

What it does not do is write the copy. Captions, hooks, thread posts, and
reply lines still get written, that part is not mechanical. The split is:
Claude writes the words into a batch JSON, the script turns that into a
correct CSV and refuses to emit a broken one.

### Batch JSON shape

```json
{
  "platform": "x",
  "posts": [
    {
      "date": "2026-09-05 10:00",
      "text": "the main post, no url in here ever",
      "media": ["https://beastlyfacts.com/assets/facts/crow.jpg"],
      "comments": [
        "the first reply",
        "the second reply, chained after it",
        "Full guide with more detail here → https://beastlyfacts.com/blog/some-guide/"
      ]
    }
  ]
}
```

- `comments` is the whole reply mechanism. One entry is a single reply,
  several entries become a chain. **An X thread is one post object with its
  follow-ups in `comments`, not four post objects.**
- `media` takes several urls for an IG carousel, one otherwise.
- `alt` is IG only, one entry per media url, in the same order.
- There is no `link` field on X, IG, or Threads, on purpose. `Link(s)` is
  always empty there, and passing one is a hard error.

### Pinterest is the exception

Pinterest inverts the central rule, so it gets its own shape. It is a search
channel, not a conversation one: the outbound link is the product, and there
are no replies at all.

```json
{
  "platform": "pinterest",
  "posts": [
    {
      "date": "2026-09-12 09:00",
      "text": "the pin description, 100 to 200 characters, natural keywords",
      "link": "https://beastlyfacts.com/blog/rosy-boa-health-issues-guide/",
      "title": "The Rosy Boa Humidity Mistake",
      "board": "Reptile Care & Setups",
      "media": ["https://beastlyfacts.com/assets/pins/rosy-boa-humidity.jpg"],
      "alt": ["A rosy boa coiled on dry aspen substrate."]
    }
  ]
}
```

- `link`, `title`, and `board` are all **required**, and rejected on every
  other platform.
- The board must already exist in Pinterest before the import runs.
- One image per pin, and it has to be a generated card under `/assets/pins/`
  from `scripts/generate-pins.mjs`, **merged and deployed first** or Publer
  fetches a 404.
- `comments` must be absent. Passing one is an error.

Full channel rules, boards, cadence, and the font setup the generator needs
live in `docs/pinterest-feed.md`.

### What it refuses to build

Any of these fails the whole run and writes nothing, because a half-good CSV
is worse than none, the bad rows land as unscheduled drafts and look like they
worked:

- a hyphen instead of a colon in the time
- a url in `text`
- a relative or off-site media path
- a post with no comments
- two posts sharing a time slot, or sharing an image
- IG alt count not matching image count
- a url in an IG comment (not clickable, does nothing)
- an em or en dash anywhere

Errors name the post and the problem:

```
2 problem(s), nothing written:

  post 1 (2026-09-05 10-00): date must be YYYY-MM-DD HH:MM with a colon in the time, got "2026-09-05 10-00"
  post 4 (2026-09-05 16:00): no comments, every post gets at least one reply
```

The `/x-feed`, `/threads-feed`, and `/ig-feed` commands each carry this same
spec in their own Publer CSV section, so they stay in sync with this document.

---

## Verifying before you import

If Claude handed you a CSV rather than a JSON batch, the validation already
ran. If you built or edited a batch yourself, run it:

```bash
node scripts/build-social-csv.mjs batch.json --check
```

A clean run prints the platform, post count, posts per day, and how many have
reply chains. Check those numbers match what you expect before importing.

---

## After importing

1. Check a couple of rows in Publer's preview: right date, right time, image
   attached natively (not as a link card), comments present.
2. Hit submit.
3. Tell Claude it scheduled, so the ledger gets marked. Nothing is consumed
   until `social-inventory.mjs mark` runs, and an unmarked week gets proposed
   again next time.
