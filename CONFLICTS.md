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

**2026-09-15: Uromastyx nighttime temperature floor.**
`content/guides/uromastyx-tank-setup-guide.mdx` says nighttime drops to
around 65°F (18°C) "usually without needing supplemental night heat." Zoo
Med's own uromastyx care sheet (zoomed.com/uromastyx/, fetched directly)
says "Nighttime Temperature: 75+°F," a meaningfully stricter floor.
`content/guides/reptile-emergency-plan-guide.mdx` used the Zoo Med figure
for its "act below" column since it's the more authoritative, directly
fetched source, but `uromastyx-tank-setup-guide.mdx` itself was not changed.

Surveyed against six sources on 2026-09-03, all fetched directly. The night
figure is genuinely unsettled, and Zoo Med is the strictest of the six:

| Source | Basking | Cool side | Night |
| --- | --- | --- | --- |
| ReptiFiles (via the Zen Habitats mirror) | 120-130°F surface, U. aegyptia 130°F+ | ~85°F | not stated in the fetched section |
| Dubia.com | 120-130°F surface | ~85°F | "tolerate nighttime temperatures down to 68°F" |
| Reptile Supply | 120-130°F surface | down to 85°F | 68-80°F |
| Chicago Exotics Animal Hospital | 105-110°F "ideally" at the basking site | warm side 80-100°F | "never fall below 65°F" |
| Long Island Birds & Exotics Vet Clinic | 110-120°F | warm 90-100°F, cool 80-85°F | not stated |
| Zoo Med | 98-115°F basking spot | 85-90°F daytime terrarium | 75+°F |

So the tank setup guide's 65°F matches the Chicago Exotics floor exactly and
sits 3°F under the hobbyist consensus, while Zoo Med's 75°F is an outlier on
the strict side. Someone should decide whether the emergency plan should keep
citing the strictest of six sources as its act-below line, or move to the 68°F
that three independent sources land on.

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
