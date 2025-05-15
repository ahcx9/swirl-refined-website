import React from 'react';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Truck, Utensils, Building, Store, Hotel, ChefHat, Coffee as CoffeeShop } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
const UseCases = () => {
  const segments = [{
    title: "Food Trucks",
    description: "Streamline your mobile food business with our comprehensive POS system, inventory tracking, and mobile ordering solutions designed specifically for food trucks.",
    icon: Truck,
    bgColor: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    borderColor: "border-blue-200"
  }, {
    title: "Fine Dining",
    description: "Elevate your fine dining experience with sophisticated reservation management, table service optimization, and integrated payment solutions.",
    icon: Utensils,
    bgColor: "from-indigo-50 to-indigo-100",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
    borderColor: "border-indigo-200"
  }, {
    title: "Cafes",
    description: "Boost your cafe operations with fast POS, automated loyalty programs, and efficient inventory management designed for high-volume service.",
    icon: CoffeeShop,
    bgColor: "from-sky-50 to-sky-100",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-100",
    borderColor: "border-sky-200"
  }, {
    title: "Bakeries",
    description: "Manage your bakery efficiently with production scheduling, ingredient tracking, and customer pre-ordering systems tailored for bakery operations.",
    icon: Store,
    bgColor: "from-cyan-50 to-cyan-100",
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-100",
    borderColor: "border-cyan-200"
  }, {
    title: "Coffee Shops",
    description: "Power your coffee shop with quick service solutions, customizable loyalty programs, and mobile ordering capabilities for the modern coffee enthusiast.",
    icon: CoffeeShop,
    bgColor: "from-blue-50 to-blue-100",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    borderColor: "border-blue-200"
  }, {
    title: "Cloud Kitchens",
    description: "Optimize your delivery-only kitchen with robust order management, multiple delivery platform integration, and real-time kitchen display systems.",
    icon: ChefHat,
    bgColor: "from-indigo-50 to-indigo-100",
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
    borderColor: "border-indigo-200"
  }, {
    title: "Hotels",
    description: "Integrate your hotel's F&B operations with room service management, multiple outlet support, and centralized billing solutions.",
    icon: Hotel,
    bgColor: "from-sky-50 to-sky-100",
    iconColor: "text-sky-600",
    iconBg: "bg-sky-100",
    borderColor: "border-sky-200"
  }, {
    title: "Casual Dining",
    description: "Enhance your casual dining restaurant with table management, integrated payments, and customer engagement tools for a seamless dining experience.",
    icon: Building,
    bgColor: "from-cyan-50 to-cyan-100",
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-100",
    borderColor: "border-cyan-200"
  }];
  return <div className="min-h-screen flex flex-col">
      <main className="flex-grow pt-28">
        <section className="bg-gradient-to-br from-blue-100/60 to-indigo-100/50 py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">SERVING EVERY CORNER OF HOSPITALITY</span>
              <h1 className="text-4xl font-bold mb-6 font-inter text-gray-950 md:text-6xl">Use Cases</h1>
              <p className="text-lg mb-8 font-inter text-slate-800">
                Discover tailored solutions for every segment of the food service industry. From food trucks to fine dining establishments, we provide specialized tools to enhance your operations.
              </p>
              <Button asChild className="btn-primary font-inter bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-6 px-8 rounded-xl shadow-lg">
                <Link to="https://app.swirl.cx/register">Get Started For Free</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-blue-50/30">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {segments.map((segment, index) => <Card key={segment.title} className={`overflow-hidden transform transition-all duration-500 hover:scale-105 hover:rotate-1 border-2 ${segment.borderColor} rounded-xl`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${segment.bgColor} opacity-50 z-0`}></div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/20"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-blue-200/70"></div>
                  <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-blue-300/50"></div>
                  
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`w-14 h-14 rounded-full ${segment.iconBg} flex items-center justify-center ${segment.iconColor}`}>
                        <segment.icon className="h-7 w-7" />
                      </div>
                      <CardTitle className="font-inter text-2xl text-swirl-blue">{segment.title}</CardTitle>
                    </div>
                    <CardDescription className="font-inter mt-2 text-base text-amber-950">{segment.description}</CardDescription>
                  </CardHeader>
                </Card>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default UseCases;