import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations only for English
const translations = {
  en: {
    // Navigation
    'nav.pointOfSale': 'Point of Sale',
    'nav.inventoryManagement': 'Inventory Management',
    'nav.digitalMenu': 'Digital Menu',
    'nav.qrOrdering': 'QR Ordering',
    'nav.features': 'Features',
    'nav.usecases': 'Usecases',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started For Free',
    'nav.language': 'Language',
    'nav.chatOnWhatsapp': 'Chat on WhatsApp',
    
    // Hero Section
    'hero.title': 'Powering the New Era of Restaurant Sales',
    'hero.subtitle': 'Modern full stack (back of house & front of house) restaurant management system for ambitious restaurateurs.',
    
    // Features Section
    'features.title': 'All-in-one Restaurant Management Platform',
    'features.subtitle': 'Everything you need to run your restaurant, all in one place.',
    'features.pos': 'Point of Sale',
    'features.pos.desc': 'Fast, reliable, and easy to use point of sale system.',
    'features.inventory': 'Inventory Management',
    'features.inventory.desc': 'Track inventory, manage suppliers, and reduce waste.',
    'features.menu': 'Digital Menu',
    'features.menu.desc': 'Create beautiful digital menus that customers love.',
    'features.qr': 'QR Ordering',
    'features.qr.desc': 'Enable contactless ordering with QR codes.',
    'features.analytics': 'Analytics',
    'features.analytics.desc': 'Get insights into your business performance.',
    'features.crm': 'Customer Management',
    'features.crm.desc': 'Build relationships with your customers.',
    
    // Call to Action Sections
    'cta.transform': 'Ready to Transform Your Restaurant Experience?',
    'cta.join': 'Join thousands of restaurants already using swirl.cx',
    'cta.getStarted': 'Get Started for Free',
    'cta.ready': 'Ready to modernize your restaurant\'s point of sale?',
    'cta.contact': 'Contact us today for a personalized demonstration and pricing tailored to your restaurant\'s unique needs and budget.',
    
    // Point of Sale Page
    'pos.title': 'Point of Sale System',
    'pos.subtitle': 'A modern, intuitive point-of-sale system designed specifically for restaurants. Streamline your operations with fast checkout, easy table management, and seamless payment processing. Our complete solution includes both powerful software and reliable hardware options to fit your specific needs.',
    'pos.features': 'Features',
    'pos.hardware': 'Hardware Solutions',
    'pos.benefits': 'Benefits',
    
    // Digital Menu Page
    'digitalMenu.title': 'Digital Menu',
    'digitalMenu.subtitle': 'Create beautiful, interactive digital menus that are easy to update in real-time. Perfect for restaurants looking to modernize their ordering experience with multiple languages, currencies, nutritional information, and AI-powered menu descriptions.',
    'digitalMenu.features': 'Features',
    'digitalMenu.benefits': 'Benefits',
    'digitalMenu.testimonials': 'What Our Clients Say',
    'digitalMenu.cta': 'Ready to revolutionize your menu experience?',
    'digitalMenu.cta.subtitle': 'Join restaurants worldwide already using our digital menu system to enhance customer experience and streamline operations.',
    
    // Inventory Management Page
    'inventory.title': 'Inventory Management',
    'inventory.subtitle': 'Take control of your restaurant\'s inventory with our advanced management system. Track stock levels, reduce waste, and optimize your purchasing with real-time monitoring and predictive analytics.',
    'inventory.features': 'Key Inventory Management Features',
    'inventory.why': 'Why Invest in Inventory Management?',
    'inventory.benefits': 'Key Benefits',
    'inventory.integration': 'Integration Capabilities',
    'inventory.ready': 'Ready to optimize your inventory?',
    'inventory.join': 'Join successful restaurants that have reduced waste, lowered costs, and improved efficiency with Swirl\'s comprehensive inventory management solution.',
    
    // Footer
    'footer.company': 'Company',
    'footer.products': 'Products',
    'footer.resources': 'Resources',
    'footer.contact': 'Contact Us',
    'footer.copyright': 'All rights reserved',
    
    // Other Pages
    'notFound.title': 'Page Not Found',
    'notFound.message': 'The page you are looking for doesn\'t exist or has been moved.',
    'notFound.back': 'Go back to home',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Only English is supported now
  const [language] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    // Return the translation or the key if the translation doesn't exist
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  // setLanguage function is kept for API compatibility but does nothing
  const setLanguage = () => {
    // Do nothing as we only support English now
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
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
