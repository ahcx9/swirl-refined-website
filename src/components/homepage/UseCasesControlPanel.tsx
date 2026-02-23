import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Coffee, 
  Utensils, 
  ChefHat, 
  Truck, 
  Building2, 
  Hotel,
  ArrowRight
} from 'lucide-react';

const UseCasesControlPanel: React.FC = () => {
  const businessTypes = [
    {
      id: 'cafe',
      name: 'Cafés & Bakeries',
      icon: Coffee,
      image: '/lovable-uploads/cafe-bakery.jpg',
      tagline: 'Speed meets loyalty',
      description: 'Turn first-time visitors into daily regulars. Quick billing, instant loyalty tracking, and smart QR menus keep your counters moving and customers returning.',
      features: ['Quick Billing', 'Loyalty Points', 'Guest History', 'QR Menu'],
    },
    {
      id: 'qsr',
      name: 'Quick Service',
      icon: Utensils,
      image: '/lovable-uploads/quick-service-new.jpg',
      tagline: 'Built for volume',
      description: 'Handle peak-hour rushes without breaking a sweat. Automated kitchen routing, multi-counter support, and seamless aggregator sync keep your orders flowing.',
      features: ['KDS Integration', 'Order Queue', 'Multi-Counter', 'Aggregator Sync'],
    },
    {
      id: 'finedining',
      name: 'Fine Dining',
      icon: ChefHat,
      image: '/lovable-uploads/fine-dining-new.jpg',
      tagline: 'Elevate every experience',
      description: 'Remember every guest, perfect every course. Table management, VIP profiles, and precise course timing create the seamless service your guests expect.',
      features: ['Table Mapping', 'Guest Profiles', 'Course Timing', 'Reservations'],
    },
    {
      id: 'cloudkitchen',
      name: 'Cloud Kitchens',
      icon: Building2,
      image: '/lovable-uploads/cloud-kitchen-new.jpg',
      tagline: 'Multi-brand mastery',
      description: 'Run multiple brands from one kitchen, one dashboard. Real-time cost intelligence, automated delivery sync, and brand-level analytics give you total visibility.',
      features: ['Multi-Brand', 'Cost Analysis', 'Aggregator Sync', 'Rider Tracking'],
    },
    {
      id: 'foodtruck',
      name: 'Food Trucks',
      icon: Truck,
      image: '/lovable-uploads/food-truck.jpg',
      tagline: 'Go anywhere, sell everywhere',
      description: 'Your POS works even when the internet doesn\'t. Offline-first design, mobile-optimized menus, and instant payment processing keep you selling at every stop.',
      features: ['Offline Mode', 'Quick Menu', 'Mobile POS', 'GPS Tracking'],
    },
    {
      id: 'hotel',
      name: 'Hotels & Resorts',
      icon: Hotel,
      image: '/lovable-uploads/hotel-resort-new.jpg',
      tagline: 'Enterprise-grade control',
      description: 'Manage every outlet from a single command center. Room charging, centralized menus, and enterprise reporting give you oversight without the overhead.',
      features: ['Multi-Outlet', 'Room Charge', 'Central Menu', 'Enterprise Reports'],
    },
  ];

  const [activeType, setActiveType] = useState(businessTypes[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTypeChange = (type: typeof businessTypes[0]) => {
    if (type.id === activeType.id) return;
    setIsTransitioning(true);
    requestAnimationFrame(() => {
      setTimeout(() => {
        setActiveType(type);
        setIsTransitioning(false);
      }, 100);
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-10 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-5">
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Every Business Type</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Serving Every Corner
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
            of Hospitality
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            From cozy cafés to luxury hotels — Swirl adapts to your unique workflow.
          </p>
        </div>

        {/* Business Type Selector */}
        <div className="mb-10 animate-on-scroll">
          {/* Mobile: Horizontal scroll */}
          <div className="flex md:hidden gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            {businessTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleTypeChange(type)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                  activeType.id === type.id 
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25' 
                    : 'bg-white text-foreground border-gray-200'
                }`}
              >
                <type.icon className="w-4 h-4" />
                <span className="text-sm font-medium whitespace-nowrap">{type.name}</span>
              </button>
            ))}
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-3">
            {businessTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => handleTypeChange(type)}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-300 ${
                  activeType.id === type.id 
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-105' 
                    : 'bg-white text-foreground border-gray-100 hover:border-primary/30 hover:shadow-md'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  activeType.id === type.id ? 'bg-white/20' : 'bg-primary/10'
                }`}>
                  <type.icon className={`w-6 h-6 ${activeType.id === type.id ? 'text-white' : 'text-primary'}`} />
                </div>
                <span className="text-sm font-semibold text-center">{type.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Card - Text outside image */}
        <div className={`max-w-5xl mx-auto transition-all duration-150 ease-out ${isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
          <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/50 overflow-hidden">
            {/* Left: Image ONLY - no text overlay */}
            <div className="relative h-72 lg:h-auto min-h-[380px]">
              <img 
                src={activeType.image} 
                alt={activeType.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Right: All text content */}
            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <activeType.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{activeType.name}</h3>
                  <p className="text-sm font-medium text-primary">{activeType.tagline}</p>
                </div>
              </div>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {activeType.description}
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {activeType.features.map((feature, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-medium text-primary"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Link 
                to="/use-cases"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                See how it works
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center animate-on-scroll">
          <Link
            to="/use-cases"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
          >
            Explore All Use Cases
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UseCasesControlPanel;
