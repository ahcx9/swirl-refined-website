
import { useEffect } from 'react';
import { preloadImages } from '@/utils/imagePreloader';

// List of critical images that should be preloaded immediately
const CRITICAL_IMAGES = [
  "/lovable-uploads/49346ab3-d7fb-40f5-a81d-2c900fd54cae.png", // POS image
  "/lovable-uploads/189d6c7d-6cc1-4e88-bbce-a9e8f69a073f.png", // Hero image 2
  "/lovable-uploads/292d5cb0-2907-4d50-9380-03c565cb8849.png", // Hero image 3
  "/lovable-uploads/cbcfca20-2929-487b-a9b9-931826e7b8e9.png", // Inventory image
  "/lovable-uploads/459383dc-eff1-410b-af47-ff49a9a0a01e.png", // Financial analytics image
  "/lovable-uploads/fb7f055b-07a2-468d-aeda-247061053184.png", // Tablet menu
  "/lovable-uploads/947b4eab-99e0-4ea2-ad4e-5fb3a2f90fab.png"  // Digital menu
];

// Second-tier important images to load after critical ones
const IMPORTANT_IMAGES = [
  "/lovable-uploads/55544d5a-71ae-4a9e-a8aa-deb07ec265e7.png", // Logo
  "/lovable-uploads/85df272f-78b0-4180-bd9e-a069e750623a.png", // Kitchen display
  "https://images.unsplash.com/photo-1576749872435-ff88a193f066?q=80&w=800&auto=format",
  "https://images.unsplash.com/photo-1585914641050-fa9883c4e21c?q=80&w=800&auto=format",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format"
];

const ImagePreloader = () => {
  useEffect(() => {
    // First, preload critical images with high priority
    preloadImages(CRITICAL_IMAGES, 3)
      .then(() => {
        // After critical images, load important ones
        return preloadImages(IMPORTANT_IMAGES, 1);
      })
      .catch(err => {
        console.error('Error preloading images:', err);
      });
      
    // Use intersection observer to detect when we're about to need other images
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // When a section comes into view, load its images
            const section = entry.target;
            // Add type assertion to access dataset
            const preloadImagesAttr = (section as HTMLElement).dataset.preloadImages;
            if (preloadImagesAttr) {
              const imagesToLoad = preloadImagesAttr.split(',');
              preloadImages(imagesToLoad);
            }
          }
        });
      },
      { rootMargin: '200px' } // Start loading when within 200px
    );
    
    // Observe sections with data-preload-images attribute
    document.querySelectorAll('[data-preload-images]').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  // This is a utility component, it doesn't render anything
  return null;
};

export default ImagePreloader;
