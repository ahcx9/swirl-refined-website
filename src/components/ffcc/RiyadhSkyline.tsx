import React from 'react';

/** Subtle line-art Riyadh skyline (Kingdom Centre, Al Faisaliah, Burj Rafal, PIF tower). */
const RiyadhSkyline: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 1200 220"
    fill="none"
    aria-hidden="true"
    focusable="false"
    preserveAspectRatio="xMidYMax meet"
    className={className}
  >
    <g
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    >
      {/* ground */}
      <path d="M0 210 H1200" />

      {/* low blocks left */}
      <path d="M40 210v-46h58v46M52 164v-12h34v12" />
      <path d="M120 210v-70h44v70M130 152h24M130 170h24M130 188h24" />

      {/* Al Faisaliah — ball on tapering spire */}
      <path d="M214 210 250 96M298 210 262 96M232 152h48M240 124h32" />
      <circle cx="256" cy="86" r="17" />
      <path d="M256 69V34" />

      {/* mid blocks */}
      <path d="M330 210v-92h52v92M340 132h32M340 154h32M340 176h32" />
      <path d="M400 210v-58h40v58M410 166h20M410 186h20" />

      {/* Kingdom Centre — inverted parabola arch */}
      <path d="M486 210V78c0-42 16-62 44-62s44 20 44 62v132" />
      <path d="M498 118c8 26 22 40 32 40s24-14 32-40" />
      <path d="M486 150h24M550 150h24" />

      {/* Burj Rafal */}
      <path d="M612 210V70l26-22 26 22v140M620 96h52M620 126h52M620 156h52M620 186h52M638 48V26" />

      {/* PIF tower / stepped tower */}
      <path d="M708 210V104h34V64h32v146M716 132h50M716 160h50M716 188h50" />

      {/* mosque with dome + minarets */}
      <path d="M812 210v-56h96v56" />
      <path d="M828 154a32 32 0 0 1 64 0" />
      <path d="M860 122v-16" />
      <path d="M818 210v-86M902 210v-86M818 124a5 5 0 0 1 10 0M902 124a5 5 0 0 1-10 0" />

      {/* right cluster */}
      <path d="M940 210v-104l30-20 30 20v104M950 132h40M950 158h40M950 184h40" />
      <path d="M1024 210v-64h44v64M1034 162h24M1034 184h24" />
      <path d="M1090 210v-88h46v88M1098 146h30M1098 172h30M1113 122V98" />
    </g>
  </svg>
);

export default RiyadhSkyline;
