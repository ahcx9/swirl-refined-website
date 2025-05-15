
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, FileText, DollarSign, LineChart, FileBarChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const HomeFinancialAnalyticsSection = () => {
  const features = [{
    icon: BarChart,
    text: 'Real-time revenue tracking'
  }, {
    icon: FileText,
    text: 'Food & labor cost analysis'
  }, {
    icon: LineChart,
    text: 'Menu performance insights'
  }, {
    icon: FileBarChart,
    text: 'Profit & loss statements'
  }, {
    icon: DollarSign,
    text: 'Customizable reporting'
  }];
  
  return <section className="py-16 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-white -z-10"></div>
      
      <div className="container-custom relative">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content column */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="animate-on-scroll">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-100 backdrop-blur-sm">
                <span className="text-blue-600 font-medium">Data-Driven Decisions for Restaurant Success</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">Financial Reports</h2>
              
              <p className="mb-8 text-lg leading-relaxed text-neutral-700">
                Turn data into actionable insights with our comprehensive financial analytics tools. Track sales trends, 
                identify your most profitable items, monitor labor costs, and make informed decisions for your restaurant.
              </p>
              
              <div className="grid grid-cols-1 gap-3 mb-10">
                {features.map((feature, index) => <Card key={index} className="bg-white/80 border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="p-2 rounded-full bg-blue-50">
                        <feature.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <span className="text-amber-950">{feature.text}</span>
                    </CardContent>
                  </Card>)}
              </div>
              
              <Button asChild variant="default" size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg text-white">
                <a href="https://app.swirl.cx/register" className="flex items-center gap-2">
                  Get Started For Free <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Image column - significantly enlarged for better visibility and readability */}
          <div className="md:col-span-7 order-1 md:order-2">
            <Card className="overflow-hidden border-0 shadow-2xl rounded-2xl bg-gradient-to-br from-blue-600/5 to-indigo-600/10 mx-auto">
              <CardContent className="p-0">
                <AspectRatio ratio={16/9} className="overflow-hidden rounded-xl">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-indigo-600/5 rounded-xl"></div>
                    
                    <img 
                      alt="Financial Analytics Dashboard" 
                      loading="eager" 
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-full object-fill rounded-lg" 
                      src="/lovable-uploads/2e0f4208-a025-4a95-a266-cf5c3b63fb68.png" 
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        objectPosition: "center"
                      }}
                    />
                    
                    <div className="absolute bottom-6 right-6 bg-blue-500/90 backdrop-blur-sm text-white px-5 py-3 rounded-lg shadow-lg text-base font-medium">
                      Clear Financial Insights
                    </div>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl -z-10"></div>
    </section>;
};

export default HomeFinancialAnalyticsSection;
