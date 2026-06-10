import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet'; // Added for SEO Structured Data
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import { FavoritesProvider } from '@/lib/FavoritesContext';
import ScrollToTop from './components/ui/ScrollToTop';
import AppLayout from '@/components/layout/AppLayout';
import AnalyticsTracker from '@/components/AnalyticsTracker';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import PageNotFound from './lib/PageNotFound';

// Lazy Loaded Pages
const Home = lazy(() => import('@/pages/Home'));
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
const CategoryPage = lazy(() => import('@/pages/CategoryPage'));
const Search = lazy(() => import('@/pages/Search'));

const PageLoadingFallback = () => (
  <div className="w-full min-h-[60vh] flex flex-col items-center justify-center">
    <div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
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
      <AnalyticsTracker />
      <Suspense fallback={<PageLoadingFallback />}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/facts" element={<Facts />} />
            <Route path="/guides" element={<Navigate to="/encyclopedia?tab=guides" replace />} />
            <Route path="/guides/:id" element={<GuideDetail />} />
            <Route path="/encyclopedia" element={<Encyclopedia />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/pack" element={<Pack />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/animal-facts" element={<AnimalFacts />} />
            <Route path="/trivia" element={<Navigate to="/quiz?tab=trivia" replace />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/donate/success" element={<DonateSuccess />} />
            <Route path="/donate/cancel" element={<DonateCancel />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/search" element={<Search />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
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

  return (
    <AuthProvider>
      <FavoritesProvider>
        <QueryClientProvider client={queryClientInstance}>
          <Router>
            {/* Inject SEO Data */}
            <Helmet>
              <script type="application/ld+json">
                {JSON.stringify(structuredData)}
              </script>
            </Helmet>
            
            <AuthenticatedApp />
            <ScrollToTop />
          </Router>
          <Toaster />
        </QueryClientProvider>
      </FavoritesProvider>
    </AuthProvider>
  );
}

export default App;