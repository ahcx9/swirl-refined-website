
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import Footer from '@/components/Footer';

const tiers = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small cafés and food trucks",
    features: [
      "Digital menu with QR codes",
      "Basic analytics",
      "Up to 100 orders per month",
      "1 staff account",
      "Email support"
    ]
  },
  {
    name: "Professional",
    price: "99",
    description: "Ideal for medium-sized restaurants",
    popular: true,
    features: [
      "Everything in Starter",
      "Inventory management",
      "Kitchen display system",
      "Up to 1,000 orders per month",
      "5 staff accounts",
      "Priority email & chat support"
    ]
  },
  {
    name: "Enterprise",
    price: "199",
    description: "For large restaurants and chains",
    features: [
      "Everything in Professional",
      "Advanced analytics & reports",
      "Full POS integration",
      "Unlimited orders",
      "Unlimited staff accounts",
      "24/7 priority support",
      "Dedicated account manager"
    ]
  }
];

const Pricing = () => {
  return (
    <>
      <div className="min-h-screen">
        <section className="pt-32 pb-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
              <p className="text-lg text-swirl-gray max-w-2xl mx-auto">
                Choose the plan that's right for your restaurant. All plans include our core features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tiers.map((tier) => (
                <div 
                  key={tier.name}
                  className={`border rounded-xl p-8 ${tier.popular 
                    ? 'border-purple shadow-lg relative bg-white' 
                    : 'border-gray-200 bg-white'}`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-purple text-white text-xs px-3 py-1 rounded-full font-medium">Most Popular</span>
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-swirl-gray text-sm mb-6">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-swirl-gray">/mo</span>
                  </div>
                  
                  <Button 
                    asChild 
                    className={`w-full mb-6 ${tier.popular ? 'bg-purple hover:bg-purple-dark' : ''}`}
                    variant={tier.popular ? "default" : "outline"}
                  >
                    <Link to="https://app.swirl.cx/register">Get Started</Link>
                  </Button>
                  
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center bg-gray-50 p-8 rounded-xl max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-swirl-gray mb-6">
                We offer tailored solutions for restaurant groups and franchises. Let's discuss your specific requirements.
              </p>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
