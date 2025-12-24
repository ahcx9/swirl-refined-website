import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CustomCTAButton from '@/components/CustomCTAButton';
import { Zap, Shield, Headphones, Star, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
const POSCallToAction = () => {
  const {
    t
  } = useLanguage();
  useScrollAnimation();
  const trustBadges = [{
    icon: Zap,
    title: "Quick Setup",
    description: "Get started in under 5 minutes",
    delay: "animate-delay-100"
  }, {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your data is always protected",
    delay: "animate-delay-200"
  }, {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated team always ready",
    delay: "animate-delay-300"
  }];
  return <section className="relative py-16 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
      </div>
      
      <div className="relative bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl">
        {/* Floating Badge */}
        
        
        {/* Header */}
        <div className="text-center mb-10 pt-4">
          <h3 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Restaurant?
          </h3>
          <p className="animate-on-scroll animate-delay-100 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the power of a modern POS system that grows with your business
          </p>
        </div>
        
        {/* Trust Badges */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {trustBadges.map((badge, index) => <div key={index} className={`animate-on-scroll ${badge.delay} group bg-gray-50 hover:bg-primary/5 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-lg border border-transparent hover:border-primary/20`}>
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <badge.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-bold text-gray-900 mb-1">{badge.title}</h4>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>)}
        </div>
        
        {/* CTA Button */}
        <div className="animate-on-scroll animate-delay-400 text-center mb-8">
          <CustomCTAButton href="https://app.swirl.cx/register" openInNewTab>
            {t('cta.getStarted')}
          </CustomCTAButton>
        </div>
        
        {/* Testimonial */}
        <div className="animate-on-scroll animate-delay-500 flex items-center justify-center gap-2 text-center">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
          </div>
          <p className="text-gray-600 text-sm">
            <span className="font-medium">"Best POS we've ever used"</span>
            <span className="text-gray-400 mx-2">—</span>
            <span className="text-gray-500">Restaurant Owner</span>
          </p>
        </div>
      </div>
    </section>;
};
export default POSCallToAction;