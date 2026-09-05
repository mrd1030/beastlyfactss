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
| `www.sos.state.co.us` | Works with curl, but PDF links are not in the HTML | Scrape `OpenRuleWindow('<id>'` off the rule page, then fetch `/CCR/GenerateRulePdf.do?ruleVersionId=<id>` |
| `drive.google.com` | CPW publishes its species lists here | Fetch `https://drive.google.com/uc?export=download&id=<id>`; the ids are in the accordion markup, not in any `.pdf` link |
| `revisor.mn.gov` | Works with plain curl, occasional TLS handshake failure on the first try | Retry once. Statutes at `/statutes/cite/<section>`, rules at `/rules/<part>/`; a bare chapter number gives only the table of parts |
| `pacodeandbulletin.gov`, `dab.hawaii.gov`, `nrm.dfg.ca.gov` | Work with plain curl | Occasional transient 502, just retry |

When the official host is unreachable, cite the official URL anyway, verify the wording
against two independent reproductions that agree, and say so in the source note. Do not
cite a reproduction as if it were the statute.

## Adding to the cache

After fetching a source for a new jurisdiction, save its extracted text here as
`<JURISDICTION>-<sourceId>.txt` with the same header, and add a row to the table above.
The point is that the next sitting for that state starts by reading rather than
searching.
