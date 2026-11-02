// Loads .ask-index/ (scripts/build-ask-index.mjs) into the Ask Beastly D1
// database, ask-index, bound to the site as ASK_DB.
//
// Runs at the end of `npm run build`, and only does anything when:
//   - the build is main (CF_PAGES_BRANCH=main), or ASK_INDEX_LOAD=1 is set
//     (the sharetest project sets it in its build command), and
//   - CLOUDFLARE_API_TOKEN is set (D1 Edit permission).
// Anywhere else it prints one line and exits 0. A failed load never fails the
// build.
//
// Incremental. D1's free plan allows 100,000 written rows a day and the site
// can deploy many times a day, so a load writes only what changed: every chunk
// and every legal cell carries a hash of its content, the load reads the live
// hashes (reads are cheap), then deletes what is gone or changed and inserts
// what is new or changed. A new fact or an edited section is a few rows; a
// build that changes no content writes nothing at all. ASK_INDEX_FORCE=1 wipes
// and reloads everything.
//
// Schema (the worker reads table names from ask_meta.slot, here 'live'):
//   ask_meta(key PRIMARY KEY, value)   slot, loaded_at, chunks, meta_hash,
//                                      content_hash (one hash over every chunk
//                                      and legal cell: a build with nothing new
//                                      stops after reading it), and the JSON
//                                      lookups aliases, species, states,
//                                      legal, facts
//   chunks_live(id INTEGER PRIMARY KEY, key UNIQUE, hash, slug, title,
//               heading, anchor, url, species, type, text, words)
//               key is type|url|heading, unique per chunk
//   chunks_live_fts  FTS5 over title, heading, species, text; rowid = id
//   legal_live(animal, code, hash, status, cite, quote, note, grandfathered,
//              local_override, verified_on)  the legal matrix, one row per
//              animal and jurisdiction (code lowercase, "ny", "nyc")
//
// The first incremental load replaces the earlier two-slot tables (chunks_a,
// chunks_b, legal_a, legal_b) and drops them once the worker points at 'live'.
//
// Optional env: CLOUDFLARE_ACCOUNT_ID, ASK_D1_DATABASE_ID.

import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const DIR = path.join(ROOT, '.ask-index');
const DEFAULT_DB_ID = 'dff48e70-8f70-419b-848e-89252aedb81c'; // ask-index
// Not a secret. The load token has D1 Edit only, which cannot list accounts.
const DEFAULT_ACCOUNT_ID = '87c27f51f0e653599f9dac1c1b3cb914';
const API = 'https://api.cloudflare.com/client/v4';
// D1 caps one SQL statement at 100 KB. Stay well under it.
const MAX_STATEMENT_BYTES = 90_000;
const SLOT = 'live';
const CHUNKS = `chunks_${SLOT}`;
const FTS = `${CHUNKS}_fts`;
const LEGAL = `legal_${SLOT}`;

const branch = process.env.CF_PAGES_BRANCH || '';
const token = process.env.CLOUDFLARE_API_TOKEN || '';
const force = process.env.ASK_INDEX_FORCE === '1';

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

const sqlString = (v) => (v == null ? 'NULL' : `'${String(v).replace(/'/g, "''")}'`);
const sha = (v) => crypto.createHash('sha256').update(typeof v === 'string' ? v : JSON.stringify(v)).digest('hex').slice(0, 24);
const readJson = (name) => JSON.parse(fs.readFileSync(path.join(DIR, name), 'utf8'));

async function main() {
  const acct = process.env.CLOUDFLARE_ACCOUNT_ID || DEFAULT_ACCOUNT_ID;
  const db = process.env.ASK_D1_DATABASE_ID || DEFAULT_DB_ID;
  let statements = 0;
  const query = (sql) => {
    statements++;
    return cf(`/accounts/${acct}/d1/database/${db}/query`, { method: 'POST', body: JSON.stringify({ sql }) });
  };
  const rows = async (sql) => {
    const result = await query(sql);
    return (Array.isArray(result) ? result[0] : result)?.results || [];
  };

  // Statements built from many items, each kept under the size cap.
  const batched = async (items, build) => {
    let batch = [];
    let bytes = 0;
    const flush = async () => {
      if (!batch.length) return;
      await query(build(batch));
      batch = [];
      bytes = 0;
    };
    for (const it of items) {
      const size = Buffer.byteLength(it) + 2;
      if (bytes + size > MAX_STATEMENT_BYTES - 500) await flush();
      batch.push(it);
      bytes += size;
    }
    await flush();
  };

  // ---------------------------------------------------------------- inputs
  const chunks = readJson('chunks.json').map((c) => ({
    ...c,
    key: `${c.type}|${c.url}|${c.heading}`,
    hash: sha([c.slug, c.title, c.heading, c.anchor, c.url, c.species, c.type, c.text]),
  }));
  const legal = readJson('legal.json').map((c) => ({ ...c, hash: sha(c) }));
  const meta = readJson('meta.json');
  const metaHash = sha(meta);

  // ---------------------------------------------------------------- tables
  await query('CREATE TABLE IF NOT EXISTS ask_meta (key TEXT PRIMARY KEY, value TEXT)');
  const existing = new Set((await rows("SELECT name FROM sqlite_master WHERE type = 'table'")).map((r) => r.name));
  const fresh = force || !existing.has(CHUNKS) || !existing.has(LEGAL);
  if (fresh) {
    for (const t of [FTS, CHUNKS, LEGAL]) await query(`DROP TABLE IF EXISTS ${t}`);
    await query(`CREATE TABLE ${CHUNKS} (
      id INTEGER PRIMARY KEY, key TEXT UNIQUE, hash TEXT, slug TEXT, title TEXT, heading TEXT,
      anchor TEXT, url TEXT, species TEXT, type TEXT, text TEXT, words INTEGER)`);
    await query(`CREATE VIRTUAL TABLE ${FTS} USING fts5(
      title, heading, species, text, tokenize='porter unicode61 remove_diacritics 2')`);
    await query(`CREATE TABLE ${LEGAL} (
      animal TEXT, code TEXT, hash TEXT, status TEXT, cite TEXT, quote TEXT, note TEXT,
      grandfathered TEXT, local_override INTEGER, verified_on TEXT,
      PRIMARY KEY (animal, code))`);
  }

  // One hash over every chunk and legal cell. When it and the meta match what
  // the last load saved, nothing changed and the load stops here, reading
  // about 4 rows. Comparing chunk by chunk (and the row counts) reads about
  // 26,000 rows, which on a night of branch pushes every few minutes was
  // over 100,000 rows read every 15 minutes (owner, 2026-11-01).
  const contentHash = sha([chunks.map((c) => c.key + c.hash), legal.map((c) => c.hash)]);
  const saved = Object.fromEntries((await rows("SELECT key, value FROM ask_meta WHERE key IN ('slot', 'meta_hash', 'content_hash', 'chunks')")).map((r) => [r.key, r.value]));
  if (!fresh && saved.slot === SLOT && saved.meta_hash === metaHash && saved.content_hash === contentHash) {
    console.log(`Ask index load: no content changed, nothing read or written (${saved.chunks} chunks live).`);
    return;
  }

  // ---------------------------------------------------------------- chunks
  const liveChunks = new Map((fresh ? [] : await rows(`SELECT key, hash FROM ${CHUNKS}`)).map((r) => [r.key, r.hash]));
  const wantChunks = new Map(chunks.map((c) => [c.key, c]));
  // Gone, or changed (a changed chunk is deleted, then inserted again).
  const dropKeys = [...liveChunks].filter(([k, h]) => wantChunks.get(k)?.hash !== h).map(([k]) => k);
  const addChunks = chunks.filter((c) => liveChunks.get(c.key) !== c.hash);
  const removed = dropKeys.filter((k) => !wantChunks.has(k)).length;

  // The FTS row goes by rowid before its chunk; inserted chunks are copied
  // into the FTS table inside D1 rather than sent twice.
  await batched(dropKeys.map(sqlString), (keys) =>
    `DELETE FROM ${FTS} WHERE rowid IN (SELECT id FROM ${CHUNKS} WHERE key IN (${keys.join(',')}))`);
  await batched(dropKeys.map(sqlString), (keys) => `DELETE FROM ${CHUNKS} WHERE key IN (${keys.join(',')})`);
  await batched(
    addChunks.map((c) => `(${[sqlString(c.key), sqlString(c.hash), sqlString(c.slug), sqlString(c.title),
      sqlString(c.heading), sqlString(c.anchor), sqlString(c.url), sqlString(c.species), sqlString(c.type),
      sqlString(c.text), c.words || 0].join(',')})`),
    (tuples) => `INSERT INTO ${CHUNKS} (key, hash, slug, title, heading, anchor, url, species, type, text, words) VALUES ${tuples.join(',')}`,
  );
  await batched(addChunks.map((c) => sqlString(c.key)), (keys) =>
    `INSERT INTO ${FTS} (rowid, title, heading, species, text)
     SELECT id, title, heading, species, text FROM ${CHUNKS} WHERE key IN (${keys.join(',')})`);

  // ----------------------------------------------------------------- legal
  const cellKey = (c) => `${c.animal}|${c.code}`;
  const liveLegal = new Map((fresh ? [] : await rows(`SELECT animal, code, hash FROM ${LEGAL}`)).map((r) => [cellKey(r), r.hash]));
  const wantLegal = new Map(legal.map((c) => [cellKey(c), c]));
  const dropCells = [...liveLegal].filter(([k, h]) => wantLegal.get(k)?.hash !== h).map(([k]) => k.split('|'));
  const addCells = legal.filter((c) => liveLegal.get(cellKey(c)) !== c.hash);
  await batched(dropCells.map(([a, c]) => `(animal = ${sqlString(a)} AND code = ${sqlString(c)})`), (conds) =>
    `DELETE FROM ${LEGAL} WHERE ${conds.join(' OR ')}`);
  await batched(
    addCells.map((c) => `(${[sqlString(c.animal), sqlString(c.code), sqlString(c.hash), sqlString(c.status),
      sqlString(c.cite), sqlString(c.quote), sqlString(c.note), sqlString(c.grandfathered),
      c.localOverride ? 1 : 0, sqlString(c.verifiedOn)].join(',')})`),
    (tuples) => `INSERT INTO ${LEGAL} (animal, code, hash, status, cite, quote, note, grandfathered, local_override, verified_on) VALUES ${tuples.join(',')}`,
  );

  // ----------------------------------------------------------- check, meta
  const [{ n }] = await rows(`SELECT COUNT(*) AS n FROM ${CHUNKS}`);
  const [{ ln }] = await rows(`SELECT COUNT(*) AS ln FROM ${LEGAL}`);
  if (n !== chunks.length) throw new Error(`index holds ${n} chunks, expected ${chunks.length}`);
  if (ln !== legal.length) throw new Error(`index holds ${ln} legal cells, expected ${legal.length}`);

  const metaChanged = saved.meta_hash !== metaHash || saved.slot !== SLOT;
  const changed = dropKeys.length + addChunks.length + dropCells.length + addCells.length;
  if (metaChanged || changed || saved.content_hash !== contentHash) {
    const metaRows = [['slot', SLOT], ['chunks', String(n)], ['meta_hash', metaHash], ['content_hash', contentHash],
      ...(metaChanged || changed ? [['loaded_at', new Date().toISOString()]] : []),
      ...(metaChanged ? Object.entries(meta).map(([k, v]) => [k, JSON.stringify(v)]) : [])];
    await query(`INSERT INTO ask_meta (key, value) VALUES
      ${metaRows.map(([k, v]) => `(${sqlString(k)}, ${sqlString(v)})`).join(', ')}
      ON CONFLICT(key) DO UPDATE SET value = excluded.value`);
  }

  // The two-slot tables from before incremental loading, once nothing reads them.
  for (const t of ['chunks_a_fts', 'chunks_a', 'chunks_b_fts', 'chunks_b', 'legal_a', 'legal_b']) {
    if (existing.has(t)) await query(`DROP TABLE IF EXISTS ${t}`);
  }

  console.log(changed || metaChanged
    ? `Ask index load: ${addChunks.length} chunks written, ${removed} removed, ${addCells.length} legal cells written${fresh ? ' (full load)' : ''}; ${n} chunks live, ${statements} statements.`
    : `Ask index load: no content changed, nothing written (${n} chunks live).`);
}

main().catch((err) => {
  console.warn(`Ask index load FAILED, live index left as it was: ${err.message}`);
  process.exit(0);
});
