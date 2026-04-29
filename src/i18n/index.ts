import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import ar from './locales/ar.json';

export const SUPPORTED_LANGUAGES = ['en', 'ar'] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES as unknown as string[],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'swirl-lang',
      caches: ['localStorage'],
    },
  });

const applyDocumentDirection = (lng: string) => {
  const isAr = lng?.startsWith('ar');
  const html = document.documentElement;
  html.lang = isAr ? 'ar' : 'en';
  html.dir = isAr ? 'rtl' : 'ltr';
  if (isAr) html.classList.add('lang-ar');
  else html.classList.remove('lang-ar');
};

applyDocumentDirection(i18n.language);
i18n.on('languageChanged', applyDocumentDirection);

export default i18n;
