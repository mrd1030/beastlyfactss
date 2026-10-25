# Search Console stats

Pulled from the BigQuery bulk export (see CLAUDE.md, Technical Notes, for the
project and dataset). Newest snapshot first. Positions are average top position
plus one, which matches what Search Console shows. Windows are 28 days ending
on the latest exported day.

## 2026-10-25 pull (data through 2026-10-23)

### 28 days vs the 28 before

| Window | Impressions | Clicks | CTR | Avg position | Distinct queries |
| --- | --- | --- | --- | --- | --- |
| 2026-09-26 to 2026-10-23 | 580,925 | 2,612 | 0.45% | 18.0 | 25,006 |
| 2026-08-29 to 2026-09-25 | 211,396 | 977 | 0.46% | 20.4 | 9,460 |

Impressions 2.7x, clicks 2.7x, CTR flat. Daily impressions went from about
9,500 in mid September to 36,044 on 2026-10-23, the highest day yet, and have
risen every day since 2026-10-09. Clicks per day reached 166 on 2026-10-23
(record 167 on 2026-10-20).

### By page type, last 28 days

| Page type | URLs | Impressions | Clicks | CTR | Avg pos |
| --- | --- | --- | --- | --- | --- |
| Legal guide articles | 81 | 115,843 | 591 | 0.51% | 15.6 |
| Feeding guides | 83 | 104,957 | 411 | 0.39% | 15.7 |
| Other blog (wild, vs, days) | 386 | 98,645 | 386 | 0.39% | 15.2 |
| Cost guides | 84 | 83,664 | 212 | 0.25% | 17.9 |
| Legal matrix pages | 107 | 37,983 | 288 | 0.76% | 7.7 |
| Handling guides | 84 | 34,413 | 105 | 0.31% | 19.5 |
| Tank setup guides | 92 | 33,305 | 132 | 0.40% | 22.8 |
| Care guide hubs | 111 | 29,752 | 36 | 0.12% | 45.6 |
| Beastlypedia | 44 | 26,260 | 24 | 0.09% | 47.8 |
| Health guides | 101 | 22,571 | 247 | 1.09% | 17.6 |
| Enrichment guides | 72 | 17,067 | 149 | 0.87% | 16.5 |

Legal pages (articles plus matrix) are 879 of 2,612 clicks, 34%. Health and
enrichment guides have the best CTR. Hubs and Beastlypedia rank at 45 to 48 and
get almost no clicks despite 56,000 impressions.

### Top pages by clicks, last 28 days

| Page | Clicks | Impressions | Avg pos |
| --- | --- | --- | --- |
| /blog/hognose-snake-legal-guide/ | 65 | 8,958 | 35.0 |
| /blog/red-eared-slider-legal-guide/ | 46 | 4,458 | 15.1 |
| /exotic-pet-laws/prairie-dog/ | 39 | 9,902 | 6.8 |
| /blog/box-turtle-legal-guide/ | 34 | 3,038 | 11.1 |
| /blog/african-fat-tail-feeding-guide/ | 26 | 3,058 | 10.0 |
| /blog/garter-snake-legal-guide/ | 26 | 1,433 | 14.3 |
| /exotic-pet-laws/box-turtle/ | 26 | 1,942 | 6.5 |
| /blog/flying-squirrel-legal-guide/ | 22 | 3,725 | 12.5 |
| /blog/gargoyle-gecko-feeding-guide/ | 21 | 4,799 | 22.1 |
| /blog/madagascar-hissing-cockroach-feeding-guide/ | 21 | 2,720 | 17.4 |
| /blog/rosy-boa-tank-setup-guide/ | 20 | 1,992 | 12.4 |
| /blog/green-anole-health-issues-guide/ | 19 | 2,001 | 23.0 |
| /blog/zebra-danio-health-issues-guide/ | 19 | 833 | 10.4 |
| /blog/rosy-boa-feeding-guide/ | 18 | 4,284 | 28.1 |
| /blog/jumping-spider-feeding-guide/ | 18 | 6,047 | 15.9 |
| /blog/swordtail-health-issues-guide/ | 18 | 460 | 19.1 |
| /blog/hognose-snake-feeding-guide/ | 18 | 1,850 | 10.8 |
| /blog/two-toed-sloth-legal-guide/ | 17 | 1,263 | 5.4 |
| /blog/lovebird-vs-budgie-guide/ | 17 | 2,538 | 13.0 |
| /blog/world-octopus-day/ | 16 | 2,448 | 17.7 |

### Top pages by impressions, last 28 days

| Page | Impressions | Clicks | Avg pos |
| --- | --- | --- | --- |
| /beastlypedia/fennec-fox/ | 14,706 | 9 | 55.3 |
| /exotic-pet-laws/prairie-dog/ | 9,902 | 39 | 6.8 |
| /guides/chinchilla/ | 9,801 | 3 | 67.1 |
| /blog/hognose-snake-legal-guide/ | 8,958 | 65 | 35.0 |
| /blog/blue-tongue-skink-feeding-guide/ | 7,218 | 14 | 21.9 |
| /blog/jumping-spider-feeding-guide/ | 6,047 | 18 | 15.9 |
| /blog/boa-constrictor-legal-guide/ | 5,824 | 14 | 29.5 |
| /beastlypedia/shima-enaga/ | 5,367 | 11 | 18.7 |
| /blog/corydoras-catfish-cost-guide/ | 5,143 | 6 | 37.3 |
| /blog/cockatiel-feeding-guide/ | 4,801 | 14 | 17.9 |

### Queries

Clicks are long tail: 25,006 distinct queries and no single query above 7
clicks. Top by clicks: red eared slider (7), world octopus day (5), amano
shrimp (4), reticulated python (4), shima enaga (3), rosy boa enclosure (3),
chinchilla (3), ball python fun facts (3), oscar fish price (3).

Top by impressions, all one-word or two-word species names ranking deep:
chinchilla (7,571, pos 70), fennec fox (7,402, pos 67), shima enaga (4,068,
pos 21), reticulated python (3,333, pos 12), rosy boa (3,206, pos 23), hognose
snake (2,553, pos 71), fennec (2,303, pos 37), ackie monitor (2,065, pos 25),
cobra (1,880, pos 37), tokay gecko (1,868, pos 57).

Page one queries with real volume: cockatoo vs cockatiel (1,146, pos 10),
cockatiel vs cockatoo (731, pos 9), animal day (672, pos 12).
