import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  ChevronRight,
  Rocket,
  Package,
  Building2,
  Settings,
  CreditCard,
  Shield,
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 'getting-started', name: 'Getting Started', icon: Rocket },
  { id: 'product', name: 'Product & Platform', icon: Package },
  { id: 'use-cases', name: 'Use Cases', icon: Building2 },
  { id: 'onboarding', name: 'Setup & Onboarding', icon: Settings },
  { id: 'pricing', name: 'Pricing & Scale', icon: CreditCard },
  { id: 'security', name: 'Security & Reliability', icon: Shield },
];

const faqs = [
  {
    category: 'getting-started',
    question: 'What is Swirl?',
    answer: 'Swirl is a complete restaurant operating system that combines POS, QR ordering, kitchen display, inventory, CRM, analytics, and built-in accounting in one unified platform. Unlike traditional POS systems, Swirl is designed specifically for hospitality businesses.',
  },
  {
    category: 'getting-started',
    question: 'How long does it take to get started?',
    answer: 'Most restaurants are fully operational on Swirl within 3-5 business days. This includes menu setup, inventory configuration, staff training, and system customization. Our onboarding team handles everything for you.',
  },
  {
    category: 'product',
    question: 'Does Swirl integrate with other accounting software?',
    answer: 'Swirl has built-in accounting capabilities, so you don\'t need external tools like Zoho, Tally, or QuickBooks. All your financial data, GST reports, and reconciliation happen within Swirl itself.',
  },
  {
    category: 'product',
    question: 'Can Swirl work offline?',
    answer: 'Yes! Swirl has robust offline capability. You can continue taking orders and processing payments even when internet connectivity is lost. All data syncs automatically when connection is restored.',
  },
  {
    category: 'product',
    question: 'What delivery platforms does Swirl integrate with?',
    answer: 'Swirl integrates with major aggregators including Zomato, Swiggy, Talabat, Noon Food, and others. Orders flow directly into your kitchen without manual entry.',
  },
  {
    category: 'use-cases',
    question: 'Is Swirl suitable for fine dining restaurants?',
    answer: 'Absolutely. Swirl includes table management, guest profiles, course timing, and sophisticated workflows designed for premium dining experiences.',
  },
  {
    category: 'use-cases',
    question: 'Can cloud kitchens with multiple brands use Swirl?',
    answer: 'Yes! Swirl is perfect for multi-brand operations. You can manage multiple virtual brands from a single dashboard with unified inventory and separate brand analytics.',
  },
  {
    category: 'onboarding',
    question: 'What does onboarding include?',
    answer: 'Onboarding includes complete menu digitization, inventory setup with initial stock, POS configuration, staff training sessions, and ongoing support. We don\'t just install software — we set up your entire operation.',
  },
  {
    category: 'onboarding',
    question: 'Can you migrate data from my existing system?',
    answer: 'Swirl starts fresh. We set up your menu, inventory, and configurations from scratch to ensure data accuracy. We don\'t migrate old data from other systems as this often leads to errors and inconsistencies.',
  },
  {
    category: 'pricing',
    question: 'How is Swirl priced?',
    answer: 'Swirl offers flexible pricing based on your outlet size and requirements. Contact our team for a personalized quote based on your specific needs.',
  },
  {
    category: 'pricing',
    question: 'Can Swirl scale to multiple outlets?',
    answer: 'Swirl is built for scale. Whether you have 1 outlet or 100+, you can manage everything from a central dashboard with multi-branch reporting and control.',
  },
  {
    category: 'security',
    question: 'How secure is my data?',
    answer: 'Swirl uses enterprise-grade security with encrypted data storage, secure authentication, and regular backups. Your business data is fully protected and compliant with regional regulations.',
  },
  {
    category: 'security',
    question: 'What is your uptime guarantee?',
    answer: 'Swirl maintains 99.9% uptime with redundant infrastructure. Combined with offline capability, your operations never stop.',
  },
];

const ModernFAQConsole: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchQuery === '' || 
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
            backgroundSize: '28px 28px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Help Console</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Got questions?
            <br />
            <span className="text-primary">We've got answers.</span>
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
                <span className="text-foreground font-semibold text-sm">Swirl Help</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="p-6 border-b border-gray-100">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Ask Swirl anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
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
                  All
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
                    <span className="hidden sm:inline">{cat.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ List */}
            <div className="divide-y divide-gray-100 max-h-[500px] overflow-y-auto">
              {filteredFaqs.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">
                  <p>No results found. Try a different search term.</p>
                </div>
              ) : (
                filteredFaqs.map((faq, i) => (
                  <div key={i} className="group">
                    <button
                      onClick={() => setExpandedQuestion(expandedQuestion === i ? null : i)}
                      className="w-full px-6 py-4 flex items-start gap-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className={`
                        mt-0.5 transition-transform duration-200
                        ${expandedQuestion === i ? 'rotate-90' : ''}
                      `}>
                        <ChevronRight className="w-5 h-5 text-primary" />
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
                <p className="text-sm text-muted-foreground">
                  Can't find what you're looking for?
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  Book a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFAQConsole;
