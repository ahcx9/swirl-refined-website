import React from 'react';
import { Zap, Package, BarChart3, Smile, Heart } from 'lucide-react';

const benefits = [
  { icon: Zap, label: 'Faster orders' },
  { icon: Package, label: 'Accurate inventory' },
  { icon: BarChart3, label: 'Real-time reporting' },
  { icon: Smile, label: 'Happier guests' },
  { icon: Heart, label: 'Less stress' },
];

const WhySwirlSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Headline */}
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Running a restaurant is hard.
              <br />
              <span className="text-primary">Your software shouldn't be.</span>
            </h2>
          </div>

          {/* Pain Point */}
          <p className="animate-on-scroll animate-delay-100 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Juggling multiple tools, manual work and operational chaos slows your business down.
          </p>

          {/* Solution Statement */}
          <div className="animate-on-scroll animate-delay-200 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl py-6 px-8 inline-block">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              <span className="text-primary">swirl</span> brings everything together in one smart platform.
            </p>
          </div>

          {/* Benefits Strip */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 pt-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.label}
                className={`animate-on-scroll animate-delay-${(index + 3) * 100} flex items-center gap-2 bg-white border border-border/60 rounded-full px-5 py-3 shadow-sm hover:shadow-md hover:border-primary/30 hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm md:text-base font-medium text-foreground">{benefit.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySwirlSection;
