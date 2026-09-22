# Beef-up plan, closed 2026-09-22

**Closed by decision, not by completion.** Batches 1 to 5 shipped. Batches 6 to
10 were never run and are not coming back. The `/beef-up` command is deleted and
this file is history, not instructions.

## What shipped

Batches 1 to 5, 20 articles, each fact-checked against every cited source and
checked by a second session. The four foundation targets are the clearest
measure of what the loop did when it ran: crested gecko humidity went 275 to 752
body words, leopard gecko temperature 298 to 1,014, tokay health 368 to 1,029,
uromastyx health 383 to 881. Three batch 5 articles (toad, millipede,
cockroach) carry two sources rather than three, by decision at the time.

## What did not, and why it was dropped

Batches 6 to 10, the "How to pick one up" sections for 27 hands-on handling
guides. None of them exist. A repo check on 2026-09-16 (commit a7d4b7a) had
already found the same thing, and a re-check on 2026-09-22 found the section
heading on 1 of the 27, that one pre-existing.

They were dropped on the numbers. The first Search Console export the site ever
had, 28 days to 2026-09-19, put handling guides at 9,235 impressions and 32
clicks, a 0.35% clickthrough rate, and cost guides at 21,610 impressions and 69
clicks, 0.32%. Those are the two worst-converting page types on the site.
Legal pages, 13.6% of the pages, took 37% of all clicks at 0.95%. Batches 6 to
10 would have spent 27 articles of research on the weakest type on the site, and
batch 2 had already spent seven on the second weakest.

Nothing below is a current instruction. The scoping is kept because the
per-slug notes are real research and would have to be redone from scratch if
this is ever reopened against a different page type.

---

# The original plan, as written 2026-09-07

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

## Batches 6 to 10: pick-up sections for the hands-on handling guides

An outside reader review of batch 4 said the handling titles promise
"how to handle" and the pages deliver reading, not holding. A grep for a
pick-up, scoop, step-up, or lift passage found none in these guides. The
gap is one section, "How to pick one up": approach, where the hands go,
how the body is supported, how it goes back down. Sourced the same way as
batches 1 to 5 (ReptiFiles, LafeberVet, VCA, state agencies), 120 to 180
words, no repeat of the stress signs the earlier batches added.

Ceiling: 1,000 body words as before, except the four already at the
ceiling from batch 3 and 4 (cockatoo, ackie, tegu, garter snake), which
get 1,100. Nothing in those sections was padding, so the section is added,
not swapped in.

### Batch 6: parrots (4)

| Slug | Words | Sources | Add |
|---|---|---|---|
| african-grey-parrot-handling-guide | 498 | 2 | Step-up cue on a finger or perch, never a grab from above. Sources to at least 3. |
| conure-handling-guide | 682 | 3 | Step-up, where the other hand goes, shoulder rule. |
| quaker-parakeet-handling-guide | 725 | 2 | Step-up, cage-territorial bird: perch or hand out of the cage first. Sources to at least 3. |
| cockatoo-handling-guide | 1003 | 6 | Step-up and the toweling a vet uses, when a hand is not the tool. Ceiling 1,100. |

### Batch 7: snakes (5)

| Slug | Words | Sources | Add |
|---|---|---|---|
| ball-python-handling-guide | 674 | 1 | Hook tap, lift from mid-body, two points of support, back in tail first. Sources to at least 3. |
| corn-snake-handling-guide | 577 | 2 | Same shape for a fast juvenile: scoop from below, let it move hand to hand. Sources to at least 3. |
| milk-snake-handling-guide | 576 | 2 | Scoop from below, musk in the first weeks, the loose grip that keeps it from thrashing. Sources to at least 3. |
| hognose-snake-handling-guide | 653 | 3 | Pick-up around the bluff: wait out the hiss, lift from mid-body, never from the front. |
| garter-snake-handling-guide | 901 | 4 | Scoop and support; the musk-and-writhe pick-up and how to hold through it. Ceiling 1,100. |

### Batch 8: lizards (6)

| Slug | Words | Sources | Add |
|---|---|---|---|
| ackie-monitor-handling-guide | 994 | 5 | Hand flat in the enclosure, let it climb on, the hand-behind-the-shoulders support. Ceiling 1,100. |
| argentine-tegu-handling-guide | 999 | 4 | Adult lift: one arm under the chest, one under the pelvis, body against yours, tail free. Ceiling 1,100. |
| fire-skink-handling-guide | 486 | 1 | Cupped hands low over the substrate for a fast, fossorial skink. Sources to at least 3. |
| green-iguana-handling-guide | 521 | 2 | Support from below with the tail along the forearm; the whip and the grip that avoids it. Sources to at least 3. |
| jacksons-chameleon-handling-guide | 515 | 0 | Never pull from a branch: offer a hand or stick and let it walk on. Sources block from scratch. |
| leaf-tailed-gecko-handling-guide | 499 | 0 | Mostly hands-off: cup, never grab, tail drop risk. Sources block from scratch. |

### Batch 9: shelled and small mammals (7)

| Slug | Words | Sources | Add |
|---|---|---|---|
| box-turtle-handling-guide | 578 | 3 | Two hands under the shell, low over a surface, never by a limb or the hinge. |
| russian-tortoise-handling-guide | 369 | 0 | Two hands under the shell, keep it level, never by a leg. Sources block from scratch. |
| red-footed-tortoise-handling-guide | 735 | 3 | Same shape for a heavier tortoise; where an adult becomes a two-hand job. |
| ferret-handling-guide | 722 | 2 | One hand under the chest, one under the hips; when a scruff is and is not appropriate. Sources to at least 3. |
| flying-squirrel-handling-guide | 739 | 4 | Cupped hands or a bonding pouch, never by the tail. |
| sugar-glider-handling-guide | 513 | 2 | Cupped hands, pouch, the crab-and-bite phase. Sources to at least 3. |
| mouse-handling-guide | 862 | 5 | Cup or tunnel, base of the tail only for a second, never the tip. |

### Batch 10: maybe (5, optional)

Species where a keeper does sometimes pick the animal up but the page may
be right to say not to. Read the page first and skip any where the answer
is "you do not".

| Slug | Words | Sources | Add |
|---|---|---|---|
| hermit-crab-handling-guide | 567 | 3 | Flat palm, shell held by the back, never a claw. |
| jumping-spider-handling-guide | 414 | 2 | Let it walk on; the tether line and why a fall matters. |
| whites-tree-frog-handling-guide | 571 | 0 | Wet hands or gloves, cup, minutes not sessions. Sources block from scratch. |
| pacman-frog-handling-guide | 643 | 3 | Gloves, from behind, the feeding bite. |
| green-anole-handling-guide | 558 | 0 | Mostly hands-off: cup low, tail drop. Sources block from scratch. |

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
