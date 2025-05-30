
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Tablet } from 'lucide-react';

interface HardwareOptionProps {
  title: string;
  features: string[];
}

const HardwareOption = ({ title, features }: HardwareOptionProps) => (
  <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-card hover:-translate-y-1 transition-all duration-300">
    <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle size={16} className="text-green-500 mr-2 mt-1 shrink-0" />
          <span className="text-swirl-gray">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const POSHardwareSolutions = () => {
  const hardwareOptions = [
    {
      title: "Tablets & Terminals",
      features: [
        "iPad and Android compatible POS terminals",
        "Durable commercial-grade tablets with stands",
        "Touch-screen terminals with customer displays"
      ]
    },
    {
      title: "Receipt Printers",
      features: [
        "High-speed thermal receipt printers",
        "Kitchen ticket printers with loud buzzers",
        "Wireless and Ethernet connection options"
      ]
    },
    {
      title: "Payment Terminals",
      features: [
        "EMV-compliant card readers",
        "NFC readers for contactless payments",
        "PIN pads with customer-facing displays"
      ]
    },
    {
      title: "Cash Drawers",
      features: [
        "Heavy-duty metal cash drawers",
        "Automatic opening triggered by POS system",
        "Multiple size options to fit your space"
      ]
    },
    {
      title: "Kitchen Display Screens",
      features: [
        "Water-resistant touchscreen displays",
        "Order routing to specific kitchen stations",
        "Visual alerts for order timing"
      ]
    },
    {
      title: "Networking Equipment",
      features: [
        "Secure, restaurant-grade routers",
        "Backup 4G/5G connection options",
        "Network configuration and support"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-light/10 p-8 md:p-10 rounded-xl">
      <h2 className="text-2xl font-bold mb-8 flex items-center">
        <Tablet className="mr-3 text-purple" /> Hardware Solutions
      </h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {hardwareOptions.map((option, index) => (
          <HardwareOption 
            key={index}
            title={option.title}
            features={option.features}
          />
        ))}
      </div>
    </div>
  );
};

export default POSHardwareSolutions;
