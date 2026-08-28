import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref + a boolean that is true only while the element is on screen
 * and the user has not requested reduced motion. Use it to gate demo loops so
 * off-screen animations never burn CPU on mobile.
 */
export function useAutoplayInView<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [active, setActive] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.25 }
    );
    io.observe(el);
    const onVis = () => {
      if (document.hidden) setActive(false);
    };
    document.addEventListener('visibilitychange', onVis);
    return () => {
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return { ref, playing: active && !reduced, reduced };
}

/**
 * Advances a step counter (0..steps-1) on an interval while `playing` is true.
 */
export function useStepLoop(steps: number, intervalMs: number, playing: boolean) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % steps), intervalMs);
    return () => window.clearInterval(id);
  }, [steps, intervalMs, playing]);
  return [step, setStep] as const;
}
