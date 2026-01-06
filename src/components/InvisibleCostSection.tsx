import React from 'react';

const costs = [
  {
    title: "Leaking profit",
    description: "You're losing money every day — not in big crashes, but in small, invisible ways. Over-portioning. Waste. Mispriced items. Death by a thousand cuts."
  },
  {
    title: "Stolen time",
    description: "Hours spent firefighting instead of growing. Chasing stock counts. Reconciling reports. Managing problems that should solve themselves."
  },
  {
    title: "Broken scalability",
    description: "Opening a second location feels risky. Not because of capital — but because you can't clone yourself. The system is you."
  },
  {
    title: "Owner burnout",
    description: "You dreamed of running a restaurant. Instead, the restaurant runs you."
  }
];

const InvisibleCostSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Gradient background - stress to clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-muted/20 to-background" />
      
      {/* Chaos dots visualization */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left side - Headline and intro */}
          <div className="lg:sticky lg:top-32">
            <h2 className="animate-on-scroll text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              What these problems
              <br />
              <span className="text-primary">are really costing you.</span>
            </h2>
            
            <p className="animate-on-scroll animate-delay-100 text-lg text-muted-foreground leading-relaxed">
              It's not just operational friction. It's something deeper — something that threatens the very thing you built.
            </p>
          </div>
          
          {/* Right side - Cost items */}
          <div className="space-y-12 md:space-y-16">
            {costs.map((cost, index) => (
              <div
                key={index}
                className={`animate-on-scroll animate-delay-${(index + 2) * 100}`}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {cost.title}
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {cost.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Transition Statement */}
        <div className="mt-24 md:mt-32 pt-16 md:pt-20 border-t border-border/50">
          <div className="max-w-3xl mx-auto text-center">
            <p className="animate-on-scroll text-xl md:text-2xl text-muted-foreground mb-6">
              These aren't operational problems.
              <br />
              <span className="text-foreground font-medium">They're existential ones.</span>
            </p>
            
            <p className="animate-on-scroll animate-delay-100 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              <span className="text-primary">swirl</span> was built to bring clarity and control back.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvisibleCostSection;
