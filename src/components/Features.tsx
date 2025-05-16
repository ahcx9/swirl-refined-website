
import React from 'react';
import { LayoutDashboard, ShoppingCart, BarChart, CreditCard, Users, Package, Car, Calendar, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const features = [{
  id: 'digital-menu',
  title: 'Digital Menu',
  description: 'Interactive digital menus with real-time updates.',
  icon: FileText,
  path: '/products/digital-menu'
}, {
  id: 'qr-ordering',
  title: 'QR Ordering',
  description: 'Contactless ordering for seamless dining experience.',
  icon: ShoppingCart,
  path: '/products/qr-ordering'
}, {
  id: 'analytics',
  title: 'Analytics',
  description: 'Gain valuable insights about your business.',
  icon: BarChart,
  path: '/products/restaurant-analytics'
}, {
  id: 'pos',
  title: 'POS System',
  description: 'Modern point-of-sale for restaurant needs.',
  icon: CreditCard,
  path: '/products/restaurant-point-of-sale'
}, {
  id: 'reports',
  title: 'Financial Reports',
  description: "Comprehensive performance tracking.",
  icon: LayoutDashboard,
  path: '/products/financial-reports'
}, {
  id: 'crm',
  title: 'CRM',
  description: 'Build loyalty and drive repeat business.',
  icon: Users,
  path: '/products/customer-relationship-management'
}, {
  id: 'car-ordering',
  title: 'Car Ordering',
  description: 'Order from vehicles for pickup or drive-through.',
  icon: Car,
  path: '/products/ordering-from-car'
}, {
  id: 'payroll',
  title: 'Payroll Management',
  description: 'Streamline staff payments and labor costs.',
  icon: Calendar,
  path: '/products/payroll-management'
}, {
  id: 'inventory',
  title: 'Inventory Management',
  description: 'Track stock and optimize purchasing.',
  icon: Package,
  path: '/products/inventory-management'
}];
const Features = () => {
  return <section id="features" className="py-20 md:py-28 flex items-center bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-gray-950">
            Solutions for Modern Restaurants
          </h2>
          <p className="text-base md:text-lg text-swirl-gray max-w-2xl mx-auto mb-10">
            Our integrated suite of tools helps you manage every aspect of your restaurant efficiently.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:gap-6">
          {features.map(feature => <Link to={feature.path} key={feature.id} className="bg-gradient-to-br from-white to-blue-50/60 rounded-xl shadow-sm hover:shadow-xl p-4 transition-all duration-300 hover:-translate-y-1 border border-blue-100/20 group flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100/80 to-indigo-100/80 flex items-center justify-center mb-3 group-hover:bg-gradient-to-br group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                <feature.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-base md:text-lg font-medium mb-2 group-hover:text-blue-700 transition-colors">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-500">{feature.description}</p>
            </Link>)}
        </div>
        
        <div className="text-center mt-10">
          <div className="btn-conteiner scale-110 mt-8">
            <a className="btn-content" href="https://app.swirl.cx/register" target="_blank" rel="noopener noreferrer">
              <span className="btn-title">Get Started For Free</span>
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
    </section>;
};
export default Features;
