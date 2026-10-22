import React from 'react';
import { SmartphoneProduct, PageType } from '../../types';
import { X, Trash2, ArrowRight, Phone, MessageSquare } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  products: SmartphoneProduct[];
  onToggleWishlist: (id: string) => void;
  onNavigateToDetail: (id: string) => void;
  onOpenEnquiry: (subject: string) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  products,
  onToggleWishlist,
  onNavigateToDetail,
  onOpenEnquiry,
}) => {
  if (!isOpen) return null;

  const savedProducts = products.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#0C120E] border-l border-[#1B2921] h-full flex flex-col text-[#F5F7F5] shadow-2xl">
        
        {/* Header */}
        <div className="p-6 border-b border-[#1B2921] flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#F5F7F5]">Saved Smartphones</h3>
            <p className="text-xs text-[#A4B0A8]">
              {savedProducts.length} {savedProducts.length === 1 ? 'model' : 'models'} saved for inquiry
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#A4B0A8] hover:text-[#F5F7F5] hover:bg-[#141A17]"
            aria-label="Close Wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {savedProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#A4B0A8]">
              <div className="w-12 h-12 rounded-full bg-[#141A17] border border-[#1B2921] flex items-center justify-center text-[#55645B] mb-3">
                <MessageSquare className="w-6 h-6" />
              </div>
              <p className="text-sm font-medium text-[#F5F7F5]">Your list is empty</p>
              <p className="text-xs text-[#A4B0A8] mt-1 max-w-xs">
                Browse our smartphone catalogue and tap the bookmark or heart icon on any model to compare or inquire in bulk.
              </p>
            </div>
          ) : (
            savedProducts.map((product) => (
              <div
                key={product.id}
                className="p-4 rounded-xl bg-[#141A17] border border-[#1B2921] flex items-start gap-4 transition-all hover:border-[#36D17C]/40"
              >
                <div className="w-14 h-16 rounded-lg bg-[#0F1612] border border-[#1B2921] flex items-center justify-center shrink-0 p-1 overflow-hidden">
                  <img
                    src={product.imageSrc}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs text-[#36D17C] font-mono">{product.brand}</span>
                    <button
                      onClick={() => onToggleWishlist(product.id)}
                      className="text-[#55645B] hover:text-red-400 p-1"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <h4 className="text-sm font-bold text-[#F5F7F5] truncate">
                    {product.name}
                  </h4>
                  <p className="text-xs text-[#A4B0A8] truncate mt-0.5">
                    {product.specs.display} &middot; {product.specs.processor}
                  </p>

                  <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() => {
                        onClose();
                        onNavigateToDetail(product.id);
                      }}
                      className="text-xs text-[#36D17C] hover:underline flex items-center gap-1 font-medium"
                    >
                      <span>View Specs</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <span className="text-[#1B2921]">&middot;</span>
                    <button
                      onClick={() => {
                        onClose();
                        onOpenEnquiry(`${product.name} - Price & Availability`);
                      }}
                      className="text-xs text-[#F5F7F5] hover:text-[#36D17C] font-medium"
                    >
                      Enquire Price
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer actions */}
        {savedProducts.length > 0 && (
          <div className="p-6 border-t border-[#1B2921] bg-[#0A0F0C] space-y-3">
            <button
              onClick={() => {
                const names = savedProducts.map((p) => p.name).join(', ');
                onClose();
                onOpenEnquiry(`Bulk Inquiry for: ${names}`);
              }}
              className="w-full py-3 rounded-lg bg-[#36D17C] hover:bg-[#2EB86B] text-[#080D0B] font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire for All {savedProducts.length} Models</span>
            </button>

            <a
              href="tel:8929103610"
              className="w-full py-2.5 rounded-lg border border-[#1B2921] bg-[#141A17] text-[#F5F7F5] hover:text-[#36D17C] hover:border-[#36D17C]/40 text-xs font-medium flex items-center justify-center gap-2 transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-[#36D17C]" />
              <span>Call Trade Desk: 8929103610</span>
            </a>
          </div>
        )}

      </div>
    </div>
  );
};
