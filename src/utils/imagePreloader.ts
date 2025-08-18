
type ImagePriority = 'high' | 'low' | 'auto';

interface PreloadImageOptions {
  src: string;
  priority?: ImagePriority;
  as?: 'image';
}

/**
 * Preloads an image with specified priority
 */
export const preloadImage = ({ src, priority = 'auto', as = 'image' }: PreloadImageOptions): Promise<void> => {
  return new Promise((resolve, reject) => {
    // For high priority images, use link preload
    if (priority === 'high') {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = as;
      link.href = src;
      link.onload = () => resolve();
      link.onerror = () => {
        console.log(`Preload failed for ${src}, falling back to image object`);
        // Continue with Image object as fallback
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
      };
      document.head.appendChild(link);
    }
    
    // Always create an image object as fallback or for low/auto priority
    const img = new Image();
    img.src = src;
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
  });
};

/**
 * Preloads multiple images with specified priority
 */
export const preloadImages = (images: string[], highPriorityCount = 1): Promise<void[]> => {
  const prioritizedImages = images.map((src, index) => {
    const priority = index < highPriorityCount ? 'high' : 'auto';
    return preloadImage({ src, priority })
      .catch(err => {
        console.error(`Error preloading image ${src}:`, err);
        // Return a resolved promise to prevent one failed image from stopping all others
        return Promise.resolve();
      });
  });
  
  return Promise.all(prioritizedImages);
};

/**
 * Optimize an image URL for faster loading
 */
export const optimizeImageUrl = (url: string): string => {
  // If it's an Unsplash image, add optimization parameters
  if (url.includes('images.unsplash.com')) {
    // Add quality and format parameters if they don't exist
    if (!url.includes('q=')) {
      url = url.includes('?') ? `${url}&q=80` : `${url}?q=80`;
    }
    if (!url.includes('auto=format')) {
      url = `${url}&auto=format`;
    }
    if (!url.includes('w=')) {
      url = `${url}&w=800`;
    }
  }
  
  return url;
};
