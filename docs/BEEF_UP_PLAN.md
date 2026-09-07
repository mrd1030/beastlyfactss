# Beef-up plan: the thin articles worth expanding

Scoped 2026-09-07 from a pass over all 772 articles. 435 sit at or under
800 body words, and most of those are short by design: the split care
guides, the roundups, the 10-surprising posts. This list is the subset
where the article does not carry the thing the search query wants. Nothing
else under 800 words should be padded.

Run one batch per session with `/beef-up <batch>`. The command carries the
rules; this file carries the targets. Each target says exactly what to add.
Everything added must be researched (web search, real sources, 3 to 5 per
article) and must pass `node scripts/check-voice.mjs --slug <slug>` before
it is committed. The target length is 700 to 1,000 body words. Do not turn
any of these into pillar pages.

Word counts below are body only (frontmatter and Sources stripped).

## Batch 1: foundations (4)

The two oldest hub guides and the two thinnest health guides.

| Slug | Words | Sources | Add |
|---|---|---|---|
| crested-gecko-humidity-guide | 275 | 0 | A day/night humidity table (peak after misting, daytime drop, why the drop matters). A misting schedule with times. Substrate and live plants as humidity buffers. Hygrometer placement and analog vs digital. A "too humid" section: mold, stagnant air, respiratory signs. Sources block from scratch. |
| leopard-gecko-temperature-guide | 298 | 0 | A gradient table by zone (warm hide floor, warm side ambient, cool side, night) in F and C. Thermostat section: why a mat without one is a burn risk. Overhead vs belly heat, what the research says. How to measure (probe placement, IR gun). Signs of too cold (refusing food, slow digestion) and too hot (glass surfing, hiding on the cool side). Sources block from scratch. |
| tokay-gecko-health-issues-guide | 368 | 1 | Per condition: the first sign a keeper sees, what is manageable at home, what is a vet visit. A "See a vet today if" list. A quarantine section for wild-caught animals (two clean fecals, separate room, weight log). Sources to at least 3. |
| uromastyx-health-issues-guide | 383 | 2 | Same per-condition depth. A "See a vet today if" list. A hydration section (this species does not drink standing water; where its water comes from and what dehydration looks like). Sources to at least 3. |

## Batch 2: cost guides without a number (7)

A cost query wants a table and a monthly figure. Three of these have no table at all (fire skink, quaker parakeet, green iguana); the other four have a setup table but no monthly number.

| Slug | Words | Sources | Add |
|---|---|---|---|
| fire-skink-cost-guide | 442 | 2 | A setup cost table (enclosure, heat, UVB, substrate, hides, thermostat, hygrometer) with a total. A real monthly figure in the ongoing section instead of "modest." |
| quaker-parakeet-cost-guide | 463 | 2 | A setup cost table. Vet cost ranges (wellness exam, blood panel, emergency). |
| green-iguana-cost-guide | 560 | 3 | A setup cost table split into hatchling enclosure and adult enclosure, since the second purchase is the trap. |
| corn-snake-cost-guide | 411 | 1 | A monthly figure and what it is made of (feeders, substrate, electricity). The setup table exists; add an ongoing-cost table beside it. Sources to at least 3. |
| box-turtle-cost-guide | 591 | 0 | A monthly figure and an ongoing-cost table. The setup table exists. Sources block from scratch. |
| rosy-boa-cost-guide | 732 | 4 | A monthly figure in the ongoing section instead of "low." |
| sulcata-tortoise-cost-guide | 764 | 2 | A monthly figure by life stage (hatchling indoors, juvenile, adult outdoors with winter heating). Winter electricity as its own line. |

## Batch 3: hands-on handling guides, first group (4)

A handling query wants to know how to read the animal. None of these has a
stress-signs section.

| Slug | Words | Sources | Add |
|---|---|---|---|
| tokay-gecko-handling-guide | 414 | 2 | "Reading a tokay" section: gaping, barking, tail waving, color darkening, what each means and what to do. Bite protocol (do not pull; run water; wait). Session length by tameness. |
| savannah-monitor-handling-guide | 505 | 2 | Stress signs: tail whipping, hissing, puffing, defecating, going limp then bolting. Two-person rule by size. Bite and claw protocol. Session length by age. |
| california-kingsnake-handling-guide | 526 | 0 | Stress signs: musking, tail rattling, striking pose, balling. When to put it down. Session length after feeding (48 to 72 hours). Sources block from scratch. |
| ackie-monitor-handling-guide | 534 | 2 | Stress signs for a fast lizard: freezing, tail whipping, clawing to climb up, bolting. Where to hold (support the whole body). Session length by age. |

## Batch 4: hands-on handling guides, second group (4)

| Slug | Words | Sources | Add |
|---|---|---|---|
| cockatoo-handling-guide | 568 | 1 | Body language: crest position, eye pinning, foot stamping, beak grinding, the warning sequence before a bite. Over-bonding and how to prevent it (household-wide handling, time apart). Sources to at least 3. |
| blue-tongue-skink-handling-guide | 570 | 2 | Stress signs: tongue flashing, hissing, flattening, tail whip. Picking up a heavy-bodied lizard (support under the body, never by the tail). Session length by age. |
| argentine-tegu-handling-guide | 620 | 0 | Stress signs by size class (juvenile bolting, adult tail whip and gape). Two-person rule above a stated size. Bite protocol for a lizard this strong. Brumation and handling. Sources block from scratch. |
| boa-constrictor-handling-guide | 623 | 1 | Stress signs: hissing, S-posture, tight coiling, musking. Two-person rule above 6 ft. Never around the neck. Session length after feeding. Sources to at least 3. |

## Batch 5: hands-off species (6, optional)

These species are not handled. The gap is a section on how a keeper knows
their presence is stressing the animal, and a Sources block, which none of
them has.

| Slug | Words | Sources | Add |
|---|---|---|---|
| mourning-gecko-handling-guide | 499 | 0 | "Signs it is stressed by you" (hiding all day, refusing food, tail drop). Sources block. |
| stick-insect-handling-guide | 452 | 0 | Stress signs (dropping legs, playing dead, refusing to climb). Sources block. |
| canary-handling-guide | 519 | 0 | Stress signs (silence, fluffing, flying against bars). Sources block. |
| fire-bellied-toad-handling-guide | 551 | 0 | Stress signs (unken reflex, hiding, refusing food). Sources block. |
| giant-millipede-handling-guide | 553 | 0 | Stress signs (curling, secreting, refusing to move). Sources block. |
| madagascar-hissing-cockroach-handling-guide | 558 | 0 | Stress signs (hissing on approach, fleeing, refusing food). Sources block. |

## Not in scope, and why

- 10-surprising and fun-facts posts: the format is the length.
- Short stories.
- Vs guides at 650 to 800 words: they carry the comparison table.
- Overviews at 230 to 450 words: they are link hubs. A comparison table
  (space, monthly cost, lifespan, vet type) would give them a reason to
  exist beyond navigation. Optional, and a separate decision.
- Every other split guide under 800 words: they carry their number, table,
  or schedule. Adding words there adds nothing.
- Tank setup guides that looked like they had no temperatures: they write
  "105F" without the degree sign. They are fine.
