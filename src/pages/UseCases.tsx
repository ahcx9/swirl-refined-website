import React from 'react';
import Footer from '@/components/Footer';
import { Truck, Utensils, Store, Hotel, ChefHat, Coffee, CheckCircle, BarChart3, Clock, Users, TrendingUp, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SwirlCTA from '@/components/SwirlCTA';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const segmentMeta = [
  {
    key: 'cafes',
    impact: [
      { label: 'Checkout Speed', value: '12s avg', icon: Clock },
      { label: 'Repeat Rate', value: '+45%', icon: Users },
      { label: 'Revenue Growth', value: '+22%', icon: TrendingUp },
    ],
    features: ['Quick Billing', 'Loyalty Points', 'QR Menu', 'Guest History', 'Inventory Alerts'],
    icon: Coffee,
    image: '/lovable-uploads/cafe-bakery-new.jpg',
    reversed: false,
  },
  {
    key: 'qsr',
    impact: [
      { label: 'Throughput', value: '2x', icon: BarChart3 },
      { label: 'Order Accuracy', value: '99.8%', icon: CheckCircle },
      { label: 'Peak Efficiency', value: '+60%', icon: Zap },
    ],
    features: ['KDS Integration', 'Multi-Counter', 'Aggregator Sync', 'Order Queue', 'Kiosk Support'],
    icon: Utensils,
    image: '/lovable-uploads/quick-service-new.jpg',
    reversed: true,
  },
  {
    key: 'fine',
    impact: [
      { label: 'Guest Recall', value: '100%', icon: Users },
      { label: 'Table Turn', value: '+30%', icon: Clock },
      { label: 'Guest Satisfaction', value: '4.9★', icon: TrendingUp },
    ],
    features: ['Table Mapping', 'Guest Profiles', 'Course Timing', 'Reservations', 'Split Billing'],
    icon: ChefHat,
    image: '/lovable-uploads/fine-dining-new.jpg',
    reversed: false,
  },
  {
    key: 'cloud',
    impact: [
      { label: 'Brands', value: 'Unlimited', icon: Store },
      { label: 'Delivery Sync', value: 'Real-time', icon: Zap },
      { label: 'Cost Visibility', value: '100%', icon: BarChart3 },
    ],
    features: ['Multi-Brand', 'Cost Analysis', 'Aggregator Sync', 'Rider Tracking', 'Shared Inventory'],
    icon: Store,
    image: '/lovable-uploads/cloud-kitchen-new.jpg',
    reversed: true,
  },
  {
    key: 'trucks',
    impact: [
      { label: 'Uptime', value: '99.9%', icon: Zap },
      { label: 'Setup Time', value: '30s', icon: Clock },
      { label: 'Sales Boost', value: '+35%', icon: TrendingUp },
    ],
    features: ['Offline Mode', 'Mobile POS', 'Quick Menu', 'GPS Tracking', 'Fleet Management'],
    icon: Truck,
    image: '/lovable-uploads/food-truck.jpg',
    reversed: false,
  },
  {
    key: 'hotels',
    impact: [
      { label: 'Outlets', value: 'Unlimited', icon: Store },
      { label: 'Reporting', value: 'Central', icon: BarChart3 },
      { label: 'F&B Revenue', value: '+28%', icon: TrendingUp },
    ],
    features: ['Multi-Outlet', 'Room Charge', 'Central Menu', 'Enterprise Reports', 'Staff Management'],
    icon: Hotel,
    image: '/lovable-uploads/hotel-resort-new.jpg',
    reversed: true,
  },
] as const;

const UseCases = () => {
  useScrollAnimation();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-24">
        {/* Hero */}
        <section className="bg-white py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
                <Store className="w-4 h-4 text-primary" />
                <span className="text-base md:text-sm font-bold md:font-semibold text-primary">{t('useCases.badge')}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                {t('useCases.title1')}{' '}
                <span className="text-primary">{t('useCases.title2')}</span>
              </h1>
              <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
                {t('useCases.subtitle')}
              </p>
              <SwirlCTA />
            </div>
          </div>
        </section>

        {/* Storytelling Segments */}
        {segmentMeta.map((segment, idx) => (
          <section key={segment.key} className={`py-16 md:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-muted/20'}`}>
            <div className="container-custom">
              <div className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${segment.reversed ? 'lg:grid-flow-dense' : ''}`}>

                <div className={`animate-on-scroll ${segment.reversed ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
                    <img
                      src={segment.image}
                      alt={t(`useCases.segments.${segment.key}.title`)}
                      loading="eager"
                      decoding="async"
                      className="w-full h-72 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                        <segment.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`animate-on-scroll animate-delay-200 ${segment.reversed ? 'lg:col-start-1' : ''}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                    {t(`useCases.segments.${segment.key}.title`)}
                  </h2>

                  <div className="mb-6 ps-5 border-s-2 border-red-200">
                    <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">{t('useCases.labels.challenge')}</p>
                    <p className="text-muted-foreground">{t(`useCases.segments.${segment.key}.challenge`)}</p>
                  </div>

                  <div className="mb-6 ps-5 border-s-2 border-amber-200">
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">{t('useCases.labels.complexity')}</p>
                    <p className="text-muted-foreground">{t(`useCases.segments.${segment.key}.complexity`)}</p>
                  </div>

                  <div className="mb-8 ps-5 border-s-2 border-primary">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">{t('useCases.labels.solution')}</p>
                    <p className="text-foreground font-medium">{t(`useCases.segments.${segment.key}.solution`)}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {segment.features.map((f, i) => (
                      <span key={i} className="px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-xs font-medium text-primary">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {segment.impact.map((kpi, i) => (
                      <div key={i} className="bg-primary/5 border border-primary/10 rounded-xl p-3 text-center">
                        <kpi.icon className="w-4 h-4 text-primary mx-auto mb-1" />
                        <p className="text-lg font-bold text-primary">{kpi.value}</p>
                        <p className="text-[10px] text-muted-foreground font-medium">{kpi.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
