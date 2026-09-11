#!/usr/bin/env node
// Prove the care package webhook works, without taking a payment.
//
// Stripe has no way to send a test event to a live endpoint (test events are a
// test-mode-only feature), and the webhook is the one link in the storefront
// that a checkout probe cannot reach: it only fires after real money moves. So
// this script does what Stripe does. It builds a checkout.session.completed
// payload, signs it with the endpoint's signing secret exactly the way Stripe
// signs one, and POSTs it.
//
// That is a real test rather than a simulation: the Worker cannot tell this
// request from Stripe's, so a 200 means the signature scheme, the secret, and
// the Supabase insert all work. Nothing here can reach Stripe or move money.
//
// The secret stays on your machine. Read it from the Stripe Dashboard in live
// mode (Webhooks -> the endpoint -> Signing secret -> Reveal) and pass it in:
//
//   STRIPE_WEBHOOK_SECRET=whsec_... node scripts/verify-care-package-webhook.mjs
//
// Options:
//   --url=<endpoint>     default https://beastlyfacts.com/api/care-packages/webhook
//   --package=<id>       default hamster
//   --email=<address>    default webhook-test@beastlyfacts.com
//   --bad-signature      sign with a wrong secret, to confirm a 400 is possible
//
// It writes one row into `purchases`, which is the point: that row is what
// grants a download. The session id is stamped with a recognizable prefix and
// the script prints the SQL to delete it when you are done.

import { createHmac } from 'node:crypto';

const args = Object.fromEntries(
  process.argv.slice(2).map(a => {
    const [k, v] = a.replace(/^--/, '').split('=');
    return [k, v ?? true];
  }),
);

const secret = process.env.STRIPE_WEBHOOK_SECRET;
if (!secret) {
  console.error('Set STRIPE_WEBHOOK_SECRET first. Stripe Dashboard, live mode:');
  console.error('Webhooks -> the /api/care-packages/webhook endpoint -> Signing secret -> Reveal.');
  process.exit(1);
}
if (!secret.startsWith('whsec_')) {
  console.error(`That does not look like a signing secret (expected whsec_..., got ${secret.slice(0, 6)}...).`);
  console.error('The signing secret is per endpoint and is not the API key.');
  process.exit(1);
}

const url = args.url || 'https://beastlyfacts.com/api/care-packages/webhook';
const packageId = args.package || 'hamster';
const email = args.email || 'webhook-test@beastlyfacts.com';

// Deliberately recognizable. A real Stripe session id is cs_live_ or cs_test_
// followed by an opaque string, so nothing here can collide with one, and the
// row is obvious in the table.
const sessionId = `cs_verify_${Date.now()}`;

const event = {
  id: `evt_verify_${Date.now()}`,
  object: 'event',
  type: 'checkout.session.completed',
  livemode: true,
  created: Math.floor(Date.now() / 1000),
  data: {
    object: {
      id: sessionId,
      object: 'checkout.session',
      payment_status: 'paid',
      amount_total: 899,
      currency: 'usd',
      payment_intent: null,
      customer_details: { email },
      metadata: { package_id: packageId, edition: 'webhook-verification' },
    },
  },
};

const body = JSON.stringify(event);
const timestamp = Math.floor(Date.now() / 1000);

// Same construction the Worker verifies against: HMAC-SHA256 over
// "<timestamp>.<raw body>", keyed by the signing secret, hex encoded. The
// header carries the timestamp and one v1 signature.
const signingKey = args['bad-signature'] ? 'whsec_deliberately_wrong_secret' : secret;
const signature = createHmac('sha256', signingKey).update(`${timestamp}.${body}`).digest('hex');

console.log(`POST ${url}`);
console.log(`  package  ${packageId}`);
console.log(`  email    ${email}`);
console.log(`  session  ${sessionId}`);
if (args['bad-signature']) console.log('  signing with a WRONG secret on purpose');
console.log();

const res = await fetch(url, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'stripe-signature': `t=${timestamp},v1=${signature}`,
  },
  body,
});
const text = await res.text();

console.log(`HTTP ${res.status}  ${text.trim()}`);
console.log();

if (args['bad-signature']) {
  console.log(res.status === 400
    ? 'Correct. A wrong secret is rejected, so verification is really running.'
    : `Expected 400 for a bad signature and got ${res.status}. Verification may not be enforcing.`);
  process.exit(res.status === 400 ? 0 : 1);
}

if (res.status === 200 && text.trim() === 'OK') {
  console.log('Working. The signature verified and the purchase row was written.');
  console.log('That is the whole webhook path, so a real sale will be recorded.');
  console.log();
  console.log('Clean up the test row in the Supabase SQL editor:');
  console.log(`  delete from purchases where stripe_session_id = '${sessionId}';`);
  console.log();
  console.log('Then run it again with --bad-signature to confirm a wrong secret is refused.');
} else if (res.status === 400) {
  console.log('The signature was refused. STRIPE_WEBHOOK_SECRET here does not match the');
  console.log('one the deployment holds. Either this secret is from the wrong endpoint');
  console.log('(test mode has its own), or Cloudflare still has the old value.');
} else if (res.status === 503) {
  console.log('The deployment is missing STRIPE_WEBHOOK_SECRET or the Supabase variables.');
} else if (res.status === 500) {
  console.log('Signature verified, but the Supabase insert failed. The secret is right and');
  console.log('the database is the problem. Check the purchases table and the service role key.');
} else if (text.includes('Incomplete')) {
  console.log('Signature verified, but the payload lacked a package id or email.');
} else {
  console.log('Unexpected. Read the status and body above.');
}
