import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Monitor, Printer, Tablet, ScanLine, MonitorSmartphone, Tv, Shield, Zap, CheckCircle, ArrowRight, Sparkles, Clock, Wifi, Package, Building2, Headphones, Settings, CreditCard } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import CustomCTAButton from '@/components/CustomCTAButton';

const SwirlHardware = () => {
  useScrollAnimation();

  const hardwareProducts = [
    {
      icon: Tablet,
      title: 'Swirl POS Terminal',
      description: 'A fast, stable, and intuitive POS system built for high-volume restaurants.',
      features: ['Touch-friendly interface', 'Built for speed & peak hours', 'Works online & offline', 'Seamless integration']
    },
    {
      icon: Printer,
      title: 'High-Performance Printers',
      description: 'Reliable receipt and kitchen printers designed for continuous operations.',
      features: ['Fast thermal printing', 'Network & USB support', 'Durable for kitchen use', 'Auto-cut & low maintenance']
    },
    {
      icon: ScanLine,
      title: 'Scanner',
      description: 'Fast and accurate scanning for billing, inventory, and order workflows.',
      features: ['High-speed scanning', 'Barcode & QR support', 'Plug-and-play with Swirl POS']
    },
    {
      icon: Monitor,
      title: 'Kitchen Display Screen',
      description: 'Replace paper tickets with real-time digital order displays.',
      features: ['Live order flow from POS', 'Color-coded order status', 'Faster preparation']
    },
    {
      icon: Tv,
      title: 'Digital Menu Boards',
      description: 'High-impact digital menu displays fully synced with your Swirl menu.',
      features: ['Real-time menu updates', 'Dynamic pricing & promotions', 'Bright, high-resolution']
    }
  ];

  const kioskFeatures = [
    "Fully integrated with Swirl POS",
    "Upselling & modifiers supported",
    "Card & digital wallet ready",
    "Ideal for QSRs, food courts & high-traffic"
  ];

  const whySwirlHardware = [
    { icon: Building2, title: "Built for Restaurants", description: "Not retail — designed specifically for F&B operations" },
    { icon: Settings, title: "Fully Integrated", description: "Works seamlessly with Swirl software platform" },
    { icon: Shield, title: "Enterprise-Grade", description: "Reliable hardware that performs under pressure" },
    { icon: Headphones, title: "Easy Support", description: "Installation help and ongoing technical support" },
    { icon: Zap, title: "Scales With You", description: "From single outlet to large multi-location chains" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section - Premium */}
        <section className="pt-32 pb-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
          </div>

          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll max-w-4xl mx-auto">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <div className="px-4 py-2 bg-primary/5 rounded-full flex items-center gap-2 border border-primary/10">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-gray-700">Trusted by 1000+ Restaurants</span>
                </div>
                <div className="px-4 py-2 bg-primary/5 rounded-full flex items-center gap-2 border border-primary/10">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold text-gray-700">Enterprise Grade</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900">
                Hardware That Powers<br />
                <span className="text-primary">Every Restaurant Touchpoint</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
                From POS to kitchens to self-service — Swirl hardware is built to perform, scale, and integrate seamlessly with your operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="btn-conteiner scale-90">
                  <a 
                    className="btn-content" 
                    href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Swirl%20Hardware" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="btn-title">Book Demo</span>
                    <span className="icon-arrow">
                      <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                          <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                          <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                        </g>
                      </svg>
                    </span> 
                  </a>
                </div>
                <a 
                  href="#hardware-ecosystem" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  View Hardware Setup
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Hardware Ecosystem Section */}
        <section id="hardware-ecosystem" className="py-20 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Hardware Ecosystem</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                A Complete Suite of Restaurant-Grade Devices
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Designed to work flawlessly with the Swirl platform — reliable, fast, and built for real-world operations.
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {hardwareProducts.map((product, idx) => (
                <div 
                  key={idx} 
                  className={`animate-on-scroll animate-delay-${(idx % 3 + 1) * 100} group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
                >
                  <div className="w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Self-Ordering Kiosk - Premium Image Section */}
        <section className="py-20 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6 border border-primary/20">
                <MonitorSmartphone className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Self-Ordering Kiosk</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Self-Ordering Kiosk
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Reduce queues, increase order value, and give customers full control with Swirl self-ordering kiosks.
              </p>
            </div>

            {/* Kiosk Images Grid - Clean 2 Column Layout */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="animate-on-scroll animate-delay-100 group">
                <img 
                  src="/lovable-uploads/kiosk-2-2.webp" 
                  alt="Swirl Self-Ordering Kiosk on Stand" 
                  className="w-full h-auto rounded-xl hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="animate-on-scroll animate-delay-200 group">
                <img 
                  src="/lovable-uploads/kiosk-3.webp" 
                  alt="Swirl Wall-Mounted Kiosk" 
                  className="w-full h-auto rounded-xl hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </div>

            {/* Kiosk Features */}
            <div className="max-w-3xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                {kioskFeatures.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="animate-on-scroll flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Swirl Hardware Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Swirl Hardware?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {whySwirlHardware.map((item, idx) => (
                <div 
                  key={idx}
                  className={`animate-on-scroll animate-delay-${(idx % 5 + 1) * 100} group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center`}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                One Platform. One Hardware Ecosystem.<br />
                <span className="text-white/90">Total Control.</span>
              </h2>
              <p className="text-xl text-white/80 mb-10">
                Whether you're launching your first outlet or scaling across regions, Swirl hardware is designed to grow with you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="btn-conteiner scale-90">
                  <a 
                    className="btn-content" 
                    href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20book%20a%20demo%20for%20Swirl%20Hardware" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span className="btn-title">Book Demo</span>
                    <span className="icon-arrow">
                      <svg width="66px" height="43px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="arrow" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                          <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                          <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                        </g>
                      </svg>
                    </span> 
                  </a>
                </div>
                <a 
                  href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20get%20hardware%20pricing%20from%20Swirl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                >
                  Get Hardware Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SwirlHardware;
