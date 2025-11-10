import React from 'react';
import { CheckCircle, Zap, Shield, Clock } from 'lucide-react';

const HardwareShowcaseSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Complete POS Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for seamless restaurant operations, all in one beautifully designed system
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-on-scroll">
            <img 
              src="/lovable-uploads/pos-hardware-setup.png" 
              alt="Complete Swirl POS Hardware Setup" 
              className="rounded-2xl shadow-lg w-full h-auto"
            />
          </div>

          <div className="space-y-6 animate-on-scroll">
            {[
              { icon: CheckCircle, title: 'iPad & Android Compatible', desc: 'Works seamlessly with your preferred devices' },
              { icon: Zap, title: 'Lightning Fast Setup', desc: 'Get up and running quickly' },
              { icon: Shield, title: 'Military-Grade Security', desc: 'End-to-end encryption for all transactions' },
              { icon: Clock, title: '24/7 Technical Support', desc: 'Always here when you need assistance' }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareShowcaseSection;
