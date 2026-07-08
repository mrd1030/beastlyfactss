import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Beastly Facts | Animal Trivia, Care Guides & Quizzes</title>
        <meta name="description" content="Learn about Beastly Facts - the animal trivia, care guide, and quiz hub built by a passionate reptile keeper for pet owners and animal lovers everywhere." />
        <link rel="canonical" href="https://beastlyfacts.com/about/" />
        <meta property="og:title" content="About Beastly Facts" />
        <meta property="og:description" content="Learn about Beastly Facts - the animal trivia, care guide, and quiz hub built by a passionate reptile keeper for pet owners and animal lovers everywhere." />
        <meta property="og:url" content="https://beastlyfacts.com/about/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts - animal trivia, care guides and quizzes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Beastly Facts" />
        <meta name="twitter:description" content="Learn about Beastly Facts - the animal trivia, care guide, and quiz hub built by a passionate reptile keeper for pet owners and animal lovers everywhere." />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/hero-1200.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Beastly Facts",
          "url": "https://beastlyfacts.com/",
          "logo": "https://beastlyfacts.com/assets/hero-1200.jpg",
          "description": "Animal trivia, care guides, and quizzes built by a passionate reptile keeper for pet owners and animal lovers everywhere.",
          "sameAs": []
        })}</script>
      </Helmet>
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-3xl mb-2 block" role="img" aria-label="Lion">🦁</span>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
              About BeastlyFacts
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 space-y-8">
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8"
        >
          <h2 className="font-display font-bold text-xl text-foreground mb-3">What is BeastlyFacts? 🐾</h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            BeastlyFacts is where I put everything I have learned from keeping reptiles and other pets, plus
            a lot of animal trivia I just genuinely find interesting. If you have ever stayed up late reading
            about thermostat gradients for a bearded dragon, or Googled why your dog is eating grass again, you
            already get why this site exists.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">
            There are hundreds of animal facts here, in-depth care guides for reptiles and exotic pets, a growing
            encyclopedia of species profiles, a personality quiz that matches you to your spirit animal, and a
            blog I call the Critter Digest covering everything from UVB lighting to ball python feeding schedules.
            I add new stuff whenever I finish researching it properly, not on some fixed schedule.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8"
        >
          <h2 className="font-display font-bold text-xl text-foreground mb-3">Who is BeastlyFacts for? 🏡</h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Honestly, anyone who shares their home with an animal and wants to do right by it. I write for bearded
            dragon owners, ball python keepers, crested gecko people, cat and dog owners, and anyone with a tank
            full of fish. It's also for people who don't own pets yet but like learning weird, surprising facts
            about the animal kingdom.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">
            I try to write the care guides so a beginner can actually use them, without talking down to anyone who
            already knows the basics. No jargon for the sake of sounding smart, just information that helps you and
            your animal.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8"
        >
          <h2 className="font-display font-bold text-xl text-foreground mb-3">Who built this? 👋</h2>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            It's just me. My name is Mike, and I built and maintain this whole site myself. No editorial team, no
            corporate backing - just someone who started keeping reptiles, got a little obsessed with animal biology
            and behavior, and decided to turn that into something useful.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">
            I research every fact and every care guide myself, combining real science with what I've actually
            learned from keeping my own animals (my bearded dragon Dexter has taught me more than any book has).
            If you've got questions, feedback, or a cool animal fact to share, reach out via the{' '}
            <Link to="/contact/" className="text-secondary font-semibold hover:underline">Contact page</Link>.
          </p>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap gap-3"
        >
          <Link to="/facts/" className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-display font-bold text-sm hover:opacity-90 transition-opacity">
            🐾 Explore Facts
          </Link>
          <Link to="/guides/" className="bg-card border border-border text-foreground px-5 py-2.5 rounded-full font-display font-bold text-sm hover:bg-muted transition-colors">
            📖 Care Guides
          </Link>
          <Link to="/quiz/personality/" className="bg-card border border-border text-foreground px-5 py-2.5 rounded-full font-display font-bold text-sm hover:bg-muted transition-colors">
            🧠 Take the Quiz
          </Link>
        </motion.div>
      </div>
    </div>
  );
}