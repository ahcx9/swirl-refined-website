import React from 'react';

const problems = [
  "You check the register — sales look fine. But where did the money go?",
  "Stock keeps vanishing. You've asked everyone. No answers.",
  "Your best dish costs more to make than it used to. You're not sure why.",
  "Every rush hour feels like barely surviving.",
  "The kitchen blames the front. The front blames the kitchen.",
  "If your manager quits tomorrow, everything falls apart.",
  "You're making decisions on instinct — because there's no time for anything else."
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
            Let's be honest about
            <br />
            <span className="text-muted-foreground">what running a restaurant really looks like.</span>
          </h2>

          {/* Emotional Paragraph */}
          <p className="animate-on-scroll animate-delay-100 text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 md:mb-20 max-w-3xl">
            You didn't get into this to stare at spreadsheets or chase missing stock. 
            You wanted to build something — feed people, create a place they remember. 
            But somewhere along the way, it started feeling like <span className="text-foreground font-medium">you're just keeping the lights on.</span>
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
