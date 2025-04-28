
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LayoutDashboard } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FinancialReports = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-purple-light/30">
                <LayoutDashboard className="text-purple h-6 w-6" />
              </div>
              <h1 className="text-4xl font-bold">Financial Reports</h1>
            </div>
            
            <p className="text-lg text-swirl-gray mb-8">
              Comprehensive financial reporting tools to track your restaurant's performance. Get detailed P&L statements, cost analysis, and accurate forecasting to make data-driven decisions.
            </p>

            <div className="mb-12">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                      alt="Financial dashboard interface"
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c" 
                      alt="Financial reporting tools"
                      className="w-full h-[400px] object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1554224154-26032ffc0d07" 
                      alt="Business analytics dashboard"
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
                <h3 className="text-xl font-semibold mb-4">P&L Statements</h3>
                <p className="text-swirl-gray">Generate detailed profit and loss statements with customizable date ranges.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Cost Analysis</h3>
                <p className="text-swirl-gray">Track and analyze all your costs to optimize your restaurant's profitability.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Tax Reporting</h3>
                <p className="text-swirl-gray">Simplify tax season with automated tax report generation and calculations.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Financial Forecasting</h3>
                <p className="text-swirl-gray">Make informed decisions with AI-powered financial forecasting tools.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FinancialReports;
