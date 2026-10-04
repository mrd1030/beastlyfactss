READ-ONLY accuracy review (do not edit, commit or push) of one printable care package. Be economical: the owner asked to go easy on usage. Read the book text once, grep the site for specific facts rather than reading whole guides, and use at most 3 web lookups, only for a claim you genuinely doubt that the site does not settle.

Book text (plain text, one block per page; the page numbers in this dump are approximate, use the book's own "page N" references and section titles to locate things): tools\package-review\out\booktext\{ID}.txt

Site, the source of truth: worktree the worktree you were given. The species' own guides are content\guides\{ID}-*.mdx (tank setup, feeding, handling, health issues, enrichment, cost, legal), the hub entry in src\lib\data\guides\{HUB} (id {ID}), and src\lib\data\legalStatus.json for the law page counts.

Look for, most important first:
1. Safety errors: a temperature, distance, dose, diet item, handling instruction or emergency threshold that could hurt the animal, or that contradicts the site.
2. Factual errors or numbers stated two different ways inside the book.
3. Tool pages (checklist, emergency card, symptom table, routine, sitter sheet, outage page) disagreeing with the care pages.
4. Law page counts that do not match legalStatus.json (spot-check the totals and three states).
5. A "page N" pointer that lands on the wrong topic (check against the contents page).
Skip the budget pages and cost figures entirely: another pass is changing them right now. Skip style, tone and layout.

Report under 400 words: a numbered list, most serious first; each item: where (section or page title), a short quote, what the site says (file and line), the exact fix (no em or en dashes, US spelling). Mark anything that needs a SITE change rather than a book change. End with a one-line verdict. Leave out anything that is fine.
