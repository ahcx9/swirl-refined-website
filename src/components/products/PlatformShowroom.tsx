import React from 'react';
import { Link } from 'react-router-dom';
import {
  Monitor,
  Boxes,
  Layers,
  ArrowRight,
  ArrowUpRight,
  ReceiptText,
  QrCode,
  HeartHandshake,
  CalendarCheck,
  ChefHat,
  ShoppingCart,
  UtensilsCrossed,
  ArrowLeftRight,
  Handshake,
  Landmark,
  BarChart3,
  LineChart,
  Users,
  Bike,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Pillar {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  highlighted?: boolean;
  items: { label: string; path: string; icon: LucideIcon }[];
}

const pillars: Pillar[] = [
  {
    id: 'dine',
    eyebrow: 'Front of House',
    title: 'swirl Dine',
    tagline: 'From the first tap to the last bite.',
    icon: Monitor,
    items: [
      { label: 'POS & Billing', path: '/products/restaurant-point-of-sale', icon: ReceiptText },
      { label: 'Menu & QR Ordering', path: '/products/qr-ordering', icon: QrCode },
      { label: 'CRM & Loyalty', path: '/products/loyalty', icon: HeartHandshake },
      { label: 'Reservations', path: '/products/reservations', icon: CalendarCheck },
      { label: 'Kitchen Display (KDS)', path: '/products/kitchen-display', icon: ChefHat },
    ],
  },
  {
    id: 'works',
    eyebrow: 'Back of House',
    title: 'swirl Works',
    tagline: 'Less waste. More margin. Zero chaos.',
    icon: Boxes,
    items: [
      { label: 'Inventory Management', path: '/products/inventory-management', icon: Boxes },
      { label: 'Procurement', path: '/products/inventory-management', icon: ShoppingCart },
      { label: 'Recipes & Costing', path: '/products/inventory-management', icon: UtensilsCrossed },
      { label: 'Production & Transfers', path: '/products/inventory-management', icon: ArrowLeftRight },
      { label: 'Vendor Management', path: '/products/accounting', icon: Handshake },
    ],
  },
  {
    id: 'os',
    eyebrow: 'Platform Layer',
    title: 'swirl OS',
    tagline: 'Run everything. Manage nothing.',
    icon: Layers,
    highlighted: true,
    items: [
      { label: 'Finance & Accounting', path: '/products/accounting', icon: Landmark },
      { label: 'Financial Reports', path: '/products/financial-reports', icon: BarChart3 },
      { label: 'Visitor Analytics', path: '/products/visitor-analytics', icon: LineChart },
      { label: 'Customer Relationships', path: '/products/customer-relationship-management', icon: Users },
      { label: 'Rider & Delivery Management', path: '/in-house-delivery-management', icon: Bike },
    ],
  },
];

const PlatformShowroom = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {pillars.map((pillar) => (
        <div
          key={pillar.id}
          className={`group relative flex flex-col overflow-hidden rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
            pillar.highlighted
              ? 'border-2 border-primary shadow-xl shadow-primary/10'
              : 'border border-gray-200 hover:border-primary/40 hover:shadow-primary/10'
          }`}
        >
          {/* soft corner glow */}
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/5 blur-2xl transition-opacity duration-300 group-hover:bg-primary/10"
            aria-hidden="true"
          />

          {pillar.highlighted && (
            <span className="absolute right-6 top-6 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary">
              Core
            </span>
          )}

          <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#003d99] shadow-lg shadow-primary/25">
            <pillar.icon className="h-8 w-8 text-white" aria-hidden="true" />
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">{pillar.eyebrow}</p>
          <h3 className="text-3xl font-bold text-gray-900">{pillar.title}</h3>
          <p className="mt-2 text-[15px] italic text-gray-500">{pillar.tagline}</p>

          <ul className="mt-7 flex-1 space-y-1.5">
            {pillar.items.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="group/item flex items-center gap-3 rounded-xl px-2 py-2 text-[15px] font-medium text-gray-800 transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1">{item.label}</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-primary opacity-0 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:opacity-100"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to={pillar.items[0].path}
            className="mt-6 inline-flex items-center gap-2 border-t border-gray-100 pt-5 text-sm font-semibold text-primary"
          >
            Explore {pillar.title}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PlatformShowroom;
