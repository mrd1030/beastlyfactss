# Publer CSV: the format that actually works

This is the proven, tested format. Every rule here was confirmed by a real
import that really scheduled and really posted, not by reading Publer's docs.
If another tool, chat, or article tells you the headers are wrong or that
comments and replies are impossible, they are wrong and this file is right.

Confirmed live on X and on Threads: single posts, single replies carrying a
url, and full multi-comment reply chains, all created from CSV import alone.

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

**Do not hand-type these files.** Use a generator script (see below), which
handles quoting automatically and cannot drift.

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

Do not build these by hand. Every batch we have shipped was generated by a
small Node script in the scratchpad that owns the quoting:

```js
function csvField(v) {
  v = v == null ? '' : String(v);
  if (/[",\n]/.test(v)) v = '"' + v.replace(/"/g, '""') + '"';
  return v;
}
```

Rows are objects keyed by the exact column names, then joined in the fixed
column order. This is what makes a 42 row X week reliable instead of a
guessing game.

Ask Claude for the batch and you get the file. The `/x-feed`, `/threads-feed`,
and `/ig-feed` commands each carry this same spec in their own Publer CSV
section, so they stay in sync with this document.

---

## Verifying before you import

Worth ten seconds, saves a broken batch:

```bash
python3 -c "
import csv,sys
rows=list(csv.reader(open(sys.argv[1],newline='')))
print('rows:',len(rows)-1)
h=rows[0]; print('cols:',len(h))
for r in rows[1:]:
    d=dict(zip(h,r))
    assert ':' in d['Date'], 'BAD DATE: '+d['Date']
    assert d['Link(s)']=='', 'LINK NOT EMPTY: '+d['Date']
print('ok')
" yourfile.csv
```

If it prints `ok` with the right row count and 12 columns, the file is good.

---

## After importing

1. Check a couple of rows in Publer's preview: right date, right time, image
   attached natively (not as a link card), comments present.
2. Hit submit.
3. Tell Claude it scheduled, so the ledger gets marked. Nothing is consumed
   until `social-inventory.mjs mark` runs, and an unmarked week gets proposed
   again next time.
