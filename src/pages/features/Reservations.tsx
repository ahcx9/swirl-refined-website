import React, { useEffect, useRef } from 'react';
import Footer from '@/components/Footer';
import ReservationHero from '@/components/reservations/ReservationHero';
import TimelineSection from '@/components/reservations/TimelineSection';
import CreateReservationSection from '@/components/reservations/CreateReservationSection';
import GuestProfileSection from '@/components/reservations/GuestProfileSection';
import TableOptimizationSection from '@/components/reservations/TableOptimizationSection';
import OperationsSection from '@/components/reservations/OperationsSection';
import IntegrationsSection from '@/components/reservations/IntegrationsSection';
import ReservationCTA from '@/components/reservations/ReservationCTA';

const Reservations = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
            entry.target.classList.add('visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px', threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));
    return () => {
      elements.forEach((el) => observerRef.current?.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <ReservationHero />
      <TimelineSection />
      <CreateReservationSection />
      <GuestProfileSection />
      <TableOptimizationSection />
      <OperationsSection />
      <IntegrationsSection />
      <ReservationCTA />
      <Footer />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Reservations;
