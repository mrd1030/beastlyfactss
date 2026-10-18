# Late October to mid December animal days: the prep

Scoped 2026-10-18. Goal: at least two animal days in every Monday to Sunday week
from 19 October to 20 December 2026, each with its own article, released three
days before the day. Every date was checked against the founding organization's
own page, not an aggregator calendar. Where no founder exists, the article says
the date is settled and the origin is not, the same treatment as Reptile
Awareness Day and International Wombat Day.

## Schedule

Articles wait in `content/_scheduled-animal-days/` and ship through
`scripts/release-queue.json` (`"hub": false`), which the morning workflow on
main runs. Releases go out on Tuesdays and Fridays only (owner, 2026-10-18):
each article ships on the last Tuesday or Friday at least three days before its
day, so it is live before the homepage band (`EVENT_WINDOW_DAYS = 3`) starts
showing it. **The queue holds any article
whose hero is not in `public/` yet**, so a missing hero delays that article
rather than breaking the deploy. This branch has to be on main before 20
October for the first one to go out on time.

| Week | Day | Date 2026 | Slug | Ships | Origin |
|---|---|---|---|---|---|
| Oct 19-25 | Reptile Awareness Day | Wed 21 Oct | `reptile-awareness-day` | live | date only |
| | Hagfish Day | Wed 21 Oct | `hagfish-slime-how-it-works` (existing) | live | WhaleTimes, 2009 |
| | International Wombat Day | Thu 22 Oct | `international-wombat-day` | live | date only |
| | International Snow Leopard Day | Fri 23 Oct | `international-snow-leopard-day` | Tue 20 Oct | 12 range governments, Bishkek 2013 |
| Oct 26-Nov 1 | National Black Cat Day | Tue 27 Oct | `national-black-cat-day` | Fri 23 Oct | Cats Protection, 2011 |
| | World Lemur Day | Fri 30 Oct | `world-lemur-day` | Tue 27 Oct | Lemur Conservation Network (last Friday of Oct) |
| | Polar Bear Week | Sun 1 to Sat 7 Nov | `polar-bear-week` | Tue 27 Oct | Polar Bears International (set yearly) |
| Nov 2-8 | World Jellyfish Day | Tue 3 Nov | `immortal-jellyfish-turritopsis-dohrnii-explained` (existing) | live | date only |
| | World Numbat Day | Sat 7 Nov | `world-numbat-day` | Tue 3 Nov | Project Numbat, 2015 (first Saturday of Nov) |
| Nov 9-15 | Fancy Rat & Mouse Day | Thu 12 Nov | `fancy-rat-and-mouse-day` | Fri 6 Nov | AFRMA, start year unknown |
| | Steve Irwin Day | Sun 15 Nov | `steve-irwin-day` | Tue 10 Nov | Australia Zoo, 2007 |
| Nov 16-22 | World Falconry Day | Mon 16 Nov | `world-falconry-day` | Fri 13 Nov | International Association for Falconry |
| | World Anteater Day | Thu 19 Nov | `world-anteater-day` | Fri 13 Nov | Instituto Jurumi and Instituto Tamanduá, 2014 |
| Nov 23-29 | Evolution Day | Tue 24 Nov | `evolution-day` | Fri 20 Nov | date only |
| | International Jaguar Day | Sun 29 Nov | `international-jaguar-day` | Tue 24 Nov | Jaguar 2030 Statement, 2018 |
| Nov 30-Dec 6 | National Mutt Day | Wed 2 Dec | `national-mutt-day` | Fri 27 Nov | date only |
| | International Cheetah Day | Fri 4 Dec | `international-cheetah-day` | Tue 1 Dec | Cheetah Conservation Fund, 2010 |
| Dec 7-13 | National Llama Day | Wed 9 Dec | `national-llama-day` | Fri 4 Dec | date only |
| | National Day of the Horse | Sun 13 Dec | `national-day-of-the-horse` | Tue 8 Dec | S.Res.452 (2004), kept by the American Horse Council |
| Dec 14-20 | Monkey Day | Mon 14 Dec | `monkey-day` | Fri 11 Dec | Casey Sorrow and Eric Millikin, 2000 |
| | Christmas Bird Count | 14 Dec to 5 Jan | `christmas-bird-count` | Fri 11 Dec | Audubon, 1900 |

Hagfish Day and World Jellyfish Day reuse an article that is already live. Each
one only got the `animalDay` flag.

## Corrections made

- **National Axolotl Day moved from 12 November to 1 February.** Nothing
  supports 12 November: no founder, no organization, no zoo event. The real day
  is Mexico's Día Nacional del Ajolote. The Senate declared it in 2018, on the
  date of the axolotl genome paper (Nature, 1 February 2018). Confirmed through
  UAEH and UNAM Global. The Senate's own Gaceta page was not found.
- **World Anteater Day is 19 November, not 29 November.** The founders moved it
  in 2020. Older calendars still print the 29th.
- **Steve Irwin Day is not the anniversary of his death.** He died on
  4 September 2006. 15 November is the birthday of Harriet, Australia Zoo's
  Galápagos tortoise.

## Calendar mechanics

- Floating days go in `ranges`, with 2026 and 2027 both declared: Hagfish Day
  (third Wednesday of October), World Lemur Day (last Friday of October) and
  World Numbat Day (first Saturday of November).
- **Polar Bear Week has 2026 only.** PBI's past runs follow no rule (27 October
  to 2 November in 2024, 2 to 8 November in 2025). Add 2027 when PBI posts it.
- **The Christmas Bird Count is declared 14 to 31 December.** `activeWindow()`
  reads one year's range and cannot run past New Year, so a 12-14 to 01-05
  entry would never fire. The article carries the full window.
- Monkey Day and the Bird Count both start on 14 December. The exact-date tier
  gives that day to Monkey Day, and the run carries the rest of the week.
- Matchers:
  - `national-black-cat-day` excludes Lion and Big Cat, the same fix as
    International Cat Day.
  - `fancy-rat-and-mouse-day` excludes Naked Mole Rat.
  - `international-snow-leopard-day` never uses the bare "Leopard", which would
    pick up the leopard gecko.
- Evolution Day has `animals: []`, like World Animal Day.

## Categories

- Wildlife days are `Wild Animals` and carry an `animal-days` entry in
  `ARTICLE_TOPIC`, as the October five do.
- The pet days file under the pet's own category:
  - Black Cat Day under Cats.
  - Fancy Rat & Mouse Day under Small & Exotic Pets.
  - Mutt Day under Dogs.
- Llama and Horse have no species category, so they go under Pet Care.

## Owner checks, from pages a script could not open

- snowleopard.org: the population range it states (4,000 to 6,400, or "as few
  as 3,920 and probably no more than 6,390").
- UNODC World Wildlife Crime Report 2024 PDF: the trafficking market shares.
  These are only needed if Wildlife Conservation Day is added later.
- state.gov: whether Wildlife Conservation Day is described as annual.
- nationalmuttday.com: any founder or start year.

## Considered and left out

| Day | Date | Why |
|---|---|---|
| International Gibbon Day | 24 Oct | Verified (IUCN Section on Small Apes, since 2015). Week already had four days. Good candidate for 2027 |
| Bat Week | 24-31 Oct | Verified dates. No bat article. A strong 2027 candidate |
| National Cat Day | 29 Oct | Verified (Colleen Paige, 2005). Two days after Black Cat Day, which has the better hook |
| National Bison Day | first Sat of Nov | Verified via annual Senate resolutions. Collides with World Numbat Day |
| Shelter Appreciation Week | first full week of Nov | Origin unverified |
| Black-necked Crane Festival | 11 Nov | Verified (RSPN Bhutan, 1998). Kept as a spare for week of 9 Nov |
| Wildlife Conservation Day | 4 Dec | Verified 2012 launch, annual status unclear. Shares 4 Dec with Cheetah Day |
| International Mountain Day | 11 Dec | UN day, a habitat day, not an animal |
| International Animal Rights Day | 10 Dec | Advocacy day with no species |
| Wolf Awareness Week | Oct | Founder's site is gone, 2026 dates unconfirmable |
| National Axolotl Day | 12 Nov | Wrong date, moved to 1 Feb |

## Still to do on each article's release day

- `RELATED_ARTICLES` cannot name a scheduled slug, because
  `check-related-articles` fails on a slug that is not live yet. Wire the three
  pet articles against the guides they serve once they are live:
  - Fancy Rat & Mouse Day against the rat and mouse guides.
  - Black Cat Day against the cat guides.
  - Mutt Day against the dog guides.
