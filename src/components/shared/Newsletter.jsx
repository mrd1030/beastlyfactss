import React from 'react';
import { motion } from '@/lib/motion-safe';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BeehiivSubscribe from '@/components/blog/BeehiivSubscribe';

export default function Newsletter() {

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

                        {/* Left: email promo. Critter Digest is the newsletter name. */}
                        <div>
                            <span className="text-3xl block mb-3">📰</span>
                            <h2 className="font-display font-bold text-2xl text-foreground mb-1">
                                Critter Digest
                            </h2>
                            <p className="text-xs font-body font-semibold text-secondary mb-3">
                                Facts that roar. Guides that care.
                            </p>
                            {/* Deliberately no cadence promise. This used to say "the weekly
                                email, a Sunday roundup" with four bullets of specifics while no
                                issue had ever gone out. A subscriber who is promised weekly and
                                hears nothing for a month forgets they signed up and flags the
                                first real send as spam. Promise only what is true. */}
                            <p className="text-sm text-muted-foreground font-body mb-5 leading-relaxed">
                                An occasional email when I have published something worth your time. No schedule,
                                no spam, unsubscribe in one click.
                            </p>
                            <Link to="/blog/">
                                <motion.button
                                    whileHover={{ x: 3 }}
                                    className="inline-flex items-center gap-1.5 text-sm font-body font-bold text-secondary hover:underline p-2 -m-2"
                                >
                                    Or read the latest articles <ArrowRight className="w-3.5 h-3.5" />
                                </motion.button>
                            </Link>
                        </div>

                        {/* Right: Subscribe form */}
                        <div className="bg-card border border-border rounded-2xl p-6">
                            <h3 className="font-display font-bold text-base text-foreground mb-1">
                                Subscribe - it's free
                            </h3>
                            <p className="text-xs text-muted-foreground font-body mb-4">
                                Occasional, not weekly. Unsubscribe in one click. 🐾
                            </p>
                            <BeehiivSubscribe />
                        </div>
                        
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
