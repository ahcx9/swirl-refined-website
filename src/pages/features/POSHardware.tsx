import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Printer, 
  CreditCard, 
  Wifi, 
  Shield, 
  Settings, 
  Cloud, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const POSHardware = () => {
  const hardwareFeatures = [
    {
      icon: <Monitor className="h-8 w-8 text-blue-600" />,
      title: "Touch Screen Displays",
      description: "High-resolution touch screens with responsive interface for fast order processing and easy navigation."
    },
    {
      icon: <Printer className="h-8 w-8 text-blue-600" />,
      title: "Receipt Printers",
      description: "Fast thermal printers with reliable connectivity for kitchen tickets and customer receipts."
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "Payment Terminals",
      description: "Secure payment processing with support for cards, contactless, and mobile payments."
    },
    {
      icon: <Wifi className="h-8 w-8 text-blue-600" />,
      title: "Wireless Connectivity",
      description: "Seamless wireless integration with backup connectivity options for uninterrupted service."
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Security Features",
      description: "Built-in security protocols and encrypted data transmission for safe transactions."
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      title: "Easy Configuration",
      description: "Simple setup and configuration with remote management capabilities for multiple locations."
    }
  ];

  const benefits = [
    "Reduce order processing time by 40%",
    "Eliminate manual errors and improve accuracy",
    "Real-time inventory tracking and management",
    "Seamless integration with kitchen operations",
    "Comprehensive reporting and analytics",
    "24/7 cloud-based support and monitoring"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        {/* Hero Section */}
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-800">
                Professional <span className="text-gradient-blue">POS Hardware</span> Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
                Complete hardware ecosystem designed for modern restaurants. From touch screens to payment terminals, 
                we provide everything you need for seamless operations.
              </p>
              
              <div className="flex justify-center mb-12">
                <div className="btn-conteiner scale-90">
                  <a className="btn-content" href="https://app.swirl.cx/register" target="_blank" rel="noopener noreferrer">
                    <span className="btn-title">Get Your Hardware Quote</span>
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
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-20">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern POS Hardware Setup" 
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">Complete Hardware Ecosystem</h3>
                <p className="text-blue-100">Everything you need for a professional restaurant operation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware Features Grid */}
        <div className="bg-white py-16">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Enterprise-Grade <span className="text-gradient-blue">Hardware</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our hardware solutions are designed for the demanding environment of busy restaurants, 
                  ensuring reliability and performance when you need it most.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {hardwareFeatures.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                    <div className="flex items-center mb-4">
                      {feature.icon}
                      <h3 className="text-xl font-semibold text-gray-800 ml-3">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Integration Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <Cloud className="h-12 w-12 text-blue-200 mr-4" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                      Cloud-Powered Hardware
                    </h2>
                  </div>
                  <p className="text-xl text-blue-100 mb-8">
                    All our hardware solutions come with cloud integration, providing real-time monitoring, 
                    remote diagnostics, and automatic updates to keep your systems running smoothly.
                  </p>
                  
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-300 mr-3 flex-shrink-0" />
                        <span className="text-blue-100">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Cloud-integrated POS system" 
                    className="rounded-2xl shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center">
                      <Zap className="h-8 w-8 text-yellow-500 mr-2" />
                      <div>
                        <div className="font-semibold text-gray-800">99.9% Uptime</div>
                        <div className="text-sm text-gray-600">Guaranteed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hardware Showcase */}
        <div className="bg-gray-50 py-16">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  See Our Hardware in Action
                </h2>
                <p className="text-xl text-gray-600">
                  Professional-grade equipment designed for high-volume restaurant operations
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Touch screen POS terminal" 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-1">Touch Screen Terminals</h3>
                    <p className="text-blue-200">Responsive and intuitive interface</p>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Kitchen display system" 
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-bold text-white mb-1">Kitchen Display Systems</h3>
                    <p className="text-blue-200">Streamline kitchen operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white py-16">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Ready to Upgrade Your Restaurant Hardware?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get a personalized hardware recommendation and quote for your restaurant. 
                Our experts will help you choose the perfect setup for your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg">
                  <Link to="/contact">
                    <Monitor className="mr-2 h-5 w-5" />
                    Get Hardware Quote
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                  <a href="https://wa.me/971543853877" target="_blank" rel="noopener noreferrer">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default POSHardware;