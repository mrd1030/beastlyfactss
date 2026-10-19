# Site review, Oct 19 2026: combined view

Duplicates merged, then ranked by importance. ✓ = a skeptic checked it (every check came back confirmed or partly; none refuted). Everything else is a finder's claim not yet checked, so check before fixing. Per-finding detail follows below this section.

## Highest importance

1. Trackers (GA, Ahrefs, Cloudflare) load with no consent step, and the Privacy Policy describes a consent flow that does not exist (visitor-privacy-0 ✓)
2. Invisible toast layer eats taps on the mobile header and tablet bottom tabs, on every page (nav-surfaces-0 ✓ confirmed Oct 19 from code and live HTML: two empty 32px fixed toast divs at z-100, no pointer-events-none, sit over the z-50 header. Fix: add pointer-events-none to ToastProvider and ToastViewport in src/components/ui/toast.jsx)
3. Legal state pages show visitors AI research notes ("refuses curl from this container") (content-sources-1 ✓ confirmed Oct 19 live: Oklahoma 19 "this container", Kansas 5, Delaware 3 "refuses curl", Connecticut 3 plus "this sitting", Michigan names "docs/legal-sources". Fix: rewrite those notes in src/lib/data/legalStatus.json)
4. Donors land on a 404 page after paying (store-donate-3 ✓ partly, Oct 19: /donate/success/ and /donate/cancel/ return HTTP 404 with a Page Not Found title; the Thank You screen only replaces it once JavaScript loads. Owner checked Stripe on Oct 19: the donation links use "Show confirmation page", so donors stay on Stripe's own thank-you screen and never see this page. Low importance until the links are switched to redirect. Fix: prerender both routes and serve them with 200)
5. Facts are called "verified" but none of the 347 carries a source (eeat-other-1)
6. Hubs and encyclopedia pages have no author or date (group above) (eeat-articles-0 ✓)
7. Back buttons send Google visitors off the site; no way home on mobile hubs (group above) (nav-behavior-0 ✓)
8. Store and donate pages never say who is selling or receiving the money; unbacked 1% climate pledge (store-donate-0)
9. CC BY and CC BY-SA photos shown without credit, and no credits page exists (eeat-other-7)
10. Hub Amazon links come before a tiny disclosure without the required Amazon wording (group above) (visitor-privacy-2 ✓)
11. Five articles dated before the domain existed; 148 share one publish date, one re-dated backward (content-dates-claims-0 ✓)
12. Three medical articles lack the vet disclaimer, one with medication doses (visitor-privacy-7)
13. 301 sources point at bare homepages; about 1 in 6 sourced articles cites retailers or affiliate blogs (content-sources-0)

## Lowest importance

- Scanner scores themselves (Gridinsoft, ScamAdviser, no reviews, no Wayback captures): no effect on Google, mostly fixed by time (domain-scanners-2 ✓)
- DNSSEC DS record, CSP inline script, Sucuri B grade (domain-infra-4)
- HSTS preload not submitted, www/http redirect hops, SPF near the lookup limit, security.txt policy 404 (domain-infra-9)
- og:image dimensions wrong, hero images 32px under Discover minimum (seo-structured-6)
- FAQ/HowTo markup Google no longer uses; Animal Days FAQPage marks up hidden text (easy delete) (seo-structured-7)
- 525 sitemap URLs without lastmod; llms.txt stale; snippets cut mid-sentence; quiz pages thin (seo-crawl-6)
- Skip link and aria-current missing; section anchors only work on in-page clicks (nav-behavior-7)
- 53 articles over 5 sources without the rulebook note; small date-format slips (content-sources-11)

Everything not listed in either section sits in the middle: real, but neither urgent nor trivial.

## Duplicate groups

First ID in each group is the one to keep.

- **Hubs and encyclopedia pages: no author, no date, schema credits the Organization:** eeat-articles-0 ✓, content-dates-claims-2, seo-structured-1, eeat-other-0
- **87 articles name "Mike" as author in schema, unlinked to the About page:** eeat-articles-2 ✓, eeat-other-2, seo-structured-2
- **Visible date disagrees with the dateModified Google sees:** eeat-articles-1 ✓, seo-structured-0
- **Corrections never show on the corrected page:** eeat-articles-3 ✓, content-dates-claims-1 ✓
- **Brand identity split: BeastlyFacts vs Beastly Facts, scenery photo as logo, incomplete sameAs, wrong X handle:** domain-scanners-8, eeat-other-5, seo-structured-3, seo-structured-8
- **Byline photo is Dex, no photo of the owner; byline sits at the end:** eeat-articles-4, eeat-other-4
- **Contact email shows as "[email protected]" in served HTML:** domain-scanners-7, domain-infra-0, visitor-privacy-8
- **DNSSEC half set up (no DS record at .com):** domain-scanners-10, domain-infra-4
- **CSP allows inline script:** domain-scanners-9, domain-infra-8
- **Hub affiliate disclosure tiny, after the links, missing Amazon wording:** visitor-privacy-2 ✓, eeat-articles-8, store-donate-1
- **Homepage never says who runs the site or backs "Verified":** visitor-privacy-4 ✓, eeat-other-10
- **Hub and encyclopedia Back buttons send search visitors back to Google; no way home on mobile hubs:** nav-behavior-0 ✓, nav-surfaces-1, nav-behavior-1
- **Encyclopedia and guide indexes and category pages duplicate each other:** nav-surfaces-3, seo-crawl-1
- **/animal-facts/ legacy page competes with /facts/; too many fact doors:** seo-crawl-2, nav-surfaces-2
- **Store page indexable but left out of the sitemap:** seo-crawl-8, store-donate-10
- **www and http take 2 to 3 redirect hops:** domain-infra-10, seo-crawl-11
- **Encyclopedia and Beastlypedia entries cite no sources:** content-sources-6, eeat-other-6
- **Strength: article affiliate disclosure comes first:** eeat-articles-9, visitor-privacy-3, store-donate-7
- **Strength: breadcrumb JSON-LD is clean:** nav-behavior-4, seo-structured-10
- **Strength: strong TLS and security headers:** domain-infra-5, visitor-privacy-11
- **Strength: legal pages cite primary sources with check dates:** eeat-other-3, content-sources-8
- **Strength: corrections log, methods page, honest About:** content-dates-claims-10, eeat-articles-11, eeat-other-9

---
## Per-finding detail

Trust, audit and navigation review of beastlyfacts.com, stopped partway by the owner to save credits. Raw results, with full evidence for every finding and check, are in SITE_REVIEW_DATA.json.

**Where it stopped:** all 12 finders finished (140 findings). 16 findings were checked by skeptics; the rest are marked "Not checked yet". All three checks of the two earlier reviews finished (bottom of this file). The batch skeptics were stopped before finishing, so none of their verdicts are in.

**To resume:** re-check the unchecked findings in batch mode, one skeptic per lane, reading the findings from SITE_REVIEW_DATA.json.

## Trust scanners (domain-scanners)

### domain-scanners-1: Gridinsoft 63/100 is unclaimed and has not been rechecked since Sep 27

- **Kind / severity:** problem, medium (checker says low)
- **Status:** Checked (repro: partly, impact: partly)
- **Claim:** Gridinsoft scores the site 63/100 'Trusted but Verify', the fourth of its five tiers, from a single automated check on Sep 27. The owner has not claimed the profile. Gridinsoft's published method names a claimed profile and verified contacts as inputs that can raise the score, and its reevaluation is free. The report also tags the site 'Clothing', which nothing on the homepage supports.
- **As checked:** Gridinsoft scores beastlyfacts.com 63/100, "Trusted but Verify", the fourth of five tiers. The score comes from one automated check: first and last checked September 27, 2026 at 9:14 AM as the page prints it, which is 09:14:06Z in the JSON-LD, so 5:14 owner time. That is 22 days without a recheck as of Oct 19. The report page marks the profile "Unclaimed profile" and links to portal.gridinsoft.com/register. One correction to the finder's evidence: the positive signal "a verified profile linked to this domain" is not a Gridinsoft profile. It is the owner's verified YouTube channel (@beastlyfactsofficial, 19 subscribers). So no claimed profile or verified contacts are counted yet. Gridinsoft's method page names "claimed profile, verified contacts" as positive inputs, and reevaluation is free. The report tags the site "Clothing" in three places: On-page mentions, Digital Footprints and Detection Signatures. Today's live homepage visible text has no clothing terms (0 matches in 1,677 words). The raw HTML does have one: a script-only alt string, "Illustrated bearded dragon wearing sunglasses and a scarf" (index.html:191). It only renders in standalone PWA mode. A classifier reading the source could have picked it up. I could not check whether that string was live on Sep 27. The only negative signal is domain age (5 months, registered May 18, 2026), and claiming the profile cannot change that. A real visitor sees this only by looking the domain up on Gridinsoft, on mobile or desktop. Nothing shows on beastlyfacts.com itself.
- **Scope:** One third-party report. Anyone who looks up the domain on Gridinsoft sees it, and it shows the 'Trusted but Verify' label.
- **Fix (external-settings):** This is an optional external task, low priority, and it needs no repo change by default.

1. Create an account at portal.gridinsoft.com and open the domain-review ticket. That is the same link the "Flag for Reevaluation" button uses: https://portal.gridinsoft.com/tickets?create=domain-review&domain=Beastlyfacts.com. One ticket covers claiming the profile and asking for a rescore, so these are not separate steps.
2. In the ticket, add hello@beastlyfacts.com and https://beastlyfacts.com/contact/ as verified contacts.
3. Optionally, in the same ticket, note that the site sells no clothing.

Points for the owner to weigh:
- If ownership verification asks for a DNS TXT record, add it in Cloudflare DNS, which leaves the repo untouched. If it needs a meta tag or an uploaded file, that is a repo change and a main deploy, which the owner should decide on first.
- Do not change the splash alt text to shake the "Clothing" tag. The alt text accurately describes the image, and the tag only appears as a neutral detection signature.
- Expect a modest effect at most. The only negative signal, domain age, cannot be fixed by a claim. The site is already in the second-best tier. Gridinsoft publishes no weights.

### domain-scanners-2: The shared negative is a 5-month-old, low-traffic domain, which only time fixes

- **Kind / severity:** problem, medium (checker says low)
- **Status:** Checked (repro: partly, impact: partly)
- **Claim:** Every scanner that explains its score names domain youth as the main negative, and ScamAdviser adds low traffic. The domain was registered on May 18, 2026 and does not appear in the Tranco top-sites list. No site change affects either input.
- **As checked:** The domain was registered on May 18, 2026, 154 days (about 5 months) before today, and it has no Tranco rank. Of the two scanners I could reach that explain their score, both list domain youth as a negative. Gridinsoft (63/100, "Trusted but Verify") lists it as its only negative signal. ScamAdviser (71, "legit") lists three negatives with no ranking: WHOIS privacy (listed first), a low Tranco rank, and a very young domain. So youth is not shown as "the main negative" on ScamAdviser, and the finding leaves out the WHOIS item. URLVoid gives no score and no explanation. It shows 0/36 detections and prints the registration date as a plain fact, not as a negative. WOT shows N/A. I could not check ScamDoc or Scam Detector because both returned 403 to curl and WebFetch. No change to the site can affect domain age or Tranco rank. None of this appears on beastlyfacts.com itself, on mobile or desktop. A visitor sees it only by looking the domain up on one of these scanners, and Google does not see it as structured data or meta.
- **Scope:** Whole domain, on Gridinsoft, ScamAdviser and URLVoid. Visible to anyone who looks the site up there.
- **Fix (none):** Nothing changes in the repo. The finding's fix holds, with three additions.

1. Keep WHOIS privacy on. It is ScamAdviser's other negative, but turning it off would publish a solo owner's personal contact details for a "slightly lower score" penalty.
2. Optionally claim the free Gridinsoft profile at portal.gridinsoft.com. This is in addition to the free reevaluation request, and both are worth sending once the domain is older. The Gridinsoft report is dated September 27, so a recheck also refreshes stale data.
3. Skip ScamAdviser business verification unless the owner has company registration documents.

Do not buy traffic. Tranco rank, and Gridinsoft's popularity reading with it, rises only with real visitor growth, not with time alone.

### domain-scanners-4: Brand search returns a Britannica book, not the site

- **Kind / severity:** problem, medium (checker says low)
- **Status:** Checked (repro: partly, impact: partly)
- **Claim:** In five web searches for the brand, its domain and its social handles, 0 of the 48 results were beastlyfacts.com or any of its social profiles. Every query was dominated by the children's book 'Animal FACTopia!: Follow the Trail of 400 Beastly Facts'. No knowledge panel or entity box appeared anywhere. Google, Bing and DuckDuckGo could not be queried directly from this sandbox, so this is one search index, not Google's ranking.
- **As checked:** The tally is real but only for the WebSearch tool's backend, which is not identified. Across the same five queries, 0 of 48 results were beastlyfacts.com or its social profiles, and the Animal FACTopia book filled the lists. That backend does have the site indexed. It just ranks the book higher for the bare brand words. The headline "brand search returns a Britannica book, not the site" does not hold beyond that one tool. Brave Search, the only independent consumer engine that returned real results here, ranks https://beastlyfacts.com/ #1 for both "beastly facts" and "beastlyfacts", with the site's own Instagram (instagram.com/beastly.facts) at #3. For "beastlyfacts.com" in quotes, 13 of 16 Brave results are on the domain. No engine showed a knowledge panel, which is normal for a small site. Google's ranking is still unknown: from this sandbox it returns a JavaScript wall, Bing returns decoy results and DuckDuckGo returns a bot challenge. This is about off-site search results, not anything on the site, so no visitor sees a problem on the page on mobile or desktop. Nothing seen here shows that real brand searchers fail to find the site.
- **Scope:** Brand and navigational searches, on desktop and mobile. This is the search people run when they check whether the site is legitimate.
- **Fix (owner-decision):** Lower the severity to low and retitle the finding to "Third-party search index has no beastlyfacts.com pages". The current title asserts a brand-ranking problem that no Google evidence supports. The proposed diagnostic is right and proportionate as an owner-decision step, with one point to add. The repo's 2026-08-10 GSC export already shows 0 brand queries out of 165, so the owner only needs a fresh date range: GSC Performance, filter "Query contains beastly", last 3 months. A by-hand check in Google, Bing and DuckDuckGo from the desktop still applies. Do not make content or code changes on the strength of this evidence. One optional, cheap step Google would see: make the WebSite schema name in src/App.jsx:181 match the Organization name "Beastly Facts", and add "alternateName": "BeastlyFacts". Google's site-name feature reads that field. It is a one-line edit and stays within the owner's rules.

### domain-scanners-5: ScamAdviser 71 'Likely Safe': the only negative the owner controls is WHOIS privacy

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** ScamAdviser scores the site 71, in its 'Likely Safe' band (61 to 80), and concludes 'we think beastlyfacts.com is legit'. Its three negatives are WHOIS privacy, a low Tranco rank and a young domain. Only WHOIS privacy is in the owner's hands, and removing it would publish the owner's personal details. The 'verified' badge needs company registration papers, and the site names no business entity.
- **Scope:** One third-party report, visible to anyone who checks the site on ScamAdviser or through its app.
- **Fix (owner-decision):** Keep WHOIS privacy. ScamAdviser itself says it costs only 'a slightly lower score', and the alternative publishes a solo owner's personal details. Pursue the verified badge only if a business entity is ever formed.

### domain-scanners-6: No reviews on any review platform

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** There is no Trustpilot page for the domain, and Gridinsoft and Norton show zero user reviews. Both Gridinsoft and ScamAdviser name reviews as a scoring input, so this input currently contributes nothing.
- **Scope:** Domain-level reputation on Gridinsoft, ScamAdviser and Norton.
- **Fix (owner-decision):** Owner decides whether to open a free Trustpilot business profile and link it from /contact/. Never solicit or reward reviews.

### domain-scanners-7: Contact email reaches scanners as '[email protected]'

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The source code renders hello@beastlyfacts.com on /contact/ and /about/. Cloudflare's email obfuscation rewrites it in the served HTML, so any fetcher that does not run JavaScript sees '[email protected]' and no address. ScamAdviser names 'the availability of contact details on the website' as a scoring input. Visitors with JavaScript see the address normally, on mobile and desktop. Whether ScamAdviser's crawler runs JavaScript is not documented.
- **Scope:** /contact/ and /about/ as seen by non-JavaScript fetchers: scanners and some crawlers.
- **Fix (external-settings):** In the Cloudflare dashboard, turn off Scrape Shield Email Address Obfuscation, or add a Configuration Rule that disables it for /contact/ and /about/, so the plain address is in the HTML.

### domain-scanners-8: Site name differs between WebSite and Organization schema, and sameAs omits two linked profiles

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The WebSite structured data, the input Google says it uses for the site name, says 'BeastlyFacts'. The Organization schema, the <title> and og:site_name all say 'Beastly Facts'. The Organization sameAs lists 4 social profiles, but the site visibly links 6: Facebook and Threads are missing. Google only, not visible to visitors. On a brand search crowded by a similarly named book, consistent entity signals are the part the owner controls.
- **Scope:** Site-wide structured data, injected from App.jsx on every page. Google only.
- **Fix (code):** In src/App.jsx set the WebSite name to "Beastly Facts" with "alternateName": "BeastlyFacts", and add the Facebook and Threads URLs from SocialIcons.jsx to the Organization sameAs.

### domain-scanners-9: Sucuri grades the site B overall over two hardening notes

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** Sucuri's overall rating is B, not A, because of two minor recommendations: a CSP that allows 'unsafe-inline', and no OCSP stapling. Neither is a detection. The CSP is set by a Cloudflare Transform Rule, not by the repo. One of the four inline scripts on the homepage is injected by Cloudflare per request, so a hash-only CSP cannot cover it.
- **Scope:** Header-level, whole site. Visible only on Sucuri, not to visitors.
- **Fix (external-settings):** Optional: move the three site-owned inline scripts into /assets, then replace 'unsafe-inline' in the Transform Rule's script-src with a per-request nonce, or accept the B as a hardening note.

### domain-scanners-10: DNSSEC is switched on at Cloudflare but the DS record was never published

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** Cloudflare is publishing DNSSEC keys for the zone, but the .com registry has no DS record, so resolvers treat the domain as unsigned. Gridinsoft displays 'DNSSEC: UNSIGNED'. No scanner documents DNSSEC as a weighted input.
- **Scope:** Domain-level DNS. Invisible to visitors.
- **Fix (external-settings):** Copy the DS record from Cloudflare DNS > Settings > DNSSEC into the DNSSEC panel at the domain's registrar (Tucows Domains Inc. is the registrar of record).

### domain-scanners-11: The Wayback Machine reports no captures of the site

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The Internet Archive's availability API returns no snapshot for beastlyfacts.com, for the root URL as of Oct 19, or for www.beastlyfacts.com. robots.txt does not block archive crawlers. The CDX index could not be queried from this sandbox, so the earliest capture date is unconfirmed. No scanner documents archive history as an input. Gridinsoft lists 'historic behavior' without defining it.
- **Scope:** Domain history as seen by anyone checking the Wayback Machine.
- **Fix (owner-decision):** From a desktop, submit the homepage, /about/ and /contact/ to https://web.archive.org/save so a dated public record begins.

### domain-scanners-0: Every security engine reached reports the domain clean

- **Kind / severity:** strength, high (checker says low)
- **Status:** Checked (repro: confirmed)
- **Claim:** No malware, phishing or blocklist engine flags beastlyfacts.com. URLVoid shows 0 of 36 engines, Google Safe Browsing returns its clean status with all threat flags false, Norton rates it Safe, Gridinsoft reports 0 detections, ScamAdviser cites DNSFilter as safe, and Sucuri's security check passes 6 of 6. McAfee is the only scanner with no verdict: it shows 'Unknown'.
- **As checked:** No malware, phishing or blocklist engine I could reach flags beastlyfacts.com. URLVoid shows 0/36 detections (36 of 36 engine rows read "Nothing Found"), Google Safe Browsing returns status 1 with all five threat flags false, Norton returns rating "g" (Safe in Norton's own bundle), Gridinsoft shows 0 detections and "No external provider warnings", ScamAdviser lists "This website is safe according to DNSFilter" as a positive highlight, and Sucuri's live scan today shows security passed 6/6 with no malware or blacklist keys in the response. McAfee SiteAdvisor gives no verdict ("Website status: Unknown"). Two details the finding leaves out: most of these verdicts are 3 weeks old, not live (URLVoid last analysis 22 days ago, Gridinsoft "Last checked September 27, 2026", ScamAdviser "Last Update: 3 weeks ago", Safe Browsing timestamp Sep 30 6:26); only Sucuri scanned today. And Gridinsoft's overall verdict is "Trusted but Verify" at 63/100 with "Safety Level: 0 negative tags, 1 warning signal". That warning signal is not an engine detection: the Cleanliness axis is at its maximum. A visitor sees none of this on the site itself. It shows only to people who look the domain up on a scanner or run a scanner's browser extension, on desktop or mobile alike. None of it is structured data that Google reads from the site.
- **Scope:** Whole domain. People see this when they look the site up on a scanner or use a scanner's browser extension (Norton, McAfee, ScamAdviser app). Nothing shows on the site itself.

### domain-scanners-3: Ownership and infrastructure signals are already recognized

- **Kind / severity:** strength, medium (checker says low)
- **Status:** Checked (repro: partly)
- **Claim:** The scanners already credit a verified YouTube channel, Google and Zoho domain verification, a valid TLS certificate and a clean security-header setup. Sucuri grades the domain A and the TLS A. Those positives are in place and need no work.
- **As checked:** Most of the positives are real and I reproduced them today. Gridinsoft credits a verified YouTube channel and Google, Zoho and Zoho Mail SPF verification. The DNS TXT records are in place. The TLS certificate is valid (Google Trust Services WE1, expires Dec 17 2026). Sucuri grades Domain A (1/1) and TLS A (6/6). ScamAdviser says the SSL certificate is valid and the site speed is Very Fast. The live site sends HSTS with preload and X-Frame-Options DENY on all 3 pages I checked: /, /blog/ and /guides/ball-python/.

One part is wrong: no scanner credits a "clean security-header setup". Sucuri rates Security B and Total B, even though the Security checks show passed 6/6. Its recommendations flag headers_minor csp_unsafe_inline and tls_minor no_stapled_ocsp. Gridinsoft and ScamAdviser do not mention headers at all. The headers exist, but the one scanner that grades them marks them down to B for the CSP's 'unsafe-inline'.

The DMARC record (p=none) is monitor-only, so it is not a positive. Gridinsoft's overall score is only 63/100, with one negative signal: "a relatively new domain (5 months)".

None of this is visible to a visitor on mobile or desktop. It shows only on third-party scanner reports.
- **Scope:** Whole domain. Seen on scanner reports, not on the site.

*Could not check:* The following could not be checked from this sandbox.

- **Google, Bing and DuckDuckGo results pages:** none could be read directly. Google returned 'Your browser isn't supported anymore.', DuckDuckGo html and lite returned a captcha ('Unfortunately, bots use DuckDuckGo too.'), and Bing returned decoy results (chase.com for site:beastlyfacts.com, Microsoft pages through WebFetch). The brand-search finding therefore rests on the WebSearch tool, whose underlying engine is not identified. Knowledge-panel presence on Google itself is unverified.
- **Wayback Machine CDX:** unreachable (https connection reset, http 'Blocked by egress policy', WebFetch refused). The earliest capture date could not be read; only the availability API was used.
- **ScamDoc:** blocked. scamdoc.com returned a Cloudflare 'Sorry, you have been blocked' page and WebFetch 403, and scam-doc.com failed with a proxy 502 on CONNECT.
- **IsLegitSite:** only a captcha: 'Please complete the captcha to view the report for Beastlyfacts.com.'
- **Web Paranoid:** the scanner no longer exists. webparanoid.com/check/beastlyfacts.com serves a parked page titled 'webparanoid.com - This website is for sale!'.
- **Norton and Sucuri:** both results pages are JavaScript-only, so their JSON APIs were used instead. Norton's 'g' code was decoded from Norton's own app bundle. The Sucuri API call triggered a fresh scan (14:00 today), so the Sucuri result is current, not a cached one.
- **ScamAdviser:** the visible score renders as '0' before JavaScript runs, so the 71 comes from the page's embedded JSON and FAQ JSON-LD. The page gives no exact check date, only 'Last Update: 3 weeks ago'. Whether its crawler executes JavaScript, which decides whether the obfuscated email matters, is not documented.
- **Gridinsoft 'Clothing' tag:** traced only as far as the homepage text, which has no apparel words. Other pages were not searched.
- **Scoring formulas:** neither Gridinsoft nor ScamAdviser publishes weights, so no score change is forecast.
- **Not attempted:** VirusTotal (needs an API key) and Spamhaus DBL (the public resolver answer 127.255.255.254 means the query was refused, not a listing). urlscan.io shows 0 public scans.

## Domain setup (domain-infra)

### domain-infra-0: Cloudflare Email Obfuscation hides the contact address in the served HTML of every trust page

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The zone's Email Address Obfuscation setting rewrites hello@beastlyfacts.com in the prerendered HTML to the text "[email protected]" and the mailto link to /cdn-cgi/l/email-protection#..., and that endpoint returns 404. The literal address appears 0 times in the served HTML of all 5 pages that carry it. Visitors with JavaScript see the decoded address after Cloudflare's decoder runs, on mobile and desktop alike. Visitors without JS, reader views, link previews, trust scanners and any crawler that reads raw HTML without rendering see "[email protected]", and a no-JS click on "Email Me" lands on a 404. Googlebot renders JS, so Google most likely sees the decoded address, but the raw HTML it fetches first does not contain it.
- **Scope:** 5 of 5 pages that publish the address: /about/, /contact/, /privacy/, /terms/, /how-guides-are-made/. The 41-page sitemap sample and the home page carry no obfuscated email (0 of 42).
- **Fix (external-settings):** In Cloudflare, turn off Scrape Shield > Email Address Obfuscation, or add a Configuration Rule that disables it for the zone, so the prerendered address ships as written.

### domain-infra-2: DMARC is monitor-only (p=none), so the published address can be spoofed

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The DMARC policy is p=none. Receiving mail servers are told to deliver mail that fails SPF and DKIM alignment for beastlyfacts.com. Anyone can send mail as hello@beastlyfacts.com, the address the Terms page tells buyers to use for refunds, and receivers are not asked to quarantine or reject it. Reports already flow to Cloudflare DMARC Management, so the data needed to tighten the policy is being collected. Not visible on the site; affects inbox trust for subscribers and buyers.
- **Scope:** All mail using the beastlyfacts.com From domain
- **Fix (external-settings):** Check the Cloudflare DMARC Management reports to confirm Zoho (DKIM selector zmail) and any newsletter sender pass aligned. Then move the record to p=quarantine, and to p=reject after a clean month.

### domain-infra-3: Young domain on a 1-year term with no registrar transfer lock

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The domain was registered 154 days ago for a single year, so it expires in 211 days. Its registry status is only "active": it has no clientTransferProhibited lock. Automated trust scanners score young domains with short registration terms as riskier. Without a transfer lock, a compromised registrar account or social engineering could move the domain with fewer checks. Registrant data is privacy-redacted through Tucows' tiered-access service (individual, VA, US), which is normal and fine. Not visible to visitors or Google directly; read by trust scanners and WHOIS/RDAP lookups.
- **Scope:** Domain-wide
- **Fix (external-settings):** At the registrar (Tucows/OpenSRS reseller), turn on the transfer lock and extend the registration to several years with auto-renew on.

### domain-infra-4: DNSSEC is half-configured: zone is signed but no DS record at .com

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Cloudflare is signing the zone and serving DNSKEY and RRSIG records, but no DS record was published at the .com parent. The chain of trust is broken and no resolver validates the answers. The signing gives no protection against DNS spoofing until the DS record is added. Invisible to visitors and Google; DNS and security scanners report it.
- **Scope:** Domain-wide (all hostnames)
- **Fix (external-settings):** Copy the DS record from Cloudflare (DNS > Settings > DNSSEC) into the registrar's DNSSEC panel, then confirm the AD flag turns true.

### domain-infra-7: SPF record is near the lookup limit and authorizes senders the site never mentions

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The SPF record needs 9 of the 10 DNS lookups RFC 7208 allows. Two more includes would cause a permerror that breaks SPF for all mail. It lists a and mx twice, and +a authorizes the apex A records, which are Cloudflare's shared proxy IPs. It also includes dnssmarthost.net (resolving to _spf.mailspamprotection.com, which a third-party SPF guide ties to SiteGround hosting) and MailerLite (_spf.mlsend.com, with a litesrv DKIM CNAME). No file in the repo mentions SiteGround, dnssmarthost or MailerLite, and the newsletter subdomain points at beehiiv. Not visible to visitors.
- **Scope:** All outbound mail for the domain
- **Fix (owner-decision):** Once the owner confirms which services still send as beastlyfacts.com, rewrite SPF to only those, e.g. "v=spf1 include:zohomail.com include:_spf.mlsend.com ~all" if MailerLite is still live, dropping +a, +mx, the duplicate a mx and the dnssmarthost include.

### domain-infra-8: CSP allows inline script, lives outside the repo, and contradicts X-Frame-Options

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The live CSP is set by a Cloudflare zone Transform Rule, not by public/_headers, so it cannot be diffed or reviewed with the code. Its script-src includes 'unsafe-inline', which removes most of its value against injected script. Its frame-ancestors 'self' allows same-origin framing while _headers sends X-Frame-Options: DENY. Modern browsers obey frame-ancestors, so DENY is silently overridden. The same rule also lands on Worker responses such as /feed.xml, which get none of the _headers protections (no HSTS, no nosniff). Visible only to security scanners, not to visitors or Google.
- **Scope:** Site-wide header policy
- **Fix (external-settings):** Change frame-ancestors to 'none' in the Transform Rule to match X-Frame-Options DENY, and commit the CSP text to docs so it is versioned with the code.

### domain-infra-9: HSTS header says preload, but the domain is not on any preload list

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** Every HTML response sends the preload token, and hstspreload.org reports the domain as preloadable with no errors or warnings, but it was never submitted. A first-ever visit typed as http:// is still unprotected until the 301 arrives. Not visible to visitors.
- **Scope:** Domain and all subdomains
- **Fix (owner-decision):** Submit beastlyfacts.com at hstspreload.org, after the owner accepts that includeSubDomains preload is slow to undo and forces HTTPS on every future subdomain; otherwise drop the preload token.

### domain-infra-10: www and http variants take 2 to 3 redirect hops

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** http://www goes to https://www and then to the https apex: 2 hops, where 1 would do. A www URL without its trailing slash takes 3 hops. Each hop adds latency for visitors on old or typed links (worst on mobile networks) and dilutes link signals Google follows. The https://www to apex hop alone is a clean single 301.
- **Scope:** Inbound links to www or http variants
- **Fix (external-settings):** Add one Cloudflare Single Redirect rule matching host www.beastlyfacts.com on any scheme that sends a 301 straight to https://beastlyfacts.com with the same path, so it runs before Always Use HTTPS.

### domain-infra-11: security.txt points to a Policy page that 404s

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The site publishes a valid security.txt, a good trust signal, but its Policy field links to /security-policy, which returns 404. Visible to security researchers and scanners that read the file, not to ordinary visitors.
- **Scope:** 1 file
- **Fix (code):** Delete line 5 of public/.well-known/security.txt (the Policy field is optional), or point it at an existing page such as /contact/.

### domain-infra-1: Published contact email is on the domain and backed by working mail records

- **Kind / severity:** strength, high
- **Status:** Not checked yet
- **Claim:** Every page that publishes a contact address uses hello@beastlyfacts.com, an address on the site's own domain rather than a free webmail account. The domain has live MX records for Zoho Mail, a published Zoho DKIM key, and a DMARC record with aggregate reporting. A visitor emailing the address reaches a real, authenticated mailbox on the same domain as the site, which matches the About and Contact pages. Visible to visitors on all devices, subject to the obfuscation finding above.
- **Scope:** Site-wide contact identity (About, Contact, Privacy, Terms, How Guides Are Made, contact form fallback)

### domain-infra-5: TLS and security headers grade A+ on every page type checked

- **Kind / severity:** strength, high
- **Status:** Not checked yet
- **Claim:** All four Cloudflare edge IPs score A+ on SSL Labs with only TLS 1.2 and 1.3 enabled. Certificates are Cloudflare Universal SSL from Google Trust Services and Let's Encrypt, renewed automatically: the newest apex and wildcard cert was issued 2026-10-06 and is valid to 2027-01-04. HTML pages carry HSTS (1 year, includeSubDomains, preload), X-Content-Type-Options nosniff, X-Frame-Options DENY, Referrer-Policy, Permissions-Policy, COOP, CORP, and a CSP with object-src 'none', base-uri 'none', form-action 'self' and upgrade-insecure-requests. http:// goes to https:// on the apex with a single 301. Visible to every visitor as a clean padlock on mobile and desktop.
- **Scope:** Site-wide (4 of 4 page types checked: home, guide hub, article, contact)

### domain-infra-6: No mixed content and only one third-party script on first paint

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** The served HTML references no http:// resources, loads no external stylesheets or iframes, and self-hosts its fonts. The only third-party script tag at first paint is Cloudflare's Web Analytics beacon (defer), which Cloudflare injects. GA4 (googletagmanager.com) and Ahrefs analytics are added after the load event via requestIdleCallback, and AdSense is commented out. Visitors on every device get a page that does not wait on third-party hosts to render.
- **Scope:** Site-wide (44 pages checked)

*Could not check:* Direct TLS inspection with openssl s_client is not possible here. The sandbox's egress proxy presents its own certificate (issuer \"Anthropic Egress Gateway SDS Issuing CA\"), so I used Certificate Transparency (Cert Spotter API) and the SSL Labs API for the real chain and grade instead. RDAP does not expose the Tucows reseller's identity or whether auto-renew is on, so I could not confirm the renewal setting. I could not see the Cloudflare DMARC aggregate reports, so I cannot say whether tightening to p=quarantine would break any current sender. I also could not confirm whether MailerLite or the SiteGround-linked include are still in use: the repo never mentions them, but the owner may send through them outside the codebase. I probed the beehiiv sending-domain alignment with the common DKIM selectors (s1, s2, bh, k1, mail, selector1, on the apex and the newsletter subdomain) and found none, so I cannot say whether beehiiv mail aligns to beastlyfacts.com. I wanted to check whether the Cloudflare email rewrite triggers a React hydration mismatch, since src/main.jsx:86 uses hydrateRoot and Terms.jsx:62 embeds the address mid-sentence. I tried to mirror the live page to localhost for a headless browser check, but the sandbox policy refused it, so that impact is unverified. I did not test whether the security@beastlyfacts.com mailbox actually accepts mail. crt.sh returned 502, so CT data comes from Cert Spotter only (31 issuances, first page).

## Credibility on hubs and articles (eeat-articles)

### eeat-articles-0: Care guide hubs carry no author, no date and no sources, and their schema names only the Organization

- **Kind / severity:** problem, high (checker says medium)
- **Status:** Checked (repro: partly, impact: partly)
- **Claim:** None of the 108 species hubs at /guides/<id>/ shows a byline, a published, updated or reviewed date, or a sources list. Their Article JSON-LD gives author as the Organization, with no datePublished or dateModified. The hub data has no date or author field at all, and none of the 108 hubs gets a sitemap lastmod. Blog articles on the same subject get a Person author, two visible dates and a Sources block, so the most important page per species is the least attributed page on the site.
- **As checked:** All 108 species hubs at /guides/<id>/ (84 router, 24 legacy dog/cat) carry no byline, no publish, update or reviewed date, and no external Sources list. Their Article JSON-LD names the Organization as author and has no datePublished or dateModified. The guide data has no top-level date, author or review field, and none of the 108 hub URLs in the live sitemap has a lastmod. Blog articles on the same species do get a Person author (Michael Ryan), a visible publish date plus a visible "Last reviewed" date, and a "Sources & Further Reading" block. Two details in the finding are wrong. First, the hubs are not uniquely "the least attributed page on the site": the 103 encyclopedia entries (/encyclopedia/animal/<id>/) have the same gap, with an Organization author at EncyclopediaAnimal.jsx:149, no dates, no byline, no sources and 0 of 103 with a sitemap lastmod. Second, the hub data is not free of source fields. firstWeek.rows[].source appears 1,345 times and emergencyCard.source appears 84 times. These hold slugs of the site's own articles, and 84 of 108 hubs show a visible "From <article title> →" link to the article the advice came from. Those are internal attribution links, not citations, so the core gap still stands. Every hub also links once to /about/ and once to /how-guides-are-made/, both in the footer. Visitors see the gap on mobile and desktop. Google sees it in the Article JSON-LD and in the sitemap.
- **Scope:** All 108 hubs (84 router, 24 legacy dog/cat). Visitors see it on mobile and desktop; Google sees it in the Article JSON-LD and sitemap.
- **Fix (code):** 1) Author, cheap and safe: replace the Organization author at GuideDetail.jsx:309 with authorSchema() from src/lib/data/author.js. Make the same one-line change at EncyclopediaAnimal.jsx:149, which has the same pattern. Ship it together with a visible byline so the page and the schema agree. Either reuse the articles' AuthorBio card at the foot of the page, where Blog.jsx:1194 puts it (not under the H1, as the finding says), or add a compact "Written by Michael Ryan" line linking /about/ beside the existing firsthand line at GuideDetail.jsx:381-386. 2) Dates: do not hand-stamp 108 lastUpdated values. No truthful hub date exists today, and an invented one would break the owner's no-fabricated-dates policy (generate-sitemap.js:154-157). This choice needs the owner, so ask one question. Option A: a hub-level lastReviewed set only when a hub is actually reviewed, in the owner's US Eastern date. Option B: a dateModified derived from the newest lastUpdated or lastReviewed among the deep dives the router rows cite. Add datePublished, dateModified and the sitemap lastmod only from that real date. 3) Sources: add no Sources block to the 84 router hubs, because every figure already links to a sourced deep dive, as RULES.md's Hubs section requires. The 24 legacy dog/cat hubs, which do carry unsourced care prose, get fixed through the router reconciliation RULES.md already plans ("dogs and cats last"), not through a Sources list bolted onto the legacy layout.

### eeat-articles-1: Visible article dates disagree with JSON-LD dateModified on most articles

- **Kind / severity:** problem, high (checker says medium)
- **Status:** Checked (repro: partly, impact: partly)
- **Claim:** The only date near an article title is the publish date. It carries no label and uses the same clock icon as the read time. JSON-LD dateModified comes from lastUpdated, which is newer than that date on 741 of 857 published articles and matches no date shown on the page on 579 of 857. On 540 articles it is also newer than the visible "Last reviewed" date at the foot, so Google is told about an update that readers are never shown. A code comment claims the two always match.
- **As checked:** The code behavior is real. The only date next to an article title is the publish date. It has no label and uses the same lucide Clock icon as the read time. BlogPosting JSON-LD sets dateModified = lastUpdated || lastReviewed || date, and no "Updated" date appears anywhere on the page. The counts are off because the denominator is wrong.

Of the 857 published MDX files, 37 never render through Blog.jsx and emit no datePublished or dateModified at all:
- the 36 short stories, which 301 to /chronicles/<series>/<n>/
- exotic-pet-legal-hub, which 301s to /exotic-pet-laws/

On the 820 /blog/ pages that do emit BlogPosting dates:
- lastUpdated is later than `date` on 731 of 820 (not 741 of 857).
- dateModified matches no visible date on 570 of 820 (not 579 of 857).
- dateModified is later than the visible "Last reviewed" date on 540 of 820. This number was correct.
- 26 of 820 have no foot date: 20 have no lastReviewed, and 6 have lastReviewed but no <Sources> component, which is the only place the date renders. The finding said 20.
- lastUpdated is earlier than lastReviewed on 10 (correct).

Clustering is real. Across all 857 files, 275 share lastUpdated 2026-09-25, 100 share 2026-09-24 and 100 share 2026-10-03; on the 820 /blog/ pages alone the first figure is 267.

Both live examples are exactly as described. The visible part (an unlabeled date with the same clock icon as the read time) shows on mobile and desktop. The date mismatch itself is seen only by Google, in JSON-LD and the sitemap.
- **Scope:** 741 of 857 published articles, including care deep dives and wild-animal pieces. The visible part shows on mobile and desktop; the mismatch itself is seen only by Google.
- **Fix (code):** Ship only the first option. Do not offer the alternative. In src/pages/Blog.jsx:1071-1074, label the top date "Published <date>". When post.lastUpdated is later than post.publishedAt, add "Updated <lastUpdated>" in the same span row, formatted with the same getDisplayDate call. It already formats the frontmatter string in UTC, so it stays hydration-safe. Optionally give the date a Calendar icon so it no longer shares the Clock icon with the read time. Rewrite the comment at Blog.jsx:942-943 so it no longer claims dateModified matches the visible line, or so it states the new rule. Optionally make the foot "Last reviewed" line in Sources.jsx use the same US "Jul 7, 2026" format, so the page shows one date style. Do not switch dateModified to a date the page already shows. lastUpdated is policy-bound to real fact and number changes (READMEFIRST.md:1096), and generate-sitemap.js lastmod also uses it. Dropping it would discard an accurate signal and create a new mismatch between JSON-LD and the sitemap. This is a code-only change: no frontmatter edits and no date renumbering.

### eeat-articles-2: 87 articles tell Google the author is "Mike" while the page says Michael Ryan

- **Kind / severity:** problem, medium (checker says low)
- **Status:** Checked (repro: confirmed, impact: partly)
- **Claim:** authorSchema() links a name to the /about/ Person entity (@id, url, sameAs) only when it equals "Michael Ryan" exactly. 87 published articles have author: "Mike" in their frontmatter, so their JSON-LD author is a bare {"@type":"Person","name":"Mike"} with no link to the profile. The visible byline on the same pages reads "Written by Michael Ryan", because AuthorBio ignores post.author.
- **As checked:** This holds exactly as stated. authorSchema() in src/lib/data/author.js:53-57 links the author to the /about/ Person entity (@id, url, sameAs) only when the name is empty or exactly "Michael Ryan". Any other name gets a bare {"@type":"Person","name":...}. 87 of the 857 published MDX articles have author: "Mike" in their frontmatter. All 87 are in content/guides/: 75 are category Enrichment, 8 are Dogs and 4 are Cats. Those 12 dog and cat pages are breed or species enrichment guides tagged "Dog Health" or "Cat Health". On all 87 live pages (87 of 87 fetched) the BlogPosting JSON-LD author is {"@type":"Person","name":"Mike"}, and the visible byline reads "Written by Michael Ryan". Only Google sees the mismatch. Visitors on mobile and desktop see the correct name. One small addition: the visible bio on the same card says "Mike keeps two rescued bearded dragons", so a visitor sees both names, but that reads as a nickname and is not a problem.
- **Scope:** 87 of 857 articles, nearly all enrichment guides. Only Google sees it; visitors see the correct name.
- **Fix (code):** Pick one fix: normalize the data and leave the code alone. Change `author: "Mike"` to `author: "Michael Ryan"` in the 87 files under content/guides/*-enrichment-guide.mdx. That is a mechanical one-line edit per file and touches no dates, ids or rotation numbers. Then run `node scripts/sync-articles.js` so the tracked src/lib/generated/mdx-meta.json matches. This changes the built site, so it ships as a normal deploy, not [CI Skip].

Do not alias "Mike" inside authorSchema(). The function exists to describe a non-owner byline truthfully, and an alias would quietly hide the next drift instead of fixing the data. The batch is closed: none of the scheduled files use "Mike".

While in there, correct the stale comments at author.js:49-52, Blog.jsx:948-955 and sync-articles.js:275-280. They still say every MDX file declares author: "Mike", which no longer matches the 770 that use "Michael Ryan". A build check is optional and not needed for a one-off batch.

### eeat-articles-3: Corrections never appear on the corrected page and do not move its dates

- **Kind / severity:** problem, medium (checker says medium)
- **Status:** Checked (repro: partly)
- **Claim:** The public corrections log (41 entries) is rendered only on /how-guides-are-made/. A reader on a corrected article or hub gets no correction note. On 8 of the 36 corrected /blog/ pages the logged correction is dated after both the page's dateModified and its visible "Last reviewed" date, so neither the page nor its schema shows that it changed. Three of those 8 are dated 2026-10-16, after the log went live on 2026-10-15, so those dates are definitely when the fix shipped.
- **As checked:** The public corrections log has 41 entries and is rendered only on /how-guides-are-made/. A reader on a corrected page sees no correction note. The 41 entries cover 40 distinct pages: 36 entries on 35 distinct /blog/ articles (bearded-dragon-feeding-guide has two, dated 2026-09-16 and 2026-10-05), plus 4 /guides/ hubs (axolotl, hamster, millipede, sulcata-tortoise) and the /facts/ index. That makes it 4 hubs and 1 facts page, not "5 hubs". On 8 of the 35 corrected /blog/ articles, the latest logged correction is dated after both lastUpdated (which feeds the schema dateModified) and lastReviewed (the visible "Last reviewed" line). Three of those 8 are dated 2026-10-16: axolotl-legal-guide, sugar-glider-legal-guide and budgie-feeding-guide. Git confirms the content fix landed on Oct 16 at about 02:00 without a frontmatter date change. The other 5 are dated 2026-10-02 to 10-06 against lastUpdated 2026-09-25. Those may be recording lag, and I could not check them because the clone is shallow. The visible-date gap is wider than the finding says: on 30 of the 35 articles, the visible "Last reviewed" date is older than the latest logged correction. The byline shows only the publish date, so no corrected article shows a reader that it changed. The exotic-pet-legal-hub correction (10-16) did get lastUpdated bumped to 10-17, so date bumping is inconsistent rather than never done.
- **Scope:** 36 corrected articles and 5 corrected hubs get no on-page note; 8 articles have dates older than their last correction. Visitors on mobile and desktop and Google are both affected.
- **Fix (code):** 1. In Sources.jsx, look up CORRECTIONS by the page path it already computes for REVIEWS, and render a short "Corrected <date>: <now>" line next to the review line. Link it to /how-guides-are-made/.
2. Add the same lookup to GuideDetail.jsx for the 4 /guides/ hubs, and to Facts.jsx for the /facts/ entry.
3. When a correction ships, bump that page's lastUpdated (which feeds dateModified). Do not bump lastReviewed unless an actual review happened.
4. For the 3 Oct 16 articles, set lastUpdated to 2026-10-16.
5. Optionally, add a build check that fails when a /blog/ correction date is later than that article's lastUpdated.

### eeat-articles-4: The byline sits at the very end of the article and its photo is a bearded dragon

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** No author name appears near the title of any article. The only byline is the AuthorBio card, which renders after the body, Sources, FAQ, the More-on list and Recommended Gear. Its photo is Dex the bearded dragon, and the same lizard photo is the Person.image in the About page's ProfilePage JSON-LD. The bio is the care-guide bio ("writes the care guides... He is not a veterinarian") even on wild-animal pieces.
- **Scope:** All 857 article pages (and the About page schema). Visitors see it on mobile and desktop; Google sees the Person.image.
- **Fix (owner-decision):** Add a one-line "By Michael Ryan" linked to /about/ in the top meta row, next to the date. Whether to swap the portrait for a photo of the owner is the owner's call.

### eeat-articles-5: "Last reviewed" and AI use are explained only off-page, and only a footer link leads there

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Articles show "Last reviewed <date> · N sources" without saying who reviewed or what a review means. Every review is the owner's own reread: the outside-review register is empty. The /how-guides-are-made/ page explains this clearly and discloses that AI tools draft content, but no article or hub mentions AI. The "Last reviewed" line does not link to the methodology page, whose only link on article and hub pages is in the footer. On health articles a reader can take an unexplained "Last reviewed" as an expert review.
- **Scope:** 795 articles show the Last reviewed line; all 857 articles and 108 hubs lack an on-page AI note. Visitors see it on mobile and desktop.
- **Fix (code):** Change the line to "Last reviewed by the author <date>" and link it to /how-guides-are-made/. Add one short sentence about AI-assisted drafting to the AuthorBio card or the Sources line.

### eeat-articles-6: 24 legacy dog and cat hubs make statistical health claims with no source, author or date

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The 24 dog and cat hubs that still use the legacy layout carry their own housing, diet and health text in the data rather than routing to sourced deep dives. 21 of them cite percentages, studies or data with no visible source anywhere on the page.
- **Scope:** 24 hubs (10 cat, 14 dog). Visitors see it on mobile and desktop.
- **Fix (content):** Move these hubs to the router layout, where every figure links to the deep dive it came from. Until then, add a sources array to the legacy data and render it.

### eeat-articles-7: An outside review of a hub would never show on the hub

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The outside-review credit ("Reviewed for accuracy by <name>, <credentials>") renders only inside the MDX <Sources> component, matched by pathname. Hubs never render <Sources>, yet the register's own template example targets '/guides/bearded-dragon/'. The first hub review the owner logs would appear on /how-guides-are-made/ but not on the reviewed page.
- **Scope:** Latent: affects any future review of the 108 hubs. Nothing is visible yet.
- **Fix (code):** Render the same REVIEWS lookup in GuideDetail.jsx (and add reviewedBy to the hub JSON-LD when an entry exists).

### eeat-articles-8: Hub affiliate disclosures are tiny and sit after the links

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** Articles open with a full Affiliate Disclosure box. Hubs disclose paid links only in a line under the buy list or cost builder, after the links. Router hubs set it in 11px type at 80% opacity, legacy hubs in 10px italic at 70% opacity, appended to a price caveat.
- **Scope:** 84 router hubs with buy lists plus the legacy hubs whose cost builder matches a product. Visitors see it on mobile and desktop.
- **Fix (code):** Put a one-line disclosure at readable size above the buy list and cost builder, matching the article AffiliateDisclosure wording.

### eeat-articles-9: Article affiliate disclosure comes before the first affiliate link

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** Every published article with an in-body affiliate link puts the Affiliate Disclosure box before that link, usually above the first H2. Affiliate links carry rel="sponsored", and the Recommended Gear block repeats the Amazon Associate statement.
- **Scope:** 412 articles with in-body affiliate links (471 carry the disclosure box). Visible on mobile and desktop.

### eeat-articles-10: Sources, review dates and vet disclaimers are in place across the articles

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** Almost every non-fiction article ends with a Sources list and a visible "Last reviewed <date> · N sources" line. Every health-issues guide opens with a Not Veterinary Advice box before the first H2. The site-wide footer and the author bio both say the author is not a vet.
- **Scope:** 815 of 857 articles have sources; all 84 health guides have the disclaimer. Visible on mobile and desktop.

### eeat-articles-11: A clear methods page and honest firsthand-experience lines

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** /how-guides-are-made/ covers what the site does and does not claim: how AI is used, what a source is, what a review date means, an outside-review register stated as empty, and a public log of 41 corrections. On articles, the person's identity is consistent where it is linked: a Person with @id /about/ and sameAs links that match the About ProfilePage. Firsthand-experience lines appear only for species the owner has actually lived with.
- **Scope:** Site-wide methodology; firsthand lines on 87 articles and 9 hubs. Visible to visitors and, through the Person @id, to Google.

*Could not check:* I could not open pages in a browser: headless Chromium fails TLS here. So visual prominence (font size, how far down the byline sits on a phone screen) is judged from Tailwind classes and byte offsets in the prerendered HTML, not from screenshots. Mobile and desktop share one main-column DOM for these elements, which is why I say "both". I curled 22 live pages: 6 hubs, 8 care deep dives, 5 wild-animal articles, /about/, /how-guides-are-made/ and /sitemap.xml. The 857-article counts come from frontmatter and MDX scans, and I am assuming the deterministic render code holds for the pages I did not fetch. I could not tell whether the clustered lastUpdated dates (275 articles on 2026-09-25) reflect substantive edits, because the local clone is shallow (80 commits). I also could not check how Google actually chooses a date or author for these pages: there is no Search Console or rich-results access from here. The "41 wild" figure counts articles whose category or categories frontmatter includes Wild Animals; 32 have it as the primary category.

## Credibility on other page types (eeat-other)

### eeat-other-0: Encyclopedia entries: no byline, date or sources, and the schema credits an Organization

- **Kind / severity:** problem, high
- **Status:** Not checked yet
- **Claim:** All 103 encyclopedia entries (/encyclopedia/animal/<id>/) show no visible author, no visible date, no sources and no outbound links, while they make checkable claims such as IUCN status and wild lifespan. Their Article JSON-LD names an Organization as author, has no datePublished or dateModified, and uses the browser title, including the ' | Beastly Facts' suffix, as the headline. This breaks the About page's promise of 'Sources on the page' for 'species profiles'. It also contradicts the reasoning in author.js that an Organization author on pet content is the costly signal to be missing.
- **Scope:** 103 of 103 encyclopedia entries. Visitors on mobile and desktop see no byline, date or sources. Google sees an Organization author and no dates.
- **Fix (code):** In EncyclopediaAnimal.jsx, replace the hardcoded author with authorSchema() from src/lib/data/author.js and set headline to animal.name. Add datePublished and dateModified from a new per-entry lastReviewed field. Render a short Sources list and a 'Written by Michael Ryan, last reviewed <date>' line from a new sources array in src/lib/data/encyclopedia/*.js.

### eeat-other-1: Facts are sold as 'verified' but none of the 347 carries a source

- **Kind / severity:** problem, high
- **Status:** Not checked yet
- **Claim:** The site tells visitors its facts are verified: 'Verified animal facts' in the homepage hero, 'curated, verified' in every fact category meta description, and 'checked facts' on About. None of the 347 facts has a source, and no fact card, fact modal or gallery tile shows one. The site's own corrections log already records one fact that was overstated until 16 October.
- **Scope:** All 347 facts as shown on /, /facts/, the 8 /facts/category/ pages, /gallery/ and the Fun Facts blocks on encyclopedia and Beastlypedia pages. Visible on mobile and desktop.
- **Fix (content):** Add a source (URL plus publisher) to each fact in facts.js and render it as a small 'Source:' link in FactModal and the image lightbox. Until a fact has a source, remove 'verified' from HeroSection.jsx:208 and Facts.jsx:233.

### eeat-other-2: authorSchema() turns 87 'Mike' bylines into a separate, unlinked Person

- **Kind / severity:** problem, high
- **Status:** Not checked yet
- **Claim:** authorSchema() links a byline to the /about/ Person only when the frontmatter author is exactly 'Michael Ryan'. 87 published articles declare author: "Mike", so their BlogPosting JSON-LD carries a bare Person named 'Mike' with no @id, url or sameAs. Google sees that as a second, unconnected author. The visible author box on those same pages says 'Written by Michael Ryan'.
- **Scope:** 87 of 857 published articles (about 10%). Google only.
- **Fix (code):** In author.js:54, treat 'Mike' as an alias of the known author (name === AUTHOR.name || name === 'Mike'), or change the 87 frontmatter lines to "Michael Ryan".

### eeat-other-4: Owner identity: the byline photo is a lizard and sameAs lists only brand accounts

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** There is no photo of the owner anywhere on the site. The Person entity's image, and the author box on every article, show Dex, a bearded dragon. The Person sameAs lists only the four brand accounts that the Organization also lists, so no personal profile confirms 'Michael Ryan' as a real individual. Credentials are honestly disclaimed and the outside-review list is empty. The name itself is consistent: 'Michael Ryan' in the schema and bylines, and 'I go by Mike' on About.
- **Scope:** The About page, the author box on every article, and the Person schema site-wide. Mobile and desktop.
- **Fix (owner-decision):** The owner decides. Options: add a real photo of the owner to AUTHOR.image (with Dex in it is fine), and add any personal profile the owner is willing to link, such as a personal Instagram or LinkedIn, to AUTHOR.sameAs. Keep the brand accounts on the Organization only.

### eeat-other-5: Organization schema: two brand names, a scenic photo as the logo, and incomplete sameAs

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The site-wide brand entity is inconsistent in four ways. (1) The WebSite node is named 'BeastlyFacts' and the Organization 'Beastly Facts', and page titles also use both spellings. (2) The Organization logo is og-default.jpg, a 1200x630 landscape photo of a bearded dragon, a lorikeet and a kangaroo, not the BF logo the site already has. (3) sameAs leaves out Facebook and Threads, which every page links in the footer, and spells the Pinterest and Instagram URLs differently from the Person sameAs. (4) No Organization node has an @id, so Google cannot merge the site-wide Organization, the article publisher and the Person's worksFor into one entity.
- **Scope:** Every page, through the site-wide JSON-LD. Google only, except the title and H1 spelling split, which visitors see.
- **Fix (code):** In App.jsx: rename the WebSite to 'Beastly Facts' (alternateName 'BeastlyFacts'). Give the Organization the @id https://beastlyfacts.com/#organization and the logo https://beastlyfacts.com/pwa/icon-512.png. Add the Facebook and Threads URLs to sameAs. Then reference that @id from PUBLISHER and worksFor in author.js.

### eeat-other-6: Beastlypedia entries: no byline, date or on-page sources; 14 of 43 have no route to any source

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Beastlypedia entries carry no byline, no date and no sources on the page. 29 of 43 link to a related Fact File card that shows a source count. The other 14 have no path to any source at all. Unsourced fun facts sit beside the researched text, for example 'They've even been seen crying.' on the elephant page.
- **Scope:** 43 Beastlypedia entries. Visitors see it on mobile and desktop; Google sees no author or dates.
- **Fix (content):** Render a Sources list and a 'last reviewed' date on each Beastfile, drawn from a new sources array in src/lib/data/beastlypedia/*.js or from its related Fact File's sources. Add a source to each unsourced fun fact shown there, or remove it.

### eeat-other-7: CC BY and CC BY-SA photos are shown with no credit, and no credits page exists

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Photos licensed CC BY and CC BY-SA appear on the site without the attribution those licenses require. The public credits page that the owner's own rules call for does not exist.
- **Scope:** 8 photos, in the gallery, the fact lightboxes and anywhere else those images appear. Visible on mobile and desktop.
- **Fix (code):** Build a /credits/ page from the IMAGE_CREDITS.md table (author, license with link, source) and link it from the footer. Show a one-line credit in ImageLightbox for any image that has a credits entry.

### eeat-other-8: Legal hub and per-animal legal pages: weak freshness signals and no named checker

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Outside the state pages, the legal section gives weaker signals of freshness and accountability. The hub /exotic-pet-laws/ makes time-bound federal claims ('currently covering close to 800 species') with no visible date, and its summaries had drifted from the matrix until a 16 October correction. The 82 per-animal pages show their verified date only in a 'Cite this page' box near the bottom; the restriction rows show no date until a visitor clicks a state. No legal page names who checked it, and none carries a dateModified in its JSON-LD.
- **Scope:** The legal hub (1 page) and 82 per-animal pages for dates; the map and all 52 state pages for the missing byline and schema.
- **Fix (code):** Under the H1 of the hub, map, per-animal and state pages, add 'Last reviewed <date> by Michael Ryan' with a link to /how-guides-are-made/. Use the newest verifiedOn as the date, or a LAST_REVIEWED constant for the hub. Emit a WebPage node with dateModified and author: authorSchema() next to the existing BreadcrumbList.

### eeat-other-10: The homepage never says who runs the site

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The homepage does not say who is behind the site. Its hero speaks as 'We looked it up. So you don't have to.', while About says 'It's just me'. There is no owner name, photo or one-line keeper intro, and About is reached only through the menu and the footer. The site's trust case rests on one named keeper, and the most visited page hides the owner.
- **Scope:** Homepage, on mobile and desktop.
- **Fix (content):** Add a short keeper strip to the homepage: a photo, a line such as 'I'm Mike. I keep two rescued bearded dragons and write every guide here.', and links to /about/ and /how-guides-are-made/. Change the hero voice from 'We' to 'I'.

### eeat-other-3: State legal pages: every entry cites the rule, links the source and shows its check date

- **Kind / severity:** strength, high
- **Status:** Not checked yet
- **Claim:** Every state legal page shows, for each entry: the section cited (for example '§ 671(c)(7)(A)'), the quoted rule text, a link to the agency or statute, and 'Checked against the published text on <date>'. Each page also opens with a summary of when the entries were verified and a 'Not Legal Advice' box. This is the strongest trust pattern on the site, and it is exactly what the risk of stale legal claims calls for.
- **Scope:** 52 state and jurisdiction pages. Visible on mobile and desktop.

### eeat-other-9: About, How guides are made and Contact: real experience and unusual transparency

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** These three pages give real first-hand experience and unusual transparency: a named owner, a concrete keeping history, an honest statement of no credentials, a disclosure of AI use, an outside-review section that admits there is none yet, a public corrections log with was/now/source for each fix, a funding and affiliate disclosure, and three ways to get in touch.
- **Scope:** About, How guides are made and Contact. Visible on mobile and desktop.

*Could not check:* Legal accuracy: I did not check any statute citation against the current text of the law. The 'checked' dates are reported as the site displays them, not independently confirmed. Content accuracy: I did not check encyclopedia, Beastlypedia or fact claims against outside sources, so I make no claim that any specific fact is false. Social profiles: Instagram returned HTTP 429 and the X profile came back as a JavaScript app with no readable title, so I could not confirm those two account names. YouTube, Pinterest, Threads and Facebook resolved to 'Beastly Facts' brand pages. Layout: a browser cannot load external pages from this sandbox, so mobile and desktop layout was judged from the prerendered HTML and the responsive code, not seen. For the same reason I did not see the Cloudflare-obfuscated email decode in a real browser. Google's view: I have no Search Console or Rich Results Test access, so I cannot say whether Google has picked up the Person entity, the logo or the author linkage. Gallery: pages 2 to 12 load in the browser after the first page, so only page 1 was checked for photo credits. Fact pages: individual fact pages (/facts/<slug>/) are not prerendered and are set to noindex (Facts.jsx:247), so I checked only one (/facts/three-hearts-of-love/, a 38,606-byte app shell with no JSON-LD). Scripts and raw HTML are in /tmp/claude-0/-home-user-beastlyfactss/c6c3a501-5606-5a8b-b8c9-191dbbf9547e/scratchpad/eeat-other/.

## Dates and site numbers (content-dates-claims)

### content-dates-claims-0: Five articles are dated before the domain existed

- **Kind / severity:** problem, high (checker says low)
- **Status:** Checked (repro: confirmed, impact: partly)
- **Claim:** Five published articles carry a publish date earlier than the registration of beastlyfacts.com, and they show that date to visitors in the byline and to Google as datePublished. Six articles also predate the site's own welcome post, which is dated 2026-06-01.
- **As checked:** The claim reproduces as stated. Five of the 857 published MDX files (all of content/ except content/_scheduled-*) carry a frontmatter date earlier than the 2026-05-18 registration of beastlyfacts.com. They are reptile-shedding-complete-guide 2026-04-05, uvb-lighting-complete-guide 2026-04-12, ball-python-feeding-guide 2026-04-26, leopard-gecko-temperature-guide 2026-05-03 and crested-gecko-humidity-guide 2026-05-10. Visitors see each date in the article byline on both mobile and desktop, and it also shows on related-article cards on other pages. Google gets the same date as JSON-LD datePublished and article:published_time. Six articles are dated before the welcome post's 2026-06-01: those five plus the axolotl article (2026-05-23). That count is correct, but it is weak evidence of a defect on its own. The welcome post itself says the site was "a handful of care guides and some fun facts" when it was first written, and the axolotl date is later than the domain registration. The five dates have a stronger origin than the finding states. All five files first entered the repo on June 19 at 02:12 (2026-06-19T06:12:16Z) with dates in 2025 ("2025-04-05" and so on). Commit 733c3bd on Sept 7 at 11:10 changed only the year to 2026. So the dates are converted placeholders, not real ship dates.
- **Scope:** 5 articles (each visible to visitors on mobile and desktop, plus JSON-LD and OG meta), and the welcome-post timeline sitewide
- **Fix (owner-decision):** This is the owner's call: only the owner knows when these five actually went live. If the owner does not know, use a defensible floor, such as the site's launch date, rather than the registration timestamp. Change only `date` in those five MDX frontmatters, using a US Eastern date. Leave lastUpdated and lastReviewed alone. Then run sync-articles so the generated meta follows. Rotation numbers are unaffected. Leave the axolotl article and the welcome post alone; neither needs a change. The dead file src/lib/data/blog.js is what the placeholder dates were copied from. Deleting it would stop them being copied again, but that is a separate, unrequested change, so ask the owner first. A hardcoded 2026-05-18 floor in check-publish-dates.mjs is optional and only catches this one case. Backdating to any date after May 18 would still pass, and a real check against first-commit dates is not reliable in shallow cloud clones. If the owner wants a guard, a launch-date floor is the cheapest one, but it is not required to fix the issue.

### content-dates-claims-1: Corrected pages never say they were corrected, and 8 carry dates older than the fix

- **Kind / severity:** problem, high (checker says medium)
- **Status:** Checked (repro: partly, impact: partly)
- **Claim:** The corrections log lives only on /how-guides-are-made/. None of the corrected articles shows a correction note or links to its log entry. On 8 of the 36 corrected blog articles, both the visible 'Last reviewed' date and the dateModified sent to Google are earlier than the date the log gives for the correction.
- **As checked:** The no-note half holds. corrections.js has 41 entries on 40 distinct pages. 36 entries are blog entries, on 35 distinct /blog/ pages, because bearded-dragon-feeding-guide is logged twice. /blog/exotic-pet-legal-hub/ 301s to /exotic-pet-laws/, so 34 blog pages are live, plus 5 non-blog pages (/facts/ and four /guides/ hubs). None of the 39 live pages shows a correction note in the body, and none links to /how-guides-are-made/ outside the footer. CORRECTIONS is imported only by src/pages/HowGuidesAreMade.jsx.

The date half is overstated. On 8 pages, both the dateModified and the visible "Last reviewed" date fall before the log's date. But git history shows only 5 of those pages carry a date older than the actual fix:
- axolotl-legal-guide: fixed 2026-10-16 02:01, serves 2026-10-08 and "Last reviewed 8 Oct 2026".
- sugar-glider-legal-guide: fixed 2026-10-16 02:01, serves 2026-10-02.
- budgie-feeding-guide: fixed 2026-10-16 01:57, serves 2026-10-03 and "Last reviewed 16 Sep 2026".
- chinchilla-tank-setup-guide: fixed 2026-10-06 00:34, serves 2026-09-25 and "Last reviewed 19 Jul 2026".
- fire-bellied-toad-handling-guide: fixed 2026-10-06 00:27, serves 2026-09-25 and "Last reviewed 15 Sep 2026".

The other 3 pages have accurate dates, and the log date is the later one:
- platy-tank-setup-guide and neon-tetra-health-issues-guide were fixed 2026-09-25 15:23 and serve 2026-09-25, but the log says Oct 4.
- uvb-lighting-complete-guide was fixed 2026-09-24 22:26 and serves 2026-09-25, but the log says Oct 2.

The public log already says early entries are "dated to the day the fix went live or was recorded as done". The visible "Last reviewed" line sits in the Sources block, and the byline shows only the publish date. So a visitor on mobile or desktop sees no updated date at all. Google sees the stale dateModified and the matching sitemap lastmod.
- **Scope:** 36 corrected articles (no note on any of them), 8 of them with dates that understate the change; visible to visitors on mobile and desktop and to Google via dateModified and sitemap lastmod
- **Fix (code):** 1. Now, as a content-only change: set lastUpdated on the 8 MDX files and on budgie-tank-setup-guide.mdx to their correction dates. Use the log's date, not today, and do not touch lastReviewed, because a correction is not a source review. This follows RULES.md:186. The sitemap and dateModified follow on the next deploy.
2. Note on articles: extend the pattern Sources.jsx already uses for REVIEWS. It filters by pathname at src/components/mdx/Sources.jsx:105-108; do the same with CORRECTIONS. Render a short "Corrected <date>" next to "Last reviewed", linking to the log. Do not print the log's `now` text verbatim: it is written for the log and refers to other pages ("The map already said both", "matching the other parrot guides").
3. Deep links: to link a specific entry, log items need ids. HowGuidesAreMade.jsx:111 has none, and only the first month's `<details>` opens by default (line 99). So add ids and open the month on hash, or link with a filter query the page reads.
4. Hubs and facts: /guides/ hubs (GuideDetail.jsx) and /facts/ need their own render path, because Sources.jsx only covers MDX articles.
5. Build check: a check that fails when a /blog/ page's lastUpdated is earlier than its newest correction is proportionate and fits the existing check-publish-dates.mjs. It only covers the page an entry names, though, so pages changed alongside it (budgie-tank-setup) still rely on the RULES.md:186 habit.

### content-dates-claims-2: 108 guide hubs carry no date anywhere

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Every species care guide hub under /guides/<id>/ ships Article JSON-LD with no datePublished or dateModified and shows no updated or reviewed date to readers. That includes hubs the corrections log lists as corrected.
- **Scope:** All 108 care guide hubs, the site's main pages; affects visitors (no freshness signal) on mobile and desktop and Google (no Article dates, no sitemap lastmod)
- **Fix (code):** Add a reviewed/updated date field to each guide object, render it under the hub title, emit it as datePublished/dateModified in the GuideDetail Article JSON-LD, and write it as <lastmod> in generate-sitemap.js.

### content-dates-claims-3: Homepage counts call breeds and generic hubs 'species', and '108+' overclaims

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The homepage's guide and profile counts include dog and cat breeds and five generic dog and cat hubs under the word 'species'. GuideSpotlight also appends '+' to an exact count, so '108+ species guides' overstates what exists.
- **Scope:** Homepage: 4 visible sentences (mobile and desktop) and 3 meta tags that Google uses for the snippet
- **Fix (code):** Change GuideSpotlight to "A rotating pick from 108 care guides" (no '+'), and say "care guides" / "animal profiles" rather than "species" wherever the count includes breeds.

### content-dates-claims-4: 'Last reviewed' dates are bulk-stamped, which contradicts the public definition

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The site publicly defines the review date as the last day the owner reread the whole piece against its sources. The data shows the date stamped in batches and, at least once, aligned to match a set rather than an actual reread.
- **Scope:** 837 articles show the line (visible on mobile and desktop); lastReviewed is not used for dateModified while lastUpdated is present (docs/RULES.md:15-16)
- **Fix (owner-decision):** Either stamp lastReviewed only when the owner has reread the whole page, or change the /how-guides-are-made/ wording to say what the date actually records, for example the last full check, including agent-assisted passes.

### content-dates-claims-5: 148 articles share one publish date, and at least one was re-dated backward

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Publish dates come in large bursts that the owner's own 4 to 5 per day rule forbids. One article in the largest burst is on record as carrying a different, later date after the date it now shows.
- **Scope:** 148 articles in one day and 628 in burst days; visible in bylines and /blog/ listings (mobile and desktop) and in datePublished
- **Fix (owner-decision):** Record each article's true first-deploy date. If the 2026-09-04 batch genuinely shipped that day, note the batch in the docs; otherwise correct the dates. Either way, keep future batches in content/_scheduled-* and release 4 to 5 per day.

### content-dates-claims-6: '400+ deep dives' undercounts by 100 or more

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** By the code's own definition, the deep-dive series now has about 509 articles, or 605 with enrichment guides. The homepage still says 400+, and /how-guides-are-made/ describes the site as 'a hundred-plus pages'.
- **Scope:** Homepage (3 meta tags and 2 visible lines) and one sentence on /how-guides-are-made/
- **Fix (code):** Compute the count from the articles index (the standard series suffixes) instead of hard-coding it, and change the How guides sentence to 'across hundreds of pages'.

### content-dates-claims-7: llms.txt lists 77 of 108 guides and has two redirecting links

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The site's machine-readable summary for AI crawlers is stale. It omits 32 current guides and the legal section, links two URLs that 301-redirect, and names the mascot 'Dexter' where the About page says 'Dex'.
- **Scope:** 1 file, read by AI crawlers only; not visible to visitors or used by Google ranking
- **Fix (code):** Generate llms.txt at build time from guides-index.json plus fixed sections for legal, Beastlypedia and Chronicles, and use 'Dex' throughout.

### content-dates-claims-8: Legal pages claim every entry quotes the statute; 311 of 4,264 do not

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The legal map and state index say every entry quotes the statute or regulation itself. The data has no quote on 311 entries, 21 of them restricted (banned, permit, conditional or unclear) rather than plain 'legal'.
- **Scope:** Legal map and state index copy (visible on mobile and desktop) and one meta description; 21 restricted entries rest on reasoning without a quote
- **Fix (content):** Reword the claim to "every restriction cites the statute or regulation", and add the quoted closed-list text to the 21 restricted entries.

### content-dates-claims-11: Small date-hygiene slips

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** A few individual date fields are malformed or inconsistent: one non-ISO date, one review dated before its publish date, and 20 articles with no review date.
- **Scope:** 22 articles; the review line is visible on mobile and desktop
- **Fix (content):** Normalize the Dex Part 2 date to "2026-06-27", set snake-brumation lastReviewed to 2026-07-02 or later, and have check-publish-dates.mjs reject non-ISO dates and any lastReviewed earlier than date.

### content-dates-claims-9: Most counts and date guards come straight from the data

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** Most of the site's own numbers are computed from source data and match it. The site has no future-dated content, and the footer year is current.
- **Scope:** Site-wide counts on the homepage, facts, legal and quiz pages

### content-dates-claims-10: Public corrections log with was/now/why and a permanent-entry policy

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** The site keeps a real, dated corrections log and an honest outside-review register. Both are reachable from every page through the footer and from About.
- **Scope:** /how-guides-are-made/ and the footer of every page

*Could not check:* 1) Whether any page existed before 2026-05-18 (for example on another domain), and the true first-deploy dates of the 148 articles dated 2026-09-04: web.archive.org was unreachable. curl's CDX query failed with a connection reset, and WebFetch said it could not fetch from web.archive.org. Git history is shallow: the first commit is 2026-10-12 10:31 UTC, so frontmatter dates cannot be checked against commits. 2) I made no rendered or mobile screenshots, since an external browser cannot load the live site here. My statements about what visitors see come from the prerendered HTML text and component class names, not from viewing pages. 3) I did not reconcile the /blog/ sidebar category counts (they total 931 because articles sit in several categories) or the sitemap's 802 /blog/ URLs against 821 non-story articles; that belongs to the SEO lane. 4) I did not audit per-article numeric claims, such as the '30 Bans, 9 Permit States' title counts, against legalStatus.json. 5) The corrections log says its entries before 2026-10-15 are dated to when a working doc recorded them, so for 5 of the 8 date-lag cases I could not establish the exact day each fix went live.

## Sources (content-sources)

### content-sources-0: 301 source links point at bare homepages, including in both model articles

- **Kind / severity:** problem, high
- **Status:** Not checked yet
- **Claim:** RULES.md bans homepage sources, but 301 of the 3,368 linked Sources entries (8.9%) point at a site root. They sit in 249 of the 815 articles that have a Sources block. 281 of the 301 use the same pattern: the link goes to the homepage and the real page titles follow as plain text, so a reader cannot open the page that actually holds the claim. In 8 articles every source is a homepage. Both articles RULES.md names as models do this.
- **Scope:** 249 of 815 sourced articles (301 entries). Visitors see it in the Sources block on mobile and desktop. The "N sources" line undercounts these articles, for example "1 source" for seven consulted pages.
- **Fix (content):** Replace each "[Publisher](homepage): Title; Title" line with one bullet per page, each linking that page's real URL. Add a guard to scripts/check-source-links.mjs that fails when a Sources link has an empty or "/" path.

### content-sources-1: Legal state pages show visitors AI tooling notes ("refuses curl from this container")

- **Kind / severity:** problem, high
- **Status:** Not checked yet
- **Claim:** Some legal source notes and jurisdiction notes still contain the researcher's tooling log: "this container", curl, WebFetch, "this sitting", and an internal repo path. They render as "How this rule works:" prose inside the expandable animal rows on six live state law pages. A reader checking a legal answer sees that the rule text was read by an automated agent that could not reach the official site. The same text is in the prerendered HTML Google indexes.
- **Scope:** 6 live state pages (OK, KS, CT, DE, MI, TN), 182 jurisdiction entries whose source note is affected plus 19 entries with their own affected note. Visible on mobile and desktop once a row is expanded, and in the HTML Google crawls.
- **Fix (content):** Rewrite the 29 notes so they state only the legal substance and the citation, for example "read from Cornell LII's copy of OAC 800:25-25-3". Move tooling and provenance detail to a non-rendered field such as researchNote. Add a check that fails on /container|curl|WebFetch|this sitting|docs\// in any rendered legal note.

### content-sources-2: 35 of 84 cost guides cite price-listicle sites, one of them an AI pet-portrait app

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** RULES.md says Sources are for facts, not prices. A source must be a vet, university, government, manufacturer spec or husbandry reference. Even so, 47 Sources entries in 35 of the 84 cost guides are "how much does X cost" pages from affiliate listicle sites, seller blogs and an AI product company. On the mouse cost guide, 2 of the 4 sources are Clawmate and The Vet Desk price pages.
- **Scope:** 35 of 84 cost guides (47 entries). Visible in Sources on mobile and desktop.
- **Fix (content):** Drop the price-listicle entries from the cost guides' Sources blocks. The cost tables already print "Typical price ranges across retailers", so they need no citation. Keep only entries that support a non-price fact, and replace those with a vet, government or husbandry page.

### content-sources-3: Six citations are for-sale product listings, and one is now a 404

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** RULES.md explicitly bans retailer product pages and for-sale listings as sources. Six Sources entries in five articles are exactly that, and the TikisGeckos listing cited by the mourning gecko cost guide now returns 404.
- **Scope:** 5 articles (6 entries). Visible in Sources on mobile and desktop.
- **Fix (content):** Remove all six. If a non-price fact depended on one of them (for example a size or locality detail), source that fact from a husbandry or academic page, or cut it.

### content-sources-4: About one in six sourced articles cites retailer blogs or affiliate content sites

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Outside the cost-guide price pages, 208 Sources entries (6.2% of 3,368) come from stores with shopping carts or from affiliate content sites. They appear in 149 of the 815 sourced articles. RULES.md limits sources to vet, university, government, manufacturer spec or established husbandry reference. Hepper is a pet-furniture brand. Whether Aquarium Co-op's care articles count as an "established husbandry reference" is the owner's call, and it accounts for 57 of these entries.
- **Scope:** 149 of 815 sourced articles (208 entries), concentrated in fish, shrimp and invertebrate guides. Visible in Sources on mobile and desktop.
- **Fix (owner-decision):** Decide whether seller-run care sheets (Aquarium Co-op, Zen Habitats' republished ReptiFiles sheets) count as husbandry references and write that into RULES.md. Then replace the affiliate content-site entries with vet, academic or husbandry pages, citing ReptiFiles directly instead of the Zen Habitats republications.

### content-sources-5: 265 articles fall below the 4-source target, and 5 roundups have no Sources at all

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** RULES.md sets 4 to 5 linked sources as the target. 265 of the 815 sourced articles (32.5%) carry fewer than 4 linked entries: 12 have exactly one and 69 have two. Separately, 5 of the 24 published species overview roundups ship with no Sources block at all while stating specific measurements.
- **Scope:** 265 of 815 sourced articles below target. 5 of 24 overview roundups unsourced. Visible to visitors on mobile and desktop.
- **Fix (content):** Start with the 12 one-link and 5 zero-source articles. Add specific vet, academic or husbandry pages that state the figures already in the text, or cut the figures that cannot be sourced.

### content-sources-6: Encyclopedia and Beastlypedia entries cite nothing, so 79 hub size and lifespan rows have no source

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The encyclopedia entries (which share a page with the care-guide hubs) and the Beastlypedia wild-animal entries carry no source links at all. The hub data says adult size and lifespan come from the encyclopedia entry, which no deep dive repeats. Those 79 hub rows link to nothing, and their figures trace to a page with no citations.
- **Scope:** 103 encyclopedia entries, 43 Beastlypedia entries, and 79 hub rows. Visible on mobile and desktop.
- **Fix (code):** Give each encyclopedia and Beastlypedia entry a short sources list, for example a `sources: [{title,url}]` field rendered under the facts. Start with the size and lifespan figures the hubs reuse.

### content-sources-10: About 287 legal entries rest on third-party copies of the law, not the official text

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** Despite the primary-sources-only rule, the sources for whole states point at copies of the law hosted by others: animallaw.info, oregon.public.law, lawserver, FindLaw and Onecle. This covers Arizona, Tennessee, Delaware, Wisconsin, Michigan, Nevada and Oregon. Some official sites block automated access, but Delaware's official code page loaded fine from here.
- **Scope:** About 287 of 4,264 legal entries across 7 states. The source link is visible to visitors.
- **Fix (content):** Point de-903 at regulations.delaware.gov. For the others, keep the reproduction as a secondary link only, and add the official URL as the primary `url` once it is checked from a desktop browser.

### content-sources-11: 53 articles run over 5 sources without the required note, and the rulebook's overrun list is stale

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** RULES.md asks for an MDX comment above <Sources> whenever an article goes over the 4 to 5 target. 53 of the 87 articles over 5 links have no such comment, 28 of them legal guides. Meanwhile the five articles RULES.md names as known overruns have since been trimmed to 4 or 5, so the documented list no longer matches the content.
- **Scope:** 53 articles, plus docs/RULES.md. Only the authors see the comment, but over-long lists are visible to readers (collapsed after 6, per src/components/mdx/Sources.jsx SOURCES_VISIBLE = 6).
- **Fix (content):** Update the overrun list in RULES.md:92-98 to the current counts. Either add the one-line justification comment to the 53 articles, or exempt legal guides by rule, since statute-by-statute citation is their purpose.

### content-sources-8: Legal data cites a primary source and a check date for all 4,264 entries

- **Kind / severity:** strength, high
- **Status:** Not checked yet
- **Claim:** Every one of the 4,264 animal-by-jurisdiction legal entries has a sourceId that resolves and a verifiedOn date. 3,953 also quote the operative wording verbatim. Most of the 276 sources are official government or legislature URLs, and the state pages tell visitors so in plain words.
- **Scope:** The legal hub, map, 50+ state pages and per-animal legal pages. Visible on mobile and desktop, and in the crawled HTML.

### content-sources-7: Every sourced hub row links its deep dive, and no slug is dangling

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** The care-guide hubs carry no external citations of their own by design. Instead, 1,345 of 1,424 first-week rows name the deep dive each figure was copied from. Every one of those slugs resolves to a published article, and the page renders it as a visible link next to the row, so a reader is one click from the article's Sources.
- **Scope:** All 11 hub data files and every /guides/<species>/ hub. Visible on mobile and desktop.

### content-sources-9: Most sources are high quality, and no dead links turned up in a 165-URL sample

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** Two thirds of all linked sources are papers, government, university or museum pages, statutes, or veterinary references. No article cites the same URL twice. Seeded random samples of 15 and then 150 distinct source URLs found no 404s. The only dead source found came from the product-page check above, not from the samples.
- **Scope:** Site-wide, 815 sourced articles. Visible on mobile and desktop.

*Could not check:* I could not check whether each cited page actually contains the specific claim it supports. Beyond the status code and page title, that needs reading every page against the sentence it backs, and it applies to all 3,368 entries.

Some sites block automated requests, so their content went unread:
- hepper.com, articles.hepper.com and vety.com return 403 to both curl and WebFetch. Hepper's commercial status comes from a WebSearch result, not its own pages.
- 14 of the 150-URL sample sat behind bot walls (Cloudflare, Akamai, Incapsula), so I could not tell whether those pages exist or say what they are cited for.

I did not check for AI-generated content except where a site said so itself (Clawmate's own copy). I made no AI-generation judgment about thevetdesk.com, biologyinsights.com, a-z-animals.com or the others. My vet/academic/government tiering (66%) uses hand-built domain lists, so treat it as approximate.

I did not run a full link check on all 1,988 distinct URLs, only samples of 15 and 150. scripts/check-source-links.mjs exists for the full run but is not part of the build.

Fact-card sources (facts.js, \"fact source is a button\") and Beastle were outside the files I audited.

The article JSON-LD carries no \"citation\" property: no match in the live HTML of bearded-dragon-feeding-guide or ackie-monitor-tank-setup-guide, and none in src/lib or prerender.mjs. I did not check whether adding one would matter to Google.

Every count comes from scripts in /tmp/claude-0/-home-user-beastlyfactss/c6c3a501-5606-5a8b-b8c9-191dbbf9547e/scratchpad/content-sources/ (parse.py, stats.py, home.py, classify.py, data.json). The full homepage-source list is homepage_sources.tsv in the same folder.

## Navigation structure (nav-surfaces)

### nav-surfaces-0: Invisible toast layer eats taps on the mobile header and on tablet bottom tabs

- **Kind / severity:** problem, high
- **Status:** Not checked yet
- **Claim:** An empty, invisible toast container sits above the site chrome on every page. On phones (under 640px wide) it covers the top 32px of the screen, so a tap on the center of the menu, search, dark-mode, logo or guide Back button does nothing. Only the bottom 12 to 14px of each control responds. Between 640 and 767px (small tablets in portrait) it moves to the bottom and covers the center of all four bottom tabs. Real visitors on phones and small tablets see this. Desktop users get a dead 420x32 strip at the bottom right.
- **Scope:** Every page site-wide. Phones: header search, menu, dark mode, the logo (home link) and the guide-hub Back button. 640 to 767px: all 4 bottom tabs. Desktop: a 420x32 strip at the bottom right.
- **Fix (code):** Add `pointer-events-none` to the ToastProvider and ToastViewport class strings in src/components/ui/toast.jsx (lines 9 and 18). Toasts keep `pointer-events-auto`, so they stay clickable.

### nav-surfaces-1: Guide hubs and encyclopedia entries send search visitors back to Google, and mobile guide hubs hide the home link

- **Kind / severity:** problem, high
- **Status:** Not checked yet
- **Claim:** Someone who lands on a species care-guide hub or an encyclopedia entry from a search result and presses 'Back to Guides', 'Back to Encyclopedia' or the mobile header 'Back' is taken off the site, back to the results page. On phones the guide-hub header also hides the logo, and neither the menu nor the bottom tabs has a Home item, so the only way to the homepage is the footer logo at the bottom of a page about 10,000px tall. Real visitors see this on both desktop (the in-page buttons) and mobile (the buttons plus the missing logo).
- **Scope:** 108 /guides/<id>/ plus 103 /encyclopedia/animal/<id>/ URLs in the live sitemap (211 of 1,327). These are the main search landing pages for pet owners.
- **Fix (code):** Use the Blog.jsx pattern in GuideDetail, EncyclopediaAnimal and MobileBackButton: call navigate(-1) only when the navigation type is PUSH, otherwise navigate('/guides/') or '/encyclopedia/'. Also keep the logo visible on mobile guide hubs, for example by showing the Back button beside it instead of replacing it.

### nav-surfaces-2: Four 'facts' destinations with overlapping names, one of them a legacy duplicate

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Facts, Animal facts hub, Fact files, the 'Fun Facts' article topic and Gallery are five nav entries for three different things, and the names do not tell them apart. 'Fun Facts' points to two different places on the same page. /animal-facts/ is a thin legacy page whose title nearly duplicates /facts/ and which shows nine non-clickable keyword chips. Visitors on both desktop and mobile see the overlapping labels. Google sees two near-identical titles.
- **Scope:** Menu 'Learn something wild' group (5 items), footer 'Learn something wild' column (7 items), menu Article topics, and /categories/
- **Fix (owner-decision):** 301 /animal-facts/ to /facts/, then drop it from the footer and generate-sitemap.js. Rename the 'Fun Facts' topic label to 'Fact files' so one name means one place. Present Gallery as a view of Facts rather than a separate sibling.

### nav-surfaces-3: Encyclopedia, Care guides and Beastlypedia: two indexes share the 'Care Guides' name

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The nav lists 'Care guides' and 'Encyclopedia' as separate siblings. The /encyclopedia/ index, however, is titled 'Encyclopedia & Care Guides' and shares a tab toggle with /guides/, which is titled 'Care Guides'. A third profile set, Beastlypedia, sits in a different nav group. A visitor cannot tell from the labels which '-pedia' covers pets and which covers wild animals, or why a species has two pages. Visitors see this on both desktop and mobile. Google sees two index titles both claiming 'Care Guides'.
- **Scope:** /encyclopedia/, /guides/ and /beastlypedia/ indexes plus the menu and footer labels; 211 species URLs split across two trees
- **Fix (owner-decision):** Retitle /encyclopedia/ as a pet species encyclopedia, without '& Care Guides'. Label the nav items so the split is explicit, for example 'Pet encyclopedia' and 'Wild animals (Beastlypedia)'.

### nav-surfaces-4: Homepage and mobile chrome do not route to the legal tool, the store or quizzes

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The homepage body has no link to the exotic pet law tool or the care-package store. On mobile the header 'Laws' link is hidden, so from the homepage the legal tool takes three actions: open the menu, scroll inside it, tap 'Is it legal?'. Quizzes first appear about 10.8 screens down the mobile homepage. Real visitors see this, and it is worst on mobile. On desktop 'Laws' is one click from the header.
- **Scope:** Homepage on mobile, plus the mobile header and menu on every page
- **Fix (owner-decision):** Link 'the law' in the hero line to /exotic-pet-laws/, add a legal and store entry to the homepage 'Beastly Hub' block, and move the Tools group (Is it legal?, Search) to the top of the mobile menu.

### nav-surfaces-5: Mobile bottom tabs spend a slot on an empty My Pack and have no Home or Laws

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The four mobile tabs are Guides, Facts, Articles and My Pack. For a first-time visitor My Pack is an empty collection. No tab reaches the homepage or the legal tool, and on guide hubs the logo is hidden too. This affects real visitors on mobile only.
- **Scope:** Every page on mobile (under 768px)
- **Fix (owner-decision):** Replace the My Pack tab with Laws or Home, and leave My Pack in the menu and footer.

### nav-surfaces-6: Site search misses multi-word queries and never returns legal pages or facts

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Search matches the whole query as one substring, so natural queries like 'octopus hearts' or 'fennec fox legal' return 0 results even though matching pages exist. The index also leaves out all 137 exotic-pet-law pages and the 347 facts. The homepage 'Beastly Hub' box calls itself the place 'Everything on the site starts here' but searches article titles only. Real visitors see this on both devices. Separately, and only Google sees it, the WebSite SearchAction target answers with HTTP 404.
- **Scope:** /search/ on all devices, the desktop header popover, and the homepage hub search box
- **Fix (code):** Split the query into words and require every word to match (AND) in title, excerpt or tags. Add the /exotic-pet-laws/ animal and state pages to the local index. Point the homepage hub box at /search/.

### nav-surfaces-7: One destination, several labels and nav groups across header, menu, tabs and footer

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The same page often has different names depending on where it is linked from, and three items sit in different groups in the menu and the footer. Some page H1s match none of the nav labels. Visitors see this on both devices.
- **Scope:** Header, menu, bottom tabs and footer on every page
- **Fix (content):** Pick one label and one group per destination, use them on all four surfaces, and make the /blog/ H1 match the nav label or the other way round.

### nav-surfaces-8: Homepage first screen splits pet owners from wild-animal readers

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** The hero names both audiences and gives each a single CTA inside the first phone screen. The daily Beastle game, which serves the kid and player audience, appears about two screens down.
- **Scope:** Homepage, all devices

### nav-surfaces-9: Guide hubs fan out to every deep dive, the matching store package, laws and encyclopedia

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** A species hub works as a router to its own content cluster. This is how the store and the legal tool are reached from the pages search visitors actually land on.
- **Scope:** /guides/<id>/ hubs (sampled 1 of 108)

### nav-surfaces-10: Every nav destination resolves, and no route is orphaned by accident

- **Kind / severity:** strength, low
- **Status:** Not checked yet
- **Claim:** Every link on the header, menu, bottom tabs and footer returns 200 with no redirect hop, and so does every Article-topic link. The routes that no nav surface links are all deliberate.
- **Scope:** All nav surfaces

*Could not check:* Two limits on the testing: (1) I could not test real phones. The sandbox browser cannot open external sites, so I served the live HTML, CSS and JS unchanged through a localhost caching proxy and drove them with puppeteer's headless Chrome using touch emulation. iOS Safari and Android Chrome were not tested directly. The toast-overlay result follows from plain CSS (fixed, z-index 100, 32px of padding, no pointer-events rule) and from a measured tap failure, so I expect it to hold on real devices, but I did not watch it happen on one. (2) The 'Back' results used a fake search-results page on another localhost port, not Google itself. The mechanism (history.length counts entries from other sites) is the same. I had no analytics or Search Console data, so I cannot say which nav surfaces or tabs visitors actually use, or how many sessions are on 640 to 767px tablets. Positions in pixels come from rendering the prerendered HTML with JS off, so they can shift slightly once the page is interactive. Two things belong to other lanes and I did not chase them: /care-packages/store/ has no noindex and is left out of the sitemap, although generate-sitemap.js:199-205 says it carries noindex,follow (src/pages/CarePackagesStore.jsx:34-48 has no robots meta; I checked the live header with curl -I and the only x-robots-tag is max-image-preview:large). And /composer/login/ returns HTTP 404 live, which I left alone because it is an admin page no nav surface links to.

## Navigation behavior (nav-behavior)

### nav-behavior-0: Back to Guides and Back to Encyclopedia send search visitors back to Google

- **Kind / severity:** problem, high (checker says medium)
- **Status:** Checked (repro: partly, impact: partly)
- **Claim:** The labeled in-page back buttons on guide hubs and encyclopedia pages, and the mobile header Back button that replaces the logo on guide hubs, all run history back (navigate(-1)) instead of going to the page they name. For a visitor who clicked a Google result in the same tab, they leave the site. For an in-app arrival they go to whatever page came before, such as Home or an article, not to /guides/. The header Back has no guard at all, so in a fresh tab it does nothing. Visitors see this on both desktop and mobile: the in-page buttons appear on both, the header Back on mobile only.
- **As checked:** The core of the finding is real. A visitor who reaches a guide hub or encyclopedia page from a search result in the same tab and clicks "Back to Guides" or "Back to Encyclopedia" is sent back to the search page. This happens on desktop and on mobile, on all 108 guide hubs and all 103 encyclopedia animal pages. Three details need correcting.

(1) The handlers do not go straight to navigate(-1). They first follow location.state.returnTo (GuideDetail.jsx:75-79, EncyclopediaAnimal.jsx:59-63). Visitors who arrive from the /guides/ or /encyclopedia/ lists land on the list URL, which is correct. The wrong destination only affects arrivals with no state: search results, Home's GuideSpotlight, DeepDiveList, Gear, the care package pages and similar. A separate mislabel also exists: the cross-links between the two sections pass returnTo for the other section. As a result, "Back to Guides" after the encyclopedia's care-guide link goes to /encyclopedia/ (EncyclopediaAnimal.jsx:297), and GuideDetail.jsx:649 does the reverse.

(2) The mobile header Back calls navigate(-1) with no guard. In a true fresh tab (history.length 1) it does nothing. But it is also mostly covered by the Toaster's ToastProvider, a plain div styled "fixed top-0 z-[100] ... w-full p-4" (toast.jsx:6-12). On mobile this div covers the top 32px of the screen, while the button spans y 10 to 46. Taps at y 14 to 31, which includes the center of the "Back" label, hit the overlay and do nothing. Only taps at y 34 to 40 reach the button and return to the search page. The same overlay blocks the centers of the mobile logo, Search, dark mode and menu buttons.

(3) The in-page buttons fall back to /guides/ and /encyclopedia/ correctly in a fresh tab.
- **Scope:** 108 of 108 guide hub pages (sweep of all 1327 sitemap URLs: all 108 hubs serve the hidden-logo plus Go back header) and 103 encyclopedia animal pages
- **Fix (code):** Keep the existing returnTo branch in both handlers. It is deliberate: the hub/encyclopedia toggle forwards it so Back returns to the listing the reader started from.

In src/pages/GuideDetail.jsx:81 and src/pages/EncyclopediaAnimal.jsx:65, replace the `window.history.length > 1` guard with `location.key !== 'default'`. That stops history back only on an entry loaded fresh in the tab, which covers Google in the same tab, a new tab and a direct visit. Those cases then fall through to navigate('/guides/') or navigate('/encyclopedia/'). This two-line change removes the site exit, which is the part that matters.

Whether to also stop history back for in-app arrivals without returnTo (from an article or from Home) is a label/UX choice for the owner. Those visitors stay on the site. If the owner wants the label honored literally, drop the navigate(-1) branch entirely and push the named URL. Do not rewrite the handlers as plain "go to the named URL" without keeping returnTo.

In src/components/layout/MobileBackButton.jsx:24, use `onClick={() => (location.key === 'default' ? navigate('/guides/') : navigate(-1))}`. useLocation is already imported. Keep history back otherwise, because a bare "Back" is expected to behave like the browser's back.

Leave src/lib/hooks/useSwipeBack.js alone. An edge swipe is the browser-back gesture, so exiting to the referrer there is expected.

No build or content changes are needed.

### nav-behavior-1: No way home on mobile guide hubs except the footer

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** On a phone, the 108 care guide hubs hide the header logo. The mobile menu has no Home item, and the bottom tabs have no Home tab. The only link to / on those pages is the footer logo at the very bottom. Desktop is fine because the logo stays visible at md and up, and on every other mobile page the logo is visible.
- **Scope:** 108 guide hub pages, mobile only
- **Fix (code):** Keep the logo on mobile guide hubs: remove the isChildRoute logo swap and the centered Care Guide label at Navbar.jsx:192-218. The in-page Back to Guides row already covers going up.

### nav-behavior-2: 404 page has no site navigation, and /blog/ misses turn into the article listing

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Nonexistent URLs correctly return HTTP 404 with noindex. But the 404 page renders outside the app layout, so it has no header, menu, search, bottom tabs or footer. It offers only Go Home and Browse the Encyclopedia, even for a missed article or guide. From the code, once the app boots on /blog/<bad-slug>/, React Router matches /blog/:slug, finds no post and renders the Critter Digest listing with no not-found message. /guides/<bad>/ instead shows GuideDetail's 'Guide not found' card. Real visitors see this on both mobile and desktop.
- **Scope:** Every mistyped or removed URL. The /blog/ fallback affects any dead article slug.
- **Fix (code):** Move the catch-all route inside the AppLayout route (App.jsx:170 to before :169), and have Blog render <PageNotFound /> when a /blog/:slug resolves to no post.

### nav-behavior-3: 1,056 pages declare a breadcrumb trail that visitors never see

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Articles, guide hubs, encyclopedia pages and Beastfiles all emit BreadcrumbList JSON-LD, but none shows a visible trail. Visible breadcrumbs appear only on the 136 legal pages. A shared Breadcrumbs component already exists, built to take the same [name, path] array as breadcrumbSchema(), but only the three legal page components use it. Google's structured data policy asks that markup describe content visible to readers. Visitors also miss the 'where am I' cue that Google shows in the result they clicked, for example Care Guides > Ball Python > Feeding guide.
- **Scope:** 1056 of 1327 sitemap URLs. Visitors on mobile and desktop see the gap, and Google reads the markup.
- **Fix (code):** Render <Breadcrumbs trail={...}> from the same trail arrays in GuideDetail, EncyclopediaAnimal, BeastfileDetail and the Blog article view, in place of or above the current Back row.

### nav-behavior-6: Guide and encyclopedia cross-links leave the back button pointing at the wrong section

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** From a guide hub, the sidebar Encyclopedia card passes returnTo '/guides/'. On the encyclopedia page, 'Back to Encyclopedia' then goes to the guides index instead of the encyclopedia or the hub the reader came from. The mirror case also happens: from an encyclopedia page, the Care Guide card passes returnTo '/encyclopedia/', and 'Back to Guides' on the hub goes to the encyclopedia index. Visitors see this on mobile and desktop.
- **Scope:** 103 guide hubs and 103 encyclopedia pages, whenever the reader uses the cross-link
- **Fix (code):** Stop forwarding returnTo across the guide/encyclopedia cross-link, so each page's back control goes where its label says.

### nav-behavior-7: No skip link, unlabeled header nav, no aria-current in the top navigation

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** No page offers a skip-to-content link, and <main> has no id to target. The header <nav> has no accessible name, and each page has 5 or 6 unlabeled navigation landmarks. The desktop header links and mobile menu links mark the active section only visually. The bottom tabs and the legal breadcrumbs do set aria-current. The header Search and dark mode buttons are 32x32px and the menu button is 36x36px, which passes WCAG 2.2 AA (24px) but falls short of 44px. Only keyboard and screen reader users notice the landmark and aria-current gaps; the tap-target size affects mobile.
- **Scope:** All pages
- **Fix (code):** Add a visually hidden 'Skip to content' link as the first child in AppLayout, targeting id="main-content" on its <main>. Set aria-label="Main" on the header nav, and set aria-current="page" on Navbar links where linkActive() is true.

### nav-behavior-10: Section anchors only work for in-page clicks

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The On This Page table of contents scrolls smoothly, clears the fixed header and highlights the current section. But heading ids are assigned only in the browser, after load, so the served HTML has none. ScrollToTop deliberately ignores URLs with a hash, and no generic handler scrolls to one later, so a shared link to a section of an article or guide lands at the top. TOC clicks also do not update the URL or move keyboard focus. This affects visitors on both mobile and desktop who follow a shared section link. No in-content links currently use anchors.
- **Scope:** Every article, guide hub, encyclopedia and Beastfile page with a TOC
- **Fix (code):** In TableOfContents' scan, after assigning ids, scroll once to the element named by location.hash if it exists.

### nav-behavior-4: Breadcrumb JSON-LD is clean everywhere it appears

- **Kind / severity:** strength, high
- **Status:** Not checked yet
- **Claim:** Every BreadcrumbList on the site points at live, indexable URLs. Each trail ends at the page's own URL, no page has more than one BreadcrumbList, and on the legal pages the visible trail matches the JSON-LD exactly. Article trails follow the care guide hierarchy, and the 4-rung trails (592) match the 592 articles whose visible back button names the species hub. Google is the main beneficiary.
- **Scope:** 1192 pages

### nav-behavior-5: Articles, legal pages and the 404 already handle cold landings correctly

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** The article back button, the legal breadcrumbs and the 404 page's Go Back all tell a cold landing apart from an in-site click. They use history only when the app knows the previous entry is on the site, and otherwise go to an explicit URL. This is the pattern the guide hub and encyclopedia back buttons should copy. Visitors benefit on mobile and desktop.
- **Scope:** 802 articles, 136 legal pages, all 404s

### nav-behavior-8: Mobile menu keyboard handling, icon labels and bottom tab targets are solid

- **Kind / severity:** strength, low
- **Status:** Not checked yet
- **Claim:** The mobile menu closes on Escape and returns focus to its toggle. Tab and Shift+Tab wrap inside the menu, and an outside click closes it. Every icon-only header button has an aria-label, and the toggles expose aria-expanded. The bottom tabs are 56px tall and a quarter of the viewport wide, each with a text label, an aria-label and aria-current. Visitors benefit on mobile, and keyboard users on all sizes.
- **Scope:** All pages

### nav-behavior-9: Scroll restoration on back and forward is handled well

- **Kind / severity:** strength, low
- **Status:** Not checked yet
- **Claim:** A new page starts at the top, while back and forward return to the position saved for that history entry. Restoration retries each frame for up to 3 seconds while lazy content grows, stops as soon as the reader scrolls or taps, and survives a reload through sessionStorage. Visitors benefit on both mobile and desktop.
- **Scope:** All pages

*Could not check:* Headless Chromium cannot load the live site from this sandbox (TLS interception), so every client-side behavior was derived from code, not observed in a browser. That covers: history.length after a real Google click, what the back buttons actually do, the hydration fallback that turns /blog/<bad-slug>/ into the listing after the 404.html is served, focus movement in the mobile menu, rendered tap-target pixel sizes, and whether the custom edge-swipe in useSwipeBack.js doubles up with iOS Safari's native swipe-back. I did not run a local dev server, because Vite writes its cache into the repo's node_modules and this lane is read-only. I had no Search Console or analytics access, so I could not say what share of guide hub or encyclopedia visits are cold landings from search. Breadcrumb checks covered all 1327 sitemap URLs fetched on Oct 19, 2026 (6 transient connection resets were retried and returned 200). Pages outside the sitemap (noindex routes such as /pack/, /search/ and /donate/success/) were not swept.

## Indexing (seo-crawl)

### seo-crawl-1: Encyclopedia and guide category pages duplicate each other and are the thinnest URLs in the sitemap

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Each of the 11 /encyclopedia/category/<x>/ pages lists the same species as its /guides/category/<x>/ twin under a near-identical title, and the encyclopedia versions carry only 82 to 142 words of main content. Both sets of 11 are submitted in the sitemap and self-canonical, so Google gets 11 pairs of near-duplicate listing pages competing for '<group> care guides'. The two hubs repeat the pattern: /encyclopedia/ is titled 'Encyclopedia & Care Guides' and /guides/ 'Care Guides'.
- **Scope:** 22 category URLs (11 pairs) plus the /encyclopedia/ and /guides/ hubs
- **Fix (code):** Keep /guides/category/<x>/ as the indexable listing: give the 11 /encyclopedia/category/<x>/ pages noindex,follow in Encyclopedia.jsx and drop them from staticPages in generate-sitemap.js (line 270).

### seo-crawl-2: /animal-facts/ is a legacy keyword page competing with /facts/ and linked sitewide

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** /facts/ and /animal-facts/ target the same query with near-identical titles and H1s. /animal-facts/ is an older page that renders a visible keyword list and unsourced bullet facts, has 2 outbound links, sits at sitemap priority 0.9, and is linked from every page's footer as 'Animal facts hub' directly under 'Facts'. Visitors on mobile and desktop see two footer links that seem to lead to the same thing, and Google sees two indexable hubs for 'fun animal facts'. The other fact-type index pages (/fact-files/, /beastlypedia/, /animal-days/) have distinct titles and intent. /gallery/ is noindex and not in the sitemap.
- **Scope:** 2 index pages; footer link on all 1327 pages
- **Fix (owner-decision):** Retire /animal-facts/: 301 it to /facts/ in public/_redirects, remove it from the footer, staticPages and the isHighFreq list in generate-sitemap.js.

### seo-crawl-3: Legal section: three hub URLs and 82 animal pairs share one search intent

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Three indexable hubs all open their title with 'Exotic Pet Laws by State:', and two of them share the same H1. Separately, each of the 82 animals in the legal matrix has two indexable, cross-linked pages answering 'is X legal in my state': /exotic-pet-laws/<id>/ and /blog/<id>-legal-guide/. Their body text is distinct, so this is not duplicate content. The risk is that Google splits impressions between near-synonymous titles. I could not confirm whether that is happening because Search Console is not available here.
- **Scope:** 3 hub URLs and 164 animal-level URLs
- **Fix (code):** Give the three hubs distinct titles and H1s by job (overview, map, pick a state). Lead the map with 'Interactive map' and the state index with 'Pick a state'. Leave the 82 pairs as they are until Search Console shows whether one URL of a pair is suppressing the other.

### seo-crawl-4: 40 listing pages reuse the parent H1 and a slot-in-the-name description

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Category and group listing pages keep the section's generic H1 instead of naming the category, and their meta descriptions are one template with the category name swapped in. Visitors on mobile and desktop land on a 'Reptiles' page whose heading reads 'The Critter Digest'. Google gets 16 blog category descriptions that differ by one word. On the Wild Animals page the template reads 'care guides, deep dives, pet laws, wild animals and more', and two slug-derived titles read 'Small And Exotic Pets Articles' and 'Turtles And Tortoises Articles'.
- **Scope:** 16 blog categories, 8 fact categories, 5 Beastlypedia groups, 11 encyclopedia categories
- **Fix (code):** Render the category name in the H1 on these listing pages, keeping the section name as a kicker above it. Add a written description map for blog and fact categories, as categoryDescriptions.js does for guide categories, with labels taken from the real category names rather than the slug.

### seo-crawl-6: 525 sitemap URLs have no lastmod, including 136 legal pages that do carry real verification dates

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** Only the 802 article URLs carry lastmod. The 108 guide hubs, 103 encyclopedia profiles, 83 legal animal pages, 53 state pages, 43 Beastfiles and 38 Chronicles parts have none. For the legal pages this wastes a real signal. Every jurisdiction entry has a verifiedOn date, and 52 of 53 state pages already show visitors a 'Last reviewed' line, but Google gets no hint from the sitemap when those time-sensitive pages are re-verified.
- **Scope:** 525 of 1327 URLs; 136 legal pages are the ones with data ready
- **Fix (code):** In generate-sitemap.js, emit lastmod for each /exotic-pet-laws/<id>/ and /exotic-pet-laws/state/<slug>/ URL from the newest verifiedOn among its entries, and for each Chronicles part from its MDX date.

### seo-crawl-8: /care-packages/store/ is indexable but left out of the sitemap, contradicting the sitemap's own note

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** generate-sitemap.js says the store page carries noindex,follow and leaves it out for that reason, but the page component sets no robots tag. The live page is indexable, linked from 21 sitemap pages, and missing from the sitemap. It is the only one of 115 prerendered routes outside the sitemap that is indexable; the other 114 are noindex.
- **Scope:** 1 page
- **Fix (code):** Add <meta name="robots" content="noindex,follow" /> to the Helmet in CarePackagesStore.jsx, matching the sitemap note and the FAQ and Why We Exist pages.

### seo-crawl-9: Encyclopedia and Beastfile snippets end mid-sentence; Beastlypedia titles misspell the brand

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** Most encyclopedia profile and Beastfile meta descriptions are cut at a word boundary with an ellipsis, so search results show a broken sentence. Encyclopedia titles all follow a generic 'X - Encyclopedia' pattern, and every Beastlypedia title spells the brand 'BeastlyFacts' while the rest of the site uses 'Beastly Facts'.
- **Scope:** 93 descriptions, 103 encyclopedia titles, 50 Beastlypedia titles
- **Fix (content):** Add a hand-written metaDescription field (150 to 160 characters, complete sentences) to the encyclopedia and Beastfile data and use it before the truncated overview. Change 'BeastlyFacts' to 'Beastly Facts' in BeastfileDetail.jsx:108 and Beastlypedia.jsx:81-82.

### seo-crawl-10: Quiz and game pages in the sitemap prerender as near-empty start screens

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** Measured by words of prerendered <main> text, 38 of 1327 sitemap URLs are under 300 words. Every one is a listing, a quiz or a game, not an article. The weakest are the 8 quiz detail pages, which give Google only a title, a 'Start Quiz' button and a list of study links, because the questions load client-side. Content pages are healthy: articles start at 673 words, guide hubs at 1044, encyclopedia profiles at 1017 and legal animal pages at 1031. Beastfiles are the lightest content type (min 333, median 463).
- **Scope:** 8 quiz pages plus 3 app pages; listing pages covered in other findings
- **Fix (code):** Prerender each themed quiz's question list (questions plus the source page each answer comes from) below the start button, so the static HTML carries the substance the description promises.

### seo-crawl-11: http://www requests take three hops to reach a canonical URL

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** Host normalization is chained, not direct. http://www goes to https://www, then to the apex, then to the trailing-slash URL. Everything still resolves, but the link equity of old www or http backlinks passes through extra hops.
- **Scope:** Requests to www or http variants
- **Fix (external-settings):** In Cloudflare, make the www rule a Single Redirect that matches both schemes (http and https on www.beastlyfacts.com) and sends them straight to https://beastlyfacts.com with the path kept, so it fires before Always Use HTTPS adds a hop.

### seo-crawl-0: Sitemap is clean: 1327 of 1327 URLs are 200, self-canonical, indexable and unique

- **Kind / severity:** strength, high
- **Status:** Not checked yet
- **Claim:** robots.txt lists one sitemap (https://beastlyfacts.com/sitemap.xml, 1327 URLs, 456,542 bytes). Every listed URL answers 200 directly with no redirect, its canonical and og:url equal the sitemap loc, none carries noindex, each has exactly one head title, one meta description and one H1, and no two of the 1327 share a title or a description. The sitemap blog set matches content/ exactly, and every image entry resolves.
- **Scope:** All 1327 sitemap URLs

### seo-crawl-5: Article lastmod tracks editorial changes, not build time

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** For articles, sitemap lastmod comes from the frontmatter lastUpdated, falling back to the publish date. It matches the page's own JSON-LD dateModified, and it is not restamped on deploy. Static and listing pages deliberately carry no lastmod instead of a fake build date.
- **Scope:** 802 article URLs

### seo-crawl-7: Redirects are single-hop and URL normalization is tight

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** Every redirect rule lands on a 200 in one hop, slashless and index.html URLs reach the canonical in one 308 hop, query strings and double slashes canonicalize to the clean URL, and every internal page link is already lowercase with a trailing slash, so internal navigation never triggers a redirect.
- **Scope:** Site-wide

*Could not check:* I could not check Google Search Console or Bing Webmaster data (no access). That means I could not confirm actual index coverage, whether Google has picked different canonicals, or whether the legal and fact-hub pairs are splitting impressions. Git history in the repo is shallow (80 commits, earliest 2026-10-12), so lastmod accuracy could only be checked against changes since that date. I did not check the client-rendered state Googlebot sees after hydration, such as the robots meta that queryRobots.js sets on ?page= URLs: headless Chromium cannot load the live site here (TLS interception), so all findings come from the prerendered HTML curl returns. Cloudflare zone redirect rules are not in the repo, so the www/http chain was observed live but its configuration was not read. Word counts are of the prerendered <main> text, which includes in-page chrome such as filter pills and related-link rows, so they overstate article length slightly. All scratch outputs are in /tmp/claude-0/-home-user-beastlyfactss/c6c3a501-5606-5a8b-b8c9-191dbbf9547e/scratchpad/seo-crawl/.

## Structured data (seo-structured)

### seo-structured-0: Article dateModified is a date no reader can see

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** On 533 of 802 live articles, BlogPosting.dateModified differs from the only modified-type date shown on the page (the 'Last reviewed' line in Sources). On 523 of them the structured date is later. The frontmatter lastUpdated feeds dateModified but is never rendered, so Google gets a freshness date that has no visible equivalent. Only Google sees this.
- **Scope:** 533 of 802 indexed articles (all page types under /blog/)
- **Fix (code):** Render a labeled 'Updated <lastUpdated>' next to the published date in the Blog.jsx header so the structured date has a visible twin, or set dateModified to lastReviewed. Optionally emit the dates with a -04:00/-05:00 Eastern offset.

### seo-structured-1: Guide hubs and encyclopedia: Organization author, no dates

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** All 108 care guide hubs and all 103 encyclopedia animal pages declare Article with author = Organization 'Beastly Facts' and no datePublished or dateModified. The 802 articles under them credit Person 'Michael Ryan'. These are the site's top species pages, and they give Google no author entity and no freshness date. They also show no byline or date to visitors. On 102 of 103 encyclopedia pages the headline carries the title-tag suffix, and the publisher has no logo. Only Google sees the markup. The missing visible byline and date affect everyone.
- **Scope:** 211 pages: 108 /guides/<species>/ hubs and 103 /encyclopedia/animal/<species>/ pages
- **Fix (code):** Use authorSchema() from src/lib/data/author.js for both Article blocks, add datePublished and dateModified from the guide data (with a visible 'Last reviewed' line to match), use PUBLISHER for publisher, and use the bare species title as the encyclopedia headline.

### seo-structured-2: 87 articles name a bare 'Mike' as author

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** 87 articles emit author {"@type":"Person","name":"Mike"} with no @id, url or sameAs. The visible author box on the same pages says 'Written by Michael Ryan'. The structured data therefore contradicts the visible byline and is not tied to the /about/ Person entity that the other 715 articles reference. Only Google sees this.
- **Scope:** 87 of 802 articles (dog/cat health and enrichment pages, the YMYL-leaning ones)
- **Fix (code):** In authorSchema(), treat 'Mike' as an alias of AUTHOR.name (or change the 87 frontmatter lines to 'Michael Ryan') so every article emits the same @id https://beastlyfacts.com/about/.

### seo-structured-3: Organization and publisher logo is a scenery photo

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The site-wide Organization.logo, and the publisher.logo on every BlogPosting and hub Article, is og-default.jpg: a 1200x630 landscape photo of a bearded dragon, a lorikeet and a kangaroo with no brand mark. Google uses this image to represent the brand. A real square logo (orange 'BF' bearded dragon roundel, 512x512) is already served at /pwa/icon-512.png. Only Google sees this.
- **Scope:** Site-wide: 1327 pages, plus publisher on 910 article and hub pages
- **Fix (code):** Point Organization.logo and PUBLISHER.logo (App.jsx:198, author.js:45, GuideDetail.jsx:310) at https://beastlyfacts.com/pwa/icon-512.png, or at a dedicated square logo file on a white or transparent background.

### seo-structured-4: Hero images sit 32 px under Discover's 1200 px minimum

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The house hero size of 1168x784 is just below Google Discover's large-image minimum width. 642 of 802 articles have an og:image and BlogPosting.image narrower than 1200 px (626 at 1168x784 and 10 at 512x382), so most articles are ineligible for large Discover cards. That holds even though the max-image-preview:large header is set correctly. Only Google sees this.
- **Scope:** 642 of 802 articles; 940 of 1327 pages overall
- **Fix (owner-decision):** Owner decision: either move the hero standard to at least 1200 px wide (e.g. 1200x800), or keep the on-page hero and export a 1200 px-wide og/schema variant per article for og:image and BlogPosting.image. Re-shoot or replace the 10 images at 512x382.

### seo-structured-5: Animal Days FAQPage marks up text not on the page

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** /animal-days/ emits a FAQPage with three hard-coded questions and answers that appear nowhere in the visible page. That breaks Google's rule against marking up invisible content. One answer also states a fact (International Rabbit Day is the fourth Saturday in September) that exists only in the markup. FAQ rich results no longer exist, so this gains nothing and carries only manual-action risk. Only Google sees this.
- **Scope:** 1 page
- **Fix (code):** Either render the three Q&As as a visible section on the Animal Days page or delete faqSchema from AnimalDays.jsx.

### seo-structured-6: og:image:width/height wrong on 752 pages

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** 752 of the 1247 pages that declare og:image:width/height declare the wrong size, usually 1200x630 for a 1168x784 image. The pages look up dimensions in a hand-maintained IMAGE_DIMENSIONS map that covers only 135 article images and fall back to 1200x630 for the rest. Meanwhile, accurate per-article dimensions already exist in the generated metadata. Facebook, LinkedIn and Discord share cards see this on mobile and desktop. Google does not.
- **Scope:** 752 of 1327 pages, mostly articles
- **Fix (code):** In Blog.jsx use post.imageWidth/post.imageHeight for the og tags. For hubs and encyclopedia pages, generate IMAGE_DIMENSIONS at build time from public/ instead of maintaining it by hand.

### seo-structured-7: Markup Google no longer uses: FAQ, HowTo, SearchAction

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** FAQPage runs on 828 pages and HowTo on 108 hubs, but Google has removed both rich results for every site, not just non-authoritative ones. The hub HowTo is really a table of contents: 554 of its 650 steps are links to other articles. The site-wide WebSite SearchAction points at a URL pattern that returns HTTP 404, for a feature Google retired in 2024. None of this is harmful (the FAQ answers are visible). It is dead weight, and the HowTo mislabels the hubs. Only Google sees this.
- **Scope:** 828 FAQ pages, 108 hubs, site-wide WebSite block, 20 listicles
- **Fix (code):** Drop the HowTo block from GuideDetail.jsx and the potentialAction from the WebSite block. Keep or drop FAQPage as the owner prefers (it is harmless where visible). Delete the dead factsListSchema code or feed it real list items.

### seo-structured-8: Site-wide identity tags: wrong X handle, split brand name

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** All 1327 pages set twitter:site to '@beastlyfacts', but the site's X account is @Beastly_Facts, and x.com/beastlyfacts answers like a nonexistent handle, so X cards credit no account. The WebSite JSON-LD names the site 'BeastlyFacts', while the Organization block, og:site_name, the home title and the web manifest all say 'Beastly Facts'. Google's site-name system asks for one consistent name. X sees the handle on mobile and desktop share cards. Only Google sees the WebSite name.
- **Scope:** Site-wide, 1327 pages
- **Fix (code):** Change index.html:101 to @Beastly_Facts and App.jsx:181 to 'Beastly Facts' (optionally adding alternateName 'BeastlyFacts').

### seo-structured-9: Store Product markup is honest and complete

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** All 20 care package pages carry Product markup with offers (price 8.99 USD, InStock), a merchant return policy that matches the published terms, and no review or rating markup anywhere on the site. There is no fake or self-serving review markup. Only Google sees the markup. The visible price matches it.
- **Scope:** 20 store product pages

### seo-structured-10: Clean JSON-LD and breadcrumbs site-wide

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** Every sitemap URL returns 200 and parses without JSON-LD errors. BreadcrumbList is valid wherever it appears. BlogPosting carries the fields Google recommends on every article, with no impossible dates.
- **Scope:** Site-wide

### seo-structured-11: Open Graph is unique per page and Discover-ready

- **Kind / severity:** strength, low
- **Status:** Not checked yet
- **Claim:** Every page has its own og:title, og:description and og:url, and og:url always equals the canonical. twitter:card summary_large_image is on every page. max-image-preview:large is sent as a response header on all HTML. Social platforms and Google both benefit.
- **Scope:** Site-wide

*Could not check:* Google's Rich Results Test, Search Console enhancement reports and the Facebook Sharing Debugger were not run: a browser cannot load external sites here, and no Search Console access exists. So I could not see which site name Google currently shows ('BeastlyFacts' or 'Beastly Facts') or whether any manual action exists. Whether x.com/beastlyfacts exists is inferred only from HTTP status codes calibrated against a made-up handle; X serves its profile pages through JavaScript. I did not check what a visitor sees at /search/axolotl/ after client-side hydration, only that the server returns 404. Visible store prices were checked on 3 of 20 product pages; the markup price was checked on all 20. For pages outside the 79-page sample, image dimensions were read from the files in public/ rather than downloaded live; 24 live downloads in the sample matched that method. I did not compare hub and encyclopedia descriptions against visible text beyond spot checks.

## First visit and privacy (visitor-privacy)

### visitor-privacy-0: Trackers load for everyone with no consent step, and the policy claims a consent flow that does not exist

- **Kind / severity:** problem, high (checker says medium)
- **Status:** Checked (repro: partly, impact: partly)
- **Claim:** Google Analytics (gtag.js), Ahrefs Web Analytics and the Cloudflare beacon run on every page for every visitor with no banner, no consent choice and no Consent Mode default, while the Privacy Policy tells visitors that hashed first-party data goes to Google Analytics 'with your consent' and separately invokes GDPR rights. No code sends hashed user data and no consent mechanism exists, so that bullet describes a practice and a choice the visitor never gets.
- **As checked:** Google Analytics (gtag.js), Ahrefs Web Analytics and the Cloudflare beacon do load on every page for every visitor. There is no banner, no on-site consent choice and no gtag('consent','default',...) call. Meanwhile the Privacy Policy says hashed first-party data goes to Google Analytics "with your consent" and invokes GDPR rights. That much is true. The part that is wrong is "no code sends hashed user data, so the bullet describes a practice the visitor never gets." The practice is switched on, but in the GA property's Google tag settings rather than in repo code. The live tag for G-L0T3V8PPP7 has automatic user-provided data collection enabled for email, phone and address, attached to form_submit, page_view and conversion events. It also has Google signals ENABLED with no region exclusions. The site has native email forms on the page: contact, newsletter, comments and the care package library. So the bullet describes a practice that is configured to run, and the false part is "with your consent". Google's own User-provided data policy requires end-user consent for this, and the site never asks for it. I could not watch a hashed email actually leave a browser, because no browser can load external sites here. Ahrefs and Cloudflare are cookieless and are disclosed as such, so the cookie-consent part of the problem is mainly GA. Who sees it: the missing banner affects all visitors on mobile and desktop. The misleading bullet is visible on /privacy/ on mobile and desktop. The tag configuration is visible only to Google and in network traffic.
- **Scope:** Site-wide: every page, mobile and desktop. Visitors see no banner; the misleading bullet is visible on /privacy/.
- **Fix (owner-decision):** Owner decision, in this order.

1. Before touching the bullet, open GA4 Admin > Data collection and modification > Data collection. Check whether "User-provided data collection" is on, then check the Google tag's "Allow user provided data capabilities" and automatic detection.
   - If they are on, turn them off. The site runs no ads (Privacy.jsx:64), so the feature has nothing to feed. Then delete the bullet at Privacy.jsx:51.
   - If they are already off, delete the bullet straight away.
   - Do not delete the disclosure while the feature is still on.

2. For EEA, UK and CH visitors, the proportionate minimum is a region-scoped Consent Mode v2 default. Add it right after the gtag function definition at index.html:154 and before gtag('js') and gtag('config'): ad_storage, ad_user_data, ad_personalization and analytics_storage all 'denied', with a region list. With no banner, those visitors stay denied permanently. GA then gets cookieless modeled pings only for them, and that trade-off is acceptable. A banner is only needed if the owner wants full GA data from those regions. Ahrefs and Cloudflare need no change because they are cookieless.

3. Reword Privacy.jsx:61-63 to match the choice made in step 2.

4. Bump "Last updated" at Privacy.jsx:33 to the ship date in the owner's Eastern time, since section 8 promises an updated date.

5. Keep the new text free of em and en dashes. The existing " - " hyphen separators are fine.

### visitor-privacy-1: Privacy Policy misses web push, game and quiz logging, and Turnstile, and contradicts itself on quiz results

- **Kind / severity:** problem, medium (checker says low)
- **Status:** Checked (repro: partly, impact: partly)
- **Claim:** Several data flows in the code are absent from the Privacy Policy, and one statement is false: the policy says quiz results stay on the device and are not sent to the site, but quiz, Beastle and Critter Keeper results are inserted into Supabase and pushed to the owner's phone. Web push subscriptions (endpoint and keys) are stored in Supabase and never mentioned. Cloudflare Turnstile is live on the contact form but Cloudflare is listed only as host and analytics.
- **As checked:** The core of the finding holds. The live /privacy/ page tells visitors that "favorite facts and quiz results" in local storage "stay on your device and are not sent to us". That is false. In the deployed build, quiz scores, Beastle daily results and Critter Keeper adoptions (with the pet name the visitor typed) are inserted into Supabase table site_events, and each row is relayed to the owner's phone through ntfy. Every finished daily Beastle also writes a row to beastle_results. Web push opt-ins (on /pack/, plus the Beastle reminder toggle on /beastle/) store the subscription endpoint and the p256dh and auth keys in push_subscriptions, with a beastle_reminder flag. Neither the Supabase bullet nor the ntfy bullet mentions any of this; both describe only comments, likes, shares, purchases and contact form messages. Cloudflare Turnstile is live, but the finding understates where. It runs on the /contact/ form and also on the visitor-facing care package library sign-in at /care-packages/library, and on /composer/login, which is owner-only. Cloudflare is listed only as host and analytics, and the Library Sign-In bullet does not mention the challenge. Two corrections. First, the proposed fix wording "deleted on opt-out" would itself be false. Opting out only unsubscribes in the browser, and the row stays until a later send gets a 404 or 410 from the push service and deletes it. Second, the Supabase and ntfy bullets also need updating. None of these flows can be seen by a visitor, and none of them concern Google: the policy text is visible on /privacy/ (mobile and desktop alike), and that page is noindex.
- **Scope:** /privacy/ (one page, mobile and desktop), covering push opt-in on /pack/ and /beastle/, all quizzes, Beastle, Critter Keeper and /contact/.
- **Fix (code):** Edit src/pages/Privacy.jsx only, and bump "Last updated" at line 33 to the ship date (owner's Eastern date).

1. Rewrite line 66 so it no longer says results are not sent. Suggested wording: favorites and your own quiz history stay in your browser. When you finish a quiz, a Beastle daily or adopt a Critter Keeper beardie, an anonymous line goes to our database and is relayed to me through ntfy. That line holds the score or result, and for Critter Keeper the name you chose. It carries no identifier.

2. Add a "Push Notifications" bullet to section 1. It should say that opting in stores your browser's push endpoint and encryption keys, and whether you want the Beastle reminder, in Supabase, with no other information attached. Do not say the row is deleted on opt-out, because it is not. Say instead that turning notifications off stops delivery in your browser, and the stored row is removed once the push service reports it as no longer valid. Alternatively, change the code to delete the row on unsubscribe and then say so.

3. Widen the Supabase line (97) to include push subscriptions and anonymous quiz and game results. Widen the ntfy lines (48 and 98) to cover these activity pings as well as contact messages.

4. Add Turnstile to the Cloudflare line (96): "and runs Turnstile, a bot check, on the contact form and the library sign-in."

No new third parties need adding. Per the owner's CLAUDE.md, write it without em or en dashes. The existing " - " separators on lines 47-55 and 94-97 are hyphens, so leave them alone or switch them to colons the way lines 48 and 98 already do.

### visitor-privacy-2: On 84 of 84 hubs with affiliate links, the disclosure comes after every link, in 11px muted type

- **Kind / severity:** problem, medium (checker says medium)
- **Status:** Checked (repro: partly, impact: partly)
- **Claim:** Species hub pages render the 'What to buy' list of paid Amazon links first and put the only disclosure line underneath it in the smallest muted text on the page. A visitor meets up to 19 paid links before any disclosure, and on mobile the single-column grid stacks every row above it.
- **As checked:** On 84 of the 108 live species hubs (/guides/<species>/), the only affiliate disclosure comes after every paid link in the "What to buy" card. It is set in text-[11px] at 80% muted opacity. A visitor passes up to 19 paid Amazon links before reaching it, and 5 hubs have 19 (african-fat-tail, bearded-dragon, gargoyle-gecko, hognose-snake, russian-tortoise). Below the sm breakpoint the grid is one column, so a phone shows every row (19 on bearded-dragon) stacked above the line. On desktop the grid has two columns, but the line still comes last. Real visitors see this on both mobile and desktop. It is not a structured-data issue. One detail is wrong: the disclosure is not the smallest muted text on the page. The footer copyright and vet disclaimer are text-[10px] text-muted-foreground (Footer.jsx:114 and 117) and render on every hub. The disclosure is the faintest line, not the smallest. The fix line is also off by one: line 519 is inside the h2, and the heading closes at line 520.
- **Scope:** 84 of 108 species hub pages, mobile and desktop; worse on mobile.
- **Fix (code):** Move the whole disclosure IIFE in src/pages/GuideDetail.jsx (lines 536-546, including the `retailers` computation at 537-540), not just the <p> at 541-545. Place it right after the closing </h2> at line 520 and before the grid at line 521. "After line 519" would put it inside the h2. On the <p>, change 'text-[11px] text-muted-foreground/80 font-body mt-3' to 'text-xs text-muted-foreground font-body mb-3'. That raises light-mode contrast from 4.35:1 to 7.14:1. Optionally drop the h2's mb-4 to mb-2 so the line reads as part of the heading. Keep the existing wording: it already says "paid ... links", which the FTC accepts. This one edit fixes all 84 hubs. No content or per-hub changes are needed, and the rebuild should happen only when the owner asks for it.

### visitor-privacy-4: Homepage first screen says what the site is but not who runs it or why 'Verified' is true

- **Kind / severity:** problem, medium (checker says low)
- **Status:** Checked (repro: partly)
- **Claim:** The hero makes the purpose clear but asserts 'Verified animal facts' and 'We looked it up' with no name, no link to the About page or the method page, and nothing else on the homepage names the owner. The strong About page (named owner, 'I am not a veterinarian', AI-use disclosure, funding) is reachable only from the hamburger menu's last group and the footer. The sitewide Organization schema has no founder or contact point.
- **As checked:** The main point holds. The homepage hero says "Wild facts. Pet care. We looked it up. So you don't have to." and "Verified animal facts...". It does not name the owner and does not link /about/ or /how-guides-are-made/. The words "Michael" and "Mike" appear nowhere in the live homepage HTML.

The About page is linked from only two places. One is the hamburger menu, in "The site", its last group. That menu toggle shows at every width, so this is true on both mobile and desktop. The other is the footer. "How guides are made" appears only in the footer and is not in the menu at all.

The sitewide Organization JSON-LD has no founder and no contactPoint. Visitors don't see this; only Google reads it.

Three details in the finding are wrong:
1. The Chronicles blurb is not the only first-person line on the homepage. The newsletter block also says "An occasional email when I have published something worth your time" (src/components/shared/Newsletter.jsx:37).
2. The AI-use disclosure is at About.jsx:168, not :111. Line 111 is the "It's just me. My name is Michael Ryan" line.
3. The finding misses that /about/ already publishes a Person entity in its ProfilePage JSON-LD. It has @id https://beastlyfacts.com/about/, name "Michael Ryan" and jobTitle "Founder and writer, Beastly Facts", with worksFor pointing to the Organization. So the owner to site link exists in one direction only (Person to Organization). The gap is the missing reverse link from the Organization, not a missing Person.

Severity is better stated as low. An About link in the footer of every page is the usual pattern, and the owner's identity is already in structured data on /about/.
- **Scope:** Homepage, mobile and desktop for the visible copy; the Organization schema is seen only by Google, on every page.
- **Fix (code):** 1. **Hero (visible change, mobile and desktop).** In HeroSection.jsx, add one short static byline under the subhead at line 208. Keep it plain prerendered text, not a motion wrapper, so it cannot add CLS, which the file's own comments are guarding. Name the owner and link both /about/ and /how-guides-are-made/, for example: "Researched and written by Michael Ryan, who keeps two rescued bearded dragons. How every guide is checked." Optionally, add "How guides are made" to the hamburger's "The site" group at Navbar.jsx:342.

2. **Schema (Google only).** In App.jsx:193-205, do not invent a new Person. Point the Organization at the Person that /about/ already publishes, by adding:
   `"founder": { "@type": "Person", "@id": "https://beastlyfacts.com/about/", "name": "Michael Ryan", "url": "https://beastlyfacts.com/about/" }`
   Optionally also add a contactPoint with url https://beastlyfacts.com/contact/.

### visitor-privacy-7: Three medical-content articles lack the in-article vet disclaimer, one with medication doses

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The vet disclaimer is consistently placed above the body on health articles, but 17 of 144 health-tagged articles have none. Three are medical in substance, including the ich treatment guide, which gives formalin and malachite green doses with only the small site footer line as a caveat.
- **Scope:** 3 articles visibly, on mobile and desktop; the other 14 are low-risk enrichment, breeding-law or lighting pages.
- **Fix (content):** Add <VetDisclaimer /> above the opener in the three files named, worded for fish on the ich guide (for example, 'confirm the diagnosis and dose with an aquatic vet or the product label').

### visitor-privacy-8: Contact email reads '[email protected]' in the served HTML on four trust pages

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** Cloudflare's email obfuscation rewrites hello@beastlyfacts.com in the static HTML of /contact/, /privacy/, /terms/ and /about/. Browsers with JavaScript decode it, but text-only readers, no-JS visitors, trust scanners and AI crawlers see '[email protected]' and a /cdn-cgi/ link instead of a mailto.
- **Scope:** /contact/, /privacy/, /terms/, /about/. Visitors with JS on mobile and desktop see the real address; scanners and crawlers do not.
- **Fix (external-settings):** Turn off Email Address Obfuscation in Cloudflare (Scrape Shield) for beastlyfacts.com, since the contact form and Turnstile already absorb spam.

### visitor-privacy-9: Policy and Terms never name the operator, and 'Data Retention' gives no retention periods

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The Privacy Policy calls the operator 'BeastlyFacts.com ("we")' yet speaks as 'me' in places without naming who that is. Its 'Data Retention & Your Rights' section states no retention period, although purchase emails, comments and push endpoints are kept with no stated end. The Terms name no operator and no governing law.
- **Scope:** /privacy/ and /terms/, mobile and desktop.
- **Fix (owner-decision):** Add 'BeastlyFacts.com is run by Michael Ryan' (with the contact email) to the opening of both pages, and add retention lines: purchases kept while the library runs, comments until deleted on request, push subscriptions until opt-out.

### visitor-privacy-10: Children's privacy line exists but does not fit a site with games and free-text forms

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The policy has a standard under-13 statement, which is appropriate for a general-audience site. But the site's games and quizzes are the kind of features children use, and the comment, contact and newsletter forms (plus the Critter Keeper pet name that is sent to the owner) take free text with no age note. The policy also does not say a child's data will be deleted once found.
- **Scope:** /privacy/, plus comment, contact and game surfaces, mobile and desktop.
- **Fix (content):** Add one sentence to Privacy.jsx:111: 'If we learn we have collected personal information from a child under 13, we delete it,' and a short 'Ask a parent before posting your name or email' note under the comment form.

### visitor-privacy-3: Article affiliate disclosure always comes first, every paid link is rel=sponsored, and no ads run

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** Every published article with affiliate links opens with a labeled disclosure box before the first link, every affiliate anchor sampled carries rel="sponsored", and the site serves no ads, which matches what the Privacy Policy says.
- **Scope:** 413 affiliate articles and all sampled pages, mobile and desktop; rel=sponsored is seen by Google.

### visitor-privacy-5: A first visit is never interrupted: no modals, push prompts, install prompts or login walls

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** Nothing fires on a first visit. The browser notification prompt only appears after a tap on an Enable or reminder toggle, there is no install-prompt hook, the newsletter is an inline form, achievement toasts are suppressed on first load, and no content is gated behind sign-in.
- **Scope:** Site-wide, mobile and desktop.

### visitor-privacy-6: Contact reaches a human through two working channels

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** The contact form posts to a live Worker route that forwards the message to the owner's phone, with bot checks and an email fallback in the error message. The published address is on a domain with working mail exchangers. The page sets honest expectations on response time.
- **Scope:** /contact/, and the email link on /privacy/, /terms/ and /about/.

### visitor-privacy-11: Strong security headers on every page

- **Kind / severity:** strength, low
- **Status:** Not checked yet
- **Claim:** The site sends a restrictive Content-Security-Policy, a Permissions-Policy that disables camera, microphone, geolocation, payment and USB, and a privacy-preserving Referrer-Policy. Header-based trust scanners score these. The CSP still allowlists AdSense and FundingChoices hosts that nothing loads now.
- **Scope:** Site-wide; seen by scanners and browsers, not by visitors directly.

*Could not check:* I could not see what cookies are actually set. Headless Chromium cannot load the external site here (TLS interception), so the GA _ga cookie claim rests on the code having no consent default, not on a cookie I watched being set. I did not test contact delivery end to end: a valid POST to /api/contact would push a real message to the owner's phone, so I only sent requests that change nothing (GET returned 405, a malformed POST returned 400). Whether ntfy delivery works today is unconfirmed. I could not see the GA4 admin settings (Google Signals, data retention, user-ID), Beehiiv's own consent handling on magic.beehiiv.com, or the Supabase row-level security on the tables. The SMTP sender for library sign-in codes is not in the code (docs/STOREFRONT.md:195 only says custom SMTP). The domain's SPF includes _spf.mlsend.com (MailerSend), which may be an undisclosed processor, but I could not confirm it sends anything. Whether Android Chrome shows its own automatic install mini-infobar (the site has a manifest and service worker but no beforeinstallprompt handler) is browser behavior I could not observe. The /gear/ page's affiliate links are not in the static HTML (0 amazon links in 461 KB), so I did not count its density. I did not check CCPA applicability, because that depends on revenue and visitor thresholds I cannot see.

## Store and donations (store-donate)

### store-donate-0: Store never says who is selling

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** A buyer can pay without ever seeing the seller's name, location, or contact details. None of the store pages, the donate page, the Terms or the Privacy policy names the operator. None of those seven pages links to Contact, Terms, Privacy or About from the page body, so the only route is the site footer. The owner is named on /about/ only.
- **Scope:** Visible to visitors on mobile and desktop on all 20 product pages, the store, the hub, the FAQ, thanks, the library and /donate/. Also the seller field in the Product structured data that Google reads.
- **Fix (owner-decision):** Add a seller line under the final buy button in src/pages/CarePackageProduct.jsx (around line 462), for example 'Sold by Michael Ryan, Beastly Facts, [state], USA. Questions: Contact. Refunds: within 14 days, see Terms', with real links. Add a 'Who runs this site' sentence and a governing-law line to src/pages/Terms.jsx.

### store-donate-1: Guide hubs lack the Amazon Associate statement

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** Species care guide hubs carry Amazon affiliate links, but none of them shows the program statement Amazon requires. Their disclosure is a generic 11px commission line placed after the link list, not before it.
- **Scope:** 84 of 120 guide hub URLs, the site's main care pages. Visible to visitors on mobile and desktop.
- **Fix (code):** Change GuideDetail.jsx:543 to 'As an Amazon Associate I earn from qualifying purchases. Underlined items are paid Amazon links, at no extra cost to you.' and render it above the What to buy list (around line 520) at normal text size. Or add the statement to Footer.jsx so it appears on every page.

### store-donate-3: Donors land on a 404 page after paying

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The page Stripe sends donors back to, /donate/success, is served with HTTP 404 and 'Page Not Found' markup. In a real browser the 404 page shows until JavaScript swaps in 'Thank You!'. On a cold mobile load that took about 1.5 to 3 seconds. The stated reason for not prerendering the page is wrong: the page reads no query parameters.
- **Scope:** Every completed or canceled donation. Visible to visitors on mobile and desktop. Google also sees 404s, but these pages are noindex anyway.
- **Fix (code):** Add /donate/success and /donate/cancel to prerender.mjs's static routes so each ships its own noindex 200 page. Point the seven Stripe Payment Links' confirmation redirect at the trailing-slash URL.

### store-donate-4: Donate page omits recipient, use and tax status

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The donate page asks for one-time or monthly money without saying who receives it, what it pays for, that it is not tax-deductible, that it cannot be refunded, or how to cancel a monthly gift. Those terms exist only in the Terms page, which the donate page does not link.
- **Scope:** /donate/ (noindex), visible to visitors on mobile and desktop.
- **Fix (content):** Under the heading in Donate.jsx, add: 'Donations go to Michael Ryan, who runs Beastly Facts alone, and pay for hosting, research and photo licensing. Beastly Facts is not a charity, so donations are not tax-deductible. They are non-refundable; cancel a monthly gift any time from the Contact page.' Link Terms and Contact.

### store-donate-5: Unverified 1% climate pledge on donate page

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** The donate page says 1% of every purchase or donation goes to CO2 removal. Nothing on the page backs this up, the store pages never mention it, and the owner's own storefront doc treats Stripe Climate as unconfirmed.
- **Scope:** /donate/. Visible to visitors on mobile and desktop.
- **Fix (external-settings):** Check Stripe Dashboard > Settings > Climate. If it is on, link Stripe's public Climate page for the account. If it is off, delete the box at Donate.jsx:205-210.

### store-donate-6: Refund terms are two clicks away, with dead references

- **Kind / severity:** problem, medium
- **Status:** Not checked yet
- **Claim:** A product page never states the refund window. It links to a noindex FAQ, and the FAQ's refund answer points to 'the contact page' and 'the Terms' as plain text with no links.
- **Scope:** All 20 product pages and the FAQ. Visible to visitors on mobile and desktop.
- **Fix (code):** Add 'Refunds on request within 14 days (Terms)' to the small print under the final buy button (CarePackageProduct.jsx:463). Render the FAQ refund answer as JSX with real links to /contact/ and /terms/, keeping the plain string for the JSON-LD.

### store-donate-9: Return-policy markup overstates the refund promise

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** The Product structured data tells Google there is a 14-day free return window. The visible policy says refunds are reviewed case by case and may be declined.
- **Scope:** Google only (structured data on 20 product pages).
- **Fix (owner-decision):** Make the visible policy match the markup, for example 'refunds within 14 days are granted, declined only for repeat refund abuse', or soften the markup so it does not promise more than the Terms.

### store-donate-10: Store page indexable but missing from sitemap

- **Kind / severity:** problem, low
- **Status:** Not checked yet
- **Claim:** /care-packages/store/ can be indexed, but the sitemap leaves it out on the mistaken belief that it is noindex.
- **Scope:** Google only, one URL.
- **Fix (owner-decision):** Pick one: add <meta name="robots" content="noindex,follow" /> to CarePackagesStore.jsx, or list /care-packages/store/ in generate-sitemap.js and correct the comment.

### store-donate-2: Store is live, complete and has no dead ends

- **Kind / severity:** strength, high
- **Status:** Not checked yet
- **Claim:** All 20 care packages can actually be bought. Before paying, a buyer can see price, format, page count, edition, the full contents, a free sample PDF and the payment processor. No page in the store is a coming-soon dead end.
- **Scope:** All 20 product pages, plus the store and hub. Visible on mobile and desktop.

### store-donate-7: Affiliate disclosure is correct on articles and the gear page

- **Kind / severity:** strength, medium
- **Status:** Not checked yet
- **Claim:** Amazon Associates is the only active affiliate program. Articles and the gear page show the exact Amazon statement before the first link, and a build check enforces it. Links are marked sponsored, and Amazon prices and star ratings are deliberately not shown.
- **Scope:** All articles with affiliate links and /gear/. Visible on mobile and desktop.

### store-donate-8: Purchase terms and privacy are thorough

- **Kind / severity:** strength, low
- **Status:** Not checked yet
- **Claim:** The Terms and Privacy policy spell out digital delivery, the 14-day refund window, the license, what a refund ends, donation refundability, chargebacks, and what purchase data goes to Stripe and Supabase. That is the content a cautious buyer or a scanner looks for, even though it is hard to reach from the store.
- **Scope:** /terms/ and /privacy/, both noindex.

*Could not check:* Stripe's hosted checkout and Payment Link pages load their content with JavaScript, so curl only gets an empty shell titled 'Stripe Checkout'. I could not see the business name, card statement descriptor, or Terms and Privacy links that Stripe shows buyers and donors. Those come from the Stripe account settings. I could not confirm that the seven donation Payment Links are active, or where they redirect after payment: a made-up buy.stripe.com URL returned the same 200, 593,022-byte shell. I could not see whether Stripe Climate is enabled. I did not test delivery after payment (webhook, thanks-page download, library sign-in code, receipt email) because that needs a real purchase. To confirm live mode I sent one checkout request for bearded-dragon, which created one unpaid live Stripe Checkout session; it charges nothing and expires on its own. The donor-return timings come from headless Chrome loading the live HTML and JS through a local proxy, because Chrome here cannot load external pages, so real-world timings will differ. I did not check trust-scanner scores (ScamAdviser and similar) or domain registration (WHOIS/RDAP); other lanes cover those. Every script and output is under /tmp/claude-0/-home-user-beastlyfactss/c6c3a501-5606-5a8b-b8c9-191dbbf9547e/scratchpad/store-donate/; the repo was not modified (git status clean).

## Checks of the two earlier reviews

### prior-trust

- **T1 (partly):** Gridinsoft shows 63/100, "Trusted but Verify", from one automated check on Sept 27, 2026 at 5:14 (09:14 UTC). "First checked" and "Last checked" both carry that timestamp, and the HTTP Last-Modified header is Sun, 27 Sep 2026 09:14:06 GMT, so the score has not been refreshed since. The only live part is the radar's "Domain Maturity" day count, which is worked out each time the page is rendered. A cached desktop copy I fetched today said 151 days, which matches a render from about Oct 16. Fresh uncached renders today (one cache-busted, one with a mobile user agent) say 154 days. The second review was right that 151 days means about Oct 16, but wrong that the score updates live. Anyone who opens the Gridinsoft page sees this, on mobile and on desktop.
- **T2 (partly):** Gridinsoft's "Negative signals" list has one entry, "a relatively new domain (5 months)", and its radar says "Safety Level: 0 negative tags, 1 warning signal". DNSSEC ("DNSSEC: UNSIGNED") and privacy ("Registrant: Personal information withheld") show up only as fields in the Domain Information table. Traffic is more than a data field. "Popularity" is one of the eight axes of the scored "Trust signal radar". Its dot sits exactly at the center, the lowest possible value, and its tooltip reads "Estimated low traffic without Tranco or social profile data". The page does not say whether that axis feeds the 63. Visitors see this on mobile and desktop. The tooltip text appears only on hover or tap.
- **T3 (partly):** ScamAdviser shows "Likely Safe" and "Last Update: 3 weeks ago" (as of Oct 19). The score is 71, not 0. The server HTML starts the counter at 0, and the page script counts it up by 1 every 25 ms until it reaches 71, which takes about 1.8 seconds. Real visitors with JavaScript see 71 on mobile and desktop. Only fetches without JavaScript, such as curl and some bots, see 0. The page's own structured data, which Google reads, also says 71.
- **T4 (confirmed):** The domain was registered May 18, 2026 (17:33:24 UTC) and expires May 18, 2027. That is a one-year registration.
- **T5 (partly):** DNSSEC is not in effect, but it is half set up rather than off. Cloudflare already signs the zone. It publishes DNSKEY records (flags 257 and 256, algorithm 13), RRSIGs on the records, and CDS and CDNSKEY records. No DS record exists at .com, though, so the chain of trust is never completed: resolvers do not validate the zone (AD=false) and scanners report it as UNSIGNED. Adding the DS record at the registrar would finish the setup. This is not visible to visitors, and Google does not see it either. It only shows on scanner pages.
- **T6 (confirmed):** The registrant's details are redacted in WHOIS/RDAP. This is the registrar's (Tucows) redaction with a tiered-access contact form, not a named proxy company. The name is blank, but the registrant's state (VA) and country (US) are still published. ScamAdviser counts the redaction as "using a service to hide their identity".
- **T7 (partly):** Only ScamAdviser lists all three as negative highlights: hidden WHOIS identity, a low Tranco rank (which it reads as low traffic) and a (very) young site. Gridinsoft lists a single negative signal, the young domain. On Gridinsoft, low traffic appears only as a zero value on its radar, and hidden owner info only as a data field.
- **T8 (unverifiable):** Could not be checked from this session. The two archive.org availability calls that answered both reported no snapshots at all for the domain, but that endpoint is not a complete index, so the Sept 27 cutoff is neither confirmed nor refuted.
- **T9 (confirmed):** ScamAdviser's published methodology does treat a short registration period as a risk sign, and beastlyfacts.com's exactly 12-month registration matches the pattern it describes. However, the beastlyfacts.com report does not list it among its negative highlights. The renew date appears only as a data field.
- **T10 (partly):** There is no evidence that Google uses these scores, and Google says it does not use scores from third-party tools. That cannot be observed directly. The scores can still matter indirectly. Both report pages are indexable and carry their own structured data about beastlyfacts.com, so they can appear in search results for brand or "is it legit" queries and shape what a visitor thinks before arriving. Google's own safety signal, Safe Browsing, is clean.

**Missed by both reviews:** 1) DNSSEC is one step from done, and neither review said so. Cloudflare already signs the zone and publishes CDS "2371 13 2 93EEAB488D72...", but there is no DS at .com (see T5 for the DoH and RDAP output). Pasting the DS record from Cloudflare's DNSSEC panel into the registrar account (Tucows, IANA 69) would clear the "DNSSEC: UNSIGNED" field on Gridinsoft. Only scanners see this; visitors and Google do not.

2) ScamAdviser's real score is 71, not 0. Both reviews missed the count-up animation (see T3). The 71 is also in ScamAdviser's ClaimReview and AggregateRating JSON-LD, and that is the number Google would show if it gave that page a rich result.

3) Cloudflare Email Address Obfuscation hides the owner's contact email from scanners that do not run JavaScript. The source has plain text: src/pages/Contact.jsx:97 renders "hello@beastlyfacts.com" and src/pages/About.jsx:192 has mailto:hello@beastlyfacts.com. The served HTML is different. On /contact/, /about/ and /privacy/, the plain address appears 0 times across those 3 pages (grep -o "hello@beastlyfacts.com" | wc -l = 0). In its place is <span class="__cf_email__" data-cfemail="5c3439...">[email protected]</span>, and every mailto is rewritten to href="/cdn-cgi/l/email-protection#...", 4 links across the 3 pages. The data-cfemail value decodes to hello@beastlyfacts.com. ScamAdviser's explainer lists "Contact details availability" and says "Hidden or generic contact details lower the score." Real visitors on mobile and desktop see the address, because JavaScript decodes it. Curl-style scanners see "[email protected]". With WHOIS also redacted, the main identity signal a crawler finds is the About page's "My name is Michael Ryan."

4) The scores are frozen snapshots and will not improve by themselves. Gridinsoft has not rechecked since Sept 27 09:14 UTC (Last-Modified header). It offers a free claim at portal.gridinsoft.com ("We never charge website owners for reviews or reconsideration requests"). ScamAdviser's page has an "Update Score" action (props updateScoreModal: "Fetching the latest Trust Score for you."). ScamAdviser's explainer also says "Very new domains (under 6 months) score lower". The domain turns 6 months old on Nov 18, 2026, which is a natural time to ask both services for a rescan.

5) The security checks, which matter more than the scores, are all clean, and neither review cited them. Google Safe Browsing reports no unsafe content (last checked Sept 30). URLVoid shows "Detections Counts 0/36", with First Seen and Last Analysis both 22 days ago, about Sept 27. Gridinsoft shows "Warning Cleanliness: 0 detections". ScamAdviser shows "This website is safe according to DNSFilter". Gridinsoft also lists two positive signals: a verified YouTube channel (@beastlyfactsofficial, 19 subscribers) and "Business Infrastructure" (Google verification, Zoho Mail, Zoho SPF). Anyone reading those scanner pages sees this.

6) WHOIS redaction is not total. Tucows RDAP still publishes the registrant's state, "VA", and country, "US", and ScamAdviser repeats "... VA". This is a privacy note for the owner. It is visible to anyone who reads the scanner page or runs an RDAP lookup.

7) Both scanners mislabel the site. ScamAdviser tags it "Subscriptions - General Services", and Gridinsoft's on-page mentions read "Pets, Guides, Clothing". I found no clothing wording on the home page; a grep for clothing, t-shirt, apparel and hoodie returned nothing. This is minor, but it is what visitors read on those reports.

8) The time zones on Gridinsoft's page are inconsistent. It shows the creation time as "5:33 PM", which is UTC (RDAP 17:33:24Z), but shows "Updated: May 22, 2026 at 4:29 PM" where RDAP says 2026-05-22T19:29:26Z. Any time quoted from that page should be taken from RDAP instead.

9) The site's own structured data disagrees with itself on the brand name, and only Google sees this. On the home page, the WebSite JSON-LD has "name": "BeastlyFacts" and the Organization JSON-LD has "name": "Beastly Facts". The Organization also has no email or contactPoint, even though trust scanners look for exactly the contact signals that the WHOIS hides.

### prior-audit

- **A1 (confirmed):** All 108 species hub pages (/guides/<id>/) show no byline and no page date, on mobile and desktop. 9 of 108 show a plain-text firsthand line with no link to /about/. On the bearded dragon hub that line reads in full "Written from Mike's own two dragons, Dex and Cera." The hub Article JSON-LD names the author as Organization "Beastly Facts" on 108 of 108 hubs, and it has no datePublished or dateModified. The JSON-LD part is visible only to Google.
- **A2 (partly):** The top of each article shows only the category, the publish date and the read time. The publish date matches JSON-LD datePublished on 802 of 802 indexable article pages, so the visible date never disagrees with datePublished. No "Updated" date appears anywhere on the page. The review line reads "Last reviewed 3 Sep 2026 · 3 sources" (day-month-year), not "Sep 3", and it sits at the bottom in the Sources section. It appears on 776 of 802 pages. JSON-LD dateModified, which comes from lastUpdated, differs from the visible date on 713 of 802 indexable article pages. On the bearded dragon feeding guide the page shows Jul 27, 2026 while dateModified is 2026-10-05. The visible problem is that readers never see an update date. The JSON-LD dates are visible only to Google.
- **A3 (confirmed):** The author box photo is Dex, the owner's bearded dragon, not the owner. The alt text says so honestly. The box sits at the bottom of every article, after the FAQ and gear, on mobile and desktop alike, so there is no photo byline at the top. The /about/ Person JSON-LD also uses Dex as the image of "Michael Ryan", which only Google sees.
- **A4 (partly):** The Hepper part is right. The bearded dragon feeding guide lists 3 sources: VCA, NC State Veterinary Hospital and Hepper. Its Hepper entry links to https://articles.hepper.com/, which is the root of Hepper's articles subdomain (not hepper.com and not an article), and two article titles follow it as plain text. 10 indexable articles cite Hepper, and the other 9 link specific Hepper articles. The leopard gecko feeding guide does cite Zen Habitats, which sells reptile enclosures. However, the cited page is a care-sheet blog post (/blogs/reptile-care-sheets-resources/leopard-gecko-complete-food-guide), not a product page or listing. docs/RULES.md bans only "a retailer product page or a for-sale listing", so this is a gray area against the rule's allow-list (vet, university, government, manufacturer spec, or established husbandry reference). It is not a clear breach. Both are visible to readers on mobile and desktop.
- **A5 (partly):** The homepage hero and meta description say "100+ species care guides, plus 400+ deep dives". The banner says "100+ care guides, and 400+ deep dives". "108+ species guides" appears only in the guide spotlight section, so the page gives two different guide counts. There are exactly 108 hub URLs, so the "+" on 108 is wrong. 5 of those 108 are generic hubs: cat-universal, dog-universal and three dog size classes. Deep dives: 507 articles fall in the six series the code comment defines (cost 84, handling 84, health-issues 84, tank-setup 84, feeding 87, legal 84). Counting the 96 enrichment guides gives 603. There are 802 indexable /blog/ articles in total. "400+" is true but understated, not false. This is visible to readers.
- **A6 (confirmed):** 5 of 802 indexable articles show a publish date before beastlyfacts.com's current registration (RDAP: 2026-05-18T17:33:24Z, which is May 18 at 13:33 my time). They are reptile-shedding-complete-guide (Apr 5, 2026), uvb-lighting-complete-guide (Apr 12), ball-python-feeding-guide (Apr 26), leopard-gecko-temperature-guide (May 3) and crested-gecko-humidity-guide (May 10). This is visible to readers. RDAP only shows the current registration, so I cannot rule out an earlier registration or another host, and the shallow repo history (earliest commit Oct 12) cannot show when the files were written.
- **A7 (partly):** These are confirmed: the clear title and meta description, robots.txt allowing all with a Sitemap line, JSON-LD on every page type checked, and an honest About page ("I am not a veterinarian", "I use AI tools to help draft and organize", affiliate commissions disclosed). The footer vet disclaimer appears on all pages checked. On deep dives, however, only the affiliate disclosure is near the top: it appears on 471 of 802 pages, including all 446 that have Amazon links, ahead of the Sources. The author box ("Written by Michael Ryan", 802 of 802) and the review date and sources ("Last reviewed", 776 of 802) sit at the bottom of the article on mobile and desktop. The top shows only the category, publish date and read time.
- **A8 (confirmed):** 0 broken internal links. 1,181 distinct internal targets are linked from the 802 indexable article pages, counting the whole page and ignoring fragments and query strings. 1,178 are page URLs, and every one returned 200 directly with no redirect. The other 3 (two font files and manifest.json) are assets I did not check. 18 of those targets are noindex,follow "overview" roundups that are left out of the sitemap by design, and each returns 200. None of the 17 scheduled article slugs is linked, either live or in published content. robots.txt is fine.

**Missed by both reviews:** 1) Hepper is not a one-off: many source links go to a bare domain root. 301 of 3,359 <Sources> links, spread over 249 of 857 article files, point at a site's root while naming specific article titles. Example: content/guides/bearded-dragon-health-issues-guide.mdx:155 is \"[VCA Animal Hospitals](https://vcahospitals.com/): Bearded Dragons - Diseases; Bearded Dragons - Problems; ...\", and the live HTML has <a href=\"https://vcahospitals.com/\"> with the same titles. A rough live scan of links after the Sources heading found 228 pages with at least one such link. This is visible to readers on mobile and desktop: a reader cannot click through to the cited page.

2) Zen Habitats is not the only retailer-run source. Sources blocks cite zenhabitats.com in 9 articles, reptilesupply.com in 7, joshsfrogs.com in 3, dubiaroaches.com in 3 and chewy.com in 1. All of these are care-sheet or blog pages, except one. content/guides/leopard-gecko-temperature-guide.mdx:118 links the store homepage itself: \"[Zen Habitats](https://www.zenhabitats.com/): Leopard Gecko Complete Lighting and Heating Guide; ...\". That is the closest case to the RULES.md:141-143 retailer ban, and it is visible to readers.

3) The JSON-LD author is split across two entities. 87 of 802 article pages, all of them enrichment guides from the Sep 4 batch, have frontmatter author \"Mike\" (for example ackie-monitor-enrichment-guide.mdx:29). As a result, authorSchema (src/lib/data/author.js:53-58) emits a bare {\"@type\":\"Person\",\"name\":\"Mike\"} with no @id, url or sameAs. The other 715 pages resolve to the Michael Ryan entity. The visible byline still says Michael Ryan, so only Google sees this.

4) The /about/ ProfilePage Person \"Michael Ryan\" has \"image\": \".../dex-portrait.jpg\", which is the lizard. Only Google sees this.

5) 148 of 802 articles show the same visible publish date, Sep 4, 2026: 87 enrichment guides plus 61 others. The next busiest day has 27. This reads as a bulk drop to readers and to Google.

6) The same article page uses two date formats: \"Jul 27, 2026\" in the header and \"Last reviewed 3 Sep 2026\" at the bottom (Sources.jsx:14-20). This is visible to readers.

7) dateModified prefers lastUpdated over lastReviewed (Blog.jsx:947). On 10 pages, JSON-LD dateModified is therefore earlier than the visible \"Last reviewed\" date, for example ball-python-legal-guide with dateModified 2026-09-16 and \"Last reviewed 2 Oct 2026\". This is visible only to Google. Separately, snake-brumation-guide shows \"Last reviewed 1 Jul 2026\", one day before its publish date of Jul 2, 2026, which readers can see.

8) 26 of 802 indexable articles show no review date: 20 that have Sources but no lastReviewed (including the pet-health piece why-bearded-dragons-need-uvb-lighting-and-why-skipping-it-is-deadly) and 6 with no Sources at all (the welcome post and 5 roundups).

9) The bearded dragon feeding guide, which docs/RULES.md:136 names as the model, narrates disagreement between sources. Body line 95 reads \"There's a real tension in the sourcing here worth stating plainly...\", and the FAQ at line 49 repeats it. RULES.md:117-124 forbids exactly this. The \"DVM-reviewed source\" that passage relies on is not named. The only listed source whose title matches is Hepper's \"How Long Can a Bearded Dragon Go Without Eating\", and its link goes to the articles.hepper.com root, so readers cannot check the claim.

10) llms.txt, which only AI crawlers read, calls the mascot \"Dexter\" (lines 7, 121 and 129) while the About page says \"Dex\". It never names Michael Ryan (0 matches). Its Care Guides link, https://beastlyfacts.com/encyclopedia/guides/, returns a 301 to /guides/.

Scratch outputs are in /tmp/claude-0/-home-user-beastlyfactss/c6c3a501-5606-5a8b-b8c9-191dbbf9547e/scratchpad/verify-trust/: rows.json holds per-page dates and authors, and links.json holds the internal link map.

### prior-nav

- **N1 (partly):** The menu's 'Learn something wild' group lists five fact surfaces: Facts, Fact files, Beastlypedia, Animal days and Gallery. The footer's version of the group adds two more, 'Animal facts hub' and 'The feed', for seven. Facts and Gallery are two views of the same 347 items. Gallery is noindex. In the site's own navigation, 'Animal facts hub' is linked only from the footer: none of the 857 published MDX articles links to it internally. Encyclopedia is filed under 'Keep a pet' as the index of pet species and care guides, so it is not really a fact entry point. By name alone it cannot be told apart from Beastlypedia. Two things separate them: the group headings ('Keep a pet' vs 'Learn something wild') and a one-way 'Looking for wild animals instead?' link from /encyclopedia/ to /beastlypedia/. Beastlypedia's body has no link back.
- **N2 (confirmed):** The header link reads 'Laws' and appears only at desktop widths (768px and up). The hamburger menu and the footer both say 'Is it legal?'. The destination's H1, 'Exotic pet laws, state by state', is a third name. The menu also files the item under 'Tools', while the footer files it under 'The site'.
- **N3 (confirmed):** The mobile bottom bar has 4 tabs: Guides, Facts, Articles, My Pack. It has no Home or Search tab. The page that 'My Pack' opens is titled and headed 'My Beast Pack'.
- **N4 (confirmed):** Below 768px, only on /guides/<id>/ species hub pages, the header logo is hidden and replaced by a 'Back' button plus a centered 'Care Guide' label. Deep dives live under /blog/ and keep the logo. The hamburger menu has no Home link at any width, and the bottom tabs have none either. The footer logo links to '/'.
- **N5 (partly):** Visible breadcrumb trails appear in two places. (1) The legal pages use the shared Breadcrumbs component in three components covering four URL patterns: /exotic-pet-laws/map/, the 82 /exotic-pet-laws/<animal>/ pages, /exotic-pet-laws/state/ and the 52 state pages. (2) Care package product and coming-soon pages have their own hand-rolled visible trail, 'Care packages / Store / <Animal>', which has no root rung and no BreadcrumbList JSON-LD. Several page types emit BreadcrumbList JSON-LD with no visible trail: species hubs, deep dives, encyclopedia animal pages and Beastfiles. The legal hub /exotic-pet-laws/ and the listing pages (/guides/, /facts/, /beastlypedia/, /encyclopedia/) have neither.
- **N6 (partly):** The two back controls on a species hub behave differently. The mobile header 'Back' (under 768px) always calls navigate(-1). A visitor who arrived from Google in the same tab is sent back to Google, and in a fresh tab with no history the button does nothing. The in-page 'Back to Guides' button (all widths) first follows location.state.returnTo, then calls navigate(-1) when window.history.length > 1, and otherwise goes to /guides/. A same-tab Google landing therefore leaves the site, but a new-tab landing correctly reaches /guides/. Encyclopedia animal pages ('Back to Encyclopedia') use the same pattern. Deep dives do handle a cold landing correctly: they push the species hub URL instead of going back in history.
- **N7 (partly):** /facts/ ('Fun Animal Facts | Beastly Facts', H1 'Fun Animal Facts') and /animal-facts/ ('Fun Animal Facts & Pet Care Tips | Beastly Facts', H1 'Fun Animal Facts & Pet Care Tips') have near-identical titles and H1s. Both are indexable: each is self-canonical, neither is noindexed, and both are in sitemap.xml. Whether Google has actually indexed both could not be verified here.
- **N8 (partly):** Confirmed parts: the hamburger menu has the groups Keep a pet, Learn something wild, Play, Tools and The site, and the header has a search icon (an inline popover at 640px and wider; below that it opens /search/). The 'Where to go next' block is not on deep dives: it is on species hub pages that use the router layout, which is 84 of 108 guide records, while the 24 cat and dog hubs lack it. Deep dives end with Sources, FAQ, 'More on the <Species>' (same-species siblings plus the hub link), Recommended Gear and 'You May Also Like'. The footer groups do not match the menu groups: the footer has no Tools group and files the same items elsewhere.

**Missed by both reviews:** 1) A loop between hub and deep dive, visible on mobile and desktop. A visitor lands cold from Google on a deep dive and taps 'Back to Bearded Dragon'. That pushes /guides/bearded-dragon/ with no state (Blog.jsx:350). On the hub, both 'Back to Guides' (GuideDetail.jsx:81-82, since history.length > 1) and the mobile header Back (MobileBackButton.jsx:24) call navigate(-1), which returns to the article. The article is a POP landing again, so it offers 'Back to Bearded Dragon' again. The reader cycles between the two pages and never reaches /guides/. This was traced from code, not run in a browser.

2) Back labels that do not match where they go, visible on both. EncyclopediaAnimal.jsx:297 links to the hub with state returnTo '/encyclopedia/', and GuideDetail.jsx:75-78 honors it, so 'Back to Guides' lands on /encyclopedia/. In the other direction, GuideDetail.jsx:649 passes returnTo '/guides/', so 'Back to Encyclopedia' lands on /guides/.

3) The mobile header Back on hubs does nothing in a fresh tab or an installed app with no history: navigate(-1) is unguarded. useSwipeBack.js:31 guards the same case with window.history.length > 1, but this button does not. Mobile only.

4) /animal-facts/ ('Animal facts hub') is not a hub. It is 20 hardcoded bullets (AnimalFacts.jsx:8-53) with no sources, plus nine non-clickable 'keyword chips' rendered as spans (AnimalFacts.jsx:55-58, 94-100). Its CTA promises 'the animal personality quiz' (line 136) but links only /facts/ and /encyclopedia/. It contains a factual error at line 37: 'Cats have a specialized collarbone that lets them always land on their feet - it's called the \"righting reflex.\"' Wikipedia (https://en.wikipedia.org/wiki/Cat_righting_reflex) says cats land on their feet because they have 'an unusually flexible backbone and no functional clavicle (collarbone)'. public/llms.txt:16 describes the page to AI crawlers as 'Fact browsing by animal', which it is not. Visible to visitors on both, and to Google.

5) Overlapping titles in the legal section, a Google issue that is also visible as H1s. /exotic-pet-laws/ ('Exotic Pet Laws by State: What Is Actually Banned'), /exotic-pet-laws/map/ ('Exotic Pet Laws by State: An Interactive US Map') and /exotic-pet-laws/state/ ('Exotic Pet Laws by State: All 50 States Ranked') are all self-canonical and indexable. The hub and the map share the identical H1 'Exotic pet laws, state by state' (live curl). This is a stronger case of the N7 problem than /facts/ vs /animal-facts/.

6) The menu and footer file and name the same items differently, visible on both. Feed is 'Feed' under Tools in the menu (Navbar.jsx:336) and 'The feed' under 'Learn something wild' in the footer (Footer.jsx:69). 'Is it legal?' and 'My Pack' are under Tools in the menu and 'The site' in the footer. 'Gear' in the menu is 'Recommended gear' in the footer. Glossary, How guides are made, All categories, My library, Terms, Privacy and Animal facts hub appear only in the footer.

7) Hub and Encyclopedia overlap. The menu lists 'Care guides' and 'Encyclopedia' as separate items, but /encyclopedia/ is titled 'Encyclopedia & Care Guides' and carries a two-tab toggle whose second tab is <a href=\"/guides/\">. Per-animal, /guides/<id>/ and /encyclopedia/animal/<id>/ are separate self-canonical URLs (live canonicals checked for bearded-dragon), and only the /guides/ one swaps the mobile logo for Back. CLAUDE.md describes these as 'one page with a toggle'.

8) The species hub's in-page back control and the deep dive's 'Back to <Species>' are <button> elements, not links (live HTML), so crawlers cannot follow them and they cannot be middle-clicked. On a mobile hub, the header Back and the in-page 'Back to Guides' also stack as two back controls with different logic.
