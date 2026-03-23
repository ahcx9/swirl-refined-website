import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, X,
  FileText, ShoppingCart, CalendarCheck, HeartHandshake, Car, Monitor,
  CreditCard, ChefHat, LayoutGrid, Smartphone, Receipt,
  BarChart3, DollarSign, Calculator, Package, Cpu, Users
} from 'lucide-react';

interface PremiumMobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  {
    name: 'Swirl Dine',
    description: 'Guest-facing experiences',
    features: [
      { title: 'Digital Menu', icon: FileText, path: '/products/digital-menu' },
      { title: 'QR Ordering', icon: ShoppingCart, path: '/products/qr-ordering' },
      { title: 'Reservations', icon: CalendarCheck, path: '/products/reservations' },
      { title: 'Loyalty', icon: HeartHandshake, path: '/products/loyalty' },
      { title: 'In-Car Ordering', icon: Car, path: '/products/ordering-from-car' },
      { title: 'Customer Display', icon: Monitor, path: '/products/customer-display' },
    ],
  },
  {
    name: 'Swirl POS',
    description: 'Core operations',
    features: [
      { title: 'Point of Sale', icon: CreditCard, path: '/products/restaurant-point-of-sale' },
      { title: 'Kitchen Display', icon: ChefHat, path: '/products/kitchen-display' },
      { title: 'Order Management', icon: LayoutGrid, path: '/products/restaurant-point-of-sale' },
      { title: 'Multi-device Sync', icon: Smartphone, path: '/products/restaurant-point-of-sale' },
      { title: 'Customer Display', icon: Monitor, path: '/products/customer-display' },
      { title: 'Payment Flow', icon: Receipt, path: '/products/restaurant-point-of-sale' },
    ],
  },
  {
    name: 'Swirl Works',
    description: 'Intelligence & back office',
    features: [
      { title: 'Visitor Analytics', icon: BarChart3, path: '/products/visitor-analytics' },
      { title: 'Financial Reports', icon: DollarSign, path: '/products/financial-reports' },
      { title: 'Accounting', icon: Calculator, path: '/products/accounting' },
      { title: 'CRM', icon: Users, path: '/products/customer-relationship-management' },
      { title: 'Inventory Management', icon: Package, path: '/products/inventory-management' },
      { title: 'Swirl Hardware', icon: Cpu, path: '/products/swirl-hardware' },
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
            src="/lovable-uploads/55544d5a-71ae-4a9e-a8aa-deb07ec265e7.png"
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
                className="w-full flex items-center justify-between p-4 text-left"
              >
                <div>
                  <p className="text-[15px] font-bold text-foreground">{section.name}</p>
                  <p className="text-[11px] text-muted-foreground">{section.description}</p>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-muted-foreground transition-transform duration-300 ${expanded === section.name ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-out overflow-hidden ${expanded === section.name ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-4 pb-4 grid grid-cols-2 gap-2">
                  {section.features.map((feature) => {
                    const Icon = feature.icon;
                    return (
                      <Link
                        key={feature.title}
                        to={feature.path}
                        onClick={onClose}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50/80 hover:bg-blue-50 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center flex-shrink-0">
                          <Icon size={14} className="text-primary" />
                        </div>
                        <span className="text-[12px] font-medium text-foreground">{feature.title}</span>
                      </Link>
                    );
                  })}
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
            <a
              href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Swirl"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary text-white text-center py-3.5 rounded-2xl text-[14px] font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
