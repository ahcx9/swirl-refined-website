
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Receipt, ShoppingCart, DollarSign, ChefHat } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { preloadImage } from '@/utils/imagePreloader';

const HomePOSSection = () => {
  const features = [{
    icon: CreditCard,
    text: 'Real-time table management'
  }, {
    icon: Receipt,
    text: 'Customizable modifiers & combos'
  }, {
    icon: ShoppingCart,
    text: 'Check splitting & table transfers'
  }, {
    icon: DollarSign,
    text: 'Integrated payment processing'
  }, {
    icon: ChefHat,
    text: 'Kitchen display integration'
  }];

  // Preload the POS image
  useEffect(() => {
    const mainImage = "/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png";
    preloadImage({
      src: mainImage,
      priority: 'high'
    });
  }, []);
  
  return (
    <section className="py-16 overflow-hidden relative bg-white">
      <div className="container-custom relative">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content column */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="animate-on-scroll">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100 backdrop-blur-sm">
                <span className="text-blue-600 font-medium">Transform Your Restaurant Experience</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Point of Sale</h2>
              
              <p className="mb-8 text-lg leading-relaxed text-neutral-700">
                Our easy-to-use POS is designed specifically for restaurants, with table management, split bills, modifiers, 
                and tip management. The system works online and offline, ensuring uninterrupted service.
              </p>
              
              <div className="grid grid-cols-1 gap-3 mb-10">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-white/80 border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="p-2 rounded-full bg-blue-50">
                        <feature.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-amber-950">{feature.text}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg text-white">
                <a href="https://app.swirl.cx/register" className="flex items-center gap-2">
                  get started for free <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Image column */}
          <div className="md:col-span-7 order-1 md:order-2">
            <Card className="overflow-hidden border-0 shadow-xl rounded-2xl bg-white">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="perspective-1000">
                    <div className="transform transition-all duration-700 hover:scale-[1.02]">
                      <AspectRatio ratio={16 / 9}>
                        <img 
                          src="/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png" 
                          alt="Swirl POS Interface" 
                          className="w-full h-auto object-cover rounded-lg shadow-inner" 
                          loading="eager" 
                          fetchPriority="high" 
                          decoding="sync" 
                          style={{
                            transform: 'translateZ(0)'
                          }}
                        />
                      </AspectRatio>
                      
                      <div className="absolute bottom-4 right-4 bg-blue-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
                        Powerful & Easy to Use POS
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default HomePOSSection;
