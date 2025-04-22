
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingCart, BarChart, 
  CreditCard, Users, Package, Car, Calendar, FileText,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 'digital-menu',
    title: 'Digital Menu',
    description: 'Create beautiful, interactive digital menus that are easy to update in real-time. Seamlessly integrate with your POS and inventory systems.',
    icon: FileText,
    path: '/products/digital-menu',
    features: ['Real-time updates', 'Image gallery', 'Nutritional information', 'Multi-language support']
  },
  {
    id: 'qr-ordering',
    title: 'QR Ordering',
    description: 'Contactless ordering solution where customers can scan QR codes, browse your menu, and place their orders directly from their device.',
    icon: ShoppingCart,
    path: '/products/qr-ordering',
    features: ['Tableside ordering', 'Custom QR codes', 'Payment integration', 'Order tracking']
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Gain valuable insights about your business with our powerful analytics tools. Track sales, customer behavior, and menu performance.',
    icon: BarChart,
    path: '/products/analytics',
    features: ['Real-time dashboards', 'Custom reports', 'Trend analysis', 'Data export']
  },
  {
    id: 'pos',
    title: 'POS System',
    description: 'Modern point-of-sale system designed specifically for restaurant needs, with user-friendly interfaces and seamless integrations.',
    icon: CreditCard,
    path: '/products/pos',
    features: ['Table management', 'Split bills', 'Fast checkout', 'Employee access levels']
  },
  {
    id: 'reports',
    title: 'Financial Reports',
    description: 'Comprehensive financial reporting to track your restaurant's performance, with detailed P&L statements, cost analysis, and forecasting.',
    icon: LayoutDashboard,
    path: '/products/financial-reports',
    features: ['P&L statements', 'Cost analysis', 'Tax reporting', 'Financial forecasting']
  },
  {
    id: 'crm',
    title: 'CRM',
    description: 'Customer relationship management tools to build loyalty and drive repeat business through targeted marketing campaigns.',
    icon: Users,
    path: '/products/crm',
    features: ['Customer profiles', 'Loyalty programs', 'Email campaigns', 'Customer feedback']
  },
  {
    id: 'car-ordering',
    title: 'Car Ordering',
    description: 'Enable customers to order from their vehicles for pickup or drive-through service, optimizing your curbside operations.',
    icon: Car,
    path: '/products/ordering-from-car',
    features: ['GPS location tracking', 'Digital car hop', 'Order notifications', 'Payment processing']
  },
  {
    id: 'payroll',
    title: 'Payroll Management',
    description: 'Streamline staff payments and track labor costs efficiently, with time tracking, tax calculations, and direct deposit options.',
    icon: Calendar,
    path: '/products/payroll-management',
    features: ['Time tracking', 'Tax calculations', 'Direct deposit', 'Compliance reporting']
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    description: 'Track stock levels, reduce waste, and optimize your purchasing with real-time inventory tracking and automated ordering.',
    icon: Package,
    path: '/products/inventory-management',
    features: ['Real-time tracking', 'Waste reduction', 'Automated ordering', 'Vendor management']
  }
];

const ProductOverview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="bg-purple-light/10 py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Restaurant Management Solutions</h1>
              <p className="text-lg text-swirl-gray mb-8">
                Discover our suite of integrated tools designed to revolutionize how you run your restaurant business.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Products List */}
        <section className="py-20">
          <div className="container-custom">
            <div className="grid gap-12 md:gap-16">
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className={`grid grid-cols-1 ${index % 2 === 0 ? 'lg:grid-cols-[1fr_1.5fr]' : 'lg:grid-cols-[1.5fr_1fr] lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                >
                  <div className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-purple-light/20 to-purple/10' : 'from-swirl-light-gray to-swirl-blue/10'} rounded-2xl p-8 h-full`}>
                    <div className="w-full h-full min-h-[300px] flex items-center justify-center">
                      <product.icon size={120} className="text-purple opacity-60" />
                    </div>
                  </div>
                  
                  <div className={index % 2 !== 0 ? 'lg:order-first' : ''}>
                    <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
                    <p className="text-lg text-swirl-gray mb-6">{product.description}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-purple mr-2"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild variant="link" className="text-purple hover:text-purple-dark p-0">
                      <Link to={product.path} className="flex items-center gap-2">
                        Learn more about {product.title} <ArrowRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to streamline your restaurant operations?</h3>
              <p className="text-lg text-swirl-gray mb-8 max-w-2xl mx-auto">
                Our team is ready to show you how Swirl.cx can transform your business with our integrated suite of tools.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductOverview;
