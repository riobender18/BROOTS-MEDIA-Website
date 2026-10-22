import React from 'react';
import { PageType } from '../../types';
import { ShieldCheck, AlertCircle } from 'lucide-react';

interface TermsPageProps {
  onNavigate: (page: PageType) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#080D0B] text-[#F5F7F5] py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-3 border-b border-[#141A17] pb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#36D17C] uppercase tracking-wider font-mono">
            <span>Legal Documentation</span>
            <span className="text-[#A4B0A8]">&middot;</span>
            <span>BROOTS MEDIA PVT LTD</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7F5]">
            Terms and Conditions
          </h1>

          <p className="text-xs text-[#A4B0A8] font-mono">
            Effective Date: October 2026 &middot; Subject to business legal review prior to final commercial execution.
          </p>
        </div>

        {/* Advisory notice */}
        <div className="p-4 rounded-xl bg-[#10251B] border border-[#1E3528] text-xs text-[#A4B0A8] flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[#36D17C] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#F5F7F5]">Legal Notice:</strong> This document sets forth the governing terms for using the BROOTS MEDIA PVT LTD website. This website operates strictly as an informational and commercial enquiry platform. It does not process direct payments, online credit checkouts, or immediate e-commerce shipments.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm text-[#A4B0A8] leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">1. Acceptance of Terms &amp; Website Usage</h2>
            <p>
              By accessing or browsing this website, operated by <strong className="text-[#F5F7F5]">BROOTS MEDIA PVT LTD</strong> (“Company”, “we”, “our”), you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please discontinue using this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">2. Nature of the Website &amp; Distinguishing Enquiries from Purchases</h2>
            <p>
              All products, smartphones, device models, and marketing services displayed on this website are presented for informational and business enquiry purposes only.
            </p>
            <p>
              Submitting an enquiry via form, email, or telephone does not constitute a binding purchase contract or an order confirmation. No financial transaction, payment processing, or automated shipping commitment occurs through this website. Final agreements, commercial invoices, and supply terms are executed separately through verified commercial documentation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">3. Product Information, Pricing, &amp; Availability</h2>
            <p>
              Hardware specifications, features, and model descriptions are compiled from verified public manufacturer technical sheets. While we endeavor to ensure technical accuracy, specifications and configurations may vary based on regional production releases and manufacturer revisions.
            </p>
            <p>
              Because consumer electronics prices fluctuate rapidly based on distributor allotments, currency parity, and market supply in the Delhi trade corridors, prices are marked as <strong className="text-[#36D17C]">“Contact for Price”</strong>. Stock availability is subject to explicit reconfirmation at the time of inquiry.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">4. Intellectual Property &amp; Brand Rights</h2>
            <p>
              All original website design elements, layouts, text copy, graphic arrangements, and the BROOTS MEDIA brand assets are the intellectual property of BROOTS MEDIA PVT LTD.
            </p>
            <p>
              Third-party brand names, trademarks, product names, and model designations referenced on this site (including but not limited to Apple, iPhone, vivo, POCO, realme, and Ai+) remain the exclusive property of their respective trademark holders. Their reference does not imply endorsement, affiliation, or sponsorship.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">5. Marketing &amp; Agency Services</h2>
            <p>
              Descriptions of marketing, web design, advertising, and branding capabilities represent our professional disciplines and methodologies. We do not provide guarantees of specific numerical return on ad spend (ROAS), search engine rankings, lead quantities, or viral performance, as commercial outcomes depend on broader market variables and third-party platform policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable Indian law, BROOTS MEDIA PVT LTD and its directors, founders, and affiliates shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website, including reliance on any specifications or typographical errors.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">7. External Links &amp; Communications</h2>
            <p>
              Communications initiated through third-party services (such as telephone carriers or email providers) are governed by the respective terms of those platforms. We do not control and are not responsible for the availability or security of third-party networks.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">8. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in Delhi, India.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">9. Official Contact Details</h2>
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
