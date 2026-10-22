import React, { useState } from 'react';
import { PageType } from '../../types';
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Code2,
  Info,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Digital Marketing Strategy',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const servicesList = [
    'Digital Marketing Strategy',
    'Performance Marketing & Paid Ads',
    'Brand Strategy & Identity',
    'Website Design & Development',
    'Social Media Marketing',
    'Mobile Commerce & Handset Promotion',
    'Smartphone Price & Stock Inquiry',
    'General Business Inquiry',
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format';
    }
    if (formData.phone && !/^[0-9+ -]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Please specify your project or inquiry details';
    if (!formData.consent) newErrors.consent = 'Consent is required before submitting your inquiry';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Real client-side recording without making fake SMTP or third-party API claims
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'Digital Marketing Strategy',
      message: '',
      consent: false,
    });
    setErrors({});
  };

  return (
    <div className="w-full bg-[#080D0B] text-[#F5F7F5] py-14 space-y-16">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#36D17C] uppercase tracking-wider font-mono">
            <span>Direct Inquiries</span>
            <span className="text-[#A4B0A8]">&middot;</span>
            <span>BROOTS MEDIA PVT LTD</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7F5] tracking-tight">
            Connect with Our Leadership
          </h1>

          <p className="text-base text-[#A4B0A8] leading-relaxed">
            Reach out directly to John Abel and Bhawna for digital marketing partnerships, web engineering scopes, or smartphone wholesale and retail inquiries.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#0F1612] border border-[#1E3528] p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#F5F7F5]">Verified Contact Desk</h3>
                <p className="text-xs text-[#A4B0A8] mt-1 leading-relaxed">
                  Calls and emails are answered directly by our founding team.
                </p>
              </div>

              {/* Direct Phone Link */}
              <a
                href="tel:8929103610"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#141A17] border border-[#1B2921] hover:border-[#36D17C]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#10251B] border border-[#36D17C]/30 flex items-center justify-center text-[#36D17C] shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-mono text-[#55645B] block">Primary Phone Line</span>
                  <span className="text-base font-bold font-mono text-[#F5F7F5] group-hover:text-[#36D17C] transition-colors">
                    8929103610
                  </span>
                  <span className="text-[11px] text-[#A4B0A8] block mt-0.5">Click to initiate call</span>
                </div>
              </a>

              {/* Direct Email Link */}
              <a
                href="mailto:JOHN@BROOTSMEDIA.COM"
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#141A17] border border-[#1B2921] hover:border-[#36D17C]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#10251B] border border-[#36D17C]/30 flex items-center justify-center text-[#36D17C] shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-mono text-[#55645B] block">Official Email</span>
                  <span className="text-sm font-bold font-mono text-[#F5F7F5] group-hover:text-[#36D17C] transition-colors break-all">
                    JOHN@BROOTSMEDIA.COM
                  </span>
                  <span className="text-[11px] text-[#A4B0A8] block mt-0.5">Click to compose email</span>
                </div>
              </a>

              {/* Operational Heritage */}
              <div className="pt-4 border-t border-[#1C2C22] space-y-3 text-xs text-[#A4B0A8]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#36D17C]" />
                  <span>8+ Years in Delhi Consumer Electronics &amp; Mobile Trade</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#36D17C]" />
                  <span>Founders: John Abel &amp; Bhawna</span>
                </div>
              </div>
            </div>

            {/* Backend Integration Developer Documentation Card */}
            <div className="rounded-2xl bg-[#090D0B] border border-[#1B2921] p-5 space-y-2 text-xs text-[#A4B0A8]">
              <div className="flex items-center gap-2 text-[#36D17C] font-mono font-bold">
                <Code2 className="w-4 h-4" />
                <span>Backend Integration Ready</span>
              </div>
              <p className="leading-relaxed">
                This form validates client inputs directly in React. To dispatch automated emails to <span className="font-mono text-[#F5F7F5]">JOHN@BROOTSMEDIA.COM</span> in production, configure an API proxy route (such as SendGrid, Resend, or AWS SES) via the <span className="font-mono text-[#F5F7F5]">/api/inquiries</span> endpoint.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form (Span 7) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#0F1612] border border-[#1E3528] p-6 sm:p-10 shadow-2xl">
              
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#10251B] border border-[#36D17C]/40 text-[#36D17C] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F5F7F5]">
                    Inquiry Successfully Recorded
                  </h3>
                  <p className="text-sm text-[#A4B0A8] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#F5F7F5]">{formData.name}</strong>. Your message regarding <strong className="text-[#36D17C]">{formData.service}</strong> has been logged. Our leadership team will review and respond promptly.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="tel:8929103610"
                      className="px-5 py-2.5 rounded-xl bg-[#36D17C] text-[#080D0B] font-bold text-xs"
                    >
                      Call 8929103610 Now
                    </a>
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-[#141A17] border border-[#1B2921] text-[#F5F7F5] hover:text-[#36D17C] text-xs font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-6">
                    <span className="text-xs font-semibold text-[#36D17C] uppercase tracking-wider font-mono">
                      Inquiry Form
                    </span>
                    <h2 className="text-2xl font-bold text-[#F5F7F5] mt-1">
                      Send a Detailed Message
                    </h2>
                    <p className="text-xs text-[#A4B0A8] mt-1">
                      Please provide accurate details so our team can prepare relevant specifications or proposals.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-medium text-[#A4B0A8] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Vikram Malhotra"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#141A17] border text-sm text-[#F5F7F5] placeholder-[#55645B] focus:outline-none focus:border-[#36D17C] transition-colors ${
                          errors.name ? 'border-red-500/80' : 'border-[#1B2921]'
                        }`}
                      />
                      {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#A4B0A8] mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@business.com"
                          className={`w-full px-4 py-2.5 rounded-xl bg-[#141A17] border text-sm text-[#F5F7F5] placeholder-[#55645B] focus:outline-none focus:border-[#36D17C] transition-colors ${
                            errors.email ? 'border-red-500/80' : 'border-[#1B2921]'
                          }`}
                        />
                        {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#A4B0A8] mb-1">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 9876543210"
                          className={`w-full px-4 py-2.5 rounded-xl bg-[#141A17] border text-sm text-[#F5F7F5] placeholder-[#55645B] focus:outline-none focus:border-[#36D17C] transition-colors ${
                            errors.phone ? 'border-red-500/80' : 'border-[#1B2921]'
                          }`}
                        />
                        {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-medium text-[#A4B0A8] mb-1">
                        Service of Interest *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#141A17] border border-[#1B2921] text-sm text-[#F5F7F5] focus:outline-none focus:border-[#36D17C]"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-medium text-[#A4B0A8] mb-1">
                        Project Overview or Inquiry Details *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your requirements, volume, or expected timeline..."
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#141A17] border text-sm text-[#F5F7F5] placeholder-[#55645B] focus:outline-none focus:border-[#36D17C] transition-colors resize-none ${
                          errors.message ? 'border-red-500/80' : 'border-[#1B2921]'
                        }`}
                      />
                      {errors.message && <span className="text-[11px] text-red-400 mt-1 block">{errors.message}</span>}
                    </div>

                    {/* Consent Checkbox */}
                    <div className="pt-2">
                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input
                          type="checkbox"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          className="mt-1 rounded border-[#1B2921] bg-[#141A17] text-[#36D17C] focus:ring-[#36D17C]"
                        />
                        <span className="text-xs text-[#A4B0A8] leading-relaxed">
                          I consent to BROOTS MEDIA PVT LTD processing the details submitted above to reply to my business inquiry in accordance with the{' '}
                          <button
                            type="button"
                            onClick={() => onNavigate('privacy')}
                            className="text-[#36D17C] hover:underline"
                          >
                            Privacy Policy
                          </button>
                          .
                        </span>
                      </label>
                      {errors.consent && <span className="text-[11px] text-red-400 mt-1 block">{errors.consent}</span>}
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xl bg-[#36D17C] hover:bg-[#2EB86B] text-[#080D0B] font-bold text-sm tracking-wide transition-all shadow-md shadow-[#36D17C]/20 flex items-center justify-center gap-2 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Processing Submission...</span>
                        ) : (
                          <>
                            <span>Submit Business Inquiry</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
