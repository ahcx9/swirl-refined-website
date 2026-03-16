
import React, { useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import {
  Calendar, Clock, Users, UserCheck, Armchair, GripHorizontal,
  ChefHat, BarChart3, Heart, ShoppingCart, CreditCard,
  CalendarCheck, Eye, Layers, ArrowRight,
  Phone, NotebookPen, History,
  AlertTriangle, Settings, Shuffle, Timer, UserPlus,
  PartyPopper, MapPin, ClipboardList, Sparkles } from
'lucide-react';
import timelineMockup from '@/assets/reservation-timeline-real.png';
import bookingMockup from '@/assets/reservation-booking-real.png';
import guestMockup from '@/assets/reservation-guest-real.png';

const Reservations = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
          entry.target.classList.add('visible');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { rootMargin: '50px', threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));
    return () => {elements.forEach((el) => observerRef.current?.unobserve(el));};
  }, []);

  const timelineHighlights = [
  { icon: Eye, text: 'Visual reservation timeline' },
  { icon: Timer, text: 'Lunch and dinner separation' },
  { icon: Clock, text: 'Real-time availability' },
  { icon: Armchair, text: 'Table assignments' },
  { icon: GripHorizontal, text: 'Reservation blocks' }];


  const bookingHighlights = [
  { icon: Clock, text: 'Real-time time slot availability' },
  { icon: UserPlus, text: 'Guest information capture' },
  { icon: Users, text: 'Party size controls' },
  { icon: Settings, text: 'Automatic table suggestions' },
  { icon: ClipboardList, text: 'Instant reservation summary' }];


  const guestTrackItems = [
  { icon: History, text: 'Guest visit history' },
  { icon: Armchair, text: 'Seating preferences' },
  { icon: NotebookPen, text: 'Special requests' },
  { icon: AlertTriangle, text: 'Allergies' },
  { icon: Phone, text: 'Contact details' }];


  const guestHighlights = [
  { icon: NotebookPen, text: 'Guest notes' },
  { icon: History, text: 'Activity history' },
  { icon: AlertTriangle, text: 'No-show tracking' },
  { icon: Armchair, text: 'Seating preferences' },
  { icon: PartyPopper, text: 'Occasion tags' }];


  const tableFeatures = [
  { icon: Settings, text: 'Automatic table suggestions' },
  { icon: Layers, text: 'Multi-table support' },
  { icon: Shuffle, text: 'Table combinations' },
  { icon: Armchair, text: 'Seating preferences' },
  { icon: BarChart3, text: 'Table availability insights' }];


  const staffActions = [
  'Create reservations',
  'Modify bookings',
  'Seat guests',
  'Mark no-shows',
  'Track service flow'];


  const integrations = [
  { icon: CreditCard, name: 'POS' },
  { icon: ChefHat, name: 'Kitchen Display (KDS)' },
  { icon: Users, name: 'CRM' },
  { icon: Heart, name: 'Customer Loyalty' },
  { icon: BarChart3, name: 'Analytics' },
  { icon: ShoppingCart, name: 'Online Ordering' }];


  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-medium mb-6">
                <Calendar className="w-4 h-4" />
                Swirl Reservations
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.1] tracking-tight mb-6">
                Restaurant Reservations.{' '}
                <span className="text-primary">Reinvented.</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-xl">
                Manage bookings, optimize tables, and deliver exceptional dining experiences with the intelligent reservation system built into the Swirl restaurant platform.
              </p>
              <p className="text-base text-muted-foreground/80 leading-relaxed mb-8 max-w-xl">
                Swirl Reservations helps restaurants manage table bookings, customer details, special requests, and table availability in real time — all from a beautifully designed interface.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/products" className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-foreground rounded-xl font-semibold text-sm hover:bg-muted/50 transition-all">
                  Explore Platform
                </a>
              </div>
            </div>
            <div className="animate-on-scroll relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/50">
                <img src={timelineMockup} alt="Swirl Reservation Calendar Timeline" className="w-full" loading="eager" />
              </div>
              









              
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg border border-border/50 px-4 py-3 animate-[float_6s_ease-in-out_infinite_1s]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">48 Guests</p>
                    <p className="text-[10px] text-muted-foreground">Expected today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Timeline View */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              See Your Entire Service <span className="text-primary">at a Glance</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Swirl Reservations gives restaurants a powerful timeline view of every booking. Staff can instantly see availability, guest reservations, and table assignments across the entire service.
            </p>
          </div>
          <div className="animate-on-scroll relative max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 border border-border/50 bg-card">
              <img src={timelineMockup} alt="Reservation Timeline Calendar View" className="w-full" loading="lazy" />
            </div>
            {/* UI Callouts */}
            <div className="hidden lg:flex absolute top-[35%] left-[42%] items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-ping" />
              <div className="bg-foreground text-primary-foreground rounded-lg px-3 py-1.5 text-xs font-medium shadow-lg whitespace-nowrap">
                Reservation Block
              </div>
            </div>
            <div className="hidden lg:flex absolute top-[15%] left-[32%] items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-ping" style={{ animationDelay: '0.5s' }} />
              <div className="bg-foreground text-primary-foreground rounded-lg px-3 py-1.5 text-xs font-medium shadow-lg whitespace-nowrap">
                Time Grid
              </div>
            </div>
            <div className="hidden lg:flex absolute top-[55%] right-[15%] items-center gap-2">
              <div className="bg-foreground text-primary-foreground rounded-lg px-3 py-1.5 text-xs font-medium shadow-lg whitespace-nowrap">
                Guest Name & Table
              </div>
              <div className="w-3 h-3 rounded-full bg-primary animate-ping" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12 max-w-5xl mx-auto">
            {timelineHighlights.map((item, i) =>
            <div key={i} className="animate-on-scroll group p-5 rounded-xl border border-border/50 bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 text-center">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.text}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 2: Create Reservation */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                Create Reservations <span className="text-primary">in Seconds</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
                Restaurant staff can quickly create reservations using a beautifully designed interface that automatically shows available time slots and table capacity.
              </p>
              <div className="space-y-3">
                {bookingHighlights.map((item, i) =>
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="animate-on-scroll relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 border border-border/50 bg-card">
                <img src={bookingMockup} alt="Create Reservation Interface" className="w-full" loading="lazy" />
              </div>
              {/* UI Annotations */}
              <div className="hidden lg:flex absolute top-[58%] left-[-8%] items-center gap-2">
                <div className="bg-foreground text-primary-foreground rounded-lg px-3 py-1.5 text-xs font-medium shadow-lg whitespace-nowrap">
                  Available Time Slots
                </div>
                <div className="w-3 h-3 rounded-full bg-primary animate-ping" style={{ animationDelay: '0.3s' }} />
              </div>
              <div className="hidden lg:flex absolute top-[25%] right-[-5%] items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-ping" style={{ animationDelay: '0.8s' }} />
                <div className="bg-foreground text-primary-foreground rounded-lg px-3 py-1.5 text-xs font-medium shadow-lg whitespace-nowrap">
                  Summary Panel
                </div>
              </div>
              <div className="hidden lg:flex absolute bottom-[8%] right-[5%] items-center gap-2">
                <div className="bg-foreground text-primary-foreground rounded-lg px-3 py-1.5 text-xs font-medium shadow-lg whitespace-nowrap">
                  Table Availability
                </div>
                <div className="w-3 h-3 rounded-full bg-primary animate-ping" style={{ animationDelay: '1.2s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Guest Profiles */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll relative flex justify-center">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/5 border border-border/50 bg-card max-w-sm">
                <img src={guestMockup} alt="Guest Profile and Reservation Details" className="w-full" loading="lazy" />
              </div>
              {/* Callouts */}
              <div className="hidden lg:flex absolute top-[12%] right-[5%] items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-ping" style={{ animationDelay: '0.4s' }} />
                <div className="bg-foreground text-primary-foreground rounded-lg px-3 py-1.5 text-xs font-medium shadow-lg whitespace-nowrap">
                  Guest Details
                </div>
              </div>
              <div className="hidden lg:flex absolute top-[50%] left-[2%] items-center gap-2">
                <div className="bg-foreground text-primary-foreground rounded-lg px-3 py-1.5 text-xs font-medium shadow-lg whitespace-nowrap">
                  Quick Actions
                </div>
                <div className="w-3 h-3 rounded-full bg-primary animate-ping" style={{ animationDelay: '0.9s' }} />
              </div>
              <div className="hidden lg:flex absolute bottom-[10%] right-[8%] items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-ping" style={{ animationDelay: '1.3s' }} />
                <div className="bg-foreground text-primary-foreground rounded-lg px-3 py-1.5 text-xs font-medium shadow-lg whitespace-nowrap">
                  Activity Log
                </div>
              </div>
            </div>
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                Powerful <span className="text-primary">Guest Profiles</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-lg leading-relaxed">
                Every reservation automatically creates a guest profile so restaurants can provide personalized service.
              </p>
              <p className="text-muted-foreground mb-4 font-medium">Restaurants can track:</p>
              <div className="space-y-3 mb-8">
                {guestTrackItems.map((item, i) =>
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-card transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                )}
              </div>
              <div className="border-t border-border/50 pt-6">
                <p className="text-sm text-muted-foreground font-medium mb-3">Key highlights:</p>
                <div className="flex flex-wrap gap-2">
                  {guestHighlights.map((item, i) =>
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-medium border border-primary/10">
                      <item.icon className="w-3 h-3" />
                      {item.text}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligent Table Management */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Optimize <span className="text-primary">Every Seat</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Swirl intelligently helps restaurants manage table assignments and maximize service capacity.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tableFeatures.map((item, i) =>
            <div key={i} className="animate-on-scroll group p-6 rounded-2xl border border-border/50 bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-lg">{item.text}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Built for Real Restaurant Operations */}
      <section className="py-20 md:py-28 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
                Built for Real <span className="text-primary">Restaurant Operations</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-lg leading-relaxed">
                Swirl Reservations was designed with restaurant teams in mind. All actions happen in a single interface without switching systems.
              </p>
              <p className="text-muted-foreground mb-6 font-medium">Staff can quickly:</p>
              <div className="space-y-3">
                {staffActions.map((action, i) =>
                <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <ArrowRight className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{action}</span>
                  </div>
                )}
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border/50">
                <img src={bookingMockup} alt="Reservation Management Interface" className="w-full" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated with Swirl Platform */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
              Part of the Complete <span className="text-primary">Restaurant Platform</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Reservations integrate seamlessly with the rest of the Swirl ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {integrations.map((item, i) =>
            <div key={i} className="animate-on-scroll group p-6 rounded-2xl border border-border/50 bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary/[0.03]">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Transform How Your Restaurant <span className="text-primary">Manages Reservations</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Thousands of restaurants are moving to intelligent restaurant operations with Swirl.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-primary/20">
              Book a Demo <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-xl font-semibold hover:bg-muted/50 transition-all">
              Contact Sales
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>);

};

export default Reservations;