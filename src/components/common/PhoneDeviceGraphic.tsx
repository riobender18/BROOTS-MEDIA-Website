import React from 'react';
import { SmartphoneProduct } from '../../types';

interface PhoneDeviceGraphicProps {
  product: SmartphoneProduct;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const PhoneDeviceGraphic: React.FC<PhoneDeviceGraphicProps> = ({
  product,
  className = '',
  size = 'md',
}) => {
  const isApple = product.brand === 'Apple';
  const isVivo = product.brand === 'vivo';
  const isPoco = product.brand === 'POCO';
  const isRealme = product.brand === 'realme';
  const isAiPlus = product.brand === 'Ai+';

  // Height and aspect ratio configuration
  const sizeMap = {
    sm: 'h-48',
    md: 'h-64',
    lg: 'h-80 sm:h-96',
  };

  // Distinctive brand finish colors
  let frameGradient = 'from-[#1B2921] to-[#0A120E]';
  let accentRing = 'border-[#36D17C]/40';
  let badgeColor = 'text-[#36D17C] bg-[#10251B]';

  if (isApple) {
    frameGradient = 'from-[#222E28] via-[#141F1A] to-[#0C1410]';
    accentRing = 'border-[#36D17C]/30';
    badgeColor = 'text-[#F5F7F5] bg-[#141A17]';
  } else if (isPoco) {
    frameGradient = 'from-[#252818] via-[#1A1D12] to-[#0C0F08]';
    accentRing = 'border-yellow-500/30';
    badgeColor = 'text-yellow-400 bg-yellow-950/40';
  } else if (isRealme) {
    frameGradient = 'from-[#1C2C24] via-[#122119] to-[#08120D]';
    accentRing = 'border-emerald-400/30';
    badgeColor = 'text-emerald-400 bg-emerald-950/40';
  }

  return (
    <div
      className={`relative w-full ${sizeMap[size]} rounded-2xl bg-gradient-to-b ${frameGradient} p-4 flex flex-col items-center justify-between border border-[#1B2921] overflow-hidden select-none group-hover:border-[#36D17C]/50 transition-all duration-300 ${className}`}
    >
      {/* Background glow and subtle mesh lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#36D17C]/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Top Brand Bar & Badge */}
      <div className="w-full flex items-center justify-between z-10 text-xs">
        <span className="font-mono text-[11px] font-bold text-[#A4B0A8] tracking-widest uppercase">
          {product.brand}
        </span>
        <span className={`px-2 py-0.5 rounded text-[10px] font-medium tracking-wide ${badgeColor}`}>
          {product.category}
        </span>
      </div>

      {/* Center Phone Chassis Illustration */}
      <div className="relative my-auto flex items-center justify-center">
        {/* Outer Phone Bezel */}
        <div className="w-32 sm:w-36 h-44 sm:h-52 rounded-[28px] bg-[#0A0E0C] border-2 border-[#243B2E] p-1.5 shadow-2xl relative flex flex-col items-center justify-between shadow-black/80">
          
          {/* Top Speaker / Dynamic Island or Punch Hole */}
          <div className="w-full flex justify-center pt-1 z-10">
            {isApple ? (
              <div className="w-12 h-3 bg-black rounded-full border border-[#1F2C24] flex items-center justify-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#18231C]" />
                <div className="w-1 h-1 rounded-full bg-[#36D17C]/60" />
              </div>
            ) : (
              <div className="w-2.5 h-2.5 bg-black rounded-full border border-[#1F2C24] flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-[#1A2E22]" />
              </div>
            )}
          </div>

          {/* Screen Content Graphics */}
          <div className="w-full flex-1 rounded-[22px] bg-gradient-to-br from-[#101A14] via-[#0B120E] to-[#060A08] border border-[#16271D] overflow-hidden p-2 flex flex-col justify-between my-1">
            <div className="flex justify-between items-center text-[8px] text-[#A4B0A8] font-mono">
              <span>5G</span>
              <span>100%</span>
            </div>

            {/* Graphic Wallpaper Pattern */}
            <div className="my-auto text-center space-y-1">
              <div className="w-8 h-8 rounded-full bg-[#36D17C]/15 border border-[#36D17C]/30 mx-auto flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#36D17C]/40 animate-pulse" />
              </div>
              <p className="text-[9px] font-bold text-[#F5F7F5] tracking-tight leading-none">
                {product.name.replace(/Apple |vivo |POCO |realme |Ai\+ /g, '')}
              </p>
              <p className="text-[7px] text-[#36D17C] font-mono">
                {product.specs.processor.split(' ')[0]}
              </p>
            </div>

            {/* Bottom Bar indicator */}
            <div className="w-8 h-1 bg-[#23382C] rounded-full mx-auto" />
          </div>

          {/* Bottom subtle edge */}
          <div className="w-full flex justify-center pb-0.5">
            <div className="w-3 h-0.5 bg-[#1B2B20] rounded-full" />
          </div>

        </div>

        {/* Camera Module Hint on the side / rear reflection */}
        <div className="absolute -top-1 -right-2 w-10 h-14 rounded-xl bg-[#090D0B] border border-[#2B4335] shadow-lg opacity-85 p-1 flex flex-col justify-around items-center">
          <div className="w-4 h-4 rounded-full border border-[#36D17C]/40 bg-[#14231A] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#36D17C]" />
          </div>
          <div className="w-4 h-4 rounded-full border border-[#36D17C]/30 bg-[#14231A] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#203326]" />
          </div>
        </div>
      </div>

      {/* Bottom Model Name & Spec Highlight */}
      <div className="w-full text-center z-10 pt-2 border-t border-[#16271D]">
        <p className="text-xs font-semibold text-[#F5F7F5] truncate">
          {product.name}
        </p>
        <p className="text-[10px] text-[#A4B0A8] truncate mt-0.5 font-mono">
          {product.specs.display.split(' ')[0]} &middot; {product.specs.rearCamera.split('+')[0].trim()}
        </p>
      </div>

    </div>
  );
};
