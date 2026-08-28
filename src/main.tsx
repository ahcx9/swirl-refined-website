import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

/**
 * /ffcc is a QR-scanned, mobile-first lead page: it renders no translated
 * component, so the i18n bundle (i18next + both locale files) is loaded in the
 * background instead of blocking the first paint. Every other route waits for
 * i18n so translated chrome never flashes untranslated keys.
 */
const isFfcc = window.location.pathname.replace(/\/+$/, '') === '/ffcc';

const render = () =>
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </StrictMode>
  );

if (isFfcc) {
  render();
  // Warm i18n only once the visitor interacts, so it never competes with the
  // form's first paint but client-side navigation away from /ffcc stays instant.
  const warmI18n = () => { void import('./i18n'); };
  ['pointerdown', 'keydown'].forEach((evt) =>
    window.addEventListener(evt, warmI18n, { once: true, passive: true })
  );
} else {
  void import('./i18n').then(render);
}

