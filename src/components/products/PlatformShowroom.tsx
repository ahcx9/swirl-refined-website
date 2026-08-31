import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Box, Layers, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Pillar {
  id: string;
  eyebrow: string;
  title: string;
  tagline: string;
  icon: LucideIcon;
  highlighted?: boolean;
  items: { label: string; path: string }[];
}

const pillars: Pillar[] = [
  {
    id: 'dine',
    eyebrow: 'Front of House',
    title: 'swirl Dine',
    tagline: 'From the first tap to the last bite.',
    icon: Monitor,
    items: [
      { label: 'POS & Billing', path: '/products/restaurant-point-of-sale' },
      { label: 'Menu & QR Ordering', path: '/products/qr-ordering' },
      { label: 'CRM & Loyalty', path: '/products/loyalty' },
      { label: 'Reservations', path: '/products/reservations' },
      { label: 'Kitchen Display (KDS)', path: '/products/kitchen-display' },
    ],
  },
  {
    id: 'works',
    eyebrow: 'Back of House',
    title: 'swirl Works',
    tagline: 'Less waste. More margin. Zero chaos.',
    icon: Box,
    items: [
      { label: 'Inventory Management', path: '/products/inventory-management' },
      { label: 'Procurement', path: '/products/inventory-management' },
      { label: 'Recipes & Costing', path: '/products/inventory-management' },
      { label: 'Production & Transfers', path: '/products/inventory-management' },
      { label: 'Vendor Management', path: '/products/accounting' },
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
      { label: 'Finance & Accounting', path: '/products/accounting' },
      { label: 'Financial Reports', path: '/products/financial-reports' },
      { label: 'Visitor Analytics', path: '/products/visitor-analytics' },
      { label: 'Customer Relationships', path: '/products/customer-relationship-management' },
      { label: 'Rider & Delivery Management', path: '/in-house-delivery-management' },
    ],
  },
];

const PlatformShowroom = () => {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {pillars.map((pillar) => (
        <div
          key={pillar.id}
          className={`group relative flex flex-col rounded-3xl bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
            pillar.highlighted
              ? 'border-2 border-primary shadow-lg shadow-primary/10'
              : 'border border-gray-200'
          }`}
        >
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary">
            <pillar.icon className="h-7 w-7 text-white" aria-hidden="true" />
          </div>

          <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">{pillar.eyebrow}</p>
          <h3 className="text-3xl font-bold text-gray-900">{pillar.title}</h3>
          <p className="mt-3 text-[15px] italic text-gray-500">{pillar.tagline}</p>

          <ul className="mt-7 flex-1 space-y-3">
            {pillar.items.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="flex items-start gap-3 text-[15px] text-gray-800 transition-colors hover:text-primary"
                >
                  <span className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="story-link">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to={pillar.items[0].path}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
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
