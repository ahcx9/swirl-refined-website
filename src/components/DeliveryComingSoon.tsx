import React, { useState, useEffect } from 'react';
import { Truck, Clock, Zap, Smartphone, ArrowRight, Star, CheckCircle } from 'lucide-react';
const DeliveryComingSoon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentApp, setCurrentApp] = useState(0);
  const deliveryApps = [{
    name: "UberEats",
    color: "from-green-400 to-green-600",
    icon: "🚗"
  }, {
    name: "DoorDash",
    color: "from-red-400 to-red-600",
    icon: "🏠"
  }, {
    name: "Grubhub",
    color: "from-orange-400 to-orange-600",
    icon: "🍔"
  }, {
    name: "Postmates",
    color: "from-blue-400 to-blue-600",
    icon: "📦"
  }, {
    name: "Zomato",
    color: "from-pink-400 to-pink-600",
    icon: "🍽️"
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.3
    });
    const section = document.getElementById('delivery-coming-soon');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentApp(prev => (prev + 1) % deliveryApps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return <section id="delivery-coming-soon" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute animate-pulse" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`
      }}>
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${deliveryApps[i % deliveryApps.length].color} opacity-30`} />
          </div>)}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Truck className="absolute top-20 left-10 text-white/20 animate-bounce" size={40} style={{
        animationDelay: '0s'
      }} />
        <Smartphone className="absolute top-32 right-20 text-white/20 animate-bounce" size={35} style={{
        animationDelay: '1s'
      }} />
        <Zap className="absolute bottom-32 left-20 text-white/20 animate-bounce" size={30} style={{
        animationDelay: '2s'
      }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Main Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-4 mb-8">
            <Clock className="text-yellow-400 animate-spin" size={24} />
            <span className="text-white font-semibold text-lg">COMING SOON</span>
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{
              animationDelay: `${i * 0.3}s`
            }} />)}
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Delivery App
            </span>
            <br />
            <span className="text-white">Integrations</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolutionary one-click integration with all major delivery platforms. 
            <br className="hidden md:block" />
            Manage everything from one unified dashboard.
          </p>

          {/* Dynamic App Showcase */}
          <div className="mb-16">
            <div className="flex justify-center items-center space-x-4 mb-8">
              {deliveryApps.map((app, index) => <div key={app.name} className={`relative transition-all duration-500 ${index === currentApp ? 'scale-125 z-10' : 'scale-75 opacity-50'}`}>
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${app.color} flex items-center justify-center text-3xl shadow-2xl border-4 ${index === currentApp ? 'border-white' : 'border-transparent'}`}>
                    {app.icon}
                  </div>
                  {index === currentApp && <div className="absolute -top-2 -right-2">
                      <CheckCircle className="text-green-400 bg-gray-900 rounded-full" size={24} />
                    </div>}
                </div>)}
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
                <Star className="text-yellow-400" size={20} />
                <span className="text-white font-medium">Connecting to {deliveryApps[currentApp].name}</span>
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{
                  animationDelay: `${i * 0.2}s`
                }} />)}
                </div>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[{
            icon: Zap,
            title: "Instant Sync",
            desc: "Real-time order synchronization"
          }, {
            icon: Truck,
            title: "Unified Dashboard",
            desc: "Manage all platforms in one place"
          }, {
            icon: CheckCircle,
            title: "Smart Analytics",
            desc: "Cross-platform performance insights"
          }].map((feature, index) => <div key={index} className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transform transition-all duration-700 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{
            transitionDelay: `${index * 200}ms`
          }}>
                <feature.icon className="text-white mb-4 mx-auto" size={40} />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </div>)}
          </div>

          {/* CTA */}
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full px-8 py-4 shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 group cursor-pointer">
            <span className="text-white font-bold text-lg">Get Notified When We Launch</span>
            <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" size={24} />
          </div>

          {/* Launch Timeline */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-lg">Expected Launch: Q3 2025</p>
            <div className="mt-4 w-64 mx-auto bg-white/10 rounded-full h-3">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full w-3/4 relative">
                <div className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            <p className="text-white/60 text-sm mt-2">75% Complete</p>
          </div>
        </div>
      </div>
    </section>;
};
export default DeliveryComingSoon;