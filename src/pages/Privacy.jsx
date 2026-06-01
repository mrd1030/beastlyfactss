import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="font-display font-bold text-xl text-foreground mb-3">{title}</h2>
    <div className="text-sm text-muted-foreground font-body leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block">🔒</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">Privacy Policy</h1>
            <p className="text-xs text-muted-foreground font-body">Last updated: June 1, 2025</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Section title="1. Information We Collect">
            <p>BeastlyFacts.com collects minimal personal information to operate effectively:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Email address</strong> — only when you voluntarily subscribe to our newsletter.</li>
              <li><strong className="text-foreground">Contact form submissions</strong> — name and message content when you reach out to us.</li>
              <li><strong className="text-foreground">Usage data</strong> — anonymized analytics (page views, general traffic patterns) via Google Analytics.</li>
            </ul>
            <p>We do not collect, store, or sell payment information. All payments are handled by Stripe.</p>
          </Section>

          <Section title="2. Cookies">
            <p>This Site uses cookies to improve your experience. Cookies may be set by:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Google Analytics</strong> — to understand how visitors use the Site (anonymized).</li>
              <li><strong className="text-foreground">Stripe</strong> — for fraud prevention and secure payment processing on the donation page.</li>
              <li><strong className="text-foreground">Local storage</strong> — to save your favorite facts and quiz results locally in your browser (never sent to our servers).</li>
            </ul>
            <p>You can disable cookies in your browser settings, though some Site features may not function correctly as a result.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>Any information collected is used solely to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Send newsletters to subscribers who opt in.</li>
              <li>Respond to contact form inquiries.</li>
              <li>Improve the Site through aggregated, anonymized analytics.</li>
              <li>Process donations securely via Stripe.</li>
            </ul>
            <p>We never sell, rent, or trade your personal information to third parties.</p>
          </Section>

          <Section title="4. Third-Party Services">
            <p>BeastlyFacts.com uses the following third-party services, each governed by their own privacy policies:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Stripe</strong> — payment processing. <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">stripe.com/privacy</a></li>
              <li><strong className="text-foreground">Google Analytics</strong> — anonymized site analytics.</li>
              <li><strong className="text-foreground">Beehiiv</strong> — newsletter delivery for subscribers.</li>
            </ul>
          </Section>

          <Section title="5. Data Retention & Your Rights">
            <p>Newsletter subscribers can unsubscribe at any time using the link in any email. To request deletion of any personal data we hold, contact us at <a href="mailto:hello@beastlyfacts.com" className="text-secondary hover:underline">hello@beastlyfacts.com</a>.</p>
            <p>If you are located in the EU/EEA, you have rights under GDPR including access, rectification, and erasure of your personal data.</p>
          </Section>

          <Section title="6. Children's Privacy">
            <p>This Site is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided personal data, please contact us immediately.</p>
          </Section>

          <Section title="7. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the Site constitutes acceptance of the revised policy.</p>
          </Section>

          <Section title="8. Contact">
            <p>For privacy-related questions, please contact: <a href="mailto:hello@beastlyfacts.com" className="text-secondary hover:underline">hello@beastlyfacts.com</a></p>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}