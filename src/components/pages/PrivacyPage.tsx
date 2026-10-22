import React from 'react';
import { PageType } from '../../types';
import { Lock, ShieldCheck } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: PageType) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#080D0B] text-[#F5F7F5] py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="space-y-3 border-b border-[#141A17] pb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#36D17C] uppercase tracking-wider font-mono">
            <span>Data Protection &amp; Governance</span>
            <span className="text-[#A4B0A8]">&middot;</span>
            <span>BROOTS MEDIA PVT LTD</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7F5]">
            Privacy Policy
          </h1>

          <p className="text-xs text-[#A4B0A8] font-mono">
            Last Updated: October 2026 &middot; Compliant with Indian Information Technology &amp; DPDP principles.
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm text-[#A4B0A8] leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">1. Overview &amp; Scope</h2>
            <p>
              This Privacy Policy explains how <strong className="text-[#F5F7F5]">BROOTS MEDIA PVT LTD</strong> (“we”, “us”, or “our”) collects, uses, and safeguards information submitted through our official website. We respect your privacy and are committed to maintaining the confidentiality of information you choose to share with us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">2. Information We Collect</h2>
            <p>
              We only collect personal information that you voluntarily choose to provide when interacting with our contact or product enquiry forms:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li><strong className="text-[#F5F7F5]">Identity Details:</strong> Full name and preferred salutation.</li>
              <li><strong className="text-[#F5F7F5]">Contact Coordinates:</strong> Email address and optional telephone number.</li>
              <li><strong className="text-[#F5F7F5]">Inquiry Particulars:</strong> Selected service, smartphone model of interest, and custom message details.</li>
            </ul>
            <p>
              We do not collect sensitive personal data such as credit card numbers, banking credentials, or biometric identifiers through this website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">3. Purpose of Processing</h2>
            <p>
              Information gathered through forms is utilized strictly for legitimate business communication purposes, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Responding to your specific smartphone stock inquiries, specification questions, and pricing requests.</li>
              <li>Preparing requested digital marketing proposals, scope estimates, and strategic consultations.</li>
              <li>Direct telephone or email correspondence initiated by our founders (John Abel and Bhawna).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">4. Cookies &amp; Tracking Technologies</h2>
            <p>
              In accordance with our zero-slop and transparent design standards, this website does not deploy covert user tracking pixels, cross-site profiling cookies, or intrusive behavioral ad beacons. We utilize only essential browser memory (such as local UI state for your saved wishlist models).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">5. Data Retention &amp; Disclosure</h2>
            <p>
              We retain inquiry communications only for the period necessary to fulfill your business request or comply with statutory accounting and tax obligations. We do not sell, rent, or trade your contact details to third-party data brokers or marketing lists.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">6. Data Security Practices</h2>
            <p>
              We maintain appropriate administrative and technical safeguards to protect your transmitted information against unauthorized access, loss, or misuse. All communications transmitted through this website are secured with modern Transport Layer Security (TLS/HTTPS) encryption.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">7. Your Rights &amp; Access Requests</h2>
            <p>
              Under applicable Indian privacy norms, you have the right to request a review of the personal information we hold concerning you, request corrections to inaccurate data, or request that your contact history be deleted from our correspondence archives.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F7F5]">8. Contact Our Data Governance Desk</h2>
            <p>
              For any questions regarding this Privacy Policy or to exercise your rights, please contact our team directly:
            </p>
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
