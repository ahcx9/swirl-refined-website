import React from 'react';
import { Card } from '@/components/ui/card';
import { Palette, ChartBar, MessageSquare, Database, Globe, Calendar, Bell, Shield, Users, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  iconBgClass: string;
  index: number;
}
const FeatureCard = ({
  title,
  description,
  icon,
  colorClass,
  iconBgClass,
  index
}: FeatureCardProps) => {
  const delayAnimation = `${index * 0.1}s`;
  return <Card className={`overflow-hidden transition-all duration-500 hover:scale-105 hover:rotate-1 border-none ${colorClass} h-full shadow-lg hover:shadow-xl rounded-xl`}>
      <div className="p-6 relative" style={{
      animationDelay: delayAnimation
    }}>
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${iconBgClass} text-white`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-700">{description}</p>
        
        {/* Decorative Elements */}
        <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white opacity-10"></div>
        <div className={`absolute -top-2 -left-2 w-12 h-12 rounded-full ${iconBgClass} opacity-20`}></div>
        <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white"></div>
        <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-white"></div>
      </div>
    </Card>;
};
const NextGenFeatures = () => {
  const features = [{
    title: "Menu Customization",
    description: "Tailor your menu's look and feel to perfectly match your restaurant's brand and ambiance.",
    icon: <Palette size={32} />,
    colorClass: "bg-gradient-to-br from-pink-50 to-purple-100",
    iconBgClass: "bg-gradient-to-br from-pink-400 to-purple-500"
  }, {
    title: "Smart Recommendations",
    description: "Leverage AI-driven suggestions to upsell and cross-sell, enhancing customer orders and boosting revenue.",
    icon: <ChartBar size={32} />,
    colorClass: "bg-gradient-to-br from-blue-50 to-indigo-100",
    iconBgClass: "bg-gradient-to-br from-blue-400 to-indigo-500"
  }, {
    title: "Customer Database",
    description: "Collect and analyze customer information to send out marketing promotions.",
    icon: <MessageSquare size={32} />,
    colorClass: "bg-gradient-to-br from-green-50 to-teal-100",
    iconBgClass: "bg-gradient-to-br from-green-400 to-teal-500"
  }, {
    title: "Data Collection",
    description: "Gather valuable customer data to understand preferences and optimize your marketing strategy.",
    icon: <Database size={32} />,
    colorClass: "bg-gradient-to-br from-amber-50 to-yellow-100",
    iconBgClass: "bg-gradient-to-br from-amber-400 to-yellow-500"
  }, {
    title: "Multi-language Support",
    description: "Cater to international customers with menus that automatically translate into multiple languages.",
    icon: <Globe size={32} />,
    colorClass: "bg-gradient-to-br from-red-50 to-orange-100",
    iconBgClass: "bg-gradient-to-br from-red-400 to-orange-500"
  }, {
    title: "Multiple Currencies",
    description: "Support various currencies with real-time exchange rates for international customers.",
    icon: <DollarSign size={32} />,
    colorClass: "bg-gradient-to-br from-purple-50 to-violet-100",
    iconBgClass: "bg-gradient-to-br from-purple-400 to-violet-500"
  }, {
    title: "Reservation Management",
    description: "Allow customers to book tables online with automated confirmation and reminder notifications.",
    icon: <Calendar size={32} />,
    colorClass: "bg-gradient-to-br from-cyan-50 to-blue-100",
    iconBgClass: "bg-gradient-to-br from-cyan-400 to-blue-500"
  }, {
    title: "Push Notifications",
    description: "Send targeted promotions and updates directly to your customers' mobile devices.",
    icon: <Bell size={32} />,
    colorClass: "bg-gradient-to-br from-emerald-50 to-green-100",
    iconBgClass: "bg-gradient-to-br from-emerald-400 to-green-500"
  }, {
    title: "Inventory Management",
    description: "Track, manage, and optimize your restaurant's stock with real-time inventory control and smart reorder alerts.",
    icon: <Shield size={32} />,
    colorClass: "bg-gradient-to-br from-rose-50 to-pink-100",
    iconBgClass: "bg-gradient-to-br from-rose-400 to-pink-500"
  }];
  return <section id="next-gen-features" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="bg-indigo-100 text-indigo-800 px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">ADVANCED FEATURES</span>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-gray-950">
            Next-Gen Features to Elevate Your Restaurant
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Empower your restaurant with cutting-edge technologies and streamline your operations with these advanced features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} colorClass={feature.colorClass} iconBgClass={feature.iconBgClass} index={index} />)}
        </div>

        
      </div>
    </section>;
};
export default NextGenFeatures;