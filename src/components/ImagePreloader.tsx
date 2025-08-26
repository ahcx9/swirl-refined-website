
import React, { useEffect } from 'react';
import { preloadImages } from '@/utils/imagePreloader';

// Only truly critical above-the-fold images
const CRITICAL_IMAGES = [
  "/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png", // Hero image 1 (most important)
  "/lovable-uploads/fb7f055b-07a2-468d-aeda-247061053184.png", // First feature card
];

// First visible restaurant logos (reduced from 9 to 4)
const CRITICAL_LOGOS = [
  "/lovable-uploads/a8754738-56a4-4a8c-9f5c-3e927d004034.png",
  "/lovable-uploads/b2a2c52b-6298-4bda-8fd2-e0cab6171584.png",
  "/lovable-uploads/9c58af8c-a78c-4160-a783-7f54412c5b7b.png",
  "/lovable-uploads/9000dd52-fbe9-4430-8c38-eb0ab5e87e57.png",
];

const ImagePreloader = () => {
  useEffect(() => {
    // Only preload truly critical above-the-fold images
    CRITICAL_IMAGES.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    });
    
    // Preload only first few visible logos
    CRITICAL_LOGOS.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });

    // Preload critical images using Image objects for browser caching
    const preloadCriticalOnly = () => {
      const criticalOnlyImages = [...CRITICAL_IMAGES, ...CRITICAL_LOGOS];
      
      // Reduced from ~16 images to ~6 critical images
      preloadImages(criticalOnlyImages, 6)
        .catch(err => {
          console.error('Error preloading images:', err);
        });
    };
    
    // Start preloading immediately but with fewer images
    preloadCriticalOnly();
    
    // Enhanced Intersection Observer with better performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Find all images in the section that need to be preloaded
            const section = entry.target;
            const images = section.querySelectorAll('img[loading="lazy"]');
            
            // Preload these images with staggered loading
            images.forEach((img, index) => {
              const imageElement = img as HTMLImageElement;
              if (imageElement.src && !imageElement.complete) {
                // Stagger the loading to avoid blocking
                setTimeout(() => {
                  imageElement.fetchPriority = 'high';
                  imageElement.loading = 'eager';
                }, index * 50);
              }
            });
            
            // Stop observing this section after preloading its images
            observer.unobserve(section);
          }
        });
      },
      { rootMargin: '100px' } // Reduced from 300px to 100px for better performance
    );
    
    // Observe all sections with images
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // This component doesn't render anything
  return null;
};

export default ImagePreloader;
