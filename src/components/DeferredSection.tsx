import React, { Suspense, useEffect, useRef, useState } from 'react';

/**
 * Mounts (and therefore downloads) its children only once the placeholder gets
 * close to the viewport. Keeps the initial mobile payload to the hero + first
 * fold while the rest of the page streams in as the visitor scrolls.
 */
const DeferredSection: React.FC<{
  children: React.ReactNode;
  /** Reserved height so deferred content never causes layout shift. */
  minHeight?: number;
  rootMargin?: string;
}> = ({ children, minHeight = 480, rootMargin = '600px' }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} style={show ? undefined : { minHeight }}>
      {show ? <Suspense fallback={<div style={{ minHeight }} />}>{children}</Suspense> : null}
    </div>
  );
};

export default DeferredSection;
