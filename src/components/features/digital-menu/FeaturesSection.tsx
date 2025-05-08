
import React from 'react';
import { 
  Globe, DollarSign, Utensils, Clock, Star, Sparkles
} from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50/60 to-indigo-50/60 p-8 md:p-10 rounded-2xl mb-8 shadow-lg border border-blue-100/30">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-900 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">Advanced Menu Features</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <FeatureCard 
          icon={<Globe className="text-blue-600 h-6 w-6" />}
          title="Multiple Languages"
          description="Offer your menu in over 30 languages with automatic translation and customizable corrections."
        />
        
        <FeatureCard 
          icon={<DollarSign className="text-blue-600 h-6 w-6" />}
          title="Multiple Currencies"
          description="Support for multiple currencies with real-time exchange rate updates for international customers."
        />
        
        <FeatureCard 
          icon={<Utensils className="text-blue-600 h-6 w-6" />}
          title="Nutritional Info"
          description="Display calories, allergens, ingredients, and other dietary information for health-conscious customers."
        />
        
        <FeatureCard 
          icon={<Clock className="text-blue-600 h-6 w-6" />}
          title="Preparation Time"
          description="Show estimated preparation times for each dish to manage customer expectations."
        />
        
        <FeatureCard 
          icon={<Star className="text-blue-600 h-6 w-6" />}
          title="Customer Reviews"
          description="Allow customers to leave reviews and ratings for specific menu items to build trust."
        />
        
        <FeatureCard 
          icon={<Sparkles className="text-blue-600 h-6 w-6" />}
          title="AI Descriptions"
          description="Generate enticing menu descriptions automatically with our AI-powered content generator."
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
