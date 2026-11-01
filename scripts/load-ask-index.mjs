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
//   ask_meta(key PRIMARY KEY, value)                 slot = 'a' | 'b', loaded_at, chunks
//   chunks_<slot>(id INTEGER PRIMARY KEY, slug, title, heading, anchor, url,
//                 species, type, text, words)
//   chunks_<slot>_fts  FTS5 over title, heading, species, text, external
//                      content on chunks_<slot>, porter stemming
//
// Optional env: CLOUDFLARE_ACCOUNT_ID (looked up from the token when unset),
// ASK_D1_DATABASE_ID (defaults to the ask-index id below).

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const CHUNKS = path.join(ROOT, '.ask-index', 'chunks.json');
const DEFAULT_DB_ID = 'dff48e70-8f70-419b-848e-89252aedb81c'; // ask-index
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

async function accountId() {
  if (process.env.CLOUDFLARE_ACCOUNT_ID) return process.env.CLOUDFLARE_ACCOUNT_ID;
  const accounts = await cf('/accounts');
  if (!accounts?.length) throw new Error('token sees no Cloudflare account');
  return accounts[0].id;
}

const sqlString = (v) => (v == null ? 'NULL' : `'${String(v).replace(/'/g, "''")}'`);

async function main() {
  const chunks = JSON.parse(fs.readFileSync(CHUNKS, 'utf8'));
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
  const live = (await rows("SELECT value FROM ask_meta WHERE key = 'slot'"))[0]?.value || 'b';
  const slot = live === 'a' ? 'b' : 'a';
  const table = `chunks_${slot}`;
  const fts = `${table}_fts`;

  await query(`DROP TABLE IF EXISTS ${fts}`);
  await query(`DROP TABLE IF EXISTS ${table}`);
  await query(`CREATE TABLE ${table} (
    id INTEGER PRIMARY KEY, slug TEXT, title TEXT, heading TEXT, anchor TEXT,
    url TEXT, species TEXT, type TEXT, text TEXT, words INTEGER)`);

  // Multi-row INSERTs, each under the statement size cap.
  const prefix = `INSERT INTO ${table} (id, slug, title, heading, anchor, url, species, type, text, words) VALUES `;
  let batch = [];
  let bytes = prefix.length;
  let statements = 0;
  const flush = async () => {
    if (!batch.length) return;
    await query(prefix + batch.join(','));
    statements++;
    batch = [];
    bytes = prefix.length;
  };
  for (const c of chunks) {
    const tuple = `(${[c.id, sqlString(c.slug), sqlString(c.title), sqlString(c.heading),
      sqlString(c.anchor), sqlString(c.url), sqlString(c.species), sqlString(c.type),
      sqlString(c.text), c.words || 0].join(',')})`;
    const size = Buffer.byteLength(tuple) + 1;
    if (bytes + size > MAX_STATEMENT_BYTES) await flush();
    batch.push(tuple);
    bytes += size;
  }
  await flush();

  await query(`CREATE VIRTUAL TABLE ${fts} USING fts5(
    title, heading, species, text,
    content='${table}', content_rowid='id',
    tokenize='porter unicode61 remove_diacritics 2')`);
  await query(`INSERT INTO ${fts}(${fts}) VALUES('rebuild')`);

  const [{ n }] = await rows(`SELECT COUNT(*) AS n FROM ${table}`);
  if (n !== chunks.length) throw new Error(`loaded ${n} rows, expected ${chunks.length}`);

  const now = new Date().toISOString();
  await query(`INSERT INTO ask_meta (key, value) VALUES
    ('slot', '${slot}'), ('loaded_at', '${now}'), ('chunks', '${n}')
    ON CONFLICT(key) DO UPDATE SET value = excluded.value`);

  console.log(`Ask index load: ${n} chunks into slot ${slot} in ${statements} statements; slot ${slot} is live.`);
}

main().catch((err) => {
  console.warn(`Ask index load FAILED, live index unchanged: ${err.message}`);
  process.exit(0);
});
