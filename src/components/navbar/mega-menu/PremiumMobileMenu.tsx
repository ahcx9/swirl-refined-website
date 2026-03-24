import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, X } from 'lucide-react';

interface PremiumMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  {
    name: 'Dine',
    description: 'Guest-facing experiences',
    features: [
      { title: 'Digital Menu', path: '/products/digital-menu' },
      { title: 'QR Ordering', path: '/products/qr-ordering' },
      { title: 'Reservations', path: '/products/reservations' },
      { title: 'Loyalty', path: '/products/loyalty' },
      { title: 'In-Car Ordering', path: '/products/ordering-from-car' },
      { title: 'Customer Display', path: '/products/customer-display' },
    ],
  },
  {
    name: 'Point of Sale',
    description: 'Core operations',
    features: [
      { title: 'Point of Sale', path: '/products/restaurant-point-of-sale' },
      { title: 'Kitchen Display', path: '/products/kitchen-display' },
    ],
  },
  {
    name: 'Works',
    description: 'Intelligence & back office',
    features: [
      { title: 'Visitor Analytics', path: '/products/visitor-analytics' },
      { title: 'Financial Reports', path: '/products/financial-reports' },
      { title: 'Accounting', path: '/products/accounting' },
      { title: 'CRM', path: '/products/customer-relationship-management' },
      { title: 'Inventory Management', path: '/products/inventory-management' },
      { title: 'swirl Hardware', path: '/products/swirl-hardware' },
    ],
  },
];

export const PremiumMobileMenu: React.FC<PremiumMobileMenuProps> = ({ isOpen, onClose }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
        <Link to="/" onClick={onClose}>
          <img
            src="/lovable-uploads/swirl-logo-transparent.png"
            alt="Swirl Logo"
            className="h-10 w-auto"
          />
        </Link>
        <button onClick={onClose} className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
          <X size={20} className="text-foreground" />
        </button>
      </div>

      {/* Scrollable content */}
      <div className="overflow-y-auto h-[calc(100vh-72px)] pb-32">
        <div className="p-5 space-y-3">
          {sections.map((section) => (
            <div key={section.name} className="rounded-2xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === section.name ? null : section.name)}
                className="w-full flex items-center justify-between p-4 text-left active:bg-gray-50 touch-manipulation"
              >
                <div>
                  <p className="text-[15px] font-bold text-foreground">{section.name}</p>
                  <p className="text-[11px] text-muted-foreground">{section.description}</p>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground transition-transform duration-150 ${expanded === section.name ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all ease-out ${expanded === section.name ? 'max-h-[500px] opacity-100 duration-150' : 'max-h-0 opacity-0 duration-100'}`}
              >
                <div className="px-4 pb-4 grid grid-cols-2 gap-2">
                  {section.features.map((feature) => (
                      <Link
                        key={feature.title}
                        to={feature.path}
                        onClick={onClose}
                        className="flex items-center p-3 rounded-xl bg-gray-50/80 hover:bg-blue-50 transition-colors"
                      >
                        <span className="text-[12px] font-medium text-foreground">{feature.title}</span>
                      </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Static links */}
          <div className="pt-3 space-y-1">
            <Link
              to="/use-cases"
              onClick={onClose}
              className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <span className="text-[15px] font-semibold text-foreground">Use Cases</span>
              <ArrowRight size={16} className="text-muted-foreground" />
            </Link>
            <Link
              to="/contact"
              onClick={onClose}
              className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors"
            >
              <span className="text-[15px] font-semibold text-foreground">Contact</span>
              <ArrowRight size={16} className="text-muted-foreground" />
            </Link>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <SwirlCTA className="w-full justify-center" />
          </div>
        </div>
      </div>
    </div>
  );
};
