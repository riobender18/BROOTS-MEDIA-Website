import React from 'react';
import { Phone, Mail } from 'lucide-react';

interface AnnouncementBarProps {
  onContactClick?: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onContactClick }) => {
  return (
    <aside aria-label="Announcement" className="w-full bg-[#10251B] border-b border-[#36D17C]/20 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-[#F5F7F5] font-medium text-center sm:text-left">
          <span className="w-1.5 h-1.5 rounded-full bg-[#36D17C] inline-block" />
          <span>Building Better Digital Experiences with BROOTS MEDIA</span>
        </div>

        <div className="flex items-center gap-4 text-[#A4B0A8] text-[11px]">
          <a
            href="tel:8929103610"
            className="inline-flex items-center gap-1.5 hover:text-[#36D17C] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#36D17C]" />
            <span className="font-mono tabular-nums">8929103610</span>
          </a>
          <span className="text-[#1E3528]" aria-hidden="true">|</span>
          <a
            href="mailto:JOHN@BROOTSMEDIA.COM"
            className="inline-flex items-center gap-1.5 hover:text-[#36D17C] transition-colors"
          >
            <Mail className="w-3 h-3 text-[#36D17C]" />
            <span className="font-mono">JOHN@BROOTSMEDIA.COM</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
