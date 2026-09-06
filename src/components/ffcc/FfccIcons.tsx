import React from 'react';

/**
 * Inline icons for /ffcc. The page is QR-scanned on mobile networks, so it
 * avoids the icon library entirely — each library icon shipped as its own
 * extra network request, which cost more than the icons themselves.
 */
type IconProps = { size?: number; className?: string; strokeWidth?: number };

const base = (size: number, className?: string, strokeWidth = 2) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  className,
  'aria-hidden': true,
  focusable: 'false' as const,
});

export const User: React.FC<IconProps> = ({ size = 24, className, strokeWidth }) => (
  <svg {...base(size, className, strokeWidth)}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const Mail: React.FC<IconProps> = ({ size = 24, className, strokeWidth }) => (
  <svg {...base(size, className, strokeWidth)}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const Building2: React.FC<IconProps> = ({ size = 24, className, strokeWidth }) => (
  <svg {...base(size, className, strokeWidth)}>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
  </svg>
);

export const ArrowRight: React.FC<IconProps> = ({ size = 24, className, strokeWidth }) => (
  <svg {...base(size, className, strokeWidth)}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const Check: React.FC<IconProps> = ({ size = 24, className, strokeWidth }) => (
  <svg {...base(size, className, strokeWidth)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Cloud: React.FC<IconProps> = ({ size = 24, className, strokeWidth }) => (
  <svg {...base(size, className, strokeWidth)}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);

export const Store: React.FC<IconProps> = ({ size = 24, className, strokeWidth }) => (
  <svg {...base(size, className, strokeWidth)}>
    <path d="m2 7 1.5-4h17L22 7" />
    <path d="M2 7a3 3 0 0 0 5 2 3 3 0 0 0 5 0 3 3 0 0 0 5 0 3 3 0 0 0 5-2" />
    <path d="M4 10v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10" />
  </svg>
);

export const BrainCircuit: React.FC<IconProps> = ({ size = 24, className, strokeWidth }) => (
  <svg {...base(size, className, strokeWidth)}>
    <path d="M12 5a3 3 0 1 0-5.997.125A4 4 0 0 0 5 12.25 4 4 0 0 0 7 19a4 4 0 0 0 5 1.874V5Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125A4 4 0 0 1 19 12.25 4 4 0 0 1 17 19a4 4 0 0 1-5 1.874" />
    <path d="M9 9h1M14 9h1M9 15h1M14 15h1" />
  </svg>
);

export const Loader2: React.FC<IconProps> = ({ size = 24, className, strokeWidth }) => (
  <svg {...base(size, className, strokeWidth)}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);
