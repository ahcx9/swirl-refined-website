import React from 'react';
import { Quote, MapPin, Building2, Star, CheckCircle, Globe } from 'lucide-react';

const testimonials = [
  {
    quote: "Swirl replaced 5 different tools we were juggling. Now everything just works.",
    author: "Rahul Sharma",
    role: "Owner, The Spice Route",
    location: "Mumbai",
    avatar: "RS"
  }, 
  {
    quote: "Our food cost dropped 12% in the first month. The inventory tracking is incredible.",
    author: "Ahmed Al-Rashid",
    role: "Operations Head, Bites & Beyond",
    location: "Dubai",
    avatar: "AR"
  }, 
  {
    quote: "Managing 8 outlets from one dashboard changed everything for us.",
    author: "Priya Nair",
    role: "Director, Café Collective",
    location: "Bangalore",
    avatar: "PN"
  }
];

const trustedLogos = [
  { name: 'Bombay Biryani', src: '/lovable-uploads/bombay-logo-new.png' },
  { name: 'Kaleda', src: '/lovable-uploads/kaleda-logo.png' },
  { name: 'Uccelli', src: '/lovable-uploads/uccelli-cafe-logo.jpeg' }
];

const regions = [
  { name: 'UAE', count: '150+' },
  { name: 'Saudi Arabia', count: '80+' },
  { name: 'India', count: '200+' },
  { name: 'GCC', count: 'Coming Soon' }
];

const TrustInterfaces: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }} 
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-5">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by Restaurants</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Real restaurants.
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Real results.
          </p>
        </div>

        {/* Testimonials in UI Frames */}
        <div className="grid md:grid-cols-3 gap-5 mb-12 animate-on-scroll">
          {testimonials.map((testimonial, i) => (
            <div 
              key={i}
              className="group bg-white rounded-2xl border border-gray-100 p-5 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              {/* Quote */}
              <div className="flex items-start gap-3 mb-4">
                <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground leading-relaxed text-sm">
                  "{testimonial.quote}"
                </p>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-primary font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
                <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted Logos */}
        <div className="text-center mb-10 animate-on-scroll">
          <p className="text-sm text-muted-foreground mb-5">Trusted by leading restaurants</p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {trustedLogos.map((logo, i) => (
              <div 
                key={i}
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img 
                  src={logo.src} 
                  alt={logo.name}
                  className="h-10 md:h-12 w-auto object-contain"
                  width={120}
                  height={48}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Coverage */}
        <div className="animate-on-scroll">
          <div className="bg-gradient-to-r from-blue-50 to-white rounded-2xl border border-blue-100 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">Global Presence</p>
                  <p className="text-sm text-muted-foreground">Serving restaurants across regions</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {regions.map((region, i) => (
                  <div key={i} className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-primary">{region.count}</p>
                    <p className="text-xs text-muted-foreground">{region.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustInterfaces;