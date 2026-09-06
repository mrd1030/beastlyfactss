# Legal map: where the work stands

Written 2026-09-05, revised the same evening after a seven-jurisdiction sitting, so a fresh session
can pick this up without re-deriving anything. Read this, then `docs/legal-sources/README.md`,
then start.

## State of play

| | |
|---|---|
| Animals on the map | 52 |
| Jurisdictions complete for every animal | 39 (AL, AR, AZ, CA, CO, CT, DE, FL, GA, HI, ID, IL, IN, MA, MD, ME, MI, MN, MO, NC, NE, NH, NJ, NM, NV, NY, NYC, OH, OK, OR, PA, RI, SC, TN, TX, UT, VT, WI, WY) |
| Unread cells | 117 |
| Jurisdictions left | 13 (AK, DC, IA, KS, KY, LA, MS, MT, ND, SD, VA, WA, WV) |
| Cached primary sources | 72 files in `docs/legal-sources` |

The tail is now perfectly uniform. Every one of the thirteen remaining jurisdictions is missing the
same nine animals and no others: the flying squirrel, the five encyclopedia lizards (bearded dragon,
leopard gecko, crested gecko, blue-tongue skink, Jackson's chameleon), the green anole, the rabbit
and the Madagascar hissing cockroach. Thirteen states times nine animals is the whole of what is
left. Every snake, turtle, mammal and bird on the map is finished in all 52 jurisdictions.

`main` carries everything through the 32-jurisdiction mark. Branch
`claude/legal-map-beastlyfacts-lundsv` carries Arkansas, Maine, Missouri, Idaho, Rhode Island,
New Hampshire and Wyoming and is not merged yet; cut the next branch from main once it is.

## The loop

Several jurisdictions per sitting now. The mechanics first:

1. `node scripts/legal-gaps.mjs` regenerates `docs/LEGAL_MAP_GAPS.md`, which lists every
   unread cell grouped by jurisdiction, with the sources already on file for each.
2. Check `docs/legal-sources/` first. If the state is cached, grep it instead of fetching.
3. Read the primary text. Write the entries with a `cite`, a verbatim `quote`, a `note`
   that explains rather than asserts, and `verifiedOn` set to today in US Eastern.
4. Re-run `legal-gaps.mjs`, then `node scripts/check-legal-map-sync.mjs`. That script
   cross-checks every legal guide against the map and will catch guides you just made
   wrong. It sits at 3 pre-existing errors; anything above that is yours.
5. Also run `check-internal-links` and `check-related-articles` if you touched content.
6. Cache the sources you fetched into `docs/legal-sources` and add a README row.
7. Commit, push. Do not run `npm run build`.

Then the substance. Four questions answer all nine animals in most states, and a state with a
species list answers them in one read:

1. **Does the state's definition of wildlife reach a terrestrial arthropod?** That settles the
   cockroach, and it is the question to ask first because it is the only one that can go three ways.
   A closed list of taxa (Wyoming's statute, Utah's, Alaska's) puts an insect outside the agency
   entirely. A definition that names invertebrates, or ends in an open catch-all such as "all other
   wild animals, regardless of classification" (New Hampshire, Arkansas, Missouri), pulls it in, and
   you then have to find the operative rule, which may exempt it (Arkansas, Missouri) or swallow it
   (New Hampshire).
2. **Is a non-native pet reptile exempt as a class, listed, or caught by a catch-all?** Five of the
   nine animals fall out of this one question, and most states answer it in a single clause:
   "Reptiles, exotic, except ..." or "Amphibians and reptiles not listed in Section 8 or 9".
3. **Is the green anole native there?** It flips from the non-native answer to the native one across
   a good part of what is left. Arkansas is the model: its list clears the genus Anolis "except
   ... species native to Arkansas", which is written for exactly this animal.
4. **Does the wild animal definition exclude domesticated animals, or does a list name the domestic
   rabbit?** That settles the rabbit. Both devices are common and they give the same answer.

The flying squirrel is the one that usually needs its own look, because it is a native mammal in
most of these states, and native mammals are where the wild-take allowances stop: Maine's, Idaho's
and Missouri's all reach reptiles, amphibians and invertebrates and not mammals.

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

**A list the agency publishes about itself, two revisions behind.** Arkansas is the sharpest version
of "a rule that moved" because the stale copy is on the agency's own domain and looks canonical. The
map cited `agfc.com/wp-content/uploads/2023/04/221112_4CP-Unrestricted-Captive-Wildlife-Species-List-.pdf`,
a compiled PDF of Code Addendum R1.01 dated 11/1/22, and forty Arkansas entries rested on it. The
current codebook, as of 1 July 2025, adds the rosy boa to the unrestricted list outright and adds a
whole Anoline Lizards entry qualified "except Brown Anoles (Anolis sagrei) or species native to
Arkansas". Read the 2022 PDF and the rosy boa comes out prohibited and the green anole comes out
unanswered; read the codebook and they come out legal and conditional. The compiled PDF says so
itself, in its own header: the codebook lists "take precedence". The tell is a document that
describes itself as a compilation, an extract or a summary of a regulation rather than as the
regulation. Check the codebook date, not the PDF date.

Arkansas had a second layer under it, and it runs both ways. The 2022 chapter PDFs on AGFC's S3
bucket carry no express exception for terrestrial invertebrates; the current Codes 09.01, 09.07 and
09.10 all do, which is the only reason a pet arthropod is legal there. And the closing clause of the
addenda was rewritten: the 2022 version let the Commission permit "any other unlisted species upon
evaluation and determination", while the current R1.02 and R1.03 both end "Species not listed in
Addenda R1.01, R1.02, or R1.03 are prohibited until evaluated". Arkansas went from a permittable
default to a closed list, and neither sentence is in the version that circulates.


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

**Two rules where you only looked at one.** Alabama, Indiana and Oklahoma all split their law the
same way, into a rule about dangerous or prohibited species and a rule about the state's own
wildlife, and in all three the earlier entries here had read the first and not the second. Alabama's
milk snake was legal because it is not on the federal injurious list, which is true and is answered
by 220-2-.26, while 220-2-.92 protects "Snake, All Native King  Lampropeltis spp." and Lampropeltis
triangulum is an Alabama native. Indiana's milk snake and garter snake were legal on 312 IAC 9-11,
the three permit classes, which contain no colubrid, while 312 IAC 9-5 bars selling any of 99 named
native taxa "regardless of place of origin". Oklahoma's garter snake was legal on the exemption list
at 800:25-25-3, whose reptile clause is expressly written for species "not indigenous to Oklahoma".
The tell in every case is an entry whose note explains why a prohibited list does not reach an
animal that lives in that state. A prohibited list never answers a native.

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

Thirteen jurisdictions, nine animals each, 117 cells. Ordered by how much is already on file.

| Code | State | Sources on file | What is likely to decide it |
|---|---|---|---|
| MT | Montana | 2 | A white list. § 87-5-705(1) bars anything not allowed by law or commission rule, so read 12.6.2205 (noncontrolled), 12.6.2208 (controlled) and 12.6.2215 (prohibited) before assuming silence helps. § 87-5-702 puts rodents, cats, dogs and ferrets outside the scheme as domestic animals, which may answer both the rabbit and the flying squirrel |
| WA | Washington | 1 | RCW 16.30 is a short enumerated dangerous-animal list and answers none of the nine. The rule that will is WAC 220-640 (deleterious exotic wildlife) plus WAC 220-450 on native wildlife. Do not stop at 16.30 |
| VA | Virginia | 1 | 4VAC15-30-40 is a permit table for predatory or undesirable species. Virginia's native wildlife rules are elsewhere, 4VAC15-20 and 4VAC15-360; the flying squirrel and the anole will be there, not in 30-40 |
| KY | Kentucky | 1 | 301 KAR 2:082 has three lists and a permit-exempt list at Section 7, which should answer most of the nine in one read. Check whether KRS 150.180 or 301 KAR 2:081 reaches natives |
| IA | Iowa | 2 | 717F is a family-and-order dangerous list that answers none of the nine. Iowa Code 481A is the native side, and 571 IAC 77 and 111 are where captive wildlife actually sits |
| LA | Louisiana | 2 | LAC 76:XV.101 was rewritten in January 2025 and is one of the strictest reptile rules in the country, so it should answer five of the nine directly. The anole is a Louisiana native |
| AK | Alaska | 2 | Already half-answered by the sources on file: AS 16.05.940(19) defines game as birds, reptiles and mammals, so amphibians and invertebrates are outside 5 AAC 92.029 entirely, and 92.029(c) forbids issuing a pet permit for a game animal. The clean list at 92.029(b) is short. Expect several `banned` |
| ND | North Dakota | 2 | The old nontraditional livestock category system is repealed and what replaced it is importation health chapters. Expect a thin answer; check NDCC 20.1 (Game and Fish) as well as Title 36 |
| SD | South Dakota | 1 | 12:68:18:03 attaches possession permits to five mammal groups only, none of them Rodentia, so the flying squirrel needs only the free entry permit. The reptiles and the cockroach turn on what "nondomestic animal" means in SDCL 40-3 and 40-14, which is not in the rule itself. Fetch via `https://sdlegislature.gov/api/Rules/12:68:18`, not the web page |
| KS | Kansas | 1 | K.S.A. 32-1301 is big cats, bears and non-native venomous snakes and answers none of the nine. Go to K.S.A. 32-701 for the definition of wildlife and K.A.R. 115-20 for possession. Classic prohibited-list-answers-nothing state |
| MS | Mississippi | 1 | Rule 8.3 is a short inherently-dangerous list reaching nothing smaller than a hyena. The answer will be in MDWFP's other rules and Miss. Code 49-7; check whether the definition of wildlife reaches reptiles at all |
| DC | District of Columbia | 1 | § 8-1808(j) is a closed list of seven permitted categories, so absence is a bar. Read it from the D.C. Code at code.dccouncil.gov rather than from the animallaw.info copy the map currently cites, and check DCMR Title 24 ch. 9 |
| WV | West Virginia | 1 | § 19-34-2 defines dangerous wild animals by character and § 19-34-5 leaves the list to a legislative rule that has never been confirmed in force here. Settling whether that rule exists is the whole West Virginia sitting, and it also fixes the box turtle guide mismatch |

## Loose ends

- **New Hampshire bans every pet arthropod, and it is a chain of four provisions rather than a
  decision anyone appears to have made.** RSA 207:1, XXXV defines wildlife to include invertebrates
  by name. Fis 804.02, the non-controlled possession list, has no invertebrate in it. Table 800.2,
  the controlled table, runs amphibians, reptiles, fish, birds and mammals and stops. Fis 804.04(b)
  then says "All species not specifically listed under the categories of non-controlled, prohibited,
  or controlled shall be designated as prohibited", and Fis 804.03(a) says no permit issues for
  anything prohibited under it. The waiver at Fis 802.05 that would cover an unlisted species is
  closed to permittee categories 1, 2, 3, 4, 6 and 7 by subsection (c), which leaves only exhibitors.
  What makes this more than an oversight is Fis 804.03(b)(1), which has an invertebrates heading and
  names five aquatic nuisance species: the Department writes invertebrate entries when it means to.
  Recorded `banned`, the first banned cockroach on the map. The whole chapter was readopted by
  Document #14558 effective 21 April 2026, so anything written about New Hampshire before that date
  describes a different rule.
- **Idaho's cockroach is `unclear` and it is the cleanest two-reading case since New Jersey.**
  Idaho Code § 36-202(g) defines wildlife as "any form of animal life, native or exotic, generally
  living in a state of nature", which reaches an insect; IDAPA 13.01.10.200.01 bars possessing live
  wildlife without a Department licence; and the conventional pets definition at 010.06 is a closed
  enumeration of dogs, cats, ferrets, rabbits, rodents, non-venomous or non-dangerous reptiles and
  amphibians, non-poultry birds, hedgehogs, tenrecs and sugar gliders, with no invertebrate in it.
  Against that, Idaho Code § 36-201's eight classification categories are all vertebrate groups,
  IDAPA 13.01.06 classifies no invertebrate anywhere, and 13.01.10 opens by excluding crustaceans
  from its own use of the word, which suggests the chapter was drafted with vertebrates in view.
  The agriculture side is clean either way: IDAPA 02.06.09.146's invasive insect list is three forest
  pests. Anyone who gets a straight answer from IDFG's Wildlife Bureau can settle this in one call.
- **Maine's flying squirrel is `banned` on an absence, and the absence is the rule.** 09-137 CMR
  ch. 7 § 7.06(4) says "A person may not possess any species that has not been categorized" and that
  an uncategorised species "will not be eligible for a permit under this chapter". Glaucomys volans
  is in none of Maine's four buckets: the Unrestricted List's Rodentia section is thirteen cage
  rodents, the Prohibited list is the monk parakeet and the mute swan, Category 1 Mammalia names
  Callosciurus prevostii and Cynomys ludovicianus and eighteen families and no Sciuridae, and
  Category 2 Mammalia is camelids, four procyonids, the binturong, genets and Caviidae. The wild-take
  exemption at 12 M.R.S. § 12152(1-B) covers reptiles, amphibians and invertebrates and not mammals.
  The live route is § 7.06(5), a request to the commissioner and technical committee to categorise
  the species. Worth re-checking if anyone ever files one.
- **The Maine cockatoo mismatch in `check-legal-map-sync` is now diagnosable and is a species
  question, not a map error.** The guide row reads "Maine (cockatiel, galah, other smaller species) |
  Legal, no permit" and the map says `permit`. Maine's Unrestricted Species List clears "All Species
  in Order Psittaciformes (Parrots)" with four named exceptions and family Strigopidae, under an
  asterisk that removes anything in CITES Appendix I or rated Endangered or worse by the IUCN. Most
  cockatoos clear that; Cacatua sulphurea, C. goffiniana, C. haematuropygia and Probosciger aterrimus
  are CITES Appendix I and do not. So the guide is right about cockatiels and galahs and the map is
  right about the Appendix I species, and the fix is to split the cell or to narrow the guide row.
  Left alone this sitting because the three pre-existing sync errors are the agreed baseline.
- **Arkansas's corn snake rests on a nativity call the Commission has not published.** Code Addendum
  R1.01 clears the genus Pantherophis "except species native to Arkansas", and Code 01.00 defines
  native wildlife as species with "established, naturally reproducing, free-ranging, wild populations
  within Arkansas". The Arkansas Herpetological Atlas carries P. guttatus only under potential
  occurrence, with the state's own ratsnakes being the P. emoryi / P. slowinskii complex and
  P. obsoletus, so on AGFC's own definition the corn snake is not native and stays on the unrestricted
  list. If AGFC ever treats the Arkansas animal as P. guttatus, this cell flips to conditional under
  Code 09.14 and the milk snake and green anole cells are the model for what it becomes.
- **Missouri's native reptile and mammal cells rest on a take-five rule and a purchase gap nobody has
  closed.** 3 CSR 10-9.110(1)(A) lets a resident take and possess five specimens of native wildlife
  alive without a permit, "but these animals shall not be bought or sold". 3 CSR 10-9.353(2) lets a
  Class I breeder sell "only to the holder of the appropriate permit, where required". Whether a
  private person may buy a captive-bred Missouri milksnake or southern flying squirrel from a
  permitted breeder therefore turns on what "where required" means for someone under the five-animal
  ceiling, and MDC has published nothing on it. Both cells are recorded `conditional` on the take-five
  route, which is the part the rule states outright.

- **New York City has one unclear cell and it turns on a 1989 systematics paper.** § 161.01(b)(10)
  prohibits "any member of the family Iguanidae, including the green or common iguana". Anolis
  carolinensis was an iguanid until the Frost and Etheridge revision split Polychrotidae, and now
  sits in Dactyloidae. On drafting-era taxonomy the green anole is prohibited; on current taxonomy
  it is not. The Code never dates its family names, and it uses them loosely elsewhere, printing
  "teiidae" in lower case and calling hedgehogs Insectivora. Recorded unclear rather than guessed.
- **The invertebrate question is now largely solved, and the pattern holds across nine states.**
  It used to be the reliable source of `unclear` cells and it is not any more. The answer is always
  in how the state defines the animals its wildlife agency can reach, and there are three shapes.
  A closed list of taxa that leaves arthropods out: Utah (crustaceans, molluscs, vertebrates),
  California (§ 671's eleven classes, no insect among them), Ohio (the word "aquatic" in front of
  "insects"), North Carolina (invertebrates only where federally listed). An express exemption:
  Indiana's 312 IAC 9-9-5, "any invertebrate not identified in this rule is an exempted wild
  animal", and Wisconsin's 169.04(4)(a)1., which puts arthropods first on its exemption list.
  Or a broad definition with no operative rule under it: South Carolina defines wildlife to include
  arthropods and then never requires a permit for a terrestrial one, and Oklahoma exempts native
  invertebrates by name. What leaves the question open, as in New Jersey and New Mexico, is a
  definition ending in an open phrase such as "or other wild animal" with no invertebrate rule
  beneath it. Check the definition first; it has answered this every time.
- **North Carolina answers eight cells with one sentence and it is worth copying the check.**
  § 113-129(15) makes a reptile, amphibian or invertebrate a wild animal only where it is on the
  federal endangered or threatened list. That is a whole-state answer sitting in a definitions
  section, and it means the green anole, a North Carolina native, is unregulated in a state whose
  neighbours all restrict their natives. Before assuming a state has a reptile law, check whether
  its definition of wildlife reaches reptiles at all.
- **Alabama is the first state on this map where a federal listing changed a state answer.**
  220-2-.26(1) bans possessing anything the U.S. Fish and Wildlife Service lists as injurious
  wildlife under the Lacey Act, and the January 2025 salamander rule added genus Ambystoma to that
  list. Nothing in Alabama changed and the axolotl became a banned animal there. The distinction
  every other state relies on, that an injurious listing restricts importation and interstate
  shipment rather than possession, does not survive a state adopting the list as its own possession
  bar. Worth checking for this clause anywhere the axolotl or the tiger salamander is recorded, and
  worth remembering that Alabama's 2024 amendment widened the clause to fish, crustacea and molluscs
  as well.
- **Alabama has one entry that rests on a qualifier and its neighbour rests on the same one.**
  220-2-.92(1)(c) reads "Snake, All Native King  Lampropeltis spp." The scientific name is the whole
  genus and the common name limits it to natives. The milk snake is native and is recorded permit;
  the California kingsnake is a west coast animal and is recorded legal. Every other reptile on that
  list pairs one common name with one binomial, so the qualifier looks deliberate, but the two
  entries stand or fall together and a contrary reading would flip both.
- **Oklahoma's box turtle is the sharpest words-versus-practice gap currently on the map.**
  800:15-9-3(3) says "the possession, buying and/or selling of any terrestrial turtles commonly
  known as 'box turtles', is prohibited", full stop. That section sits inside the commercial
  aquatic-species harvest chapter, and the Wildlife Department's own noncommercial turtle page reads
  it as a sale bar, alongside six of each species in possession. Recorded conditional on the
  Department's reading, with the tension named. The Department's page says outright that it is an
  interpretive summary and not a legal document, so anyone who gets a straight answer from the
  agency should update this.
- **Oklahoma's native reptiles rest on a licence nobody thinks of as a licence.** 800:25-7-7(2)(A)
  requires a resident or nonresident hunting licence of anyone "taking or attempting to take
  reptiles and amphibians or possessing reptiles or amphibians" that are land dwelling. That is a
  possession hook, not a collecting one, and with the six-per-species cap at 800:25-7-8(2) it is
  what makes every Oklahoma native reptile conditional here rather than legal. It is sold over the
  counter, which is why these are conditional and not permit.
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

Forty-three of the 52 animals are now at 51 of 51, including the ackie monitor, which Idaho
completed, and the corn snake, milk snake and rosy boa, which Maine and Arkansas completed.
Every snake, turtle, mammal and bird on the map is finished everywhere.

The nine that are not are the eight encyclopedia animals added recently (bearded dragon, leopard
gecko, crested gecko, blue-tongue skink, Jackson's chameleon, green anole, rabbit, hissing
cockroach) plus the flying squirrel. All nine sit at exactly 39 of 51 and all nine are missing
exactly the same thirteen states, so they finish together. They are **not** ready for guides yet:
`check-legal-map-sync.mjs` fails a guide that asserts a status for a state the map has not read, so
writing one now produces a page the build rejects. Thirteen more state sittings and all nine become
guide-ready at once.

Any new legal guide needs a `RELATED_ARTICLES` entry in `src/lib/data/relatedArticles.js`.
The auto-detect only covers standard care-guide suffixes, and `-legal-guide` is not one.

## Findings worth reusing

The invertebrate question now has a fourth shape and it is the one that bites. The three known
shapes were a closed list of taxa that leaves arthropods out, an express exemption, and a broad
definition with no operative rule under it. The fourth is a broad definition WITH an operative rule
under it: New Hampshire's statute names invertebrates, its three possession lists contain none, and
Fis 804.04(b) makes everything unlisted prohibited. Same starting point as Arkansas and Missouri,
opposite ending, because those two wrote an escape and New Hampshire did not. Arkansas's escape is
an express exception for "terrestrial invertebrate species not otherwise prohibited", repeated in
three separate codes; Missouri's is a disclaimer inside the general prohibition itself, "this Code
shall not apply to other invertebrates except as specifically provided". So: find the definition,
then find the operative rule, then look specifically for an invertebrate escape hatch before
concluding either way.

**A closed clearance with one named exception tells you how wide the clearance is.** Rhode Island
clears "All Gekkos (Gekkonidae)" and excepts one species, Coleonyx reticulatus, which on current
taxonomy is a eublepharid and not a gekkonid at all. The exception would sit outside the clause it
excepts if the family name were read narrowly, so it has to be the broad pre-split sense, which puts
the leopard gecko and the crested gecko inside. The same trick reads the other way in Maine, whose
Lampropeltis clearance excepts "Lampropeltis triangulum triangulum", its own native subspecies:
the exception tells you the clearance was written with natives in mind. When a list carries one odd
exception, that exception is usually the key to the entry rather than a footnote to it.

**Three states now answer the same question with the same word and different results, and the word
is "domesticated".** Rhode Island writes a domestication definition and then names the domestic
rabbit while expressly excluding wild-type Oryctolagus and the San Juan rabbit; Wyoming lists
"domesticated European rabbit (Oryctolagus cuniculus)" in a closed enumeration; New Hampshire writes
"Rabbits, domesticated" on both its non-controlled lists; Arkansas never mentions the animal and
answers it purely by defining WILD as "living in a state of nature and not domesticated". All four
land in the same place, which is what makes Minnesota's contradiction and Illinois's silence stand
out rather than look normal.

**Where a state's nativity qualifier does the work, the agency's own field guide is the primary
source, not a range map.** Missouri's whole answer for the corn snake, the green anole and the
milksnake came out of two MDC publications: A Guide to Missouri's Snakes lists five Pantherophis and
no P. guttatus, and A Guide to Missouri's Lizards lists eleven natives and no anole. Arkansas's came
out of the Arkansas Herpetological Atlas, which files the red cornsnake under potential occurrence.
A state that qualifies a species list with "except species native to X" has made the checklist part
of its law, so use the checklist the agency itself publishes.

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
