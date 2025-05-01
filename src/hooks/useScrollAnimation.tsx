
import React, { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Initialize intersection observer
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add visible class when element is in view
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once animation is done, unobserve to save resources
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // 10% of the element visible
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
