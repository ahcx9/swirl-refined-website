
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface BenefitCardProps {
  title: string;
  items: string[];
}

const BenefitCard = ({ title, items }: BenefitCardProps) => {
  return (
    <Card className="border border-gray-100 shadow-soft hover:shadow-md transition-all duration-300">
      <CardContent className="p-6">
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
