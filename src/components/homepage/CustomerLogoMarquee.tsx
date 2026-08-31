import React, { useEffect, useRef, useState } from "react";

const LOGOS = [
  { src: "/lovable-uploads/9c58af8c-a78c-4160-a783-7f54412c5b7b.png", alt: "Bombay Restaurant & Cafe" },
  { src: "/lovable-uploads/9000dd52-fbe9-4430-8c38-eb0ab5e87e57.png", alt: "Seera Restaurant" },
  { src: "/lovable-uploads/c94d5f7d-130d-41cd-beb1-b2e68c9cbb68.png", alt: "The Centurion" },
  { src: "/logos/brioche-doree.png", alt: "Brioche Dorée" },
  { src: "/logos/nayaab.png", alt: "Nayaab" },
  { src: "/logos/ilyas-dumba-karahi.png", alt: "Ilyas Dumba Karahi" },
  { src: "/logos/vb-world.png", alt: "VB World – Namma Veedu Vasanta Bhavan" },
  { src: "/logos/anjappar.png", alt: "Anjappar Chettinad Indian Restaurant" },
  { src: "/logos/murmuz.png", alt: "Murmuz" },
  { src: "/logos/ali-bhai.png", alt: "Ali Bhai Restaurant" },
  { src: "/logos/bb-bakery.png", alt: "B&B Bakery" },
  { src: "/logos/khayyam.png", alt: "Khayyam Restaurant" },
  { src: "/logos/ortegos-deli.png", alt: "Ortego's Deli" },
];


const TILE_CLASS =
  "flex-shrink-0 flex items-center justify-center bg-white rounded-[14px] border border-[#E2EAF5] " +
  "w-[150px] h-[92px] md:w-[176px] md:h-[104px] p-4 " +
  "shadow-[0_6px_20px_-10px_rgba(20,110,245,0.18)] " +
  "transition-all duration-[250ms] ease-out " +
  "opacity-[0.75] grayscale hover:opacity-100 hover:grayscale-0 hover:scale-[1.04] " +
  "focus-within:opacity-100 focus-within:grayscale-0 focus-within:scale-[1.04]";

const LogoTile = ({ logo, ariaHidden }: { logo: (typeof LOGOS)[number]; ariaHidden?: boolean }) => (
  <div className={TILE_CLASS} aria-hidden={ariaHidden || undefined}>
    <img
      src={logo.src}
      alt={ariaHidden ? "" : logo.alt}
      width={176}
      height={104}
      loading="lazy"
      decoding="async"
      tabIndex={ariaHidden ? -1 : 0}
      className="max-h-full max-w-full w-auto h-auto object-contain outline-none"
    />
  </div>
);

const CustomerLogoMarquee = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const marquee = LOGOS.length >= 8 && !reducedMotion;

  const enter = (delay: string) =>
    ({
      transitionDelay: delay,
    }) as React.CSSProperties;

  const enterClass = `transition-all duration-[600ms] ease-out ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

  return (
    <section
      ref={sectionRef}
      className="bg-[#F7FAFF] py-12 md:py-20 overflow-hidden"
      aria-labelledby="customer-logos-heading"
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <p
          className={`text-center text-[#146EF5] text-xs md:text-sm font-bold tracking-[0.16em] uppercase ${enterClass}`}
          style={enter("0ms")}
        >
          Our Trusted Restaurant Partners
        </p>
        <h2
          id="customer-logos-heading"
          className={`mt-3 text-center text-[#0B1F3A] text-2xl md:text-4xl font-bold leading-tight max-w-3xl mx-auto ${enterClass}`}
          style={enter("80ms")}
        >
          Powering F&B Outlets across the region
        </h2>
      </div>

      <div className={`mt-10 md:mt-14 ${enterClass}`} style={enter("160ms")}>
        <div className="relative max-w-[1280px] mx-auto">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-28 z-10 bg-gradient-to-r from-[#F7FAFF] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-28 z-10 bg-gradient-to-l from-[#F7FAFF] to-transparent" />

          {marquee ? (
            <div className="overflow-hidden group px-4 md:px-8">
              <div className="flex w-max gap-6 md:gap-10 py-2 swirl-logo-marquee">
                {LOGOS.map((logo, i) => (
                  <LogoTile key={`a-${i}`} logo={logo} />
                ))}
                {LOGOS.map((logo, i) => (
                  <LogoTile key={`b-${i}`} logo={logo} ariaHidden />
                ))}
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto px-4 md:px-8">
              <div className="flex justify-center gap-6 md:gap-10 py-2 w-max mx-auto">
                {LOGOS.map((logo, i) => (
                  <LogoTile key={`s-${i}`} logo={logo} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogoMarquee;
