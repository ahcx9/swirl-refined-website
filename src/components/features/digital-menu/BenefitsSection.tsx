
import React from 'react';
import BenefitCard from './BenefitCard';

const BenefitsSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50/60 to-indigo-50/60 p-8 md:p-10 rounded-2xl mb-8 shadow-lg border border-blue-100/30">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-900 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">Benefits of Digital Menus</h2>
      
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
