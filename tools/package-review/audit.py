"""Step 2 audit: read-only checks over all 20 package species (from audit.json + the catalog)."""
import json, os, re, subprocess, html
from extract import SPECIES, show

OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'out')
REF = 'origin/main'
data = {d['id']: d for d in json.load(open(os.path.join(OUT, 'audit.json'), encoding='utf-8'))}

# catalog: product name -> price string
tmp = os.path.join(OUT, 'tmp_origin_main')
js = """import {AFFILIATE_PRODUCTS} from './aff.mjs';
console.log(JSON.stringify(AFFILIATE_PRODUCTS.map(p=>({slug:p.slug,product:p.product,price:p.price||'',link:p.link}))));"""
open(os.path.join(tmp, 'cat.mjs'), 'w', encoding='utf-8').write(js)
cat = json.loads(subprocess.run(['node', 'cat.mjs'], cwd=tmp, capture_output=True).stdout.decode('utf-8'))
byname = {html.unescape(p['product']).strip().lower(): p for p in cat}


def rng(s):
    s = (s or '').replace(',', '')
    nums = [float(x) for x in re.findall(r'\d+(?:\.\d+)?', s.replace('$', ' '))]
    if not nums or '$' not in (s or '') and not re.search(r'about|\d', s or ''):
        return None
    return (min(nums), max(nums))


def fmt(r):
    return f'${int(r[0]):,} to ${int(r[1]):,}' if r else '?'


def norm_money(t):
    return re.sub(r'\s+', ' ', (t or '').replace('&nbsp;', ' ').replace('–', ' to ').replace(' - ', ' to ').replace('-', ' to ')).lower()


findings = []  # (species, check, detail)
for sid, name, _ in SPECIES:
    d = data[sid]
    cost = d['cost']
    hub = d['hub']
    hub_text = norm_money(hub.get('budget', '') + ' ' + hub.get('route', ''))
    # 1. every non-total cost row priced
    for r in cost:
        if not r['total'] and not re.search(r'\$|about|free', r['price'] or '', re.I):
            findings.append((name, 'Row with no price', f"{r['item'][:70]} | {r['price']}"))
    # 2. row covers linked products' catalog price
    for r in cost:
        if r['total'] or not r['products']:
            continue
        rr = rng(r['price'])
        prods = [p.strip() for p in html.unescape(r['products']).split(';') if p.strip()]
        lo = hi = 0
        missing = []
        for p in prods:
            c = byname.get(p.lower())
            pr = rng(c['price']) if c else None
            if not pr:
                missing.append(p)
                continue
            lo = max(lo, pr[0]); hi += pr[1]
        if rr and hi and rr[1] + 0.01 < hi and len(prods) - len(missing) == len(prods):
            findings.append((name, 'Row below linked price', f"{r['item'][:60]} | row {r['price']} | linked total high ${hi:.0f}"))
    # 3. table totals equal the sum of their rows (per section)
    secs = {}
    for r in cost:
        secs.setdefault(r['section'], []).append(r)
    for sec, rows in secs.items():
        items = [r for r in rows if not r['total']]
        totals = [r for r in rows if r['total']]
        if not items or not totals:
            continue
        lo = sum((rng(r['price']) or (0, 0))[0] for r in items)
        hi = sum((rng(r['price']) or (0, 0))[1] for r in items)
        if not any(rng(t['price']) and abs(rng(t['price'])[0] - lo) < 1 and abs(rng(t['price'])[1] - hi) < 1 for t in totals):
            findings.append((name, 'Table total differs from row sum (check scope)', f"{sec[:40]} | rows sum ${lo:,.0f} to ${hi:,.0f} | totals: " + '; '.join(f"{t['item'][:30]} {t['price']}" for t in totals)))
    # 4. the setup total from the section heading appears in the hub and the book
    book_html = show(REF, f'content/CAREPACKAGE Guides/source/{sid}.html') or ''
    book_text = norm_money(re.sub(r'<[^>]+>', ' ', re.sub(r'data:[^"\']*', '', book_html)).replace('&nbsp;', ' '))
    for sec in secs:
        m = re.search(r'\$([\d,]+) to \$([\d,]+)', sec)
        if m and re.search(r'(?i)setup|upfront', sec):
            needle = f"${m.group(1)} to ${m.group(2)}".lower()
            if needle not in hub_text:
                findings.append((name, 'Hub missing setup total', f"{needle} not in hub Budget row or route line"))
            if needle not in book_text:
                findings.append((name, 'Book missing setup total', f"{needle} not found in the book"))
    # 5. hub products vs cost-row products
    cost_prods = {p.strip().lower() for r in cost for p in html.unescape(r['products']).split(';') if p.strip()}
    hub_prods = {html.unescape(b['product']).strip().lower() for b in hub.get('buy', []) if b['product']}
    for p in sorted(cost_prods - hub_prods):
        findings.append((name, 'Linked in cost guide, not on hub list', p[:80]))
    for p in sorted(hub_prods - cost_prods):
        findings.append((name, 'On hub list, not in a cost row', p[:80]))

# 6. shared items: which product each species links for scale / clipper / styptic / thermostat / UVB
shared = {}
for sid, name, _ in SPECIES:
    for r in data[sid]['cost']:
        for key in ['scale', 'clipper', 'styptic', 'thermostat', 'uvb', 'heater', 'thermometer']:
            if key in r['item'].lower() and r['products']:
                shared.setdefault(key, {}).setdefault(html.unescape(r['products'])[:70], []).append(name)

json.dump({'findings': findings, 'shared': shared}, open(os.path.join(OUT, 'audit_report.json'), 'w', encoding='utf-8'), indent=1)
from collections import Counter
print(Counter(f[1] for f in findings))
for k, v in shared.items():
    print(k, {p: len(s) for p, s in v.items()})
