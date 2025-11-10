import React from 'react';
import { CheckCircle, Zap, Shield, Clock } from 'lucide-react';

const HardwareShowcaseSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6 border border-purple-200">
            <Zap className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-900">Enterprise-Grade Hardware</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
            Complete POS Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for seamless restaurant operations, all in one beautifully designed system
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative animate-on-scroll">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20 blur-2xl"></div>
            <img 
              src="/lovable-uploads/pos-hardware-setup.png" 
              alt="Complete Swirl POS Hardware Setup" 
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
            
            {/* Floating feature badges */}
            <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-purple-100 animate-on-scroll">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-600" />
                <div>
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-blue-100 animate-on-scroll">
              <div className="flex items-center gap-2">
                <Clock className="h-6 w-6 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-xs text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-on-scroll">
            {[
              { icon: CheckCircle, title: 'iPad & Android Compatible', desc: 'Works seamlessly with your preferred devices' },
              { icon: Zap, title: 'Lightning Fast Setup', desc: 'Get up and running in under 30 minutes' },
              { icon: Shield, title: 'Military-Grade Security', desc: 'End-to-end encryption for all transactions' },
              { icon: Clock, title: '24/7 Technical Support', desc: 'Always here when you need assistance' }
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-white" />
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
