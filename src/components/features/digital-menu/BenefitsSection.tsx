
import React from 'react';
import BenefitCard from './BenefitCard';

const BenefitsSection = () => {
  return (
    <div className="bg-gradient-to-r from-purple-light/30 to-purple/10 p-8 md:p-10 rounded-xl mb-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Benefits of Digital Menus</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <BenefitCard 
          title="Cost Savings"
          items={[
            "Eliminate printing costs for menu updates",
            "Reduce staff time spent explaining menu items",
            "Lower environmental impact with paperless menus",
            "Instant updates without reprinting entire menus"
          ]}
        />
        
        <BenefitCard 
          title="Enhanced Customer Experience"
          items={[
            "Interactive visual experience with high-quality images",
            "Language options for international customers",
            "Detailed information for dietary needs",
            "Consistent experience across all devices"
          ]}
        />
        
        <BenefitCard 
          title="Operational Efficiency"
          items={[
            "Instant menu updates during busy periods",
            "Easily manage seasonal menu changes",
            "Quickly mark items as sold out in real-time",
            "Seamless integration with your POS system"
          ]}
        />
        
        <BenefitCard 
          title="Data & Analytics"
          items={[
            "Track most viewed and ordered menu items",
            "Analyze customer preferences and trends",
            "A/B test different menu layouts and descriptions",
            "Make data-driven menu optimization decisions"
          ]}
        />
      </div>
    </div>
  );
};

export default BenefitsSection;
