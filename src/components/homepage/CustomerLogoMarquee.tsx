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
  { src: "/logos/ali-bhai.png", alt: "Ali Bhai Restaurant", large: true },
  { src: "/logos/bb-bakery.png", alt: "B&B Bakery" },
  { src: "/logos/khayyam.png", alt: "Khayyam Restaurant" },
  { src: "/logos/ortegos-deli.png", alt: "Ortego's Deli", fill: true },
  { src: "/logos/nanus.png", alt: "Nanu's Dilli Ka Andaz Restaurant", fill: true },
  { src: "/logos/kabab-point.png", alt: "Kabab Point", fill: true },
  { src: "/logos/thf.png", alt: "THF" },
  { src: "/logos/baba-biryani.png", alt: "Baba Biryani" },
  { src: "/logos/bollywood-treats.png", alt: "Bollywood Treats", fill: true },
  { src: "/logos/sealand.png", alt: "Sealand Restaurant", fill: true },
  { src: "/logos/bubble-cha.png", alt: "Bubble Cha" },
  { src: "/logos/hungry-tiger.png", alt: "Hungry Tiger", fill: true },
  { src: "/logos/indian-oven.png", alt: "Indian Oven Biryanies & Kebabs", fill: true },
  { src: "/logos/bait-al-azayem.png", alt: "Bait Al Azayem", fill: true },
  { src: "/logos/walnut.png", alt: "Walnut World Bakery & Patisserie" },
  { src: "/logos/chaat-chaska.png", alt: "Chaat Chaska" },
  { src: "/logos/araabaik.png", alt: "Araabaik – Royal Taste of Arab", fill: true },
  { src: "/logos/desi-kitchen.png", alt: "Desi Kitchen" },
  { src: "/logos/uccelli-cafe.png", alt: "Uccelli Café" },
  { src: "/logos/cafe-hons.png", alt: "Café Hons" },
  { src: "/logos/brewbakes.png", alt: "Brewbakes Courtyard Lucknow", fill: true },
];

const ROW_ONE = LOGOS.slice(0, 15);
const ROW_TWO = LOGOS.slice(15);


const CIRCLE_SIZE =
  "w-[72px] h-[72px] md:w-[92px] md:h-[92px]";

const TILE_CLASS =
  "flex-shrink-0 flex items-center justify-center overflow-hidden " +
  CIRCLE_SIZE +
  " rounded-full bg-white " +
  "border-2 border-solid border-[#E3E8EF] " +
  "transition-all duration-[250ms] ease-out " +
  "hover:scale-[1.06] hover:border-[#146EF5] focus-within:scale-[1.06] focus-within:border-[#146EF5]";

const LogoTile = ({ logo, ariaHidden }: { logo: (typeof LOGOS)[number]; ariaHidden?: boolean }) => (
  <div className={TILE_CLASS} aria-hidden={ariaHidden || undefined}>
    <img
      src={logo.src}
      alt={ariaHidden ? "" : logo.alt}
      width={72}
      height={72}
      loading="lazy"
      decoding="async"
      tabIndex={ariaHidden ? -1 : 0}
      className={
        "fill" in logo && logo.fill
          ? "w-full h-full object-cover rounded-full outline-none"
          : "large" in logo && logo.large
            ? "max-h-[92%] max-w-[92%] w-auto h-auto object-contain outline-none"
            : "max-h-[70%] max-w-[70%] w-auto h-auto object-contain outline-none"
      }
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
            <div className="group px-4 md:px-8 space-y-4 md:space-y-5">
              <div className="overflow-hidden">
                <div className="flex w-max gap-4 md:gap-6 py-1 swirl-logo-marquee">
                  {ROW_ONE.map((logo, i) => (
                    <LogoTile key={`a-${i}`} logo={logo} />
                  ))}
                  {ROW_ONE.map((logo, i) => (
                    <LogoTile key={`b-${i}`} logo={logo} ariaHidden />
                  ))}
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="flex w-max gap-4 md:gap-6 py-1 swirl-logo-marquee swirl-logo-marquee-reverse">
                  {ROW_TWO.map((logo, i) => (
                    <LogoTile key={`c-${i}`} logo={logo} />
                  ))}
                  {ROW_TWO.map((logo, i) => (
                    <LogoTile key={`d-${i}`} logo={logo} ariaHidden />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto px-4 md:px-8">
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 py-2 max-w-4xl mx-auto">
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
