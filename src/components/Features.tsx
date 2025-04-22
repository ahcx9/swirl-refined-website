
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
    description: 'Create beautiful, interactive digital menus that are easy to update in real-time.',
    icon: FileText,
    path: '/products/digital-menu'
  },
  {
    id: 'qr-ordering',
    title: 'QR Ordering',
    description: 'Contactless ordering solution for a seamless dining experience for your customers.',
    icon: ShoppingCart,
    path: '/products/qr-ordering'
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Gain valuable insights about your business with our powerful analytics tools.',
    icon: BarChart,
    path: '/products/analytics'
  },
  {
    id: 'pos',
    title: 'POS System',
    description: 'Modern point-of-sale system designed specifically for restaurant needs.',
    icon: CreditCard,
    path: '/products/pos'
  },
  {
    id: 'reports',
    title: 'Financial Reports',
    description: 'Comprehensive financial reporting to track your restaurant's performance.',
    icon: LayoutDashboard,
    path: '/products/financial-reports'
  },
  {
    id: 'crm',
    title: 'CRM',
    description: 'Customer relationship management tools to build loyalty and drive repeat business.',
    icon: Users,
    path: '/products/crm'
  },
  {
    id: 'car-ordering',
    title: 'Car Ordering',
    description: 'Enable customers to order from their vehicles for pickup or drive-through.',
    icon: Car,
    path: '/products/ordering-from-car'
  },
  {
    id: 'payroll',
    title: 'Payroll Management',
    description: 'Streamline staff payments and track labor costs efficiently.',
    icon: Calendar,
    path: '/products/payroll-management'
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    description: 'Track stock levels, reduce waste, and optimize your purchasing.',
    icon: Package,
    path: '/products/inventory-management'
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Solutions for Modern Restaurants</h2>
          <p className="text-lg text-swirl-gray max-w-3xl mx-auto">
            Our suite of integrated tools helps you manage every aspect of your restaurant business efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link 
              to={feature.path} 
              key={feature.id}
              className="bg-white rounded-xl shadow-soft p-6 card-hover border border-gray-100"
            >
              <div className="w-12 h-12 rounded-full bg-purple-light/30 flex items-center justify-center mb-4">
                <feature.icon className="text-purple" size={20} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-swirl-gray mb-4">{feature.description}</p>
              <Button 
                variant="link" 
                className="text-purple p-0 hover:text-purple-dark"
              >
                Learn more
              </Button>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="btn-primary">
            <Link to="/products">View All Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;
