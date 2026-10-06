# Replacement UVB tube rows: reprice and carry the totals everywhere

Work ONLY in the worktree the worktree you were given (branch claude/packages-batch). Do not commit, push, run sync-articles or any scripts/check-*.mjs (the lead runs those afterwards). Do not touch species outside your list.

## Why
The ongoing "UVB tube replacement" rows were priced before the fixtures were settled. Each species' replacement tube was checked at Chewy on 2026-10-03 (owner-approved retailer check, not Amazon):

| Species | Fixture now linked | Replacement tube (Chewy, Oct 2026) | Interval the species' own book states | New row |
|---|---|---|---|---|
| Leopard gecko | ShadeDweller Max 2.5% 24 in kit | ShadeDweller-Max 2.5%, 14 W, 22 in: $25.01 | 6 to 12 months (1 to 2 tubes a year) | monthly row "about $5" (was "$5 - $10") |
| Crested gecko | ReptiSun 5.0 T5 HO 14 in hood | ReptiSun 5.0 T5 HO 12 in: $20.98 | 6 to 12 months | monthly row "about $5" (was "$5 - $10") |
| Gargoyle gecko | ReptiSun 5.0 T5 HO 14 in hood | ReptiSun 5.0 T5 HO 12 in: $20.98 | budgeted once a year | yearly row "$20 - $25" (was "$45 - $80") |
| African fat-tailed gecko | ShadeDweller Max 2.5% 24 in kit | ShadeDweller-Max 2.5%, 14 W, 22 in: $25.01 | once a year | yearly row "$25 - $30" (was "$20 - $25") |
| Ball python | Arcadia Forest 6% 39 W 34 in kit | Arcadia 6% T5, 39 W, 34 in: $40.54 | once a year | yearly row "$40 - $45" (was "$20 - $25") |
| Hognose snake | Arcadia Forest 6% 24 W 22.5 in kit | Arcadia Forest 6% T5, 24 W, 22 in: $29.57 | once a year | yearly row "$25 - $30" (was "$20 - $35") |
| Russian tortoise | ReptiSun 10.0 T5 HO 24 in hood ("10 or 12% tube") | ReptiSun 10.0 T5 HO 22 in 24 W: $26.99; Arcadia Desert 12% 22 in 24 W: $32.99 | once a year | yearly "$25 - $35" (was "$45 to $90") |
| White's tree frog | ReptiSun 5.0 T5 HO 14 in hood | ReptiSun 5.0 T5 HO 12 in: $20.98 | every 6 to 8 months (1.5 to 2 tubes a year: $31.47 to $41.96) | yearly "$30 - $45" (was "$65 - $160") |

Bearded dragon is unchanged (its $5 to $10 a month already covers it). Do not touch it.

## Owner rules (firm)
- Rounding is outward to $5; under $5 reads "about $5" and counts as $5 low and $5 high in sums. Totals are the exact sum of the rounded rows (lows summed, highs summed). Recompute every total, yearly figure, monthly equivalent and lifetime figure derived from the ongoing table, using the same arithmetic the text already uses (e.g. "10 to 20 years adds up to ...", "Over 15 years that is about ...").
- Change EVERY place that states an affected figure: cost guide title, seoTitle, seoDescription, description, excerpt, FAQ answers, H2s, body prose, closing; the hub in src\lib\data\guides\<group>.js (Budget row, cost route line, firstWeek rows, FAQs, any quick fact); the book (content\CAREPACKAGE Guides\source\<id>-src\pages_*.html: budget pages, profile/cover cost lines, any lifetime line, the version history's existing Costs line). Grep content\guides, src\lib\data and the book fragments for every old figure before you finish; list every location changed.
- Replacement rows stay unlinked (the catalog has no standalone tubes; never add products). Keep or tidy the row label so it says what is budgeted (e.g. "UVB tube replacement, once a year if you run one"). Set lastUpdated "2026-10-03" on any cost guide you change. exactly; never remove it.
- Prose that explains the tube cost may say what the row assumes (e.g. "one replacement tube a year, about $25"). No brand names in prose; brand names live only in links. No em or en dashes, US spelling (docs\RULES.md).
- Books: editions stay as they are on this branch (leopard 3.1, crested 3.1, ball python 3.1, Russian tortoise 3.1, gargoyle 1.1, fat-tail 1.1, hognose 1.1, White's tree frog 1.1). Do not bump. Update the newest version-history entry's Costs figures in place. NEVER run build.py for the cockatoo (not in scope anyway).
- Rebuild each changed book: `python build.py` in its <id>-src folder, then from content\CAREPACKAGE Guides\source with env CHROME_BIN="C:/Program Files/Google/Chrome/Application/chrome.exe": `node _render.mjs <id> "<Name>" <edition> --measure` (every page at least 15px free; if a page overflows, reword or add a page, never cut content), then the same command without --measure. Book ids and names: leopard-gecko "Leopard Gecko"; crested-gecko "Crested Gecko"; gargoyle-gecko "Gargoyle Gecko"; african-fat-tail "African Fat-Tailed Gecko"; ball-python "Ball Python"; hognose-snake "Hognose Snake"; russian-tortoise "Russian Tortoise"; whites-tree-frog "White's Tree Frog". If a species' fragments look stale against its generated <id>.html (build output differs in ways unrelated to your edit), stop and report instead of building.

## Report (under 300 words)
Per species: old and new row, old and new totals (each figure), every file and field changed, the measure line. Flag anything that did not add up before you started.
