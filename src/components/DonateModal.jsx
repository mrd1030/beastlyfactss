import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2, Heart } from 'lucide-react';
import { toast } from 'sonner';
import { base44 } from '@/api/base44Client';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

export default function DonateModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('5');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    setLoading(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe.js failed to load.");

      const finalAmount = amount === 'custom' ? { custom: customAmount } : amount;

      const res = await base44.functions.invoke('createStripeCheckoutSession', {
        amount: finalAmount,
        type: donationType,
      });
      const data = res.data;

      if (data.sessionId) {
        const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
        if (error) toast.error(`Error: ${error.message}`);
      } else {
        toast.error(data.error || 'Failed to create checkout session.');
      }
    } catch (error) {
      toast.error(`Donation failed: ${error.message || 'An unexpected error occurred.'}`);
    } finally {
      setLoading(false);
    }
  };

  const donateLabel = amount === 'custom'
    ? `Donate${customAmount ? ` $${customAmount}` : ''}`
    : `Donate $${amount}`;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-display">Support Our Mission 🐾</DialogTitle>
          <DialogDescription className="font-body">
            Your contribution helps us continue sharing amazing animal facts.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          
          {/* Amount Options - Accessible Arrow Navigation */}
          <div className="space-y-2">
            <Label className="text-base font-body font-semibold">Choose an amount:</Label>
            <RadioGroup value={amount} onValueChange={setAmount} className="grid grid-cols-2 gap-2">
              {['1', '5', '10'].map((val) => (
                <div key={val} className="relative">
                  <RadioGroupItem value={val} id={`modal-amount-${val}`} className="peer sr-only" />
                  <Label
                    htmlFor={`modal-amount-${val}`}
                    className="flex flex-col items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 cursor-pointer transition-all duration-200 text-muted-foreground hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:border-primary peer-focus-visible:ring-4 peer-focus-visible:ring-secondary peer-focus-visible:ring-offset-2"
                  >
                    <span className="font-display text-2xl font-bold">${val}</span>
                  </Label>
                </div>
              ))}
              <div className="relative">
                <RadioGroupItem value="custom" id="modal-amount-custom" className="peer sr-only" />
                <Label
                  htmlFor="modal-amount-custom"
                  className="flex flex-col items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 cursor-pointer transition-all duration-200 text-muted-foreground hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:border-primary peer-focus-visible:ring-4 peer-focus-visible:ring-secondary peer-focus-visible:ring-offset-2"
                >
                  <span className="font-display text-lg font-bold">Custom</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {amount === 'custom' && (
            <Input
              type="number"
              min="1"
              step="0.01"
              placeholder="Enter custom amount ($)"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              autoFocus
            />
          )}

          {/* Donation Frequency Options - Accessible Arrow Navigation */}
          <div className="space-y-2">
            <Label className="text-base font-body font-semibold">Donation type:</Label>
            <RadioGroup value={donationType} onValueChange={setDonationType} className="grid grid-cols-2 gap-2">
              {[
                { value: 'one-time', label: 'One-time' },
                { value: 'monthly', label: 'Monthly' }
              ].map(({ value, label }) => (
                <div key={value} className="relative">
                  <RadioGroupItem value={value} id={`modal-type-${value}`} className="peer sr-only" />
                  <Label
                    htmlFor={`modal-type-${value}`}
                    className="flex flex-col items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 cursor-pointer transition-all duration-200 text-muted-foreground hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground peer-data-[state=checked]:border-primary peer-focus-visible:ring-4 peer-focus-visible:ring-secondary peer-focus-visible:ring-offset-2"
                  >
                    <span className="font-display text-base font-bold">{label}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <Button
          onClick={handleDonate}
          disabled={loading || !amount || !donationType || (amount === 'custom' && (!customAmount || parseFloat(customAmount) <= 0))}
          className="w-full font-display font-bold text-lg py-6"
        >
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Heart className="mr-2 h-4 w-4 fill-white" />}
          {donateLabel} {donationType === 'monthly' ? '/ month' : ''}
        </Button>
      </DialogContent>
    </Dialog>
  );
}