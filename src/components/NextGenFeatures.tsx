
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, ChartBar, MessageSquare, Database, Globe, Calendar, Bell, Shield, Users, Zap } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-[#0F1C2D] text-white h-full">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div>{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const NextGenFeatures = () => {
  return (
    <section id="next-gen-features" className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Next-Gen Features to Elevate Your Restaurant
          </h2>
          <p className="text-swirl-gray max-w-2xl mx-auto">
            Empower your restaurant with cutting-edge technologies and streamline your operations with these advanced features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="Menu Customization"
            description="Tailor your menu's look and feel to perfectly match your restaurant's brand and ambiance."
            icon={<Palette size={32} className="text-purple" />}
          />
          <FeatureCard
            title="Smart Recommendations"
            description="Leverage AI-driven suggestions to upsell and cross-sell, enhancing customer orders and boosting revenue."
            icon={<ChartBar size={32} className="text-purple" />}
          />
          <FeatureCard
            title="Customer Database"
            description="Collect and analyze customer information to send out marketing promotions."
            icon={<MessageSquare size={32} className="text-purple" />}
          />
          <FeatureCard
            title="Data Collection"
            description="Gather valuable customer data to understand preferences and optimize your marketing strategy."
            icon={<Database size={32} className="text-purple" />}
          />
          <FeatureCard
            title="Multi-language Support"
            description="Cater to international customers with menus that automatically translate into multiple languages."
            icon={<Globe size={32} className="text-purple" />}
          />
          <FeatureCard
            title="Reservation Management"
            description="Allow customers to book tables online with automated confirmation and reminder notifications."
            icon={<Calendar size={32} className="text-purple" />}
          />
          <FeatureCard
            title="Push Notifications"
            description="Send targeted promotions and updates directly to your customers' mobile devices."
            icon={<Bell size={32} className="text-purple" />}
          />
          <FeatureCard
            title="Inventory Management"
            description="Track, manage, and optimize your restaurant’s stock with real-time inventory control and smart reorder alerts."
            icon={<Shield size={32} className="text-purple" />}
          />
          <FeatureCard
            title="Staff Management"
            description="Efficiently manage staff schedules, tasks, and performance metrics all in one place."
            icon={<Users size={32} className="text-purple" />}
          />
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/products" 
            className="btn-primary inline-flex items-center gap-2"
          >
            Explore All Features
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NextGenFeatures;
