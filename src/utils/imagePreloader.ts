
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

/**
 * Detect slow network connection
 */
export const isSlowConnection = (): boolean => {
  // @ts-ignore - Navigator.connection is experimental
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  if (!connection) return false;
  
  // Consider 2G, slow-2g as slow
  return connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g';
};

/**
 * Create responsive image srcset for better loading
 */
export const createResponsiveSrcSet = (baseSrc: string, sizes: number[] = [400, 800, 1200]): string => {
  if (!baseSrc.includes('images.unsplash.com')) return '';
  
  return sizes
    .map(size => `${baseSrc}&w=${size} ${size}w`)
    .join(', ');
};
