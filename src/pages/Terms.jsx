import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="font-display font-bold text-xl text-foreground mb-3">{title}</h2>
    <div className="text-sm text-muted-foreground font-body leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Terms of Service | Beastly Facts</title>
        <meta name="description" content="Read the Beastly Facts terms of service to understand the rules and guidelines for using our animal facts, care guides, and quiz platform." />
        <link rel="canonical" href="https://beastlyfacts.com/terms/" />
        <meta name="robots" content="noindex, follow" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
      </Helmet>
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Clipboard">📋</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">Terms of Service</h1>
            <p className="text-xs text-muted-foreground font-body">Last updated: July 7, 2026</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Section title="1. Acceptance of Terms">
            <p>By accessing or using BeastlyFacts.com ("the Site"), you agree to be bound by these Terms of Service and our accompanying <a href="/privacy/" className="text-secondary hover:underline font-medium">Privacy Policy</a>, which is incorporated here by reference. If you do not agree to these terms, please discontinue use of the Site immediately.</p>
          </Section>

          <Section title="2. Use of Content">
            <p>All content on BeastlyFacts.com - including animal facts, care guides, articles, images, and quizzes - is provided for educational and entertainment purposes only. You may share individual facts for non-commercial purposes with clear attribution to BeastlyFacts.com.</p>
            <p>You may not reproduce, republish, scrape, or redistribute the Site's content in bulk without prior written permission.</p>
          </Section>

          <Section title="3. User Conduct">
            <p>When interacting with any features on this Site (including comment sections, contact forms, or newsletter sign-ups), you agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Submit false, misleading, or harmful information.</li>
              <li>Attempt to disrupt, hack, or interfere with Site operations.</li>
              <li>Use the Site for any unlawful or unauthorized purpose.</li>
              <li>Submit spam, unsolicited promotional content, or malicious links.</li>
            </ul>
          </Section>

          <Section title="4. Donations & Payments">
            <p>Donations made through BeastlyFacts.com are processed securely by Stripe. All transactions are subject to Stripe's Terms of Service. BeastlyFacts.com does not store any payment card information.</p>
            <p>Donations are voluntary and non-refundable unless required by applicable law. Monthly recurring donations can be cancelled at any time by contacting us at info@beastlyfacts.com.</p>
          </Section>

          <Section title="5. Disclaimer of Warranties">
            <p>The information on this Site is provided "as is" without warranties of any kind. While we strive for absolute accuracy, animal care information should always be verified with qualified veterinary professionals. BeastlyFacts.com is not liable for any decisions made based on content found on this Site.</p>
          </Section>

          <Section title="6. External Links & Affiliate Programs">
            <p>The Site contains links to third-party websites, including affiliate links through programs like the Amazon Associates program. These links are provided for your convenience and to help fund the operations of this independent platform.</p>
            <p>We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. We strongly advise you to read the terms and privacy policies of any third-party sites you visit.</p>
          </Section>

          <Section title="7. Changes to Terms">
            <p>We reserve the right to update these Terms at any time. Continued use of the Site after changes are posted constitutes full acceptance of the revised Terms.</p>
          </Section>

          <Section title="8. Contact">
            <p>For any questions regarding these Terms, please contact us at <a href="mailto:info@beastlyfacts.com" className="text-secondary hover:underline">info@beastlyfacts.com</a>.</p>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}