import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.7 },
      colors: ['#FF8C42', '#00B8A9', '#FFD93D', '#E8336D', '#0F3A1F'],
    });
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-4xl mb-3 block">📬</span>
          <h2 className="font-display font-bold text-2xl mb-2 text-foreground">
            Join the Beast Pack Newsletter
          </h2>
          <p className="text-sm text-muted-foreground font-body mb-6">
            Weekly facts, care tips, and adorable animal content delivered to your inbox. No spam, just paws! 🐾
          </p>

          {subscribed ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 bg-teal/10 text-teal font-display font-bold py-3 px-6 rounded-full"
            >
              <Check className="w-5 h-5" />
              You're in the pack! 🎉
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card border border-border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-secondary/50 text-foreground placeholder:text-muted-foreground"
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="bg-secondary text-secondary-foreground font-display font-bold text-sm py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
                Subscribe
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}