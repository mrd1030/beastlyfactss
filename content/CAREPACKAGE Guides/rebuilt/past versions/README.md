# Past versions

Superseded builds, kept so an earlier edition can still be reproduced or
compared against. Nothing here should be uploaded to Gumroad.

Version numbers here are **guide** versions: how many times that guide has been
revised. The template generation it was built on is a separate number (t3 for
everything on `source/_template.html`, pre-t3 for the older 22-page layout) and
never moves the guide number. See TEMPLATE_GUIDE.md, "Guide version and template
version are different numbers".

| File | Superseded by | Why |
| --- | --- | --- |
| `Ball_Python_Care_Package_v1.pdf` | 2.0 | 33 pages. Substrate and handling shared one page, which compressed the handling technique and settling-in guidance |
| `Ball_Python_Care_Package_v2.pdf` | 2.1 | Baseline humidity of 55 to 70%, corrected to the 55 to 65% ambient figure the ReptiFiles and Zen Habitats care sheets give |
| `Betta_Fish_Care_Package_v1.pdf` | 2.0 | Feeding window of about 60 seconds, since corrected to 1 to 2 minutes, and running costs of $6 to $20 a month that understated heater electricity |
| `Betta_Fish_Care_Package_v2.pdf` | 2.1 | The shared t3 spacing rules were missing from the head of this file. Adding them changed no words and no type sizes |
| `Tarantula_Care_Package_v2.pdf` | 2.1 | A layout-only tightening pass across all 43 pages that changed no words and no type sizes. Minimum page headroom went from 19px to 31px |
| `BeastlyFacts-Rabbit-Care-Package.pdf`, `BeastlyFacts-Tarantula-Care-Package.pdf` | 2.0 | Not in this folder, see the note below. 22 and 21 pages on the old parallel layout, rebuilt at 39 and 43 pages on t3 |

The v1 builds of Rabbit, Tarantula, Hamster and Corn Snake are **not** here.
Those came out of the superseded parallel implementation and still sit at
`care-packages/pdf/BeastlyFacts-<Animal>-Care-Package.pdf`, which that folder's
README already flags. Nothing is lost; they simply predate this folder.

Rabbit has no file in this folder. Its current edition is still 2.0, and its
only earlier build is the pre-t3 one named above.

`Bearded_Dragon_Care_Package.pdf` is **not** here despite the existence of a
3.0 build. The 22-page unversioned file is the edition currently on sale
(`carePackages.js` has bearded-dragon at `status: 'live'`, `version: '2.0'`),
and `Bearded_Dragon_Care_Package_v3.pdf` is the newer build that has not been
published yet. Don't move the 22-page one here until the 3.0 listing goes up.

`Goldfish_Care_Package.pdf` is **not** here either, for the same reason.
`carePackages.js` has goldfish at `status: 'live'`, `version: '1.0'`,
`pages: 21`, and the Gumroad listing still describes the 21-page edition, so
that file is what buyers currently receive. `Goldfish_Care_Package_v2.pdf` is
the 39-page rebuild waiting on a listing update. Move the 21-page file here,
and update `carePackages.js` to version 2.0 with the new page count and blurb,
only once the Gumroad listing goes up. Doing either one early leaves the store
describing a product nobody is being sent.

## The 3.0 renumbering of September 2026, and why it was undone

Ball Python, Betta Fish, Rabbit and Tarantula were renumbered to 3.0 on the
reasoning that they were built on the v3 package template and so should carry a
3. That was wrong. A version number describes the document, not the skeleton
under it: a guide starts at 1.0 the day it is published, however mature the
template it was built from. Goldfish had the same error built in from its first
rebuild, jumping 1.0 straight to 3.0 and skipping its real second edition.

All five were put back and re-rendered, and the template generation now has its
own field:

| Guide | Was labelled | Is | Template |
| --- | --- | --- | --- |
| Ball Python | 3.0 | 2.1 | t3 |
| Betta Fish | 3.0 | 2.1 | t3 |
| Rabbit | 3.0 | 2.0 | t3 |
| Tarantula | 3.0 | 2.1 | t3 |
| Goldfish | 3.0 | 2.0 | t3 |
| Hamster | 3.0 | 3.0, correct already | t3 |
| Bearded Dragon | 3.0 | 3.0, correct already | t3 |

Hamster and Bearded Dragon reached a genuine third edition on their own count,
so their numbers stood. Hamster's version history had picked up a line claiming
the number was corrected to match the template, which was removed.

Betta Fish and Tarantula kept the layout-only changes that rode along with the
bad renumber, so those builds are real revisions and are numbered 2.1. Ball
Python's and Rabbit's renumber builds changed nothing at all, so the 3.0 files
were deleted rather than archived, and with them the 2.1 and 2.0 files that had
been archived under them: those two editions are current again and live in
`rebuilt/`. No 3.0-numbered file ever went on sale, since all five were
unlisted or still selling an earlier edition.

The re-render also added the Template column to every version history table and
the template generation to every colophon, so a guide now states both numbers on
its last page.

Page counts are unchanged: Ball Python 34, Betta Fish 36, Rabbit 39,
Tarantula 43, Goldfish 39.
