import React, { useState, useEffect } from 'react';
import { PageType } from '../../types';
import { BrandLogo } from './BrandLogo';
import { Menu, X, ArrowUpRight, Heart, Search } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType, productId?: string) => void;
  onOpenContactModal: () => void;
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContactModal,
  wishlistCount,
  onOpenWishlist,
  onOpenSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Global keyboard shortcut for ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        onOpenSearch();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenSearch]);

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Products', page: 'products' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080D0B]/95 backdrop-blur-md border-b border-[#141A17] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 lg:gap-8">
        
        {/* Zone 1: Brand Wordmark & Emblem */}
        <div className="shrink-0">
          <BrandLogo
            size="md"
            showSubtitle={true}
            onClick={() => handleNavClick('home')}
          />
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`transition-colors whitespace-nowrap py-1 relative ${
                  isActive
                    ? 'text-[#36D17C] font-semibold'
                    : 'text-[#A4B0A8] hover:text-[#F5F7F5]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#36D17C] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Actions (Search, Wishlist & Primary CTA) */}
        <div className="hidden sm:flex items-center gap-2.5 lg:gap-3 shrink-0">
          {/* Real-time Global Search Trigger Bar */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#101813] border border-[#1B2921] hover:border-[#36D17C]/40 text-xs text-[#A4B0A8] hover:text-[#F5F7F5] transition-all group"
            title="Search smartphones & services (Ctrl+K or ⌘K)"
          >
            <Search className="w-3.5 h-3.5 text-[#36D17C] group-hover:scale-110 transition-transform" />
            <span className="hidden xl:inline text-xs">Search catalogue &amp; services...</span>
            <span className="xl:hidden text-xs">Search...</span>
            <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#141A17] text-[#55645B] border border-[#1B2921]">
              ⌘K
            </kbd>
          </button>

          {/* Wishlist quick trigger */}
          <button
            onClick={onOpenWishlist}
            aria-label="View Saved Phones Wishlist"
            className="relative p-2.5 rounded-xl border border-[#1B2921] bg-[#141A17] text-[#A4B0A8] hover:text-[#36D17C] hover:border-[#36D17C]/40 transition-colors"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#36D17C] text-[#080D0B] text-[10px] font-bold flex items-center justify-center font-mono">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Primary CTA button */}
          <button
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#36D17C] hover:bg-[#2EB86B] text-[#080D0B] font-semibold text-sm transition-all duration-200 shadow-sm shadow-[#36D17C]/20 hover:shadow-[#36D17C]/40 whitespace-nowrap"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile controls: Search, Wishlist & Menu */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenSearch}
            aria-label="Search Catalogue and Services"
            className="p-2 rounded-lg border border-[#1B2921] bg-[#141A17] text-[#36D17C]"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenWishlist}
            aria-label="View Saved Phones"
            className="p-2 rounded-lg border border-[#1B2921] bg-[#141A17] text-[#A4B0A8]"
          >
            <Heart className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="p-2 rounded-lg border border-[#1B2921] bg-[#141A17] text-[#F5F7F5]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1410] border-b border-[#1B2921] px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          {/* Quick Search bar inside mobile drawer */}
          <div className="mb-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSearch();
              }}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#141A17] border border-[#1B2921] text-xs text-[#A4B0A8]"
            >
              <div className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-[#36D17C]" />
                <span>Search phones &amp; services...</span>
              </div>
              <span className="text-[10px] font-mono text-[#36D17C]">TAP TO SEARCH</span>
            </button>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#10251B] text-[#36D17C] font-semibold border-l-2 border-[#36D17C]'
                      : 'text-[#A4B0A8] hover:text-[#F5F7F5] hover:bg-[#141A17]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="text-xs text-[#36D17C]">Current</span>}
                </button>
              );
            })}
          </nav>

          <div className="pt-4 mt-3 border-t border-[#1B2921] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContactModal();
              }}
              className="w-full py-3 px-4 rounded-lg bg-[#36D17C] hover:bg-[#2EB86B] text-[#080D0B] font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="tel:8929103610"
              className="text-center text-xs text-[#A4B0A8] hover:text-[#36D17C] py-1 font-mono"
            >
              Direct Line: 8929103610
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

