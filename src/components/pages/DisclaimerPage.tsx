import React from 'react';
import { PageType } from '../../types';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

interface DisclaimerPageProps {
  onNavigate: (page: PageType) => void;
}

export const DisclaimerPage: React.FC<DisclaimerPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#080D0B] text-[#F5F7F5] py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-3 border-b border-[#141A17] pb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#36D17C] uppercase tracking-wider font-mono">
            <span>Corporate Disclosure</span>
            <span className="text-[#A4B0A8]">&middot;</span>
            <span>BROOTS MEDIA PVT LTD</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7F5]">
            Disclaimer &amp; Trademark Notice
          </h1>

          <p className="text-xs text-[#A4B0A8] font-mono">
            Publication Notice &middot; Marked for business review prior to final commercial execution.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm text-[#A4B0A8] leading-relaxed">
          
          {/* Explicit Trademark Disclosure */}
          <section className="p-6 rounded-2xl bg-[#10251B] border border-[#36D17C]/40 space-y-3">
            <div className="flex items-center gap-2 text-[#36D17C] font-bold text-base font-mono">
              <ShieldCheck className="w-5 h-5" />
              <span>Manufacturer Trademark Notice</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F5F7F5] leading-relaxed">
              <strong className="text-[#36D17C]">Apple</strong>, <strong className="text-[#36D17C]">vivo</strong>, <strong className="text-[#36D17C]">POCO</strong>, <strong className="text-[#36D17C]">realme</strong>, and <strong className="text-[#36D17C]">Ai+</strong>, along with their respective logos, series names (e.g. iPhone, Series T, HyperOS), and trade dress, are the registered trademarks of their respective owners.
            </p>
            <p className="text-xs text-[#A4B0A8] leading-relaxed">
              Their presentation on this website is solely for genuine product identification, specification reference, and commercial enquiry purposes in connection with our mobile trade facilitation. BROOTS MEDIA PVT LTD is an independent commercial entity and is not owned, operated, endorsed, authorized, or sponsored by Apple Inc., vivo Mobile Communication Co., POCO Global, realme Chongqing Mobile Telecommunications Corp., or Ai+.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">1. General Informational Nature of Website Content</h2>
            <p>
              The content provided on this website is for general informational and commercial enquiry purposes only. While BROOTS MEDIA PVT LTD makes every reasonable effort to keep the information current and accurate, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, or suitability of the information.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">2. Product Descriptions, Specifications, &amp; Visuals</h2>
            <p>
              All handset technical specifications (including screen dimensions, camera megapixel counts, processor variants, and battery capacities) are compiled based on manufacturer release datasheets. Physical device mockups and illustrations are rendered for layout and aesthetic representation and may differ slightly from final retail packaging or colorways.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">3. Pricing &amp; Stock Availability Disclaimers</h2>
            <p>
              Consumer electronic hardware pricing and wholesale allotments are subject to real-time market shifts within Delhi's mobile markets. All items are labeled as <strong className="text-[#36D17C]">“Contact for Price”</strong> and <strong className="text-[#36D17C]">“Confirm availability”</strong>. No price quote provided on this site or in preliminary communications represents an irrevocable offer until verified in writing by authorized company management.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">4. Marketing Performance &amp; Results Expectations</h2>
            <p>
              In our digital marketing, SEO, paid advertising, and branding services, BROOTS MEDIA PVT LTD adheres strictly to transparent, ethical agency practices. We explicitly do not guarantee fixed sales volumes, specific keyword rank positions on search engines, customer acquisition quantities, or viral impressions. Business growth results depend on numerous external variables including client product competitiveness, market demand, and third-party platform algorithms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">5. Portfolio &amp; Concept Project Notice</h2>
            <p>
              Demonstration projects featured in our portfolio are clearly marked with the <strong className="text-[#36D17C]">“Concept Project”</strong> designation. These represent internal architectural studies, creative explorations, and system design benchmarks developed by BROOTS MEDIA PVT LTD to showcase our engineering and marketing capabilities. They do not claim active endorsement from fictional third-party brand owners.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">6. External Communications &amp; Links</h2>
            <p>
              This website may contain links or click-to-contact actions that connect through external networks (such as telecommunications carriers or email clients). BROOTS MEDIA PVT LTD does not exercise control over external platforms and assumes no responsibility for third-party policies or service disruptions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">7. Contact for Questions or Business Clarifications</h2>
            <div className="p-4 rounded-xl bg-[#141A17] border border-[#1B2921] space-y-1 font-mono text-xs">
              <p className="font-bold text-[#F5F7F5]">BROOTS MEDIA PVT LTD</p>
              <p>Email: <a href="mailto:JOHN@BROOTSMEDIA.COM" className="text-[#36D17C] hover:underline">JOHN@BROOTSMEDIA.COM</a></p>
              <p>Phone: <a href="tel:8929103610" className="text-[#36D17C] hover:underline">8929103610</a></p>
              <p>Founders: John Abel &amp; Bhawna</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
