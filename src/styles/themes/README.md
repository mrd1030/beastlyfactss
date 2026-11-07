# Color themes

Each file holds one full set of the site's color tokens, light (`:root`) and
dark (`.dark`), saved so the site can go back to it. None of them is imported:
the live colors are the `:root` and `.dark` blocks in `src/index.css`.

| File | What it is |
|---|---|
| `warm-seagreen.css` | Live from 2026-11-07 (autumn): warm cream and the original dark green, seagreen accent |
| `original-orange.css` | The site before 2026-11-07: same surfaces, burnt orange accent |
| `deep-pine.css` | Winter candidate: gray-green and blue-green navy, seagreen in light, gold in dark |
| `harbor-navy.css` | Tried and not chosen: cool blue-white and navy, seagreen accent |

To switch, copy a file's values over the matching tokens in `src/index.css`,
then check dark mode on the home page, an article, a care guide hub, Beastle,
Chronicles and the law map before merging.
