import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.7 }, colors: ['#FF8C42', '#00B8A9', '#FFD93D', '#E8336D'] });
  };

  return (
    <section className="py-14 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 via-card to-secondary/5 border border-border rounded-3xl p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Blog promo */}
            <div>
              <span className="text-3xl block mb-3">📰</span>
              <h2 className="font-display font-bold text-2xl text-foreground mb-2">
                The Critter Digest
              </h2>
              <p className="text-sm text-muted-foreground font-body mb-4 leading-relaxed">
                Our blog and newsletter in one place. In-depth reptile care guides, husbandry deep-dives, species spotlights, and expert tips — delivered to your inbox and published here.
              </p>
              <div className="flex flex-col gap-2 mb-5">
                {[
                  "🦎 Gecko & reptile husbandry deep-dives",
                  "☀️ UVB lighting & supplementation guides",
                  "🌿 Bioactive enclosure walkthroughs",
                  "🩺 Health & vet care tips",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-body text-muted-foreground">
                    <span className="text-base leading-none mt-0.5">{item.split(' ')[0]}</span>
                    <span>{item.split(' ').slice(1).join(' ')}</span>
                  </div>
                ))}
              </div>
              <Link to="/blog">
                <motion.button
                  whileHover={{ x: 3 }}
                  className="inline-flex items-center gap-1.5 text-sm font-display font-bold text-secondary hover:underline"
                >
                  Browse all articles <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </Link>
            </div>

            {/* Right: Subscribe form */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display font-bold text-base text-foreground mb-1">
                Subscribe — it's free
              </h3>
              <p className="text-xs text-muted-foreground font-body mb-4">
                New articles straight to your inbox. No spam, ever. 🐾
              </p>

              {subscribed ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center gap-2 bg-teal/10 text-teal font-display font-bold py-3 px-4 rounded-xl"
                >
                  <Check className="w-5 h-5" />
                  You're in! Welcome to the Digest 🎉
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-secondary/50 text-foreground placeholder:text-muted-foreground"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full bg-secondary text-secondary-foreground font-display font-bold text-sm py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" />
                    Subscribe to Critter Digest
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}