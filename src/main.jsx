import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from '@/App.jsx'
import '@/index.css'

// A successful boot means this load matches the current deploy - clear any
// leftover guard from a prior reload attempt.
sessionStorage.removeItem('vite-reload-on-preload-error')

// Every route is React.lazy()-loaded by content-hashed chunk URLs. If a new
// deploy lands while a tab is already open, navigating to a route whose chunk
// hash changed 404s and crashes the whole app with an uncaught error. Vite
// emits this event specifically for that case - reload once to fetch the
// current build instead of leaving the user stuck. Guarded against reload
// loops if the failure somehow persists after reloading.
window.addEventListener('vite:preloadError', () => {
  if (!sessionStorage.getItem('vite-reload-on-preload-error')) {
    sessionStorage.setItem('vite-reload-on-preload-error', '1');
    window.location.reload();
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
)
