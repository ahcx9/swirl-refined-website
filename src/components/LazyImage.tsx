import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  skeleton?: boolean;
  fadeIn?: boolean;
  priority?: 'high' | 'low' | 'auto';
}

const LazyImage = ({ 
  src, 
  alt, 
  className, 
  skeleton = true, 
  fadeIn = true, 
  priority = 'auto',
  loading = 'lazy',
  ...props 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Debug logging
  useEffect(() => {
    console.log('LazyImage rendering:', { src, alt, loading });
  }, [src, alt, loading]);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(img);
        }
      },
      { rootMargin: '50px' }
    );

    observer.observe(img);
    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    console.log('Image loaded successfully:', src);
    setIsLoaded(true);
  };

  const handleError = () => {
    console.error('Image failed to load:', src);
    setHasError(true);
  };

  const shouldLoad = loading === 'eager' || isInView || priority === 'high';

  return (
    <div className="relative overflow-hidden">
      {skeleton && !isLoaded && !hasError && shouldLoad && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}
      
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="text-gray-400 text-sm mb-2">Failed to load image</div>
            <div className="text-gray-300 text-xs break-all">{src}</div>
          </div>
        </div>
      )}
      
      <img
        ref={imgRef}
        src={shouldLoad ? src : undefined}
        alt={alt}
        className={cn(
          className,
          fadeIn && "transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          hasError && "opacity-0"
        )}
        loading={loading}
        fetchPriority={priority}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        style={{ transform: 'translateZ(0)' }}
        {...props}
      />
    </div>
  );
};

export default LazyImage;