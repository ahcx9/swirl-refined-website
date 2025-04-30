
import React from 'react';
import { Clock, Database, QrCode } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <div className="bg-white/90 backdrop-blur rounded-xl p-6 shadow-soft border border-gray-50 hover:shadow-card hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-swirl-gray leading-relaxed">{description}</p>
  </div>
);

const POSBenefits = () => {
  return (
    <div className="bg-gradient-to-r from-purple-light/30 to-purple/10 p-8 md:p-10 rounded-xl mb-16">
      <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Our POS System?</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <BenefitCard 
          icon={<Clock className="text-purple h-6 w-6 shrink-0" />}
          title="Save Time"
          description="Streamline operations and reduce manual tasks with automation features that give you more time to focus on your customers."
        />
        
        <BenefitCard 
          icon={<Database className="text-purple h-6 w-6 shrink-0" />}
          title="Reduce Errors"
          description="Minimize order and inventory mistakes with our intelligent validation system, leading to happier customers and better inventory control."
        />
        
        <BenefitCard 
          icon={<QrCode className="text-purple h-6 w-6 shrink-0" />}
          title="Enhance Experience"
          description="Create seamless dining experiences with faster service and accurate orders every time, building customer loyalty and repeat business."
        />
      </div>
    </div>
  );
};

export default POSBenefits;
