# To do

The working list. Session task lists do not survive a cloud session, so this
file is the one that counts. Cross items off here, not in a chat window.

---

## 1. Write the federal law guide

**Written 2026-09-12, waiting on one hero image.** The guide is
`content/_scheduled-legal-guides/federal-exotic-pet-laws-guide.mdx`, staged
rather than live because `federal-exotic-pet-laws.jpg` does not exist yet and a
live article pointing at a missing hero fails check-images. Voice check passes
clean, 0 errors and 0 warnings, and all 14 sources return 200. The prompt for
the hero is in IMAGE_PROMPTS.md and the promotion steps are in NEEDS_IMAGE.md:
move the file, wire RELATED_ARTICLES, link it from the hub's federal section.
Both of those wait for the move, because a RELATED_ARTICLES entry or a hub link
pointing at a staged slug is a dead link until the file is in content/guides.

What it covers, all against primary text: the Lacey Act's two halves, the
injurious wildlife list and the 2017 D.C. Circuit ruling that ended the
interstate transport ban, CITES including the CoP20 amendments that took effect
5 March 2026 and the Chilean rose tarantula listing that takes effect 5 June
2027, the Captive Wildlife Safety Act and the Big Cat Public Safety Act, the FDA
four-inch turtle rule, and the Wild Bird Conservation Act.

The 52 state pages and the 52 animal pages both stop at the state line, and
every one of them has a reader who then asks "but is it legal federally."
Nothing on the site answers that.

What it has to cover:

- **Lacey Act** (16 U.S.C. § 3371 et seq.), including the injurious wildlife
  listings under 18 U.S.C. § 42 that actually bar interstate transport
- **CITES**, and the practical point that Appendix I vs II decides whether a
  captive-bred animal can cross a border at all
- **Captive Wildlife Safety Act**, which is the big-cat interstate rule
- **Big Cat Public Safety Act** (2022), the one most summaries still get wrong
  because it grandfathered existing owners
- **FDA four-inch turtle rule** (21 C.F.R. § 1240.62), still in force since
  1975 and the reason red-eared slider hatchlings are sold "for educational
  purposes"
- **Wild Bird Conservation Act**, which is why almost every parrot in the US
  trade is captive-bred

Research rule applies: real sources, quoted, no writing from memory. Wire it
into RELATED_ARTICLES and give it in-body internal links to the state hub and
to species pages the rule actually touches.

## 2. Finish converting the per-animal guide hubs

Partly done. Each species hub should carry the same block structure as the
converted ones. Work through the unconverted list rather than sampling.

## 3. Re-check the state law entries

Several cells rest on bills and petitions that were pending when they were
written and are dated July/August 2026 rather than confirmed:

- **PA HB 692** (sugar gliders): status as of the last check was pending, and
  the entry reads as if that is settled
- **CA ferret Petition 2025-003**: Fish and Game Commission docket, outcome not
  captured
- **SC 2025 venomous reptile bill**: same problem

Also worth a pass: the two internal contradictions already found and left in
because the statute itself contradicts itself (Nevada NAC 503.110 disagreeing
across its own two columns) should carry a note saying so rather than reading
as an error.

Re-verify, then bump `verifiedOn`. Do not bump a date without re-reading the
source.

## 4. Backlink outreach

Playbook and templates are in `docs/OUTREACH.md`. The short version:

- The site has 2 editorial referring domains against 21 from one PBN network.
  Twenty to forty genuine ones would move position.
- Lead with corrections, not requests. Four verified factual errors in
  circulation are listed in OUTREACH.md, and the Massachusetts ferret one is
  the best opener.
- State and regional herpetological societies are the highest-yield targets,
  and the pitch is the individual state page, not the homepage.
- Qwoted and Featured for journalist queries. Reply fast and in full.
- Wikipedia: Talk page only, with the connection disclosed. Never add the link.
- Reddit and Facebook groups: answer about ten questions for every one where
  you link, and write every answer so it stands alone without the link.

Keep a list of who was contacted, when, and whether it landed. Without one you
will re-contact people.
