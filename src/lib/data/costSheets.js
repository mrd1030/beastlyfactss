// One cost sheet per animal: which master items (costItems.js) its cost guide
// prices, and the handful of figures that are the animal's own.
//
//   animal      what the animal itself costs, [low, high]
//   monthly     the ongoing monthly figure the guide states, [low, high]
//   vetExam     a routine exam, [low, high]
//   necessities rows of the setup table; their sum IS the setup total
//   extras      rows of the extras table, never counted in the total
//
// A row is { item, text?, qty? }, or a one-off { text, low, high } with no
// item for a line that is this animal's alone (the bird itself, a first exam).
// Optional sheet fields: annual [low, high], for %%annual:<id>%%; totalLabel,
// the bottom row's label when it is not plain "Setup total".
// A row is { item, text?, qty? }. `text` is the row as the reader sees it,
// with the linked words in [square brackets]; without it the row shows the
// item's label, linked whole. `qty` multiplies the item's price. A row may
// carry its own { low, high, why } only when the item's price genuinely does
// not fit this animal; scripts/check-cost-tables.mjs lists every such row.
//
// These figures reach the page through placeholders that are filled in at
// build time (src/lib/costs.js): %%setup:<id>%%, %%animal:<id>%%,
// %%monthly:<id>%%, %%vet:<id>%% and %%price:<item>%%. Never type a total
// by hand anywhere a placeholder can go.
// The sheets live one file per group in ./costSheets/, matching the hub
// files in ./guides/; this file only merges them.
import { lizardSheets } from './costSheets/lizards.js';
import { birdSheets } from './costSheets/birds.js';
import { geckoSheets } from './costSheets/geckos.js';

export const COST_SHEETS = {
  ...lizardSheets,
  ...birdSheets,
  ...geckoSheets,
};
