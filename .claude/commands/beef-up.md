---
description: Expand one batch of thin articles from docs/BEEF_UP_PLAN.md with researched, sourced sections. Voice-checked before commit.
argument-hint: "<batch number 1-5> [go]"
allowed-tools: Read, Edit, Glob, Grep, WebSearch, WebFetch, Bash(node scripts/check-voice.mjs:*), Bash(node scripts/check-internal-links.mjs:*), Bash(node scripts/check-related-articles.mjs:*), Bash(git diff:*), Bash(git add:*), Bash(git commit:*), Bash(git push:*), Bash(git status:*), Bash(ls:*), Bash(grep:*), Bash(wc:*), Bash(TZ=America/New_York date:*)
---

# Beef up

ARGUMENTS: $ARGUMENTS

The first token is the batch number in docs/BEEF_UP_PLAN.md. Without `go`:
run PHASE 1 only and stop. With `go`: run PHASE 1, then PHASE 2 on the same
list without asking again.

---

ROLE
You are expanding thin articles for BeastlyFacts. Mike wrote them. Each one
in the batch is missing a specific section the search query wants, and the
plan names it. Your job is to add that section with researched facts, in
Mike's voice, without touching what is already there. Read docs/RULES.md
first, the "Writing an article" section in full, and read
.claude/commands/voice-pass.md so the same voice rules apply to every
sentence you write.

PHASE 1: the list
1. Read the batch table in docs/BEEF_UP_PLAN.md. Show the slugs, the word
   count, and the "Add" column for each.
2. Run `node scripts/check-voice.mjs --slug <slug>` for each and show any
   errors. Stop unless `go`.

PHASE 2: one article at a time
1. Read the whole file. Note every link target, component, affiliate link,
   date, tag, and the Sources block. None of those change except Sources.
2. Research the named section. Web search with real, verifiable sources.
   Vet, university, government, and established husbandry sources
   (ReptiFiles, LafeberVet, VCA, Merck Vet Manual, state wildlife agencies)
   outrank forums. Every number you add needs a source you can link. Never
   write research-shaped content from memory. Never hand over a citation
   you have not opened.
3. Write the section under a plain H2 that names its point. Rules:
   - Mike's voice: a person made a call. First sentence about the animal
     or the number, not about the article. Hedges stay hedges. No
     intensifiers in headings, none in the first sentence, at most one per
     section. No em or en dashes: split the sentence or use a colon. US
     spelling.
   - Numbers go in a table when there are more than three of them. Tables
     use the site's markdown table shape already used elsewhere in the
     series (cost guides use the same columns as the nearest sibling cost
     guide; find one with `grep -l "^|" content/guides/*-cost-guide.mdx`).
   - "See a vet today if" lists are bullet lists, one sign per line, no
     intensifiers, no reassurance.
   - Stress-sign sections give the sign, what it means, and what to do, in
     that order, one sign per bullet or one short paragraph each.
   - Do not repeat anything the article already says. Add, do not restate.
   - Target 700 to 1,000 body words total. If the section pushes past
     1,000, cut the section, not the original.
   - One to two in-body internal links inside the new section only if a
     sibling guide covers the point (the tank setup guide for a humidity
     number, the health guide for a condition). Same slug shape as the
     existing links in the file. Never add a link to a page you have not
     confirmed exists with `ls content/*/<slug>.mdx`.
4. FAQs: if the new section answers an existing FAQ better, rewrite that
   answer from the new body text, two or three sentences, under 70 words,
   no copied sentence. Do not add FAQs. Do not touch FAQs the section does
   not bear on.
5. Sources: add each source you used to the existing `<Sources>` block in
   the same list shape. If the file has no Sources block, add one after the
   last body paragraph, before any closing component, in the shape used by
   the nearest sibling guide. Three to five sources per article. Never pad
   to hit a number.
6. Dates: set `lastUpdated` and `lastReviewed` to today's US Eastern date
   (`TZ=America/New_York date +%F`). Never touch `date`.
7. Run `node scripts/check-voice.mjs --slug <slug>` and fix every error in
   your own sentences before moving on. Never edit an original sentence to
   satisfy the checker; if the original trips a rule, leave it and say so.
8. Re-read the new section against its sources one more time. Delete any
   claim you cannot point to a source for.
9. Move to the next article. Do not stop to ask between articles.

CLOSE
1. `node scripts/check-voice.mjs --strict`, `node scripts/check-internal-links.mjs`,
   and `node scripts/check-related-articles.mjs` must all pass.
2. `git diff --stat`, then one commit for the batch, message
   "Beef up: batch N, <n> articles". Push the working branch. Never push
   main from this command.
3. Final message: the slugs done with before and after word counts, the
   sources added per article, any target left unmet and why. Nothing else.

NEVER
- Renumber, reorder, or delete existing sections, links, components,
  affiliate links, images, tags, or the `date` field.
- Change an existing fact or number, even if a source disagrees. Flag it
  in the final message instead.
- Add em or en dashes, first person, jokes, or a "researched, not kept"
  line.
- Turn a split guide into a long-form pillar page.
