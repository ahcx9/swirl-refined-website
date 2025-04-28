
import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { BarChart } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Analytics = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-purple-light/30">
                <BarChart className="text-purple h-6 w-6" />
              </div>
              <h1 className="text-4xl font-bold"> Our Analytics Dashboard</h1>
            </div>
            
            <p className="text-lg text-swirl-gray mb-8">
              Gain valuable insights about your business with our powerful analytics tools. Track sales, customer behavior, and menu performance in real-time with intuitive dashboards and detailed reporting.
            </p>

            <div className="mb-12">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                      alt="Analytics dashboard showing restaurant performance metrics"
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                      alt="Real-time data visualization tools"
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                      alt="Advanced reporting interface"
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Real-time Dashboards</h3>
                <p className="text-swirl-gray">Monitor your restaurant's performance with live updates and key metrics at a glance.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Custom Reports</h3>
                <p className="text-swirl-gray">Generate detailed reports tailored to your specific business needs.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Trend Analysis</h3>
                <p className="text-swirl-gray">Identify patterns and trends in your sales and customer behavior data.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Data Export</h3>
                <p className="text-swirl-gray">Export your data in multiple formats for further analysis and reporting.</p>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Acces Live Information</h3>
                <p className="text-swirl-gray">Our real-time analytics provide comprehensive insights into visitor trends, ordering patterns, and search behavior on your QR menu, empowering you to make data-driven decisions..</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;
