# Building a social week, end to end

The actual process, in order, with the real commands. Written while building
the week of 2026-09-05 so the steps are what was really run, not a
reconstruction.

Companion docs: `docs/PUBLER_CSV_HOWTO.md` for the CSV format itself, and the
three feed commands in `.claude/commands/` for the per-platform writing rules.

---

## What is automated and what is not

Worth being clear, because it sets expectations about where the time goes.

**Scripted** (`scripts/social-inventory.mjs`, `scripts/build-social-csv.mjs`):
which facts and articles are still unused per platform, image path resolution,
carousel eligibility, ledger marking, `nextStart` tracking, and every
mechanical part of producing the CSV.

**Not scripted:** choosing which sources to use, and writing the copy. A script
cannot decide that a rosy boa's humidity reversal is the interesting angle, or
write the line that makes someone stop scrolling.

So the shape of a week build is: run the tools to find out what is available,
write the copy, run the tools again to turn it into a valid CSV.

---

## Step 1: confirm the start date

```bash
node scripts/social-inventory.mjs stats
```

The `next batch starts` column is authoritative. Never derive the start date
from today's date, and never trust the sandbox clock, it has been wrong before
and put a whole batch out a day early.

For the 9/5 week all three platforms read `next batch starts 2026-09-05`, which
matched the request, so nothing needed confirming.

---

## Step 2: pull the unused pools

```bash
node scripts/social-inventory.mjs facts --platform x --unused --limit 300
node scripts/social-inventory.mjs articles --platform x --unused --kind guide --limit 400
node scripts/social-inventory.mjs carousel-species --min 5
```

Each platform has its own ledger, so the same source can run on all three. The
inventory only knows what has been `mark`ed, which is why marking after every
batch matters, see step 7.

**On species repeats:** the no-repeat rule is within a single week, not
forever. The fact pool now holds several facts per animal (`dog-2`, `cat-5`,
`octopus-4`), so "never reuse a species" would cap the account at roughly 90
posts total. Within a week, though, keep every species distinct across both
tracks.

---

## Step 3: pick sources and verify every claim

Cadence in use:

| Platform | Per day | Week total |
|---|---|---|
| X | 4 facts + 2 article threads | 42 posts |
| Threads | 2 facts + 1 article | 21 posts |
| IG | 1 fact, carousel every other day | 11 posts |

X runs hot because tweets decay independently. Threads and IG stay low because
posts there compete with each other, see the algorithm notes in the feed
commands.

Every claim gets read out of the repo before it is written into a post:

```bash
grep -h "{ id: 65," src/lib/data/facts.js
grep -m1 "^excerpt:" content/guides/rosy-boa-health-issues-guide.mdx
awk 'NR>50 && /^[A-Z]/ && length($0)>90 {print substr($0,1,240); exit}' content/guides/rabbit-cost-guide.mdx
```

Article quotes must come from the **body**, never the `excerpt` or
`description`. The `awk` line above pulls the first real body paragraph, which
is usually where the thesis sentence lives.

### Two real problems this caught on the 9/5 build

**A mistitled fact.** Fact 87 is a humpback whale fact titled "Sharks Can Be
Chatty", so its card URL would have been `/facts/sharks-can-be-chatty/` on a
whale post. Dropped it and used fact 178 (sperm whale) instead. The underlying
data bug is still there and worth fixing separately.

**Excerpts are not body text.** The first pass at the IG carousel quotes pulled
`excerpt:` frontmatter, which is not allowed as a source. Re-pulled from the
bodies.

---

## Step 4: verify every image exists

```bash
cd public
for f in assets/facts/swift.jpg assets/images/rosy-boa-health-issues.jpg; do
  [ -f "$f" ] || echo "MISSING $f"
done
```

69 images on the 9/5 build, all present. A missing image is not caught by
Publer at import time, it just produces a broken post, so this check happens
before any copy gets written.

Fact image paths come from the inventory output, not from guessing. Same for
fact card URLs:

```bash
node scripts/social-inventory.mjs facts --platform x --unused --limit 300 \
  | awk -F'\t' '{print $1"\t"$7}'
```

The slug is derived from the fact's **title**, not its animal or id, and the
slugify rules have edge cases ("and" becomes "-and-"), so always read the
resolved URL rather than building one by hand.

---

## Step 5: write the batch JSON

One file per platform. Shape is documented in `docs/PUBLER_CSV_HOWTO.md`.

Structural rules that are easy to get wrong:

- An X or Threads thread is **one post object**, with the follow-ups in
  `comments`. Not one object per chain post.
- X: every post gets a link in the first reply, facts included.
- Threads: fact posts get two comments, an added detail first, then the fact
  card link. Article posts get the link only.
- IG: no urls anywhere, comments are not clickable there. The comment is a
  keyword-rich pinned comment instead, and every image needs its own alt text.

---

## Step 6: build and check

```bash
node scripts/build-social-csv.mjs scratchpad/x-week3.json
```

Run from the repo root. The script takes an absolute path for the batch file
fine, but `scripts/...` is resolved relative to the working directory, so
running it from the scratchpad fails with `MODULE_NOT_FOUND`. That happened
twice on this build.

It writes nothing if any row is invalid. Beyond that, two checks the script
does not do, because they are editorial rather than structural:

**Question quota** (a quarter of posts should end on a real question):

```bash
python3 - <<'EOF'
import csv
rows=list(csv.reader(open('scratchpad/x-week3.csv',newline='')));h=rows[0];q=0
for r in rows[1:]:
    d=dict(zip(h,r));parts=d['Comment(s)'].split('||')
    last = parts[-2] if len(parts)>1 else d['Text']
    if last.strip().endswith('?'): q+=1
print(f"questions: {q}/{len(rows)-1}")
EOF
```

For a thread the question lives on the last content post, not the url reply,
which is why the check looks at `parts[-2]`. The 9/5 X week came in at 4 of 42
on the first pass and needed seven more questions added to clear 25%.

**IG line 1 and hashtag count** (line 1 truncates around 125 characters, 3 to 5
tags):

```bash
python3 - <<'EOF'
import csv
rows=list(csv.reader(open('scratchpad/ig-week3.csv',newline='')));h=rows[0]
for r in rows[1:]:
    d=dict(zip(h,r)); t=d['Text']
    line1=t.split('\n')[0]; tags=[w for w in t.split() if w.startswith('#')]
    print(d['Date'], len(line1), len(tags), 'LONG' if len(line1)>125 else '')
EOF
```

Two IG captions came in at 135 and 155 characters on the 9/5 build and had
their opening lines shortened.

---

## Step 7: after it is scheduled

Only once the batch is actually scheduled in Publer, not just generated:

```bash
node scripts/social-inventory.mjs mark --platform x --fact 65 --date 2026-09-05
node scripts/social-inventory.mjs mark --platform x --article content/guides/rosy-boa-health-issues-guide.mdx --date 2026-09-05
node scripts/social-inventory.mjs set-next-start --platform x --through 2026-09-11
```

For an IG carousel, each split guide is marked separately, five marks per
carousel.

Nothing is consumed until these run. An unmarked week gets proposed again next
time, which is exactly what happened when the first X week and its filler batch
both went unmarked and the ledger showed one fact posted instead of 28.

Commit `social-ledger.json` after marking.

---

## Time and effort

Roughly, for a full three-platform week: pools and source selection is quick,
claim verification and image checks are quick, and the writing is nearly all of
it. 74 posts across three platforms is a long single pass, not a background
task.
