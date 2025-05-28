import React from 'react';
import { QrCode, Clock, Dumbbell, Coffee, Utensils, Waves, Calendar, MapPin, Wifi, Car } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import CustomCTAButton from '@/components/CustomCTAButton';
const HotelIndustrySection = () => {
  const hotelServices = [{
    icon: Utensils,
    label: 'Room Service',
    time: '24/7',
    color: 'bg-orange-500'
  }, {
    icon: Coffee,
    label: 'Breakfast',
    time: '6:00 - 11:00',
    color: 'bg-amber-500'
  }, {
    icon: Dumbbell,
    label: 'Fitness Center',
    time: '5:00 - 23:00',
    color: 'bg-red-500'
  }, {
    icon: Waves,
    label: 'Spa & Wellness',
    time: '9:00 - 21:00',
    color: 'bg-blue-500'
  }, {
    icon: Car,
    label: 'Valet Parking',
    time: 'On Request',
    color: 'bg-gray-500'
  }, {
    icon: Wifi,
    label: 'Business Center',
    time: '24/7',
    color: 'bg-green-500'
  }];
  return <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 mb-6">
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">Revolutionizing Hotel Guest Experience</span>
          </div>
          
          <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight py-0 md:text-7xl">
            Transform Your Hotel with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 px-0 py-[9px]">
              Smart Digital Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empower your guests with seamless in-room ordering, instant access to hotel information, 
            and personalized experiences through our cutting-edge QR technology.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Guest Journey Flowchart */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Guest Experience Journey</h3>
              
              {/* Step 1 */}
              <div className="flex items-center gap-4 mb-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <QrCode className="text-white" size={28} />
                </div>
                <div className="flex-grow">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-100">
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">1. Scan QR Code</h4>
                    <p className="text-gray-600">Guests scan the unique QR code in their room</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center mb-6">
                <div className="w-0.5 h-8 bg-gradient-to-b from-blue-300 to-indigo-300"></div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-4 mb-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white" size={28} />
                </div>
                <div className="flex-grow">
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">2. Access Hotel Hub</h4>
                    <p className="text-gray-600">Instant access to all hotel services & information</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center mb-6">
                <div className="w-0.5 h-8 bg-gradient-to-b from-indigo-300 to-purple-300"></div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-4 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Utensils className="text-white" size={28} />
                </div>
                <div className="flex-grow">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">3. Order & Enjoy</h4>
                    <p className="text-gray-600">Place orders, book services, and enhance their stay</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Services Grid */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Available Services</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {hotelServices.map((service, index) => <Card key={index} className="group hover:scale-105 transition-all duration-300 border-0 shadow-md hover:shadow-xl bg-white/90 backdrop-blur-sm">
                    <CardContent className="p-4">
                      <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="text-white" size={24} />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">{service.label}</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-600">
                        <Clock size={12} />
                        <span>{service.time}</span>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>

            {/* Additional Features */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Plus Much More</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Real-time promotions & special offers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Local attractions & recommendations</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Instant customer support chat</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Multilingual support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Elevate Your Hotel Experience?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading hotels worldwide who have transformed their guest experience with Swirl's innovative digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab className="scale-100">
              Start Your Hotel Transformation
            </CustomCTAButton>
            
            <div className="flex items-center gap-2 text-gray-600">
              <span className="text-sm">✨ Free 30-day trial</span>
              <span className="text-sm">• No setup fees</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HotelIndustrySection;