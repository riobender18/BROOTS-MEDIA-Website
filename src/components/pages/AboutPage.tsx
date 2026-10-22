import React from 'react';
import { PageType } from '../../types';
import {
  ShieldCheck,
  Smartphone,
  Eye,
  Target,
  HeartHandshake,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  Users,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <div className="w-full bg-[#080D0B] text-[#F5F7F5] py-14 space-y-16">
      
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#36D17C] uppercase tracking-wider font-mono">
            <span>Corporate Heritage &amp; Foundations</span>
            <span className="text-[#A4B0A8]">&middot;</span>
            <span>BROOTS MEDIA PVT LTD</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7F5] tracking-tight text-balance">
            Rooted in Real Trade. Engineered for Digital Growth.
          </h1>

          <p className="text-base sm:text-lg text-[#A4B0A8] leading-relaxed">
            Discover the origins, leadership, and operational philosophy behind BROOTS MEDIA PRIVATE LIMITED.
          </p>
        </div>

        {/* 8+ Years Prominent Banner */}
        <div className="mt-8 rounded-2xl bg-[#10251B] border border-[#36D17C]/40 p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-[#36D17C]/5">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#080D0B] border border-[#36D17C]/30 flex items-center justify-center text-[#36D17C] shrink-0">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-extrabold text-[#36D17C] font-mono block">
                8+ Years of Mobile Trade Experience
              </span>
              <p className="text-xs sm:text-sm text-[#A4B0A8] mt-0.5">
                Hands-on commercial grounding in Delhi's technology markets informing our modern digital agency.
              </p>
            </div>
          </div>

          <div className="text-xs text-[#55645B] font-mono shrink-0 text-center md:text-right">
            <span>Entity: BROOTS MEDIA PVT LTD</span>
          </div>
        </div>
      </section>

      {/* Central Story: Exact Founder Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0F1612] border border-[#1E3528] p-8 sm:p-12 relative overflow-hidden">
          
          <div className="max-w-4xl space-y-6">
            <span className="text-xs font-semibold text-[#36D17C] uppercase tracking-wider font-mono">
              Our Story
            </span>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#F5F7F5] tracking-tight leading-snug">
              “Long before BROOTS MEDIA PVT LTD had a website, it had a reputation.”
            </blockquote>

            <div className="space-y-4 text-sm sm:text-base text-[#A4B0A8] leading-relaxed">
              <p>
                <strong className="text-[#F5F7F5]">JOHN ABEL AND BHAWNA</strong>, our founders, have spent more than 8 years in Delhi's mobile business — from understanding every new launch to knowing exactly which phone fits which customer and budget.
              </p>

              <p>
                That hands-on experience has shaped our understanding of customers, technology, product positioning, and the power of trust. Today, BROOTS MEDIA brings that practical knowledge into a broader digital world, combining mobile-industry insight with creative marketing, advertising, and digital experiences.
              </p>

              <p className="text-[#D8E0DA]">
                Our approach is simple: understand the audience, communicate honestly, create meaningful experiences, and help businesses build stronger connections with customers.
              </p>
            </div>

            <div className="pt-4 border-t border-[#1C2C22] flex flex-wrap items-center gap-6 text-xs text-[#A4B0A8]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#36D17C]" />
                <span>Delhi Commercial Market Grounding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#36D17C]" />
                <span>Honest &amp; Transparent Communications</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#36D17C]" />
                <span>Zero Fabricated Claims Policy</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Meet the Founders */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-semibold text-[#36D17C] uppercase tracking-wider font-mono">
            Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F5] mt-1 tracking-tight">
            Meet the Founders
          </h2>
          <p className="text-xs sm:text-sm text-[#A4B0A8] mt-1 max-w-xl">
            Active, hands-on founders driving both the commercial mobile trade and digital marketing disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* John Abel */}
          <div className="rounded-2xl bg-[#141A17] border border-[#1B2921] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#10251B] border border-[#36D17C]/40 flex items-center justify-center text-[#36D17C] text-xl font-bold font-mono">
                JA
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F5F7F5]">JOHN ABEL</h3>
                <p className="text-xs text-[#36D17C] font-mono">Co-Founder &amp; Managing Director</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A4B0A8] leading-relaxed">
              With 8+ years immersed in Delhi's consumer electronics and mobile retail corridors, John oversees product sourcing, client growth strategies, and enterprise partnerships. His focus ensures that every digital campaign is rooted in actual consumer purchase motivation rather than theoretical assumptions.
            </p>

            <div className="pt-2 text-xs font-mono text-[#A4B0A8] space-y-1">
              <p>Email: <a href="mailto:JOHN@BROOTSMEDIA.COM" className="text-[#36D17C] hover:underline">JOHN@BROOTSMEDIA.COM</a></p>
              <p>Phone: <a href="tel:8929103610" className="text-[#36D17C] hover:underline">8929103610</a></p>
            </div>
          </div>

          {/* Bhawna */}
          <div className="rounded-2xl bg-[#141A17] border border-[#1B2921] p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#10251B] border border-[#36D17C]/40 flex items-center justify-center text-[#36D17C] text-xl font-bold font-mono">
                BH
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#F5F7F5]">BHAWNA</h3>
                <p className="text-xs text-[#36D17C] font-mono">Co-Founder &amp; Creative Operations</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A4B0A8] leading-relaxed">
              Leading brand strategy, creative campaign development, and digital marketing execution, Bhawna translates technical smartphone features and business offerings into clear, resonant visual narratives that establish long-term customer affinity and trust.
            </p>

            <div className="pt-2 text-xs font-mono text-[#A4B0A8] space-y-1">
              <p>Focus: Creative Strategy &amp; Audience Research</p>
              <p>Operations: Delhi Mobile Trade Insight</p>
            </div>
          </div>

        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Mission */}
          <div className="rounded-2xl bg-[#0F1612] border border-[#1E3528] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#10251B] border border-[#36D17C]/30 flex items-center justify-center text-[#36D17C]">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#F5F7F5]">Our Mission</h3>
            <p className="text-xs sm:text-sm text-[#A4B0A8] leading-relaxed">
              Help businesses communicate clearly, reach the right audiences, and create meaningful digital experiences.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl bg-[#0F1612] border border-[#1E3528] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#10251B] border border-[#36D17C]/30 flex items-center justify-center text-[#36D17C]">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#F5F7F5]">Our Vision</h3>
            <p className="text-xs sm:text-sm text-[#A4B0A8] leading-relaxed">
              Build a trusted brand that connects marketing creativity with real-world customer understanding.
            </p>
          </div>

          {/* Values */}
          <div className="rounded-2xl bg-[#0F1612] border border-[#1E3528] p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#10251B] border border-[#36D17C]/30 flex items-center justify-center text-[#36D17C]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#F5F7F5]">Our Values</h3>
            <p className="text-xs sm:text-sm text-[#A4B0A8] leading-relaxed">
              Trust, transparency, creativity, customer understanding, and continuous improvement.
            </p>
          </div>

        </div>
      </section>

      {/* Trade Distinction Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-xl bg-[#141A17] border border-[#1B2921] text-xs text-[#A4B0A8] leading-relaxed">
          <strong className="text-[#F5F7F5]">Corporate Note:</strong> The 8+ years of experience referenced across this site represents the founders' direct, verifiable tenure in Delhi's consumer electronics and mobile device marketplace prior to and continuing through the incorporation of BROOTS MEDIA PVT LTD.
        </div>
      </section>

    </div>
  );
};
