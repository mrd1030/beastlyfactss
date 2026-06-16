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
            <p className="text-xs text-muted-foreground font-body">Last updated: June 16, 2026</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
            <p>BeastlyFacts.com ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy outlines our data practices and is subject to our overarching <a href="/terms" className="text-secondary hover:underline">Terms of Service</a>.</p>
          </div>

          <Section title="1. Information We Collect">
            <p>BeastlyFacts.com collects minimal personal information to operate effectively:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Newsletter Data</strong> — email address, collected only when you voluntarily subscribe.</li>
              <li><strong className="text-foreground">Contact Information</strong> — name and message content provided via contact forms.</li>
              <li><strong className="text-foreground">Usage & Analytics Data</strong> — we use Google Analytics to measure traffic. This includes IP addresses, browser information, and on-site interaction events.</li>
              <li><strong className="text-foreground">User-Provided Data</strong> — with your consent, we may securely transmit hashed, first-party data to Google Analytics to improve conversion measurement and audience insights.</li>
            </ul>
            <p>We do not collect, store, or sell payment information. All payments are handled securely by Stripe.</p>
          </Section>

          <Section title="2. Cookies & Tracking Technologies">
            <p>This Site uses cookies and similar identifiers to improve your experience:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Google Analytics</strong> — used to understand how visitors use the Site. You can opt-out using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Google Analytics Opt-out Browser Add-on</a>.</li>
              <li><strong className="text-foreground">Google AdSense & Third-Party Advertising</strong> — third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to this site and/or other sites on the Internet.</li>
              <li><strong className="text-foreground">Stripe</strong> — used for fraud prevention and secure payment processing on donation metrics.</li>
              <li><strong className="text-foreground">Affiliate Tracking</strong> — third parties, including Amazon, may place cookies on your browser to track referrals and process performance data.</li>
              <li><strong className="text-foreground">Local Storage</strong> — used to save favorite facts and quiz results locally in your browser (never sent to our servers).</li>
            </ul>
            <p className="mt-3">You can choose to opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Google Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">www.aboutads.info</a>.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>Any information collected is used solely to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Send newsletters to subscribers who opt in.</li>
              <li>Respond to contact form inquiries.</li>
              <li>Improve site performance and analytics through enhanced measurement features.</li>
              <li>Process donations securely via Stripe.</li>
              <li>Serve personalized or non-personalized advertisements via Google AdSense.</li>
              <li>Support site operations through affiliate marketing.</li>
            </ul>
            <p>We never sell, rent, or trade your personal information to third parties.</p>
          </Section>

          <Section title="4. Affiliate Marketing Disclosure">
            <p>BeastlyFacts.com participates in affiliate marketing programs, including the Amazon Associates program. As an Amazon Associate, I earn from qualifying purchases. This means we may earn a commission when you click on or make purchases through our affiliate links. These commissions help support the research and content creation on this site. All affiliate links are clearly marked (e.g., "#ad" or "paid link"), and our participation does not influence the integrity of our advice or recommendations.</p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>BeastlyFacts.com uses third-party services, each governed by their own privacy policies:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Google Analytics & AdSense</strong> — <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Privacy Policy</a></li>
              <li><strong className="text-foreground">Stripe</strong> — <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Privacy Policy</a></li>
              <li><strong className="text-foreground">Beehiiv</strong> — <a href="https://www.beehiiv.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Privacy Policy</a></li>
              <li><strong className="text-foreground">Amazon</strong> — <a href="https://www.amazon.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Privacy Notice</a></li>
            </ul>
          </Section>

          <Section title="6. Data Retention & Your Rights">
            <p>Newsletter subscribers can unsubscribe at any time using the link in any email. To request access to, correction of, or deletion of your personal data, contact us at <a href="mailto:hello@beastlyfacts.com" className="text-secondary hover:underline">hello@beastlyfacts.com</a>.</p>
            <p>If you are located in the EU/EEA, you have rights under GDPR, including the right to data portability and the right to object to processing.</p>
          </Section>

          <Section title="7. Children's Privacy">
            <p>This Site is not directed at children under 13. We do not knowingly collect personal information from children. If you believe a child has provided personal data, please contact us immediately.</p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices. Changes will be posted on this page with an updated date. Continued use of the Site constitutes acceptance of the revised policy.</p>
          </Section>

          <Section title="9. Contact">
            <p>For privacy-related questions, please contact: <a href="mailto:hello@beastlyfacts.com" className="text-secondary hover:underline">hello@beastlyfacts.com</a></p>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}