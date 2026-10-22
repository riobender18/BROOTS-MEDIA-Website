import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Mail, Send, AlertCircle } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledSubject?: string;
  type?: 'phone' | 'service' | 'general';
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  prefilledSubject = '',
  type = 'general',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: prefilledSubject,
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync prefilledSubject if changed
  React.useEffect(() => {
    if (prefilledSubject) {
      setFormData((prev) => ({ ...prev, subject: prefilledSubject }));
    }
  }, [prefilledSubject]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (formData.phone && !/^[0-9+ -]{7,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your inquiry details';
    if (!formData.consent) newErrors.consent = 'You must agree to the privacy policy';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulating verified submission state without making fake third-party API claims
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      consent: false,
    });
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0F1612] border border-[#1E3528] rounded-2xl p-6 sm:p-8 shadow-2xl text-[#F5F7F5] max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#A4B0A8] hover:text-[#F5F7F5] hover:bg-[#141A17] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#10251B] border border-[#36D17C]/40 text-[#36D17C] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#F5F7F5]">Inquiry Received</h3>
            <p className="text-sm text-[#A4B0A8] max-w-md mx-auto">
              Thank you, <span className="text-[#F5F7F5] font-semibold">{formData.name}</span>. Your details regarding <span className="text-[#36D17C] font-medium">{formData.subject || 'your request'}</span> have been recorded.
            </p>
            <div className="p-4 rounded-xl bg-[#141A17] border border-[#1B2921] text-xs text-[#A4B0A8] text-left space-y-2">
              <p className="font-semibold text-[#F5F7F5]">Need an immediate answer?</p>
              <p>You can also reach our founders directly right now:</p>
              <div className="flex flex-col sm:flex-row gap-2 pt-1 font-mono text-xs">
                <a
                  href="tel:8929103610"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#10251B] border border-[#36D17C]/30 text-[#36D17C] hover:bg-[#10251B]/80"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 8929103610</span>
                </a>
                <a
                  href="mailto:JOHN@BROOTSMEDIA.COM"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#10251B] border border-[#36D17C]/30 text-[#36D17C] hover:bg-[#10251B]/80 truncate"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span className="truncate">JOHN@BROOTSMEDIA.COM</span>
                </a>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="w-full py-2.5 rounded-lg bg-[#36D17C] text-[#080D0B] font-semibold text-sm hover:bg-[#2EB86B] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-semibold text-[#36D17C] uppercase tracking-wider">
                {type === 'phone' ? 'Smartphone Price & Availability Check' : type === 'service' ? 'Service Consultation' : 'Direct Inquiry'}
              </span>
              <h3 className="text-2xl font-bold text-[#F5F7F5] mt-1">
                {formData.subject ? `Inquire: ${formData.subject}` : 'Contact BROOTS MEDIA'}
              </h3>
              <p className="text-xs text-[#A4B0A8] mt-1">
                Share your requirements below. Our founders personally review and respond to inquiries.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#A4B0A8] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Rahul Sharma"
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-[#141A17] border text-sm text-[#F5F7F5] placeholder-[#55645B] focus:outline-none focus:border-[#36D17C] transition-colors ${
                    errors.name ? 'border-red-500/80' : 'border-[#1B2921]'
                  }`}
                />
                {errors.name && <span className="text-[11px] text-red-400 mt-1 block">{errors.name}</span>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#A4B0A8] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#141A17] border text-sm text-[#F5F7F5] placeholder-[#55645B] focus:outline-none focus:border-[#36D17C] transition-colors ${
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
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#141A17] border text-sm text-[#F5F7F5] placeholder-[#55645B] focus:outline-none focus:border-[#36D17C] transition-colors ${
                      errors.phone ? 'border-red-500/80' : 'border-[#1B2921]'
                    }`}
                  />
                  {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#A4B0A8] mb-1">
                  Topic / Product
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Apple iPhone 16 Price & Stock"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#141A17] border border-[#1B2921] text-sm text-[#F5F7F5] placeholder-[#55645B] focus:outline-none focus:border-[#36D17C]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#A4B0A8] mb-1">
                  Message / Inquiries *
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please state required quantity, timeline, or marketing goals..."
                  className={`w-full px-3.5 py-2.5 rounded-lg bg-[#141A17] border text-sm text-[#F5F7F5] placeholder-[#55645B] focus:outline-none focus:border-[#36D17C] transition-colors resize-none ${
                    errors.message ? 'border-red-500/80' : 'border-[#1B2921]'
                  }`}
                />
                {errors.message && <span className="text-[11px] text-red-400 mt-1 block">{errors.message}</span>}
              </div>

              {/* Consent checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 rounded border-[#1B2921] bg-[#141A17] text-[#36D17C] focus:ring-[#36D17C]"
                  />
                  <span className="text-xs text-[#A4B0A8] leading-tight">
                    I understand this is an inquiry submission for BROOTS MEDIA PVT LTD, and I agree to be contacted via email or phone per the Privacy Policy.
                  </span>
                </label>
                {errors.consent && <span className="text-[11px] text-red-400 mt-1 block">{errors.consent}</span>}
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <a
                  href="tel:8929103610"
                  className="text-xs font-mono text-[#A4B0A8] hover:text-[#36D17C] flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#36D17C]" />
                  <span>Call 8929103610</span>
                </a>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#36D17C] hover:bg-[#2EB86B] text-[#080D0B] font-semibold text-sm transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
