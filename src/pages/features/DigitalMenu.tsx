
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

const DigitalMenu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-purple-light/30">
                <FileText className="text-purple h-6 w-6" />
              </div>
              <h1 className="text-4xl font-bold">Digital Menu</h1>
            </div>
            
            <p className="text-lg text-swirl-gray mb-8">
              Create beautiful, interactive digital menus that are easy to update in real-time. Perfect for restaurants looking to modernize their ordering experience with multiple languages, currencies, nutritional information, and AI-powered menu descriptions.
            </p>

            <div className="mb-12 flex justify-center">
              <img 
                src="/lovable-uploads/49b021c9-7a22-49cd-bfa9-510ddb6a49c9.png"
                alt="Digital Menu QR Code"
                className="rounded-lg shadow-lg max-h-[500px] w-auto object-contain"
              />
            </div>

            <Tabs defaultValue="features" className="mb-12">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="features" className="text-lg py-3">Key Features</TabsTrigger>
                <TabsTrigger value="benefits" className="text-lg py-3">Benefits</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="space-y-8">
                <div className="bg-purple-light/10 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-6">Advanced Menu Features</h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="text-purple h-6 w-6" />
                        <h3 className="text-xl font-semibold">Multiple Languages</h3>
                      </div>
                      <p className="text-swirl-gray">Offer your menu in over 30 languages with automatic translation and customizable corrections.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <DollarSign className="text-purple h-6 w-6" />
                        <h3 className="text-xl font-semibold">Multiple Currencies</h3>
                      </div>
                      <p className="text-swirl-gray">Support for multiple currencies with real-time exchange rate updates for international customers.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <Utensils className="text-purple h-6 w-6" />
                        <h3 className="text-xl font-semibold">Nutritional Info</h3>
                      </div>
                      <p className="text-swirl-gray">Display calories, allergens, ingredients, and other dietary information for health-conscious customers.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <Clock className="text-purple h-6 w-6" />
                        <h3 className="text-xl font-semibold">Preparation Time</h3>
                      </div>
                      <p className="text-swirl-gray">Show estimated preparation times for each dish to manage customer expectations.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <Star className="text-purple h-6 w-6" />
                        <h3 className="text-xl font-semibold">Customer Reviews</h3>
                      </div>
                      <p className="text-swirl-gray">Allow customers to leave reviews and ratings for specific menu items to build trust.</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="text-purple h-6 w-6" />
                        <h3 className="text-xl font-semibold">AI Descriptions</h3>
                      </div>
                      <p className="text-swirl-gray">Generate enticing menu descriptions automatically with our AI-powered content generator.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="benefits" className="space-y-8">
                <div className="bg-blue-50 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold mb-6">Benefits of Digital Menus</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <h3 className="text-xl font-semibold mb-3">Cost Savings</h3>
                      <ul className="space-y-2">
                        <li>• Eliminate printing costs for menu updates</li>
                        <li>• Reduce staff time spent explaining menu items</li>
                        <li>• Lower environmental impact with paperless menus</li>
                        <li>• Instant updates without reprinting entire menus</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <h3 className="text-xl font-semibold mb-3">Enhanced Customer Experience</h3>
                      <ul className="space-y-2">
                        <li>• Interactive visual experience with high-quality images</li>
                        <li>• Language options for international customers</li>
                        <li>• Detailed information for dietary needs</li>
                        <li>• Consistent experience across all devices</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <h3 className="text-xl font-semibold mb-3">Operational Efficiency</h3>
                      <ul className="space-y-2">
                        <li>• Instant menu updates during busy periods</li>
                        <li>• Easily manage seasonal menu changes</li>
                        <li>• Quickly mark items as sold out in real-time</li>
                        <li>• Seamless integration with your POS system</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                      <h3 className="text-xl font-semibold mb-3">Data & Analytics</h3>
                      <ul className="space-y-2">
                        <li>• Track most viewed and ordered menu items</li>
                        <li>• Analyze customer preferences and trends</li>
                        <li>• A/B test different menu layouts and descriptions</li>
                        <li>• Make data-driven menu optimization decisions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

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

export default DigitalMenu;
