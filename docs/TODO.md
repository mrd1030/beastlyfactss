# To do

The working list. Session task lists do not survive a cloud session, so this
file is the one that counts. Cross items off here, not in a chat window.

**Open work only.** Audited against the repo 2026-09-22: three items were
finished and moved to `archive/docs-completed/TODO_COMPLETED_2026-09-22.md`,
and two duplicates were merged. What follows is what is actually left, in the
order worth doing it.

---

## 1. Re-check the state law entries

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

**Scoped 2026-09-22 against `legalStatus.json`.** The dataset is in better shape
than this item implied: 1,570 of the 2,704 cells were re-verified in September
and only 1,134 still sit on the August pass. Searching the August cells for
bill and petition language returns 12 hits, and 11 of those are false positives
where "bill" or "proposed" appears incidentally in a note.

The one real hit is the PA pair:

| Cell | Status | verifiedOn | The problem |
|---|---|---|---|
| `sugar-glider` / PA | banned | 2026-08-04 | note says "the same pending bill covers both" |
| `hedgehog` / PA | banned | 2026-08-04 | same agency interpretation, same bill |

So the job is four lookups, not a sweep:

1. **PA HB 692.** Did it move? Both PA cells depend on it and both read as
   settled.
2. **CA ferret Petition 2025-003.** `ferret` / CA is banned on the 2026-08-04
   pass. Fish and Game Commission docket.
3. **SC 2025 venomous reptile bill.** The SC snake cells are legal on the
   2026-08-04 pass.
4. **Nevada NAC 503.110.** Add the note saying the statute contradicts itself,
   so the cell stops reading as a data error.

Why this is first: legal pages are 13.6% of the site and take 37% of its
clicks, at 0.95% clickthrough against a 0.64% site average, per the first
Search Console export (28 days to 2026-09-19). It is the strongest section on
the site and the one an AI Overview will not summarise, because jurisdiction
-specific legality carries liability. Accuracy there is worth more than
anything else on this list.

---

## 2. Wrong-species article art

**Status 2026-09-14: not finished.** Five batches done, 26 of about 110 species
and 115 of 770 article heroes opened, 16 replaced, 5 open (angelfish feeding,
neon tetra health, three guppy frames). The guide folder (183) is fully checked;
this folder is not. Continue with the suggested order at the end of this section.

Started 2026-09-12, after the guide folder was finished. `public/assets/images/`
holds 770 article heroes, about seven per species (cost, handling, health
issues, tank setup, feeding, enrichment, plus a tank-setup infographic). Three
species sampled first, chosen because their guide hero had already failed:

**Status: all three sampled species fixed 2026-09-12.** Ten replacements
installed, the old frames archived in `public/assets/images/alternates/` with a
README. Prompts are in IMAGE_PROMPTS.md under "Article hero fixes".

- **Emperor scorpion: 4 replaced.** `cost`, `handling`, `health-issues` and
  `tank-setup` all showed orange or yellow legs, and two of them the second pair
  of pincers no scorpion has. All four are now glossy black throughout with one
  pair of pincers and a single telson. `feeding` and `enrichment` were already
  correct, and the tank-setup infographic is fine.
- **Hedgehog: 3 replaced.** `cost` was plainly the European hedgehog and
  `handling` and `feeding` leaned the same way. All three now show the pygmy's
  banded cream quills, white face and pink-brown snout. `health-issues` and
  `enrichment` were already correct and were left alone.
- **Corydoras: 3 replaced.** `health-issues` was a wide-mouthed catfish with
  long whiskers and `handling` was a group of elongated forked-tail fish with a
  large catfish above them. `feeding` was the right species but shipped at
  512x279, so it was reshot for size at the same time. `tank-setup` and
  `enrichment` were already correct; `cost` is borderline and was left.

The important finding is that **the error is per image, not per species**. Half
of a species' set can be right and half wrong, so there is no shortcut of
replacing a whole species at once, and no way to infer a set from its guide
hero. Nineteen images checked so far, seven wrong.

### Second batch: the fish, 2026-09-12

Four more species, 24 images. Two clear misses, two to look at:

- **`angelfish-feeding.jpg`** is a rounded striped cichlid with short fins, no
  trailing dorsal, anal or ventral filaments. Not *Pterophyllum*. The other five
  angelfish files are correct freshwater angels in planted tanks.
- **`neon-tetra-health-issues.jpg`** has the red stripe running from behind the
  gill all the way to the tail, which is a cardinal tetra. On a neon the red
  starts mid-body. The other five neon files are correct.
- **Guppy: the set is muddled rather than plainly wrong.** `feeding` is a
  deep-bodied spotted livebearer that reads platy, and `cost` and
  `health-issues` mix obvious platies in among the guppies. `enrichment` is a
  textbook fancy guppy male. Worth a human eye before spending art, since
  platies and guppies share a tank and a body plan.
- **Oscar: all six correct.** Worth recording, because the oscar's *guide* hero
  was one of the wrong ones. Its article set was fine the whole time, which is
  the per-image finding again.

Running total for the article folder: 7 species checked of about 110, 43 images
opened, 10 replaced and 4 open.

### Third batch: the snakes, 2026-09-12

Seven species sampled across corn snake, California kingsnake, milk snake,
hognose, ball python, boa constrictor and rosy boa, 18 images. **One miss:**

- **`corn-snake-cost.jpg`** showed orange and white bands that wrap the body,
  which is milk snake or kingsnake patterning. **Replaced 2026-09-12** with a
  corn snake carrying dark-edged saddles that stop at the flanks.

Everything else in the snake sets is right, including several that could easily
have gone wrong: the hognose handling frame shows the upturned rostral scale
clearly, the ball python set is correctly blocky-headed throughout despite its
guide hero being one of the replaced ones, and
`milk-snake-vs-corn-snake.jpg` gets the comparison exactly right, bands on the
left and saddles on the right, which is the image that would have been worst to
get wrong.

Running total for the article folder: 14 species of about 110, 67 images opened,
10 replaced, 5 open (angelfish feeding, neon tetra health, corn snake cost, plus
the muddled guppy set).

### Fourth batch: small mammals, 2026-09-12

Gerbil, degu, chinchilla and hamster, 12 images. **Three misses, all gerbil, all
replaced 2026-09-12:**

- **`gerbil-cost.jpg`** and **`gerbil-health-issues.jpg`** show rodents with
  bold dark dorsal stripes, closer to an African striped mouse or a chipmunk
  than to a Mongolian gerbil, which has a plain agouti back.
- **`gerbil-tank-setup.jpg`** has a grey animal with a long naked tail. A
  gerbil's tail is furred end to end with a dark tuft; a bare tail makes it a
  mouse.

`gerbil-feeding.jpg` is textbook and `gerbil-enrichment.jpg` and
`gerbil-handling.jpg` are fine, so this is the same per-image split as
everywhere else. Degu, chinchilla and hamster sets are all correct.

One non-species note: `chinchilla-health-issues.jpg` stands the animal on a wire
mesh floor, which causes the foot problems that guide is partly about. Right
species, wrong husbandry, and it sits on the page where it contradicts the text.
Worth a reshoot eventually but not a species error.

Running total for the article folder: 18 species of about 110, 79 images opened,
14 replaced, 5 open: the angelfish feeding frame, the neon tetra health frame,
and the three muddled guppy frames that want a human eye.

### Fifth batch: monitors and lizards, 2026-09-12

Savannah monitor, ackie monitor, uromastyx, tokay, veiled chameleon, leopard
gecko, crested gecko and blue-tongue skink, 18 images. **One species miss and
two defects of other kinds, prompts written for all three:**

- **`blue-tongue-skink-handling.jpg`**: slender limbs with long spidery toes on
  a small body where a blue-tongue is heavy and sausage-shaped on short stubby
  legs. **Replaced 2026-09-12.**
- **`crested-gecko-health-issues.jpg`**: correct species, but the digital scale
  carried invented button labels ("MUZERS", "Cund", "BRV") and a nonsense
  readout. **Replaced 2026-09-12** with a plain scale and a blank display.
- ~~`tokay-gecko-handling.jpg`~~: **flag withdrawn.** I called it right animal,
  wrong page for showing no handling. Mike questioned whether tokays are a
  hands-on species at all, and the article settles it: "Should You Handle a
  Tokay Gecko? Probably Not Often", a display animal that gapes, barks and bites
  when a hand enters. The gaping frame is the correct illustration and stays.
  The lesson is to read what a handling guide recommends before treating a
  hands-off image as a mismatch.

Everything else passed, including both monitor sets. Worth noting that the
crested gecko set is fine throughout, which downgrades the earlier
low-confidence flag on its guide hero: the species reads consistently across
seven article frames.

Running total for the article folder: 26 species of about 110, 115 images
opened, 16 replaced, 5 open: the angelfish feeding frame, the neon tetra health
frame, and the three muddled guppy frames.

### Separate from species: 12 badly undersized files

**Deferred 2026-09-12 by Mike's call.** One of the twelve, the corydoras feeding
frame, was reshot anyway because its species fix and its size fix were the same
job. The other eleven stand.

A dimension scan of all 778 files (cheap, no image reading) found twelve at
512px wide, against the 1168px house size, so they upscale soft in every slot
that renders them:

`ackie-monitor-feeding`, `african-grey-parrot-feeding`,
`corydoras-catfish-feeding`, `degu-feeding`, `fire-skink-handling`,
`fire-skink-health-issues`, `green-iguana-cost`, `quaker-parakeet-cost`,
`quaker-parakeet-handling`, `quaker-parakeet-health-issues`,
`quaker-parakeet-tank-setup`, `sulcata-tortoise-feeding`.

The 784x1168 files in that scan are deliberate portrait art and are fine.
`shima-enaga-snow-fairy-facts` at 800x600 is a different aspect and worth a
look but not urgent.

### Suggested order for the rest

Going alphabetically through 770 images is the wrong shape of job. The species
worth checking first are the ones with a common look-alike or an already proven
failure: the remaining fish (neon tetra, guppy, angelfish, oscar, goldfish,
koi, discus), the snakes that get confused with each other (corn, milk,
kingsnake, hognose, rosy boa, ball python, boa), the small mammals that get
swapped (gerbil, degu, chinchilla, hamster), the monitors, and the parrots that
share a silhouette. That is roughly 25 species, about 175 images.

---

## 3. Router hubs: the 24 dog and cat hubs left

Checked 2026-09-15 against `src/lib/data/guides/*.js`: a hub is a router hub
when its entry carries `firstWeek` rows (RULES, Hubs). 84 of 108 done, 24
still rendering the legacy care sheet, and all of them are dogs or cats. Batches of five, one branch each,
per the READMEFIRST process. Dogs and cats last.
Batches I and J both merged to main 2026-09-15 as 05a6fa6b. Batch I
(African fat-tail gecko, corydoras catfish, red-footed tortoise, degu,
savannah monitor) passed its Fable check at grade B-.
Batch K (tiger salamander, parrotlet, koi, emperor scorpion, rosy boa)
done, checked and merged to main 2026-09-15. Pass grade B.
Batch L (fire-bellied toad, quaker parakeet, molly, praying mantis, argentine
tegu) done, checked and merged to main 2026-09-15 as 837d5cd. Pass grade B.
Amphibians and birds are finished.
Batch M (platy, cherry shrimp, green anole, leaf-tailed gecko, mouse) done,
checked and merged to main 2026-09-15 as 4a39f2f. Pass grade B-. Geckos are
finished: leaf-tailed gecko was the last one.
Batch N (bristlenose pleco, discus, swordtail, zebra danio, ghost shrimp) done
and checked on branch
claude/bristlenosepleco-discus-swordtail-zebradanio-ghostshrimp 2026-09-15, not
merged. Pass grade: pass, after fixes. Fish are finished: this batch took the
last four.
Batch O (giant millipede, jumping spider, hissing cockroach, stick insect) done,
checked and merged to main 2026-09-15 as 84c4b559. Four species rather than
five, because that is what invertebrates had left. Pass grade B. Invertebrates
are finished.
Batch P (fire skink, Jackson's chameleon, uromastyx, flying squirrel) done and
checked on branch claude/invertebrates-readmefirst-batch-ayolwx 2026-09-15, not
merged. Four species again, because that is what lizards and small mammals had
left between them. Pass grade C+. Lizards and small mammals are finished. That
makes 84 router hubs; the 24 left are cats (10) and dogs (14), so every batch
from here is a dog or cat batch.
Batch J (mourning gecko, ackie monitor, garter snake, oscar, amano
shrimp) passed its check at grade C+. Next is batch K: pick five, one per
class, where a set from a recent batch points at them. Worker Opus 5 high effort, one Fable closing check per batch (the
batch prompt in READMEFIRST has the reasoning).

Done (69):

- [x] axolotl, White's tree frog
- [x] African grey, budgie, cockatiel, cockatoo, conure, lovebird
- [x] betta fish, goldfish, guppy
- [x] crested gecko, leopard gecko
- [x] hermit crab, tarantula
- [x] bearded dragon, blue-tongue skink, green iguana
- [x] chinchilla, ferret, guinea pig, hamster, rabbit, rat
- [x] ball python, boa constrictor, corn snake, hognose snake
- [x] box turtle, red-eared slider, Russian tortoise
- [x] pacman frog, zebra finch, angelfish, tokay gecko, sugar glider
      (batch F, merged to main 2026-09-14)
- [x] canary, neon tetra, veiled chameleon, California kingsnake, hedgehog
      (batch G, merged to main 2026-09-14)
- [x] cardinal tetra, milk snake, gargoyle gecko, gerbil, sulcata tortoise
      (batch H, merged to main 2026-09-15)
- [x] African fat-tail gecko, corydoras catfish, red-footed tortoise, degu,
      savannah monitor (batch I, merged to main 2026-09-15)
- [x] mourning gecko, ackie monitor, garter snake, oscar, amano shrimp
      (batch J, merged to main 2026-09-15)
- [x] tiger salamander, parrotlet, koi, emperor scorpion, rosy boa
      (batch K, merged to main 2026-09-15)
- [x] fire-bellied toad, quaker parakeet, molly, praying mantis, argentine
      tegu (batch L, merged to main 2026-09-15)
- [x] platy, cherry shrimp, green anole, leaf-tailed gecko, mouse
      (batch M, merged to main 2026-09-15)
- [x] bristlenose pleco, discus, swordtail, zebra danio, ghost shrimp
      (batch N, on branch 2026-09-15, not merged)
- [x] giant millipede, jumping spider, hissing cockroach, stick insect
      (batch O, merged to main 2026-09-15)
- [x] fire skink, Jackson's chameleon, uromastyx, flying squirrel
      (batch P, on branch 2026-09-15, not merged)

To do (24):

- [ ] Amphibians (0): none left, fire-bellied toad was the last one
- [ ] Birds (0): none left, quaker parakeet was the last one
- [ ] Fish (0): none left, batch N took the last four
- [ ] Geckos (0): none left, leaf-tailed gecko was the last one
- [ ] Invertebrates (0): none left, batch O took the last four
- [ ] Lizards (0): none left, batch P took the last three
- [ ] Small mammals (0): none left, flying squirrel was the last one
- [ ] Snakes (0): none left, rosy boa was the last one
- [ ] Cats (10): universal, American shorthair, Bengal, domestic shorthair,
      Maine Coon, Persian, Ragdoll, Scottish Fold, Siamese, Sphynx
- [ ] Dogs (14): universal, small breed, medium breed, large breed, beagle,
      border collie, bulldog, dachshund, French bulldog, German shepherd,
      golden retriever, Labrador, Rottweiler, Siberian husky

Old items 2 and 7 were the same job described twice, and are merged here. The
84 non-dog, non-cat hubs are done; RULES says dogs and cats go last, and they
are what is left.


---

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

---

## 5. Beef-up batches 6 to 10: decide whether they ever happen

Retired 2026-09-22 and archived to
`archive/docs-completed/BEEF_UP_PLAN_COMPLETED_2026-09-22.md`, which keeps the
per-slug scoping. The `/beef-up` command is deleted.

What is actually true: batches 1 to 5 shipped, 20 articles. Batches 6 to 10, the
"How to pick one up" sections for 27 hands-on handling guides, never ran. The
section heading exists on 1 of the 27 and that one predates the plan. Checked
three ways on 2026-09-22: the articles, every commit in history, every branch
local and remote. A session had already found the same thing on 2026-09-16
(commit a7d4b7a). If a session did write them, its branch was never pushed.

Why it is parked rather than queued: handling guides run 0.35% clickthrough and
cost guides 0.32%, the two worst page types on the site, against legal at 0.95%
taking 37% of all clicks from 13.6% of the pages. Twenty-seven more handling
guides is the wrong place to spend the words while that holds.

What would reopen it: a handling guide earning clicks, or a reason to want the
pick-up sections that is not traffic. The research in the archived plan is
per-slug and real, so reopening costs nothing but the writing.

---

## 6. The monthly legal source check

Added 2026-09-22, extended the same day to read what it finds.
`scripts/check-legal-sources.mjs`, run by `.github/workflows/legal-sources.yml`
at 09:00 UTC on the first of each month.

### The two signals

**The page changed.** All 208 primary source URLs in `legalStatus.json` are
fetched, normalized to strip the furniture, and hashed against
`docs/legal-source-hashes.json`. Weak on its own: a statute page can gain a
banner without the law moving.

**A quote we cite is gone.** Every cell carries the sentence it rests on. The
check searches the fetched page for eight-word windows from that sentence, and
reports the cell when none of them are there. This is the signal worth waking
up for, and it costs nothing but a string search.

Both are reported as transitions, never as states. A quote that was already
unfindable when the baseline was written stays unfindable every month, and a
checker that re-reports it every month is a checker nobody opens.

Still no model call and no API key in the check itself. It is 208 HTTP GETs and
a hash, a few minutes of CI a month.

### When it fires

The check writes `docs/legal-source-report.md`: each flagged source paired with
every cell resting on it and what each of those cells currently claims, so the
page can be judged against our own words without first looking up twelve cells.

That work order goes two places. It is the body of an issue labelled
`legal-matrix`, and, when `CLAUDE_CODE_OAUTH_TOKEN` is set as a repository
secret, it is handed to a Claude session that reads only the flagged sources,
edits only the named cells, refreshes the baseline and opens a pull request.
Without the secret the reading job is skipped and the issue arrives on its own,
complete enough to hand to a session by pointing at the file.

**Not set yet.** The token comes from `claude setup-token` in the CLI, which
bills against the subscription rather than opening a pay-as-you-go API balance.
Until it is set, the check runs and files its issue exactly as before and the
reading job skips.

The session is instructed that leaving a cell alone is correct behavior when a
source will not load or a section cannot be found, and that it must not bump
`verifiedOn` on anything it could not verify. A guessed cell is the one outcome
this whole job exists to prevent.

### What it does not do

- It does not fail on unreachable sources. Around 30 of the 208 refuse a
  datacentre fetch (mostly 503 and 403, one 405, one 307). **None returns 404**,
  so nothing has actually moved. A job that went red for a bot block would be
  muted inside two months.
- It does not report a difference that will not reproduce. Anything differing
  from the baseline, by hash or by a missing quote, is fetched a second time,
  and only a difference that repeats is reported. That was not optional: the
  first pass flagged 6 of 177 sources ten minutes after the baseline was
  written, with no law having moved, and two consecutive fetches of those pages
  were byte-identical.
- It does not report furniture. A page that moved less than 0.5% while every
  cited quote still verifies, or a source no cell cites at all, is counted and
  dropped rather than put in front of a reader.
- It cannot check a PDF's quotes. 12 or so sources are PDFs or .docx, where the
  fetched bytes are not words. Hash change is the only signal those give.
- It cannot check an opaque page's quotes. 37 sources render their statute in
  JavaScript, or sit behind a viewer, so the fetch returns a shell and every
  quote goes missing at once. A source whose quotes ALL miss is classed opaque,
  not changed, and never alarms.

### Open: the 84-quote backlog

The first quote-verification pass found 84 cells across 19 sources whose quoted
sentence could not be found on the live page. They were recorded in the baseline
so they do not alarm every month, which means they will otherwise sit there
forever. Biggest clusters: `ri-250-40-05-3` (22 cells), `de-903` (9),
`or-635-056-0060` (8), `az-r12-4-406` (7), `va-4vac15-30-40` (7),
`ks-115-20-3` (5), `nv-nrs-503-597` (4), `wa-rcw-16-30` (4).

Some share is the matcher rather than the matrix: a quote stitched from a table,
or one accurate but transcribed loosely. Some share is real drift. Nobody has
looked yet, and the two cannot be told apart without opening the pages.

Worth a session of its own, source by source rather than cell by cell, since the
19 sources are the unit of work and not the 84 cells. Not urgent: these are
cells already published and already sourced, and a quote that has drifted is not
the same as a status that is wrong.

