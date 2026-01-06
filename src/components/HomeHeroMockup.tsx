import React from 'react';
import { useCurrency } from '@/hooks/useCurrency';
import { TrendingUp, TrendingDown, Sparkles, Clock, ChefHat, Package, DollarSign } from 'lucide-react';

const HomeHeroMockup: React.FC = () => {
  const { formatAmount } = useCurrency();

  return (
    <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] overflow-hidden rounded-2xl">
      {/* Keyframe Animations */}
      <style>{`
        @keyframes floatCard1 {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }
        @keyframes floatCard2 {
          0%, 100% { transform: translateY(0) rotate(2deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes floatCard3 {
          0%, 100% { transform: translateY(0) rotate(-1deg); }
          50% { transform: translateY(-6px) rotate(0deg); }
        }
        @keyframes floatCard4 {
          0%, 100% { transform: translateY(0) rotate(1deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        @keyframes clarityPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        @keyframes gentleBreathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }
      `}</style>

      {/* Layer 1: Background Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        {/* Warm ambient light */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        
        {/* Subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }} />

        {/* Manager silhouette - abstract shape on right */}
        <div className="absolute right-0 bottom-0 w-48 h-80 lg:w-64 lg:h-96 opacity-[0.04]">
          <div className="absolute bottom-0 right-8 w-12 h-12 lg:w-16 lg:h-16 bg-gray-800 rounded-full" />
          <div className="absolute bottom-12 lg:bottom-16 right-4 w-20 h-48 lg:w-24 lg:h-64 bg-gray-800 rounded-t-3xl" />
        </div>
      </div>

      {/* Layer 4: Chaos-to-Control Transition Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Chaos edge - left side subtle noise */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-red-500/[0.02] via-orange-500/[0.01] to-transparent" />
        
        {/* Clarity wave - radial pulse from center */}
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/10 via-primary/5 to-transparent"
          style={{ animation: 'clarityPulse 6s ease-in-out infinite' }}
        />
      </div>

      {/* Floating Cards - Layer 3 */}
      {/* Card 1: Smooth Orders - Top Left */}
      <div 
        className="hidden md:block absolute top-8 left-4 lg:left-8 z-10"
        style={{ animation: 'floatCard1 4s ease-in-out infinite' }}
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-xl p-3 shadow-lg shadow-gray-200/50 border border-white/50 w-36 lg:w-44">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
              <Clock className="w-3 h-3 text-green-600" />
            </div>
            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-gradient-to-r from-green-400 to-green-500 rounded-full" />
            </div>
          </div>
          <div className="space-y-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-green-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 text-green-500">✓</div>
                </div>
                <div className="flex-1 h-1.5 bg-gray-100 rounded-full">
                  <div className="h-full bg-gray-200 rounded-full" style={{ width: `${60 + i * 10}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card 2: Kitchen Flow - Top Right */}
      <div 
        className="hidden md:block absolute top-12 right-4 lg:right-8 z-10"
        style={{ animation: 'floatCard2 4.5s ease-in-out infinite' }}
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-xl p-3 shadow-lg shadow-gray-200/50 border border-white/50 w-36 lg:w-44">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center">
              <ChefHat className="w-3 h-3 text-amber-600" />
            </div>
            <span className="text-[10px] text-muted-foreground font-medium">All on track</span>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[
              { status: 'green', time: '2m' },
              { status: 'green', time: '4m' },
              { status: 'amber', time: '6m' },
              { status: 'green', time: '1m' },
              { status: 'green', time: '3m' },
              { status: 'green', time: '2m' },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`rounded p-1 text-center text-[8px] font-medium ${
                  item.status === 'green' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                }`}
              >
                {item.time}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card 3: Inventory Health - Bottom Left */}
      <div 
        className="hidden lg:block absolute bottom-16 left-8 z-10"
        style={{ animation: 'floatCard3 5s ease-in-out infinite' }}
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-xl p-3 shadow-lg shadow-gray-200/50 border border-white/50 w-44">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
              <Package className="w-3 h-3 text-primary" />
            </div>
            <span className="text-[10px] text-muted-foreground font-medium">Stock optimal</span>
          </div>
          <div className="flex items-end gap-1 h-12">
            {[85, 92, 78, 95, 88, 90, 94].map((val, i) => (
              <div key={i} className="flex-1 bg-gray-100 rounded-t-sm overflow-hidden">
                <div 
                  className={`w-full rounded-t-sm ${val > 85 ? 'bg-primary' : 'bg-primary/60'}`}
                  style={{ height: `${val}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card 4: Profit Clarity - Bottom Right */}
      <div 
        className="hidden lg:block absolute bottom-24 right-8 z-10"
        style={{ animation: 'floatCard4 3.5s ease-in-out infinite' }}
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-xl p-3 shadow-lg shadow-gray-200/50 border border-white/50 w-44">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
              <DollarSign className="w-3 h-3 text-green-600" />
            </div>
            <span className="text-[10px] text-green-600 font-medium flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +18% this week
            </span>
          </div>
          <svg className="w-full h-10" viewBox="0 0 100 30">
            <defs>
              <linearGradient id="profitGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 25 Q 15 22, 25 20 T 50 15 T 75 10 T 100 5"
              fill="none"
              stroke="#22c55e"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 0 25 Q 15 22, 25 20 T 50 15 T 75 10 T 100 5 L 100 30 L 0 30 Z"
              fill="url(#profitGradient)"
            />
          </svg>
        </div>
      </div>

      {/* Layer 2: Central Command Dashboard */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[90%] max-w-md lg:max-w-lg"
        style={{ animation: 'gentleBreathe 8s ease-in-out infinite' }}
      >
        <div className="bg-white/95 backdrop-blur-2xl rounded-2xl lg:rounded-3xl shadow-2xl shadow-primary/10 border border-white/80 overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-gradient-to-r from-primary to-blue-600 px-4 lg:px-6 py-3 lg:py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-white font-semibold text-sm lg:text-base">Restaurant Command Center</h3>
                <p className="text-white/70 text-[10px] lg:text-xs">Everything. One view.</p>
              </div>
              <div className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full bg-green-400"
                  style={{ animation: 'livePulse 2s ease-in-out infinite' }}
                />
                <span className="text-white/80 text-[10px] lg:text-xs font-medium">Live</span>
              </div>
            </div>
          </div>

          {/* Main Metrics Grid */}
          <div className="p-4 lg:p-6">
            <div className="grid grid-cols-3 gap-3 lg:gap-4 mb-4 lg:mb-6">
              {/* Revenue */}
              <div className="text-center">
                <div className="text-lg lg:text-2xl font-bold text-foreground">
                  {formatAmount(12847)}
                </div>
                <div className="text-[10px] lg:text-xs text-muted-foreground uppercase tracking-wide">Today's Revenue</div>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3 text-green-500" />
                  <span className="text-[10px] lg:text-xs text-green-600 font-medium">+12%</span>
                </div>
              </div>

              {/* Live Orders */}
              <div className="text-center border-x border-gray-100">
                <div className="text-lg lg:text-2xl font-bold text-foreground flex items-center justify-center gap-1">
                  23
                  <span 
                    className="w-2 h-2 rounded-full bg-green-400 inline-block"
                    style={{ animation: 'livePulse 1.5s ease-in-out infinite' }}
                  />
                </div>
                <div className="text-[10px] lg:text-xs text-muted-foreground uppercase tracking-wide">Live Orders</div>
                <div className="text-[10px] lg:text-xs text-muted-foreground mt-1">
                  <span className="text-amber-600">5 prep</span> · <span className="text-green-600">2 ready</span>
                </div>
              </div>

              {/* Food Cost */}
              <div className="text-center">
                <div className="text-lg lg:text-2xl font-bold text-foreground">28.4%</div>
                <div className="text-[10px] lg:text-xs text-muted-foreground uppercase tracking-wide">Food Cost</div>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <TrendingDown className="w-3 h-3 text-green-500" />
                  <span className="text-[10px] lg:text-xs text-green-600 font-medium">-2% vs avg</span>
                </div>
              </div>
            </div>

            {/* Stock Health & AI Insight Row */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {/* Stock Health */}
              <div className="bg-gray-50/80 rounded-xl p-3 lg:p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] lg:text-xs text-muted-foreground uppercase tracking-wide font-medium">Stock Health</span>
                  <span className="text-xs lg:text-sm font-semibold text-green-600">94%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
                    style={{ width: '94%' }}
                  />
                </div>
                <div className="text-[9px] lg:text-[10px] text-muted-foreground mt-1.5">
                  All items optimal
                </div>
              </div>

              {/* AI Insight */}
              <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-xl p-3 lg:p-4 border border-primary/10">
                <div className="flex items-center gap-1.5 mb-2">
                  <Sparkles className="w-3 h-3 lg:w-4 lg:h-4 text-primary" />
                  <span className="text-[10px] lg:text-xs text-primary uppercase tracking-wide font-medium">AI Insight</span>
                </div>
                <p className="text-[10px] lg:text-xs text-foreground leading-relaxed">
                  "Prep 2x Margherita for the expected 6pm rush"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Demo Label */}
      <div className="absolute top-4 right-4 z-30">
        <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-gray-100">
          <div 
            className="w-2 h-2 rounded-full bg-green-500"
            style={{ animation: 'livePulse 2s ease-in-out infinite' }}
          />
          <span className="text-[10px] lg:text-xs font-medium text-muted-foreground">Live Demo</span>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroMockup;
