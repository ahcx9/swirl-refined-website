
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-soft border border-gray-50 hover:shadow-card hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-0">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-swirl-gray">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
