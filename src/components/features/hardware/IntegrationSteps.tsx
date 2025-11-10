import React from 'react';
import { Package, Plug, Settings, CheckCircle } from 'lucide-react';

const IntegrationSteps = () => {
  const steps = [
    {
      icon: Package,
      title: 'Unbox & Inspect',
      description: 'All hardware arrives pre-configured and ready to use',
      time: '5 min'
    },
    {
      icon: Plug,
      title: 'Connect & Power',
      description: 'Simple plug-and-play setup with clear instructions',
      time: '10 min'
    },
    {
      icon: Settings,
      title: 'Configure Settings',
      description: 'Customize your POS with our intuitive setup wizard',
      time: '10 min'
    },
    {
      icon: CheckCircle,
      title: 'Start Serving',
      description: 'You\'re ready to accept orders and payments!',
      time: '5 min'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg mb-6 border border-indigo-200">
            <CheckCircle className="h-4 w-4 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-900">Quick Setup Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
            Up and Running in 30 Minutes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our streamlined setup process gets you serving customers faster than ever
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200 -translate-y-1/2"></div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="animate-on-scroll" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="relative">
                  {/* Step number badge */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center text-sm font-bold shadow-lg z-10">
                    {idx + 1}
                  </div>

                  <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Time badge */}
                    <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-3">
                      {step.time}
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee badge */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl border border-green-200">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div className="text-left">
              <div className="font-bold text-foreground">Setup Guarantee</div>
              <div className="text-sm text-muted-foreground">Free on-site setup assistance available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSteps;
