
import React from 'react';
import { Clock, Database, QrCode } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <div className="bg-white/80 backdrop-blur rounded-xl p-6">
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-swirl-gray">{description}</p>
  </div>
);

const POSBenefits = () => {
  return (
    <div className="bg-gradient-to-r from-purple-light/30 to-purple/20 p-8 rounded-xl mb-12">
      <h2 className="text-2xl font-bold mb-6">Why Choose Our POS System?</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <BenefitCard 
          icon={<Clock className="text-purple h-6 w-6" />}
          title="Save Time"
          description="Streamline operations and reduce manual tasks with automation features."
        />
        
        <BenefitCard 
          icon={<Database className="text-purple h-6 w-6" />}
          title="Reduce Errors"
          description="Minimize order and inventory mistakes with our intelligent validation system."
        />
        
        <BenefitCard 
          icon={<QrCode className="text-purple h-6 w-6" />}
          title="Enhance Experience"
          description="Create seamless dining experiences with faster service and accurate orders."
        />
      </div>
    </div>
  );
};

export default POSBenefits;
