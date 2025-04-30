
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-purple to-blue-500 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Restaurant?</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Join thousands of restaurants using Swirl to streamline operations, increase revenue, and delight customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple hover:bg-white/90">
              <Link to="https://app.swirl.cx/register">Start Your Free Trial</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10 group">
              <Link to="/contact" className="flex items-center">
                Schedule a Demo 
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
