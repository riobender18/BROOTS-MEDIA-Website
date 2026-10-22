import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { SMARTPHONE_PRODUCTS } from './data/products';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './components/pages/HomePage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { ProductDetailPage } from './components/pages/ProductDetailPage';
import { PortfolioPage } from './components/pages/PortfolioPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { TermsPage } from './components/pages/TermsPage';
import { PrivacyPage } from './components/pages/PrivacyPage';
import { DisclaimerPage } from './components/pages/DisclaimerPage';
import { EnquiryModal } from './components/common/EnquiryModal';
import { WishlistDrawer } from './components/common/WishlistDrawer';
import { GlobalSearch } from './components/common/GlobalSearch';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('apple-iphone-16');
  
  // Real-time global search state
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Local wishlist persistence
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('broots_wishlist');
      return saved ? JSON.parse(saved) : ['apple-iphone-16', 'poco-m8-power-5g'];
    } catch {
      return ['apple-iphone-16', 'poco-m8-power-5g'];
    }
  });

  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Enquiry modal state
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState('');
  const [enquiryType, setEnquiryType] = useState<'phone' | 'service' | 'general'>('general');

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('broots_wishlist', JSON.stringify(wishlistIds));
    } catch {
      // Storage unavailable or quota exceeded
    }
  }, [wishlistIds]);

  const handleToggleWishlist = (id: string) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleNavigate = (page: PageType, productId?: string) => {
    if (productId) {
      setSelectedProductId(productId);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (
    subject: string = '',
    type: 'phone' | 'service' | 'general' = 'general'
  ) => {
    setEnquirySubject(subject);
    setEnquiryType(type);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080D0B] text-[#F5F7F5] flex flex-col font-sans selection:bg-[#36D17C]/25 selection:text-[#36D17C]">
      
      {/* Slim dark-green announcement bar */}
      <AnnouncementBar onContactClick={() => handleOpenEnquiry('Inquiry from Announcement Bar', 'general')} />

      {/* Primary Top Bar adhering to 3-zone contract */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContactModal={() => handleOpenEnquiry('Let’s Talk Consultation', 'general')}
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenEnquiry={(subj) => handleOpenEnquiry(subj, 'service')}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigateToDetail={(id) => handleNavigate('product-detail', id)}
            onOpenEnquiry={(subj) => handleOpenEnquiry(subj, 'phone')}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {currentPage === 'product-detail' && (
          <ProductDetailPage
            productId={selectedProductId}
            onBack={() => handleNavigate('products')}
            onNavigateToDetail={(id) => handleNavigate('product-detail', id)}
            onOpenEnquiry={(subj) => handleOpenEnquiry(subj, 'phone')}
            wishlistIds={wishlistIds}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {currentPage === 'portfolio' && (
          <PortfolioPage
            onOpenEnquiry={(subj) => handleOpenEnquiry(subj, 'service')}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenContact={() => handleOpenEnquiry('Founder Consultation', 'general')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'terms' && (
          <TermsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'privacy' && (
          <PrivacyPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'disclaimer' && (
          <DisclaimerPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Shared Global Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Real-Time Global Search Modal (phones, services, specs) */}
      <GlobalSearch
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Universal Quick Inquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        prefilledSubject={enquirySubject}
        type={enquiryType}
      />

      {/* Saved Smartphones Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlistIds}
        products={SMARTPHONE_PRODUCTS}
        onToggleWishlist={handleToggleWishlist}
        onNavigateToDetail={(id) => handleNavigate('product-detail', id)}
        onOpenEnquiry={(subj) => handleOpenEnquiry(subj, 'phone')}
      />

    </div>
  );
}
