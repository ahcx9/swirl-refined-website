import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';
import { Calendar, DollarSign, Briefcase, Clock, FileText, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
const PayrollManagement = () => {
  const features = [{
    title: "Time Tracking",
    description: "Accurate time tracking with digital clock-in/out system that eliminates manual time cards and reduces errors.",
    icon: Clock
  }, {
    title: "Tax Calculations",
    description: "Automated tax calculations and deductions processing to ensure compliance with local, state, and federal regulations.",
    icon: DollarSign
  }, {
    title: "Direct Deposit",
    description: "Secure and timely direct deposit payments for employees with automatic processing and digital pay stubs.",
    icon: Briefcase
  }, {
    title: "Compliance Reporting",
    description: "Stay compliant with automatic reporting and documentation for all payroll and tax-related requirements.",
    icon: FileText
  }, {
    title: "Employee Self-Service",
    description: "Empower employees to access their pay information, tax documents, and submit time-off requests.",
    icon: Users
  }, {
    title: "Data Security",
    description: "Enterprise-grade security to protect sensitive payroll information and employee data.",
    icon: Shield
  }];
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-full bg-purple-light/30">
                <Calendar className="text-purple h-6 w-6" />
              </div>
              <h1 className="text-4xl font-bold">Payroll Management</h1>
            </div>
            
            <p className="text-lg text-swirl-gray mb-12">
              Simplify your restaurant's payroll process with our comprehensive payroll management system. Handle time tracking, tax calculations, and direct deposits efficiently while ensuring compliance with all regulations.
            </p>

            <div className="bg-gradient-to-br from-purple-light/20 to-white mb-16 p-8 rounded-2xl">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <img alt="Payroll management handshake" className="w-full h-auto rounded-lg shadow-md object-cover" src="/lovable-uploads/cf8ec88c-d51e-4941-b048-05cdb833c48b.jpg" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-2xl font-semibold mb-4">Streamline Your Payroll Operations</h2>
                  <p className="mb-4">
                    Our payroll management solution reduces the time spent on administrative tasks by up to 80%, allowing you to focus on what matters most—running your restaurant and serving your customers.
                  </p>
                  <Button asChild className="self-start btn-primary">
                    <Link to="/contact">Schedule a Demo</Link>
                  </Button>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-semibold mb-8 text-center">Comprehensive Payroll Features</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {features.map(feature => <Card key={feature.title} className="border border-gray-100 shadow-soft">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-light/20 rounded-full">
                        <feature.icon className="h-5 w-5 text-purple" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-swirl-gray">{feature.description}</p>
                  </CardContent>
                </Card>)}
            </div>

            <div className="bg-purple-light/10 rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-semibold mb-6 text-center">Why Restaurant Owners Choose Our Payroll Solution</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple mb-2">95%</div>
                  <p className="text-swirl-gray">Reduction in payroll errors</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple mb-2">8+ hrs</div>
                  <p className="text-swirl-gray">Saved per week on admin work</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple mb-2">100%</div>
                  <p className="text-swirl-gray">Tax compliance guaranteed</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Ready to simplify your restaurant payroll?</h2>
              <p className="mb-6">Join thousands of restaurant owners who trust our platform for their payroll needs.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="btn-primary">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/products">View All Solutions</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default PayrollManagement;