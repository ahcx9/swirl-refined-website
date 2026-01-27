import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Play, 
  CreditCard, 
  ChefHat, 
  Package, 
  BarChart3,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { useCurrency } from '@/hooks/useCurrency';

const FinalCTAProductEntry: React.FC = () => {
  const { formatAmount } = useCurrency();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--primary) / 0.05) 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      {/* Floating dashboard elements in background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left dashboard card */}
        <div className="absolute top-20 -left-16 w-56 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg p-4 transform -rotate-12 opacity-50">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-primary" />
            </div>
            <span className="text-muted-foreground text-xs">Today's Sales</span>
          </div>
          <p className="text-xl text-foreground font-bold">{formatAmount(48250)}</p>
        </div>

        {/* Top right dashboard card */}
        <div className="absolute top-32 -right-8 w-48 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg p-4 transform rotate-6 opacity-50">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
              <ChefHat className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-muted-foreground text-xs">Kitchen Queue</span>
          </div>
          <p className="text-xl text-foreground font-bold">12 orders</p>
        </div>

        {/* Bottom left */}
        <div className="absolute bottom-28 -left-8 w-44 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg p-4 transform rotate-3 opacity-50">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
              <Package className="w-4 h-4 text-amber-600" />
            </div>
            <span className="text-muted-foreground text-xs">Stock</span>
          </div>
          <p className="text-lg text-foreground font-bold">98% accuracy</p>
        </div>

        {/* Bottom right */}
        <div className="absolute bottom-20 -right-16 w-48 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 shadow-lg p-4 transform -rotate-6 opacity-50">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-primary" />
            </div>
            <span className="text-muted-foreground text-xs">Reports</span>
          </div>
          <p className="text-lg text-foreground font-bold">Real-time</p>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Product Entry Card */}
          <div className="bg-white rounded-3xl border border-primary/20 overflow-hidden shadow-2xl shadow-primary/10 animate-on-scroll">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-blue-600 px-6 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
                <div className="w-3 h-3 rounded-full bg-white/30" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-white/80 text-sm">Launch Swirl</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10 text-center bg-gradient-to-br from-blue-50/30 to-white">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>

              {/* Headline */}
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Ready to transform
                <br />
                <span className="text-primary">your restaurant?</span>
              </h2>

              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Join 500+ restaurants already running on Swirl. Get a personalized demo and see why operators are making the switch.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <Link
                  to="/contact"
                  className="group flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  className="group flex items-center gap-2 px-7 py-3.5 bg-transparent border border-gray-200 text-foreground rounded-full font-medium hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <Play className="w-4 h-4 text-primary" />
                  Watch Product Tour
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Free setup assistance
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  24/7 support
                </span>
              </div>
            </div>
          </div>

          {/* Bottom tagline */}
          <p className="text-center text-muted-foreground mt-6 text-sm animate-on-scroll">
            Swirl — The operating system for modern restaurants
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTAProductEntry;