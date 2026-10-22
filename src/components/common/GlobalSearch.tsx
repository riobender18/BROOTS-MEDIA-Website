import React, { useState, useEffect, useRef } from 'react';
import { SMARTPHONE_PRODUCTS } from '../../data/products';
import { SERVICES_DATA } from '../../data/services';
import { SmartphoneProduct, ServiceItem, PageType } from '../../types';
import {
  Search,
  X,
  Smartphone,
  Sparkles,
  ArrowRight,
  Eye,
  MessageSquare,
  Command,
  CornerDownLeft,
} from 'lucide-react';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageType, productId?: string) => void;
  onOpenEnquiry: (subject: string, type: 'phone' | 'service') => void;
}

export const GlobalSearch: React.FC<GlobalSearchProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  // Search through smartphones
  const matchedPhones = trimmed
    ? SMARTPHONE_PRODUCTS.filter((phone) => {
        return (
          phone.name.toLowerCase().includes(trimmed) ||
          phone.brand.toLowerCase().includes(trimmed) ||
          phone.specs.processor.toLowerCase().includes(trimmed) ||
          phone.specs.display.toLowerCase().includes(trimmed) ||
          phone.specs.rearCamera.toLowerCase().includes(trimmed) ||
          phone.category.toLowerCase().includes(trimmed) ||
          phone.features.some((f) => f.toLowerCase().includes(trimmed))
        );
      })
    : SMARTPHONE_PRODUCTS.slice(0, 4); // Show top 4 recommended by default

  // Search through services
  const matchedServices = trimmed
    ? SERVICES_DATA.filter((service) => {
        return (
          service.title.toLowerCase().includes(trimmed) ||
          service.tagline.toLowerCase().includes(trimmed) ||
          service.description.toLowerCase().includes(trimmed) ||
          service.category.toLowerCase().includes(trimmed) ||
          service.benefits.some((b) => b.toLowerCase().includes(trimmed)) ||
          service.deliverables.some((d) => d.toLowerCase().includes(trimmed))
        );
      })
    : SERVICES_DATA.slice(0, 3); // Show top 3 recommended by default

  const totalResults = matchedPhones.length + matchedServices.length;

  const handleSelectPhone = (phone: SmartphoneProduct) => {
    onClose();
    onNavigate('product-detail', phone.id);
  };

  const handleSelectService = (service: ServiceItem) => {
    onClose();
    onNavigate('services');
    setTimeout(() => {
      const element = document.getElementById(service.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#0C120E] border border-[#1E3528] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] text-[#F5F7F5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center px-4 py-3.5 border-b border-[#1A2A20] bg-[#101813]">
          <Search className="w-5 h-5 text-[#36D17C] shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all 10 smartphones, 5G specs, marketing services..."
            className="w-full bg-transparent text-sm sm:text-base text-[#F5F7F5] placeholder-[#55645B] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-[#A4B0A8] hover:text-[#F5F7F5] mr-2"
              title="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-mono text-[#A4B0A8] bg-[#141A17] hover:text-[#F5F7F5] px-2 py-1 rounded border border-[#1B2921]"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Header indicator */}
          <div className="flex items-center justify-between text-xs text-[#A4B0A8] font-mono px-1">
            <span>
              {query ? (
                <>Found <strong className="text-[#36D17C]">{totalResults}</strong> matches</>
              ) : (
                'Suggested Products & Services'
              )}
            </span>
            <span className="text-[11px] text-[#55645B]">Real-Time Global Index</span>
          </div>

          {totalResults === 0 ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#141A17] border border-[#1B2921] flex items-center justify-center text-[#55645B] mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-sm font-semibold text-[#F5F7F5]">No matching catalogue items or services</p>
              <p className="text-xs text-[#A4B0A8] max-w-sm mx-auto">
                Try searching for phone models like "iPhone 16", "vivo T5x", "POCO", "realme", or services like "SEO", "Performance Ads", or "Web Design".
              </p>
            </div>
          ) : (
            <>
              {/* 1. Smartphones Group */}
              {matchedPhones.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#36D17C] font-mono uppercase tracking-wider px-1">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Smartphones ({matchedPhones.length})</span>
                  </div>

                  <div className="space-y-1.5">
                    {matchedPhones.map((phone) => (
                      <div
                        key={phone.id}
                        className="group p-3 rounded-xl bg-[#141A17] hover:bg-[#1A261F] border border-[#1B2921] hover:border-[#36D17C]/40 transition-all flex items-center justify-between gap-3 cursor-pointer"
                        onClick={() => handleSelectPhone(phone)}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-12 rounded-lg bg-[#0E1511] border border-[#1E3528] flex items-center justify-center shrink-0 p-1 overflow-hidden">
                            <img
                              src={phone.imageSrc}
                              alt={phone.name}
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-[#F5F7F5] group-hover:text-[#36D17C] transition-colors truncate">
                                {phone.name}
                              </span>
                              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#10251B] text-[#36D17C] shrink-0">
                                {phone.category}
                              </span>
                            </div>
                            <p className="text-xs text-[#A4B0A8] truncate mt-0.5 font-mono">
                              {phone.specs.display.split(' ')[0]} &middot; {phone.specs.processor.split(' ')[0]} &middot; {phone.specs.rearCamera.split('+')[0]}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-xs font-mono text-[#55645B] hidden sm:inline">
                            {phone.priceDisplay}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onClose();
                              onOpenEnquiry(`${phone.name} - Price Check`, 'phone');
                            }}
                            className="text-xs px-2.5 py-1 rounded-lg bg-[#36D17C]/15 hover:bg-[#36D17C] text-[#36D17C] hover:text-[#080D0B] font-semibold transition-colors"
                          >
                            Enquire
                          </button>
                          <ArrowRight className="w-4 h-4 text-[#A4B0A8] group-hover:text-[#36D17C] transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 2. Services Group */}
              {matchedServices.length > 0 && (
                <div className="space-y-2 pt-2 border-t border-[#16241C]">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#36D17C] font-mono uppercase tracking-wider px-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Marketing Services ({matchedServices.length})</span>
                  </div>

                  <div className="space-y-1.5">
                    {matchedServices.map((service) => (
                      <div
                        key={service.id}
                        className="group p-3 rounded-xl bg-[#141A17] hover:bg-[#1A261F] border border-[#1B2921] hover:border-[#36D17C]/40 transition-all flex items-center justify-between gap-3 cursor-pointer"
                        onClick={() => handleSelectService(service)}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-9 h-9 rounded-lg bg-[#10251B] border border-[#36D17C]/30 flex items-center justify-center shrink-0 text-[#36D17C]">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <h4 className="text-sm font-bold text-[#F5F7F5] group-hover:text-[#36D17C] transition-colors truncate">
                              {service.title}
                            </h4>
                            <p className="text-xs text-[#A4B0A8] truncate mt-0.5">
                              {service.tagline}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[11px] font-mono text-[#55645B] hidden sm:inline">
                            {service.category}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onClose();
                              onOpenEnquiry(service.title, 'service');
                            }}
                            className="text-xs px-2.5 py-1 rounded-lg bg-[#10251B] hover:bg-[#36D17C] text-[#36D17C] hover:text-[#080D0B] font-semibold border border-[#36D17C]/20 transition-colors"
                          >
                            Inquire Scope
                          </button>
                          <ArrowRight className="w-4 h-4 text-[#A4B0A8] group-hover:text-[#36D17C] transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2.5 bg-[#090E0B] border-t border-[#16241C] flex items-center justify-between text-[11px] text-[#55645B] font-mono">
          <div className="flex items-center gap-3">
            <span>Press <kbd className="px-1.5 py-0.5 rounded bg-[#141A17] text-[#A4B0A8] border border-[#1B2921]">ESC</kbd> to exit</span>
            <span>&middot;</span>
            <span>Click any item to view details</span>
          </div>
          <span className="text-[#36D17C]">BROOTS MEDIA Real-Time Index</span>
        </div>
      </div>
    </div>
  );
};
