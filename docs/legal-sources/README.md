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

When the official host is unreachable, cite the official URL anyway, verify the wording
against two independent reproductions that agree, and say so in the source note. Do not
cite a reproduction as if it were the statute.

## Adding to the cache

After fetching a source for a new jurisdiction, save its extracted text here as
`<JURISDICTION>-<sourceId>.txt` with the same header, and add a row to the table above.
The point is that the next sitting for that state starts by reading rather than
searching.
