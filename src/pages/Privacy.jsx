import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from '@/lib/motion-safe';
import { Lock as BadgeIcon } from 'lucide-react';
import { PageBadge } from '@/components/shared/IconChip';

const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="font-display font-bold text-xl text-foreground mb-3">{title}</h2>
    <div className="text-sm text-muted-foreground font-body leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Privacy Policy | Beastly Facts</title>
        <meta name="description" content="Read the Beastly Facts privacy policy to understand how we collect, use, and protect your data when you use our animal facts and care guide website." />
        <link rel="canonical" href="https://beastlyfacts.com/privacy/" />
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
            <PageBadge icon={BadgeIcon} color="teal" />
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-2">Privacy Policy</h1>
            <p className="text-xs text-muted-foreground font-body">Last updated: November 4, 2026</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
            <p>BeastlyFacts.com ("we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy outlines our data practices and is subject to our overarching <a href="/terms/" className="text-secondary hover:underline">Terms of Service</a>.</p>
          </div>

          <Section title="1. Information We Collect">
            <p>BeastlyFacts.com collects minimal personal information to operate effectively:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Newsletter Data</strong> - email address, collected only when you voluntarily subscribe.</li>
              <li><strong className="text-foreground">Contact Information</strong>: the name, message and optional email address you send through the contact form. The form is delivered to me as a push notification through ntfy and is not stored on the Site. Your email address is used only to reply.</li>
              <li><strong className="text-foreground">Ask Beastly</strong>: when you ask a question in the Ask Beastly chat, the question (and, on a follow-up, your previous question) is sent to our server. Most questions, whether or not our guides cover them (greetings, thank-yous and law questions are not among them), are first sent to Anthropic's Claude API with your previous question and the animal the conversation is about, so Claude can read what is being asked before we match it against our own guides. When a guide covers it, the question and the matching passages are sent to Anthropic again, and Claude writes the answer from those passages. We keep a log of each question, the pages it matched and what happened (answered, not covered, limited), with no IP address, name, account or device identifier attached. Each question, and the answer when there is one, is also sent to me as a push notification through ntfy. To limit how many questions one visitor can ask in an hour, our host keeps a short-lived counter under a hash of your IP address and the date; the address itself is not stored. Your conversation history stays in your browser (see Local Storage below), and answers you have already received are never sent back to us. Anything you type in a question is sent and logged as written, so please leave personal details out of it.</li>
              <li><strong className="text-foreground">Usage & Analytics Data</strong> - we use Google Analytics to measure traffic. This includes IP addresses, browser information, and on-site interaction events.</li>
              <li><strong className="text-foreground">Additional Analytics</strong> - alongside Google Analytics the Site uses Ahrefs Web Analytics and Cloudflare Web Analytics, both of which measure traffic without setting cookies. Cloudflare's is provided by the host that serves the Site. Both process technical request data such as IP address, referring page and browser type.</li>
              <li><strong className="text-foreground">Push Notifications</strong> - if you turn on notifications (in My Pack or for the daily Beastle reminder), your browser gives us a push subscription: a delivery address and encryption keys issued by your browser's push service. It contains no name or email. We store it to send the notifications you asked for. Turning notifications off stops them in your browser, and the stored subscription is deleted the next time a send to it fails.</li>
              <li><strong className="text-foreground">Bot Checks</strong> - the contact form, the care package library sign-in and the Ask Beastly chat use Cloudflare Turnstile to tell people from bots. Turnstile runs in your browser on those pages and processes technical data such as your IP address and browser details. We receive only a pass or fail result. After a pass in Ask Beastly, a signed pass valid for 30 minutes is stored in your browser so the check does not run before every question; it contains an expiry time and a signature, nothing about you.</li>
              <li><strong className="text-foreground">Comment Data</strong> - if you leave a comment on an article, we store the name you enter, the comment itself, and your email address if you choose to provide one. Your name and comment are shown publicly once approved. Your email address is never displayed publicly and is used only to contact you about your comment if needed.</li>
              <li><strong className="text-foreground">Like & Share Counts</strong> - when you like or share an article we store a random identifier generated by your browser, so the same device is only counted once. This identifier is not linked to your name, email, or any other information about you, and it does not identify you.</li>
              <li><strong className="text-foreground">Purchase Data</strong> - if you buy a care package, Stripe collects your email address at checkout and passes it to us. We store that address alongside a record of what you bought and when, so the purchase can be restored to you later. We do not receive or store your card details at any point.</li>
              <li><strong className="text-foreground">Library Sign-In</strong> - the care package library signs you in with a one time code emailed to the address you purchased with. There is no password and no account is created at checkout. Signing in stores a session token in your browser so you stay signed in, and it lets us show you the purchases recorded against that address and no one else's.</li>
            </ul>
            <p>We do not collect, store, or sell payment card information. Card details are entered on Stripe's own checkout pages and never reach this Site. The email address attached to a purchase is the one exception: Stripe passes it to us so we can deliver the file and restore it to you later, as described above.</p>
          </Section>

          <Section title="2. Cookies & Tracking Technologies">
            <p>This Site uses cookies and similar identifiers to improve your experience:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Google Analytics</strong> - used to understand how visitors use the Site. You can opt-out using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Google Analytics Opt-out Browser Add-on</a>.</li>
              <li><strong className="text-foreground">Advertising</strong> - the Site does not currently serve advertising, and no advertising cookies are set by us or by an ad network. If advertising returns through Google AdSense, third-party vendors including Google would use cookies to serve ads based on your prior visits to this and other sites, and this policy will be updated to say so before that happens.</li>
              <li><strong className="text-foreground">Affiliate Tracking</strong> - third parties, including Amazon, may place cookies on your browser to track referrals and process performance data.</li>
              <li><strong className="text-foreground">Local Storage</strong> - used to save favorite facts and quiz results locally in your browser. Quiz, Beastle and Critter Keeper results are also sent to us anonymously, without any name, account or device identifier, so we can see activity and show overall Beastle stats. Anything you type there, like a Critter Keeper pet name, is included in that anonymous note. Local storage also holds the random identifier described above, which records that you have already liked or shared an article. Your Ask Beastly conversations are kept in local storage on this device for 7 days, at most 30 of them, and are never sent to us; you can delete them from the chat at any time. It also holds the 30-minute Ask Beastly bot check pass.</li>
            </ul>
            <p className="mt-3">Donations are handled entirely on Stripe's own checkout pages, so no payment processing scripts or cookies run on this Site.</p>
            <p className="mt-3">You can choose to opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Google Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">www.aboutads.info</a>.</p>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>Any information collected is used solely to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Send newsletters to subscribers who opt in.</li>
              <li>Respond to contact form inquiries.</li>
              <li>Answer questions asked in Ask Beastly, and review the question log to see what our guides do not yet cover.</li>
              <li>Improve site performance and analytics through enhanced measurement features.</li>
              <li>Process donations and care package purchases securely via Stripe.</li>
              <li>Deliver purchased files, restore them to you through the library, and send you an updated file if a package is revised.</li>
              <li>Serve advertising, if and when the Site carries any. It does not at present.</li>
              <li>Publish approved comments, and count likes and shares on articles.</li>
              <li>Support site operations through affiliate marketing.</li>
            </ul>
            <p>We never sell, rent, or trade your personal information to third parties.</p>
          </Section>

          <Section title="4. Affiliate Marketing Disclosure">
            <p>BeastlyFacts.com participates in affiliate marketing programs, including the Amazon Associates program. As an Amazon Associate, I earn from qualifying purchases. This means we may earn a commission when you click on or make purchases through our affiliate links. These commissions help support the research and content creation on this site. Every page with affiliate links carries a disclosure near those links, and our participation does not influence the integrity of our advice or recommendations.</p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>BeastlyFacts.com uses third-party services, each governed by their own privacy policies:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Google</strong> - Analytics now, and AdSense only if advertising returns - <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Privacy Policy</a></li>
              <li><strong className="text-foreground">Ahrefs</strong> - cookieless traffic analytics - <a href="https://ahrefs.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Privacy Policy</a></li>
              <li><strong className="text-foreground">Cloudflare</strong> - hosts and serves the Site, provides cookieless traffic analytics, and runs the Turnstile bot check on the contact form, library sign-in and Ask Beastly, and holds the Ask Beastly search index and its short-lived question counters - <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Privacy Policy</a></li>
              <li><strong className="text-foreground">Supabase</strong> - hosts the database that stores comments, likes, shares, care package purchases, push subscriptions, the Ask Beastly question log and the anonymous quiz, Beastle and Critter Keeper results, and provides the emailed sign-in code for the library - <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Privacy Policy</a></li>
              <li><strong className="text-foreground">ntfy</strong>: delivers contact form messages, Ask Beastly questions and answers, and anonymous site activity (quiz results, Critter Keeper adoptions, notification sign-ups) to me as push notifications: <a href="https://docs.ntfy.sh/privacy/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Privacy Policy</a></li>
              <li><strong className="text-foreground">Anthropic</strong>: reads Ask Beastly questions to work out what they ask, and writes the answers from the passages we send with your question. Under its commercial terms Anthropic does not train its models on that data, and it deletes API inputs and outputs within 30 days unless a request is flagged under its usage policy: <a href="https://www.anthropic.com/legal/commercial-terms" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Commercial Terms</a></li>
              <li><strong className="text-foreground">Stripe</strong> - <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Privacy Policy</a></li>
              <li><strong className="text-foreground">Beehiiv</strong> - <a href="https://www.beehiiv.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Privacy Policy</a></li>
              <li><strong className="text-foreground">Amazon</strong> - <a href="https://www.amazon.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">Privacy Notice</a></li>
            </ul>
          </Section>

          <Section title="6. Data Retention & Your Rights">
            <p>Newsletter subscribers can unsubscribe at any time using the link in any email. To request access to, correction of, or deletion of your personal data, contact us at <a href="mailto:hello@beastlyfacts.com" className="text-secondary hover:underline">hello@beastlyfacts.com</a>.</p>
            <p>Ask Beastly questions are kept in our log for 12 months and then deleted automatically. The hourly question counter expires on its own within about an hour, and the daily answer counter within two days. Anthropic deletes what we send it within 30 days, as described above. Because the log holds no identifier, we cannot find your questions to delete them early; if you typed something you want removed, email the exact wording and the day you asked.</p>
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