import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { base44 } from '@/api/base44Client';

export default function Donate() {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('');
  const [loading, setLoading] = useState(false);

  // Refs for arrow key navigation
  const amountContainerRef = useRef(null);
  const typeContainerRef = useRef(null);

  const handleKeyDown = (e, containerRef) => {
    const buttons = Array.from(containerRef.current.querySelectorAll('button'));
    const index = buttons.indexOf(document.activeElement);

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const next = (index + 1) % buttons.length;
      buttons[next].focus();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = (index - 1 + buttons.length) % buttons.length;
      buttons[prev].focus();
    }
  };

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
    ? (customAmount ? `Donate $${customAmount}` : 'Donate') 
    : amount ? `Donate $${amount}` : 'Donate';

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Support Beastly Facts | Donate</title>
        <meta name="description" content="Love Beastly Facts? Support us with a donation and help keep amazing animal facts, care guides, and quizzes free for everyone." />
        <link rel="canonical" href="https://beastlyfacts.com/donate/" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>
      <div className="bg-gradient-to-b from-secondary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">Support BeastlyFacts</h1>
          <p className="text-sm text-muted-foreground font-body">Your contribution helps us keep sharing amazing animal facts.</p>
        </div>
      </div>

      <div className="max-w-xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
          
          {/* Amount Section */}
          <div className="space-y-3">
            <Label className="text-base font-body font-semibold">Choose an amount:</Label>
            <div 
              className="grid grid-cols-2 gap-3" 
              ref={amountContainerRef} 
              onKeyDown={(e) => handleKeyDown(e, amountContainerRef)}
            >
              {['1', '5', '10', 'custom'].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val)}
                  className={`flex flex-col items-center justify-center rounded-xl border-2 p-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    amount === val 
                      ? 'border-primary bg-primary/10 text-foreground' 
                      : 'border-muted bg-popover text-muted-foreground hover:bg-accent'
                  }`}
                >
                  <span className="font-display text-2xl font-bold">{val === 'custom' ? 'Custom' : `$${val}`}</span>
                </button>
              ))}
            </div>
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
              className="focus-visible:ring-4 focus-visible:ring-primary"
            />
          )}

          {/* Type Section */}
          <div className="space-y-3">
            <Label className="text-base font-body font-semibold">Donation type:</Label>
            <div 
              className="grid grid-cols-2 gap-3" 
              ref={typeContainerRef} 
              onKeyDown={(e) => handleKeyDown(e, typeContainerRef)}
            >
              {[
                { value: 'one-time', label: 'One-time' },
                { value: 'monthly', label: 'Monthly' }
              ].map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setDonationType(value)}
                  className={`flex flex-col items-center justify-center rounded-xl border-2 p-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    donationType === value 
                      ? 'border-primary bg-primary/10 text-foreground' 
                      : 'border-muted bg-popover text-muted-foreground hover:bg-accent'
                  }`}
                >
                  <span className="font-display text-base font-bold">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Donate Button */}
          <Button
            onClick={handleDonate}
            disabled={loading || !amount || !donationType || (amount === 'custom' && (!customAmount || parseFloat(customAmount) <= 0))}
            className="w-full font-display font-bold text-lg py-6 focus-visible:ring-4 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Heart className="mr-2 h-4 w-4 fill-white" />}
            {donateLabel}
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
        </div>
      </div>
    </div>
  );
}