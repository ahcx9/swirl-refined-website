import React from 'react';

/**
 * Hand-drawn "sketchbook" background: restaurant-management doodles
 * (table plan, receipt, chef hat, QR code, coffee cup, chart) that draw
 * themselves in on page load, then breathe softly.
 */
const SketchyRestaurantBackground: React.FC = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full text-primary/25"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <g
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          {/* Floor plan — round table with chairs */}
          <g className="sketch-draw" style={{ animationDelay: '0.1s' }}>
            <circle cx="150" cy="150" r="46" strokeDasharray="4 6" />
            <circle cx="150" cy="86" r="13" />
            <circle cx="150" cy="214" r="13" />
            <circle cx="86" cy="150" r="13" />
            <circle cx="214" cy="150" r="13" />
          </g>

          {/* Receipt */}
          <g className="sketch-draw" style={{ animationDelay: '0.5s' }}>
            <path d="M1230 90h130v190l-16-12-16 12-16-12-16 12-16-12-17 12-17-12-16 12z" />
            <path d="M1252 126h86M1252 152h86M1252 178h56M1252 204h66" strokeDasharray="3 5" />
          </g>

          {/* Chef hat */}
          <g className="sketch-draw" style={{ animationDelay: '0.9s' }}>
            <path d="M1130 640c-24 0-40-17-40-38 0-19 14-33 31-36 4-22 23-37 46-37s41 15 46 37c17 3 31 17 31 36 0 21-16 38-40 38z" />
            <path d="M1104 640v42h148v-42" />
            <path d="M1104 662h148" strokeDasharray="3 5" />
          </g>

          {/* QR code */}
          <g className="sketch-draw" style={{ animationDelay: '1.2s' }}>
            <rect x="120" y="600" width="120" height="120" rx="8" />
            <rect x="140" y="620" width="30" height="30" rx="4" />
            <rect x="190" y="620" width="30" height="30" rx="4" />
            <rect x="140" y="670" width="30" height="30" rx="4" />
            <path d="M190 670h12v12h-12zM208 670h12v12h-12zM190 688h12v12h-12zM208 688h12v12h-12z" />
          </g>

          {/* Coffee cup */}
          <g className="sketch-draw" style={{ animationDelay: '1.5s' }}>
            <path d="M520 780h140l-14 76a26 26 0 0 1-26 22h-60a26 26 0 0 1-26-22z" />
            <path d="M662 800h20a20 20 0 0 1 0 40h-16" />
            <path d="M556 742c8-10 8-20 0-30M590 742c8-10 8-20 0-30M624 742c8-10 8-20 0-30" strokeDasharray="3 4" />
          </g>

          {/* Sales chart */}
          <g className="sketch-draw" style={{ animationDelay: '1.8s' }}>
            <path d="M900 250v130h170" />
            <path d="M910 356l40-44 36 26 40-58 44-34" />
            <path d="M1060 246h30v14h-30z" />
          </g>

          {/* Plate & cutlery */}
          <g className="sketch-draw" style={{ animationDelay: '2.1s' }}>
            <circle cx="740" cy="130" r="52" />
            <circle cx="740" cy="130" r="34" strokeDasharray="4 6" />
            <path d="M654 92v76M654 92v34c0 8 12 8 12 0V92M826 92c-14 10-14 44 0 44v32" />
          </g>

          {/* Order ticket flow arrows */}
          <g className="sketch-draw" style={{ animationDelay: '2.4s' }}>
            <path d="M330 420c70-46 150-46 220 0" strokeDasharray="6 8" />
            <path d="M540 404l14 18-22 8" />
            <path d="M700 470c80 44 170 40 240-14" strokeDasharray="6 8" />
            <path d="M925 448l16 16-20 12" />
          </g>
        </g>
      </svg>

      {/* Soft light wash so the sketch never competes with the mockup */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/85 to-white" />
    </div>
  );
};

export default SketchyRestaurantBackground;
