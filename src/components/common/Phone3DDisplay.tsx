import React, { useState, useRef } from 'react';
import { SmartphoneProduct, PhoneAngle } from '../../types';
import { Phone3DCanvas } from './Phone3DCanvas';
import { Rotate3d, Image as ImageIcon } from 'lucide-react';

interface Phone3DDisplayProps {
  product: SmartphoneProduct;
  size?: 'sm' | 'md' | 'lg';
  allowToggle3D?: boolean;
  className?: string;
  activeAngle?: PhoneAngle;
  onSelectAngle?: (angle: PhoneAngle) => void;
  showAnglePicker?: boolean;
}

export const Phone3DDisplay: React.FC<Phone3DDisplayProps> = ({
  product,
  size = 'md',
  allowToggle3D = true,
  className = '',
  activeAngle: controlledAngle,
  onSelectAngle,
  showAnglePicker = false,
}) => {
  // Angle state (controlled or uncontrolled)
  const [internalAngle, setInternalAngle] = useState<PhoneAngle>(controlledAngle || 'studio');
  const currentAngle = controlledAngle || internalAngle;

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const heightMap = {
    sm: 'h-52 sm:h-56',
    md: 'h-64 sm:h-72',
    lg: 'h-80 sm:h-96',
  };

  const handleAngleChange = (angle: PhoneAngle, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (onSelectAngle) {
      onSelectAngle(angle);
    } else {
      setInternalAngle(angle);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || currentAngle !== 'studio') return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth tilt calculations (-12deg to +12deg)
    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const activeImageSrc = product.imageSrc;
  const isWhiteFinish = product.id === 'apple-iphone-17' || activeImageSrc.includes('white');
  const isStudioImageMode = currentAngle === 'studio' && !imgError;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full ${heightMap[size]} rounded-2xl bg-gradient-to-b from-[#141A17] via-[#0E1511] to-[#080D0B] border border-[#1B2921] overflow-hidden select-none group hover:border-[#36D17C]/50 transition-all duration-300 ${className}`}
      style={{ perspective: '1000px' }}
    >
      {/* Background ambient lighting glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(54,209,124,0.12),transparent_70%)] pointer-events-none" />

      {/* Top badges */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-2 pointer-events-none">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#080D0B]/80 border border-[#36D17C]/40 text-[10px] font-mono font-bold text-[#36D17C] backdrop-blur-md">
          <Rotate3d className="w-3 h-3" />
          <span>
            {currentAngle === 'studio'
              ? '3D STUDIO RENDER'
              : currentAngle === 'orbit'
              ? '360° WEBGL ORBIT'
              : `3D ${currentAngle.toUpperCase()} VIEW`}
          </span>
        </span>
        <span className="text-[10px] text-[#A4B0A8] font-mono hidden sm:inline">
          {product.brand}
        </span>
      </div>

      {/* View Mode Switcher Toggle (Studio Render vs 360° Orbit) */}
      {allowToggle3D && (
        <div className="absolute top-3 right-3 z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleAngleChange(currentAngle === 'studio' ? 'orbit' : 'studio', e);
            }}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0C120E]/90 hover:bg-[#141A17] border border-[#1E3528] hover:border-[#36D17C]/50 text-[10px] font-mono text-[#D8E0DA] hover:text-[#36D17C] transition-all backdrop-blur-md shadow-lg"
            title="Toggle between 3D studio image and 360 WebGL orbit"
          >
            {currentAngle === 'studio' ? (
              <>
                <Rotate3d className="w-3 h-3 text-[#36D17C]" />
                <span className="hidden sm:inline">Spin 360°</span>
              </>
            ) : (
              <>
                <ImageIcon className="w-3 h-3 text-[#36D17C]" />
                <span className="hidden sm:inline">Studio 3D</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Render 3D Image with Interactive Parallax Tilt or Fallback to 3D Canvas */}
      {isStudioImageMode ? (
        <div className="w-full h-full flex items-center justify-center p-3 relative">
          {/* Tilt container */}
          <div
            className="relative w-full h-full flex items-center justify-center transition-transform duration-150 ease-out"
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.04 : 1})`,
              transformStyle: 'preserve-3d',
            }}
          >
            {/* The 3D Phone Image */}
            {isWhiteFinish ? (
              <div className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden bg-white/95 p-1 shadow-lg shadow-black/40">
                <img
                  src={activeImageSrc}
                  alt={`${product.name} 3D Studio Hardware Render`}
                  className="max-h-full max-w-full object-contain scale-125 transition-transform duration-200"
                  onError={() => setImgError(true)}
                  loading="lazy"
                />
              </div>
            ) : (
              <img
                src={activeImageSrc}
                alt={`${product.name} 3D Studio Hardware Render`}
                className="max-h-full max-w-full object-contain drop-shadow-[0_18px_25px_rgba(0,0,0,0.85)] filter contrast-105"
                onError={() => setImgError(true)}
                loading="lazy"
              />
            )}

            {/* Dynamic Specular Sheen Overlay on Tilt */}
            {isHovered && (
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl opacity-25 mix-blend-overlay transition-opacity duration-200"
                style={{
                  background: `radial-gradient(circle at ${50 + tilt.y * 2}% ${50 - tilt.x * 2}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
                }}
              />
            )}
          </div>

          {/* Bottom subtle model kicker */}
          <div className="absolute bottom-2 inset-x-3 flex items-center justify-between text-[9px] font-mono text-[#55645B] pointer-events-none">
            <span className="truncate">{product.specs.display.split(' ')[0]}</span>
            <span className="text-[#36D17C]">Interactive Tilt</span>
          </div>
        </div>
      ) : (
        /* Interactive 3D WebGL Three.js Canvas with Selected Angle */
        <Phone3DCanvas
          product={product}
          size={size}
          interactive={true}
          autoRotate={currentAngle === 'orbit'}
          showControls={false}
          activeAngle={currentAngle}
          onAngleChange={(angle) => handleAngleChange(angle)}
          className="border-0 bg-transparent"
        />
      )}

      {/* Floating Angle Picker Overlay when showAnglePicker is true */}
      {showAnglePicker && (
        <div className="absolute bottom-2 right-3 z-20 flex items-center gap-1 p-1 rounded-xl bg-[#080D0B]/85 border border-[#1E3528] backdrop-blur-md">
          {(['studio', 'front', 'rear', 'side', 'orbit'] as PhoneAngle[]).map((angle) => {
            const isSelected = currentAngle === angle;
            const labels: Record<PhoneAngle, string> = {
              studio: 'Studio',
              front: 'Front',
              rear: 'Rear',
              side: 'Side',
              orbit: '360°',
            };
            return (
              <button
                key={angle}
                onClick={(e) => handleAngleChange(angle, e)}
                className={`px-2 py-0.5 rounded-lg text-[9px] font-mono transition-colors ${
                  isSelected
                    ? 'bg-[#36D17C] text-[#080D0B] font-bold'
                    : 'text-[#A4B0A8] hover:text-[#F5F7F5]'
                }`}
              >
                {labels[angle]}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
