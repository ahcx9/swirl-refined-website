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
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">AI-Powered Future</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Built for today.
            <br />
            <span className="text-primary">Ready for tomorrow.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Swirl isn't just software. It's an intelligent restaurant operating system that gets smarter every day.
          </p>
        </div>

        {/* AI Workspace */}
        <div className="max-w-5xl mx-auto animate-on-scroll">
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xl">
            {/* Header Bar */}
            <div className="bg-gradient-to-r from-primary to-blue-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                </div>
                <div className="w-px h-4 bg-white/20" />
                <Sparkles className="w-5 h-5 text-white" />
                <span className="text-white font-semibold">Swirl AI Intelligence</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white/80 text-xs">Learning from your data</span>
              </div>
            </div>

            {/* AI Features Grid */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-blue-50/30 to-white">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                {aiFeatures.map((feature, i) => (
                  <div 
                    key={i}
                    className="group bg-white rounded-2xl border border-gray-100 p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    {/* Icon and title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-foreground font-semibold">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm mt-0.5">{feature.description}</p>
                      </div>
                    </div>

                    {/* Preview card */}
                    <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{feature.preview.label}</p>
                      <p className="text-lg text-foreground font-bold">{feature.preview.value}</p>
                      <p className="text-xs text-primary mt-1">{feature.preview.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom AI Activity */}
              <div className="mt-8 bg-primary/5 rounded-2xl p-6 border border-primary/10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">Continuous Learning</p>
                      <p className="text-muted-foreground text-sm">Swirl AI analyzes 10,000+ data points daily to improve your operations</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Updated 2m ago</span>
                    </div>
                    <div className="flex items-center gap-1 text-green-600">
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
        <div className="mt-10 text-center animate-on-scroll">
          <p className="text-muted-foreground mb-6">
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
