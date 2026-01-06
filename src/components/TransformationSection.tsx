import React from 'react';

const outcomes = [
  {
    title: "Real-time visibility",
    description: "Know exactly what's happening in your restaurant — right now, from anywhere."
  },
  {
    title: "Cost confidence",
    description: "See your real margins. Understand where money goes. Price with precision."
  },
  {
    title: "Calmer operations",
    description: "Kitchen and front desk aligned. Rush hours handled. Problems prevented, not managed."
  },
  {
    title: "Scalable systems",
    description: "Open your next location without cloning yourself. The system works — you don't have to."
  },
  {
    title: "Owner freedom",
    description: "Finally, time to think about growth. Strategy. Or just a day off."
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
            From chaos to <span className="text-primary">control.</span>
          </h2>
          
          <p className="animate-on-scroll animate-delay-100 text-xl md:text-2xl text-muted-foreground leading-relaxed">
            An all-in-one restaurant operating system that replaces firefighting with flow.
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
            This is what modern restaurant operations look like.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
