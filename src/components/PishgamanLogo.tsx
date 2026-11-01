import React from 'react';
import logoJpg from '../assets/logo.jpg';

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
  const heightClass = 
    size === 'sm' ? 'h-8' : 
    size === 'lg' ? 'h-16' : 
    size === 'xl' ? 'h-20' : 'h-11';

  const isWhite = variant === 'white';

  if (variant === 'badge' || isWhite) {
    return (
      <div className={`inline-flex items-center bg-white px-3.5 py-2 rounded-2xl shadow-xl border border-stone-200 select-none ${className}`}>
        <img
          src={logoJpg}
          alt="لوگوی رسمی شرکت پیشگامان پایدار فلات نیک (برند پرواز نهاده)"
          className={`${heightClass} w-auto object-contain`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = './logo.jpg';
          }}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={logoJpg}
        alt="لوگوی رسمی شرکت پیشگامان پایدار فلات نیک (برند پرواز نهاده)"
        className={`${heightClass} w-auto object-contain transition-transform duration-300 hover:scale-105`}
        onError={(e) => {
          (e.target as HTMLImageElement).src = './logo.jpg';
        }}
      />
    </div>
  );
};
