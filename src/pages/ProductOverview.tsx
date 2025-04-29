
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, ShoppingCart, BarChart, 
  CreditCard, Users, Package, Car, Calendar, FileText,
  ChefHat, ArrowRight, Utensils, Bell
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    id: 'digital-menu',
    title: 'Digital Menu',
    description: 'Create beautiful, interactive digital menus that are easy to update in real-time. Support multiple languages, currencies, and show nutritional information like calories and allergens.',
    icon: FileText,
    path: '/products/digital-menu',
    image: "/lovable-uploads/f627dfca-6a17-4a0f-b8a8-2f9c88ed4603.png",
    features: [
      'Real-time updates', 
      'Multi-language support', 
      'Nutritional information', 
      'AI-generated descriptions'
    ]
  },
  {
    id: 'qr-ordering',
    title: 'QR Ordering',
    description: 'Contactless ordering solution where customers can scan QR codes, browse your menu, and place their orders directly from their device, with real-time status updates.',
    icon: ShoppingCart,
    path: '/products/qr-ordering',
    image: "/lovable-uploads/06ecc874-0362-496d-967b-0a2b44670639.png",
    features: [
      'Tableside ordering', 
      'Custom QR codes', 
      'Payment integration', 
      'Order tracking'
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics',
    description: 'Gain valuable insights about your business with our powerful analytics tools. Track sales, customer behavior, and menu performance with customizable dashboards.',
    icon: BarChart,
    path: '/products/analytics',
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    features: [
      'Real-time dashboards', 
      'Custom reports', 
      'Trend analysis', 
      'Data export'
    ]
  },
  {
    id: 'pos',
    title: 'POS System',
    description: 'Modern point-of-sale system designed specifically for restaurant needs, with user-friendly interfaces and seamless integrations for both software and hardware solutions.',
    icon: CreditCard,
    path: '/products/pos',
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    features: [
      'Table management', 
      'Split bills', 
      'Fast checkout', 
      'Employee access levels'
    ]
  },
  {
    id: 'reports',
    title: 'Financial Reports',
    description: "Comprehensive financial reporting to track your restaurant's performance, with detailed P&L statements, cost analysis, and forecasting tools for data-driven decisions.",
    icon: LayoutDashboard,
    path: '/products/financial-reports',
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
    features: [
      'P&L statements', 
      'Cost analysis', 
      'Tax reporting', 
      'Financial forecasting'
    ]
  },
  {
    id: 'crm',
    title: 'CRM',
    description: 'Customer relationship management tools to build loyalty and drive repeat business through targeted marketing campaigns and personalized customer experiences.',
    icon: Users,
    path: '/products/crm',
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    features: [
      'Customer profiles', 
      'Loyalty programs', 
      'Email campaigns', 
      'Customer feedback'
    ]
  },
  {
    id: 'car-ordering',
    title: 'In-Car Ordering',
    description: 'Enable customers to order from their vehicles for pickup or drive-through service, optimizing your curbside operations and enhancing customer convenience.',
    icon: Car,
    path: '/products/ordering-from-car',
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    features: [
      'GPS location tracking', 
      'Digital car hop', 
      'Order notifications', 
      'Payment processing'
    ]
  },
  {
    id: 'payroll',
    title: 'Payroll Management',
    description: 'Streamline staff payments and track labor costs efficiently, with time tracking, tax calculations, and direct deposit options for hassle-free payroll processing.',
    icon: Calendar,
    path: '/products/payroll-management',
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
    features: [
      'Time tracking', 
      'Tax calculations', 
      'Direct deposit', 
      'Compliance reporting'
    ]
  },
  {
    id: 'inventory',
    title: 'Inventory Management',
    description: 'Track stock levels, reduce waste, and optimize your purchasing with real-time inventory tracking, automated ordering, and comprehensive vendor management.',
    icon: Package,
    path: '/products/inventory-management',
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c",
    features: [
      'Real-time tracking', 
      'Waste reduction', 
      'Automated ordering', 
      'Vendor management'
    ]
  },
  {
    id: 'kitchen-display',
    title: 'Kitchen Display System',
    description: 'Streamline kitchen operations with our advanced KDS solution. Improve efficiency, reduce errors, and enhance communication between front and back of house.',
    icon: ChefHat,
    path: '/products/kitchen-display',
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    features: [
      'Real-time orders', 
      'Cooking timers', 
      'Station routing', 
      'Performance metrics'
    ]
  },
  {
    id: 'reservations',
    title: 'Reservations',
    description: 'Manage bookings and optimize table turnover with our advanced reservation system. Handle waitlists, send automated reminders, and collect guest preferences.',
    icon: Utensils,
    path: '/products/reservations',
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    features: [
      'Online bookings', 
      'Table management', 
      'Guest profiles', 
      'Waitlist handling'
    ]
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
                <Link to="/contact">Schedule a Quick-Demo 🍿</Link>
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
                  <div className={`overflow-hidden rounded-2xl ${index % 2 === 0 ? 'bg-purple-light/20' : 'bg-swirl-blue/10'}`}>
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full min-h-[300px] object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  
                  <div className={index % 2 !== 0 ? 'lg:order-first' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <product.icon size={28} className="text-purple" />
                      <h2 className="text-3xl font-bold">{product.title}</h2>
                    </div>
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
                Our team is ready to show you how swirl.cx can transform your business with our integrated suite of tools.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/contact">Ready to Transform your Restaurant/Cafe 🍽️?
                </Link>
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
