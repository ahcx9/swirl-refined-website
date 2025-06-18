
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import CustomCTAButton from '@/components/CustomCTAButton';
import { Link } from 'react-router-dom';
import { ChefHat, Timer, Bell, ClipboardCheck, Settings, ArrowRight, CheckCircle, Users, BarChart3, Zap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const KitchenDisplay = () => {
  const features = [
    {
      title: "Real-time Order Management",
      description: "Monitor and manage orders in real-time with instant updates from front-of-house.",
      icon: Timer
    },
    {
      title: "Recipe Management",
      description: "Access digital recipes, prep instructions, and plating guides instantly.",
      icon: ChefHat
    },
    {
      title: "Order Priority & Alerts",
      description: "Smart prioritization system with customizable alerts for urgent orders.",
      icon: Bell
    },
    {
      title: "Performance Analytics",
      description: "Track kitchen performance metrics, preparation times, and efficiency.",
      icon: ClipboardCheck
    },
    {
      title: "Customizable Interface",
      description: "Tailor the display layout and features to your kitchen's needs.",
      icon: Settings
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Increase Kitchen Speed",
      description: "Reduce ticket times by 25% with streamlined order flow and clear visual priorities."
    },
    {
      icon: CheckCircle,
      title: "Reduce Errors",
      description: "Digital orders eliminate handwriting confusion and ensure order accuracy."
    },
    {
      icon: Users,
      title: "Improve Communication",
      description: "Real-time updates keep front and back of house perfectly synchronized."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Make informed decisions with detailed kitchen performance analytics."
    }
  ];

  const stats = [
    { number: "25%", label: "Faster Order Processing" },
    { number: "40%", label: "Fewer Order Errors" },
    { number: "30%", label: "Improved Efficiency" },
    { number: "95%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50/30 py-20">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <ChefHat className="w-4 h-4 mr-2" />
                  Kitchen Display System
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                  Streamline Your Kitchen Operations
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Transform your kitchen efficiency with our advanced Kitchen Display System. 
                  Reduce errors, improve communication, and speed up service with real-time order management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                    Start Free Trial
                  </CustomCTAButton>
                  <Button variant="outline" size="lg" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/9f01aee3-0939-40fc-8e7b-a0f216172704.png" 
                    alt="Kitchen Display System Interface" 
                    className="w-full h-auto rounded-xl shadow-lg relative z-10" 
                    loading="eager" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Everything You Need for Kitchen Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive Kitchen Display System provides all the tools your kitchen needs to operate at peak efficiency.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={feature.title} className="bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Proven Results for Your Kitchen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join thousands of restaurants that have transformed their operations with our Kitchen Display System.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                How Our KDS Transforms Your Kitchen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From order receipt to completion, see how our system streamlines every step of your kitchen workflow.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg font-bold text-lg mb-4 mx-auto lg:mx-0">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Order Received</h3>
                <p className="text-gray-600 leading-relaxed">
                  Orders automatically appear on your kitchen display with all details, modifications, and timing requirements clearly visible.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg font-bold text-lg mb-4 mx-auto lg:mx-0">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Smart Prioritization</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our intelligent system automatically prioritizes orders based on prep time, order type, and customer wait times.
                </p>
              </div>
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg font-bold text-lg mb-4 mx-auto lg:mx-0">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Real-time Updates</h3>
                <p className="text-gray-600 leading-relaxed">
                  Mark items complete as you go, with real-time updates to front-of-house staff and customers about order status.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Kitchen?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Join thousands of restaurants using Swirl.cx to streamline their kitchen operations. 
                Start your free trial today and see the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                  Start Free Trial
                </CustomCTAButton>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KitchenDisplay;
