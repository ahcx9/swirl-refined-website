
import React, { useEffect, useState } from 'react';
import { loadImage, removeBackground } from '../utils/imageProcessing';
import { toast } from 'sonner';

const FaviconBackgroundRemover = () => {
  const [isProcessing, setIsProcessing] = useState(true);
  
  useEffect(() => {
    const processFavicon = async () => {
      try {
        setIsProcessing(true);
        
        // Get the current favicon path
        const faviconLink = document.querySelector('link[rel="icon"]');
        if (!faviconLink) {
          console.error('No favicon link found');
          return;
        }
        
        const faviconUrl = faviconLink.getAttribute('href');
        if (!faviconUrl) {
          console.error('No favicon URL found');
          return;
        }
        
        // Fetch the image as a blob
        const response = await fetch(faviconUrl);
        const imageBlob = await response.blob();
        
        // Load the image and remove its background
        const imageElement = await loadImage(imageBlob);
        const processedImageBlob = await removeBackground(imageElement);
        
        // Create a URL for the processed image
        const processedImageUrl = URL.createObjectURL(processedImageBlob);
        
        // Update the favicon
        faviconLink.setAttribute('href', processedImageUrl);
        
        toast.success('Favicon background removed successfully');
      } catch (error) {
        console.error('Error processing favicon:', error);
        toast.error('Failed to remove favicon background');
      } finally {
        setIsProcessing(false);
      }
    };
    
    processFavicon();
  }, []);
  
  return null; // This component doesn't render anything
};

export default FaviconBackgroundRemover;
