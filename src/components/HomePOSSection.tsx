import React, { useEffect } from 'react';
import { ArrowRight, CreditCard, Receipt, ShoppingCart, Zap, ChefHat, Cloud } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { preloadImage } from '@/utils/imagePreloader';
import CustomCTAButton from '@/components/CustomCTAButton';

const HomePOSSection = () => {
  const features = [
    {
      icon: CreditCard,
      text: 'Real-time table management',
      number: '01'
    },
    {
      icon: Receipt,
      text: 'Customizable modifiers & combos',
      number: '02'
    },
    {
      icon: ShoppingCart,
      text: 'Check splitting & table transfers',
      number: '03'
    },
    {
      icon: Zap,
      text: 'Lightning fast punching orders',
      number: '04'
    },
    {
      icon: ChefHat,
      text: 'Kitchen display integration',
      number: '05'
    }
  ];

  // Preload the POS image
  useEffect(() => {
    const mainImage = "/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png";
    preloadImage({
      src: mainImage,
      priority: 'high'
    });
  }, []);

  return (
    <section className="py-20 md:py-24 overflow-hidden relative bg-gradient-to-br from-blue-50/50 via-white to-blue-50/30">
      <div className="container-custom relative">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Content column */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="animate-on-scroll">
              {/* Badge with icon */}
              <div className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <Cloud className="h-4 w-4" />
                <span className="font-semibold text-sm">Transform Your Restaurant Experience</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
                Cloud-Based Point of Sale
              </h2>
              
              <p className="mb-10 text-lg leading-relaxed text-gray-700">
                Our easy-to-use POS is designed specifically for restaurants, with table management, split bills, modifiers, 
                and tip management. The system works online and offline, ensuring uninterrupted service.
              </p>
              
              {/* Feature Cards with numbers and glass effect */}
              <div className="grid grid-cols-1 gap-4 mb-10">
                {features.map((feature, index) => (
                  <Card 
                    key={index} 
                    className="group bg-white/60 backdrop-blur-sm border border-blue-100 shadow-sm hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
                  >
                    <CardContent className="p-5 flex items-center gap-4">
                      {/* Number Badge */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {feature.number}
                      </div>
                      
                      {/* Icon */}
                      <div className="flex-shrink-0 p-3 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      
                      {/* Text */}
                      <span className="text-gray-900 font-medium text-base">{feature.text}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                get started for free
              </CustomCTAButton>
            </div>
          </div>
          
          {/* Image column with 3D effect */}
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="relative">
              {/* 3D Card Stack Effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
              
              <Card className="relative overflow-hidden border-2 border-blue-200/50 shadow-2xl rounded-2xl bg-white transform hover:scale-[1.02] transition-transform duration-500">
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Gradient Border Animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl blur-xl"></div>
                    
                    <div className="relative">
                      <AspectRatio ratio={16 / 9}>
                        <img 
                          src="/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png" 
                          alt="Cloud-Based POS Interface showing table management and order processing" 
                          className="w-full h-auto object-cover rounded-lg"
                          width={1200}
                          height={675}
                          loading="eager" 
                          fetchPriority="high"
                          decoding="sync"
                          style={{
                            transform: 'translateZ(0)'
                          }}
                        />
                      </AspectRatio>
                      
                      {/* Floating Badge */}
                      <div className="absolute bottom-6 right-6 bg-gradient-to-r from-blue-600 to-blue-700 backdrop-blur-sm text-white px-5 py-3 rounded-xl shadow-2xl text-sm font-semibold flex items-center gap-2 animate-float">
                        <Cloud className="h-4 w-4" />
                        Cloud-Powered POS
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,82,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,82,204,0.03)_1px,transparent_1px)] bg-[size:32px_32px] -z-10"></div>
    </section>
  );
};

export default HomePOSSection;
