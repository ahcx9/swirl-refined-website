import React from 'react';
import { Monitor, Printer, CreditCard, Wallet, MonitorPlay, Wifi, Check, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface HardwareCardProps {
  title: string;
  features: string[];
  icon: React.ElementType;
  delay: string;
}

const HardwareCard = ({ title, features, icon: Icon, delay }: HardwareCardProps) => (
  <div className={`animate-on-scroll ${delay} group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}>
    {/* Icon Container */}
    <div className="mb-5 relative">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300" />
    </div>
    
    {/* Title */}
    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">{title}</h3>
    
    {/* Features List */}
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Check className="w-3 h-3 text-primary" />
          </div>
          <span className="text-gray-600 text-sm leading-relaxed">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const POSHardwareSolutions = () => {
  useScrollAnimation();
  
  const hardwareOptions = [
    {
      title: "Tablets & Terminals",
      icon: Monitor,
      features: [
        "iPad and Android compatible POS terminals",
        "Durable commercial-grade tablets with stands",
        "Touch-screen terminals with customer displays"
      ],
      delay: "animate-delay-100"
    },
    {
      title: "Receipt Printers",
      icon: Printer,
      features: [
        "High-speed thermal receipt printers",
        "Kitchen ticket printers with loud buzzers",
        "Wireless and Ethernet connection options"
      ],
      delay: "animate-delay-200"
    },
    {
      title: "Payment Terminals",
      icon: CreditCard,
      features: [
        "EMV-compliant card readers",
        "NFC readers for contactless payments",
        "PIN pads with customer-facing displays"
      ],
      delay: "animate-delay-300"
    },
    {
      title: "Cash Drawers",
      icon: Wallet,
      features: [
        "Heavy-duty metal cash drawers",
        "Automatic opening triggered by POS system",
        "Multiple size options to fit your space"
      ],
      delay: "animate-delay-400"
    },
    {
      title: "Kitchen Display Screens",
      icon: MonitorPlay,
      features: [
        "Water-resistant touchscreen displays",
        "Order routing to specific kitchen stations",
        "Visual alerts for order timing"
      ],
      delay: "animate-delay-500"
    },
    {
      title: "Networking Equipment",
      icon: Wifi,
      features: [
        "Secure, restaurant-grade routers",
        "Backup 4G/5G connection options",
        "Network configuration and support"
      ],
      delay: "animate-delay-600"
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />
      </div>
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary">Complete Hardware Ecosystem</span>
        </div>
        
        <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Everything Your Restaurant Needs
        </h2>
        
        <p className="animate-on-scroll animate-delay-200 text-lg text-gray-600 max-w-2xl mx-auto">
          Premium hardware solutions designed for the demanding restaurant environment, fully integrated with swirl POS.
        </p>
      </div>
      
      {/* Hardware Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hardwareOptions.map((option, index) => (
          <HardwareCard 
            key={index}
            title={option.title}
            features={option.features}
            icon={option.icon}
            delay={option.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default POSHardwareSolutions;
