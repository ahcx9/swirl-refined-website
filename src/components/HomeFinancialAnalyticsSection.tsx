
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HomeFinancialAnalyticsSection = () => {
  return (
    <section className="py-24 overflow-hidden relative bg-gradient-to-br from-blue-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-on-scroll">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" stroke="#1E67FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z" stroke="#3E8DFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" stroke="#1E67FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z" stroke="#3E8DFF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 13.01H12" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 13.01H12" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 13.01H7" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 13.01H7" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 17.01H12" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 17.01H12" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 17.01H7" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 17.01H7" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 7.01001H12" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 7.01001H12" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 7.01001H7" stroke="#1E67FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 7.01001H7" stroke="#3E8DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-blue-600 font-medium">Data-Driven Decisions for Restaurant Success</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Financial Reports</h2>
              
              <p className="text-blue-600/80 mb-6">
                Turn data into actionable insights with our comprehensive financial analytics tools. Track sales trends, 
                identify your most profitable items, monitor labor costs, and make informed decisions for your restaurant.
              </p>
              
              <ul className="space-y-3 mb-8">
                {['Real-time revenue tracking', 'Food & labor cost analysis', 'Menu performance insights', 'Customizable reporting', 'Profit & loss statements'].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-blue-600/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button asChild variant="default" size="lg">
                <Link to="/products/financial-reports" className="flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-10 bg-blue-100/30 rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-white p-3 rounded-xl shadow-xl">
                <img 
                  src="/lovable-uploads/cf8befbe-bdea-44aa-ae5a-485151bda759.png"
                  alt="Financial Analytics Dashboard"
                  className="w-full h-auto object-cover rounded-lg shadow-inner"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFinancialAnalyticsSection;
