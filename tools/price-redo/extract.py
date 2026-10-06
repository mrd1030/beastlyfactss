import io, re, json, glob, os, html
SP = os.path.dirname(os.path.abspath(__file__))
H = json.load(io.open(os.path.join(SP, 'hubs.json'), encoding='utf-8'))
PROD = {p['link']: p for p in H['products']}
# Articles with cost placeholders, already filled (dump_hubs.mjs), and the
# table rows of every animal on the shared price list.
RESOLVED = {k.replace(chr(92), '/'): v for k, v in H.get('resolved', {}).items()}
SHEETS = H.get('sheets', {})


def read(f):
    k = f.replace(chr(92), '/')
    return RESOLVED[k] if k in RESOLVED else io.open(f, encoding='utf-8').read()
PACK = {'bearded-dragon', 'leopard-gecko', 'crested-gecko', 'gargoyle-gecko', 'african-fat-tail', 'ball-python', 'hognose-snake',
        'russian-tortoise', 'axolotl', 'whites-tree-frog', 'betta-fish', 'goldfish', 'rabbit', 'guinea-pig', 'hamster', 'budgie',
        'lovebird', 'cockatiel', 'cockatoo', 'tarantula'}
NUM = r'\$\s?([\d,]+(?:\.\d+)?)'


def nums(s):
    return [float(x.replace(',', '')) for x in re.findall(NUM, s or '') if x.replace(',', '')]


def rng(s):
    n = nums(s)
    if not n:
        return None, None
    return n[0], n[-1]


def clean(t):
    t = re.sub(r'<AffiliateLink[^>]*>(.*?)</AffiliateLink>', r'\1', t, flags=re.S)
    t = re.sub(r'<[^>]*>', '', t)
    t = html.unescape(t)
    return re.sub(r'\s+', ' ', t).strip()


def cat_range(p):
    n = nums(p.get('price', ''))
    return (min(n), max(n)) if n else (None, None)


def hub_for(slug):
    for h in H['hubs']:
        if any(r['slug'] == slug for r in h['routes']):
            return h
    for h in H['hubs']:
        if any(r['source'] == slug for r in h['firstWeek']):
            return h
    return None


def kind_of(t):
    hdr, h2 = t['hdr'], t['h2']
    if not t['rows'] or any(x in hdr for x in ('"Notes"', 'Why', 'Morph', '"Type"', 'Component')):
        return 'other'
    if re.search(r'extra|not counted', h2 + hdr, re.I):
        return 'extras'
    if 'Monthly' in hdr:
        return 'monthly'
    if 'Annual' in hdr or 'Yearly' in hdr:
        return 'annual'
    if re.search(r'month', h2, re.I):
        return 'monthly'
    if re.search(r'annual|year', h2, re.I):
        return 'annual'
    if re.search(r'setup|set-up|upfront|start|essential|equipment|one-time|initial|first', h2, re.I):
        return 'setup'
    return 'other'


FM_FIELDS = ['title', 'seoTitle', 'description', 'excerpt', 'imageAlt']
animals, rows, mentions, buy = [], [], [], []
for f in sorted(glob.glob('content/guides/*-cost-guide.mdx')):
    slug = os.path.basename(f)[:-4]
    key = slug[:-len('-cost-guide')]
    s = read(f).replace('\r\n', '\n')
    fm, body = re.match(r'---\n(.*?)\n---\n(.*)', s, re.S).groups()
    for k in FM_FIELDS:
        m = re.search(r'^' + k + r':\s*"(.*)"\s*$', fm, re.M)
        if m and '$' in m.group(1):
            mentions.append((key, 'cost guide', slug, k, m.group(1)))
    for m in re.finditer(r'^\s+a:\s*"(.*)"\s*$', fm, re.M):
        if '$' in m.group(1):
            mentions.append((key, 'cost guide', slug, 'FAQ answer', m.group(1)))
    h2 = ''
    tables = []
    lines = body.split('\n')
    i = 0
    while i < len(lines):
        l = lines[i]
        if l.startswith('### '):
            h2 = l[4:].strip()
        elif l.startswith('## '):
            h2 = l[3:].strip()
            if '$' in h2:
                mentions.append((key, 'cost guide', slug, 'H2', h2))
        elif '<CostTable' in l:
            m = re.search(r'guide="([^"]+)"\s+section="([^"]+)"', l)
            g, sec = (m.group(1), m.group(2)) if m else (key, 'necessities')
            trs = []
            for r in SHEETS.get(g, {}).get(sec, []):
                lo, hi = rng(r['price'])
                trs.append(dict(item=r['item'], price=r['price'], lo=lo, hi=hi, links=[(r['href'], r['product'])] if r['href'] else []))
            tables.append(dict(h2=h2, hdr='"Extra", "Cost Range"' if sec == 'extras' else '"Item", "Cost Range"', rows=trs))
        elif '<ComparisonTable' in l:
            hdr = ''
            j = i
            while j < len(lines) and lines[j].strip() != '/>':
                if 'headers=' in lines[j]:
                    hdr = lines[j].strip()
                j += 1
            trs = []
            for k2 in range(i, j):
                L = lines[k2].strip()
                if L.startswith('[') and 'headers' not in L and not L.startswith('[['):
                    pm = re.search(r',\s*"([^"]*)"\s*\],?\s*$', L)
                    price = pm.group(1) if pm else ''
                    item = clean(L[:pm.start()] if pm else L).strip(' ",[')
                    links = re.findall(r'href="([^"]+)"\s+product="([^"]*)"', L)
                    lo, hi = rng(price)
                    trs.append(dict(item=item, price=price, lo=lo, hi=hi, links=links))
            tables.append(dict(h2=h2, hdr=hdr, rows=trs))
            i = j
        elif '$' in l and not l.strip().startswith(('[', '{/*', '- [')):
            mentions.append((key, 'cost guide', slug, 'body', clean(l)[:500]))
        i += 1
    hub = hub_for(slug)
    for t in tables:
        t['kind'] = kind_of(t)
        for r in t['rows']:
            r['total'] = bool(re.search(r'total|subtotal', r['item'], re.I))
        t['sum'] = (sum(r['lo'] or 0 for r in t['rows'] if not r['total']), sum(r['hi'] or 0 for r in t['rows'] if not r['total']))
        t['stated'] = rng(t['h2'])
        for r in t['rows']:
            cat, cov = [], ''
            for href, pn in r['links']:
                p = PROD.get(href)
                cat.append((p['slug'], p['price']) if p else ('NOT IN CATALOG', pn))
            if r['links'] and t['kind'] != 'other':
                need = sum(cat_range(PROD[h])[1] or 0 for h, _ in r['links'] if h in PROD)
                if r['hi'] is not None and need and r['hi'] < need:
                    cov = 'row high $%g < catalog $%g' % (r['hi'], need)
            rnd = ''
            if r['total']:
                pass
            elif r['lo'] is None:
                rnd = 'no price'
            elif r['lo'] % 5 or r['hi'] % 5 or r['lo'] == 0:
                rnd = 'not $5 steps'
            rows.append(dict(animal=key, table=t['h2'], kind=t['kind'], item=r['item'], price=r['price'], lo=r['lo'], hi=r['hi'],
                             linked='; '.join('%s (%s)' % c for c in cat), unlinked='' if r['links'] else 'unlinked',
                             covers=cov, rounding=rnd if t['kind'] not in ('other',) else '', is_total='total row' if r['total'] else ''))

    def first(kind):
        return next((t for t in tables if t['kind'] == kind), None)

    su, mo, an = first('setup'), first('monthly'), first('annual')
    budget = route = ''
    if hub:
        budget = next((r['value'] for r in hub['firstWeek'] if r['label'] == 'Budget'), '')
        route = next((r['line'] for r in hub['routes'] if r['slug'] == slug), '')
        for fld in ('seoTitle', 'seoDescription', 'description', 'tagline'):
            if '$' in hub[fld]:
                mentions.append((key, 'hub', hub['group'] + '.js', fld, hub[fld]))
        for r in hub['firstWeek']:
            if '$' in r['value']:
                mentions.append((key, 'hub', hub['group'] + '.js', 'firstWeek: ' + r['label'], r['value']))
        if '$' in route:
            mentions.append((key, 'hub', hub['group'] + '.js', 'route line', route))
        for q in hub['faqs']:
            if '$' in q['a']:
                mentions.append((key, 'hub', hub['group'] + '.js', 'FAQ answer', q['a']))
        costed = {x.split(' (')[0] for r in rows if r['animal'] == key for x in r['linked'].split('; ') if x}
        for b in hub['buyList']:
            buy.append(dict(animal=key, item=b['item'], product=b['slug'], price=b['price'],
                            in_cost=('' if not b['slug'] else ('yes' if b['slug'] in costed else 'NO'))))
    fmt = lambda t: ('$%s to $%s' % (format(int(t[0]), ','), format(int(t[1]), ','))) if t and t[0] is not None else ''

    def ok(t):
        if not t:
            return ''
        if t['stated'][0] is None:
            return 'no total in heading'
        return 'yes' if t['stated'] == t['sum'] else 'NO'

    ar = [r for r in rows if r['animal'] == key]
    have = set(re.findall(r'\$\s?(\d{1,3}(?:,\d{3})+|\d+)', s))
    hub_miss = sorted({'$' + n for n in re.findall(r'\$\s?(\d{1,3}(?:,\d{3})+|\d+)', budget + ' ' + route) if n not in have})
    animals.append(dict(
        animal=key, group=hub['group'] if hub else '?', package='yes' if key in PACK else '', slug=slug,
        setup_h2=su['h2'] if su else '(no setup table found)', setup_sum=fmt(su['sum']) if su else '', setup_ok=ok(su),
        monthly_h2=mo['h2'] if mo else '', monthly_sum=fmt(mo['sum']) if mo else '', monthly_ok=ok(mo),
        annual_h2=an['h2'] if an else '', annual_sum=fmt(an['sum']) if an else '', annual_ok=ok(an),
        budget=budget, route=route,
        n_rows=len(ar), n_unlinked=sum(1 for r in ar if r['unlinked'] and r['kind'] != 'other'),
        n_round=sum(1 for r in ar if r['rounding']), n_cover=sum(1 for r in ar if r['covers']),
        n_buy_unlinked=sum(1 for b in buy if b['animal'] == key and not b['product']),
        hub_miss=', '.join(hub_miss) if hub else 'no hub',
        n_buy_not_costed=sum(1 for b in buy if b['animal'] == key and b['in_cost'] == 'NO')))

# other pages that price an animal
names = {a['animal']: {a['animal'].replace('-', ' ')} for a in animals}
for a in animals:
    h = hub_for(a['slug'])
    if h:
        names[a['animal']].add(h['name'].lower())
EXTRA = {'betta-fish': ['betta'], 'african-fat-tail': ['fat-tail', 'fat tail'], 'hognose-snake': ['hognose'],
         'whites-tree-frog': ["white's tree frog"], 'green-iguana': ['iguana'], 'argentine-tegu': ['tegu'],
         'red-eared-slider': ['slider'], 'african-grey-parrot': ['african grey'], 'oscar-fish': ['oscar'],
         'emperor-scorpion': ['scorpion'], 'giant-millipede': ['millipede'], 'madagascar-hissing-cockroach': ['hissing cockroach'],
         'corydoras-catfish': ['corydoras', 'cory '], 'savannah-monitor': ['savannah'], 'ackie-monitor': ['ackie'],
         'jacksons-chameleon': ["jackson's chameleon"], 'quaker-parakeet': ['quaker'], 'bristlenose-pleco': ['pleco']}
for k, v in EXTRA.items():
    names.setdefault(k, set()).update(v)
for f in sorted(glob.glob('content/guides/*.mdx') + glob.glob('content/fun-facts/*.mdx')):
    b = os.path.basename(f)[:-4]
    if b.endswith('-cost-guide') or b.endswith('-legal-guide'):
        continue
    s = read(f).replace('\r\n', '\n').split('<Sources>')[0]
    for ln in s.split('\n'):
        c = clean(ln)
        if not re.search(r'\$\s?\d', c):
            continue
        low = (b + ' ' + c).lower().replace('-', ' ')
        hit = [a for a, ns in names.items() if any(n in low for n in ns)]
        for a in (hit or ['(no animal matched)']):
            mentions.append((a, 'other page', b, 'line', c[:500]))
for f in sorted(glob.glob('src/lib/data/encyclopedia/*.js')):
    for ln in io.open(f, encoding='utf-8').read().split('\n'):
        if re.search(r'\$\s?\d', ln):
            low = ln.lower()
            hit = [a for a, ns in names.items() if any(n in low for n in ns)]
            for a in (hit or ['(no animal matched)']):
                mentions.append((a, 'encyclopedia', os.path.basename(f), 'line', ln.strip()[:500]))
json.dump(dict(animals=animals, rows=rows, mentions=mentions, buy=buy),
          io.open(os.path.join(SP, 'extract.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(len(animals), 'animals', len(rows), 'rows', len(mentions), 'mentions', len(buy), 'buy items')
