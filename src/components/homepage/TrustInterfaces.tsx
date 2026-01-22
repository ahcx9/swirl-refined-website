import React from 'react';
import { Quote, MapPin, Building2, Star, CheckCircle } from 'lucide-react';
const testimonials = [{
  quote: "Swirl replaced 5 different tools we were juggling. Now everything just works.",
  author: "Rahul Sharma",
  role: "Owner, The Spice Route",
  location: "Mumbai",
  avatar: "RS"
}, {
  quote: "Our food cost dropped 12% in the first month. The inventory tracking is incredible.",
  author: "Ahmed Al-Rashid",
  role: "Operations Head, Bites & Beyond",
  location: "Dubai",
  avatar: "AR"
}, {
  quote: "Managing 8 outlets from one dashboard changed everything for us.",
  author: "Priya Nair",
  role: "Director, Café Collective",
  location: "Bangalore",
  avatar: "PN"
}];
const trustedLogos = [{
  name: 'Bombay Biryani',
  src: '/lovable-uploads/bombay-logo-new.png'
}, {
  name: 'Kaleda',
  src: '/lovable-uploads/kaleda-logo.png'
}, {
  name: 'Uccelli',
  src: '/lovable-uploads/uccelli-cafe-logo.jpeg'
}];
const regions = [{
  name: 'UAE',
  count: '150+'
}, {
  name: 'Saudi Arabia',
  count: '80+'
}, {
  name: 'India',
  count: '200+'
}, {
  name: 'GCC',
  count: 'Coming Soon'
}];
const TrustInterfaces: React.FC = () => {
  return <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px'
      }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        

        {/* Testimonials in UI Frames */}
        

        {/* Trusted Logos */}
        

        {/* Geographic Coverage */}
        
      </div>
    </section>;
};
export default TrustInterfaces;