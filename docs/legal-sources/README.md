# Legal source cache

Extracted text of the primary sources behind `src/lib/data/legalStatus.json`, so a
research sitting can grep a statute instead of refetching it. Every file carries a
header with its `sourceId`, jurisdiction, official URL, and the date it was fetched.

This is a cache, not a citation. The matrix cites the official URL, and a cell's
`verifiedOn` date means someone read the source on that date. If you are setting a
fresh `verifiedOn`, refetch. Use these files to answer "what does the statute say
about this species", not to claim a new verification date.

## What is here

| File | Covers |
|---|---|
| `PA-pa-58-79.txt` | 58 Pa. Code Ch. 79, the whole reptile and amphibian chapter |
| `PA-pa-58-79-3.txt` | § 79.3 with the species season and limit table as rows |
| `PA-pa-58-137-1.txt` | 58 Pa. Code Ch. 137, the Game Commission prohibited list |
| `PA-pa-exotic-wildlife-permit.txt` | Ch. 147 Subchapter N, exotic wildlife possession |
| `MI-mi-fo-224.txt` | Michigan's four regimes, quoted, plus the one open check |
| `HI-hi-4-71-rule.txt` | HAR ch. 4-71 rule text, definitions and permitted introductions |
| `HI-hi-4-71-6.txt` | Hawaii prohibited list |
| `HI-hi-4-71-6-5.txt` | Hawaii restricted list Part A, research and exhibition |
| `HI-hi-4-71-6-5-b.txt` | Hawaii restricted list Part B, private and commercial |
| `HI-hi-conditional.txt` | Hawaii conditionally approved list |
| `CA-ca-671.txt` | 14 CCR § 671, the CDFW restricted species manual |
| `VT-vt-unrestricted.txt` | Vermont Unrestricted Wild Animal List, raw |
| `VT-vt-unrestricted-parsed.txt` | The same list parsed into readable rows. Start here |
| `VT-vt-restricted-list.txt` | Vermont Restricted Wild Animal List, the appendix the other list points at |
| `NM-nm-importation-list.txt` | New Mexico Director's Species Importation List, ~1,300 rows with group |
| `NM-nm-19-35-7.txt` | 19.35.7 NMAC, the rule that defines the four importation groups |
| `NV-nv-nac-503.txt` | NAC chapter 503, Nevada's prohibited list, no-permit list and classifications |
| `AZ-az-r12-4-406.txt` | Arizona's restricted live wildlife lists, with the 2013 PDF trap flagged |
| `DE-de-903.txt` | Delaware's exempt list and permit scheme, with the phantom prohibited list flagged |
| `CO-co-w7.txt` | Colorado's new herpetofauna chapter, effective 1 May 2026. Read the header before anything else about a Colorado reptile |
| `CO-co-w11.txt` | Colorado's domestic animal and unregulated wildlife lists, current version. No reptiles in it any more |
| `CO-co-w0-008.txt` | Colorado's prohibited species list, § 008(B), excerpted from the 166-page Chapter W-0 |
| `CO-co-cpw-species-list.txt` | CPW's own species-by-species determinations, 303 rows. Start here for any Colorado animal |
| `IL-il-510-68.txt` | Illinois Herptiles-Herps Act in full, with the three clauses that get summarised backwards flagged |
| `IL-il-statutes.txt` | Illinois dangerous animal statute, Wildlife Code and Endangered Species Act possession bar |
| `IL-il-admin-code.txt` | Illinois Parts 885 (herptiles), 1010 (endangered and threatened) and 805 (injurious species) |
| `MN-mn-statutes.txt` | Minnesota's five operative sections, with the 2021 reptile rule and the hole in it flagged |
| `MN-mn-definitions-and-agency.txt` | Minnesota's definitions, its invasive species rule, and the two DNR pages that read them |
| `OR-or-framework.txt` | Oregon's two closed lists explained, plus the not-wild list, the default bar and the exotic animal statute |
| `OR-or-species-lists.txt` | Oregon's Prohibited, Noncontrolled and Controlled wildlife lists in full |
| `OR-or-invertebrates.txt` | Oregon's approved invertebrate list, the rule that answers a tarantula or roach question there |
| `CT-ct-26-55-6.txt` | Connecticut's four-category wild animal regulation, whose definitions decide more than its lists |
| `CT-ct-deep-listings.txt` | The DEEP fact sheet statuses that decide which Connecticut animals are Category Four |
| `MD-md-framework.txt` | Maryland's three rules and its three-tier native herptile chapter, with which rule reaches what |
| `MD-md-fisheries.txt` | Where Maryland's snapping turtle went, and the nonnative list that names no reptile |
| `TN-tn-exotic-animals-act.txt` | Tennessee's five classes, with the two clauses that make it permissive and the rule chapter that could not be read |
| `TN-tn-twra-permits.txt` | TWRA's own permits page, which closes Class I to private keepers and names the missing rule chapter |
| `TX-tx-statutes.txt` | Texas's four separate animal rules and which one reaches what, with the famous one flagged as the wrong one |
| `TX-tx-nongame.txt` | Texas's two nongame lists in full, the 25 cap and the 6 cap, and the taxonomy traps in both |
| `MA-ma-exotic-wildlife.txt` | Massachusetts's closed exemption list, the categorical override that cuts across it, and the hybrid statute |
| `MA-ma-masswildlife-pets.txt` | MassWildlife's own reading of that override, and its line that pet permits are not issued |
| `NE-ne-captive-wildlife.txt` | Nebraska's renumbered wildlife chapters, its statutory felid ban, and the definition that decides the rest |
| `FL-fl-captive-and-nonnative.txt` | Florida's four separate chapters, its 22-item no-permit list, and the arthropod rule that is not FWC's |
| `NY-ny-wildlife.txt` | New York's closed wild animal list, and the small game definition that reaches every native herptile |
| `GA-ga-wild-animals.txt` | Georgia's three licence tiers, the statute that makes none of them a pet licence, and its native ban list |
| `NYC-nyc-health-code-161.txt` | New York City's family-level ban, and the clause that imports the whole of New York State's protected wildlife |
| `NJ-nj-subchapter-4.txt` | New Jersey's whole of subchapter 4, its two definitions, three species lists, and the clause that makes a permit not a pet permit |
| `NJ-nj-permit-required-species.txt` | The 4.3 permit list, which answers pythons, boas, kingsnakes, monitors, skinks and geckos by family |
| `NJ-nj-exempt-species.txt` | The 4.4 exempt list, closed, and the only route to a no-permit animal in New Jersey |
| `NJ-nj-restricted-species.txt` | The notice that carries what the rule does not: the IUCN gloss, nine corn snake morphs, and the axolotl bar |
| `NJ-njsa-23-4-63-3.txt` | The statute above subchapter 4, whose "exotic animal" is narrower than the rule's and carves out domesticated companions |
| `UT-ut-r657-53.txt` | Utah's herp rule, written for wild collection: the bar at 53-4, what needs no document at 53-5, and the captive-bred carve-out at 53-8 |
| `UT-ut-r657-53-tables.txt` | The division's five classification tables, all of them about animals taken from the wild in Utah |
| `UT-ut-r657-3a.txt` | The umbrella animal rule that replaced R657-3, with the inverted default at 3a-2(20)(b) |
| `UT-ut-r657-3b.txt` | Birds and mammals, pointing at Table 3b-1 for the domestic animals it does not govern |
| `UT-ut-table-3b-1.txt` | Table 3b-1 itself: domestic, noncontrolled, controlled and prohibited, under a header presuming everything unlisted prohibited |
| `UT-ut-23a-1-101.txt` | The Utah Code definitions, whose subsection (65) puts every arthropod outside the division's reach |
| `AL-al-conservation-rules.txt` | Alabama's four rules in one file: the prohibited list at .26, protected nongame at .92, invertebrates at .98, turtles at .142 |
| `IN-in-312-iac-9.txt` | Indiana's three regimes: the native herp rule at 9-5, the invertebrate exemption at 9-9-5, and the permit classes at 9-11 |
| `OK-ok-wildlife-rules.txt` | Oklahoma's exemption list, its reptile and amphibian part, the commercial turtle rule, and the four statutes that frame them |
| `VT-vt-domestic-list.txt` | Vermont's third list, the one earlier sittings could not read; it decides the parrots, the rabbit, the dog and the cat |
| `WI-wi-ch-169.txt` | Wisconsin's captive wildlife chapter: the definitions, the exemptions at 169.04(4), and the harmful wild animal power at 169.11 |
| `NC-nc-wildlife-definitions.txt` | The one definition that answers North Carolina, plus the captivity licence it does not reach |
| `SC-sc-wildlife-rules.txt` | South Carolina's import chapter and its 2021 native reptile rules, which override the pet-trade exemption |
| `OH-oh-wildlife-code.txt` | Ohio's definitions, its dangerous wild animal and restricted snake lists, and the propagating licence |
| `AR-ar-agfc-codebook.txt` | Arkansas's current Code Book: the definitions that decide wild and native, Chapter 09.00, and Addenda R1.01/R1.02/R1.03 with the clause that makes absence a bar |
| `ME-me-captive-wildlife.txt` | Maine's three parts: § 12152, the chapter 7 rule with its uncategorised-species bar, and the Unrestricted Species List's insects, mammals and reptiles |
| `MO-mo-wildlife-code.txt` | Missouri's whole answer in two subsections, plus the general prohibition's invertebrate disclaimer and the definitions the classes turn on |
| `ID-id-conventional-pets.txt` | Idaho's conventional pets definition, which answers eight cells, plus the classification chapter and the deleterious exotic animal list that reaches only birds and mammals |
| `RI-ri-250-40-05-3.txt` | Rhode Island's definitions, prohibitions, exemptions and the whole of Appendix A |
| `NH-nh-fis800.txt` | New Hampshire's April 2026 readoption: the three lists, the clause that prohibits everything unlisted, and the waiver that is closed to private keepers |
| `WY-wy-ch10-ch69.txt` | Wyoming's two chapters, permissive for reptiles and a closed list for mammals, and the statutory definition that leaves arthropods out |

## Reading the awkward ones

Several of these are PDFs whose text extracts badly. The tricks that work:

- **`CA-ca-671.txt`** is letter-spaced, so `Class Reptilia` comes out as
  `C l a ss Re p ti l i a`. Collapse all whitespace before searching:
  `python3 -c "import re;print('found' if 'leporidae' in re.sub(r'\s+','',open('docs/legal-sources/CA-ca-671.txt').read()).lower() else 'absent')"`
- **`VT-vt-unrestricted.txt`** is letter-spaced too, and its table cells are separated
  by a literal `en-US` marker. The parsed file next to it is already split on that.
- The Hawaii lists read cleanly, but note they use older taxonomy. The sulcata is filed
  as *Geochelone*, the crested gecko would be *Rhacodactylus*, and the bearded dragon is
  printed as *vittaceps* for *vitticeps*. Search the genus and the synonym, not just the
  current name.
- **`MD-md-framework.txt`** is organised around one question: which of Maryland's three rules
  reaches the animal. Crim. Law § 10-621 is eight clauses and touches no rodent, bird or
  invertebrate; Nat. Res. § 10-902 attaches a permit only to NATIVE wildlife; COMAR 08.03.11
  sorts native herptiles into three tiers. Grep the tier lists in Regulation .03 before
  assuming a reptile is unregulated, and remember .03D makes the scientific name control.
- **`CT-ct-26-55-6.txt`** is a state where the definitions in subsection (a) matter more than
  the category lists. "Wild animal" reaches invertebrates, and "domestic animal" is defined by
  what selective breeding has done rather than by species, which is what makes the pet rabbit
  clean there when the same species is a hard call in Minnesota and Illinois. Read (a)(7) and
  (a)(21) before the lists.
- **`GA-ga-wild-animals.txt`** is a state where "licence required" means no. Read O.C.G.A.
  § 27-5-4(b)(1) before any of the three rule tiers: licences go only to the wholesale or retail
  wild animal trade and to public exhibitors, and permits only for science, education, a capuchin
  monkey for a person with a permanent disability, and grass carp. There is no pet category, which
  is why the rule writes express "may be held as a pet without a license" exceptions for exactly two
  animals, the European ferret and the sugar glider. The licence rule works by taxonomic ORDER, so
  all Carnivora, all hedgehogs, all lagomorphs, all marsupials and all rodents outside six named
  genera are caught. Natives are a separate scheme on the DNR page, and its sentence "regardless of
  the origin or morphology" is what kills the captive-bred and colour-morph arguments.
- **`NYC-nyc-health-code-161.txt`** bans by FAMILY, so look up the family and not the species: all
  Boidae, all Pythonidae, all Varanidae, all Iguanidae, all teiidae, all Chelydridae, all squirrels,
  all Mustelidae, all marsupials. The clause most readings skip is § 161.01(b)(ii), which prohibits
  anything protected or endangered under federal, STATE or local law and therefore imports New York
  State's whole protected wildlife scheme into the city. There is no amphibian clause at all, which
  is why the axolotl is legal here and the tiger salamander is not. Always compare against the New
  York State entries: the state excepts captive bred fennec foxes and five-generation registered cat
  hybrids and the city excepts neither.
- **`NY-ny-wildlife.txt`** describes a state with two mechanisms where the famous one answers fewer
  animals. The closed "wild animal" list at ECL 11-0103(6)(e) is what everyone quotes, and it is six
  clauses. The rule that catches natives is a definition: 11-0103(2)(c) puts native frogs,
  salamanders, turtles, lizards and snakes inside SMALL GAME, which makes them protected wildlife,
  and 11-0107(2) bars possessing protected wildlife "whether taken within the state or coming from
  without the state". The only licence, 11-0515, is for propagation, science or exhibition, so the
  native answer is banned rather than permit. Two carve-outs in the wild animal list decide cells
  here: registered cat hybrids five generations clear, and captive bred fennec foxes by name. And
  check Part 575 before assuming an invasive listing is a ban: the monk parakeet and the red-eared
  slider are on the REGULATED tier, which is expressly legal to possess, sell, buy and transport.
- **`FL-fl-captive-and-nonnative.txt`** covers a state with four chapters where reading one gets you
  the wrong answer. 68A-6 sorts wildlife into three classes and then 68A-6.003(14) exempts 22
  categories from the permit scheme entirely, which is the answer for most pet species; 68-5 is the
  nonnative prohibited and conditional lists; 68A-25.002 handles native turtles with numbers rather
  than permits; and 5B-57.004 handles arthropods and belongs to the Department of Agriculture, not
  FWC. Check the no-permit list before the class lists, and check 5B-57.004 for anything with more
  than four legs. FWC's own personal pet page is worth reading alongside the rule, because it
  resolves the Class II canid entry, which on its face would make every fox a $140 animal.
- **`NE-ne-captive-wildlife.txt`** is the file to read before citing anything for Nebraska, because
  the title number changed: 163 NAC ch. 4 is now Title 166, and Title 163 is called ADMINISTRATION.
  The old text is still served over plain HTTP from govdocs.nebraska.gov as R163.0004-2016.pdf,
  which looks official and is nine years stale. The state's hinge is a definition rather than a
  list: Neb. Rev. Stat. §§ 37-245 and 37-246 define wild birds and wild mammals by Nebraska
  geography, so a native goes to the captive wildlife chapter, which is a prohibition with a closed
  list of exceptions, and an exotic goes to the importation list, which is also closed. Two things
  live outside both: Neb. Rev. Stat. § 37-477(2) bans all of Felidae and Ursidae by statute with no
  permit behind it, and snapping turtles are in the fishing regulations at 164 NAC 6.
- **The Massachusetts files** describe a closed white list with an override that cuts across every
  group listing in it. Read 321 CMR 9.01(3) BEFORE any group entry: no species may be exempted if it
  is federally listed, in the IUCN Red Book(s), or on the Massachusetts list at 321 CMR 10.90. Nearly
  every entry repeats the cross-reference, so it is operative, and it is what pulls the Burmese
  python out of Boidae, the crested gecko out of Gekkonidae, the African grey out of Psittacidae,
  the axolotl out of the class-wide amphibian clearance and the box turtle out of the turtle
  allowance. Checking IUCN status is therefore part of reading Massachusetts, and the route that
  works from here is the GBIF mirror of the Red List, not iucnredlist.org, which 403s. Two other
  things: invertebrates are outside the scheme rather than unlisted within it, and a licence for a
  non-exempt animal exists in M.G.L. c. 131, § 23 while MassWildlife says it will not issue one for
  a pet, so both halves belong in the note.
- **The Texas files** describe a state with four animal rules where only one is ever quoted. Before
  recording anything for Texas, ask whether the animal is INDIGENOUS. If it is, the answer is in
  `TX-tx-nongame.txt` and it is a number, 25 or 6, that follows captive-bred animals too. If it is
  not, Health & Safety Code 822.101(4) is a closed list of nineteen mammals that reaches no reptile,
  bird, rodent or invertebrate, and the answer is almost always yes. Reading a native Texas reptile
  or rodent against the dangerous wild animal statute is how the garter snake, the flying squirrel
  and the prairie dog sat wrong on this map. Check the scientific name against the two figures rather
  than the common name: they use pre-2002 genus names, and two pet species (the corn snake and the
  California kingsnake) were split off from listed Texas natives after the lists were written.
- **`TN-tn-exotic-animals-act.txt`** turns on two clauses that are easy to read past. The
  catch-all sits in Class III, which "requires no permits", so an animal nobody thought about
  needs nothing. And Class II is "native species, EXCEPT those listed in other classes", so a
  native animal named anywhere in subdivisions (3)(A)-(Q) is not a Class II animal at all.
  Check those subdivisions before recording any Tennessee native as a permit animal: reading a
  native nonvenomous reptile into Class II is how the garter snake, corn snake and milk snake
  sat wrong on this map, along with a sourcing-paperwork condition drawn from § 70-4-401(b),
  which reaches Class I and Class II only. Tennessee has no free official code, so both files
  quote reproductions rather than the state's own text, cross-checked against each other.
- **The Oregon files** describe a state where absence from a list is a ban, not silence, and
  where two agencies run two separate closed lists. Before recording anything for Oregon, check
  which law reaches the animal: ORS 609.305 covers only cats, primates, non-wolf canids, bears
  and crocodilians, OAR 635-056 covers every other vertebrate, and OAR 603-052-1320 covers
  terrestrial invertebrates. Reading a rodent against the exotic animal statute is how the
  prairie dog and the capybara sat wrong on this map.
- **`MN-mn-statutes.txt`** is the state where the definitions matter more than the rule.
  `97A.015` subd. 55 makes any reptile a wild animal regardless of origin and subd. 39 makes
  snakes, lizards, salamanders and turtles protected as categories, so the pet rule at
  `97A.401` subd. 8 is an exception to a prohibition, not a standalone restriction. Grep the
  definitions before reading anything else about a Minnesota reptile.
- **The Illinois files** are three different fetch mechanisms in one state. Statutes come one
  section at a time from `ilga.gov/Legislation/ILCS/Fulltext?DocName=<doc>`, where DocName is a
  4-digit chapter, the act number times ten padded to 5, then `K`, then the section: 510 ILCS
  68/5-5 is `051000680K5-5`. Administrative rules come whole from
  `ilga.gov/agencies/JCAR/EntirePart?titlepart=0170<part>`. A repealed act answers "not
  currently available", which is how 720 ILCS 585 was confirmed dead.
- **`NJ-nj-subchapter-4.txt`** answers almost every New Jersey question, but only if you read all
  three lists before deciding. The dangerous list at 4.8 tells you whether an animal is banned, the
  exempt list at 4.4 tells you whether it is free, and everything else needs a permit under 4.5.
  Checking 4.8 alone and concluding "not listed, therefore legal" is the single mistake this state
  invites, and it had produced two wrong entries here before this file existed. Note also that 4.3
  is open-ended, "include, but are not limited to", so absence from it proves nothing, and that the
  Division's handouts renumber nothing but do carry rules that are nowhere in the code: the corn
  snake morph list and the axolotl bar live only in `NJ-nj-restricted-species.txt`.
- **`UT-ut-r657-53.txt`** answers most of Utah in two sections that sit 100 lines apart. The tables
  and the Controlled tier look like possession law and are not: 53-8(1)(a) and (c) take captive-bred
  animals and animals "legally obtained outside of Utah" out of the possession limits entirely, and
  the only certificate of registration that attaches to possession is 53-12, for venomous reptiles
  native to Utah. Read a cap off `UT-ut-r657-53-tables.txt` without 53-8 and you will record a
  purchased pet as capped when it is not, which is exactly what had happened to the milk snake here.
  The other thing to hold on to is 53-7(8): a species the division has never classified defaults to
  Controlled at three and nine, so absence from the tables is a default rather than a silence.
- **`AL-al-conservation-rules.txt`** has to be read as four rules, not one. 220-2-.26 is a prohibited
  list, so absence from it means unrestricted, and that is where most Alabama answers stop. What it
  does not cover is Alabama's own wildlife, which 220-2-.92 protects, and the two are easy to read in
  isolation: the milk snake entry here said legal because a milk snake is not on the federal injurious
  list, having never reached the line in .92 that protects "Snake, All Native King  Lampropeltis spp."
  Two more things in this file are worth knowing. The Lacey Act clause in .26 makes the federal
  injurious wildlife list a state possession ban by reference, so a federal listing changes Alabama
  law without Alabama doing anything, which is what banned the axolotl here in January 2025. And .92
  protects amphibians by genus rather than by species, so the whole of Ambystoma is in.
- **`IN-in-312-iac-9.txt`** splits Indiana in two and the split is by nativity, not by danger. 312 IAC
  9-11's three permit classes are a short list of mammals plus venomous reptiles and big crocodilians,
  and stopping there makes every pet reptile look free. 312 IAC 9-5 is the rule that reaches them: it
  bars selling any of 99 named native taxa "regardless of place of origin", so the bar follows a
  captive-bred animal in from another state, and caps possession at four per native species. Two
  entries here were wrong for exactly that reason. The morph exception at 9-5-7(f) is the same device
  New Jersey uses for corn snakes.
- **`OK-ok-wildlife-rules.txt`** answers most species from 800:25-25-3, whose exemptions are from
  licences rather than from a ban, so an unexempt animal is licensable and not prohibited. Its
  subsection (c) frees non-indigenous reptiles and amphibians as a class, which means the rule stops
  answering the moment a species is native, and 800:25-7 takes over with a hunting-licence requirement
  that reaches possession and a six-per-species cap. The provision that quietly decides the rest is
  statutory: 29 O.S. § 7-502(B)(4) exempts anyone possessing legally obtained wildlife "from a source
  other than the wild, as pets" from the possession bar.
- **`NC-nc-wildlife-definitions.txt`** is one paragraph and it answers eight cells. § 113-129(15)
  makes a reptile, an amphibian or an invertebrate a "wild animal" only where it is on the federal
  endangered or threatened list, so the captivity licence at § 113-272.5 has nothing to attach to for
  an ordinary pet. Do not go looking for a North Carolina reptile rule; there isn't one, and the place
  local restrictions come from is § 153A-131, which lets counties regulate dangerous animals.
- **`SC-sc-wildlife-rules.txt`** has to be read in the right order. § 50-16-60 clears reptiles and
  amphibians as whole classes from the import permit, which looks like the answer and is not:
  Regulation 123-151.4(I) says that section "does not privilege" a native reptile, and the 2021 rules
  take over. 123-151.3(A) then bars selling, buying, trading, exporting and re-homing any native
  reptile, with twelve exceptions that are mostly named snakes under a length limit.
- **`CO-co-cpw-species-list.txt`** is parsed into two-line records, the species then its
  determination, so grep with `-A1`:
  `grep -A1 -i 'testudo horsfieldii' docs/legal-sources/CO-co-cpw-species-list.txt`
  It is the fastest way to answer a Colorado question and usually the only one that settles
  it, because Chapter W-7's allow-list turns on whether a species is native only to the
  tropics and CPW has already made that call species by species.

## Hosts that block this container

Worth knowing before you burn a sitting on a 403. These are blocks on the agent proxy,
not on the sites, so a person with a browser can open all of them.

| Host | Behavior | What to do |
|---|---|---|
| `agfc.com` | `apps.agfc.com/regulations/<code>/` is retired and 404s; `www.agfc.com/resources/code-of-regulations` is an Esper JS viewer whose bundle exposes no API; the per-chapter PDFs under `agfc-omnibus.s3.amazonaws.com/eregs/regulation_pdfs/small/` are frozen at 8 June 2022 | List the bucket, `https://agfc-omnibus.s3.amazonaws.com/?list-type=2&prefix=eregs/&max-keys=1000`, and take `eregs/regulation_pdfs/large/agfc_regulations_codebook_large.pdf`, which is the whole current codebook. `codeofarrules.arkansas.gov/Rules/PartDocument?partID=1327` serves the Secretary of State's filed copy as a PDF under an `.html`-looking URL |
| `maine.gov/sos/cec/rules/...` | Every path 404s, but the 404 page is a 90 KB search page that echoes the requested URL back, so a grep for the filename finds it and looks like a hit | Take rule links from `https://www.maine.gov/sos/rulemaking/agency-rules/department-inland-fisheries-and-wildlife-rules`; the files are `.docx` under `/sos/sites/maine.gov.sos/files/`. Extract with python `zipfile` on `word/document.xml` |
| `sdlegislature.gov` | The site is a JS shell and `/Rules/Administrative/<article>` returns 6 KB of "please enable JavaScript" | `https://sdlegislature.gov/api/Rules/<article>` returns the full chapter as JSON with the rule text in HTML fields. Note `/api/Rules/Chapter/<article>` and `/api/Rules/Sections/<article>` return the shell instead |
| `gencourt.state.nh.us` | Works with plain curl, but Fis 800 is one 2.3 MB Word-exported HTML page in which every space is a non-breaking space and section numbers render as `Fis 803 .03` | Strip tags, then strip non-ASCII, then collapse whitespace to a single stream before slicing. Search `804 .02`, not `804.02` |
| `www.sos.mo.gov` | Serves each CSR chapter as a PDF and normally works, but returns an occasional 403 on a first request | Retry with a browser User-Agent rather than concluding it is blocked |
| `mdc.mo.gov` | Field-guide slugs exist only for species Missouri actually has, so a 404 is a weak signal rather than an answer | Use MDC's own PDFs instead: `A Guide to Missouri's Snakes` and `A Guide to Missouri's Lizards` are complete state checklists and settle nativity |
| `michigan.gov` | 403 to curl and to WebFetch, every path, including `/en/` variants and PDF hosts | `eregulations.com` publishes the official Michigan guides and works |
| `legislature.mi.gov` | Connection fails | Use `animallaw.info` reproductions, cross-check against two sources |
| `legis.state.pa.us`, `palegis.us` | 403 and 503 | Same, cross-check two reproductions before quoting |
| `vtfishandwildlife.com` | 403 without a User-Agent | `curl -A "Mozilla/5.0"` works |
| `wildlife.dgf.nm.gov` | Download pages are HTML wrappers | Scrape the `wpdmdl` PDF link out, then fetch that with a User-Agent |
| `apps.azsos.gov` | Cloudflare challenge | Use Cornell LII or animallaw.info, and cross-check two reproductions |
| `regulations.delaware.gov` | Angular app, serves an empty shell to every fetcher | Use `delcode.delaware.gov` for statutes and a reproduction for regulations |
| `law.justia.com`, `invasive.org` | 403 | Find another reproduction |
| `mgaleg.maryland.gov` | Works with curl; headless Chromium cannot reach it. Statute body sits after a "Previous Next" marker and the section number uses an en dash, so grepping the plain number finds nothing | Slice from `Article - ` to `Validation`. Article codes: `gcr` Criminal Law, `gnr` Natural Resources |
| `regs.maryland.gov` | Serves whole COMAR chapters cleanly | `/us/md/exec/comar/<chapter>/index.full.html` |
| `cga.ct.gov` | Connection reset on every route: curl, python, headless Chromium | No workaround found. `search.cga.state.ct.us` answers but its statute search returns nothing. Connecticut statutes could not be read; the regulations at `eregulations.ct.gov` can |
| `eregulations.ct.gov` | `Browse/getDocument?guid=<guid>` works and returns a PDF; browse and search are JS-driven behind bot protection | Keep the GUID for any section you find, because there is no way back to it |
| `www.sos.state.co.us` | Works with curl, but PDF links are not in the HTML | Scrape `OpenRuleWindow('<id>'` off the rule page, then fetch `/CCR/GenerateRulePdf.do?ruleVersionId=<id>` |
| `drive.google.com` | CPW publishes its species lists here | Fetch `https://drive.google.com/uc?export=download&id=<id>`; the ids are in the accordion markup, not in any `.pdf` link |
| `revisor.mn.gov` | Works with plain curl, occasional TLS handshake failure on the first try | Retry once. Statutes at `/statutes/cite/<section>`, rules at `/rules/<part>/`; a bare chapter number gives only the table of parts |
| `secure.sos.state.or.us` | Rules serve fine from `view.action?ruleNumber=<rule>`; `displayDivisionRules.action` returns a near-empty page | Probe rule numbers one at a time; a missing rule answers "not found" |
| `publications.tnsosfiles.com`, `sos.tn.gov`, `tnsos.org` | 403 "Request blocked" from CloudFront on every path, with or without a browser User-Agent and Referer. This is the whole of Tennessee's rules and proclamations publishing | No workaround found. `www.tn.gov` IS reachable, so read the TWRA pages instead, and cross-check the statutes against two reproductions |
| `statutes.capitol.texas.gov` | Angular SPA. Every `/Docs/` path returns the same 250KB shell, so a fetch looks successful and contains no law; headless Chromium cannot reach it at all | Fetch `https://tcss.legis.texas.gov/resources/<CODE>/htm/<CODE>.<CHAPTER>.htm` instead and cite the capitol URL. The base is in the SPA chunk `chunk-7GRZWKYH.js` as `TCASCore` |
| `texreg.sos.state.tx.us` | Retired. Serves "Site Has Moved" to every path, the old `TacPage` viewer included | The TAC is on an Appian portal now: POST `{"#t":"UiConfig"}` to `texas-sos.appianportalsgov.com/rules-and-meetings/_/ui?interface=VIEW_TAC&title=..&part=..&chapter=..` with a cookie jar and `X-Client-Version: APNX-1-4105-002`. Full recipe in `TX-tx-nongame.txt` |
| `rules.sos.ga.gov` | Works with plain curl, but only at SUBJECT level. Individual rule pages such as `/GAC/391-4-8-.05` are JavaScript shells containing no law | Always fetch the subject page, `/GAC/391-4-8`, which returns every rule in it |
| `www.nyc.gov/assets/doh/...pdf` | 403 to plain curl, and it saves an HTML error body under the `.pdf` name, which then fails parsing with "invalid pdf header" | Refetch with a browser User-Agent and check `file` output before parsing |
| `govt.westlaw.com/nycrr` | New York publishes the NYCRR only here. 403 to plain curl; a browser User-Agent gets real document pages | Individual sections render as static HTML at `/nycrr/Document/<guid>?viewType=FullText&contextData=(sc.Default)`. The obstacle is the guid: browse and search are JS-driven and the top-level Browse page returns only the title list, so a Part you have no guid for is unreadable. 6 NYCRR Part 175 is in that position |
| `flrules.org` | 403 to plain curl, fine with a browser User-Agent. `RuleNo.asp` returns metadata, not rule text | The text is a Word doc at `/gateway/readFile.asp?sid=0&tid=<tid>&type=1&file=<rule>.doc`; scrape the tid off the RuleNo page. LibreOffice cannot open these files; extract with a printable-run regex at a 4-character threshold, since a higher one silently drops the short list items that are the whole point |
| `rules.nebraska.gov` | TLS fails with "unable to get local issuer certificate": the server omits the intermediate for a genuine DigiCert `*.nebraska.gov` cert | Complete the chain instead of disabling verification. Fetch `http://cacerts.digicert.com/DigiCertGlobalG2TLSRSASHA2562020CA1-1.crt`, convert with `openssl x509 -inform DER`, concatenate onto the proxy bundle, pass with `--cacert`. Then the JSON API needs no headers: `/api/title`, `/api/chapter/GetByTitleId/<id>` returns full chapter text |
| `outdoornebraska.gov`, `govdocs.nebraska.gov` directory listings | 403 on every path | Use `rules.nebraska.gov` per the row above. `govdocs.nebraska.gov` serves individual PDFs but only a 2016 snapshot under the retired title numbering |
| `iucnredlist.org`, `api.iucnredlist.org` | 403 to this container, and the v4 API needs a token anyway | Use the GBIF mirror: `api.gbif.org/v1/species/search?datasetKey=19491596-35ae-4a91-9a98-85cf505f1bd3&q=<binomial>` returns `threatStatuses` per accepted name |
| `api.gbif.org` | Works, but drops the occasional connection mid-exchange | Retry with backoff; a failed call returns non-JSON rather than an error code |
| `web.archive.org` | Blocked by egress policy, so the Wayback fallback is not available here. `archive.org/wayback/available` does answer | Find another live reproduction instead |
| `pacodeandbulletin.gov`, `dab.hawaii.gov`, `nrm.dfg.ca.gov` | Work with plain curl | Occasional transient 502, just retry |
| `docs.legis.wisconsin.gov`, `www.ncleg.gov`, `www.scstatehouse.gov`, `codes.ohio.gov` | All work with plain curl and serve one section per page | Wisconsin `/statutes/statutes/<ch>/<sec>` and `/code/admin_code/nr/001/<ch>/<sec>`; North Carolina `/EnactedLegislation/Statutes/HTML/BySection/Chapter_<n>/GS_<sec>.html`; South Carolina `/code/t<title>c<chapter>.php` and `/coderegs/Chapter%20<n>.pdf`; Ohio `/ohio-revised-code/section-<n>` and `/ohio-administrative-code/rule-<n>` |
| `www.vtfishandwildlife.com` | Refuses automated requests without a User-Agent | `curl -A "Mozilla/5.0"`. Filename encoding differs per list: `Domestic_Species_List.pdf` and `Unrestricted_Wild_Animals_List.pdf` use underscores, `Restricted_Wild%20Animals_List.pdf` needs a percent-encoded space in the middle |
| `admincode.legislature.state.al.us` | React app; every `/administrative-code/<rule>` path returns a 1855-byte shell | `/api/rule/<number>` returns the current rule as a PDF, e.g. `/api/rule/220-2-.26`. Use it rather than Cornell LII, whose Alabama copies lag by years |
| `iar.iga.in.gov` | Returns the same 735-byte React shell for every path, its own `/static/js/` bundles included, with `x-cache: Error from cloudfront`. Nothing on the site is reachable | Read Indiana rules from Cornell LII at `/regulations/indiana/312-IAC-<section>` and cite the official section |
| `rules.ok.gov` | 403 to plain curl and to a browser User-Agent | Cornell LII carries the Oklahoma Administrative Code at `/regulations/oklahoma/OAC-<title>-<chapter>-<subchapter>-<section>`; find section URLs from the subchapter page rather than guessing the slug |
| `www.oscn.net` | Works with plain curl, and is the official publisher of the Oklahoma Statutes | Browse `Index.asp?ftdb=STOKST29&level=1` for a title, scrape the `CiteID` for the section you want, then fetch `DeliverDocument.asp?CiteID=<id>`. The occasional request returns a short body; retry |
| `law.cornell.edu` | Works with plain curl and carries most state administrative codes | Slugs differ by state: Alabama `Ala-Admin-Code-r-220-2-.26` keeps the dot, Indiana is `312-IAC-9-5-7`, Oklahoma is `OAC-800-25-25-3`. A wrong slug returns the state index at HTTP 200 rather than a 404, so check that the section heading is actually in the output. Its copies can lag the official text by years |
| `adminrules.utah.gov` | React app. Every `/public/rule/<rule>/Current%20Rules` path returns a bare 404 to a fetcher, and `rules.utah.gov` now just redirects here, so the whole Utah Administrative Code is unreadable by URL | The JSON API answers without auth (`/api/public/agencies`, `/api/public/programs/<agencyId>`) but never yielded rule text. For R657 use DWR's own copies at `wildlife.utah.gov/rules/<rule>`, which serve the full rule as HTML. Other agencies' rules, R58-1 for instance, had no readable route |
| `le.utah.gov` | The plain section page, `/xcode/Title23A/Chapter1/23A-1-S101.html`, is a shell whose body loads by jQuery | Read `versionDefault="C23A-1-S101_<version>"` out of that page, then fetch `/xcode/Title23A/Chapter1/C23A-1-S101_<version>.html`, which is static HTML with the section text |
| `dep.nj.gov` | Incapsula. HTML pages return a 212-byte `_Incapsula_Resource` stub and PDFs return a 6183-byte "Pardon Our Interruption" page saved under the `.pdf` name | Warm a cookie jar on `https://dep.nj.gov/rules/` with a browser User-Agent, then refetch the PDF with `-b`/`-c` and a Referer, retrying up to three times. PDFs come through; the HTML pages never did. The three list PDFs and the 1.8MB `njac7-25.pdf` all worked this way |
| `lis.njleg.state.nj.us`, `pub.njleg.gov` | New Jersey publishes its statutes through a Folio NXT viewer. The gateway answers but has no plain document URL: `&`-separated queries 302 to an empty splash and `$`-separated ones return the same 531-byte stub | No workaround found. Read the section from a reproduction, cite the official section, and say so in the source note |

When the official host is unreachable, cite the official URL anyway, verify the wording
against two independent reproductions that agree, and say so in the source note. Do not
cite a reproduction as if it were the statute.

## Adding to the cache

After fetching a source for a new jurisdiction, save its extracted text here as
`<JURISDICTION>-<sourceId>.txt` with the same header, and add a row to the table above.
The point is that the next sitting for that state starts by reading rather than
searching.
