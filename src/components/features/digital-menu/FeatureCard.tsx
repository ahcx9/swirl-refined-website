import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
const FeatureCard = ({
  icon,
  title,
  description
}: FeatureCardProps) => {
  return <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 backdrop-blur rounded-xl p-7 shadow-md border border-blue-100/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
      <CardContent className="p-0">
        <div className="flex items-center gap-4 mb-5">
          <div className="p-2.5 rounded-full bg-blue-100/70 group-hover:bg-blue-200/70 transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-black">{title}</h3>
        </div>
        <p className="leading-relaxed text-gray-500">{description}</p>
      </CardContent>
    </Card>;
};
export default FeatureCard;