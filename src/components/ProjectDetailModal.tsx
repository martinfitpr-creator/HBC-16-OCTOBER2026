import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Building, Compass, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';
import { projectsData } from '../data/projectsData';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject?: (project: ProjectItem) => void;
  onRequestQuote?: (projectName: string) => void;
  onRequestQuoteForProject?: (project: ProjectItem) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onRequestQuote,
  onRequestQuoteForProject
}) => {
  // Lock body scroll while project modal is open
  useEffect(() => {
    if (project) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [project]);

  if (!project) return null;

  // Find related projects (same category or nearby, excluding current)
  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id && (p.category === project.category || p.province === project.province))
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-4 sm:my-6 max-h-[94dvh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center bg-neutral-900/85 hover:bg-neutral-900 text-white rounded-full backdrop-blur-md transition shadow-lg cursor-pointer active:scale-95"
          aria-label="Close project view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1">
          {/* Header Section */}
          {project.imageUrl ? (
            <div className="relative h-72 sm:h-96 w-full bg-neutral-900 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-600/90 text-white text-xs font-bold uppercase tracking-wider mb-2">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{project.categoryLabel}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  {project.name}
                </h2>
                {project.subtitle && (
                  <p className="text-sm sm:text-base text-neutral-300 mt-1 font-medium">
                    {project.subtitle}
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className="p-6 sm:p-8 bg-neutral-900 text-white border-b border-neutral-800 pr-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-orange-600 text-white text-xs font-bold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>{project.categoryLabel}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                {project.name}
              </h2>
              {project.subtitle && (
                <p className="text-sm sm:text-base text-neutral-300 mt-2 font-medium">
                  {project.subtitle}
                </p>
              )}
            </div>
          )}

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Metadata Grid (Displays only verified data; omitting missing fields) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-neutral-50 rounded-xl border border-neutral-200">
              <div className="space-y-1">
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  <span>Location</span>
                </div>
                <div className="text-sm font-bold text-neutral-900">{project.location}</div>
              </div>

              {project.completionPeriod && (
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-600" />
                    <span>Duration / Period</span>
                  </div>
                  <div className="text-sm font-bold text-neutral-900">{project.completionPeriod}</div>
                </div>
              )}

              {project.client && (
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-orange-600" />
                    <span>Client</span>
                  </div>
                  <div className="text-sm font-bold text-neutral-900">{project.client}</div>
                </div>
              )}

              {project.consultant && (
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-orange-600" />
                    <span>Consultant</span>
                  </div>
                  <div className="text-sm font-bold text-neutral-900">{project.consultant}</div>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-orange-600 rounded-full"></span>
                Project Overview & Execution Context
              </h3>
              <p className="text-neutral-700 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Scope Highlights */}
            {project.scopeHighlights && project.scopeHighlights.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-orange-600 rounded-full"></span>
                  Engineering & Construction Scope Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.scopeHighlights.map((scope, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3.5 rounded-lg bg-neutral-50 border border-neutral-200 text-neutral-800 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>{scope}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery (if available) */}
            {project.galleryUrls && project.galleryUrls.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-neutral-900 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-orange-600 rounded-full"></span>
                  Site Progress & Engineering Photography
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {project.galleryUrls.map((imgUrl, idx) => (
                    <div key={idx} className="relative h-36 rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100 group">
                      <img
                        src={imgUrl}
                        alt={`${project.name} site view ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Call to Action Bar */}
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-6 rounded-xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-neutral-700">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs uppercase tracking-wider text-orange-400 font-bold">Turnkey Project Delivery</div>
                <h4 className="text-lg font-bold text-white">Need similar capability for your infrastructure tender?</h4>
                <p className="text-xs text-neutral-300">HBC Construction combines technical expertise with CIDB Level 8/7 delivery.</p>
              </div>
              <button
                onClick={() => {
                  onRequestQuoteForProject(project);
                }}
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow transition text-sm flex-shrink-0 inline-flex items-center gap-2"
              >
                <span>Request Quotation / Tender</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-neutral-200">
                <h4 className="text-base font-bold text-neutral-900">
                  Related Projects in {project.categoryLabel}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedProjects.map((rel) => (
                    <div
                      key={rel.id}
                      onClick={() => onSelectProject(rel)}
                      className="group cursor-pointer rounded-xl border border-neutral-200 overflow-hidden bg-neutral-50 hover:bg-white hover:border-orange-500/50 transition shadow-xs hover:shadow-md"
                    >
                      {rel.imageUrl ? (
                        <div className="h-28 overflow-hidden relative bg-neutral-900">
                          <img
                            src={rel.imageUrl}
                            alt={rel.name}
                            className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                          />
                          <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-neutral-900/80 text-white text-[10px] font-bold rounded">
                            {rel.category}
                          </span>
                        </div>
                      ) : null}
                      <div className="p-3">
                        {!rel.imageUrl && (
                          <span className="inline-block px-1.5 py-0.5 bg-neutral-200 text-neutral-700 text-[10px] font-bold rounded mb-1.5">
                            {rel.category}
                          </span>
                        )}
                        <h5 className="font-bold text-xs text-neutral-900 group-hover:text-orange-600 transition line-clamp-1">
                          {rel.name}
                        </h5>
                        <p className="text-[11px] text-neutral-500 mt-0.5">{rel.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
