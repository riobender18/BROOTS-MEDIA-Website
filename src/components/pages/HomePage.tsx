import React from 'react';
import { PageType, SmartphoneProduct } from '../../types';
import { SERVICES_DATA } from '../../data/services';
import { SMARTPHONE_PRODUCTS } from '../../data/products';
import { PORTFOLIO_PROJECTS } from '../../data/portfolio';
import { Phone3DDisplay } from '../common/Phone3DDisplay';
import {
  ArrowRight,
  Phone,
  Mail,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Smartphone,
  Sparkles,
  Layers,
  Globe,
  Share2,
  Compass,
  Heart,
  Eye,
  CheckCircle2,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType, productId?: string) => void;
  onOpenEnquiry: (subject?: string, type?: 'phone' | 'service' | 'general') => void;
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenEnquiry,
  wishlistIds,
  onToggleWishlist,
}) => {
  // Select top featured phones
  const featuredPhones = SMARTPHONE_PRODUCTS.slice(0, 6);
  // Select first 3 portfolio concepts
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 3);

  // Icon map for services
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#36D17C]" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-[#36D17C]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-[#36D17C]" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-[#36D17C]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#36D17C]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#36D17C]" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#36D17C]" />;
      default:
        return <TrendingUp className="w-5 h-5 text-[#36D17C]" />;
    }
  };

  return (
    <div className="w-full bg-[#080D0B] text-[#F5F7F5] space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden">
        {/* Ambient glow backgrounds */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(54,209,124,0.12),transparent_70%)] pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#10251B]/40 blur-3xl pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quiet, unboxed metadata kicker */}
              <div className="flex items-center gap-2 text-xs font-medium text-[#36D17C] uppercase tracking-wider">
                <span>BROOTS MEDIA PVT LTD</span>
                <span className="text-[#A4B0A8]">&middot;</span>
                <span className="text-[#A4B0A8]">Delhi Mobile Trade &amp; Growth Studio</span>
              </div>

              {/* Exact Hero Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F7F5] leading-[1.1] text-balance">
                We Build Brands. <br className="hidden sm:inline" />
                <span className="text-[#36D17C]">We Drive Growth.</span>
              </h1>

              {/* Exact Supporting Text */}
              <p className="text-base sm:text-lg text-[#A4B0A8] leading-relaxed max-w-2xl">
                BROOTS MEDIA combines digital marketing expertise, creative advertising, and mobile-industry experience to help businesses connect with customers and grow with confidence.
              </p>

              {/* Exact Dual CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="px-7 py-3.5 rounded-xl bg-[#36D17C] hover:bg-[#2EB86B] text-[#080D0B] font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#36D17C]/20 hover:shadow-[#36D17C]/35 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('products')}
                  className="px-7 py-3.5 rounded-xl bg-[#141A17] hover:bg-[#1B2921] text-[#F5F7F5] hover:text-[#36D17C] border border-[#1E3528] font-semibold text-sm transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <Smartphone className="w-4 h-4 text-[#36D17C]" />
                  <span>Explore Smartphones</span>
                </button>
              </div>

              {/* Founder Credibility Marker */}
              <div className="pt-4 border-t border-[#141A17] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A4B0A8]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#36D17C]" />
                  <span>Founded by John Abel &amp; Bhawna</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#36D17C]" />
                  <span>8+ Years of Delhi Mobile Trade Experience</span>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Anchor with Official Brand Mark & Device Preview */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-b from-[#141A17] to-[#0D1410] border border-[#1E3528] p-6 sm:p-8 shadow-2xl shadow-black/80">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-6 border-b border-[#1A2820]">
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/aistudio/WhatsApp_Image_2026-10-19_at_2.44.01_PM_96c323a8.jpeg"
                      alt="BROOTS MEDIA Emblem"
                      className="w-12 h-12 rounded-xl object-cover border border-[#36D17C]/40 bg-[#10251B]"
                    />
                    <div>
                      <h2 className="text-base font-bold text-[#F5F7F5]">BROOTS MEDIA</h2>
                      <p className="text-[11px] text-[#36D17C] font-mono tracking-wider">PRIVATE LIMITED</p>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded bg-[#10251B] border border-[#36D17C]/30 text-[#36D17C] font-medium">
                    Mobile &amp; Digital
                  </span>
                </div>

                {/* Device Showcase Preview */}
                <div className="py-6 space-y-4">
                  <div className="p-4 rounded-2xl bg-[#090E0B] border border-[#1B2921]">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-[#36D17C] font-mono font-medium">Verified Catalogue</span>
                      <span className="text-[#A4B0A8]">10 Curated Models</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-[#F5F7F5]">Next-Gen Flagships &amp; 5G</p>
                        <p className="text-xs text-[#A4B0A8]">Direct Price &amp; Stock Inquiries</p>
                      </div>
                      <button
                        onClick={() => onNavigate('products')}
                        className="px-3 py-1.5 rounded-lg bg-[#36D17C]/15 hover:bg-[#36D17C] text-[#36D17C] hover:text-[#080D0B] text-xs font-semibold transition-all"
                      >
                        Browse
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#0F1612] border border-[#1B2921]">
                      <span className="text-[11px] text-[#A4B0A8]">Strategy</span>
                      <p className="font-semibold text-[#F5F7F5] mt-0.5">Brand Identity</p>
                      <p className="text-[11px] text-[#36D17C] mt-1">Delhi Market Grounded</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0F1612] border border-[#1B2921]">
                      <span className="text-[11px] text-[#A4B0A8]">Growth</span>
                      <p className="font-semibold text-[#F5F7F5] mt-0.5">Paid Advertising</p>
                      <p className="text-[11px] text-[#36D17C] mt-1">High Intent Funnels</p>
                    </div>
                  </div>
                </div>

                {/* Direct Line Badge */}
                <div className="pt-4 border-t border-[#1A2820] flex items-center justify-between">
                  <a
                    href="tel:8929103610"
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#F5F7F5] hover:text-[#36D17C] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#36D17C]" />
                    <span>8929103610</span>
                  </a>
                  <a
                    href="mailto:JOHN@BROOTSMEDIA.COM"
                    className="text-xs font-mono text-[#A4B0A8] hover:text-[#36D17C] transition-colors"
                  >
                    JOHN@BROOTSMEDIA.COM
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. TRUST SECTION */}
      <section className="border-y border-[#141A17] bg-[#0A0F0C] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#36D17C]">
                <Smartphone className="w-5 h-5 shrink-0" />
                <h2 className="text-base font-bold text-[#F5F7F5]">8+ Years Experience</h2>
              </div>
              <p className="text-xs text-[#A4B0A8] leading-relaxed">
                Hands-on immersion in Delhi's fast-moving mobile retail ecosystem and device trade.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#36D17C]">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <h2 className="text-base font-bold text-[#F5F7F5]">Customer-Focused</h2>
              </div>
              <p className="text-xs text-[#A4B0A8] leading-relaxed">
                Solutions engineered around real customer psychology, budget fit, and genuine utility.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#36D17C]">
                <Globe className="w-5 h-5 shrink-0" />
                <h2 className="text-base font-bold text-[#F5F7F5]">Digital-First Thinking</h2>
              </div>
              <p className="text-xs text-[#A4B0A8] leading-relaxed">
                Translating physical trade insights into fast websites, responsive ads, and brand reach.
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#36D17C]">
                <Cpu className="w-5 h-5 shrink-0" />
                <h2 className="text-base font-bold text-[#F5F7F5]">Technology &amp; Brands</h2>
              </div>
              <p className="text-xs text-[#A4B0A8] leading-relaxed">
                Deep hardware and specification fluency coupled with creative branding execution.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 3. SERVICES PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold text-[#36D17C] uppercase tracking-wider">
              Comprehensive Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7F5] mt-1 tracking-tight">
              Services Designed for Real Market Impact
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#36D17C] hover:text-[#2EB86B] transition-colors self-start md:self-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Responsive Bento Grid of Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 6).map((service, idx) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-[#141A17] border border-[#1B2921] hover:border-[#36D17C]/50 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#10251B] border border-[#36D17C]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#F5F7F5] group-hover:text-[#36D17C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#A4B0A8] mt-2 leading-relaxed">
                    {service.tagline}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#1C2C22] flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="text-xs font-semibold text-[#36D17C] hover:text-[#2EB86B] flex items-center gap-1.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenEnquiry(service.title, 'service')}
                  className="text-xs text-[#A4B0A8] hover:text-[#F5F7F5]"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 4. FEATURED SMARTPHONES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#36D17C] uppercase tracking-wider">
              <span>Mobile Catalogue</span>
              <span className="text-[#A4B0A8]">&middot;</span>
              <span className="text-[#A4B0A8]">Delhi Trade Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7F5] mt-1 tracking-tight">
              Featured Smartphones
            </h2>
            <p className="text-sm text-[#A4B0A8] mt-2 max-w-xl">
              Authentic model catalogue with verified specs. Contact our trade desk for live distributor availability and current commercial pricing.
            </p>
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#141A17] hover:bg-[#1B2921] border border-[#1E3528] text-sm font-semibold text-[#F5F7F5] hover:text-[#36D17C] transition-colors self-start md:self-auto"
          >
            <span>View All 10 Models</span>
            <ArrowRight className="w-4 h-4 text-[#36D17C]" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPhones.map((phone) => {
            const isSaved = wishlistIds.includes(phone.id);
            return (
              <div
                key={phone.id}
                className="rounded-2xl bg-[#141A17] border border-[#1B2921] p-5 flex flex-col justify-between hover:border-[#36D17C]/50 transition-all group"
              >
                <div>
                  {/* Top Phone Visual Display with 3D Studio Image */}
                  <div className="relative">
                    <Phone3DDisplay product={phone} size="md" allowToggle3D={true} />
                    
                    {/* Wishlist toggle button */}
                    <button
                      onClick={() => onToggleWishlist(phone.id)}
                      className={`absolute top-3 right-3 p-2 rounded-lg border backdrop-blur-md transition-colors ${
                        isSaved
                          ? 'bg-[#36D17C] text-[#080D0B] border-[#36D17C]'
                          : 'bg-[#080D0B]/80 text-[#A4B0A8] hover:text-[#36D17C] border-[#1B2921]'
                      }`}
                      aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </button>
                  </div>

                  {/* Product Metadata */}
                  <div className="mt-4 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-[#36D17C] font-semibold">{phone.brand}</span>
                      <span className="text-[#A4B0A8] text-[11px] font-mono">{phone.availability}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#F5F7F5] group-hover:text-[#36D17C] transition-colors">
                      {phone.name}
                    </h3>
                    <p className="text-xs text-[#A4B0A8] line-clamp-2 leading-relaxed">
                      {phone.shortDescription}
                    </p>
                  </div>

                  {/* Verified Spec Points */}
                  <div className="mt-3 pt-3 border-t border-[#1C2C22] grid grid-cols-2 gap-2 text-[11px] text-[#A4B0A8]">
                    <div>
                      <span className="text-[#55645B] block">Processor</span>
                      <span className="text-[#F5F7F5] font-medium truncate block font-mono">
                        {phone.specs.processor.split(' ')[0]}
                      </span>
                    </div>
                    <div>
                      <span className="text-[#55645B] block">Camera</span>
                      <span className="text-[#F5F7F5] font-medium truncate block font-mono">
                        {phone.specs.rearCamera.split('+')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA Row: Price & Actions */}
                <div className="mt-5 pt-3 border-t border-[#1C2C22] flex items-center justify-between gap-2">
                  <div className="text-xs font-mono">
                    <span className="text-[#55645B] block text-[10px]">Price Status</span>
                    <span className="text-[#F5F7F5] font-semibold">{phone.priceDisplay}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onNavigate('product-detail', phone.id)}
                      className="px-3 py-1.5 rounded-lg border border-[#1E3528] bg-[#0E1511] hover:bg-[#141A17] text-xs font-medium text-[#F5F7F5] hover:text-[#36D17C] transition-colors flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onOpenEnquiry(`${phone.name} (Price & Availability)`, 'phone')}
                      className="px-3 py-1.5 rounded-lg bg-[#36D17C] hover:bg-[#2EB86B] text-[#080D0B] text-xs font-bold transition-colors"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>


      {/* 5. PORTFOLIO PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-semibold text-[#36D17C] uppercase tracking-wider">
              Selected Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7F5] mt-1 tracking-tight">
              Featured Concepts &amp; Campaigns
            </h2>
            <p className="text-sm text-[#A4B0A8] mt-2 max-w-xl">
              Demonstration projects modeling mobile commerce showcases, performance marketing funnels, and brand identity systems.
            </p>
          </div>

          <button
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#36D17C] hover:text-[#2EB86B] transition-colors"
          >
            <span>View Full Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#141A17] border border-[#1B2921] p-6 flex flex-col justify-between hover:border-[#36D17C]/40 transition-all group"
            >
              <div className="space-y-4">
                {/* Concept Label & Category */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded bg-[#10251B] border border-[#36D17C]/30 text-[#36D17C] text-[10px] font-semibold tracking-wider uppercase">
                    Concept Project
                  </span>
                  <span className="text-[#A4B0A8] font-mono text-[11px]">{project.category}</span>
                </div>

                <h3 className="text-lg font-bold text-[#F5F7F5] group-hover:text-[#36D17C] transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-[#A4B0A8] leading-relaxed">
                  {project.overview}
                </p>

                <div className="pt-2">
                  <span className="text-[11px] text-[#55645B] block font-mono">Core Solution:</span>
                  <p className="text-xs text-[#D8E0DA] mt-0.5 line-clamp-2">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-[#1C2C22] flex items-center justify-between">
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="text-xs font-semibold text-[#36D17C] hover:underline flex items-center gap-1"
                >
                  <span>Explore Case Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 6. ABOUT FOUNDERS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#10251B] via-[#0E1C15] to-[#09120D] border border-[#1E3528] p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold text-[#36D17C] uppercase tracking-wider">
                Founder Background &amp; Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F5] tracking-tight">
                “Long before BROOTS MEDIA PVT LTD had a website, it had a reputation.”
              </h2>
              <p className="text-sm sm:text-base text-[#A4B0A8] leading-relaxed">
                JOHN ABEL AND BHAWNA, our founders, have spent more than 8 years in Delhi's mobile business — from understanding every new launch to knowing exactly which phone fits which customer and budget. Today, BROOTS MEDIA brings that practical knowledge into creative marketing, advertising, and digital experiences.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-2.5 rounded-lg bg-[#36D17C] text-[#080D0B] font-bold text-xs hover:bg-[#2EB86B] transition-colors"
                >
                  Read Our Full Story
                </button>
                <span className="text-xs text-[#A4B0A8]">
                  Values: Trust &middot; Transparency &middot; Customer Understanding
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#080D0B]/70 rounded-2xl border border-[#1B2921] p-6 text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#10251B] border border-[#36D17C]/40 flex items-center justify-center mx-auto text-[#36D17C]">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <p className="text-xl font-bold font-mono text-[#36D17C]">8+ Years</p>
              <p className="text-xs text-[#F5F7F5] font-semibold">Delhi Mobile Trade Experience</p>
              <p className="text-[11px] text-[#A4B0A8]">
                Direct market grounding that informs real product positioning and buyer trust.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* 7. CONTACT CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0F1612] border border-[#1E3528] p-8 sm:p-12 text-center relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="text-xs font-semibold text-[#36D17C] uppercase tracking-wider">
              Start The Conversation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7F5] tracking-tight">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-sm text-[#A4B0A8] leading-relaxed">
              Whether you need to scale digital marketing campaigns, build an authoritative web presence, or source verified smartphone models, our founders are ready to speak with you.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#36D17C] hover:bg-[#2EB86B] text-[#080D0B] font-bold text-sm tracking-wide transition-all shadow-lg shadow-[#36D17C]/20"
              >
                Contact Our Team
              </button>

              <a
                href="tel:8929103610"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#141A17] hover:bg-[#1B2921] border border-[#1E3528] text-[#F5F7F5] hover:text-[#36D17C] font-semibold text-sm transition-all flex items-center justify-center gap-2 font-mono"
              >
                <Phone className="w-4 h-4 text-[#36D17C]" />
                <span>Call 8929103610</span>
              </a>
            </div>

            <div className="text-xs text-[#55645B] pt-2">
              Primary Email: <a href="mailto:JOHN@BROOTSMEDIA.COM" className="text-[#A4B0A8] hover:text-[#36D17C] font-mono">JOHN@BROOTSMEDIA.COM</a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
