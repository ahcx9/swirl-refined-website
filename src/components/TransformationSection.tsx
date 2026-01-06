import React from 'react';

const outcomes = [
  {
    title: "You see everything, in real time",
    description: "No more waiting for end-of-day reports. You'll know what's selling, what's sitting, and where the money is — right now, from anywhere."
  },
  {
    title: "You know your real numbers",
    description: "Not just revenue. Actual profit. You'll finally see what each dish costs, what's eating your margins, and how to price with confidence."
  },
  {
    title: "Your team runs smoother",
    description: "Kitchen and front-of-house on the same page. Orders flowing. Rush hours that don't feel like chaos."
  },
  {
    title: "You can grow without fear",
    description: "When the system works, you're no longer the bottleneck. Open a second location. Take a week off. The business keeps running."
  },
  {
    title: "You get your life back",
    description: "Less firefighting. Less stress. More time to think about what's next — or just enjoy what you've built."
  }
];

const TransformationSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background relative overflow-hidden">
      {/* Soft decorative elements */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/4" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[100px] translate-x-1/2" />
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <h2 className="animate-on-scroll text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6">
            Imagine if things just <span className="text-primary">worked.</span>
          </h2>
          
          <p className="animate-on-scroll animate-delay-100 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            One system that handles your orders, your stock, your costs, your kitchen — so you don't have to hold it all together yourself.
          </p>
        </div>
        
        {/* Outcomes - Asymmetric layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className={`animate-on-scroll animate-delay-${(index + 2) * 100} ${
                  index === 4 ? 'md:col-span-2 md:max-w-lg md:mx-auto' : ''
                }`}
              >
                <div className="group bg-background border border-border/60 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-500 hover:-translate-y-1">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {outcome.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Closing Statement */}
        <div className="mt-20 md:mt-28 text-center">
          <p className="animate-on-scroll text-xl md:text-2xl text-muted-foreground">
            This is what running a restaurant should feel like.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
