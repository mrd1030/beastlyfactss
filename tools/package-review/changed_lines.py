"""Changed-lines-only review input for the care package books.

For each book, compares the current built HTML with an earlier git ref (default:
origin/main, the live editions) and writes only the lines that changed, as
"-[Page title] old text" / "+[Page title] new text", with pure page-number
shifts filtered out. It also writes a plain-text copy of each current book, so
a reviewer can grep a changed line against the rest of the same book without
reading whole books (base64 images and fonts stripped).

This is what keeps a Fable review cheap: on 2026-10-03 the 15 books' changes
came to about 31,000 words, roughly 6% of reading them in full.

Usage, from the repo root:
    python tools/package-review/changed_lines.py                 # all 20, against origin/main
    python tools/package-review/changed_lines.py --ref <commit> leopard-gecko crested-gecko

Writes tools/package-review/out/diffs/<id>.changes.txt and out/booktext/<id>.txt.
"""
import argparse, collections, difflib, html, os, re, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '..', '..'))
SRC = 'content/CAREPACKAGE Guides/source'
IDS = ('bearded-dragon leopard-gecko crested-gecko gargoyle-gecko african-fat-tail ball-python '
       'hognose-snake russian-tortoise axolotl whites-tree-frog betta-fish goldfish rabbit '
       'guinea-pig hamster budgie lovebird cockatiel cockatoo tarantula').split()


def pages(s):
    s = re.sub(r'data:[^"\')]*', '', s)
    s = re.sub(r'<style.*?</style>|<script.*?</script>|<svg.*?</svg>', '', s, flags=re.S)
    out = []
    for p in re.split(r'(?=<div class="page[ "])', s)[1:]:
        h = re.search(r'<h1[^>]*>(.*?)</h1>', p, re.S)
        title = html.unescape(re.sub(r'<[^>]+>', '', h.group(1))).strip() if h else '(no title)'
        t = re.sub(r'<(br|/p|/tr|/li|/h\d|/div)[^>]*>', '\n', p)
        t = re.sub(r'<td[^>]*>', ' | ', t)
        t = html.unescape(re.sub(r'<[^>]+>', '', t))
        lines = [re.sub(r'\s+', ' ', l).strip() for l in t.split('\n')]
        out.append((title, [l for l in lines if l]))
    return out


def norm(line):
    l = line[1:]
    l = re.sub(r'(?i)\b(pages?)\s+\d+(\s*(,|and|to)\s*\d+)*', r'\1 N', l)
    l = re.sub(r'\|\s*\d+\s*$', '| N', l)
    return re.sub(r'\s\d{1,2}$', ' N', l)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--ref', default='origin/main')
    ap.add_argument('ids', nargs='*', default=IDS)
    a = ap.parse_args()
    os.makedirs(os.path.join(HERE, 'out', 'diffs'), exist_ok=True)
    os.makedirs(os.path.join(HERE, 'out', 'booktext'), exist_ok=True)
    total = 0
    for id in a.ids:
        path = f'{SRC}/{id}.html'
        old = subprocess.run(['git', '-C', REPO, 'show', f'{a.ref}:{path}'], capture_output=True).stdout.decode('utf-8', 'ignore')
        new = open(os.path.join(REPO, path), encoding='utf-8').read()
        np_ = pages(new)
        with open(os.path.join(HERE, 'out', 'booktext', f'{id}.txt'), 'w', encoding='utf-8') as f:
            f.write('\n'.join(f'===== PAGE {i} [{t}] =====\n' + '\n'.join(ls) for i, (t, ls) in enumerate(np_, 1)))
        ol = [f'[{t}] {l}' for t, ls in pages(old) for l in ls]
        nl = [f'[{t}] {l}' for t, ls in np_ for l in ls]
        d = [x for x in difflib.unified_diff(ol, nl, lineterm='', n=0) if not x.startswith(('---', '+++', '@@'))]
        d = [x for x in d if not re.fullmatch(r'[+-]\[[^\]]*\] (\d+|Beastly Facts.*|.*Edition \d.*)', x)]
        minus = collections.Counter(norm(x) for x in d if x.startswith('-'))
        plus = collections.Counter(norm(x) for x in d if x.startswith('+'))
        common, used, keep = minus & plus, collections.Counter(), []
        for x in d:
            k = norm(x); key = (x[0], k)
            if used[key] < common[k]:
                used[key] += 1
                continue
            keep.append(x)
        with open(os.path.join(HERE, 'out', 'diffs', f'{id}.changes.txt'), 'w', encoding='utf-8') as f:
            f.write('\n'.join(keep))
        w = sum(len(x.split()) for x in keep); total += w
        print(f'{id}: {len(keep)} changed lines, {w} words')
    print(f'TOTAL {total} words against {a.ref}')


if __name__ == '__main__':
    main()
