import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from '@/lib/motion-safe';
import { Link } from 'react-router-dom';
import { AUTHOR, PUBLISHER } from '@/lib/data/author';

const DESCRIPTION = 'Beastly Facts is run by Michael Ryan, a keeper of two rescued bearded dragons, who writes sourced care guides and animal facts. Not a vet, just the research he wishes he had.';

// The About page in Michael's own words. Every paragraph here is a claim a
// reader or a reviewer can weigh: who writes the site, which animals he has
// actually kept and for how long, how the content is checked, how the site
// makes money, and how to reach him. Keep it first person and keep it true.
const Section = ({ title, children, delay = 0.1 }) => (
  <motion.section
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-card border border-border rounded-2xl p-6 sm:p-8"
  >
    <h2 className="font-display font-bold text-xl text-foreground mb-3">{title}</h2>
    <div className="font-body text-sm text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </motion.section>
);

export default function About() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>About Beastly Facts | Michael Ryan, Dex and Cera</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href="https://beastlyfacts.com/about/" />
        <meta property="og:title" content="About Beastly Facts" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://beastlyfacts.com/about/" />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Beastly Facts - animal trivia, care guides and quizzes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Beastly Facts" />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content="https://beastlyfacts.com/assets/og-default.jpg" />
        {/* The Person every article's BlogPosting author points at by @id.
            ProfilePage is the type for a page that IS about one person, which
            this is. sameAs ties the byline, this page and the site's public
            accounts into a single identity. */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            "url": AUTHOR.url,
            "mainEntity": {
              "@type": "Person",
              "@id": AUTHOR.url,
              "name": AUTHOR.name,
              "url": AUTHOR.url,
              "description": AUTHOR.bio,
              "jobTitle": AUTHOR.role,
              "image": `https://beastlyfacts.com${AUTHOR.image}`,
              "email": "hello@beastlyfacts.com",
              "sameAs": AUTHOR.sameAs,
              "worksFor": PUBLISHER,
            },
          })}
        </script>
      </Helmet>

      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-12 pb-8 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-3">
              About Beastly Facts
            </h1>
            <p className="font-body text-base text-muted-foreground max-w-2xl">
              One keeper, two rescued bearded dragons, and the research I wish I had on day one.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16 space-y-8">
        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="m-0"
        >
          <img
            src="/assets/images/about/dex-in-the-grass.jpg"
            alt="Dex, a bearded dragon, lying in long grass with his mouth open in the sun"
            width="1600"
            height="1067"
            className="w-full h-auto rounded-2xl border border-border"
          />
          <figcaption className="mt-2 text-xs font-body text-muted-foreground">
            Dex, who I call Baby. He came to me in 2022 at four years old and is the reason this site exists.
          </figcaption>
        </motion.figure>

        <Section title="Who runs this" delay={0.1}>
          <p>
            It's just me. My name is Michael Ryan, and I built and maintain this whole site myself. I am not a
            veterinarian. I am a keeper who spent years hunting for straight answers and decided to write down
            the ones I found.
          </p>
        </Section>

        <Section title="The animals that got me here" delay={0.15}>
          <p>
            I grew up with three dogs. Lady was a keeshond who was around from the day I was born until I was
            about ten. She hid behind the couch in every thunderstorm and I'd lie back there with her. She once
            ate an entire plastic bag and we had to wait it out, and she fought stomach cancer at the end. Autumn
            and Spencer were golden retrievers, half siblings, and we brought them home together in the mid
            1990s. Autumn would drive her head into you until you gave up and petted her. Spencer greeted
            everyone with a shoe he never chewed, just carried like it was sacred, and he'd back up until he was
            pressed against your legs waiting to be rubbed. When Autumn passed, Spencer fell apart, stopped
            eating even for cheese, and followed her not long after. I miss all three of them.
          </p>
          <p>
            In February 2022 a friend of my sister's was moving and couldn't take her bearded dragon. I said I'd
            take him. He was four. I call him Baby, the site calls him Dex, and I had no idea what I was getting
            into. Bulb wattage, UVB versus UVA, coil versus T5, which greens, which bugs, how often. None of it
            was hard information, but it was scattered across forums, old books, and pages that contradicted
            each other.
          </p>
          <p>
            In 2024 my aunt's bearded dragon needed a new home too. I named her Cera, after the triceratops,
            gave her a bigger enclosure, and she has turned into the most curious lizard I have ever met.
          </p>
          <p>
            A little over a year ago Dex's eyes started swelling and he stopped acting like himself. The vet
            diagnosed heart disease. He is on four medications now, with arthritis on top of it, and he is not
            doing great. He got better for a while and has since gotten worse. He's still with me for as long as
            he is. If I didn't know what I know now, I would not have recognized the early signs, and that is
            the reason this site exists.
          </p>
        </Section>

        <Section title="What this site is for" delay={0.2}>
          <p>
            I want the person who just took in a bearded dragon, or a gecko, or a rabbit they didn't plan on, to
            find everything I wish I'd had in one place, written plainly, with the sources right there on the
            page. That means <Link to="/guides/" className="text-secondary font-semibold hover:underline">species care guides</Link>,
            deep dives on cost, setup, feeding, handling and health, <Link to="/exotic-pet-laws/" className="text-secondary font-semibold hover:underline">state-by-state legality</Link>,
            and a library of <Link to="/facts/" className="text-secondary font-semibold hover:underline">checked animal facts</Link> for
            the days you just want something wild to read.
          </p>
        </Section>

        <Section title="How the content gets made" delay={0.25}>
          <p>
            Every guide is researched against veterinary references, published papers, and agency sources, and
            those sources are listed at the bottom of each article. I use AI tools to help draft and organize,
            and nothing goes up until I have checked it against those sources myself. I go back over published
            articles and correct them as I learn more. If you spot an error, email me and I will fix it and
            note the change.
          </p>
          <p>
            Nothing here replaces a vet. If your animal is sick, the right move is an exotic or reptile vet, and
            the guides will tell you when that moment has come.
          </p>
        </Section>

        <Section title="How the site is funded" delay={0.3}>
          <p>
            Some articles contain affiliate links, marked on the page, and I earn a small commission if you buy
            through them at no extra cost to you. There are <Link to="/care-packages/" className="text-secondary font-semibold hover:underline">printable care packages</Link> for
            sale, a donation button, and possibly ads in the future. None of that changes what I recommend.
          </p>
        </Section>

        <Section title="Get in touch" delay={0.35}>
          <p>
            <a href="mailto:hello@beastlyfacts.com" className="text-secondary font-semibold hover:underline">hello@beastlyfacts.com</a>.
            I read everything, and I answer, though it may take a couple of days because there are two dragons
            who need me first. The <Link to="/contact/" className="text-secondary font-semibold hover:underline">contact page</Link> has
            the social accounts too, and the <Link to="/blog/welcome-to-beastlyfacts/" className="text-secondary font-semibold hover:underline">welcome post</Link> is
            the short version of how this started.
          </p>
        </Section>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          <Link to="/guides/" className="bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:opacity-90 transition-opacity">
            Care guides
          </Link>
          <Link to="/facts/" className="bg-card border border-border text-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:bg-muted transition-colors">
            Animal facts
          </Link>
          <Link to="/exotic-pet-laws/" className="bg-card border border-border text-foreground px-5 py-2.5 rounded-full font-body font-bold text-sm hover:bg-muted transition-colors">
            Is it legal?
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
