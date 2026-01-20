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

const FinalCTAProductEntry: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      {/* Background dashboard preview */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating dashboard elements in background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top left dashboard card */}
        <div className="absolute top-20 -left-20 w-64 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-4 transform -rotate-12 opacity-40">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-primary" />
            </div>
            <span className="text-gray-400 text-xs">Today's Sales</span>
          </div>
          <p className="text-2xl text-white font-bold">₹48,250</p>
        </div>

        {/* Top right dashboard card */}
        <div className="absolute top-32 -right-10 w-56 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-4 transform rotate-6 opacity-40">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
              <ChefHat className="w-4 h-4 text-green-400" />
            </div>
            <span className="text-gray-400 text-xs">Kitchen Queue</span>
          </div>
          <p className="text-2xl text-white font-bold">12 orders</p>
        </div>

        {/* Bottom left */}
        <div className="absolute bottom-32 -left-10 w-48 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-4 transform rotate-3 opacity-40">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
              <Package className="w-4 h-4 text-yellow-400" />
            </div>
            <span className="text-gray-400 text-xs">Stock</span>
          </div>
          <p className="text-lg text-white font-bold">98% accuracy</p>
        </div>

        {/* Bottom right */}
        <div className="absolute bottom-20 -right-20 w-52 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/30 p-4 transform -rotate-6 opacity-40">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-purple-400" />
            </div>
            <span className="text-gray-400 text-xs">Reports</span>
          </div>
          <p className="text-lg text-white font-bold">Real-time</p>
        </div>
      </div>

      {/* Main Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl opacity-50" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Product Entry Card */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-gray-700/50 overflow-hidden shadow-2xl animate-on-scroll">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-6 py-3 flex items-center gap-3 border-b border-gray-700/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-400 text-sm">Launch Swirl</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to transform
                <br />
                <span className="text-primary">your restaurant?</span>
              </h2>

              <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
                Join 500+ restaurants already running on Swirl. Get a personalized demo and see why operators are making the switch.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Link
                  to="/contact"
                  className="group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1"
                >
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button
                  className="group flex items-center gap-2 px-8 py-4 bg-transparent border border-gray-600 text-white rounded-full font-medium hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <Play className="w-4 h-4 text-primary" />
                  Watch Product Tour
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
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
          <p className="text-center text-gray-500 mt-8 text-sm animate-on-scroll">
            Swirl — The operating system for modern restaurants
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTAProductEntry;
