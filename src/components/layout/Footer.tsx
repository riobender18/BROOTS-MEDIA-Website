import React from 'react';
import { PageType } from '../../types';
import { BrandLogo } from './BrandLogo';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Clock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType, productId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050807] border-t border-[#141A17] text-[#A4B0A8] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#141A17]">
          
          {/* Column 1: Company Profile (Col Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="lg" showSubtitle={true} onClick={() => handleNav('home')} />
            <p className="text-sm text-[#A4B0A8] leading-relaxed pr-4">
              BROOTS MEDIA PVT LTD combines digital marketing expertise, creative advertising, and 8+ years of Delhi mobile-industry insight to help businesses build trusted brands and drive measurable growth.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-[#A4B0A8]">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#36D17C]" />
                <span>8+ Years of Mobile Trade Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#36D17C]" />
                <span>Registered Legal Entity: BROOTS MEDIA PVT LTD</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Col Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-[#F5F7F5] uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#36D17C] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#36D17C] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="hover:text-[#36D17C] transition-colors"
                >
                  Smartphones
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-[#36D17C] transition-colors"
                >
                  Portfolio / Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#36D17C] transition-colors"
                >
                  About Founders
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#36D17C] transition-colors"
                >
                  Contact Team
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Capabilities (Col Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-[#F5F7F5] uppercase tracking-wider mb-4">
              Key Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#36D17C] transition-colors text-left"
                >
                  Digital Marketing Strategy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#36D17C] transition-colors text-left"
                >
                  Performance & Paid Ads
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#36D17C] transition-colors text-left"
                >
                  Brand Strategy & Identity
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#36D17C] transition-colors text-left"
                >
                  Website Design & Dev
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#36D17C] transition-colors text-left"
                >
                  Mobile Commerce Promotion
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#36D17C] transition-colors text-left"
                >
                  Search Engine Optimization
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Direct Inquiries (Col Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-[#F5F7F5] uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <p className="text-xs text-[#A4B0A8] mb-4">
              Discuss brand campaigns, mobile trade inquiries, or web engineering with our founders.
            </p>

            <div className="space-y-3 text-sm">
              <a
                href="tel:8929103610"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-[#10251B]/60 border border-[#1B2921] text-[#F5F7F5] hover:border-[#36D17C]/50 hover:text-[#36D17C] transition-all"
              >
                <Phone className="w-4 h-4 text-[#36D17C] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#A4B0A8] uppercase font-mono">Direct Phone</span>
                  <span className="font-mono font-medium">8929103610</span>
                </div>
              </a>

              <a
                href="mailto:JOHN@BROOTSMEDIA.COM"
                className="flex items-center gap-3 p-2.5 rounded-lg bg-[#10251B]/60 border border-[#1B2921] text-[#F5F7F5] hover:border-[#36D17C]/50 hover:text-[#36D17C] transition-all"
              >
                <Mail className="w-4 h-4 text-[#36D17C] shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#A4B0A8] uppercase font-mono">Official Email</span>
                  <span className="font-mono text-xs break-all">JOHN@BROOTSMEDIA.COM</span>
                </div>
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-[#141A17]">
              <span className="text-xs text-[#A4B0A8]">
                Founders: <strong className="text-[#F5F7F5]">John Abel</strong> &amp; <strong className="text-[#F5F7F5]">Bhawna</strong>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Trademark Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#718077]">
          <div>
            &copy; {new Date().getFullYear()} BROOTS MEDIA PVT LTD. All rights reserved.
          </div>

          {/* Legal Pages Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-[#36D17C] transition-colors"
            >
              Terms and Conditions
            </button>
            <span aria-hidden="true">&middot;</span>
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-[#36D17C] transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">&middot;</span>
            <button
              onClick={() => handleNav('disclaimer')}
              className="hover:text-[#36D17C] transition-colors"
            >
              Disclaimer
            </button>
          </div>
        </div>

        {/* Explicit Trademark Notice */}
        <div className="mt-4 text-[11px] text-[#55645B] leading-relaxed text-center md:text-left">
          Notice: Apple, vivo, POCO, realme, and Ai+ are respective trademarks of their respective owners. Their mention on this catalogue is for product identification and retail enquiry purposes only and does not imply ownership, endorsement, or sponsorship of BROOTS MEDIA. Product specifications and availability are subject to distributor confirmation.
        </div>

      </div>
    </footer>
  );
};
