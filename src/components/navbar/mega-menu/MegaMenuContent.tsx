import React from 'react';
import { FeatureCard } from './FeatureCard';
import { SwirlDineMockup } from './SwirlDineMockup';
import { SwirlPOSMockup } from './SwirlPOSMockup';
import { SwirlWorksMockup } from './SwirlWorksMockup';

export type TabKey = 'dine' | 'pos' | 'works';

interface MegaMenuContentProps {
  activeTab: TabKey;
  onClose: () => void;
}

const tabData: Record<TabKey, {
  headline: string;
  subtext: string;
  ctaLabel: string;
  ctaPath: string;
  features: { title: string; description: string; path: string }[];
}> = {
  dine: {
    headline: 'Create unforgettable dining experiences',
    subtext: 'From menu discovery to payment and loyalty, Swirl Dine transforms how guests interact with your restaurant.',
    ctaLabel: 'Explore Dine',
    ctaPath: '/products/digital-menu',
    features: [
      { title: 'Digital Menu', description: 'Beautiful, real-time menus', path: '/products/digital-menu' },
      { title: 'QR Ordering', description: 'Scan, order, pay instantly', path: '/products/qr-ordering' },
      { title: 'Reservations', description: 'Smart table bookings', path: '/products/reservations' },
      { title: 'Loyalty', description: 'Rewards that bring guests back', path: '/products/loyalty' },
      { title: 'Customer Display', description: 'Clear live order visibility', path: '/products/customer-display' },
    ],
  },
  pos: {
    headline: 'The fastest POS built for modern restaurants',
    subtext: 'Run billing, kitchen, and service operations with speed, precision, and reliability.',
    ctaLabel: 'Explore Point of Sale',
    ctaPath: '/products/restaurant-point-of-sale',
    features: [
      { title: 'Point of Sale', description: 'Lightning-fast billing', path: '/products/restaurant-point-of-sale' },
      { title: 'Kitchen Display', description: 'Real-time kitchen sync', path: '/products/kitchen-display' },
    ],
  },
  works: {
    headline: 'Your restaurant command center',
    subtext: 'Gain visibility, automate operations, and unlock growth with one connected back-office platform.',
    ctaLabel: 'Explore Works',
    ctaPath: '/products/visitor-analytics',
    features: [
      { title: 'Visitor Analytics', description: 'Understand customer behavior', path: '/products/visitor-analytics' },
      { title: 'Financial Reports', description: 'Full revenue visibility', path: '/products/financial-reports' },
      { title: 'Accounting', description: 'Automated restaurant bookkeeping', path: '/products/accounting' },
      { title: 'CRM', description: 'Build stronger guest relationships', path: '/products/customer-relationship-management' },
      { title: 'Inventory Management', description: 'Smarter stock control', path: '/products/inventory-management' },
    ],
  },
};

export const MegaMenuContent: React.FC<MegaMenuContentProps> = ({ activeTab, onClose }) => {
  const data = tabData[activeTab];

  const MockupComponent = activeTab === 'dine' ? SwirlDineMockup : activeTab === 'pos' ? SwirlPOSMockup : SwirlWorksMockup;

  return (
    <div className="grid grid-cols-12 gap-0 min-h-[420px]">
      {/* Left showcase area */}
      <div className="col-span-5 bg-gradient-to-br from-gray-50/80 to-blue-50/40 rounded-l-[20px] p-6 flex flex-col border-r border-gray-100/60">
        <div className="mb-4">
          <h3 className="text-[17px] font-bold text-foreground leading-tight mb-1.5">
            {data.headline}
          </h3>
          <p className="text-[12px] text-muted-foreground leading-relaxed">
            {data.subtext}
          </p>
        </div>

        {/* Mockup area */}
        <div className="flex-1 relative min-h-[320px]">
          <MockupComponent />
        </div>
      </div>

      {/* Right feature grid */}
      <div className="col-span-7 p-6 flex flex-col">
        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mb-4">Features</p>
        <div className="grid grid-cols-2 gap-1 flex-1">
          {data.features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={null}
              path={feature.path}
              onClick={onClose}
            />
          ))}
        </div>

      </div>
    </div>
  );
};
