# Legal map prompts

Two prompts for closing the unread cells listed in docs/LEGAL_MAP_GAPS.md. Run the research prompt once per jurisdiction, then the check prompt on the resulting diff before merging.

Model and effort for both: Claude Opus 5 at effort xhigh. Use Fable 5.1 for the check only when a sitting produced several `unclear` calls, since that is where the read of ambiguous definitional language matters most.

## Research prompt (one jurisdiction per session)

Replace `XX` with the jurisdiction code.

```
Read CLAUDE.md, docs/RULES.md, and the _readme block at the top of src/lib/data/legalStatus.json before touching anything.

Task: close the unread cells for jurisdiction XX in the legal matrix. Run `node scripts/legal-gaps.mjs` and open docs/LEGAL_MAP_GAPS.md. The section for XX lists every animal never read against it and every source the matrix already cites for XX.

Method, in this order:
1. Fetch each cited source URL for XX and read it in full. Most gaps close from these documents alone.
2. For each unread animal, decide from the primary text which status bucket applies using the readme definitions. Quote the operative wording verbatim in `quote` and put the section number in `cite`.
3. If the cited documents do not reach an animal's taxonomic group at all, web search for the primary source that does: the statute, the regulation, or the enforcing agency's own page. Never a secondary summary, never animallaw.info as the only source when the official text is online. Add it to `sources` with a stable id in the existing naming pattern.
4. If you read the documents and nothing names or reaches the animal, record `status: "legal"` with the sourceId of what you read and a `note` saying what was checked. That is the matrix convention for "read and nothing found". Never leave a cell empty after reading it.
5. Where the text arguably reaches an animal without naming it, use `unclear`, never `legal`.
6. Set `verifiedOn` to today's US Eastern date on every entry you add. Set `localOverride`, `grandfathered`, and `permitFor` where the text supports them.

Constraints:
- Add entries only. Do not change existing entries for XX or any other jurisdiction unless the primary text you read directly contradicts one, and if so list every such change in your final message with the quote that contradicts it.
- Never renumber or rename anything. Never edit coverage.perAnimal by hand.
- No em or en dashes anywhere in the JSON.
- Re-run `node scripts/legal-gaps.mjs` when done and confirm XX no longer appears in the by-jurisdiction table. Then run `node -e "JSON.parse(require('fs').readFileSync('src/lib/data/legalStatus.json','utf8'))"` to confirm the file parses.
- Do not run npm run build.
- Commit as "legal: read XX for N unread animals" and push the branch.

Final message: a table of every cell you filled with animal, status, cite, and a one-line reason. Flag any cell where you were less than confident in the bucket.
```

## Check prompt (run on the diff before merging)

Replace `BASE` with the commit or branch the research session started from.

```
Read the _readme block at the top of src/lib/data/legalStatus.json first. It defines every status bucket and field.

Task: verify every entry added or changed in src/lib/data/legalStatus.json since BASE. Get the list with `git diff BASE -- src/lib/data/legalStatus.json`. Do not edit the file. Your output is a verdict per entry.

For each new or changed entry:
1. Resolve `sourceId` in the `sources` block and fetch its URL. Fail the entry if the id is missing, the URL is dead, or the source is a secondary summary when the official text exists online.
2. Find `cite` in the fetched document. Fail if the section does not exist or does not concern this animal.
3. Confirm `quote` appears verbatim in the source. Minor whitespace differences pass, paraphrase fails.
4. Re-derive the status bucket from the operative wording alone, without looking at the recorded status first, then compare. Fail on mismatch and say which bucket the text supports. Pay particular attention to: `legal` used where the text arguably reaches the animal (should be `unclear`); `permit` used where no permit route for pet keeping exists (should be `banned`); `banned` used where existing owners are exempt and `grandfathered` is missing.
5. For `legal` entries, confirm the `note` names what was read. A bare `legal` with no note fails.
6. Confirm `verifiedOn` is an ISO date within the last 14 days.
7. Check `localOverride`, `permitFor`, and `grandfathered` against the text where the text speaks to them.
8. Fail any entry containing an em or en dash.

Then run `node scripts/legal-gaps.mjs` and confirm the count dropped by exactly the number of new entries. Confirm the JSON parses.

Final message: one table, one row per entry, columns animal, jurisdiction, status, verdict (PASS or FAIL), reason. Below it, a short list of the FAIL rows with the exact fix, quoting the source text that supports it. Do not soften a failed verdict, and do not pass an entry you could not verify because a fetch failed. Mark those UNVERIFIED and say why.
```
