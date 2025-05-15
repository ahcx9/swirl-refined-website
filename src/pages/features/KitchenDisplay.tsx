import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChefHat, Timer, Bell, ClipboardCheck, Settings } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
const KitchenDisplay = () => {
  const features = [{
    title: "Real-time Order Management",
    description: "Monitor and manage orders in real-time with instant updates from front-of-house.",
    icon: Timer
  }, {
    title: "Recipe Management",
    description: "Access digital recipes, prep instructions, and plating guides instantly.",
    icon: ChefHat
  }, {
    title: "Order Priority & Alerts",
    description: "Smart prioritization system with customizable alerts for urgent orders.",
    icon: Bell
  }, {
    title: "Performance Analytics",
    description: "Track kitchen performance metrics, preparation times, and efficiency.",
    icon: ClipboardCheck
  }, {
    title: "Customizable Interface",
    description: "Tailor the display layout and features to your kitchen's needs.",
    icon: Settings
  }];
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="bg-purple-light/10 py-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Kitchen Display System</h1>
              <p className="text-lg text-swirl-gray mb-8">
                Streamline your kitchen operations with our advanced KDS solution. Improve efficiency, reduce errors, and enhance communication between front and back of house.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/contact">Get Started for Free</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container-custom">
            <div className="mb-16 flex justify-center">
              <div className="max-w-2xl bg-transparent rounded-xl p-4">
                <img src="/lovable-uploads/85df272f-78b0-4180-bd9e-a069e750623a.png" alt="Kitchen Display System Interface" className="w-full h-auto object-contain rounded-xl" style={{
                filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))'
              }} loading="eager" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map(feature => <Card key={feature.title} className="card-hover">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <feature.icon className="h-6 w-6 text-purple" />
                      <CardTitle>{feature.title}</CardTitle>
                    </div>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>)}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-purple-light/20 to-purple/10 py-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">How Our KDS Transforms Your Kitchen</h2>
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Improved Efficiency</h3>
                  <p>Digital order display eliminates paper tickets, reducing errors and improving kitchen flow. Real-time updates ensure everyone stays synchronized.</p>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Better Communication</h3>
                  <p>Direct communication between front-of-house and kitchen staff through integrated messaging and alert systems.</p>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">Data-Driven Insights</h3>
                  <p>Track preparation times, identify bottlenecks, and optimize your kitchen operations with detailed analytics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default KitchenDisplay;