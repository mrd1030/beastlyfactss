import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { base44 } from '@/api/base44Client';

export default function Donate() {
  const [amount, setAmount] = useState('5');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    setLoading(true);
    const { loadStripe } = await import('@stripe/stripe-js');
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
    if (!stripe) { toast.error('Stripe failed to load.'); setLoading(false); return; }

    const finalAmount = amount === 'custom' ? { custom: customAmount } : amount;
    const res = await base44.functions.invoke('createStripeCheckoutSession', { amount: finalAmount, type: donationType });
    const data = res.data;

    if (data.sessionId) {
      const { error } = await stripe.redirectToCheckout({ sessionId: data.sessionId });
      if (error) toast.error(`Error: ${error.message}`);
    } else {
      toast.error(data.error || 'Failed to create checkout session.');
    }
    setLoading(false);
  };

  const donateLabel = amount === 'custom'
    ? `Donate${customAmount ? ` $${customAmount}` : ''}`
    : `Donate $${amount}`;

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-secondary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block">🐾</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
              Support BeastlyFacts
            </h1>
            <p className="text-sm text-muted-foreground font-body max-w-md">
              Your contribution helps us keep sharing amazing animal facts and reptile care guides — ad-free and forever free to read.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-8 space-y-6"
        >
          {/* Amount */}
          <div className="space-y-3">
            <Label className="text-base font-body font-semibold">Choose an amount:</Label>
            <RadioGroup value={amount} onValueChange={setAmount} className="grid grid-cols-2 gap-3">
              {['1', '5', '10'].map((val) => (
                <div key={val}>
                  <RadioGroupItem value={val} id={`amount-${val}`} className="peer sr-only" />
                  <Label
                    htmlFor={`amount-${val}`}
                    className="flex flex-col items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                  >
                    <span className="font-display text-2xl font-bold text-foreground">${val}</span>
                  </Label>
                </div>
              ))}
              <div>
                <RadioGroupItem value="custom" id="amount-custom" className="peer sr-only" />
                <Label
                  htmlFor="amount-custom"
                  className="flex flex-col items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                >
                  <span className="font-display text-lg font-bold text-foreground">Custom</span>
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
            />
          )}

          {/* Type */}
          <div className="space-y-3">
            <Label className="text-base font-body font-semibold">Donation type:</Label>
            <RadioGroup value={donationType} onValueChange={setDonationType} className="grid grid-cols-2 gap-3">
              {[{ value: 'one-time', label: 'One-time' }, { value: 'monthly', label: 'Monthly' }].map(({ value, label }) => (
                <div key={value}>
                  <RadioGroupItem value={value} id={`type-${value}`} className="peer sr-only" />
                  <Label
                    htmlFor={`type-${value}`}
                    className="flex flex-col items-center justify-center rounded-xl border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer transition-all"
                  >
                    <span className="font-display text-base font-bold text-foreground">{label}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Button
            onClick={handleDonate}
            disabled={loading || (amount === 'custom' && (!customAmount || parseFloat(customAmount) <= 0))}
            className="w-full font-display font-bold text-lg py-6"
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Heart className="mr-2 h-4 w-4 fill-white" />}
            {donateLabel} {donationType === 'monthly' ? 'Monthly' : 'Now'}
          </Button>

          <div className="flex items-start gap-3 bg-accent/10 border border-accent/20 rounded-xl p-3">
            <span className="text-xl flex-shrink-0">🌍</span>
            <p className="text-xs text-muted-foreground font-body leading-relaxed">
              <span className="font-semibold text-foreground">BeastlyFacts.com</span> will contribute <span className="font-semibold text-accent">1% of every purchase or donation</span> to removing CO₂ from the atmosphere — because protecting animals means protecting their planet too.
            </p>
          </div>

          <p className="text-xs text-muted-foreground font-body text-center">
            Payments are securely processed by Stripe. BeastlyFacts never stores your card details.
          </p>
        </motion.div>
      </div>
    </div>
  );
}