
import React from 'react';
import { 
  LayoutDashboard, ShoppingCart, BarChart, 
  CreditCard, Users, Package, Car, Calendar, FileText 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const features = [
  {
    id: 'digital-menu',
    title: 'Digital Menu',
    description: 'Interactive digital menus with real-time updates.',
    icon: FileText,
    path: '/products/digital-menu'
  },
  {
    id: 'qr-ordering',
    title: 'QR Ordering',
    description: 'Contactless ordering for seamless dining experience.',
    icon: ShoppingCart,
    path: '/products/qr-ordering'
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Gain valuable insights about your business.',
    icon: BarChart,
    path: '/products/analytics'
  },
  {
    id: 'pos',
    title: 'POS System',
    description: 'Modern point-of-sale for restaurant needs.',
    icon: CreditCard,
    path: '/products/pos'
  },
  {
    id: 'reports',
    title: 'Financial Reports',
    description: "Comprehensive performance tracking.",
    icon: LayoutDashboard,
    path: '/products/financial-reports'
  },
  {
    id: 'crm',
    title: 'CRM',
    description: 'Build loyalty and drive repeat business.',
    icon: Users,
    path: '/products/crm'
  },
  {
    id: 'car-ordering',
    title: 'Car Ordering',
    description: 'Order from vehicles for pickup or drive-through.',
    icon: Car,
    path: '/products/ordering-from-car'
  },
  {
    id: 'payroll',
    title: 'Payroll Management',
    description: 'Streamline staff payments and labor costs.',
    icon: Calendar,
    path: '/products/payroll-management'
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    description: 'Track stock and optimize purchasing.',
    icon: Package,
    path: '/products/inventory-management'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 flex items-center bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Solutions for Modern Restaurants</h2>
          <p className="text-xs md:text-sm text-swirl-gray max-w-2xl mx-auto mb-6">
            Our integrated suite of tools helps you manage every aspect of your restaurant efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-2">
          {features.map((feature) => (
            <Link 
              to={feature.path} 
              key={feature.id}
              className="bg-gradient-to-br from-white to-gray-50/30 rounded-xl shadow-sm hover:shadow-md p-3 transition-all duration-300 hover:-translate-y-1 border border-gray-100/80 group flex flex-col items-center text-center"
            >
              <div className="w-8 h-8 rounded-full bg-purple-light/30 flex items-center justify-center mb-2 group-hover:bg-purple/20 transition-colors">
                <feature.icon className="text-purple" size={16} />
              </div>
              <h3 className="text-xs font-medium mb-1 group-hover:text-purple transition-colors">{feature.title}</h3>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-6">
          <Button asChild className="btn-primary text-xs">
            <Link to="/products">View All Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
