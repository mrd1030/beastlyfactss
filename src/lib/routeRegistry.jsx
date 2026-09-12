import React, { lazy } from 'react';

// Every lazy route page, keyed by name, in ONE place: App.jsx renders them and
// routePreload.js preloads the current URL's one before hydrateRoot runs.
//
// Why the current route must not go through React.lazy() on the hydration
// render: lazy() throws its promise on the first render even when the module
// is already loaded (the thenable resolves a microtask later), so the page
// suspends at the root, where AppLayout deliberately has no <Suspense> on that
// render. React then retries once the promise settles. With every chunk
// preloaded that retry lands a microtask later and hydrates cleanly, which is
// why it was never noticed, but the retry is not guaranteed to match: with the
// route chunk arriving late (a slow connection, or a route that was missing
// from the preload table) it hydrated against the wrong nodes, logged #418 at
// the footer, BottomTabs and the Toaster, and never committed, leaving a
// static page with no interactivity. The live guide page reproduced the same
// signature about one load in ten without any delay at all.
//
// So the current URL's page is rendered as a plain component from this cache,
// the way Home's sections already are (homePreload.js), and lazy() is only
// used for client-side navigations to a route whose chunk is not loaded yet,
// which happen under the <Suspense> AppLayout adds after hydration.
export const ROUTE_LOADERS = {
  Facts: () => import('@/pages/Facts'),
  Quiz: () => import('@/pages/Quiz'),
  QuizHub: () => import('@/pages/QuizHub'),
  Pack: () => import('@/pages/Pack'),
  Encyclopedia: () => import('@/pages/Encyclopedia'),
  Blog: () => import('@/pages/Blog'),
  GuideDetail: () => import('@/pages/GuideDetail'),
  About: () => import('@/pages/About'),
  Contact: () => import('@/pages/Contact'),
  AnimalFacts: () => import('@/pages/AnimalFacts'),
  Donate: () => import('@/pages/Donate'),
  DonateSuccess: () => import('@/pages/DonateSuccess'),
  DonateCancel: () => import('@/pages/DonateCancel'),
  Terms: () => import('@/pages/Terms'),
  Privacy: () => import('@/pages/Privacy'),
  Categories: () => import('@/pages/Categories'),
  Search: () => import('@/pages/Search'),
  Glossary: () => import('@/pages/Glossary'),
  ExoticPetLaws: () => import('@/pages/ExoticPetLaws'),
  ExoticPetLawsHub: () => import('@/pages/ExoticPetLawsHub'),
  ExoticPetLawsState: () => import('@/pages/ExoticPetLawsState'),
  ExoticPetLawsStateIndex: () => import('@/pages/ExoticPetLawsStateIndex'),
  EncyclopediaAnimal: () => import('@/pages/EncyclopediaAnimal'),
  Beastlypedia: () => import('@/pages/Beastlypedia'),
  BeastfileDetail: () => import('@/pages/BeastfileDetail'),
  Guides: () => import('@/pages/Guides'),
  Gear: () => import('@/pages/Gear'),
  FactFiles: () => import('@/pages/FactFiles'),
  Chronicles: () => import('@/pages/Chronicles'),
  Gallery: () => import('@/pages/Gallery'),
  CarePackages: () => import('@/pages/CarePackages'),
  CarePackagesStore: () => import('@/pages/CarePackagesStore'),
  CarePackagesWhyWeExist: () => import('@/pages/CarePackagesWhyWeExist'),
  CarePackagesFaq: () => import('@/pages/CarePackagesFaq'),
  CarePackageProduct: () => import('@/pages/CarePackageProduct'),
  CarePackageThanks: () => import('@/pages/CarePackageThanks'),
  CarePackageLibrary: () => import('@/pages/CarePackageLibrary'),
  Feed: () => import('@/pages/Feed'),
  Composer: () => import('@/pages/Composer'),
  ComposerLogin: () => import('@/pages/Composer/Login'),
};

const loaded = new Map();

// Loads a route's chunk and keeps its component so hydratable() can render it
// synchronously. Resolves to the module, never rejects (a failed preload just
// leaves the lazy() path in place for that page).
export function preloadRoute(name) {
  return ROUTE_LOADERS[name]().then((mod) => {
    loaded.set(name, mod.default);
    return mod;
  });
}

export function hydratable(name) {
  const Lazy = lazy(ROUTE_LOADERS[name]);
  function HydratableRoute(props) {
    const Sync = loaded.get(name);
    return Sync ? <Sync {...props} /> : <Lazy {...props} />;
  }
  HydratableRoute.displayName = `Hydratable(${name})`;
  return HydratableRoute;
}
