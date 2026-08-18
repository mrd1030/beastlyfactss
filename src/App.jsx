import React, { lazy } from 'react';
import { MotionConfig } from '@/lib/motion-safe';
import { Helmet } from 'react-helmet-async'; // Added for SEO Structured Data
import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { FavoritesProvider } from '@/lib/FavoritesContext';
import ScrollToTop from './components/ui/ScrollToTop';
import AppLayout from '@/components/layout/AppLayout';
import ProtectedRoute from '@/components/ProtectedRoute';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
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
const Facts = lazy(() => import('@/pages/Facts'));
const Quiz = lazy(() => import('@/pages/Quiz'));
const Pack = lazy(() => import('@/pages/Pack'));
const Encyclopedia = lazy(() => import('@/pages/Encyclopedia'));
const Blog = lazy(() => import('@/pages/Blog'));
const GuideDetail = lazy(() => import('@/pages/GuideDetail'));
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const AnimalFacts = lazy(() => import('@/pages/AnimalFacts'));
const Donate = lazy(() => import('@/pages/Donate'));
const DonateSuccess = lazy(() => import('@/pages/DonateSuccess'));
const DonateCancel = lazy(() => import('@/pages/DonateCancel'));
const Terms = lazy(() => import('@/pages/Terms'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Categories = lazy(() => import('@/pages/Categories'));
const Search = lazy(() => import('@/pages/Search'));
const Glossary = lazy(() => import('@/pages/Glossary'));
const ExoticPetLaws = lazy(() => import('@/pages/ExoticPetLaws'));
const EncyclopediaAnimal = lazy(() => import('@/pages/EncyclopediaAnimal'));
const Beastlypedia = lazy(() => import('@/pages/Beastlypedia'));
const BeastfileDetail = lazy(() => import('@/pages/BeastfileDetail'));
const Guides = lazy(() => import('@/pages/Guides'));
const Gear = lazy(() => import('@/pages/Gear'));
const FactFiles = lazy(() => import('@/pages/FactFiles'));
const Chronicles = lazy(() => import('@/pages/Chronicles'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const CarePackages = lazy(() => import('@/pages/CarePackages'));
const CarePackagesStore = lazy(() => import('@/pages/CarePackagesStore'));
const CarePackagesWhyWeExist = lazy(() => import('@/pages/CarePackagesWhyWeExist'));
const CarePackagesFaq = lazy(() => import('@/pages/CarePackagesFaq'));
const Feed = lazy(() => import('@/pages/Feed'));
const Composer = lazy(() => import('@/pages/Composer'));
const ComposerLogin = lazy(() => import('@/pages/Composer/Login'));

function RedirectGuideFilter() {
  const { guideFilter } = useParams();
  return <Navigate to={`/guides/category/${guideFilter}/`} replace />;
}

const AuthenticatedApp = () => {
  const { isLoadingAuth, authError, navigateToLogin } = useAuth();

  if (isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="text-center">
          <span className="text-4xl block mb-3 animate-wiggle">🦁</span>
          <div className="w-8 h-8 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') return <UserNotRegisteredError />;
    if (authError.type === 'auth_required') { navigateToLogin(); return null; }
  }

  return (
    <>
      {/* No <AnalyticsTracker /> here on purpose. It called
          window.gtag('config', ...) on every route change, which never ran
          (this site loads only the GTM container, so window.gtag is undefined)
          and would have double-counted every pageview if it ever did: GA4's
          Enhanced Measurement already reports SPA route changes through its own
          history listener inside gtag.js. Pageviews are GA4's job, not the
          app's. See src/lib/analytics.js for how custom events reach GTM. */}
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
          <Route path="/quiz" element={<Navigate to="/quiz/personality/" replace />} />
          <Route path="/quiz/:tab" element={<Quiz />} />
          <Route path="/pack" element={<Pack />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/animal-facts" element={<AnimalFacts />} />
          <Route path="/fact-files" element={<FactFiles />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/trivia" element={<Navigate to="/quiz/trivia/" replace />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donate/success" element={<DonateSuccess />} />
          <Route path="/donate/cancel" element={<DonateCancel />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/search" element={<Search />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/exotic-pet-laws" element={<ExoticPetLaws />} />
          <Route path="/exotic-pet-laws/:animalId" element={<ExoticPetLaws />} />
          <Route path="/care-packages" element={<CarePackages />} />
          <Route path="/care-packages/store" element={<CarePackagesStore />} />
          <Route path="/care-packages/why-we-exist" element={<CarePackagesWhyWeExist />} />
          <Route path="/care-packages/faq" element={<CarePackagesFaq />} />
          <Route path="/feed" element={<Feed />} />
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
      "target": "https://beastlyfacts.com/search?q={search_term_string}",
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
    "logo": { "@type": "ImageObject", "url": "https://beastlyfacts.com/assets/hero-1200.jpg" },
    "sameAs": [
      "https://www.pinterest.com/BeastlyFacts",
      "https://x.com/beastly_facts",
      "https://www.instagram.com/beastly.facts"
    ]
  };

  return (
    <AuthProvider>
      <FavoritesProvider>
        {/* reducedMotion="user" disables framer-motion transforms for visitors with prefers-reduced-motion set */}
        <MotionConfig reducedMotion="user">
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
          <Toaster />
        </MotionConfig>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;