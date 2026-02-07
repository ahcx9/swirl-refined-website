import React, { useState, useEffect, useRef } from 'react';
import { 
  QrCode, 
  Smartphone, 
  Receipt, 
  ChefHat, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  Zap,
  Bell,
  UtensilsCrossed
} from 'lucide-react';

const QROrderJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: QrCode,
      title: 'Customer Scans QR',
      description: 'Guest scans table QR code with their phone',
      time: '0 seconds',
      color: 'bg-blue-500',
      detail: 'No app download required'
    },
    {
      icon: Smartphone,
      title: 'Browse & Order',
      description: 'Digital menu with photos, customizations & instant cart',
      time: '~2 minutes',
      color: 'bg-indigo-500',
      detail: 'Multi-language support'
    },
    {
      icon: Receipt,
      title: 'Order to POS',
      description: 'Order appears instantly on Swirl POS system',
      time: '2 seconds',
      color: 'bg-primary',
      detail: 'Auto-printed KOT'
    },
    {
      icon: ChefHat,
      title: 'Kitchen Receives',
      description: 'KDS displays order with prep instructions',
      time: 'Instant',
      color: 'bg-amber-500',
      detail: 'Priority queuing'
    },
    {
      icon: UtensilsCrossed,
      title: 'Food Served',
      description: 'Staff notified when ready, guest delighted',
      time: '~8 minutes',
      color: 'bg-green-500',
      detail: 'Average fulfillment'
    }
  ];

  // Auto-advance steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.05) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-on-scroll">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-5">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">QR Ordering Flow</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            From scan to served
            <br />
            <span className="text-primary">in minutes</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how a QR order flows seamlessly through your entire operation — 
            zero friction, zero errors, maximum efficiency.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative mb-12">
            {/* Progress Bar */}
            <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 via-primary to-green-500 rounded-full transition-all duration-500"
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              />
            </div>

            {/* Steps */}
            <div className="flex justify-between relative">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col items-center w-1/5 cursor-pointer transition-all duration-300 ${
                    index <= activeStep ? 'opacity-100' : 'opacity-50'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Icon Circle */}
                  <div 
                    className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      index === activeStep 
                        ? `${step.color} text-white shadow-lg scale-110` 
                        : index < activeStep 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {index < activeStep ? (
                      <CheckCircle2 className="w-10 h-10" />
                    ) : (
                      <step.icon className="w-10 h-10" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <p className={`text-xs font-bold mb-1 ${
                      index === activeStep ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {step.time}
                    </p>
                    <h4 className={`font-semibold text-sm mb-1 ${
                      index === activeStep ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </h4>
                    <p className="text-xs text-muted-foreground hidden lg:block">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-4 mb-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 ${
                  index === activeStep 
                    ? 'bg-white shadow-lg border border-primary/20' 
                    : 'bg-gray-50/50'
                }`}
                onClick={() => setActiveStep(index)}
              >
                {/* Icon */}
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    index === activeStep 
                      ? `${step.color} text-white` 
                      : index < activeStep 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {index < activeStep ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <step.icon className="w-6 h-6" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <span className={`text-xs font-bold ${
                      index === activeStep ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {step.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index === activeStep && (
                    <span className="inline-block mt-2 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {step.detail}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Detail Card */}
          <div className="hidden md:block bg-white rounded-2xl border border-gray-100 shadow-xl p-6 max-w-2xl mx-auto animate-on-scroll">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl ${steps[activeStep].color} flex items-center justify-center`}>
                {React.createElement(steps[activeStep].icon, { className: "w-8 h-8 text-white" })}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold text-foreground">{steps[activeStep].title}</h3>
                  <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {steps[activeStep].time}
                  </span>
                </div>
                <p className="text-muted-foreground">{steps[activeStep].description}</p>
                <p className="text-sm text-primary font-medium mt-2">{steps[activeStep].detail}</p>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary animate-bounce" />
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 animate-on-scroll">
            {[
              { label: 'Order Accuracy', value: '99.9%', icon: CheckCircle2 },
              { label: 'Avg. Order Time', value: '< 10 min', icon: Clock },
              { label: 'Staff Time Saved', value: '40%', icon: Zap },
              { label: 'Guest Satisfaction', value: '4.8★', icon: UtensilsCrossed },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-4 text-center hover:shadow-lg hover:border-primary/20 transition-all">
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 animate-on-scroll">
            <a
              href="/features/qr-ordering"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
            >
              See QR Ordering in Action
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QROrderJourney;
