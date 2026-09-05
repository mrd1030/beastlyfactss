# Legal map: where the work stands

Written 2026-09-05 so a fresh session can pick this up without re-deriving anything.
Read this, then `docs/legal-sources/README.md`, then start.

## State of play

| | |
|---|---|
| Animals on the map | 52 |
| Jurisdictions complete for every animal | 23 (AZ, CO, CT, DE, FL, GA, HI, IL, MA, MD, MI, MN, NE, NJ, NM, NV, NY, NYC, OR, PA, TN, TX, UT) |
| Unread cells | 287 |
| Cached primary sources | 57 files in `docs/legal-sources` |

`main` carries everything through Delaware and is deployed. Colorado, Illinois, Minnesota,
Oregon, Connecticut, Maryland, Tennessee, Texas, Massachusetts, Nebraska, Florida, New York,
Georgia, New York City, New Jersey and Utah sit on `claude/legal-map-colorado-dca3og`; either continue there or cut a
fresh branch from main once it lands.

## The loop

One jurisdiction per sitting. It takes a while and that is fine.

1. `node scripts/legal-gaps.mjs` regenerates `docs/LEGAL_MAP_GAPS.md`, which lists every
   unread cell grouped by jurisdiction, with the sources already on file for each.
2. Check `docs/legal-sources/` first. If the state is cached, grep it instead of fetching.
3. Read the primary text. Write the entries with a `cite`, a verbatim `quote`, a `note`
   that explains rather than asserts, and `verifiedOn` set to today in US Eastern.
4. Re-run `legal-gaps.mjs`, then `node scripts/check-legal-map-sync.mjs`. That script
   cross-checks every legal guide against the map and will catch guides you just made
   wrong. It sits at 6 pre-existing errors; anything above that is yours.
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

**The wrong statute, read correctly.** Oregon's prairie dog and capybara sat on this map as
unrestricted, with accurate notes: rodents really are outside ORS 609.305, which reaches only
cats, primates, non-wolf canids, bears and crocodilians. The reasoning was sound and the law was
the wrong one. Both animals are named on ODFW's prohibited species list, which is where a rodent
question in Oregon is actually answered. When an entry's note explains why some statute does not
reach an animal, that is the moment to ask which statute does.

Florida is the sixth, and there it was a whole agency rather than a whole statute. Its wildlife
chapters are FWC's, and arthropods are not FWC's business: 5B-57.004 belongs to the Department of
Agriculture and makes it unlawful to possess any arthropod "regulated by the Department or the
USDA" without a permit. Reading only Chapters 68-5 and 68A-6 makes every invertebrate look
unrestricted, and it was the millipede guide, which had found the agriculture rule, that caught the
error. When a state's wildlife code says nothing at all about a whole phylum, that is a prompt to
ask which agency it belongs to, not evidence that nobody regulates it.

That failure mode has now cost five states. Oregon's prairie dog and capybara, Connecticut's
prairie dog and capybara, Illinois's garter snake and Maryland's corn snake and garter snake all
sat on an accurate reading of a statute that was not the one that answers the question. The
tell is always the same: a note that explains why a list does not reach an animal, without
naming the rule that does. Every state on this map has more than one animal law.

Tennessee is the fifth, and it is the variant to watch for, because there the wrong reading came
from the right statute. Its Class II is "native species, except those listed in other classes",
and three native snakes had been read into Class II on the first half of that clause without the
second half being applied. Every nonvenomous reptile is listed in Class III, so the exception
takes them straight back out. A sourcing-paperwork condition had come along with it, drawn from
§ 70-4-401(b), which reaches Class I and Class II wildlife only. When a definition carries an
"except those listed elsewhere" clause, the elsewhere is the part that decides.

Texas is the sixth and the most expensive so far, at seven wrong cells. Health & Safety Code
§ 822.101(4) is the statute every summary of Texas quotes, and it is a closed list of nineteen
mammals that reaches no reptile, no bird, no rodent and no invertebrate. Of 52 animals it answers
one. The rule that answers a native Texas animal is 31 TAC Chapter 65 Subchapter O, which does not
ban anything: it caps possession at 25 or at six depending on which of two attached figures names
the species, and bars selling one at any number. The garter snake, the flying squirrel and the
prairie dog all sat on this map as unrestricted with accurate notes about a statute that was never
going to reach them.

**A licence that is not a pet licence.** Georgia's rule sorts wild animals into three tiers, two of
which read as permit tiers, and five entries on this map sat here as `permit` because of it. They
were wrong. O.C.G.A. § 27-5-4(b)(1) says who a wild animal licence goes to: the wholesale or retail
wild animal trade and public exhibitors, with no-cost permits for science, education, a capuchin
monkey for a person with a permanent disability, and grass carp for a pond owner. No pet category
exists anywhere in it, and the regulation proves the point by writing express "may be held as a pet
without a license" exceptions for exactly two animals. Before recording any state's licence tier as
a permit, read the statute that says who the licence is issued to.

**A prohibition hidden in a definition.** New York's famous rule is the closed "wild animal" list
that bars keeping a serval or a Burmese python as a pet, and it answers almost nothing else. What
reaches every native snake, lizard, salamander and turtle in the state is ECL § 11-0103(2)(c), which
puts them inside the definition of SMALL GAME. Small game is game, game is protected wildlife, and
§ 11-0107(2) then bars possessing protected wildlife "whether taken within the state or coming from
without the state", which closes the captive-bred-out-of-state argument in advance. The only
possession licence is issued for propagation, science or exhibition. Nothing in that chain contains
the word prohibited, and the animal it prohibits is a pet-store garter snake. When a state's
possession rule seems to have no teeth, check whether its definitions section has quietly made the
animal game.

**An exception buried above the list.** Massachusetts runs a closed exemption list, and the natural
way to read it is to find your animal's group and stop. That is wrong there, because 321 CMR 9.01(3)
sits above every group listing and says no species may be exempted if it is federally listed, in the
IUCN Red Book, or on the state's own endangered list. Nearly every group entry repeats the
cross-reference, so it is operative rather than decorative, and it is what takes the Burmese python
out of Boidae, the crested gecko out of Gekkonidae, the African grey out of Psittacidae, the axolotl
out of a class-wide amphibian clearance and the box turtle out of a turtle allowance that otherwise
runs to 100 animals. None of those animals is named anywhere in the rule. The tell for this shape is
a numbered subsection early in a rule that says what may NOT be listed, followed by lists that keep
pointing back at it.

**A dangerous list read as the whole law.** New Jersey runs three species lists and they answer
three different questions. 7:25-4.8 is the potentially dangerous table, 7:25-4.4 is a closed exempt
list, and 7:25-4.3 is a permit list that is expressly open-ended. Two entries on this map read
`legal` for the cockatoo and the California kingsnake, both cited to 4.8, both reasoning that an
ordinary parrot and an ordinary colubrid are not dangerous animals. That reasoning was correct and
it answered the wrong question: being off the dangerous list only means an animal is not banned.
Whether it is free is decided by 4.4, which names nine birds and nine reptiles and nothing else,
and the kingsnake is not even left to the catch-all because 4.3(a)3.iv names *Lampropeltis* spp.
outright. In a closed-list state, an absence from the prohibited list is not a finding. Find the
animal on the permitted list or accept that it needs a permit.

**A cap read without the section that scopes it.** Utah's reptile tables put the western milk snake
and the California kingsnake in "Limited possession", two a day and four in total, and the common
gartersnake in "Standard", three and nine. Those phrases read like possession law, and the milk snake
entry here said so in as many words: the wording "suggests the cap is not purely about wild
collection". It is. R657-53-8(1) opens by saying total possession limits apply to everything acquired
in state or imported, and then excepts animals that are captive bred and animals "legally obtained
outside of Utah". A purchased milk snake is outside the cap entirely. The lesson generalises past
Utah: a number in a species table is only as wide as the section that says what it applies to, and
that section is usually somewhere else in the rule.

**A rule with nothing behind it.** Minnesota's 2021 pet reptile law says the commissioner
"must prescribe conditions and may issue permits" and then makes lawful possession turn on the
animal having come from a permitted breeder. There is no such permit on the DNR's permits page,
no rule chapter implements it, and the DNR's own pet-trade page never mentions it. A source
condition with no visible machinery is still the law, but it is not the same finding as a
working permit scheme, and the note has to say which one it is.

**A rule that got split.** Utah's R657-3 does not exist any more. It was broken into R657-3a, the
umbrella rule with the definitions and the possession sections, R657-3b for birds and mammals, and
R657-3c for aquatic animals, with amphibians and reptiles carved out to R657-53 entirely. Four
entries on this map cited "R657-3" and one source record was titled "R657-3 / R657-3b", which is the
tell: a citation that hedges between two rule numbers is usually a rule that moved. Nothing was
wrong on the substance, because the successors say the same things, but the citations pointed at
nothing. This is the same shape as the Nebraska and Illinois problems below and wants the same
check: before quoting a rule number that has been on the map a while, confirm the agency still
publishes it.

**A title that got renumbered.** Nebraska moved its Game and Parks wildlife regulations from Title
163 to Title 166 and gave captive wildlife its own chapter, and Title 163 is now called
ADMINISTRATION. Three of the four Nebraska sources on this map still cited "163 NAC ch. 4, § 008",
and the old text is still served over plain HTTP from govdocs.nebraska.gov, where it looks official
and is nine years stale. The substance mostly survived the move, so nothing was wrong, but the
citations pointed at a title about something else. This is the same shape as the Illinois problem
below and worth the same check: before quoting a state regulation that has been on the map a while,
confirm the title still contains what you think it does.

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
| AL | Alabama | 20 | 3 sources on file |
| IN | Indiana | 20 | 1 source on file |
| OK | Oklahoma | 20 | 1 source on file |
| AR | Arkansas | 12 | 1 source on file |
| ME | Maine | 12 | 1 source on file |
| MO | Missouri | 11 | 2 sources on file |

After those, 22 jurisdictions sit at 8 to 10 cells each and two are nearly done, Vermont at 3
and California at 1. Those short ones are almost entirely the eight encyclopedia animals added
late to the matrix, so they go much faster than a cold state: the sources are already cached and
the same eight questions get asked of one rule.

## Loose ends

- **New York City has one unclear cell and it turns on a 1989 systematics paper.** § 161.01(b)(10)
  prohibits "any member of the family Iguanidae, including the green or common iguana". Anolis
  carolinensis was an iguanid until the Frost and Etheridge revision split Polychrotidae, and now
  sits in Dactyloidae. On drafting-era taxonomy the green anole is prohibited; on current taxonomy
  it is not. The Code never dates its family names, and it uses them loosely elsewhere, printing
  "teiidae" in lower case and calling hedgehogs Insectivora. Recorded unclear rather than guessed.
- **Utah has no unclear cells, and the reason is worth stealing.** It is the first state on this map
  to answer the invertebrates at the level of the statute rather than by silence. Utah Code
  23A-1-101(65) defines wildlife as crustaceans, molluscs, and "vertebrate animals living in nature",
  which puts a tarantula, a scorpion, a millipede and a cockroach outside the Division of Wildlife
  Resources entirely, and its Department of Agriculture rules at R68 are commodity quarantines for
  named pests rather than a Florida-style arthropod permit. Where a state's wildlife definition is a
  closed list of taxa, the invertebrate question has an answer; where it ends in an open phrase such
  as "or other wild animal", as in New Jersey and New Mexico, it does not. That is the check to run
  first next time.
- **Utah has one reading that could go the other way, and it is structural rather than about a
  species.** R657-53-7(8) says a species the division has never classified "shall be classified as a
  Controlled species", and a controlled species is defined as one for which a certificate of
  registration or collection permit is required before possession. Read alone, that would put a
  captive-bred bearded dragon behind a permit. It does not, because R657-53-8(1)(a) and (c) lift
  captive-bred and out-of-state animals out of the limits, R657-53-12 is the only certificate of
  registration in the rule that attaches to possession and it covers native venomous reptiles, and
  every DWR page built around the rule is written for someone going out to catch something. Twenty
  Utah reptile cells rest on that reading. If anyone gets a straight answer from the division's
  herpetology contact, this is the thing to ask about.
- **New Jersey has seven unclear cells and four of them are one question.** The tarantula, the
  emperor scorpion, the giant millipede and the hissing cockroach all turn on whether subchapter 4
  reaches invertebrates, and the two readings are both textual. 7:25-4.5 requires a permit for "any
  other exotic mammals, birds, reptiles, or amphibians, or nongame species", and that last phrase is
  not limited by class: 7:25-4.1 defines a nongame species as any wildlife without a hunting season,
  the enabling act at N.J.S.A. 23:2A-3 defines wildlife to include "or other wild animal", and 4.17
  proves the Division means it by assigning conservation status to bivalves and insects. Against
  that, the possession statute at N.J.S.A. 23:4-63.3(j) defines an exotic animal as a mammal, bird,
  reptile, amphibian, fish, mollusc or crustacean, which leaves arthropods out entirely, and not one
  of the Division's three published lists names a single invertebrate. New Jersey's plant pest rules
  sit at N.J.A.C. 2:20 under the Department of Agriculture, which is the Florida-shaped place to
  look if anyone wants to settle these four.
- **New Jersey's other three unclear cells are each their own problem.** The African grey is a
  straight conflict between two documents the same agency publishes: 7:25-4.3(a)1.vi names it as a
  permit species, and the restricted species notice says the Division treats an IUCN Red List entry
  as an endangered listing and that endangered species may not be kept as pets for any reason.
  *Psittacus erithacus* has been IUCN Endangered since 2016. The 4.3 list still calls macaws permit
  species "except endangered forms", so it looks like a list nobody revisited rather than a
  deliberate exception. The Bengal turns on the unqualified words "Felidae--Nondomestic cats" with
  no hybrid provision anywhere in the subchapter. The rabbit is recorded legal but on a statute
  rather than a rule: 23:4-63.3(j) excludes "domesticated companion animals ... as defined by the
  Fish and Game Council", and the Council has never defined that term in N.J.A.C. 7:25, while 4.4
  goes to the trouble of exempting the hamster, gerbil and guinea pig, which are domesticated pets
  on the same footing.
- **Georgia has no unclear cells but one thin answer.** The tiger salamander is recorded legal
  because DNR's prohibited natives list names five salamanders and not that one, and lists "spring
  lizards" among natives that may be taken. DNR says of that list that it "does not include all
  native wildlife that is prohibited", so this is the weakest Georgia entry and the one to re-check
  if anyone gets a straight answer from the Special Permit Unit.
- **New York has one unclear cell and it is the sharpest statute-versus-practice gap on the map.**
  The flying squirrel is on none of New York's lists. It is not a "wild animal" under ECL
  § 11-0103(6)(e), so the pet ban at § 11-0512 misses it. It is not on 6 NYCRR § 180.1, so the
  permit requirement at § 11-0511 does not attach. And it is not small game, because that definition
  names "black, gray and fox squirrels" and stops, nor is it on any DEC species list. On the
  readable law it is unregulated wildlife. DEC says a licence is required and none is issued for
  pets. The rule that would close the gap is 6 NYCRR Part 175, and New York publishes the NYCRR only
  through Westlaw, whose document guids for that Part could not be resolved from here. Individual
  sections DO render with a browser User-Agent once you have the guid, so anyone who can walk the
  Westlaw browse tree in a real browser can settle this in one fetch.
- **Florida has no open cells, and one reading that rests on the agency rather than the rule.**
  Class II item 24 in 68A-6.002 reads "Wolves, coyotes, jackals (family Canidae)", and the
  parenthetical on its face makes every fox a $140-a-year Class II animal. FWC's own personal pet
  page lists "fox" among common Class III species, which is the free permit, and that is what the
  fennec fox entry records. The rule text would support the harsher reading, so if the agency page
  ever changes, that cell changes with it.
- **Nebraska has one unclear cell and one entry that rests on an absence.** The unclear one is the
  hedgehog: the importation list at 166 NAC 8 § 001.08A reads "Eurasian Hedgehogs, Erinaceus spp."
  and the pet is Atelerix albiventris. The vintage argument is real, since Massachusetts still
  writes the same animal as Erinaceus albiventris, but the word "Eurasian" cuts against it. The
  entry that rests on an absence is the tiger salamander, recorded banned: 166 NAC 10 § 001.03
  makes it unlawful to possess any native reptile or amphibian except as provided, the exceptions
  are four closed lists, and the tiger salamander is on none of them and on no other chapter
  either. The only visible way out is a taxonomy argument, that Nebraska's animal is the barred
  tiger salamander and Ambystoma tigrinum sensu stricto is not native there.
- **Massachusetts has no open cells, and one line of text nobody has drawn.** 321 CMR 9.01(3)(b)
  bars exempting a species "listed in the Red Book(s)" of the IUCN, and M.G.L. c. 131, § 23 says
  "in any category" of the Red Data Books. Neither says whether NEAR THREATENED counts, and two
  animals on this map sit exactly there: the ball python and Goffin's cockatoo. MassWildlife lists
  ball pythons among the snakes that may be kept, which settles the practice without settling the
  words. Both are recorded legal with the edge named in the note. The other soft spot is the
  red-footed tortoise, which has no assessment at all on the current IUCN checklist; a reassessment
  would move it from the turtle allowance into the permit tier with no change to Massachusetts law.
- **Texas has no open cells, but one thing to watch.** Its § 65.331(d) and (e) figures are the two
  attached graphics that carry the whole cap scheme, and they are served as presigned S3 links that
  expire, so they cannot be re-fetched from a stored URL. Both are transcribed in full in
  `TX-tx-nongame.txt`. The (d) list was last amended March 2020 and § 65.325(a) says the department
  evaluates additions and removals periodically, so the figures are the part of Texas with a shelf
  life.
- **Tennessee has three cells left, and they are all the same chapter.** Tenn. Comp. R. & Regs.
  1660-01-18, Rules and Regulations of Live Wildlife, is where the commission's own additions to
  the classes live. Serval and fennec fox are on no statutory Class I list but § 70-4-403(1)
  lets the commission add them; the quaker parakeet is untouched by the statute but Class V is
  nothing but rule-designated injurious species, and Tennessee is on most circulated monk
  parakeet ban lists. All three are `unclear` on that chapter alone. It is hosted only on
  publications.tnsosfiles.com, which returns 403 to this container, as do sos.tn.gov and
  tnsos.org. Anyone with a browser can settle three cells by opening one PDF. What rides on the
  first two is bigger than a fee: § 70-4-404(c)(1) closed personal possession of Class I
  wildlife in 1991, so an addition by rule means a flat no, not a permit.
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
- **Connecticut has one open item, and it is a whole statute.** Conn. Gen. Stat. § 26-78 deals
  with turtles separately from the regulation and is reported to bar importing, buying and
  selling red-eared sliders. It could not be read: cga.ct.gov resets every connection from this
  container, through curl, python and a headless Chromium, and no reproduction was reachable
  either. The slider is recorded `unclear` and the other five Connecticut turtle and tortoise
  entries carry the same caveat in their notes. If someone with a browser can read § 26-78, six
  cells can be settled in ten minutes.
- **Oregon's hamster is `unclear` on what looks like a drafting slip.** The not-wild list at
  OAR 635-056-0020(14) reads "Common Hamster — Cricetus cricetus", the wild European species,
  and the pet Syrian hamster, *Mesocricetus auratus*, appears nowhere in the division. In a
  closed-list state that is a bar. The fix would be one binomial, and it is worth re-checking on
  a later pass in case ODFW has corrected it.
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

Twelve matrix animals have deep coverage and no legal guide. The two best are complete now:

- **capybara**, 51 of 51 states read
- **prairie-dog**, 51 of 51

Both already had a Colorado cell and both were wrong: `permit` where the answer is `banned`.
They are corrected now, but anything drafted against the older map needs re-reading, and the
prairie dog in particular reads very differently once Colorado, its own native range, turns out
to prohibit it by name.

Twenty-six animals are now at 51 of 51, which is half the matrix: hamster, gerbil, guinea pig,
chinchilla, degu, ferret, cockatoo, hedgehog, sugar glider, garter snake, kingsnake, Bengal cat,
fennec fox, serval, prairie dog, capybara, ball python, boa constrictor, Burmese python, green
iguana, tokay gecko, veiled chameleon, Russian tortoise, savannah monitor, Nile monitor and
Argentine tegu. Two more are one short at 50, the ackie monitor and the quaker parakeet.

The eight encyclopedia animals added recently (bearded dragon, leopard gecko, crested
gecko, blue-tongue skink, Jackson's chameleon, green anole, rabbit, hissing cockroach) sit
at 23 to 24 states each and are **not** ready for guides. `check-legal-map-sync.mjs` fails a
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

Maryland is the only state that answers it by weight: § 10-621(b)(1)(iv) reaches a cat hybrid
only "if the hybrid weighs over 30 pounds", with no generation test anywhere in the section. The
line is drawn on the individual animal rather than its ancestry, which is the one version of
this rule whose answer could change as a cat grows.

New Jersey is the sixteenth Bengal answer and the only one recorded `unclear` for want of any
provision at all. 7:25-4.8(a) reads "Felidae--Nondomestic cats" and stops. There is no hybrid
clause, no generation count, no registry exit and no weight test anywhere in subchapter 4, so the
whole question rides on a word the rule never defines, applied to an animal that is half of each
category the word distinguishes. The statute above it does not help either, because its carve-out
for "domesticated companion animals" is expressly one "as defined by the Fish and Game Council" and
the Council has not defined it. Sixteen states, and this is the one where the drafters appear not
to have considered the question.

New York City is the fifteenth Bengal answer and the only one with no exit at all: "any hybrid or
cross-breed offspring of a wild cat and domesticated or other cat", with no filial number, no weight
test and no registry exception. The same cat is lawful in Buffalo under the state's five-generation
rule and unlawful in Brooklyn. Georgia is the fourteenth and nearly as blunt, banning all Felidae
and adding, through DNR, that hybrids "and all subsequent generations" are regulated and that most
exotic cat hybrids are not a legal pet.

New York is the thirteenth Bengal answer and the strictest generation rule on the map. Felidae "and
all hybrids thereof" is a wild animal, with one exit: hybrids of Felis catus "that are registered by
the American Cat Fanciers Association or the International Cat Association provided that such cats
be without any wild felid parentage for a minimum of five generations". Two conditions, like
Massachusetts, but at five generations rather than three, and 6 NYCRR § 180.1(b)(8) repeats the
sentence word for word, which forecloses reading the regulation as narrower than the statute.

Florida is the twelfth Bengal answer and the only one written as a resemblance test. 68A-6.002(1)(d)
reaches a wildlife-domestic hybrid only where it is "substantially similar in size, characteristics
and behavior so as to be indistinguishable from the wild animal", and then regulates it at the wild
parent's class. A pet Bengal is not indistinguishable from an Asian leopard cat, so the clause never
engages, and even if it did the leopard cat is itself Class III, so the worst case is a free permit.
Every other state on this row counts generations or weighs the cat; Florida asks what it looks like.

Nebraska is the eleventh Bengal answer and the one with the least written down. Neb. Rev. Stat.
§ 37-477(2) bans every member of Felidae and excepts "the species Felis domesticus", with no
generation rule, no weight test and no registry requirement anywhere near it. A late-generation
Bengal sold as a domestic cat clears it; an early-generation hybrid is not that species. 166 NAC 8
defines a hybrid as "an animal produced by crossing species or subspecies" and then never uses the
definition to answer this. Eleven states, eleven approaches, and this is the one where the
condition is obvious and the threshold is nowhere.

Massachusetts is the tenth Bengal answer and the only one that makes the paperwork part of the
test rather than evidence of it. M.G.L. c. 131, § 77A prohibits possessing a wild felid hybrid
outright, and the exit is "a domesticated show or pet cat registered with a nationally or
internationally recognized breeding association or registry which certifies the pedigree and
registration of such cat to be without any wild felid parentage for a minimum of three
generations". Two conditions, not one: the generations without the registration do not help, and
the registration without a certifying pedigree does not either. It lands on the same animal as
Iowa's F4 rule while counting backwards from the cat instead of forwards from the cross, and
MassWildlife applies the identical test to the Savannah.

Texas is the ninth Bengal answer and the one that turns on a single cross-reference. Health & Safety
Code § 822.101(4)(T) reaches "any hybrid of an animal listed in this subdivision", and the small cats
listed are the ocelot, bobcat, lynx, serval and caracal. Prionailurus bengalensis is not among them,
so the Bengal is clear, while the Savannah is caught by the same sentence because the serval is at
clause (J). Two hybrid breeds, one sentence, opposite answers. When a state defines hybrids by
reference to its own list rather than by generation, the answer is which parent species got named.

Tennessee is the eighth, and it answers by implication rather than by drafting. Nothing in the
statute mentions the Bengal or the Asian leopard cat, so the catch-all puts both in Class III.
What makes it more than an absence is subdivision (3)(N), which drops "Bobcat/domestic cat
hybrids" into the no-permit class expressly, even though the bobcat itself is a native Class II
animal. A state that deliberately frees the hybrid of its own native wildcat is not reaching an
Asian leopard cat hybrid by silence. Where a state names one hybrid it did not have to name,
read that as the answer for the others.

Connecticut is the seventh and the cleanest: Category One is the family Felidae, "except Bengal
cat pursuant to section 26-40a", carved out by name inside the listing, with no generation
cutoff and a "notwithstanding changes in taxonomic nomenclature" opener that forecloses arguing
the animal back in on a reclassification. Seven states, seven drafting approaches, and the
Bengal is legal in three of them for three different reasons.

Oregon is the sixth Bengal answer and the most permissive: no hybrid clause anywhere in the
statute, domestic cat breeds declared not wild, and ORS 609.341(4)(a)(B) expressly contemplating
breeding a small exotic feline with a domestic cat for retail sale of the offspring. A state
that legislates about the breeding programme and says nothing about the kittens has answered the
question.

Minnesota is the fifth Bengal answer and the first one that is a contradiction rather than a
rule: the carve-out for registered domestic breeds and the all-generations hybrid sentence are
in the same definition and point opposite ways. Where a state writes both, check whether the
carve-out would have anything left to do under the broader reading. In Minnesota it would not,
which is the argument for the exemption, and it is still only an argument.

Connecticut is the answer to the rabbit problem that Minnesota and Illinois pose. Its
Category Two picks up "a species referenced as injurious wildlife in 50 CFR 16.11", which lists
the European rabbit, so on the lists alone a house rabbit would be barred. It is not, because
the categories only ever apply to a "wild animal", and the regulation defines "domestic animal"
by what selective breeding has done to the animal rather than by species name. One definition,
written once, disposes of a question two other states cannot answer. When a state names
Oryctolagus, look for a domestication definition before reading the listing as a ban.

The rabbit is the other good probe. Hawaii, California and Arizona each carve it out by
name in different words, Arizona going furthest by saying domestic rabbits are not wildlife
at all. Nevada instead names the species under the common name "Wild European Rabbit" with
no domesticated carve-out, which is why it is the one `unclear` rabbit on the map.
