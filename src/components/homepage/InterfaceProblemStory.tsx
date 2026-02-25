import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CreditCard, 
  MessageSquare, 
  FileSpreadsheet, 
  BarChart2, 
  ChefHat,
  AlertTriangle,
  Wifi,
  Clock,
  Calculator,
  Users,
  Package,
  Phone,
  XCircle,
  ArrowRight,
  Zap
} from 'lucide-react';

const problems = [
  {
    icon: Wifi,
    headline: 'Disconnected Systems',
    description: 'POS, kitchen, inventory, and accounting all running on different tools that never sync.',
    detail: '5+ tools, zero integration. Data falls through the cracks every single day.',
    color: 'from-red-500 to-orange-500',
    glowColor: 'shadow-red-500/20',
  },
  {
    icon: FileSpreadsheet,
    headline: 'Double Entry Errors',
    description: 'Manual data entry across spreadsheets, paper tickets, and WhatsApp messages.',
    detail: 'Your staff spends 2+ hours daily re-entering data that should flow automatically.',
    color: 'from-orange-500 to-amber-500',
    glowColor: 'shadow-orange-500/20',
  },
  {
    icon: BarChart2,
    headline: 'Zero Visibility',
    description: 'No real-time view of revenue, costs, or margins. Reports are always outdated.',
    detail: 'You\'re making decisions based on data that\'s 3 days old. In hospitality, that\'s a lifetime.',
    color: 'from-purple-500 to-violet-500',
    glowColor: 'shadow-purple-500/20',
  },
  {
    icon: Calculator,
    headline: 'Manual Reconciliation',
    description: 'End-of-day takes hours. Cash doesn\'t match. Aggregator payments are a mystery.',
    detail: 'Your accountant is reconciling payments from 6 different sources — manually.',
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'shadow-blue-500/20',
  },
  {
    icon: Users,
    headline: 'Lost Customer Data',
    description: 'No guest history. No loyalty tracking. Every customer feels like a first-timer.',
    detail: 'Your best customers walk in and nobody remembers their name or their favorite order.',
    color: 'from-pink-500 to-rose-500',
    glowColor: 'shadow-pink-500/20',
  },
  {
    icon: Package,
    headline: 'Inventory Blindspot',
    description: 'Stock levels are guesses. Wastage is unknown. Margins are a mystery.',
    detail: 'You only discover you\'re out of stock when a customer orders it.',
    color: 'from-emerald-500 to-teal-500',
    glowColor: 'shadow-emerald-500/20',
  },
];

const InterfaceProblemStory: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#0a0f1a]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium text-red-400">The Reality Today</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Too many tools.{' '}
            <span className="text-red-400">No control.</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            This is what running a restaurant looks like without Swirl. Sound familiar?
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-2xl p-6 cursor-default transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-2 ${problem.glowColor} hover:shadow-2xl`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-5 shadow-lg`}>
                <problem.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-4 h-4 text-red-400/70" />
                  <h3 className="text-lg font-bold text-white">{problem.headline}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-3">
                  {problem.description}
                </p>
                
                {/* Hover reveal - deeper detail */}
                <div className={`overflow-hidden transition-all duration-500 ${hoveredCard === index ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-3 border-t border-white/10">
                    <p className="text-white/40 text-xs leading-relaxed italic">
                      {problem.detail}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r ${problem.color} opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground font-semibold rounded-full hover:shadow-2xl hover:shadow-white/10 hover:-translate-y-1 transition-all duration-300"
          >
            <Zap className="w-5 h-5 text-primary" />
            There's a better way
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InterfaceProblemStory;
