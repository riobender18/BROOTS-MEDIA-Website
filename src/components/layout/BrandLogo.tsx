import React, { useState } from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  className = '',
  onClick,
}) => {
  const [imageError, setImageError] = useState(false);
  const logoSrc = '/assets/aistudio/WhatsApp_Image_2026-10-19_at_2.44.01_PM_96c323a8.jpeg';

  const sizeConfigs = {
    sm: {
      imgSize: 'w-8 h-8',
      titleSize: 'text-base',
      subSize: 'text-[9px]',
      gap: 'gap-2.5',
    },
    md: {
      imgSize: 'w-10 h-10',
      titleSize: 'text-lg',
      subSize: 'text-[10px]',
      gap: 'gap-3',
    },
    lg: {
      imgSize: 'w-14 h-14',
      titleSize: 'text-2xl',
      subSize: 'text-xs',
      gap: 'gap-4',
    },
  };

  const currentSize = sizeConfigs[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center ${currentSize.gap} cursor-pointer select-none group ${className}`}
      role="banner"
      aria-label="BROOTS MEDIA PVT LTD Home"
    >
      {/* Brand Emblem Avatar / Mark */}
      <div className={`relative ${currentSize.imgSize} rounded-xl overflow-hidden shrink-0 border border-[#36D17C]/30 bg-[#10251B] p-0.5 shadow-sm shadow-[#36D17C]/10 transition-transform duration-200 group-hover:scale-105 group-hover:border-[#36D17C]/60`}>
        {!imageError ? (
          <img
            src={logoSrc}
            alt="BROOTS MEDIA Official Logo Emblem"
            className="w-full h-full object-cover rounded-[10px]"
            onError={() => setImageError(true)}
          />
        ) : (
          /* High-Fidelity SVG Fallback matching the Tree of Roots motif */
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#10251B] to-[#080D0B] text-[#36D17C]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#36D17C]"
            >
              <path
                d="M24 6C18 6 14 11 14 16C14 18.5 15.2 20.8 17 22.4C17 25 18 29 20 32C20 36 17 38 14 41C20 40 23 37 24 33C25 37 28 40 34 41C31 38 28 36 28 32C30 29 31 25 31 22.4C32.8 20.8 34 18.5 34 16C34 11 30 6 24 6Z"
                fill="#36D17C"
                opacity="0.9"
              />
              <path
                d="M19 18C15 17 10 20 10 24C10 27 13 29 16 28C17.5 24 19 21 19 18Z"
                fill="#2EB86B"
                opacity="0.8"
              />
              <path
                d="M29 18C33 17 38 20 38 24C38 27 35 29 32 28C30.5 24 29 21 29 18Z"
                fill="#2EB86B"
                opacity="0.8"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5">
          <span className={`font-extrabold tracking-tight text-[#F5F7F5] ${currentSize.titleSize} transition-colors group-hover:text-[#36D17C]`}>
            BROOTS
          </span>
          <span className={`font-bold tracking-tight text-[#36D17C] ${currentSize.titleSize}`}>
            MEDIA
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-[#A4B0A8] tracking-widest uppercase font-medium mt-0.5 ${currentSize.subSize}`}>
            PRIVATE LIMITED
          </span>
        )}
      </div>
    </div>
  );
};
