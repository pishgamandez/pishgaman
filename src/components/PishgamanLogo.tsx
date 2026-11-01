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
  // Dimensions for height
  const heightClass = 
    size === 'sm' ? 'h-8' : 
    size === 'lg' ? 'h-16' : 
    size === 'xl' ? 'h-20' : 'h-11';

  if (variant === 'badge') {
    return (
      <div className={`inline-flex flex-col items-center bg-white p-2.5 rounded-2xl shadow-lg border border-stone-200 select-none ${className}`}>
        <img
          src="/assets/aistudio/IMG_20261024_160701_73a53339.jpg"
          alt="Pishgaman Logo"
          className={`${heightClass} w-auto object-contain`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/assets/aistudio/IMG_20261024_160701_73a53339.jpg"
        alt="Pishgaman Logo"
        className={`${heightClass} w-auto object-contain transition-transform duration-300 hover:scale-105`}
      />
    </div>
  );
};
