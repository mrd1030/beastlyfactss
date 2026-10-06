# Price redo workbook

Rebuilds `PRICE_REDO.xlsx` in the repo root: one Summary row per cost guide animal, plus every cost table row, every hub buy list item, every place a price is written (cost guide, hub, other pages, encyclopedia) and the open price rows from CONSISTENCY_CHECK.xlsx. Status and Notes on the Summary tab are kept across rebuilds.

Run from the repo root:

```
node tools/price-redo/dump_hubs.mjs tools/price-redo/hubs.json
python tools/price-redo/extract.py
python tools/price-redo/build_xlsx.py
```

The "adds to" columns sum every row that is not a total row, so optional rows (a chiller, the animal itself) make a heading look wrong when it is not. Check every flag by hand.
