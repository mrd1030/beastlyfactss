// Stripe Payment Links for the /donate/ page.
//
// This replaced a base44 serverless function (createStripeCheckoutSession) that
// built a Checkout Session server-side. Payment Links need no backend at all:
// Stripe hosts the whole payment page, so the site only has to send the visitor
// to the right URL. That removed the last runtime dependency on base44, along
// with the need to keep STRIPE_SECRET_KEY anywhere near this project.
//
// Each link below was opened and checked before being wired, because the cost of
// guessing is charging someone the wrong amount on the wrong schedule. The $1
// monthly link reports "Billed monthly", and the custom link is one-time with an
// editable amount field defaulting to $5.
//
// There is deliberately no monthly custom link: only seven exist, and the custom
// one is one-time. Leaving that slot empty is what disables the Custom + Monthly
// combination in the UI rather than quietly billing a one-off as a subscription.
//
// To add or change a link: Stripe Dashboard -> Payment Links. Set the confirmation
// page to redirect to https://beastlyfacts.com/donate/success so the existing
// success route is used. Any entry left empty disables that combination.
export const DONATION_LINKS = {
  'one-time': {
    1: 'https://buy.stripe.com/dRm8wJ6Q2dCAbYQbrn9k401',
    5: 'https://buy.stripe.com/5kQ5kx8Ya2XWaUM6739k402',
    10: 'https://buy.stripe.com/8x26oB3DQcyw1kc52Z9k403',
    // Customer chooses the amount on Stripe's page; $5 is only the default.
    custom: 'https://buy.stripe.com/eVq3cp0rE9mk4wo1QN9k407',
  },
  monthly: {
    1: 'https://buy.stripe.com/5kQ9ANb6i7ec9QI2UR9k404',
    5: 'https://buy.stripe.com/6oU6oB5LY6a8bYQ1QN9k405',
    10: 'https://buy.stripe.com/9B69ANgqCeGE1kc6739k406',
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
