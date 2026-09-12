# Alternates

Article heroes replaced on 2026-09-12 because the animal in the frame was not
the species the article is about (docs/TODO.md item 6). Same convention as
`public/assets/guides/alternates/`: kept rather than deleted, under the
filenames they shipped with, so nothing here is relabelled as a species it is
not.

| File | Shipped as | What it actually shows |
|---|---|---|
| `hedgehog-cost.jpg` | African pygmy hedgehog cost guide | A European hedgehog, *Erinaceus europaeus*: dark grey face, dark brown spines, heavy build. |
| `hedgehog-handling.jpg` | African pygmy hedgehog handling guide | Curled in cupped hands, but the dark face and spines read European rather than pygmy. Lower confidence than the cost frame. |
| `hedgehog-feeding.jpg` | African pygmy hedgehog feeding guide | Same doubt as the handling frame: a grey-brown face and dark muzzle in dim light, closer to the European species. |
| `corydoras-catfish-health-issues.jpg` | Corydoras health guide | A wide-mouthed catfish with long trailing whiskers, closest to a channel catfish. Not an armoured cory. |
| `corydoras-catfish-handling.jpg` | Corydoras handling guide | Elongated forked-tail fish with a large catfish above them. Neither shape is a cory. |
| `corydoras-catfish-feeding.jpg` | Corydoras feeding guide | **Correct species**, retired for size: it shipped at 512x279 against the 1168x784 house size, so it upscaled soft in every slot. Usable if a small image is ever wanted. |

Nothing in `src/` or `content/` points at this folder. The files are here to be
picked up deliberately, not to be served.
