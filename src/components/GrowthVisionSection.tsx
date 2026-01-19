import React from 'react';
import { Sparkles, TrendingUp, Globe2, Brain } from 'lucide-react';

const visions = [
  {
    icon: Sparkles,
    title: 'AI Automation',
    description: 'From predictive ordering to smart staffing, let AI handle the operational heavy lifting.',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Insights',
    description: 'Demand forecasting, trend analysis, and recommendations that help you stay ahead.',
  },
  {
    icon: Globe2,
    title: 'Enterprise Expansion',
    description: 'Multi-country, multi-currency, multi-language support built for global growth.',
  },
  {
    icon: Brain,
    title: 'Intelligent Management',
    description: 'The future of restaurant operations: self-optimizing, always learning, always improving.',
  },
];

const GrowthVisionSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6 animate-on-scroll">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Future is Here</span>
          </div>

          <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Built for today.
            <br />
            <span className="text-primary">Ready for tomorrow.</span>
          </h2>

          <p className="animate-on-scroll animate-delay-200 text-lg text-gray-400 max-w-2xl mx-auto">
            Swirl isn't just keeping up with the future of hospitality — we're building it.
            Your operating system evolves with the industry.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {visions.map((vision, index) => (
            <div
              key={vision.title}
              className={`animate-on-scroll animate-delay-${(index + 3) * 100} group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-primary/30 hover:bg-gray-800/70 transition-all duration-300`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <vision.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {vision.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {vision.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-xl md:text-2xl text-white font-medium">
            Your restaurant deserves an operating system
            <br className="hidden md:block" />
            <span className="text-primary"> that grows with you.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrowthVisionSection;
