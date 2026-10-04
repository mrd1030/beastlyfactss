import json, os, re, subprocess, html

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '..', '..'))
OUT = os.path.join(HERE, 'out')
os.makedirs(OUT, exist_ok=True)

SPECIES = [
    # id, display, ref, cost guide slug
    ('bearded-dragon', 'Bearded dragon', 'origin/main'),
    ('leopard-gecko', 'Leopard gecko', 'origin/main'),
    ('crested-gecko', 'Crested gecko', 'origin/main'),
    ('gargoyle-gecko', 'Gargoyle gecko', 'origin/main'),
    ('african-fat-tail', 'African fat-tailed gecko', 'origin/main'),
    ('ball-python', 'Ball python', 'origin/main'),
    ('hognose-snake', 'Hognose snake', 'origin/main'),
    ('russian-tortoise', 'Russian tortoise', 'origin/main'),
    ('axolotl', 'Axolotl', 'origin/main'),
    ('whites-tree-frog', "White's tree frog", 'origin/main'),
    ('betta-fish', 'Betta fish', 'origin/main'),
    ('goldfish', 'Goldfish', 'origin/main'),
    ('rabbit', 'Rabbit', 'origin/main'),
    ('guinea-pig', 'Guinea pig', 'origin/main'),
    ('hamster', 'Hamster', 'origin/main'),
    ('budgie', 'Budgie', 'origin/main'),
    ('lovebird', 'Lovebird', 'origin/main'),
    ('cockatiel', 'Cockatiel', 'origin/main'),
    ('cockatoo', 'Cockatoo', 'origin/main'),
    ('tarantula', 'Tarantula', 'origin/main'),
]
GROUPS = ['amphibians', 'birds', 'fish', 'geckos', 'invertebrates', 'lizards', 'smallMammals', 'snakes', 'turtles']


def show(ref, path):
    env = dict(os.environ, MSYS_NO_PATHCONV='1')
    r = subprocess.run(['git', '-C', REPO, 'show', f'{ref}:{path}'], capture_output=True, env=env)
    return r.stdout.decode('utf-8') if r.returncode == 0 else None


def clean(t):
    t = re.sub(r'<[^>]+>', ' ', t)
    t = html.unescape(t)
    return re.sub(r'\s+', ' ', t).strip()


def has_price(t):
    return bool(re.search(r'\$\s?\d|\bfree\b|\$0', t, re.I))


# ---------- book ----------
def book_rows(ref, sid):
    s = show(ref, f'content/CAREPACKAGE Guides/source/{sid}.html')
    if s is None:
        return None, []
    s = re.sub(r'data:[^"\']*', '', s)
    m = re.search(r'Edition (\d+\.\d+)', s)
    ed = m.group(1) if m else '?'
    pages = re.split(r'(?=<div class="page)', s)
    rows = []
    for p in pages:
        h = re.search(r'<h1[^>]*>(.*?)</h1>', p, re.S)
        if not h or 'budget' not in clean(h.group(1)).lower():
            continue
        for tbl in re.findall(r'<table.*?</table>', p, re.S):
            section = ''
            for tr in re.findall(r'<tr.*?</tr>', tbl, re.S):
                ths = re.findall(r'<th[^>]*>(.*?)</th>', tr, re.S)
                tds = re.findall(r'<td[^>]*>(.*?)</td>', tr, re.S)
                if ths and not tds:
                    section = clean(ths[0])
                    continue
                if len(tds) >= 2:
                    item = clean(tds[0])
                    price = clean(tds[-1])
                    bold = '<strong' in tds[0] or '<b>' in tds[0]
                    rows.append(dict(section=section, item=item, price=price, total=bold or bool(re.search(r'(?i)^(total|all-in|setup total|monthly ongoing|equipment for)', item))))
        break
    return ed, rows


# ---------- cost guide ----------
def cost_rows(ref, sid):
    s = show(ref, f'content/guides/{sid}-cost-guide.mdx')
    if s is None:
        return []
    rows = []
    for blk in re.finditer(r'<ComparisonTable(.*?)\n\s*/>', s, re.S):
        b = blk.group(1)
        hm = re.search(r'headers=\{\[(.*?)\]\}', b, re.S)
        headers = re.findall(r'"([^"]*)"', hm.group(1)) if hm else []
        # heading above the table
        before = s[:blk.start()]
        hh = re.findall(r'^##+ (.+)$', before, re.M)
        section = hh[-1].strip() if hh else ''
        rm = re.search(r'rows=\{\[(.*)\]\}', b, re.S)
        if not rm:
            continue
        for line in rm.group(1).split('\n'):
            line = line.strip()
            if not line.startswith('['):
                continue
            body = re.sub(r'\],?\s*$', '', line[1:])
            products = re.findall(r'product="([^"]*)"', body)
            links = len(re.findall(r'<AffiliateLink', body))
            lits = list(re.finditer(r'"((?:[^"\\]|\\.)*)"', re.sub(r'(href|product)="[^"]*"', '', body)))
            nohref = re.sub(r'(href|product)="[^"]*"', '', body)
            if lits:
                last = lits[-1]
                price = last.group(1)
                item_raw = nohref[:last.start()]
            else:
                price = ''
                item_raw = nohref
            item = clean(re.sub(r'"\s*,\s*$', '', item_raw).replace('"', ' ').strip(' ,'))
            item = re.sub(r'\s*,\s*$', '', item)
            rows.append(dict(section=section, headers=' | '.join(headers), item=item, price=price,
                             linked=bool(links), products='; '.join(products),
                             total=bool(re.search(r'(?i)total|all-in|monthly equivalent|plus the fish', item))))
    return rows


# ---------- hub ----------
def hub_data(ref, tmp):
    os.makedirs(tmp, exist_ok=True)
    for g in GROUPS:
        t = show(ref, f'src/lib/data/guides/{g}.js')
        open(os.path.join(tmp, g + '.mjs'), 'w', encoding='utf-8').write(t or 'export const x=[];')
    a = show(ref, 'src/lib/data/affiliateProducts.js')
    open(os.path.join(tmp, 'aff.mjs'), 'w', encoding='utf-8').write(a)
    js = """
import * as aff from './aff.mjs';
const groups = %s;
const out = {};
for (const g of groups) {
  const m = await import('./' + g + '.mjs');
  for (const arr of Object.values(m)) if (Array.isArray(arr)) for (const gd of arr) {
    if (!gd || !gd.id) continue;
    const buy = (gd.buyList || []).map(i => { const p = aff.getAffiliateForItem(i); return {item: i, product: p ? p.product : '', price: p ? (p.price || '') : ''}; });
    const budget = ((gd.quickFacts || gd.facts || gd.rows || gd.firstWeek?.rows || []).find(r => /budget/i.test(r.label || '')) || {}).value || '';
    let b2 = budget;
    if (!b2) { for (const k of Object.keys(gd)) { const v = gd[k]; if (Array.isArray(v)) { const r = v.find(r => r && /budget/i.test(r.label || '')); if (r) { b2 = r.value; break; } } } }
    const route = ((gd.routes || []).find(r => /-cost-guide$/.test(r.slug)) || {}).line || '';
    const costs = gd.costs ? JSON.stringify(gd.costs) : '';
    out[gd.id] = {buy, budget: b2, route, costs};
  }
}
console.log(JSON.stringify(out));
""" % json.dumps(GROUPS)
    open(os.path.join(tmp, 'run.mjs'), 'w', encoding='utf-8').write(js)
    r = subprocess.run(['node', 'run.mjs'], cwd=tmp, capture_output=True)
    if r.returncode != 0:
        raise SystemExit(r.stderr.decode())
    return json.loads(r.stdout.decode('utf-8'))


def main():
  hub_cache = {}
  result = []
  for sid, name, ref in SPECIES:
      if ref not in hub_cache:
          hub_cache[ref] = hub_data(ref, os.path.join(OUT, 'tmp_' + re.sub(r'\W', '_', ref)))
      hub = hub_cache[ref].get(sid, {})
      ed, book = book_rows(ref, sid)
      result.append(dict(id=sid, name=name, ref=ref.replace('origin/', ''), edition=ed,
                         book=book, cost=cost_rows(ref, sid), hub=hub))
  json.dump(result, open(os.path.join(OUT, 'audit.json'), 'w', encoding='utf-8'), indent=1)
  for r in result:
      print(r['id'], r['edition'], 'book', len(r['book']), 'cost', len(r['cost']), 'hub', len(r['hub'].get('buy', [])), 'costs' if r['hub'].get('costs') else '')


if __name__ == '__main__':
    main()
