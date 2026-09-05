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
| `law.justia.com`, `invasive.org` | 403 | Find another reproduction |
| `pacodeandbulletin.gov`, `dab.hawaii.gov`, `nrm.dfg.ca.gov` | Work with plain curl | Occasional transient 502, just retry |

When the official host is unreachable, cite the official URL anyway, verify the wording
against two independent reproductions that agree, and say so in the source note. Do not
cite a reproduction as if it were the statute.

## Adding to the cache

After fetching a source for a new jurisdiction, save its extracted text here as
`<JURISDICTION>-<sourceId>.txt` with the same header, and add a row to the table above.
The point is that the next sitting for that state starts by reading rather than
searching.
