import React, { useState } from 'react';
import { toast } from 'sonner';
import { Loader2, ShoppingBag } from 'lucide-react';
import { startCarePackageCheckout } from '@/lib/careCheckout';

// The buy button for a package that sells here rather than on Gumroad. Used by
// the card in the store and by the product page, so a change to how checkout
// starts is one edit rather than two.
//
// A button, not a link: there is no URL to point at until the Function has
// created a session, and creating one on hover or on a crawler's fetch would
// mean a Stripe session per crawl.
export default function CarePackageBuyButton({ pkg, className = '', label }) {
  const [busy, setBusy] = useState(false);

  const handleClick = async () => {
    if (busy) return;
    setBusy(true);
    try {
      await startCarePackageCheckout(pkg.id);
      // No setBusy(false) on the success path on purpose: the line above
      // navigates away, and flipping the label back first shows a ready button
      // for the moment before the page unloads, which reads as a failed click
      // and invites a second one.
    } catch (err) {
      toast.error(err?.message || 'Could not start checkout. Please try again.');
      setBusy(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={busy}
      className={`inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-60 ${className}`}
    >
      {busy ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
          Opening checkout
        </>
      ) : (
        <>
          <ShoppingBag className="w-4 h-4" aria-hidden="true" />
          {label || `Buy for ${pkg.price}`}
        </>
      )}
    </button>
  );
}
