import React from 'react';

const problems = [
  "Sales look good. Profit is... unclear.",
  "Stock disappears quietly. No one knows where.",
  "Portions drift. Recipes change. Costs creep up.",
  "Rush hour feels like firefighting.",
  "The kitchen and front desk speak different languages.",
  "Everything depends on two or three people.",
  "Decisions are made on gut feel, not data."
];

const OwnerRealitySection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2 className="animate-on-scroll text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-8">
            The things no one talks about
            <br />
            <span className="text-muted-foreground">when you open a restaurant.</span>
          </h2>

          {/* Emotional Paragraph */}
          <p className="animate-on-scroll animate-delay-100 text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 md:mb-20 max-w-3xl">
            You got into this business because you love food, people, and creating experiences. 
            But somewhere between the morning prep and the midnight close, it became about something else entirely — <span className="text-foreground font-medium">survival.</span>
          </p>

          {/* Problem Statements */}
          <div className="space-y-6 md:space-y-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`animate-on-scroll animate-delay-${(index + 2) * 100} flex items-start gap-4 md:gap-6`}
              >
                <div className="w-1 h-8 md:h-10 bg-primary/30 rounded-full flex-shrink-0 mt-1" />
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground/90 leading-snug">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerRealitySection;
