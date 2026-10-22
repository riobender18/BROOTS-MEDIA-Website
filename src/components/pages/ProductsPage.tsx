import React, { useState, useMemo } from 'react';
import { SMARTPHONE_PRODUCTS } from '../../data/products';
import { SmartphoneProduct, PhoneAngle } from '../../types';
import { Phone3DDisplay } from '../common/Phone3DDisplay';
import {
  Search,
  SlidersHorizontal,
  Heart,
  Eye,
  MessageSquare,
  Phone,
  ShieldAlert,
  ArrowUpDown,
  Check,
  Rotate3d,
  Sparkles,
} from 'lucide-react';

interface ProductsPageProps {
  onNavigateToDetail: (id: string) => void;
  onOpenEnquiry: (subject: string, type: 'phone') => void;
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
}

interface ProductCardItemProps {
  phone: SmartphoneProduct;
  isSaved: boolean;
  onToggleWishlist: (id: string) => void;
  onNavigateToDetail: (id: string) => void;
  onOpenEnquiry: (subject: string, type: 'phone') => void;
}

const ProductCardItem: React.FC<ProductCardItemProps> = ({
  phone,
  isSaved,
  onToggleWishlist,
  onNavigateToDetail,
  onOpenEnquiry,
}) => {
  const [activeAngle, setActiveAngle] = useState<PhoneAngle>('studio');

  return (
    <div className="rounded-2xl bg-[#141A17] border border-[#1B2921] p-5 flex flex-col justify-between hover:border-[#36D17C]/50 transition-all duration-200 group">
      <div>
        {/* Visual Card Media with 3D Studio Image & Angle Switching */}
        <div className="relative">
          <Phone3DDisplay
            product={phone}
            size="md"
            allowToggle3D={true}
            activeAngle={activeAngle}
            onSelectAngle={setActiveAngle}
          />

          {/* Wishlist toggle */}
          <button
            onClick={() => onToggleWishlist(phone.id)}
            className={`absolute top-3 right-3 p-2 rounded-lg border backdrop-blur-md transition-colors ${
              isSaved
                ? 'bg-[#36D17C] text-[#080D0B] border-[#36D17C]'
                : 'bg-[#080D0B]/80 text-[#A4B0A8] hover:text-[#36D17C] border-[#1B2921]'
            }`}
            aria-label={isSaved ? 'Remove from saved' : 'Save to wishlist'}
          >
            <Heart className="w-4 h-4 fill-current" />
          </button>
        </div>

        {/* Model Info */}
        <div className="mt-4 space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[#36D17C] font-semibold">{phone.brand}</span>
            <span className="text-[#A4B0A8] text-[11px] font-mono">{phone.availability}</span>
          </div>

          <h3
            onClick={() => onNavigateToDetail(phone.id)}
            className="text-lg font-bold text-[#F5F7F5] group-hover:text-[#36D17C] transition-colors cursor-pointer"
          >
            {phone.name}
          </h3>

          <p className="text-xs text-[#A4B0A8] line-clamp-2 leading-relaxed">
            {phone.shortDescription}
          </p>
        </div>

        {/* Verified Specs Preview */}
        <div className="mt-3 pt-3 border-t border-[#1C2C22] grid grid-cols-2 gap-2 text-[11px] text-[#A4B0A8]">
          <div>
            <span className="text-[#55645B] block font-mono">Display</span>
            <span className="text-[#F5F7F5] font-medium truncate block">
              {phone.specs.display.split(' ')[0]} {phone.specs.display.split(' ')[1] || ''}
            </span>
          </div>
          <div>
            <span className="text-[#55645B] block font-mono">Processor</span>
            <span className="text-[#F5F7F5] font-medium truncate block">
              {phone.specs.processor.split(' ')[0]} {phone.specs.processor.split(' ')[1] || ''}
            </span>
          </div>
        </div>
      </div>

      {/* Actions & Price */}
      <div className="mt-5 pt-3 border-t border-[#1C2C22] flex items-center justify-between gap-2">
        <div className="text-xs font-mono">
          <span className="text-[#55645B] block text-[10px]">Price</span>
          <span className="text-[#F5F7F5] font-semibold">{phone.priceDisplay}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigateToDetail(phone.id)}
            className="px-3 py-1.5 rounded-lg border border-[#1E3528] bg-[#0E1511] hover:bg-[#141A17] text-xs font-medium text-[#F5F7F5] hover:text-[#36D17C] transition-colors flex items-center gap-1"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Specs &amp; Angles</span>
          </button>

          <button
            onClick={() => onOpenEnquiry(`${phone.name} - Trade Price & Stock`, 'phone')}
            className="px-3 py-1.5 rounded-lg bg-[#36D17C] hover:bg-[#2EB86B] text-[#080D0B] text-xs font-bold transition-colors"
          >
            Enquire Now
          </button>
        </div>
      </div>

    </div>
  );
};

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigateToDetail,
  onOpenEnquiry,
  wishlistIds,
  onToggleWishlist,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'default' | 'name-asc' | 'name-desc'>('default');

  const brands = ['All', 'Apple', 'vivo', 'POCO', 'realme', 'Ai+'];
  const categories = ['All', 'Flagship', 'Performance', 'Value 5G', 'Mid-Range'];

  // Filter and sort the 10 models
  const filteredProducts = useMemo(() => {
    return SMARTPHONE_PRODUCTS.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specs.processor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      return matchesSearch && matchesBrand && matchesCategory;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name-desc') return b.name.localeCompare(a.name);
      return 0;
    });
  }, [searchQuery, selectedBrand, selectedCategory, sortBy]);

  return (
    <div className="w-full bg-[#080D0B] text-[#F5F7F5] py-14 space-y-12">
      
      {/* Page Title & Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#36D17C] uppercase tracking-wider font-mono">
            <span>Verified Handset Catalogue</span>
            <span className="text-[#A4B0A8]">&middot;</span>
            <span>3D Multi-Angle Perspectives</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7F5] tracking-tight">
            Curated Smartphone Selection
          </h1>

          <p className="text-sm sm:text-base text-[#A4B0A8] leading-relaxed">
            Direct access to our curated smartphone inventory. Inspect every model from multiple 3D angles (Studio Iso, Front Display, Rear Optics, Side Profile, and 360° Spin).
          </p>
        </div>

        {/* Pricing & Stock Advisory Notice */}
        <div className="mt-6 p-4 rounded-xl bg-[#10251B]/70 border border-[#1E3528] flex items-start gap-3 text-xs text-[#A4B0A8]">
          <ShieldAlert className="w-4 h-4 text-[#36D17C] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#F5F7F5]">Transparent Pricing Notice:</strong> In compliance with trade verification standards, live pricing and stock availability fluctuate daily based on distributor allotments. Tap <strong className="text-[#36D17C]">“Contact for Price”</strong> or call our trade desk at <strong className="text-[#F5F7F5] font-mono">8929103610</strong> for prompt quote assistance.
          </p>
        </div>
      </section>

      {/* Search, Filter & Sort Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-2xl bg-[#0F1612] border border-[#1E3528] space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input (Span 6) */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#55645B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by model, brand, or processor..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#141A17] border border-[#1B2921] text-xs sm:text-sm text-[#F5F7F5] placeholder-[#55645B] focus:outline-none focus:border-[#36D17C] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#A4B0A8] hover:text-[#F5F7F5]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown (Span 3) */}
            <div className="md:col-span-3 flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-[#A4B0A8] shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full py-2.5 px-3 rounded-xl bg-[#141A17] border border-[#1B2921] text-xs text-[#F5F7F5] focus:outline-none focus:border-[#36D17C]"
              >
                <option value="default">Default Catalogue Order</option>
                <option value="name-asc">Model Name (A to Z)</option>
                <option value="name-desc">Model Name (Z to A)</option>
              </select>
            </div>

            {/* Total Results Count (Span 3) */}
            <div className="md:col-span-3 text-right text-xs text-[#A4B0A8] font-mono">
              Showing <span className="text-[#36D17C] font-bold">{filteredProducts.length}</span> of {SMARTPHONE_PRODUCTS.length} models
            </div>
          </div>

          {/* Brand Filter Buttons */}
          <div className="pt-2 border-t border-[#1C2C22] flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#A4B0A8] mr-2 flex items-center gap-1 font-mono">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Brand:</span>
            </span>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedBrand === b
                    ? 'bg-[#36D17C] text-[#080D0B] font-bold shadow-sm shadow-[#36D17C]/20'
                    : 'bg-[#141A17] text-[#A4B0A8] hover:text-[#F5F7F5] border border-[#1B2921]'
                }`}
              >
                {b}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Product Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-[#0F1612] border border-[#1E3528] space-y-3">
            <p className="text-base font-bold text-[#F5F7F5]">No matching models found</p>
            <p className="text-xs text-[#A4B0A8]">
              Try adjusting your search criteria or reset filters to view all 10 verified catalogue phones.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedBrand('All');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-lg bg-[#36D17C] text-[#080D0B] text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((phone) => (
              <ProductCardItem
                key={phone.id}
                phone={phone}
                isSaved={wishlistIds.includes(phone.id)}
                onToggleWishlist={onToggleWishlist}
                onNavigateToDetail={onNavigateToDetail}
                onOpenEnquiry={onOpenEnquiry}
              />
            ))}
          </div>
        )}
      </section>

      {/* Trade Desk Quick Contact Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0F1612] border border-[#1E3528] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#10251B] border border-[#36D17C]/30 flex items-center justify-center text-[#36D17C]">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#F5F7F5]">Need Bulk Quotes or Commercial Allotments?</p>
              <p className="text-xs text-[#A4B0A8]">Direct trade communication with John Abel &amp; Bhawna.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:8929103610"
              className="px-4 py-2 rounded-lg bg-[#36D17C] text-[#080D0B] font-bold text-xs hover:bg-[#2EB86B] transition-colors font-mono"
            >
              Call 8929103610
            </a>
            <a
              href="mailto:JOHN@BROOTSMEDIA.COM"
              className="px-4 py-2 rounded-lg bg-[#141A17] border border-[#1B2921] text-xs font-mono text-[#F5F7F5] hover:text-[#36D17C] transition-colors"
            >
              Email Desk
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
