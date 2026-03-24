import React from 'react';
import { Phone, Globe, MapPin, MessageCircle } from 'lucide-react';

const locations = [
  {
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    phone: '+971 54 385 3877',
    phoneHref: 'tel:+971543853877',
    whatsapp: 'https://wa.me/971543853877?text=I%20would%20like%20to%20see%20demo%20for%20swirl',
    address: 'Abu Dhabi — Office 13, 2nd Floor, Hanging Garden Tower',
    label: 'Sales & Support',
    gradient: 'from-primary/8 to-blue-400/8',
    border: 'border-primary/15',
    accent: 'text-primary',
    accentBg: 'bg-primary/10',
  },
  {
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    phone: '+966 53 995 0024',
    phoneHref: 'tel:+966539950024',
    whatsapp: 'https://wa.me/966539950024?text=I%20would%20like%20to%20see%20demo%20for%20swirl',
    address: 'Riyadh — REMA6548, 6548 Salahudin Al-Ayyubi, 4147, Al-Malaz District, Riyadh 12836',
    label: 'Sales & Support',
    gradient: 'from-emerald-500/8 to-teal-400/8',
    border: 'border-emerald-500/15',
    accent: 'text-emerald-600',
    accentBg: 'bg-emerald-500/10',
  },
  {
    country: 'India',
    flag: '🇮🇳',
    phone: '+91 97959 97070',
    phoneHref: 'tel:+919795997070',
    whatsapp: 'https://wa.me/919795997070?text=I%20would%20like%20to%20see%20demo%20for%20swirl',
    address: 'Lucknow',
    label: 'Sales & Support',
    gradient: 'from-orange-500/8 to-amber-400/8',
    border: 'border-orange-500/15',
    accent: 'text-orange-600',
    accentBg: 'bg-orange-500/10',
  },
];

const GlobalPresence = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/[0.08] text-primary px-5 py-2.5 rounded-full mb-6 text-sm font-medium">
            <Globe size={16} />
            <span>Global Presence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reach Us From Anywhere
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            We're available across multiple regions to support your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {locations.map((loc, i) => (
            <div
              key={loc.country}
              className={`group relative bg-gradient-to-br ${loc.gradient} backdrop-blur-sm border ${loc.border} rounded-2xl p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Flag & Country */}
                <div className="text-5xl mb-4">{loc.flag}</div>
                <h3 className="text-xl font-bold text-foreground mb-1">{loc.country}</h3>
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{loc.label}</span>
                
                {/* Phone */}
                <a href={loc.phoneHref} className={`mt-6 flex items-center gap-3 ${loc.accent} font-semibold text-lg group-hover:gap-4 transition-all`}>
                  <div className={`w-10 h-10 rounded-full ${loc.accentBg} flex items-center justify-center transition-colors`}>
                    <Phone size={18} />
                  </div>
                  {loc.phone}
                </a>

                {/* WhatsApp Button */}
                <a
                  href={loc.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/20 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.03]"
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>

                {/* Address */}
                <div className="mt-5 flex items-start gap-2.5 text-muted-foreground text-sm">
                  <MapPin size={15} className="flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{loc.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
