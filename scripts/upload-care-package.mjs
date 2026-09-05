#!/usr/bin/env node
//
// Uploads one care package PDF into the private Supabase bucket, at the stable
// path the download route reads from: care-packages/<package-id>.pdf.
//
// This is the whole publishing step for a corrected edition. Upload the new
// file over the same path, bump `version` in src/lib/data/carePackages.js AND
// the mirrored CARE_PACKAGE_STORE in public/_worker.js, and every buyer's next
// download is the new file. Nobody re-buys anything and no purchase row
// changes.
//
// Usage:
//   SUPABASE_URL=https://xxxx.supabase.co \
//   SUPABASE_SERVICE_ROLE_KEY=sb_secret_... \
//   node scripts/upload-care-package.mjs hamster "content/CAREPACKAGE Guides/rebuilt/Hamster_Care_Package_v2.2.pdf"
//
// The service role key is a secret and is not in this repo. Take it from
// Supabase Dashboard -> Settings -> API Keys, run this once, and do not leave
// it in your shell history. It is the same value the Cloudflare Pages
// environment holds as SUPABASE_SERVICE_ROLE_KEY - see docs/STOREFRONT.md.
//
// A dashboard upload does exactly the same thing (Storage -> care-packages ->
// Upload, overwrite the existing object). This script exists so the path is
// never mistyped, which would silently produce a package nobody can download.
import { readFile } from 'fs/promises';
import { basename } from 'path';

const BUCKET = 'care-packages';

const [packageId, filePath] = process.argv.slice(2);
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!packageId || !filePath) {
  console.error('Usage: node scripts/upload-care-package.mjs <package-id> <path-to-pdf>');
  process.exit(1);
}

if (!url || !key) {
  console.error('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must both be set.');
  process.exit(1);
}

if (!/^[a-z0-9-]+$/.test(packageId)) {
  console.error(`"${packageId}" is not a package id. Use the id from carePackages.js, e.g. hamster.`);
  process.exit(1);
}

const bytes = await readFile(filePath);

// A PDF starts with %PDF. Checked because uploading the wrong file to the right
// path is the one mistake here that produces a broken download for every buyer
// at once, silently.
if (bytes.subarray(0, 4).toString('latin1') !== '%PDF') {
  console.error(`${basename(filePath)} does not look like a PDF.`);
  process.exit(1);
}

const objectPath = `${packageId}.pdf`;

// x-upsert: true is what makes this a publish rather than a one-time create.
// Without it, the second upload to an existing path is a 409 and the correction
// never ships.
const res = await fetch(`${url}/storage/v1/object/${BUCKET}/${objectPath}`, {
  method: 'POST',
  headers: {
    Authorization: `Bearer ${key}`,
    apikey: key,
    'content-type': 'application/pdf',
    'cache-control': 'no-cache',
    'x-upsert': 'true',
  },
  body: bytes,
});

if (!res.ok) {
  console.error(`Upload failed (${res.status}): ${await res.text()}`);
  process.exit(1);
}

console.log(`Uploaded ${basename(filePath)} (${(bytes.length / 1024 / 1024).toFixed(2)} MB) to ${BUCKET}/${objectPath}`);
console.log('Check that `version` in carePackages.js and CARE_PACKAGE_STORE in public/_worker.js both match this edition.');
