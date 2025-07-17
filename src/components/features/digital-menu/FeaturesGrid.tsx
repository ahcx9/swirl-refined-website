import React from 'react';
import { Search, Globe, Camera, BarChart3, Shield, Utensils, Settings, Star, Info } from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    {
      icon: <Search className="h-12 w-12 text-blue-400" />,
      category: "SEARCH & FILTER",
      title: "Find & Feast",
      description: "With Swirl's search and filter, diners quickly find what they crave. It's like a culinary compass, guiding them straight to deliciousness."
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-400" />,
      category: "ACCESSIBLE EVERYWHERE",
      title: "The Always On Menu",
      description: "Swirl's menu is available anytime, anywhere—on any device. Whether at the restaurant or at home, your dishes are just a tap away."
    },
    {
      icon: <Camera className="h-12 w-12 text-blue-400" />,
      category: "INCREASE SALES",
      title: "Serving Success",
      description: "Swirl is more than a menu; it's a marketing powerhouse. Up-sell and cross-sell with ease—suggest drink and dish combos, showcase deals, and promote venues. It's about strategic sales, one suggestion at a time."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-blue-400" />,
      category: "INCREASED CUSTOMER EXPOSURE",
      title: "Amplified Customer Reach",
      description: "Share your menu on Google, Facebook, X, WhatsApp and more. Swirl makes it easy for customers to find, like, and share."
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-400" />,
      category: "BUILD YOUR DATABASE & KNOW YOUR CUSTOMERS",
      title: "A Rich Recipe for Relationships",
      description: "Hungry for insights? Swirl gathers guest feedback through surveys and polls, helping you understand their tastes. It's about building relationships, one feedback at a time."
    },
    {
      icon: <Utensils className="h-12 w-12 text-blue-400" />,
      category: "MEASURE PERFORMANCE",
      title: "Taste the Trends",
      description: "Discover what's hot on your menu with Swirl's analytics. It's more than data; it's a guide to refining your offerings."
    },
    {
      icon: <Settings className="h-12 w-12 text-blue-400" />,
      category: "RICH CONTENT & EXPERIENCE",
      title: "Savour the Ambience",
      description: "Add images and videos to your menu to spark appetite and ease decision-making. It's a virtual taste tour, right on the screen."
    },
    {
      icon: <Star className="h-12 w-12 text-blue-400" />,
      category: "MULTILINGUAL & MULTI-CURRENCY",
      title: "A World of Flavour",
      description: "Serve in any language or currency with Swirl. Translate menus and adjust prices on-the-fly, creating a global dining experience."
    },
    {
      icon: <Info className="h-12 w-12 text-blue-400" />,
      category: "INFORM YOUR DINERS",
      title: "The Informative Plate",
      description: "Save your staff time with detailed menu info—nutritional facts, sources, and more—right on the menu. It's like having a gourmet guide at every table."
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-300/10 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container-custom relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Digital Menu Features
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Transform your restaurant experience with Swirl's comprehensive digital menu solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <div className="mb-4">
                <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">
                  {feature.category}
                </span>
              </div>
              
              <h3 className="text-white text-2xl font-bold mb-4 leading-tight">
                {feature.title}
              </h3>
              
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;