# Conflicts

A running log of factual conflicts found between two site pages, or between a
site page and an actually-fetched veterinary/herpetological source, while
writing or fact-checking an article. Each entry names the pages or sources
involved, the specific numbers or claims that disagree, and which one the
article in question ended up using. These are FYI only, not automatically
resolved: a conflict here means a human still needs to decide whether the
older page gets corrected, and this file isn't cleared out until that
happens.

## Open

**2026-09-15: Uromastyx nighttime temperature floor.** (mostly resolved
2026-09-03, one small gap left)
`content/guides/reptile-emergency-plan-guide.mdx` originally took its
uromastyx "act below" figure from Zoo Med's care sheet ("Nighttime
Temperature: 75+°F"), which clashed with
`content/guides/uromastyx-tank-setup-guide.mdx`'s 65°F (18°C) "usually
without needing supplemental night heat."

Surveyed against six sources on 2026-09-03, all fetched directly:

| Source | Basking | Cool side | Night |
| --- | --- | --- | --- |
| ReptiFiles (via the Zen Habitats mirror) | 120-130°F surface, U. aegyptia 130°F+ | ~85°F | not stated in the fetched section |
| Dubia.com | 120-130°F surface | ~85°F | "tolerate nighttime temperatures down to 68°F" |
| Reptile Supply | 120-130°F surface | down to 85°F | 68-80°F |
| Chicago Exotics Animal Hospital | 105-110°F "ideally" at the basking site | warm side 80-100°F | "At night, the enclosure should never fall below 65°F" |
| Long Island Birds & Exotics Vet Clinic | 110-120°F | warm 90-100°F, cool 80-85°F | not stated |
| Zoo Med | 98-115°F basking spot | 85-90°F daytime terrarium | 75+°F |

Zoo Med's 75°F was the strict outlier of the six and has been dropped from the
emergency plan entirely, source link included. That row now reads 68°F as the
act-below line, where three independent care sheets land, with "never below
65°F" from Chicago Exotics Animal Hospital as the hard floor. The two figures
are not in tension: 68°F is "tolerates down to," 65°F is "never below," so the
act line sits above the floor by design.

Remaining gap, minor: `uromastyx-tank-setup-guide.mdx` still says night drops
to "around 65°F" as a routine expectation, which reads slightly looser than
the three care sheets' 68°F even though it matches the vet hospital's hard
floor exactly. Someone may want to reword it as a floor rather than a normal
resting point, but no number there is wrong.

**Basking is NOT a conflict.** The apparent 120-130°F vs 98-115°F gap is a
surface-vs-air measurement difference, not a disagreement. ReptiFiles, Dubia,
and Reptile Supply all state their 120-130°F explicitly as a *surface* reading
taken with an infrared gun on the basking rock; the vet clinics and Zoo Med
give lower numbers for readings at or above the basking site. A basking
surface runs well hotter than the air above it, so both can be right.
`uromastyx-tank-setup-guide.mdx` already says "on the basking surface" and
cites ReptiFiles, so its 120-130°F figure needs no change.

**2026-10-15: Bearded dragon brumation duration and threshold wording.**
`content/guides/bearded-dragon-feeding-guide.mdx` says "not eating for 1 to 4
months is expected" during brumation but then says to "consult a vet if it
extends past roughly 3.5 months," an internally inconsistent pair of numbers
(the "expected" ceiling is higher than the "consult a vet" trigger).
`content/CAREPACKAGE Guides/source/bearded-dragon.html` (the care package
seed, fact-checked and internally consistent) instead frames it as "typical
brumation runs 1 to 3 months," with a vet check past about 3.5 months, more
than 10 percent weight loss, or appetite not returning within 2 to 3 weeks of
waking. `content/guides/bearded-dragon-brumation-guide.mdx` used the care
package's "1 to 3 months typical" framing since it doesn't contradict its own
3.5-month checkpoint. Someone should tighten the "1 to 4 months is expected"
line in the feeding guide to match.
