import React from 'react';

interface Props {
  className?: string;
  variant?: 'full' | 'icon' | 'badge' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const PishgamanLogo: React.FC<Props> = ({
  className = '',
  variant = 'full',
  size = 'md'
}) => {
  // Dimensions
  const dim = size === 'sm' ? 36 : size === 'lg' ? 68 : size === 'xl' ? 96 : 48;

  // Colors
  const isWhite = variant === 'white';
  const navyColor = isWhite ? '#FFFFFF' : '#1C3782';
  const greenColor = isWhite ? '#4ADE80' : '#62BA24';

  // If badge variant is requested, wrap in an official white emblem card for 100% brand consistency
  if (variant === 'badge') {
    return (
      <div className={`inline-flex flex-col items-center bg-white p-3 rounded-2xl shadow-lg border border-stone-200 select-none ${className}`}>
        <PishgamanLogo variant="full" size={size} />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* 1. Official Emblem SVG */}
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm transition-transform duration-300 hover:scale-105"
      >
        {/* Outer Deep Navy Orbit Arc */}
        <path
          d="M 52 145 C 32 118 34 78 60 50 C 88 22 138 20 166 48 C 182 64 190 86 188 108 C 186 94 176 74 158 58 C 132 36 90 36 68 58 C 44 80 44 112 60 134 C 64 140 70 144 76 146 C 66 147 58 147 52 145 Z"
          fill={navyColor}
        />

        {/* Inner Lime-Green Arc */}
        <path
          d="M 68 135 C 56 116 56 86 74 66 C 94 44 130 46 152 66 C 160 74 165 84 166 94 C 162 84 154 74 144 66 C 126 52 98 52 82 70 C 66 88 66 112 76 130 C 78 134 82 136 86 138 C 78 138 72 137 68 135 Z"
          fill={greenColor}
        />

        {/* Central Plant Foliage - 3 Stylized Leaves */}
        {/* Center Main Upright Leaf */}
        <path
          d="M 100 68 C 114 88 116 114 100 132 C 84 114 86 88 100 68 Z"
          fill={greenColor}
        />

        {/* Left Leaf (Angled outwards) */}
        <path
          d="M 98 124 C 76 122 62 106 68 96 C 80 92 92 106 98 124 Z"
          fill={greenColor}
        />

        {/* Right Leaf (Angled outwards) */}
        <path
          d="M 102 124 C 124 122 138 106 132 96 C 120 92 108 106 102 124 Z"
          fill={greenColor}
        />

        {/* Center Navy Stem Vein */}
        <path
          d="M 100 78 L 100 132"
          stroke={navyColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Base Wave / Swoosh in Deep Navy Blue curving out to the right */}
        <path
          d="M 62 136 C 76 148 100 150 120 146 C 142 142 165 136 192 138 C 168 144 142 152 118 152 C 94 153 74 146 62 136 Z"
          fill={navyColor}
        />
        <path
          d="M 72 144 C 92 136 112 136 124 142 C 148 136 174 136 195 142 C 165 147 138 147 114 146 C 92 145 78 146 72 144 Z"
          fill={navyColor}
        />
      </svg>

      {/* 2. Official Wordmark Section: PISHGAMAN + Divider + پیشگامان */}
      {variant !== 'icon' && (
        <div className="flex flex-col items-center justify-center text-center">
          {/* PISHGAMAN Latin Wordmark with Leaf Cutout in 'P' */}
          <div className="flex items-center tracking-widest font-black leading-none">
            <span
              className="text-base sm:text-lg tracking-[0.18em] font-black uppercase inline-flex items-center"
              style={{ color: greenColor, fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              PISHGAMAN
            </span>
          </div>

          {/* Thin Horizontal Navy Divider */}
          <div
            className="w-full h-[2px] my-1 rounded-full opacity-90"
            style={{ backgroundColor: navyColor }}
          />

          {/* Persian Calligraphy: پیشگامان */}
          <div
            className="text-sm sm:text-base font-black leading-none tracking-normal"
            style={{ color: navyColor, fontFamily: 'Vazirmatn, Tahoma, sans-serif' }}
          >
            پیشگامان
          </div>
        </div>
      )}
    </div>
  );
};
