# Notes to Mike

Standing reminders and open loops that do not belong in READMEFIRST's
state sections. Newest first. Delete an entry once it is done.

## Friday evening, 2026-09-11: run the Fable check on batch D

Batch D (green iguana, conure, rat, hermit crab, box turtle) was written
2026-09-09 on branch `claude/batch-d-opus-agents-7jgjwi`, five Opus agents
in parallel, one per species. The batch prompt's step 6 calls for one
Fable agent covering all five. **That Fable check was skipped on purpose.**
An extra Opus pass ran in its place, so the batch has had two sets of eyes
but neither of them Fable.

Friday evening, decide one of these:
- Run the Fable species check on the branch anyway, using the species
  check prompt at the end of READMEFIRST filled in with all five species,
  the branch above, and the branch's base commit on main. Then merge.
- Accept the Opus double pass and merge without it.

Whichever you pick, note it in READMEFIRST so the next batch knows whether
Fable stays in the loop or the Opus-only shape is the new default.
