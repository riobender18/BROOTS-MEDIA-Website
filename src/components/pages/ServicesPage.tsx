import React, { useState } from 'react';
import { SERVICES_DATA } from '../../data/services';
import { PageType, ServiceItem } from '../../types';
import {
  Compass,
  Share2,
  TrendingUp,
  Layers,
  Globe,
  Sparkles,
  Smartphone,
  Search,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
  onOpenEnquiry: (subject: string, type: 'service') => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenEnquiry,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Strategy & Advisory',
    'Growth & Ads',
    'Content & Social',
    'Design & Identity',
    'Engineering & UI',
    'Commerce & Retail',
  ];

  const filteredServices =
    selectedCategory === 'All'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#36D17C]" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-[#36D17C]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-[#36D17C]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#36D17C]" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-[#36D17C]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#36D17C]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#36D17C]" />;
      case 'Search':
        return <Search className="w-6 h-6 text-[#36D17C]" />;
      default:
        return <TrendingUp className="w-6 h-6 text-[#36D17C]" />;
    }
  };

  return (
    <div className="w-full bg-[#080D0B] text-[#F5F7F5] py-16 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#36D17C] uppercase tracking-wider">
            <span>Capabilities &amp; Solutions</span>
            <span className="text-[#A4B0A8]">&middot;</span>
            <span>BROOTS MEDIA PVT LTD</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#F5F7F5] tracking-tight">
            Strategic Marketing, Engineering &amp; Mobile Commerce
          </h1>

          <p className="text-base sm:text-lg text-[#A4B0A8] leading-relaxed">
            We deliver disciplined, transparent marketing services and bespoke digital products designed to help businesses reach genuine audiences and build sustainable market presence.
          </p>
        </div>

        {/* Interactive Filter Categories */}
        <div className="mt-10 flex flex-wrap items-center gap-2 border-b border-[#141A17] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#36D17C] text-[#080D0B] font-bold shadow-sm shadow-[#36D17C]/20'
                  : 'bg-[#141A17] text-[#A4B0A8] hover:text-[#F5F7F5] hover:bg-[#1B2921] border border-[#1E3528]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className="rounded-3xl bg-[#0F1612] border border-[#1E3528] p-6 sm:p-10 hover:border-[#36D17C]/50 transition-all scroll-mt-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Title, Category, Tagline & Description (Span 7) */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#10251B] border border-[#36D17C]/30 flex items-center justify-center shrink-0">
                    {getServiceIcon(service.icon)}
                  </div>
                  <div>
                    <span className="text-[11px] font-mono font-medium text-[#36D17C] uppercase tracking-wider block">
                      {service.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F5]">
                      {service.title}
                    </h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base font-medium text-[#D0DCD4]">
                  {service.tagline}
                </p>

                <p className="text-sm text-[#A4B0A8] leading-relaxed">
                  {service.description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-semibold text-[#F5F7F5] uppercase tracking-wider font-mono">
                    Key Value &amp; Strategic Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A4B0A8]">
                    {service.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 bg-[#141A17] p-2.5 rounded-lg border border-[#1B2921]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#36D17C] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onOpenEnquiry(service.title, 'service')}
                    className="px-6 py-2.5 rounded-xl bg-[#36D17C] hover:bg-[#2EB86B] text-[#080D0B] font-bold text-xs transition-all shadow-md shadow-[#36D17C]/20 flex items-center gap-2"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire About {service.title}</span>
                  </button>

                  <a
                    href="tel:8929103610"
                    className="px-4 py-2.5 rounded-xl border border-[#1E3528] bg-[#141A17] hover:bg-[#1B2921] text-xs font-mono text-[#F5F7F5] hover:text-[#36D17C] transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#36D17C]" />
                    <span>Call 8929103610</span>
                  </a>
                </div>

              </div>

              {/* Right Column: Typical Deliverables Card (Span 5) */}
              <div className="lg:col-span-5 bg-[#141A17] rounded-2xl border border-[#1B2921] p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#1C2C22]">
                  <span className="text-xs font-semibold text-[#F5F7F5] uppercase tracking-wider">
                    Typical Deliverables
                  </span>
                  <span className="text-[10px] font-mono text-[#36D17C] px-2 py-0.5 rounded bg-[#10251B]">
                    Documented Scope
                  </span>
                </div>

                <ul className="space-y-3">
                  {service.deliverables.map((deliv, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-xs text-[#D8E0DA]">
                      <span className="w-5 h-5 rounded-full bg-[#10251B] text-[#36D17C] font-mono text-[10px] flex items-center justify-center shrink-0 border border-[#36D17C]/30">
                        {dIdx + 1}
                      </span>
                      <span className="pt-0.5">{deliv}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#1C2C22] text-[11px] text-[#A4B0A8] leading-relaxed">
                  Every project is tailored with milestone schedules and open communication with company leadership.
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* Bottom Service Advisory CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#10251B] to-[#0D1812] border border-[#1E3528] p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#F5F7F5]">Need a custom strategic scope?</h3>
            <p className="text-xs text-[#A4B0A8] mt-1">
              Speak directly with John Abel &amp; Bhawna regarding your unique business timeline and budget.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry('Custom Strategy Consultation', 'service')}
            className="px-6 py-3 rounded-xl bg-[#36D17C] hover:bg-[#2EB86B] text-[#080D0B] font-bold text-xs tracking-wide shrink-0 whitespace-nowrap"
          >
            Request Consultation
          </button>
        </div>
      </section>

    </div>
  );
};
