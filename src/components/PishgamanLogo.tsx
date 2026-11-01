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
      {/* 1. Official Logo Image */}
      <img
        src="/assets/aistudio/IMG_20261024_160701_73a53339.jpg"
        alt="Pishgaman Logo"
        width={dim * 2}
        height={dim * 2}
        className="shrink-0 drop-shadow-sm transition-transform duration-300 hover:scale-105"
      />

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
