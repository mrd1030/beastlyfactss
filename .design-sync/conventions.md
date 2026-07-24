## Beastly Facts — brand tokens

This is a **tokens-only** sync (no components yet) — a playful pet-facts
content site's color palette, fonts, and radius scale, shipped as CSS custom
properties. Build with these directly; there is no component library to
import from this DS yet.

### Setup
No provider or wrapper needed — just load `styles.css` (it pulls in the real
font files and the token declarations). Tokens are scoped on `:root` for
light mode; wrap any subtree in a container with class `dark` to switch to
the dark palette (a class toggle, not a `prefers-color-scheme` query or a
`data-theme` attribute).

### The token vocabulary
Colors are stored as raw HSL **channel triples**, not full color values — always
wrap them: `hsl(var(--primary))`, never bare `var(--primary)`.

| Token | Role |
|---|---|
| `--background` / `--foreground` | page background / default text |
| `--card`, `--card-foreground` | card surface + its text |
| `--popover`, `--popover-foreground` | popover/menu surface + text |
| `--primary`, `--primary-foreground` | brand primary (deep forest green) + text on it |
| `--secondary`, `--secondary-foreground` | brand accent (warm orange), used for links/CTAs |
| `--accent`, `--accent-foreground` | teal accent for highlights |
| `--muted`, `--muted-foreground` | subdued backgrounds/text (captions, dividers) |
| `--destructive`, `--destructive-foreground` | errors/danger |
| `--border`, `--input`, `--ring` | border color, input border, focus ring |
| `--chart-1` … `--chart-5` | data-viz palette |
| `--sidebar-*` | sidebar surface/text/border, mirrors the main set |
| `--radius` | base corner radius (`0.75rem`); use `var(--radius)`, `calc(var(--radius) - 2px)`, `calc(var(--radius) - 4px)` for the lg/md/sm scale |

Both a light set (`:root`) and a full dark set (`.dark`) are shipped for every
token above — switching the `dark` class is enough, nothing needs
recalculating.

### Fonts
- `--font-display: 'Fredoka', sans-serif` — headings, buttons, anything
  playful/bold. Weights 400–700.
- `--font-body: 'Nunito', sans-serif` — body copy, UI text. Weights 400–800.

Apply with `font-family: var(--font-display)` / `var(--font-body)`. Both load
from Google Fonts at runtime (already wired into the bundle's CSS) — no local
font files to manage.

### Where the truth lives
`styles.css` → `fonts/fonts.css` (the real Fredoka/Nunito `@font-face` rules)
and `_ds_bundle.css` (the token declarations, copied verbatim from the site's
own `src/index.css`). If a future sync adds real components, they'll bring
their own `.d.ts`/`.prompt.md` — for now this token set is the whole contract.

### Example
```css
.fact-card {
  background: hsl(var(--card));
  color: hsl(var(--card-foreground));
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  font-family: var(--font-body);
}
.fact-card h3 {
  font-family: var(--font-display);
  font-weight: 700;
  color: hsl(var(--primary));
}
.fact-card .cta {
  background: hsl(var(--secondary));
  color: hsl(var(--secondary-foreground));
  border-radius: calc(var(--radius) - 2px);
}
```
