
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Package, TrendingUp, Clipboard, Users, BarChart, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InventoryManagement = () => {
  const features = [
    {
      title: "Real-time Tracking",
      description: "Monitor inventory levels in real-time across all locations. Get immediate visibility into stock levels, usage patterns, and inventory valuation.",
      icon: TrendingUp
    },
    {
      title: "Waste Reduction",
      description: "Track and minimize waste with smart analytics. Identify patterns in food waste, optimize portion sizes, and implement strategies to reduce shrinkage.",
      icon: AlertTriangle
    },
    {
      title: "Automated Ordering",
      description: "Set up automatic reordering based on inventory thresholds. Define minimum stock levels and let the system generate purchase orders when items run low.",
      icon: Clipboard
    },
    {
      title: "Vendor Management",
      description: "Manage vendor relationships and track supplier performance. Compare pricing, monitor delivery times, and maintain a complete database of suppliers.",
      icon: Users
    },
    {
      title: "Advanced Reporting",
      description: "Generate detailed reports on inventory turnover, costs, and usage patterns. Make data-driven decisions to optimize your inventory investment.",
      icon: BarChart
    }
  ];

  const benefits = [
    "Reduce food waste by up to 40%",
    "Lower inventory carrying costs by 20-30%",
    "Minimize emergency orders and associated premium costs",
    "Improve cash flow by preventing overstock situations",
    "Ensure optimal stock levels for each ingredient",
    "Prevent stockouts that could impact menu availability"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-12 mb-16">
              <div className="w-full text-center">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="p-3 rounded-full bg-purple-light/30">
                    <Package className="text-purple h-6 w-6" />
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-black">Inventory Management</h1>
                </div>
                
                <p className="text-lg text-swirl-gray mb-8 leading-relaxed max-w-3xl mx-auto">
                  Take control of your restaurant's inventory with our advanced management system. Track stock levels, reduce waste, and optimize your purchasing with real-time monitoring and predictive analytics.
                </p>

                <div className="flex gap-4 justify-center">
                  <Button asChild className="btn-primary">
                    <Link to="/contact">Schedule a Demo</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/products">View All Products</Link>
                  </Button>
                </div>
              </div>

              <div className="w-full">
                <div className="bg-gradient-to-br from-purple-light/30 to-white rounded-xl p-4 max-w-3xl mx-auto">
                  <img 
                    src="/lovable-uploads/e06fe134-6fdc-4caa-91b6-6492a2373c74.png" 
                    alt="Inventory Dashboard" 
                    className="w-full rounded-lg shadow-md mix-blend-multiply"
                  />
                </div>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-12 text-center">Key Inventory Management Features</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature) => (
                  <div key={feature.title} className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 rounded-full bg-purple-light/30">
                        <feature.icon className="text-purple h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p className="text-swirl-gray">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-16 bg-gradient-to-r from-purple-light/20 to-blue-100/20 p-8 md:p-12 rounded-2xl">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-bold mb-6">Why Invest in Inventory Management?</h2>
                  <p className="text-swirl-gray mb-6 leading-relaxed">
                    For restaurants, inventory typically represents 25-35% of operational costs. Our inventory management system helps you optimize this significant investment, preventing waste and improving profitability.
                  </p>
                  <p className="text-swirl-gray mb-8 leading-relaxed">
                    With real-time tracking, automated alerts, and powerful analytics, you'll always know exactly what you have on hand, what you need to order, and how your inventory costs are impacting your bottom line.
                  </p>
                  <Button asChild className="btn-primary">
                    <Link to="/contact">Learn How We Can Help</Link>
                  </Button>
                </div>
                
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="bg-green-500 rounded-full p-1 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-center">Integration Capabilities</h2>
                <p className="text-swirl-gray mb-8 text-center max-w-3xl mx-auto">
                  Our inventory management system seamlessly integrates with your existing restaurant technology ecosystem, providing a unified platform for all your operational needs.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-3">POS Integration</h3>
                    <p className="text-sm text-gray-600">Automatically update inventory levels when items are sold through your POS system.</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-3">Supplier Connections</h3>
                    <p className="text-sm text-gray-600">Connect directly with suppliers for streamlined ordering and receiving processes.</p>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-3">Financial Software</h3>
                    <p className="text-sm text-gray-600">Sync with accounting systems to track inventory costs and financial performance.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Ready to optimize your inventory?</h2>
              <p className="text-lg text-swirl-gray mb-8 max-w-3xl mx-auto">
                Join successful restaurants that have reduced waste, lowered costs, and improved efficiency with Swirl's comprehensive inventory management solution.
              </p>
              <Button asChild className="btn-primary text-lg">
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started Today <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InventoryManagement;
