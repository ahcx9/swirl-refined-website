import React from 'react';
import { Monitor, Printer, Laptop, Scan, Square, Tv } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CustomCTAButton from '@/components/CustomCTAButton';
const HomeHardwareSection = () => {
  const hardwareFeatures = [{
    icon: Monitor,
    title: "Point-of-Sale Systems",
    description: "Advanced POS terminals with touchscreen interfaces"
  }, {
    icon: Printer,
    title: "Thermal Printers",
    description: "High-speed receipt and kitchen ticket printing"
  }, {
    icon: Laptop,
    title: "Kitchen Display Screens",
    description: "Real-time order tracking for kitchen staff"
  }, {
    icon: Square,
    title: "Self-Service Kiosks",
    description: "Customer-facing ordering kiosks"
  }, {
    icon: Scan,
    title: "Barcode Scanners",
    description: "Fast and accurate inventory scanning"
  }, {
    icon: Tv,
    title: "Menu Display Screens",
    description: "Digital menu boards for customer viewing"
  }];
  return <section className="py-16 overflow-hidden relative bg-white">
      <div className="container-custom relative">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image column */}
          <div className="md:col-span-5 order-1 md:order-1">
            <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl bg-white mx-auto">
              <CardContent className="p-0">
                <div className="relative">
                  <img src="/lovable-uploads/pos-hardware-setup.png" alt="swirl Complete Hardware Setup" className="w-full max-h-[450px] rounded-xl object-cover object-[center_30%]" loading="lazy" decoding="async" style={{
                  transform: 'translateZ(0)',
                  willChange: 'transform'
                }} />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-swirl-blue/10 rounded-full blur-3xl"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content column */}
          <div className="md:col-span-7 order-2 md:order-2">
            <div className="animate-on-scroll">
              <div className="inline-block px-4 py-2 bg-blue-50 text-swirl-blue rounded-full text-sm font-semibold mb-4 border border-blue-100">fast pos system</div>
              
              <h2 className="text-4xl mb-6 font-inter text-slate-950 font-bold md:text-5xl">swirl Hardware Solutions</h2>
              
              <p className="text-xl text-gray-600 mb-8 font-inter leading-relaxed">
                Professional restaurant hardware designed to work seamlessly with swirl POS software. 
                From touchscreen terminals to kitchen displays, we provide everything you need.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-3 mb-10">
                {hardwareFeatures.map((feature, index) => <Card key={index} className="bg-white border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-swirl-blue" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 text-base">{feature.title}</h4>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>

              <CustomCTAButton href="/products/swirl-hardware" className="scale-90">
                get started for free
              </CustomCTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HomeHardwareSection;