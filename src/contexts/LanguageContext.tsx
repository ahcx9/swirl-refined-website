
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple translations for demonstration
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.products': 'Products',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started For Free',
    'nav.language': 'Language',
    'hero.title': 'Powering the New Era of Restaurant Sales',
    'hero.subtitle': 'Modern full stack restaurant management system for ambitious restaurateurs.',
    'cta.transform': 'Ready to Transform Your Restaurant Experience?',
    'cta.join': 'Join thousands of restaurants already using swirl.cx',
    'cta.getStarted': 'Get Started for Free',
    // Add more translations as needed
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.features': 'المميزات',
    'nav.products': 'المنتجات',
    'nav.contact': 'اتصل بنا',
    'nav.getStarted': 'ابدأ مجانًا',
    'nav.language': 'اللغة',
    'hero.title': 'تمكين عصر جديد من مبيعات المطاعم',
    'hero.subtitle': 'نظام إدارة مطاعم متكامل وحديث لأصحاب المطاعم الطموحين',
    'cta.transform': 'هل أنت جاهز لتحويل تجربة مطعمك؟',
    'cta.join': 'انضم إلى آلاف المطاعم التي تستخدم بالفعل swirl.cx',
    'cta.getStarted': 'ابدأ مجانًا',
    // Add more translations as needed
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
