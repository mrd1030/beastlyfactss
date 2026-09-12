import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from '@/lib/motion-safe';

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
        <meta property="og:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
      </Helmet>
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Clipboard">📋</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">Terms of Service</h1>
            <p className="text-xs text-muted-foreground font-body">Last updated: September 12, 2026</p>
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

          <Section title="4. Purchases, Donations & Payments">
            <p>Payments on BeastlyFacts.com, whether a purchase or a donation, are processed by Stripe on Stripe's own checkout pages. All transactions are subject to Stripe's Terms of Service. We never receive or store payment card details.</p>
            <p><strong className="text-foreground">Care packages.</strong> Care packages are digital products: a downloadable PDF, sold as a one time purchase with no recurring charge. The download is available on the confirmation page as soon as the payment clears. There is no account to create at checkout. The email address you pay with is what identifies the purchase, and signing in to the library with that address is how you reach it again later. If a package is revised, your purchase gives you the updated file at no extra cost, for as long as the library remains available.</p>
            <p><strong className="text-foreground">Refunds on purchases.</strong> Care packages can be refunded within 30 days of purchase, no questions asked. Email hello@beastlyfacts.com and we will process it. Nothing here limits any refund or cancellation right you have under the consumer law that applies where you live, which in some places is broader than this.</p>
            <p><strong className="text-foreground">What a refund ends.</strong> A refund ends your licence to the package. We remove the purchase from your library, so it stops appearing there and can no longer be downloaded, and you are asked to delete any copies you have already downloaded or printed. We cannot take back a file that has already been saved, so this part relies on you, but continuing to use a package you have been refunded for is a breach of these Terms.</p>
            <p><strong className="text-foreground">Donations.</strong> Donations are voluntary and are not a purchase of anything. They are non-refundable unless applicable law requires otherwise. Monthly recurring donations can be cancelled at any time by contacting us at hello@beastlyfacts.com.</p>
          </Section>

          <Section title="5. Care Package Licence & Library Access">
            <p>Buying a care package gives you a personal, non-transferable licence to use and print it for your own pets. You may not resell it, republish it, or share the file publicly. Printing as many copies as you need for your own use is fine.</p>
            <p>Library access depends on you being able to receive email at the address used for the purchase, because that address is the only thing linking you to it. If you lose access to that inbox, contact us and we will try to help, though we cannot always verify a purchase without it.</p>
            <p>We intend to keep purchased files available for as long as we run the library. If we ever have to discontinue it, we will give notice by email to the addresses attached to purchases so the files can be downloaded first.</p>
            <p><strong className="text-foreground">When we can end access.</strong> We may remove a purchase from the library, ending the licence with it, in three situations: you have been refunded for it, the payment was reversed or charged back, or the licence terms above have been breached, meaning the file has been resold, republished or shared publicly. Outside those cases we will not remove a purchase you paid for and kept.</p>
          </Section>

          <Section title="6. Disclaimer of Warranties">
            <p>The information on this Site is provided "as is" without warranties of any kind. While we strive for absolute accuracy, animal care information should always be verified with qualified veterinary professionals. BeastlyFacts.com is not liable for any decisions made based on content found on this Site.</p>
          </Section>

          <Section title="7. External Links & Affiliate Programs">
            <p>The Site contains links to third-party websites, including affiliate links through programs like the Amazon Associates program. These links are provided for your convenience and to help fund the operations of this independent platform.</p>
            <p>We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. We strongly advise you to read the terms and privacy policies of any third-party sites you visit.</p>
          </Section>

          <Section title="8. Changes to Terms">
            <p>We reserve the right to update these Terms at any time. Continued use of the Site after changes are posted constitutes full acceptance of the revised Terms.</p>
          </Section>

          <Section title="9. Contact">
            <p>For any questions regarding these Terms, please contact us at <a href="mailto:hello@beastlyfacts.com" className="text-secondary hover:underline">hello@beastlyfacts.com</a>.</p>
          </Section>
        </motion.div>
      </div>
    </div>
  );
}