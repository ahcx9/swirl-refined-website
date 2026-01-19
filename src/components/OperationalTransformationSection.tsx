import React from 'react';
import { Zap, Shield, Brain, Heart } from 'lucide-react';

const outcomes = [
  {
    icon: Zap,
    stat: '40%',
    label: 'Faster Operations',
    description: 'Streamlined workflows mean faster service, shorter wait times, and more covers per shift.',
  },
  {
    icon: Shield,
    stat: '30%',
    label: 'Tighter Control',
    description: 'Real-time inventory tracking and alerts prevent waste, theft, and stockouts.',
  },
  {
    icon: Brain,
    stat: 'Real-time',
    label: 'Smarter Decisions',
    description: 'Live dashboards and AI insights help you act on data, not gut feelings.',
  },
  {
    icon: Heart,
    stat: '2x',
    label: 'Guest Loyalty',
    description: 'Personalized experiences and smart loyalty programs drive repeat visits.',
  },
];

const OperationalTransformationSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6 animate-on-scroll">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-sm font-medium text-green-600">Measurable Results</span>
          </div>

          <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Transform operations.
            <br />
            <span className="text-primary">See the difference.</span>
          </h2>

          <p className="animate-on-scroll animate-delay-200 text-lg text-muted-foreground max-w-2xl mx-auto">
            Restaurants using Swirl consistently report dramatic improvements across 
            every key metric that matters to the bottom line.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.label}
              className={`animate-on-scroll animate-delay-${(index + 3) * 100} group text-center bg-white border border-gray-200 rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <outcome.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Stat */}
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {outcome.stat}
              </div>

              {/* Label */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {outcome.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust line */}
        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-sm text-muted-foreground">
            Based on aggregated data from Swirl-powered restaurants across the Middle East
          </p>
        </div>
      </div>
    </section>
  );
};

export default OperationalTransformationSection;
