
import React, { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Initialize intersection observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Only add visible class when element enters viewport
        // Never remove it to prevent flickering
        if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
          // Add a slight delay for staggered animation effect
          setTimeout(() => {
            entry.target.classList.add('visible');
            // Once animation is done, unobserve to save resources
            observerRef.current?.unobserve(entry.target);
          }, 50);
        }
      });
    }, {
      root: null, // viewport
      rootMargin: '50px', // Start animation slightly before element enters viewport
      threshold: 0.1 // 10% of the element visible to trigger animation
    });
    
    // Select all elements with animate-on-scroll class
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    scrollElements.forEach(element => {
      observerRef.current?.observe(element);
    });
    
    // Cleanup observer
    return () => {
      if (observerRef.current) {
        scrollElements.forEach(element => {
          observerRef.current?.unobserve(element);
        });
      }
    };
  }, []);
}

export default useScrollAnimation;
