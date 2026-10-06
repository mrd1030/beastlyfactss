import { pathToFileURL } from 'url'; import path from 'path'; import fs from 'fs';
const R = process.cwd();
const imp = p => import(pathToFileURL(path.resolve(R, p)).href);
const groups = ['amphibians','birds','fish','geckos','invertebrates','lizards','smallMammals','snakes','turtles'];
const aff = await imp('src/lib/data/affiliateProducts.js');
const out = { products: aff.AFFILIATE_PRODUCTS.map(p => ({ slug: p.slug, product: p.product, link: p.link, price: p.price || '', covers: p.covers || [] })), hubs: [] };
for (const g of groups) {
  const m = await imp(`src/lib/data/guides/${g}.js`);
  const arr = Object.values(m).find(v => Array.isArray(v));
  for (const h of arr) {
    const fw = (h.firstWeek?.rows || []);
    out.hubs.push({ group: g, id: h.id, name: h.name, seoTitle: h.seoTitle || '', seoDescription: h.seoDescription || '', description: h.description || '', tagline: h.tagline || '',
      firstWeek: fw.map(r => ({ label: r.label, value: r.value, source: r.source || '' })),
      routes: (h.routes || []).map(r => ({ slug: r.slug, line: r.line })),
      buyList: (h.buyList || []).map(it => { const t = typeof it === 'string' ? it : (it.item || it.name || JSON.stringify(it)); const p = aff.getAffiliateForItem(t); return { item: t, slug: p?.slug || '', product: p?.product || '', price: p?.price || '' }; }),
      faqs: (h.faqs || []).map(f => ({ q: f.q, a: f.a })),
      costs: h.costs || null });
  }
}
fs.writeFileSync(process.argv[2], JSON.stringify(out, null, 1));
console.log(out.hubs.length, 'hubs', out.products.length, 'products');
