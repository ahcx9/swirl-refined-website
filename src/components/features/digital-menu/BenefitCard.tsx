
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface BenefitCardProps {
  title: string;
  items: string[];
}

const BenefitCard = ({ title, items }: BenefitCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100/50 backdrop-blur rounded-xl p-6 shadow-md border border-blue-100/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-0">
        <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
          <div className="w-1.5 h-6 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full mr-3"></div>
          {title}
        </h3>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="min-w-[8px] h-[8px] rounded-full bg-blue-500 mt-2"></div>
              <span className="text-blue-600/80">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
