
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 rounded-md py-2 px-3 transition-all hover:bg-gray-100 text-black"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="font-medium whitespace-nowrap">
          {language === 'en' ? 'Language' : 'اللغة'}
        </span>
        <ChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} size={16} />
      </button>
      
      {isOpen && (
        <div className={`absolute z-10 mt-1 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${language === 'ar' ? 'right-0' : 'left-0'}`}>
          <div className="py-1" role="none">
            <button
              onClick={() => handleLanguageChange('en')}
              className={`block w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'bg-gray-100 text-blue-600' : 'text-gray-700'} hover:bg-gray-100`}
              role="menuitem"
            >
              English
            </button>
            <button
              onClick={() => handleLanguageChange('ar')}
              className={`block w-full text-right px-4 py-2 text-sm ${language === 'ar' ? 'bg-gray-100 text-blue-600' : 'text-gray-700'} hover:bg-gray-100`}
              role="menuitem"
            >
              العربية
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
