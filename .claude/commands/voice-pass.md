---
description: Fix one batch of articles that fail the voice checker. Same editing contract every session, commit by series, shrink the baseline.
argument-hint: "<slug regex, e.g. cost-guide or bearded-dragon> [limit N, default 20] [go]"
allowed-tools: Read, Edit, Glob, Grep, Bash(node scripts/check-voice.mjs:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*), Bash(git status:*), Bash(ls:*), Bash(grep:*), Bash(wc:*)
---

# Voice pass

ARGUMENTS: $ARGUMENTS

How to read the arguments:
- The first token is a regex matched against article slugs. It picks the
  series for this session. Examples: `cost-guide`, `bearded-dragon`,
  `health-issues-guide`, `enrichment-guide`, `^10-surprising`.
- `limit N` caps the batch. Default 20. Do not go above 25 in one session.
- Without `go`: run PHASE 1 only and stop. With `go`: run PHASE 1, then PHASE 2
  on the same list without asking again.

---

ROLE
You are the second-pass editor for BeastlyFacts. Mike wrote and researched
these articles. Your job is to make each one sound like a person made a call,
without changing a single fact, number, source, link, or component. Read
docs/RULES.md first, the "Writing an article" section in full. Every change you
make must trace to a rule there or to a checker finding.

PHASE 1: the list
1. Run `node scripts/check-voice.mjs --match "<regex>" --limit <N> --json .voice-batch/findings.json`
   and show the summary line and the per-article findings.
2. Say which rules dominate this batch in one sentence. Stop unless `go`.

PHASE 2: the edits, one article at a time
For each article in the findings, in order:
1. Read the whole file.
2. Fix only what the findings name, with these moves:
   - Intensifier (genuinely, actually, really, the real): delete it if the
     sentence survives. If it does not, the sentence had no claim, so rewrite
     the sentence to make one. Headings lose the word or get a new heading
     that names the point. The first sentence of the article never carries one.
   - FAQ copied from the body: rewrite that answer as two or three sentences
     that answer what the worried owner is asking. Every fact in the new
     answer must already appear in the body of the same article. Add no
     mechanism, transmission route, product name, cause, or outcome that is
     not written above. The new answer may not be longer than the one it
     replaces. Keep the one sign the owner can act on tonight. Strip
     intensifiers from the FAQ question too. Leave answers that were not
     flagged alone.
   - Never open an answer with a rhetorical beat ("No, and nothing sold as
     one changes that"). Answer, then the reason, then stop.
   - Opener link: the first paragraph is about the animal and carries no link.
     Move the care-guide link sentence to the end of the first section, same
     targets, as its own short paragraph that says why the reader would go
     there ("What all of this costs is in the cost guide.").
   - Closer dump: a closing paragraph with three or more links, or one ending
     in "browse the rest of our", becomes two plain sentences. Each link gets
     a reason. Every link stays, every target stays. Never delete a link to
     satisfy this rule.
   - Comma-as-dash and "X, not Y" warnings: vary the shape. Period first,
     colon second. Do not swap every instance for the same new shape.
   - First person on a documentary page: make it third person. Do not add a
     disclosure line.
3. Never touch: dates, slug, tags, category, image fields, any markdown link
   target, any <AffiliateLink>, any component, the <Sources> block. Do not add
   warmth, jokes, first person, or new claims. Do not add em or en dashes.
4. Re-run `node scripts/check-voice.mjs --slug <slug>` and confirm 0 errors
   before moving on. Then re-read every FAQ answer you rewrote against the
   body and delete any claim the body does not make. The first batch put an
   airborne transmission route into an adenovirus answer this way. If a rule cannot be satisfied without changing a fact,
   leave that finding and say so in the final list.
5. Move to the next article. Do not stop to ask between articles.

CLOSE
1. `node scripts/check-voice.mjs --write-baseline` so the fixed slugs drop out
   of scripts/voice-baseline.json.
2. `git diff --stat`, then one commit for the batch, message
   "Voice pass: <series>, N articles", including the baseline file. Push the
   working branch. Never push main from this command.
3. Final message: the slugs done, any findings left unfixed and why, and the
   new baseline count. Nothing else.
