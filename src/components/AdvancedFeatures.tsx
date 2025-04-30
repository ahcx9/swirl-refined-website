
import React from 'react';
import { Globe, CreditCard, Bell, Languages } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AdvancedFeatures = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Features</h2>
          <p className="text-swirl-gray max-w-2xl mx-auto">
            Powerful tools designed to enhance your restaurant's digital presence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple/10 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 font-inter">Multi-Language Support</h3>
                  <p className="text-swirl-gray mb-4 font-inter">
                    Reach a global audience with our multi-language menu system. Support for 50+ languages
                    ensures every guest feels at home.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'العربية', '中文', 'Español', 'Français'].map((lang) => (
                      <span 
                        key={lang}
                        className="px-3 py-1 bg-purple/5 text-purple rounded-full text-sm font-inter"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple/10 p-3 rounded-lg">
                  <CreditCard className="h-6 w-6 text-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 font-inter">Multiple Payment Options</h3>
                  <p className="text-swirl-gray mb-4 font-inter">
                    Accept payments in multiple ways with integrated payment processing.
                    Give your customers the flexibility they expect.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Credit Card', 'Apple Pay', 'Google Pay', 'PayPal', 'Cash'].map((payment) => (
                      <span 
                        key={payment}
                        className="px-3 py-1 bg-purple/5 text-purple rounded-full text-sm font-inter"
                      >
                        {payment}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple/10 p-3 rounded-lg">
                  <Bell className="h-6 w-6 text-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 font-inter">Real-time Notifications</h3>
                  <p className="text-swirl-gray mb-4 font-inter">
                    Get instant alerts for new orders, completed payments, and important events.
                    Stay on top of your business from anywhere.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Mobile Alerts', 'Email Notifications', 'Desktop Notifications', 'SMS'].map((notification) => (
                      <span 
                        key={notification}
                        className="px-3 py-1 bg-purple/5 text-purple rounded-full text-sm font-inter"
                      >
                        {notification}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple/10 p-3 rounded-lg">
                  <Languages className="h-6 w-6 text-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 font-inter">Customization Options</h3>
                  <p className="text-swirl-gray mb-4 font-inter">
                    Design your digital menu to match your brand with customizable templates,
                    colors, fonts, and layouts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Brand Colors', 'Custom Fonts', 'Layout Options', 'Image Galleries', 'Custom CSS'].map((option) => (
                      <span 
                        key={option}
                        className="px-3 py-1 bg-purple/5 text-purple rounded-full text-sm font-inter"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
