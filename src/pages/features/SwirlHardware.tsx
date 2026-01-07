import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Monitor, Printer, Shield, Zap, CheckCircle, ArrowRight, Sparkles, Wifi, Building2, Headphones, Settings, Receipt, Clock, ThermometerSun, Usb, Network, Gauge, Award, Layers } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SwirlHardware = () => {
  useScrollAnimation();

  const posFeatures = [
    { icon: Zap, title: "Lightning Fast", description: "Process orders in milliseconds, even during peak hours" },
    { icon: Wifi, title: "Offline Ready", description: "Continue operations seamlessly without internet" },
    { icon: Shield, title: "Enterprise Security", description: "End-to-end encryption and secure payments" },
    { icon: Layers, title: "Multi-Outlet Sync", description: "Real-time synchronization across all locations" }
  ];

  const posSpecs = [
    { title: "CPU", value: "Intel Alder Lake-N97 Quad-Core, Up to 3.60GHz" },
    { title: "Memory", value: "8G RAM + 128G ROM" },
    { title: "Operating System", value: "Windows 11" },
    { title: "Color", value: "Black / White" },
    { title: "Main Screen", value: "15.6 / 15.6 inch, Resolution 1920*1080" },
    { title: "Secondary Screen", value: "11.6-inch 1366*768 (A15P-W)" },
    { title: "Interface", value: "5× External USB, 1× HDMI | 1× COM (RS232), 1× RJ45, 1× Line Out, 1× Mic In" },
    { title: "Network Connection", value: "1000M Ethernet, Wi-Fi 2.4GHz / 5.0GHz, Bluetooth 5.0" },
    { title: "Speaker", value: "8W / 2Ω" },
    { title: "Power Adapter", value: "Output: 12V / 5A" },
    { title: "Package Size", value: "515mm x 315mm x 485mm" },
    { title: "Weight", value: "Package Weight: 6.98KG / 9.18KG" }
  ];

  const printerTypes = [
    {
      title: "Receipt Printer",
      description: "High-speed thermal printing for customer receipts",
      features: ["250mm/s print speed", "Auto-cutter", "80mm paper width", "USB + LAN connectivity"]
    },
    {
      title: "Kitchen Printer",
      description: "Durable printing designed for kitchen environments",
      features: ["Heat & moisture resistant", "Loud buzzer alerts", "Large font output", "Network enabled"]
    }
  ];

  const printerFeatures = [
    { icon: Gauge, title: "High Speed", description: "250mm/s thermal printing" },
    { icon: ThermometerSun, title: "Kitchen Grade", description: "Heat & moisture resistant" },
    { icon: Network, title: "Network Ready", description: "LAN + USB connectivity" },
    { icon: Clock, title: "Always On", description: "24/7 reliable operation" }
  ];

  const whySwirlHardware = [
    { icon: Building2, title: "Built for Restaurants", description: "Designed specifically for F&B operations, not retail" },
    { icon: Settings, title: "Fully Integrated", description: "Works seamlessly with Swirl software platform" },
    { icon: Shield, title: "Enterprise-Grade", description: "Reliable hardware that performs under pressure" },
    { icon: Headphones, title: "Easy Support", description: "Installation help and ongoing technical support" },
    { icon: Zap, title: "Scales With You", description: "From single outlet to large multi-location chains" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
          </div>

          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-on-scroll max-w-4xl mx-auto">
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
                Professional-grade POS terminals and printers built for high-volume restaurant operations.
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
                  href="#pos-section" 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Hardware
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ SWIRL POS SECTION ============ */}
        <section id="pos-section" className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
          </div>

          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6 border border-primary/10">
                <Monitor className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">Point of Sale Terminal</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Swirl POS Terminal
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A fast, stable, and intuitive POS system built for high-volume restaurants. Process orders seamlessly during peak hours.
              </p>
            </div>

            {/* POS Content Grid */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Image Placeholder */}
              <div className="animate-on-scroll animate-delay-100 order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl -z-10 scale-105" />
                  <img 
                    src="/lovable-uploads/swirl-pos-terminal.jpg" 
                    alt="Swirl POS Terminal" 
                    className="w-full rounded-3xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Features */}
              <div className="animate-on-scroll animate-delay-200 order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Restaurants Choose Swirl POS</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {posFeatures.map((feature, idx) => (
                    <div key={idx} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Specs Grid */}
            <div className="animate-on-scroll animate-delay-300 bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {posSpecs.map((spec, idx) => (
                  <div key={idx} className="p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <h5 className="text-white font-bold mb-2">{spec.title}</h5>
                    <p className="text-gray-300 text-sm">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============ PRINTER SECTION ============ */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
          </div>

          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16 animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6 border border-primary/10">
                <Printer className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">Professional Printing</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                High-Performance Printers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reliable receipt and kitchen printers designed for continuous operations. Fast, durable, and built to last.
              </p>
            </div>

            {/* Printer Features Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {printerFeatures.map((feature, idx) => (
                <div 
                  key={idx} 
                  className={`animate-on-scroll animate-delay-${(idx + 1) * 100} group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:bg-white hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center`}
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Printer Image & Types */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Single Printer Image */}
              <div className="animate-on-scroll animate-delay-100">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl -z-10 scale-105" />
                  <img 
                    src="/lovable-uploads/swirl-printers.png" 
                    alt="Swirl High-Performance Printers" 
                    className="w-full rounded-3xl"
                  />
                </div>
              </div>

              {/* Printer Types */}
              <div className="animate-on-scroll animate-delay-200 space-y-6">
                {printerTypes.map((printer, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{printer.title}</h3>
                    <p className="text-gray-600 mb-4">{printer.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {printer.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
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
                One Platform. Premium Hardware.<br />
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
                  href="https://wa.me/971543853877?text=Hi%2C%20I%20would%20like%20to%20get%20pricing%20for%20Swirl%20Hardware" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                >
                  Get Pricing
                  <ArrowRight className="w-5 h-5" />
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
