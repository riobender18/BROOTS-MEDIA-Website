import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../../data/portfolio';
import { PortfolioProject, PageType } from '../../types';
import {
  ArrowRight,
  X,
  CheckCircle2,
  Phone,
  Sparkles,
  Layers,
  Globe,
  Share2,
  Smartphone,
  ExternalLink,
} from 'lucide-react';

interface PortfolioPageProps {
  onOpenEnquiry: (subject: string, type: 'service') => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<PortfolioProject | null>(null);

  const categories = [
    'All',
    'Mobile Commerce',
    'Web Design & UI',
    'Brand Identity',
    'Social Media',
    'Digital Marketing',
  ];

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-[#080D0B] text-[#F5F7F5] py-14 space-y-16">
      
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#36D17C] uppercase tracking-wider font-mono">
            <span>Creative Showcase &amp; Architecture</span>
            <span className="text-[#A4B0A8]">&middot;</span>
            <span>BROOTS MEDIA</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F7F5] tracking-tight">
            Our Work &amp; Concept Systems
          </h1>

          <p className="text-sm sm:text-base text-[#A4B0A8] leading-relaxed">
            A curated showcase of digital marketing frameworks, high-performance web systems, brand identity guidelines, and mobile commerce experiences engineered by BROOTS MEDIA PVT LTD.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-[#141A17] pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-[#36D17C] text-[#080D0B] font-bold shadow-sm shadow-[#36D17C]/20'
                  : 'bg-[#141A17] text-[#A4B0A8] hover:text-[#F5F7F5] hover:bg-[#1B2921] border border-[#1B2921]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-[#0F1612] border border-[#1E3528] overflow-hidden flex flex-col justify-between hover:border-[#36D17C]/50 transition-all duration-200 group"
            >
              {/* Card Visual Header / Mockup Banner */}
              <div className="relative h-48 bg-gradient-to-br from-[#10251B] via-[#141A17] to-[#080D0B] p-6 flex flex-col justify-between border-b border-[#1E3528] overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded bg-[#080D0B]/80 backdrop-blur-md border border-[#36D17C]/40 text-[#36D17C] text-[10px] font-bold tracking-wider uppercase font-mono">
                    Concept Project
                  </span>
                  <span className="text-[11px] font-mono text-[#A4B0A8] bg-[#080D0B]/70 px-2 py-0.5 rounded">
                    {project.category}
                  </span>
                </div>

                {/* Abstract Stylized Graphic Grid */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#36D17C_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="z-10 mt-auto">
                  <span className="text-xs font-mono text-[#36D17C]">{project.tag}</span>
                  <h3 className="text-lg font-bold text-[#F5F7F5] group-hover:text-[#36D17C] transition-colors leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#55645B] block">Objective</span>
                    <p className="text-xs text-[#D8E0DA] mt-0.5 leading-relaxed">
                      {project.objective}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono text-[#55645B] block">Architecture &amp; Overview</span>
                    <p className="text-xs text-[#A4B0A8] mt-0.5 line-clamp-3 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1C2C22] flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-[#36D17C] hover:text-[#2EB86B] flex items-center gap-1.5"
                  >
                    <span>View Concept Breakdown</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenEnquiry(`Strategy inquiry inspired by ${project.title}`, 'service')}
                    className="text-[11px] text-[#A4B0A8] hover:text-[#F5F7F5]"
                  >
                    Discuss Scope
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0F1612] border border-[#1E3528] rounded-3xl p-6 sm:p-8 text-[#F5F7F5] max-h-[90vh] overflow-y-auto shadow-2xl">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#A4B0A8] hover:text-[#F5F7F5] hover:bg-[#141A17]"
              aria-label="Close Project Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-[#10251B] border border-[#36D17C]/40 text-[#36D17C] text-[10px] font-bold uppercase font-mono">
                    Concept Project
                  </span>
                  <span className="text-xs text-[#A4B0A8] font-mono">&middot; {activeModalProject.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7F5]">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-[#36D17C] font-mono mt-1">
                  Tag: {activeModalProject.tag}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#A4B0A8] leading-relaxed">
                <div>
                  <h4 className="text-xs font-mono font-bold text-[#F5F7F5] uppercase tracking-wider mb-1">
                    Project Objective
                  </h4>
                  <p className="p-3.5 rounded-xl bg-[#141A17] border border-[#1B2921] text-[#D8E0DA]">
                    {activeModalProject.objective}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-[#F5F7F5] uppercase tracking-wider mb-1">
                    Case Background &amp; Market Need
                  </h4>
                  <p>{activeModalProject.overview}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-[#F5F7F5] uppercase tracking-wider mb-1">
                    Proposed Solution Architecture
                  </h4>
                  <p>{activeModalProject.solution}</p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold text-[#F5F7F5] uppercase tracking-wider mb-2">
                    Key Deliverables &amp; Artifacts
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalProject.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-[#141A17] border border-[#1B2921] text-xs text-[#F5F7F5]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#36D17C] shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1C2C22] flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-[11px] text-[#55645B]">
                  BROOTS MEDIA PVT LTD &middot; Verified Design Standard
                </p>
                <button
                  onClick={() => {
                    const title = activeModalProject.title;
                    setActiveModalProject(null);
                    onOpenEnquiry(`Consultation regarding: ${title}`, 'service');
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#36D17C] hover:bg-[#2EB86B] text-[#080D0B] font-bold text-xs"
                >
                  Inquire on Similar Solution
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
