import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';

function XLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function PinterestLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.102.124.117.232.086.351l-.332 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function FacebookLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function ThreadsLogo({ className }) {
  return (
    <svg className={className} viewBox="0 0 192 192" fill="currentColor" aria-hidden="true">
      <path d="M141.537 88.988c-.966-.482-1.953-.965-2.961-1.431-1.737-19.092-12.151-30.037-30.651-30.176h-.256c-11.092 0-20.348 4.739-26.013 13.364l12.297 8.432c4.192-6.357 10.779-7.713 13.716-7.713h.171c5.302.038 9.3 1.577 11.876 4.573 1.883 2.188 3.143 5.219 3.766 9.067-4.707-.796-9.795-.915-15.221-.35-15.289 1.757-25.115 11.097-24.465 25.14.33 7.111 3.894 13.225 10.024 17.218 5.213 3.383 11.929 5.025 18.889 4.668 9.216-.49 16.443-4.019 21.472-10.481 3.849-4.903 6.289-11.253 7.384-19.267 4.43 2.672 7.711 6.19 9.625 10.462 3.315 7.407 3.506 19.59-6.852 29.87-9.128 9.054-20.096 12.972-36.676 13.086-18.395-.132-32.299-6.04-41.298-17.558-8.47-10.863-12.862-26.648-13.066-46.927.204-20.279 4.596-36.064 13.066-46.927 9-11.518 22.903-17.426 41.299-17.558 18.523.134 32.73 6.07 42.201 17.647 4.668 5.741 8.178 12.951 10.504 21.492l14.368-3.84c-2.912-10.782-7.568-20.135-13.898-27.855C136.5 23.629 118.655 16.006 96.271 15.873h-.43C73.705 16.006 56.187 23.7 44.543 38.86 34.133 52.515 28.726 72.004 28.489 96.038v.388c.237 24.034 5.644 43.522 16.054 57.178C56.187 168.764 73.705 176.458 95.841 176.591h.429c19.73-.124 33.552-5.313 44.96-16.744 14.818-14.838 14.37-33.455 9.489-44.902-3.568-7.97-10.22-14.524-19.182-19.957zm-45.033 39.017c-6.705.378-13.668-1.655-18.022-5.423-3.275-2.82-4.874-6.474-4.687-10.577.356-7.635 6.62-11.914 17.624-13.154 2.067-.238 4.116-.352 6.12-.352 4.048 0 7.851.388 11.3 1.142-1.29 15.997-5.498 27.749-12.335 28.364z" />
    </svg>
  );
}

import DonateButton from '@/components/DonateButton';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Contact Beastly Facts | Get in Touch</title>
        <meta name="description" content="Got a question, a cool animal fact to share, or just want to say hi? Get in touch with the Beastly Facts team — we'd love to hear from you!" />
        <link rel="canonical" href="https://beastlyfacts.com/contact/" />
        <meta property="og:title" content="Contact Beastly Facts" />
        <meta property="og:description" content="Got a question, a cool animal fact to share, or just want to say hi? Get in touch with the Beastly Facts team." />
        <meta property="og:url" content="https://beastlyfacts.com/contact/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:alt" content="Beastly Facts — get in touch" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Beastly Facts" />
        <meta name="twitter:description" content="Got a question, a cool animal fact to share, or just want to say hi? Get in touch with the Beastly Facts team." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>
      <div className="bg-gradient-to-b from-secondary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Love letter">💌</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">
              Get in Touch
            </h1>
            <p className="text-sm text-muted-foreground font-body">
              Got a question, a cool fact to share, or just want to say hi? We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-16 space-y-5">
        <motion.a
          href="mailto:hello@beastlyfacts.com"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -2 }}
          className="flex items-center gap-5 bg-card border border-border rounded-2xl p-6 hover:border-secondary/40 hover:shadow-sm transition-all group"
        >
          <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-secondary" />
          </div>
          <div>
            <p className="font-display font-bold text-base text-foreground group-hover:text-secondary transition-colors">Email Us</p>
            <p className="text-sm text-muted-foreground font-body">hello@beastlyfacts.com</p>
            <p className="text-xs text-muted-foreground font-body mt-0.5">We read every message 🐾</p>
          </div>
        </motion.a>

        <motion.a
          href="https://instagram.com/beastly.facts"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          whileHover={{ y: -2 }}
          className="flex items-center gap-5 bg-card border border-border rounded-2xl p-6 hover:border-secondary/40 hover:shadow-sm transition-all group"
        >
          <div className="w-12 h-12 bg-hotpink/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Instagram className="w-5 h-5 text-hotpink" />
          </div>
          <div>
            <p className="font-display font-bold text-base text-foreground group-hover:text-hotpink transition-colors">Instagram</p>
            <p className="text-sm text-muted-foreground font-body">@beastly.facts</p>
            <p className="text-xs text-muted-foreground font-body mt-0.5">Daily animal facts & behind-the-scenes 🦎</p>
          </div>
        </motion.a>

        <motion.a
          href="https://x.com/beastly_facts"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.17 }}
          whileHover={{ y: -2 }}
          className="flex items-center gap-5 bg-card border border-border rounded-2xl p-6 hover:border-secondary/40 hover:shadow-sm transition-all group"
        >
          <div className="w-12 h-12 bg-foreground/5 rounded-2xl flex items-center justify-center flex-shrink-0">
            <XLogo className="w-5 h-5 text-foreground" />
          </div>
          <div>
            <p className="font-display font-bold text-base text-foreground group-hover:text-secondary transition-colors">X</p>
            <p className="text-sm text-muted-foreground font-body">@beastly_facts</p>
            <p className="text-xs text-muted-foreground font-body mt-0.5">Animal facts & wildlife content 🐾</p>
          </div>
        </motion.a>

        <motion.a
          href="https://www.pinterest.com/beastlyfacts/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.19 }}
          whileHover={{ y: -2 }}
          className="flex items-center gap-5 bg-card border border-border rounded-2xl p-6 hover:border-secondary/40 hover:shadow-sm transition-all group"
        >
          <div className="w-12 h-12 bg-red-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <PinterestLogo className="w-5 h-5 text-red-600" />
          </div>
          <div>
            <p className="font-display font-bold text-base text-foreground group-hover:text-secondary transition-colors">Pinterest</p>
            <p className="text-sm text-muted-foreground font-body">@BeastlyFacts</p>
            <p className="text-xs text-muted-foreground font-body mt-0.5">Animal boards & reptile inspiration 📌</p>
          </div>
        </motion.a>

        <motion.a
          href="https://www.facebook.com/profile.php?id=61590767090597"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.21 }}
          whileHover={{ y: -2 }}
          className="flex items-center gap-5 bg-card border border-border rounded-2xl p-6 hover:border-secondary/40 hover:shadow-sm transition-all group"
        >
          <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <FacebookLogo className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="font-display font-bold text-base text-foreground group-hover:text-secondary transition-colors">Facebook</p>
            <p className="text-sm text-muted-foreground font-body">Beastly Facts</p>
            <p className="text-xs text-muted-foreground font-body mt-0.5">Community updates & animal facts 🦁</p>
          </div>
        </motion.a>

        <motion.a
          href="https://www.threads.net/@Beastly.Facts"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.23 }}
          whileHover={{ y: -2 }}
          className="flex items-center gap-5 bg-card border border-border rounded-2xl p-6 hover:border-secondary/40 hover:shadow-sm transition-all group"
        >
          <div className="w-12 h-12 bg-foreground/5 rounded-2xl flex items-center justify-center flex-shrink-0">
            <ThreadsLogo className="w-5 h-5 text-foreground" />
          </div>
          <div>
            <p className="font-display font-bold text-base text-foreground group-hover:text-secondary transition-colors">Threads</p>
            <p className="text-sm text-muted-foreground font-body">@Beastly.Facts</p>
            <p className="text-xs text-muted-foreground font-body mt-0.5">Quick takes & animal trivia 🐾</p>
          </div>
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <DonateButton className="w-full font-display font-bold" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-primary/5 border border-primary/10 rounded-2xl p-6"
        >
          <p className="font-display font-bold text-sm text-foreground mb-1">📬 Response time</p>
          <p className="text-xs text-muted-foreground font-body leading-relaxed">
            This site is run by one person who also keeps real live animals — so responses may take a couple of days.
            But every message gets read and appreciated. Whether you've spotted an error, want to suggest a new guide,
            or just want to chat about geckos, drop a line!
          </p>
        </motion.div>
      </div>
    </div>
  );
}