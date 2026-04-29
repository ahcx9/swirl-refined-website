import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';

interface Props {
  variant?: 'navbar' | 'mobile';
}

const LANGS = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ar', label: 'العربية', short: 'عربي' },
] as const;

const LanguageSwitcher: React.FC<Props> = ({ variant = 'navbar' }) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = i18n.language?.startsWith('ar') ? 'ar' : 'en';

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  const change = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-1 p-1 bg-gray-100 rounded-xl">
        {LANGS.map((l) => (
          <button
            key={l.code}
            onClick={() => change(l.code)}
            className={`flex-1 px-3 py-2 text-[13px] font-semibold rounded-lg transition-all ${
              current === l.code ? 'bg-white text-primary shadow-sm' : 'text-muted-foreground'
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1.5 h-9 px-3 rounded-xl text-[13px] font-semibold text-foreground hover:bg-gray-100/80 transition-colors"
        aria-label="Change language"
      >
        <Globe size={15} className="text-muted-foreground" />
        <span>{LANGS.find((l) => l.code === current)?.short}</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-[0_10px_30px_-6px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden z-50 animate-fade-in">
          {LANGS.map((l) => (
            <button
              key={l.code}
              onClick={() => change(l.code)}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 text-[13px] text-left transition-colors ${
                current === l.code ? 'bg-blue-50/60 text-primary font-semibold' : 'text-foreground hover:bg-gray-50'
              }`}
            >
              <span>{l.label}</span>
              {current === l.code && <Check size={14} className="text-primary" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
