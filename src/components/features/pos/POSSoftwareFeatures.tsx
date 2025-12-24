import React from "react";
import { 
  History, 
  LayoutGrid, 
  WifiOff, 
  Zap,
  Users, 
  Cloud, 
  BarChart3, 
  UtensilsCrossed,
  Sparkles,
  LucideIcon
} from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
}

const FeatureCard = ({ title, description, icon: Icon, delay }: FeatureCardProps) => (
  <div 
    className={`animate-on-scroll animate-delay-${delay} group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/30 hover:-translate-y-2 transition-all duration-500`}
  >
    {/* Icon Container */}
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-blue-200">
      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
    </div>
    
    {/* Content */}
    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-sm text-gray-600 leading-relaxed">
      {description}
    </p>
    
    {/* Hover Glow Effect */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/30 transition-all duration-500 -z-10" />
  </div>
);

const POSSoftwareFeatures = () => {
  useScrollAnimation();
  
  const features = [
    {
      title: "Order Timeline",
      description: "Track every order from punch to delivery with real-time status updates and timestamps.",
      icon: History,
      delay: 100,
    },
    {
      title: "Table Management",
      description: "Full control over every table. Assign tables, track status, and manage dining flow effortlessly.",
      icon: LayoutGrid,
      delay: 200,
    },
    {
      title: "Offline Mode",
      description: "Keep billing even without internet. No downtime, no lost sales — our POS works offline & syncs when online.",
      icon: WifiOff,
      delay: 300,
    },
    {
      title: "Fastest Billing Ever",
      description: "Lightning-fast order punching and billing. Process transactions in seconds with our optimized checkout flow.",
      icon: Zap,
      delay: 400,
    },
    {
      title: "Staff Management",
      description: "Manage staff without micromanaging. Roles, permissions, shifts, and performance — all in one place.",
      icon: Users,
      delay: 500,
    },
    {
      title: "Cloud Synchronization",
      description: "Access your data from anywhere with secure cloud storage and backups.",
      icon: Cloud,
      delay: 600,
    },
    {
      title: "Smart Order Routing",
      description: "Orders flow automatically from POS to kitchen displays/print.",
      icon: BarChart3,
      delay: 700,
    },
    {
      title: "Menu Management",
      description: "Update menus in seconds. Edit prices, items, modifiers, and availability instantly.",
      icon: UtensilsCrossed,
      delay: 800,
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-50/30 to-transparent rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-blue-50 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Powerful Software</span>
          </div>
          
          <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Designed for Effortless Restaurant Operations
          </h2>
          
          <p className="animate-on-scroll animate-delay-200 text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to run your restaurant smoothly, all in one platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default POSSoftwareFeatures;
