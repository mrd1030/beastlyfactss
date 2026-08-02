// Stripe Payment Links for the /donate/ page.
//
// This replaced a base44 serverless function (createStripeCheckoutSession) that
// built a Checkout Session server-side. Payment Links need no backend at all:
// Stripe hosts the whole payment page, so the site only has to send the visitor
// to the right URL. That removed the last runtime dependency on base44, along
// with the need to keep STRIPE_SECRET_KEY anywhere near this project.
//
// HOW TO FILL THESE IN
// Stripe Dashboard -> Payment Links -> "+ New". Create eight links:
//
//   one-time $1 / $5 / $10   -> product price fixed, one-time
//   monthly  $1 / $5 / $10   -> product price fixed, recurring monthly
//   one-time custom          -> pricing set to "Customer chooses what to pay"
//   monthly  custom          -> recurring monthly, customer chooses amount
//
// For each link, set the confirmation page to redirect to
// https://beastlyfacts.com/donate/success so the existing success route is used.
// Then paste each link's URL below. They look like https://buy.stripe.com/xxxxxxxx
//
// Any entry left empty simply disables that combination in the UI - the page
// checks with isDonationEnabled() rather than sending anyone to a dead link.
export const DONATION_LINKS = {
  'one-time': {
    1: '',
    5: '',
    10: '',
    custom: '',
  },
  monthly: {
    1: '',
    5: '',
    10: '',
    custom: '',
  },
};

export const DONATION_AMOUNTS = ['1', '5', '10', 'custom'];

export function getDonationLink(type, amount) {
  if (!type || !amount) return '';
  return DONATION_LINKS[type]?.[amount] || '';
}

export function isDonationEnabled(type, amount) {
  return Boolean(getDonationLink(type, amount));
}

// True when at least one link has been filled in. Used to show a plain
// "donations are being set up" note instead of a form that cannot submit.
export function hasAnyDonationLink() {
  return Object.values(DONATION_LINKS).some((byAmount) =>
    Object.values(byAmount).some(Boolean)
  );
}
