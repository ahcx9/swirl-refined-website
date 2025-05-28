import React from 'react';
import { QrCode, Menu, ShoppingCart, ArrowRight, Smartphone, Eye, MousePointer } from 'lucide-react';
const StepProcess = () => {
  return <section className="py-20 md:py-24 flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 animate-on-scroll">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-500 bg-clip-text text-transparent">
            Your Guest's Journey
          </h2>
          <p className="text-gray-700 text-xl max-w-4xl mx-auto leading-relaxed">
            Transform dining into an effortless digital experience with our intuitive 3-step process
          </p>
        </div>
        
        {/* Interactive Flowchart */}
        <div className="relative max-w-7xl mx-auto">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 transform -translate-y-1/2">
            <div className="relative h-full">
              {/* Animated flowing line */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 rounded-full opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-full animate-pulse"></div>
              
              {/* Flow indicators */}
              <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-1/2">
                <ArrowRight className="text-blue-500 animate-bounce" size={24} />
              </div>
              <div className="absolute top-1/2 left-2/3 transform -translate-y-1/2 -translate-x-1/2">
                <ArrowRight className="text-teal-500 animate-bounce" size={24} style={{
                animationDelay: '0.5s'
              }} />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1 - Scan */}
            <div className="relative group">
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-purple-100">
                {/* Floating Icon Container */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <QrCode className="text-white" size={36} />
                  </div>
                  {/* Floating phone icon */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center animate-bounce">
                    <Smartphone className="text-purple-600" size={16} />
                  </div>
                  {/* Glowing effect */}
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-purple-400 opacity-20 animate-ping"></div>
                </div>
                
                {/* Step Number */}
                <div className="relative mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">01</span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Quick Scan</h3>
                <p className="text-gray-600 leading-relaxed">
                  Simply point your phone camera at the QR code on your table. No app downloads, no hassle - instant access to our interactive digital menu in seconds.
                </p>
                
                {/* Interactive Element */}
                <div className="mt-6 px-4 py-2 bg-purple-50 rounded-full text-purple-600 text-sm font-medium">
                  📱 Camera Ready!
                </div>
              </div>
              
              {/* Mobile Arrow */}
              <div className="lg:hidden flex justify-center mt-6">
                <ArrowRight className="text-blue-500 rotate-90" size={32} />
              </div>
            </div>
            
            {/* Step 2 - Browse */}
            <div className="relative group">
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-blue-100">
                {/* Floating Icon Container */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Menu className="text-white" size={36} />
                  </div>
                  {/* Floating eye icon */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center animate-bounce" style={{
                  animationDelay: '0.3s'
                }}>
                    <Eye className="text-blue-600" size={16} />
                  </div>
                  {/* Glowing effect */}
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-blue-400 opacity-20 animate-ping" style={{
                  animationDelay: '0.5s'
                }}></div>
                </div>
                
                {/* Step Number */}
                <div className="relative mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">02</span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Explore & Discover</h3>
                <p className="text-gray-600 leading-relaxed">
                  Browse our stunning digital menu with mouth-watering photos, detailed descriptions, nutritional info, and allergen details. Everything you need to make the perfect choice.
                </p>
                
                {/* Interactive Element */}
                <div className="mt-6 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium">
                  🍽️ Visual Menu
                </div>
              </div>
              
              {/* Mobile Arrow */}
              <div className="lg:hidden flex justify-center mt-6">
                <ArrowRight className="text-teal-500 rotate-90" size={32} />
              </div>
            </div>
            
            {/* Step 3 - Order */}
            <div className="relative group">
              <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-teal-100">
                {/* Floating Icon Container */}
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <ShoppingCart className="text-white" size={36} />
                  </div>
                  {/* Floating click icon */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center animate-bounce" style={{
                  animationDelay: '0.6s'
                }}>
                    <MousePointer className="text-teal-600" size={16} />
                  </div>
                  {/* Glowing effect */}
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-teal-400 opacity-20 animate-ping" style={{
                  animationDelay: '1s'
                }}></div>
                </div>
                
                {/* Step Number */}
                <div className="relative mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">03</span>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full"></div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Tap & Enjoy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Add items to your cart, customize your order, and place it directly from your device. Your order goes straight to the kitchen display system - no waiting for servers!
                </p>
                
                {/* Interactive Element */}
                <div className="mt-6 px-4 py-2 bg-teal-50 rounded-full text-teal-600 text-sm font-medium">
                  🚀 Instant Order
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default StepProcess;