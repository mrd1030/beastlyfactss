# Package review tools

Saved 2026-10-04 from the 20-package pricing project and big review, so the next package round does not start from scratch. Open package work lives in FIX_PACKAGES.md; what is live in the bucket lives in PACKAGE_BUCKET.md.

All scripts run from the repo root and write only to `tools/package-review/out/` (ignored by git). They read the repo through git (`origin/main` by default), so fetch first.

## The price check workbook

Rebuilds `Price_Check_Cost_Hub_Book.xlsx`: one tab per package with the cost guide rows, the hub buy list (and the catalog product each item links) and the book's budget page side by side, plus Summary, Audit and "No gear or unsure" tabs.

```
git fetch origin
python tools/package-review/extract.py      # reads the 20 cost guides, hubs and books from origin/main into out/audit.json
python tools/package-review/audit.py        # checks into out/audit_report.json
python tools/package-review/build_xlsx.py   # writes out/Price_Check_Cost_Hub_Book.xlsx
```

Then copy the workbook to `Documents\Price_Check_Cost_Hub_Book.xlsx`, where the owner keeps it. Needs Python with openpyxl, and node.

`audit.py` checks: every row priced; each row's range covers the catalog price of what it links; table totals equal the sum of their rows; the setup total appears in the hub and the book; the hub list and the cost rows link the same products. Its "total differs" and "missing setup total" flags are often false alarms (it adds subtotals into sums, and misses figures written with `&nbsp;` or stated with the animal included), so recheck every flag by hand before acting on it.

`notes.json` feeds the "No gear or unsure" tab; today it points each package to its FIX_PACKAGES.md heading. `audit_sheet.json` is the Audit tab, written by hand during the 2026-10-03 step 2 audit.

## The cheap Fable review

```
python tools/package-review/changed_lines.py                       # all 20 books against origin/main (the live editions)
python tools/package-review/changed_lines.py --ref <commit> <id>   # one book against any earlier point
```

Writes `out/diffs/<id>.changes.txt` (only the lines that changed, page-number shifts filtered out) and `out/booktext/<id>.txt` (each whole book as plain text, for grepping). Give one Fable reviewer all the changes files with `briefs/fable_light.md`-style instructions: review only the + lines, grep the booktext to check a change against the rest of its book, a capped number of lookups, no web unless needed.

## Briefs

Instructions given to the agents in the 2026-10-03 round. Reuse them as starting points, and update them first: the rules have moved on since (for example the 2026-10-04 glossary rule in FIX_PACKAGES.md section 2 and docs/RULES.md).

- `briefs/price_brief.md`: price every item, rounding, strict links, hub links-only, book matches site.
- `briefs/gear_brief.md`: the product search rules (strict match, non-Amazon prices, ASIN confirmed) and the book rebuild rules.
- `briefs/tube_brief.md`: the replacement UVB tube repricing, as an example of a targeted multi-book price change.
- `briefs/fable_light.md`: the read-only accuracy review used for the five lightly checked books.
