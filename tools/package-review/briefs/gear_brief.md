# Step 4: find the right gear for the items with no fitting product

Work ONLY in the worktree you were given (branch claude/packages-batch). Do not commit, push, run sync-articles or scripts/check-*.mjs; the lead does that. Another agent works in the same worktree at the same time on different species; edit src\lib\data\affiliateProducts.js ONLY with small exact-string Edit calls (never rewrite the whole file), and re-read the spot right before each edit.

Read first: tools\package-review\briefs\price_brief.md (owner pricing and linking rules: outward $5 rounding, totals = sum of rows, strict matches, hub links-only via exact `covers` strings, every metadata field that states a cost, book matches the site). Also docs\RULES.md for prose (no em or en dashes, US spelling, no brand names in prose sentences).

## The owner has approved a product search for these items
For each item: first grep affiliateProducts.js for an existing product that genuinely fits. If none fits, find one:
- It must be the exact thing the care text asks for, at the right spec (bar spacing, diameter, wattage, gallons, lid type, size). Read the species' book and tank-setup guide for the spec before searching. Prefer well-known pet brands sold at PetSmart, Petco or Chewy.
- Confirm the spec on the maker's or a retailer's product page (WebFetch or WebSearch). Record the URL.
- Price it from a non-Amazon retailer (PetSmart, Petco, Chewy, the maker, a specialist like Snake Discovery or Bean Farm). Never use an Amazon price. Record the URL and price.
- Find the same product's Amazon ASIN through a web search result that shows an amazon.com/dp/<ASIN> or /gp/product/<ASIN> URL for that exact item and size. If you cannot confirm the ASIN is the same item and size, do not add it: report "Unsure".
- Add it to affiliateProducts.js following the existing shape (slug, product, category, retailer "amazon", link "https://www.amazon.com/dp/<ASIN>?tag=beastlyfacts-20", price from the non-Amazon check as "$X–$Y" or "~$X", a factual description with the key spec, covers [the exact buyList strings it serves], pets). Put new products together at the end of the array under a comment line naming the batch: `// --- Step 4 gear (2026-10-03): <your group> ---`.
- Then link it in the species' cost guide row (one link per product per article), make the hub buyList item resolve to it, and update prices and totals everywhere per price_brief.md (cost guide, hub Budget row and route line, book budget page and profile cost lines, version-history Costs line in place). Keep the "Prices last checked October 2026 at PetSmart and other retailers ..." line. Set lastUpdated "2026-10-03".
- If nothing fits after a real search, leave the row unlinked and report "No gear available: <item> / what you searched".
- Also fix any OTHER guide on the site that links a product the care text rules out for that species (e.g. a cage with too-wide bars) when you find one: switch it to the new product or unlink it. List each.

## Books
Editions stay as they are on this branch; do not bump. budgie, lovebird, cockatiel 3.0; tarantula 3.0; betta 3.1; goldfish 3.1. COCKATOO: its fragments are stale, NEVER run its build.py; edit content\CAREPACKAGE Guides\source\cockatoo.html directly. For the others: python build.py in <id>-src (first check the build reproduces the tracked <id>.html unchanged before you edit; if not, stop and report), then from content\CAREPACKAGE Guides\source with env CHROME_BIN="C:/Program Files/Google/Chrome/Application/chrome.exe": node _render.mjs <id> "<Name>" <edition> --measure (every page at least 15px free; add a page rather than cut), then without --measure. Names: budgie "Budgie", lovebird "Lovebird", cockatiel "Cockatiel", cockatoo "Cockatoo" (1.4), tarantula "Tarantula", betta-fish "Betta Fish", goldfish "Goldfish". Check the tracked PDF filename in content\CAREPACKAGE Guides\rebuilt and match it; delete any stray file your render creates.

## Report (under 400 words)
Per item: what the care text asks for, product added or reused (name, ASIN, spec source URL, price source URL and price), or "No gear available" / "Unsure" with why. Then old and new totals per species, every file changed, other guides fixed, and each book's measure line.
