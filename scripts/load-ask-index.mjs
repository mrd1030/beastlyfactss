// Loads .ask-index/chunks.json (scripts/build-ask-index.mjs) into the Ask
// Beastly D1 database, ask-index, bound to the site as ASK_DB.
//
// Runs at the end of `npm run build`, and only does anything when:
//   - the build is main (CF_PAGES_BRANCH=main), or ASK_INDEX_LOAD=1 is set
//     (the sharetest project sets it so its test branch gets an index), and
//   - CLOUDFLARE_API_TOKEN is set (D1 Edit permission).
// Anywhere else it prints one line and exits 0. A failed load never fails the
// build: the live index is left exactly as it was.
//
// Schema. Two slots, a and b, so a load never touches the index readers are
// using. The load fills the idle slot, builds its full text table, then flips
// ask_meta.slot. The worker reads the slot on every request.
//
//   ask_meta(key PRIMARY KEY, value)   slot = 'a' | 'b', loaded_at, chunks, and
//                                      the JSON lookups aliases, species, states, legal
//   chunks_<slot>(id INTEGER PRIMARY KEY, slug, title, heading, anchor, url,
//                 species, type, text, words)
//   chunks_<slot>_fts  FTS5 over title, heading, species, text, external
//                      content on chunks_<slot>, porter stemming
//   legal_<slot>(animal, code, status, cite, quote, note, grandfathered,
//                local_override, verified_on)  the legal matrix, one row per
//                animal and jurisdiction (code lowercase, "ny", "nyc")
//
// Optional env: CLOUDFLARE_ACCOUNT_ID (defaults to the site's account below),
// ASK_D1_DATABASE_ID (defaults to the ask-index id below).

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const CHUNKS = path.join(ROOT, '.ask-index', 'chunks.json');
const META = path.join(ROOT, '.ask-index', 'meta.json');
const DEFAULT_DB_ID = 'dff48e70-8f70-419b-848e-89252aedb81c'; // ask-index
// Not a secret. The load token has D1 Edit only, which cannot list accounts.
const DEFAULT_ACCOUNT_ID = '87c27f51f0e653599f9dac1c1b3cb914';
const API = 'https://api.cloudflare.com/client/v4';
// D1 caps one SQL statement at 100 KB. Stay well under it.
const MAX_STATEMENT_BYTES = 90_000;

const branch = process.env.CF_PAGES_BRANCH || '';
const token = process.env.CLOUDFLARE_API_TOKEN || '';

if (branch !== 'main' && process.env.ASK_INDEX_LOAD !== '1') {
  console.log(`Ask index load: skipped (branch "${branch || 'local'}", not main and ASK_INDEX_LOAD unset).`);
  process.exit(0);
}
if (!token) {
  console.log('Ask index load: skipped (CLOUDFLARE_API_TOKEN not set).');
  process.exit(0);
}

const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };

async function cf(pathname, init = {}) {
  const res = await fetch(`${API}${pathname}`, { ...init, headers });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.success === false) {
    const msg = (body.errors || []).map((e) => e.message).join('; ') || res.statusText;
    throw new Error(`${init.method || 'GET'} ${pathname}: ${res.status} ${msg}`);
  }
  return body.result;
}

const accountId = () => process.env.CLOUDFLARE_ACCOUNT_ID || DEFAULT_ACCOUNT_ID;

const sqlString = (v) => (v == null ? 'NULL' : `'${String(v).replace(/'/g, "''")}'`);

async function main() {
  const chunks = JSON.parse(fs.readFileSync(CHUNKS, 'utf8'));
  const meta = JSON.parse(fs.readFileSync(META, 'utf8'));
  const legal = JSON.parse(fs.readFileSync(path.join(ROOT, '.ask-index', 'legal.json'), 'utf8'));
  const acct = await accountId();
  const db = process.env.ASK_D1_DATABASE_ID || DEFAULT_DB_ID;
  const query = (sql) => cf(`/accounts/${acct}/d1/database/${db}/query`, {
    method: 'POST',
    body: JSON.stringify({ sql }),
  });
  const rows = async (sql) => {
    const result = await query(sql);
    return (Array.isArray(result) ? result[0] : result)?.results || [];
  };

  await query('CREATE TABLE IF NOT EXISTS ask_meta (key TEXT PRIMARY KEY, value TEXT)');

  // D1's free plan allows 100,000 written rows a day and a full load writes
  // roughly 20,000 to 25,000 (chunks, the FTS index over them, the legal
  // matrix). Most builds change code, not content, so the load compares a
  // fingerprint of everything it would write with the live one and skips
  // when they match. ASK_INDEX_FORCE=1 reloads anyway.
  const hash = crypto.createHash('sha256')
    .update(fs.readFileSync(CHUNKS)).update(fs.readFileSync(META))
    .update(fs.readFileSync(path.join(ROOT, '.ask-index', 'legal.json')))
    .digest('hex');
  const current = Object.fromEntries((await rows("SELECT key, value FROM ask_meta WHERE key IN ('slot', 'hash')")).map((r) => [r.key, r.value]));
  if (current.hash === hash && current.slot && process.env.ASK_INDEX_FORCE !== '1') {
    console.log(`Ask index load: unchanged (${hash.slice(0, 12)}), slot ${current.slot} stays live, nothing written.`);
    return;
  }
  const live = current.slot || 'b';
  const slot = live === 'a' ? 'b' : 'a';
  const table = `chunks_${slot}`;
  const fts = `${table}_fts`;
  const legalTable = `legal_${slot}`;

  await query(`DROP TABLE IF EXISTS ${fts}`);
  await query(`DROP TABLE IF EXISTS ${table}`);
  await query(`CREATE TABLE ${table} (
    id INTEGER PRIMARY KEY, slug TEXT, title TEXT, heading TEXT, anchor TEXT,
    url TEXT, species TEXT, type TEXT, text TEXT, words INTEGER)`);

  // Multi-row INSERTs, each under the statement size cap.
  let statements = 0;
  const insertAll = async (prefix, tuples) => {
    let batch = [];
    let bytes = prefix.length;
    const flush = async () => {
      if (!batch.length) return;
      await query(prefix + batch.join(','));
      statements++;
      batch = [];
      bytes = prefix.length;
    };
    for (const tuple of tuples) {
      const size = Buffer.byteLength(tuple) + 1;
      if (bytes + size > MAX_STATEMENT_BYTES) await flush();
      batch.push(tuple);
      bytes += size;
    }
    await flush();
  };

  await insertAll(
    `INSERT INTO ${table} (id, slug, title, heading, anchor, url, species, type, text, words) VALUES `,
    chunks.map((c) => `(${[c.id, sqlString(c.slug), sqlString(c.title), sqlString(c.heading),
      sqlString(c.anchor), sqlString(c.url), sqlString(c.species), sqlString(c.type),
      sqlString(c.text), c.words || 0].join(',')})`),
  );

  // The legal matrix, one row per animal and jurisdiction, in the same slot.
  await query(`DROP TABLE IF EXISTS ${legalTable}`);
  await query(`CREATE TABLE ${legalTable} (
    animal TEXT, code TEXT, status TEXT, cite TEXT, quote TEXT, note TEXT,
    grandfathered TEXT, local_override INTEGER, verified_on TEXT,
    PRIMARY KEY (animal, code))`);
  await insertAll(
    `INSERT INTO ${legalTable} (animal, code, status, cite, quote, note, grandfathered, local_override, verified_on) VALUES `,
    legal.map((c) => `(${[sqlString(c.animal), sqlString(c.code), sqlString(c.status), sqlString(c.cite),
      sqlString(c.quote), sqlString(c.note), sqlString(c.grandfathered), c.localOverride ? 1 : 0,
      sqlString(c.verifiedOn)].join(',')})`),
  );
  const [{ ln }] = await rows(`SELECT COUNT(*) AS ln FROM ${legalTable}`);
  if (ln !== legal.length) throw new Error(`loaded ${ln} legal rows, expected ${legal.length}`);

  await query(`CREATE VIRTUAL TABLE ${fts} USING fts5(
    title, heading, species, text,
    content='${table}', content_rowid='id',
    tokenize='porter unicode61 remove_diacritics 2')`);
  await query(`INSERT INTO ${fts}(${fts}) VALUES('rebuild')`);

  const [{ n }] = await rows(`SELECT COUNT(*) AS n FROM ${table}`);
  if (n !== chunks.length) throw new Error(`loaded ${n} rows, expected ${chunks.length}`);

  // Lookup data (aliases, species, states, legal animals) goes in with the
  // slot flip, in one statement, so the worker never pairs an index with
  // another load's lookups.
  const now = new Date().toISOString();
  const metaRows = [['slot', slot], ['loaded_at', now], ['chunks', String(n)], ['hash', hash],
    ...Object.entries(meta).map(([k, v]) => [k, JSON.stringify(v)])];
  await query(`INSERT INTO ask_meta (key, value) VALUES
    ${metaRows.map(([k, v]) => `(${sqlString(k)}, ${sqlString(v)})`).join(', ')}
    ON CONFLICT(key) DO UPDATE SET value = excluded.value`);

  console.log(`Ask index load: ${n} chunks and ${ln} legal cells into slot ${slot} in ${statements} statements; slot ${slot} is live.`);
}

main().catch((err) => {
  console.warn(`Ask index load FAILED, live index unchanged: ${err.message}`);
  process.exit(0);
});
