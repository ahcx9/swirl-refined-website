import React, { useEffect } from 'react';
import Footer from '@/components/Footer';
import { Truck, Utensils, Store, Hotel, ChefHat, Coffee, ArrowRight, CheckCircle, BarChart3, Clock, Users, TrendingUp, Zap } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const segments = [
  {
    title: "Cafés & Bakeries",
    challenge: "High footfall, low ticket size, and loyal regulars who expect speed.",
    complexity: "Juggling loyalty, QR menus, counter speed, and inventory for perishables — all at once.",
    solution: "Swirl unifies billing, loyalty tracking, QR ordering, and real-time inventory into one lightning-fast counter experience.",
    impact: [
      { label: 'Checkout Speed', value: '12s avg', icon: Clock },
      { label: 'Repeat Rate', value: '+45%', icon: Users },
      { label: 'Revenue Growth', value: '+22%', icon: TrendingUp },
    ],
    features: ['Quick Billing', 'Loyalty Points', 'QR Menu', 'Guest History', 'Inventory Alerts'],
    icon: Coffee,
    image: '/lovable-uploads/cafe-bakery.jpg',
    reversed: false,
  },
  {
    title: "Quick Service Restaurants",
    challenge: "Peak-hour chaos, multi-counter operations, and delivery aggregator pressure.",
    complexity: "Orders fly in from counters, aggregators, and kiosks. Kitchen needs perfect routing. One mistake = angry customer.",
    solution: "Automated kitchen routing, real-time order queue, and seamless aggregator sync — built for volume.",
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
    title: "Fine Dining",
    challenge: "Guest expectations are sky-high. Every detail matters — from greeting to bill.",
    complexity: "Course timing, VIP preferences, table management, and personalized service require a system that remembers everything.",
    solution: "Swirl's guest profiles, course timing engine, and table mapping create seamless fine-dining service.",
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
    title: "Cloud Kitchens",
    challenge: "Multiple brands, one kitchen. Delivery sync errors cost margins.",
    complexity: "Managing 5+ brands across 3+ aggregators with shared inventory and separate P&Ls is operationally brutal.",
    solution: "Multi-brand dashboards, aggregator auto-sync, and brand-level cost analysis from a single command center.",
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
    title: "Food Trucks",
    challenge: "No stable internet. No fixed setup. Every second counts.",
    complexity: "You need a POS that works offline, sets up in 30 seconds, and handles mobile payments on the go.",
    solution: "Offline-first POS with mobile-optimized menus, instant payments, and GPS tracking for multi-truck fleets.",
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
    title: "Hotels & Resorts",
    challenge: "Multiple F&B outlets, room charging, and enterprise-level reporting needs.",
    complexity: "Each outlet has its own menu, staff, and KPIs — but management needs one consolidated view with room-charge integration.",
    solution: "Multi-outlet management with centralized menus, room charging, and enterprise reporting from one dashboard.",
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
];

const UseCases = () => {
  useScrollAnimation();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-28">
        {/* Hero */}
        <section className="bg-white py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full border border-primary/10 mb-6">
                <Store className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Use Cases</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                One Platform.{' '}
                <span className="text-primary">Every Format.</span>
              </h1>
              <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
                See how Swirl transforms operations for every type of food business — from counter to cloud.
              </p>
              <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                get started for free
              </CustomCTAButton>
            </div>
          </div>
        </section>

        {/* Storytelling Segments */}
        {segments.map((segment, idx) => (
          <section key={segment.title} className={`py-16 md:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-muted/20'}`}>
            <div className="container-custom">
              <div className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${segment.reversed ? 'lg:grid-flow-dense' : ''}`}>
                
                {/* Image */}
                <div className={`animate-on-scroll ${segment.reversed ? 'lg:col-start-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
                    <img 
                      src={segment.image} 
                      alt={segment.title}
                      className="w-full h-72 md:h-96 object-cover"
                    />
                    {/* Overlay badge */}
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                        <segment.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content — Storytelling flow */}
                <div className={`animate-on-scroll animate-delay-200 ${segment.reversed ? 'lg:col-start-1' : ''}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                    {segment.title}
                  </h2>

                  {/* Step 1: Challenge */}
                  <div className="mb-6 pl-5 border-l-2 border-red-200">
                    <p className="text-xs font-bold text-red-500 uppercase tracking-wider mb-1">Industry Challenge</p>
                    <p className="text-muted-foreground">{segment.challenge}</p>
                  </div>

                  {/* Step 2: Complexity */}
                  <div className="mb-6 pl-5 border-l-2 border-amber-200">
                    <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">Operational Complexity</p>
                    <p className="text-muted-foreground">{segment.complexity}</p>
                  </div>

                  {/* Step 3: Swirl Solution */}
                  <div className="mb-8 pl-5 border-l-2 border-primary">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-1">Swirl Solution</p>
                    <p className="text-foreground font-medium">{segment.solution}</p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {segment.features.map((f, i) => (
                      <span key={i} className="px-3 py-1.5 bg-primary/5 border border-primary/10 rounded-full text-xs font-medium text-primary">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Impact KPIs */}
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

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join 500+ restaurants running on Swirl. Setup is free and takes under 24 hours.
              </p>
              <a href="https://app.swirl.cx/register" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                get started for free
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
