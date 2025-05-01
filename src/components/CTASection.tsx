
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-purple-dark to-purple-dark/90 rounded-3xl overflow-hidden">
          <div className="relative px-6 py-16 md:p-16">
            {/* Background pattern */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="absolute -right-10 -top-10 w-72 h-72 bg-white rounded-full"></div>
              <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Restaurant Experience?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Join thousands of restaurants already using swirl.cx to streamline operations, 
                delight customers, and boost their bottom line.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-white text-purple-dark hover:bg-gray-100 shadow-lg text-base">
                  <Link to="/contact">Get our Trial free for 14 days!</Link>
                </Button>
                <Button asChild className="bg-transparent border border-white text-white hover:bg-white/10 text-base">
                  <Link to="/contact">View Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
