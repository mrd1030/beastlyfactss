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
   - Hedges and qualifiers are facts, not filler. "can be", "may", "a real
     chance of", "tends to", "usually", "generally", "roughly", "often",
     "sometimes" carry over verbatim into any rewrite. "Can bite" never
     becomes "will bite". If dropping a hedge is the only way to make an
     answer shorter, leave the answer alone.
   - An unflagged sentence may be cut or tightened when that makes the
     article read better: a section restating an earlier one, a warning
     repeated three times, the site talking about itself. Never to satisfy
     the checker, never a fact, number, or hedge, and every such edit goes
     in the report with before and after.
   - Opener link: the first paragraph is about the animal and carries no link,
     and neither does the rest of the first section. A care-guide sentence
     or a "companion guides on cost, feeding, handling, and cage setup"
     list under the opener is deleted, not moved (RULES, Linking). The Deep
     Dive list carries the care guide and every sibling guide.
   - Closer dump: a closing paragraph with three or more links, or one ending
     in "browse the rest of our", loses every sentence that exists only to
     link a same-species sibling guide, the care guide hub, or a category
     page; the Deep Dive carries those. What remains (an encyclopedia,
     overview, or cross-species sentence) stays as one plain paragraph with
     a reason per link. Inside content sentences, a "covered in our X guide"
     clause is cut and the point kept. Describe a linked page only in words the original
     sentence already used. "Other small mammals with bonding routines of
     their own" was invented, and "The species away from its care sheet" is
     not a sentence. The shape is imperative: "For the rest of their setup,
     see our [cost guide] and [handling guide]. For their health, see the
     [health issues guide]." Never "X is in the [guide]", "X is covered in
     the [guide]", "The rest of our [category] is there for more", or "There
     is more on the species in the [profile]". Keep every conjunction so no
     list dangles.
   - Excerpt: if the excerpt carries an intensifier, delete the word or trim
     the clause. Do not rewrite the excerpt beyond that.
   - Warnings (contrast-cadence, comma-splice, faq-long, intensifier-title)
     are for a human read, not for you. Do not act on them. In particular,
     never touch "rather than": swapping it for "not" or "never" turns a
     preference into a prohibition, which is how "released rather than
     presented" became "released, never presented".
   - Only edit a sentence that contains a flagged word or is one of the
     named structural moves. A sentence with no trigger keeps its wording
     and its punctuation, comma splices included. You are not here to
     standardize phrasing.
   - When rewriting an FAQ answer that reports results, keep the original
     order of findings. Never move a null or unflattering result behind a
     positive one.
   - First person on a documentary page: make it third person. Do not add a
     disclosure line.
   - Hedges are facts. "can", "may", "often", "typically", "usually",
     "many", "some" survive every rewrite, and "should" never becomes "needs"
     or "must". Do not swap "recommending" for "push", "commonly recommended"
     for "the common recommendation", or "many keepers" for "most keepers".
   - Warnings are for humans. Never touch "rather than", comma-splice, or
     "X, not Y" sentences unless the finding is an error. Never touch a
     sentence no finding names, and never delete a clause to shorten one.
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
