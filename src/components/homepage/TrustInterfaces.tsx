import React from 'react';
import { 
  Quote, 
  MapPin, 
  Building2,
  Star,
  CheckCircle
} from 'lucide-react';

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
  },
];

const trustedLogos = [
  { name: 'Bombay Biryani', src: '/lovable-uploads/bombay-logo-new.png' },
  { name: 'Kaleda', src: '/lovable-uploads/kaleda-logo.png' },
  { name: 'Uccelli', src: '/lovable-uploads/uccelli-cafe-logo.jpeg' },
];

const regions = [
  { name: 'UAE', count: '150+' },
  { name: 'Saudi Arabia', count: '80+' },
  { name: 'India', count: '200+' },
  { name: 'GCC', count: 'Coming Soon' },
];

const TrustInterfaces: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.04) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Trusted by Restaurants</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real restaurants.
            <br />
            <span className="text-primary">Real results.</span>
          </h2>
        </div>

        {/* Testimonials in UI Frames */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 animate-on-scroll">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="group">
              {/* Browser-style frame */}
              <div className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                {/* Frame header */}
                <div className="bg-gray-50 px-4 py-2.5 flex items-center gap-2 border-b border-gray-100">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-100 rounded px-2 py-0.5 text-[10px] text-gray-500 text-center">
                      swirl.cx/reviews
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[1,2,3,4,5].map(star => (
                      <Star key={star} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-primary/20 mb-3" />
                  
                  <p className="text-foreground font-medium leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
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
              </div>
            </div>
          ))}
        </div>

        {/* Trusted Logos */}
        <div className="mb-16 animate-on-scroll">
          <p className="text-center text-sm text-muted-foreground mb-8">Trusted by leading hospitality brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedLogos.map((logo, i) => (
              <div key={i} className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <img 
                  src={logo.src} 
                  alt={logo.name}
                  className="h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Coverage */}
        <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-3xl p-8 md:p-12 border border-primary/10 animate-on-scroll">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Growing Across the Region</h3>
            <p className="text-muted-foreground">Swirl is expanding rapidly across the Middle East and South Asia</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {regions.map((region, i) => (
              <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-semibold text-foreground">{region.name}</span>
                </div>
                <p className={`text-lg font-bold ${region.count === 'Coming Soon' ? 'text-muted-foreground text-sm' : 'text-primary'}`}>
                  {region.count}
                </p>
                {region.count !== 'Coming Soon' && (
                  <p className="text-xs text-muted-foreground">restaurants</p>
                )}
              </div>
            ))}
          </div>

          {/* Trust metrics */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>10M+ orders processed</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>99.9% uptime</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustInterfaces;
