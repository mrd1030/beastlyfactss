# Reader log

Raw output from each set-test reader agent, unedited, one entry per species.
docs/READER_REVIEWS.md holds the edited, structured write-up built from
these; this file holds what the agent actually said, for when the edited
version needs checking against the source.

The list at the bottom collects every item a reader reported that no guide
anywhere, own deep dive or shared Health and More guide, covers at all,
across every species run so far, so Mike can look over the full list in one
place once several species are done.

## Leopard gecko (2026-09-08)

One Sonnet agent, ten pages (hub, encyclopedia, cost, handling, health
issues, tank setup, feeding, enrichment, temperature, vs crested gecko),
about 102k tokens. Full agent output below, unedited.

---

1. One line per page, with grade.

Hub (00): I'd finish it in one sitting; it's the only page that hands you a first-week checklist, an emergency card, and a buy list without making you hunt across seven articles. Grade A.

Encyclopedia (01): Quick and readable, but nothing here changes what I do; it's context, not action. Grade B.

Cost guide (02): Finished it, and it's the page I'd screenshot before buying anything. Grade A.

Handling guide (03): Finished it; the tail-drop section alone justifies the page. Grade A.

Health issues guide (04): Finished it; the crypto section is the single most important thing in the whole set. Grade A.

Tank setup guide (05): Finished it; the humidity split (30-40% ambient, 70-80% in one hide) is the detail I'd have gotten wrong without it. Grade A-.

Feeding guide (06): Finished it; refreshingly honest that sources disagree on the adult schedule instead of faking a precise number. Grade A.

Enrichment guide (07): Finished it, cited real studies by name, but it's a "do this once the basics are right" page, not a setup page. Grade B+.

Temperature guide (08): Finished it, the most rigorous page in the set (it names LafeberVet, Zen Habitats, and Merck by name where they disagree), but it isn't even listed as a Deep Dive on the hub or any other page despite being the most-linked article in the set. Grade A-.

Vs. Crested guide (09): Finished it, useful if I were still deciding, but its own table and its own body text don't agree with each other. Grade B+.

2. Hub and encyclopedia: the hub earns its place, it's a genuine synthesis with its own emergency card and buy list, not a copy. The encyclopedia mostly repeats size and lifespan already on the hub, and adds only origin, wild diet, and conservation status that appear nowhere else, so it's thin but not redundant. One real disagreement: the hub's own "Temperatures" line says "Nights in the 70s, with 65°F the floor," but its "Power outage" line says "70°F is the normal night low. Below 60°F, add heat, move the animal, or call the sitter." The temperature guide backs the 65°F number: "Temperatures can safely drop to 65°F at night... If your home drops below this, use a ceramic heat emitter." So the hub tells me to act at 60°F in one place and implies the floor is 65°F in another, a 5-degree gap on the one number that matters most in a power outage.

3. As a set, yes, I could set up, buy, feed, and handle a gecko competently, the numbers are consistent enough (36x18x18, 88-92°F warm floor, 70-77°F cool side, three hides, calcium/D3 schedule) that I trust them. What's missing: no page in this set explains respiratory infection itself, even though both the temperature guide and the humidity sections warn about causing one. The tank setup guide says "house your gecko alone, they're not a social species and don't do well cohabitating" without ever saying why, no page in the set answers that. The health issues guide says crypto is "diagnosed through a fecal PCR test," and the cost guide separately prices "Initial vet exam and fecal test: $150-215," but neither page connects those two facts, so I had to do the math myself.

4. Overlap: temperature numbers, humidity numbers, quarantine length, and the hide system all repeat across four or five pages and stay consistent, that redundancy is reassuring, not annoying. Three FAQ answers on the hub (stick tail disease, the humidity mistake, why geckos stop eating) are copied verbatim from the deep dives, which is fine for a router page. The one real conflict: article 09's table says "Supplemental heat needed: Yes - belly heat mat, ~88-90°F," but its own body text says "under-tank heat mat running around 88 to 92 degrees F" twice. Same article, two different numbers.

5. One link per page:
- Hub: "It's the common name for cryptosporidiosis, a severe and highly contagious parasite with no cure" should link to the health issues guide; it doesn't.
- Encyclopedia: "over 100 recognized color morphs in captivity" should link to the cost guide, where morph pricing actually lives.
- Cost guide: "The thermostat isn't optional, it's what keeps the heat mat from overheating and burning your gecko" should link to the tank setup or temperature guide.
- Handling guide: "they're not a species that craves interaction the way a bearded dragon might" should link to the Bearded Dragon vs. Leopard Gecko guide.
- Health issues guide: "low-level UVB is worth providing even though it's technically optional for this species" should link to the tank setup guide's UVB section.
- Tank setup guide: "house your gecko alone, they're not a social species and don't do well cohabitating" needs a link, though nothing in this set actually covers it.
- Feeding guide: "that points to a medical cause rather than a normal cycle" should link to the health issues guide.
- Enrichment guide: "give a gecko something closer to natural hunting behavior than a bowl of static food" should link to the feeding guide.
- Temperature guide: already the best-linked page in the set; needs none.
- Vs. Crested guide: "near the very top of every 'best first reptile' list" should link to the Five Reptiles roundup.

6. Trust: the 60°F/65°F mismatch and the 88-90/88-92 mismatch both made me pause, small enough that they read as editing slips rather than made-up numbers, but they're exactly the kind of thing a reader checks against in an emergency. What convinced me most that a real keeper wrote this: "A dropped gecko tail can keep twitching on its own for a minute or more after it detaches... a wriggling tail draws a predator's attention while the rest of the gecko escapes." That's not a fact you'd invent, it reads like someone who has actually watched it happen.

7. Grade for the set: B+. The numbers are trustworthy and the site is genuinely useful end to end, but two small cross-page number conflicts and a temperature guide that's the most-cited page in the whole set yet excluded from every Deep Dive list undercut the polish. First fix: reconcile the 60°F/65°F night threshold and the 88-90/88-92°F range. Second fix: add the temperature guide to the species' own Deep Dive list, and add the five missing cross-links above.

---

Fixed the same day (docs/READER_REVIEWS.md has the full write-up): the
88-90/88-92°F mismatch, two link-only sentences pointing at the care guide
hub, two of the five links, and the temperature guide's Deep Dive wiring
(added to `leopard-gecko` in src/lib/data/relatedArticles.js). The
60°F/65°F hub mismatch is both sourced and left for Mike.

## Items no guide covers (all species, running list)

- **Leopard gecko:** what a respiratory infection actually is or how it
  presents. The temperature guide and the humidity sections in tank setup
  and enrichment all warn that getting the numbers wrong causes one, but no
  page in the set, and no shared reptile guide (quarantine, hygiene,
  emergency plan), explains the thing itself.
- **Leopard gecko:** why leopard geckos should be housed alone rather than
  together. The tank setup guide states the rule ("they're not a social
  species and don't do well cohabitating") but never the reason, and
  nothing else in the set or the shared guides covers it either.
