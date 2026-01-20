import React from 'react';
import { 
  Sparkles, 
  Brain, 
  TrendingUp, 
  Bell, 
  BarChart3,
  Zap,
  Clock,
  Target,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const aiFeatures = [
  {
    icon: TrendingUp,
    title: 'Demand Forecasting',
    description: 'Predict busy periods. Staff smart. Stock right.',
    preview: {
      label: 'Tomorrow\'s Prediction',
      value: 'Peak at 7-9 PM',
      subtext: '+32% vs normal'
    }
  },
  {
    icon: Bell,
    title: 'Smart Alerts',
    description: 'Real-time notifications before problems happen.',
    preview: {
      label: 'Active Alert',
      value: 'Low Stock: Paneer',
      subtext: 'Reorder recommended'
    }
  },
  {
    icon: Brain,
    title: 'Menu Intelligence',
    description: 'Know what sells. Cut what doesn\'t. Maximize margins.',
    preview: {
      label: 'Top Performer',
      value: 'Butter Chicken',
      subtext: '68% margin, 45 orders/day'
    }
  },
  {
    icon: Target,
    title: 'Growth Insights',
    description: 'Personalized recommendations to grow revenue.',
    preview: {
      label: 'Opportunity',
      value: 'Add combo deals',
      subtext: 'Est. +18% revenue'
    }
  },
];

const FutureSwirlAI: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-950 to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">AI-Powered Future</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for today.
            <br />
            <span className="text-primary">Ready for tomorrow.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Swirl isn't just software. It's an intelligent restaurant operating system that gets smarter every day.
          </p>
        </div>

        {/* AI Workspace */}
        <div className="max-w-5xl mx-auto animate-on-scroll">
          <div className="bg-gray-800/40 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl">
            {/* Header Bar */}
            <div className="bg-gradient-to-r from-primary/20 to-blue-600/20 px-6 py-4 flex items-center justify-between border-b border-gray-700/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary/50" />
                  <div className="w-3 h-3 rounded-full bg-primary/50" />
                  <div className="w-3 h-3 rounded-full bg-primary/50" />
                </div>
                <div className="w-px h-4 bg-gray-700" />
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-white font-semibold">Swirl AI Intelligence</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-gray-400 text-xs">Learning from your data</span>
              </div>
            </div>

            {/* AI Features Grid */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {aiFeatures.map((feature, i) => (
                  <div 
                    key={i}
                    className="group bg-gray-900/50 rounded-2xl border border-gray-700/50 p-5 hover:border-primary/40 hover:bg-gray-800/50 transition-all duration-500"
                  >
                    {/* Icon and title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{feature.title}</h3>
                        <p className="text-gray-400 text-sm mt-0.5">{feature.description}</p>
                      </div>
                    </div>

                    {/* Preview card */}
                    <div className="bg-gray-800/80 rounded-xl p-4 border border-gray-700/50">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{feature.preview.label}</p>
                      <p className="text-lg text-white font-bold">{feature.preview.value}</p>
                      <p className="text-xs text-primary mt-1">{feature.preview.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom AI Activity */}
              <div className="mt-8 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-2xl p-6 border border-primary/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Continuous Learning</p>
                      <p className="text-gray-400 text-sm">Swirl AI analyzes 10,000+ data points daily to improve your operations</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Updated 2m ago</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-400">
                      <Zap className="w-4 h-4" />
                      <span>Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-12 text-center animate-on-scroll">
          <p className="text-gray-400 mb-6">
            Swirl is not just another tool. It's the operating system for the modern restaurant.
          </p>
          <Link
            to="/features/visitor-analytics"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Explore AI features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FutureSwirlAI;
