import React, { lazy } from 'react';
import { hydratable } from '@/lib/routeRegistry';
import { MotionConfig, LazyMotion, domAnimation } from '@/lib/motion-safe';
import { Helmet } from 'react-helmet-async'; // Added for SEO Structured Data
import { Toaster } from "@/components/ui/toaster";
import SubscribedToast from "@/components/shared/SubscribedToast";
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import { FavoritesProvider } from '@/lib/FavoritesContext';
import ScrollToTop from './components/ui/ScrollToTop';
import AppLayout from '@/components/layout/AppLayout';
import PageNotFound from './lib/PageNotFound';
// Home is NOT lazy-loaded like the other pages below: its own module (~3KB
// gzipped) is tiny, but it's rendered inside AppLayout's <Suspense>, and every
// homepage load has to wait for a lazy Home chunk to arrive over the network
// before Suspense can resolve - during that wait, the fallback spinner
// replaces the already-painted prerendered Hero content, which then pops back
// in once the chunk loads. A real production Lighthouse run (not reproducible
// on localhost, where the chunk loads too fast to ever paint the gap) measured
// this as a 0.54 CLS hit - by far the dominant layout-shift culprit, bigger
// than the earlier Footer-outside-Suspense bug this same mechanism caused.
// Keeping Home available synchronously means the initial commit never
// suspends for the homepage, so there's no gap for Hero to disappear into.
import Home from '@/pages/Home';
const Facts = hydratable('Facts');
const Quiz = hydratable('Quiz');
const QuizHub = hydratable('QuizHub');
const Pack = hydratable('Pack');
const Encyclopedia = hydratable('Encyclopedia');
const Blog = hydratable('Blog');
const GuideDetail = hydratable('GuideDetail');
const About = hydratable('About');
const Contact = hydratable('Contact');
const AnimalFacts = hydratable('AnimalFacts');
const Donate = hydratable('Donate');
const DonateSuccess = hydratable('DonateSuccess');
const DonateCancel = hydratable('DonateCancel');
const Terms = hydratable('Terms');
const Privacy = hydratable('Privacy');
const Categories = hydratable('Categories');
const Search = hydratable('Search');
const Glossary = hydratable('Glossary');
const ExoticPetLaws = hydratable('ExoticPetLaws');
const ExoticPetLawsHub = hydratable('ExoticPetLawsHub');
const ExoticPetLawsState = hydratable('ExoticPetLawsState');
const ExoticPetLawsStateIndex = hydratable('ExoticPetLawsStateIndex');
const EncyclopediaAnimal = hydratable('EncyclopediaAnimal');
const Beastlypedia = hydratable('Beastlypedia');
const BeastfileDetail = hydratable('BeastfileDetail');
const Guides = hydratable('Guides');
const Gear = hydratable('Gear');
const FactFiles = hydratable('FactFiles');
const AnimalDays = hydratable('AnimalDays');
const Chronicles = hydratable('Chronicles');
const Gallery = hydratable('Gallery');
const CarePackages = hydratable('CarePackages');
const CarePackagesStore = hydratable('CarePackagesStore');
const CarePackagesWhyWeExist = hydratable('CarePackagesWhyWeExist');
const CarePackagesFaq = hydratable('CarePackagesFaq');
const CarePackageProduct = hydratable('CarePackageProduct');
const CarePackageThanks = hydratable('CarePackageThanks');
const CarePackageLibrary = hydratable('CarePackageLibrary');
const Feed = hydratable('Feed');
const Composer = hydratable('Composer');
const ComposerLogin = hydratable('ComposerLogin');
// Lazy rather than a static import like the rest of AppLayout's dependencies:
// ProtectedRoute pulls in AuthContext, which pulls in the Supabase client.
// Loading it eagerly here would ship that whole chunk on every single page,
// not just the one route (/composer) that's actually gated behind it.
const ProtectedRoute = lazy(() => import('@/components/ProtectedRoute'));

function RedirectGuideFilter() {
  const { guideFilter } = useParams();
  return <Navigate to={`/guides/category/${guideFilter}/`} replace />;
}

const AuthenticatedApp = () => {
  return (
    <>
      {/* No <AnalyticsTracker /> here on purpose. It called
          window.gtag('config', ...) on every route change, which would
          double-count every pageview: GA4's Enhanced Measurement already
          reports SPA route changes through its own history listener inside
          gtag.js. Pageviews are GA4's job, not the app's. (It also never ran
          in the Tag Manager era, when window.gtag did not exist; index.html
          now defines gtag directly.) See src/lib/analytics.js for how custom
          events reach GA4. */}
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/facts/category/:factCat" element={<Facts />} />
          <Route path="/facts/:slug" element={<Facts />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/category/:category" element={<Guides />} />
          <Route path="/guides/:id" element={<GuideDetail />} />
          <Route path="/gear" element={<Gear />} />
          <Route path="/gear/category/:petType" element={<Gear />} />
          <Route path="/encyclopedia" element={<Encyclopedia />} />
          <Route path="/encyclopedia/animal/:id" element={<EncyclopediaAnimal />} />
          <Route path="/encyclopedia/category/:encCat" element={<Encyclopedia />} />
          <Route path="/encyclopedia/guides" element={<Navigate to="/guides/" replace />} />
          <Route path="/encyclopedia/guides/:guideFilter" element={<RedirectGuideFilter />} />
          {/* Beastlypedia: wild animal profiles, a sibling of Encyclopedia
              rather than a child of it. The group route comes before the slug
              route so /beastlypedia/group/mammals/ is not read as a Beastfile
              whose id happens to be "group". */}
          <Route path="/beastlypedia" element={<Beastlypedia />} />
          <Route path="/beastlypedia/group/:groupSlug" element={<Beastlypedia />} />
          <Route path="/beastlypedia/:slug" element={<BeastfileDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/category/:catSlug" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/chronicles" element={<Chronicles />} />
          <Route path="/chronicles/:seriesId" element={<Chronicles />} />
          <Route path="/chronicles/:seriesId/:part" element={<Chronicles />} />
          <Route path="/quiz" element={<QuizHub />} />
          <Route path="/quiz/:tab" element={<Quiz />} />
          <Route path="/pack" element={<Pack />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/animal-facts" element={<AnimalFacts />} />
          <Route path="/fact-files" element={<FactFiles />} />
          <Route path="/animal-days" element={<AnimalDays />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/trivia" element={<Navigate to="/quiz/trivia/" replace />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/success" element={<DonateSuccess />} />
          <Route path="/donate/cancel" element={<DonateCancel />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:query" element={<Search />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/exotic-pet-laws" element={<ExoticPetLawsHub />} />
          {/* Declared before :animalId so "map" and "state" are not matched as
              animal ids. The two-segment state route is safe either way, but the
              bare /exotic-pet-laws/state/ index is one segment and would be
              swallowed by :animalId exactly as /map was. */}
          <Route path="/exotic-pet-laws/map" element={<ExoticPetLaws />} />
          <Route path="/exotic-pet-laws/state" element={<ExoticPetLawsStateIndex />} />
          <Route path="/exotic-pet-laws/state/:stateSlug" element={<ExoticPetLawsState />} />
          <Route path="/exotic-pet-laws/:animalId" element={<ExoticPetLaws />} />
          <Route path="/care-packages" element={<CarePackages />} />
          <Route path="/care-packages/store" element={<CarePackagesStore />} />
          <Route path="/care-packages/why-we-exist" element={<CarePackagesWhyWeExist />} />
          <Route path="/care-packages/faq" element={<CarePackagesFaq />} />
          <Route path="/care-packages/thanks" element={<CarePackageThanks />} />
          <Route path="/care-packages/library" element={<CarePackageLibrary />} />
          {/* Last of the /care-packages/ routes, and the only dynamic one. The
              four static siblings above win over it either way (React Router
              ranks a literal segment above a param), but keeping it last means
              the file reads in the order the URLs actually resolve. */}
          <Route path="/care-packages/:packageId" element={<CarePackageProduct />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/feed/tag/:tag" element={<Feed />} />
          <Route path="/composer/login" element={<ComposerLogin />} />
          <Route element={<ProtectedRoute unauthenticatedElement={<Navigate to="/composer/login/" replace />} />}>
            <Route path="/composer" element={<Composer />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

function App() {
  // SEO: Define Structured Data for the Site
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "BeastlyFacts",
    "url": "https://beastlyfacts.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://beastlyfacts.com/search/{search_term_string}/",
      "query-input": "required name=search_term_string"
    }
  };

  // SEO: Sitewide Organization entity - kept in sync with the Article
  // publisher.logo shape used on Blog/GuideDetail pages so it's the same
  // image, not a second one to maintain.
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Beastly Facts",
    "url": "https://beastlyfacts.com/",
    "logo": { "@type": "ImageObject", "url": "https://beastlyfacts.com/assets/og-default.jpg" },
    "sameAs": [
      "https://www.pinterest.com/BeastlyFacts",
      "https://x.com/beastly_facts",
      "https://www.instagram.com/beastly.facts",
      "https://www.youtube.com/@BeastlyFactsOfficial"
    ]
  };

  return (
    <FavoritesProvider>
      {/* reducedMotion="user" disables framer-motion transforms for visitors with prefers-reduced-motion set */}
      <MotionConfig reducedMotion="user">
        {/* motion-safe.js builds every motion.X on framer's lightweight `m`
            component, which renders nothing animated until a LazyMotion
            provides features. domAnimation is loaded synchronously here so
            animate/exit/whileHover/whileTap/whileInView behave exactly as the
            full `motion` import did, minus the drag and layout-projection
            engine (~41KB raw) that nothing on the initial render needs.
            FactModal, the one drag user, loads domMax on demand when it
            opens (see motionFeaturesMax.js). Feature loading is post-mount
            only and never changes markup, so the prerender/hydration
            contract in motion-safe.js is untouched. */}
        <LazyMotion features={domAnimation}>
        <Router>
          {/* Inject SEO Data */}
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify(structuredData)}
            </script>
            <script type="application/ld+json">
              {JSON.stringify(organizationSchema)}
            </script>
          </Helmet>

          <AuthenticatedApp />
          <ScrollToTop />
        </Router>
        </LazyMotion>
        <Toaster />
        <SubscribedToast />
      </MotionConfig>
    </FavoritesProvider>
  );
}

export default App;