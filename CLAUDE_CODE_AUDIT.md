# Claude Code usage audit (partial, in progress)

Goal: read the last 30 sessions, find repeated asks, things checked by hand, and
before/after rituals, then suggest 5 Claude Code mods ranked by time saved.
Nothing gets built yet.

This file holds the findings from the cloud run, which was stopped early to save
cost. The "Still to read" list at the bottom is what the local run picks up.
Times are US Eastern.

## Batch B (sessions 7-12)

### session_01SeaYXsnEiAqWwErdoyhSWG: Amazon image retrieval test (09-28, 20:09 to 21:39)
Ran on the Windows desktop. Amazon images were stripped (Associates terms) and prices
were rewritten as estimates. A quiz-share branch was merged and main was pushed.
That deploy failed.
- Opener 20:09: "first order of business, i need you to please pull the current main. the local is stale." `git pull --ff-only` failed on diverged history, so Claude rebased.
- Closer 21:39: "is the local folder/file on this computer up to date with the origin?" Claude ran `git fetch; git status -sb`.
- 21:20: "combine the edits on the quizshare ... branch with this and then merge to main". At 21:22 Claude pushed main without running the check-* scripts. At 21:36 the user pasted a Cloudflare build log: check-hub-figures had failed on 31 stale hub Budget rows. Claude then ran the full check loop, which also caught check-seo-tags, fixed both, and pushed again.
- check-hub-figures.mjs crashes on Windows paths.
- Corrections:
  - 20:25: "don't use emoji's because that looks fucking childish."
  - 20:31: "does this touch the cost guides too? please say no"
  - 20:33: "ok then is everything now following the rules"
  - 20:58: "you were gone for 10 minutes." Background agents had stalled.
  - 21:11: "yes, fucking fix the stale content." Claude had asked first instead of fixing it.
  - 21:22: "there are no current edits for the images ... only the 2 commits." Claude had gone looking for a branch that did not exist.
- Repeated Bash:
  - `git checkout -- .claude/launch.json public/articles.json src/lib/generated`, at least 4 times.
  - `git status --short` / `git status -sb`.
  - The check loop: `for s in check-publish-dates check-hub-rows "check-voice --strict" check-cost-coverage check-affiliate-mdx check-related-articles check-seo-tags check-state-notes`.
  - PowerShell commit-message-file workarounds.

### session_01YGJA6vFMCS5RcCdyPRdvY5: Routine failure troubleshooting (09-28, 13:17 to 14:43)
The Routine had no repo selected, and the user fixed that. The session then moved to
quiz UX fixes and pushed to main.
- 13:17: "Check why the routine didn't run". Claude ran list_triggers and get_session.
- 14:22: "Yay it deployed." The user checked the deploy themselves.
- 14:33: "Omgosh! I didnt realize I was on a different repo." The session defaulted to apexforge, so beastlyfactss had to be attached with add_repo.
- 14:43: "push it." Claude merged and ran eslint on the changed files only. It did not run the check-* scripts.
- Repeated Bash: a vite dev server plus Playwright screenshots, `npx eslint <file> --quiet`, `git status --short`, and `pkill` on the vite port.

### session_01FWwvKseYRAm6KaTr5ZWoNM: Cache control for Claude API (09-27, apexforge repo)
A Q&A on prompt caching. No code changed. The user asked four separate follow-up
questions about cost:
- "Would it be smart to add cache_control..."
- "is taking out the time and date the only helpful thing?"
- "So every new chat is cost 2x basically... It doesnt cache for a few days..."
- "So each message sends 2 messages?"

### Patterns from batch B
1. "Push" / "push it" / "merge" ends tasks. What Claude does before pushing varies: sometimes the full check loop, sometimes only eslint, once nothing. The time it ran nothing, the deploy broke.
2. "Is local up to date / pull main first" gets asked at both the start and the end of desktop sessions.
3. Generated-file churn (`public/articles.json`, `src/lib/generated`, `.claude/launch.json`) is discarded by hand over and over.
4. Repo and branch confusion: the wrong default repo, a branch that did not exist, a stale local copy.

### Partial notes on sessions not fully read
- session_01CYH4nWp4ewPv1HEuS4MtGm (NFTY, read from 09-30 13:07 on):
  - CLAUDE.md was rewritten twice about Preview rows.
  - "Push the skip so its all updated"
  - "Check the deploy" (Claude curled the live pages)
  - "What is left on the change for today's conversation?"
  - "Do not add a build check we already have too many"
- session_013dw8pp5f45xZMqfAqr4C3D (Quiz share, read 09-28 15:22 to 21:21):
  - "Push main" three times (16:58, 18:09, 19:02).
  - "The thumbnails are built at build. Stop"
  - gray/grey sweep: "This is an American site."
  - "Do not put the sources on the fun fact themselves."
  - Claude ran `TZ=America/New_York date` before stamping dates, and sync-articles then `check-rotation --assign` after writing an article.
- session_012EvHa8anGf58M3dpjKW87b (Fun facts, read 09-28 05:33 to 20:07; the 09-26 start was not read):
  - All-caps correction about the recommended gear list.
  - The stop hook ("uncommitted changes... commit and push") fired twice.
  - Claude ran `npx vite build` several times against the CLAUDE.md rule.
  - "Push and merge after checking"

## Batch C (sessions 13-18)

### session_01Qq5fPr9DoE4BsyrP39E2E5: Reader review fixes R1 (09-25, 15:07 to 15:23)
A single long prompt from Android. Claude ran 3 Opus agents, fixed items 1-26, and made one commit and one push.
- The prompt restates CLAUDE.md every time. Pieces of it:
  - "Read CLAUDE.md, docs/RULES.md... research with real web sources (never from memory...)... Stamp lastUpdated with the Eastern date on every page touched."
  - Cost guard: "Credit limits, hard: never more than 3 agents running at once... no two agents edit the same file. Use Opus. Never touch legal files, care packages, or dog and cat pages."
  - End ritual: "At the end run sync-articles, check-internal-links, check-voice --strict, check-related-articles... check-hub-faqs. All must pass. Then exactly ONE commit and ONE push... No checkpoint commits. Do not merge to main. Summary only at the end."
  - Source cap: "Sources stay at 5 per article, 6 only when each backs its own claim..."
- Start steps:
  - `git fetch/checkout/pull`.
  - The local branch had 2 stale commits, fixed with `git reset --hard origin/...`.
  - `cat docs/RULES.md`.
- End steps:
  - Dash scan: `git diff -U0 | grep '^+' | grep '[—–]'`.
  - lastUpdated check on each changed file.
  - `TZ=America/New_York date +%F`.
  - sync-articles plus the 10-check loop.
  - Off-limits guard: `git status --short | grep -iE "legal|CAREPACKAGE|dog|cat"`.
  - One commit, then push.
- The stop hook ("uncommitted changes... commit and push") fired 4 times while agents were running. That fights the one-commit rule.

### session_016tP9L1gQEBKVifdbymdZm6: AdSense readiness cleanup (09-25, 12:05 to 12:22)
- The same boilerplate prompt: the branch rules, "Credit limits, hard", the same 10 checks, ONE commit and ONE push, "Summary only at the end".
- It restates the docs-archive rule and the hub FAQ word-for-word rule by hand.
- The same stale local branch, fixed a different way: a `git tag` backup, then `checkout -B`.
- The same end ritual: dash grep, the `grep -L 'lastUpdated: "2026-09-25"'` check (it caught one unstamped file), checks, one commit.
- The stop hook nagged 3 times.

### Patterns from batch C
- A 25-40 line prompt typed from a phone that is mostly CLAUDE.md plus session rules (3 agents max, Opus, one commit, no main merge, summary only at the end). This is the strongest case for a slash command.
- Both sessions started on a stale local branch.
- The stop hook fights "no checkpoint commits" every time agents run.
- The end-of-task checks are rewritten in Bash every time instead of being one script.

### Partial notes on sessions not fully read
- session_015HCXUpPmHqksaVRxmytZkN (R2): "Continue" (17:13) and "Don't wait. Continue" (17:14). About 6 stop-hook nags.
- session_0165RqQLB5LgEqdHDvpsDvGN (wave 2):
  - "Ok, please commit and push everything up to birds" / "Up to now*"
  - "Definitely too many sources please look to see if any of those can be combined... Find out why the dolphin has so many sources too"
- session_01D44bQNPB4CyvdM9kLj5M5j (wave 3b) and session_011w1L9LV7kMzmvj61Ctpbm2 (wave 3a): only the tail of each was read. Nothing notable.

## Batch D (sessions 19-24)

### session_01RRQKvA4aJ3aN1EvV7seJXn: Site data and YouTube channel (09-23)
- Merge to main, asked three times: "Merge the yt edit...", "yes fix the feeding links too then merge".
- "Is bigquery connected here" (11:10).
- "Spot check them all" (12:15). "check the seodescriptuon is reading from the live pages correctly" (11:44).
- Deploy checking:
  - "check the live hubs once it deploys" (19:21).
  - "Wait at least 25 minutes. I had to redeployment cause 4 prerender failed" (19:24).
  - "Its live and only took 17ish minutes" (20:43).
- "look at the commit that is recent for title changes... Did we?" Claude ran `git log origin/main --since=...` several times.
- Frustration with the stop hook:
  - "Stip commiting everything. Nothing will be lost in a session. Im tired of my cloudflare showing commits to every branch" (12:12)
  - "What automatic check? I never put that there" (12:12)
- Repeated Bash: `git status -sb`, `git fetch origin main`, `git merge --no-ff` then push main, `curl -sS https://beastlyfacts.com/...`, `TZ=America/New_York date`.

### session_015dg8xypF36k5watSytotd6: Document review (09-22)
- "Check deployment and urls" (16:57) and a bare "Check" (18:23). Both times Claude curled live pages and polled once a minute.
- "Just apply the code patch and push it to main. Im editing other files elsewhere..." The user runs parallel sessions that push main.
- Before each push Claude scanned for dashes and ran sync-articles, check-voice and check-seo-tags.
- "NO SERP TOOLS. NO CREDITS AVAILABLE. PLEASE FIND ANOTHER WAY" (15:53).
- Repeated Bash: `git log origin/main --format='%h %ad %s'` (7 times), `git fetch origin main`, `git status --short`, `curl -A "Mozilla/5.0" https://beastlyfacts.com/...`.

### session_01Coe2gZVD3Dqt4Pdwr7c2bW: Site content expansion (09-22; the part before compaction was read only through its summary)
- "Can you report what happened up till now please" (14:32).
- "have the report saved somewhere so I can show it when im on the desktop" (15:40).
- "Can we do a merge and test?" and "Ok its deleted, check it".
- "before the merge, how are the internal links for the new items. I don't want any orphans".
- "i cant have it be a long and credit bearing operation" (about the monthly legal checker).
- "I want you to take the em or en dash off checking on the legal pages" (statutes are quoted verbatim).
- "i need the playwright and puppeteer information stored somewhere so this doesn't happen again".
- Repeated Bash:
  - `node scripts/check-legal-sources.mjs` (6 times).
  - `git fetch origin main` then `git pull origin main` (4 times, because of the parallel sessions).
  - `git push origin main` with [CI Skip].

### session_01EwoQgmeJWFFaZmyjR6csHd: Post reply (09-19)
- "perfect. for now, merge with ci-skip since i'm doing something else as well on another session".

### Patterns from batch D
1. Merge and push is the most frequent request. Parallel sessions mean main has to be fetched and pulled before every push.
2. The live site gets checked after every deploy. The user times the builds themselves ("17ish minutes"), and Claude curls or polls the pages.
3. The stop hook nags constantly and clashes with "don't commit to every branch".
4. "Check it" / "spot check" comes after the user's own manual actions and after Claude's bulk edits.
5. Cost and credit worries come up again and again.
6. Status reports get saved somewhere so they can be found later.

### Partial notes on sessions not fully read
- session_01LTtqtxid4fXrNFvyypjQW2 (wave 1): "Push it too", then "Are all the results noted somewhere?" / "I ment this". The summary was then saved into FIX_PLAN.md.
- session_01HbsV42Nkf1K7UdSpvj4jCQ (AdSense review): "My rules forbid it becoming a linking library, not for links to go to sibling articles. That's your made up rule". Claude also had to fix a lastUpdated date from the UTC day to the Eastern day.

## Batch E (sessions 25-30)

### session_01DuALg3RVTrjdq5PtMRGRu2: Animals hub sayings audit (09-18)
- The user interrupted Claude's fact-checking with "Ok not so popular your bubble... I dont want it to be 'omg information...' I want something witty and nice."
- "Ok please merge to origin". Claude's merge ritual:
  - `git status`.
  - fetch, then a behind check.
  - `git diff --stat origin/main..branch`.
  - `merge --ff-only`, then push.
  - `git log -1 && git status -sb`.
  - A note on whether [CI Skip] is set.
- Routine: `git status --short && git branch --show-current` at the start. After edits, a dash grep and check-voice.

### session_01Cdweo1mMJhpowry95AkvEA: Next quiz creation failure (09-17)
- The quiz Routine had been stuck since Sep 14 on a Bash permission prompt (`git config credential.helper`).
- "I want it built now and the routine fixed. Fix the social feed too".
- "Apply it. And make sure the quiz page is upside, and the quiz preview on the homepage is updated..."
- "Please add a view all quizzes button to the homepage quizzes spot, then merge"
- Commands:
  - `TZ=America/New_York date` (twice).
  - A dash scan.
  - eslint plus `tsc -p ./jsconfig.json`.
  - vite plus Playwright screenshots.
  - fetch, pull, merge, push.

### session_01R6ibaMZzsE6yLNPZ5dhyBr: Birdwatching guide improvements (09-17; about 380 Bash calls; the most corrections of any session)
- Corrections:
  - "You better check the fact photo amount... Don't skim the rules"
  - "Make sure you're using the correct photo, i sent 2. Do not cropt without looking..."
  - "FACT IMAGES DO NOT NEED TO BE CROPPED LIKE THE ENRICHMENT HERO IMAGES"
  - "...the .md files in completed should not be in there like that... How do I know anything is going correctly if this is in the wrong section"
  - "Make sure you don't make it like we are advertising the sources either"
  - "For sources, this is a guide, not a review for another site. Act like it..."
- Chained asks: "Merge. Then check the wild animal articles for the internal links check, source check and if it's a link library too".
- Deploy checked by hand:
  - The user pasted the Cloudflare log: "tell me why the build stalls here and then fails after times out 30+ minutes".
  - "I already redeployed twice and same thing at same place".
  - "Build is still running, no stalling yet" / "It passed".
- Claude quoted UTC log times bare, which breaks the CLAUDE.md time rule.
- The stop hook forced a commit of regenerated JSON.
- Commands: check-voice about 19 times, sync-articles 5, git log 12, git status 9.

### session_016jAinjBWzo3aYHthhEeVeS: Legal audit KS/WV/VA (09-16)
- Kickoff template: "Read CLAUDE.md, docs/RULES.md, the _readme block... Work on a new branch from main named claude/legal-audit-ks-wv-va. Never push main; stop and wait for me to say merge. No agents."
- Before merging, Claude ran 6 checks but not check-hub-figures. The Cloudflare build failed, and the user pasted the raw log with no comment.
- Claude then ran `npm run build`. "Never fucking run the full build without me saying. Fucking merge it now"

### session_0194d4YstoNU1mqkwCMWVAS2: Price-check line for cost guides (09-16)
- The same kickoff template ("Read CLAUDE.md... Never push main; stop and wait for me to say merge. No agents.").
- The prompt was written in another session: "Give me prompt for 1 and 2 so I can either use sonnet or opus a d save you for stronger items".
- "Please tell me you just did price check date, and did not add where the price was checked?" The user then asked a different session to verify the branch.
- The same 4 checks ran 5 times, once per class: check-voice --strict, check-seo-tags, check-hub-figures, check-cost-coverage.
- Claude used em dashes in its chat replies.

### Patterns from batch E
1. "Merge" or "...then merge" shows up in every session, usually chained to the next task.
2. A copy-paste kickoff template ("Read CLAUDE.md... new branch... Never push main... No agents").
3. Things the user checks by hand: Cloudflare build status (logs pasted, "It passed"), another session's work, and whether the rules were followed.
4. check-hub-figures gets skipped inconsistently, and that broke two deploys (09-16 and 09-28).
5. Running `npm run build` without permission.
6. Bare UTC times.

### Not read
- session_01SUBeLZYvKKuzsCroj3f7uH (Hub router review mistakes, 09-16): only read from 09:14 UTC on.
