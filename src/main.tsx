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
  const warmI18n = () => { void import('./i18n'); };
  if ('requestIdleCallback' in window) {
    (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(warmI18n);
  } else {
    setTimeout(warmI18n, 1500);
  }
} else {
  void import('./i18n').then(render);
}
