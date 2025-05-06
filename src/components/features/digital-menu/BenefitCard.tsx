
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface BenefitCardProps {
  title: string;
  items: string[];
}

const BenefitCard = ({ title, items }: BenefitCardProps) => {
  return (
    <Card className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-soft border border-gray-50 hover:shadow-card hover:-translate-y-1 transition-all duration-300">
      <CardContent className="p-0">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="min-w-[6px] h-[6px] rounded-full bg-purple mt-2"></div>
              <span className="text-swirl-gray">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
