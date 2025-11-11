import React from 'react';
import { CheckCircle, Zap, Package, Clock } from 'lucide-react';
const HardwareShowcaseSection = () => {
  return <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">modern POS system for your restaurant/cafe</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for seamless restaurant operations, all in one beautifully designed system
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-on-scroll">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl blur-2xl opacity-20 scale-105"></div>
              
              {/* Image without white container */}
              <div className="relative">
                <img src="/lovable-uploads/swirl-pos-hardware.jpg" alt="Complete Swirl POS Hardware Setup" className="rounded-2xl shadow-2xl w-full max-w-xl h-auto mx-auto hover:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="font-bold text-sm">lightning fast billing with our POS</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-on-scroll">
            {[{
            icon: CheckCircle,
            title: 'Multi Screen Options Point-of-Sale',
            desc: 'Flexible display options for any restaurant size'
          }, {
            icon: Zap,
            title: 'Windows OS Compatible',
            desc: 'Full Windows OS support with enterprise features'
          }, {
            icon: Package,
            title: 'iPad Compatible',
            desc: 'Seamlessly works with iPad and iOS devices'
          }, {
            icon: Clock,
            title: '24/7 Technical Support',
            desc: 'Always here when you need assistance'
          }].map((feature, idx) => <div key={idx} className="flex gap-4 p-5 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default HardwareShowcaseSection;