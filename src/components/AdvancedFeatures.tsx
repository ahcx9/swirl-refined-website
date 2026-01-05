
import React from 'react';
import { Globe, Currency } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useCurrency } from '@/hooks/useCurrency';

const AdvancedFeatures = () => {
  const { currency, availableCurrencies } = useCurrency();
  
  // Get top 5 currencies with user's detected currency first
  const topCurrencies = [
    currency, // User's detected currency first
    ...availableCurrencies.filter(c => c.code !== currency.code)
  ].slice(0, 5);

  return (
    <section className="py-16 bg-purple-light/5">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple/10 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 font-inter">Multi-Language Support</h3>
                  <p className="text-swirl-gray mb-4 font-inter">
                    Reach a global audience with our multi-language menu system. Support for 50+ languages
                    ensures every guest feels at home.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'العربية', '中文', 'Español', 'Français'].map((lang) => (
                      <span 
                        key={lang}
                        className="px-3 py-1 bg-purple/5 text-purple rounded-full text-sm font-inter"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple/10 p-3 rounded-lg">
                  <Currency className="h-6 w-6 text-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 font-inter">Multiple Currencies</h3>
                  <p className="text-swirl-gray mb-4 font-inter">
                    Accept payments in multiple currencies with real-time exchange rates. Simplify
                    international transactions for your customers.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {topCurrencies.map((curr, index) => (
                      <span 
                        key={curr.code}
                        className={`px-3 py-1 rounded-full text-sm font-inter ${
                          index === 0 
                            ? 'bg-primary/10 text-primary font-medium' 
                            : 'bg-purple/5 text-purple'
                        }`}
                      >
                        {curr.symbol} {curr.code}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
