# Care Package Bucket

What is in the Supabase bucket `care-packages` right now, and which full-named file in the repo matches each live copy. Keep this current: update it in the same push as every upload.

Last checked 2026-10-04 against the bucket itself (storage.objects): 20 live files, every one byte-for-byte the same as the repo PDF listed for it.

## The one rule that cannot bend

The live copy of each package must be named exactly `<package-id>.pdf` (for example `hamster.pdf`), in the bucket's top level. The site's download route reads that name and nothing else. A live file renamed to a version name means every buyer's download for that package fails. Version names belong only in the `Past versions` folder.

## Live now

| Package | Live file (never rename) | Edition | Full-named copy in the repo (`content/CAREPACKAGE Guides/rebuilt/`) | Size (bytes) |
|---|---|---|---|---|
| Bearded dragon | `bearded-dragon.pdf` | 4.1 | `Bearded_Dragon_Care_Package_v4.1.pdf` | 2,939,156 |
| Leopard gecko | `leopard-gecko.pdf` | 3.1 | `Leopard_Gecko_Care_Package_v3.1.pdf` | 2,757,007 |
| Crested gecko | `crested-gecko.pdf` | 3.1 | `Crested_Gecko_Care_Package_v3.1.pdf` | 2,522,111 |
| Gargoyle gecko | `gargoyle-gecko.pdf` | 1.1 | `Gargoyle_Gecko_Care_Package_v1.1.pdf` | 2,843,352 |
| African fat-tailed gecko | `african-fat-tail.pdf` | 1.1 | `African_Fat-Tailed_Gecko_Care_Package_v1.1.pdf` | 3,110,143 |
| Ball python | `ball-python.pdf` | 3.1 | `Ball_Python_Care_Package_v3.1.pdf` | 2,372,397 |
| Hognose snake | `hognose-snake.pdf` | 1.1 | `Hognose_Snake_Care_Package_v1.1.pdf` | 3,003,904 |
| Russian tortoise | `russian-tortoise.pdf` | 3.1 | `Russian_Tortoise_Care_Package_v3.1.pdf` | 2,674,270 |
| Axolotl | `axolotl.pdf` | 3.1 | `Axolotl_Care_Package_v3.1.pdf` | 2,087,812 |
| White's tree frog | `whites-tree-frog.pdf` | 1.1 | `Whites_Tree_Frog_Care_Package_v1.1.pdf` | 2,181,596 |
| Betta fish | `betta-fish.pdf` | 3.1 | `Betta_Fish_Care_Package_v3.1.pdf` | 2,164,610 |
| Goldfish | `goldfish.pdf` | 3.1 | `Goldfish_Care_Package_v3.1.pdf` | 2,340,932 |
| Rabbit | `rabbit.pdf` | 3.0 | `Rabbit_Care_Package_v3.0.pdf` | 2,235,368 |
| Guinea pig | `guinea-pig.pdf` | 3.0 | `Guinea_Pig_Care_Package_v3.0.pdf` | 2,637,160 |
| Hamster | `hamster.pdf` | 3.0 | `Hamster_Care_Package_v3.0.pdf` | 1,908,425 |
| Budgie | `budgie.pdf` | 3.0 | `Budgie_Care_Package_v3.0.pdf` | 2,398,247 |
| Lovebird | `lovebird.pdf` | 3.0 | `Lovebird_Care_Package_v3.0.pdf` | 2,233,253 |
| Cockatiel | `cockatiel.pdf` | 3.0 | `Cockatiel_Care_Package_v3.0.pdf` | 2,379,076 |
| Cockatoo | `cockatoo.pdf` | 1.4 | `Cockatoo_Care_Package_v1.4.pdf` | 2,740,924 |
| Tarantula | `tarantula.pdf` | 3.0 | `Tarantula_Care_Package_v3.0.pdf` | 2,225,718 |

## Swapping in the next batch (no renaming in Supabase)

1. **Archive the current editions.** On a computer, open the bucket's `Past versions` folder and upload the full-named files from the "Full-named copy" column above, straight from `content/CAREPACKAGE Guides/rebuilt/`. They arrive already named with their edition, so nothing needs renaming.
2. **Replace the live copies.** Upload each new edition over its live file with the exact live name (`<package-id>.pdf`). Either use `node --use-system-ca scripts/upload-care-package.mjs <package-id> "content/CAREPACKAGE Guides/rebuilt/<new file>.pdf"`, which always writes the right name and overwrites, or in the dashboard rename the new PDF to `<package-id>.pdf` on your computer before uploading and choose overwrite. Overwriting keeps every download working the whole time. If you delete the live files first instead, re-upload the new batch straight away: between the delete and the upload, buyers of those packages get a failed download.
3. **Bump the editions on the site** (`version` in `src/lib/data/carePackages.js` and the mirrored `CARE_PACKAGE_STORE` in `public/_worker.js`; see the header of `scripts/upload-care-package.mjs`).
4. **Update the table above** with the new editions, repo file names and sizes, in the same push.

## Past versions folder (as of 2026-10-04)

32 older editions, named by hand on 2026-10-02 and 2026-10-04. One name is malformed: `Past versions/axolotl.pdf_v3` has the version after the extension, so it will not open as a PDF when downloaded; rename it to `axolotl_v3.0.pdf` on a computer when convenient. Going forward, step 1 uses the repo's full names (for example `Axolotl_Care_Package_v3.1.pdf`), so this folder will hold two naming styles; both are fine.
