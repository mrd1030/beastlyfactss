import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from '@/App.jsx'
import '@/index.css'

const rootElement = document.getElementById('root');
const app = <HelmetProvider><App /></HelmetProvider>;

// If the root already has children, the page was prerendered — hydrate instead
// of creating a fresh root, so React attaches to the existing DOM efficiently.
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
