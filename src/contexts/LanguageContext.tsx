import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Comprehensive translations for the entire website
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
  },
  ar: {
    // Navigation
    'nav.pointOfSale': 'نقطة البيع',
    'nav.inventoryManagement': 'إدارة المخزون',
    'nav.digitalMenu': 'القائمة الرقمية',
    'nav.qrOrdering': 'الطلب عبر رمز QR',
    'nav.features': 'المميزات',
    'nav.usecases': 'حالات الاستخدام',
    'nav.contact': 'اتصل بنا',
    'nav.getStarted': 'ابدأ مجانًا',
    'nav.language': 'اللغة',
    'nav.chatOnWhatsapp': 'الدردشة على واتساب',
    
    // Hero Section
    'hero.title': 'تمكين عصر جديد من مبيعات المطاعم',
    'hero.subtitle': 'نظام إدارة مطاعم متكامل وحديث لأصحاب المطاعم الطموحين',
    
    // Features Section
    'features.title': 'منصة إدارة المطاعم الشاملة',
    'features.subtitle': 'كل ما تحتاجه لإدارة مطعمك، في مكان واحد',
    'features.pos': 'نقطة البيع',
    'features.pos.desc': 'نظام نقاط بيع سريع وموثوق وسهل الاستخدام',
    'features.inventory': 'إدارة المخزون',
    'features.inventory.desc': 'تتبع المخزون، وإدارة الموردين، وتقليل الهدر',
    'features.menu': 'القائمة الرقمية',
    'features.menu.desc': 'إنشاء قوائم رقمية جميلة يحبها العملاء',
    'features.qr': 'الطلب عبر رمز QR',
    'features.qr.desc': 'تمكين الطلب بدون تلامس باستخدام رموز QR',
    'features.analytics': 'التحليلات',
    'features.analytics.desc': 'الحصول على رؤى حول أداء عملك',
    'features.crm': 'إدارة العملاء',
    'features.crm.desc': 'بناء علاقات مع عملائك',
    
    // Call to Action Sections
    'cta.transform': 'هل أنت جاهز لتحويل تجربة مطعمك؟',
    'cta.join': 'انضم إلى آلاف المطاعم التي تستخدم بالفعل swirl.cx',
    'cta.getStarted': 'ابدأ مجانًا',
    'cta.ready': 'هل أنت مستعد لتحديث نظام نقاط البيع الخاص بمطعمك؟',
    'cta.contact': 'اتصل بنا اليوم للحصول على عرض توضيحي مخصص وتسعير مصمم خصيصًا لاحتياجات وميزانية مطعمك الفريدة.',
    
    // Point of Sale Page
    'pos.title': 'نظام نقاط البيع',
    'pos.subtitle': 'نظام نقاط بيع حديث وبديهي مصمم خصيصًا للمطاعم. قم بتبسيط عملياتك مع الخروج السريع، وإدارة الطاولات بسهولة، ومعالجة الدفع السلسة. يتضمن حلنا الشامل كلاً من البرامج القوية وخيارات الأجهزة الموثوقة لتناسب احتياجاتك المحددة.',
    'pos.features': 'الميزات',
    'pos.hardware': 'حلول الأجهزة',
    'pos.benefits': 'الفوائد',
    
    // Digital Menu Page
    'digitalMenu.title': 'القائمة الرقمية',
    'digitalMenu.subtitle': 'قم بإنشاء قوائم رقمية جميلة وتفاعلية يسهل تحديثها في الوقت الفعلي. مثالية للمطاعم التي تتطلع إلى تحديث تجربة الطلب مع لغات متعددة، وعملات، ومعلومات غذائية، وأوصاف قوائم مدعومة بالذكاء الاصطناعي.',
    'digitalMenu.features': 'الميزات',
    'digitalMenu.benefits': 'الفوائد',
    'digitalMenu.testimonials': 'ماذا يقول عملاؤنا',
    'digitalMenu.cta': 'هل أنت مستعد لثورة في تجربة القائمة الخاصة بك؟',
    'digitalMenu.cta.subtitle': 'انضم إلى المطاعم في جميع أنحاء العالم التي تستخدم بالفعل نظام القائمة الرقمية لدينا لتعزيز تجربة العملاء وتبسيط العمليات.',
    
    // Inventory Management Page
    'inventory.title': 'إدارة المخزون',
    'inventory.subtitle': 'تولى السيطرة على مخزون مطعمك بنظام الإدارة المتقدم. تتبع مستويات المخزون، وتقليل الهدر، وتحسين عملية الشراء من خلال المراقبة في الوقت الحقيقي والتحليلات التنبؤية.',
    'inventory.features': 'ميزات إدارة المخزون الرئيسية',
    'inventory.why': 'لماذا الاستثمار في إدارة المخزون؟',
    'inventory.benefits': 'الفوائد الرئيسية',
    'inventory.integration': 'قدرات التكامل',
    'inventory.ready': 'هل أنت جاهز لتحسين المخزون الخاص بك؟',
    'inventory.join': 'انضم إلى المطاعم الناجحة التي قللت من الهدر، وخفضت التكاليف، وحسنت الكفاءة مع حل Swirl الشامل لإدارة المخزون.',
    
    // Footer
    'footer.company': 'الشركة',
    'footer.products': 'المنتجات',
    'footer.resources': 'الموارد',
    'footer.contact': 'اتصل بنا',
    'footer.copyright': 'جميع الحقوق محفوظة',
    
    // Other Pages
    'notFound.title': 'الصفحة غير موجودة',
    'notFound.message': 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
    'notFound.back': 'العودة إلى الصفحة الرئيسية',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if language preference is stored in localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage === 'ar' ? 'ar' : 'en'; // Default to 'en' if not found
  });

  // Save language preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    
    // Apply RTL direction for Arabic
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Add a class to the body for additional styling if needed
    if (language === 'ar') {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    // Return the translation or the key if the translation doesn't exist
    return translations[language][key as keyof typeof translations[typeof language]] || key;
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
