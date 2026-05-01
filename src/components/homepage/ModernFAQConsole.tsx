import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SwirlCTA from '@/components/SwirlCTA';
import { 
  Search, 
  ChevronRight,
  Rocket,
  Package,
  Building2,
  Settings,
  CreditCard,
  Shield,
  HelpCircle,
  BarChart3,
  Cpu
} from 'lucide-react';

const categories = [
  { id: 'getting-started', icon: Rocket },
  { id: 'product', icon: Package },
  { id: 'use-cases', icon: Building2 },
  { id: 'onboarding', icon: Settings },
  { id: 'pricing', icon: CreditCard },
  { id: 'security', icon: Shield },
  { id: 'features', icon: BarChart3 },
  { id: 'ai', icon: Cpu },
] as const;

const faqMeta: { id: string; category: string }[] = [
  { id: 'q1',  category: 'getting-started' },
  { id: 'q2',  category: 'getting-started' },
  { id: 'q3',  category: 'getting-started' },
  { id: 'q4',  category: 'getting-started' },
  { id: 'q5',  category: 'product' },
  { id: 'q6',  category: 'product' },
  { id: 'q7',  category: 'product' },
  { id: 'q8',  category: 'product' },
  { id: 'q9',  category: 'product' },
  { id: 'q10', category: 'product' },
  { id: 'q11', category: 'features' },
  { id: 'q12', category: 'features' },
  { id: 'q13', category: 'features' },
  { id: 'q14', category: 'features' },
  { id: 'q15', category: 'features' },
  { id: 'q16', category: 'features' },
  { id: 'q17', category: 'features' },
  { id: 'q18', category: 'features' },
  { id: 'q19', category: 'features' },
  { id: 'q20', category: 'features' },
  { id: 'q21', category: 'use-cases' },
  { id: 'q22', category: 'use-cases' },
  { id: 'q23', category: 'onboarding' },
  { id: 'q24', category: 'onboarding' },
  { id: 'q25', category: 'onboarding' },
  { id: 'q26', category: 'pricing' },
  { id: 'q27', category: 'pricing' },
  { id: 'q28', category: 'pricing' },
  { id: 'q29', category: 'security' },
  { id: 'q30', category: 'security' },
  { id: 'q31', category: 'ai' },
  { id: 'q32', category: 'ai' },
];

const ModernFAQConsole: React.FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const faqs = faqMeta.map((m) => ({
    category: m.category,
    question: t(`faq.items.${m.id}.q`),
    answer: t(`faq.items.${m.id}.a`),
  }));

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = activeCategory === null || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{t('faq.badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('faq.title1')}
            <br />
            <span className="text-primary">{t('faq.title2')}</span>
          </h2>
        </div>

        {/* Console Container */}
        <div className="max-w-4xl mx-auto animate-on-scroll">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-100/50 overflow-hidden">
            {/* Console Header */}
            <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-300" />
                  <div className="w-3 h-3 rounded-full bg-gray-300" />
                  <div className="w-3 h-3 rounded-full bg-gray-300" />
                </div>
                <div className="w-px h-4 bg-gray-200" />
                <span className="text-foreground font-semibold text-sm">{t('faq.consoleTitle')}</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="p-6 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={t('faq.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full ps-12 pe-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>
            </div>

            {/* Category Chips */}
            <div className="px-6 py-4 border-b border-gray-100">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory(null)}
                  className={`
                    px-3 py-1.5 rounded-full text-sm font-medium transition-all
                    ${activeCategory === null
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
                    }
                  `}
                >
                  {t('faq.all')}
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
                    className={`
                      flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all
                      ${activeCategory === cat.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-muted-foreground hover:bg-gray-200'
                      }
                    `}
                  >
                    <cat.icon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">{t(`faq.categories.${cat.id}`)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ List */}
            <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
              {filteredFaqs.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">
                  <p>{t('faq.noResults')}</p>
                </div>
              ) : (
                filteredFaqs.map((faq, i) => (
                  <div key={i} className="group">
                    <button
                      onClick={() => setExpandedQuestion(expandedQuestion === i ? null : i)}
                      className="w-full px-6 py-4 flex items-start gap-4 text-start hover:bg-gray-50 transition-colors"
                    >
                      <div
                        className={`
                          mt-0.5 transition-transform duration-200
                          ${expandedQuestion === i ? 'rotate-90' : ''}
                        `}
                      >
                        <ChevronRight className="w-5 h-5 text-primary rtl:-scale-x-100" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {faq.question}
                        </p>
                        {expandedQuestion === i && (
                          <div className="mt-3 text-muted-foreground text-sm leading-relaxed animate-fade-in">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Sticky CTA */}
            <div className="p-6 bg-gradient-to-r from-primary/5 to-blue-50 border-t border-primary/10">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">{t('faq.footerNote')}</p>
                <SwirlCTA />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFAQConsole;
