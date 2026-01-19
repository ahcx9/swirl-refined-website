import React from 'react';
import { 
  Unplug, 
  PackageX, 
  Clock, 
  UserX, 
  FileWarning,
  TrendingDown
} from 'lucide-react';

const painPoints = [
  {
    icon: Unplug,
    title: 'Disconnected Systems',
    description: 'Your POS doesn\'t talk to inventory. Inventory doesn\'t talk to accounting. Nothing syncs.',
  },
  {
    icon: PackageX,
    title: 'Inventory Blind Spots',
    description: 'Stock disappears. Waste goes untracked. You only find out when it\'s too late.',
  },
  {
    icon: Clock,
    title: 'Slow Operations',
    description: 'Orders get lost between kitchen and table. Peak hours become chaos hours.',
  },
  {
    icon: UserX,
    title: 'Lost Customer Data',
    description: 'Your best customers walk in, and you have no idea who they are or what they love.',
  },
  {
    icon: FileWarning,
    title: 'Reporting Nightmares',
    description: 'Closing the day means hours of manual reconciliation across multiple platforms.',
  },
  {
    icon: TrendingDown,
    title: 'Profit Leaks',
    description: 'Margins shrink silently. By the time you notice, it\'s already cost you thousands.',
  },
];

const ProblemEmpathySection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6 animate-on-scroll">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-red-400">The Reality Check</span>
          </div>
          
          <h2 className="animate-on-scroll animate-delay-100 text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Your restaurant runs on chaos.
            <br />
            <span className="text-gray-400">It doesn't have to.</span>
          </h2>
          
          <p className="animate-on-scroll animate-delay-200 text-lg text-gray-400 max-w-2xl mx-auto">
            Every day, restaurant owners fight the same battles. Broken systems. Manual workarounds. 
            Decisions made on gut feeling instead of real data.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {painPoints.map((point, index) => (
            <div
              key={point.title}
              className={`animate-on-scroll animate-delay-${(index + 3) * 100} group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-red-500/30 hover:bg-gray-800/70 transition-all duration-300`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-6 h-6 text-red-400" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {point.description}
              </p>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-xl md:text-2xl text-gray-300 font-medium">
            Sound familiar? <span className="text-white">There's a better way.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemEmpathySection;
