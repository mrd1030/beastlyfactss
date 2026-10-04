import json, os, re
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'out')
data = json.load(open(os.path.join(OUT, 'audit.json'), encoding='utf-8'))
NOTES = json.load(open(os.path.join(HERE, 'notes.json'), encoding='utf-8'))

RED = PatternFill('solid', fgColor='F8D7DA')
YEL = PatternFill('solid', fgColor='FFF3CD')
GRN = PatternFill('solid', fgColor='D4EDDA')
HEAD = PatternFill('solid', fgColor='1F4E3D')
SUB = PatternFill('solid', fgColor='E2E8E4')
WHITE = Font(color='FFFFFF', bold=True)
BOLD = Font(bold=True)
WRAP = Alignment(wrap_text=True, vertical='top')
thin = Side(style='thin', color='CCCCCC')
BOX = Border(left=thin, right=thin, top=thin, bottom=thin)


def tidy(t):
    t = re.sub(r'<>|</>', '', t or '')
    t = re.sub(r'\s+([,)])', r'\1', t)
    t = re.sub(r'\(\s+', '(', t)
    return re.sub(r'\s+', ' ', t).strip(' ,')


def has_price(p):
    return bool(re.search(r'\$|\bfree\b|^\s*0\s*$', p or '', re.I))


def norm(p):
    nums = re.findall(r'[\d,]+(?:\.\d+)?', (p or '').replace('$', ''))
    return '-'.join(n.replace(',', '') for n in nums)


def setup_total(rows, key):
    for r in rows:
        if re.search(key, r['item'], re.I) and has_price(r['price']):
            return r['price']
    return ''


wb = Workbook()
ws = wb.active
ws.title = 'Summary'
hdr = ['Package', 'Status', 'Edition', 'Where the latest is', 'Cost guide rows', 'Cost rows with no price',
       'Cost rows with no gear link', 'Hub buy list items', 'Hub items not linked', 'Hub items with no catalog price',
       'Book budget rows', 'Book rows with no price', 'Book prices not found in cost guide', 'Hub Budget row']
ws.append(['Cost guide, hub and book: every item and price (from main)'])
ws['A1'].font = Font(bold=True, size=14)
ws.append(['Red = no price. Yellow = no gear link or no catalog price. Green = matches. Each package has its own tab with the three lists side by side. Totals rows are bold.'])
ws.append([])
ws.append(hdr)
for c in range(1, len(hdr) + 1):
    cell = ws.cell(row=4, column=c)
    cell.fill = HEAD; cell.font = WHITE; cell.alignment = WRAP; cell.border = BOX

flat = []
for d in data:
    cost = [dict(r, item=tidy(r['item'])) for r in d['cost']]
    book = [dict(r, item=tidy(r['item'])) for r in d['book']]
    buy = d['hub'].get('buy', [])
    cost_items = [r for r in cost if not r['total']]
    book_items = [r for r in book if not r['total']]
    c_noprice = [r for r in cost_items if not has_price(r['price'])]
    c_nolink = [r for r in cost_items if not r['linked']]
    h_nolink = [b for b in buy if not b['product']]
    h_noprice = [b for b in buy if b['product'] and not b['price']]
    b_noprice = [r for r in book_items if not has_price(r['price'])]
    cost_prices = {norm(r['price']) for r in cost}
    b_mismatch = [r for r in book if has_price(r['price']) and norm(r['price']) not in cost_prices]
    st = NOTES.get(d['id'], {}).get('status', 'Not started')
    row = [d['name'], st, d['edition'], d['ref'], len(cost_items), len(c_noprice), len(c_nolink), len(buy), len(h_nolink),
           len(h_noprice), len(book_items), len(b_noprice), len(b_mismatch), d['hub'].get('budget', '')]
    ws.append(row)
    r = ws.max_row
    for c in range(1, len(hdr) + 1):
        ws.cell(row=r, column=c).border = BOX
        ws.cell(row=r, column=c).alignment = WRAP
    for col, n in [(6, len(c_noprice)), (12, len(b_noprice))]:
        ws.cell(row=r, column=col).fill = RED if n else GRN
    ws.cell(row=r, column=2).fill = GRN if st.lower().startswith('done') else (YEL if st.lower().startswith('in progress') else PatternFill())
    for col, n in [(7, len(c_nolink)), (9, len(h_nolink)), (10, len(h_noprice)), (13, len(b_mismatch))]:
        ws.cell(row=r, column=col).fill = YEL if n else GRN

    # ---- per package sheet ----
    sh = wb.create_sheet(d['name'][:31].replace("'", ''))
    sh.append([f"{d['name']}: edition {d['edition']}, from {d['ref']}"])
    sh['A1'].font = Font(bold=True, size=13)
    sh.append(['Hub Budget row:', d['hub'].get('budget', '')])
    sh.append(['Hub cost route line:', d['hub'].get('route', '')])
    sh['A2'].font = BOLD; sh['A3'].font = BOLD
    sh.append([])
    heads = [('COST GUIDE (site)', ['Table', 'Item', 'Price', 'Gear link']),
             ('HUB SHOPPING LIST (site)', ['Item', 'Linked product', 'Catalog price']),
             ('BOOK BUDGET PAGE (package)', ['Table', 'Item', 'Price'])]
    col = 1
    starts = []
    for title, cols in heads:
        sh.cell(row=5, column=col, value=title).font = WHITE
        for i in range(len(cols)):
            sh.cell(row=5, column=col + i).fill = HEAD
        for i, h in enumerate(cols):
            c = sh.cell(row=6, column=col + i, value=h)
            c.font = BOLD; c.fill = SUB; c.border = BOX
        starts.append(col)
        col += len(cols) + 1
    # cost
    for i, r in enumerate(cost):
        vals = [r['section'], r['item'], r['price'], r['products'] or ('' if r['total'] else 'none')]
        for j, v in enumerate(vals):
            c = sh.cell(row=7 + i, column=starts[0] + j, value=v)
            c.alignment = WRAP; c.border = BOX
            if r['total']: c.font = BOLD
        if not r['total'] and not has_price(r['price']):
            sh.cell(row=7 + i, column=starts[0] + 2).fill = RED
        if not r['total'] and not r['linked']:
            sh.cell(row=7 + i, column=starts[0] + 3).fill = YEL
        flat.append([d['name'], 'Cost guide', r['section'], r['item'], r['price'], r['products'], 'total' if r['total'] else ''])
    # hub
    for i, b in enumerate(buy):
        vals = [b['item'], b['product'] or 'not linked', b['price'] or ('no catalog price' if b['product'] else '')]
        for j, v in enumerate(vals):
            c = sh.cell(row=7 + i, column=starts[1] + j, value=v)
            c.alignment = WRAP; c.border = BOX
        if not b['product']:
            sh.cell(row=7 + i, column=starts[1] + 1).fill = YEL
        if not b['price']:
            sh.cell(row=7 + i, column=starts[1] + 2).fill = RED
        flat.append([d['name'], 'Hub buy list', '', b['item'], b['price'], b['product'], ''])
    # book
    for i, r in enumerate(book):
        vals = [r['section'], r['item'], r['price']]
        for j, v in enumerate(vals):
            c = sh.cell(row=7 + i, column=starts[2] + j, value=v)
            c.alignment = WRAP; c.border = BOX
            if r['total']: c.font = BOLD
        if not r['total'] and not has_price(r['price']):
            sh.cell(row=7 + i, column=starts[2] + 2).fill = RED
        elif has_price(r['price']) and norm(r['price']) in cost_prices:
            sh.cell(row=7 + i, column=starts[2] + 2).fill = GRN
        flat.append([d['name'], 'Book', r['section'], r['item'], r['price'], '', 'total' if r['total'] else ''])
    widths = [22, 40, 16, 30, 3, 40, 30, 14, 3, 22, 44, 16]
    for k, w in enumerate(widths, start=1):
        sh.column_dimensions[get_column_letter(k)].width = w
    sh.freeze_panes = 'A7'

for k, w in enumerate([24, 22, 8, 26, 9, 9, 9, 9, 9, 9, 9, 9, 10, 70], start=1):
    ws.column_dimensions[get_column_letter(k)].width = w
ws.freeze_panes = 'B5'

fs = wb.create_sheet('All items')
fs.append(['Package', 'Source', 'Table', 'Item', 'Price', 'Linked product', 'Total row'])
for c in range(1, 8):
    fs.cell(row=1, column=c).fill = HEAD; fs.cell(row=1, column=c).font = WHITE
for r in flat:
    fs.append(r)
    if r[6] != 'total' and not has_price(r[4]):
        fs.cell(row=fs.max_row, column=5).fill = RED
fs.auto_filter.ref = f'A1:G{fs.max_row}'
for k, w in enumerate([22, 14, 30, 60, 22, 45, 9], start=1):
    fs.column_dimensions[get_column_letter(k)].width = w
fs.freeze_panes = 'A2'

ns = wb.create_sheet('No gear or unsure', 1)
ns.append(['Package', 'Status', 'Kind', 'Item and note'])
for c in range(1, 5):
    ns.cell(row=1, column=c).fill = HEAD; ns.cell(row=1, column=c).font = WHITE
for d in data:
    n = NOTES.get(d['id'])
    if not n:
        continue
    for kind, key in [('No gear available', 'no_gear'), ('Unsure match', 'unsure')]:
        for it in n.get(key, []):
            ns.append([d['name'], n.get('status', ''), kind, it])
            ns.cell(row=ns.max_row, column=3).fill = YEL if key == 'no_gear' else RED
for k, w in enumerate([24, 30, 18, 80], start=1):
    ns.column_dimensions[get_column_letter(k)].width = w
au = wb.create_sheet('Audit', 1)
au.append(['Scope', 'Check', 'Result', 'Note'])
for c in range(1, 5):
    au.cell(row=1, column=c).fill = HEAD; au.cell(row=1, column=c).font = WHITE
for row in json.load(open(os.path.join(HERE, 'audit_sheet.json'), encoding='utf-8')):
    au.append(row)
    r = au.max_row
    au.cell(row=r, column=3).fill = GRN if row[2] in ('PASS', 'FIXED') else (YEL if row[2] == 'NOTED' else RED)
    for c in range(1, 5):
        au.cell(row=r, column=c).alignment = WRAP
for k, w in enumerate([24, 45, 10, 90], start=1):
    au.column_dimensions[get_column_letter(k)].width = w
path = os.path.join(OUT, 'Price_Check_Cost_Hub_Book.xlsx')
wb.save(path)
print(path)
for row in ws.iter_rows(min_row=5, values_only=True):
    print(row[:12])
