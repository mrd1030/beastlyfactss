> **Superseded.** The real care package system lives in
> `content/CAREPACKAGE Guides/`: `source/_template.html` (the v3 34-page
> skeleton), `TEMPLATE_GUIDE.md` (page-by-page content sourcing), and
> `rebuilt/` for the PDFs. Build new packages there, not here.
>
> Ball Python has already been rebuilt on that template at
> `content/CAREPACKAGE Guides/source/ball-python.html` (v2.0, 34 pages).
> Betta Fish, Hamster, Rabbit, Tarantula and Corn Snake are still only in
> this folder and need porting.

# Care package sources

The printable PDF care packages sold on Gumroad. Each package is one
self-contained HTML file rendered to PDF with headless Chrome, which is how the
Bearded Dragon v2.0 package was produced, so page breaks, fonts and color
handling match the existing series exactly.

```
care-packages/
  assets/package.css   shared design system for every package
  <slug>.html          one file per package, one <section class="page"> per page
  build.mjs            renders HTML to pdf/*.pdf
  pdf/                 the PDFs you upload to Gumroad
```

## Build

```sh
node care-packages/build.mjs               # everything
node care-packages/build.mjs ball-python   # one package
```

Chrome is found automatically at the Playwright path or the usual system
locations. Set `CHROME_BIN` to override.

## Design system

`assets/package.css` was extracted from the Bearded Dragon v2.0 PDF, so the
palette, type scale and page furniture are fixed. Do not restyle per species:
the series reads as one product line.

- Page: letter, `.page` carries 0.62in top / 0.65in sides padding, footer rule
  pinned 0.4in from the bottom.
- Type: Times New Roman for headings, Arial for body, matching the fonts the
  v2.0 PDF embeds. No webfonts, so output is identical on any machine.
- Accents: rust `#b5551f` eyebrows, `#8c4118` subheads and table headers.
- Callouts: `.callout` (blue, neutral context), `.callout.alert` (red, a hard
  rule or an urgent symptom), `.callout.good` (green, reassurance or payoff).
- Cover art is pulled from `public/assets/guides/<slug>.jpg` by relative path.
  Set `object-position` inline on the `<img>` when the default center crop
  misses the animal's head.
- Cover colors are tokenized on `.cover` so a package can dress its cover for
  the animal's habitat without touching the interior. Default is the warm earth
  palette from v2.0; add `class="page cover blackwater"` for the deep teal
  variant, which suits fish and amphibians where the earth palette reads like
  the wrong habitat. The interior stays house rust either way, so the series
  still reads as one product line. Variants so far: `blackwater` (fish and
  amphibians), `burrow` (arid-steppe rodents), `meadow` (grazing herbivores),
  `forestfloor` (invertebrates), `pineclay` (a hotter red clay for the
  colubrids). Add a new one as another token block rather than styling a cover
  inline.

## Page structure

Every package follows the same spine. 22 pages is the usual length; where a
species has less to say the package runs shorter, but never under 20:

| Pages | Section |
| --- | --- |
| 1 | Cover |
| 2 | Contents |
| 3 | How to use this package |
| 4 | Section 01, quick profile and cost overview |
| 5 to 9 | Section 02, full care guide, ending on mistakes and enrichment |
| 10 to 13 | Section 03, health and common issues |
| 14 to 15 | Section 04, quick reference and the print-and-post card |
| 16 to 21 | Section 05, owner tools |
| 22 | Glossary and colophon |

## House rules for the content

- No external links, affiliate links, or website CTAs. The PDF is not a mirror
  of the site.
- Numbers come from the species' own guides in `content/guides/`. Where two
  guides disagree, the dedicated guide wins, and the same number then has to
  appear identically on the care page, the quick-reference page and the
  emergency card.
- Every health entry follows the same shape: cause, signs, diagnosis or
  response, recovery.
- After editing, rebuild and check that no page's content runs into the footer
  rule. Content must end above roughly 10.3in on the page.

## Publishing

New packages go into `src/lib/data/carePackages.js` as `status: 'coming-soon'`
with no `image` or `gumroadUrl`, which renders them in the teaser row. Flip to
`status: 'live'` and fill in `image`, `thumbnail` and `gumroadUrl` once the
Gumroad listing is actually published.
