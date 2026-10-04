"""List photos shown in more than one slot, under the owner's 2026-10-04 rule.

Rule: one source photo appears once across the site, the packages and the books.
Allowed exceptions (owner, 2026-10-04):
- Beastle (src/lib/data/beastle/pool.json) and the store's package cards
  (carePackages.js, carePackageCopy.js) may show a photo already on the site.
- A fact photo may also appear on a Beastlypedia entry as its secondary image,
  but never as the entry's head (heroImage).
The site-wide og-default.jpg share image is not counted.

Usage, from the repo root:  python tools/image-audit/find_repeats.py
Prints each repeated image with the slots that show it.
"""
import collections, glob, os, re

IMG = re.compile(r'/assets/[A-Za-z0-9_./-]+\.(?:jpg|jpeg|png|webp|gif|avif)')
ALLOWED_FILES = {'pool.json', 'carePackages.js', 'carePackageCopy.js', 'imageDimensions.js'}
SKIP_IMAGES = {'/assets/og-default.jpg'}


def slot(path, line):
    p = path.replace(os.sep, '/')
    base = os.path.basename(p)
    if '/lib/data/guides/' in p:
        return 'care guide hub (' + base[:-3] + ')'
    if '/lib/data/encyclopedia/' in p:
        return 'encyclopedia (' + base[:-3] + ')'
    if '/lib/data/beastlypedia/' in p:
        kind = 'secondary' if 'secondaryImage' in line else 'head'
        return 'Beastfile ' + kind + ' (' + base[:-3] + ')'
    if base in ('factImages.js', 'facts.js'):
        return 'fact'
    if p.endswith('.mdx'):
        return 'article ' + base[:-4]
    if p.endswith('.jsx'):
        return 'page ' + base[:-4]
    return base


def main():
    files = []
    for root, _, fs in os.walk('src'):
        if 'generated' in root:
            continue
        files += [os.path.join(root, f) for f in fs if f.endswith(('.js', '.jsx', '.json', '.mjs'))]
    files += [p for p in glob.glob('content/**/*.mdx', recursive=True) if '_scheduled' not in p]
    where = collections.defaultdict(set)
    for p in files:
        if os.path.basename(p) in ALLOWED_FILES:
            continue
        for line in open(p, encoding='utf-8', errors='ignore'):
            for m in IMG.findall(line):
                if m not in SKIP_IMAGES:
                    where[m].add(slot(p, line))
    repeats = []
    for img, slots in sorted(where.items()):
        s = set(slots)
        # allowed: a fact photo reused only as Beastfile secondary images
        if 'fact' in s and all(x == 'fact' or x.startswith('Beastfile secondary') for x in s):
            continue
        if len(s) > 1:
            repeats.append((img, sorted(s)))
    for img, s in repeats:
        print(f'{img}: ' + ', '.join(s))
    print(f'{len(repeats)} repeated images')


if __name__ == '__main__':
    main()
