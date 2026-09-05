# Legal map: where the work stands

Written 2026-09-05 so a fresh session can pick this up without re-deriving anything.
Read this, then `docs/legal-sources/README.md`, then start.

## State of play

| | |
|---|---|
| Animals on the map | 52 |
| Jurisdictions complete for every animal | 8 (AZ, CO, DE, HI, MI, NM, NV, PA) |
| Unread cells | 779 |
| Cached primary sources | 23 files in `docs/legal-sources` |

`main` carries everything through Delaware and is deployed. Colorado sits on
`claude/legal-map-colorado-dca3og`; either continue there or cut a fresh branch from main
once it lands.

## The loop

One jurisdiction per sitting. It takes a while and that is fine.

1. `node scripts/legal-gaps.mjs` regenerates `docs/LEGAL_MAP_GAPS.md`, which lists every
   unread cell grouped by jurisdiction, with the sources already on file for each.
2. Check `docs/legal-sources/` first. If the state is cached, grep it instead of fetching.
3. Read the primary text. Write the entries with a `cite`, a verbatim `quote`, a `note`
   that explains rather than asserts, and `verifiedOn` set to today in US Eastern.
4. Re-run `legal-gaps.mjs`, then `node scripts/check-legal-map-sync.mjs`. That script
   cross-checks every legal guide against the map and will catch guides you just made
   wrong. It sits at 16 pre-existing errors; anything above that is yours.
5. Also run `check-internal-links` and `check-related-articles` if you touched content.
6. Cache the sources you fetched into `docs/legal-sources` and add a README row.
7. Commit, push. Do not run `npm run build`.

## What actually blocks these sittings

Not the law. Three things:

**A document nobody has managed to download.** This was the whole story in Vermont and
New Mexico, where every entry sat at `unclear` because a species list could not be
obtained. Vermont needed `curl -A "Mozilla/5.0"`. New Mexico's list sat behind a download
page wrapping the real PDF link. In both cases one fetch resolved 40+ cells at once. When
a state's existing entries are mostly `unclear` citing a missing list, finding that list
is the entire sitting.

**A rule read backwards.** Nevada's `NAC 503.140` clears "all felines, except mountain
lions and bobcats" and sits under a heading saying these species need no permit. It had
been read as a prohibition, which put the serval in the wrong bucket on the map and in
the serval guide. Delaware was worse: secondary sources circulate a prohibited list naming
pythons, wild rodents and two dozen others, and no such possession prohibition exists in
the regulation. Those names come from a rule about what sales permit holders may breed.
Eight Delaware entries were wrong because of it.

**A rule that moved.** Colorado rewrote its reptile and amphibian law effective 1 May 2026,
lifting every herp provision out of the Chapter W-11 unregulated wildlife list and into a new
Chapter W-7, and adding a geographic test on the way through. Five entries on the map were
correct when written and wrong by the time this sitting opened, and nothing about them looked
stale. The Secretary of State's rule page lists every version with its effective date, so check
that you are reading the current one before you quote a cite that has been on the map for a
month. Two guides had already picked up the change without the map being updated, which is the
same signal from the other direction.

So: read the section heading, not just the list. Never take a prohibited list from a secondary
source without finding it in the regulation. And check the version date on anything cited from a
state that codifies by version.

## Next up

| Code | State | Unread | Note |
|---|---|---|---|
| IL | Illinois | 37 | 3 sources on file |
| MN | Minnesota | 37 | |
| OR | Oregon | 37 | |
| CT | Connecticut | 36 | |
| MD | Maryland | 35 | 4 sources on file |

## Loose ends

- **Vermont has three cells left**: quaker parakeet, African grey and rabbit. They depend
  on the 2010 Domestic Species List, whose text is stored as glyph outlines and could not
  be extracted by any method tried, WebFetch included. Everything else about Vermont is
  cached and settled.
- **Michigan's Part 413 prohibited species list** was never read. michigan.gov refuses this
  container on every path. It is an invasive species list and almost certainly names no pet
  reptile, but it is unverified and flagged in the cache.
- **The New Mexico invertebrate question** is recorded `unclear` rather than banned. The
  default clause would sweep in a tarantula, but the rule is built for vertebrates and never
  uses the word invertebrate. Arizona and Nevada answer the same question cleanly because
  their statutes define wildlife in a way that excludes arthropods.
- **Colorado's ackie monitor is the one open cell there.** Chapter W-7 clears Varanidae only for
  monitors native only to the tropics, defined as 26.0 N to 26.0 S, and *Varanus acanthurus*
  sits on that line. CPW has published determinations for five other monitors and none for this
  one. Recorded `unclear`. Its email address for species questions is in the cache header.
- **Colorado's other entries carry a shelf life.** CPW updates its species lists "on an
  as-available basis" and says outright that a determination can change when new information
  changes a species' native range. Several Colorado cells turn entirely on that call.

## Articles

Twelve matrix animals have deep coverage and no legal guide. The two best are ready now:

- **capybara**, 50 of 51 states read
- **prairie-dog**, 49 of 51

Both already had a Colorado cell and both were wrong: `permit` where the answer is `banned`.
They are corrected now, but anything drafted against the older map needs re-reading, and the
prairie dog in particular reads very differently once Colorado, its own native range, turns out
to prohibit it by name.

Then guinea pig and gerbil at 42, quaker parakeet and ackie monitor at 41, degu and red-footed
tortoise at 40, green iguana at 39.

The eight encyclopedia animals added this week (bearded dragon, leopard gecko, crested
gecko, blue-tongue skink, Jackson's chameleon, green anole, rabbit, hissing cockroach) sit
at 4 to 11 states each and are **not** ready for guides. `check-legal-map-sync.mjs` fails a
guide that asserts a status for a state the map has not read, so writing one now produces a
page the build rejects. They need map depth first.

Any new legal guide needs a `RELATED_ARTICLES` entry in `src/lib/data/relatedArticles.js`.
The auto-detect only covers standard care-guide suffixes, and `-legal-guide` is not one.

## Findings worth reusing

The Bengal cat has come out four different ways, which makes it a good test of whether you
have actually read a state's hybrid rule: unclear in Pennsylvania, legal in Michigan and
New Mexico on closed lists, legal in Nevada by a family-wide exemption, restricted in
Arizona by an express hybrid clause with no generation cutoff.

Colorado answers the Bengal in five words and no conditions, on a domestic animal list that
clears *Felis catus* "including hybrids with wild felines". No generation cutoff, no weight
threshold. It is the most permissive hybrid rule found so far, and it sits in the same state
that prohibits the monk parakeet and the prairie dog outright.

The third good probe turned up in Colorado: **a family name on an allow-list is not an answer.**
Chapter W-7's Appendix A lists Boidae, Testudinidae, Colubridae and Dactyloidae, and the rosy
boa, Russian tortoise, garter snake and green anole are all banned there anyway, because each
family listing is qualified by "native only to the tropical and subtropical region". Boa
constrictor clears it and the rosy boa does not, off the same line. Any state whose allow-list
carries a range or origin qualifier needs this check per species, not per family.

The rabbit is the other good probe. Hawaii, California and Arizona each carve it out by
name in different words, Arizona going furthest by saying domestic rabbits are not wildlife
at all. Nevada instead names the species under the common name "Wild European Rabbit" with
no domesticated carve-out, which is why it is the one `unclear` rabbit on the map.
