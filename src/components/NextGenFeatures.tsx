
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, ChartBar, MessageSquare, Database } from 'lucide-react';

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
    <section className="py-16 md:py-24 bg-gradient-to-b from-purple/5 to-swirl-blue/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Next-Gen Features to Elevate Your Restaurant
          </h2>
          <p className="text-swirl-gray max-w-2xl mx-auto">
            Empower your restaurant with cutting-edge technologies and streamline your operations with these advanced features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
            title="Customer Feedback"
            description="Collect and analyze customer feedback to improve your service and menu offerings."
            icon={<MessageSquare size={32} className="text-purple" />}
          />
          <FeatureCard
            title="Data Collection"
            description="Gather valuable customer data to understand preferences and optimize your marketing strategy."
            icon={<Database size={32} className="text-purple" />}
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
