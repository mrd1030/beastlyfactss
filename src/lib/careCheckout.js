// Starting a Stripe Checkout session for a care package, from the one place
// both the card and the product page can call it.
//
// The route in public/_worker.js owns the price and the session; this only
// asks for a URL and goes there. Nothing about the amount is decided in the
// browser, so there is nothing here worth tampering with.
export const CHECKOUT_ENDPOINT = '/api/care-packages/checkout';

export async function startCarePackageCheckout(packageId) {
  const res = await fetch(CHECKOUT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ packageId }),
  });

  // A Function that is not deployed yet returns the SPA shell with a 404, so
  // parsing has to be allowed to fail rather than throwing a SyntaxError at
  // the caller.
  const data = await res.json().catch(() => ({}));

  if (!res.ok || !data?.url) {
    throw new Error(data?.error || 'Could not start checkout. Please try again.');
  }

  // A full navigation, not a popup: Stripe's hosted page is the next step of
  // this flow rather than a side trip, and it returns the buyer to
  // /care-packages/thanks/ on this origin when it is done.
  window.location.href = data.url;
}
