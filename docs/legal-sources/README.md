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
