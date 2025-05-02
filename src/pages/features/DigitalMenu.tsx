
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  FileText, Globe, DollarSign, Clock, Star, 
  BarChart, Smartphone, Utensils, Sparkles, Languages
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const DigitalMenu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-purple-light/30">
                    <FileText className="text-purple h-6 w-6" />
                  </div>
                  <h1 className="text-4xl font-bold">Digital Menu</h1>
                </div>
                
                <p className="text-lg text-swirl-gray mb-8">
                  Create beautiful, interactive digital menus that are easy to update in real-time. Perfect for restaurants looking to modernize their ordering experience with multiple languages, currencies, nutritional information, and AI-powered menu descriptions.
                </p>

                <Button asChild className="btn-primary">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
              
              <div className="md:w-1/2 order-1 md:order-2 bg-gradient-to-br from-purple-light/30 to-white rounded-xl overflow-hidden p-4">
                <img 
                  src="/lovable-uploads/947b4eab-99e0-4ea2-ad4e-5fb3a2f90fab.png"
                  alt="Digital Menu on Mobile Devices"
                  className="w-full h-auto object-contain mix-blend-multiply"
                />
              </div>
            </div>

            <div className="mb-16">
              <Tabs defaultValue="features" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList className="grid grid-cols-2 w-full max-w-md">
                    <TabsTrigger value="features" className="text-lg py-3 font-medium">Key Features</TabsTrigger>
                    <TabsTrigger value="benefits" className="text-lg py-3 font-medium">Benefits</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="features" className="mt-6">
                  <div className="p-6 md:p-8 bg-gradient-to-br from-purple-light/20 to-white rounded-2xl shadow-md">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Advanced Menu Features</h2>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <FeatureCard 
                        icon={<Globe className="text-purple h-6 w-6" />}
                        title="Multiple Languages"
                        description="Offer your menu in over 30 languages with automatic translation and customizable corrections."
                      />
                      
                      <FeatureCard 
                        icon={<DollarSign className="text-purple h-6 w-6" />}
                        title="Multiple Currencies"
                        description="Support for multiple currencies with real-time exchange rate updates for international customers."
                      />
                      
                      <FeatureCard 
                        icon={<Utensils className="text-purple h-6 w-6" />}
                        title="Nutritional Info"
                        description="Display calories, allergens, ingredients, and other dietary information for health-conscious customers."
                      />
                      
                      <FeatureCard 
                        icon={<Clock className="text-purple h-6 w-6" />}
                        title="Preparation Time"
                        description="Show estimated preparation times for each dish to manage customer expectations."
                      />
                      
                      <FeatureCard 
                        icon={<Star className="text-purple h-6 w-6" />}
                        title="Customer Reviews"
                        description="Allow customers to leave reviews and ratings for specific menu items to build trust."
                      />
                      
                      <FeatureCard 
                        icon={<Sparkles className="text-purple h-6 w-6" />}
                        title="AI Descriptions"
                        description="Generate enticing menu descriptions automatically with our AI-powered content generator."
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="benefits" className="mt-6">
                  <div className="p-6 md:p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md">
                    <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Benefits of Digital Menus</h2>
                    
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
                </TabsContent>
              </Tabs>
            </div>

            <div className="bg-gradient-to-br from-purple-light/20 to-purple/10 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Why Restaurants Love Our Digital Menu</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/80 backdrop-blur rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="text-purple h-6 w-6" />
                    <h3 className="text-xl font-semibold">Mobile Optimized</h3>
                  </div>
                  <p className="text-swirl-gray">Beautiful display on any device with responsive design that adjusts automatically.</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart className="text-purple h-6 w-6" />
                    <h3 className="text-xl font-semibold">Data Insights</h3>
                  </div>
                  <p className="text-swirl-gray">Learn which menu items customers view most and optimize your offerings based on data.</p>
                </div>
                
                <div className="bg-white/80 backdrop-blur rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="text-purple h-6 w-6" />
                    <h3 className="text-xl font-semibold">Global Reach</h3>
                  </div>
                  <p className="text-swirl-gray">Serve international customers with automatic language detection and currency conversion.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to revolutionize your menu experience?</h3>
              <p className="text-lg text-swirl-gray mb-8 max-w-2xl mx-auto">
                Join thousands of restaurants already using our digital menu system to enhance customer experience and streamline operations.
              </p>
              <Button asChild className="btn-primary">
                <Link to="/contact">Get Started with Digital Menus</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="border border-gray-100 shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-swirl-gray">{description}</p>
      </CardContent>
    </Card>
  );
};

// Benefit Card Component
const BenefitCard = ({ title, items }) => {
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

export default DigitalMenu;
