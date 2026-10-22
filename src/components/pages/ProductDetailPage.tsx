import React, { useState, useEffect } from 'react';
import { SMARTPHONE_PRODUCTS } from '../../data/products';
import { SmartphoneProduct, PhoneAngle, AngleView } from '../../types';
import { Phone3DDisplay } from '../common/Phone3DDisplay';
import {
  ArrowLeft,
  Heart,
  Phone,
  Mail,
  CheckCircle2,
  Cpu,
  Layers,
  Battery,
  Wifi,
  ShieldCheck,
  Eye,
  MessageSquare,
  Share2,
  Rotate3d,
  Sparkles,
  Camera,
  Smartphone,
  Maximize2,
} from 'lucide-react';

interface ProductDetailPageProps {
  productId: string;
  onBack: () => void;
  onNavigateToDetail: (id: string) => void;
  onOpenEnquiry: (subject: string, type: 'phone') => void;
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
}

const ANGLE_PRESETS: AngleView[] = [
  {
    id: 'studio',
    label: 'Studio 3D Iso',
    description: 'Isometric 3/4 hardware perspective with studio rim glow',
  },
  {
    id: 'front',
    label: 'Front Display',
    description: 'Active OLED face, bezel profile & camera notch/punch-hole',
  },
  {
    id: 'rear',
    label: 'Rear Optics',
    description: 'Multi-lens camera island array, sensor rings & back glass finish',
  },
  {
    id: 'side',
    label: 'Side Profile',
    description: 'Ultra-thin CNC chassis thickness, power key & volume rockers',
  },
  {
    id: 'orbit',
    label: '360° Orbit',
    description: 'Interactive real-time 3D rotation — drag in any direction',
  },
];

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  productId,
  onBack,
  onNavigateToDetail,
  onOpenEnquiry,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);

  // Find target product or fallback
  const product =
    SMARTPHONE_PRODUCTS.find((p) => p.id === productId) || SMARTPHONE_PRODUCTS[0];

  // Active viewing angle state
  const [activeAngle, setActiveAngle] = useState<PhoneAngle>('studio');

  // Reset states when viewing a different product
  useEffect(() => {
    setActiveAngle('studio');
  }, [productId, product]);

  const isSaved = wishlistIds.includes(product.id);

  // Related products from the same brand or adjacent category
  const relatedProducts = SMARTPHONE_PRODUCTS.filter(
    (p) => p.id !== product.id && (p.brand === product.brand || p.category === product.category)
  ).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const activeAngleDetails = ANGLE_PRESETS.find((a) => a.id === activeAngle) || ANGLE_PRESETS[0];

  return (
    <div className="w-full bg-[#080D0B] text-[#F5F7F5] py-12 space-y-16">
      
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-medium text-[#A4B0A8] hover:text-[#36D17C] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Smartphone Catalogue</span>
        </button>
      </div>

      {/* Main Product Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Device Presentation, Multi-Angle Gallery & Interactive 3D (Span 6) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="relative rounded-3xl bg-[#0F1612] border border-[#1E3528] p-4 sm:p-6 shadow-2xl">
              
              {/* Dynamic 3D Display with Multiple Angle Views */}
              <Phone3DDisplay
                product={product}
                size="lg"
                allowToggle3D={false}
                activeAngle={activeAngle}
                onSelectAngle={setActiveAngle}
              />

              {/* Wishlist toggle */}
              <button
                onClick={() => onToggleWishlist(product.id)}
                className={`absolute top-6 right-6 p-3 rounded-xl border backdrop-blur-md transition-colors ${
                  isSaved
                    ? 'bg-[#36D17C] text-[#080D0B] border-[#36D17C]'
                    : 'bg-[#080D0B]/80 text-[#A4B0A8] hover:text-[#36D17C] border-[#1B2921]'
                }`}
                aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
              >
                <Heart className="w-5 h-5 fill-current" />
              </button>
            </div>

            {/* MULTI-ANGLE PERSPECTIVE SELECTOR STRIP */}
            <div className="rounded-2xl bg-[#0F1612] border border-[#1E3528] p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#36D17C] uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                  <Rotate3d className="w-3.5 h-3.5" />
                  <span>Interactive Angle &amp; Perspective Views</span>
                </span>
                <span className="text-[11px] font-mono text-[#A4B0A8]">
                  Angle: <strong className="text-[#F5F7F5]">{activeAngleDetails.label}</strong>
                </span>
              </div>

              {/* Angle Selector Buttons */}
              <div className="grid grid-cols-5 gap-2">
                {ANGLE_PRESETS.map((preset) => {
                  const isSelected = activeAngle === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => setActiveAngle(preset.id)}
                      className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                        isSelected
                          ? 'bg-[#10251B] border-[#36D17C] text-[#36D17C] shadow-lg shadow-[#36D17C]/15 ring-1 ring-[#36D17C]'
                          : 'bg-[#141A17] border-[#1B2921] text-[#A4B0A8] hover:text-[#F5F7F5] hover:border-[#36D17C]/40'
                      }`}
                    >
                      {preset.id === 'studio' && <Sparkles className="w-4 h-4" />}
                      {preset.id === 'front' && <Smartphone className="w-4 h-4" />}
                      {preset.id === 'rear' && <Camera className="w-4 h-4" />}
                      {preset.id === 'side' && <Layers className="w-4 h-4" />}
                      {preset.id === 'orbit' && <Rotate3d className="w-4 h-4" />}
                      <span className="text-[10px] font-mono font-medium leading-tight block">
                        {preset.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Perspective Detail Bar */}
              <div className="p-2.5 rounded-lg bg-[#141A17] border border-[#1B2921] flex items-center gap-2 text-xs text-[#A4B0A8]">
                <Eye className="w-3.5 h-3.5 text-[#36D17C] shrink-0" />
                <span className="text-[11px] leading-tight">
                  {activeAngleDetails.description}
                </span>
              </div>
            </div>

            {/* Verification marker */}
            <div className="p-4 rounded-xl bg-[#141A17] border border-[#1B2921] flex items-center justify-between text-xs text-[#A4B0A8]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#36D17C]" />
                <span>Verified Handset Specification &amp; Perspectives</span>
              </div>
              <button
                onClick={handleCopyLink}
                className="hover:text-[#36D17C] flex items-center gap-1 font-mono text-[11px]"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Copied' : 'Share'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Model Details, Pricing & Inquiries (Span 6) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono mb-2">
                <span className="text-[#36D17C] font-bold uppercase">{product.brand}</span>
                <span className="text-[#1E3528]">&middot;</span>
                <span className="text-[#A4B0A8]">{product.modelLine}</span>
                {product.badge && (
                  <>
                    <span className="text-[#1E3528]">&middot;</span>
                    <span className="px-2 py-0.5 rounded bg-[#10251B] text-[#36D17C] font-sans text-[10px] font-semibold border border-[#36D17C]/20">
                      {product.badge}
                    </span>
                  </>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7F5] tracking-tight">
                {product.name}
              </h1>

              <p className="text-sm text-[#A4B0A8] mt-3 leading-relaxed">
                {product.longDescription}
              </p>
            </div>

            {/* Price & Availability Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#10251B] to-[#0E1B14] border border-[#1E3528] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono text-[#A4B0A8] uppercase tracking-wider block">
                  Current Trade Price
                </span>
                <span className="text-xl font-bold text-[#F5F7F5] font-mono">
                  {product.priceDisplay}
                </span>
                <span className="text-xs text-[#36D17C] block mt-0.5 font-medium">
                  Status: {product.availability}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry(`${product.name} - Price & Allocation`, 'phone')}
                  className="px-6 py-3 rounded-xl bg-[#36D17C] hover:bg-[#2EB86B] text-[#080D0B] font-bold text-xs transition-all shadow-md shadow-[#36D17C]/25 whitespace-nowrap"
                >
                  Enquire for This Model
                </button>
              </div>
            </div>

            {/* Verified Technical Specifications Grid */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-[#F5F7F5] uppercase tracking-wider font-mono">
                Verified Technical Specifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#141A17] border border-[#1B2921]">
                  <span className="text-[#55645B] block font-mono text-[10px]">DISPLAY</span>
                  <span className="text-[#F5F7F5] font-medium mt-0.5 block">{product.specs.display}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141A17] border border-[#1B2921]">
                  <span className="text-[#55645B] block font-mono text-[10px]">CHIPSET / PROCESSOR</span>
                  <span className="text-[#F5F7F5] font-medium mt-0.5 block">{product.specs.processor}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141A17] border border-[#1B2921]">
                  <span className="text-[#55645B] block font-mono text-[10px]">REAR CAMERA SYSTEM</span>
                  <span className="text-[#F5F7F5] font-medium mt-0.5 block">{product.specs.rearCamera}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141A17] border border-[#1B2921]">
                  <span className="text-[#55645B] block font-mono text-[10px]">FRONT SELFIE CAMERA</span>
                  <span className="text-[#F5F7F5] font-medium mt-0.5 block">{product.specs.frontCamera}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141A17] border border-[#1B2921]">
                  <span className="text-[#55645B] block font-mono text-[10px]">BATTERY &amp; CHARGING</span>
                  <span className="text-[#F5F7F5] font-medium mt-0.5 block">{product.specs.battery}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141A17] border border-[#1B2921]">
                  <span className="text-[#55645B] block font-mono text-[10px]">CONNECTIVITY &amp; NETWORK</span>
                  <span className="text-[#F5F7F5] font-medium mt-0.5 block">{product.specs.connectivity}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141A17] border border-[#1B2921]">
                  <span className="text-[#55645B] block font-mono text-[10px]">STORAGE VARIANTS</span>
                  <span className="text-[#F5F7F5] font-medium mt-0.5 block">{product.specs.variants}</span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#141A17] border border-[#1B2921]">
                  <span className="text-[#55645B] block font-mono text-[10px]">OPERATING SYSTEM</span>
                  <span className="text-[#F5F7F5] font-medium mt-0.5 block">{product.specs.os}</span>
                </div>
              </div>
            </div>

            {/* Key Hardware Highlights */}
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-semibold text-[#F5F7F5] uppercase tracking-wider font-mono">
                Key Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#D8E0DA]">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-[#0F1612] border border-[#1B2921]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36D17C] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Line Assistance Box */}
            <div className="pt-4 border-t border-[#141A17] flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href="tel:8929103610"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#141A17] border border-[#1E3528] text-xs font-mono text-[#F5F7F5] hover:text-[#36D17C] hover:border-[#36D17C]/40 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#36D17C]" />
                <span>Call Trade Desk: 8929103610</span>
              </a>

              <a
                href={`mailto:JOHN@BROOTSMEDIA.COM?subject=Inquiry for ${encodeURIComponent(product.name)}`}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#141A17] border border-[#1E3528] text-xs font-mono text-[#A4B0A8] hover:text-[#36D17C] transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#36D17C]" />
                <span>Email JOHN@BROOTSMEDIA.COM</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Related Products from the requested catalogue */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-[#141A17]">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-[#F5F7F5]">
              Related Models from Catalogue
            </h3>
            <button
              onClick={onBack}
              className="text-xs font-semibold text-[#36D17C] hover:underline"
            >
              Browse All 10 Models
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                className="rounded-2xl bg-[#141A17] border border-[#1B2921] p-5 flex flex-col justify-between hover:border-[#36D17C]/40 transition-all group"
              >
                <div>
                  <Phone3DDisplay product={rel} size="sm" allowToggle3D={false} />
                  <div className="mt-3">
                    <span className="text-[10px] font-mono text-[#36D17C] uppercase">{rel.brand}</span>
                    <h4 className="text-sm font-bold text-[#F5F7F5] group-hover:text-[#36D17C] truncate mt-0.5">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-[#A4B0A8] line-clamp-1 mt-1 font-mono">
                      {rel.specs.display.split(' ')[0]} &middot; {rel.specs.processor.split(' ')[0]}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1C2C22] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#A4B0A8]">{rel.priceDisplay}</span>
                  <button
                    onClick={() => {
                      onNavigateToDetail(rel.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-[#36D17C] hover:underline flex items-center gap-1"
                  >
                    <span>View Specs</span>
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
};
