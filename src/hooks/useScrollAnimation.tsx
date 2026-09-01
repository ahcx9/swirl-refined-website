import { useEffect, useRef } from 'react';

/**
 * Reveals `.animate-on-scroll` elements as they enter the viewport.
 * A MutationObserver picks up elements that mount later (lazily loaded
 * sections), so deferred content still animates instead of staying hidden.
 */
export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: '100px', threshold: 0.1 }
    );
    observerRef.current = io;

    const scan = () => {
      document
        .querySelectorAll('.animate-on-scroll:not(.visible)')
        .forEach((el) => io.observe(el));
    };
    scan();

    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);
}

export default useScrollAnimation;
