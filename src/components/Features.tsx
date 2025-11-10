
import React from 'react';
import { LayoutDashboard, ShoppingCart, BarChart, CreditCard, Users, Package, Car, Calendar, FileText, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomCTAButton from '@/components/CustomCTAButton';

const features = [{
  id: 'digital-menu',
  title: 'Digital Menu',
  description: 'Interactive digital menus with real-time updates.',
  icon: FileText,
  path: '/products/digital-menu'
}, {
  id: 'qr-ordering',
  title: 'QR Ordering',
  description: 'Contactless ordering for seamless dining experience.',
  icon: ShoppingCart,
  path: '/products/qr-ordering'
}, {
  id: 'analytics',
  title: 'Analytics',
  description: 'Gain valuable insights about your business.',
  icon: BarChart,
  path: '/products/restaurant-analytics'
}, {
  id: 'pos',
  title: 'POS System',
  description: 'Modern point-of-sale for restaurant needs.',
  icon: CreditCard,
  path: '/products/restaurant-point-of-sale'
}, {
  id: 'reports',
  title: 'Financial Reports',
  description: "Comprehensive performance tracking.",
  icon: LayoutDashboard,
  path: '/products/financial-reports'
}, {
  id: 'crm',
  title: 'CRM',
  description: 'Build loyalty and drive repeat business.',
  icon: Users,
  path: '/products/customer-relationship-management'
}, {
  id: 'car-ordering',
  title: 'Car Ordering',
  description: 'Order from vehicles for pickup or drive-through.',
  icon: Car,
  path: '/products/ordering-from-car'
}, {
  id: 'payroll',
  title: 'Payroll Management',
  description: 'Streamline staff payments and labor costs.',
  icon: Calendar,
  path: '/products/payroll-management'
}, {
  id: 'inventory',
  title: 'Inventory Management',
  description: 'Track stock and optimize purchasing.',
  icon: Package,
  path: '/products/inventory-management'
}, {
  id: 'swirl-hardware',
  title: 'Swirl Hardware',
  description: 'Professional POS hardware for your restaurant.',
  icon: Monitor,
  path: '/products/swirl-hardware'
}];
const Features = () => {
  return <section id="features" className="py-20 md:py-28 flex items-center bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-gray-950">
            Solutions for Modern Restaurants
          </h2>
          <p className="text-base md:text-lg text-swirl-gray max-w-2xl mx-auto mb-10">
            Our integrated suite of tools helps you manage every aspect of your restaurant efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:gap-6">
          {features.map(feature => <Link to={feature.path} key={feature.id} className="bg-gradient-to-br from-white to-blue-50/60 rounded-xl shadow-sm hover:shadow-xl p-4 transition-all duration-300 hover:-translate-y-1 border border-blue-100/20 group flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100/80 to-indigo-100/80 flex items-center justify-center mb-3 group-hover:bg-gradient-to-br group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                <feature.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-base md:text-lg font-medium mb-2 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-500">{feature.description}</p>
            </Link>)}
        </div>
        
        <div className="text-center mt-10">
          <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab className="scale-90">
            Get Started For Free
          </CustomCTAButton>
        </div>
      </div>
    </section>;
};
export default Features;
