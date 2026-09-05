# Legal map: where the work stands

Written 2026-09-05 so a fresh session can pick this up without re-deriving anything.
Read this, then `docs/legal-sources/README.md`, then start.

## State of play

| | |
|---|---|
| Animals on the map | 52 |
| Jurisdictions complete for every animal | 10 (AZ, CO, DE, HI, IL, MI, MN, NM, NV, PA) |
| Unread cells | 705 |
| Cached primary sources | 28 files in `docs/legal-sources` |

`main` carries everything through Delaware and is deployed. Colorado, Illinois and Minnesota
sit on `claude/legal-map-colorado-dca3og`; either continue there or cut a fresh branch from main
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

**A rule with nothing behind it.** Minnesota's 2021 pet reptile law says the commissioner
"must prescribe conditions and may issue permits" and then makes lawful possession turn on the
animal having come from a permitted breeder. There is no such permit on the DNR's permits page,
no rule chapter implements it, and the DNR's own pet-trade page never mentions it. A source
condition with no visible machinery is still the law, but it is not the same finding as a
working permit scheme, and the note has to say which one it is.

**A citation that outlived its statute.** Every Illinois entry on the map cited 720 ILCS 585,
the Dangerous Animals Act. P.A. 98-752 repealed it effective 1 January 2015 and moved it to
720 ILCS 5/48-10. The substance survived the move, so nothing on the map was wrong, but nine
entries pointed at a statute that no longer exists, because that is what the secondary sources
still print. Where a fetcher answers "not currently available" for a section, that is the answer.

So: read the section heading, not just the list. Never take a prohibited list from a secondary
source without finding it in the regulation. Check the version date on anything cited from a
state that codifies by version. And confirm the citation itself still resolves.

## Next up

| Code | State | Unread | Note |
|---|---|---|---|
| OR | Oregon | 37 | 2 sources on file |
| CT | Connecticut | 36 | 2 sources on file |
| MD | Maryland | 35 | 4 sources on file |
| TN | Tennessee | 35 | 1 source on file |
| TX | Texas | 35 | 3 sources on file |

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
- **Illinois has one unresolved conflict, and it is in the statute.** 510 ILCS 68/5-5(a) caps
  possession at "no more than 4 total per species" for herptiles, and § 5-5(e) requires a permit
  over that limit "regardless of the origin of the species". The rule at 17 Ill. Adm. Code
  885.20(d) writes the same cap as reaching native taxa only. Every Illinois non-native reptile
  entry carries this in its note rather than resolving it, because the statute and the rule
  genuinely do not agree and IDNR has not published a reading either way.
- **The Minnesota rabbit is recorded `unclear`, and it is the sharpest version of this problem
  on the map.** Minn. R. 6216.0250 designates *Oryctolagus cuniculus* a prohibited invasive
  species with no strain qualifier, § 84D.05 bars possession outright, and the DNR's own page
  says possession is a misdemeanour with permits only for disposal, control, research or
  education. No domestic carve-out exists anywhere and the DNR has published no profile for the
  species. Illinois and Minnesota name the same animal and the map answers them differently; the
  notes explain why.
- **The Minnesota Bengal is `unclear` on an internal conflict**, not on a gap. § 346.155 excludes
  cats registered and shown as a domestic breed by a multibreed registry, which the Bengal is,
  and the same definition then sweeps in every hybrid and all subsequent generations. Both
  sentences are in force, enforcement sits with local animal control, and nobody has resolved it.
- **The Illinois rabbit is recorded legal on a reading, not on a carve-out.** Two provisions name
  the animal, 520 ILCS 5/3.23 barring possession of "San Juan (sometimes called European)
  rabbits" with no permit available, and 17 Ill. Adm. Code 805.20(a) listing the genus
  Oryctolagus as injurious. Neither writes an express exception for domestic stock. The note
  sets out why both read as aimed at wild-type animals; it is the thinnest Illinois answer.

## Articles

Twelve matrix animals have deep coverage and no legal guide. The two best are ready now:

- **capybara**, 50 of 51 states read
- **prairie-dog**, 49 of 51

Both already had a Colorado cell and both were wrong: `permit` where the answer is `banned`.
They are corrected now, but anything drafted against the older map needs re-reading, and the
prairie dog in particular reads very differently once Colorado, its own native range, turns out
to prohibit it by name.

Then guinea pig and gerbil at 44, quaker parakeet and ackie monitor at 43, degu and red-footed
tortoise at 42, green iguana at 41.

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

Illinois adds a fourth probe, and it is a definition rather than a list: 510 ILCS 68/25-5 says
"'Monitor lizards' means the following members of the Varanidae family, specifically crocodile
monitors and Komodo dragons." The article around it puts monitor lizards under a permit regime
available only for educational programmes. Read the heading and Illinois restricts every
Varanus; read the definition and it restricts two, leaving the savannah, Nile and ackie monitors
entirely unregulated. Any state that names a family and then narrows it in the same sentence
needs the definition read before the list.

Minnesota is the fifth Bengal answer and the first one that is a contradiction rather than a
rule: the carve-out for registered domestic breeds and the all-generations hybrid sentence are
in the same definition and point opposite ways. Where a state writes both, check whether the
carve-out would have anything left to do under the broader reading. In Minnesota it would not,
which is the argument for the exemption, and it is still only an argument.

The rabbit is the other good probe. Hawaii, California and Arizona each carve it out by
name in different words, Arizona going furthest by saying domestic rabbits are not wildlife
at all. Nevada instead names the species under the common name "Wild European Rabbit" with
no domesticated carve-out, which is why it is the one `unclear` rabbit on the map.
