
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 relative group">
      <div className="flex items-center gap-2 cursor-pointer">
        <button
          onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          className="flex items-center gap-2 rounded-md py-2 px-3 transition-all hover:bg-gray-100 text-black"
        >
          <span className="inline-flex items-center justify-center rounded-full overflow-hidden w-5 h-5 border border-gray-200">
            {language === 'en' ? '🇬🇧' : '🇸🇦'}
          </span>
          <span className="font-medium text-sm">
            {language === 'en' ? 'English' : 'العربية'}
          </span>
          <span className="text-xs text-gray-400">
            {language === 'en' ? '/ العربية' : '/ English'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
