
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Users, UserCheck, BarChart, Mail, Gift, Star } from 'lucide-react';
import CustomCTAButton from '@/components/CustomCTAButton';
import { Link } from 'react-router-dom';
const CRM = () => {
  const features = [{
    title: "Customer Profiles",
    description: "Build comprehensive profiles with preferences, allergies, birthdays, and visit history.",
    icon: UserCheck
  }, {
    title: "Loyalty Programs",
    description: "Create and manage custom loyalty programs with points, tiers, and special rewards.",
    icon: Gift
  }, {
    title: "Marketing Campaigns",
    description: "Design and execute targeted email and SMS campaigns to specific customer segments.",
    icon: Mail
  }, {
    title: "Customer Analytics",
    description: "Track customer acquisition, retention, and lifetime value with detailed analytics.",
    icon: BarChart
  }, {
    title: "Feedback Management",
    description: "Collect, analyze, and respond to customer feedback to improve service quality.",
    icon: Star
  }];
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="mb-6">
                <span className="bg-purple/10 text-purple px-4 py-2 rounded-full text-sm font-semibold">CUSTOMER RELATIONS</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-purple-light/30">
                  <Users className="text-purple h-6 w-6" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">Restaurant CRM</h1>
              </div>
              
              <p className="text-xl text-swirl-gray mb-8">
                Build lasting relationships with your customers. Our restaurant-specific CRM helps you understand guest preferences, reward loyalty, and deliver personalized experiences that turn first-time visitors into regular patrons.
              </p>
              
              <div className="flex gap-4">
                <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
                  Get Started For Free
                </CustomCTAButton>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <img alt="Customer relationship management" className="w-full h-[400px] object-cover rounded-xl shadow-lg" src="/lovable-uploads/72bc496f-dfad-4fef-a00b-a049a08c0700.png" />
            </div>
          </div>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Key CRM Features</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map(feature => <div key={feature.title} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 bg-purple-light/30 rounded-lg">
                      <feature.icon className="text-purple h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>)}
            </div>
          </section>

          <section className="mb-20">
            <div className="bg-gradient-to-r from-purple-light/20 to-blue-100/20 p-8 md:p-12 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Turn Guests into Regulars</h2>
                  <p className="text-lg text-swirl-gray mb-6">
                    In today's competitive restaurant industry, building customer loyalty is more important than ever. With Swirl's CRM system, you can:
                  </p>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-purple-light/30 mt-1">
                        <svg className="h-4 w-4 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg">Recognize returning customers and acknowledge their loyalty</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-purple-light/30 mt-1">
                        <svg className="h-4 w-4 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg">Send personalized offers based on ordering history</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-purple-light/30 mt-1">
                        <svg className="h-4 w-4 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg">Reward repeat business with points, discounts, and exclusive perks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-purple-light/30 mt-1">
                        <svg className="h-4 w-4 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-lg">Re-engage lapsed customers before they're gone for good</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" alt="Restaurant customers" className="rounded-xl shadow-lg" />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">How Our Restaurant CRM Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-purple-light/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Collect Data</h3>
                <p className="text-gray-600">Seamlessly gather customer information through reservations, online orders, and loyalty sign-ups.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-light/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Build Profiles</h3>
                <p className="text-gray-600">Create comprehensive customer profiles with preferences, history, and spending patterns.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-light/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Segment Customers</h3>
                <p className="text-gray-600">Group customers based on behavior, preferences, frequency, or spending for targeted marketing.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-light/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Engage & Reward</h3>
                <p className="text-gray-600">Send targeted communications and personalized offers that drive repeat visits and increase spending.</p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold mb-8 text-center">The Impact of Effective CRM</h2>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-purple text-4xl font-bold mb-2">25%</div>
                  <p className="text-lg font-medium">Increase in return visits from existing customers</p>
                </div>
                
                <div>
                  <div className="text-purple text-4xl font-bold mb-2">15%</div>
                  <p className="text-lg font-medium">Higher average spend from loyalty program members</p>
                </div>
                
                <div>
                  <div className="text-purple text-4xl font-bold mb-2">30%</div>
                  <p className="text-lg font-medium">More effective marketing with targeted campaigns</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your customer relationships?</h2>
            <p className="text-lg text-swirl-gray mb-8 max-w-3xl mx-auto">
              Join successful restaurants that use Swirl's CRM to build stronger customer relationships, increase repeat business, and boost revenue.
            </p>
            <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
              Get Started for Free
            </CustomCTAButton>
          </section>
        </div>
      </main>
      <Footer />
    </div>;
};
export default CRM;
