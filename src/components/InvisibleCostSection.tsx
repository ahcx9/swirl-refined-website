import React from 'react';

const costs = [
  {
    title: "Money slipping through the cracks",
    description: "It's not one big thing. It's a hundred small ones — an extra scoop here, a forgotten charge there, a dish that costs more than you thought. You're bleeding slowly, and you can't see where."
  },
  {
    title: "Your time disappearing",
    description: "You wanted to grow the business. Instead, you're fixing the same problems every week. Counting stock. Chasing invoices. Putting out fires that shouldn't exist."
  },
  {
    title: "Stuck at one location",
    description: "You've thought about expanding. But deep down, you know the truth — if you're not there, things fall apart. The business needs you too much."
  },
  {
    title: "Running on empty",
    description: "You're tired. Not just physically — but tired of worrying, tired of not knowing, tired of feeling like everything depends on you showing up."
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
              Here's what this is
              <br />
              <span className="text-primary">actually costing you.</span>
            </h2>
            
            <p className="animate-on-scroll animate-delay-100 text-lg text-muted-foreground leading-relaxed">
              It's not just stress. These problems are quietly taking things from you — things you can't get back.
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
              Look — you didn't sign up for this.
              <br />
              <span className="text-foreground font-medium">And you don't have to keep doing it alone.</span>
            </p>
            
            <p className="animate-on-scroll animate-delay-100 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              We built <span className="text-primary">swirl</span> to give you back control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvisibleCostSection;
